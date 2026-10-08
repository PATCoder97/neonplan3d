# Adding built-in furniture

Built-in furniture is kept compatible with saved plans through a stable `type` string. New
procedural models should use the family registries instead of adding more branches to the legacy
renderer switches.

## Files for a new family

- `frontend/src/viewer/furniture-models/<family>.ts`: 3D model functions, contact-shadow decision
  and live screen rectangles. Compose the family in `furniture-models/index.ts`.
- `frontend/src/components/furniture-symbols/<family>.ts`: matching top-view 2D symbols. Compose the
  family in `furniture-symbols/index.ts`.
- `frontend/src/model.ts`: stable ID, default size and editor group until the remaining legacy
  metadata has moved to a declarative catalog.
- `frontend/src/i18n.ts` and `frontend/lang/vi.json`: German, English and Vietnamese names.
- `frontend/src/devices.ts`: entity-name/domain matching only when the item is interactive.
- `frontend/src/furniture/catalog.ts`: one primary reference-pack category.

Use `FurnitureBuilder` from `viewer/furniture-builder.ts`; it owns transforms, mirrored winding,
the shared palette and outline styles. A family renderer returns `true` when the dispatcher should
add a floor contact shadow and `false` for wall-, ceiling- or surface-mounted models.

## Required checks

Add the family keys to a registry test so 3D models, 2D symbols and live screens cannot drift apart.
Add a finite-geometry test for every new type and entity-resolution tests for interactive items.
Then run:

```sh
cd frontend
npm run typecheck
npm test
npm run catalog
npm run build
```

Never edit files in `custom_components/neonplan3d/frontend` directly; `npm run build` generates
those bundles and copies lazy-loaded translations.

