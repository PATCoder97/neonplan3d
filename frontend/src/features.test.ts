import assert from "node:assert/strict";
import { test } from "node:test";
import { hasFeature, manualUrl, shopUrl, unlockedFeatures } from "./features.ts";

test("features come from installed packs that list them; unknown names are ignored", () => {
  assert.deepEqual([...unlockedFeatures([])], []);
  const packs = [{ features: ["weather", "time_travel"] }, { features: undefined }, { features: ["camera_cockpit"] }];
  assert.deepEqual([...unlockedFeatures(packs)].sort(), ["camera_cockpit", "weather"]);
  assert.equal(hasFeature("screens", [{ features: ["screens"] }]), true);
  assert.equal(hasFeature("screens", [{ features: ["screens"] }]), true);
  assert.equal(hasFeature("weather", [{ features: ["weather"] }]), true);
  assert.equal(hasFeature("camera_cockpit", [{ features: ["weather"] }]), false);
});

test("manual and shop links follow the language and point Pro add-ons at their section", () => {
  assert.equal(manualUrl("de"), "https://github.com/PATCoder97/neonplan3d/blob/main/docs/anleitung.md");
  assert.equal(manualUrl("en-GB"), "https://github.com/PATCoder97/neonplan3d/blob/main/docs/manual.md");
  assert.equal(manualUrl("de", "weather"), "https://github.com/PATCoder97/neonplan3d/blob/main/docs/anleitung.md#62-wetter-drau%C3%9Fen");
  assert.equal(manualUrl("fr", "camera_cockpit"), "https://github.com/PATCoder97/neonplan3d/blob/main/docs/manual.md#61-camera-cockpit");
  assert.equal(shopUrl("de-AT"), "https://mastershort.de/neonplan3d/?lang=de");
  assert.equal(shopUrl("nl"), "https://mastershort.de/en/neonplan3d/?lang=en");
});
