import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, floorElevation, FURNITURE_GROUPS, FURNITURE_SIZE, furnitureCorner, furnitureRotationAt, newFloor, openingPreset, openingStyle, normalizeBuilding, OUTDOOR_TYPES, outdoorDrop, outdoorGround, resizeFurniture, roomTiles, sidelightLayout, spotGrid, surfaceHeight, type Furniture } from "./model.ts";

test("furniture is grouped by function instead of a regional collection", () => {
  assert.equal(FURNITURE_GROUPS.vietnam, undefined);
  assert.ok(FURNITURE_GROUPS.living.includes("altar") && FURNITURE_GROUPS.living.includes("altar_wall"));
  assert.ok(FURNITURE_GROUPS.climate.includes("fan_ceiling") && FURNITURE_GROUPS.climate.includes("fan_ceiling_light") && FURNITURE_GROUPS.climate.includes("fan_wall") && FURNITURE_GROUPS.climate.includes("fan_floor"));
  assert.ok(FURNITURE_GROUPS.bath.includes("water_heater") && FURNITURE_GROUPS.bath.includes("drying_rack"));
  assert.ok(FURNITURE_GROUPS.vehicles.includes("motorbike"));
  assert.ok(FURNITURE_GROUPS.living.includes("smart_speaker") && FURNITURE_GROUPS.living.includes("smart_curtain"));
  assert.ok(FURNITURE_GROUPS.climate.includes("air_purifier"));
  assert.ok(FURNITURE_GROUPS.outdoor.includes("security_camera") && FURNITURE_GROUPS.outdoor.includes("smart_lock"));
  assert.ok(FURNITURE_GROUPS.outdoor.includes("robot_mower"));
  assert.ok(FURNITURE_GROUPS.work.includes("network_cabinet") && FURNITURE_GROUPS.work.includes("nas_server") && FURNITURE_GROUPS.work.includes("access_point"));
  assert.ok(FURNITURE_GROUPS.work.includes("smoke_detector") && FURNITURE_GROUPS.work.includes("siren_alarm"));
  assert.ok(FURNITURE_GROUPS.climate.includes("wall_thermostat"));
});

test("a sidelight sits opposite the hinge, on the hinge side when asked, and keeps the leaf at least half a metre", () => {
  const none = {};
  // hinge at the start: the panel at the end, the leaf from the start
  let l = sidelightLayout(1.6, "sidelight", true, none)!;
  assert.equal(l.panels.length, 1);
  assert.ok(l.panels[0][0] > 0.8 && Math.abs(l.panels[0][1] - 1.58) < 1e-9);
  assert.equal(l.x0, 0.02);
  // on the hinge side instead
  l = sidelightLayout(1.6, "sidelight", true, { sidelight_hinge: true })!;
  assert.equal(l.panels[0][0], 0.02);
  assert.ok(l.x0 > 0.3);
  // own widths, left and right, with two sidelights
  l = sidelightLayout(2.4, "sidelights", false, { sidelight_width: 0.3, sidelight_width2: 0.6 })!;
  assert.ok(Math.abs(l.panels[0][1] - 0.32) < 1e-9 && Math.abs(l.panels[1][0] - 1.78) < 1e-9);
  assert.ok(Math.abs(l.x1 - l.x0 - (2.4 - 0.04 - 0.9)) < 1e-9);
  // too wide: both shrink so the leaf keeps 0.5 m
  l = sidelightLayout(1.4, "sidelights", false, { sidelight_width: 1, sidelight_width2: 1 })!;
  assert.ok(Math.abs(l.x1 - l.x0 - 0.5) < 1e-9);
  assert.equal(sidelightLayout(1.0, "front", true, none), null);
});

test("a door without a style is a front door in an exterior wall and a room door inside", () => {
  assert.equal(openingStyle({ type: "door", style: null }, true), "front");
  assert.equal(openingStyle({ type: "door", style: null }, false), "interior");
  assert.equal(openingStyle({ type: "door", style: "sidelight" }, false), "sidelight");
  assert.equal(openingStyle({ type: "window", style: null }, true), "standard");
  // a window style on a door (or garbage) falls back to the automatic choice
  assert.equal(openingStyle({ type: "door", style: "bars" }, true), "front");
  assert.equal(openingPreset({ type: "door", leaves: 1, sill: 0, style: "front_glass" }), "front");
  assert.equal(openingPreset({ type: "door", leaves: 1, sill: 0, style: null }), "door");
});

const item = (type: string, x: number, z: number, h: number, extra: Partial<Furniture> = {}): Furniture => ({
  id: `${type}_${x}`,
  type,
  x,
  z,
  rotation: 0,
  w: 1,
  d: 0.6,
  h,
  variant: null,
  ...extra,
});

test("lights placed as devices become lamps of their mount type", () => {
  const b = emptyBuilding();
  const floor = newFloor("eg", "EG", 0);
  floor.placements = [
    { entity_id: "light.decke", x: 1, z: 2, y: null, mount: null },
    { entity_id: "light.lese", x: 3, z: 1, y: null, mount: "floor" },
    { entity_id: "switch.tv", x: 2, z: 2, y: null },
  ];
  b.floors = [floor];
  const out = normalizeBuilding(b).floors[0];
  assert.deepEqual(
    out.placements.map((p) => p.entity_id),
    ["switch.tv"],
  );
  assert.deepEqual(
    out.furniture.map((f) => [f.type, f.entity, f.x, f.z]),
    [
      ["lamp_ceiling", "light.decke", 1, 2],
      ["lamp_floor", "light.lese", 3, 1],
    ],
  );
  // normalising again changes nothing
  assert.equal(normalizeBuilding(b).floors[0].furniture.length, 2);
});

test("the legacy low robot dock upgrades to the gallery-style tower without changing custom sizes", () => {
  const b = emptyBuilding();
  const floor = newFloor("eg", "EG", 0);
  floor.furniture = [item("robot_vacuum", 1, 1, 0.1, { w: 0.36, d: 0.5 }), item("robot_vacuum", 2, 1, 0.2, { w: 0.5, d: 0.7 })];
  b.floors = [floor];
  const [legacy, custom] = normalizeBuilding(b).floors[0].furniture;
  assert.deepEqual([legacy.w, legacy.d, legacy.h], FURNITURE_SIZE.robot_vacuum);
  assert.deepEqual([custom.w, custom.d, custom.h], [0.5, 0.7, 0.2]);
});

test("a table lamp stands on the furniture below it", () => {
  const floor = newFloor("eg", "EG", 0);
  floor.furniture = [item("nightstand", 1, 1, 0.5), item("table", 4, 1, 0.75), item("sofa", 7, 1, 0.8)];
  assert.equal(surfaceHeight(floor, 1.1, 1), 0.5);
  assert.equal(surfaceHeight(floor, 4, 1.2), 0.75);
  assert.equal(surfaceHeight(floor, 7, 1), 0, "no lamps on the sofa");
  assert.equal(surfaceHeight(floor, 10, 10), 0);
});

test("a spot grid spreads lamps evenly and leaves out cells outside an L-shaped room", () => {
  const square = { id: "r", name: "R", area_id: null, points: [[0, 0], [4, 0], [4, 2], [0, 2]] as [number, number][], floor_material: "wood" };
  assert.deepEqual(spotGrid(square, 1, 2), [
    [1, 1],
    [3, 1],
  ]);
  const l = { ...square, points: [[0, 0], [4, 0], [4, 2], [2, 2], [2, 4], [0, 4]] as [number, number][] };
  // 2 × 2 cells, the one at the bottom right lies outside the L
  assert.equal(spotGrid(l, 2, 2).length, 3);
});

test("outdoor lamps stand on the ground, or on a terrace", () => {
  const floor = newFloor("eg", "EG", 0);
  floor.outdoor = [{ id: "t", type: "terrace", points: [[0, 0], [4, 0], [4, 3], [0, 3]] }];
  assert.equal(outdoorGround(floor, 10, 10), -0.2);
  assert.ok(Math.abs(outdoorGround(floor, 2, 1) - (-0.2 + 0.12)) < 1e-9);
  assert.equal(outdoorGround({ ...newFloor("og", "OG", 2.75), outdoor: [] }, 1, 1), 0);
});

test("covered structures exist only as rooms, not as legacy outdoor types", () => {
  const outdoorTypes = OUTDOOR_TYPES as readonly string[];
  assert.equal(outdoorTypes.includes("veranda"), false);
  assert.equal(outdoorTypes.includes("balcony"), false);
  assert.equal(outdoorTypes.includes("canopy"), false);
});

test("resizing drags one corner while the opposite corner stays", () => {
  const f: Furniture = { id: "f", type: "table", x: 1, z: 1, rotation: 0, w: 1, d: 1, h: 0.75, variant: null, entity: null, power: null };
  // pull the front-right corner from (1.5, 1.5) to (2.5, 2)
  assert.deepEqual(resizeFurniture(f, [1, 1], [2.5, 2], 0.05), { x: 1.5, z: 1.25, w: 2, d: 1.5 });
  // turned by 90°: local x points along +z in the plan, so dragging along +z makes it wider
  const turned = resizeFurniture({ ...f, rotation: 90 }, [1, 1], [0.5, 2.5], 0.05);
  assert.equal(turned.w, 2);
  assert.equal(turned.d, 1);
  // never smaller than 10 cm
  assert.equal(resizeFurniture(f, [1, 1], [0, 0], 0.05).w, 0.1);
});

test("a resized furniture item rotates accurately around its new centre", () => {
  const f: Furniture = { id: "f", type: "table", x: 1, z: 1, rotation: 30, w: 1, d: 0.8, h: 0.75, variant: null };
  const fixed = furnitureCorner(f, [-1, -1]);
  const resized = { ...f, ...resizeFurniture(f, [1, 1], [2.4, 2.1], 0.05) };

  // Resizing moves the centre, but leaves the opposite corner exactly where it started.
  const after = furnitureCorner(resized, [-1, -1]);
  assert.ok(Math.hypot(after[0] - fixed[0], after[1] - fixed[1]) < 0.001);

  // The rotation calculation uses that new centre and agrees with the visible front direction.
  const a = 75;
  const r = (a * Math.PI) / 180;
  const pointer: [number, number] = [resized.x - Math.sin(r) * 2, resized.z + Math.cos(r) * 2];
  assert.ok(Math.abs(furnitureRotationAt(resized, pointer) - a) < 1e-9);
});

test("floors from Home Assistant levels are stacked by level", () => {
  assert.equal(floorElevation([], 0), 0);
  assert.equal(floorElevation([], 1), 2.75);
  assert.equal(floorElevation([], -1), -2.75);
  // without a level, the new floor goes on top
  assert.equal(floorElevation([newFloor("eg", "EG", 0)], null), 2.75);
});

test("rooms for areas are laid out beside the existing rooms", () => {
  const floor = newFloor("eg", "EG", 0);
  floor.rooms = [{ id: "r", name: "R", area_id: null, points: [[0, 0], [5, 0], [5, 4], [0, 4]], floor_material: "wood" }];
  let n = 0;
  const rooms = roomTiles(floor, [{ area_id: "a", name: "Küche" }, { area_id: "b", name: "Bad" }, { area_id: "c", name: "Flur" }, { area_id: "d", name: "Büro" }], () => `t${n++}`);
  assert.equal(rooms.length, 4);
  assert.equal(rooms[0].name, "Küche");
  assert.equal(rooms[0].area_id, "a");
  assert.deepEqual(rooms[0].points[0], [6, 0]);
  // three per row
  assert.deepEqual(rooms[3].points[0], [6, 3.5]);
});

test("opening kinds: terrace doors are windows down to the floor, double ones have two leaves", () => {
  assert.equal(openingPreset({ type: "window", leaves: 2, sill: 0 }), "terrace_double");
  assert.equal(openingPreset({ type: "window", leaves: 1, sill: 0.9 }), "window");
  assert.equal(openingPreset({ type: "door", leaves: 2, sill: 0 }), "door_double");
  assert.equal(openingPreset({ type: "garage", leaves: 1, sill: 0 }), "garage");
});

test("a sloped area falls from its high edge to its low edge, lamps follow", () => {
  const floor = newFloor("eg", "EG", 0);
  floor.outdoor = [{ id: "d", type: "driveway", points: [[0, 0], [10, 0], [10, 3], [0, 3]], slope: 1.2, slope_dir: "-x" }];
  const a = floor.outdoor[0];
  assert.equal(outdoorDrop(a, 10, 1), 0);
  assert.ok(Math.abs(outdoorDrop(a, 0, 1) - 1.2) < 1e-9);
  assert.ok(Math.abs(outdoorDrop(a, 5, 1) - 0.6) < 1e-9);
  assert.ok(Math.abs(outdoorGround(floor, 5, 1) - (-0.2 + 0.02 - 0.6)) < 1e-9);
});

test("a patch cut out of a lawn decides the ground inside it", () => {
  const floor = newFloor("eg", "EG", 0);
  floor.outdoor = [
    { id: "l", type: "lawn", points: [[0, 0], [10, 0], [10, 10], [0, 10]] },
    { id: "w", type: "wild", points: [[2, 2], [4, 2], [4, 4], [2, 4]], cut: true },
  ];
  assert.ok(Math.abs(outdoorGround(floor, 3, 3) - (-0.2 + 0.03)) < 1e-9);
  assert.ok(Math.abs(outdoorGround(floor, 8, 8) - (-0.2 + 0.012)) < 1e-9);
});

test("a glass wall is a preset of its own (#163)", () => {
  assert.equal(openingPreset({ type: "window", leaves: 1, sill: 0, style: "glass_wall" }), "glass_wall");
  assert.equal(openingPreset({ type: "window", leaves: 1, sill: 0, style: null }), "terrace");
});
