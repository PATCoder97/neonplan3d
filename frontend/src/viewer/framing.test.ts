import assert from "node:assert/strict";
import test from "node:test";
import { newFloor } from "../model.ts";
import { framingBox } from "./framing.ts";

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
