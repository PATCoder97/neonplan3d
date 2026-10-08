import assert from "node:assert/strict";
import { test } from "node:test";
import { newFloor } from "../model.ts";
import { GeoBuffer, LineBuffer } from "./geo.ts";
import { pushOutdoor } from "./outdoor.ts";

test("an outdoor canopy draws posts, beams and a sloped solid roof", () => {
  const floor = newFloor("eg", "EG", 0);
  floor.outdoor = [{ id: "cover", type: "canopy", points: [[0, 0], [4, 0], [4, 3], [0, 3]], height: 2.4, slope: 0.25, slope_dir: "x" }];
  const solid = new GeoBuffer();
  const lines = new LineBuffer();
  pushOutdoor(solid, lines, floor);
  assert.ok(solid.count > 0, "solid canopy geometry");
  assert.ok(lines.p.length > 0, "roof outline");
  const heights = solid.p.filter((_, i) => i % 3 === 1);
  assert.ok(Math.max(...heights) > 2.21 && Math.max(...heights) < 2.23, "high roof edge is measured from the paved surface");
  assert.ok(heights.some((y) => y > 1.96 && y < 1.98), "low roof edge follows the slope");
});

test("an upper-floor veranda is one object with a slab, railings, front columns and roof", () => {
  const floor = newFloor("og", "OG", 2.8);
  floor.outdoor = [{ id: "veranda", type: "veranda", points: [[0, 0], [0, 1.5], [5.5, 1.5], [5.5, 0]], height: 2.4, slope: 0.12, slope_dir: "z", open: true }];
  const solid = new GeoBuffer();
  const lines = new LineBuffer();
  const ranges = pushOutdoor(solid, lines, floor);
  const heights = solid.p.filter((_, i) => i % 3 === 1);
  assert.ok(solid.count > 150, "railing, balusters, columns and lintel geometry");
  assert.ok(heights.some((y) => Math.abs(y - 1.22) < 1e-6), "railing is 1.1 m above the terrace");
  assert.ok(heights.some((y) => Math.abs(y - 2.52) < 1e-6), "columns are 2.4 m above the terrace");
  assert.ok(heights.some((y) => Math.abs(y - 2.4) < 1e-6), "roof falls towards the free edge");
  assert.equal(ranges.length, 1);
  assert.equal(ranges[0].id, "veranda");
  assert.equal(ranges[0].start, 0);
  assert.equal(ranges[0].end, solid.count, "the whole structure has one 3D picking range");
  assert.ok(ranges[0].roofStart! < ranges[0].roofEnd!, "the roof has its own range so a selected room can reveal devices below it");
  assert.ok(lines.p.length > 0, "veranda outlines");
});
