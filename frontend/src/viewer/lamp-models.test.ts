import assert from "node:assert/strict";
import { test } from "node:test";
import { FURNITURE_SIZE, LAMP_MODEL, type FurnitureType } from "../model.ts";
import { GeoBuffer } from "./geo.ts";
import { SHADE_SENTINEL } from "./lamp-colors.ts";
import { pushLampModel } from "./viewer3d.ts";

const GALLERY_LIGHTS = [
  "lamp_column",
  "lamp_tv_bars",
  "lamp_orb_table",
  "lamp_portable",
  "lamp_ambient_spot",
  "lamp_cube",
  "lamp_panel_round",
  "lamp_garden_spots",
  "lamp_wall_updown",
] as const satisfies readonly FurnitureType[];

test("the gallery light family builds finite dedicated 3D geometry", () => {
  for (const type of GALLERY_LIGHTS) {
    const buf = new GeoBuffer();
    pushLampModel(buf, {
      lamp: LAMP_MODEL[type],
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
