import assert from "node:assert/strict";
import { test } from "node:test";
import { isLamp, newFloor } from "./model.ts";
import { furnitureSize, isElectric, mountBase, packItem, packItemName, packType, setPacks, type FurniturePack } from "./packs.ts";

const pack: FurniturePack = {
  id: "demo.pack",
  name: "Demo",
  publisher: "Demo",
  licensee: null,
  items: [{ id: "tv", name: { de: "Fernseher groß", en: "Big TV" }, size: [2, 0.3, 1.2], electric: true, parts: [{ shape: "box", x: 0, z: 0, w: 1, d: 1, y: 0, h: 1, color: "dark" }] }],
};

test("pack furniture resolves by type, with size, name and power link", () => {
  setPacks([pack]);
  const type = packType("demo.pack", "tv");
  assert.equal(type, "pack:demo.pack:tv");
  assert.deepEqual(furnitureSize(type), [2, 0.3, 1.2]);
  assert.equal(isElectric(type), true);
  assert.equal(packItemName(packItem(type)!, "de-DE"), "Fernseher groß");
  assert.equal(packItemName(packItem(type)!, "fr"), "Big TV");
  // built-in types keep their sizes; a removed pack leaves a plain default box
  assert.equal(furnitureSize("sofa").length, 3);
  setPacks([]);
  assert.equal(packItem(type), undefined);
  assert.deepEqual(furnitureSize(type), [0.6, 0.6, 0.8]);
  assert.equal(isElectric(type), false);
  assert.equal(isElectric("air_conditioner"), true);
  assert.equal(isElectric("water_pump"), true);
  assert.equal(isElectric("fan_ceiling"), true);
  assert.equal(isElectric("fan_ceiling_light"), true);
  assert.equal(isElectric("fan_wall"), true);
  assert.equal(isElectric("fan_floor"), true);
  assert.equal(isElectric("robot_mower"), true);
  for (const type of ["network_cabinet", "nas_server", "access_point", "wall_thermostat", "smoke_detector", "siren_alarm"]) assert.equal(isElectric(type), true, type);
  for (const type of ["electrical_panel", "ups_unit", "modem_router", "heat_pump_outdoor", "hot_water_tank", "ventilation_fan", "humidifier", "smart_display"]) assert.equal(isElectric(type), true, type);
  for (const type of ["wall_switch", "wall_outlet", "smart_plug", "motion_sensor", "contact_sensor", "water_leak_sensor", "temperature_humidity_sensor", "video_doorbell"]) assert.equal(isElectric(type), true, type);
  assert.equal(isElectric("water_heater"), true);
  assert.equal(isElectric("range_hood"), true);
  assert.equal(isElectric("microwave"), true);
  assert.equal(isElectric("water_purifier"), true);
  assert.equal(isElectric("altar"), false);
});

test("an outdoor water pump follows the ground or terrace and stays at floor level indoors", () => {
  const floor = newFloor("eg", "EG", 0);
  floor.outdoor = [{ id: "yard", type: "terrace", points: [[0, 0], [4, 0], [4, 3], [0, 3]] }];
  floor.rooms = [{ id: "shed", name: "Shed", area_id: null, points: [[5, 0], [7, 0], [7, 2], [5, 2]], floor_material: "concrete" }];
  assert.ok(Math.abs(mountBase(floor, { type: "water_pump", x: 2, z: 1, h: 0.45 }) - -0.08) < 1e-9);
  assert.equal(mountBase(floor, { type: "water_pump", x: 6, z: 1, h: 0.45 }), 0);
  assert.equal(mountBase(floor, { type: "water_pump", x: 2, z: 1, h: 0.45, mount_y: 0.2 }), 0.2);
});

test("pack items stand on the floor, on furniture, on a wall or hang from the ceiling", () => {
  const part = { shape: "box" as const, x: 0, z: 0, w: 1, d: 1, y: 0, h: 1, color: "wood" };
  setPacks([
    {
      id: "p",
      name: "P",
      publisher: "P",
      licensee: null,
      items: [
        { id: "island", name: { en: "Island" }, size: [2, 1, 0.9], surface: true, parts: [part] },
        { id: "coffee", name: { en: "Coffee" }, size: [0.3, 0.4, 0.4], mount: "surface", electric: true, parts: [part] },
        { id: "box", name: { en: "Wallbox" }, size: [0.3, 0.15, 0.4], mount: "wall", wall_y: 1.1, parts: [part] },
        { id: "chandelier", name: { en: "Chandelier" }, size: [0.8, 0.8, 0.6], mount: "ceiling", light: "pendant", parts: [{ ...part, glow: true }] },
      ],
    },
  ]);
  const floor = newFloor("f", "F", 0);
  floor.furniture = [{ id: "i", type: "pack:p:island", x: 0, z: 0, rotation: 0, w: 2, d: 1, h: 0.9, variant: null }];
  assert.equal(mountBase(floor, { type: "pack:p:coffee", x: 0.2, z: 0, h: 0.4 }), 0.9);
  assert.equal(mountBase(floor, { type: "pack:p:coffee", x: 3, z: 0, h: 0.4 }), 0);
  assert.equal(mountBase(floor, { type: "pack:p:box", x: 0, z: 0, h: 0.4 }), 1.1);
  // a wall item hung at another height
  assert.equal(mountBase(floor, { type: "pack:p:box", x: 0, z: 0, h: 0.4, mount_y: 1.6 }), 1.6);
  assert.equal(mountBase(floor, { type: "pack:p:chandelier", x: 0, z: 0, h: 0.6 }), 1.9);
  assert.equal(isLamp("pack:p:chandelier"), true);
  assert.equal(isLamp("pack:p:island"), false);
  setPacks([]);
});
