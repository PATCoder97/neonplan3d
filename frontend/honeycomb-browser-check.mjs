// Browser-level acceptance checks and deterministic golden-frame generator for Neon Honeycomb.
import { createHash } from "node:crypto";
import { spawn } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import puppeteer from "puppeteer-core";

const update = process.argv.includes("--update");
const record = process.argv.includes("--record") || update;
const port = Number(process.env.HONEYCOMB_PORT ?? 4184);
const base = `http://127.0.0.1:${port}`;
const goldenDir = resolve("../docs/assets/neon-honeycomb/golden");
const reportPath = resolve("../docs/assets/neon-honeycomb/browser-report.json");
const matrixPath = resolve("../docs/assets/neon-honeycomb/browser-matrix.json");
const temporary = join(tmpdir(), `neon-honeycomb-browser-${process.pid}`);
const outputDir = update ? goldenDir : temporary;
mkdirSync(outputDir, { recursive: true });

function browserExecutable() {
  const candidates = [
    process.env.BROWSER_EXECUTABLE,
    process.env.PUPPETEER_EXECUTABLE_PATH,
    "/usr/bin/google-chrome",
    "/usr/bin/google-chrome-stable",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
  ].filter(Boolean);
  for (const candidate of candidates) if (existsSync(candidate)) return candidate;
  const cache = join(process.env.HOME ?? "", ".cache/ms-playwright");
  if (existsSync(cache)) {
    for (const dir of readdirSync(cache).filter((name) => name.startsWith("chromium-")).sort().reverse()) {
      const candidate = join(cache, dir, "chrome-linux64/chrome");
      if (existsSync(candidate)) return candidate;
    }
  }
  throw new Error("No Chromium executable found. Set BROWSER_EXECUTABLE.");
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function waitForServer() {
  for (let i = 0; i < 80; i++) {
    try {
      const response = await fetch(base);
      if (response.ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error(`Fixture did not start at ${base}`);
}

const fixture = spawn(process.execPath, ["honeycomb-gallery.mjs", "--serve"], {
  cwd: process.cwd(),
  env: { ...process.env, HONEYCOMB_PORT: String(port) },
  stdio: ["ignore", "pipe", "pipe"],
});
let fixtureLog = "";
fixture.stdout.on("data", (chunk) => (fixtureLog += chunk));
fixture.stderr.on("data", (chunk) => (fixtureLog += chunk));

let browser;
try {
  await waitForServer();
  const executablePath = browserExecutable();
  const firefox = executablePath.toLowerCase().includes("firefox");
  browser = await puppeteer.launch({
    executablePath,
    ...(firefox ? { browser: "firefox", protocol: "webDriverBiDi" } : {}),
    headless: true,
    args: firefox ? ["-headless"] : ["--no-sandbox", "--no-proxy-server", "--disable-dev-shm-usage", "--disable-background-timer-throttling"],
  });
  const version = await browser.version();
  const errors = [];
  const page = await browser.newPage();
  const defaultUserAgent = await browser.userAgent();
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });

  const open = async (query, viewport = { width: 900, height: 700, deviceScaleFactor: 1 }) => {
    await page.setViewport(viewport);
    await page.goto(`${base}/?single&${query}`, { waitUntil: "domcontentloaded" });
    await page.waitForSelector("honeycomb-gallery");
    await page.waitForFunction(() => !!document.querySelector("honeycomb-gallery")?.shadowRoot?.querySelector("neon-honeycomb")?.shadowRoot?.querySelector("[role=dialog]"));
  };

  await open("count=6&width=800&height=600&pause=100");
  const geometry = await page.evaluate(() => {
    const gallery = document.querySelector("honeycomb-gallery");
    const stage = gallery.shadowRoot.querySelector(".stage");
    const menu = stage.querySelector("neon-honeycomb");
    const root = menu.shadowRoot;
    const centerRect = root.querySelector("button.center").getBoundingClientRect();
    const center = { x: centerRect.left + centerRect.width / 2, y: centerRect.top + centerRect.height / 2 };
    const cells = [...root.querySelectorAll("button.outer")].map((button) => {
      const rect = button.getBoundingClientRect();
      return { x: rect.left + rect.width / 2 - center.x, y: rect.top + rect.height / 2 - center.y, width: rect.width, height: rect.height };
    });
    return {
      stage: { width: stage.getBoundingClientRect().width, height: stage.getBoundingClientRect().height },
      role: root.querySelector("[role=dialog]")?.getAttribute("role"),
      cells,
      center: (() => { const rect = root.querySelector("button.center").getBoundingClientRect(); return { width: rect.width, height: rect.height }; })(),
      clipPath: getComputedStyle(root.querySelector(".hex-shape")).clipPath,
      nodes: root.querySelectorAll("*").length,
    };
  });
  assert(geometry.stage.width === 800 && geometry.stage.height === 600, "Desktop fixture is not exactly 800 x 600");
  assert(geometry.role === "dialog", "Honeycomb is not exposed as a dialog");
  assert(geometry.cells.length === 6, "Six-cell fixture did not render six outer cells");
  const expected = Array.from({ length: 6 }, (_, i) => {
    const angle = (-120 + i * 60) * Math.PI / 180;
    return { x: Math.cos(angle) * 66, y: Math.sin(angle) * 66 };
  });
  geometry.cells.forEach((cell, i) => {
    assert(Math.hypot(cell.x - expected[i].x, cell.y - expected[i].y) <= 2, `Cell ${i} misses golden geometry tolerance`);
    assert(Math.abs(cell.width - 64) <= 1 && Math.abs(cell.height - 72) <= 1, `Cell ${i} is not the reference-proportioned 64 x 72 px target`);
  });
  assert(Math.abs(geometry.center.width - 64) <= 1 && Math.abs(geometry.center.height - 72) <= 1, "Centre control does not match the 64 x 72 px outer cells");
  assert(geometry.clipPath.includes("50% 0px") && geometry.clipPath.includes("100% 25%"), "Cells are not point-up hexagons");

  const keyboard = await page.evaluate(async () => {
    const menu = document.querySelector("honeycomb-gallery").shadowRoot.querySelector("neon-honeycomb");
    const root = menu.shadowRoot;
    const first = root.querySelector("button.center");
    first.focus();
    const title = () => root.activeElement?.getAttribute("title") ?? root.activeElement?.tagName;
    const result = { start: title(), tab: "", shiftTab: "", right: "", closeEvents: 0 };
    root.querySelector("[role=dialog]").dispatchEvent(new KeyboardEvent("keydown", { key: "Tab", bubbles: true, composed: true }));
    result.tab = title();
    root.querySelector("[role=dialog]").dispatchEvent(new KeyboardEvent("keydown", { key: "Tab", shiftKey: true, bubbles: true, composed: true }));
    result.shiftTab = title();
    root.querySelector("[role=dialog]").dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight", bubbles: true, composed: true }));
    result.right = title();
    menu.addEventListener("close", () => result.closeEvents++);
    menu.requestClose(true);
    await Promise.resolve();
    return result;
  });
  assert(keyboard.start === "Living room" && keyboard.tab !== keyboard.start && keyboard.shiftTab === keyboard.start, "Focus trap does not cycle correctly");
  assert(keyboard.right !== keyboard.start, "Directional keyboard navigation did not move focus");
  assert(keyboard.closeEvents === 1, "Immediate close did not dispatch exactly once");

  await open("count=6&width=800&height=600&pause=100");
  const paging = await page.evaluate(async () => {
    const menu = document.querySelector("honeycomb-gallery").shadowRoot.querySelector("neon-honeycomb");
    const root = menu.shadowRoot;
    const before = root.querySelector("[role=dialog]").getAttribute("aria-label");
    [...root.querySelectorAll("button")].find((button) => button.title === "Next")?.click();
    await menu.updateComplete;
    return { before, after: root.querySelector("[role=dialog]").getAttribute("aria-label"), buttons: root.querySelectorAll("button").length };
  });
  assert(paging.before === "6 actions" && paging.after === "Second page" && paging.buttons === 4, "Page navigation failed or dispatched the wrong view");

  await open("count=6&width=800&height=600&animate");
  const motion = await page.evaluate(async () => {
    const stage = document.querySelector("honeycomb-gallery").shadowRoot.querySelector(".stage");
    const previous = stage.querySelector("neon-honeycomb");
    const menu = document.createElement("neon-honeycomb");
    menu.model = previous.model;
    menu.pausedAt = null;
    previous.remove();
    const start = performance.now();
    stage.append(menu);
    await menu.updateComplete;
    const outer = [...menu.shadowRoot.querySelectorAll("button.outer")];
    const computed = outer.map((cell) => {
      const style = getComputedStyle(cell);
      return { duration: parseFloat(style.animationDuration) * 1000, delay: parseFloat(style.animationDelay) * 1000 };
    });
    const ended = await Promise.race([
      Promise.all(outer.map((cell) => new Promise((resolve) => cell.addEventListener("animationend", () => resolve(performance.now() - start), { once: true })))),
      new Promise((_, reject) => setTimeout(() => reject(new Error("Animation timing events timed out")), 800)),
    ]);
    return { computed, ended };
  });
  assert(motion.computed.every((item) => Math.abs(item.duration - 160) <= 1), "Outer-cell duration is not 160 ms");
  motion.computed.forEach((item, i) => assert(Math.abs(item.delay - i * 45) <= 1, `Cell ${i} stagger is not 45 ms`));
  assert(Math.max(...motion.ended) <= 470, `Measured opening exceeded tolerance: ${Math.max(...motion.ended).toFixed(1)} ms`);
  for (let i = 1; i < motion.ended.length; i++) {
    const step = motion.ended[i] - motion.ended[i - 1];
    assert(firefox ? step >= 0 : Math.abs(step - 45) <= 20, `Measured stagger ${i} exceeded tolerance`);
  }

  let reducedDuration = null;
  if (!firefox) {
    await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
    await open("count=6&width=800&height=600&animate");
    reducedDuration = await page.evaluate(() => {
      const menu = document.querySelector("honeycomb-gallery").shadowRoot.querySelector("neon-honeycomb");
      return parseFloat(getComputedStyle(menu.shadowRoot.querySelector("button.outer")).animationDuration) * 1000;
    });
    assert(reducedDuration <= 100, "Reduced-motion animation exceeds 100 ms");
    await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "no-preference" }]);
  }

  await open("count=6&width=600&height=600&animate&low", { width: 700, height: 700, deviceScaleFactor: 1 });
  const performanceReport = await page.evaluate(async () => {
    const menu = document.querySelector("honeycomb-gallery").shadowRoot.querySelector("neon-honeycomb");
    const root = menu.shadowRoot;
    const started = performance.now();
    let frames = 0;
    await new Promise((resolve) => {
      const frame = (now) => {
        frames++;
        if (now - started >= 1200) resolve(); else requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    });
    const elapsed = performance.now() - started;
    return { nodes: root.querySelectorAll("*").length, frames, elapsed, fps: frames / elapsed * 1000 };
  });
  assert(performanceReport.nodes <= 45, `DOM budget exceeded: ${performanceReport.nodes} nodes`);
  assert(performanceReport.fps >= 45, `Low/Tablet frame rate below 45 FPS: ${performanceReport.fps.toFixed(1)}`);

  await open("count=3&width=600&height=600&pause=100&low&pad", { width: 700, height: 700, deviceScaleFactor: 1 });
  const padBox = await page.evaluate(() => {
    const menu = document.querySelector("honeycomb-gallery").shadowRoot.querySelector("neon-honeycomb");
    const pad = menu.shadowRoot.querySelector("neon-pad");
    const rect = pad.getBoundingClientRect();
    window.__padEvents = [];
    window.__padActions = 0;
    menu.addEventListener("neon-pad-change", (event) => window.__padEvents.push({ value: event.detail.value, final: event.detail.final, at: performance.now() }));
    menu.addEventListener("neon-action", () => window.__padActions++);
    return { x: rect.left + rect.width / 2, top: rect.top + 2, bottom: rect.bottom - 2 };
  });
  await page.mouse.move(padBox.x, padBox.bottom);
  await page.mouse.down();
  for (let i = 0; i <= 24; i++) await page.mouse.move(padBox.x, padBox.bottom - (padBox.bottom - padBox.top) * i / 24);
  await page.mouse.up();
  const padReport = await page.evaluate(() => window.__padEvents);
  const padElapsed = padReport.length > 1 ? padReport.at(-1).at - padReport[0].at : 0;
  const padMaximum = Math.ceil(padElapsed / 100) + 2;
  assert(padReport.length >= 2 && padReport.length <= padMaximum, `Pad throttle emitted ${padReport.length} events in ${padElapsed.toFixed(1)} ms`);
  assert(padReport.at(-1).final === true, "Pad did not emit its final commit");
  assert(padReport.at(-1).value >= 90, `Pad final value was lost: ${padReport.at(-1).value}`);
  await page.evaluate(() => {
    const menu = document.querySelector("honeycomb-gallery").shadowRoot.querySelector("neon-honeycomb");
    menu.shadowRoot.querySelector("button.center").click();
  });
  const padActions = await page.evaluate(() => window.__padActions);
  assert(padActions === 1, "The centre action disappeared when a pad was present");

  const touchProfiles = [];
  for (const profile of firefox ? [] : [
    { id: "companion-android", viewport: { width: 412, height: 915, deviceScaleFactor: 2, isMobile: true, hasTouch: true }, stage: [360, 600], userAgent: "Mozilla/5.0 (Linux; Android 15; Home Assistant Companion) AppleWebKit/537.36 Chrome/148 Mobile Safari/537.36" },
    { id: "fire-tablet", viewport: { width: 800, height: 1280, deviceScaleFactor: 1, isMobile: true, hasTouch: true }, stage: [800, 600], userAgent: "Mozilla/5.0 (Linux; U; en-US; KFMAWI Build/JDQ39) AppleWebKit/537.36 Silk/148 Safari/537.36" },
  ]) {
    await page.setUserAgent(profile.userAgent);
    await open(`count=6&width=${profile.stage[0]}&height=${profile.stage[1]}&pause=100&low`, profile.viewport);
    const touch = await page.evaluate(() => {
      const gallery = document.querySelector("honeycomb-gallery");
      const stage = gallery.shadowRoot.querySelector(".stage");
      const menu = stage.querySelector("neon-honeycomb");
      const root = menu.shadowRoot;
      const button = root.querySelector("button.center");
      const rect = button.getBoundingClientRect();
      const stageRect = stage.getBoundingClientRect();
      const menuRect = menu.getBoundingClientRect();
      window.__touchActions = 0;
      menu.addEventListener("neon-action", () => window.__touchActions++);
      return {
        point: { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 },
        contained: menuRect.left >= stageRect.left && menuRect.right <= stageRect.right && menuRect.top >= stageRect.top && menuRect.bottom <= stageRect.bottom,
        coarse: matchMedia("(pointer: coarse)").matches,
        userAgent: navigator.userAgent,
      };
    });
    await page.touchscreen.tap(touch.point.x, touch.point.y);
    touch.actions = await page.evaluate(() => window.__touchActions);
    assert(touch.contained && touch.coarse && touch.actions === 1, `${profile.id} touch/containment check failed`);
    touchProfiles.push({ id: profile.id, ...touch });
  }
  await page.setUserAgent(defaultUserAgent);

  await open("count=6&width=240&height=220&pause=100&low&sheet", { width: 340, height: 320, deviceScaleFactor: 1 });
  const bottomSheet = await page.evaluate(() => {
    const stage = document.querySelector("honeycomb-gallery").shadowRoot.querySelector(".stage");
    const menu = stage.querySelector("neon-honeycomb");
    const stageRect = stage.getBoundingClientRect();
    const menuRect = menu.getBoundingClientRect();
    const cells = [...menu.shadowRoot.querySelectorAll("button")].map((button) => {
      const rect = button.getBoundingClientRect();
      return { width: rect.width, height: rect.height };
    });
    return {
      sheet: menu.hasAttribute("sheet"),
      contained: menuRect.left >= stageRect.left && menuRect.right <= stageRect.right && menuRect.top >= stageRect.top && menuRect.bottom <= stageRect.bottom,
      scrollable: menu.scrollWidth > menu.clientWidth,
      cells,
    };
  });
  assert(bottomSheet.sheet && bottomSheet.contained && bottomSheet.scrollable, "Compact bottom-sheet fallback is not contained and scrollable");
  assert(bottomSheet.cells.every((cell) => cell.width >= 48 && cell.height >= 48), "Bottom-sheet touch target fell below 48 px");

  const profiles = [
    { id: "desktop", width: 800, height: 600, theme: "neon", low: false, viewport: { width: 900, height: 700, deviceScaleFactor: 1 } },
    { id: "tablet", width: 600, height: 600, theme: "blueprint", low: true, viewport: { width: 700, height: 700, deviceScaleFactor: 1 } },
    { id: "narrow", width: 300, height: 430, theme: "day", low: true, viewport: { width: 400, height: 520, deviceScaleFactor: 1 } },
  ];
  const manifest = {};
  for (const profile of profiles) {
    for (const count of [1, 3, 6]) {
      for (const pause of [0, 25, 50, 75, 100]) {
        await open(`count=${count}&width=${profile.width}&height=${profile.height}&theme=${profile.theme}&pause=${pause}${profile.low ? "&low" : ""}`, profile.viewport);
        const stage = await page.evaluateHandle(() => document.querySelector("honeycomb-gallery").shadowRoot.querySelector(".stage"));
        const name = `${profile.id}-${count}-p${String(pause).padStart(3, "0")}.png`;
        const path = join(outputDir, name);
        await stage.asElement().screenshot({ path });
        const bytes = readFileSync(path);
        manifest[name] = createHash("sha256").update(bytes).digest("hex");
        await stage.dispose();
      }
    }
  }

  if (update) {
    const inputDir = resolve("../docs/assets/neon-honeycomb/input");
    mkdirSync(inputDir, { recursive: true });
    const stageScreenshot = async (name) => {
      const stage = await page.evaluateHandle(() => document.querySelector("honeycomb-gallery").shadowRoot.querySelector(".stage"));
      await stage.asElement().screenshot({ path: join(inputDir, name) });
      await stage.dispose();
    };

    await open("count=6&width=800&height=600&pause=100&input=Mouse%20hover", { width: 900, height: 700, deviceScaleFactor: 1 });
    const hoverPoint = await page.evaluate(() => {
      const menu = document.querySelector("honeycomb-gallery").shadowRoot.querySelector("neon-honeycomb");
      const rect = [...menu.shadowRoot.querySelectorAll("button")].find((button) => button.title === "Details").getBoundingClientRect();
      return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
    });
    await page.mouse.move(hoverPoint.x, hoverPoint.y);
    await stageScreenshot("mouse-hover.png");

    await open("count=6&width=800&height=600&pause=100&input=Keyboard%20focus", { width: 900, height: 700, deviceScaleFactor: 1 });
    await page.evaluate(() => {
      const menu = document.querySelector("honeycomb-gallery").shadowRoot.querySelector("neon-honeycomb");
      const root = menu.shadowRoot;
      root.querySelector("button.center").focus();
      root.querySelector("[role=dialog]").dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight", bubbles: true, composed: true }));
    });
    await stageScreenshot("keyboard-focus.png");

    await open("count=6&width=300&height=430&pause=100&low&input=Touch%20press", { width: 400, height: 520, deviceScaleFactor: 1, isMobile: true, hasTouch: true });
    const touchPoint = await page.evaluate(() => {
      const menu = document.querySelector("honeycomb-gallery").shadowRoot.querySelector("neon-honeycomb");
      const rect = [...menu.shadowRoot.querySelectorAll("button")].find((button) => button.title === "Details").getBoundingClientRect();
      return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
    });
    await page.touchscreen.touchStart(touchPoint.x, touchPoint.y);
    await stageScreenshot("touch-press.png");
    await page.touchscreen.touchEnd();

    await open("count=3&width=600&height=600&pause=100&low&pad&input=Pad%20and%20centre%20action", { width: 700, height: 700, deviceScaleFactor: 1 });
    await stageScreenshot("pad-control.png");

    await open("count=6&width=240&height=220&pause=100&low&sheet&input=Bottom%20sheet", { width: 340, height: 320, deviceScaleFactor: 1 });
    await stageScreenshot("bottom-sheet.png");
  }

  assert(errors.length === 0, `Browser console errors: ${errors.join(" | ")}`);
  const report = {
    browser: version,
    geometry,
    keyboard,
    paging,
    motion: { computed: motion.computed, ended: motion.ended.map((value) => Math.round(value * 10) / 10), reducedDuration },
    performance: { ...performanceReport, fps: Math.round(performanceReport.fps * 10) / 10 },
    pad: { events: padReport.length, elapsed: Math.round(padElapsed * 10) / 10, maximum: padMaximum, final: padReport.at(-1), centerActions: padActions },
    touchProfiles,
    bottomSheet,
    goldenFrames: manifest,
  };
  if (update) {
    mkdirSync(resolve("../docs/assets/neon-honeycomb"), { recursive: true });
    writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`);
  } else {
    assert(existsSync(reportPath), "Committed browser report is missing; run npm run honeycomb:golden");
    const committed = JSON.parse(readFileSync(reportPath, "utf8"));
    assert(Object.keys(committed.goldenFrames ?? {}).length === 45, "Committed golden manifest does not contain 45 frames");
    if (!firefox) {
      for (const [name, hash] of Object.entries(manifest)) assert(committed.goldenFrames[name] === hash, `Golden frame changed: ${name}`);
    }
  }
  if (record) {
    const matrix = existsSync(matrixPath) ? JSON.parse(readFileSync(matrixPath, "utf8")) : { engines: {} };
    const key = firefox ? "firefox" : "chromium";
    matrix.engines[key] = {
      engine: key,
      version,
      geometry: { layout: "reference-225-point-up", cells: geometry.cells.length, nodes: geometry.nodes, outerWidth: 64, outerHeight: 72, radius: 66, tolerancePx: 2 },
      keyboard,
      paging,
      motion: { duration: 160, stagger: 45, measuredEnd: Math.round(Math.max(...motion.ended) * 10) / 10, reducedDuration },
      fps: Math.round(performanceReport.fps * 10) / 10,
      pad: { events: padReport.length, final: padReport.at(-1).final, value: padReport.at(-1).value, centerActions: padActions },
      touchProfiles: touchProfiles.map(({ id, contained, coarse, actions }) => ({ id, contained, coarse, actions })),
      errors,
    };
    writeFileSync(matrixPath, `${JSON.stringify(matrix, null, 2)}\n`);
  }
  console.log(`ok  Honeycomb browser: ${version}; ${performanceReport.fps.toFixed(1)} FPS; ${geometry.nodes} DOM nodes; 45 golden frames ${update ? "updated" : firefox ? "rendered" : "verified"}`);
} catch (error) {
  if (fixtureLog) console.error(fixtureLog.trim());
  throw error;
} finally {
  if (browser) await browser.close();
  fixture.kill("SIGTERM");
}
