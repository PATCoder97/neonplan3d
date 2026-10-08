import { circle, createSymbolRegistry, line, rect } from "./common.ts";
import type { FurnitureSymbol } from "./types.ts";

const TYPES = ["cat_tree_large", "cat_scratching_post", "cat_scratch_board_wall", "cat_cave", "cat_bed_round", "cat_wall_perch", "cat_climbing_steps_wall", "litter_box_hood", "litter_box_self_cleaning", "dog_bed", "dog_basket", "dog_house"] as const;

function symbol(type: string, w: number, d: number): FurnitureSymbol {
  if (type === "cat_bed_round" || type === "cat_scratching_post" || type === "litter_box_self_cleaning") return [circle(0, 0, Math.min(w, d) * 0.48, "fp3d-sym-fill"), circle(0, 0, Math.min(w, d) * 0.3)];
  if (type === "cat_climbing_steps_wall") return Array.from({ length: 4 }, (_, i) => rect(-w * 0.48 + i * w * 0.25, -d / 2, -w * 0.25 + i * w * 0.25, d / 2, "fp3d-sym-fill"));
  if (type === "cat_tree_large") return [rect(-w / 2, -d / 2, w / 2, d / 2), circle(-w * 0.22, -d * 0.12, w * 0.12, "fp3d-sym-fill"), circle(w * 0.22, d * 0.12, w * 0.12, "fp3d-sym-fill")];
  if (type === "dog_house") return [rect(-w * 0.46, -d * 0.46, w * 0.46, d * 0.46, "fp3d-sym-fill"), line(-w * 0.46, 0, 0, -d * 0.46), line(0, -d * 0.46, w * 0.46, 0)];
  return [rect(-w / 2, -d / 2, w / 2, d / 2, "fp3d-sym-fill"), rect(-w * 0.3, -d * 0.3, w * 0.3, d * 0.3)];
}

export const PET_FURNITURE_SYMBOLS = createSymbolRegistry(TYPES, symbol);
