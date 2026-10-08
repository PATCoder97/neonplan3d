// Top-view symbols for sanitary fixtures and their fixed-size variants.

import { circle, createSymbolRegistry, ellipse, line, rect } from "./common.ts";
import type { FurnitureSymbol } from "./types.ts";

const TYPES = ["bathtub", "bathtub_builtin", "bathtub_corner", "bathtub_freestanding", "shower", "shower_corner_90", "shower_niche_120", "shower_walkin_140", "shower_screen", "wc", "toilet_close_coupled", "toilet_wall_hung", "bidet", "washbasin", "vanity_60", "vanity_80", "vanity_100", "double_vanity_120", "pedestal_basin", "bathroom_cabinet_tall", "bathroom_cabinet_mid", "mirror_round_light", "mirror_80_light", "bathroom_wall_shelf", "towel_rail"] as const;

function symbol(type: string, w: number, d: number): FurnitureSymbol {
  if (type === "shower_screen") return [line(-w / 2, 0, w / 2, 0, "fp3d-sym-strong"), circle(w * 0.34, 0, Math.min(w, d) * 0.25)];
  if (type.startsWith("shower")) {
    const parts = [line(-w / 2, -d / 2, w / 2, d / 2), line(w / 2, -d / 2, -w / 2, d / 2), circle(0, 0, 0.04)];
    if (type === "shower_niche_120") parts.push(line(-w / 2, d / 2, w / 2, d / 2, "fp3d-sym-strong"));
    if (type === "shower_walkin_140") parts.push(line(w * 0.12, -d / 2, w * 0.12, d / 2, "fp3d-sym-strong"));
    return parts;
  }
  if (type === "wc" || type.startsWith("toilet_") || type === "bidet") return [rect(-w / 2, -d / 2, w / 2, -d / 2 + Math.min(0.18, d * 0.3), "fp3d-sym-fill"), ellipse(0, d * 0.1, w * 0.36, d * 0.3)];
  if (type === "pedestal_basin") return [ellipse(0, 0.03, w * 0.42, d * 0.36), circle(0, -d * 0.28, 0.025, "fp3d-sym-fill")];
  if (type === "washbasin" || type.startsWith("vanity_") || type === "double_vanity_120") {
    const bowls = type === "double_vanity_120" ? 2 : 1;
    const out = [rect(-w / 2, -d / 2, w / 2, d / 2)];
    for (let i = 0; i < bowls; i++) out.push(ellipse(-w / 2 + (w * (i + 0.5)) / bowls, 0.03, w / bowls * 0.3, d * 0.3));
    return out;
  }
  if (type === "bathtub_corner") return [rect(-w / 2, -d / 2, w / 2, d / 2), circle(w * 0.08, d * 0.08, Math.min(w, d) * 0.36)];
  if (type.startsWith("bathroom_cabinet")) return [rect(-w / 2, -d / 2, w / 2, d / 2), line(0, -d / 2, 0, d / 2)];
  if (type.startsWith("mirror_")) return [type === "mirror_round_light" ? circle(0, 0, Math.min(w, d) * 0.46, "fp3d-sym-fill") : rect(-w / 2, -d * 0.16, w / 2, d * 0.16, "fp3d-sym-fill")];
  if (type === "bathroom_wall_shelf") return [rect(-w / 2, -d / 2, w / 2, d / 2), line(-w / 2, 0, w / 2, 0)];
  if (type === "towel_rail") return [line(-w / 2, 0, w / 2, 0, "fp3d-sym-strong"), line(-w * 0.35, -d / 2, -w * 0.35, d / 2), line(w * 0.35, -d / 2, w * 0.35, d / 2)];
  return [rect(-w / 2 + 0.07, -d / 2 + 0.07, w / 2 - 0.07, d / 2 - 0.07), circle(-w / 2 + 0.14, 0, 0.03, "fp3d-sym-fill")];
}

export const BATHROOM_FURNITURE_SYMBOLS = createSymbolRegistry(TYPES, symbol);
