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
  assert.ok(Math.max(...heights) > 2.19 && Math.max(...heights) < 2.21, "high roof edge");
  assert.ok(heights.some((y) => y > 1.94 && y < 1.96), "low roof edge follows the slope");
});

test("an upper-floor veranda draws railings and two full-height front columns from the terrace", () => {
  const floor = newFloor("og", "OG", 2.8);
  floor.outdoor = [
    { id: "terrace", type: "terrace", points: [[0, 0], [5.5, 0], [5.5, 1.5], [0, 1.5]] },
    { id: "veranda", type: "veranda", points: [[0, 0], [0, 1.5], [5.5, 1.5], [5.5, 0]], height: 2.4, offset: 0.12, open: true },
  ];
  const solid = new GeoBuffer();
  const lines = new LineBuffer();
  pushOutdoor(solid, lines, floor);
  const heights = solid.p.filter((_, i) => i % 3 === 1);
  assert.ok(solid.count > 150, "railing, balusters, columns and lintel geometry");
  assert.ok(heights.some((y) => Math.abs(y - 1.22) < 1e-6), "railing is 1.1 m above the terrace");
  assert.ok(heights.some((y) => Math.abs(y - 2.52) < 1e-6), "columns are 2.4 m above the terrace");
  assert.ok(lines.p.length > 0, "veranda outlines");
});
