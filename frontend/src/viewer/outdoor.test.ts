import assert from "node:assert/strict";
import { test } from "node:test";
import { Color } from "three";
import { newFloor } from "../model.ts";
import { GeoBuffer, LineBuffer } from "./geo.ts";
import { pushCovered, type CoveredRenderArea } from "./outdoor.ts";
import { NEON } from "./palette.ts";

const hasColor = (buf: GeoBuffer, hex: number) => {
  const wanted = new Color(hex);
  for (let i = 0; i < buf.c.length; i += 3) {
    if (Math.abs(buf.c[i] - wanted.r) < 1e-9 && Math.abs(buf.c[i + 1] - wanted.g) < 1e-9 && Math.abs(buf.c[i + 2] - wanted.b) < 1e-9) return true;
  }
  return false;
};

test("a canopy room draws a high fence, front gate, posts, beams and a sloped solid roof", () => {
  const floor = newFloor("eg", "EG", 0);
  const canopy: CoveredRenderArea = { id: "cover", type: "canopy", points: [[0, 0], [4, 0], [4, 3], [0, 3]], height: 2.4, slope: 0.25, slope_dir: "x", open: true, railing: true };
  const solid = new GeoBuffer();
  const lines = new LineBuffer();
  pushCovered(solid, lines, floor, [canopy]);
  assert.ok(solid.count > 0, "solid canopy geometry");
  assert.ok(hasColor(solid, NEON.wall) && hasColor(solid, NEON.wallTop), "canopy structure uses the canonical room wall palette");
  assert.ok(lines.p.length > 0, "roof outline");
  const heights = solid.p.filter((_, i) => i % 3 === 1);
  assert.ok(Math.max(...heights) > 2.21 && Math.max(...heights) < 2.23, "high roof edge is measured from the paved surface");
  assert.ok(heights.some((y) => y > 1.96 && y < 1.98), "low roof edge follows the slope");
  assert.ok(heights.some((y) => Math.abs(y - 1.27) < 1e-6), "the yard fence reaches 1.45 m above the paved surface");
  assert.ok(heights.some((y) => y > 1.62 && y < 1.75), "the clean gate arch rises above the fence in the centre");

  const bare = new GeoBuffer();
  pushCovered(bare, new LineBuffer(), floor, [{ ...canopy, railing: false }]);
  assert.ok(solid.count > bare.count + 100, "the optional fence and two-leaf gate add substantial geometry");
});

test("an upper-floor veranda room has railings, front columns and roof", () => {
  const floor = newFloor("og", "OG", 2.8);
  const veranda: CoveredRenderArea = { id: "veranda", type: "veranda", points: [[0, 0], [0, 1.5], [5.5, 1.5], [5.5, 0]], height: 2.4, slope: 0.12, slope_dir: "z", open: true, railing: true, columns: 2 };
  const solid = new GeoBuffer();
  const lines = new LineBuffer();
  const ranges = pushCovered(solid, lines, floor, [veranda]);
  const heights = solid.p.filter((_, i) => i % 3 === 1);
  assert.ok(solid.count > 150, "railing, balusters, columns and lintel geometry");
  assert.ok(hasColor(solid, NEON.wall) && hasColor(solid, NEON.wallTop), "veranda structure uses the canonical room wall palette");
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
