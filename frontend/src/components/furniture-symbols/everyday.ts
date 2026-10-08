// Built-in top-view symbols for the everyday family.

import { createSymbolRegistry, circle, ellipse, fronts, line, rect, seating, type SymbolPart as Part } from "./common.ts";
import type { FurnitureSymbol } from "./types.ts";

const TYPES = ["altar","altar_wall","shoe_cabinet","shoe_bench","room_divider","vanity","crib","bed_single","bed_double","sofa_2","sofa_3","sofa_4","sofa_l","sofa_corner_left","sofa_corner_right","sofa_bed","sofa","armchair","ottoman","bench","corner_bench","chair","office_chair","bar_stool","table_round","stool","table","coffee_table","desk","bed","bunk_bed","nightstand","wardrobe","dresser","sideboard","display_cabinet","tall_cabinet","kitchen","kitchen_wall","kitchen_tall","shelf","coat_rack","tv_console","tv_board","tv_wall","plant","rug"] as const;

function renderSymbol(type: string, w: number, d: number): FurnitureSymbol {
  switch (type) {
    case "altar":
      return [
        rect(-w / 2, -d / 2, w / 2, d / 2),
        rect(-w * 0.42, d * 0.18, w * 0.42, d / 2, "fp3d-sym-fill"),
        circle(0, d * 0.05, Math.min(w, d) * 0.08),
      ];
    case "altar_wall":
      return [rect(-w / 2, -d / 2, w / 2, d / 2), line(-w * 0.35, d * 0.15, w * 0.35, d * 0.15, "fp3d-sym-strong")];
    case "shoe_cabinet":
      return [...fronts(w, d, Math.max(2, Math.round(w / 0.45))), line(-w / 2, d * 0.12, w / 2, d * 0.12, "fp3d-sym-strong")];
    case "shoe_bench":
      return [rect(-w / 2, -d / 2, w / 2, d / 2), line(-w / 2, 0, w / 2, 0), ...fronts(w, d, Math.max(2, Math.round(w / 0.35)))];
    case "room_divider": {
      const out: Part[] = [rect(-w / 2, -d / 2, w / 2, d / 2)];
      for (let i = 1; i < 7; i++) out.push(line(-w / 2 + (w * i) / 7, -d / 2, -w / 2 + (w * i) / 7, d / 2));
      return out;
    }
    case "vanity":
      return [rect(-w / 2, -d / 2, w / 2, d / 2), ellipse(0, -d * 0.28, w * 0.28, d * 0.12, "fp3d-sym-strong")];
    case "crib": {
      const out: Part[] = [rect(-w / 2, -d / 2, w / 2, d / 2)];
      for (let i = 1; i < 6; i++) out.push(line(-w / 2 + (w * i) / 6, -d / 2, -w / 2 + (w * i) / 6, -d / 2 + d * 0.12));
      return out;
    }
    case "bed_single":
    case "bed_double": {
      const pillows = type === "bed_double" ? 2 : 1;
      const out: Part[] = [rect(-w / 2, -d / 2, w / 2, -d / 2 + 0.07, "fp3d-sym-fill"), line(-w / 2, -d * 0.12, w / 2, -d * 0.12)];
      for (let i = 0; i < pillows; i++) out.push(rect(-w / 2 + (w * i) / pillows + 0.08, -d / 2 + 0.1, -w / 2 + (w * (i + 1)) / pillows - 0.08, -d * 0.15));
      return out;
    }
    case "sofa_l":
    case "sofa_corner_left":
      return [...seating(w, Math.min(d, 0.9), Math.max(2, Math.round(w / 0.65)), true), rect(-w / 2, -d / 2, -w / 2 + Math.min(0.9, w * 0.36), d / 2, "fp3d-sym-fill")];
    case "sofa_corner_right":
      return [...seating(w, Math.min(d, 0.9), Math.max(2, Math.round(w / 0.65)), true), rect(w / 2 - Math.min(0.9, w * 0.36), -d / 2, w / 2, d / 2, "fp3d-sym-fill")];
    case "sofa_bed":
      return [rect(-w / 2, -d / 2, w / 2, d / 2), rect(-w / 2, -d / 2, w / 2, -d / 2 + Math.min(0.24, d * 0.22), "fp3d-sym-fill"), line(0, -d / 2 + Math.min(0.24, d * 0.22), 0, d / 2)];
    case "sofa":
    case "sofa_2":
    case "sofa_3":
    case "sofa_4": {
      const seats = type === "sofa_2" ? 2 : type === "sofa_3" ? 3 : type === "sofa_4" ? 4 : Math.max(1, Math.round((w - 0.4) / 0.62));
      return seating(w, d, seats, true);
    }
    case "armchair":
      return seating(w, d, 1, true);
    case "ottoman":
      return [rect(-w / 2, -d / 2, w / 2, d / 2, "fp3d-sym-fill"), line(0, -d / 2, 0, d / 2), line(-w / 2, 0, w / 2, 0)];
    case "bench":
      return [rect(-w / 2, -d / 2, w / 2, -d / 2 + 0.08, "fp3d-sym-fill")];
    case "corner_bench": {
      const depth = Math.min(0.5, d * 0.4);
      return [
        rect(-w / 2, -d / 2, w / 2, -d / 2 + 0.08, "fp3d-sym-fill"),
        rect(-w / 2, -d / 2, -w / 2 + 0.08, d / 2, "fp3d-sym-fill"),
        line(-w / 2 + depth, -d / 2 + depth, w / 2, -d / 2 + depth),
        line(-w / 2 + depth, -d / 2 + depth, -w / 2 + depth, d / 2),
      ];
    }
    case "chair":
      return [rect(-w / 2, -d / 2, w / 2, -d / 2 + 0.06, "fp3d-sym-fill")];
    case "office_chair":
      return [circle(0, 0.03, Math.min(w, d) * 0.36), rect(-w * 0.35, -d / 2 + 0.02, w * 0.35, -d / 2 + 0.1, "fp3d-sym-fill")];
    case "bar_stool":
    case "table_round":
      return [circle(0, 0, Math.min(w, d) * 0.42)];
    case "stool":
      return [rect(-w / 2 + 0.04, -d / 2 + 0.04, w / 2 - 0.04, d / 2 - 0.04)];
    case "table":
    case "coffee_table":
    case "desk": {
      const out = [rect(-w / 2 + 0.05, -d / 2 + 0.05, w / 2 - 0.05, d / 2 - 0.05)];
      if (type === "desk") out.push(line(-0.3, -d / 2 + 0.1, 0.3, -d / 2 + 0.1, "fp3d-sym-strong"));
      return out;
    }
    case "bed":
    case "bunk_bed": {
      const pillows = w > 1.2 ? 2 : 1;
      const pw = (w - 0.2) / pillows;
      const out: Part[] = [rect(-w / 2, -d / 2, w / 2, -d / 2 + 0.07, "fp3d-sym-fill"), line(-w / 2, -d / 2 + (d - 0.1) * 0.36, w / 2, -d / 2 + (d - 0.1) * 0.36)];
      for (let i = 0; i < pillows; i++) out.push(rect(-w / 2 + 0.13 + pw * i, -d / 2 + 0.12, -w / 2 + 0.07 + pw * (i + 1), -d / 2 + 0.12 + Math.min(0.4, d * 0.18)));
      return out;
    }
    case "nightstand":
    case "wardrobe":
    case "dresser":
    case "sideboard":
    case "display_cabinet":
    case "tall_cabinet":
    case "kitchen":
    case "kitchen_wall":
    case "kitchen_tall":
    case "shelf":
      return fronts(w, d, type === "nightstand" || type === "tall_cabinet" || type === "kitchen_tall" ? 1 : Math.max(2, Math.round(w / 0.5)));
    case "coat_rack":
      return [rect(-w / 2, -d / 2, w / 2, -d / 2 + 0.03, "fp3d-sym-fill"), ...fronts(w, d, Math.max(2, Math.round(w / 0.5)))];
    case "tv_console":
      return [...fronts(w, d, 3), rect(-w * 0.19, d * 0.08, w * 0.19, d / 2, "fp3d-sym-fill")];
    case "tv_board":
      return [line(-Math.min(w * 0.4, 0.72), -d / 2 + 0.14, Math.min(w * 0.4, 0.72), -d / 2 + 0.14, "fp3d-sym-strong"), ...fronts(w, d, Math.max(2, Math.round(w / 0.6)))];
    case "tv_wall":
      return [line(-w / 2, 0, w / 2, 0, "fp3d-sym-strong")];
    case "plant":
      return [circle(0, 0, Math.min(w, d) * 0.46), circle(0, 0, Math.min(w, d) * 0.25)];
    case "rug":
      return [rect(-w / 2 + 0.1, -d / 2 + 0.1, w / 2 - 0.1, d / 2 - 0.1)];

    default:
      return [];
  }
}

export const EVERYDAY_FURNITURE_SYMBOLS = createSymbolRegistry(TYPES, renderSymbol);
