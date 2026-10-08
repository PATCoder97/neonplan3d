import type { FurnitureBuilder } from "../furniture-builder.ts";

export interface FurnitureModelContext {
  b: FurnitureBuilder;
  w: number;
  d: number;
  h: number;
  base: number;
  variant: string | null;
}

/** True when the dispatcher should add a floor contact shadow after drawing the model. */
export type FurnitureModelRenderer = (context: FurnitureModelContext) => boolean;

export interface FurnitureScreenRect {
  x0: number;
  x1: number;
  y0: number;
  y1: number;
  z: number;
}

export type FurnitureScreenRenderer = (w: number, d: number, h: number) => FurnitureScreenRect | null;
