import { favoriteCall, type CarState } from "./devices.ts";
import type { CustomButton } from "./model.ts";
import type { HassEntity, HomeAssistant } from "./types.ts";

export type NeonServiceTarget = {
  entity_id?: string | string[];
  device_id?: string | string[];
  area_id?: string | string[];
};

export type NeonLocalCommand = "close" | "camera_look" | "cycle_light_mode" | "cycle_fan_light";

export type NeonMenuAction =
  | { type: "toggle"; entity: string }
  | { type: "more_info"; entity: string }
  | { type: "service"; domain: string; service: string; target?: NeonServiceTarget; data?: Record<string, unknown> }
  | { type: "navigate"; path: string }
  | { type: "fire_dom_event"; detail: Record<string, unknown> }
  | { type: "custom_button"; button: CustomButton }
  | { type: "page"; page: string }
  | { type: "local"; command: NeonLocalCommand; value?: unknown };

export interface NeonMenuItem {
  id: string;
  label: string;
  icon: string;
  action: NeonMenuAction;
  active?: boolean;
  disabled?: boolean;
  busy?: boolean;
  /** Informational action remains reachable although the entity itself is unavailable. */
  unavailable?: boolean;
  confirm?: boolean;
  close?: boolean;
  value?: string;
  color?: string;
  /** Runtime-only camera/media artwork; never persisted in plan/card schema. */
  image?: string;
}

export interface NeonPadAxisConfig {
  min: number;
  max: number;
  step: number;
  value: number;
  invert?: boolean;
  commit: "move" | "release";
  throttleMs?: number;
  action: Extract<NeonMenuAction, { type: "service" }>;
  valueKey: string;
}

export interface NeonPadConfig {
  x?: NeonPadAxisConfig;
  y?: NeonPadAxisConfig;
}

export interface NeonMenuPage {
  id: string;
  title?: string;
  center: NeonMenuItem;
  items: NeonMenuItem[];
  pad?: NeonPadConfig;
}

export interface NeonMenuModel {
  id: string;
  entity: string;
  initialPage: string;
  pages: NeonMenuPage[];
}

export const HONEYCOMB_GEOMETRY = {
  /** Width of a reference-proportioned, point-up outer hexagon. */
  size: 64,
  height: 72,
  centerSize: 64,
  centerHeight: 72,
  /** Outer centres are one cell width plus the reference 2 px spacing apart. */
  radius: 66,
  spacing: 2,
  /** Six slots are NW, NE, E, SE, SW and W, matching the public reference. */
  startAngle: -120,
  minTarget: 48,
  cluster: 225,
} as const;

export const HONEYCOMB_MOTION = {
  duration: 160,
  closeDuration: 130,
  stagger: 45,
  startScale: 0.72,
  translate: 18,
  pressScale: 0.92,
} as const;

/** Local 0..1 progress of an outer cell at a paused percentage of the complete opening timeline. */
export function honeycombFrameProgress(percent: number, index: number, count = 6): number {
  const total = HONEYCOMB_MOTION.duration + HONEYCOMB_MOTION.stagger * Math.max(0, Math.min(6, count) - 1);
  const elapsed = Math.max(0, Math.min(100, percent)) / 100 * total - Math.max(0, index) * HONEYCOMB_MOTION.stagger;
  return Math.max(0, Math.min(1, elapsed / HONEYCOMB_MOTION.duration));
}

export interface HoneycombPoint {
  x: number;
  y: number;
}

export function honeycombPoints(count: number, radius = HONEYCOMB_GEOMETRY.radius, startAngle = HONEYCOMB_GEOMETRY.startAngle): HoneycombPoint[] {
  const n = Math.max(0, Math.min(6, Math.trunc(count)));
  return Array.from({ length: n }, (_, i) => {
    const a = ((startAngle + i * 60) * Math.PI) / 180;
    return { x: Math.cos(a) * radius, y: Math.sin(a) * radius };
  });
}

export function nextDirectionalIndex(points: readonly HoneycombPoint[], current: number, direction: "left" | "right" | "up" | "down"): number {
  if (!points.length || current < 0 || current >= points.length) return current;
  const vectors = { left: [-1, 0], right: [1, 0], up: [0, -1], down: [0, 1] } as const;
  const [vx, vy] = vectors[direction];
  const from = points[current];
  let best = current;
  let score = Infinity;
  for (let i = 0; i < points.length; i++) {
    if (i === current) continue;
    const dx = points[i].x - from.x;
    const dy = points[i].y - from.y;
    const forward = dx * vx + dy * vy;
    if (forward <= 0) continue;
    const perpendicular = Math.abs(dx * vy - dy * vx);
    const candidate = perpendicular * 4 + Math.hypot(dx, dy);
    if (candidate < score) { score = candidate; best = i; }
  }
  return best;
}

export interface HoneycombPlacement {
  left: number;
  top: number;
  width: number;
  height: number;
  anchorX: number;
  anchorY: number;
  dock: boolean;
  sheet: boolean;
}

export interface HoneycombInsets {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export function placeHoneycomb(stageWidth: number, stageHeight: number, x: number, y: number, panelOpen = false, safe: HoneycombInsets = {}): HoneycombPlacement {
  const size = HONEYCOMB_GEOMETRY.cluster;
  const inset = 8;
  // Room details occupy the right-hand side on desktop and the lower 55% on
  // phones/portrait tablets. Treat that panel as an inset instead of forcing
  // every room menu into the detached dock layout.
  const bottomPanel = panelOpen && (stageWidth <= 700 || (stageHeight > stageWidth && stageWidth <= 1000));
  const panelBottom = bottomPanel ? stageHeight * 0.55 + 8 : 0;
  const panelRight = panelOpen && !bottomPanel ? 374 : 0;
  const topInset = inset + Math.max(0, safe.top ?? 0);
  const rightInset = inset + Math.max(0, safe.right ?? 0, panelRight);
  const bottomInset = inset + Math.max(0, safe.bottom ?? 0, panelBottom);
  const leftInset = inset + Math.max(0, safe.left ?? 0);
  const availableWidth = Math.max(0, stageWidth - leftInset - rightInset);
  const availableHeight = Math.max(0, stageHeight - topInset - bottomInset);
  const sheet = availableWidth < size || availableHeight < size + 72;
  const width = sheet ? availableWidth : size;
  const height = sheet ? Math.min(180, availableHeight) : size;
  const maxLeft = Math.max(leftInset, stageWidth - size - rightInset);
  const maxTop = Math.max(topInset, stageHeight - size - bottomInset);
  const dock = sheet;
  const left = sheet ? leftInset : dock ? Math.max(leftInset, Math.min(maxLeft, (stageWidth - size) / 2)) : Math.max(leftInset, Math.min(maxLeft, x - size / 2));
  const top = sheet ? Math.max(topInset, stageHeight - height - bottomInset) : dock ? maxTop : Math.max(topInset, Math.min(maxTop, y - size / 2));
  return { left, top, width, height, anchorX: x - left, anchorY: y - top, dock, sheet };
}

const LOCAL_COMMANDS = new Set<NeonLocalCommand>(["close", "camera_look", "cycle_light_mode", "cycle_fan_light"]);
const SAFE_NAME = /^[a-z0-9_]+$/;

export function validNeonAction(value: unknown): value is NeonMenuAction {
  if (!value || typeof value !== "object") return false;
  const a = value as Record<string, unknown>;
  if (a.type === "toggle" || a.type === "more_info") return typeof a.entity === "string" && a.entity.includes(".");
  if (a.type === "service") return typeof a.domain === "string" && SAFE_NAME.test(a.domain) && typeof a.service === "string" && SAFE_NAME.test(a.service);
  if (a.type === "navigate") return typeof a.path === "string" && a.path.startsWith("/");
  if (a.type === "fire_dom_event") return !!a.detail && typeof a.detail === "object" && !Array.isArray(a.detail);
  if (a.type === "custom_button") {
    const button = a.button as CustomButton | undefined;
    if (!button || typeof button.id !== "string" || typeof button.label !== "string") return false;
    if (button.action === "navigate") return typeof button.target === "string" && button.target.startsWith("/");
    if (button.action === "more_info") return typeof button.target === "string" && /^[a-z0-9_]+\.[a-z0-9_]+$/.test(button.target);
    if (button.action === "service") return typeof button.target === "string" && /^[a-z0-9_]+\.[a-z0-9_]+$/.test(button.target);
    return button.action === "fire_dom_event" && (!button.data || typeof button.data === "object");
  }
  if (a.type === "page") return typeof a.page === "string" && a.page.length > 0;
  if (a.type === "local") return typeof a.command === "string" && LOCAL_COMMANDS.has(a.command as NeonLocalCommand);
  return false;
}

export interface NeonDispatchContext {
  hass: Pick<HomeAssistant, "callService">;
  source: EventTarget;
  toggle: (entity: string) => void | Promise<unknown>;
  moreInfo: (entity: string) => void;
  confirm?: (item: NeonMenuItem) => boolean | Promise<boolean>;
  local?: (command: NeonLocalCommand, value?: unknown) => void;
  navigate?: (path: string) => void;
  runButton?: (button: CustomButton) => void;
}

export interface NeonDispatchResult {
  executed: boolean;
  close: boolean;
  page?: string;
}

export async function dispatchNeonAction(item: NeonMenuItem, context: NeonDispatchContext): Promise<NeonDispatchResult> {
  if (item.disabled || item.busy || !validNeonAction(item.action)) return { executed: false, close: false };
  if (item.confirm && context.confirm && !(await context.confirm(item))) return { executed: false, close: false };
  const a = item.action;
  if (a.type === "page") return { executed: true, close: false, page: a.page };
  if (a.type === "toggle") await context.toggle(a.entity);
  else if (a.type === "more_info") context.moreInfo(a.entity);
  else if (a.type === "service") await context.hass.callService(a.domain, a.service, { ...(a.target ?? {}), ...(a.data ?? {}) });
  else if (a.type === "navigate") (context.navigate ?? ((path) => history.pushState(null, "", path)))(a.path);
  else if (a.type === "fire_dom_event") context.source.dispatchEvent(new CustomEvent("ll-custom", { detail: a.detail, bubbles: true, composed: true }));
  else if (a.type === "custom_button") context.runButton?.(a.button);
  else context.local?.(a.command, a.value);
  return { executed: true, close: item.close ?? a.type !== "local" };
}

export interface MenuBuildOptions {
  confirm?: boolean;
  car?: CarState | null;
  presets?: { id: string; label: string; type: string; content: string }[];
  cameraPro?: boolean;
  t?: (key: string) => string;
}

const COLORS: [number, number, number][] = [
  [255, 181, 71], [255, 236, 210], [55, 224, 255], [91, 124, 255],
  [190, 90, 255], [255, 95, 210], [255, 70, 70], [120, 255, 150],
];
const KELVINS = [2200, 2700, 3200, 4000, 5000, 6500];
const COLOR_MODES = ["hs", "rgb", "rgbw", "rgbww", "xy"];
const COVER_SET_POSITION = 4;
const COVER_OPEN_TILT = 16;
const COVER_CLOSE_TILT = 32;
const COVER_SET_TILT = 128;
const FAN_SET_SPEED = 1;
const FAN_OSCILLATE = 2;
const FAN_PRESET = 8;

function service(id: string, label: string, icon: string, entity: string, domain: string, name: string, data?: Record<string, unknown>, extra: Partial<NeonMenuItem> = {}): NeonMenuItem {
  return { id, label, icon, close: false, action: { type: "service", domain, service: name, target: { entity_id: entity }, data }, ...extra };
}

function details(entity: string, label: string, unavailable = false): NeonMenuItem {
  return { id: "details", label, icon: "mdi:information-outline", action: { type: "more_info", entity }, close: true, unavailable };
}

function page(id: string, label: string, icon: string, target: string): NeonMenuItem {
  return { id, label, icon, action: { type: "page", page: target }, close: false };
}

function paginate(id: string, title: string, center: NeonMenuItem, entries: NeonMenuItem[], t?: (key: string, fallback: string) => string): NeonMenuPage[] {
  const pages: NeonMenuPage[] = [];
  const chunks: NeonMenuItem[][] = [];
  for (let i = 0; i < entries.length; i += 4) chunks.push(entries.slice(i, i + 4));
  chunks.forEach((chunk, i) => {
    const items = [...chunk];
    if (i > 0) items.push(page(`prev-${i}`, t?.("previous", "Previous") ?? "Previous", "mdi:chevron-left", `${id}-${i}`));
    if (i < chunks.length - 1) items.push(page(`next-${i}`, t?.("next", "Next") ?? "Next", "mdi:chevron-right", `${id}-${i + 2}`));
    pages.push({ id: `${id}-${i + 1}`, title, center, items });
  });
  return pages;
}

export type NeonCentralButton = CustomButton;

/** Typed central-menu pages. This keeps whole-house controls, favourites and custom buttons out of one long dialog. */
export function menuForCentral(
  hass: Pick<HomeAssistant, "states">,
  options: { label: string; lights: string[]; covers: string[]; favorites: string[]; buttons: NeonCentralButton[]; confirmWholeHouse: boolean; t?: (key: string, fallback: string) => string },
): NeonMenuModel {
  const t = (key: string, fallback: string) => options.t?.(key, fallback) || fallback;
  const center: NeonMenuItem = { id: "central-close", label: options.label, icon: "mdi:star-four-points", action: { type: "local", command: "close" }, close: true };
  const controls: NeonMenuItem[] = [
    service("all-lights-on", t("honeycomb_lights_on", "Lights on"), "mdi:lightbulb-on", options.lights[0] ?? "light.none", "light", "turn_on", undefined, { action: { type: "service", domain: "light", service: "turn_on", target: { entity_id: options.lights } }, disabled: !options.lights.length, confirm: options.confirmWholeHouse }),
    service("all-lights-off", t("honeycomb_lights_off", "Lights off"), "mdi:lightbulb-off", options.lights[0] ?? "light.none", "light", "turn_off", undefined, { action: { type: "service", domain: "light", service: "turn_off", target: { entity_id: options.lights } }, disabled: !options.lights.length, confirm: options.confirmWholeHouse }),
    service("all-covers-open", t("honeycomb_covers_open", "Covers open"), "mdi:window-shutter-open", options.covers[0] ?? "cover.none", "cover", "open_cover", undefined, { action: { type: "service", domain: "cover", service: "open_cover", target: { entity_id: options.covers } }, disabled: !options.covers.length, confirm: options.confirmWholeHouse }),
    service("all-covers-close", t("honeycomb_covers_close", "Covers close"), "mdi:window-shutter", options.covers[0] ?? "cover.none", "cover", "close_cover", undefined, { action: { type: "service", domain: "cover", service: "close_cover", target: { entity_id: options.covers } }, disabled: !options.covers.length, confirm: options.confirmWholeHouse }),
  ];
  const favoriteItems = options.favorites.filter((entity) => hass.states[entity]).map((entity) => {
    const [callDomain, serviceName] = favoriteCall(entity);
    return service(`favorite-${entity}`, String(hass.states[entity].attributes.friendly_name ?? entity), "mdi:star", entity, callDomain, serviceName, undefined, { active: hass.states[entity].state === "on", disabled: hass.states[entity].state === "unavailable" });
  });
  const customItems = options.buttons.map((button): NeonMenuItem => {
    const action: NeonMenuAction = { type: "custom_button", button };
    return { id: `custom-${button.id}`, label: button.label, icon: button.icon?.startsWith("mdi:") ? button.icon : `mdi:${button.icon ?? "gesture-tap-button"}`, action, close: button.action !== "service", disabled: !validNeonAction(action) };
  });
  const mainItems = [...controls];
  if (favoriteItems.length) mainItems.push(page("favorites", t("honeycomb_favorites", "Favorites"), "mdi:star", "central-favorites-1"));
  if (customItems.length) mainItems.push(page("custom", t("honeycomb_custom", "Custom"), "mdi:dots-hexagon", "central-custom-1"));
  return {
    id: "neon-central",
    entity: "homeassistant.central",
    initialPage: "central",
    pages: [
      { id: "central", title: options.label, center, items: mainItems.slice(0, 6) },
      ...(favoriteItems.length ? paginate("central-favorites", t("honeycomb_favorites", "Favorites"), page("central-back", options.label, "mdi:arrow-left", "central"), favoriteItems, t) : []),
      ...(customItems.length ? paginate("central-custom", t("honeycomb_custom", "Custom"), page("central-back", options.label, "mdi:arrow-left", "central"), customItems, t) : []),
    ],
  };
}

function stateColor(st: HassEntity): string | undefined {
  const rgb = st.attributes.rgb_color;
  if (Array.isArray(rgb) && rgb.length >= 3 && rgb.slice(0, 3).every((v) => typeof v === "number" && v >= 0 && v <= 255)) return `rgb(${rgb.slice(0, 3).join(",")})`;
  return undefined;
}

function safePicture(value: unknown): string | undefined {
  if (typeof value !== "string" || value.length > 2048) return undefined;
  return /^(?:https?:\/\/|\/|data:image\/(?:png|jpeg|webp);base64,)/i.test(value) ? value : undefined;
}

function finiteNumber(value: unknown, fallback: number, min = -Infinity, max = Infinity): number {
  const number = typeof value === "number" ? value : Number(value);
  return Number.isFinite(number) ? Math.max(min, Math.min(max, number)) : fallback;
}

export function menuForEntity(hass: Pick<HomeAssistant, "states">, entity: string, options: MenuBuildOptions = {}): NeonMenuModel | null {
  const st = hass.states[entity];
  if (!st) return null;
  const domain = entity.split(".", 1)[0];
  const t = (key: string, fallback: string) => options.t?.(key) || fallback;
  const unavailable = st.state === "unavailable" || st.state === "unknown";
  const name = String(st.attributes.friendly_name ?? entity);
  const commonDetails = details(entity, t("details", "Details"), unavailable);
  const model = (pages: NeonMenuPage[], initialPage = pages[0]?.id ?? "main"): NeonMenuModel => ({ id: `neon-${entity}`, entity, initialPage, pages });

  if (options.car) return carMenu(entity, options.car, commonDetails, model, t);

  if (domain === "light") {
    const modes = Array.isArray(st.attributes.supported_color_modes) ? (st.attributes.supported_color_modes as string[]) : [];
    const dim = modes.some((m) => m !== "onoff");
    const on = st.state === "on";
    const pct = on && typeof st.attributes.brightness === "number" ? Math.round(finiteNumber(st.attributes.brightness, 255, 0, 255) / 2.55) : on ? 100 : 0;
    const hasColor = modes.some((m) => COLOR_MODES.includes(m));
    const hasTemp = modes.includes("color_temp");
    const palette = hasColor
      ? COLORS.map((rgb, i) => service(`rgb-${i}`, `RGB ${rgb.join(", ")}`, "mdi:palette", entity, "light", "turn_on", { rgb_color: rgb }, { color: `rgb(${rgb.join(",")})`, close: false }))
      : hasTemp
        ? KELVINS.map((k) => service(`kelvin-${k}`, `${k} K`, "mdi:thermometer", entity, "light", "turn_on", { color_temp_kelvin: k }, { close: false }))
        : [];
    const center: NeonMenuItem = { id: "power", label: name, icon: "mdi:power", value: on ? `${pct} %` : t("qm_off", "Off"), active: on, disabled: unavailable, confirm: options.confirm, close: false, color: stateColor(st), action: { type: "toggle", entity } };
    const items = [commonDetails, ...(palette.length ? [page("palette", t("honeycomb_color", "Colour"), "mdi:palette", "palette-1")] : [])];
    const main: NeonMenuPage = {
      id: "main", title: name, center, items,
      pad: dim && !unavailable ? { y: { min: 1, max: 100, step: 1, value: Math.max(1, pct), invert: true, commit: "move", throttleMs: 100, action: { type: "service", domain: "light", service: "turn_on", target: { entity_id: entity } }, valueKey: "brightness_pct" } } : undefined,
    };
    const palettePages = palette.length ? paginate("palette", t("honeycomb_color", "Colour"), page("back", name, "mdi:arrow-left", "main"), palette, t) : [];
    return model([main, ...palettePages]);
  }

  if (domain === "cover") {
    const f = Number(st.attributes.supported_features ?? 0) | 0;
    const pos = typeof st.attributes.current_position === "number" ? (st.attributes.current_position as number) : null;
    const moving = st.state === "opening" || st.state === "closing";
    const setPos = !!(f & COVER_SET_POSITION) && pos !== null;
    const at = (n: number) => pos !== null && Math.abs(pos - n) < 3;
    const confirm = !!options.confirm;
    const items = [
      service("open", t("cover_open", "Open"), "mdi:arrow-up", entity, "cover", "open_cover", undefined, { active: at(100), disabled: unavailable, confirm }),
      ...(setPos ? [75, 50].map((n) => service(`position-${n}`, `${n} %`, "mdi:blinds-horizontal", entity, "cover", "set_cover_position", { position: n }, { active: at(n), disabled: unavailable, confirm })) : []),
      service("close", t("cover_close", "Close"), "mdi:arrow-down", entity, "cover", "close_cover", undefined, { active: at(0), disabled: unavailable, confirm }),
      ...(setPos ? [25].map((n) => service(`position-${n}`, `${n} %`, "mdi:blinds-horizontal", entity, "cover", "set_cover_position", { position: n }, { active: at(n), disabled: unavailable, confirm })) : []),
      service("stop", t("cover_stop", "Stop"), "mdi:stop", entity, "cover", "stop_cover", undefined, { active: moving, disabled: unavailable }),
    ].slice(0, 6);
    const tiltItems: NeonMenuItem[] = [];
    if (f & COVER_OPEN_TILT) tiltItems.push(service("tilt-open", t("cover_tilt_open", "Tilt open"), "mdi:unfold-more-horizontal", entity, "cover", "open_cover_tilt", undefined, { disabled: unavailable }));
    if (f & COVER_CLOSE_TILT) tiltItems.push(service("tilt-close", t("cover_tilt_close", "Tilt close"), "mdi:unfold-less-horizontal", entity, "cover", "close_cover_tilt", undefined, { disabled: unavailable }));
    const tilt = typeof st.attributes.current_tilt_position === "number" ? (st.attributes.current_tilt_position as number) : 0;
    const hasTilt = !!(f & (COVER_OPEN_TILT | COVER_CLOSE_TILT | COVER_SET_TILT));
    const center = hasTilt ? page("tilt", t("cover_tilt", "Tilt"), "mdi:blinds-horizontal", "tilt") : commonDetails;
    center.value = pos === null ? st.state : `${Math.round(pos)} %`;
    center.busy = moving;
    const main: NeonMenuPage = { id: "main", title: name, center, items, pad: setPos && !unavailable ? { y: { min: 0, max: 100, step: 1, value: pos ?? 0, invert: true, commit: "release", action: { type: "service", domain: "cover", service: "set_cover_position", target: { entity_id: entity } }, valueKey: "position" } } : undefined };
    if (!hasTilt) main.items = [...items.slice(0, 5), commonDetails];
    const pages = [main];
    if (hasTilt) pages.push({ id: "tilt", title: t("cover_tilt", "Tilt"), center: page("back", name, "mdi:arrow-left", "main"), items: [...tiltItems, commonDetails], pad: f & COVER_SET_TILT && !unavailable ? { y: { min: 0, max: 100, step: 1, value: tilt, invert: true, commit: "release", action: { type: "service", domain: "cover", service: "set_cover_tilt_position", target: { entity_id: entity } }, valueKey: "tilt_position" } } : undefined });
    return model(pages);
  }

  if (domain === "switch" || domain === "input_boolean") {
    const on = st.state === "on";
    return model([{ id: "main", title: name, center: { id: "power", label: name, icon: "mdi:power", value: on ? t("state_on", "On") : t("state_off", "Off"), active: on, disabled: unavailable, confirm: options.confirm, close: false, action: { type: "toggle", entity } }, items: [commonDetails] }]);
  }

  if (domain === "lock") {
    const locked = st.state === "locked";
    const busy = st.state === "locking" || st.state === "unlocking";
    const center = service("lock", name, locked ? "mdi:lock" : "mdi:lock-open", entity, "lock", locked ? "unlock" : "lock", undefined, { value: locked ? t("state_locked", "Locked") : t("state_unlocked", "Unlocked"), active: locked, busy, disabled: unavailable || busy, confirm: locked, close: false });
    return model([{ id: "main", title: name, center, items: [commonDetails] }]);
  }

  if (domain === "fan") return fanMenu(entity, st, commonDetails, model, t, unavailable);
  if (domain === "media_player") return mediaMenu(entity, st, options.presets ?? [], commonDetails, model, t, unavailable);
  if (domain === "climate") return climateMenu(entity, st, commonDetails, model, t, unavailable);
  if (domain === "camera") {
    const items = [commonDetails, { id: "look", label: t("through_camera", "Look through"), icon: options.cameraPro ? "mdi:cctv" : "mdi:lock", action: { type: "local", command: "camera_look", value: entity }, disabled: unavailable || !options.cameraPro, close: true } satisfies NeonMenuItem];
    return model([{ id: "main", title: name, center: { ...commonDetails, id: "live", icon: "mdi:video", label: name, value: st.state, image: safePicture(st.attributes.entity_picture) }, items }]);
  }
  return null;
}

function fanMenu(entity: string, st: HassEntity, commonDetails: NeonMenuItem, model: (p: NeonMenuPage[]) => NeonMenuModel, t: (k: string, f: string) => string, unavailable: boolean): NeonMenuModel {
  const f = Number(st.attributes.supported_features ?? 0) | 0;
  const on = st.state === "on";
  const pct = typeof st.attributes.percentage === "number" ? finiteNumber(st.attributes.percentage, on ? 100 : 0, 0, 100) : on ? 100 : 0;
  const rawPercentageStep = finiteNumber(st.attributes.percentage_step, 1);
  const percentageStep = rawPercentageStep > 0 ? Math.min(100, rawPercentageStep) : 1;
  const items: NeonMenuItem[] = [commonDetails];
  if (f & FAN_OSCILLATE) items.unshift(service("oscillate", t("honeycomb_oscillate", "Oscillate"), "mdi:rotate-orbit", entity, "fan", "oscillate", { oscillating: !st.attributes.oscillating }, { active: st.attributes.oscillating === true, disabled: unavailable, close: false }));
  const presets = Array.isArray(st.attributes.preset_modes) ? (st.attributes.preset_modes as string[]) : [];
  const pages: NeonMenuPage[] = [{ id: "main", title: String(st.attributes.friendly_name ?? entity), center: { id: "power", label: String(st.attributes.friendly_name ?? entity), icon: "mdi:fan", value: `${Math.round(pct)} %`, active: on, disabled: unavailable, close: false, action: { type: "toggle", entity } }, items: [...items, ...(f & FAN_PRESET && presets.length ? [page("presets", t("honeycomb_presets", "Presets"), "mdi:fan-chevron-down", "fan-presets-1")] : [])], pad: f & FAN_SET_SPEED && !unavailable ? { y: { min: 0, max: 100, step: percentageStep, value: pct, invert: true, commit: "move", throttleMs: 120, action: { type: "service", domain: "fan", service: "set_percentage", target: { entity_id: entity } }, valueKey: "percentage" } } : undefined }];
  if (f & FAN_PRESET && presets.length) pages.push(...paginate("fan-presets", t("honeycomb_presets", "Presets"), page("back", t("back", "Back"), "mdi:arrow-left", "main"), presets.map((p) => service(`preset-${p}`, p, "mdi:fan", entity, "fan", "set_preset_mode", { preset_mode: p }, { active: st.attributes.preset_mode === p, disabled: unavailable })), t));
  return model(pages);
}

function mediaMenu(entity: string, st: HassEntity, presets: MenuBuildOptions["presets"], commonDetails: NeonMenuItem, model: (p: NeonMenuPage[]) => NeonMenuModel, t: (k: string, f: string) => string, unavailable: boolean): NeonMenuModel {
  const playing = st.state === "playing";
  const off = st.state === "off" || st.state === "standby";
  const volume = finiteNumber(st.attributes.volume_level, 0, 0, 1);
  const center = service("play", String(st.attributes.friendly_name ?? entity), playing ? "mdi:pause" : off ? "mdi:power" : "mdi:play", entity, "media_player", off ? "turn_on" : "media_play_pause", undefined, { active: playing, busy: st.state === "buffering", disabled: unavailable, value: String(st.attributes.media_title ?? st.state), close: false });
  const pickers: NeonMenuItem[] = [];
  const sources = Array.isArray(st.attributes.source_list) ? st.attributes.source_list as string[] : [];
  if (sources.length) pickers.push(page("sources", t("honeycomb_sources", "Sources"), "mdi:audio-input-rca", "media-sources-1"));
  if (presets?.length) pickers.push(page("presets", t("honeycomb_presets", "Presets"), "mdi:playlist-music", "media-presets-1"));
  const pages: NeonMenuPage[] = [{ id: "main", title: String(st.attributes.friendly_name ?? entity), center, items: [service("previous", t("previous", "Previous"), "mdi:skip-previous", entity, "media_player", "media_previous_track", undefined, { disabled: off || unavailable, close: false }), service("next", t("next", "Next"), "mdi:skip-next", entity, "media_player", "media_next_track", undefined, { disabled: off || unavailable, close: false }), ...pickers, commonDetails], pad: unavailable ? undefined : { y: { min: 0, max: 1, step: 0.01, value: volume, invert: true, commit: "move", throttleMs: 120, action: { type: "service", domain: "media_player", service: "volume_set", target: { entity_id: entity } }, valueKey: "volume_level" } } }];
  if (sources.length) pages.push(...paginate("media-sources", t("honeycomb_sources", "Sources"), page("back", t("back", "Back"), "mdi:arrow-left", "main"), sources.map((s) => service(`source-${s}`, s, "mdi:music", entity, "media_player", "select_source", { source: s }, { active: st.attributes.source === s, disabled: unavailable })), t));
  if (presets?.length) pages.push(...paginate("media-presets", t("honeycomb_presets", "Presets"), page("back", t("back", "Back"), "mdi:arrow-left", "main"), presets.map((p) => service(`preset-${p.id}`, p.label, "mdi:playlist-play", entity, "media_player", "play_media", { media_content_type: p.type, media_content_id: p.content }, { disabled: unavailable })), t));
  return model(pages);
}

function climateMenu(entity: string, st: HassEntity, commonDetails: NeonMenuItem, model: (p: NeonMenuPage[]) => NeonMenuModel, t: (k: string, f: string) => string, unavailable: boolean): NeonMenuModel {
  const modes = Array.isArray(st.attributes.hvac_modes) ? st.attributes.hvac_modes as string[] : [];
  const fanModes = Array.isArray(st.attributes.fan_modes) ? st.attributes.fan_modes as string[] : [];
  const min = finiteNumber(st.attributes.min_temp, 7, -100, 100);
  const candidateMax = finiteNumber(st.attributes.max_temp, 35, -100, 100);
  const max = candidateMax > min ? candidateMax : min + 1;
  const step = finiteNumber(st.attributes.target_temp_step, 0.5, 0.1, max - min);
  const value = finiteNumber(st.attributes.temperature ?? st.attributes.current_temperature, min, min, max);
  const center = service("toggle", String(st.attributes.friendly_name ?? entity), "mdi:thermostat", entity, "climate", st.state === "off" ? "turn_on" : "turn_off", undefined, { value: `${value} °`, active: st.state !== "off", disabled: unavailable, close: false });
  const modeItems = modes.map((m) => service(`mode-${m}`, m, "mdi:thermostat", entity, "climate", "set_hvac_mode", { hvac_mode: m }, { active: st.state === m, disabled: unavailable }));
  const fanItems = fanModes.map((m) => service(`fan-mode-${m}`, m, "mdi:fan", entity, "climate", "set_fan_mode", { fan_mode: m }, { active: st.attributes.fan_mode === m, disabled: unavailable }));
  const pages: NeonMenuPage[] = [{ id: "main", title: String(st.attributes.friendly_name ?? entity), center, items: [...(modeItems.length ? [page("modes", t("honeycomb_modes", "Modes"), "mdi:thermostat", "climate-modes-1")] : []), ...(fanItems.length ? [page("fan-modes", t("honeycomb_fan", "Fan"), "mdi:fan", "climate-fan-modes-1")] : []), commonDetails], pad: unavailable ? undefined : { y: { min, max, step, value, invert: true, commit: "release", action: { type: "service", domain: "climate", service: "set_temperature", target: { entity_id: entity } }, valueKey: "temperature" } } }];
  if (modeItems.length) pages.push(...paginate("climate-modes", t("honeycomb_modes", "Modes"), page("back", t("back", "Back"), "mdi:arrow-left", "main"), modeItems, t));
  if (fanItems.length) pages.push(...paginate("climate-fan-modes", t("honeycomb_fan", "Fan"), page("back", t("back", "Back"), "mdi:arrow-left", "main"), fanItems, t));
  return model(pages);
}

function carMenu(entity: string, car: CarState, commonDetails: NeonMenuItem, model: (p: NeonMenuPage[]) => NeonMenuModel, t: (k: string, f: string) => string): NeonMenuModel {
  const items: NeonMenuItem[] = [];
  const e = car.entities;
  if (e.lock) {
    const native = e.lock.startsWith("lock.");
    items.push(service("car-lock", car.locked ? t("car_unlock_btn", "Unlock") : t("car_lock_btn", "Lock"), car.locked ? "mdi:lock-open" : "mdi:lock", e.lock, native ? "lock" : "homeassistant", native ? (car.locked ? "unlock" : "lock") : (car.locked ? "turn_off" : "turn_on"), undefined, { active: car.locked === true, confirm: car.locked === true }));
  }
  if (e.climate) items.push(service("car-climate", car.climateOn ? t("car_climate_off", "Climate off") : t("car_climate_on", "Climate on"), "mdi:car-defrost-front", e.climate, e.climate.startsWith("climate.") ? "climate" : "homeassistant", car.climateOn ? "turn_off" : "turn_on", undefined, { active: car.climateOn === true }));
  if (e.charging) items.push(service("car-charge", car.charging ? t("car_charge_stop", "Stop charging") : t("car_charge_start", "Start charging"), "mdi:ev-station", e.charging, "homeassistant", car.charging ? "turn_off" : "turn_on", undefined, { active: car.charging }));
  items.push(commonDetails);
  const value = [car.soc !== null ? `${Math.round(car.soc)} %` : "", car.range !== null ? `${Math.round(car.range)} ${car.rangeUnit}` : ""].filter(Boolean).join(" · ");
  const carLabel = t("honeycomb_car", "Car");
  return model([{ id: "main", title: carLabel, center: { id: "car", label: carLabel, icon: "mdi:car-electric", value, active: car.charging, action: { type: "more_info", entity } }, items }]);
}
