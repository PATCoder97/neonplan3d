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

test("a canopy room draws a high fence, front gate, posts, beams and a projecting corrugated roof", () => {
  const floor = newFloor("eg", "EG", 0);
  // The configured fall runs across the canopy; corrugations must still run longitudinally to the front.
  const canopy: CoveredRenderArea = { id: "cover", type: "canopy", points: [[0, 0], [4, 0], [4, 3], [0, 3]], height: 2.4, slope: 0.25, slope_dir: "z", open: true, railing: true };
  const solid = new GeoBuffer();
  const lines = new LineBuffer();
  const ranges = pushCovered(solid, lines, floor, [canopy]);
  assert.ok(solid.count > 0, "solid canopy geometry");
  assert.ok(hasColor(solid, NEON.wall) && hasColor(solid, NEON.wallTop), "canopy structure uses the canonical room wall palette");
  assert.ok(lines.p.length > 0, "roof outline");
  const heights = solid.p.filter((_, i) => i % 3 === 1);
  assert.ok(Math.max(...heights) > 2.24 && Math.max(...heights) < 2.26, "corrugation crests rise slightly above the high roof edge");
  assert.ok(heights.some((y) => y > 1.96 && y < 1.98), "low roof edge follows the slope");
  assert.ok(heights.some((y) => Math.abs(y - 1.27) < 1e-6), "the yard fence reaches 1.45 m above the paved surface");
  assert.ok(heights.some((y) => y > 1.62 && y < 1.75), "the clean gate arch rises above the fence in the centre");
  assert.ok(hasColor(solid, 0x315166) && hasColor(solid, 0x52788c), "the roof uses dark metal sheets with raised lighter corrugations");
  const roofPositions = solid.p.slice(ranges[0].roofStart! * 9, ranges[0].roofEnd! * 9);
  const roofX = roofPositions.filter((_, i) => i % 3 === 0);
  const roofZ = roofPositions.filter((_, i) => i % 3 === 2);
  assert.ok(Math.max(...roofX) > 4.34 && Math.max(...roofX) < 4.36, "the sheet projects 35 cm beyond the front posts");
  assert.ok(Math.min(...roofZ) < -0.119 && Math.max(...roofZ) > 3.119, "the sheet reaches the exterior wall faces and fully covers both side columns");

  const crest = new Color(0x52788c);
  const roofOffset = ranges[0].roofStart! * 9;
  const roofLimit = ranges[0].roofEnd! * 9;
  let longitudinalRidge = false;
  for (let i = roofOffset; i < roofLimit; i += 9) {
    const colorOffset = i;
    if (Math.abs(solid.c[colorOffset] - crest.r) > 1e-9 || Math.abs(solid.c[colorOffset + 1] - crest.g) > 1e-9 || Math.abs(solid.c[colorOffset + 2] - crest.b) > 1e-9) continue;
    const xs = [solid.p[i], solid.p[i + 3], solid.p[i + 6]];
    const zs = [solid.p[i + 2], solid.p[i + 5], solid.p[i + 8]];
    if (Math.max(...xs) - Math.min(...xs) > 4 && Math.max(...zs) - Math.min(...zs) < 0.05) longitudinalRidge = true;
  }
  assert.ok(longitudinalRidge, "corrugations run from the house to the front edge instead of across the canopy");

  const folded = new GeoBuffer();
  pushCovered(folded, new LineBuffer(), floor, [canopy], 15);
  assert.ok(folded.f.some((fold) => fold === 95), "canopy roof uses the translucent canopy fold kind");

  const bare = new GeoBuffer();
  const bareLines = new LineBuffer();
  pushCovered(bare, bareLines, floor, [{ ...canopy, railing: false }]);
  assert.ok(solid.count > bare.count + 100, "the optional fence and two-leaf gate add substantial geometry");
  assert.ok(lines.p.length > bareLines.p.length + 100, "fence, gate, posts and beams receive visible wall-style edges");
});

test("an upper-floor veranda room has railings, front columns and roof", () => {
  const floor = newFloor("og", "OG", 2.8);
  const veranda: CoveredRenderArea = { id: "veranda", type: "veranda", points: [[0, 0], [0, 1.5], [5.5, 1.5], [5.5, 0]], height: 2.4, slope: 0.12, slope_dir: "z", open: true, railing: true, columns: 2 };
  const solid = new GeoBuffer();
  const lines = new LineBuffer();
  const roofFold = 91;
  const ranges = pushCovered(solid, lines, floor, [veranda], roofFold);
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
  assert.equal(lines.f.filter((fold) => fold === roofFold).length, 6, "the three free roof edges keep their neon outline while the room roof folds away");
  assert.ok(lines.p.length > 300 && lines.p.length < 500, "veranda edges stay visible without a dense four-line outline around every baluster");
});

test("a balcony under the main roof has structure but no separate roof", () => {
  const floor = newFloor("og", "OG", 2.8);
  const balcony: CoveredRenderArea = { id: "balcony", type: "balcony", points: [[0, 0], [0, 1.5], [5.5, 1.5], [5.5, 0]], height: 2.4, slope: 0.12, slope_dir: "z", open: true, railing: true, columns: 2 };
  const solid = new GeoBuffer();
  const lines = new LineBuffer();
  const roofFold = 91;
  const ranges = pushCovered(solid, lines, floor, [balcony], roofFold);
  const heights = solid.p.filter((_, i) => i % 3 === 1);
  assert.ok(solid.count > 100, "the floor, railings, columns and lintel remain visible");
  assert.ok(heights.some((y) => Math.abs(y - 2.52) < 1e-6), "columns reach the full room height without inheriting a stale roof slope");
  assert.equal(ranges.length, 1);
  assert.equal(ranges[0].roofStart, undefined);
  assert.equal(ranges[0].roofEnd, undefined);
  assert.equal(lines.f.filter((fold) => fold === roofFold).length, 0, "no separate roof or roof neon outline is generated");
});
