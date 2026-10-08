import assert from "node:assert/strict";
import { test } from "node:test";
import type { Room } from "./model.ts";
import { coveredPlanStructure } from "./covered-plan.ts";

const covered = (kind: "veranda" | "canopy"): Room => ({
  id: "covered",
  name: "Covered",
  area_id: null,
  kind,
  points: [[0, 0], [0, 2], [4, 2], [4, 0]],
  floor_material: "tiles",
  open: true,
  railing: true,
});

test("a veranda plan shows its three free railings and configured front columns", () => {
  const plan = coveredPlanStructure({ ...covered("veranda"), columns: 3, column_size: 0.3 })!;
  assert.equal(plan.railings.length, 3);
  assert.deepEqual(plan.columns.map((column) => column.at), [[4, 2], [2, 2], [0, 2]]);
  assert.ok(plan.columns.every((column) => column.size === 0.3 && Math.abs((column.baseSize ?? 0) - 0.4125) < 1e-9));
});

test("a covered yard plan leaves a centred gate gap and marks every corner column", () => {
  const plan = coveredPlanStructure(covered("canopy"))!;
  assert.equal(plan.railings.length, 4, "two side fences and two front pieces around the gate");
  assert.equal(plan.columns.length, 4);
  const front = plan.railings.filter((segment) => segment.a[1] === 2 && segment.b[1] === 2);
  assert.equal(front.length, 2);
  const pieces = front.map((segment) => [Math.min(segment.a[0], segment.b[0]), Math.max(segment.a[0], segment.b[0])]).sort((a, b) => a[0] - b[0]);
  assert.ok(pieces[0][1] < pieces[1][0], "the gate stays visibly open in the 2D plan");
});
