import { circle, createSymbolRegistry, line, rect } from "./common.ts";
import type { FurnitureSymbol } from "./types.ts";

const TYPES = ["cinema_screen_wall", "cinema_screen_roller", "cinema_projector_ceiling", "cinema_projector_table", "cinema_speaker_tower", "cinema_speaker_bookshelf", "cinema_speaker_center", "cinema_subwoofer", "cinema_soundbar", "cinema_speaker_wall", "cinema_speaker_ceiling", "cinema_av_receiver", "cinema_tv_oled_65", "cinema_tv_oled_85", "cinema_projector_ust", "cinema_screen_floor_rising"] as const;

function symbol(type: string, w: number, d: number): FurnitureSymbol {
  if (type.startsWith("cinema_screen_") || type.startsWith("cinema_tv_")) return [rect(-w / 2, -d / 2, w / 2, d / 2, "fp3d-sym-fill"), line(-w * 0.44, 0, w * 0.44, 0)];
  if (type.startsWith("cinema_projector_")) return [rect(-w / 2, -d / 2, w / 2, d / 2, "fp3d-sym-fill"), circle(-w * 0.22, d * 0.38, Math.min(w, d) * 0.12), rect(w * 0.2, d * 0.32, w * 0.38, d * 0.46)];
  if (type === "cinema_speaker_ceiling") return [circle(0, 0, Math.min(w, d) * 0.48, "fp3d-sym-fill"), circle(0, 0, Math.min(w, d) * 0.3)];
  if (type === "cinema_soundbar") return [rect(-w / 2, -d / 2, w / 2, d / 2, "fp3d-sym-fill"), ...[-0.32, 0, 0.32].map((x) => circle(w * x, 0, d * 0.22))];
  if (type.includes("speaker") || type === "cinema_subwoofer") return [rect(-w / 2, -d / 2, w / 2, d / 2, "fp3d-sym-fill"), circle(0, d * 0.28, Math.min(w, d) * 0.25)];
  if (type === "cinema_av_receiver") return [rect(-w / 2, -d / 2, w / 2, d / 2, "fp3d-sym-fill"), circle(-w * 0.37, d * 0.38, d * 0.08), circle(w * 0.37, d * 0.38, d * 0.08), rect(-w * 0.18, d * 0.34, w * 0.18, d * 0.46)];
  return [rect(-w / 2, -d / 2, w / 2, d / 2, "fp3d-sym-fill")];
}

export const CINEMA_FURNITURE_SYMBOLS = createSymbolRegistry(TYPES, symbol);
