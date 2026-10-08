import assert from "node:assert/strict";
import { test } from "node:test";
import { builtinFurnitureMount, foldFurnitureText, furnitureFilterTraits, matchesFurnitureFilters, type FurnitureLibraryFilters } from "./filters.ts";

test("search folding keeps Vietnamese queries accent-insensitive", () => {
  assert.ok(foldFurnitureText("Máy pha cà phê").includes(foldFurnitureText("may pha ca phe")));
  assert.equal(foldFurnitureText("Tủ góc mâm xoay"), "tu goc mam xoay");
});

test("built-in mount classification distinguishes floor, surface, wall and ceiling", () => {
  assert.equal(builtinFurnitureMount("sofa_3"), "floor");
  assert.equal(builtinFurnitureMount("kitchen_coffee_machine"), "surface");
  assert.equal(builtinFurnitureMount("kitchen_spice_rack_wall"), "wall");
  assert.equal(builtinFurnitureMount("cinema_projector_ceiling"), "ceiling");
});

test("catalog filters combine room, mount, capability and style", () => {
  const powered = furnitureFilterTraits("kitchen_coffee_machine", "kitchen", { electric: true });
  const classic = furnitureFilterTraits("sofa_chesterfield", "living");
  const filters = (patch: Partial<FurnitureLibraryFilters>): FurnitureLibraryFilters => ({ group: "all", mount: "all", capability: "all", style: "all", ...patch });
  assert.ok(matchesFurnitureFilters(powered, filters({ group: "kitchen", mount: "surface", capability: "power", style: "technical" })));
  assert.ok(!matchesFurnitureFilters(powered, filters({ group: "living" })));
  assert.ok(matchesFurnitureFilters(classic, filters({ style: "classic", capability: "static" })));
  assert.ok(!matchesFurnitureFilters(classic, filters({ capability: "screen" })));
});

test("pack metadata can override mount and capabilities", () => {
  const traits = furnitureFilterTraits("pack:demo:pendant", "packs", { mount: "ceiling", light: true, electric: true });
  assert.equal(traits.mount, "ceiling");
  assert.deepEqual([...traits.capabilities].sort(), ["light", "power"]);
});
