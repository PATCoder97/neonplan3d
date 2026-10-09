// WebKit acceptance smoke test. Install a Playwright WebKit build, then set WEBKIT_EXECUTABLE when needed.
import { spawn } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { webkit } from "playwright-core";

const port = Number(process.env.HONEYCOMB_PORT ?? 4186);
const base = `http://127.0.0.1:${port}`;
const matrixPath = resolve("../docs/assets/neon-honeycomb/browser-matrix.json");
const record = process.argv.includes("--record");
const executablePath = process.env.WEBKIT_EXECUTABLE;

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const fixture = spawn(process.execPath, ["honeycomb-gallery.mjs", "--serve"], {
  cwd: process.cwd(), env: { ...process.env, HONEYCOMB_PORT: String(port) }, stdio: ["ignore", "pipe", "pipe"],
});
let fixtureLog = "";
fixture.stdout.on("data", (chunk) => (fixtureLog += chunk));
fixture.stderr.on("data", (chunk) => (fixtureLog += chunk));

let browser;
try {
  for (let i = 0; i < 80; i++) {
    try { if ((await fetch(base)).ok) break; } catch {}
    if (i === 79) throw new Error(`Fixture did not start at ${base}`);
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  browser = await webkit.launch({ headless: true, ...(executablePath ? { executablePath } : {}) });
  const page = await browser.newPage({ viewport: { width: 900, height: 700 } });
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
  const open = async (query) => {
    await page.goto(`${base}/?single&${query}`, { waitUntil: "domcontentloaded" });
    await page.waitForFunction(() => !!document.querySelector("honeycomb-gallery")?.shadowRoot?.querySelector("neon-honeycomb")?.shadowRoot?.querySelector("[role=dialog]"));
  };

  await open("count=6&width=800&height=600&pause=100");
  const geometry = await page.evaluate(() => {
    const menu = document.querySelector("honeycomb-gallery").shadowRoot.querySelector("neon-honeycomb");
    const root = menu.shadowRoot;
    const centerRect = root.querySelector("button.center").getBoundingClientRect();
    const center = { x: centerRect.left + centerRect.width / 2, y: centerRect.top + centerRect.height / 2 };
    return {
      role: root.querySelector("[role=dialog]").getAttribute("role"),
      nodes: root.querySelectorAll("*").length,
      cells: [...root.querySelectorAll("button.outer")].map((button) => {
        const rect = button.getBoundingClientRect();
        return { x: rect.left + rect.width / 2 - center.x, y: rect.top + rect.height / 2 - center.y, width: rect.width, height: rect.height };
      }),
    };
  });
  assert(geometry.role === "dialog" && geometry.cells.length === 6, "WebKit did not render the six-cell dialog");
  const expected = Array.from({ length: 6 }, (_, i) => ({ x: Math.cos((-90 + i * 60) * Math.PI / 180) * 92, y: Math.sin((-90 + i * 60) * Math.PI / 180) * 92 }));
  geometry.cells.forEach((cell, i) => {
    assert(Math.hypot(cell.x - expected[i].x, cell.y - expected[i].y) <= 2, `WebKit cell ${i} misses geometry tolerance`);
    assert(cell.width >= 48 && cell.height >= 48, `WebKit cell ${i} is below 48 px`);
  });

  const interaction = await page.evaluate(async () => {
    const menu = document.querySelector("honeycomb-gallery").shadowRoot.querySelector("neon-honeycomb");
    const root = menu.shadowRoot;
    const dialog = root.querySelector("[role=dialog]");
    root.querySelector("button.center").focus();
    dialog.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight", bubbles: true, composed: true }));
    const arrow = root.activeElement?.title;
    dialog.dispatchEvent(new KeyboardEvent("keydown", { key: "Tab", bubbles: true, composed: true }));
    const tab = root.activeElement?.title;
    [...root.querySelectorAll("button")].find((button) => button.title === "Next")?.click();
    await menu.updateComplete;
    return { arrow, tab, page: root.querySelector("[role=dialog]").getAttribute("aria-label") };
  });
  assert(interaction.arrow === "Details" && interaction.tab && interaction.page === "Second page", "WebKit keyboard or paging check failed");

  await open("count=6&width=600&height=600&animate&low");
  const performance = await page.evaluate(async () => {
    const menu = document.querySelector("honeycomb-gallery").shadowRoot.querySelector("neon-honeycomb");
    const outer = [...menu.shadowRoot.querySelectorAll("button.outer")];
    const motion = outer.map((cell) => {
      const style = getComputedStyle(cell);
      return { duration: parseFloat(style.animationDuration) * 1000, delay: parseFloat(style.animationDelay) * 1000 };
    });
    const start = performance.now();
    let frames = 0;
    await new Promise((resolve) => {
      const frame = (now) => { frames++; if (now - start >= 1200) resolve(); else requestAnimationFrame(frame); };
      requestAnimationFrame(frame);
    });
    const elapsed = performance.now() - start;
    return { motion, frames, elapsed, fps: frames / elapsed * 1000 };
  });
  performance.motion.forEach((item, i) => {
    assert(Math.abs(item.duration - 160) <= 1 && Math.abs(item.delay - i * 45) <= 1, `WebKit motion token ${i} differs`);
  });
  // WPE headless uses a software/offscreen frame clock and is not a device FPS benchmark.
  assert(performance.fps >= 10, `WebKit headless frame clock stalled: ${performance.fps.toFixed(1)} FPS`);

  await open("count=3&width=600&height=600&pause=100&low&pad");
  const box = await page.evaluate(() => {
    const menu = document.querySelector("honeycomb-gallery").shadowRoot.querySelector("neon-honeycomb");
    const pad = menu.shadowRoot.querySelector("neon-pad");
    const rect = pad.getBoundingClientRect();
    window.__webkitPad = [];
    window.__webkitPadActions = 0;
    menu.addEventListener("neon-pad-change", (event) => window.__webkitPad.push(event.detail));
    menu.addEventListener("neon-action", () => window.__webkitPadActions++);
    return { x: rect.left + rect.width / 2, top: rect.top + 2, bottom: rect.bottom - 2 };
  });
  await page.mouse.move(box.x, box.bottom);
  await page.mouse.down();
  await page.mouse.move(box.x, box.top, { steps: 20 });
  await page.mouse.up();
  const pad = await page.evaluate(() => window.__webkitPad);
  assert(pad.length >= 2 && pad.at(-1).final && pad.at(-1).value >= 90, "WebKit pad lost move/final events");
  const padActions = await page.evaluate(() => {
    const menu = document.querySelector("honeycomb-gallery").shadowRoot.querySelector("neon-honeycomb");
    menu.shadowRoot.querySelector("button.center").click();
    return window.__webkitPadActions;
  });
  assert(padActions === 1, "WebKit centre action disappeared when a pad was present");
  assert(errors.length === 0, `WebKit console errors: ${errors.join(" | ")}`);

  const result = {
    engine: "webkit",
    geometry: { cells: geometry.cells.length, nodes: geometry.nodes, tolerancePx: 2 },
    interaction,
    fps: Math.round(performance.fps * 10) / 10,
    padEvents: pad.length,
    padCenterActions: padActions,
    errors,
  };
  if (record) {
    const matrix = existsSync(matrixPath) ? JSON.parse(readFileSync(matrixPath, "utf8")) : { engines: {} };
    matrix.engines.webkit = result;
    writeFileSync(matrixPath, `${JSON.stringify(matrix, null, 2)}\n`);
  }
  console.log(`ok  Honeycomb WebKit: ${result.fps} FPS; ${geometry.nodes} DOM nodes; keyboard, paging and pad passed`);
} catch (error) {
  if (fixtureLog) console.error(fixtureLog.trim());
  throw error;
} finally {
  if (browser) await browser.close();
  fixture.kill("SIGTERM");
}
