// Top-view symbols of furniture for the 2D editor, in local metres (x across, z depth, front at +z).
// The editor places them with translate/rotate/scale; strokes keep their width on screen.

import { nothing, svg, type SVGTemplateResult } from "lit";
import { packItem, type PackItem } from "../packs.ts";
import { registeredFurnitureSymbol } from "./furniture-symbols/index.ts";

type Part = SVGTemplateResult;

const rect = (x0: number, z0: number, x1: number, z1: number, cls = "") => svg`<rect class=${cls} x=${Math.min(x0, x1)} y=${Math.min(z0, z1)} width=${Math.abs(x1 - x0)} height=${Math.abs(z1 - z0)} />`;
const line = (x0: number, z0: number, x1: number, z1: number, cls = "") => svg`<line class=${cls} x1=${x0} y1=${z0} x2=${x1} y2=${z1} />`;
const circle = (x: number, z: number, r: number, cls = "") => svg`<circle class=${cls} cx=${x} cy=${z} r=${r} />`;
const ellipse = (x: number, z: number, rx: number, rz: number, cls = "") => svg`<ellipse class=${cls} cx=${x} cy=${z} rx=${rx} ry=${rz} />`;

/** Door or drawer divisions along the front edge. */
function fronts(w: number, d: number, n: number): Part[] {
  const out: Part[] = [];
  for (let i = 1; i < n; i++) {
    const x = -w / 2 + (w / n) * i;
    out.push(line(x, d / 2, x, d / 2 - Math.min(0.12, d * 0.3)));
  }
  return out;
}

function seating(w: number, d: number, seats: number, arms: boolean): Part[] {
  const back = Math.min(0.24, d * 0.28);
  const arm = arms ? Math.min(0.2, w * 0.12) : 0;
  const out: Part[] = [rect(-w / 2, -d / 2, w / 2, -d / 2 + back, "fp3d-sym-fill")];
  if (arms) out.push(rect(-w / 2, -d / 2, -w / 2 + arm, d / 2, "fp3d-sym-fill"), rect(w / 2 - arm, -d / 2, w / 2, d / 2, "fp3d-sym-fill"));
  const inner = w - 2 * arm;
  for (let i = 1; i < seats; i++) {
    const x = -w / 2 + arm + (inner / seats) * i;
    out.push(line(x, -d / 2 + back, x, d / 2 - 0.02));
  }
  return out;
}

/** Symbol parts for a furniture type of size w × d (metres). */
export function furnitureSymbol(type: string, w: number, d: number): Part[] | typeof nothing {
  const registered = registeredFurnitureSymbol(type, w, d);
  if (registered) return registered;
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
    case "motorbike":
      return [
        ellipse(0, -d * 0.34, w * 0.24, d * 0.11),
        ellipse(0, d * 0.34, w * 0.24, d * 0.11),
        line(0, -d * 0.28, 0, d * 0.3, "fp3d-sym-strong"),
        ellipse(0, 0, w * 0.3, d * 0.2, "fp3d-sym-fill"),
        line(-w * 0.32, d * 0.23, w * 0.32, d * 0.23),
      ];
    case "fan_ceiling":
    case "fan_ceiling_light": {
      const r = Math.min(w, d);
      const out: Part[] = [
        ...Array.from({ length: 5 }, (_, i) => svg`<rect x=${r * 0.08} y=${-r * 0.055} width=${r * 0.4} height=${r * 0.11} rx=${r * 0.015} transform=${`rotate(${i * 72})`} />`),
        circle(0, 0, r * 0.105, "fp3d-sym-fill"),
      ];
      if (type === "fan_ceiling_light") out.push(circle(0, 0, r * 0.15), circle(0, 0, r * 0.105, "fp3d-sym-fill"));
      return out;
    }
    case "fan_floor":
      return [circle(0, 0, Math.min(w, d) * 0.46), circle(0, 0, Math.min(w, d) * 0.12, "fp3d-sym-fill")];
    case "fan_wall":
      return [rect(-w * 0.16, -d / 2, w * 0.16, -d * 0.2, "fp3d-sym-fill"), line(0, -d * 0.2, 0, d * 0.08, "fp3d-sym-strong"), ellipse(0, d * 0.15, w * 0.46, d * 0.3), circle(0, d * 0.15, Math.min(w, d) * 0.13, "fp3d-sym-fill")];
    case "water_heater":
      return [rect(-w / 2, -d / 2, w / 2, d / 2), circle(w * 0.3, d * 0.18, Math.min(w, d) * 0.06, "fp3d-sym-fill")];
    case "drying_rack": {
      const out: Part[] = [rect(-w / 2, -d / 2, w / 2, d / 2)];
      for (let i = 1; i < 6; i++) out.push(line(-w / 2, -d / 2 + (d * i) / 6, w / 2, -d / 2 + (d * i) / 6));
      return out;
    }
    case "shoe_bench":
      return [rect(-w / 2, -d / 2, w / 2, d / 2), line(-w / 2, 0, w / 2, 0), ...fronts(w, d, Math.max(2, Math.round(w / 0.35)))];
    case "room_divider": {
      const out: Part[] = [rect(-w / 2, -d / 2, w / 2, d / 2)];
      for (let i = 1; i < 7; i++) out.push(line(-w / 2 + (w * i) / 7, -d / 2, -w / 2 + (w * i) / 7, d / 2));
      return out;
    }
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
    case "air_purifier":
      return [rect(-w / 2, -d / 2, w / 2, d / 2), circle(0, d * 0.28, Math.min(w, d) * 0.1, "fp3d-sym-fill")];
    case "smart_speaker":
      return [circle(0, 0, Math.min(w, d) * 0.46, "fp3d-sym-fill"), circle(0, 0, Math.min(w, d) * 0.3)];
    case "security_camera":
      return [rect(-w * 0.28, -d / 2, w * 0.28, -d * 0.36, "fp3d-sym-fill"), rect(-w * 0.38, -d * 0.28, w * 0.38, d * 0.36), circle(0, d * 0.34, Math.min(w, d) * 0.12, "fp3d-sym-strong")];
    case "smart_lock":
      return [rect(-w / 2, -d / 2, w / 2, d / 2, "fp3d-sym-fill"), line(-w * 0.15, d * 0.18, w * 0.48, d * 0.18, "fp3d-sym-strong")];
    case "smart_curtain": {
      const out: Part[] = [line(-w / 2, -d * 0.32, w / 2, -d * 0.32, "fp3d-sym-strong")];
      for (let i = 0; i <= 10; i++) {
        const x = -w / 2 + (w * i) / 10;
        if (Math.abs(x) > w * 0.1) out.push(line(x, -d * 0.18, x, d * (i % 2 ? 0.34 : 0.12)));
      }
      return out;
    }
    case "network_cabinet": {
      const out: Part[] = [rect(-w / 2, -d / 2, w / 2, d / 2, "fp3d-sym-fill")];
      for (let i = 1; i < 6; i++) out.push(line(-w * 0.34, -d / 2 + (d * i) / 6, w * 0.34, -d / 2 + (d * i) / 6));
      return out;
    }
    case "nas_server":
      return [rect(-w / 2, -d / 2, w / 2, d / 2, "fp3d-sym-fill"), ...[-0.27, -0.09, 0.09, 0.27].map((x) => rect(x * w - w * 0.065, -d * 0.38, x * w + w * 0.065, d * 0.35))];
    case "access_point":
      return [circle(0, 0, Math.min(w, d) * 0.47, "fp3d-sym-fill"), circle(0, 0, Math.min(w, d) * 0.3), line(-w * 0.16, d * 0.42, w * 0.16, d * 0.42, "fp3d-sym-strong")];
    case "wall_thermostat":
      return [rect(-w / 2, -d / 2, w / 2, d / 2, "fp3d-sym-fill"), rect(-w * 0.36, d * 0.05, w * 0.36, d / 2, "fp3d-sym-strong")];
    case "smoke_detector": {
      const r = Math.min(w, d) * 0.47;
      return [circle(0, 0, r, "fp3d-sym-fill"), circle(0, 0, r * 0.72), ...Array.from({ length: 6 }, (_, i) => circle(Math.cos((i * Math.PI) / 3) * r * 0.58, Math.sin((i * Math.PI) / 3) * r * 0.58, r * 0.055))];
    }
    case "siren_alarm":
      return [rect(-w / 2, -d / 2, w / 2, d / 2, "fp3d-sym-fill"), rect(-w * 0.3, d * 0.02, w * 0.3, d / 2, "fp3d-sym-strong")];
    case "electrical_panel": {
      const out: Part[] = [rect(-w / 2, -d / 2, w / 2, d / 2, "fp3d-sym-fill")];
      for (let row = 0; row < 2; row++) for (let col = 0; col < 4; col++) out.push(rect(-w * 0.36 + col * w * 0.18, -d * 0.25 + row * d * 0.28, -w * 0.25 + col * w * 0.18, -d * 0.08 + row * d * 0.28));
      return out;
    }
    case "ups_unit":
      return [rect(-w / 2, -d / 2, w / 2, d / 2, "fp3d-sym-fill"), rect(-w * 0.22, d * 0.08, w * 0.22, d * 0.34, "fp3d-sym-strong"), ...[-0.22, 0, 0.22].map((x) => line(x * w, -d * 0.35, x * w, -d * 0.12))];
    case "modem_router":
      return [rect(-w / 2, -d * 0.3, w / 2, d * 0.35, "fp3d-sym-fill"), line(-w * 0.35, -d * 0.3, -w * 0.46, -d / 2, "fp3d-sym-strong"), line(w * 0.35, -d * 0.3, w * 0.46, -d / 2, "fp3d-sym-strong"), ...[-0.22, 0, 0.22].map((x) => circle(x * w, d * 0.18, Math.min(w, d) * 0.035))];
    case "heat_pump_outdoor":
      return [rect(-w / 2, -d / 2, w / 2, d / 2, "fp3d-sym-fill"), ...Array.from({ length: 5 }, (_, i) => line(-w * 0.4, -d * 0.24 + i * d * 0.12, w * 0.18, -d * 0.24 + i * d * 0.12)), rect(w * 0.31, d * 0.08, w * 0.42, d * 0.28, "fp3d-sym-strong")];
    case "hot_water_tank":
      return [circle(0, 0, Math.min(w, d) * 0.48, "fp3d-sym-fill"), circle(0, d * 0.34, Math.min(w, d) * 0.07, "fp3d-sym-strong")];
    case "ventilation_fan": {
      const r = Math.min(w, d) * 0.46;
      return [rect(-w / 2, -d / 2, w / 2, d / 2), circle(0, 0, r, "fp3d-sym-fill"), ...Array.from({ length: 4 }, (_, i) => line(Math.cos((i * Math.PI) / 2) * r * 0.2, Math.sin((i * Math.PI) / 2) * r * 0.2, Math.cos((i * Math.PI) / 2) * r * 0.82, Math.sin((i * Math.PI) / 2) * r * 0.82))];
    }
    case "humidifier":
      return [rect(-w / 2, -d / 2, w / 2, d / 2, "fp3d-sym-fill"), rect(-w * 0.34, -d * 0.3, w * 0.34, d * 0.12), line(-w * 0.35, d * 0.24, w * 0.35, d * 0.24, "fp3d-sym-strong")];
    case "smart_display":
      return [rect(-w / 2, -d * 0.18, w / 2, d * 0.32, "fp3d-sym-fill"), line(-w * 0.16, d * 0.32, w * 0.16, d / 2, "fp3d-sym-strong")];
    case "wall_switch":
      return [rect(-w / 2, -d / 2, w / 2, d / 2, "fp3d-sym-fill"), line(-w * 0.28, 0, w * 0.28, 0, "fp3d-sym-strong")];
    case "wall_outlet":
      return [rect(-w / 2, -d / 2, w / 2, d / 2, "fp3d-sym-fill"), circle(-w * 0.17, 0, w * 0.07), circle(w * 0.17, 0, w * 0.07)];
    case "smart_plug":
      return [rect(-w / 2, -d / 2, w / 2, d / 2, "fp3d-sym-fill"), circle(0, 0, Math.min(w, d) * 0.28), line(-w * 0.24, d * 0.32, w * 0.24, d * 0.32, "fp3d-sym-strong")];
    case "motion_sensor":
      return [rect(-w / 2, -d / 2, w / 2, d / 2, "fp3d-sym-fill"), ellipse(0, d * 0.08, w * 0.3, d * 0.3, "fp3d-sym-strong")];
    case "contact_sensor":
      return [rect(-w / 2, -d / 2, w * 0.12, d / 2, "fp3d-sym-fill"), rect(w * 0.24, -d * 0.36, w / 2, d * 0.36)];
    case "water_leak_sensor":
      return [circle(0, 0, Math.min(w, d) * 0.47, "fp3d-sym-fill"), ellipse(0, d * 0.06, w * 0.13, d * 0.2, "fp3d-sym-strong")];
    case "temperature_humidity_sensor":
      return [rect(-w / 2, -d / 2, w / 2, d / 2, "fp3d-sym-fill"), rect(-w * 0.34, -d * 0.25, w * 0.34, d * 0.25, "fp3d-sym-strong")];
    case "video_doorbell":
      return [rect(-w / 2, -d / 2, w / 2, d / 2, "fp3d-sym-fill"), circle(0, -d * 0.22, Math.min(w, d) * 0.16), circle(0, d * 0.25, Math.min(w, d) * 0.13, "fp3d-sym-strong")];
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
      return [...seating(w, Math.min(d, 0.9), Math.max(2, Math.round(w / 0.65)), true), rect(-w / 2, -d / 2, -w / 2 + Math.min(0.9, w * 0.36), d / 2, "fp3d-sym-fill")];
    case "sofa_bed":
      return [rect(-w / 2, -d / 2, w / 2, d / 2), rect(-w / 2, -d / 2, w / 2, -d / 2 + Math.min(0.24, d * 0.22), "fp3d-sym-fill"), line(0, -d / 2 + Math.min(0.24, d * 0.22), 0, d / 2)];
    case "shower_screen":
      return [line(-w / 2, 0, w / 2, 0, "fp3d-sym-strong"), circle(w * 0.34, 0, Math.min(w, d) * 0.25)];
    case "hammock":
      return [line(-w / 2, 0, -w * 0.32, 0), line(w * 0.32, 0, w / 2, 0), ellipse(0, 0, w * 0.32, d * 0.42, "fp3d-sym-fill")];
    case "stone_table_set":
      return [circle(0, 0, Math.min(w, d) * 0.22, "fp3d-sym-fill"), ...[[0, -0.38], [0.38, 0], [0, 0.38], [-0.38, 0]].map(([x, z]) => circle(x * w, z * d, Math.min(w, d) * 0.1))];
    case "planter_large":
      return [circle(0, 0, Math.min(w, d) * 0.47), circle(0, 0, Math.min(w, d) * 0.33, "fp3d-sym-fill")];
    case "water_tank":
      return [circle(0, 0, Math.min(w, d) * 0.48), circle(0, 0, Math.min(w, d) * 0.12, "fp3d-sym-fill")];
    case "gate":
      return [line(-w / 2, 0, w / 2, 0, "fp3d-sym-strong"), line(0, -d / 2, 0, d / 2)];
    case "fence": {
      const out: Part[] = [line(-w / 2, 0, w / 2, 0, "fp3d-sym-strong")];
      for (let i = 0; i < 7; i++) out.push(line(-w / 2 + (w * i) / 6, -d / 2, -w / 2 + (w * i) / 6, d / 2));
      return out;
    }
    case "sofa":
      return seating(w, d, Math.max(1, Math.round((w - 0.4) / 0.62)), true);
    case "armchair":
      return seating(w, d, 1, true);
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
    case "tall_cabinet":
    case "kitchen":
    case "kitchen_wall":
    case "kitchen_tall":
    case "shelf":
      return fronts(w, d, type === "nightstand" || type === "tall_cabinet" || type === "kitchen_tall" ? 1 : Math.max(2, Math.round(w / 0.5)));
    case "coat_rack":
      return [rect(-w / 2, -d / 2, w / 2, -d / 2 + 0.03, "fp3d-sym-fill"), ...fronts(w, d, Math.max(2, Math.round(w / 0.5)))];
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
    case "tv_board":
      return [line(-Math.min(w * 0.4, 0.72), -d / 2 + 0.14, Math.min(w * 0.4, 0.72), -d / 2 + 0.14, "fp3d-sym-strong"), ...fronts(w, d, Math.max(2, Math.round(w / 0.6)))];
    case "tv_wall":
      return [line(-w / 2, 0, w / 2, 0, "fp3d-sym-strong")];
    case "lamp_downlight":
    case "lamp_spot":
      return [circle(0, 0, Math.min(w, d) * 0.45, "fp3d-sym-fill"), circle(0, 0, Math.min(w, d) * 1.4)];
    case "lamp_bollard":
    case "lamp_garden":
      return [circle(0, 0, Math.min(w, d) * 0.5, "fp3d-sym-fill"), circle(0, 0, Math.min(w, d) * 1.6)];
    case "lamp_column":
      return [rect(-w * 0.42, -d * 0.42, w * 0.42, d * 0.42, "fp3d-sym-fill"), rect(-w * 0.18, -d * 0.18, w * 0.18, d * 0.18), line(-w, 0, w, 0), line(0, -d, 0, d)];
    case "lamp_tv_bars":
      return [rect(-w * 0.44, -d * 0.42, -w * 0.18, d * 0.42, "fp3d-sym-fill"), rect(w * 0.18, -d * 0.42, w * 0.44, d * 0.42, "fp3d-sym-fill")];
    case "lamp_orb_table":
      return [circle(0, 0, Math.min(w, d) * 0.47, "fp3d-sym-fill"), circle(0, 0, Math.min(w, d) * 0.24)];
    case "lamp_portable":
      return [svg`<polygon class="fp3d-sym-fill" points=${`${-w * 0.42},${d * 0.42} ${w * 0.42},${d * 0.42} ${w * 0.28},${-d * 0.42} ${-w * 0.28},${-d * 0.42}`} />`, rect(-w * 0.13, -d * 0.14, w * 0.13, d * 0.14)];
    case "lamp_ambient_spot":
      return [circle(0, 0, Math.min(w, d) * 0.47, "fp3d-sym-fill"), rect(-w * 0.26, -d * 0.26, w * 0.26, d * 0.26, "fp3d-sym-strong")];
    case "lamp_cube":
      return [rect(-w * 0.46, -d * 0.46, w * 0.46, d * 0.46, "fp3d-sym-fill"), rect(-w * 0.3, -d * 0.3, w * 0.3, d * 0.3)];
    case "lamp_panel_round": {
      const r = Math.min(w, d) * 0.46;
      return [circle(0, 0, r, "fp3d-sym-fill"), ...Array.from({ length: 8 }, (_, i) => { const a = (i * Math.PI) / 4; return line(Math.cos(a) * r * 1.12, Math.sin(a) * r * 1.12, Math.cos(a) * r * 1.42, Math.sin(a) * r * 1.42); })];
    }
    case "lamp_garden_spots":
      return [-0.34, 0, 0.34].flatMap((x) => [circle(x * w, 0, d * 0.28, "fp3d-sym-fill"), line(x * w, -d * 0.2, x * w, d * 0.46)]);
    case "lamp_wall_updown":
      return [rect(-w / 2, -d / 2, w / 2, -d * 0.28, "fp3d-sym-fill"), rect(-w * 0.34, -d * 0.28, w * 0.34, d * 0.3), line(-w * 0.46, d * 0.42, w * 0.46, d * 0.42, "fp3d-sym-strong")];
    case "parking":
      // the spot's marking with an arrow head at the front
      return [rect(-w / 2 + 0.08, -d / 2 + 0.08, w / 2 - 0.08, d / 2 - 0.08), line(-w * 0.15, d / 2 - 0.5, 0, d / 2 - 0.22, "fp3d-sym-strong"), line(0, d / 2 - 0.22, w * 0.15, d / 2 - 0.5, "fp3d-sym-strong")];
    case "robot_vacuum":
      // dock at the back, the robot resting in front of it
      return [rect(-w * 0.38, -d / 2, w * 0.38, -d * 0.17, "fp3d-sym-fill"), rect(-w * 0.22, -d * 0.17, w * 0.22, d * 0.17), circle(0, d * 0.14, Math.min(w, d) * 0.4)];
    case "robot_mower":
      return [rect(-w / 2, -d / 2, w / 2, d * 0.42, "fp3d-sym-fill"), line(-w * 0.42, -d * 0.42, -w * 0.42, d * 0.28), line(w * 0.42, -d * 0.42, w * 0.42, d * 0.28), rect(-w * 0.31, -d * 0.17, w * 0.31, d * 0.34), line(-w * 0.22, d * 0.34, w * 0.22, d * 0.34, "fp3d-sym-strong")];
    case "radiator": {
      // fins along the front
      const out: Part[] = [];
      const n = Math.max(3, Math.round(w / 0.1));
      for (let i = 1; i < n; i++) out.push(line(-w / 2 + (w / n) * i, -d / 2, -w / 2 + (w / n) * i, d / 2));
      return out;
    }
    case "air_conditioner": {
      // slim wall unit: casing, outlet and guide vanes viewed from above
      const out: Part[] = [rect(-w / 2, -d / 2, w / 2, d / 2), line(-w * 0.43, d * 0.28, w * 0.43, d * 0.28, "fp3d-sym-strong")];
      for (let i = 1; i < 6; i++) {
        const x = -w * 0.4 + w * 0.8 * (i / 6);
        out.push(line(x, d * 0.12, x + w * 0.025, d * 0.42));
      }
      return out;
    }
    case "water_pump":
      // motor at the back, round pump housing and inlet/outlet pipes at the front
      return [
        rect(-w * 0.42, -d * 0.42, w * 0.42, d * 0.42),
        rect(-w * 0.25, -d * 0.38, w * 0.25, d * 0.05, "fp3d-sym-fill"),
        circle(0, d * 0.15, Math.min(w, d) * 0.27, "fp3d-sym-strong"),
        line(0, d * 0.15, 0, d / 2),
        line(w * 0.18, d * 0.15, w * 0.42, d * 0.15),
      ];
    case "lamp_panel":
      return [rect(-w / 2 + 0.03, -d / 2 + 0.03, w / 2 - 0.03, d / 2 - 0.03, "fp3d-sym-fill")];
    case "lamp_uplight":
    case "lamp_ceiling":
    case "lamp_pendant":
    case "lamp_floor":
    case "lamp_table": {
      // a lamp from above: the shade, and short rays for hanging ones
      const r = Math.min(w, d) / 2;
      const out: Part[] = [circle(0, 0, r * 0.9, "fp3d-sym-fill"), circle(0, 0, r * 0.3)];
      if (type === "lamp_ceiling" || type === "lamp_pendant") {
        for (let i = 0; i < 8; i++) {
          const a = (i / 8) * Math.PI * 2;
          out.push(line(Math.cos(a) * r * 1.05, Math.sin(a) * r * 1.05, Math.cos(a) * r * 1.35, Math.sin(a) * r * 1.35));
        }
      }
      return out;
    }
    case "lamp_wall":
      return [rect(-w / 2, -d / 2, w / 2, -d / 2 + 0.03, "fp3d-sym-fill"), ellipse(0, 0.01, w * 0.4, d * 0.4)];
    case "led_strip":
      return [line(-w / 2, 0, w / 2, 0, "fp3d-sym-strong")];
    case "plant":
      return [circle(0, 0, Math.min(w, d) * 0.46), circle(0, 0, Math.min(w, d) * 0.25)];
    case "rug":
      return [rect(-w / 2 + 0.1, -d / 2 + 0.1, w / 2 - 0.1, d / 2 - 0.1)];
    case "stairs": {
      // steps and an arrow pointing up the stair (towards the back)
      const n = Math.max(3, Math.round(d / 0.26));
      const out: Part[] = [];
      for (let i = 1; i < n; i++) out.push(line(-w / 2, d / 2 - (d / n) * i, w / 2, d / 2 - (d / n) * i));
      out.push(line(0, d / 2 - 0.1, 0, -d / 2 + 0.25, "fp3d-sym-strong"), line(-0.15, -d / 2 + 0.45, 0, -d / 2 + 0.25, "fp3d-sym-strong"), line(0.15, -d / 2 + 0.45, 0, -d / 2 + 0.25, "fp3d-sym-strong"));
      return out;
    }
    case "stairs_landing": {
      // Two parallel flights, joined across the back by the landing; arrows show the half-turn route.
      const gap = Math.min(0.16, w * 0.12);
      const flightW = (w - gap) / 2;
      const landingD = Math.min(d * 0.34, Math.max(d * 0.22, flightW));
      const landingFront = -d / 2 + landingD;
      const lowerX0 = -w / 2;
      const lowerX1 = -gap / 2;
      const upperX0 = gap / 2;
      const upperX1 = w / 2;
      const n = Math.max(3, Math.round((d - landingD) / 0.26));
      const out: Part[] = [line(-w / 2, landingFront, w / 2, landingFront, "fp3d-sym-strong")];
      for (let i = 1; i < n; i++) {
        const z = d / 2 - ((d - landingD) / n) * i;
        out.push(line(lowerX0, z, lowerX1, z), line(upperX0, z, upperX1, z));
      }
      const lx = (lowerX0 + lowerX1) / 2;
      const ux = (upperX0 + upperX1) / 2;
      out.push(
        line(lx, d / 2 - 0.1, lx, landingFront + 0.18, "fp3d-sym-strong"),
        line(lx - 0.12, landingFront + 0.36, lx, landingFront + 0.18, "fp3d-sym-strong"),
        line(lx + 0.12, landingFront + 0.36, lx, landingFront + 0.18, "fp3d-sym-strong"),
        line(ux, landingFront + 0.18, ux, d / 2 - 0.1, "fp3d-sym-strong"),
        line(ux - 0.12, d / 2 - 0.28, ux, d / 2 - 0.1, "fp3d-sym-strong"),
        line(ux + 0.12, d / 2 - 0.28, ux, d / 2 - 0.1, "fp3d-sym-strong"),
      );
      return out;
    }
    default: {
      const item = packItem(type);
      return item ? packSymbol(item, w, d) : nothing;
    }
  }
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
