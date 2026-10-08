// Plan symbols for interior columns, beams, chimneys, fireplaces and sliding partitions.

import { circle, createSymbolRegistry, line, rect, type SymbolPart } from "./common.ts";
import type { FurnitureSymbol } from "./types.ts";

const TYPES = ["column_round", "column_square", "column_steel", "ceiling_beams", "downstand_beam", "chimney_inside", "fireplace_builtin", "sliding_wall"] as const;

function symbol(type: string, w: number, d: number): FurnitureSymbol {
  if (type === "column_round") return [circle(0, 0, Math.min(w, d) / 2, "fp3d-sym-fill")];
  if (type === "column_square") return [rect(-w / 2, -d / 2, w / 2, d / 2, "fp3d-sym-fill")];
  if (type === "column_steel") return [rect(-w / 2, -d * 0.12, w / 2, d * 0.12, "fp3d-sym-fill"), rect(-w * 0.12, -d / 2, w * 0.12, d / 2, "fp3d-sym-fill")];
  if (type === "ceiling_beams") {
    const out: SymbolPart[] = [];
    for (let i = 0; i < 5; i++) out.push(line(-w / 2, -d / 2 + (d * i) / 4, w / 2, -d / 2 + (d * i) / 4, "fp3d-sym-strong"));
    return out;
  }
  if (type === "sliding_wall") return [rect(-w / 2, -d / 2, w / 2, d / 2), line(-w / 6, -d / 2, -w / 6, d / 2), line(w / 6, -d / 2, w / 6, d / 2)];
  if (type === "fireplace_builtin") return [rect(-w / 2, -d / 2, w / 2, d / 2), rect(-w * 0.35, d * 0.18, w * 0.35, d / 2, "fp3d-sym-fill")];
  return [rect(-w / 2, -d / 2, w / 2, d / 2, "fp3d-sym-fill")];
}

export const ARCHITECTURE_FURNITURE_SYMBOLS = createSymbolRegistry(TYPES, symbol);
