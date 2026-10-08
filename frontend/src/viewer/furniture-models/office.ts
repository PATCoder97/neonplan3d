import { C, EDGE_FAINT, EDGE_FURN, EDGE_GLOW, type FurnitureBuilder as Builder } from "../furniture-builder.ts";
import type { FurnitureModelRenderer } from "./types.ts";

function desk(b: Builder, w: number, d: number, h: number, shape: "l" | "corner" | "stand"): void {
  const top = shape === "stand" ? h * 0.72 : h * 0.92;
  b.box(-w / 2, w / 2, top, h, -d / 2, d * 0.05, C.wood, C.woodTop, EDGE_FURN);
  if (shape !== "stand") {
    const inner = shape === "corner" ? w * 0.15 : -w * 0.08;
    b.box(-w / 2, inner, top, h, d * 0.05, d / 2, C.wood, C.woodTop, EDGE_FAINT);
  }
  for (const x of [-w * 0.44, w * 0.44]) b.box(x - 0.035, x + 0.035, 0, top, -d * 0.38, -d * 0.3, C.metal, C.metal, EDGE_FAINT);
  if (shape === "stand") {
    for (const x of [-w * 0.4, w * 0.4]) b.box(x - 0.06, x + 0.06, 0, top, -d * 0.15, d * 0.15, C.metal, C.metal, EDGE_GLOW);
    b.box(-w * 0.45, w * 0.45, 0, 0.05, -d * 0.32, d * 0.32, C.metal, C.metal, EDGE_FAINT);
  }
}

function chair(b: Builder, w: number, d: number, h: number, ergonomic: boolean): void {
  b.pad(-w * 0.38, w * 0.38, h * 0.38, h * 0.48, -d * 0.32, d * 0.2, C.fabric, C.cushion, 0.03, EDGE_FURN);
  b.pad(-w * 0.4, w * 0.4, h * 0.48, h * (ergonomic ? 0.96 : 0.85), -d * 0.34, -d * 0.22, C.fabric, C.cushion, 0.04, EDGE_GLOW);
  if (ergonomic) {
    b.cyl(0, 0, 0.045, 0.08, h * 0.42, C.metal, C.metal, 10, EDGE_FAINT);
    for (let i = 0; i < 5; i++) {
      const a = (i * Math.PI * 2) / 5;
      b.seg(0, 0.08, 0, Math.cos(a) * w * 0.42, 0.03, Math.sin(a) * d * 0.42, EDGE_FAINT);
    }
  } else {
    for (const x of [-w * 0.34, w * 0.34]) for (const z of [-d * 0.25, d * 0.16]) b.box(x - 0.025, x + 0.025, 0, h * 0.4, z - 0.025, z + 0.025, C.metal, C.metal, EDGE_FAINT);
  }
}

function cabinet(b: Builder, w: number, d: number, h: number, drawers: number): void {
  b.box(-w / 2, w / 2, 0, h, -d / 2, d / 2, C.body, C.metal, EDGE_FURN);
  for (let i = 1; i < drawers; i++) b.seg(-w * 0.44, (h * i) / drawers, d / 2 + 0.003, w * 0.44, (h * i) / drawers, d / 2 + 0.003, EDGE_FAINT);
}

function bookcase(b: Builder, w: number, d: number, h: number): void {
  for (const y of [0, 0.25, 0.5, 0.75, 1]) b.box(-w / 2, w / 2, h * y, h * y + 0.035, -d / 2, d / 2, C.wood, C.woodTop, EDGE_FURN);
  for (const x of [-w / 2, w / 2]) b.box(x - 0.025, x + 0.025, 0, h, -d / 2, d / 2, C.wood, C.woodTop, EDGE_FAINT);
}

function monitors(b: Builder, w: number, d: number, h: number, count: number): void {
  const each = w / count;
  for (let i = 0; i < count; i++) {
    const x = -w / 2 + each * (i + 0.5);
    b.box(x - each * 0.44, x + each * 0.44, h * 0.25, h, -d * 0.08, d * 0.08, C.dark, C.dark, EDGE_GLOW);
  }
  b.box(-0.025, 0.025, 0, h * 0.28, -0.025, 0.025, C.metal, C.metal, EDGE_FAINT);
  b.box(-w * 0.18, w * 0.18, 0, 0.025, -d * 0.4, d * 0.4, C.metal, C.metal, EDGE_FAINT);
}

function pc(b: Builder, w: number, d: number, h: number): void {
  b.box(-w / 2, w / 2, 0, h, -d / 2, d / 2, C.dark, C.metal, EDGE_FURN);
  b.box(-w * 0.36, w * 0.36, h * 0.12, h * 0.86, d / 2, d / 2 + 0.01, C.glass, C.dark, EDGE_GLOW);
  for (let i = 0; i < 3; i++) b.cyl(0, d / 2 + 0.015, w * 0.12, h * (0.2 + i * 0.25), h * (0.32 + i * 0.25), C.accent, C.accent, 10, EDGE_GLOW);
}

export const OFFICE_FURNITURE_MODELS: Readonly<Record<string, FurnitureModelRenderer>> = {
  desk_l: ({ b, w, d, h }) => (desk(b, w, d, h, "l"), 0.5),
  desk_corner: ({ b, w, d, h }) => (desk(b, w, d, h, "corner"), 0.5),
  desk_sit_stand: ({ b, w, d, h }) => (desk(b, w, d, h, "stand"), 0.5),
  chair_ergonomic: ({ b, w, d, h }) => (chair(b, w, d, h, true), 0.5),
  chair_visitor: ({ b, w, d, h }) => (chair(b, w, d, h, false), 0.5),
  filing_cabinet: ({ b, w, d, h }) => (cabinet(b, w, d, h, 4), 0.5),
  drawer_unit_office: ({ b, w, d, h }) => (cabinet(b, w, d, h, 3), 0.5),
  bookcase_office: ({ b, w, d, h }) => (bookcase(b, w, d, h), 0.5),
  monitor_single: ({ b, w, d, h }) => (monitors(b, w, d, h, 1), false),
  monitor_dual: ({ b, w, d, h }) => (monitors(b, w, d, h, 2), false),
  pc_tower: ({ b, w, d, h }) => (pc(b, w, d, h), 0.5),
};
