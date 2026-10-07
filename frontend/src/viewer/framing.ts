import { Box3, Vector3 } from "three";
import { groundLevel, OUTDOOR_TOP, outdoorStanding, type Floor } from "../model.ts";

export interface FramingFloor {
  floor: Floor;
  /** Current vertical offset while floors are stacked or pulled apart. */
  ty: number;
}

const expandColumn = (box: Box3, x: number, z: number, y0: number, y1: number): void => {
  box.expandByPoint(new Vector3(x, y0, z));
  box.expandByPoint(new Vector3(x, y1, z));
};

/** Bounds of every structural part that the camera should keep inside the initial view. */
export function framingBox(floors: readonly FramingFloor[]): Box3 {
  const box = new Box3();
  for (const { floor, ty } of floors) {
    const floorY = floor.elevation + ty;
    for (const room of floor.rooms) {
      for (const [x, z] of room.points) expandColumn(box, x, z, floorY, floorY + floor.height);
    }
    for (const area of floor.outdoor ?? []) {
      const ground = floorY + groundLevel(floor) + (area.offset ?? 0);
      const low = ground - (area.type === "pool" ? 0 : (area.slope ?? 0));
      const ownHeight = outdoorStanding(area.type) && area.height ? area.height : OUTDOOR_TOP[area.type];
      const high = ground + (area.type === "pool" ? 0.06 : ownHeight);
      for (const [x, z] of area.points) expandColumn(box, x, z, low, high);
    }
    for (const wall of floor.walls ?? []) {
      const top = floorY + Math.min(floor.height, wall.height ?? floor.height);
      expandColumn(box, wall.a[0], wall.a[1], floorY, top);
      expandColumn(box, wall.b[0], wall.b[1], floorY, top);
    }
  }
  return box;
}

/** Camera distance that fits an axis-aligned box at the actual orbit angle, instead of a wasteful bounding sphere. */
export function cameraFitRadius(box: Box3, theta: number, phi: number, aspect: number, verticalFov: number, margin = 1): number {
  if (box.isEmpty()) return 0;
  const center = box.getCenter(new Vector3());
  const towardCamera = new Vector3(Math.sin(phi) * Math.sin(theta), Math.cos(phi), Math.sin(phi) * Math.cos(theta));
  const right = new Vector3(Math.cos(theta), 0, -Math.sin(theta));
  const up = new Vector3(-Math.sin(theta) * Math.cos(phi), Math.sin(phi), -Math.cos(theta) * Math.cos(phi));
  const tanV = Math.tan(verticalFov / 2);
  const tanH = tanV * Math.max(0.01, aspect);
  let radius = 0;
  for (const x of [box.min.x, box.max.x]) {
    for (const y of [box.min.y, box.max.y]) {
      for (const z of [box.min.z, box.max.z]) {
        const p = new Vector3(x, y, z).sub(center);
        const near = p.dot(towardCamera);
        radius = Math.max(radius, near + (Math.abs(p.dot(right)) * margin) / tanH, near + (Math.abs(p.dot(up)) * margin) / tanV);
      }
    }
  }
  return radius;
}

/** A front-left view that uses a wide screen better for a long, narrow plan. */
export function cameraFitView(box: Box3, phi: number, aspect: number, verticalFov: number, margin = 1): { theta: number; radius: number } {
  const size = box.getSize(new Vector3());
  const narrow = Math.max(0.01, Math.min(size.x, size.z));
  const elongated = Math.max(size.x, size.z) / narrow >= 2;
  let theta = -0.6;
  if (elongated && aspect >= 1.2) theta = size.z >= size.x ? -0.95 : -0.35;
  return { theta, radius: cameraFitRadius(box, theta, phi, aspect, verticalFov, margin) };
}
