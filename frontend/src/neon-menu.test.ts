import assert from "node:assert/strict";
import { test } from "node:test";
import {
  HONEYCOMB_GEOMETRY,
  HONEYCOMB_MOTION,
  dispatchNeonAction,
  honeycombFrameProgress,
  honeycombPoints,
  menuForEntity,
  menuForCentral,
  nextDirectionalIndex,
  placeHoneycomb,
  validNeonAction,
  type NeonMenuItem,
} from "./neon-menu.ts";
import type { HassEntity } from "./types.ts";

const state = (entity_id: string, value: string, attributes: Record<string, unknown> = {}): HassEntity => ({ entity_id, state: value, attributes });
const hass = (...states: HassEntity[]) => ({ states: Object.fromEntries(states.map((s) => [s.entity_id, s])) });

test("honeycomb geometry uses fixed 60 degree slots and minimum touch targets", () => {
  const points = honeycombPoints(6);
  assert.equal(points.length, 6);
  assert.ok(HONEYCOMB_GEOMETRY.size >= 48 && HONEYCOMB_GEOMETRY.minTarget >= 48);
  assert.equal(HONEYCOMB_GEOMETRY.centerSize, HONEYCOMB_GEOMETRY.size);
  assert.equal(HONEYCOMB_GEOMETRY.centerHeight, HONEYCOMB_GEOMETRY.height);
  for (const p of points) assert.ok(Math.abs(Math.hypot(p.x, p.y) - HONEYCOMB_GEOMETRY.radius) < 1e-9);
  assert.equal(HONEYCOMB_GEOMETRY.radius - HONEYCOMB_GEOMETRY.size, HONEYCOMB_GEOMETRY.spacing);
  assert.ok(Math.abs(points[0].x + HONEYCOMB_GEOMETRY.radius / 2) < 1e-9);
  assert.ok(Math.abs(points[0].y + HONEYCOMB_GEOMETRY.radius * Math.sqrt(3) / 2) < 1e-9);
  assert.ok(Math.abs(points[1].x - HONEYCOMB_GEOMETRY.radius / 2) < 1e-9);
});

test("directional focus selects the nearest cell in the requested geometric half-plane", () => {
  const points = [{ x: 0, y: 0 }, ...honeycombPoints(6)];
  assert.equal(nextDirectionalIndex(points, 0, "up"), 1);
  assert.equal(nextDirectionalIndex(points, 0, "right"), 3);
  assert.ok([4, 5].includes(nextDirectionalIndex(points, 0, "down")));
  assert.ok([5, 6].includes(nextDirectionalIndex(points, 0, "left")));
  assert.equal(nextDirectionalIndex(points, 1, "down"), 5);
});

test("motion tokens stay inside the roadmap acceptance window", () => {
  assert.ok(HONEYCOMB_MOTION.duration >= 120 && HONEYCOMB_MOTION.duration <= 180);
  assert.ok(HONEYCOMB_MOTION.stagger >= 35 && HONEYCOMB_MOTION.stagger <= 60);
  assert.ok(HONEYCOMB_MOTION.duration + HONEYCOMB_MOTION.stagger * 5 <= 450);
  assert.ok(HONEYCOMB_MOTION.startScale >= 0.68 && HONEYCOMB_MOTION.startScale <= 0.8);
  assert.ok(HONEYCOMB_MOTION.translate >= 12 && HONEYCOMB_MOTION.translate <= 24);
});

test("golden-frame progress preserves clockwise stagger at 0, 25, 50, 75 and 100 percent", () => {
  for (const percent of [0, 25, 50, 75, 100]) {
    const frame = Array.from({ length: 6 }, (_, i) => honeycombFrameProgress(percent, i));
    assert.ok(frame.every((v) => v >= 0 && v <= 1));
    assert.ok(frame.every((v, i) => i === 0 || frame[i - 1] >= v));
  }
  assert.deepEqual(Array.from({ length: 6 }, (_, i) => honeycombFrameProgress(0, i)), [0, 0, 0, 0, 0, 0]);
  assert.deepEqual(Array.from({ length: 6 }, (_, i) => honeycombFrameProgress(100, i)), [1, 1, 1, 1, 1, 1]);
});

test("placement clamps to the real stage, avoids room panels and falls back to a bottom sheet", () => {
  assert.deepEqual(placeHoneycomb(800, 600, 10, 10), { left: 8, top: 8, width: 225, height: 225, anchorX: 2, anchorY: 2, dock: false, sheet: false });
  const edge = placeHoneycomb(800, 600, 795, 590);
  assert.equal(edge.left, 567);
  assert.equal(edge.top, 367);
  const narrow = placeHoneycomb(220, 500, 20, 30);
  assert.equal(narrow.dock, true);
  assert.equal(narrow.sheet, true);
  assert.equal(narrow.left, 8);
  assert.equal(narrow.top, 312);
  assert.deepEqual({ width: narrow.width, height: narrow.height }, { width: 204, height: 180 });
  const panelAware = placeHoneycomb(800, 600, 400, 300, true);
  assert.equal(panelAware.dock, false);
  assert.equal(panelAware.sheet, false);
  assert.equal(panelAware.left + panelAware.width <= 800 - 374, true);
  const portraitPanel = placeHoneycomb(729, 742, 462, 142, true, { bottom: 52 });
  assert.equal(portraitPanel.dock, false);
  assert.equal(portraitPanel.sheet, false);
  assert.equal(portraitPanel.left + portraitPanel.width / 2, 462);
  assert.equal(portraitPanel.top + portraitPanel.height / 2, 142);
  assert.deepEqual(placeHoneycomb(800, 600, 4, 596, false, { top: 20, right: 12, bottom: 34, left: 16 }), { left: 24, top: 333, width: 225, height: 225, anchorX: -20, anchorY: 263, dock: false, sheet: false });
});

test("action validation rejects unknown commands and unsafe service names", () => {
  assert.equal(validNeonAction({ type: "local", command: "camera_look" }), true);
  assert.equal(validNeonAction({ type: "local", command: "eval" }), false);
  assert.equal(validNeonAction({ type: "service", domain: "light", service: "turn_on" }), true);
  assert.equal(validNeonAction({ type: "service", domain: "light;alert(1)", service: "turn_on" }), false);
  assert.equal(validNeonAction({ type: "navigate", path: "https://example.com" }), false);
  assert.equal(validNeonAction({ type: "custom_button", button: { id: "bad", label: "Bad", action: "navigate", target: "https://example.com" } }), false);
  assert.equal(validNeonAction({ type: "custom_button", button: { id: "ok", label: "OK", action: "service", target: "light.turn_on" } }), true);
});

test("dispatcher preserves a target different from the anchored entity and merges data", async () => {
  const calls: unknown[][] = [];
  const item: NeonMenuItem = { id: "charge", label: "Charge", icon: "mdi:ev-station", action: { type: "service", domain: "homeassistant", service: "turn_on", target: { entity_id: "switch.car_charge" }, data: { mode: "eco" } } };
  const result = await dispatchNeonAction(item, {
    hass: { callService: async (...args: unknown[]) => void calls.push(args) } as never,
    source: new EventTarget(), toggle: () => undefined, moreInfo: () => undefined,
  });
  assert.deepEqual(calls, [["homeassistant", "turn_on", { entity_id: "switch.car_charge", mode: "eco" }]]);
  assert.deepEqual(result, { executed: true, close: true });
});

test("dispatcher blocks disabled actions and cancelled confirmation", async () => {
  let calls = 0;
  const base: NeonMenuItem = { id: "unlock", label: "Unlock", icon: "mdi:lock-open", confirm: true, action: { type: "service", domain: "lock", service: "unlock", target: { entity_id: "lock.door" } } };
  const context = { hass: { callService: async () => { calls++; } }, source: new EventTarget(), toggle: () => undefined, moreInfo: () => undefined, confirm: () => false };
  assert.equal((await dispatchNeonAction(base, context)).executed, false);
  assert.equal((await dispatchNeonAction({ ...base, disabled: true }, { ...context, confirm: () => true })).executed, false);
  assert.equal(calls, 0);
});

test("light keeps all eight colours through paginated pages and a throttled brightness pad", () => {
  const model = menuForEntity(hass(state("light.desk", "on", { friendly_name: "Desk", brightness: 161, supported_color_modes: ["brightness", "rgb"] })), "light.desk")!;
  assert.equal(model.initialPage, "main");
  assert.equal(model.pages[0].pad?.y?.value, 63);
  const colours = model.pages.flatMap((p) => p.items).filter((i) => i.id.startsWith("rgb-"));
  assert.equal(colours.length, 8);
  assert.ok(model.pages.every((p) => p.items.length <= 6));
});

test("cover keeps open, 75, 50, close, 25 and stop while tilt has its own page", () => {
  const model = menuForEntity(hass(state("cover.blind", "opening", { friendly_name: "Blind", supported_features: 4 | 16 | 32 | 128, current_position: 50, current_tilt_position: 30 })), "cover.blind", { confirm: true })!;
  assert.deepEqual(model.pages[0].items.map((i) => i.id), ["open", "position-75", "position-50", "close", "position-25", "stop"]);
  assert.equal(model.pages[0].items.find((i) => i.id === "stop")?.confirm, undefined);
  assert.equal(model.pages[0].items.find((i) => i.id === "close")?.confirm, true);
  assert.equal(model.pages[0].pad?.y?.commit, "release");
  assert.ok(model.pages.some((p) => p.id === "tilt" && p.pad?.y?.valueKey === "tilt_position"));
});

test("unavailable controls are disabled but more-info remains reachable", () => {
  for (const id of ["light.a", "cover.a", "switch.a", "fan.a", "lock.a", "camera.a", "media_player.a", "climate.a"]) {
    const model = menuForEntity(hass(state(id, "unavailable", { supported_color_modes: ["brightness"], supported_features: 15, hvac_modes: ["off", "heat"] })), id)!;
    const all = model.pages.flatMap((p) => [p.center, ...p.items]);
    assert.ok(all.some((i) => i.action.type === "more_info" && !i.disabled && i.unavailable), id);
    assert.ok(all.filter((i) => i.action.type === "service" || i.action.type === "toggle").every((i) => i.disabled), id);
  }
});

test("unlock always confirms, regardless of placement policy", () => {
  const locked = menuForEntity(hass(state("lock.front", "locked")), "lock.front", { confirm: false })!;
  assert.equal(locked.pages[0].center.confirm, true);
  const unlocked = menuForEntity(hass(state("lock.front", "unlocked")), "lock.front", { confirm: true })!;
  assert.equal(unlocked.pages[0].center.confirm, false);
});

test("media and climate lists paginate without exceeding six outer cells", () => {
  const media = menuForEntity(hass(state("media_player.room", "playing", { source_list: Array.from({ length: 13 }, (_, i) => `S${i}`), volume_level: 0.42 })), "media_player.room")!;
  assert.equal(media.pages.flatMap((p) => p.items).filter((i) => i.id.startsWith("source-")).length, 13);
  assert.equal(media.pages[0].pad?.y?.value, 0.42);
  const climate = menuForEntity(hass(state("climate.room", "heat", { hvac_modes: ["off", "heat", "cool", "auto", "dry", "fan_only", "heat_cool"], fan_modes: ["auto", "low", "medium", "high", "turbo"], fan_mode: "medium", temperature: 23 })), "climate.room")!;
  assert.equal(climate.pages.flatMap((p) => p.items).filter((i) => i.id.startsWith("mode-")).length, 7);
  const climateFanModes = climate.pages.flatMap((p) => p.items).filter((i) => i.id.startsWith("fan-mode-"));
  assert.equal(climateFanModes.length, 5);
  assert.equal(climateFanModes.find((i) => i.id === "fan-mode-medium")?.active, true);
  assert.deepEqual(climateFanModes[0].action, { type: "service", domain: "climate", service: "set_fan_mode", target: { entity_id: "climate.room" }, data: { fan_mode: "auto" } });
  assert.ok([...media.pages, ...climate.pages].every((p) => p.items.length <= 6));
});

test("fan exposes only confirmed capabilities", () => {
  const basic = menuForEntity(hass(state("fan.basic", "on", { percentage: 40, preset_modes: ["sleep"] })), "fan.basic")!;
  assert.equal(basic.pages[0].pad, undefined);
  assert.equal(basic.pages.some((p) => p.id.startsWith("fan-presets")), false);
  assert.equal(basic.pages.flatMap((p) => p.items).some((i) => i.id === "oscillate"), false);
  const full = menuForEntity(hass(state("fan.full", "on", { supported_features: 1 | 2 | 8, percentage: 40, oscillating: false, preset_modes: ["sleep"] })), "fan.full")!;
  assert.equal(full.pages[0].pad?.y?.valueKey, "percentage");
  assert.ok(full.pages.some((p) => p.id === "fan-presets-1"));
  assert.ok(full.pages[0].items.some((i) => i.id === "oscillate"));
});

test("camera keeps details and look-through while rejecting an unsafe picture URL", () => {
  const camera = menuForEntity(hass(state("camera.front", "streaming", { entity_picture: "javascript:alert(1)" })), "camera.front", { cameraPro: true })!;
  assert.equal(camera.pages[0].center.image, undefined);
  assert.ok(camera.pages[0].items.some((i) => i.action.type === "more_info"));
  assert.ok(camera.pages[0].items.some((i) => i.action.type === "local" && i.action.command === "camera_look"));
  const withoutPro = menuForEntity(hass(state("camera.front", "streaming")), "camera.front")!;
  assert.equal(withoutPro.pages[0].items.find((i) => i.id === "look")?.disabled, true);
});

test("malformed numeric attributes cannot create non-finite pad values", () => {
  const fan = menuForEntity(hass(state("fan.bad", "on", { supported_features: 1, percentage: Number.NaN, percentage_step: 0 })), "fan.bad")!;
  assert.deepEqual({ value: fan.pages[0].pad?.y?.value, step: fan.pages[0].pad?.y?.step }, { value: 100, step: 1 });
  const climate = menuForEntity(hass(state("climate.bad", "heat", { min_temp: 30, max_temp: 10, target_temp_step: Number.NaN, temperature: Infinity })), "climate.bad")!;
  assert.deepEqual({ min: climate.pages[0].pad?.y?.min, max: climate.pages[0].pad?.y?.max, value: climate.pages[0].pad?.y?.value }, { min: 30, max: 31, value: 30 });
});

test("Car Pro actions keep cross-entity targets and require confirmation before unlock", () => {
  const car = menuForEntity(hass(state("binary_sensor.car_present", "on")), "binary_sensor.car_present", {
    car: {
      entities: { soc: "sensor.car_soc", range: "sensor.car_range", charging: "switch.car_charge", plugged: "binary_sensor.car_plugged", lock: "lock.car", climate: "climate.car", tracker: null },
      soc: 72, range: 310, rangeUnit: "km", chargingW: 0, charging: false, plugged: true, locked: true, climateOn: false, away: null,
    },
  })!;
  const items = car.pages[0].items;
  const unlock = items.find((i) => i.id === "car-lock")!;
  assert.equal(unlock.confirm, true);
  assert.deepEqual(unlock.action, { type: "service", domain: "lock", service: "unlock", target: { entity_id: "lock.car" }, data: undefined });
  assert.deepEqual((items.find((i) => i.id === "car-charge")!.action as { target: unknown }).target, { entity_id: "switch.car_charge" });
});

test("central menu paginates favourites and typed custom buttons with whole-house confirmation", () => {
  const states = Array.from({ length: 9 }, (_, i) => state(`scene.s${i}`, "off", { friendly_name: `Scene ${i}` }));
  const central = menuForCentral(hass(...states), {
    label: "Whole house",
    lights: ["light.a", "light.b"],
    covers: ["cover.a"],
    favorites: states.map((s) => s.entity_id),
    buttons: [{ id: "dash", label: "Dashboard", icon: "view-dashboard", action: "navigate", target: "/lovelace/home" }],
    confirmWholeHouse: true,
    t: (key, fallback) => `vi:${key}:${fallback}`,
  });
  assert.ok(central.pages.every((p) => p.items.length <= 6));
  assert.equal(central.pages[0].items.filter((i) => i.id.startsWith("all-")).every((i) => i.confirm), true);
  assert.equal(central.pages.flatMap((p) => p.items).filter((i) => i.id.startsWith("favorite-")).length, 9);
  const custom = central.pages.flatMap((p) => p.items).find((i) => i.id === "custom-dash")!;
  assert.deepEqual(custom.action, { type: "custom_button", button: { id: "dash", label: "Dashboard", icon: "view-dashboard", action: "navigate", target: "/lovelace/home" } });
  assert.equal(central.pages[0].items[0].label, "vi:honeycomb_lights_on:Lights on");
});
