import { UTILITY_FURNITURE_SYMBOLS } from "./utility.ts";
import type { FurnitureSymbol, FurnitureSymbolRenderer } from "./types.ts";

const BUILTIN_FURNITURE_SYMBOLS: Readonly<Record<string, FurnitureSymbolRenderer>> = {
  ...UTILITY_FURNITURE_SYMBOLS,
};

export function registeredFurnitureSymbol(type: string, w: number, d: number): FurnitureSymbol | null {
  const renderer = BUILTIN_FURNITURE_SYMBOLS[type];
  return renderer ? renderer(w, d) : null;
}

export { BUILTIN_FURNITURE_SYMBOLS };
export type { FurnitureSymbol, FurnitureSymbolRenderer } from "./types.ts";
