import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { translate, type I18nKey } from "../i18n.ts";
import { FURNITURE_GROUPS, FURNITURE_SIZE, FURNITURE_TYPES } from "../model.ts";
import type { HomeAssistant } from "../types.ts";
import { BUILTIN_FURNITURE_BY_ID, BUILTIN_FURNITURE_CATALOG, furnitureCatalogEntry, furnitureCatalogIssues, furnitureCatalogSummary, FURNITURE_LIBRARY_GROUPS, HIDDEN_FURNITURE_TYPES, REFERENCE_PACK_ITEMS, REFERENCE_PACK_TARGETS } from "./catalog.ts";
import { FURNITURE_GROUPS as METADATA_GROUPS, FURNITURE_SIZE as METADATA_SIZE, FURNITURE_TYPES as METADATA_TYPES } from "./metadata.ts";

test("model keeps identity-compatible furniture metadata exports", () => {
  assert.equal(FURNITURE_TYPES, METADATA_TYPES);
  assert.equal(FURNITURE_GROUPS, METADATA_GROUPS);
  assert.equal(FURNITURE_SIZE, METADATA_SIZE);
});

test("built-in furniture catalog has stable complete metadata", () => {
  assert.deepEqual(furnitureCatalogIssues(), []);
  assert.equal(BUILTIN_FURNITURE_CATALOG.length, FURNITURE_TYPES.length);
  assert.deepEqual(
    BUILTIN_FURNITURE_CATALOG.map((item) => item.id),
    [...FURNITURE_TYPES],
  );
  for (const item of BUILTIN_FURNITURE_CATALOG) {
    assert.equal(item.size, FURNITURE_SIZE[item.id]);
    assert.equal(item.nameKey, `furn_${item.id}`);
    assert.equal(item.renderer, item.id);
    assert.equal(item.symbol, item.id);
    assert.equal(furnitureCatalogEntry(item.id), item);
    assert.ok(item.size.every((value) => Number.isFinite(value) && value > 0), `${item.id}: positive finite size`);
  }
  assert.equal(BUILTIN_FURNITURE_BY_ID.size, FURNITURE_TYPES.length);
  assert.equal(furnitureCatalogEntry("pack:example:item"), undefined);
  assert.deepEqual(FURNITURE_LIBRARY_GROUPS, FURNITURE_GROUPS);
});

test("catalog inventory locks the Phase 0 baseline", () => {
  const summary = furnitureCatalogSummary();
  assert.equal(summary.total, 143);
  assert.equal(summary.library, 136);
  assert.equal(summary.hidden, 7);
  assert.equal(summary.memberships, 137);
  assert.deepEqual(summary.ungrouped, [...HIDDEN_FURNITURE_TYPES]);
  assert.deepEqual(summary.multiGroup, { worktop: ["kitchen", "work"] });
  assert.deepEqual(summary.groups, Object.fromEntries(Object.entries(FURNITURE_GROUPS).map(([group, types]) => [group, types.length])));
  assert.equal(Object.keys(summary.referencePacks).length, 16);
  assert.equal(Object.values(REFERENCE_PACK_TARGETS).reduce((sum, count) => sum + count, 0), 474);
  assert.equal(Object.values(REFERENCE_PACK_ITEMS).flat().length, 136);
  assert.deepEqual(summary.referencePacks.pets, { current: 0, target: 24 });
  assert.deepEqual(summary.referencePacks.utility, { current: 18, target: 18 });
  assert.deepEqual(summary.referencePacks.smart_home, { current: 46, target: 30 });
  assert.deepEqual(summary.referencePacks.living, { current: 23, target: 69 });
});

test("every built-in furniture type has English, German and Vietnamese names", () => {
  const vi = JSON.parse(readFileSync("lang/vi.json", "utf8")) as Record<string, string>;
  const hass = (language: string) => ({ language }) as HomeAssistant;
  for (const type of FURNITURE_TYPES) {
    const key = `furn_${type}` as I18nKey;
    assert.notEqual(translate(hass("en"), key), key, `${type}: English name`);
    assert.notEqual(translate(hass("de"), key), key, `${type}: German name`);
    assert.ok(vi[key]?.trim(), `${type}: Vietnamese name`);
  }
  for (const group of Object.keys(FURNITURE_GROUPS)) assert.ok(vi[`furn_group_${group}`]?.trim(), `${group}: Vietnamese group name`);
});
