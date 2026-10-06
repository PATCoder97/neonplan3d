export interface PlanView {
  scale: number;
  ox: number;
  oy: number;
}

/** Convert a point in plan coordinates to CSS pixels inside the plan SVG. */
export function planToScreen(view: PlanView, x: number, z: number): [number, number] {
  return [x * view.scale + view.ox, z * view.scale + view.oy];
}

/** Convert CSS pixels inside the plan SVG back to plan coordinates. */
export function screenToPlan(view: PlanView, sx: number, sy: number): [number, number] {
  return [(sx - view.ox) / view.scale, (sy - view.oy) / view.scale];
}

/** Zoom without moving the plan point currently under the pointer. */
export function zoomPlanAt(view: PlanView, factor: number, sx: number, sy: number): PlanView {
  const next = Math.max(8, Math.min(600, view.scale * factor));
  const k = next / view.scale;
  return { scale: next, ox: sx - (sx - view.ox) * k, oy: sy - (sy - view.oy) * k };
}
