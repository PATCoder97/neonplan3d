// Builds the development-only furniture gallery, or serves it with an in-memory bundle.

import { build, context } from "esbuild";

const serve = process.argv.includes("--serve");
const config = {
  entryPoints: ["src/dev/furniture-gallery.ts"],
  outdir: "dev/gallery/assets",
  entryNames: "furniture-gallery",
  bundle: true,
  format: "esm",
  target: ["chrome94", "firefox93", "safari15"],
  sourcemap: serve ? "inline" : false,
  write: false,
  legalComments: "none",
  logLevel: "info",
};

if (serve) {
  const ctx = await context(config);
  const server = await ctx.serve({ servedir: "dev/gallery", host: "127.0.0.1", port: 4173 });
  console.log(`Furniture gallery: http://127.0.0.1:${server.port}/`);
} else {
  const result = await build(config);
  const bytes = result.outputFiles.reduce((sum, file) => sum + file.contents.byteLength, 0);
  console.log(`ok  furniture gallery: ${(bytes / 1024).toFixed(1)} KB dev bundle`);
}
