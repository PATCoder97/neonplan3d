// Builds the short documentation GIF from the committed five-point golden sequence.
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import gifenc from "gifenc";
import { PNG } from "pngjs";

const { GIFEncoder, applyPalette, quantize } = gifenc;

const base = resolve("../docs/assets/neon-honeycomb/golden");
const output = resolve("../docs/assets/neon-honeycomb/neon-honeycomb-motion.gif");
const sequence = ["p000", "p025", "p050", "p075", "p100", "p075", "p050", "p025"];
const gif = GIFEncoder();

for (const [index, frame] of sequence.entries()) {
  const png = PNG.sync.read(readFileSync(`${base}/desktop-6-${frame}.png`));
  const palette = quantize(png.data, 128);
  const indexed = applyPalette(png.data, palette);
  gif.writeFrame(indexed, png.width, png.height, { palette, delay: index === 4 ? 500 : 180, repeat: 0 });
}
gif.finish();
writeFileSync(output, gif.bytes());
console.log(`ok  Honeycomb motion GIF: ${(gif.bytesView().byteLength / 1024).toFixed(1)} KB`);
