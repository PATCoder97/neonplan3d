import assert from "node:assert/strict";
import { test } from "node:test";
import { MeshBasicMaterial, type WebGLProgramParametersWithUniforms } from "three";
import { COVERED_ROOF_ALPHA, COVERED_ROOF_BRIGHTNESS, makeFoldable } from "./fold.ts";

test("a covered-room roof stays translucent but visible against the outdoor canvas", () => {
  const material = makeFoldable(new MeshBasicMaterial(), { standing: { value: 0xffff }, glass: { value: 0 } }, "roof");
  const shader = {
    uniforms: {},
    vertexShader: "#include <common>\n#include <project_vertex>",
    fragmentShader: "#include <color_fragment>",
  } as unknown as WebGLProgramParametersWithUniforms;
  material.onBeforeCompile(shader, null!);

  assert.match(shader.vertexShader, /fp3dBucket == 15/, "only the reserved covered-roof bucket is drawn");
  assert.match(shader.fragmentShader, new RegExp(`diffuseColor\\.rgb \\*= ${COVERED_ROOF_BRIGHTNESS.toFixed(2)}`));
  assert.match(shader.fragmentShader, new RegExp(`diffuseColor\\.a \\*= ${COVERED_ROOF_ALPHA.toFixed(2)}`));
  assert.ok(COVERED_ROOF_ALPHA < 1, "devices below the roof remain faintly visible before selecting the room");
});
