import { ARCHITECTURE_OUTDOOR_FURNITURE_SYMBOLS } from "./architecture-outdoor.ts";
import { BEDROOM_FURNITURE_SYMBOLS } from "./bedroom.ts";
import { BATHROOM_FURNITURE_SYMBOLS } from "./bathroom.ts";
import { CLIMATE_FURNITURE_SYMBOLS } from "./climate.ts";
import { EVERYDAY_FURNITURE_SYMBOLS } from "./everyday.ts";
import { KITCHEN_BATH_FURNITURE_SYMBOLS } from "./kitchen-bath.ts";
import { LIGHTING_FURNITURE_SYMBOLS } from "./lighting.ts";
import { LIVING_FURNITURE_SYMBOLS } from "./living.ts";
import { SMART_HOME_FURNITURE_SYMBOLS } from "./smart-home.ts";
import { UTILITY_FURNITURE_SYMBOLS } from "./utility.ts";
import type { FurnitureSymbol, FurnitureSymbolRenderer } from "./types.ts";

const BUILTIN_FURNITURE_SYMBOLS: Readonly<Record<string, FurnitureSymbolRenderer>> = {
  ...EVERYDAY_FURNITURE_SYMBOLS,
  ...BEDROOM_FURNITURE_SYMBOLS,
  ...LIVING_FURNITURE_SYMBOLS,
  ...KITCHEN_BATH_FURNITURE_SYMBOLS,
  ...BATHROOM_FURNITURE_SYMBOLS,
  ...ARCHITECTURE_OUTDOOR_FURNITURE_SYMBOLS,
  ...CLIMATE_FURNITURE_SYMBOLS,
  ...SMART_HOME_FURNITURE_SYMBOLS,
  ...LIGHTING_FURNITURE_SYMBOLS,
  ...UTILITY_FURNITURE_SYMBOLS,
};

export function registeredFurnitureSymbol(type: string, w: number, d: number): FurnitureSymbol | null {
  const renderer = BUILTIN_FURNITURE_SYMBOLS[type];
  return renderer ? renderer(w, d) : null;
}

export { BUILTIN_FURNITURE_SYMBOLS };
export type { FurnitureSymbol, FurnitureSymbolRenderer } from "./types.ts";
