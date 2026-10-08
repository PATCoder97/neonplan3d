// Development-only catalog gallery. It deliberately uses the same preview and symbol registries as
// the editor, so one page exposes missing dispatch entries and render failures before a release.

import { html, render, svg } from "lit";
import { registeredFurnitureSymbol } from "../components/furniture-symbols/index.ts";
import { BUILTIN_FURNITURE_CATALOG, STRUCTURAL_ONLY_FURNITURE_TYPES, type BuiltinFurnitureCatalogEntry } from "../furniture/catalog.ts";
import { translate, type I18nKey } from "../i18n.ts";
import { LAMP_MODEL } from "../model.ts";
import type { HomeAssistant } from "../types.ts";
import { furniturePreview } from "../viewer/preview.ts";

type GalleryState = "pending" | "ok" | "error";

const language = new URLSearchParams(location.search).get("lang") === "de" ? "de" : "en";
const hass = { language } as HomeAssistant;
const cards = new Map<string, HTMLElement>();
const states = new Map<string, GalleryState>();

const search = document.querySelector<HTMLInputElement>("#gallery-search")!;
const group = document.querySelector<HTMLSelectElement>("#gallery-group")!;
const summary = document.querySelector<HTMLElement>("#gallery-summary")!;
const grid = document.querySelector<HTMLElement>("#gallery-grid")!;

function itemName(item: BuiltinFurnitureCatalogEntry): string {
  return translate(hass, item.nameKey as I18nKey);
}

function dimensions(item: BuiltinFurnitureCatalogEntry): string {
  return item.size.map((value) => `${Math.round(value * 100)} cm`).join(" × ");
}

function createCard(item: BuiltinFurnitureCatalogEntry): HTMLElement {
  const [w, d] = item.size;
  const card = document.createElement("article");
  card.className = "gallery-card is-pending";
  card.dataset.id = item.id;
  card.dataset.name = itemName(item).toLocaleLowerCase();
  card.dataset.groups = item.groups.join(" ");
  card.dataset.library = String(item.library);
  card.innerHTML = `
    <div class="preview"><span class="spinner" aria-label="Rendering"></span></div>
    <div class="symbol"></div>
    <div class="details">
      <div class="title"></div>
      <code></code>
      <div class="meta"></div>
      <div class="error" hidden></div>
    </div>`;

  card.querySelector<HTMLElement>(".title")!.textContent = itemName(item);
  card.querySelector<HTMLElement>("code")!.textContent = item.id;
  card.querySelector<HTMLElement>(".meta")!.textContent = `${dimensions(item)} · ${item.groups.join(", ") || "internal"}`;

  const symbol = registeredFurnitureSymbol(item.symbol, w, d);
  const pad = Math.max(w, d) * 0.08;
  render(
    html`<svg viewBox=${`${-w / 2 - pad} ${-d / 2 - pad} ${w + pad * 2} ${d + pad * 2}`} aria-label="2D symbol">
      ${symbol ?? svg`<rect class="footprint" x=${-w / 2} y=${-d / 2} width=${w} height=${d} />`}
    </svg>`,
    card.querySelector(".symbol")!,
  );
  return card;
}

function updateSummary(): void {
  const visible = [...cards.values()].filter((card) => !card.hidden);
  const complete = visible.filter((card) => states.get(card.dataset.id!) === "ok").length;
  const errors = visible.filter((card) => states.get(card.dataset.id!) === "error").length;
  const pending = visible.length - complete - errors;
  summary.textContent = `${visible.length} mẫu · ${complete} render tốt · ${pending} đang chờ · ${errors} lỗi`;
  summary.classList.toggle("has-errors", errors > 0);
  document.body.dataset.galleryReady = [...states.values()].every((state) => state !== "pending") ? "true" : "false";
  document.body.dataset.galleryErrors = String([...states.values()].filter((state) => state === "error").length);
}

function applyFilters(): void {
  const query = search.value.trim().toLocaleLowerCase();
  const selected = group.value;
  for (const card of cards.values()) {
    const matchesText = !query || card.dataset.id!.includes(query) || card.dataset.name!.includes(query);
    const matchesGroup = selected === "all" || (selected === "internal" ? card.dataset.library === "false" : card.dataset.groups!.split(" ").includes(selected));
    card.hidden = !matchesText || !matchesGroup;
  }
  updateSummary();
}

async function renderPreview(item: BuiltinFurnitureCatalogEntry): Promise<void> {
  const card = cards.get(item.id)!;
  try {
    if ((STRUCTURAL_ONLY_FURNITURE_TYPES as readonly string[]).includes(item.id)) {
      card.querySelector<HTMLElement>(".preview")!.textContent = "Structural opening · no standalone mesh";
      card.classList.replace("is-pending", "is-ok");
      states.set(item.id, "ok");
      updateSummary();
      return;
    }
    const [w, d, h] = item.size;
    const url = furniturePreview({ type: item.renderer, w, d, h, variant: null, lamp: LAMP_MODEL[item.id] ?? null }, 220);
    if (!url.startsWith("data:image/png") || url.length < 100) throw new Error("Renderer did not return a PNG preview");
    const image = new Image();
    image.alt = `${itemName(item)} 3D preview`;
    image.src = url;
    await image.decode();
    card.querySelector(".preview")!.replaceChildren(image);
    card.classList.replace("is-pending", "is-ok");
    states.set(item.id, "ok");
  } catch (reason) {
    const message = reason instanceof Error ? reason.message : String(reason);
    card.classList.replace("is-pending", "is-error");
    card.querySelector<HTMLElement>(".preview")!.textContent = "Render failed";
    const error = card.querySelector<HTMLElement>(".error")!;
    error.hidden = false;
    error.textContent = message;
    states.set(item.id, "error");
  }
  updateSummary();
}

async function renderAll(): Promise<void> {
  // Yield between cards: the shared WebGL canvas is fast, but 135 synchronous readbacks should not
  // freeze the page and hide which item failed.
  for (const item of BUILTIN_FURNITURE_CATALOG) {
    await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
    await renderPreview(item);
  }
}

const groups = [...new Set(BUILTIN_FURNITURE_CATALOG.flatMap((item) => item.groups))];
for (const name of groups) group.add(new Option(`${translate(hass, `furn_group_${name}` as I18nKey)} (${BUILTIN_FURNITURE_CATALOG.filter((item) => item.groups.includes(name)).length})`, name));
group.add(new Option(`Internal (${BUILTIN_FURNITURE_CATALOG.filter((item) => !item.library).length})`, "internal"));
for (const item of BUILTIN_FURNITURE_CATALOG) {
  const card = createCard(item);
  cards.set(item.id, card);
  states.set(item.id, "pending");
  grid.append(card);
}
search.addEventListener("input", applyFilters);
group.addEventListener("change", applyFilters);
applyFilters();
void renderAll();
