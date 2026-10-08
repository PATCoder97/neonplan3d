// Garden and patio furniture. Keep planting, leisure and outdoor structures in this family so
// the legacy mixed architecture-outdoor renderer does not grow with every catalog batch.

import { C, EDGE_FAINT, EDGE_FURN, EDGE_GLOW, type FurnitureBuilder as Builder } from "../furniture-builder.ts";
import type { FurnitureModelRenderer } from "./types.ts";

function gasGrill(b: Builder, w: number, d: number, h: number): void {
  b.box(-w * 0.38, w * 0.38, h * 0.42, h * 0.72, -d * 0.4, d * 0.36, C.dark, C.metal, EDGE_FURN);
  b.loft([-w * 0.38, w * 0.38, -d * 0.4, d * 0.36], [-w * 0.34, w * 0.34, -d * 0.34, d * 0.3], h * 0.72, h * 0.9, C.metal, C.bodyTop, EDGE_FURN);
  for (const x of [-w * 0.3, w * 0.3]) b.box(x - 0.025, x + 0.025, 0.08, h * 0.42, -d * 0.28, d * 0.24, C.metal, C.metal, EDGE_FAINT);
  for (const x of [-w * 0.48, w * 0.38]) b.box(x, x + w * 0.1, h * 0.62, h * 0.68, -d * 0.34, d * 0.28, C.metal, C.metal, EDGE_FAINT);
  for (const x of [-w * 0.22, 0, w * 0.22]) b.cyl(x, d * 0.375, 0.035, h * 0.55, h * 0.63, C.dark, C.accent, 10, EDGE_GLOW);
}

function loungeSet(b: Builder, w: number, d: number, h: number): void {
  const seat = (cx: number, cz: number, sw: number, sd: number, angle = 0) => {
    const r = b.rotated(cx, cz, angle);
    r.box(cx - sw / 2, cx + sw / 2, 0.08, h * 0.32, cz - sd / 2, cz + sd / 2, C.wood, C.woodTop, EDGE_FAINT);
    r.pad(cx - sw * 0.46, cx + sw * 0.46, h * 0.32, h * 0.47, cz - sd * 0.42, cz + sd * 0.32, C.fabric, C.cushion, 0.035, EDGE_FURN);
    r.box(cx - sw / 2, cx + sw / 2, h * 0.4, h, cz - sd / 2, cz - sd * 0.42, C.wood, C.woodTop, EDGE_FURN);
  };
  seat(0, -d * 0.3, w * 0.58, d * 0.3);
  seat(-w * 0.34, d * 0.18, w * 0.28, d * 0.28, 90);
  seat(w * 0.34, d * 0.18, w * 0.28, d * 0.28, -90);
  b.box(-w * 0.2, w * 0.2, h * 0.24, h * 0.32, d * 0.05, d * 0.35, C.wood, C.woodTop, EDGE_FURN);
}

function sunLounger(b: Builder, w: number, d: number, h: number): void {
  b.box(-w * 0.42, w * 0.42, 0.08, h * 0.28, -d * 0.46, d * 0.18, C.wood, C.woodTop, EDGE_FAINT);
  b.rotated(0, d * 0.18, -20).pad(-w * 0.4, w * 0.4, h * 0.24, h * 0.37, d * 0.08, d * 0.48, C.fabric, C.cushion, 0.025, EDGE_FURN);
  for (const x of [-w * 0.34, w * 0.34]) for (const z of [-d * 0.36, d * 0.34]) b.box(x - 0.025, x + 0.025, 0, h * 0.25, z - 0.025, z + 0.025, C.metal, C.metal);
}

function parasol(b: Builder, w: number, d: number, h: number): void {
  const r = Math.min(w, d) / 2;
  b.cyl(0, 0, Math.min(w, d) * 0.04, 0.08, h * 0.88, C.metal, C.metal, 12, EDGE_FAINT);
  b.cyl(0, 0, r * 0.22, 0, 0.1, C.body, C.bodyTop, 16, EDGE_FURN);
  b.loft([-r * 0.08, r * 0.08, -r * 0.08, r * 0.08], [-r, r, -r, r], h * 0.88, h, C.fabric, C.fabricTop, EDGE_FURN);
  for (let i = 0; i < 8; i++) {
    const a = (i * Math.PI) / 4;
    b.seg(0, h * 0.89, 0, Math.cos(a) * r, h, Math.sin(a) * r, EDGE_FAINT);
  }
}

function pergola(b: Builder, w: number, d: number, h: number): void {
  const p = Math.min(w, d) * 0.035;
  for (const x of [-w / 2 + p, w / 2 - p]) for (const z of [-d / 2 + p, d / 2 - p]) b.box(x - p, x + p, 0, h, z - p, z + p, C.wood, C.woodTop, EDGE_FURN);
  for (let i = 0; i < 7; i++) {
    const x = -w / 2 + (w * i) / 6;
    b.box(x - p * 0.45, x + p * 0.45, h * 0.93, h, -d / 2, d / 2, C.wood, C.woodTop, EDGE_FAINT);
  }
  for (const z of [-d / 2 + p, d / 2 - p]) b.box(-w / 2, w / 2, h * 0.86, h * 0.94, z - p, z + p, C.wood, C.woodTop, EDGE_FURN);
}

function raisedBed(b: Builder, w: number, d: number, h: number): void {
  const rim = Math.min(0.1, w * 0.08, d * 0.08);
  b.box(-w / 2, w / 2, 0, h, -d / 2, -d / 2 + rim, C.wood, C.woodTop, EDGE_FURN);
  b.box(-w / 2, w / 2, 0, h, d / 2 - rim, d / 2, C.wood, C.woodTop, EDGE_FURN);
  b.box(-w / 2, -w / 2 + rim, 0, h, -d / 2 + rim, d / 2 - rim, C.wood, C.woodTop, EDGE_FURN);
  b.box(w / 2 - rim, w / 2, 0, h, -d / 2 + rim, d / 2 - rim, C.wood, C.woodTop, EDGE_FURN);
  b.box(-w / 2 + rim, w / 2 - rim, h * 0.72, h * 0.8, -d / 2 + rim, d / 2 - rim, C.plant, C.plantTop);
  for (const x of [-w * 0.28, 0, w * 0.28]) b.cyl(x, 0, Math.min(w, d) * 0.07, h * 0.8, h, C.plant, C.plantTop, 7, EDGE_FAINT);
}

function greenhouse(b: Builder, w: number, d: number, h: number): void {
  const p = Math.min(w, d) * 0.025;
  for (const x of [-w / 2, w / 2]) for (const z of [-d / 2, d / 2]) b.box(x - p, x + p, 0, h * 0.68, z - p, z + p, C.metal, C.metal, EDGE_FURN);
  for (const x of [-w / 2, w / 2]) b.seg(x, h * 0.68, -d / 2, 0, h, -d / 2, EDGE_FURN), b.seg(x, h * 0.68, d / 2, 0, h, d / 2, EDGE_FURN);
  b.seg(0, h, -d / 2, 0, h, d / 2, EDGE_GLOW);
  for (const z of [-d / 2, d / 2]) b.seg(-w / 2, h * 0.68, z, w / 2, h * 0.68, z, EDGE_FAINT);
  b.box(-w * 0.15, w * 0.15, 0, h * 0.62, d / 2 - p, d / 2 + p, C.glass, C.glass, EDGE_GLOW);
}

function outdoorHotTub(b: Builder, w: number, d: number, h: number): void {
  const r = Math.min(w, d) / 2;
  b.cyl(0, 0, r, 0, h, C.body, C.bodyTop, 20, EDGE_FURN);
  b.cyl(0, 0, r * 0.8, h * 0.78, h * 0.9, C.glass, C.accent, 20, EDGE_GLOW);
  for (let i = 0; i < 6; i++) {
    const a = (i * Math.PI) / 3;
    b.cyl(Math.cos(a) * r * 0.62, Math.sin(a) * r * 0.62, r * 0.04, h * 0.89, h * 0.93, C.white, C.accent, 8);
  }
}

function fireBowl(b: Builder, w: number, d: number, h: number): void {
  const r = Math.min(w, d) / 2;
  b.cyl(0, 0, r, h * 0.22, h * 0.38, C.dark, C.metal, 18, EDGE_FURN);
  b.cyl(0, 0, r * 0.78, h * 0.35, h * 0.4, C.accent, C.accent, 16, EDGE_GLOW);
  for (const x of [-r * 0.58, r * 0.58]) b.seg(x, h * 0.25, 0, x * 0.82, 0, 0, EDGE_FAINT);
}

function gardenTorch(b: Builder, w: number, d: number, h: number): void {
  const r = Math.min(w, d) / 2;
  b.cyl(0, 0, r * 0.16, 0, h * 0.75, C.wood, C.woodTop, 10, EDGE_FAINT);
  b.loft([-r * 0.35, r * 0.35, -r * 0.35, r * 0.35], [-r * 0.55, r * 0.55, -r * 0.55, r * 0.55], h * 0.68, h * 0.9, C.metal, C.metal, EDGE_FURN);
  b.loft([-r * 0.3, r * 0.3, -r * 0.3, r * 0.3], [-r * 0.08, r * 0.08, -r * 0.08, r * 0.08], h * 0.9, h, C.accent, C.accent, EDGE_GLOW);
}

export const GARDEN_FURNITURE_MODELS: Readonly<Record<string, FurnitureModelRenderer>> = {
  gas_grill: ({ b, w, d, h }) => (gasGrill(b, w, d, h), 0.5),
  lounge_set_outdoor: ({ b, w, d, h }) => (loungeSet(b, w, d, h), 0.5),
  sun_lounger: ({ b, w, d, h }) => (sunLounger(b, w, d, h), 0.5),
  parasol: ({ b, w, d, h }) => (parasol(b, w, d, h), 0.5),
  pergola: ({ b, w, d, h }) => (pergola(b, w, d, h), 0.5),
  raised_bed: ({ b, w, d, h }) => (raisedBed(b, w, d, h), 0.5),
  greenhouse: ({ b, w, d, h }) => (greenhouse(b, w, d, h), 0.5),
  hot_tub_outdoor: ({ b, w, d, h }) => (outdoorHotTub(b, w, d, h), 0.5),
  fire_bowl: ({ b, w, d, h }) => (fireBowl(b, w, d, h), 0.5),
  garden_torch: ({ b, w, d, h }) => (gardenTorch(b, w, d, h), 0.5),
};
