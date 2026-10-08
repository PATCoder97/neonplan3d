import assert from "node:assert/strict";
import { test } from "node:test";

test("a lamp switched by a relay takes colour and brightness from its colour entity", async () => {
  const { lightGlow } = await import("./devices.ts");
  const relay = { entity_id: "switch.relay", state: "on", attributes: {}, last_changed: "", last_updated: "", context: { id: "", user_id: null, parent_id: null } };
  const bulb = { ...relay, entity_id: "light.bulb", attributes: { brightness: 255, rgb_color: [0, 0, 255], color_mode: "rgb" } };
  const g = lightGlow(relay as never, bulb as never)!;
  assert.deepEqual(g.color, [0, 0, 1]);
  assert.equal(g.level, 1);
  // the relay off: no glow, whatever the bulb says
  assert.equal(lightGlow({ ...relay, state: "off" } as never, bulb as never), null);
  // the bulb unavailable: the relay's own (plain) glow
  assert.deepEqual(lightGlow(relay as never, { ...bulb, state: "unavailable" } as never)!.color, [1, 0.71, 0.28]);
});
import { appColor, areaEntities, otherAreaEntities, roomClimateSensors, roomClimateValue, unassignedEntities, autoPlace, entityName, fridgeDoors, furnitureEntities, groupByDevice, hasScreen, isActive, isMediaFurniture, kindOf, lightGlow, openingEntities, openingState, powerSensorsOf, primaryEntities, roomPanelEntities, windowPosition, confirmEntities, robotRoom, robotRoomSensor, roomKey, TOGGLE_KINDS } from "./devices.ts";
import type { Floor, Opening, Room } from "./model.ts";
import { centroid, FURNITURE_SIZE, newFloor, pointInPolygon } from "./model.ts";
import type { HomeAssistant } from "./types.ts";

/** Opening state without the "sensed" flag (tested on its own below). */
function stateOf(...args: Parameters<typeof openingState>) {
  const { sensed: _sensed, ...rest } = openingState(...args);
  return rest;
}

test("a fan opens its details on tap instead of toggling immediately", () => {
  assert.equal(TOGGLE_KINDS.has("fan"), false);
  assert.equal(TOGGLE_KINDS.has("climate"), false);
  assert.equal(TOGGLE_KINDS.has("light"), true);
  assert.equal(TOGGLE_KINDS.has("switch"), true);
});

function hassWith(): HomeAssistant {
  const st = (entity_id: string, state: string, attributes: Record<string, unknown> = {}) => ({ entity_id, state, attributes });
  return {
    language: "de",
    connection: {} as HomeAssistant["connection"],
    callWS: async () => undefined as never,
    callService: async () => undefined,
    areas: { wohnen: { area_id: "wohnen", name: "Wohnzimmer" } },
    devices: { d1: { id: "d1", area_id: "wohnen" } },
    entities: {
      "light.decke": { entity_id: "light.decke", area_id: "wohnen" },
      "light.stehlampe": { entity_id: "light.stehlampe", device_id: "d1" },
      "switch.versteckt": { entity_id: "switch.versteckt", area_id: "wohnen", hidden: true },
      "switch.firmware": { entity_id: "switch.firmware", area_id: "wohnen", entity_category: "config" },
      "sensor.temp": { entity_id: "sensor.temp", area_id: "wohnen" },
      "sensor.signal": { entity_id: "sensor.signal", area_id: "wohnen" },
      "cover.rollo": { entity_id: "cover.rollo", area_id: "wohnen" },
      "light.kueche": { entity_id: "light.kueche", area_id: "kueche" },
      "update.x": { entity_id: "update.x", area_id: "wohnen" },
    },
    states: {
      "light.decke": st("light.decke", "on", { friendly_name: "Wohnzimmer Decke", brightness: 128, color_mode: "color_temp", color_temp_kelvin: 2700 }),
      "light.stehlampe": st("light.stehlampe", "off", { friendly_name: "Stehlampe" }),
      "switch.versteckt": st("switch.versteckt", "on"),
      "switch.firmware": st("switch.firmware", "on"),
      "sensor.temp": st("sensor.temp", "21.5", { device_class: "temperature", friendly_name: "Temperatur" }),
      "sensor.signal": st("sensor.signal", "-60", { device_class: "signal_strength" }),
      "cover.rollo": st("cover.rollo", "open", { friendly_name: "Rollladen" }),
      "light.kueche": st("light.kueche", "on"),
      "update.x": st("update.x", "off"),
    },
  };
}

test("area entities include device areas and skip hidden, config and unsupported entities", () => {
  const ids = areaEntities(hassWith(), "wohnen");
  assert.deepEqual(ids, ["light.decke", "light.stehlampe", "cover.rollo", "sensor.temp"]);
  assert.deepEqual(areaEntities(hassWith(), null), []);
});

test("entity names drop the area prefix", () => {
  const hass = hassWith();
  assert.equal(entityName(hass, "light.decke", "Wohnzimmer"), "Decke");
  assert.equal(entityName(hass, "light.stehlampe", "Wohnzimmer"), "Stehlampe");
});

test("kinds, active states and light glow", () => {
  const hass = hassWith();
  assert.equal(kindOf("media_player.tv"), "media");
  assert.equal(kindOf("input_boolean.gast"), "switch");
  assert.equal(kindOf("water_heater.bathroom"), "switch");
  assert.equal(kindOf("automation.x"), null);
  assert.ok(isActive(hass.states["light.decke"]));
  assert.ok(isActive(hass.states["cover.rollo"]));
  assert.ok(!isActive(hass.states["light.stehlampe"]));
  const glow = lightGlow(hass.states["light.decke"])!;
  // a perceptual curve: half brightness glows at 0.2 + 0.8 * sqrt(0.5), a lamp at 10 % still clearly "on"
  assert.ok(Math.abs(glow.level - (0.2 + 0.8 * Math.sqrt(128 / 255))) < 1e-9);
  assert.ok(lightGlow({ ...hass.states["light.decke"], attributes: { ...hass.states["light.decke"].attributes, brightness: 26 } })!.level > 0.4);
  assert.ok(glow.color[0] > glow.color[2], "2700 K is warm");
  assert.equal(lightGlow(hass.states["light.stehlampe"]), null);
});

test("standard active-state mapping covers occupancy, playback, openings and unavailable fallbacks", () => {
  const st = (entity_id: string, state: string, attributes: Record<string, unknown> = {}) => ({ entity_id, state, attributes }) as never;
  assert.ok(isActive(st("binary_sensor.occupied", "on", { device_class: "occupancy" })));
  assert.ok(isActive(st("media_player.speaker", "playing")));
  assert.ok(isActive(st("cover.blind", "open")));
  assert.ok(!isActive(st("binary_sensor.occupied", "off", { device_class: "occupancy" })));
  assert.ok(!isActive(st("media_player.speaker", "unavailable")));
  assert.ok(!isActive(undefined));
});

const room: Room = { id: "r", name: "R", area_id: null, points: [[0, 0], [5, 0], [5, 4], [0, 4]], floor_material: "wood" };

test("automatic placement keeps devices inside the room, apart, and off the room label", () => {
  const ids = ["light.a", "light.b", "switch.c", "sensor.d", "cover.e"];
  const out = autoPlace(room, ids);
  assert.equal(out.length, ids.length);
  const label = centroid(room.points);
  for (const p of out) {
    assert.ok(pointInPolygon([p.x, p.z], room.points));
    // lamps hang from the ceiling and may sit above the room label; other markers keep it free
    if (!p.entity_id.startsWith("light.")) assert.ok(Math.hypot(p.x - label[0], p.z - label[1]) >= 0.69, "room label stays free");
  }
  const first = autoPlace(room, ["light.a"])[0];
  assert.ok(Math.hypot(first.x - label[0], first.z - label[1]) < 0.3, "a single ceiling light goes to the middle");
  for (let i = 0; i < out.length; i++) {
    for (let j = i + 1; j < out.length; j++) assert.ok(Math.hypot(out[i].x - out[j].x, out[i].z - out[j].z) > 0.8);
  }
  assert.deepEqual(autoPlace(room, ids), out, "deterministic");
});

test("automatic placement avoids markers that are already there", () => {
  const [first] = autoPlace(room, ["switch.a"]);
  const [second] = autoPlace(room, ["switch.b"], [[first.x, first.z]]);
  assert.ok(Math.hypot(first.x - second.x, first.z - second.z) > 1);
});

test("automatic placement works in a tiny room", () => {
  const tiny: Room = { ...room, points: [[0, 0], [0.8, 0], [0.8, 0.8], [0, 0.8]] };
  const out = autoPlace(tiny, ["light.a", "switch.b"]);
  assert.equal(out.length, 2);
  for (const p of out) assert.ok(pointInPolygon([p.x, p.z], tiny.points));
});

test("doors and windows get blinds and contacts of their room's area, or the ones set by hand", () => {
  const hass = hassWith();
  hass.entities!["binary_sensor.f1"] = { entity_id: "binary_sensor.f1", area_id: "wohnen" };
  hass.entities!["binary_sensor.f2"] = { entity_id: "binary_sensor.f2", area_id: "wohnen" };
  hass.entities!["binary_sensor.tuer"] = { entity_id: "binary_sensor.tuer", area_id: "wohnen" };
  hass.states["binary_sensor.f1"] = { entity_id: "binary_sensor.f1", state: "on", attributes: { device_class: "window" } };
  hass.states["binary_sensor.f2"] = { entity_id: "binary_sensor.f2", state: "off", attributes: { device_class: "window" } };
  hass.states["binary_sensor.tuer"] = { entity_id: "binary_sensor.tuer", state: "off", attributes: { device_class: "door" } };
  const o = (id: string, type: "door" | "window", edge: number, extra: Partial<Opening> = {}): Opening => ({
    id, room_id: "r", edge, offset: 1, width: 1, type, sill: 0.9, height: 1.3, hinge: "left", leaves: 1, swing: "in", cover: null, contact: null, contact2: null, tilt: null, ...extra,
  });
  const floor: Floor = {
    ...newFloor("f", "F", 0),
    rooms: [{ ...room, area_id: "wohnen" }],
    openings: [o("w2", "window", 2), o("w1", "window", 0), o("d", "door", 1), o("w3", "window", 3, { cover: "none", contact: "binary_sensor.tuer" })],
  };
  const links = openingEntities(hass, [floor]);
  // the only blind of the area serves every window without its own choice; sensors go one per window
  assert.deepEqual(links.get("w1"), { cover: "cover.rollo", contact: "binary_sensor.f1", tilt: null, contact2: null, tilt2: null, position: null, positionInverted: false, tiltAngle: null, tiltMax: null, tiltOffset: null, tiltInvert: false, shut: false });
  assert.deepEqual(links.get("w2"), { cover: "cover.rollo", contact: "binary_sensor.f2", tilt: null, contact2: null, tilt2: null, position: null, positionInverted: false, tiltAngle: null, tiltMax: null, tiltOffset: null, tiltInvert: false, shut: false });
  assert.deepEqual(links.get("w3"), { cover: null, contact: "binary_sensor.tuer", tilt: null, contact2: null, tilt2: null, position: null, positionInverted: false, tiltAngle: null, tiltMax: null, tiltOffset: null, tiltInvert: false, shut: false });
  assert.deepEqual(links.get("d"), { cover: null, contact: "binary_sensor.tuer", tilt: null, contact2: null, tilt2: null, position: null, positionInverted: false, tiltAngle: null, tiltMax: null, tiltOffset: null, tiltInvert: false, shut: false });
});

test("a position sensor drives the blind live, as a percentage or a fraction", () => {
  const hass = hassWith();
  hass.states["cover.rollo"] = { entity_id: "cover.rollo", state: "closing", attributes: { current_position: 100 } };
  hass.states["sensor.level"] = { entity_id: "sensor.level", state: "0.25", attributes: {} };
  const e = { cover: "cover.rollo", contact: null, tilt: null, position: "sensor.level" };
  assert.equal(stateOf(hass, e).cover, 0.75);
  hass.states["sensor.level"].state = "60";
  assert.equal(stateOf(hass, e).cover, 0.4);
  assert.equal(stateOf(hass, { ...e, positionInverted: true }).cover, 0.6);
  hass.states["sensor.level"] = { entity_id: "sensor.level", state: "1", attributes: { unit_of_measurement: "%" } };
  assert.equal(stateOf(hass, e).cover, 0.99);
  // an unavailable sensor leaves the cover entity in charge (its position: fully open)
  hass.states["sensor.level"].state = "unavailable";
  assert.equal(stateOf(hass, e).cover, 0);
});

test("opening states: open, tilted and blind position", () => {
  const hass = hassWith();
  hass.states["binary_sensor.k"] = { entity_id: "binary_sensor.k", state: "on", attributes: {} };
  hass.states["binary_sensor.t"] = { entity_id: "binary_sensor.t", state: "on", attributes: {} };
  hass.states["cover.p"] = { entity_id: "cover.p", state: "open", attributes: { current_position: 25 } };
  assert.deepEqual(stateOf(hass, { cover: null, contact: "binary_sensor.k", tilt: null }), { open: 1, open2: 0, tilt: 0, tilt2: 0, cover: null });
  assert.deepEqual(stateOf(hass, { cover: "cover.p", contact: "binary_sensor.k", tilt: "binary_sensor.t" }), { open: 0, open2: 0, tilt: 1, tilt2: 0, cover: 0.75 });
  assert.deepEqual(stateOf(hass, { cover: "cover.rollo", contact: null, tilt: null }), { open: 0, open2: 0, tilt: 0, tilt2: 0, cover: 0 });
});

test("garage doors use garage covers and contacts; door leaves follow their contact or stand half open", () => {
  const hass = hassWith();
  const add = (id: string, state: string, attributes: Record<string, unknown>) => {
    hass.entities![id] = { entity_id: id, area_id: "wohnen" };
    hass.states[id] = { entity_id: id, state, attributes };
  };
  add("cover.tor", "open", { device_class: "garage" });
  add("binary_sensor.tuer", "on", { device_class: "door" });
  const o = (id: string, type: Opening["type"], edge: number): Opening => ({
    id, room_id: "r", edge, offset: 1, width: 1, type, sill: 0, height: 2, hinge: "left", leaves: 1, swing: "in", cover: null, contact: null, contact2: null, tilt: null,
  });
  const floor: Floor = { ...newFloor("f", "F", 0), rooms: [{ ...room, area_id: "wohnen" }], openings: [o("g", "garage", 0), o("w", "window", 1), o("d", "door", 2)] };
  const links = openingEntities(hass, [floor]);
  // the garage cover goes to the garage door only; the window keeps the ordinary blind
  assert.equal(links.get("g")!.cover, "cover.tor");
  assert.equal(links.get("w")!.cover, "cover.rollo");
  assert.equal(links.get("d")!.contact, "binary_sensor.tuer");
  assert.deepEqual(stateOf(hass, links.get("g")!, "garage"), { open: 0, open2: 0, tilt: 0, tilt2: 0, cover: 0 });
  hass.states["cover.tor"] = { entity_id: "cover.tor", state: "closing", attributes: { device_class: "garage" } };
  assert.equal(stateOf(hass, links.get("g")!, "garage").cover, 0.5);
  assert.equal(stateOf(hass, links.get("d")!, "door").open, 1);
  assert.equal(stateOf(hass, { cover: null, contact: null, tilt: null }, "door").open, 0.5);
});

test("entities are grouped by device; the entity without a name of its own is the main one", () => {
  const hass = hassWith();
  const add = (id: string, device: string, name?: string) => {
    hass.entities![id] = { entity_id: id, area_id: "wohnen", device_id: device, ...(name ? { name } : {}) };
    hass.states[id] = { entity_id: id, state: "on", attributes: { friendly_name: name ?? "Awtrix" } };
  };
  add("light.awtrix_indicator_1", "awtrix", "Indicator 1");
  add("light.awtrix_matrix", "awtrix", "Matrix");
  add("light.awtrix", "awtrix");
  add("light.awtrix_indicator_2", "awtrix", "Indicator 2");
  const ids = areaEntities(hass, "wohnen").filter((id) => kindOf(id) === "light");
  const groups = groupByDevice(hass, ids);
  const awtrix = groups.find((g) => g.primary === "light.awtrix")!;
  assert.deepEqual([...awtrix.others].sort(), ["light.awtrix_indicator_1", "light.awtrix_indicator_2", "light.awtrix_matrix"]);
  // entities without a device are their own group
  assert.ok(groups.some((g) => g.primary === "light.decke" && g.others.length === 0));
  assert.deepEqual(primaryEntities(hass, ids).length, groups.length);
});

test("furniture finds its entities in the room's area: the TV, and power sensors by device or name", () => {
  const hass = hassWith();
  const add = (id: string, state: string, attributes: Record<string, unknown>, device?: string) => {
    hass.entities![id] = { entity_id: id, area_id: "wohnen", ...(device ? { device_id: device } : {}) };
    hass.states[id] = { entity_id: id, state, attributes };
  };
  add("media_player.soundbar", "on", { friendly_name: "Soundbar" });
  add("media_player.fernseher", "on", { friendly_name: "Fernseher", device_class: "tv", app_name: "Netflix" }, "d_tv");
  add("sensor.tv_leistung", "95", { friendly_name: "TV Leistung", device_class: "power" }, "d_tv");
  add("sensor.kuehlschrank_leistung", "80", { friendly_name: "Kühlschrank Leistung", device_class: "power" });
  const item = (id: string, type: string, extra: Record<string, unknown> = {}) => ({ id, type, x: 2, z: 1.5, rotation: 0, w: 1, d: 0.5, h: 0.5, variant: null, entity: null, power: null, ...extra });
  const floor: Floor = {
    ...newFloor("f", "F", 0),
    rooms: [{ ...room, area_id: "wohnen" }],
    furniture: [item("tv", "tv_board"), item("fridge", "fridge"), item("sofa", "sofa"), item("desk", "desk", { power: "none" })],
  };
  const links = furnitureEntities(hass, [floor]);
  assert.deepEqual(links.get("tv"), { entity: "media_player.fernseher", power: "sensor.tv_leistung" });
  assert.deepEqual(links.get("fridge"), { entity: null, power: "sensor.kuehlschrank_leistung" });
  assert.equal(links.get("sofa"), undefined);
  assert.equal(links.get("desk"), undefined);
  assert.deepEqual(appColor(hass.states["media_player.fernseher"]), [0.9, 0.04, 0.08]);
  assert.equal(appColor({ entity_id: "media_player.x", state: "off", attributes: {} }), null);
});

test("a TV on a stand participates in media-player linking", () => {
  assert.equal(isMediaFurniture("tv_stand"), true);
  assert.equal(isMediaFurniture("media_wall_tv"), true);
  assert.equal(isMediaFurniture("cinema_soundbar"), true);
  assert.equal(isMediaFurniture("cinema_turntable"), true);
  assert.equal(isMediaFurniture("cinema_bluray_player"), true);
  assert.equal(hasScreen("cinema_soundbar"), false);
  assert.equal(hasScreen("cinema_game_console"), false);
  assert.equal(hasScreen("cinema_tv_oled_65"), true);
  assert.equal(isMediaFurniture("wood_stove"), false);
});

test("the cinema star ceiling resolves a matching room light", () => {
  const hass = hassWith();
  hass.states["light.star_ceiling"] = { entity_id: "light.star_ceiling", state: "on", attributes: { friendly_name: "Star ceiling" } };
  hass.entities!["light.star_ceiling"] = { entity_id: "light.star_ceiling", area_id: "wohnen" };
  const floor: Floor = {
    ...newFloor("cinema", "Cinema", 0),
    rooms: [{ ...room, area_id: "wohnen" }],
    furniture: [{ id: "stars", type: "lamp_cinema_star_ceiling", x: 2, z: 1.5, rotation: 0, w: 2.4, d: 2.4, h: 0.04, variant: null, entity: null, power: null }],
  };
  assert.equal(furnitureEntities(hass, [floor]).get("stars")?.entity, "light.star_ceiling");
});

test("lamps take a light of their room, preferring one whose name fits", () => {
  const hass = hassWith();
  hass.entities!["light.stehlampe"].area_id = "wohnen";
  const lamp = (id: string, type: string, entity: string | null = null) => ({ id, type, x: 2, z: 1.5, rotation: 0, w: 0.4, d: 0.4, h: 1.7, variant: null, entity, power: null });
  const floor: Floor = {
    ...newFloor("f", "F", 0),
    rooms: [{ ...room, area_id: "wohnen" }],
    furniture: [lamp("a", "lamp_floor"), lamp("b", "lamp_ceiling"), lamp("c", "lamp_table")],
  };
  const links = furnitureEntities(hass, [floor]);
  assert.equal(links.get("a")!.entity, "light.stehlampe");
  assert.equal(links.get("b")!.entity, "light.decke");
  // no free light left for the third lamp
  assert.equal(links.get("c"), undefined);
});

test("the gallery light family resolves its own named light entities", () => {
  const names: Record<string, string> = {
    lamp_column: "Cột đèn đổi màu",
    lamp_tv_bars: "Cặp thanh đèn TV",
    lamp_orb_table: "Đèn cầu để bàn",
    lamp_portable: "Đèn sạc xách tay",
    lamp_ambient_spot: "Đèn ambient để bàn",
    lamp_cube: "Đèn khối lập phương",
    lamp_panel_round: "Đèn panel tròn ốp trần",
    lamp_garden_spots: "Đèn rọi sân vườn",
    lamp_wall_updown: "Đèn tường hai hướng up down",
  };
  const states = Object.fromEntries(Object.entries(names).map(([type, friendly_name]) => [`light.${type}`, { entity_id: `light.${type}`, state: "on", attributes: { friendly_name } }]));
  const entities = Object.fromEntries(Object.keys(states).map((entity_id) => [entity_id, { entity_id, area_id: "living" }]));
  const hass = { language: "vi", states, entities, devices: {}, areas: { living: { area_id: "living", name: "Phòng khách" } } } as unknown as HomeAssistant;
  const room: Room = { id: "living", name: "Phòng khách", area_id: "living", points: [[0, 0], [12, 0], [12, 4], [0, 4]], floor_material: "wood" };
  const furniture = Object.keys(names).map((type, i) => ({ id: type, type, x: 0.5 + i, z: 1, rotation: 0, w: 0.3, d: 0.3, h: 0.4, variant: null, entity: null, power: null }));
  const links = furnitureEntities(hass, [{ ...newFloor("eg", "Tầng trệt", 0), rooms: [room], furniture }]);
  for (const type of Object.keys(names)) assert.equal(links.get(type)?.entity, `light.${type}`, type);
});

test("double doors and French windows: the second leaf follows a contact of its own", () => {
  const hass = hassWith();
  hass.states["binary_sensor.a"] = { entity_id: "binary_sensor.a", state: "off", attributes: { device_class: "door" } };
  hass.states["binary_sensor.b"] = { entity_id: "binary_sensor.b", state: "on", attributes: { device_class: "door" } };
  const e = { cover: null, contact: "binary_sensor.a", tilt: null, contact2: "binary_sensor.b" };
  assert.deepEqual(stateOf(hass, e, "window"), { open: 0, open2: 1, tilt: 0, tilt2: 0, cover: null });
  assert.deepEqual(stateOf(hass, e, "door"), { open: 0, open2: 1, tilt: 0, tilt2: 0, cover: null });
  // without a sensor the second leaf of a double door stays shut
  assert.equal(stateOf(hass, { cover: null, contact: null, tilt: null }, "door").open2, 0);
});

test("the room panel shows what the plan shows in the room, plus picked entities", () => {
  const hass = hassWith();
  const floor: Floor = {
    ...newFloor("f", "F", 0),
    rooms: [{ ...room, area_id: "wohnen", panel: ["sensor.signal"] }],
    placements: [{ entity_id: "cover.rollo", x: 1, z: 1, y: null, mount: null }],
    furniture: [{ id: "l", type: "lamp_ceiling", x: 2, z: 2, rotation: 0, w: 0.4, d: 0.4, h: 0.1, variant: null, entity: "light.decke", power: null }],
  };
  const { shown, more } = roomPanelEntities(hass, floor, floor.rooms[0]);
  assert.deepEqual(shown.sort(), ["cover.rollo", "light.decke", "sensor.signal"]);
  // the rest of the area is offered, not shown
  assert.ok(more.includes("sensor.temp"));
  assert.ok(!more.includes("light.decke"));
});

test("window handles with three states, HomematicIP window_state and plain contacts", () => {
  const st = (state: string, attributes: Record<string, unknown> = {}) => ({ entity_id: "x", state, attributes });
  assert.equal(windowPosition(st("on")), "open");
  assert.equal(windowPosition(st("off")), "closed");
  assert.equal(windowPosition(st("tilted")), "tilted");
  assert.equal(windowPosition(st("gekippt")), "tilted");
  assert.equal(windowPosition(st("Geschlossen")), "closed");
  assert.equal(windowPosition(st("on", { window_state: "TILTED" })), "tilted");
  assert.equal(windowPosition(st("unavailable")), null);
  assert.equal(windowPosition(st("42")), null);

  const hass = hassWith();
  hass.states["sensor.griff"] = { entity_id: "sensor.griff", state: "tilted", attributes: {} };
  const e = { cover: null, contact: "sensor.griff", tilt: null };
  assert.deepEqual(stateOf(hass, e, "window"), { open: 0, open2: 0, tilt: 1, tilt2: 0, cover: null });
  hass.states["sensor.griff"] = { entity_id: "sensor.griff", state: "open", attributes: {} };
  assert.equal(stateOf(hass, e, "window").open, 1);
  // a sensor that only knows "tilted or not" goes into the tilt field
  hass.states["binary_sensor.kipp"] = { entity_id: "binary_sensor.kipp", state: "on", attributes: {} };
  hass.states["binary_sensor.auf"] = { entity_id: "binary_sensor.auf", state: "on", attributes: {} };
  assert.deepEqual(stateOf(hass, { cover: null, contact: "binary_sensor.auf", tilt: "binary_sensor.kipp" }, "window"), { open: 0, open2: 0, tilt: 1, tilt2: 0, cover: null });
});

test("each leaf of a double window has its own kind of sensor", () => {
  const hass = hassWith();
  // left: a handle sensor that reports tilted; right: a plain contact that is open
  hass.states["sensor.griff_links"] = { entity_id: "sensor.griff_links", state: "tilted", attributes: {} };
  hass.states["binary_sensor.rechts"] = { entity_id: "binary_sensor.rechts", state: "on", attributes: {} };
  const e = { cover: null, contact: "sensor.griff_links", tilt: null, contact2: "binary_sensor.rechts", tilt2: null };
  assert.deepEqual(stateOf(hass, e, "window"), { open: 0, open2: 1, tilt: 1, tilt2: 0, cover: null });
  // the second leaf tilts with a handle sensor too
  hass.states["sensor.griff_rechts"] = { entity_id: "sensor.griff_rechts", state: "gekippt", attributes: {} };
  assert.equal(stateOf(hass, { ...e, contact2: "sensor.griff_rechts" }, "window").tilt2, 1);
});

test("area and power lookups are cached per registry and refreshed when the registry changes", () => {
  const hass = hassWith();
  hass.entities!["sensor.leistung"] = { entity_id: "sensor.leistung", device_id: "d1" };
  hass.states["sensor.leistung"] = { entity_id: "sensor.leistung", state: "12", attributes: { device_class: "power" } };
  const first = areaEntities(hass, "wohnen");
  // the same registry gives the same list (no scan, no new array)
  assert.equal(areaEntities(hass, "wohnen"), first);
  assert.deepEqual(powerSensorsOf(hass, "d1"), ["sensor.leistung"]);
  // Home Assistant replaces the registry object when an entity is added
  hass.entities = { ...hass.entities, "light.neu": { entity_id: "light.neu", area_id: "wohnen" } };
  hass.states = { ...hass.states, "light.neu": { entity_id: "light.neu", state: "off", attributes: {} } };
  assert.ok(areaEntities(hass, "wohnen").includes("light.neu"));
  // a state that appears for a known entity (the registry object stays) is picked up as well
  hass.entities = { ...hass.entities, "light.spaet": { entity_id: "light.spaet", area_id: "wohnen" } };
  hass.states = { ...hass.states };
  assert.ok(!areaEntities(hass, "wohnen").includes("light.spaet"));
  hass.states = { ...hass.states, "light.spaet": { entity_id: "light.spaet", state: "on", attributes: {} } };
  assert.ok(areaEntities(hass, "wohnen").includes("light.spaet"));
});

test("smart fridge doors follow their door sensors ('on' or 'open'; none/unset = closed)", () => {
  const hass = hassWith();
  hass.states["binary_sensor.gefrier"] = { entity_id: "binary_sensor.gefrier", state: "on", attributes: {} };
  hass.states["binary_sensor.kuehl"] = { entity_id: "binary_sensor.kuehl", state: "off", attributes: {} };
  const floor = {
    ...newFloor("f", "F", 0),
    furniture: [
      { id: "a", type: "fridge_smart", x: 1, z: 1, rotation: 0, w: 0.9, d: 0.7, h: 1.8, variant: null, door_left: "binary_sensor.gefrier", door_right: "binary_sensor.kuehl" },
      { id: "b", type: "fridge_smart", x: 3, z: 1, rotation: 0, w: 0.9, d: 0.7, h: 1.8, variant: null, door_right: "none" },
      { id: "c", type: "fridge", x: 5, z: 1, rotation: 0, w: 0.6, d: 0.6, h: 1.8, variant: null },
    ],
  };
  assert.deepEqual(
    [...fridgeDoors(hass, [floor])],
    [
      ["a", { left: true, right: false }],
      ["b", { left: false, right: false }],
    ],
  );
});

test("meters and air sensors are offered, battery and signal sensors are not", () => {
  const st = (entity_id: string, state: string, attributes: Record<string, unknown> = {}) => ({ entity_id, state, attributes });
  const ids = ["sensor.gasmeter_value", "sensor.wasseruhr_value", "sensor.alter_zaehler", "sensor.lux", "sensor.batterie", "sensor.text"];
  const hass = {
    ...hassWith(),
    entities: Object.fromEntries(ids.map((id) => [id, { entity_id: id, area_id: "keller" }])),
    states: {
      "sensor.gasmeter_value": st("sensor.gasmeter_value", "1234.567", { device_class: "gas", unit_of_measurement: "m³" }),
      "sensor.wasseruhr_value": st("sensor.wasseruhr_value", "456.7", { device_class: "water", unit_of_measurement: "m³" }),
      "sensor.alter_zaehler": st("sensor.alter_zaehler", "99.1", { unit_of_measurement: "m³" }),
      "sensor.lux": st("sensor.lux", "320", { device_class: "illuminance", unit_of_measurement: "lx" }),
      "sensor.batterie": st("sensor.batterie", "80", { device_class: "battery", unit_of_measurement: "%" }),
      "sensor.text": st("sensor.text", "ok"),
    },
  } as HomeAssistant;
  assert.deepEqual(areaEntities(hass, "keller").sort(), ["sensor.alter_zaehler", "sensor.gasmeter_value", "sensor.lux", "sensor.wasseruhr_value"]);
});

test("an opening state knows whether a sensor reports it", () => {
  const hass = {
    states: {
      "binary_sensor.wc": { entity_id: "binary_sensor.wc", state: "off", attributes: { device_class: "door" } },
      "cover.tor": { entity_id: "cover.tor", state: "closed", attributes: {} },
    },
  } as unknown as HomeAssistant;
  const none = { cover: null, contact: null, tilt: null, contact2: null, tilt2: null };
  assert.equal(openingState(hass, { ...none, contact: "binary_sensor.wc" }, "door").sensed, true);
  assert.equal(openingState(hass, none, "door").sensed, false);
  assert.equal(openingState(hass, none, "window").sensed, false);
  assert.equal(openingState(hass, { ...none, cover: "cover.tor" }, "garage").sensed, true);
});

test("room climate skips device temperatures, honours a chosen sensor and placed sensors", () => {
  const st = (entity_id: string, state: string, attributes: Record<string, unknown> = {}) => ({ entity_id, state, attributes });
  const temp = (id: string, v: string, name: string) => st(id, v, { device_class: "temperature", unit_of_measurement: "°C", friendly_name: name });
  const hass = {
    language: "de",
    areas: { hwr: { area_id: "hwr", name: "HWR" } },
    devices: { printer: { id: "printer", area_id: "hwr" }, pump: { id: "pump", area_id: "hwr" }, thermo: { id: "thermo", area_id: "hwr" } },
    entities: {
      "sensor.drucker_duese": { entity_id: "sensor.drucker_duese", device_id: "printer" },
      "button.drucker_pause": { entity_id: "button.drucker_pause", device_id: "printer" },
      "sensor.wp_vorlauf": { entity_id: "sensor.wp_vorlauf", device_id: "pump" },
      "climate.wp": { entity_id: "climate.wp", device_id: "pump" },
      "sensor.hwr_temperatur": { entity_id: "sensor.hwr_temperatur", device_id: "thermo" },
      "sensor.flur_temp": { entity_id: "sensor.flur_temp" },
      "light.gruppe": { entity_id: "light.gruppe" },
    },
    states: {
      "sensor.drucker_duese": temp("sensor.drucker_duese", "215", "Drucker Düse"),
      "button.drucker_pause": st("button.drucker_pause", "unknown"),
      "sensor.wp_vorlauf": temp("sensor.wp_vorlauf", "45", "Wärmepumpe Vorlauf"),
      "climate.wp": st("climate.wp", "heat"),
      "sensor.hwr_temperatur": temp("sensor.hwr_temperatur", "19.5", "HWR Temperatur"),
      "sensor.flur_temp": temp("sensor.flur_temp", "21", "Flur"),
      "light.gruppe": st("light.gruppe", "on"),
    },
  } as unknown as HomeAssistant;
  const room: Room = { id: "r", name: "HWR", area_id: "hwr", points: [[0, 0], [3, 0], [3, 3], [0, 3]], floor_material: "tiles" };
  const floor = { ...newFloor("eg", "EG", 0), rooms: [room] };
  assert.deepEqual(roomClimateSensors(hass, floor, room, "temperature"), ["sensor.hwr_temperatur"]);
  assert.equal(roomClimateValue(hass, floor, room, "temperature"), 19.5);
  // a sensor without an area placed in the room counts too
  floor.placements = [{ entity_id: "sensor.flur_temp", x: 1, z: 1, y: null }];
  assert.equal(roomClimateValue(hass, floor, room, "temperature"), 20.25);
  // a chosen sensor wins, "none" shows no value
  assert.deepEqual(roomClimateSensors(hass, floor, { ...room, climate: { temperature: "sensor.flur_temp" } }, "temperature"), ["sensor.flur_temp"]);
  assert.equal(roomClimateValue(hass, floor, { ...room, climate: { temperature: "none" } }, "temperature"), null);
  // entities without an area can be placed from their own list; other areas are listed by name
  assert.deepEqual(unassignedEntities(hass), ["light.gruppe", "sensor.flur_temp"]);
  assert.deepEqual(otherAreaEntities(hass, "kueche").map((a) => a.name), ["HWR"]);
  assert.deepEqual(otherAreaEntities(hass, "hwr"), []);
});

test("a robot vacuum's current room is found on its device and matched by room or area name", () => {
  const hass = {
    language: "de",
    areas: { kitchen: { area_id: "kitchen", name: "Küche" } },
    entities: {
      "vacuum.robbi": { entity_id: "vacuum.robbi", device_id: "d1" },
      "sensor.robbi_battery": { entity_id: "sensor.robbi_battery", device_id: "d1" },
      "sensor.robbi_room": { entity_id: "sensor.robbi_room", device_id: "d1", translation_key: "current_room" },
    },
    states: {
      "vacuum.robbi": { entity_id: "vacuum.robbi", state: "cleaning", attributes: {} },
      "sensor.robbi_room": { entity_id: "sensor.robbi_room", state: "Kueche", attributes: {} },
    },
  } as unknown as HomeAssistant;
  assert.equal(robotRoomSensor(hass, "vacuum.robbi", null), "sensor.robbi_room");
  assert.equal(robotRoomSensor(hass, "vacuum.robbi", "none"), null);
  const rooms = [
    { id: "a", name: "Wohnzimmer", area_id: "living" },
    { id: "b", name: "Kochen", area_id: "kitchen" },
    { id: "c", name: "Gäste Bad", area_id: null },
  ];
  // "Kueche" matches the area name "Küche"
  assert.equal(robotRoom(hass, rooms, "vacuum.robbi", "sensor.robbi_room")?.id, "b");
  hass.states["sensor.robbi_room"].state = "Gaeste Bad";
  assert.equal(robotRoom(hass, rooms, "vacuum.robbi", "sensor.robbi_room")?.id, "c");
  hass.states["sensor.robbi_room"].state = "Keller";
  assert.equal(robotRoom(hass, rooms, "vacuum.robbi", "sensor.robbi_room"), null);
  assert.equal(roomKey("Büro"), roomKey("Buero"));
});

test("a window marked 'ask first' puts its blind on the confirm list", () => {
  const hass = hassWith();
  const o = (id: string, extra: Partial<Opening> = {}): Opening => ({
    id, room_id: "r", edge: 0, offset: 1, width: 1, type: "window", sill: 0.9, height: 1.3, hinge: "left", leaves: 1, swing: "in", cover: "cover.rollo", contact: null, contact2: null, tilt: null, ...extra,
  });
  const floor: Floor = { ...newFloor("f", "F", 0), rooms: [{ ...room, area_id: "wohnen" }], openings: [o("w1")] };
  assert.equal(confirmEntities(hass, [floor]).has("cover.rollo"), false);
  floor.openings = [o("w1", { confirm: true })];
  assert.equal(confirmEntities(hass, [floor]).has("cover.rollo"), true);
});

test("a status sensor (a 3D printer) counts as active while it prints", () => {
  const st = (state: string, dc = "enum") => ({ entity_id: "sensor.drucker_status", state, attributes: { device_class: dc } });
  assert.equal(isActive(st("running")), true);
  assert.equal(isActive(st("prepare")), true);
  assert.equal(isActive(st("idle")), false);
  assert.equal(isActive(st("finish")), false);
  // an ordinary sensor is never "active"
  assert.equal(isActive(st("running", "temperature")), false);
});

test("an entity without a registry entry (a USB camera from YAML) is offered as unassigned", () => {
  const hass = {
    language: "de",
    entities: { "light.a": { entity_id: "light.a", area_id: null } },
    states: {
      "light.a": { entity_id: "light.a", state: "on", attributes: {} },
      "camera.usb_kamera_1": { entity_id: "camera.usb_kamera_1", state: "idle", attributes: { friendly_name: "USB Kamera 1" } },
      "sun.sun": { entity_id: "sun.sun", state: "above_horizon", attributes: {} },
    },
  } as unknown as HomeAssistant;
  const ids = unassignedEntities(hass);
  assert.ok(ids.includes("camera.usb_kamera_1"));
  assert.ok(ids.includes("light.a"));
  assert.ok(!ids.includes("sun.sun"));
});

test("a tilt angle sensor tilts the sash as far as it reports, with max, offset and sign", () => {
  const hass = { states: { "sensor.angle": { entity_id: "sensor.angle", state: "7.5", attributes: {} } } } as unknown as HomeAssistant;
  const base = { cover: null, contact: null, tilt: null, tiltAngle: "sensor.angle" };
  assert.equal(openingState(hass, { ...base, tiltMax: 15 }, "window").tilt, 0.5);
  // an offset the sensor reports while closed, and the other sign
  assert.equal(openingState(hass, { ...base, tiltMax: 10, tiltOffset: 2.5 }, "window").tilt, 0.5);
  assert.equal(openingState(hass, { ...base, tiltMax: 15, tiltInvert: true }, "window").tilt, 0);
  // below a small threshold the window counts as closed; the angle makes the state "sensed"
  hass.states["sensor.angle"] = { entity_id: "sensor.angle", state: "0.5", attributes: {} };
  const s = openingState(hass, { ...base, tiltMax: 15 }, "window");
  assert.equal(s.tilt, 0);
  assert.equal(s.sensed, true);
});

test("a door with a roller shutter shows the blind at the cover's position", () => {
  const hass = hassWith();
  hass.states["cover.haustuer"] = { entity_id: "cover.haustuer", state: "open", attributes: { current_position: 30, device_class: "shutter" } } as HomeAssistant["states"][string];
  const st = openingState(hass, { cover: "cover.haustuer", contact: null, tilt: null }, "door");
  assert.ok(Math.abs((st.cover ?? -1) - 0.7) < 1e-9, `closed fraction ${st.cover}`);
  assert.ok(st.sensed);
  // without a cover a door has no blind
  assert.equal(openingState(hass, { cover: null, contact: null, tilt: null }, "door").cover, null);
});

test("the central menu switches a floor's lights and blinds, not its garage door (#145)", async () => {
  const { floorControls, favoriteCall } = await import("./devices.ts");
  const st = (entity_id: string, state: string, attributes: Record<string, unknown> = {}) => ({ entity_id, state, attributes });
  const hass = {
    language: "de",
    states: {
      "light.decke": st("light.decke", "on"),
      "light.stehlampe": st("light.stehlampe", "off"),
      "cover.rollo": st("cover.rollo", "open", { device_class: "shutter" }),
      "cover.garage": st("cover.garage", "closed", { device_class: "garage" }),
    },
    entities: {
      "light.decke": { entity_id: "light.decke", area_id: "wz" },
      "cover.rollo": { entity_id: "cover.rollo", area_id: "wz" },
      "cover.garage": { entity_id: "cover.garage", area_id: "wz" },
    },
    devices: {},
    areas: { wz: { area_id: "wz", name: "Wohnzimmer" } },
  } as unknown as HomeAssistant;
  const floor = { ...newFloor("eg", "EG", 0), rooms: [{ id: "r", name: "WZ", area_id: "wz", points: [[0, 0], [4, 0], [4, 4], [0, 4]] as [number, number][], floor_material: "wood" as const }] };
  floor.placements = [{ entity_id: "light.stehlampe", x: 1, z: 1, y: null }];
  const c = floorControls(hass, floor);
  assert.deepEqual(c.lights.sort(), ["light.decke", "light.stehlampe"]);
  assert.deepEqual(c.covers, ["cover.rollo"]);
  assert.deepEqual(favoriteCall("scene.party"), ["scene", "turn_on"]);
  assert.deepEqual(favoriteCall("button.klingel"), ["button", "press"]);
  assert.deepEqual(favoriteCall("switch.bewaesserung"), ["homeassistant", "toggle"]);
});

test("own buttons call a service or fire the DOM event browser_mod listens for (D143)", async () => {
  const { runButton } = await import("./devices.ts");
  const calls: unknown[][] = [];
  const hass = { callService: (...a: unknown[]) => (calls.push(a), Promise.resolve()) } as unknown as HomeAssistant;
  const el = new EventTarget() as unknown as HTMLElement;
  const events: { type: string; detail: unknown }[] = [];
  for (const type of ["ll-custom", "hass-more-info"]) el.addEventListener(type, (e) => events.push({ type, detail: (e as CustomEvent).detail }));
  runButton(hass, el, { action: "service", target: "script.turn_on", data: { entity_id: "script.party" } });
  assert.deepEqual(calls, [["script", "turn_on", { entity_id: "script.party" }]]);
  const popup = { browser_mod: { service: "browser_mod.popup", data: { title: "Rollos" } } };
  runButton(hass, el, { action: "fire_dom_event", data: popup });
  runButton(hass, el, { action: "more_info", target: "cover.wohnzimmer" });
  assert.deepEqual(events, [
    { type: "ll-custom", detail: popup },
    { type: "hass-more-info", detail: { entityId: "cover.wohnzimmer" } },
  ]);
});

test("a desk's monitor does not take the room's smart speaker, a placed device stays its own", async () => {
  const { furnitureEntities } = await import("./devices.ts");
  const st = (entity_id: string, state: string, attributes: Record<string, unknown> = {}) => ({ entity_id, state, attributes });
  const hass = {
    language: "de",
    states: { "media_player.echo_show_buero": st("media_player.echo_show_buero", "playing", { friendly_name: "Echo Show Büro" }) },
    entities: { "media_player.echo_show_buero": { entity_id: "media_player.echo_show_buero", area_id: "buero" } },
    devices: {},
    areas: { buero: { area_id: "buero", name: "Büro" } },
  } as unknown as HomeAssistant;
  const room = { id: "r", name: "Büro", area_id: "buero", points: [[0, 0], [4, 0], [4, 3], [0, 3]] as [number, number][], floor_material: "wood" as const };
  const desk = { id: "d", type: "desk", x: 2, z: 1, w: 1.4, d: 0.7, h: 0.75, rotation: 0, variant: null };
  const tv = { id: "t", type: "tv_wall", x: 1, z: 0.1, w: 1.2, d: 0.08, h: 0.7, rotation: 0, variant: null };
  // the desk alone: no media player by chance
  const one = furnitureEntities(hass, [{ ...newFloor("eg", "EG", 0), rooms: [room], furniture: [desk] }]);
  assert.equal(one.get("d")?.entity ?? null, null);
  // a TV takes the room's player, unless that player is placed as a device of its own
  const two = furnitureEntities(hass, [{ ...newFloor("eg", "EG", 0), rooms: [room], furniture: [tv] }]);
  assert.equal(two.get("t")?.entity, "media_player.echo_show_buero");
  const placed = furnitureEntities(hass, [{ ...newFloor("eg", "EG", 0), rooms: [room], furniture: [tv], placements: [{ entity_id: "media_player.echo_show_buero", x: 3.8, z: 2.8, y: null }] }]);
  assert.equal(placed.get("t")?.entity ?? null, null);
});

test("a wall air conditioner automatically takes the room's climate entity", () => {
  const st = (entity_id: string, state: string, attributes: Record<string, unknown> = {}) => ({ entity_id, state, attributes });
  const hass = {
    language: "vi",
    states: { "climate.dieu_hoa_phong_khach": st("climate.dieu_hoa_phong_khach", "cool", { friendly_name: "Điều hòa phòng khách", hvac_action: "cooling" }) },
    entities: { "climate.dieu_hoa_phong_khach": { entity_id: "climate.dieu_hoa_phong_khach", area_id: "phong_khach" } },
    devices: {},
    areas: { phong_khach: { area_id: "phong_khach", name: "Phòng khách" } },
  } as unknown as HomeAssistant;
  const room = { id: "r", name: "Phòng khách", area_id: "phong_khach", points: [[0, 0], [4, 0], [4, 4], [0, 4]] as [number, number][], floor_material: "wood" as const };
  const ac = { id: "ac", type: "air_conditioner", x: 2, z: 0.2, w: 1, d: 0.22, h: 0.3, rotation: 0, variant: null };
  const links = furnitureEntities(hass, [{ ...newFloor("eg", "Tầng trệt", 0), rooms: [room], furniture: [ac] }]);
  assert.equal(links.get("ac")?.entity, "climate.dieu_hoa_phong_khach");
});

test("Vietnamese fans and water heater automatically take matching room entities", () => {
  const st = (entity_id: string, state: string, attributes: Record<string, unknown> = {}) => ({ entity_id, state, attributes });
  const states = {
    "fan.quat_tran_phong_khach": st("fan.quat_tran_phong_khach", "off", { friendly_name: "Quạt trần phòng khách" }),
    "fan.quat_dung_phong_khach": st("fan.quat_dung_phong_khach", "off", { friendly_name: "Quạt đứng phòng khách" }),
    "fan.quat_treo_tuong_phong_khach": st("fan.quat_treo_tuong_phong_khach", "off", { friendly_name: "Quạt treo tường phòng khách" }),
    "water_heater.binh_nong_lanh": st("water_heater.binh_nong_lanh", "off", { friendly_name: "Bình nóng lạnh" }),
    "fan.may_hut_mui": st("fan.may_hut_mui", "off", { friendly_name: "Máy hút mùi" }),
    "switch.lo_vi_song": st("switch.lo_vi_song", "off", { friendly_name: "Lò vi sóng" }),
    "switch.may_loc_nuoc": st("switch.may_loc_nuoc", "off", { friendly_name: "Máy lọc nước" }),
  };
  const entities = Object.fromEntries(Object.keys(states).map((entity_id) => [entity_id, { entity_id, area_id: "phong_khach" }]));
  const hass = { language: "vi", states, entities, devices: {}, areas: { phong_khach: { area_id: "phong_khach", name: "Phòng khách" } } } as unknown as HomeAssistant;
  const room = { id: "r", name: "Phòng khách", area_id: "phong_khach", points: [[0, 0], [4, 0], [4, 4], [0, 4]] as [number, number][], floor_material: "wood" as const };
  const furniture = [
    { id: "ceiling", type: "fan_ceiling", x: 1, z: 1, w: 1.4, d: 1.4, h: 0.32, rotation: 0, variant: null },
    { id: "floor", type: "fan_floor", x: 2, z: 2, w: 0.45, d: 0.45, h: 1.25, rotation: 0, variant: null },
    { id: "wall", type: "fan_wall", x: 2.5, z: 0.2, w: 0.5, d: 0.3, h: 0.5, rotation: 0, variant: null },
    { id: "heater", type: "water_heater", x: 3, z: 3, w: 0.75, d: 0.35, h: 0.45, rotation: 0, variant: null },
    { id: "hood", type: "range_hood", x: 1, z: 3, w: 0.75, d: 0.5, h: 0.5, rotation: 0, variant: null },
    { id: "microwave", type: "microwave", x: 2, z: 3, w: 0.5, d: 0.4, h: 0.3, rotation: 0, variant: null },
    { id: "purifier", type: "water_purifier", x: 3, z: 1, w: 0.32, d: 0.36, h: 1.05, rotation: 0, variant: null },
  ];
  const links = furnitureEntities(hass, [{ ...newFloor("eg", "Tầng trệt", 0), rooms: [room], furniture }]);
  assert.equal(links.get("ceiling")?.entity, "fan.quat_tran_phong_khach");
  assert.equal(links.get("floor")?.entity, "fan.quat_dung_phong_khach");
  assert.equal(links.get("wall")?.entity, "fan.quat_treo_tuong_phong_khach");
  assert.equal(links.get("heater")?.entity, "water_heater.binh_nong_lanh");
  assert.equal(links.get("hood")?.entity, "fan.may_hut_mui");
  assert.equal(links.get("microwave")?.entity, "switch.lo_vi_song");
  assert.equal(links.get("purifier")?.entity, "switch.may_loc_nuoc");
});

test("a ceiling fan with light resolves its fan and light independently", () => {
  const st = (entity_id: string, state: string, attributes: Record<string, unknown> = {}) => ({ entity_id, state, attributes });
  const states = {
    "fan.quat_tran_co_den": st("fan.quat_tran_co_den", "on", { friendly_name: "Quạt trần có đèn" }),
    "light.den_quat_tran": st("light.den_quat_tran", "on", { friendly_name: "Đèn quạt trần" }),
  };
  const entities = Object.fromEntries(Object.keys(states).map((entity_id) => [entity_id, { entity_id, area_id: "phong_khach" }]));
  const hass = { language: "vi", states, entities, devices: {}, areas: { phong_khach: { area_id: "phong_khach", name: "Phòng khách" } } } as unknown as HomeAssistant;
  const room = { id: "r", name: "Phòng khách", area_id: "phong_khach", points: [[0, 0], [4, 0], [4, 4], [0, 4]] as [number, number][], floor_material: "wood" as const };
  const fan = { id: "combo", type: "fan_ceiling_light", x: 2, z: 2, w: 1.4, d: 1.4, h: 0.4, rotation: 0, variant: null };
  const links = furnitureEntities(hass, [{ ...newFloor("eg", "Tầng trệt", 0), rooms: [room], furniture: [fan] }]);
  assert.deepEqual(links.get("combo"), { entity: "fan.quat_tran_co_den", light: "light.den_quat_tran", power: null });
});

test("the LED display cabinet automatically takes its matching room light", () => {
  const st = (entity_id: string, state: string, attributes: Record<string, unknown> = {}) => ({ entity_id, state, attributes });
  const hass = {
    language: "vi",
    states: {
      "light.den_tu_kinh_bep": st("light.den_tu_kinh_bep", "on", { friendly_name: "Đèn tủ kính bếp" }),
      "light.den_tran_bep": st("light.den_tran_bep", "off", { friendly_name: "Đèn trần bếp" }),
    },
    entities: {
      "light.den_tu_kinh_bep": { entity_id: "light.den_tu_kinh_bep", area_id: "bep" },
      "light.den_tran_bep": { entity_id: "light.den_tran_bep", area_id: "bep" },
    },
    devices: {},
    areas: { bep: { area_id: "bep", name: "Bếp" } },
  } as unknown as HomeAssistant;
  const kitchen = { id: "r", name: "Bếp", area_id: "bep", points: [[0, 0], [4, 0], [4, 4], [0, 4]] as [number, number][], floor_material: "wood" as const };
  const cabinet = { id: "display", type: "kitchen_display", x: 2, z: 1, w: 0.8, d: 0.42, h: 2.1, rotation: 0, variant: null };
  const links = furnitureEntities(hass, [{ ...newFloor("eg", "Tầng trệt", 0), rooms: [kitchen], furniture: [cabinet] }]);
  assert.equal(links.get("display")?.entity, "light.den_tu_kinh_bep");
});

test("an outdoor water pump can find a clearly named switch without a room", () => {
  const st = (entity_id: string, state: string, attributes: Record<string, unknown> = {}) => ({ entity_id, state, attributes });
  const hass = {
    language: "vi",
    states: {
      "switch.may_bom_gieng": st("switch.may_bom_gieng", "off", { friendly_name: "Máy bơm giếng" }),
      "switch.den_san": st("switch.den_san", "off", { friendly_name: "Đèn sân" }),
    },
    entities: {},
    devices: {},
    areas: {},
  } as unknown as HomeAssistant;
  const pump = { id: "pump", type: "water_pump", x: 6, z: 3, w: 0.55, d: 0.4, h: 0.45, rotation: 0, variant: null };
  const links = furnitureEntities(hass, [{ ...newFloor("eg", "Tầng trệt", 0), furniture: [pump] }]);
  assert.equal(links.get("pump")?.entity, "switch.may_bom_gieng");
});

test("an outdoor robot mower finds its lawn mower entity and reports mowing states as active", () => {
  const st = (entity_id: string, state: string, attributes: Record<string, unknown> = {}) => ({ entity_id, state, attributes });
  const mowerState = st("lawn_mower.robot_cat_co", "mowing", { friendly_name: "Robot cắt cỏ" });
  const hass = { language: "vi", states: { [mowerState.entity_id]: mowerState }, entities: {}, devices: {}, areas: {} } as unknown as HomeAssistant;
  const mower = { id: "mower", type: "robot_mower", x: 6, z: 3, w: 0.85, d: 1.15, h: 0.48, rotation: 0, variant: null };
  const links = furnitureEntities(hass, [{ ...newFloor("eg", "Tầng trệt", 0), furniture: [mower] }]);
  assert.equal(links.get("mower")?.entity, mowerState.entity_id);
  assert.equal(isActive(mowerState as never), true);
  assert.equal(isActive({ ...mowerState, state: "docked" } as never), false);
});

test("smart infrastructure resolves climate, smoke, network, NAS, access point and siren entities", () => {
  const st = (entity_id: string, state: string, attributes: Record<string, unknown> = {}) => ({ entity_id, state, attributes });
  const states = {
    "climate.bo_dieu_nhiet": st("climate.bo_dieu_nhiet", "heat", { friendly_name: "Bộ điều nhiệt gắn tường", hvac_action: "heating" }),
    "binary_sensor.bao_khoi": st("binary_sensor.bao_khoi", "on", { friendly_name: "Đầu báo khói", device_class: "smoke" }),
    "switch.tu_mang": st("switch.tu_mang", "on", { friendly_name: "Tủ mạng" }),
    "sensor.may_chu_nas": st("sensor.may_chu_nas", "online", { friendly_name: "Máy chủ NAS", device_class: "enum" }),
    "binary_sensor.bo_phat_wifi": st("binary_sensor.bo_phat_wifi", "on", { friendly_name: "Bộ phát Wi-Fi", device_class: "connectivity" }),
    "siren.coi_bao_dong": st("siren.coi_bao_dong", "on", { friendly_name: "Còi báo động" }),
    "switch.tu_dien": st("switch.tu_dien", "on", { friendly_name: "Tủ điện" }),
    "sensor.ups": st("sensor.ups", "online", { friendly_name: "Bộ lưu điện UPS", device_class: "enum" }),
    "device_tracker.modem": st("device_tracker.modem", "home", { friendly_name: "Modem router" }),
    "climate.bom_nhiet": st("climate.bom_nhiet", "heat", { friendly_name: "Dàn nóng bơm nhiệt", hvac_action: "heating" }),
    "water_heater.binh_tich": st("water_heater.binh_tich", "on", { friendly_name: "Bình tích nước nóng" }),
    "fan.quat_thong_gio": st("fan.quat_thong_gio", "on", { friendly_name: "Quạt thông gió" }),
    "humidifier.may_tao_am": st("humidifier.may_tao_am", "on", { friendly_name: "Máy tạo ẩm" }),
    "media_player.man_hinh": st("media_player.man_hinh", "playing", { friendly_name: "Màn hình điều khiển thông minh" }),
  };
  const entities = Object.fromEntries(Object.keys(states).map((entity_id) => [entity_id, { entity_id, area_id: "office" }]));
  const hass = { language: "vi", states, entities, devices: {}, areas: { office: { area_id: "office", name: "Phòng kỹ thuật" } } } as unknown as HomeAssistant;
  const room: Room = { id: "office", name: "Phòng kỹ thuật", area_id: "office", points: [[0, 0], [12, 0], [12, 4], [0, 4]], floor_material: "concrete" };
  const types = ["wall_thermostat", "smoke_detector", "network_cabinet", "nas_server", "access_point", "siren_alarm", "electrical_panel", "ups_unit", "modem_router", "heat_pump_outdoor", "hot_water_tank", "ventilation_fan", "humidifier", "smart_display"] as const;
  const furniture = types.map((type, i) => ({ id: type, type, x: 0.5 + i * 0.6, z: 1, w: FURNITURE_SIZE[type][0], d: FURNITURE_SIZE[type][1], h: FURNITURE_SIZE[type][2], rotation: 0, variant: null }));
  const links = furnitureEntities(hass, [{ ...newFloor("eg", "Tầng trệt", 0), rooms: [room], furniture }]);
  assert.equal(links.get("wall_thermostat")?.entity, "climate.bo_dieu_nhiet");
  assert.equal(links.get("smoke_detector")?.entity, "binary_sensor.bao_khoi");
  assert.equal(links.get("network_cabinet")?.entity, "switch.tu_mang");
  assert.equal(links.get("nas_server")?.entity, "sensor.may_chu_nas");
  assert.equal(links.get("access_point")?.entity, "binary_sensor.bo_phat_wifi");
  assert.equal(links.get("siren_alarm")?.entity, "siren.coi_bao_dong");
  assert.equal(links.get("electrical_panel")?.entity, "switch.tu_dien");
  assert.equal(links.get("ups_unit")?.entity, "sensor.ups");
  assert.equal(links.get("modem_router")?.entity, "device_tracker.modem");
  assert.equal(links.get("heat_pump_outdoor")?.entity, "climate.bom_nhiet");
  assert.equal(links.get("hot_water_tank")?.entity, "water_heater.binh_tich");
  assert.equal(links.get("ventilation_fan")?.entity, "fan.quat_thong_gio");
  assert.equal(links.get("humidifier")?.entity, "humidifier.may_tao_am");
  assert.equal(links.get("smart_display")?.entity, "media_player.man_hinh");
  assert.equal(isActive(states["siren.coi_bao_dong"] as never), true);
  assert.equal(isActive(states["humidifier.may_tao_am"] as never), true);
});

test("smart controls and sensors resolve only their matching Home Assistant device classes", () => {
  const st = (entity_id: string, state: string, attributes: Record<string, unknown> = {}) => ({ entity_id, state, attributes });
  const states = {
    "switch.cong_tac_tuong": st("switch.cong_tac_tuong", "on", { friendly_name: "Công tắc tường" }),
    "switch.o_cam_tuong": st("switch.o_cam_tuong", "off", { friendly_name: "Ổ cắm tường" }),
    "switch.o_cam_thong_minh": st("switch.o_cam_thong_minh", "on", { friendly_name: "Ổ cắm thông minh" }),
    "binary_sensor.chuyen_dong": st("binary_sensor.chuyen_dong", "on", { friendly_name: "Cảm biến chuyển động", device_class: "motion" }),
    "binary_sensor.cua_so": st("binary_sensor.cua_so", "off", { friendly_name: "Cảm biến cửa sổ", device_class: "window" }),
    "binary_sensor.ro_nuoc": st("binary_sensor.ro_nuoc", "off", { friendly_name: "Cảm biến rò nước", device_class: "moisture" }),
    "sensor.nhiet_do": st("sensor.nhiet_do", "26.4", { friendly_name: "Cảm biến nhiệt độ", device_class: "temperature", unit_of_measurement: "°C" }),
    "camera.chuong_cua": st("camera.chuong_cua", "streaming", { friendly_name: "Chuông cửa có hình" }),
  };
  const entities = Object.fromEntries(Object.keys(states).map((entity_id) => [entity_id, { entity_id, area_id: "hall" }]));
  const hass = { language: "vi", states, entities, devices: {}, areas: { hall: { area_id: "hall", name: "Sảnh" } } } as unknown as HomeAssistant;
  const room: Room = { id: "hall", name: "Sảnh", area_id: "hall", points: [[0, 0], [8, 0], [8, 3], [0, 3]], floor_material: "tile" };
  const types = ["wall_switch", "wall_outlet", "smart_plug", "motion_sensor", "contact_sensor", "water_leak_sensor", "temperature_humidity_sensor", "video_doorbell"] as const;
  const furniture = types.map((type, i) => ({ id: type, type, x: 0.5 + i * 0.7, z: 1, w: FURNITURE_SIZE[type][0], d: FURNITURE_SIZE[type][1], h: FURNITURE_SIZE[type][2], rotation: 0, variant: null }));
  const links = furnitureEntities(hass, [{ ...newFloor("eg", "Tầng trệt", 0), rooms: [room], furniture }]);
  assert.equal(links.get("wall_switch")?.entity, "switch.cong_tac_tuong");
  assert.equal(links.get("wall_outlet")?.entity, "switch.o_cam_tuong");
  assert.equal(links.get("smart_plug")?.entity, "switch.o_cam_thong_minh");
  assert.equal(links.get("motion_sensor")?.entity, "binary_sensor.chuyen_dong");
  assert.equal(links.get("contact_sensor")?.entity, "binary_sensor.cua_so");
  assert.equal(links.get("water_leak_sensor")?.entity, "binary_sensor.ro_nuoc");
  assert.equal(links.get("temperature_humidity_sensor")?.entity, "sensor.nhiet_do");
  assert.equal(links.get("video_doorbell")?.entity, "camera.chuong_cua");
});

test("the washer-dryer tower and balcony solar kit resolve their matching entities", () => {
  const st = (entity_id: string, state: string, attributes: Record<string, unknown> = {}) => ({ entity_id, state, attributes });
  const states = {
    "switch.thap_giat_say": st("switch.thap_giat_say", "on", { friendly_name: "Tháp giặt sấy" }),
    "sensor.pin_mat_troi_ban_cong": st("sensor.pin_mat_troi_ban_cong", "420", { friendly_name: "Pin mặt trời ban công", device_class: "power", unit_of_measurement: "W" }),
    "sensor.pin_mat_troi_nang_luong": st("sensor.pin_mat_troi_nang_luong", "2.1", { friendly_name: "Pin mặt trời ban công năng lượng", device_class: "energy", unit_of_measurement: "kWh" }),
  };
  const entities = {
    "switch.thap_giat_say": { entity_id: "switch.thap_giat_say", area_id: "giat" },
    "sensor.pin_mat_troi_ban_cong": { entity_id: "sensor.pin_mat_troi_ban_cong", area_id: null },
    "sensor.pin_mat_troi_nang_luong": { entity_id: "sensor.pin_mat_troi_nang_luong", area_id: null },
  };
  const hass = { language: "vi", states, entities, devices: {}, areas: { giat: { area_id: "giat", name: "Phòng giặt" } } } as unknown as HomeAssistant;
  const room = { id: "r", name: "Phòng giặt", area_id: "giat", points: [[0, 0], [3, 0], [3, 3], [0, 3]] as [number, number][], floor_material: "tiles" as const };
  const furniture = [
    { id: "tower", type: "washer_dryer_tower", x: 1, z: 1, w: 0.66, d: 0.68, h: 1.75, rotation: 0, variant: null },
    { id: "solar", type: "balcony_solar", x: 5, z: 1, w: 1.65, d: 0.72, h: 1.05, rotation: 0, variant: null },
  ];
  const links = furnitureEntities(hass, [{ ...newFloor("eg", "Tầng trệt", 0), rooms: [room], furniture }]);
  assert.equal(links.get("tower")?.entity, "switch.thap_giat_say");
  assert.equal(links.get("solar")?.entity, "sensor.pin_mat_troi_ban_cong");
});
