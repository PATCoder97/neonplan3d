// Fixed-size bed and wardrobe symbols kept with the bedroom family.

import { createSymbolRegistry, line, rect, type SymbolPart as Part } from "./common.ts";
import type { FurnitureSymbol } from "./types.ts";

const TYPES = ["bed_90", "bed_140", "bed_160", "bed_180", "bed_200", "bed_upholstered_180", "bed_boxspring_180", "bed_futon_160", "wardrobe_2door", "wardrobe_3door"] as const;

function renderSymbol(type: string, w: number, d: number): FurnitureSymbol {
  if (type.startsWith("wardrobe_")) {
    const doors = type === "wardrobe_2door" ? 2 : 3;
    const out: Part[] = [rect(-w / 2, -d / 2, w / 2, d / 2)];
    for (let i = 1; i < doors; i++) out.push(line(-w / 2 + (w * i) / doors, -d / 2, -w / 2 + (w * i) / doors, d / 2));
    return out;
  }
  const pillows = w < 1.2 ? 1 : 2;
  const out: Part[] = [rect(-w / 2, -d / 2, w / 2, d / 2), rect(-w / 2, -d / 2, w / 2, -d / 2 + Math.min(0.1, d * 0.06), "fp3d-sym-fill"), line(-w / 2, -d * 0.12, w / 2, -d * 0.12)];
  for (let i = 0; i < pillows; i++) out.push(rect(-w / 2 + 0.08 + (w * i) / pillows, -d * 0.43, -w / 2 - 0.08 + (w * (i + 1)) / pillows, -d * 0.18, "fp3d-sym-fill"));
  if (type === "bed_upholstered_180") out.push(line(-w * 0.25, -d / 2, -w * 0.25, -d * 0.12), line(w * 0.25, -d / 2, w * 0.25, -d * 0.12));
  return out;
}

export const BEDROOM_FURNITURE_SYMBOLS = createSymbolRegistry(TYPES, renderSymbol);
