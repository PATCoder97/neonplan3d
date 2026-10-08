// Parameterized bedroom furniture: fixed mattress widths and wardrobe door counts.

import { C, EDGE_FAINT, EDGE_FURN, EDGE_GLOW, type FurnitureBuilder as Builder } from "../furniture-builder.ts";
import type { FurnitureModelRenderer } from "./types.ts";

type BedStyle = "frame" | "upholstered" | "boxspring" | "futon";

function fixedBed(b: Builder, w: number, d: number, h: number, style: BedStyle): void {
  const head = style === "futon" ? h * 0.72 : h;
  const mattressY = style === "boxspring" ? h * 0.42 : style === "futon" ? h * 0.22 : h * 0.3;
  const mattressH = style === "boxspring" ? h * 0.34 : Math.min(0.24, h * 0.3);
  const frame = style === "upholstered" ? C.fabric : C.wood;
  b.box(-w / 2, w / 2, 0.08, mattressY, -d / 2, d / 2, frame, style === "upholstered" ? C.fabricTop : C.woodTop, EDGE_FURN);
  if (style === "boxspring") b.pad(-w / 2, w / 2, 0.08, mattressY, -d / 2, d / 2, C.fabric, C.fabricTop, 0.04, EDGE_FURN);
  b.pad(-w * 0.48, w * 0.48, mattressY, mattressY + mattressH, -d * 0.47, d * 0.47, C.white, C.whiteTop, 0.035, EDGE_FAINT);
  const headDepth = style === "upholstered" ? 0.12 : 0.075;
  if (style === "upholstered") b.pad(-w / 2, w / 2, 0.08, head, -d / 2, -d / 2 + headDepth, C.fabric, C.cushion, 0.045, EDGE_FURN);
  else b.box(-w / 2, w / 2, 0.08, head, -d / 2, -d / 2 + headDepth, frame, style === "futon" ? C.woodTop : C.wood, EDGE_FURN);
  const pillows = w < 1.2 ? 1 : 2;
  const pw = (w * 0.84) / pillows;
  for (let i = 0; i < pillows; i++) {
    const x0 = -w * 0.42 + pw * i + 0.035;
    b.pad(x0, x0 + pw - 0.07, mattressY + mattressH, mattressY + mattressH + 0.08, -d * 0.4, -d * 0.22, C.cushion, C.whiteTop, 0.025, EDGE_FAINT);
  }
  if (style === "upholstered") {
    for (const x of [-w * 0.24, 0, w * 0.24]) b.seg(x, h * 0.48, -d / 2 - 0.002, x, h * 0.92, -d / 2 - 0.002, EDGE_GLOW);
  }
}

function wardrobe(b: Builder, w: number, d: number, h: number, doors: number): void {
  b.box(-w / 2, w / 2, 0, h, -d / 2, d / 2, C.wood, C.woodTop, EDGE_FURN);
  const front = d / 2 + 0.004;
  for (let i = 1; i < doors; i++) {
    const x = -w / 2 + (w * i) / doors;
    b.seg(x, 0.04, front, x, h - 0.04, front, EDGE_FAINT);
  }
  for (let i = 0; i < doors; i++) {
    const centre = -w / 2 + (w * (i + 0.5)) / doors;
    const side = i < doors / 2 ? 1 : -1;
    b.seg(centre + side * w / doors * 0.3, h * 0.45, front, centre + side * w / doors * 0.3, h * 0.58, front, EDGE_GLOW);
  }
}

export const BEDROOM_FURNITURE_MODELS: Readonly<Record<string, FurnitureModelRenderer>> = {
  bed_90: ({ b, w, d, h }) => (fixedBed(b, w, d, h, "frame"), 0.5),
  bed_140: ({ b, w, d, h }) => (fixedBed(b, w, d, h, "frame"), 0.5),
  bed_160: ({ b, w, d, h }) => (fixedBed(b, w, d, h, "frame"), 0.5),
  bed_180: ({ b, w, d, h }) => (fixedBed(b, w, d, h, "frame"), 0.5),
  bed_200: ({ b, w, d, h }) => (fixedBed(b, w, d, h, "frame"), 0.5),
  bed_upholstered_180: ({ b, w, d, h }) => (fixedBed(b, w, d, h, "upholstered"), 0.5),
  bed_boxspring_180: ({ b, w, d, h }) => (fixedBed(b, w, d, h, "boxspring"), 0.5),
  bed_futon_160: ({ b, w, d, h }) => (fixedBed(b, w, d, h, "futon"), 0.5),
  wardrobe_2door: ({ b, w, d, h }) => (wardrobe(b, w, d, h, 2), 0.5),
  wardrobe_3door: ({ b, w, d, h }) => (wardrobe(b, w, d, h, 3), 0.5),
};
