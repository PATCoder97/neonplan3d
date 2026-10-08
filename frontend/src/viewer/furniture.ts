// Procedural low-poly furniture in the neon look. Every model is built from boxes and cylinders in
// local coordinates (x across, z depth with the front at +z, y up) scaled to the item's size, then
// rotated and moved into place. Solids go into the floor's wall buffer, main outlines into its line
// buffer and a soft contact shadow into the shadow layer, so furniture adds no draw calls.

import { Color } from "three";
import type { Furniture, Vec2 } from "../model.ts";
import { builtinBase } from "../model.ts";
import { mountBase, packItem, packScreen, type PackItem } from "../packs.ts";
import type { Floor } from "../model.ts";
import { ALWAYS, DEG, EDGE_TOP, GeoBuffer, LineBuffer, pushLoft, pushLyingCyl, pushPrism, shade } from "./geo.ts";

const C = {
  body: 0x172238,
  bodyTop: 0x1d2b47,
  fabric: 0x1a2644,
  fabricTop: 0x22325a,
  cushion: 0x243661,
  wood: 0x19233c,
  woodTop: 0x202d4b,
  white: 0x1d2946,
  whiteTop: 0x26375e,
  metal: 0x2a3a60,
  dark: 0x0b111f,
  glass: 0x1c3a52,
  plant: 0x12302e,
  plantTop: 0x1a4540,
  pot: 0x1d2640,
  accent: 0x2b8fb3,
};

const EDGE_FURN = shade(0x5b7cff, 0.3);
const EDGE_FAINT = shade(0x5b7cff, 0.17);
const EDGE_GLOW = shade(0x37e0ff, 0.45);

type Tf = (x: number, z: number) => Vec2;

class Builder {
  private readonly buf: GeoBuffer;
  private readonly lines: LineBuffer;
  private readonly tf: Tf;
  /** The transform mirrors (negative determinant): parts not wound by ccw() come out inside out. */
  readonly mirrored: boolean;

  constructor(buf: GeoBuffer, lines: LineBuffer, tf: Tf) {
    this.buf = buf;
    this.lines = lines;
    this.tf = tf;
    this.mirrored = tfMirrors(tf);
  }

  /** The same buffers with the local coordinates turned by `deg` around (cx, cz): turned parts of pack items. */
  rotated(cx: number, cz: number, deg: number): Builder {
    const a = deg * DEG;
    const c = Math.cos(a);
    const s = Math.sin(a);
    const tf = this.tf;
    return new Builder(this.buf, this.lines, (x, z) => tf(cx + (x - cx) * c - (z - cz) * s, cz + (x - cx) * s + (z - cz) * c));
  }

  /** Axis-aligned box in local coordinates; `edges` draws its outline. */
  box(x0: number, x1: number, y0: number, y1: number, z0: number, z1: number, side: number, top = side, edges: Color | null = null): void {
    if (x1 - x0 < 1e-4 || z1 - z0 < 1e-4 || y1 - y0 < 1e-4) return;
    const poly = [this.tf(x0, z0), this.tf(x0, z1), this.tf(x1, z1), this.tf(x1, z0)];
    pushPrism(this.buf, ccw(poly), y0, y1, side, top, { aoFrom: 0, bottom: y0 > 0.05 });
    if (edges) this.outline(poly, y0, y1, edges);
  }

  /** A box whose top face is the rectangle `t` (sloped sides): hoods, windscreens, tapered shades. */
  loft(b: [number, number, number, number], t: [number, number, number, number], y0: number, y1: number, side: number, top = side, edges: Color | null = null): void {
    if (y1 - y0 < 1e-4) return;
    const lo: Vec2[] = [this.tf(b[0], b[2]), this.tf(b[0], b[3]), this.tf(b[1], b[3]), this.tf(b[1], b[2])];
    const hi: Vec2[] = [this.tf(t[0], t[2]), this.tf(t[0], t[3]), this.tf(t[1], t[3]), this.tf(t[1], t[2])];
    if (lo !== ccw(lo)) {
      lo.reverse();
      hi.reverse();
    }
    pushLoft(this.buf, lo, hi, y0, y1, side, top);
    if (edges) {
      for (let i = 0; i < 4; i++) {
        this.line(hi[i], hi[(i + 1) % 4], y1, y1, edges);
        this.line(lo[i], hi[i], y0, y1, edges);
      }
    }
  }

  /** Box with bevelled top and bottom edges (cushions, mattresses, arm rests). */
  pad(x0: number, x1: number, y0: number, y1: number, z0: number, z1: number, side: number, top = side, r = 0.03, edges: Color | null = null): void {
    r = Math.min(r, (x1 - x0) / 2 - 0.005, (z1 - z0) / 2 - 0.005, (y1 - y0) / 2);
    if (r < 0.008) return this.box(x0, x1, y0, y1, z0, z1, side, top, edges);
    this.loft([x0 + r, x1 - r, z0 + r, z1 - r], [x0, x1, z0, z1], y0, y0 + r, side);
    if (y1 - y0 - 2 * r > 0.005) this.box(x0, x1, y0 + r, y1 - r, z0, z1, side, side, edges);
    this.loft([x0, x1, z0, z1], [x0 + r, x1 - r, z0 + r, z1 - r], y1 - r, y1, side, top);
  }

  /** A cylinder lying along x or z (wheels, rollers); `edges` draws both rims. */
  lyingCyl(axis: "x" | "z", cx: number, cz: number, y0: number, y1: number, len: number, dia: number, side: number, cap = side, n = 12, edges: Color | null = null): void {
    const r = Math.min(dia, y1 - y0) / 2;
    if (r < 1e-4 || len < 1e-4) return;
    const cy = (y0 + y1) / 2;
    const along = axis === "x" ? cx : cz;
    const across = axis === "x" ? cz : cx;
    const at = (a: number, c: number): Vec2 => (axis === "x" ? this.tf(a, c) : this.tf(c, a));
    const p0 = this.buf.p.length;
    pushLyingCyl(this.buf, at, along - len / 2, along + len / 2, across, cy, r, side, cap, n);
    if (this.mirrored) flipWinding(this.buf, p0);
    if (edges) {
      for (const a of [along - len / 2, along + len / 2]) {
        for (let i = 0; i < n; i++) {
          const t0 = (i / n) * Math.PI * 2;
          const t1 = ((i + 1) / n) * Math.PI * 2;
          this.line(at(a, across + Math.sin(t0) * r), at(a, across + Math.sin(t1) * r), cy + Math.cos(t0) * r, cy + Math.cos(t1) * r, edges);
        }
      }
    }
  }

  /** Vertical cylinder with `n` sides. */
  cyl(cx: number, cz: number, r: number, y0: number, y1: number, side: number, top = side, n = 10, edges: Color | null = null): void {
    const poly: Vec2[] = [];
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      poly.push(this.tf(cx + Math.cos(a) * r, cz + Math.sin(a) * r));
    }
    pushPrism(this.buf, ccw(poly), y0, y1, side, top, { aoFrom: 0, bottom: y0 > 0.05 });
    if (edges) for (let i = 0; i < n; i++) this.line(poly[i], poly[(i + 1) % n], y1, y1, edges);
  }

  /** Polygonal tube following a path in the local y/z plane; useful for curved taps and pipes. */
  tubeYZ(x: number, path: [y: number, z: number][], r: number, side: number, n = 8, edges: Color | null = null): void {
    if (path.length < 2 || r < 1e-4) return;
    const rings = path.map(([y, z], i) => {
      const prev = path[Math.max(0, i - 1)];
      const next = path[Math.min(path.length - 1, i + 1)];
      const dy = next[0] - prev[0];
      const dz = next[1] - prev[1];
      const len = Math.hypot(dy, dz) || 1;
      // One ring axis is local x; the other is perpendicular to the path in the y/z plane.
      return Array.from({ length: n }, (_, j) => {
        const a = (j / n) * Math.PI * 2;
        const lx = x + Math.cos(a) * r;
        const ly = y - (dz / len) * Math.sin(a) * r;
        const lz = z + (dy / len) * Math.sin(a) * r;
        const p = this.tf(lx, lz);
        return [p[0], ly, p[1]];
      });
    });
    const p0 = this.buf.p.length;
    const color = new Color(side);
    for (let i = 0; i < rings.length - 1; i++) {
      for (let j = 0; j < n; j++) {
        const k = (j + 1) % n;
        this.buf.tri(rings[i][j], rings[i + 1][j], rings[i + 1][k], color);
        this.buf.tri(rings[i][j], rings[i + 1][k], rings[i][k], color);
      }
    }
    const cap = (i: number, reverse: boolean) => {
      const p = this.tf(x, path[i][1]);
      const centre = [p[0], path[i][0], p[1]];
      for (let j = 0; j < n; j++) {
        const k = (j + 1) % n;
        this.buf.tri(centre, rings[i][reverse ? k : j], rings[i][reverse ? j : k], color);
      }
    };
    cap(0, true);
    cap(path.length - 1, false);
    if (this.mirrored) flipWinding(this.buf, p0);
    if (edges) for (let i = 0; i < path.length - 1; i++) this.seg(x, path[i][0], path[i][1], x, path[i + 1][0], path[i + 1][1], edges);
  }

  /** Line between two local points at heights ya and yb. */
  seg(xa: number, ya: number, za: number, xb: number, yb: number, zb: number, color: Color = EDGE_FURN): void {
    this.line(this.tf(xa, za), this.tf(xb, zb), ya, yb, color);
  }

  private line(a: Vec2, b: Vec2, ya: number, yb: number, color: Color): void {
    this.lines.seg([a[0], ya, a[1]], [b[0], yb, b[1]], color, ALWAYS);
  }

  private outline(poly: Vec2[], y0: number, y1: number, color: Color): void {
    for (let i = 0; i < 4; i++) {
      const a = poly[i];
      const b = poly[(i + 1) % 4];
      this.line(a, b, y1, y1, color);
      this.line(a, a, y0, y1, color);
    }
  }
}

/** Whether a plan transform mirrors (its determinant is negative). */
function tfMirrors(tf: Tf): boolean {
  const o = tf(0, 0);
  const ex = tf(1, 0);
  const ez = tf(0, 1);
  return (ex[0] - o[0]) * (ez[1] - o[1]) - (ex[1] - o[1]) * (ez[0] - o[0]) < 0;
}

function ccw(poly: Vec2[]): Vec2[] {
  let a = 0;
  for (let i = 0; i < poly.length; i++) {
    const p = poly[i];
    const q = poly[(i + 1) % poly.length];
    a += p[0] * q[1] - q[0] * p[1];
  }
  return a >= 0 ? poly : [...poly].reverse();
}

/** Four legs inside a w × d footprint. */
function legs(b: Builder, w: number, d: number, h: number, t: number, inset: number, color = C.metal, taper = false): void {
  const x = w / 2 - inset - t;
  const z = d / 2 - inset - t;
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      const cx = sx * x;
      const cz = sz * z;
      if (taper) b.loft([cx - t * 0.3, cx + t * 0.3, cz - t * 0.3, cz + t * 0.3], [cx - t / 2, cx + t / 2, cz - t / 2, cz + t / 2], 0, h, color);
      else b.box(cx - t / 2, cx + t / 2, 0, h, cz - t / 2, cz + t / 2, color);
    }
  }
}

/** Door or drawer fronts: division lines on the front face (+z) and small glowing handles. */
function fronts(b: Builder, x0: number, x1: number, y0: number, y1: number, z: number, count: number, handleY: number | null = null, horizontal = false): void {
  const w = (x1 - x0) / count;
  for (let i = 1; i < count; i++) {
    const x = x0 + w * i;
    b.seg(x, y0, z, x, y1, z, EDGE_FAINT);
  }
  for (let i = 0; i < count; i++) {
    const cx = x0 + w * (i + 0.5);
    const hy = handleY ?? y1 - 0.08;
    if (horizontal) b.seg(cx - Math.min(0.1, w / 4), hy, z + 0.012, cx + Math.min(0.1, w / 4), hy, z + 0.012, EDGE_GLOW);
    else {
      const hx = count > 1 ? cx + (i % 2 ? -w / 2 + 0.06 : w / 2 - 0.06) : cx + w / 2 - 0.06;
      b.seg(hx, hy - 0.08, z + 0.012, hx, hy + 0.08, z + 0.012, EDGE_GLOW);
    }
  }
}

function sofa(b: Builder, w: number, d: number, h: number, seats: number): void {
  const x0 = -w / 2;
  const x1 = w / 2;
  const z0 = -d / 2;
  const z1 = d / 2;
  const arm = Math.min(0.2, w * 0.12);
  const seatH = h * 0.5;
  const back = Math.min(0.24, d * 0.28);
  legs(b, w, d, 0.07, 0.05, 0.05, C.wood, true);
  b.pad(x0, x1, 0.07, seatH - 0.08, z0 + 0.02, z1, C.fabric, C.fabricTop, 0.04, EDGE_FURN);
  // the back leans a little: its top is thinner than its base
  b.loft([x0, x1, z0, z0 + back], [x0 + 0.01, x1 - 0.01, z0, z0 + back * 0.5], seatH - 0.08, h, C.fabric, C.fabricTop, EDGE_FURN);
  b.pad(x0, x0 + arm, seatH - 0.08, h * 0.72, z0 + 0.02, z1 - 0.02, C.fabric, C.fabricTop, 0.04, EDGE_FURN);
  b.pad(x1 - arm, x1, seatH - 0.08, h * 0.72, z0 + 0.02, z1 - 0.02, C.fabric, C.fabricTop, 0.04, EDGE_FURN);
  // seat cushions with a small gap, and back cushions leaning against the back
  const inner = x1 - arm - (x0 + arm);
  const cw = inner / seats;
  for (let i = 0; i < seats; i++) {
    const cx0 = x0 + arm + cw * i + 0.02;
    const cx1 = cx0 + cw - 0.04;
    b.pad(cx0, cx1, seatH - 0.08, seatH + 0.05, z0 + back + 0.02, z1 - 0.06, C.cushion, C.cushion, 0.04);
    b.loft([cx0 + 0.01, cx1 - 0.01, z0 + back * 0.55, z0 + back + 0.14], [cx0 + 0.03, cx1 - 0.03, z0 + back * 0.4, z0 + back * 0.4 + 0.06], seatH + 0.03, h * 0.93, C.cushion);
  }
}

function bed(b: Builder, w: number, d: number, h: number): void {
  const z0 = -d / 2;
  const z1 = d / 2;
  const x0 = -w / 2;
  const x1 = w / 2;
  const frame = Math.min(0.32, h * 0.36);
  legs(b, w, d, 0.08, 0.06, 0.03, C.wood, true);
  b.box(x0, x1, 0.08, frame, z0 + 0.06, z1, C.wood, C.woodTop, EDGE_FURN);
  b.pad(x0 + 0.03, x1 - 0.03, frame, frame + 0.2, z0 + 0.08, z1 - 0.03, C.white, C.whiteTop, 0.03);
  b.box(x0, x1, 0.08, h - 0.05, z0, z0 + 0.07, C.wood, C.woodTop, EDGE_FURN);
  b.box(x0, x1, h - 0.05, h, z0, z0 + 0.09, C.wood, C.woodTop, EDGE_FAINT);
  // duvet over the lower two thirds with a folded-back edge, puffy pillows at the head
  const top = frame + 0.2;
  const fold = z0 + (d - 0.1) * 0.36;
  b.pad(x0 + 0.01, x1 - 0.01, top - 0.1, top + 0.05, fold, z1 - 0.01, C.cushion, C.fabricTop, 0.025, EDGE_FAINT);
  b.lyingCyl("x", 0, fold + 0.05, top - 0.02, top + 0.09, w - 0.02, 0.1, C.cushion, C.fabricTop, 8);
  const pillows = w > 1.2 ? 2 : 1;
  const pw = (w - 0.2) / pillows;
  for (let i = 0; i < pillows; i++) {
    const px = x0 + 0.1 + pw * i;
    const pz = z0 + 0.12;
    const pd = Math.min(0.42, d * 0.2);
    const k = 0.1;
    b.loft([px + 0.03 + k, px + pw - 0.03 - k, pz + k * 0.5, pz + pd - k * 0.5], [px + 0.03, px + pw - 0.03, pz, pz + pd], top, top + 0.06, C.whiteTop);
    b.loft([px + 0.03, px + pw - 0.03, pz, pz + pd], [px + 0.03 + k, px + pw - 0.03 - k, pz + k * 0.5, pz + pd - k * 0.5], top + 0.06, top + 0.12, C.whiteTop, C.whiteTop, EDGE_FAINT);
  }
}

function chair(b: Builder, w: number, d: number, h: number): void {
  const seat = Math.min(0.46, h * 0.52);
  legs(b, w, d, seat - 0.04, 0.035, 0.02, C.wood, true);
  b.box(-w / 2, w / 2, seat - 0.04, seat, -d / 2, d / 2, C.wood, C.woodTop, EDGE_FURN);
  b.pad(-w / 2 + 0.02, w / 2 - 0.02, seat, seat + 0.04, -d / 2 + 0.05, d / 2 - 0.03, C.cushion, C.cushion, 0.015);
  b.loft([-w / 2, w / 2, -d / 2 + 0.02, -d / 2 + 0.07], [-w / 2 + 0.02, w / 2 - 0.02, -d / 2, -d / 2 + 0.03], seat, h, C.wood, C.woodTop, EDGE_FURN);
}

function table(b: Builder, w: number, d: number, h: number): void {
  legs(b, w, d, h - 0.04, 0.06, 0.05, C.wood, true);
  b.box(-w / 2, w / 2, h - 0.04, h, -d / 2, d / 2, C.wood, C.woodTop, EDGE_GLOW);
  b.box(-w / 2 + 0.08, w / 2 - 0.08, h - 0.1, h - 0.04, -d / 2 + 0.08, d / 2 - 0.08, C.body);
}

function desk(b: Builder, w: number, d: number, h: number): void {
  const x0 = -w / 2;
  const x1 = w / 2;
  b.box(x0, x1, h - 0.035, h, -d / 2, d / 2, C.wood, C.woodTop, EDGE_FURN);
  b.box(x0, x0 + 0.03, 0, h - 0.035, -d / 2 + 0.03, d / 2 - 0.03, C.metal);
  const dw = Math.min(0.42, w * 0.32);
  b.box(x1 - dw, x1, 0, h - 0.035, -d / 2 + 0.03, d / 2 - 0.02, C.body, C.bodyTop, EDGE_FURN);
  const zf = d / 2 - 0.02;
  for (const y of [h * 0.35, h * 0.66]) b.seg(x1 - dw, y, zf, x1, y, zf, EDGE_FAINT);
  for (const y of [h * 0.2, h * 0.5, h * 0.82]) b.seg(x1 - dw / 2 - 0.07, y, zf + 0.012, x1 - dw / 2 + 0.07, y, zf + 0.012, EDGE_GLOW);
  // screen
  b.box(-0.3, 0.3, h + 0.08, h + 0.42, -d / 2 + 0.08, -d / 2 + 0.11, C.dark, C.dark, EDGE_GLOW);
  b.box(-0.03, 0.03, h, h + 0.1, -d / 2 + 0.09, -d / 2 + 0.13, C.metal);
}

function cabinet(b: Builder, w: number, d: number, h: number, doors: number, handleY: number | null = null, horizontal = false): void {
  b.box(-w / 2, w / 2, 0.02, h, -d / 2, d / 2 - 0.02, C.body, C.bodyTop, EDGE_FURN);
  b.box(-w / 2 + 0.02, w / 2 - 0.02, 0, 0.08, -d / 2 + 0.02, d / 2 - 0.06, C.dark);
  fronts(b, -w / 2, w / 2, 0.08, h, d / 2 - 0.02, doors, handleY, horizontal);
}

function shelf(b: Builder, w: number, d: number, h: number): void {
  const t = 0.025;
  b.box(-w / 2, -w / 2 + t, 0, h, -d / 2, d / 2, C.wood, C.woodTop, EDGE_FURN);
  b.box(w / 2 - t, w / 2, 0, h, -d / 2, d / 2, C.wood, C.woodTop, EDGE_FURN);
  b.box(-w / 2 + t, w / 2 - t, 0, h, -d / 2, -d / 2 + 0.015, C.body);
  const n = Math.max(2, Math.round(h / 0.38));
  for (let i = 0; i <= n; i++) {
    const y = Math.min(h - t, (h / n) * i);
    b.box(-w / 2 + t, w / 2 - t, y, y + t, -d / 2 + 0.015, d / 2, C.wood, C.woodTop, EDGE_FAINT);
    // a few books on every shelf except the top
    if (i < n) {
      let x = -w / 2 + t + 0.04;
      let k = i * 3;
      while (x < w / 2 - t - 0.12) {
        const bw = 0.03 + ((k * 7) % 5) * 0.008;
        const bh = h / n - t - 0.08 - ((k * 5) % 4) * 0.025;
        if ((k * 11) % 7 !== 0) b.box(x, x + bw, y + t, y + t + bh, -d / 2 + 0.04, d / 2 - 0.05, (k % 3) ? C.fabric : C.cushion, C.fabricTop);
        x += bw + 0.006;
        k++;
      }
    }
  }
}

function kitchen(b: Builder, w: number, d: number, h: number): void {
  const doors = Math.max(1, Math.round(w / 0.6));
  cabinet(b, w, d - 0.02, h - 0.04, doors, h - 0.2);
  b.box(-w / 2, w / 2, h - 0.04, h, -d / 2, d / 2, C.whiteTop, C.whiteTop, EDGE_FURN);
}

function fridge(b: Builder, w: number, d: number, h: number): void {
  b.box(-w / 2, w / 2, 0, h, -d / 2, d / 2, C.white, C.whiteTop, EDGE_FURN);
  const split = h * 0.62;
  b.seg(-w / 2, split, d / 2, w / 2, split, d / 2, EDGE_FAINT);
  const hx = w / 2 - 0.06;
  b.seg(hx, split + 0.08, d / 2 + 0.015, hx, split + 0.4, d / 2 + 0.015, EDGE_GLOW);
  b.seg(hx, split - 0.4, d / 2 + 0.015, hx, split - 0.08, d / 2 + 0.015, EDGE_GLOW);
}

/** Smart side-by-side fridge without its doors (they move: see pushFridgeDoors): the body and, behind the doors, shelves. */
function fridgeSmart(b: Builder, w: number, d: number, h: number): void {
  const front = d / 2 - FRIDGE_DOOR;
  b.box(-w / 2, w / 2, 0.02, h, -d / 2, front, C.body, C.bodyTop, EDGE_FURN);
  b.box(-w / 2 + 0.05, w / 2 - 0.05, 0, 0.02, -d / 2 + 0.05, front - 0.05, C.dark);
  // shelves of both compartments, seen when a door stands open
  for (const y of [0.35, 0.7, 1.05, 1.4]) {
    if (y > h - 0.15) continue;
    b.seg(-w / 2 + 0.03, y, front + 0.001, -0.03, y, front + 0.001, EDGE_FAINT);
    b.seg(0.03, y, front + 0.001, w / 2 - 0.03, y, front + 0.001, EDGE_FAINT);
  }
}

/** Thickness of a smart fridge's doors. */
export const FRIDGE_DOOR = 0.06;

/**
 * The two doors of a smart fridge, each swung open by a fraction (0 closed … 1 wide open) around its
 * outer hinge: the left one carries the water dispenser, the right one the screen. An open door turns
 * red – it should not stay open for long.
 */
export function pushFridgeDoors(buf: GeoBuffer, f: Pick<Furniture, "x" | "z" | "rotation" | "w" | "d" | "h" | "mirror">, base: number, left: number, right: number): void {
  const p0 = buf.p.length;
  pushFridgeDoorsUnflipped(buf, f, base, left, right);
  if (f.mirror) flipWinding(buf, p0);
}

function pushFridgeDoorsUnflipped(buf: GeoBuffer, f: Pick<Furniture, "x" | "z" | "rotation" | "w" | "d" | "h" | "mirror">, base: number, left: number, right: number): void {
  const a = f.rotation * DEG;
  const c = Math.cos(a);
  const s = Math.sin(a);
  const mx = f.mirror ? -1 : 1;
  const tf = (lx: number, lz: number): [number, number] => [f.x + mx * lx * c - lz * s, f.z + mx * lx * s + lz * c];
  const y0 = base + 0.05;
  const y1 = base + f.h - 0.02;
  const red = new Color(0.75, 0.1, 0.14);
  const dark = new Color(C.dark);
  const accent = new Color(C.accent);
  const dw = f.w / 2 - 0.006;
  // a door: u runs from the hinge along the door (positive to the right), v through its thickness (0 = front face)
  const door = (hx: number, sign: 1 | -1, angle: number) => {
    const open = angle / opening;
    const front = new Color(0x1f2d4c).lerp(red, open);
    const side = new Color(C.body).lerp(red, open * 0.8);
    const ca = Math.cos(angle);
    const sa = Math.sin(angle);
    const at = (u: number, v: number): [number, number] => tf(hx + sign * (u * ca - v * sa), f.d / 2 + u * sa + v * ca);
    const quad = (p: [number, number][], ya: number, yb: number, col: Color) => {
      const [p0, p1, p2, p3] = p;
      buf.tri([p0[0], ya, p0[1]], [p1[0], ya, p1[1]], [p2[0], yb, p2[1]], col);
      buf.tri([p0[0], ya, p0[1]], [p2[0], yb, p2[1]], [p3[0], yb, p3[1]], col);
    };
    const box = (u0: number, u1: number, ya: number, yb: number, v0: number, v1: number, col: Color, face = col) => {
      const q = [at(u0, v1), at(u1, v1), at(u1, v0), at(u0, v0)];
      // front (v1 side), back, sides, top and bottom
      quad([q[0], q[1], q[1], q[0]], ya, yb, face);
      quad([q[3], q[2], q[2], q[3]], ya, yb, col);
      quad([q[0], q[3], q[3], q[0]], ya, yb, col);
      quad([q[1], q[2], q[2], q[1]], ya, yb, col);
      quad([q[0], q[1], q[2], q[3]], yb, yb, col);
      quad([q[3], q[2], q[1], q[0]], ya, ya, col);
    };
    box(0, dw, y0, y1, -FRIDGE_DOOR, 0, side, front);
    // handle at the free edge
    box(dw - 0.05, dw - 0.03, base + f.h * 0.45, base + f.h * 0.75, 0.005, 0.025, accent);
    return box;
  };
  const opening = 1.83; // ~105°
  const leftBox = door(-f.w / 2, 1, left * opening);
  // water dispenser: a dark recess in the left door
  leftBox(0.12, 0.3, base + f.h * 0.5, base + f.h * 0.68, 0.001, 0.005, dark);
  const rightBox = door(f.w / 2, -1, right * opening);
  // the screen: a dark panel on the right door (a picture rule puts its picture over it)
  rightBox(0.06, dw - 0.06, base + f.h * 0.52, base + f.h * 0.86, 0.001, 0.005, dark);
}

function stove(b: Builder, w: number, d: number, h: number): void {
  cabinet(b, w, d - 0.02, h - 0.04, 1, h - 0.24, true);
  b.box(-w / 2, w / 2, h - 0.04, h, -d / 2, d / 2, C.dark, C.dark, EDGE_FURN);
  for (const [x, z, r] of [
    [-0.14, -0.13, 0.09],
    [0.14, -0.13, 0.07],
    [-0.14, 0.13, 0.07],
    [0.14, 0.13, 0.09],
  ]) {
    const sx = (x * w) / 0.6;
    const sz = (z * d) / 0.62;
    b.cyl(sx, sz, r, h, h + 0.004, C.dark, 0x16263f, 12, EDGE_GLOW);
  }
}

function sink(b: Builder, w: number, d: number, h: number): void {
  cabinet(b, w, d - 0.02, h - 0.04, Math.max(1, Math.round(w / 0.45)), h - 0.2);
  const bw = Math.min(0.5, w - 0.2);
  b.box(-w / 2, -bw / 2, h - 0.04, h, -d / 2, d / 2, C.whiteTop, C.whiteTop, EDGE_FURN);
  b.box(bw / 2, w / 2, h - 0.04, h, -d / 2, d / 2, C.whiteTop, C.whiteTop, EDGE_FURN);
  b.box(-bw / 2, bw / 2, h - 0.04, h, -d / 2, -d / 2 + 0.1, C.whiteTop, C.whiteTop);
  b.box(-bw / 2, bw / 2, h - 0.04, h, d / 2 - 0.08, d / 2, C.whiteTop, C.whiteTop);
  b.box(-bw / 2, bw / 2, h - 0.2, h - 0.17, -d / 2 + 0.1, d / 2 - 0.08, C.metal, C.metal, EDGE_GLOW);
  b.cyl(0, -d / 2 + 0.05, 0.02, h, h + 0.28, C.metal, C.metal, 8);
  b.box(-0.015, 0.015, h + 0.24, h + 0.28, -d / 2 + 0.05, -d / 2 + 0.22, C.metal);
}

function bathtub(b: Builder, w: number, d: number, h: number): void {
  const rim = 0.07;
  b.box(-w / 2, w / 2, 0, h - 0.02, -d / 2, d / 2, C.white, C.whiteTop, EDGE_FURN);
  b.box(-w / 2, w / 2, h - 0.02, h, -d / 2, -d / 2 + rim, C.whiteTop);
  b.box(-w / 2, w / 2, h - 0.02, h, d / 2 - rim, d / 2, C.whiteTop);
  b.box(-w / 2, -w / 2 + rim, h - 0.02, h, -d / 2 + rim, d / 2 - rim, C.whiteTop);
  b.box(w / 2 - rim, w / 2, h - 0.02, h, -d / 2 + rim, d / 2 - rim, C.whiteTop);
  b.box(-w / 2 + rim, w / 2 - rim, h - 0.03, h - 0.02, -d / 2 + rim, d / 2 - rim, C.glass, C.glass, EDGE_GLOW);
  b.cyl(-w / 2 + 0.04, 0, 0.02, h, h + 0.12, C.metal, C.metal, 8);
}

function shower(b: Builder, w: number, d: number, h: number): void {
  b.box(-w / 2, w / 2, 0, 0.05, -d / 2, d / 2, C.whiteTop, C.whiteTop, EDGE_FURN);
  b.cyl(0, 0, 0.04, 0.05, 0.052, C.metal, C.metal, 8);
  // glass walls on the front and one side: only edges, the glass itself stays clear
  for (const [xa, za, xb, zb] of [
    [-w / 2, d / 2, w / 2, d / 2],
    [w / 2, -d / 2, w / 2, d / 2],
  ]) {
    b.seg(xa, 0.05, za, xb, 0.05, zb, EDGE_GLOW);
    b.seg(xa, h, za, xb, h, zb, EDGE_GLOW);
    b.seg(xb, 0.05, zb, xb, h, zb, EDGE_GLOW);
  }
  b.cyl(-w / 2 + 0.06, -d / 2 + 0.06, 0.015, 0.05, h - 0.05, C.metal, C.metal, 6);
  b.cyl(-w / 2 + 0.2, -d / 2 + 0.2, 0.1, h - 0.08, h - 0.06, C.metal, C.metal, 12, EDGE_GLOW);
}

function wc(b: Builder, w: number, d: number, h: number): void {
  const tankD = Math.min(0.18, d * 0.3);
  b.box(-w / 2, w / 2, 0.45, h, -d / 2, -d / 2 + tankD, C.white, C.whiteTop, EDGE_FURN);
  b.box(-w * 0.3, w * 0.3, 0, 0.36, -d / 2 + tankD - 0.02, d / 2 - 0.12, C.white, C.whiteTop);
  b.cyl(0, d / 2 - 0.26, Math.min(w / 2, 0.19), 0.36, 0.41, C.white, C.whiteTop, 12, EDGE_FURN);
  b.box(-w / 2 + 0.02, w / 2 - 0.02, 0.41, 0.43, -d / 2 + tankD, -d / 2 + tankD + 0.05, C.whiteTop);
}

function washbasin(b: Builder, w: number, d: number, h: number): void {
  cabinet(b, w, d - 0.02, h - 0.12, w > 0.8 ? 2 : 1, h - 0.3);
  b.box(-w / 2, w / 2, h - 0.12, h, -d / 2, d / 2, C.white, C.whiteTop, EDGE_FURN);
  b.box(-w / 2 + 0.07, w / 2 - 0.07, h - 0.005, h, -d / 2 + 0.12, d / 2 - 0.06, C.glass, C.glass, EDGE_GLOW);
  b.cyl(0, -d / 2 + 0.06, 0.018, h, h + 0.2, C.metal, C.metal, 8);
  // mirror above
  b.box(-w / 2 + 0.04, w / 2 - 0.04, h + 0.35, h + 1.0, -d / 2, -d / 2 + 0.02, C.glass, C.glass, EDGE_GLOW);
}

function tvBoard(b: Builder, w: number, d: number, h: number): void {
  cabinet(b, w, d, h, Math.max(2, Math.round(w / 0.6)), h * 0.55, true);
  const tw = Math.min(w * 0.8, 1.45);
  const th = tw * 0.56;
  b.box(-0.1, 0.1, h, h + 0.02, -d / 2 + 0.08, -d / 2 + 0.24, C.metal);
  b.box(-0.02, 0.02, h + 0.02, h + 0.12, -d / 2 + 0.14, -d / 2 + 0.18, C.metal);
  b.box(-tw / 2, tw / 2, h + 0.1, h + 0.1 + th, -d / 2 + 0.12, -d / 2 + 0.16, C.dark, C.dark, EDGE_GLOW);
}

function plant(b: Builder, w: number, d: number, h: number): void {
  const r = Math.min(w, d) / 2;
  const potH = Math.min(0.4, h * 0.34);
  b.cyl(0, 0, r * 0.62, 0, potH, C.pot, C.pot, 10, EDGE_FURN);
  b.cyl(0, 0, r * 0.08, potH, h * 0.55, C.wood, C.wood, 6);
  // foliage as stacked, slightly rotated octagonal layers
  const layers = 4;
  for (let i = 0; i < layers; i++) {
    const t = i / (layers - 1);
    const lr = r * (0.95 - 0.55 * t);
    const y0 = potH + (h - potH) * (0.18 + 0.2 * i);
    b.cyl(Math.sin(i * 2.1) * 0.03, Math.cos(i * 1.7) * 0.03, lr, y0, y0 + (h - potH) * 0.16, C.plant, C.plantTop, 8, i === layers - 1 ? EDGE_FAINT : null);
  }
}

function rug(b: Builder, w: number, d: number): void {
  b.box(-w / 2, w / 2, 0, 0.012, -d / 2, d / 2, C.fabric, C.fabricTop);
  const i = Math.min(0.12, Math.min(w, d) * 0.08);
  for (const [xa, za, xb, zb] of [
    [-w / 2 + i, -d / 2 + i, w / 2 - i, -d / 2 + i],
    [w / 2 - i, -d / 2 + i, w / 2 - i, d / 2 - i],
    [w / 2 - i, d / 2 - i, -w / 2 + i, d / 2 - i],
    [-w / 2 + i, d / 2 - i, -w / 2 + i, -d / 2 + i],
  ]) {
    b.seg(xa, 0.014, za, xb, 0.014, zb, EDGE_FURN);
  }
}

/** Straight stair rising towards -z (the back), with a handrail on the +x side. */
function stairs(b: Builder, w: number, d: number, h: number): void {
  const n = Math.max(3, Math.round(h / 0.18));
  const rise = h / n;
  const run = d / n;
  for (let i = 0; i < n; i++) {
    const z1 = d / 2 - run * i;
    const z0 = z1 - run;
    const y1 = rise * (i + 1);
    b.box(-w / 2, w / 2, 0, y1, z0, z1, C.wood, C.woodTop);
    b.seg(-w / 2, y1, z1, w / 2, y1, z1, EDGE_FURN);
  }
  b.seg(-w / 2, 0, d / 2, -w / 2, rise, d / 2, EDGE_FURN);
  // stringer lines along both sides
  for (const x of [-w / 2, w / 2]) b.seg(x, rise, d / 2, x, h, -d / 2 + run, EDGE_FAINT);
  // handrail and posts
  const rail = 0.9;
  const xr = w / 2 - 0.03;
  // the rail ends where the stair passes through the ceiling opening
  const last = Math.max(1, n - 4);
  b.seg(xr, rise + rail, d / 2 - run / 2, xr, rise * last + rail, d / 2 - run * (last - 0.5), EDGE_GLOW);
  for (let i = 0; i < last; i += 3) {
    const z = d / 2 - run * (i + 0.5);
    const y = rise * (i + 1);
    b.seg(xr, y, z, xr, y + rail, z, EDGE_FAINT);
  }
}

/** Half-turn stair: two parallel flights joined by a landing at the back. */
function stairsLanding(b: Builder, w: number, d: number, h: number): void {
  const steps = Math.max(6, Math.round(h / 0.18));
  const lowerSteps = Math.floor(steps / 2);
  const upperSteps = steps - lowerSteps;
  const rise = h / steps;
  const landingY = rise * lowerSteps;
  const gap = Math.min(0.16, w * 0.12);
  const flightW = (w - gap) / 2;
  // A landing roughly as deep as one flight is wide, while small custom sizes stay well formed.
  const landingD = Math.min(d * 0.34, Math.max(d * 0.22, flightW));
  const landingFront = -d / 2 + landingD;
  const runD = d - landingD;
  const lowerRun = runD / lowerSteps;
  const upperRun = runD / upperSteps;
  const left0 = -w / 2;
  const left1 = -gap / 2;
  const right0 = gap / 2;
  const right1 = w / 2;

  // First flight: from the front towards the landing at half-height.
  for (let i = 0; i < lowerSteps; i++) {
    const z1 = d / 2 - lowerRun * i;
    const z0 = z1 - lowerRun;
    const y1 = rise * (i + 1);
    b.box(left0, left1, 0, y1, z0, z1, C.white, C.whiteTop);
    b.seg(left0, y1, z1, left1, y1, z1, EDGE_FURN);
  }

  // Full-width chiếu nghỉ joins both flights.
  b.box(-w / 2, w / 2, 0, landingY, -d / 2, landingFront, C.white, C.whiteTop, EDGE_FURN);

  // Second flight turns 180° and rises from the landing back towards the front.
  for (let i = 0; i < upperSteps; i++) {
    const z0 = landingFront + upperRun * i;
    const z1 = z0 + upperRun;
    const y1 = landingY + rise * (i + 1);
    b.box(right0, right1, 0, y1, z0, z1, C.white, C.whiteTop);
    b.seg(right0, y1, z0, right1, y1, z0, EDGE_FURN);
  }

  const rail = Math.min(0.9, Math.max(0.55, h * 0.32));
  const lowerRails = [left0 + 0.03, left1 - 0.03] as const;
  const upperRails = [right0 + 0.03, right1 - 0.03] as const;
  // Rails on both sides make the central stairwell and the outer edges easy to read in 3D.
  for (const x of lowerRails) {
    // Meet the landing at its edge instead of stopping halfway across the last tread.
    b.seg(x, rise + rail, d / 2 - lowerRun / 2, x, landingY + rail, landingFront, EDGE_GLOW);
    for (let i = 0; i < lowerSteps; i += 3) {
      const z = d / 2 - lowerRun * (i + 0.5);
      const y = rise * (i + 1);
      b.seg(x, y, z, x, y + rail, z, EDGE_FAINT);
    }
  }
  const railSteps = Math.max(1, upperSteps - 3);
  for (const x of upperRails) {
    // Start at landing height so the rail rises smoothly from the horizontal landing guard.
    b.seg(x, landingY + rail, landingFront, x, landingY + rise * railSteps + rail, landingFront + upperRun * (railSteps - 0.5), EDGE_GLOW);
    for (let i = 0; i < railSteps; i += 3) {
      const z = landingFront + upperRun * (i + 0.5);
      const y = landingY + rise * (i + 1);
      b.seg(x, y, z, x, y + rail, z, EDGE_FAINT);
    }
  }

  // The inner rails join across the central opening. The outer rails continue around the back of
  // the landing, making both handrail runs one uninterrupted path through the half-turn.
  const lowerOuter = lowerRails[0];
  const lowerInner = lowerRails[1];
  const upperInner = upperRails[0];
  const upperOuter = upperRails[1];
  const landingBack = -d / 2 + 0.03;
  b.seg(lowerInner, landingY + rail, landingFront, upperInner, landingY + rail, landingFront, EDGE_GLOW);
  b.seg(lowerOuter, landingY + rail, landingFront, lowerOuter, landingY + rail, landingBack, EDGE_GLOW);
  b.seg(lowerOuter, landingY + rail, landingBack, upperOuter, landingY + rail, landingBack, EDGE_GLOW);
  b.seg(upperOuter, landingY + rail, landingBack, upperOuter, landingY + rail, landingFront, EDGE_GLOW);
  for (const [x, z] of [
    [lowerInner, landingFront],
    [upperInner, landingFront],
    [lowerOuter, landingFront],
    [lowerOuter, landingBack],
    [upperOuter, landingBack],
    [upperOuter, landingFront],
  ] as const) {
    b.seg(x, landingY, z, x, landingY + rail, z, EDGE_FAINT);
  }
}

function sideboard(b: Builder, w: number, d: number, h: number): void {
  legs(b, w, d, 0.12, 0.03, 0.04, C.metal);
  b.box(-w / 2, w / 2, 0.12, h, -d / 2, d / 2 - 0.02, C.wood, C.woodTop, EDGE_FURN);
  fronts(b, -w / 2, w / 2, 0.12, h, d / 2 - 0.02, Math.max(2, Math.round(w / 0.45)), h - 0.1, true);
}

function dresser(b: Builder, w: number, d: number, h: number): void {
  b.box(-w / 2, w / 2, 0.06, h, -d / 2, d / 2 - 0.02, C.wood, C.woodTop, EDGE_FURN);
  b.box(-w / 2 + 0.02, w / 2 - 0.02, 0, 0.06, -d / 2 + 0.02, d / 2 - 0.06, C.dark);
  const n = Math.max(3, Math.round((h - 0.06) / 0.22));
  const z = d / 2 - 0.02;
  for (let i = 1; i < n; i++) {
    const y = 0.06 + ((h - 0.06) / n) * i;
    b.seg(-w / 2, y, z, w / 2, y, z, EDGE_FAINT);
  }
  for (let i = 0; i < n; i++) {
    const y = 0.06 + ((h - 0.06) / n) * (i + 0.5);
    b.seg(-0.08, y, z + 0.012, 0.08, y, z + 0.012, EDGE_GLOW);
  }
}

function coatRack(b: Builder, w: number, d: number, h: number): void {
  // shoe bench, back panel with hooks, hat shelf
  b.box(-w / 2, w / 2, 0, 0.45, -d / 2, d / 2, C.wood, C.woodTop, EDGE_FURN);
  fronts(b, -w / 2, w / 2, 0.02, 0.45, d / 2, Math.max(2, Math.round(w / 0.5)), 0.38, true);
  b.box(-w / 2, w / 2, 0.45, h, -d / 2, -d / 2 + 0.03, C.body, C.bodyTop, EDGE_FURN);
  b.box(-w / 2, w / 2, h - 0.04, h, -d / 2, d / 2, C.wood, C.woodTop, EDGE_FURN);
  const hooks = Math.max(2, Math.round(w / 0.25));
  for (let i = 0; i < hooks; i++) {
    const x = -w / 2 + (w / hooks) * (i + 0.5);
    b.box(x - 0.015, x + 0.015, h - 0.32, h - 0.28, -d / 2 + 0.03, -d / 2 + 0.1, C.metal, C.metal);
  }
}

/** Bench with a back along the rear; `side` adds the second arm of a corner bench along -x. */
function bench(b: Builder, w: number, d: number, h: number, corner: boolean): void {
  const seat = 0.45;
  const depth = Math.min(0.5, corner ? d * 0.4 : d);
  const back = 0.08;
  // rear arm
  b.box(-w / 2, w / 2, 0, seat - 0.06, -d / 2, -d / 2 + depth, C.wood, C.woodTop, EDGE_FURN);
  b.box(-w / 2, w / 2, 0, h, -d / 2, -d / 2 + back, C.wood, C.woodTop, EDGE_FURN);
  b.box(-w / 2 + (corner ? depth : 0.02), w / 2 - 0.02, seat - 0.06, seat + 0.02, -d / 2 + back, -d / 2 + depth, C.cushion, C.cushion, EDGE_FAINT);
  if (corner) {
    // side arm along -x, meeting the rear arm in the corner
    b.box(-w / 2, -w / 2 + depth, 0, seat - 0.06, -d / 2 + depth, d / 2, C.wood, C.woodTop, EDGE_FURN);
    b.box(-w / 2, -w / 2 + back, 0, h, -d / 2 + back, d / 2, C.wood, C.woodTop, EDGE_FURN);
    b.box(-w / 2 + back, -w / 2 + depth, seat - 0.06, seat + 0.02, -d / 2 + back, d / 2 - 0.02, C.cushion, C.cushion, EDGE_FAINT);
  }
}

function barStool(b: Builder, w: number, d: number, h: number): void {
  const r = Math.min(w, d) / 2;
  b.cyl(0, 0, r * 0.8, 0, 0.02, C.metal, C.metal, 12);
  b.cyl(0, 0, 0.025, 0.02, h - 0.05, C.metal, C.metal, 6);
  b.cyl(0, 0, r * 0.75, h * 0.35, h * 0.35 + 0.015, C.metal, C.metal, 12, EDGE_FAINT);
  b.cyl(0, 0, r, h - 0.05, h, C.cushion, C.fabricTop, 14, EDGE_FURN);
}

function officeChair(b: Builder, w: number, d: number, h: number): void {
  const r = Math.min(w, d) / 2;
  // five-star base as two crossed bars and a hub, gas lift, seat and back
  b.box(-r, r, 0.04, 0.08, -0.03, 0.03, C.metal);
  b.box(-0.03, 0.03, 0.04, 0.08, -r, r, C.metal);
  b.cyl(0, 0, 0.06, 0.02, 0.1, C.dark, C.dark, 8);
  b.cyl(0, 0, 0.025, 0.1, 0.44, C.metal, C.metal, 6);
  b.box(-r * 0.75, r * 0.75, 0.44, 0.52, -r * 0.7, r * 0.75, C.fabric, C.cushion, EDGE_FURN);
  b.box(-r * 0.7, r * 0.7, 0.58, h, -r * 0.78, -r * 0.62, C.fabric, C.fabricTop, EDGE_FURN);
  b.box(-0.03, 0.03, 0.5, 0.62, -r * 0.72, -r * 0.62, C.metal);
}

function stool(b: Builder, w: number, d: number, h: number): void {
  legs(b, w, d, 0.08, 0.04, 0.05, C.wood);
  b.box(-w / 2, w / 2, 0.08, h, -d / 2, d / 2, C.fabric, C.cushion, EDGE_FURN);
}

function kitchenWall(b: Builder, w: number, d: number, h: number): void {
  // hangs above the worktop
  const y0 = 1.45;
  b.box(-w / 2, w / 2, y0, y0 + h, -d / 2, d / 2 - 0.02, C.body, C.bodyTop, EDGE_FURN);
  fronts(b, -w / 2, w / 2, y0, y0 + h, d / 2 - 0.02, Math.max(1, Math.round(w / 0.5)), y0 + 0.08);
}

function kitchenTall(b: Builder, w: number, d: number, h: number): void {
  b.box(-w / 2, w / 2, 0.02, h, -d / 2, d / 2 - 0.02, C.body, C.bodyTop, EDGE_FURN);
  b.box(-w / 2 + 0.02, w / 2 - 0.02, 0, 0.08, -d / 2 + 0.02, d / 2 - 0.06, C.dark);
  const z = d / 2 - 0.02;
  // oven with a dark glass door and a glowing handle, fronts above and below
  b.box(-w / 2 + 0.03, w / 2 - 0.03, 0.85, 1.45, z, z + 0.01, C.dark, C.dark, EDGE_GLOW);
  b.seg(-w / 2 + 0.08, 1.4, z + 0.02, w / 2 - 0.08, 1.4, z + 0.02, EDGE_GLOW);
  for (const y of [0.85, 1.45]) b.seg(-w / 2, y, z, w / 2, y, z, EDGE_FAINT);
  b.seg(w / 2 - 0.06, 0.5, z + 0.012, w / 2 - 0.06, 0.7, z + 0.012, EDGE_GLOW);
  b.seg(w / 2 - 0.06, 1.6, z + 0.012, w / 2 - 0.06, 1.8, z + 0.012, EDGE_GLOW);
}

/** A tall crockery/display cabinet with framed glass doors and visible shelves. */
function kitchenDisplay(b: Builder, w: number, d: number, h: number): void {
  const frame = Math.min(0.055, w * 0.075);
  const front = d / 2;
  const rear = -d / 2;
  const lower = Math.min(0.62, h * 0.3);
  // carcass and a closed lower cupboard
  b.box(-w / 2, w / 2, 0.02, h, rear, rear + 0.035, C.body, C.bodyTop, EDGE_FURN);
  b.box(-w / 2, -w / 2 + frame, 0.02, h, rear, front, C.body, C.bodyTop, EDGE_FURN);
  b.box(w / 2 - frame, w / 2, 0.02, h, rear, front, C.body, C.bodyTop, EDGE_FURN);
  b.box(-w / 2, w / 2, h - frame, h, rear, front, C.body, C.bodyTop, EDGE_FURN);
  b.box(-w / 2, w / 2, 0.02, lower, rear, front - 0.015, C.body, C.bodyTop, EDGE_FURN);
  b.box(-w / 2 + 0.02, w / 2 - 0.02, 0, 0.08, rear + 0.02, front - 0.04, C.dark);
  // lit display chamber: glass fronts, slim frames and three shelves
  b.box(-w / 2 + frame, w / 2 - frame, lower, h - frame, rear + 0.036, rear + 0.05, C.dark, C.dark);
  for (const y of [lower + (h - lower) * 0.25, lower + (h - lower) * 0.5, lower + (h - lower) * 0.75]) {
    b.box(-w / 2 + frame, w / 2 - frame, y - 0.012, y + 0.012, rear + 0.05, front - 0.025, C.glass, C.glass, EDGE_GLOW);
  }
  b.box(-w / 2 + frame, -frame * 0.35, lower + frame, h - frame * 1.5, front - 0.012, front, C.glass, C.glass, EDGE_FAINT);
  b.box(frame * 0.35, w / 2 - frame, lower + frame, h - frame * 1.5, front - 0.012, front, C.glass, C.glass, EDGE_FAINT);
  b.box(-frame * 0.35, frame * 0.35, lower, h - frame, front - 0.02, front + 0.005, C.metal, C.metal, EDGE_FURN);
  b.box(-w / 2, w / 2, lower - frame * 0.5, lower + frame * 0.5, front - 0.02, front + 0.005, C.body, C.bodyTop, EDGE_FURN);
  b.seg(-frame * 1.4, lower + (h - lower) * 0.46, front + 0.012, -frame * 1.4, lower + (h - lower) * 0.62, front + 0.012, EDGE_GLOW);
  b.seg(frame * 1.4, lower + (h - lower) * 0.46, front + 0.012, frame * 1.4, lower + (h - lower) * 0.62, front + 0.012, EDGE_GLOW);
  b.seg(0, 0.12, front + 0.012, 0, lower - 0.12, front + 0.012, EDGE_FAINT);
}

function island(b: Builder, w: number, d: number, h: number): void {
  const inner = d - 0.3;
  b.box(-w / 2 + 0.05, w / 2 - 0.05, 0.08, h - 0.04, -d / 2 + 0.02, -d / 2 + inner, C.body, C.bodyTop, EDGE_FURN);
  b.box(-w / 2 + 0.07, w / 2 - 0.07, 0, 0.08, -d / 2 + 0.04, -d / 2 + inner - 0.04, C.dark);
  fronts(b, -w / 2 + 0.05, w / 2 - 0.05, 0.08, h - 0.04, -d / 2 + inner, Math.max(2, Math.round(w / 0.6)), h - 0.2);
  // worktop overhangs on the front for bar stools
  b.box(-w / 2, w / 2, h - 0.04, h, -d / 2, d / 2, C.whiteTop, C.whiteTop, EDGE_FURN);
}

function dishwasher(b: Builder, w: number, d: number, h: number): void {
  b.box(-w / 2, w / 2, 0.02, h - 0.04, -d / 2, d / 2 - 0.02, C.body, C.bodyTop, EDGE_FURN);
  b.box(-w / 2 + 0.02, w / 2 - 0.02, 0, 0.08, -d / 2 + 0.02, d / 2 - 0.06, C.dark);
  b.seg(-w / 2 + 0.08, h - 0.12, d / 2 - 0.008, w / 2 - 0.08, h - 0.12, d / 2 - 0.008, EDGE_GLOW);
  b.box(-w / 2, w / 2, h - 0.04, h, -d / 2, d / 2, C.whiteTop, C.whiteTop, EDGE_FURN);
}

function laundry(b: Builder, w: number, d: number, h: number, dryer: boolean): void {
  b.box(-w / 2, w / 2, 0, h, -d / 2, d / 2 - 0.02, C.white, C.whiteTop, EDGE_FURN);
  const z = d / 2 - 0.012;
  // control panel line and a round door drawn on the front
  b.seg(-w / 2, h - 0.14, z, w / 2, h - 0.14, z, EDGE_FAINT);
  b.seg(w / 2 - 0.16, h - 0.07, z, w / 2 - 0.08, h - 0.07, z, EDGE_GLOW);
  const cy = (h - 0.14) / 2 + 0.04;
  const r = Math.min(w * 0.36, (h - 0.2) * 0.42);
  const n = 20;
  for (let i = 0; i < n; i++) {
    const a0 = (i / n) * Math.PI * 2;
    const a1 = ((i + 1) / n) * Math.PI * 2;
    b.seg(Math.cos(a0) * r, cy + Math.sin(a0) * r, z, Math.cos(a1) * r, cy + Math.sin(a1) * r, z, EDGE_GLOW);
    if (!dryer) b.seg(Math.cos(a0) * r * 0.72, cy + Math.sin(a0) * r * 0.72, z, Math.cos(a1) * r * 0.72, cy + Math.sin(a1) * r * 0.72, z, EDGE_FAINT);
  }
}

function bunkBed(b: Builder, w: number, d: number, h: number): void {
  const t = 0.05;
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) b.box(sx * (w / 2) - (sx > 0 ? t : 0), sx * (w / 2) + (sx < 0 ? t : 0), 0, h, sz * (d / 2) - (sz > 0 ? t : 0), sz * (d / 2) + (sz < 0 ? t : 0), C.wood, C.woodTop);
  for (const y of [0.25, h - 0.55]) {
    b.box(-w / 2, w / 2, y, y + 0.08, -d / 2, d / 2, C.wood, C.woodTop, EDGE_FURN);
    b.box(-w / 2 + 0.04, w / 2 - 0.04, y + 0.08, y + 0.24, -d / 2 + 0.05, d / 2 - 0.05, C.white, C.whiteTop, EDGE_FAINT);
    b.box(-w / 2 + 0.05, w / 2 - 0.05, y + 0.24, y + 0.33, -d / 2 + 0.08, -d / 2 + 0.4, C.whiteTop, C.whiteTop);
  }
  // guard rail on top and a ladder at the front
  b.box(-w / 2, w / 2, h - 0.2, h - 0.15, d / 2 - t, d / 2, C.wood, C.woodTop);
  const lx = w / 2 - 0.35;
  for (const x of [lx - 0.18, lx + 0.18]) b.seg(x, 0, d / 2 + 0.02, x, h - 0.15, d / 2 + 0.02, EDGE_FURN);
  for (let y = 0.3; y < h - 0.2; y += 0.28) b.seg(lx - 0.18, y, d / 2 + 0.02, lx + 0.18, y, d / 2 + 0.02, EDGE_FAINT);
}

function roundTable(b: Builder, w: number, d: number, h: number): void {
  const r = Math.min(w, d) / 2;
  b.cyl(0, 0, r * 0.4, 0, 0.03, C.metal, C.metal, 12);
  b.cyl(0, 0, 0.05, 0.03, h - 0.04, C.wood, C.wood, 8);
  b.cyl(0, 0, r, h - 0.04, h, C.wood, C.woodTop, 20, EDGE_FURN);
}

function coffeeTable(b: Builder, w: number, d: number, h: number): void {
  legs(b, w, d, h - 0.03, 0.04, 0.03, C.wood);
  b.box(-w / 2, w / 2, h - 0.03, h, -d / 2, d / 2, C.wood, C.woodTop, EDGE_FURN);
  b.box(-w / 2 + 0.05, w / 2 - 0.05, 0.1, 0.13, -d / 2 + 0.05, d / 2 - 0.05, C.body, C.bodyTop, EDGE_FAINT);
}

function tvWall(b: Builder, w: number, d: number, h: number): void {
  // flat screen on a wall bracket, centred at 1.3 m
  const y0 = 1.3 - h / 2;
  b.box(-0.12, 0.12, y0 + h * 0.3, y0 + h * 0.7, -d / 2, -d / 2 + 0.03, C.metal);
  b.box(-w / 2, w / 2, y0, y0 + h, -d / 2 + 0.03, d / 2, C.dark, C.dark, EDGE_GLOW);
}

/** Radiator on the wall (back at -z): panel with vertical fins, standing on short brackets. */
function radiator(b: Builder, w: number, d: number, h: number): void {
  const y0 = RADIATOR_Y;
  b.box(-w / 2 + 0.05, -w / 2 + 0.08, 0, y0, -d / 2, -d / 2 + 0.03, C.metal);
  b.box(w / 2 - 0.08, w / 2 - 0.05, 0, y0, -d / 2, -d / 2 + 0.03, C.metal);
  b.box(-w / 2, w / 2, y0, y0 + h, -d / 2 + 0.02, d / 2, C.white, C.whiteTop, EDGE_FURN);
  const n = Math.max(3, Math.round(w / 0.1));
  for (let i = 1; i < n; i++) {
    const x = -w / 2 + (w / n) * i;
    b.seg(x, y0 + 0.03, d / 2 + 0.002, x, y0 + h - 0.03, d / 2 + 0.002, EDGE_FAINT);
  }
}

/** Wall-mounted split air conditioner, with a dark outlet and movable-looking guide vanes. */
function airConditioner(b: Builder, w: number, d: number, h: number): void {
  const y0 = AIR_CONDITIONER_Y;
  const front = d / 2;
  // brackets against the wall
  b.box(-w * 0.34, -w * 0.27, y0 + h * 0.2, y0 + h * 0.75, -d / 2 - 0.015, -d / 2 + 0.025, C.metal);
  b.box(w * 0.27, w * 0.34, y0 + h * 0.2, y0 + h * 0.75, -d / 2 - 0.015, -d / 2 + 0.025, C.metal);
  // main white indoor unit and its front cover
  b.box(-w / 2, w / 2, y0, y0 + h, -d / 2, front, C.white, C.whiteTop, EDGE_FURN);
  b.seg(-w * 0.42, y0 + h * 0.82, front + 0.003, w * 0.42, y0 + h * 0.82, front + 0.003, EDGE_FAINT);
  // outlet, flap and vertical vanes along the underside/front
  const ventY0 = y0 + h * 0.08;
  const ventY1 = y0 + h * 0.27;
  b.box(-w * 0.43, w * 0.43, ventY0, ventY1, front - 0.018, front + 0.006, C.dark, C.dark, EDGE_FAINT);
  b.seg(-w * 0.42, ventY0 + h * 0.04, front + 0.009, w * 0.42, ventY1 - h * 0.025, front + 0.009, EDGE_GLOW);
  for (let i = 1; i < 8; i++) {
    const x = -w * 0.4 + w * 0.8 * (i / 8);
    b.seg(x, ventY0 + h * 0.025, front + 0.011, x + w * 0.018, ventY1 - h * 0.025, front + 0.011, EDGE_FAINT);
  }
  // small status LED
  b.seg(w * 0.37, y0 + h * 0.67, front + 0.006, w * 0.4, y0 + h * 0.67, front + 0.006, EDGE_GLOW);
}

/** Compact domestic outdoor water pump: motor, volute housing, inlet and top outlet on a base plate. */
function waterPump(b: Builder, w: number, d: number, h: number): void {
  const base = Math.min(0.045, h * 0.12);
  const motorDia = Math.min(w * 0.42, h * 0.48);
  const motorY0 = base + h * 0.13;
  const motorY1 = motorY0 + motorDia;
  // rubber feet and a weatherproof base plate
  for (const x of [-w * 0.32, w * 0.32]) b.box(x - w * 0.055, x + w * 0.055, 0, base, -d * 0.34, d * 0.3, C.dark);
  b.box(-w * 0.43, w * 0.43, base, base + h * 0.06, -d * 0.4, d * 0.36, C.metal, C.metal, EDGE_FURN);
  // electric motor, rear fan cover and cooling ribs
  b.lyingCyl("z", 0, -d * 0.13, motorY0, motorY1, d * 0.46, motorDia, C.body, C.bodyTop, 14, EDGE_FURN);
  b.lyingCyl("z", 0, -d * 0.39, motorY0 + motorDia * 0.08, motorY1 - motorDia * 0.08, d * 0.1, motorDia * 0.84, C.dark, C.metal, 12, EDGE_FAINT);
  for (let i = -2; i <= 2; i++) {
    const z = -d * 0.23 + i * d * 0.055;
    b.box(-motorDia * 0.54, motorDia * 0.54, motorY0 + motorDia * 0.43, motorY0 + motorDia * 0.57, z - d * 0.012, z + d * 0.012, C.metal, C.metal);
  }
  // round pump chamber at the front and the suction pipe facing forwards
  const headDia = Math.min(w * 0.55, h * 0.65);
  const headY0 = base + h * 0.08;
  b.lyingCyl("z", 0, d * 0.17, headY0, headY0 + headDia, d * 0.22, headDia, C.accent, C.bodyTop, 16, EDGE_FURN);
  b.lyingCyl("z", 0, d * 0.39, headY0 + headDia * 0.34, headY0 + headDia * 0.66, d * 0.22, headDia * 0.32, C.metal, C.dark, 12, EDGE_GLOW);
  // delivery outlet on top, with a short collar
  const outletX = w * 0.16;
  const outletZ = d * 0.13;
  const outletR = Math.min(w, d) * 0.075;
  b.cyl(outletX, outletZ, outletR * 1.35, headY0 + headDia * 0.72, headY0 + headDia * 0.82, C.accent, C.accent, 12, EDGE_FURN);
  b.cyl(outletX, outletZ, outletR, headY0 + headDia * 0.82, h, C.metal, C.metal, 12, EDGE_GLOW);
  // small live status window on the front of the pump head
  b.box(-w * 0.11, w * 0.11, headY0 + headDia * 0.58, headY0 + headDia * 0.72, d * 0.285, d * 0.3, C.dark, C.dark, EDGE_GLOW);
}

/** Vietnamese standing altar with a carved-looking front, incense bowl and raised canopy. */
function altar(b: Builder, w: number, d: number, h: number): void {
  const top = h * 0.68;
  const leg = Math.min(0.09, w * 0.08);
  // Four legs and the carved front apron leave the base open like a traditional tủ thờ.
  for (const x of [-w / 2 + leg, w / 2 - leg]) {
    for (const z of [-d / 2 + leg, d / 2 - leg]) b.loft([x - leg * 0.36, x + leg * 0.36, z - leg * 0.36, z + leg * 0.36], [x - leg / 2, x + leg / 2, z - leg / 2, z + leg / 2], 0, top - 0.03, C.wood, C.woodTop);
  }
  b.box(-w / 2, w / 2, top - 0.08, top, -d / 2, d / 2, C.wood, C.woodTop, EDGE_FURN);
  b.box(-w * 0.43, w * 0.43, h * 0.18, top - 0.1, d / 2 - 0.065, d / 2, C.wood, C.woodTop, EDGE_FURN);
  // Repeating panel lines and a central diamond suggest carved timber without costly meshes.
  for (const x of [-w * 0.28, 0, w * 0.28]) b.seg(x, h * 0.23, d / 2 + 0.004, x, top - 0.16, d / 2 + 0.004, EDGE_FAINT);
  b.seg(-w * 0.12, h * 0.4, d / 2 + 0.006, 0, h * 0.52, d / 2 + 0.006, EDGE_GLOW);
  b.seg(0, h * 0.52, d / 2 + 0.006, w * 0.12, h * 0.4, d / 2 + 0.006, EDGE_GLOW);
  b.seg(w * 0.12, h * 0.4, d / 2 + 0.006, 0, h * 0.28, d / 2 + 0.006, EDGE_GLOW);
  b.seg(0, h * 0.28, d / 2 + 0.006, -w * 0.12, h * 0.4, d / 2 + 0.006, EDGE_GLOW);
  // Incense bowl, three incense sticks and two brass candle holders.
  b.cyl(0, d * 0.06, Math.min(w, d) * 0.09, top, top + h * 0.075, C.accent, C.woodTop, 14, EDGE_GLOW);
  for (const x of [-w * 0.035, 0, w * 0.035]) b.box(x - 0.006, x + 0.006, top + h * 0.06, top + h * 0.2, d * 0.05, d * 0.065, C.accent);
  for (const x of [-w * 0.28, w * 0.28]) {
    b.cyl(x, d * 0.02, Math.min(w, d) * 0.035, top, top + h * 0.035, C.metal, C.metal, 10);
    b.cyl(x, d * 0.02, Math.min(w, d) * 0.017, top + h * 0.035, top + h * 0.15, C.metal, C.metal, 8);
  }
  // Ancestral tablet/back panel and a layered canopy.
  b.box(-w * 0.18, w * 0.18, top + h * 0.04, h * 0.85, -d * 0.33, -d * 0.27, C.wood, C.woodTop, EDGE_GLOW);
  b.box(-w * 0.46, w * 0.46, h * 0.875, h * 0.92, -d * 0.42, d * 0.36, C.wood, C.woodTop, EDGE_FURN);
  for (const x of [-w * 0.4, w * 0.4]) b.box(x - leg / 2, x + leg / 2, top, h * 0.92, -d * 0.36, -d * 0.26, C.wood, C.woodTop, EDGE_FURN);
  b.loft([-w / 2, w / 2, -d / 2, d * 0.42], [-w * 0.42, w * 0.42, -d * 0.42, d * 0.31], h * 0.92, h, C.wood, C.woodTop, EDGE_FURN);
}

/** Compact altar shelf mounted on a wall, with a back panel and incense bowl. */
function wallAltar(b: Builder, w: number, d: number, h: number): void {
  const shelf = h * 0.18;
  b.box(-w / 2, w / 2, shelf, shelf + h * 0.14, -d / 2, d / 2, C.wood, C.woodTop, EDGE_FURN);
  b.box(-w * 0.43, w * 0.43, shelf + h * 0.14, h * 0.86, -d / 2, -d / 2 + Math.min(0.05, d * 0.18), C.wood, C.woodTop, EDGE_FURN);
  // Two angled braces support the shelf against the wall.
  for (const x of [-w * 0.36, w * 0.36]) {
    b.box(x - 0.025, x + 0.025, 0, shelf, -d / 2, -d * 0.18, C.wood, C.woodTop, EDGE_FURN);
    b.seg(x, h * 0.02, -d * 0.18, x, shelf, d * 0.34, EDGE_FURN);
  }
  b.loft([-w / 2, w / 2, -d / 2, d / 2], [-w * 0.42, w * 0.42, -d * 0.42, d * 0.36], h * 0.86, h, C.wood, C.woodTop, EDGE_FURN);
  b.cyl(0, d * 0.08, Math.min(w, d) * 0.09, shelf + h * 0.14, shelf + h * 0.28, C.accent, C.woodTop, 12, EDGE_GLOW);
  for (const x of [-w * 0.03, 0, w * 0.03]) b.box(x - 0.005, x + 0.005, shelf + h * 0.25, shelf + h * 0.5, d * 0.075, d * 0.09, C.accent);
}

function shoeCabinet(b: Builder, w: number, d: number, h: number): void {
  // Recessed plinth and shallow ventilation gaps keep it from reading as one solid block.
  b.box(-w * 0.43, w * 0.43, 0, h * 0.06, -d * 0.34, d * 0.34, C.dark);
  cabinet(b, w, d, h - 0.025, Math.max(2, Math.round(w / 0.45)), h * 0.55, true);
  for (const y of [h * 0.32, h * 0.63]) b.seg(-w / 2 + 0.03, y, d / 2 + 0.003, w / 2 - 0.03, y, d / 2 + 0.003, EDGE_FAINT);
  for (const x of [-w * 0.25, w * 0.25]) {
    for (let i = -1; i <= 1; i++) b.seg(x - w * 0.07, h * (0.32 + i * 0.018), d / 2 + 0.006, x + w * 0.07, h * (0.32 + i * 0.018), d / 2 + 0.006, EDGE_FAINT);
  }
  b.box(-w / 2, w / 2, h - 0.025, h, -d / 2, d / 2, C.woodTop, C.woodTop, EDGE_GLOW);
}

/** Small step-through motorbike, facing +z. */
function motorbike(b: Builder, w: number, d: number, h: number): void {
  const wheel = Math.min(w * 0.58, d * 0.22, h * 0.42);
  const axle = w * 0.66;
  const frontZ = d * 0.34;
  const rearZ = -d * 0.34;
  for (const z of [rearZ, frontZ]) {
    b.lyingCyl("x", 0, z, 0, wheel, axle, wheel, C.dark, C.metal, 14, EDGE_FURN);
    b.lyingCyl("x", 0, z, wheel * 0.16, wheel * 0.84, axle + 0.012, wheel * 0.46, C.metal, C.metal, 12, EDGE_FAINT);
  }
  // Step-through fairing, footboard and rear engine casing.
  b.loft([-w * 0.3, w * 0.3, rearZ, d * 0.12], [-w * 0.2, w * 0.2, -d * 0.18, d * 0.06], wheel * 0.45, h * 0.58, C.body, C.bodyTop, EDGE_FURN);
  b.box(-w * 0.3, w * 0.3, wheel * 0.37, wheel * 0.44, -d * 0.08, d * 0.22, C.dark, C.metal, EDGE_FAINT);
  b.lyingCyl("z", w * 0.24, rearZ - d * 0.04, wheel * 0.2, wheel * 0.47, d * 0.4, wheel * 0.25, C.metal, C.dark, 10, EDGE_FAINT);
  b.pad(-w * 0.3, w * 0.3, h * 0.52, h * 0.62, -d * 0.25, d * 0.05, C.dark, C.fabricTop, 0.025, EDGE_FURN);
  // Fork, suspension and wheel guards make the two wheels read as one vehicle.
  b.seg(-w * 0.18, h * 0.48, d * 0.02, -w * 0.08, h * 0.86, frontZ, EDGE_FURN);
  b.seg(w * 0.18, h * 0.48, d * 0.02, w * 0.08, h * 0.86, frontZ, EDGE_FURN);
  b.seg(-w * 0.19, wheel * 0.63, rearZ, -w * 0.21, h * 0.54, -d * 0.12, EDGE_FAINT);
  b.seg(w * 0.19, wheel * 0.63, rearZ, w * 0.21, h * 0.54, -d * 0.12, EDGE_FAINT);
  b.seg(-w * 0.36, h * 0.9, frontZ, w * 0.36, h * 0.9, frontZ, EDGE_GLOW);
  b.box(-w * 0.23, w * 0.23, h * 0.72, h * 0.98, frontZ - d * 0.07, frontZ + d * 0.07, C.body, C.bodyTop, EDGE_FURN);
  b.cyl(0, frontZ + d * 0.075, Math.min(w, d) * 0.07, h * 0.82, h * 0.94, C.white, C.accent, 12, EDGE_GLOW);
  // Mirrors and rear rack, common on everyday Vietnamese step-through bikes.
  for (const sx of [-1, 1]) {
    b.seg(sx * w * 0.22, h * 0.9, frontZ, sx * w * 0.39, h, frontZ - d * 0.04, EDGE_FURN);
    b.cyl(sx * w * 0.39, frontZ - d * 0.04, w * 0.045, h * 0.97, h, C.glass, C.metal, 10, EDGE_GLOW);
  }
  b.seg(-w * 0.31, h * 0.66, -d * 0.31, w * 0.31, h * 0.66, -d * 0.31, EDGE_FURN);
}

function ceilingFan(b: Builder, w: number, d: number, h: number): void {
  const y = h * 0.18;
  b.cyl(0, 0, Math.min(w, d) * 0.115, y, h * 0.62, C.body, C.bodyTop, 16, EDGE_FURN);
  b.cyl(0, 0, Math.min(w, d) * 0.025, h * 0.7, h, C.metal, C.metal, 8);
}

function floorFan(b: Builder, w: number, d: number, h: number): void {
  b.loft([-w * 0.4, w * 0.4, -d * 0.33, d * 0.33], [-w * 0.34, w * 0.34, -d * 0.28, d * 0.28], 0, h * 0.045, C.body, C.metal, EDGE_FURN);
  b.cyl(0, 0, Math.min(w, d) * 0.055, h * 0.04, h * 0.62, C.metal, C.metal, 10);
  b.box(-w * 0.13, w * 0.13, h * 0.06, h * 0.14, -d * 0.2, d * 0.2, C.body, C.bodyTop, EDGE_FAINT);
  for (const x of [-w * 0.07, 0, w * 0.07]) b.cyl(x, d * 0.12, w * 0.018, h * 0.14, h * 0.155, C.accent, C.accent, 8, EDGE_GLOW);
  const cy = h * 0.78;
  const r = Math.min(w, h * 0.42) * 0.46;
  const cageZ = d * 0.075;
  // A short neck and rear motor make the head read as a domestic pedestal fan, not two floating rings.
  b.box(-w * 0.085, w * 0.085, h * 0.58, cy - r * 0.18, -d * 0.1, d * 0.015, C.body, C.bodyTop, EDGE_FURN);
  b.lyingCyl("z", 0, -d * 0.11, cy - r * 0.3, cy + r * 0.3, d * 0.24, r * 0.6, C.body, C.bodyTop, 16, EDGE_FURN);
  // Shallow front and rear guards, joined at four points, keep the cage visually thin.
  for (const z of [-cageZ, cageZ]) {
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * Math.PI * 2;
      b.seg(Math.cos(a) * r * 0.18, cy + Math.sin(a) * r * 0.18, z, Math.cos(a) * r, cy + Math.sin(a) * r, z, EDGE_FAINT);
    }
    ring(b, 0, cy, r, z, 32);
    ring(b, 0, cy, r * 0.86, z, 32);
    ring(b, 0, cy, r * 0.18, z, 18);
  }
  for (const a of [0, Math.PI / 2, Math.PI, (Math.PI * 3) / 2]) {
    const x = Math.cos(a) * r;
    const y = cy + Math.sin(a) * r;
    b.seg(x, y, -cageZ, x, y, cageZ, EDGE_FURN);
  }
}

/** Moving blades of a built-in fan, centred on its rotation axis for the viewer to spin as one group. */
export function pushFanRotor(buf: GeoBuffer, lines: LineBuffer, type: "fan_ceiling" | "fan_floor", w: number, d: number, h: number): void {
  if (type === "fan_ceiling") {
    const b = new Builder(buf, lines, (x, z) => [x, z]);
    const bladeW = Math.min(w, d) * 0.13;
    // Three tapered blades have a natural silhouette while remaining light enough for live animation.
    for (const a of [0, 120, 240]) {
      b.rotated(0, 0, a).loft([w * 0.08, w * 0.48, -bladeW * 0.52, bladeW * 0.52], [w * 0.12, w * 0.46, -bladeW * 0.32, bladeW * 0.32], 0, h * 0.07, C.wood, C.woodTop, EDGE_FURN);
    }
    b.cyl(0, 0, Math.min(w, d) * 0.14, -h * 0.035, h * 0.08, C.body, C.bodyTop, 18, EDGE_GLOW);
    return;
  }

  const r = Math.min(w, h * 0.42) * 0.46;
  const z0 = -Math.max(0.006, d * 0.012);
  const z1 = -z0;
  const front = new Color(C.bodyTop);
  const side = new Color(C.body);
  const P = (radius: number, angle: number): [number, number] => [Math.cos(angle) * radius, Math.sin(angle) * radius];
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2;
    const poly = [P(r * 0.14, a - 0.12), P(r * 0.46, a - 0.34), P(r * 0.84, a - 0.16), P(r * 0.72, a + 0.22), P(r * 0.24, a + 0.34)];
    const V = (p: [number, number], z: number) => [p[0], p[1], z];
    // Three broad swept blades are closer to a common household fan than the old star shape.
    for (let j = 1; j < poly.length - 1; j++) {
      buf.tri(V(poly[0], z1), V(poly[j], z1), V(poly[j + 1], z1), front);
      buf.tri(V(poly[0], z0), V(poly[j + 1], z0), V(poly[j], z0), side);
    }
    for (let j = 0; j < poly.length; j++) {
      const k = (j + 1) % poly.length;
      buf.tri(V(poly[j], z0), V(poly[k], z1), V(poly[k], z0), side);
      buf.tri(V(poly[j], z0), V(poly[j], z1), V(poly[k], z1), side);
      lines.seg(V(poly[j], z1), V(poly[k], z1), EDGE_FURN, ALWAYS);
    }
  }
  const b = new Builder(buf, lines, (x, z) => [x, z]);
  b.lyingCyl("z", 0, 0, -r * 0.14, r * 0.14, d * 0.1, r * 0.28, C.body, C.bodyTop, 14, EDGE_GLOW);
}

/** Horizontal wall-mounted storage water heater with pipes and status lamp. */
function waterHeater(b: Builder, w: number, d: number, h: number): void {
  const dia = Math.min(d * 0.88, h * 0.92);
  const y0 = (h - dia) / 2;
  b.lyingCyl("x", 0, 0, y0, y0 + dia, w * 0.9, dia, C.white, C.whiteTop, 22, EDGE_FURN);
  // End caps, wall brackets, hot/cold pipes and a small thermostat panel.
  for (const x of [-w * 0.46, w * 0.46]) b.lyingCyl("x", x, 0, y0 + dia * 0.04, y0 + dia * 0.96, w * 0.035, dia * 0.92, C.white, C.whiteTop, 18, EDGE_FAINT);
  for (const x of [-w * 0.28, w * 0.28]) b.box(x - 0.025, x + 0.025, 0, y0 + dia * 0.25, -d * 0.42, -d * 0.28, C.metal, C.metal);
  for (const [x, color] of [[-w * 0.2, C.accent], [w * 0.2, C.fabricTop]] as [number, number][]) {
    b.cyl(x, d * 0.05, Math.min(w, d) * 0.025, 0, y0 + dia * 0.18, color, color, 10, EDGE_FAINT);
    b.cyl(x, d * 0.05, Math.min(w, d) * 0.04, y0 + dia * 0.14, y0 + dia * 0.2, C.metal, C.metal, 10);
  }
  b.box(w * 0.18, w * 0.4, y0 + dia * 0.38, y0 + dia * 0.68, d * 0.43, d * 0.48, C.body, C.glass, EDGE_GLOW);
  b.seg(w * 0.24, y0 + dia * 0.53, d * 0.485, w * 0.35, y0 + dia * 0.53, d * 0.485, EDGE_GLOW);
}

function dryingRack(b: Builder, w: number, d: number, h: number): void {
  const t = Math.min(0.035, w * 0.025);
  const x = w / 2 - t;
  for (const sx of [-1, 1]) {
    b.box(sx * x - t, sx * x + t, 0, h, -d / 2, -d / 2 + t * 2, C.metal, C.metal, EDGE_FURN);
    b.box(sx * x - t, sx * x + t, 0, h, d / 2 - t * 2, d / 2, C.metal, C.metal, EDGE_FURN);
    for (const z of [-d / 2 + t, d / 2 - t]) b.box(sx * x - t * 2.2, sx * x + t * 2.2, 0, t * 1.2, z - t * 2.5, z + t * 2.5, C.dark, C.dark);
  }
  for (let i = 0; i < 7; i++) {
    const z = -d / 2 + t + ((d - 2 * t) * i) / 6;
    b.box(-w / 2 + t, w / 2 - t, h - t * 2, h, z - t / 2, z + t / 2, C.metal, C.metal, EDGE_FAINT);
  }
  b.seg(-w / 2, 0.05, -d / 2, w / 2, h - 0.05, -d / 2, EDGE_FAINT);
  b.seg(w / 2, 0.05, -d / 2, -w / 2, h - 0.05, -d / 2, EDGE_FAINT);
  b.seg(-w / 2, 0.05, d / 2, w / 2, h - 0.05, d / 2, EDGE_FAINT);
  b.seg(w / 2, 0.05, d / 2, -w / 2, h - 0.05, d / 2, EDGE_FAINT);
}

function shoeBench(b: Builder, w: number, d: number, h: number): void {
  const frame = Math.min(0.045, w * 0.04);
  for (const x of [-w / 2 + frame, w / 2 - frame]) b.box(x - frame, x + frame, 0, h * 0.64, -d / 2 + frame, d / 2 - frame, C.wood, C.woodTop, EDGE_FURN);
  for (const y of [h * 0.18, h * 0.4]) b.box(-w / 2 + frame, w / 2 - frame, y - frame / 2, y + frame / 2, -d / 2 + frame, d / 2 - frame, C.wood, C.woodTop, EDGE_FAINT);
  const n = Math.max(2, Math.round(w / 0.35));
  for (let i = 1; i < n; i++) b.seg(-w / 2 + (w * i) / n, h * 0.08, d / 2 + 0.003, -w / 2 + (w * i) / n, h * 0.58, d / 2 + 0.003, EDGE_FAINT);
  b.pad(-w / 2, w / 2, h * 0.62, h, -d / 2, d / 2, C.cushion, C.fabricTop, 0.025, EDGE_FURN);
}

function roomDivider(b: Builder, w: number, d: number, h: number): void {
  const frame = Math.min(0.05, w * 0.035);
  b.box(-w / 2, w / 2, 0, frame, -d / 2, d / 2, C.wood, C.woodTop, EDGE_FURN);
  b.box(-w / 2, w / 2, h - frame, h, -d / 2, d / 2, C.wood, C.woodTop, EDGE_FURN);
  const n = Math.max(5, Math.round(w / 0.22));
  for (let i = 0; i < n; i++) {
    const x = -w / 2 + (w * (i + 0.5)) / n;
    b.box(x - frame / 2, x + frame / 2, frame, h - frame, -d / 2, d / 2, i % 2 ? C.wood : C.body, C.woodTop, EDGE_FAINT);
  }
}

function rangeHood(b: Builder, w: number, d: number, h: number): void {
  b.box(-w * 0.16, w * 0.16, h * 0.42, h, -d / 2, -d * 0.18, C.metal, C.metal, EDGE_FURN);
  b.loft([-w / 2, w / 2, -d / 2, d / 2], [-w * 0.18, w * 0.18, -d / 2, -d * 0.1], 0, h * 0.48, C.metal, C.whiteTop, EDGE_FURN);
  b.box(-w * 0.4, w * 0.4, 0, h * 0.06, d * 0.18, d / 2, C.dark, C.dark, EDGE_GLOW);
}

function microwave(b: Builder, w: number, d: number, h: number): void {
  b.box(-w / 2, w / 2, 0, h, -d / 2, d / 2, C.body, C.bodyTop, EDGE_FURN);
  b.box(-w * 0.4, w * 0.18, h * 0.17, h * 0.82, d / 2, d / 2 + 0.006, C.dark, C.glass, EDGE_GLOW);
  b.cyl(w * 0.34, d / 2 + 0.008, Math.min(w, h) * 0.055, h * 0.58, h * 0.69, C.accent, C.accent, 10, EDGE_GLOW);
  b.seg(w * 0.28, h * 0.34, d / 2 + 0.009, w * 0.4, h * 0.34, d / 2 + 0.009, EDGE_FAINT);
}

function waterPurifier(b: Builder, w: number, d: number, h: number): void {
  // Upright RO cabinet with a glass front and a single small faucet on its top, common in domestic
  // Sunhouse-style purifiers. `h` includes the faucet; the cabinet itself is roughly one metre high.
  const cabinetH = h * 0.8;
  const front = d / 2;
  b.box(-w * 0.46, w * 0.46, 0.025, cabinetH, -d / 2, front, C.white, C.whiteTop, EDGE_FURN);
  b.box(-w * 0.48, w * 0.48, 0, 0.035, -d * 0.44, d * 0.44, C.dark, C.dark);
  // Bright glass-front door, split subtly into service and branding panels.
  b.box(-w * 0.42, w * 0.42, 0.055, cabinetH - 0.035, front, front + 0.012, C.white, C.whiteTop, EDGE_FURN);
  b.seg(-w * 0.4, cabinetH * 0.28, front + 0.014, w * 0.4, cabinetH * 0.28, front + 0.014, EDGE_FAINT);
  b.seg(-w * 0.28, cabinetH * 0.58, front + 0.015, w * 0.28, cabinetH * 0.58, front + 0.015, EDGE_GLOW);
  b.seg(-w * 0.2, cabinetH * 0.62, front + 0.015, w * 0.2, cabinetH * 0.62, front + 0.015, EDGE_FAINT);
  // Bright glass top and a subtle circular drip area directly under the outlet.
  b.box(-w / 2, w / 2, cabinetH - 0.025, cabinetH, -d / 2, d / 2, C.white, C.whiteTop, EDGE_FURN);

  // A solid gooseneck faucet. Its curved tube is deliberately larger than a line outline so the
  // water outlet stays obvious in the normal isometric demo view.
  const pipe = Math.min(0.012, w * 0.03);
  const faucetX = w * 0.1;
  const stemZ = -d * 0.16;
  const tipZ = d * 0.08;
  const silver = 0x6684ad;
  b.cyl(faucetX, stemZ, pipe * 1.55, cabinetH, cabinetH + pipe * 1.8, silver, silver, 12, EDGE_FURN);
  b.cyl(faucetX, tipZ, w * 0.16, cabinetH, cabinetH + 0.01, C.whiteTop, C.whiteTop, 18, EDGE_FAINT);
  b.seg(faucetX - w * 0.1, cabinetH + 0.012, tipZ, faucetX + w * 0.1, cabinetH + 0.012, tipZ, EDGE_FAINT);
  b.seg(faucetX, cabinetH + 0.012, tipZ - d * 0.11, faucetX, cabinetH + 0.012, tipZ + d * 0.11, EDGE_FAINT);
  const archY = h * 0.925;
  const archRise = h * 0.055;
  const centreZ = (stemZ + tipZ) / 2;
  const radiusZ = (tipZ - stemZ) / 2;
  const path: [number, number][] = [[cabinetH + pipe, stemZ], [archY, stemZ]];
  for (let i = 1; i <= 8; i++) {
    const a = Math.PI - (Math.PI * i) / 8;
    path.push([archY + Math.sin(a) * archRise, centreZ + Math.cos(a) * radiusZ]);
  }
  // The free outlet ends well above the top instead of closing into a handle-like loop.
  path.push([h * 0.89, tipZ]);
  b.tubeYZ(faucetX, path, pipe, silver, 10);
  b.cyl(faucetX, tipZ, pipe * 1.25, h * 0.89 - pipe, h * 0.905, C.dark, silver, 10, EDGE_FAINT);
  // Short solid lever beside the faucet base.
  b.lyingCyl("x", faucetX + w * 0.055, stemZ, cabinetH + pipe * 1.6, cabinetH + pipe * 2.5, w * 0.15, pipe * 0.9, C.dark, silver, 8);
}

function airPurifier(b: Builder, w: number, d: number, h: number): void {
  b.pad(-w / 2, w / 2, 0, h, -d / 2, d / 2, C.white, C.whiteTop, Math.min(0.04, w * 0.1), EDGE_FURN);
  const front = d / 2 + 0.006;
  b.cyl(0, d / 2, w * 0.095, h * 0.69, h * 0.705, C.dark, C.dark, 18, EDGE_GLOW);
  for (let i = 0; i < 7; i++) {
    const y = h * (0.16 + i * 0.055);
    b.seg(-w * 0.34, y, front, w * 0.34, y, front, EDGE_FAINT);
  }
  for (let i = -3; i <= 3; i++) b.seg(i * w * 0.085, h + 0.003, -d * 0.27, i * w * 0.085, h + 0.003, d * 0.22, EDGE_FAINT);
}

function smartSpeaker(b: Builder, w: number, d: number, h: number): void {
  const r = Math.min(w, d) * 0.46;
  b.cyl(0, 0, r, h * 0.06, h * 0.9, C.dark, C.fabricTop, 18, EDGE_FURN);
  b.cyl(0, 0, r * 0.94, h * 0.9, h, C.dark, C.dark, 18, EDGE_GLOW);
  b.cyl(0, 0, r * 0.72, h, h + 0.006, C.dark, C.dark, 18, EDGE_FAINT);
  for (const x of [-w * 0.12, w * 0.12]) b.cyl(x, 0, w * 0.014, h + 0.007, h + 0.01, C.white, C.white, 8);
}

function securityCamera(b: Builder, w: number, d: number, h: number): void {
  const y0 = 1.85;
  b.box(-w * 0.28, w * 0.28, y0, y0 + h * 0.7, -d / 2, -d / 2 + d * 0.12, C.white, C.whiteTop, EDGE_FURN);
  b.box(-w * 0.08, w * 0.08, y0 + h * 0.3, y0 + h * 0.45, -d / 2 + d * 0.1, 0, C.metal, C.metal, EDGE_FAINT);
  b.lyingCyl("z", 0, d * 0.16, y0 + h * 0.17, y0 + h * 0.78, d * 0.58, h * 0.58, C.white, C.whiteTop, 14, EDGE_FURN);
  b.lyingCyl("z", 0, d * 0.47, y0 + h * 0.28, y0 + h * 0.67, d * 0.08, h * 0.38, C.dark, C.dark, 16, EDGE_GLOW);
  b.lyingCyl("z", 0, d * 0.515, y0 + h * 0.38, y0 + h * 0.57, d * 0.025, h * 0.18, C.accent, C.dark, 14);
}

function smartLock(b: Builder, w: number, d: number, h: number): void {
  const y0 = 0.95;
  const front = d / 2;
  b.pad(-w / 2, w / 2, y0, y0 + h, -d / 2, front, C.dark, C.metal, Math.min(0.018, w * 0.12), EDGE_FURN);
  for (let row = 0; row < 3; row++) for (let col = 0; col < 3; col++) {
    const x = (col - 1) * w * 0.22;
    const y = y0 + h * (0.7 - row * 0.105);
    b.seg(x - w * 0.025, y, front + 0.005, x + w * 0.025, y, front + 0.005, EDGE_GLOW);
  }
  b.cyl(0, front, w * 0.12, y0 + h * 0.22, y0 + h * 0.235, C.accent, C.dark, 14, EDGE_GLOW);
  b.lyingCyl("x", w * 0.22, front + d * 0.12, y0 + h * 0.31, y0 + h * 0.4, w * 0.75, h * 0.085, C.metal, C.metal, 10, EDGE_FURN);
}

function smartCurtain(b: Builder, w: number, d: number, h: number): void {
  const trackY = h * 0.96;
  b.lyingCyl("x", 0, -d * 0.18, trackY, h, w, d * 0.16, C.metal, C.metal, 10, EDGE_FURN);
  b.box(-w * 0.06, w * 0.06, trackY - h * 0.055, trackY + h * 0.015, -d * 0.28, d * 0.02, C.dark, C.dark, EDGE_GLOW);
  const gap = w * 0.12;
  const folds = 6;
  for (const side of [-1, 1]) {
    const x0 = side < 0 ? -w / 2 : gap;
    const x1 = side < 0 ? -gap : w / 2;
    const step = (x1 - x0) / folds;
    for (let i = 0; i < folds; i++) {
      const a = x0 + i * step;
      const z = i % 2 ? d * 0.12 : -d * 0.04;
      b.box(a, a + step * 0.82, h * 0.04, trackY, z - d * 0.18, z + d * 0.18, C.fabric, C.fabricTop, i === 0 || i === folds - 1 ? EDGE_FURN : null);
    }
  }
}

function kitchenCorner(b: Builder, w: number, d: number, h: number): void {
  const arm = Math.max(0.42, Math.min(w, d) * 0.46);
  b.box(-w / 2, w / 2, 0, h - 0.04, -d / 2, -d / 2 + arm, C.body, C.bodyTop, EDGE_FURN);
  b.box(-w / 2, -w / 2 + arm, 0, h - 0.04, -d / 2 + arm, d / 2, C.body, C.bodyTop, EDGE_FURN);
  b.box(-w / 2, w / 2, h - 0.04, h, -d / 2, -d / 2 + arm, C.whiteTop, C.whiteTop, EDGE_GLOW);
  b.box(-w / 2, -w / 2 + arm, h - 0.04, h, -d / 2 + arm, d / 2, C.whiteTop, C.whiteTop, EDGE_GLOW);
  b.seg(-w / 2 + arm, 0.08, -d / 2 + arm, -w / 2 + arm, h - 0.08, -d / 2 + arm, EDGE_FAINT);
  // cabinet fronts follow both arms so the corner reads clearly in 3D
  const zFront = -d / 2 + arm + 0.006;
  const xFront = -w / 2 + arm + 0.006;
  for (let i = 1; i < 3; i++) {
    const x = -w / 2 + arm + ((w - arm) * i) / 3;
    b.seg(x, 0.08, zFront, x, h - 0.08, zFront, EDGE_FAINT);
    const z = -d / 2 + arm + ((d - arm) * i) / 3;
    b.seg(xFront, 0.08, z, xFront, h - 0.08, z, EDGE_FAINT);
  }
  b.seg(-w / 2 + arm + 0.08, h * 0.72, zFront + 0.004, -w / 2 + arm + 0.22, h * 0.72, zFront + 0.004, EDGE_GLOW);
  b.seg(xFront + 0.004, h * 0.72, -d / 2 + arm + 0.08, xFront + 0.004, h * 0.72, -d / 2 + arm + 0.22, EDGE_GLOW);
}

function vanity(b: Builder, w: number, d: number, h: number): void {
  const tableH = Math.min(0.76, h * 0.52);
  b.box(-w / 2, w / 2, tableH - 0.06, tableH, -d / 2, d / 2, C.wood, C.woodTop, EDGE_FURN);
  for (const x of [-w / 2 + 0.05, w / 2 - 0.05]) b.box(x - 0.025, x + 0.025, 0, tableH - 0.06, -d / 2 + 0.04, d / 2 - 0.04, C.wood);
  b.box(-w * 0.32, w * 0.32, tableH + 0.12, h, -d / 2, -d / 2 + 0.025, C.glass, C.glass, EDGE_GLOW);
  b.box(-w * 0.2, w * 0.2, tableH - 0.01, tableH + 0.09, -d * 0.1, d * 0.18, C.body, C.bodyTop, EDGE_FURN);
}

function crib(b: Builder, w: number, d: number, h: number): void {
  const rail = Math.min(0.045, w * 0.06);
  b.box(-w / 2, w / 2, h * 0.24, h * 0.32, -d / 2, d / 2, C.wood, C.woodTop, EDGE_FURN);
  b.pad(-w / 2 + rail, w / 2 - rail, h * 0.32, h * 0.42, -d / 2 + rail, d / 2 - rail, C.white, C.whiteTop, 0.025);
  for (const z of [-d / 2, d / 2]) {
    for (let i = 0; i < 7; i++) {
      const x = -w / 2 + rail + ((w - 2 * rail) * i) / 6;
      b.box(x - rail / 2, x + rail / 2, h * 0.3, h, z - rail / 2, z + rail / 2, C.wood, C.woodTop, EDGE_FAINT);
    }
    b.box(-w / 2, w / 2, h - rail, h, z - rail, z + rail, C.wood, C.woodTop, EDGE_FURN);
  }
  for (const x of [-w / 2, w / 2]) b.box(x - rail, x + rail, 0, h, -d / 2, d / 2, C.wood, C.woodTop, EDGE_FURN);
}

function cornerSofa(b: Builder, w: number, d: number, h: number): void {
  const depth = Math.min(0.9, d * 0.53);
  const chaise = Math.min(0.9, w * 0.38);
  const seat = h * 0.52;
  b.pad(-w / 2, w / 2, 0.08, seat, -d / 2, -d / 2 + depth, C.fabric, C.fabricTop, 0.04, EDGE_FURN);
  b.pad(-w / 2, -w / 2 + chaise, 0.08, seat, -d / 2 + depth, d / 2, C.fabric, C.fabricTop, 0.04, EDGE_FURN);
  b.box(-w / 2, w / 2, seat, h, -d / 2, -d / 2 + Math.min(0.2, depth * 0.25), C.fabric, C.fabricTop, EDGE_FURN);
  b.box(-w / 2, -w / 2 + Math.min(0.2, chaise * 0.25), seat, h, -d / 2 + depth, d / 2, C.fabric, C.fabricTop, EDGE_FURN);
  b.seg(-w / 2 + chaise, seat + 0.01, -d / 2 + depth * 0.1, -w / 2 + chaise, seat + 0.01, -d / 2 + depth * 0.9, EDGE_FAINT);
}

function sofaBed(b: Builder, w: number, d: number, h: number): void {
  const seat = h * 0.5;
  b.pad(-w / 2, w / 2, 0.08, seat, -d / 2 + d * 0.12, d / 2, C.fabric, C.fabricTop, 0.04, EDGE_FURN);
  b.pad(-w / 2 + 0.05, w / 2 - 0.05, seat, seat + 0.1, -d / 2 + d * 0.3, d / 2 - 0.04, C.cushion, C.fabricTop, 0.03, EDGE_FAINT);
  b.loft([-w / 2, w / 2, -d / 2, -d / 2 + d * 0.22], [-w / 2 + 0.03, w / 2 - 0.03, -d / 2, -d / 2 + d * 0.1], seat, h, C.fabric, C.fabricTop, EDGE_FURN);
  b.seg(0, seat + 0.105, -d * 0.05, 0, seat + 0.105, d / 2 - 0.06, EDGE_FAINT);
}

function showerScreen(b: Builder, w: number, d: number, h: number): void {
  const t = Math.min(0.025, Math.max(0.01, d * 0.35));
  b.box(-w / 2, w / 2, 0, 0.025, -t, t, C.metal, C.metal, EDGE_GLOW);
  for (const x of [-w / 2, 0, w / 2]) b.box(x - t, x + t, 0, h, -t, t, C.metal, C.metal, EDGE_GLOW);
  b.seg(-w / 2, h, 0, w / 2, h, 0, EDGE_GLOW);
  b.seg(w * 0.32, h * 0.42, t + 0.003, w * 0.32, h * 0.62, t + 0.003, EDGE_FURN);
}

function hammock(b: Builder, w: number, d: number, h: number): void {
  const post = Math.min(0.07, w * 0.035);
  for (const x of [-w / 2 + post, w / 2 - post]) {
    b.box(x - post / 2, x + post / 2, 0, h, -post, post, C.metal, C.metal, EDGE_FURN);
    b.box(x - d * 0.25, x + d * 0.25, 0, post, -d * 0.36, d * 0.36, C.metal, C.metal, EDGE_FURN);
  }
  const x0 = -w / 2 + post;
  const x1 = w / 2 - post;
  b.loft([x0, -w * 0.14, -d * 0.34, d * 0.34], [x0 + 0.08, -w * 0.14, -d * 0.3, d * 0.3], h * 0.36, h * 0.42, C.fabric, C.fabricTop, EDGE_FAINT);
  b.loft([-w * 0.14, w * 0.14, -d * 0.34, d * 0.34], [-w * 0.13, w * 0.13, -d * 0.3, d * 0.3], h * 0.25, h * 0.31, C.fabric, C.fabricTop, EDGE_FAINT);
  b.loft([w * 0.14, x1, -d * 0.34, d * 0.34], [w * 0.14, x1 - 0.08, -d * 0.3, d * 0.3], h * 0.36, h * 0.42, C.fabric, C.fabricTop, EDGE_FAINT);
  b.seg(x0, h * 0.8, 0, -w * 0.14, h * 0.42, 0, EDGE_FURN);
  b.seg(w * 0.14, h * 0.42, 0, x1, h * 0.8, 0, EDGE_FURN);
}

function stoneTableSet(b: Builder, w: number, d: number, h: number): void {
  const r = Math.min(w, d);
  b.cyl(0, 0, r * 0.08, 0, h - 0.07, C.metal, C.metal, 12);
  b.cyl(0, 0, r * 0.22, h - 0.07, h, C.body, C.bodyTop, 16, EDGE_FURN);
  for (const [x, z] of [[0, -0.38], [0.38, 0], [0, 0.38], [-0.38, 0]] as [number, number][]) {
    b.cyl(x * w, z * d, r * 0.065, 0, h * 0.52, C.metal, C.metal, 10);
    b.cyl(x * w, z * d, r * 0.105, h * 0.52, h * 0.61, C.body, C.bodyTop, 12, EDGE_FAINT);
  }
}

function waterTank(b: Builder, w: number, d: number, h: number): void {
  const r = Math.min(w, d) * 0.46;
  b.cyl(0, 0, r * 0.84, 0, h * 0.08, C.metal, C.metal, 12, EDGE_FURN);
  b.cyl(0, 0, r, h * 0.08, h * 0.92, C.metal, C.whiteTop, 20, EDGE_FURN);
  for (const y of [h * 0.28, h * 0.5, h * 0.72]) {
    for (let i = 0; i < 24; i++) {
      const a0 = (i / 24) * Math.PI * 2;
      const a1 = ((i + 1) / 24) * Math.PI * 2;
      b.seg(Math.cos(a0) * r, y, Math.sin(a0) * r, Math.cos(a1) * r, y, Math.sin(a1) * r, EDGE_FAINT);
    }
  }
  b.cyl(0, 0, r * 0.18, h * 0.92, h, C.dark, C.bodyTop, 12, EDGE_FAINT);
}

function gateOrFence(b: Builder, w: number, d: number, h: number, gate: boolean): void {
  const post = Math.min(0.12, w * 0.05);
  for (const x of [-w / 2 + post / 2, w / 2 - post / 2]) b.box(x - post / 2, x + post / 2, 0, h, -d / 2, d / 2, C.body, C.bodyTop, EDGE_FURN);
  const panels = gate ? 2 : Math.max(3, Math.round(w / 0.4));
  const inner = w - 2 * post;
  for (let i = 0; i < panels; i++) {
    const x0 = -inner / 2 + (inner * i) / panels + post * 0.25;
    const x1 = -inner / 2 + (inner * (i + 1)) / panels - post * 0.25;
    b.box(x0, x1, h * 0.08, h * 0.92, -d * 0.18, d * 0.18, gate ? C.metal : C.wood, gate ? C.metal : C.woodTop, EDGE_FAINT);
    if (gate) b.seg(i === 0 ? x1 : x0, h * 0.46, d * 0.2, i === 0 ? x1 - 0.08 : x0 + 0.08, h * 0.46, d * 0.2, EDGE_GLOW);
  }
  if (!gate) for (const y of [h * 0.22, h * 0.76]) b.box(-inner / 2, inner / 2, y - 0.025, y + 0.025, -d / 2, d / 2, C.wood, C.woodTop, EDGE_FURN);
}

/** A ring of glowing line on a front face (z = front), for dials and fans. */
function ring(b: Builder, cx: number, cy: number, r: number, z: number, n = 20): void {
  for (let i = 0; i < n; i++) {
    const a0 = (i / n) * Math.PI * 2;
    const a1 = ((i + 1) / n) * Math.PI * 2;
    b.seg(cx + Math.cos(a0) * r, cy + Math.sin(a0) * r, z, cx + Math.cos(a1) * r, cy + Math.sin(a1) * r, z, EDGE_GLOW);
  }
}

/**
 * Solar inverter on the wall (from 1.1 m): a flat box with a display and a status line; "slim" a tall narrow
 * one with a vertical light strip; "hybrid" with a round dial and two fans below.
 */
function inverter(b: Builder, w: number, d: number, h: number, variant: string | null): void {
  const y0 = 1.1;
  const z = d / 2;
  if (variant === "slim") {
    b.box(-w / 2, w / 2, y0, y0 + h, -d / 2, d / 2, C.dark, C.body, EDGE_FURN);
    b.seg(-w * 0.25, y0 + h * 0.15, z + 0.004, -w * 0.25, y0 + h * 0.85, z + 0.004, EDGE_GLOW);
    b.box(-w * 0.1, w * 0.3, y0 + h * 0.7, y0 + h * 0.85, z, z + 0.005, C.dark);
    return;
  }
  if (variant === "hybrid") {
    b.box(-w / 2, w / 2, y0, y0 + h, -d / 2, d / 2, C.white, C.whiteTop, EDGE_FURN);
    ring(b, 0, y0 + h * 0.66, Math.min(w, h) * 0.22, z + 0.004);
    b.seg(-w * 0.08, y0 + h * 0.66, z + 0.005, w * 0.08, y0 + h * 0.66, z + 0.005, EDGE_GLOW);
    for (const s of [-1, 1]) ring(b, s * w * 0.22, y0 + h * 0.2, Math.min(w, h) * 0.1, -d / 2 - 0.002, 12);
    return;
  }
  b.box(-w / 2, w / 2, y0, y0 + h, -d / 2, d / 2, C.white, C.whiteTop, EDGE_FURN);
  b.box(-w * 0.28, w * 0.28, y0 + h * 0.58, y0 + h * 0.82, d / 2, d / 2 + 0.006, C.dark);
  b.seg(-w * 0.3, y0 + h * 0.45, d / 2 + 0.004, w * 0.3, y0 + h * 0.45, d / 2 + 0.004, EDGE_GLOW);
  // cooling fins at the sides
  for (const s of [-1, 1]) for (let i = 1; i < 6; i++) b.seg((s * w) / 2 + s * 0.002, y0 + (h * i) / 6, -d / 2 + 0.03, (s * w) / 2 + s * 0.002, y0 + (h * i) / 6, d / 2 - 0.03, EDGE_FAINT);
}

/** The grid connection at the edge of the plot: a small dark street cabinet with a glowing lid edge. */
function gridCabinet(b: Builder, w: number, d: number, h: number): void {
  b.box(-w / 2, w / 2, 0, h, -d / 2, d / 2, C.dark, C.body, EDGE_FURN);
  b.box(-w / 2 - 0.01, w / 2 + 0.01, h, h + 0.03, -d / 2 - 0.01, d / 2 + 0.01, C.dark, C.body);
  b.seg(-w / 2, h + 0.032, d / 2 + 0.01, w / 2, h + 0.032, d / 2 + 0.01, EDGE_GLOW);
  b.seg(-w * 0.3, h * 0.55, d / 2 + 0.003, w * 0.3, h * 0.55, d / 2 + 0.003, EDGE_FAINT);
}

/** Wallbox (from 1.0 m): a compact box with a glowing ring and the charging cable hanging below. */
function wallbox(b: Builder, w: number, d: number, h: number): void {
  const y0 = 1.0;
  b.box(-w / 2, w / 2, y0, y0 + h, -d / 2, d / 2, C.dark, C.body, EDGE_FURN);
  const r = Math.min(w, h) * 0.28;
  const cy = y0 + h * 0.58;
  const n = 16;
  for (let i = 0; i < n; i++) {
    const a0 = (i / n) * Math.PI * 2;
    const a1 = ((i + 1) / n) * Math.PI * 2;
    b.seg(Math.cos(a0) * r, cy + Math.sin(a0) * r, d / 2 + 0.003, Math.cos(a1) * r, cy + Math.sin(a1) * r, d / 2 + 0.003, EDGE_GLOW);
  }
  // the coiled cable below the box
  b.box(-0.015, 0.015, y0 - 0.35, y0, d / 2 - 0.03, d / 2, C.dark);
  b.box(-0.06, 0.06, y0 - 0.42, y0 - 0.35, d / 2 - 0.05, d / 2, C.dark, C.body);
}

/** Meter cabinet on the wall (from 0.4 m): a tall box with the meter window and the glowing pulse LED. */
function meterCabinet(b: Builder, w: number, d: number, h: number): void {
  const y0 = 0.4;
  b.box(-w / 2, w / 2, y0, y0 + h, -d / 2, d / 2, C.white, C.whiteTop, EDGE_FURN);
  // the door's edge and handle
  b.seg(-w / 2 + 0.025, y0 + 0.025, d / 2 + 0.003, -w / 2 + 0.025, y0 + h - 0.025, d / 2 + 0.003, EDGE_FAINT);
  b.seg(-w / 2 + 0.025, y0 + h - 0.025, d / 2 + 0.003, w / 2 - 0.025, y0 + h - 0.025, d / 2 + 0.003, EDGE_FAINT);
  b.box(w / 2 - 0.06, w / 2 - 0.035, y0 + h * 0.5 - 0.05, y0 + h * 0.5 + 0.05, d / 2, d / 2 + 0.012, C.dark);
  // the meter behind its window with the display line
  b.box(-w * 0.3, w * 0.3, y0 + h * 0.6, y0 + h * 0.8, d / 2, d / 2 + 0.005, C.dark);
  b.seg(-w * 0.22, y0 + h * 0.7, d / 2 + 0.008, w * 0.22, y0 + h * 0.7, d / 2 + 0.008, EDGE_GLOW);
}

/**
 * Home battery: a tower of stacked modules with a charge bar; "wall" a flat battery hanging at hip height
 * with a light bar; "cube" a compact box (a balcony battery) with a light bar and a handle.
 */
function homeBattery(b: Builder, w: number, d: number, h: number, variant: string | null): void {
  if (variant === "wall") {
    const y0 = 0.5;
    b.box(-w / 2, w / 2, y0, y0 + h, -d / 2, d / 2, C.white, C.whiteTop, EDGE_FURN);
    b.seg(-w * 0.3, y0 + h * 0.9, d / 2 + 0.004, w * 0.3, y0 + h * 0.9, d / 2 + 0.004, EDGE_GLOW);
    b.seg(-w * 0.3, y0 + h * 0.08, d / 2 + 0.003, w * 0.3, y0 + h * 0.08, d / 2 + 0.003, EDGE_FAINT);
    return;
  }
  if (variant === "cube") {
    b.box(-w / 2 + 0.01, w / 2 - 0.01, 0, 0.03, -d / 2 + 0.01, d / 2 - 0.01, C.dark);
    b.box(-w / 2, w / 2, 0.03, h, -d / 2, d / 2, C.dark, C.body, EDGE_FURN);
    b.seg(-w * 0.35, h * 0.85, d / 2 + 0.004, w * 0.35, h * 0.85, d / 2 + 0.004, EDGE_GLOW);
    b.box(-w * 0.15, w * 0.15, h, h + 0.025, -0.012, 0.012, C.dark);
    return;
  }
  b.box(-w / 2 + 0.02, w / 2 - 0.02, 0, 0.06, -d / 2 + 0.02, d / 2 - 0.02, C.dark);
  const modules = Math.max(2, Math.round((h - 0.06) / 0.3));
  const mh = (h - 0.06) / modules;
  for (let i = 0; i < modules; i++) b.box(-w / 2, w / 2, 0.06 + i * mh + 0.004, 0.06 + (i + 1) * mh, -d / 2, d / 2, C.white, C.whiteTop, EDGE_FURN);
  // charge bar: five short segments
  for (let k = 0; k < 5; k++) {
    const y = 0.06 + h * 0.18 + k * ((h - 0.3) / 5);
    b.seg(-w * 0.04, y, d / 2 + 0.003, w * 0.04, y, d / 2 + 0.003, EDGE_GLOW);
  }
}

/** Height of the underside of a radiator. */
export const RADIATOR_Y = 0.12;
/** Default underside of a wall-mounted split air conditioner. */
export const AIR_CONDITIONER_Y = 1.9;

/**
 * Screen of a TV or monitor in local coordinates (x across, y up, z = its front face), for the glow
 * shown while the linked device is on. Null for furniture without a screen.
 */
export function screenRect(f: Furniture, floor?: Floor): { x0: number; x1: number; y0: number; y1: number; z: number } | null {
  const r = screenRectUnmirrored(f, floor);
  return r && f.mirror ? { ...r, x0: -r.x1, x1: -r.x0 } : r;
}

function screenRectUnmirrored(f: Furniture, floor?: Floor): { x0: number; x1: number; y0: number; y1: number; z: number } | null {
  const w = Math.max(0.05, f.w);
  const d = Math.max(0.05, f.d);
  const h = Math.max(0.005, f.h);
  const part = packScreen(f.type);
  if (part) {
    // the screen part's front face, at the item's mount height
    const base = floor ? mountBase(floor, f) : 0;
    const x0 = (part.x - part.w / 2) * w;
    const x1 = (part.x + part.w / 2) * w;
    const inset = Math.min(0.02, (x1 - x0) * 0.05);
    return { x0: x0 + inset, x1: x1 - inset, y0: base + part.y * h + inset, y1: base + (part.y + part.h) * h - inset, z: (part.z + part.d / 2) * d };
  }
  // built-in models are lifted as a whole by their mount height
  const lift = floor && f.type !== "fridge_smart" ? mountBase(floor, f) - builtinBase(f) : 0;
  const r = builtInScreen(f, w, d, h, floor);
  return r ? { ...r, y0: r.y0 + lift, y1: r.y1 + lift } : null;
}

function builtInScreen(f: Furniture, w: number, d: number, h: number, floor?: Floor): { x0: number; x1: number; y0: number; y1: number; z: number } | null {
  if (f.type === "tv_board") {
    const tw = Math.min(w * 0.8, 1.45);
    const th = tw * 0.56;
    return { x0: -tw / 2 + 0.02, x1: tw / 2 - 0.02, y0: h + 0.12, y1: h + 0.08 + th, z: -d / 2 + 0.165 };
  }
  if (f.type === "tv_wall") {
    const y0 = 1.3 - h / 2;
    return { x0: -w / 2 + 0.02, x1: w / 2 - 0.02, y0: y0 + 0.02, y1: y0 + h - 0.02, z: d / 2 + 0.003 };
  }
  if (f.type === "desk") return { x0: -0.28, x1: 0.28, y0: h + 0.1, y1: h + 0.4, z: -d / 2 + 0.115 };
  if (f.type === "fridge_smart") {
    // the screen sits on the right door (mirrored: the door's u runs to the left from its hinge at +w/2)
    const base = floor ? mountBase(floor, f) : 0;
    return { x0: 0.06, x1: w / 2 - 0.06, y0: base + h * 0.52 + 0.01, y1: base + h * 0.86 - 0.01, z: d / 2 + 0.006 };
  }
  // glowing fronts of appliances that run and of a radiator that heats
  if (f.type === "radiator") return { x0: -w / 2 + 0.02, x1: w / 2 - 0.02, y0: RADIATOR_Y + 0.02, y1: RADIATOR_Y + h - 0.02, z: d / 2 + 0.004 };
  if (f.type === "air_conditioner") return { x0: -w * 0.43, x1: w * 0.43, y0: AIR_CONDITIONER_Y + h * 0.08, y1: AIR_CONDITIONER_Y + h * 0.27, z: d / 2 + 0.008 };
  if (f.type === "water_pump") return { x0: -w * 0.1, x1: w * 0.1, y0: h * 0.56, y1: h * 0.65, z: d * 0.3 + 0.004 };
  if (f.type === "water_heater") {
    const dia = Math.min(d * 0.88, h * 0.92);
    const y0 = (h - dia) / 2;
    return { x0: w * 0.18, x1: w * 0.4, y0: y0 + dia * 0.38, y1: y0 + dia * 0.68, z: d * 0.48 + 0.006 };
  }
  if (f.type === "range_hood") return { x0: -w * 0.4, x1: w * 0.4, y0: 0.005, y1: h * 0.06, z: d / 2 + 0.003 };
  if (f.type === "microwave") return { x0: -w * 0.4, x1: w * 0.18, y0: h * 0.17, y1: h * 0.82, z: d / 2 + 0.008 };
  if (f.type === "water_purifier") return { x0: -w * 0.28, x1: w * 0.28, y0: h * 0.8 * 0.56, y1: h * 0.8 * 0.64, z: d / 2 + 0.016 };
  if (f.type === "air_purifier") return { x0: -w * 0.11, x1: w * 0.11, y0: h * 0.66, y1: h * 0.74, z: d / 2 + 0.008 };
  if (f.type === "smart_speaker") return { x0: -w * 0.42, x1: w * 0.42, y0: h * 0.9, y1: h + 0.008, z: d * 0.05 };
  if (f.type === "security_camera") return { x0: -w * 0.12, x1: w * 0.12, y0: 1.85 + h * 0.37, y1: 1.85 + h * 0.58, z: d * 0.53 };
  if (f.type === "smart_lock") return { x0: -w * 0.36, x1: w * 0.36, y0: 0.95 + h * 0.43, y1: 0.95 + h * 0.78, z: d / 2 + 0.006 };
  if (f.type === "washer" || f.type === "dryer") {
    const cy = (h - 0.14) / 2 + 0.04;
    const r = Math.min(w * 0.36, (h - 0.2) * 0.42) * 0.8;
    return { x0: -r, x1: r, y0: cy - r, y1: cy + r, z: d / 2 - 0.004 };
  }
  if (f.type === "dishwasher") return { x0: -w / 2 + 0.06, x1: w / 2 - 0.06, y0: h - 0.16, y1: h - 0.08, z: d / 2 - 0.004 };
  return null;
}

/** Soft contact shadow under an item: a dark core that fades out beyond its footprint. */
function contactShadow(shadow: GeoBuffer, tf: Tf, w: number, d: number, strength: number): void {
  const grow = Math.min(0.14, Math.max(0.06, Math.min(w, d) * 0.15));
  const dark = new Color(1 - strength, 1 - strength, 1 - strength);
  const clear = new Color(1, 1, 1);
  const y = 0.003;
  const inner = [tf(-w / 2, -d / 2), tf(w / 2, -d / 2), tf(w / 2, d / 2), tf(-w / 2, d / 2)];
  const outer = [tf(-w / 2 - grow, -d / 2 - grow), tf(w / 2 + grow, -d / 2 - grow), tf(w / 2 + grow, d / 2 + grow), tf(-w / 2 - grow, d / 2 + grow)];
  const P = (p: Vec2) => [p[0], y, p[1]];
  const s0 = shadow.p.length;
  shadow.tri(P(inner[0]), P(inner[1]), P(inner[2]), dark);
  shadow.tri(P(inner[0]), P(inner[2]), P(inner[3]), dark);
  for (let i = 0; i < 4; i++) {
    const j = (i + 1) % 4;
    shadow.tri(P(inner[i]), P(outer[i]), P(outer[j]), dark, clear, clear);
    shadow.tri(P(inner[i]), P(outer[j]), P(inner[j]), dark, clear, dark);
  }
  if (tfMirrors(tf)) flipWinding(shadow, s0);
}

export function pushFurniture(buf: GeoBuffer, lines: LineBuffer, shadow: GeoBuffer, f: Furniture, base = 0): void {
  // a mirrored item needs no rewinding here: boxes, lofts and upright cylinders wind themselves (ccw),
  // lying cylinders and the contact shadow rewind themselves when the transform mirrors (#159)
  pushUpright(buf, lines, shadow, f, base);
}

/** Swap the second and third vertex of every triangle from `from` on (positions, colours, folds, uvs, tiles). */
export function flipWinding(buf: GeoBuffer, from: number): void {
  const swap = (arr: number[] | null, start: number, n: number) => {
    if (!arr) return;
    for (let k = 0; k < n; k++) {
      const i = start + n + k;
      const j = start + 2 * n + k;
      const t = arr[i];
      arr[i] = arr[j];
      arr[j] = t;
    }
  };
  for (let i = from; i < buf.p.length; i += 9) {
    const tri = i / 9;
    swap(buf.p, i, 3);
    swap(buf.c, i, 3);
    swap(buf.f, tri * 3, 1);
    swap(buf.uv, tri * 6, 2);
    swap(buf.tile, tri * 6, 2);
  }
}

function pushUpright(buf: GeoBuffer, lines: LineBuffer, shadow: GeoBuffer, f: Furniture, base: number): void {
  // pack items place their parts at `base` themselves; built-in models are drawn on the floor and
  // lifted as a whole (a dryer on the washer, a shelf on the wall), without a shadow on the floor
  // the mount height is absolute: a wall cabinet drawn at 1.45 m moves by the difference (up or down)
  const lift = packItem(f.type) ? 0 : base - builtinBase(f);
  if (packItem(f.type) || Math.abs(lift) < 0.001) return buildFurniture(buf, lines, shadow, f, base);
  const p0 = buf.p.length;
  const l0 = lines.p.length;
  const s0 = shadow.p.length;
  buildFurniture(buf, lines, base < 0.05 ? shadow : new GeoBuffer(), f, 0);
  for (let i = p0 + 1; i < buf.p.length; i += 3) buf.p[i] += lift;
  for (let i = l0 + 1; i < lines.p.length; i += 3) lines.p[i] += lift;
  for (let i = s0 + 1; i < shadow.p.length; i += 3) shadow.p[i] += lift;
}

function buildFurniture(buf: GeoBuffer, lines: LineBuffer, shadow: GeoBuffer, f: Furniture, base: number): void {
  const a = f.rotation * DEG;
  const c = Math.cos(a);
  const s = Math.sin(a);
  // mirrored: the item's own x runs the other way
  const mx = f.mirror ? -1 : 1;
  const tf: Tf = (x, z) => [f.x + mx * x * c - z * s, f.z + mx * x * s + z * c];
  const b = new Builder(buf, lines, tf);
  const w = Math.max(0.05, f.w);
  const d = Math.max(0.05, f.d);
  const h = Math.max(0.005, f.h);
  switch (f.type) {
    case "altar":
      altar(b, w, d, h);
      break;
    case "altar_wall":
      wallAltar(b, w, d, h);
      return;
    case "shoe_cabinet":
      shoeCabinet(b, w, d, h);
      break;
    case "motorbike":
      motorbike(b, w, d, h);
      break;
    case "fan_ceiling":
      ceilingFan(b, w, d, h);
      return;
    case "fan_floor":
      floorFan(b, w, d, h);
      break;
    case "water_heater":
      waterHeater(b, w, d, h);
      return;
    case "drying_rack":
      dryingRack(b, w, d, h);
      break;
    case "shoe_bench":
      shoeBench(b, w, d, h);
      break;
    case "room_divider":
      roomDivider(b, w, d, h);
      break;
    case "range_hood":
      rangeHood(b, w, d, h);
      return;
    case "microwave":
      microwave(b, w, d, h);
      if (base > 0.05) return;
      break;
    case "water_purifier":
      waterPurifier(b, w, d, h);
      break;
    case "air_purifier":
      airPurifier(b, w, d, h);
      break;
    case "smart_speaker":
      smartSpeaker(b, w, d, h);
      break;
    case "security_camera":
      securityCamera(b, w, d, h);
      return;
    case "smart_lock":
      smartLock(b, w, d, h);
      return;
    case "smart_curtain":
      smartCurtain(b, w, d, h);
      return;
    case "kitchen_corner":
      kitchenCorner(b, w, d, h);
      break;
    case "kitchen_display":
      kitchenDisplay(b, w, d, h);
      break;
    case "vanity":
      vanity(b, w, d, h);
      break;
    case "crib":
      crib(b, w, d, h);
      break;
    case "bed_single":
    case "bed_double":
      bed(b, w, d, h);
      break;
    case "sofa_l":
      cornerSofa(b, w, d, h);
      break;
    case "sofa_bed":
      sofaBed(b, w, d, h);
      break;
    case "shower_screen":
      showerScreen(b, w, d, h);
      break;
    case "hammock":
      hammock(b, w, d, h);
      break;
    case "stone_table_set":
      stoneTableSet(b, w, d, h);
      break;
    case "planter_large":
      plant(b, w, d, h);
      break;
    case "water_tank":
      waterTank(b, w, d, h);
      break;
    case "gate":
      gateOrFence(b, w, d, h, true);
      break;
    case "fence":
      gateOrFence(b, w, d, h, false);
      break;
    case "sofa":
      sofa(b, w, d, h, Math.max(1, Math.round((w - 0.4) / 0.62)));
      break;
    case "armchair":
      sofa(b, w, d, h, 1);
      break;
    case "bed":
      bed(b, w, d, h);
      break;
    case "chair":
      chair(b, w, d, h);
      break;
    case "table":
      table(b, w, d, h);
      break;
    case "desk":
      desk(b, w, d, h);
      break;
    case "nightstand":
      cabinet(b, w, d, h, 1, h * 0.72, true);
      b.seg(-w / 2, h * 0.5, d / 2 - 0.02, w / 2, h * 0.5, d / 2 - 0.02, EDGE_FAINT);
      break;
    case "wardrobe":
      cabinet(b, w, d, h, Math.max(2, Math.round(w / 0.5)), h * 0.5);
      break;
    case "shelf":
      shelf(b, w, d, h);
      break;
    case "kitchen":
      kitchen(b, w, d, h);
      break;
    case "fridge":
      fridge(b, w, d, h);
      break;
    case "fridge_smart":
      fridgeSmart(b, w, d, h);
      break;
    case "stove":
      stove(b, w, d, h);
      break;
    case "sink":
      sink(b, w, d, h);
      break;
    case "bathtub":
      bathtub(b, w, d, h);
      break;
    case "shower":
      shower(b, w, d, h);
      break;
    case "wc":
      wc(b, w, d, h);
      break;
    case "washbasin":
      washbasin(b, w, d, h);
      break;
    case "tv_board":
      tvBoard(b, w, d, h);
      break;
    case "plant":
      plant(b, w, d, h);
      break;
    case "rug":
      rug(b, w, d);
      return; // flat, no contact shadow
    case "stairs":
      stairs(b, w, d, h);
      break;
    case "stairs_landing":
      stairsLanding(b, w, d, h);
      break;
    case "stairwell":
      return; // only a hole in the floor (see stairHoles in build.ts), nothing to draw
    case "sideboard":
      sideboard(b, w, d, h);
      break;
    case "dresser":
      dresser(b, w, d, h);
      break;
    case "tall_cabinet":
      cabinet(b, w, d, h, 1, h * 0.5);
      break;
    case "coat_rack":
      coatRack(b, w, d, h);
      break;
    case "bench":
      bench(b, w, d, h, false);
      break;
    case "corner_bench":
      bench(b, w, d, h, true);
      break;
    case "bar_stool":
      barStool(b, w, d, h);
      break;
    case "office_chair":
      officeChair(b, w, d, h);
      break;
    case "stool":
      stool(b, w, d, h);
      break;
    case "kitchen_wall":
      kitchenWall(b, w, d, h);
      return; // hangs on the wall, no shadow on the floor
    case "kitchen_tall":
      kitchenTall(b, w, d, h);
      break;
    case "island":
      island(b, w, d, h);
      break;
    case "worktop":
      // only the 4 cm top at its height, nothing below it (no contact shadow)
      b.box(-w / 2, w / 2, Math.max(0, h - 0.04), h, -d / 2, d / 2, C.whiteTop, C.whiteTop, EDGE_FURN);
      return;
    case "dishwasher":
      dishwasher(b, w, d, h);
      break;
    case "washer":
      laundry(b, w, d, h, false);
      break;
    case "dryer":
      laundry(b, w, d, h, true);
      break;
    case "bunk_bed":
      bunkBed(b, w, d, h);
      break;
    case "table_round":
      roundTable(b, w, d, h);
      break;
    case "coffee_table":
      coffeeTable(b, w, d, h);
      break;
    case "tv_wall":
      tvWall(b, w, d, h);
      return;
    case "parking": {
      // only the marking of the spot: a vehicle standing in it is added by the viewer
      const y = 0.012;
      const corners: [number, number][] = [[-w / 2, -d / 2], [w / 2, -d / 2], [w / 2, d / 2], [-w / 2, d / 2]];
      for (let i = 0; i < 4; i++) b.seg(corners[i][0], y, corners[i][1], corners[(i + 1) % 4][0], y, corners[(i + 1) % 4][1], EDGE_FAINT);
      // an arrow head at the front: the direction the vehicle faces
      b.seg(-w * 0.15, y, d / 2 - 0.45, 0, y, d / 2 - 0.2, EDGE_FURN);
      b.seg(0, y, d / 2 - 0.2, w * 0.15, y, d / 2 - 0.45, EDGE_FURN);
      return;
    }
    case "robot_vacuum":
      // only the dock: the robot itself is drawn (and moved) by the viewer
      b.box(-w * 0.45, w * 0.45, 0, h, -d / 2, -d / 2 + d * 0.3, C.white, C.whiteTop, EDGE_FURN);
      b.box(-w * 0.2, w * 0.2, h * 0.5, h * 0.62, -d / 2 + d * 0.3, -d / 2 + d * 0.31, C.accent);
      return;
    case "radiator":
      radiator(b, w, d, h);
      return; // on the wall, no shadow on the floor
    case "air_conditioner":
      airConditioner(b, w, d, h);
      return; // mounted high on the wall, no shadow on the floor
    case "water_pump":
      waterPump(b, w, d, h);
      break;
    case "inverter":
      inverter(b, w, d, h, f.variant ?? null);
      return;
    case "grid_point":
      gridCabinet(b, w, d, h);
      break;
    case "wallbox":
      wallbox(b, w, d, h);
      return;
    case "meter":
      meterCabinet(b, w, d, h);
      return;
    case "home_battery":
      homeBattery(b, w, d, h, f.variant ?? null);
      if (f.variant === "wall") return;
      break;
    default: {
      const item = packItem(f.type);
      if (item) {
        packModel(b, item, w, d, h, base, null);
        // items on furniture, walls or ceilings cast no shadow on the floor
        if (base > 0.05) return;
      } else b.box(-w / 2, w / 2, 0, h, -d / 2, d / 2, C.body, C.bodyTop, EDGE_FURN);
    }
  }
  contactShadow(shadow, tf, w, d, f.type === "plant" ? 0.35 : 0.5);
}

/** Colour of a pack part: a palette role (so packs follow the look) or "#rrggbb". */
function packColor(value: string | undefined, top: boolean): number | null {
  if (!value) return null;
  if (value.startsWith("#")) return parseInt(value.slice(1), 16);
  const palette = C as Record<string, number>;
  return (top ? palette[`${value}Top`] : undefined) ?? palette[value] ?? null;
}

/** Model of a pack item: its parts scaled to the item's size; glowing parts take `glow` (a lit lamp). */
function packModel(b: Builder, item: PackItem, w: number, d: number, h: number, base: number, glow: number | null, only: ((p: PackItem["parts"][number]) => boolean) | null = null): void {
  const onlyGlow = !!only;
  for (const q of item.parts) {
    // only some parts (the glowing ones of a speaker, a car's windows), a hair larger so they cover the item's own
    if (only && !only(q)) continue;
    const p = onlyGlow ? { ...q, glow: true, w: q.w + 0.006 / w, d: q.d + 0.006 / d, y: Math.max(0, q.y - 0.002 / h), h: q.h + 0.004 / h } : q;
    const lit = p.glow && glow !== null;
    const side = lit ? glow : (packColor(p.color, false) ?? C.body);
    // without a top colour, the top is the role's top shade or a little lighter
    const top = lit ? glow : (packColor(p.top, false) ?? packColor(p.color, true) ?? shade(side, 1.25).getHex());
    const y0 = base + p.y * h;
    const y1 = base + Math.min(h, (p.y + p.h) * h);
    // "glow" lines are as bright as the wall lines, so a pack item can be drawn like the walls
    const edges = p.edges === "glow" ? EDGE_TOP : p.edges === "faint" ? EDGE_FAINT : p.edges ? EDGE_FURN : null;
    // a turned part draws through a builder whose coordinates turn around the part's centre
    const bb = p.rot ? b.rotated(p.x * w, p.z * d, p.rot) : b;
    if (p.shape === "cyl" && (p.axis === "x" || p.axis === "z")) {
      bb.lyingCyl(p.axis, p.x * w, p.z * d, y0, y1, p.axis === "x" ? p.w * w : p.d * d, p.axis === "x" ? p.d * d : p.w * w, side, top, 14, edges);
    } else if (p.shape === "cyl") bb.cyl(p.x * w, p.z * d, (Math.min(p.w * w, p.d * d)) / 2, y0, y1, side, top, 14, edges);
    else if (p.shape === "loft") {
      const tx = p.tx ?? p.x;
      const tz = p.tz ?? p.z;
      const tw = p.tw ?? p.w;
      const td = p.td ?? p.d;
      bb.loft([(p.x - p.w / 2) * w, (p.x + p.w / 2) * w, (p.z - p.d / 2) * d, (p.z + p.d / 2) * d], [(tx - tw / 2) * w, (tx + tw / 2) * w, (tz - td / 2) * d, (tz + td / 2) * d], y0, y1, side, top, edges);
    } else bb.box((p.x - p.w / 2) * w, (p.x + p.w / 2) * w, y0, y1, (p.z - p.d / 2) * d, (p.z + p.d / 2) * d, side, top, edges);
  }
}

/**
 * A security camera into the lamp buffer: on a wall a small body with a lens looking along +z (turned
 * by `rotation`), on the ceiling a dome hanging at the ceiling height `y`.
 */
export function pushCameraModel(buf: GeoBuffer, model: "camera_wall" | "camera_ceiling", x: number, y: number, z: number, rotation: number): void {
  const a = rotation * DEG;
  const c = Math.cos(a);
  const s = Math.sin(a);
  const tf: Tf = (lx, lz) => [x + lx * c - lz * s, z + lx * s + lz * c];
  const b = new Builder(buf, new LineBuffer(), tf);
  const body = 0x1a2640;
  const bodyTop = 0x243660;
  const lens = 0x0b111f;
  if (model === "camera_ceiling") {
    // dome: a flat base and a half-dome below it
    b.cyl(0, 0, 0.07, y - 0.03, y, body, bodyTop, 12);
    b.loft([-0.05, 0.05, -0.05, 0.05], [-0.025, 0.025, -0.025, 0.025], y - 0.1, y - 0.03, lens, body);
    b.cyl(0, 0, 0.012, y - 0.075, y - 0.06, C.accent, C.accent, 6);
    return;
  }
  // wall camera: bracket at the wall (-z), body pointing into the room (+z), lens in front
  b.box(-0.02, 0.02, y - 0.02, y + 0.02, -0.06, -0.03, body, bodyTop);
  b.box(-0.01, 0.01, y - 0.01, y + 0.06, -0.05, -0.03, body, bodyTop);
  b.loft([-0.035, 0.035, -0.03, 0.09], [-0.04, 0.04, -0.03, 0.09], y + 0.02, y + 0.09, body, bodyTop);
  b.lyingCyl("z", 0, 0.1, y + 0.03, y + 0.08, 0.03, 0.05, lens, C.accent, 10);
  b.box(-0.006, 0.006, y + 0.075, y + 0.085, 0.085, 0.09, 0xff3b4f, 0xff3b4f);
}

/** The glowing parts of a pack item that is no lamp (a smart speaker's light ring) in `color`: for the screen layer. */
export function pushPackGlow(buf: GeoBuffer, item: PackItem, f: Pick<Furniture, "x" | "z" | "rotation" | "w" | "d" | "h" | "mirror">, base: number, color: number, pick: (p: PackItem["parts"][number]) => boolean = (p) => !!p.glow): void {
  const a = f.rotation * DEG;
  const c = Math.cos(a);
  const s = Math.sin(a);
  const mx = f.mirror ? -1 : 1;
  const tf: Tf = (x, z) => [f.x + mx * x * c - z * s, f.z + mx * x * s + z * c];
  packModel(new Builder(buf, new LineBuffer(), tf), item, Math.max(0.05, f.w), Math.max(0.05, f.d), Math.max(0.005, f.h), base, color, pick);
}

/** A pack lamp into the lamp buffer: glowing parts in the light's colour (`glow`), or dark when off. */
export function pushPackLamp(buf: GeoBuffer, item: PackItem, f: Pick<Furniture, "x" | "z" | "rotation" | "w" | "d" | "h" | "mirror">, base: number, glow: number): void {
  const a = f.rotation * DEG;
  const c = Math.cos(a);
  const s = Math.sin(a);
  // mirrored: the item's own x runs the other way (the builder rewinds what needs it)
  const mx = f.mirror ? -1 : 1;
  const tf: Tf = (x, z) => [f.x + mx * x * c - z * s, f.z + mx * x * s + z * c];
  // lamps have no outlines: their edges are dropped
  packModel(new Builder(buf, new LineBuffer(), tf), item, Math.max(0.05, f.w), Math.max(0.05, f.d), Math.max(0.005, f.h), base, glow);
}
