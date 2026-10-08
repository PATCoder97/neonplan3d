import { createSymbolRegistry, line, rect } from "./common.ts";
import type { FurnitureSymbol } from "./types.ts";

const TYPES = ["desk_l", "desk_corner", "desk_sit_stand", "chair_ergonomic", "chair_visitor", "filing_cabinet", "drawer_unit_office", "bookcase_office", "monitor_single", "monitor_dual", "pc_tower"] as const;

function symbol(type: string, w: number, d: number): FurnitureSymbol {
  if (type.startsWith("desk_")) {
    if (type === "desk_sit_stand") return [rect(-w / 2, -d / 2, w / 2, d / 2, "fp3d-sym-fill"), line(-w * 0.38, 0, w * 0.38, 0)];
    const inner = type === "desk_corner" ? w * 0.15 : -w * 0.08;
    return [rect(-w / 2, -d / 2, w / 2, d * 0.05, "fp3d-sym-fill"), rect(-w / 2, d * 0.05, inner, d / 2, "fp3d-sym-fill")];
  }
  if (type.startsWith("monitor_")) {
    const count = type === "monitor_dual" ? 2 : 1;
    return Array.from({ length: count }, (_, i) => rect(-w / 2 + (w * i) / count + w * 0.04, -d * 0.18, -w / 2 + (w * (i + 1)) / count - w * 0.04, d * 0.18, "fp3d-sym-fill"));
  }
  return [rect(-w / 2, -d / 2, w / 2, d / 2, "fp3d-sym-fill"), line(-w * 0.4, 0, w * 0.4, 0)];
}

export const OFFICE_FURNITURE_SYMBOLS = createSymbolRegistry(TYPES, symbol);
