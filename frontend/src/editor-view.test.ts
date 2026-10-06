import assert from "node:assert/strict";
import { test } from "node:test";
import { planToScreen, screenToPlan, zoomPlanAt, type PlanView } from "./editor-view.ts";

test("plan and screen coordinates round-trip exactly", () => {
  const view: PlanView = { scale: 52, ox: 137, oy: 91 };
  const screen = planToScreen(view, 4.25, 7.5);

  assert.deepEqual(screenToPlan(view, ...screen), [4.25, 7.5]);
});

test("zoom keeps the plan point under the pointer fixed", () => {
  const view: PlanView = { scale: 48, ox: 110, oy: 75 };
  const pointer: [number, number] = [423, 286];
  const before = screenToPlan(view, ...pointer);
  const zoomed = zoomPlanAt(view, 1.7, ...pointer);
  const after = screenToPlan(zoomed, ...pointer);

  assert.ok(Math.abs(after[0] - before[0]) < 1e-12);
  assert.ok(Math.abs(after[1] - before[1]) < 1e-12);
});

test("zoom scale stays inside the editor limits", () => {
  assert.equal(zoomPlanAt({ scale: 10, ox: 0, oy: 0 }, 0.01, 0, 0).scale, 8);
  assert.equal(zoomPlanAt({ scale: 500, ox: 0, oy: 0 }, 10, 0, 0).scale, 600);
});
