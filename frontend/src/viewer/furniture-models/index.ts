import { UTILITY_FURNITURE_MODELS, UTILITY_FURNITURE_SCREENS } from "./utility.ts";
import type { FurnitureModelContext, FurnitureModelRenderer, FurnitureScreenRect, FurnitureScreenRenderer } from "./types.ts";

/** Built-in renderers split by functional family. Add new families to this one composition point. */
const BUILTIN_FURNITURE_MODELS: Readonly<Record<string, FurnitureModelRenderer>> = {
  ...UTILITY_FURNITURE_MODELS,
};

const BUILTIN_FURNITURE_SCREENS: Readonly<Record<string, FurnitureScreenRenderer>> = {
  ...UTILITY_FURNITURE_SCREENS,
};

/** Null means the legacy renderer owns this type; otherwise the result says whether to add a shadow. */
export function renderRegisteredFurniture(type: string, context: FurnitureModelContext): boolean | null {
  const renderer = BUILTIN_FURNITURE_MODELS[type];
  return renderer ? renderer(context) : null;
}

/** Undefined means the legacy screen registry owns the type; null means this model has no screen. */
export function registeredFurnitureScreen(type: string, w: number, d: number, h: number): FurnitureScreenRect | null | undefined {
  const renderer = BUILTIN_FURNITURE_SCREENS[type];
  return renderer ? renderer(w, d, h) : undefined;
}

export { BUILTIN_FURNITURE_MODELS, BUILTIN_FURNITURE_SCREENS };
export type { FurnitureModelContext, FurnitureModelRenderer, FurnitureScreenRect, FurnitureScreenRenderer } from "./types.ts";
