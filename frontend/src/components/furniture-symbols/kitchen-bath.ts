// Built-in top-view symbols for the kitchen-bath family.

import { createSymbolRegistry, circle, ellipse, line, rect } from "./common.ts";
import type { FurnitureSymbol } from "./types.ts";

const TYPES = ["range_hood","microwave","water_purifier","kitchen_corner","kitchen_display","shower_screen","island","fridge","stove","sink","bathtub","shower","wc","washbasin"] as const;

function renderSymbol(type: string, w: number, d: number): FurnitureSymbol {
  switch (type) {
    case "range_hood":
      return [rect(-w / 2, -d / 2, w / 2, d / 2), line(-w * 0.35, d * 0.28, w * 0.35, d * 0.28, "fp3d-sym-strong")];
    case "microwave":
      return [rect(-w / 2, -d / 2, w / 2, d / 2), rect(-w * 0.38, -d * 0.05, w * 0.2, d / 2, "fp3d-sym-fill"), circle(w * 0.34, d * 0.22, Math.min(w, d) * 0.06)];
    case "water_purifier":
      return [
        rect(-w / 2, -d / 2, w / 2, d / 2),
        circle(0, -d * 0.16, Math.min(w, d) * 0.065),
        line(0, -d * 0.16, 0, d * 0.22, "fp3d-sym-strong"),
        circle(0, d * 0.22, Math.min(w, d) * 0.045, "fp3d-sym-fill"),
      ];
    case "kitchen_corner":
      return [
        rect(-w / 2, -d / 2, w / 2, -d * 0.05),
        rect(-w / 2, -d * 0.05, -w * 0.05, d / 2),
        line(-w * 0.05, -d * 0.05, w / 2, -d * 0.05),
        line(-w * 0.05, -d * 0.05, -w * 0.05, d / 2),
      ];
    case "kitchen_display":
      return [
        rect(-w / 2, -d / 2, w / 2, d / 2),
        line(0, -d / 2, 0, d / 2, "fp3d-sym-strong"),
        line(-w * 0.38, d * 0.2, w * 0.38, d * 0.2),
        line(-w * 0.32, d * 0.34, w * 0.32, d * 0.34, "fp3d-sym-strong"),
      ];
    case "shower_screen":
      return [line(-w / 2, 0, w / 2, 0, "fp3d-sym-strong"), circle(w * 0.34, 0, Math.min(w, d) * 0.25)];
    case "island":
      // cabinets on the back side, overhanging worktop on the front
      return [line(-w / 2, d / 2 - 0.3, w / 2, d / 2 - 0.3)];
    case "fridge":
      return [line(-w / 2 + 0.06, d / 2 - 0.04, w / 2 - 0.06, d / 2 - 0.04, "fp3d-sym-strong")];
    case "stove": {
      const r = Math.min(w, d) * 0.14;
      return [circle(-w * 0.22, -d * 0.2, r), circle(w * 0.22, -d * 0.2, r * 0.8), circle(-w * 0.22, d * 0.2, r * 0.8), circle(w * 0.22, d * 0.2, r)];
    }
    case "sink": {
      const bw = Math.min(0.5, w - 0.2);
      return [rect(-bw / 2, -d / 2 + 0.1, bw / 2, d / 2 - 0.08), circle(0, -d / 2 + 0.06, 0.025, "fp3d-sym-fill")];
    }
    case "bathtub":
      return [rect(-w / 2 + 0.07, -d / 2 + 0.07, w / 2 - 0.07, d / 2 - 0.07), circle(-w / 2 + 0.14, 0, 0.03, "fp3d-sym-fill")];
    case "shower":
      return [line(-w / 2, -d / 2, w / 2, d / 2), line(w / 2, -d / 2, -w / 2, d / 2), circle(0, 0, 0.04)];
    case "wc":
      return [rect(-w / 2, -d / 2, w / 2, -d / 2 + Math.min(0.18, d * 0.3), "fp3d-sym-fill"), ellipse(0, d * 0.1, w * 0.36, d * 0.3)];
    case "washbasin":
      return [ellipse(0, 0.03, w * 0.34, d * 0.3)];

    default:
      return [];
  }
}

export const KITCHEN_BATH_FURNITURE_SYMBOLS = createSymbolRegistry(TYPES, renderSymbol);
