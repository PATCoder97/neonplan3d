// Loads Neon Honeycomb only when a Honeycomb menu is first opened.
import type * as Honeycomb from "./honeycomb.ts";

export type HoneycombModule = typeof Honeycomb;
declare const __FP3D_HONEYCOMB_HASH__: string;

let loading: Promise<HoneycombModule> | undefined;

export function loadHoneycomb(): Promise<HoneycombModule> {
  const url = new URL(`./neonplan3d-honeycomb.js?v=${__FP3D_HONEYCOMB_HASH__}`, new URL(import.meta.url)).href;
  loading ??= import(/* @vite-ignore */ url) as Promise<HoneycombModule>;
  return loading;
}
