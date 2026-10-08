import assert from "node:assert/strict";
import { test } from "node:test";
import { FURNITURE_SIZE, LAMP_MODEL, type FurnitureType } from "../model.ts";
import { GeoBuffer } from "./geo.ts";
import { SHADE_SENTINEL } from "./lamp-colors.ts";
import { pushLampModel } from "./viewer3d.ts";

test("every lamp catalog item builds visible finite 3D geometry", () => {
  for (const [type, lamp] of Object.entries(LAMP_MODEL) as [FurnitureType, (typeof LAMP_MODEL)[string]][]) {
    const buf = new GeoBuffer();
    pushLampModel(buf, {
      lamp,
      x: 1,
      z: 2,
      size: FURNITURE_SIZE[type],
      base: type === "lamp_wall_updown" ? 1.75 : 0,
      rotation: 25,
    }, 2.6, SHADE_SENTINEL);
    assert.ok(buf.count > 0, `${type} has triangles`);
    assert.ok(buf.p.every(Number.isFinite) && buf.c.every(Number.isFinite), `${type} has finite geometry`);
  }
});

test("kids night lights use two distinct dedicated lamp silhouettes", () => {
  const counts = (["lamp_night_moon", "lamp_star_projector"] as const).map((type) => {
    const buf = new GeoBuffer();
    pushLampModel(buf, { lamp: LAMP_MODEL[type], x: 0, z: 0, size: FURNITURE_SIZE[type], base: 0, rotation: 0 }, 2.6, SHADE_SENTINEL);
    return buf.count;
  });
  assert.notEqual(counts[0], counts[1]);
});
