import assert from "node:assert/strict";
import { test } from "node:test";
import { detectionKind, buildMarkers, stateText } from "./markers.ts";
import type { Building } from "./model.ts";
import { emptyBuilding, newFloor } from "./model.ts";
import type { HassEntity, HomeAssistant } from "./types.ts";

const st = (entity_id: string, state: string, attributes: Record<string, unknown> = {}): HassEntity => ({ entity_id, state, attributes });

function hassWith(states: HassEntity[]): HomeAssistant {
  return {
    language: "de",
    connection: {} as HomeAssistant["connection"],
    callWS: async () => undefined as never,
    callService: async () => undefined,
    areas: { wohnen: { area_id: "wohnen", name: "Wohnzimmer" } },
    states: Object.fromEntries(states.map((s) => [s.entity_id, s])),
  };
}

test("state texts are short and localised", () => {
  const hass = hassWith([]);
  assert.equal(stateText(hass, st("light.a", "on", { brightness: 128 })), "50 %");
  assert.equal(stateText(hass, st("light.a", "off")), "Aus");
  assert.equal(stateText(hass, st("cover.a", "open", { current_position: 70 })), "70 %");
  assert.equal(stateText(hass, st("cover.a", "closing", { current_position: 70 })), "Schließt");
  assert.equal(stateText(hass, st("binary_sensor.f", "on", { device_class: "window" })), "Offen");
  assert.equal(stateText(hass, st("binary_sensor.m", "off", { device_class: "motion" })), "Frei");
  assert.equal(stateText(hass, st("climate.h", "heat", { current_temperature: 21.4 })), "21,4 °C");
  assert.equal(stateText(hass, st("sensor.t", "21.44", { unit_of_measurement: "°C" })), "21,4 °C");
  assert.equal(stateText(hass, st("light.a", "unavailable")), "Nicht verfügbar");
  assert.equal(stateText(hass, undefined), "Nicht verfügbar");
});

test("markers find their room, default height and light glow; missing entities are skipped", () => {
  const floor = newFloor("eg", "EG", 0);
  floor.rooms = [{ id: "r", name: "Wohnzimmer", area_id: "wohnen", points: [[0, 0], [4, 0], [4, 3], [0, 3]], floor_material: "wood" }];
  floor.placements = [
    { entity_id: "light.decke", x: 2, z: 1.5, y: null },
    { entity_id: "switch.draussen", x: 9, z: 9, y: 0.4 },
    { entity_id: "light.geloescht", x: 1, z: 1, y: null },
  ];
  const building: Building = { ...emptyBuilding(), floors: [floor] };
  const hass = hassWith([st("light.decke", "on", { friendly_name: "Wohnzimmer Decke", brightness: 255 }), st("switch.draussen", "off")]);
  const markers = buildMarkers(hass, building);
  assert.equal(markers.length, 2);
  const [lamp, sw] = markers;
  assert.equal(lamp.roomId, "r");
  assert.equal(lamp.name, "Decke");
  assert.equal(lamp.y, 2.25);
  assert.ok(lamp.active && lamp.glow && lamp.glow.level === 1);
  assert.equal(sw.roomId, null);
  assert.equal(sw.y, 0.4);
  assert.equal(sw.glow, null);
});

test("a TV shows the app that is running", () => {
  const hass = hassWith([]);
  assert.equal(stateText(hass, st("media_player.tv", "on", { app_name: "YouTube" })), "YouTube");
  assert.equal(stateText(hass, st("media_player.tv", "playing", { media_title: "Nachrichten" })), "Nachrichten");
  assert.equal(stateText(hass, st("media_player.tv", "off", { app_name: "YouTube" })), "Aus");
});

test("sensor values use the decimals set in Home Assistant", () => {
  const st = { entity_id: "sensor.gas", state: "1234.567", attributes: { unit_of_measurement: "m³" } };
  const hass = { language: "en", entities: { "sensor.gas": { entity_id: "sensor.gas", display_precision: 3 } } } as unknown as HomeAssistant;
  assert.equal(stateText(hass, st), "1,234.567 m³");
  assert.equal(stateText({ ...hass, entities: {} } as HomeAssistant, st), "1,234.6 m³");
});

test("a placement's marker setting reaches the marker", () => {
  const b: Building = emptyBuilding();
  b.floors = [{ ...newFloor("eg", "EG", 0), placements: [{ entity_id: "sensor.t", x: 1, z: 1, y: null, marker: "always" }, { entity_id: "switch.s", x: 2, z: 1, y: null }] }];
  const hass = { language: "de", states: { "sensor.t": { entity_id: "sensor.t", state: "21", attributes: {} }, "switch.s": { entity_id: "switch.s", state: "on", attributes: {} } } } as unknown as HomeAssistant;
  const [t, s] = buildMarkers(hass, b);
  assert.equal(t.show, "always");
  assert.equal(s.show, undefined);
});

test("a ceiling device outside rooms follows the underside of a canopy", () => {
  const b: Building = emptyBuilding();
  b.floors = [{ ...newFloor("eg", "EG", 0), placements: [{ entity_id: "camera.terrace", x: 2, z: 1, y: null, mount: "ceiling" }, { entity_id: "sensor.motion", x: 3, z: 1, y: null, mount: "ceiling" }] }];
  b.settings.roof = {
    type: "custom",
    pitch: 35,
    overhang: 0.2,
    sections: [{ id: "canopy", x0: 0, z0: 0, x1: 4, z1: 3, shape: "flat", axis: "x", eave_a: 2.5, eave_b: 2.5, pitch_a: 0, pitch_b: 0, base: 2.5, open: true }],
  };
  const [camera, sensor] = buildMarkers(hassWith([st("camera.terrace", "idle"), st("sensor.motion", "clear")]), b);
  assert.ok(Math.abs(camera.ceiling! - 2.36) < 1e-9);
  assert.ok(Math.abs(camera.y - 2.31) < 1e-9);
  assert.equal(camera.model, "camera_ceiling");
  assert.ok(Math.abs(sensor.y - 2.18) < 1e-9);
});

test("a camera's detection sensors are told apart by what they detect", () => {
  const hass = { states: { "binary_sensor.einfahrt_car_occupancy": { entity_id: "binary_sensor.einfahrt_car_occupancy", state: "on", attributes: {} }, "binary_sensor.x": { entity_id: "binary_sensor.x", state: "on", attributes: { friendly_name: "Terrasse Hund erkannt" } } } } as unknown as Parameters<typeof detectionKind>[0];
  assert.equal(detectionKind(hass, "binary_sensor.haustuer_person_occupancy"), "person");
  assert.equal(detectionKind(hass, "binary_sensor.einfahrt_car_occupancy"), "car");
  assert.equal(detectionKind(hass, "binary_sensor.x"), "pet");
  assert.equal(detectionKind(hass, "binary_sensor.flur_motion"), "motion");
});
