// Bundle the TypeScript inventory with the project's own esbuild, run it, then remove the temporary
// output. This keeps the command working on the Node 20 version used by the development machine.

import { build } from "esbuild";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const dir = mkdtempSync(join(tmpdir(), "neonplan3d-catalog-"));
const outfile = join(dir, "report.mjs");
try {
  await build({ entryPoints: ["src/furniture/catalog-report.ts"], outfile, bundle: true, platform: "node", format: "esm", logLevel: "silent" });
  await import(pathToFileURL(outfile).href);
} finally {
  rmSync(dir, { recursive: true, force: true });
}
