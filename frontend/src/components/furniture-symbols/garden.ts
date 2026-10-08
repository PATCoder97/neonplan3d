// Top-view symbols for garden and patio furniture and structures.

import { circle, createSymbolRegistry, ellipse, line, rect, type SymbolPart } from "./common.ts";
import type { FurnitureSymbol } from "./types.ts";

const TYPES = ["gas_grill", "lounge_set_outdoor", "sun_lounger", "parasol", "pergola", "raised_bed", "greenhouse", "hot_tub_outdoor", "fire_bowl", "garden_torch"] as const;

function symbol(type: string, w: number, d: number): FurnitureSymbol {
  if (type === "gas_grill") return [rect(-w * 0.38, -d * 0.4, w * 0.38, d * 0.36, "fp3d-sym-fill"), line(-w * 0.48, -d * 0.3, w * 0.48, -d * 0.3)];
  if (type === "lounge_set_outdoor") return [rect(-w * 0.3, -d * 0.46, w * 0.3, -d * 0.16, "fp3d-sym-fill"), rect(-w * 0.48, d * 0.04, -w * 0.22, d * 0.38, "fp3d-sym-fill"), rect(w * 0.22, d * 0.04, w * 0.48, d * 0.38, "fp3d-sym-fill"), rect(-w * 0.2, d * 0.05, w * 0.2, d * 0.35)];
  if (type === "sun_lounger") return [rect(-w * 0.42, -d * 0.46, w * 0.42, d * 0.46, "fp3d-sym-fill"), line(-w * 0.42, d * 0.18, w * 0.42, d * 0.18)];
  if (type === "parasol") {
    const out: SymbolPart[] = [circle(0, 0, Math.min(w, d) / 2, "fp3d-sym-fill")];
    for (let i = 0; i < 8; i++) out.push(line(0, 0, Math.cos((i * Math.PI) / 4) * w / 2, Math.sin((i * Math.PI) / 4) * d / 2));
    return out;
  }
  if (type === "pergola") return [rect(-w / 2, -d / 2, w / 2, d / 2, "fp3d-sym-fill"), ...Array.from({ length: 7 }, (_, i) => line(-w / 2 + (w * i) / 6, -d / 2, -w / 2 + (w * i) / 6, d / 2))];
  if (type === "raised_bed") return [rect(-w / 2, -d / 2, w / 2, d / 2), rect(-w * 0.42, -d * 0.36, w * 0.42, d * 0.36, "fp3d-sym-fill")];
  if (type === "greenhouse") return [rect(-w / 2, -d / 2, w / 2, d / 2), line(0, -d / 2, 0, d / 2, "fp3d-sym-strong"), rect(-w * 0.15, d * 0.44, w * 0.15, d / 2)];
  if (type === "hot_tub_outdoor") return [circle(0, 0, Math.min(w, d) / 2), circle(0, 0, Math.min(w, d) * 0.4, "fp3d-sym-fill")];
  if (type === "fire_bowl") return [circle(0, 0, Math.min(w, d) / 2), circle(0, 0, Math.min(w, d) * 0.34, "fp3d-sym-fill")];
  if (type === "garden_torch") return [circle(0, 0, Math.min(w, d) / 2, "fp3d-sym-fill")];
  return [ellipse(0, 0, w / 2, d / 2)];
}

export const GARDEN_FURNITURE_SYMBOLS = createSymbolRegistry(TYPES, symbol);
