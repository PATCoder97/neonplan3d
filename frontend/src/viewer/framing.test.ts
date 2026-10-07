import assert from "node:assert/strict";
import test from "node:test";
import { Box3, Vector3 } from "three";
import { newFloor } from "../model.ts";
import { cameraFitPlacement, cameraFitRadius, cameraFitView, framingBox } from "./framing.ts";

test("camera framing includes rooms, outdoor structures and free walls", () => {
  const floor = newFloor("ground", "Ground", 0);
  floor.height = 2.8;
  floor.rooms = [{ id: "room", name: "Room", area_id: null, points: [[0, 0], [5, 0], [5, 10], [0, 10]], floor_material: "wood" }];
  floor.outdoor = [{ id: "terrace", type: "terrace", points: [[0, 10], [5, 10], [5, 13], [0, 13]] }];
  floor.walls = [{ id: "wall", a: [-2, 2], b: [-2, 8], height: 1.2 }];

  const box = framingBox([{ floor, ty: 0 }]);

  assert.deepEqual(box.min.toArray(), [-2, -0.2, 0]);
  assert.deepEqual(box.max.toArray(), [5, 2.8, 13]);
});

test("camera framing works for an outdoor-only floor with its current vertical offset", () => {
  const floor = newFloor("roof", "Roof", 3);
  floor.outdoor = [{ id: "pergola", type: "pergola", points: [[1, 2], [4, 2], [4, 6], [1, 6]], height: 2.6 }];

  const box = framingBox([{ floor, ty: 1.5 }]);

  assert.deepEqual(box.min.toArray(), [1, 4.5, 2]);
  assert.deepEqual(box.max.toArray(), [4, 7.1, 6]);
});

test("camera distance fits a long narrow building at its actual diagonal view", () => {
  const box = framingBox([
    {
      floor: {
        ...newFloor("ground", "Ground", 0),
        height: 5.6,
        rooms: [{ id: "room", name: "Room", area_id: null, points: [[0, 0], [5.5, 0], [5.5, 21.6], [0, 21.6]], floor_material: "wood" }],
      },
      ty: 0,
    },
  ]);
  const theta = -0.6;
  const phi = 0.85;
  const aspect = 16 / 9;
  const fov = (45 * Math.PI) / 180;
  const radius = cameraFitRadius(box, theta, phi, aspect, fov, 1.06);
  const sphereDistance = box.getSize(new Vector3()).length() / 2 / Math.sin(Math.min(fov, 2 * Math.atan(Math.tan(fov / 2) * aspect)) / 2);

  assert.ok(radius > 0);
  assert.ok(radius < sphereDistance, "the diagonal house should not be framed as an orientation-independent sphere");
});

test("a long narrow building turns further across a wide screen before it is fitted", () => {
  const floor = newFloor("ground", "Ground", 0);
  floor.rooms = [{ id: "room", name: "Room", area_id: null, points: [[0, 0], [5.5, 0], [5.5, 21.6], [0, 21.6]], floor_material: "wood" }];
  const box = framingBox([{ floor, ty: 0 }]);
  const fov = (45 * Math.PI) / 180;
  const diagonal = cameraFitRadius(box, -0.6, 0.85, 16 / 9, fov, 1.06);
  const fitted = cameraFitView(box, 0.85, 16 / 9, fov, 1.06);

  assert.equal(fitted.theta, -0.95);
  assert.ok(fitted.radius < diagonal * 0.9);
  assert.equal(cameraFitView(box, 0.85, 9 / 16, fov, 1.12).theta, -0.6, "portrait screens keep the balanced diagonal");
});

test("camera placement tightly uses the screen area beside floor thumbnails", () => {
  const box = new Box3(new Vector3(0, 0, 0), new Vector3(5.5, 3, 21.6));
  const width = 1600;
  const height = 900;
  const theta = -0.95;
  const phi = 0.85;
  const fov = (38 * Math.PI) / 180;
  const frame = { width, height, left: 192, right: 18, top: 18, bottom: 18 };
  const fit = cameraFitPlacement(box, theta, phi, width / height, fov, frame);
  const center = box.getCenter(new Vector3()).add(fit.offset);
  const towardCamera = new Vector3(Math.sin(phi) * Math.sin(theta), Math.cos(phi), Math.sin(phi) * Math.cos(theta));
  const right = new Vector3(Math.cos(theta), 0, -Math.sin(theta));
  const up = new Vector3(-Math.sin(theta) * Math.cos(phi), Math.sin(phi), -Math.cos(theta) * Math.cos(phi));
  const tanV = Math.tan(fov / 2);
  const tanH = tanV * (width / height);
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;
  for (const x of [box.min.x, box.max.x])
    for (const y of [box.min.y, box.max.y])
      for (const z of [box.min.z, box.max.z]) {
        const p = new Vector3(x, y, z).sub(center);
        const depth = fit.radius - p.dot(towardCamera);
        const sx = p.dot(right) / (depth * tanH);
        const sy = p.dot(up) / (depth * tanV);
        minX = Math.min(minX, sx);
        maxX = Math.max(maxX, sx);
        minY = Math.min(minY, sy);
        maxY = Math.max(maxY, sy);
      }
  const left = -1 + (2 * frame.left) / width;
  const rightEdge = 1 - (2 * frame.right) / width;
  const bottom = -1 + (2 * frame.bottom) / height;
  const top = 1 - (2 * frame.top) / height;

  assert.ok(minX >= left - 1e-9 && maxX <= rightEdge + 1e-9);
  assert.ok(minY >= bottom - 1e-9 && maxY <= top + 1e-9);
  assert.ok(Math.min(Math.abs(minX - left), Math.abs(maxX - rightEdge), Math.abs(minY - bottom), Math.abs(maxY - top)) < 1e-8, "one projected edge is tight");
  assert.ok(fit.offset.length() > 0, "the orbit target moves away from the left overlay");
});
