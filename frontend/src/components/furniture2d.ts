// Top-view symbols of furniture for the 2D editor, in local metres (x across, z depth, front at +z).
// Built-ins live in family registries; this facade only handles lookup and external pack fallbacks.

import { nothing } from "lit";
import { packItem, type PackItem } from "../packs.ts";
import { circle, line, rect, type SymbolPart as Part } from "./furniture-symbols/common.ts";
import { registeredFurnitureSymbol } from "./furniture-symbols/index.ts";

/** Symbol parts for a furniture type of size w × d (metres). */
export function furnitureSymbol(type: string, w: number, d: number): Part[] | typeof nothing {
  const registered = registeredFurnitureSymbol(type, w, d);
  if (registered) return registered;
  const item = packItem(type);
  return item ? packSymbol(item, w, d) : nothing;
}

/** Plan symbol of a pack item: its own symbol, or its parts seen from above (except the full-size base). */
function packSymbol(item: PackItem, w: number, d: number): Part[] {
  if (item.symbol?.length) {
    return item.symbol.map((s) =>
      s.shape === "rect"
        ? rect((s.x - s.w / 2) * w, (s.z - s.d / 2) * d, (s.x + s.w / 2) * w, (s.z + s.d / 2) * d, s.fill ? "fp3d-sym-fill" : "")
        : s.shape === "circle"
          ? circle(s.x * w, s.z * d, s.r * Math.min(w, d))
          : line(s.x1 * w, s.z1 * d, s.x2 * w, s.z2 * d),
    );
  }
  return item.parts
    .filter((p) => p.w < 0.98 || p.d < 0.98)
    .map((p) =>
      p.shape === "cyl" && (p.axis ?? "y") === "y"
        ? circle(p.x * w, p.z * d, Math.min(p.w * w, p.d * d) / 2)
        : rect((p.x - p.w / 2) * w, (p.z - p.d / 2) * d, (p.x + p.w / 2) * w, (p.z + p.d / 2) * d),
    );
}
