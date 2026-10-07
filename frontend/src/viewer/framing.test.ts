import assert from "node:assert/strict";
import test from "node:test";
import { Vector3 } from "three";
import { newFloor } from "../model.ts";
import { cameraFitRadius, cameraFitView, framingBox } from "./framing.ts";

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
