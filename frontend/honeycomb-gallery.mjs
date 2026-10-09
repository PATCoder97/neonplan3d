// Builds or serves the clean-room Neon Honeycomb development fixture.
import { build, context } from "esbuild";

const serve = process.argv.includes("--serve");
const config = {
  entryPoints: ["src/dev/honeycomb-gallery.ts"],
  outdir: "dev/honeycomb/assets",
  entryNames: "honeycomb-gallery",
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
  const port = Number(process.env.HONEYCOMB_PORT ?? 4174);
  const server = await ctx.serve({ servedir: "dev/honeycomb", host: "127.0.0.1", port });
  console.log(`Honeycomb gallery: http://127.0.0.1:${server.port}/`);
} else {
  const result = await build(config);
  const bytes = result.outputFiles.reduce((sum, file) => sum + file.contents.byteLength, 0);
  console.log(`ok  honeycomb gallery: ${(bytes / 1024).toFixed(1)} KB dev bundle`);
}
