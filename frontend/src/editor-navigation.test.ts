import assert from "node:assert/strict";
import { test } from "node:test";
import { EDITOR_TOOL_GROUPS, resolvedFurniturePane } from "./editor-navigation.ts";

test("editor tools follow the user workflow and occur only once", () => {
  assert.deepEqual(
    EDITOR_TOOL_GROUPS.map((group) => [group.key, ...group.tools]),
    [
      ["room", "rect", "polygon"],
      ["walls", "wall", "opening"],
      ["layout", "furniture", "outdoor"],
      ["building", "hole", "roof", "energy"],
    ],
  );
  const tools = EDITOR_TOOL_GROUPS.flatMap((group) => group.tools);
  assert.equal(new Set(tools).size, tools.length);
  assert.equal(tools.includes("select"), false);
  assert.equal(tools.includes("settings"), false);
});

test("furniture properties fall back to the library when nothing is selected", () => {
  assert.equal(resolvedFurniturePane("library", false), "library");
  assert.equal(resolvedFurniturePane("properties", true), "properties");
  assert.equal(resolvedFurniturePane("properties", false), "library");
});
