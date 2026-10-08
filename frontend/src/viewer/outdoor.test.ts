import assert from "node:assert/strict";
import { test } from "node:test";
import { newFloor } from "../model.ts";
import { GeoBuffer, LineBuffer } from "./geo.ts";
import { pushOutdoor } from "./outdoor.ts";

test("an outdoor canopy draws a paved yard, high fence, front gate, posts, beams and a sloped solid roof", () => {
  const floor = newFloor("eg", "EG", 0);
  const canopy = { id: "cover", type: "canopy" as const, points: [[0, 0], [4, 0], [4, 3], [0, 3]] as [number, number][], height: 2.4, slope: 0.25, slope_dir: "x" as const, open: true };
  floor.outdoor = [canopy];
  const solid = new GeoBuffer();
  const lines = new LineBuffer();
  pushOutdoor(solid, lines, floor);
  assert.ok(solid.count > 0, "solid canopy geometry");
  assert.ok(lines.p.length > 0, "roof outline");
  const heights = solid.p.filter((_, i) => i % 3 === 1);
  assert.ok(Math.max(...heights) > 2.21 && Math.max(...heights) < 2.23, "high roof edge is measured from the paved surface");
  assert.ok(heights.some((y) => y > 1.96 && y < 1.98), "low roof edge follows the slope");
  assert.ok(heights.some((y) => Math.abs(y - 1.27) < 1e-6), "the yard fence reaches 1.45 m above the paved surface");
  assert.ok(heights.some((y) => y > 1.62 && y < 1.75), "the clean gate arch rises above the fence in the centre");

  const bare = new GeoBuffer();
  pushOutdoor(bare, new LineBuffer(), { ...floor, outdoor: [{ ...canopy, railing: false }] });
  assert.ok(solid.count > bare.count + 100, "the optional fence and two-leaf gate add substantial geometry");
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
