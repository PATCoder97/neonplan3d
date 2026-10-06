import assert from "node:assert/strict";
import { test } from "node:test";
import { EDITOR_TOOL_GROUPS, resolvedFurniturePane } from "./editor-navigation.ts";

test("editor tools follow the user workflow and occur only once", () => {
  assert.deepEqual(
    EDITOR_TOOL_GROUPS.map((group) => [group.key, ...group.tools]),
    [
      ["plan", "select", "rect", "polygon", "wall", "opening"],
      ["layout", "furniture", "outdoor"],
      ["building", "hole", "roof", "energy"],
      ["project", "settings"],
    ],
  );
  const tools = EDITOR_TOOL_GROUPS.flatMap((group) => group.tools);
  assert.equal(new Set(tools).size, tools.length);
});

test("furniture properties fall back to the library when nothing is selected", () => {
  assert.equal(resolvedFurniturePane("library", false), "library");
  assert.equal(resolvedFurniturePane("properties", true), "properties");
  assert.equal(resolvedFurniturePane("properties", false), "library");
});
