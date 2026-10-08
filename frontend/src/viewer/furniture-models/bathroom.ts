// Bathroom fixtures live in their own family so new sanitary variants do not grow the kitchen
// renderer. Fixed-size products share a few parameterized builders and keep their own stable IDs.

import { C, EDGE_FAINT, EDGE_FURN, EDGE_GLOW, type FurnitureBuilder as Builder } from "../furniture-builder.ts";
import { cabinet } from "./common.ts";
import type { FurnitureModelRenderer, FurnitureScreenRenderer } from "./types.ts";

function vanity(b: Builder, w: number, d: number, h: number, bowls: number): void {
  cabinet(b, w, d - 0.02, h - 0.12, Math.max(1, Math.round(w / 0.48)), h - 0.3);
  b.box(-w / 2, w / 2, h - 0.12, h, -d / 2, d / 2, C.white, C.whiteTop, EDGE_FURN);
  for (let i = 0; i < bowls; i++) {
    const x = -w / 2 + (w * (i + 0.5)) / bowls;
    const bw = Math.min(w / bowls * 0.34, 0.24);
    b.cyl(x, 0.03, bw, h - 0.006, h + 0.004, C.glass, C.glass, 18, EDGE_GLOW);
    b.cyl(x, -d * 0.3, 0.018, h, h + 0.2, C.metal, C.metal, 8);
    b.box(x - 0.015, x + 0.015, h + 0.16, h + 0.2, -d * 0.3, -d * 0.08, C.metal, C.metal);
  }
}

function pedestalBasin(b: Builder, w: number, d: number, h: number): void {
  b.loft([-w * 0.18, w * 0.18, -d * 0.2, d * 0.18], [-w * 0.28, w * 0.28, -d * 0.36, d * 0.36], 0, h * 0.78, C.white, C.whiteTop, EDGE_FURN);
  b.box(-w / 2, w / 2, h * 0.76, h, -d / 2, d / 2, C.white, C.whiteTop, EDGE_FURN);
  b.cyl(0, 0.04, Math.min(w, d) * 0.3, h - 0.006, h + 0.004, C.glass, C.glass, 18, EDGE_GLOW);
  b.cyl(0, -d * 0.3, 0.018, h, h + 0.2, C.metal, C.metal, 8);
}

function rectangularTub(b: Builder, w: number, d: number, h: number, freestanding: boolean): void {
  const rim = freestanding ? 0.09 : 0.07;
  b.box(-w / 2, w / 2, 0, h - 0.02, -d / 2, d / 2, C.white, C.whiteTop, EDGE_FURN);
  b.box(-w / 2, w / 2, h - 0.02, h, -d / 2, -d / 2 + rim, C.whiteTop);
  b.box(-w / 2, w / 2, h - 0.02, h, d / 2 - rim, d / 2, C.whiteTop);
  b.box(-w / 2, -w / 2 + rim, h - 0.02, h, -d / 2 + rim, d / 2 - rim, C.whiteTop);
  b.box(w / 2 - rim, w / 2, h - 0.02, h, -d / 2 + rim, d / 2 - rim, C.whiteTop);
  b.box(-w / 2 + rim, w / 2 - rim, h - 0.03, h - 0.02, -d / 2 + rim, d / 2 - rim, C.glass, C.glass, EDGE_GLOW);
  b.cyl(-w / 2 + rim * 0.7, 0, 0.02, h, h + 0.12, C.metal, C.metal, 8);
}

function cornerTub(b: Builder, w: number, d: number, h: number): void {
  b.box(-w / 2, w / 2, 0, h, -d / 2, d / 2, C.white, C.whiteTop, EDGE_FURN);
  b.cyl(w * 0.08, d * 0.08, Math.min(w, d) * 0.38, h - 0.018, h + 0.003, C.glass, C.glass, 24, EDGE_GLOW);
  b.box(-w * 0.42, w * 0.42, h - 0.02, h + 0.004, -d / 2, -d * 0.34, C.whiteTop, C.whiteTop);
  b.box(-w / 2, -w * 0.34, h - 0.02, h + 0.004, -d * 0.42, d * 0.42, C.whiteTop, C.whiteTop);
}

type ShowerStyle = "corner" | "niche" | "walkin";

function shower(b: Builder, w: number, d: number, h: number, style: ShowerStyle): void {
  b.box(-w / 2, w / 2, 0, 0.045, -d / 2, d / 2, C.whiteTop, C.whiteTop, EDGE_FURN);
  b.cyl(0, 0, 0.04, 0.045, 0.05, C.metal, C.metal, 10);
  const panels: [number, number, number, number][] = style === "corner"
    ? [[-w / 2, d / 2, w / 2, d / 2], [w / 2, -d / 2, w / 2, d / 2]]
    : style === "niche"
      ? [[-w / 2, d / 2, w / 2, d / 2]]
      : [[-w * 0.05, d / 2, w / 2, d / 2], [w * 0.12, -d / 2, w * 0.12, d / 2]];
  for (const [x0, z0, x1, z1] of panels) {
    b.seg(x0, 0.05, z0, x1, 0.05, z1, EDGE_GLOW);
    b.seg(x0, h, z0, x1, h, z1, EDGE_GLOW);
    b.seg(x0, 0.05, z0, x0, h, z0, EDGE_FAINT);
    b.seg(x1, 0.05, z1, x1, h, z1, EDGE_GLOW);
  }
  b.cyl(-w / 2 + 0.07, -d / 2 + 0.07, 0.015, 0.05, h - 0.08, C.metal, C.metal, 7);
  b.cyl(-w / 2 + 0.2, -d / 2 + 0.2, 0.1, h - 0.1, h - 0.07, C.metal, C.metal, 14, EDGE_GLOW);
}

function showerScreen(b: Builder, w: number, d: number, h: number): void {
  const t = Math.min(0.025, Math.max(0.01, d * 0.35));
  b.box(-w / 2, w / 2, 0, 0.025, -t, t, C.metal, C.metal, EDGE_GLOW);
  for (const x of [-w / 2, 0, w / 2]) b.box(x - t, x + t, 0, h, -t, t, C.metal, C.metal, EDGE_GLOW);
  b.seg(-w / 2, h, 0, w / 2, h, 0, EDGE_GLOW);
  b.seg(w * 0.32, h * 0.42, t + 0.003, w * 0.32, h * 0.62, t + 0.003, EDGE_FURN);
}

function toilet(b: Builder, w: number, d: number, h: number): void {
  const tankD = Math.min(0.18, d * 0.3);
  b.box(-w / 2, w / 2, 0.45, h, -d / 2, -d / 2 + tankD, C.white, C.whiteTop, EDGE_FURN);
  b.box(-w * 0.3, w * 0.3, 0, 0.36, -d / 2 + tankD - 0.02, d / 2 - 0.12, C.white, C.whiteTop);
  b.cyl(0, d / 2 - 0.26, Math.min(w / 2, 0.19), 0.36, 0.41, C.white, C.whiteTop, 12, EDGE_FURN);
}

function wallToilet(b: Builder, w: number, d: number, h: number, bidet = false): void {
  const y0 = bidet ? 0 : 0.18;
  b.loft([-w * 0.34, w * 0.34, -d / 2, d * 0.22], [-w / 2, w / 2, -d / 2, d / 2], y0, h * 0.82, C.white, C.whiteTop, EDGE_FURN);
  b.cyl(0, d * 0.08, w * 0.36, h * 0.8, h, C.white, C.whiteTop, 18, EDGE_FURN);
  if (bidet) {
    b.cyl(0, -d * 0.26, 0.016, h, h + 0.17, C.metal, C.metal, 8);
    b.box(-0.012, 0.012, h + 0.13, h + 0.17, -d * 0.26, -d * 0.04, C.metal, C.metal);
  }
}

function bathroomCabinet(b: Builder, w: number, d: number, h: number): void {
  b.box(-w / 2, w / 2, 0.06, h, -d / 2, d / 2, C.body, C.bodyTop, EDGE_FURN);
  const front = d / 2 + 0.004;
  const rows = h > 1.5 ? 4 : 3;
  for (let i = 1; i < rows; i++) b.seg(-w / 2 + 0.02, (h * i) / rows, front, w / 2 - 0.02, (h * i) / rows, front, EDGE_FAINT);
  b.seg(0, 0.08, front, 0, h - 0.04, front, EDGE_FAINT);
  b.seg(-w * 0.08, h * 0.5, front + 0.004, w * 0.08, h * 0.5, front + 0.004, EDGE_GLOW);
}

function litMirror(b: Builder, w: number, d: number, h: number, round: boolean): void {
  const y0 = 1.12;
  if (round) b.lyingCyl("z", 0, 0, y0, y0 + h, d, Math.min(w, h), C.glass, C.glass, 28, EDGE_GLOW);
  else b.box(-w / 2, w / 2, y0, y0 + h, -d / 2, d / 2, C.glass, C.glass, EDGE_GLOW);
}

function wallShelf(b: Builder, w: number, d: number, h: number): void {
  const y0 = 1.15;
  for (const y of [y0, y0 + h * 0.48, y0 + h]) b.box(-w / 2, w / 2, y - 0.018, y + 0.018, -d / 2, d / 2, C.wood, C.woodTop, EDGE_FURN);
  for (const x of [-w / 2, w / 2]) b.box(x - 0.018, x + 0.018, y0, y0 + h, -d / 2, -d / 2 + 0.04, C.metal, C.metal, EDGE_FAINT);
}

function towelRail(b: Builder, w: number, d: number, h: number): void {
  const y0 = 0.85;
  for (const x of [-w * 0.46, w * 0.46]) b.box(x - 0.018, x + 0.018, y0, y0 + h, -d * 0.1, d * 0.1, C.metal, C.metal, EDGE_FURN);
  for (let i = 0; i < 5; i++) {
    const y = y0 + (h * i) / 4;
    b.box(-w * 0.46, w * 0.46, y - 0.012, y + 0.012, -d * 0.1, d * 0.1, C.metal, C.metal, EDGE_GLOW);
  }
  b.pad(-w * 0.32, w * 0.32, y0 + h * 0.23, y0 + h * 0.66, 0, d / 2, C.fabric, C.cushion, 0.018, EDGE_FAINT);
}

const roundMirrorScreen: FurnitureScreenRenderer = (w, d, h) => ({ x0: -w * 0.46, x1: w * 0.46, y0: 1.12 + h * 0.04, y1: 1.12 + h * 0.96, z: d / 2 + 0.004 });
const rectangularMirrorScreen: FurnitureScreenRenderer = (w, d, h) => ({ x0: -w * 0.47, x1: w * 0.47, y0: 1.12 + h * 0.03, y1: 1.12 + h * 0.97, z: d / 2 + 0.004 });

export const BATHROOM_FURNITURE_MODELS: Readonly<Record<string, FurnitureModelRenderer>> = {
  bathtub: ({ b, w, d, h }) => (rectangularTub(b, w, d, h, true), 0.5),
  bathtub_builtin: ({ b, w, d, h }) => (rectangularTub(b, w, d, h, false), 0.5),
  bathtub_corner: ({ b, w, d, h }) => (cornerTub(b, w, d, h), 0.5),
  shower: ({ b, w, d, h }) => (shower(b, w, d, h, "corner"), 0.5),
  shower_corner_90: ({ b, w, d, h }) => (shower(b, w, d, h, "corner"), 0.5),
  shower_niche_120: ({ b, w, d, h }) => (shower(b, w, d, h, "niche"), 0.5),
  shower_walkin_140: ({ b, w, d, h }) => (shower(b, w, d, h, "walkin"), 0.5),
  shower_screen: ({ b, w, d, h }) => (showerScreen(b, w, d, h), 0.5),
  wc: ({ b, w, d, h }) => (toilet(b, w, d, h), 0.5),
  washbasin: ({ b, w, d, h }) => (vanity(b, w, d, h, 1), 0.5),
  vanity_60: ({ b, w, d, h }) => (vanity(b, w, d, h, 1), 0.5),
  vanity_80: ({ b, w, d, h }) => (vanity(b, w, d, h, 1), 0.5),
  vanity_100: ({ b, w, d, h }) => (vanity(b, w, d, h, 1), 0.5),
  double_vanity_120: ({ b, w, d, h }) => (vanity(b, w, d, h, 2), 0.5),
  pedestal_basin: ({ b, w, d, h }) => (pedestalBasin(b, w, d, h), 0.5),
  toilet_close_coupled: ({ b, w, d, h }) => (toilet(b, w, d, h), 0.5),
  toilet_wall_hung: ({ b, w, d, h }) => (wallToilet(b, w, d, h), false),
  bidet: ({ b, w, d, h }) => (wallToilet(b, w, d, h, true), 0.5),
  bathroom_cabinet_tall: ({ b, w, d, h }) => (bathroomCabinet(b, w, d, h), 0.5),
  bathroom_cabinet_mid: ({ b, w, d, h }) => (bathroomCabinet(b, w, d, h), 0.5),
  mirror_round_light: ({ b, w, d, h }) => (litMirror(b, w, d, h, true), false),
  mirror_80_light: ({ b, w, d, h }) => (litMirror(b, w, d, h, false), false),
  bathroom_wall_shelf: ({ b, w, d, h }) => (wallShelf(b, w, d, h), false),
  towel_rail: ({ b, w, d, h }) => (towelRail(b, w, d, h), false),
  bathtub_freestanding: ({ b, w, d, h }) => (rectangularTub(b, w, d, h, true), 0.5),
};

export const BATHROOM_FURNITURE_SCREENS: Readonly<Record<string, FurnitureScreenRenderer>> = {
  mirror_round_light: roundMirrorScreen,
  mirror_80_light: rectangularMirrorScreen,
};
