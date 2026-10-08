import assert from "node:assert/strict";
import { test } from "node:test";
import { FURNITURE_TYPES } from "../../model.ts";
import { BUILTIN_FURNITURE_SYMBOLS, registeredFurnitureSymbol } from "../../components/furniture-symbols/index.ts";
import { BUILTIN_FURNITURE_MODELS, BUILTIN_FURNITURE_SCREENS, registeredFurnitureScreen } from "./index.ts";

const SCREEN_TYPES = ["alarm_sunrise", "arcade_cabinet", "baby_monitor", "balcony_solar", "bathroom_fan", "bed_ambient_180", "dishwasher", "dryer", "electric_towel_heater", "fireplace_builtin", "fitness_mirror_smart", "led_niche", "light_cove", "media_wall_tv", "mirror_80_light", "mirror_cabinet_light", "mirror_led_clock", "mirror_round_light", "monitor_dual", "monitor_single", "monitor_triple", "rain_shower_led", "tv_stand", "vanity_light", "wardrobe_light", "washer", "washer_dryer_tower"];
const SYMBOLLESS_INTERNAL_TYPES = ["fridge_smart", "grid_point", "home_battery", "inverter", "meter", "stairwell", "wallbox", "worktop"];

test("every non-lamp built-in has a family renderer", () => {
  const expected = FURNITURE_TYPES.filter((type) => type !== "led_strip" && !type.startsWith("lamp_")).sort();
  assert.deepEqual(Object.keys(BUILTIN_FURNITURE_MODELS).sort(), expected);
});

test("every visible built-in 2D symbol is registered by family", () => {
  const expected = FURNITURE_TYPES.filter((type) => !SYMBOLLESS_INTERNAL_TYPES.includes(type)).sort();
  assert.deepEqual(Object.keys(BUILTIN_FURNITURE_SYMBOLS).sort(), expected);
});

test("a family can keep its 3D model, 2D symbol and live screen together", () => {
  assert.deepEqual(Object.keys(BUILTIN_FURNITURE_SCREENS).sort(), SCREEN_TYPES);
  for (const type of SCREEN_TYPES) {
    assert.ok(registeredFurnitureSymbol(type, 1, 1)?.length, `${type}: symbol`);
    assert.ok(registeredFurnitureScreen(type, 1, 1, 1), `${type}: screen`);
  }
  assert.equal(registeredFurnitureSymbol("unknown", 1, 1), null);
  assert.equal(registeredFurnitureScreen("unknown", 1, 1, 1), undefined);
});
