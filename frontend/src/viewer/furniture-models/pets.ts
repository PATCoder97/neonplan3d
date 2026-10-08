import { C, EDGE_FAINT, EDGE_FURN, EDGE_GLOW, type FurnitureBuilder as Builder } from "../furniture-builder.ts";
import type { FurnitureModelRenderer } from "./types.ts";

function catTree(b: Builder, w: number, d: number, h: number): void {
  b.box(-w * 0.46, w * 0.46, 0, h * 0.035, -d * 0.46, d * 0.46, C.body, C.bodyTop, EDGE_FURN);
  b.box(-w * 0.34, w * 0.08, h * 0.05, h * 0.3, -d * 0.32, d * 0.2, C.fabric, C.cushion, EDGE_FAINT);
  for (const [x, z, y0, y1] of [[-0.22, -0.12, 0.28, 0.9], [0.22, 0.12, 0.03, 0.7], [0.02, -0.08, 0.52, 0.96]] as const) b.cyl(x * w, z * d, w * 0.055, h * y0, h * y1, C.wood, C.woodTop, 10, EDGE_FAINT);
  for (const [x, z, y] of [[-0.22, -0.12, 0.5], [0.22, 0.12, 0.7], [0.02, -0.08, 0.96]] as const) b.pad(x * w - w * 0.24, x * w + w * 0.24, h * y, h * y + h * 0.035, z * d - d * 0.32, z * d + d * 0.32, C.fabric, C.cushion, 0.02, EDGE_GLOW);
}

function scratchingPost(b: Builder, w: number, d: number, h: number): void {
  b.box(-w * 0.46, w * 0.46, 0, h * 0.05, -d * 0.46, d * 0.46, C.body, C.bodyTop, EDGE_FURN);
  b.cyl(0, 0, w * 0.1, h * 0.05, h * 0.92, C.wood, C.woodTop, 12, EDGE_FAINT);
  b.pad(-w * 0.38, w * 0.38, h * 0.92, h, -d * 0.38, d * 0.38, C.fabric, C.cushion, 0.025, EDGE_GLOW);
}

function wallCat(b: Builder, w: number, d: number, h: number, kind: "board" | "perch" | "steps"): void {
  if (kind === "board") return b.box(-w / 2, w / 2, 0, h, -d / 2, d / 2, C.wood, C.woodTop, EDGE_FURN);
  if (kind === "perch") return b.pad(-w / 2, w / 2, 0, h, -d / 2, d / 2, C.fabric, C.cushion, 0.025, EDGE_FURN);
  for (let i = 0; i < 4; i++) {
    const x = -w * 0.38 + i * w * 0.25;
    const y = h * i * 0.23;
    b.box(x - w * 0.12, x + w * 0.12, y, y + h * 0.08, -d / 2, d / 2, C.wood, C.woodTop, EDGE_GLOW);
  }
}

function cave(b: Builder, w: number, d: number, h: number): void {
  b.loft([-w / 2, w / 2, -d / 2, d / 2], [-w * 0.34, w * 0.34, -d * 0.34, d * 0.34], 0, h, C.fabric, C.cushion, EDGE_FURN);
  b.box(-w * 0.2, w * 0.2, 0, h * 0.5, d * 0.48, d * 0.52, C.dark, C.dark, EDGE_GLOW);
}

function roundBed(b: Builder, w: number, d: number, h: number): void {
  b.cyl(0, 0, Math.min(w, d) * 0.49, 0, h, C.fabric, C.cushion, 18, EDGE_FURN);
  b.cyl(0, 0, Math.min(w, d) * 0.34, h * 0.5, h, C.body, C.bodyTop, 18, EDGE_FAINT);
}

function litter(b: Builder, w: number, d: number, h: number, automatic: boolean): void {
  b.box(-w / 2, w / 2, 0, h * 0.26, -d / 2, d / 2, C.body, C.bodyTop, EDGE_FURN);
  if (automatic) {
    b.cyl(0, 0, w * 0.46, h * 0.2, h, C.white, C.whiteTop, 14, EDGE_FURN);
    b.box(-w * 0.24, w * 0.24, h * 0.28, h * 0.68, d * 0.43, d * 0.51, C.dark, C.dark, EDGE_GLOW);
    b.box(-w * 0.15, w * 0.15, h * 0.08, h * 0.14, d * 0.5, d * 0.54, C.accent, C.accent, EDGE_GLOW);
  } else {
    b.loft([-w * 0.48, w * 0.48, -d * 0.48, d * 0.48], [-w * 0.38, w * 0.38, -d * 0.38, d * 0.38], h * 0.26, h, C.white, C.whiteTop, EDGE_FAINT);
    b.box(-w * 0.2, w * 0.2, h * 0.26, h * 0.62, d * 0.47, d * 0.52, C.dark, C.dark, EDGE_GLOW);
  }
}

function dogBed(b: Builder, w: number, d: number, h: number, basket: boolean): void {
  b.pad(-w / 2, w / 2, 0, h * 0.55, -d / 2, d / 2, C.fabric, C.cushion, 0.04, EDGE_FURN);
  const rim = basket ? h : h * 0.8;
  for (const x of [-w / 2, w / 2]) b.box(x - w * 0.06, x + w * 0.06, h * 0.25, rim, -d / 2, d / 2, C.body, C.bodyTop, EDGE_FAINT);
  b.box(-w / 2, w / 2, h * 0.25, rim, -d / 2, -d * 0.38, C.body, C.bodyTop, EDGE_FAINT);
}

function dogHouse(b: Builder, w: number, d: number, h: number): void {
  b.box(-w * 0.46, w * 0.46, 0, h * 0.66, -d * 0.46, d * 0.46, C.wood, C.woodTop, EDGE_FURN);
  b.loft([-w * 0.55, w * 0.55, -d * 0.55, d * 0.55], [-w * 0.06, w * 0.06, -d * 0.55, d * 0.55], h * 0.66, h, C.body, C.bodyTop, EDGE_FURN);
  b.box(-w * 0.2, w * 0.2, 0, h * 0.48, d * 0.45, d * 0.49, C.dark, C.dark, EDGE_GLOW);
}

export const PET_FURNITURE_MODELS: Readonly<Record<string, FurnitureModelRenderer>> = {
  cat_tree_large: ({ b, w, d, h }) => (catTree(b, w, d, h), 0.5),
  cat_scratching_post: ({ b, w, d, h }) => (scratchingPost(b, w, d, h), 0.5),
  cat_scratch_board_wall: ({ b, w, d, h }) => (wallCat(b, w, d, h, "board"), false),
  cat_cave: ({ b, w, d, h }) => (cave(b, w, d, h), 0.5),
  cat_bed_round: ({ b, w, d, h }) => (roundBed(b, w, d, h), 0.5),
  cat_wall_perch: ({ b, w, d, h }) => (wallCat(b, w, d, h, "perch"), false),
  cat_climbing_steps_wall: ({ b, w, d, h }) => (wallCat(b, w, d, h, "steps"), false),
  litter_box_hood: ({ b, w, d, h }) => (litter(b, w, d, h, false), 0.5),
  litter_box_self_cleaning: ({ b, w, d, h }) => (litter(b, w, d, h, true), 0.5),
  dog_bed: ({ b, w, d, h }) => (dogBed(b, w, d, h, false), 0.5),
  dog_basket: ({ b, w, d, h }) => (dogBed(b, w, d, h, true), 0.5),
  dog_house: ({ b, w, d, h }) => (dogHouse(b, w, d, h), 0.5),
};
