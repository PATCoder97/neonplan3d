// Fixed-size bed and wardrobe symbols kept with the bedroom family.

import { createSymbolRegistry, line, rect, type SymbolPart as Part } from "./common.ts";
import type { FurnitureSymbol } from "./types.ts";

const TYPES = ["bed_90", "bed_140", "bed_160", "bed_180", "bed_200", "bed_upholstered_180", "bed_boxspring_180", "bed_futon_160", "wardrobe_2door", "wardrobe_3door", "wardrobe_4door", "wardrobe_6door", "wardrobe_mirror", "wardrobe_corner", "nightstand_drawer", "nightstand_slim", "nightstand_floating", "dresser_80_3", "dresser_140_6", "chest_tall_5"] as const;

function renderSymbol(type: string, w: number, d: number): FurnitureSymbol {
  if (type === "wardrobe_corner") return [rect(-w / 2, -d / 2, -w * 0.08, d / 2, "fp3d-sym-fill"), rect(-w * 0.08, -d / 2, w / 2, -d * 0.08, "fp3d-sym-fill")];
  if (type.startsWith("wardrobe_")) {
    const doors = type === "wardrobe_2door" ? 2 : type === "wardrobe_4door" ? 4 : type === "wardrobe_6door" ? 6 : 3;
    const out: Part[] = [rect(-w / 2, -d / 2, w / 2, d / 2)];
    for (let i = 1; i < doors; i++) out.push(line(-w / 2 + (w * i) / doors, -d / 2, -w / 2 + (w * i) / doors, d / 2));
    if (type === "wardrobe_mirror") out.push(rect(-w * 0.13, -d * 0.42, w * 0.13, d * 0.42, "fp3d-sym-fill"));
    return out;
  }
  if (type.startsWith("nightstand_") || type.startsWith("dresser_") || type === "chest_tall_5") {
    const rows = type === "dresser_80_3" || type === "dresser_140_6" ? 3 : type === "chest_tall_5" ? 5 : type === "nightstand_slim" ? 2 : 1;
    const out: Part[] = [rect(-w / 2, -d / 2, w / 2, d / 2)];
    for (let i = 1; i < rows; i++) out.push(line(-w / 2, -d / 2 + (d * i) / rows, w / 2, -d / 2 + (d * i) / rows));
    if (type === "dresser_140_6") out.push(line(0, -d / 2, 0, d / 2));
    return out;
  }
  const pillows = w < 1.2 ? 1 : 2;
  const out: Part[] = [rect(-w / 2, -d / 2, w / 2, d / 2), rect(-w / 2, -d / 2, w / 2, -d / 2 + Math.min(0.1, d * 0.06), "fp3d-sym-fill"), line(-w / 2, -d * 0.12, w / 2, -d * 0.12)];
  for (let i = 0; i < pillows; i++) out.push(rect(-w / 2 + 0.08 + (w * i) / pillows, -d * 0.43, -w / 2 - 0.08 + (w * (i + 1)) / pillows, -d * 0.18, "fp3d-sym-fill"));
  if (type === "bed_upholstered_180") out.push(line(-w * 0.25, -d / 2, -w * 0.25, -d * 0.12), line(w * 0.25, -d / 2, w * 0.25, -d * 0.12));
  return out;
}

export const BEDROOM_FURNITURE_SYMBOLS = createSymbolRegistry(TYPES, renderSymbol);
