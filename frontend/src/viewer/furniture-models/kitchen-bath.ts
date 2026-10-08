// Kitchen appliances, cabinetry and bathroom fixtures.

import { Color } from "three";
import type { Furniture } from "../../model.ts";
import { C, EDGE_FAINT, EDGE_FURN, EDGE_GLOW, FurnitureBuilder as Builder, flipWinding } from "../furniture-builder.ts";
import { DEG, type GeoBuffer } from "../geo.ts";
import { cabinet, fronts } from "./common.ts";
import type { FurnitureModelRenderer } from "./types.ts";

export const FRIDGE_DOOR = 0.06;

function kitchen(b: Builder, w: number, d: number, h: number): void {
  const doors = Math.max(1, Math.round(w / 0.6));
  cabinet(b, w, d - 0.02, h - 0.04, doors, h - 0.2);
  b.box(-w / 2, w / 2, h - 0.04, h, -d / 2, d / 2, C.whiteTop, C.whiteTop, EDGE_FURN);
}

function fridge(b: Builder, w: number, d: number, h: number): void {
  b.box(-w / 2, w / 2, 0, h, -d / 2, d / 2, C.white, C.whiteTop, EDGE_FURN);
  const split = h * 0.62;
  b.seg(-w / 2, split, d / 2, w / 2, split, d / 2, EDGE_FAINT);
  const hx = w / 2 - 0.06;
  b.seg(hx, split + 0.08, d / 2 + 0.015, hx, split + 0.4, d / 2 + 0.015, EDGE_GLOW);
  b.seg(hx, split - 0.4, d / 2 + 0.015, hx, split - 0.08, d / 2 + 0.015, EDGE_GLOW);
}

function fridgeSmart(b: Builder, w: number, d: number, h: number): void {
  const front = d / 2 - FRIDGE_DOOR;
  b.box(-w / 2, w / 2, 0.02, h, -d / 2, front, C.body, C.bodyTop, EDGE_FURN);
  b.box(-w / 2 + 0.05, w / 2 - 0.05, 0, 0.02, -d / 2 + 0.05, front - 0.05, C.dark);
  // shelves of both compartments, seen when a door stands open
  for (const y of [0.35, 0.7, 1.05, 1.4]) {
    if (y > h - 0.15) continue;
    b.seg(-w / 2 + 0.03, y, front + 0.001, -0.03, y, front + 0.001, EDGE_FAINT);
    b.seg(0.03, y, front + 0.001, w / 2 - 0.03, y, front + 0.001, EDGE_FAINT);
  }
}

export function pushFridgeDoors(buf: GeoBuffer, f: Pick<Furniture, "x" | "z" | "rotation" | "w" | "d" | "h" | "mirror">, base: number, left: number, right: number): void {
  const p0 = buf.p.length;
  pushFridgeDoorsUnflipped(buf, f, base, left, right);
  if (f.mirror) flipWinding(buf, p0);
}

function pushFridgeDoorsUnflipped(buf: GeoBuffer, f: Pick<Furniture, "x" | "z" | "rotation" | "w" | "d" | "h" | "mirror">, base: number, left: number, right: number): void {
  const a = f.rotation * DEG;
  const c = Math.cos(a);
  const s = Math.sin(a);
  const mx = f.mirror ? -1 : 1;
  const tf = (lx: number, lz: number): [number, number] => [f.x + mx * lx * c - lz * s, f.z + mx * lx * s + lz * c];
  const y0 = base + 0.05;
  const y1 = base + f.h - 0.02;
  const red = new Color(0.75, 0.1, 0.14);
  const dark = new Color(C.dark);
  const accent = new Color(C.accent);
  const dw = f.w / 2 - 0.006;
  // a door: u runs from the hinge along the door (positive to the right), v through its thickness (0 = front face)
  const door = (hx: number, sign: 1 | -1, angle: number) => {
    const open = angle / opening;
    const front = new Color(0x1f2d4c).lerp(red, open);
    const side = new Color(C.body).lerp(red, open * 0.8);
    const ca = Math.cos(angle);
    const sa = Math.sin(angle);
    const at = (u: number, v: number): [number, number] => tf(hx + sign * (u * ca - v * sa), f.d / 2 + u * sa + v * ca);
    const quad = (p: [number, number][], ya: number, yb: number, col: Color) => {
      const [p0, p1, p2, p3] = p;
      buf.tri([p0[0], ya, p0[1]], [p1[0], ya, p1[1]], [p2[0], yb, p2[1]], col);
      buf.tri([p0[0], ya, p0[1]], [p2[0], yb, p2[1]], [p3[0], yb, p3[1]], col);
    };
    const box = (u0: number, u1: number, ya: number, yb: number, v0: number, v1: number, col: Color, face = col) => {
      const q = [at(u0, v1), at(u1, v1), at(u1, v0), at(u0, v0)];
      // front (v1 side), back, sides, top and bottom
      quad([q[0], q[1], q[1], q[0]], ya, yb, face);
      quad([q[3], q[2], q[2], q[3]], ya, yb, col);
      quad([q[0], q[3], q[3], q[0]], ya, yb, col);
      quad([q[1], q[2], q[2], q[1]], ya, yb, col);
      quad([q[0], q[1], q[2], q[3]], yb, yb, col);
      quad([q[3], q[2], q[1], q[0]], ya, ya, col);
    };
    box(0, dw, y0, y1, -FRIDGE_DOOR, 0, side, front);
    // handle at the free edge
    box(dw - 0.05, dw - 0.03, base + f.h * 0.45, base + f.h * 0.75, 0.005, 0.025, accent);
    return box;
  };
  const opening = 1.83; // ~105°
  const leftBox = door(-f.w / 2, 1, left * opening);
  // water dispenser: a dark recess in the left door
  leftBox(0.12, 0.3, base + f.h * 0.5, base + f.h * 0.68, 0.001, 0.005, dark);
  const rightBox = door(f.w / 2, -1, right * opening);
  // the screen: a dark panel on the right door (a picture rule puts its picture over it)
  rightBox(0.06, dw - 0.06, base + f.h * 0.52, base + f.h * 0.86, 0.001, 0.005, dark);
}

function stove(b: Builder, w: number, d: number, h: number): void {
  cabinet(b, w, d - 0.02, h - 0.04, 1, h - 0.24, true);
  b.box(-w / 2, w / 2, h - 0.04, h, -d / 2, d / 2, C.dark, C.dark, EDGE_FURN);
  for (const [x, z, r] of [
    [-0.14, -0.13, 0.09],
    [0.14, -0.13, 0.07],
    [-0.14, 0.13, 0.07],
    [0.14, 0.13, 0.09],
  ]) {
    const sx = (x * w) / 0.6;
    const sz = (z * d) / 0.62;
    b.cyl(sx, sz, r, h, h + 0.004, C.dark, 0x16263f, 12, EDGE_GLOW);
  }
}

function sink(b: Builder, w: number, d: number, h: number): void {
  cabinet(b, w, d - 0.02, h - 0.04, Math.max(1, Math.round(w / 0.45)), h - 0.2);
  const bw = Math.min(0.5, w - 0.2);
  b.box(-w / 2, -bw / 2, h - 0.04, h, -d / 2, d / 2, C.whiteTop, C.whiteTop, EDGE_FURN);
  b.box(bw / 2, w / 2, h - 0.04, h, -d / 2, d / 2, C.whiteTop, C.whiteTop, EDGE_FURN);
  b.box(-bw / 2, bw / 2, h - 0.04, h, -d / 2, -d / 2 + 0.1, C.whiteTop, C.whiteTop);
  b.box(-bw / 2, bw / 2, h - 0.04, h, d / 2 - 0.08, d / 2, C.whiteTop, C.whiteTop);
  b.box(-bw / 2, bw / 2, h - 0.2, h - 0.17, -d / 2 + 0.1, d / 2 - 0.08, C.metal, C.metal, EDGE_GLOW);
  b.cyl(0, -d / 2 + 0.05, 0.02, h, h + 0.28, C.metal, C.metal, 8);
  b.box(-0.015, 0.015, h + 0.24, h + 0.28, -d / 2 + 0.05, -d / 2 + 0.22, C.metal);
}

function bathtub(b: Builder, w: number, d: number, h: number): void {
  const rim = 0.07;
  b.box(-w / 2, w / 2, 0, h - 0.02, -d / 2, d / 2, C.white, C.whiteTop, EDGE_FURN);
  b.box(-w / 2, w / 2, h - 0.02, h, -d / 2, -d / 2 + rim, C.whiteTop);
  b.box(-w / 2, w / 2, h - 0.02, h, d / 2 - rim, d / 2, C.whiteTop);
  b.box(-w / 2, -w / 2 + rim, h - 0.02, h, -d / 2 + rim, d / 2 - rim, C.whiteTop);
  b.box(w / 2 - rim, w / 2, h - 0.02, h, -d / 2 + rim, d / 2 - rim, C.whiteTop);
  b.box(-w / 2 + rim, w / 2 - rim, h - 0.03, h - 0.02, -d / 2 + rim, d / 2 - rim, C.glass, C.glass, EDGE_GLOW);
  b.cyl(-w / 2 + 0.04, 0, 0.02, h, h + 0.12, C.metal, C.metal, 8);
}

function shower(b: Builder, w: number, d: number, h: number): void {
  b.box(-w / 2, w / 2, 0, 0.05, -d / 2, d / 2, C.whiteTop, C.whiteTop, EDGE_FURN);
  b.cyl(0, 0, 0.04, 0.05, 0.052, C.metal, C.metal, 8);
  // glass walls on the front and one side: only edges, the glass itself stays clear
  for (const [xa, za, xb, zb] of [
    [-w / 2, d / 2, w / 2, d / 2],
    [w / 2, -d / 2, w / 2, d / 2],
  ]) {
    b.seg(xa, 0.05, za, xb, 0.05, zb, EDGE_GLOW);
    b.seg(xa, h, za, xb, h, zb, EDGE_GLOW);
    b.seg(xb, 0.05, zb, xb, h, zb, EDGE_GLOW);
  }
  b.cyl(-w / 2 + 0.06, -d / 2 + 0.06, 0.015, 0.05, h - 0.05, C.metal, C.metal, 6);
  b.cyl(-w / 2 + 0.2, -d / 2 + 0.2, 0.1, h - 0.08, h - 0.06, C.metal, C.metal, 12, EDGE_GLOW);
}

function wc(b: Builder, w: number, d: number, h: number): void {
  const tankD = Math.min(0.18, d * 0.3);
  b.box(-w / 2, w / 2, 0.45, h, -d / 2, -d / 2 + tankD, C.white, C.whiteTop, EDGE_FURN);
  b.box(-w * 0.3, w * 0.3, 0, 0.36, -d / 2 + tankD - 0.02, d / 2 - 0.12, C.white, C.whiteTop);
  b.cyl(0, d / 2 - 0.26, Math.min(w / 2, 0.19), 0.36, 0.41, C.white, C.whiteTop, 12, EDGE_FURN);
  b.box(-w / 2 + 0.02, w / 2 - 0.02, 0.41, 0.43, -d / 2 + tankD, -d / 2 + tankD + 0.05, C.whiteTop);
}

function washbasin(b: Builder, w: number, d: number, h: number): void {
  cabinet(b, w, d - 0.02, h - 0.12, w > 0.8 ? 2 : 1, h - 0.3);
  b.box(-w / 2, w / 2, h - 0.12, h, -d / 2, d / 2, C.white, C.whiteTop, EDGE_FURN);
  b.box(-w / 2 + 0.07, w / 2 - 0.07, h - 0.005, h, -d / 2 + 0.12, d / 2 - 0.06, C.glass, C.glass, EDGE_GLOW);
  b.cyl(0, -d / 2 + 0.06, 0.018, h, h + 0.2, C.metal, C.metal, 8);
  // mirror above
  b.box(-w / 2 + 0.04, w / 2 - 0.04, h + 0.35, h + 1.0, -d / 2, -d / 2 + 0.02, C.glass, C.glass, EDGE_GLOW);
}

function kitchenWall(b: Builder, w: number, d: number, h: number): void {
  // hangs above the worktop
  const y0 = 1.45;
  b.box(-w / 2, w / 2, y0, y0 + h, -d / 2, d / 2 - 0.02, C.body, C.bodyTop, EDGE_FURN);
  fronts(b, -w / 2, w / 2, y0, y0 + h, d / 2 - 0.02, Math.max(1, Math.round(w / 0.5)), y0 + 0.08);
}

function kitchenTall(b: Builder, w: number, d: number, h: number): void {
  b.box(-w / 2, w / 2, 0.02, h, -d / 2, d / 2 - 0.02, C.body, C.bodyTop, EDGE_FURN);
  b.box(-w / 2 + 0.02, w / 2 - 0.02, 0, 0.08, -d / 2 + 0.02, d / 2 - 0.06, C.dark);
  const z = d / 2 - 0.02;
  // oven with a dark glass door and a glowing handle, fronts above and below
  b.box(-w / 2 + 0.03, w / 2 - 0.03, 0.85, 1.45, z, z + 0.01, C.dark, C.dark, EDGE_GLOW);
  b.seg(-w / 2 + 0.08, 1.4, z + 0.02, w / 2 - 0.08, 1.4, z + 0.02, EDGE_GLOW);
  for (const y of [0.85, 1.45]) b.seg(-w / 2, y, z, w / 2, y, z, EDGE_FAINT);
  b.seg(w / 2 - 0.06, 0.5, z + 0.012, w / 2 - 0.06, 0.7, z + 0.012, EDGE_GLOW);
  b.seg(w / 2 - 0.06, 1.6, z + 0.012, w / 2 - 0.06, 1.8, z + 0.012, EDGE_GLOW);
}

function kitchenDisplay(b: Builder, w: number, d: number, h: number): void {
  const frame = Math.min(0.055, w * 0.075);
  const front = d / 2;
  const rear = -d / 2;
  const lower = Math.min(0.62, h * 0.3);
  // carcass and a closed lower cupboard
  b.box(-w / 2, w / 2, 0.02, h, rear, rear + 0.035, C.body, C.bodyTop, EDGE_FURN);
  b.box(-w / 2, -w / 2 + frame, 0.02, h, rear, front, C.body, C.bodyTop, EDGE_FURN);
  b.box(w / 2 - frame, w / 2, 0.02, h, rear, front, C.body, C.bodyTop, EDGE_FURN);
  b.box(-w / 2, w / 2, h - frame, h, rear, front, C.body, C.bodyTop, EDGE_FURN);
  b.box(-w / 2, w / 2, 0.02, lower, rear, front - 0.015, C.body, C.bodyTop, EDGE_FURN);
  b.box(-w / 2 + 0.02, w / 2 - 0.02, 0, 0.08, rear + 0.02, front - 0.04, C.dark);
  // lit display chamber: glass fronts, slim frames and three shelves
  b.box(-w / 2 + frame, w / 2 - frame, lower, h - frame, rear + 0.036, rear + 0.05, C.dark, C.dark);
  for (const y of [lower + (h - lower) * 0.25, lower + (h - lower) * 0.5, lower + (h - lower) * 0.75]) {
    b.box(-w / 2 + frame, w / 2 - frame, y - 0.012, y + 0.012, rear + 0.05, front - 0.025, C.glass, C.glass, EDGE_GLOW);
  }
  b.box(-w / 2 + frame, -frame * 0.35, lower + frame, h - frame * 1.5, front - 0.012, front, C.glass, C.glass, EDGE_FAINT);
  b.box(frame * 0.35, w / 2 - frame, lower + frame, h - frame * 1.5, front - 0.012, front, C.glass, C.glass, EDGE_FAINT);
  b.box(-frame * 0.35, frame * 0.35, lower, h - frame, front - 0.02, front + 0.005, C.metal, C.metal, EDGE_FURN);
  b.box(-w / 2, w / 2, lower - frame * 0.5, lower + frame * 0.5, front - 0.02, front + 0.005, C.body, C.bodyTop, EDGE_FURN);
  b.seg(-frame * 1.4, lower + (h - lower) * 0.46, front + 0.012, -frame * 1.4, lower + (h - lower) * 0.62, front + 0.012, EDGE_GLOW);
  b.seg(frame * 1.4, lower + (h - lower) * 0.46, front + 0.012, frame * 1.4, lower + (h - lower) * 0.62, front + 0.012, EDGE_GLOW);
  b.seg(0, 0.12, front + 0.012, 0, lower - 0.12, front + 0.012, EDGE_FAINT);
}

function island(b: Builder, w: number, d: number, h: number): void {
  const inner = d - 0.3;
  b.box(-w / 2 + 0.05, w / 2 - 0.05, 0.08, h - 0.04, -d / 2 + 0.02, -d / 2 + inner, C.body, C.bodyTop, EDGE_FURN);
  b.box(-w / 2 + 0.07, w / 2 - 0.07, 0, 0.08, -d / 2 + 0.04, -d / 2 + inner - 0.04, C.dark);
  fronts(b, -w / 2 + 0.05, w / 2 - 0.05, 0.08, h - 0.04, -d / 2 + inner, Math.max(2, Math.round(w / 0.6)), h - 0.2);
  // worktop overhangs on the front for bar stools
  b.box(-w / 2, w / 2, h - 0.04, h, -d / 2, d / 2, C.whiteTop, C.whiteTop, EDGE_FURN);
}

function rangeHood(b: Builder, w: number, d: number, h: number): void {
  b.box(-w * 0.16, w * 0.16, h * 0.42, h, -d / 2, -d * 0.18, C.metal, C.metal, EDGE_FURN);
  b.loft([-w / 2, w / 2, -d / 2, d / 2], [-w * 0.18, w * 0.18, -d / 2, -d * 0.1], 0, h * 0.48, C.metal, C.whiteTop, EDGE_FURN);
  b.box(-w * 0.4, w * 0.4, 0, h * 0.06, d * 0.18, d / 2, C.dark, C.dark, EDGE_GLOW);
}

function microwave(b: Builder, w: number, d: number, h: number): void {
  b.box(-w / 2, w / 2, 0, h, -d / 2, d / 2, C.body, C.bodyTop, EDGE_FURN);
  b.box(-w * 0.4, w * 0.18, h * 0.17, h * 0.82, d / 2, d / 2 + 0.006, C.dark, C.glass, EDGE_GLOW);
  b.cyl(w * 0.34, d / 2 + 0.008, Math.min(w, h) * 0.055, h * 0.58, h * 0.69, C.accent, C.accent, 10, EDGE_GLOW);
  b.seg(w * 0.28, h * 0.34, d / 2 + 0.009, w * 0.4, h * 0.34, d / 2 + 0.009, EDGE_FAINT);
}

function waterPurifier(b: Builder, w: number, d: number, h: number): void {
  // Upright RO cabinet with a glass front and a single small faucet on its top, common in domestic
  // Sunhouse-style purifiers. `h` includes the faucet; the cabinet itself is roughly one metre high.
  const cabinetH = h * 0.8;
  const front = d / 2;
  b.box(-w * 0.46, w * 0.46, 0.025, cabinetH, -d / 2, front, C.white, C.whiteTop, EDGE_FURN);
  b.box(-w * 0.48, w * 0.48, 0, 0.035, -d * 0.44, d * 0.44, C.dark, C.dark);
  // Bright glass-front door, split subtly into service and branding panels.
  b.box(-w * 0.42, w * 0.42, 0.055, cabinetH - 0.035, front, front + 0.012, C.white, C.whiteTop, EDGE_FURN);
  b.seg(-w * 0.4, cabinetH * 0.28, front + 0.014, w * 0.4, cabinetH * 0.28, front + 0.014, EDGE_FAINT);
  b.seg(-w * 0.28, cabinetH * 0.58, front + 0.015, w * 0.28, cabinetH * 0.58, front + 0.015, EDGE_GLOW);
  b.seg(-w * 0.2, cabinetH * 0.62, front + 0.015, w * 0.2, cabinetH * 0.62, front + 0.015, EDGE_FAINT);
  // Bright glass top and a subtle circular drip area directly under the outlet.
  b.box(-w / 2, w / 2, cabinetH - 0.025, cabinetH, -d / 2, d / 2, C.white, C.whiteTop, EDGE_FURN);

  // A solid gooseneck faucet. Its curved tube is deliberately larger than a line outline so the
  // water outlet stays obvious in the normal isometric demo view.
  const pipe = Math.min(0.012, w * 0.03);
  const faucetX = w * 0.1;
  const stemZ = -d * 0.16;
  const tipZ = d * 0.08;
  const silver = 0x6684ad;
  b.cyl(faucetX, stemZ, pipe * 1.55, cabinetH, cabinetH + pipe * 1.8, silver, silver, 12, EDGE_FURN);
  b.cyl(faucetX, tipZ, w * 0.16, cabinetH, cabinetH + 0.01, C.whiteTop, C.whiteTop, 18, EDGE_FAINT);
  b.seg(faucetX - w * 0.1, cabinetH + 0.012, tipZ, faucetX + w * 0.1, cabinetH + 0.012, tipZ, EDGE_FAINT);
  b.seg(faucetX, cabinetH + 0.012, tipZ - d * 0.11, faucetX, cabinetH + 0.012, tipZ + d * 0.11, EDGE_FAINT);
  const archY = h * 0.925;
  const archRise = h * 0.055;
  const centreZ = (stemZ + tipZ) / 2;
  const radiusZ = (tipZ - stemZ) / 2;
  const path: [number, number][] = [[cabinetH + pipe, stemZ], [archY, stemZ]];
  for (let i = 1; i <= 8; i++) {
    const a = Math.PI - (Math.PI * i) / 8;
    path.push([archY + Math.sin(a) * archRise, centreZ + Math.cos(a) * radiusZ]);
  }
  // The free outlet ends well above the top instead of closing into a handle-like loop.
  path.push([h * 0.89, tipZ]);
  b.tubeYZ(faucetX, path, pipe, silver, 10);
  b.cyl(faucetX, tipZ, pipe * 1.25, h * 0.89 - pipe, h * 0.905, C.dark, silver, 10, EDGE_FAINT);
  // Short solid lever beside the faucet base.
  b.lyingCyl("x", faucetX + w * 0.055, stemZ, cabinetH + pipe * 1.6, cabinetH + pipe * 2.5, w * 0.15, pipe * 0.9, C.dark, silver, 8);
}

function kitchenCorner(b: Builder, w: number, d: number, h: number): void {
  const arm = Math.max(0.42, Math.min(w, d) * 0.46);
  b.box(-w / 2, w / 2, 0, h - 0.04, -d / 2, -d / 2 + arm, C.body, C.bodyTop, EDGE_FURN);
  b.box(-w / 2, -w / 2 + arm, 0, h - 0.04, -d / 2 + arm, d / 2, C.body, C.bodyTop, EDGE_FURN);
  b.box(-w / 2, w / 2, h - 0.04, h, -d / 2, -d / 2 + arm, C.whiteTop, C.whiteTop, EDGE_GLOW);
  b.box(-w / 2, -w / 2 + arm, h - 0.04, h, -d / 2 + arm, d / 2, C.whiteTop, C.whiteTop, EDGE_GLOW);
  b.seg(-w / 2 + arm, 0.08, -d / 2 + arm, -w / 2 + arm, h - 0.08, -d / 2 + arm, EDGE_FAINT);
  // cabinet fronts follow both arms so the corner reads clearly in 3D
  const zFront = -d / 2 + arm + 0.006;
  const xFront = -w / 2 + arm + 0.006;
  for (let i = 1; i < 3; i++) {
    const x = -w / 2 + arm + ((w - arm) * i) / 3;
    b.seg(x, 0.08, zFront, x, h - 0.08, zFront, EDGE_FAINT);
    const z = -d / 2 + arm + ((d - arm) * i) / 3;
    b.seg(xFront, 0.08, z, xFront, h - 0.08, z, EDGE_FAINT);
  }
  b.seg(-w / 2 + arm + 0.08, h * 0.72, zFront + 0.004, -w / 2 + arm + 0.22, h * 0.72, zFront + 0.004, EDGE_GLOW);
  b.seg(xFront + 0.004, h * 0.72, -d / 2 + arm + 0.08, xFront + 0.004, h * 0.72, -d / 2 + arm + 0.22, EDGE_GLOW);
}

function showerScreen(b: Builder, w: number, d: number, h: number): void {
  const t = Math.min(0.025, Math.max(0.01, d * 0.35));
  b.box(-w / 2, w / 2, 0, 0.025, -t, t, C.metal, C.metal, EDGE_GLOW);
  for (const x of [-w / 2, 0, w / 2]) b.box(x - t, x + t, 0, h, -t, t, C.metal, C.metal, EDGE_GLOW);
  b.seg(-w / 2, h, 0, w / 2, h, 0, EDGE_GLOW);
  b.seg(w * 0.32, h * 0.42, t + 0.003, w * 0.32, h * 0.62, t + 0.003, EDGE_FURN);
}

export const KITCHEN_BATH_FURNITURE_MODELS: Readonly<Record<string, FurnitureModelRenderer>> = {
  bathtub: ({ b, w, d, h }) => (bathtub(b, w, d, h), 0.5),
  fridge: ({ b, w, d, h }) => (fridge(b, w, d, h), 0.5),
  fridge_smart: ({ b, w, d, h }) => (fridgeSmart(b, w, d, h), 0.5),
  island: ({ b, w, d, h }) => (island(b, w, d, h), 0.5),
  kitchen: ({ b, w, d, h }) => (kitchen(b, w, d, h), 0.5),
  kitchen_corner: ({ b, w, d, h }) => (kitchenCorner(b, w, d, h), 0.5),
  kitchen_display: ({ b, w, d, h }) => (kitchenDisplay(b, w, d, h), 0.5),
  kitchen_tall: ({ b, w, d, h }) => (kitchenTall(b, w, d, h), 0.5),
  kitchen_wall: ({ b, w, d, h }) => (kitchenWall(b, w, d, h), false),
  microwave: ({ b, w, d, h, base }) => (microwave(b, w, d, h), base > 0.05 ? false : 0.5),
  range_hood: ({ b, w, d, h }) => (rangeHood(b, w, d, h), false),
  shower: ({ b, w, d, h }) => (shower(b, w, d, h), 0.5),
  shower_screen: ({ b, w, d, h }) => (showerScreen(b, w, d, h), 0.5),
  sink: ({ b, w, d, h }) => (sink(b, w, d, h), 0.5),
  stove: ({ b, w, d, h }) => (stove(b, w, d, h), 0.5),
  washbasin: ({ b, w, d, h }) => (washbasin(b, w, d, h), 0.5),
  water_purifier: ({ b, w, d, h }) => (waterPurifier(b, w, d, h), 0.5),
  wc: ({ b, w, d, h }) => (wc(b, w, d, h), 0.5),
};

