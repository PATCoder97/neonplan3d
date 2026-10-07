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
