import assert from "node:assert/strict";
import { test } from "node:test";
import { FURNITURE_TYPES } from "../../model.ts";
import { BUILTIN_FURNITURE_SYMBOLS, registeredFurnitureSymbol } from "../../components/furniture-symbols/index.ts";
import { BUILTIN_FURNITURE_MODELS, BUILTIN_FURNITURE_SCREENS, registeredFurnitureScreen } from "./index.ts";

const UTILITY_TYPES = ["balcony_solar", "dishwasher", "dryer", "washer", "washer_dryer_tower"];

test("every non-lamp built-in has a family renderer", () => {
  const expected = FURNITURE_TYPES.filter((type) => type !== "led_strip" && !type.startsWith("lamp_")).sort();
  assert.deepEqual(Object.keys(BUILTIN_FURNITURE_MODELS).sort(), expected);
});

test("a family can keep its 3D model, 2D symbol and live screen together", () => {
  assert.deepEqual(Object.keys(BUILTIN_FURNITURE_SCREENS).sort(), UTILITY_TYPES);
  assert.deepEqual(Object.keys(BUILTIN_FURNITURE_SYMBOLS).sort(), UTILITY_TYPES);
  for (const type of UTILITY_TYPES) {
    assert.ok(registeredFurnitureSymbol(type, 1, 1)?.length, `${type}: symbol`);
    assert.ok(registeredFurnitureScreen(type, 1, 1, 1), `${type}: screen`);
  }
  assert.equal(registeredFurnitureSymbol("unknown", 1, 1), null);
  assert.equal(registeredFurnitureScreen("unknown", 1, 1, 1), undefined);
});
