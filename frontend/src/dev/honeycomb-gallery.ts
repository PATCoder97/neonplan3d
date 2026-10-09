import { css, html, LitElement } from "lit";
import "../components/neon-honeycomb.ts";
import { placeHoneycomb, type NeonMenuItem, type NeonMenuModel } from "../neon-menu.ts";

if (!customElements.get("ha-icon")) customElements.define("ha-icon", class extends HTMLElement {
  connectedCallback() { this.textContent = "◆"; }
});

const names = ["Power", "Details", "Colour", "Timer", "Scene", "Energy"];
const icons = ["mdi:power", "mdi:information", "mdi:palette", "mdi:timer", "mdi:movie", "mdi:flash"];
const item = (i: number): NeonMenuItem => ({ id: `item-${i}`, label: names[i], icon: icons[i], active: i === 0, action: { type: "local", command: "close" }, close: false });
const center: NeonMenuItem = { id: "center", label: "Living room", icon: "mdi:lightbulb", value: "63 %", active: true, action: { type: "toggle", entity: "light.fixture" }, close: false };
const model = (count: number, paged = false, pad = false): NeonMenuModel => {
  const items = Array.from({ length: count }, (_, i) => item(pad ? (i + 1) % names.length : i));
  if (paged && items.length) items[items.length - 1] = { id: "next", label: "Next", icon: "mdi:chevron-right", action: { type: "page", page: "second" }, close: false };
  return {
    id: `fixture-${count}-${paged}`,
    entity: "light.fixture",
    initialPage: "main",
    pages: [
      {
        id: "main",
        title: `${count} actions`,
        center,
        items,
        pad: pad ? { y: { min: 0, max: 100, step: 1, value: 63, invert: true, commit: "move", throttleMs: 100, action: { type: "service", domain: "light", service: "turn_on", target: { entity_id: "light.fixture" } }, valueKey: "brightness_pct" } } : undefined,
      },
      ...(paged ? [{ id: "second", title: "Second page", center: { id: "back", label: "Back", icon: "mdi:arrow-left", action: { type: "page" as const, page: "main" }, close: false }, items: [item(1), item(2), item(3)] }] : []),
    ],
  };
};

const corner = (label: string, x: number, y: number, pause: number, low: boolean) => {
  const p = placeHoneycomb(380, 420, x, y);
  return html`<section class="stage corner"><span>${label} · anchor (${x}, ${y})</span><neon-honeycomb style=${`left:${p.left}px;top:${p.top}px;width:${p.width}px;height:${p.height}px`} .model=${model(6)} .pausedAt=${pause} ?low=${low} ?dock=${p.dock} ?sheet=${p.sheet}></neon-honeycomb></section>`;
};

class HoneycombGallery extends LitElement {
  static properties = { pause: { state: true }, low: { state: true }, playMotion: { state: true } };
  declare pause: number;
  declare low: boolean;
  declare playMotion: boolean;
  constructor() {
    super();
    const query = new URLSearchParams(location.search);
    this.pause = Number(query.get("pause") ?? 100);
    this.low = query.has("low");
    this.playMotion = query.has("animate");
  }
  protected render() {
    const query = new URLSearchParams(location.search);
    const single = query.has("single");
    const sheet = query.has("sheet");
    const count = Math.max(1, Math.min(6, Number(query.get("count") ?? 6)));
    const width = Math.max(sheet ? 220 : 300, Math.min(800, Number(query.get("width") ?? 800)));
    const height = Math.max(sheet ? 180 : 420, Math.min(600, Number(query.get("height") ?? 600)));
    const pausedAt = this.playMotion ? null : this.pause;
    const theme = query.get("theme") === "day" ? "day" : query.get("theme") === "blueprint" ? "blueprint" : "neon";
    const pad = query.has("pad");
    const input = query.get("input");
    if (single) {
      const placement = sheet ? placeHoneycomb(width, height, width / 2, height / 2) : null;
      const menuStyle = placement ? `position:absolute;left:${placement.left}px;top:${placement.top}px;width:${placement.width}px;height:${placement.height}px` : "";
      return html`<main class="single"><section class="stage reference ${theme}" style=${`width:${width}px;height:${height}px`}><span>${count} actions · ${theme} · ${width} × ${height}${input ? ` · ${input}` : ""}</span><neon-honeycomb style=${menuStyle} .model=${model(count, count === 6, pad)} .pausedAt=${pausedAt} ?low=${this.low} ?dock=${placement?.dock ?? width < 400} ?sheet=${placement?.sheet}></neon-honeycomb></section></main>`;
    }
    return html`<header><b>Neon Honeycomb clean-room fixture</b><label>Animation ${this.pause}% <input type="range" min="0" max="100" .value=${String(this.pause)} @input=${(e: Event) => { this.playMotion = false; this.pause = Number((e.target as HTMLInputElement).value); }}></label><label><input type="checkbox" .checked=${this.low} @change=${(e: Event) => (this.low = (e.target as HTMLInputElement).checked)}> Low / Tablet</label></header>
      <main>
        ${[1,3,6].map((n, i) => html`<section class="stage reference ${i === 1 ? "blueprint" : i === 2 ? "day" : "neon"}"><span>${n} actions · ${i === 0 ? "Neon" : i === 1 ? "Blueprint" : "Day"} · 800 × 600 reference</span><neon-honeycomb .model=${model(n, n === 6)} .pausedAt=${pausedAt} ?low=${this.low}></neon-honeycomb></section>`)}
        ${corner("Top left", 8, 8, pausedAt ?? 100, this.low)}
        ${corner("Top right", 372, 8, pausedAt ?? 100, this.low)}
        ${corner("Bottom right", 372, 412, pausedAt ?? 100, this.low)}
        ${corner("Bottom left", 8, 412, pausedAt ?? 100, this.low)}
        <section class="stage narrow"><span>Narrow / panel-open · bottom dock</span><neon-honeycomb .model=${model(6, true)} .pausedAt=${pausedAt} ?low=${this.low} dock></neon-honeycomb></section>
      </main>`;
  }
  static styles = css`
    :host{display:block}header{position:sticky;top:0;z-index:2;display:flex;gap:20px;align-items:center;padding:12px;background:#0d1424;border:1px solid rgba(120,170,255,.2);border-radius:12px}label{display:flex;gap:8px;align-items:center;font-size:13px}main{display:flex;flex-wrap:wrap;gap:18px;margin-top:18px;align-items:flex-start}.single{margin:0}.stage{position:relative;display:grid;place-items:center;box-sizing:border-box;min-height:420px;overflow:hidden;border:1px solid rgba(55,224,255,.25);background:radial-gradient(circle at 50% 45%,#13223a,#070b14 65%);border-radius:14px}.single .stage neon-honeycomb[dock]{align-self:end;margin-bottom:8px}.reference{width:800px;height:600px}.stage>span{position:absolute;z-index:1;left:10px;top:8px;color:#8a9bb8;font-size:12px}.blueprint{--fp3d-accent:#73a7ff;background:repeating-linear-gradient(0deg,transparent 0 23px,rgba(115,167,255,.08) 24px),#07152c}.day{--fp3d-accent:#087d9b;--fp3d-text:#10253a;background:#dfe8ef}.corner{display:block;width:380px;height:420px;min-height:0}.corner neon-honeycomb{position:absolute}.narrow{width:300px;min-height:430px;align-items:end}
  `;
}
customElements.define("honeycomb-gallery", HoneycombGallery);
