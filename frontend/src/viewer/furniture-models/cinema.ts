import { C, EDGE_FAINT, EDGE_FURN, EDGE_GLOW, type FurnitureBuilder as Builder } from "../furniture-builder.ts";
import type { FurnitureModelRenderer, FurnitureScreenRenderer } from "./types.ts";

function screen(b: Builder, w: number, d: number, h: number, kind: "wall" | "roller" | "floor"): void {
  if (kind === "wall") {
    b.box(-w / 2, w / 2, 0, h, -d / 2, d / 2, C.dark, C.dark, EDGE_FURN);
    b.box(-w * 0.47, w * 0.47, h * 0.05, h * 0.95, d * 0.35, d * 0.56, C.glass, C.glass, EDGE_GLOW);
    return;
  }
  const caseY0 = kind === "floor" ? 0 : h * 0.92;
  const caseY1 = kind === "floor" ? h * 0.1 : h;
  b.box(-w / 2, w / 2, caseY0, caseY1, -d / 2, d / 2, C.body, C.bodyTop, EDGE_FURN);
  const y0 = kind === "floor" ? h * 0.1 : 0;
  const y1 = kind === "floor" ? h * 0.94 : h * 0.92;
  b.box(-w * 0.47, w * 0.47, y0, y1, -d * 0.08, d * 0.08, C.glass, C.glass, EDGE_GLOW);
  b.box(-w * 0.49, w * 0.49, y0, y0 + h * 0.025, -d * 0.14, d * 0.14, C.metal, C.metal, EDGE_FAINT);
}

function projector(b: Builder, w: number, d: number, h: number, ceiling: boolean, ust: boolean): void {
  if (ceiling) {
    b.box(-w * 0.06, w * 0.06, h * 0.5, h, -d * 0.06, d * 0.06, C.metal, C.metal, EDGE_FAINT);
    b.box(-w * 0.32, w * 0.32, h * 0.42, h * 0.55, -d * 0.3, d * 0.3, C.metal, C.metal, EDGE_FURN);
  }
  const y0 = 0;
  const y1 = ceiling ? h * 0.43 : h;
  b.pad(-w / 2, w / 2, y0, y1, -d / 2, d / 2, C.body, C.bodyTop, 0.025, EDGE_FURN);
  if (ust) {
    b.box(-w * 0.34, w * 0.34, y1 * 0.78, y1, -d * 0.18, d * 0.18, C.glass, C.dark, EDGE_GLOW);
    b.box(-w * 0.42, w * 0.42, y1 * 0.14, y1 * 0.24, d * 0.45, d * 0.52, C.accent, C.accent, EDGE_GLOW);
  } else {
    const lens = Math.min(w, h) * 0.24;
    b.lyingCyl("z", -w * 0.2, d * 0.5, y1 * 0.5 - lens / 2, y1 * 0.5 + lens / 2, d * 0.05, lens, C.dark, C.glass, 14, EDGE_GLOW);
    b.box(w * 0.24, w * 0.38, y1 * 0.48, y1 * 0.62, d * 0.49, d * 0.54, C.accent, C.accent, EDGE_GLOW);
  }
}

function speaker(b: Builder, w: number, d: number, h: number, kind: "tower" | "bookshelf" | "center" | "sub" | "soundbar" | "wall" | "ceiling"): void {
  if (kind === "ceiling") {
    b.cyl(0, 0, Math.min(w, d) * 0.49, 0, h, C.white, C.glass, 18, EDGE_FURN);
    b.cyl(0, 0, Math.min(w, d) * 0.32, h * 0.65, h, C.dark, C.dark, 18, EDGE_GLOW);
    return;
  }
  b.pad(-w / 2, w / 2, 0, h, -d / 2, d / 2, C.dark, C.body, 0.018, EDGE_FURN);
  const front = d / 2 + 0.006;
  const driver = (x: number, y: number, dia: number) => b.lyingCyl("z", x, front, y - dia / 2, y + dia / 2, d * 0.035, dia, C.dark, C.glass, 14, EDGE_GLOW);
  if (kind === "soundbar") {
    for (const x of [-w * 0.32, 0, w * 0.32]) driver(x, h * 0.5, h * 0.56);
    return;
  }
  const drivers = kind === "tower" ? [0.18, 0.47, 0.75] : kind === "center" ? [0.25, 0.5, 0.75] : kind === "sub" ? [0.5] : [0.32, 0.7];
  if (kind === "center") for (const x of drivers) driver(-w / 2 + w * x, h * 0.5, h * 0.5);
  else for (const y of drivers) driver(0, h * y, w * (kind === "sub" ? 0.68 : 0.56));
  if (kind === "wall") b.box(w * 0.3, w * 0.4, h * 0.86, h * 0.92, front, front + 0.012, C.accent, C.accent, EDGE_GLOW);
}

function receiver(b: Builder, w: number, d: number, h: number): void {
  b.pad(-w / 2, w / 2, 0, h, -d / 2, d / 2, C.dark, C.body, 0.02, EDGE_FURN);
  b.box(-w * 0.18, w * 0.18, h * 0.38, h * 0.67, d * 0.49, d * 0.54, C.glass, C.accent, EDGE_GLOW);
  for (const x of [-w * 0.38, w * 0.38]) b.lyingCyl("z", x, d * 0.5, h * 0.35, h * 0.68, d * 0.04, h * 0.33, C.metal, C.metal, 12, EDGE_FAINT);
}

function tv(b: Builder, w: number, d: number, h: number): void {
  b.box(-w / 2, w / 2, 0, h, -d / 2, d / 2, C.dark, C.dark, EDGE_FURN);
  b.box(-w * 0.485, w * 0.485, h * 0.025, h * 0.975, d * 0.35, d * 0.58, C.glass, C.dark, EDGE_GLOW);
  b.box(-w * 0.04, w * 0.04, h * 0.01, h * 0.07, -d * 0.58, -d * 0.35, C.metal, C.metal, EDGE_FAINT);
}

export const CINEMA_FURNITURE_MODELS: Readonly<Record<string, FurnitureModelRenderer>> = {
  cinema_screen_wall: ({ b, w, d, h }) => (screen(b, w, d, h, "wall"), false),
  cinema_screen_roller: ({ b, w, d, h }) => (screen(b, w, d, h, "roller"), false),
  cinema_projector_ceiling: ({ b, w, d, h }) => (projector(b, w, d, h, true, false), false),
  cinema_projector_table: ({ b, w, d, h }) => (projector(b, w, d, h, false, false), false),
  cinema_speaker_tower: ({ b, w, d, h }) => (speaker(b, w, d, h, "tower"), 0.5),
  cinema_speaker_bookshelf: ({ b, w, d, h }) => (speaker(b, w, d, h, "bookshelf"), false),
  cinema_speaker_center: ({ b, w, d, h }) => (speaker(b, w, d, h, "center"), false),
  cinema_subwoofer: ({ b, w, d, h }) => (speaker(b, w, d, h, "sub"), 0.5),
  cinema_soundbar: ({ b, w, d, h }) => (speaker(b, w, d, h, "soundbar"), false),
  cinema_speaker_wall: ({ b, w, d, h }) => (speaker(b, w, d, h, "wall"), false),
  cinema_speaker_ceiling: ({ b, w, d, h }) => (speaker(b, w, d, h, "ceiling"), false),
  cinema_av_receiver: ({ b, w, d, h }) => (receiver(b, w, d, h), false),
  cinema_tv_oled_65: ({ b, w, d, h }) => (tv(b, w, d, h), false),
  cinema_tv_oled_85: ({ b, w, d, h }) => (tv(b, w, d, h), false),
  cinema_projector_ust: ({ b, w, d, h }) => (projector(b, w, d, h, false, true), false),
  cinema_screen_floor_rising: ({ b, w, d, h }) => (screen(b, w, d, h, "floor"), 0.5),
};

const flatScreen: FurnitureScreenRenderer = (w, d, h) => ({ x0: -w * 0.46, x1: w * 0.46, y0: h * 0.06, y1: h * 0.94, z: d * 0.57 });
export const CINEMA_FURNITURE_SCREENS: Readonly<Record<string, FurnitureScreenRenderer>> = {
  cinema_screen_wall: flatScreen,
  cinema_screen_roller: (w, d, h) => ({ x0: -w * 0.46, x1: w * 0.46, y0: h * 0.02, y1: h * 0.9, z: d * 0.09 }),
  cinema_tv_oled_65: flatScreen,
  cinema_tv_oled_85: flatScreen,
  cinema_screen_floor_rising: (w, d, h) => ({ x0: -w * 0.46, x1: w * 0.46, y0: h * 0.12, y1: h * 0.92, z: d * 0.09 }),
};
