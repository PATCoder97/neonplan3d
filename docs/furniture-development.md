# Adding built-in furniture

Built-in furniture is procedural, ships under this repository's MIT licence and stays compatible
with saved plans through a stable `type` string. Add related products as a family of roughly 8–20
items; do not copy meshes, textures, screenshots, dimensions or traced silhouettes from commercial
packs. See [asset provenance](asset-provenance.md) before using any external reference or binary
asset.

## 1. Choose the identity and metadata

An ID is part of the saved-plan format. Use lowercase `snake_case`, describe function rather than
colour, and never rename or reuse a released ID. Colour and resizable dimensions belong in the
renderer or instance data, not in duplicate IDs.

Update `frontend/src/furniture/metadata.ts`:

- append the ID to `FURNITURE_TYPES`;
- put it in one or more editor `FURNITURE_GROUPS` without changing established ordering needlessly;
- give it a positive default `[width, depth, height]` in metres in `FURNITURE_SIZE`.

Assign exactly one primary functional category in `REFERENCE_PACK_ITEMS` in
`frontend/src/furniture/catalog.ts`. This category is for audit coverage; editor groups may overlap.
Only implementation-only items belong in `HIDDEN_FURNITURE_TYPES`.

The editor derives filter traits in `frontend/src/furniture/filters.ts`. Check the inferred floor,
surface, wall or ceiling mount and the modern, classic, natural or technical style. Declare actual
pack mount/capability metadata rather than relying on a name heuristic. A powered item, live screen,
lamp or moving model must appear under its corresponding capability filter.

## 2. Add all three names

Add the `furn_<id>` key to the English and German dictionaries in `frontend/src/i18n.ts` and to
`frontend/lang/vi.json`. Add useful synonyms where the search index is defined. Search is
accent-insensitive, so verify both the translated spelling and a Vietnamese query without accents.
Do not use a translated label as program identity; only the stable ID is stored in a plan.

## 3. Build one reusable 3D family

Put procedural model functions in `frontend/src/viewer/furniture-models/<family>.ts` and register
them in `furniture-models/index.ts`. Compose primitives through `FurnitureBuilder` from
`viewer/furniture-builder.ts`; it owns transforms, mirrored winding, the shared palette, outlines and
cache-compatible geometry.

Keep geometry finite, bounded by the declared dimensions and recognisable at editor scale. Return
whether the dispatcher should add a floor contact shadow; wall-, ceiling- and surface-mounted items
must not receive a false floor shadow. Register a live screen rectangle alongside the model when an
item exposes a display. Keep model output deterministic because the bounded LRU geometry cache keys
shape, mounting, orientation, mirroring and pack version.

## 4. Add the matching 2D symbol

Put the top-view SVG primitive in
`frontend/src/components/furniture-symbols/<family>.ts` and register it in
`furniture-symbols/index.ts`. The symbol must share the stable ID and remain legible when scaled or
mirrored. Do not fall back to a generic rectangle for a visible built-in item.

## 5. Connect Home Assistant only where useful

Add entity-domain, device-class or name matching in `frontend/src/devices.ts` only for interactive
items. Reuse existing capability behavior for lights, fans, screens, power, climate, media and
motion. Combined objects keep independent roles—for example `fan_ceiling_light` resolves a fan and
a light separately. Missing or unavailable entities must leave a valid, inactive model rather than
hide or break it.

## 6. Lock the behavior with tests

Every family needs coverage appropriate to its behavior:

- catalog validation: unique stable ID, valid size, group, three translations and one reference
  category;
- 3D registry and finite-geometry checks, including declared bounds and mount height;
- 2D symbol registry coverage and live-screen alignment when applicable;
- entity-resolution and active-state tests for interactive items;
- compatibility tests when a change touches an existing ID, default size or saved-plan field;
- filter tests when mounting, capability or style classification is new or exceptional.

Use the development gallery to inspect the whole catalog and the screenshot harness for focused UI
or visual evidence. A new item is not done merely because it compiles: its 3D model, 2D symbol,
translation, filters and entity behavior must agree.

## 7. Run the release checks

From the repository root run:

```sh
npm --prefix frontend run typecheck
npm --prefix frontend test
npm --prefix frontend run build
npm --prefix frontend run catalog
npm --prefix frontend run gallery:check
git diff --check -- . ':!custom_components/neonplan3d/frontend/*.js'
```

`npm run build` writes the committed Home Assistant bundles under
`custom_components/neonplan3d/frontend`; never edit those bundles directly. The catalog report must
show no duplicate, unknown, untranslated or unclassified type. Inspect gallery/screenshot output for
clipping, incorrect mounting, mirror errors and indistinguishable variants.

For a release batch, update the manifest version, `CHANGELOG.md`, relevant manual/roadmap text and
illustrations. Commit the generated bundles with their source, tag the same version and push both
the branch and tag only after every check passes.

## Pull-request checklist

- [ ] Released IDs are unchanged; every new ID is stable and functional, not a colour duplicate.
- [ ] Size, editor group, primary reference category, mount, capability and style are correct.
- [ ] English, German and Vietnamese names and useful search terms are present.
- [ ] Dedicated 3D geometry and 2D symbol are registered and visually inspected.
- [ ] Screens, lights, fans, power or other entities degrade safely when missing.
- [ ] Automated tests cover geometry and interactive behavior; catalog and gallery checks pass.
- [ ] External references and any binary asset have documented provenance and compatible licensing.
- [ ] Version, changelog, manual/roadmap and generated frontend bundles are updated for release.
