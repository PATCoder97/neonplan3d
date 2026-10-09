# Changelog

All notable changes to NeonPlan 3D. The full notes in German and English are on the
[releases page](https://github.com/PATCoder97/neonplan3d/releases). Ideas and votes:
[Discussions → Ideas](https://github.com/PATCoder97/neonplan3d/discussions/categories/ideas).

## Unreleased

## 1.24.4

### Added

- Added the clean-room Neon Honeycomb device overlay with six-direction geometry, paginated typed actions, one-axis pointer pads, focus trapping, reduced motion, stage-edge docking and a classic rollback option.
- Added capability-driven controls for lights, covers, switches, fans, locks, cameras, media players, climate entities and Car Pro, including cross-entity service targets and mandatory unlock confirmation.
- Added a standalone Honeycomb visual fixture, 45 golden frames, mouse/touch/keyboard media, Chromium/Firefox/WebKit acceptance scripts, geometry/motion/service regression tests, and the clean-room baseline and attribution record.

### Changed

- New and normalized plans default to Neon Honeycomb; `menu_style: classic` remains available at plan or card level.
- Refined Neon Honeycomb to the public reference's compact 225 px footprint: seven equal 64 × 72 px point-up hexagons, 2 px inter-cell spacing and a tightly joined NW/NE/E/SE/SW/W ring, while retaining NeonPlan's dark glass and cyan glow theme.

## 1.24.3

### Changed

- Updated the English and German manuals and README from the old 40/128-item descriptions to the audited 458-item, 13-group built-in library.
- Replaced the library illustration with the current combined room, mounting, capability and style filters.
- Expanded the built-in furniture contribution guide with stable-ID, metadata, translation, renderer, symbol, entity, test, provenance and release checklists.
- Marked the furniture-pack roadmap complete and linked its gallery audit and device/quality release report.

## 1.24.2

### Added

- Added a reproducible nine-case release matrix covering desktop, portrait tablet and mobile viewports at Auto, Tablet/Low and High quality.
- Added runtime assertions for the applied renderer tier and non-zero responsive canvas, a visual contact sheet and a Vietnamese test report.

### Changed

- The screenshot harness now verifies quality state instead of relying on filenames or visual inference alone; all nine cases pass without application, WebGL or layout failures.

## 1.24.1

### Added

- Added a lazy, bounded 256-entry LRU cache for procedural furniture solids, outlines and contact shadows, keyed by exact shape, mount height, orientation and pack-registry version.
- Added regression coverage proving repeated positioned instances hit the cache while preserving coordinates, colours, fold masks and mirrored winding.

### Changed

- Rebuilding a plan now reuses previously generated furniture geometry and only translates cached instances, avoiding repeated procedural construction as the catalog and placed-item count grow.

## 1.24.0

### Added

- Added composable furniture-library filters for room/group, floor/surface/wall/ceiling mount, static/light/screen/power/motion capability and modern/classic/natural/technical style.
- Added filter classification and regression tests for built-in and imported-pack metadata, plus a visual test scenario for combined filters.

### Changed

- Furniture search and filters now work together across built-in groups and imported packs; accent-insensitive Vietnamese search is retained and covered by a dedicated test.

## 1.23.9

### Added

- Added 12 functionally distinct Kitchen items: coffee machine, wine fridge, bar island, recycling station, pull-out pantry, corner carousel, double-oven tower, open/spice/plate shelving, kitchen cart and upright freezer.
- Added dedicated procedural 3D models, recognisable 2D symbols, English/German/Vietnamese names, powered-device capabilities and appropriate surface/wall mounts for the new family.

### Changed

- Closed the functional-coverage comparison against the public 474-item reference at 458 useful library items: all 16 groups are functionally aligned without padding the catalog with size- or colour-only variants.
- Expanded Kitchen coverage from 19 to 31 useful primary items and the complete inventory to 465 declared types and 458 library items.

## 1.23.8

### Added

- Added a reproducible audit of all 16 official public product galleries, recording source URLs, gallery image counts, functional coverage and the remaining Kitchen gap without committing commercial reference images.
- Added 2D, Neon 3D and Day 3D visual baselines plus an asset-provenance register covering project screenshots, brand assets, fonts and the no-external-mesh policy.

### Changed

- Closed the roadmap's Phase 0 review tasks with a ten-ID compatibility shortlist and explicit outcomes for revised versus retained legacy furniture.

## 1.23.7

### Added

- Completed Home Cinema & Hi-Fi with a turntable, vinyl shelf, game console, equipment rack, individual and three-seat cinema chairs, acoustic treatment, popcorn machine and a controllable star ceiling.
- Added six focused hi-fi accessories: a surround speaker on its stand, an in-wall speaker, media streamer, Blu-ray player, stereo amplifier and headphone stand.

### Changed

- The star ceiling participates in live Home Assistant lighting and room illumination; the new playback and audio equipment links to matching media players, while tabletop components follow supporting hi-fi furniture.
- Expanded the reproducible inventory to 453 declared types and 446 library items, completing Home Cinema & Hi-Fi coverage at 35 of 35 and all 16 roadmap groups.

## 1.23.6

### Added

- Added the first 16-item Home Cinema & Hi-Fi batch: three projection screens, three projectors, six speaker formats, an AV receiver and two OLED TV sizes.
- Added a dedicated Cinema library group with procedural 3D models, plan symbols and English, German and Vietnamese names.

### Changed

- Cinema displays expose Live Screens; wall-, ceiling- and surface-mounted equipment follows its installation height, while both visual and audio equipment can link to matching Home Assistant media players.
- Expanded the reproducible inventory to 437 declared types and 430 library items, with Home Cinema & Hi-Fi coverage at 19 of 35.

## 1.23.5

### Added

- Completed the 17-item Fitness family with cardio machines, strength equipment, yoga and wall-training accessories, a smart mirror, indoor bike trainer, sauna cabin, massage chair, kettlebells and a cooled water station.
- Added a dedicated Fitness library group with procedural 3D models, plan symbols and English, German and Vietnamese names.

### Changed

- The smart fitness mirror supports Live Screens; wall mirrors and bars use dedicated mount heights, and nine powered fitness devices expose Home Assistant linking capability.
- Expanded the reproducible inventory to 421 declared types and 414 library items, completing Fitness coverage at 17 of 17.

## 1.23.4

### Added

- Completed Pets with food/water bowls, an automatic feeder, water fountain, pet gate and stairs, hamster/small-animal/bird cages, an outdoor rabbit enclosure, two aquariums and a terrarium.
- Added dedicated procedural habitat interiors and plan symbols, plus English, German and Vietnamese names for the second 12-item batch.

### Changed

- Automatic feeders, water fountains, aquariums and terrariums now expose powered-device capability for Home Assistant linking.
- Expanded the reproducible inventory to 404 declared types and 397 library items, completing Pets coverage at 24 of 24.

## 1.23.3

### Added

- Added the first 12-item Pets batch: three cat scratching/climbing structures, a cat cave, round bed, wall perch, two litter boxes, two dog beds, a dog basket and a dog house.
- Added a dedicated Pets library group with procedural 3D models, plan symbols and English, German and Vietnamese names.

### Changed

- Cat scratch boards, perches and climbing steps now use dedicated wall-mount heights; regression coverage checks mounts, geometry bounds and the self-cleaning litter-box mechanism.
- Expanded the reproducible inventory to 392 declared types and 385 library items, with Pets coverage at 12 of 24.

## 1.23.2

### Added

- Completed the 18-item Kids Room family with a teepee, play kitchen, desk, toy storage, cushion corner, rocking horse, road rug, table set, ball pit, house bed, video baby monitor, changing dresser and kids wardrobe alongside the existing crib and bunk bed.
- Added dedicated controllable moon and star-projector night lights, procedural 3D models, plan symbols and English, German and Vietnamese names for all 16 new items.

### Changed

- Kids' desks, table sets and changing dressers now act as placement surfaces; the video baby monitor supports Live Screens and follows its supporting surface.
- Expanded the reproducible inventory to 380 declared types and 373 library items, completing Kids Room coverage at 18 of 18.

## 1.23.1

### Added

- Completed Office & Gaming with a gaming chair, sim-racing cockpit, 42U server rack, open and enclosed 3D printers, whiteboard, triple-monitor setup, arcade cabinet, laser printer, office phone booth and wall filament shelf.
- Added Live Screen surfaces for the monitor family and arcade cabinet, plus dedicated procedural models, plan symbols and three-language names for the second batch.

### Changed

- Office printers and monitors now follow supporting desk surfaces; the whiteboard and filament shelf use fixed wall-mount heights.
- Expanded the reproducible inventory to 364 declared types and 357 library items, completing Office & Gaming coverage at 25 of 25.

## 1.23.0

### Added

- Added the first Office & Gaming batch with three desk layouts, two office chairs, filing and drawer storage, an office bookcase, single and dual monitors, and a PC tower.
- Added dedicated procedural 3D models, plan symbols, localized names and geometry regression coverage for all 11 new items.

### Changed

- Monitors now detect built-in desk surfaces and sit at the supporting desk's height.
- Expanded the reproducible inventory to 353 declared types and 346 library items, with Office & Gaming coverage at 14 of 25.

## 1.22.7

### Added

- Completed the 15-item Vehicles reference family with city and cargo bicycles, scooter, touring motorcycle and nine distinct car/van body styles alongside the existing motorbike and parking spot.
- Added procedural low-poly models, plan symbols and English, German and Vietnamese names for all built-in vehicles.

### Changed

- Parking spots now accept built-in vehicles as well as imported-pack vehicles, including presence/type selection, scaling, floor rendering and existing Car Pro state overlays.
- Expanded the reproducible inventory to 342 declared types and 335 library items, with Vehicles coverage at 15 of 15.

## 1.22.6

### Added

- Completed the 17-item Garage & Workshop family: workbenches, tool storage, racks, compressor, shop vacuum, ladders, boxes, tyres, bike storage, repair stand, parts bins, utility sink and charging station.
- Added dedicated procedural models, plan symbols and English, German and Vietnamese names for the complete family.

### Changed

- Expanded the reproducible inventory to 329 declared types and 322 library items, with Garage coverage at 17 of 17.
- Added geometry and wall-mount regression coverage for workshop fixtures.

## 1.22.5

### Added

- Completed the 12-item Stairs & Railings family with L-shaped landing and winder stairs, spiral, open-riser, concrete and compact stairs, plus glass, metal, wood and cable railings.
- Added dedicated procedural 3D models, readable plan symbols and English, German and Vietnamese names for every new item.

### Changed

- Centralised built-in stair detection so every stair family automatically follows the next-floor height, stays floor-mounted and cuts its full footprint from the slab above.
- Expanded the reproducible inventory to 312 declared types and 305 library items, with regression coverage for every new automatic stair opening.

## 1.22.4

### Added

- Added twelve procedural Garden & Patio vegetation models: eight tree silhouettes, two shrubs, wild brush and a three-tree group.
- Added dedicated 2D symbols and English, German and Vietnamese names for the complete vegetation family.

### Changed

- Completed Garden & Patio coverage beyond the 33-item reference milestone, with 37 independently designed built-in items and 295 library items overall.
- Added geometry regression coverage for tree crowns, shrubs, blossoms and grouped planting.

## 1.22.3

### Added

- Added the second Garden & Patio batch: play tower with slide, garden shed, trampoline, three flower pots, lawn sprinkler, irrigation valve box, rain barrel, garden lantern, outdoor kitchen and patio heater.
- Extended the dedicated Garden 2D/3D family with recognizable footprints and procedural utility geometry.

### Changed

- Expanded the reproducible catalog inventory to 290 declared types and 283 library items, with Garden coverage at 25 of 33.

## 1.22.2

### Added

- Added the first Garden & Patio batch: gas grill, outdoor lounge set, sun lounger, parasol, pergola, raised bed, greenhouse, outdoor hot tub, fire bowl and garden torch.
- Added a dedicated Garden family with independent procedural 3D models, 2D plan symbols and Vietnamese, English and German names.

### Changed

- Expanded the reproducible catalog inventory to 280 declared types and 273 library items, with Garden coverage at 15 of 33.

## 1.22.1

### Added

- Completed Architecture & Fit-out with a built-in shelf niche, LED niche, ceiling light cove, two-step platform, glass gallery railing and window seat.
- Added dedicated 2D symbols, procedural 3D geometry, localized names, placement surfaces and live light states for the new architectural elements.

### Changed

- Expanded the reproducible catalog inventory to 270 declared types and 263 library items, with Architecture coverage complete at 17 of 17.

## 1.22.0

### Added

- Added the first Architecture & Fit-out batch: round, square and steel columns, a five-beam ceiling, downstand beam, indoor chimney, built-in fireplace and sliding wall.
- Added a focused Architecture 2D/3D family, localized names and a live light surface for the built-in fireplace.

### Changed

- Reclassified gates and fences under Garden and parking under Vehicles; the existing motorised curtain and glass partition now count toward Architecture.
- Expanded the reproducible catalog inventory to 264 declared types and 257 library items, with Architecture coverage at 11 of 17.

## 1.21.0

### Added

- Added separate, composable library badges for lights, screens, moving furniture and power-linked devices; one item may expose several capabilities.
- Added regression coverage for normalized occupancy, playback, opening and unavailable entity states.

### Changed

- Completed the technical-device, entity-mapping and capability-badge milestones of the Smart Home phase in the Vietnamese roadmap.
- Preserved the existing safe unavailable fallback and power/battery mappings while documenting their completed coverage.

## 1.20.12

### Added

- Added small, medium and large quick-layout packs for kitchens, bathrooms, bedrooms and living rooms, expanding the chooser from 9 to 21 layouts.
- Added German, English and Vietnamese labels and practical furniture combinations for every new room size.
- Added package regression coverage for all size tiers and occupied-room collision avoidance.

### Changed

- Quick layouts now skip positions already occupied by placed furniture instead of stacking new items over them.
- Marked the completed lighting/cooling and room-layout milestones in the Vietnamese furniture roadmap.

## 1.20.11

### Added

- Completed the bathroom reference milestone at 37/37 with a sauna, indoor whirlpool, towel radiator and electric heater, washer/laundry cabinets and basket, towel ladder, illuminated mirror cabinet, bathroom fan, washer vanity, LED rain shower and clock mirror.
- Added dedicated 2D symbols, low-poly 3D geometry and German/English/Vietnamese names for all thirteen items.
- Added live state surfaces and automatic entity-name matching to six electrical bathroom fixtures.

### Changed

- Mapped the existing standalone shower screen to Architecture & Finishing while retaining it in the Bathroom editor group.
- Expanded the reproducible catalog inventory to 256 declared types and 249 library items.

## 1.20.10

### Added

- Added close-coupled and wall-hung toilets, a bidet, tall and mid-height bathroom cabinets, two lit mirrors, a wall shelf, towel rail and freestanding tub.
- Added dedicated 2D symbols, low-poly 3D geometry and German/English/Vietnamese names for all ten bathroom items.
- Added live state surfaces and automatic light-name matching for the round and rectangular illuminated mirrors.

### Changed

- Expanded the reproducible catalog inventory to 243 declared types and 236 library items, with bathroom reference coverage at 25 of 37.

## 1.20.9

### Added

- Added the first bathroom expansion batch: fixed 60/80/100 cm vanities, a 120 cm double vanity, pedestal basin, built-in and corner tubs, plus corner, niche and walk-in showers.
- Added dedicated parameterized 2D symbols, low-poly 3D models and German/English/Vietnamese names for all ten items.

### Changed

- Split all new sanitary geometry into focused Bathroom model and symbol modules, separate from kitchen furniture.
- Expanded the reproducible catalog inventory to 233 declared types and 226 library items, with bathroom reference coverage at 15 of 37.

## 1.20.8

### Added

- Completed the bedroom reference milestone at 41/41 with a clothes rail, canopy bed, sliding and walk-in wardrobes, mirrored and lit vanities, a bed bench, changing table, floor mirror, tall chest and reading nook.
- Added an ambient-lit bed, internally lit wardrobe and sunrise alarm with dedicated state surfaces and automatic entity-name matching.
- Added distinct parameterized 2D symbols, low-poly 3D models and German/English/Vietnamese names for all fourteen items.

### Changed

- Expanded the reproducible catalog inventory to 223 declared types and 216 library items.
- Kept all additions in the focused Bedroom renderer and symbol family and reused shared bed, wardrobe and drawer primitives.

## 1.20.7

### Added

- Added a second bedroom batch: four- and six-door wardrobes, mirrored and corner wardrobes, drawer/slim/floating nightstands, and three fixed drawer-chest layouts.
- Added dedicated parameterized 2D symbols, low-poly 3D models and German/English/Vietnamese names for all ten items.
- Added a mount-height regression test for the floating nightstand, including its absence of a floor contact shadow.

### Changed

- Expanded the reproducible catalog inventory to 209 declared types and 202 library items, with bedroom reference coverage now at 27 of 41.
- Made the new floor nightstands valid support surfaces while preserving an absolute 48 cm wall mount for the floating variant.

## 1.20.6

### Added

- Started the Phase 2 bedroom expansion with fixed 90/140/160/180/200 cm bed widths, upholstered, box-spring and futon styles, plus two- and three-door wardrobes.
- Added dedicated parameterized 2D symbols and low-poly 3D models with German/English/Vietnamese names for all ten items.
- Added regression coverage that locks wardrobe door dividers and handles to the selected variant.

### Changed

- Expanded the reproducible catalog inventory to 199 declared types and 192 library items, with bedroom reference coverage now at 17 of 41.
- Kept the new family in focused Bedroom renderer and symbol modules instead of growing the generic everyday files.

## 1.20.5

### Added

- Completed the living-room reference milestone at 69/69 with a media wall and TV, upright piano with bench, pampas floor vase, large monstera, round rug and electric fireplace.
- Added dedicated 2D symbols, low-poly 3D geometry and German/English/Vietnamese names for all six feature pieces.
- Added Live Screen and media-player behavior to the media wall, including registry and front-face regression checks.

### Changed

- Expanded the reproducible catalog inventory to 189 declared types and 182 library items.
- Started a focused Living renderer and symbol family so feature pieces no longer increase the already broad everyday modules.

## 1.20.4

### Added

- Added a fifth Phase 2 living-room batch: velvet and five-part modular sofas, four fixed-size dining tables, a dining bench, a three-drawer chest, a TV on a stand and a wood stove.
- Added dedicated 2D symbols, reusable low-poly 3D geometry, practical dimensions and German/English/Vietnamese names for all ten items.
- Added a Live Screen and automatic media-player linking for the freestanding TV, with regression coverage for both behaviors.

### Changed

- Expanded the reproducible catalog inventory to 183 declared types and 176 library items, with living-room reference coverage now at 63 items.
- Made all four fixed dining tables valid support surfaces and kept related variants on parameterized renderers.

## 1.20.3

### Added

- Added a fourth Phase 2 living-room batch: chaise longue, cocktail chair, recliner with footstool, bean bag, upholstered and shell dining chairs, three fixed-width lowboards and a highboard.
- Added dedicated 2D symbols, reusable low-poly 3D geometry, practical dimensions and German/English/Vietnamese names for all ten items.
- Added regression coverage that verifies wider lowboards receive more storage compartments.

### Changed

- Expanded the reproducible catalog inventory to 173 declared types and 166 library items, with living-room reference coverage now at 53 items.
- Made the three lowboards valid support surfaces for table lamps and other surface-mounted items.

## 1.20.2

### Added

- Added a third Phase 2 living-room batch: Chesterfield, armless, chaise and U-shaped sofas; club, wingback and rocking chairs; a 4×4 cube shelf, room-divider shelf and console table.
- Added dedicated 2D symbols, reusable low-poly 3D renderers, practical dimensions and German/English/Vietnamese names for all ten items.
- Added footprint regression checks that distinguish a one-sided chaise from a two-sided U-shaped sofa.

### Changed

- Expanded the reproducible catalog inventory to 163 declared types and 156 library items, with living-room reference coverage now at 43 items.
- Kept the new furniture in the everyday family registry and reused parameterized seating/grid primitives instead of expanding central renderer switches.

## 1.20.1

### Added

- Added a second Phase 2 living-room batch: round and glass coffee tables, nesting tables, a round side table, a wide bookshelf, 2×2 and 4×2 cube shelves, and a correctly mounted floating wall shelf.
- Added two independently designed Vietnamese worship-furniture variants: an open altar table and an enclosed altar cabinet.
- Added dedicated 2D symbols, parameterized low-poly 3D geometry, practical default dimensions and German/English/Vietnamese names for all ten items.

### Changed

- Expanded the reproducible catalog inventory to 153 declared types and 146 library items, with living-room reference coverage now at 33 items.
- Marked the new table family as valid surfaces for table lamps and documented which additions follow the public Living Room list versus the fork's Vietnam-specific roadmap.

## 1.20.0

### Added

- Added the first Phase 2 living-room batch: fixed 2/3/4-seat sofas, left/right corner sofas, an upholstered pouf, a standalone TV console and a glass display cabinet.
- Added dedicated 2D symbols, independently designed low-poly 3D geometry, practical default dimensions and German/English/Vietnamese names for all eight items.

### Changed

- Expanded the reproducible catalog inventory to 143 declared types and 136 library items, with the living-room reference coverage now at 23 items.
- Recorded the public Living Room gallery audit while retaining the existing generic furniture IDs for saved-plan compatibility.

## 1.19.16

### Added

- Added a development gallery that renders all 135 built-in catalog entries with their production 3D previews and 2D symbols, plus search, group filters and per-item error reporting.
- Added complete finite-geometry checks for every standalone furniture and lamp model, and documented the structural-only stairwell entry explicitly.

### Fixed

- Included line-only geometry when framing furniture previews, so parking-space markings no longer produce an empty thumbnail.

## 1.19.15

### Changed

- Moved built-in furniture types, groups, default sizes and static capability sets from the shared data model into a dependency-free furniture metadata module.
- Kept identity-compatible exports from `model.ts`, switched the catalog to the new source directly and added regression coverage for the compatibility facade.

## 1.19.14

### Changed

- Split all 127 existing built-in 2D furniture symbols into everyday, kitchen/bath, architecture/outdoor, climate, smart-home, lighting and utility family registries with shared SVG primitives.
- Reduced the central 2D furniture facade from 441 to 35 lines, leaving it responsible only for registry lookup and external pack fallbacks, and added complete symbol-registry coverage checks.

## 1.19.13

### Changed

- Split every built-in non-light 3D model out of the 2,082-line central furniture renderer into focused everyday, kitchen/bath, architecture/outdoor, climate, smart-home, energy, utility and miscellaneous family modules.
- Replaced the legacy model switch with a composed registry, preserved per-model shadow behavior and added a regression check that every non-light catalog type has a family renderer.

## 1.19.12

### Changed

- Split shared furniture geometry primitives into a reusable `FurnitureBuilder` and introduced family registries for 3D models, live screen rectangles and 2D symbols.
- Migrated the complete Utility family to the new structure, added a registry-consistency test and documented the extension workflow so future furniture no longer grows the central renderer switches.

## 1.19.11

### Added

- Added the two remaining utility models from the first public Smart Home gallery overview: a stacked washer-dryer tower and a plug-in balcony solar kit.
- Added distinct 2D symbols and low-poly 3D geometry, live status/power indicators, automatic Vietnamese/German/English entity matching and demo placements for both models.

## 1.19.10

### Added

- Added nine built-in lights inspired by the public Smart Home gallery: light column, TV light bars, orb table lamp, portable lamp, ambient spot, light cube, round ceiling panel, garden spots and up/down wall light.
- Added a distinct 2D symbol and low-poly 3D model for every light, with suitable mounting, live Home Assistant colour/brightness glow, automatic Vietnamese/German/English entity-name matching and demo placements.

## 1.19.9

### Added

- Added eight built-in Smart Home controls and sensors: wall switch, wall outlet, smart plug, motion sensor, door/window contact, water-leak sensor, temperature/humidity sensor and video doorbell.
- Added distinct 2D/3D geometry, realistic mounting heights, automatic Home Assistant domain/device-class matching, live state indicators, Vietnamese/German/English names and demo placements for the family.

## 1.19.8

### Changed

- Refined the robot vacuum dock, robot mower garage, heat-pump outdoor unit, humidifier and smart control display to more closely follow their recognizable public-gallery silhouettes.
- Synchronized the updated 2D symbols, 3D models and library previews while preserving the existing robot movement, docking and live state effects.

## 1.19.7

### Added

- Added an eight-item technical and smart-control family: electrical panel, UPS, modem/router, heat-pump outdoor unit, hot-water storage tank, ventilation fan, humidifier and smart control display.
- Added distinct 2D/3D geometry, appropriate floor/wall/surface mounting, automatic Home Assistant entity matching, live operating indicators, German/English/Vietnamese names and demo placements for the complete family.

## 1.19.6

### Added

- Added a six-item Smart Home infrastructure and safety family based on the public gallery: network cabinet, NAS server, ceiling Wi-Fi access point, wall thermostat, ceiling smoke detector and wall siren with strobe light.
- Added distinct 2D/3D geometry, correct floor/wall/ceiling mounting, automatic Home Assistant entity matching, live network/climate/alarm indicators, German/English/Vietnamese names and demo placements for the complete family.

## 1.19.5

### Added

- Added a dedicated robot mower with an open low garage, sloped roof, parked mower and live cyan/amber state band based on its Home Assistant `lawn_mower` entity.
- Added automatic outdoor mower entity matching, editor selection, a distinct 2D symbol, Vietnamese/German/English names and a gallery-backed demo placement.

## 1.19.4

### Changed

- Rebuilt the robot vacuum dock from the official Smart Home & Tech gallery as a tall dark charging/emptying station with a cyan status band and charging tongue.
- Automatically migrate untouched legacy low docks to the new dimensions while preserving manually resized robot stations and the existing cleaning, returning, docked and error animation states.

## 1.19.3

### Changed

- Redrew both ceiling fans from the official Smart Home & Tech gallery reference with five straight dark blades, a low round motor, short downrod and broad ceiling canopy.
- Changed the combined model to a compact hexagonal amber light cover and made the referenced five-blade silhouette the default while retaining optional three- and four-blade variants.

## 1.19.2

### Added

- Added a wall-mounted fan with dedicated 2D/3D geometry, adjustable mounting height, live rotor animation and Home Assistant fan linking.
- Added selectable three-, four- and five-blade variants for both ceiling-fan models.

## 1.19.1

### Added

- Added a ceiling fan with an integrated light, distinct 2D/3D geometry and independently assigned fan and light entities.
- Made the fan rotor follow only its fan entity while the light kit keeps its own colour, brightness, tap target and room-light behaviour.

## 1.19.0

### Added

- Added a typed built-in furniture catalog, deterministic inventory report and CI validation for all 99 built-in types, their dimensions, library groups, translations and 16 reference-pack coverage targets.

### Changed

- Made the furniture picker, type selector and bilingual search read built-in metadata through the catalog while preserving existing IDs, group order and saved-plan compatibility.

## 1.18.19

### Fixed

- Open the roof of a selected veranda or covered room so its devices remain visible and directly tappable.
- Face the selected covered room from its true front edge, and keep front columns on the edge opposite the house connection for wide, shallow verandas.

## 1.18.18

### Added

- Added verandas and covered areas directly to the Room menu, retaining room selection, Home Assistant Area assignment and device attachment without enclosing walls.
- Added configurable covered-room roofs, slopes, railings and columns, with direct room selection from the complete 3D structure.

## 1.18.17

### Added

- Turned covered verandas and yards into self-contained, room-like outdoor structures with their own floor, roof and direct 3D selection.
- Added editable names, polygon corners, floor and roof finishes, railings, front-column count and column dimensions for covered outdoor structures.

## 1.18.16

### Added

- Added a dedicated outdoor veranda for upper floors, with railings around its free edges, two substantial front columns and a connecting lintel.

## 1.18.15

### Fixed

- Fit a selected room from its true lowest and highest structural points, using the same viewport-aware camera framing as the complete building while retaining a closer room zoom.

## 1.18.12

### Fixed

- Fit the initial 3D camera tightly inside the usable viewport beside the floor thumbnails, moving the orbit target so long diagonal buildings reach close to both the upper and lower edges without clipping.

## 1.18.11

### Fixed

- Automatically turn long, narrow buildings further across wide screens before fitting the initial camera, using more of the available viewport without clipping the structure.

## 1.18.10

### Fixed

- Fit long, narrow buildings from the current camera angle instead of an oversized bounding sphere, reducing empty space while keeping the complete structure visible.

## 1.18.9

### Fixed

- Kept terraces, outdoor structures and free-standing walls inside the initial 3D camera frame, with extra breathing room around the complete building.

## 1.18.8

### Changed

- A single tap on a fan now opens its Home Assistant details like an air conditioner, keeping speed, mode and preset controls directly accessible instead of toggling it immediately.

## 1.18.7

### Added

- Added security cameras, smart speakers, air purifiers, smart door locks and smart curtains with dedicated 2D symbols and detailed 3D models.
- Linked the new smart-home furniture to matching camera, media player, fan, lock and cover entities, with live status accents and preview examples.

## 1.18.6

### Changed

- Reworked the upright water purifier with a bright glass-front cabinet, compact raised gooseneck faucet, matching plan symbol and more realistic default proportions.
- Added an interactive water purifier to the local preview kitchen.

## 1.18.5

### Fixed

- Joined both flights of the U-shaped stair cleanly to the landing, with a continuous inner guard and an outer handrail running around the landing.

### Changed

- Removed the regional furniture-library section and distributed its items into their functional living, climate, bath, work and vehicle sections.

## 1.18.4

### Fixed

- Kept the exact grab point under the pointer while resizing furniture, preventing corners from jumping when a drag starts inside the larger touch target.
- Made furniture rotation use the resized item's new centre and preserve the initial pointer offset, so resize-then-rotate gestures stay aligned without an angle jump.

## 1.18.3

### Fixed

- Reworked the standing fan with a shallower connected guard, rear motor and three swept blades centred correctly inside the cage.

### Changed

- Added interactive mock ceiling and standing fans plus two neon lights to the local preview home.

## 1.18.2

### Changed

- Replaced the red and warm accents on the Vietnamese-home furniture with the existing blue-cyan neon palette.
- Made ceiling and floor fan blades rotate while their linked Home Assistant entity is on and stop when it is off.

## 1.18.1

### Changed

- Refined the Vietnamese-home 3D models with warmer materials and recognisable real-world details on the altars, motorbike, fans, water heater, shoe storage and drying rack.

## 1.18.0

### Added

- Added 27 dedicated Vietnamese-home items across entrances, living rooms, kitchens, bedrooms, bathrooms and outdoor areas, each with its own plan symbol, procedural 3D model and practical default dimensions.
- Added automatic wall, ceiling and worktop mounting for suitable items, plus Home Assistant entity matching and live status details for fans, water heaters, range hoods, microwaves and water purifiers.
- Added Vietnamese, English and German names for the expanded furniture library and regression coverage for its geometry, mounting and entity links.

## 1.17.6

### Fixed

- Corrected editor pointer coordinates after the split-view SVG icon was added, so zoom stays under the cursor and drawing, dragging and context actions line up with the floor plan again.
- Added regression tests for plan/screen coordinate conversion, cursor-centred zoom and zoom limits.

## 1.17.5

### Changed

- Regrouped editor tools into Rooms, Structure and Layout so floor openings and roofs sit with the other structural tools.
- Made Energy a direct toolbar action instead of a one-item dropdown.

## 1.17.4

### Fixed

- Kept desktop tool menus at the same height while open, preventing the editor toolbar and plan from jumping by a few pixels.

## 1.17.3

### Changed

- Smoothed the grouped tool menus with a short GPU-friendly opening transition and rotating disclosure arrow.
- Removed the public help and feedback links from the editor configuration and the unused Extensions interface for this personal fork.

## 1.17.2

### Changed

- Replaced the wide editor toolbar with compact grouped menus that keep the active tool visible and leave the action buttons on one row.
- Changed undo, redo, fit, split 3D, floor-plan lock and project configuration into compact icon actions with accessible labels and hints.
- Added a phone toolbar with the current tool and essential actions, plus a large bottom-sheet tool picker for touch use.

## 1.17.1

### Changed

- Grouped the editor toolbar by floor-plan, furnishing, building, project and action workflows, with a horizontally scrollable layout on narrow screens.
- Split furniture editing into Library and Properties tabs, and moved project-wide settings, backgrounds, start view, favourites, presence, backups and help into a dedicated Configuration panel.
- Added complete Vietnamese labels for the new navigation and configuration interface.

## 1.17.0

### Changed

- Expanded the room-temperature heatmap to 15–40 °C for homes in Vietnam, with colour stops at 15, 23, 30 and 40 °C.
- Removed the Extensions tab, furniture teaser and unused Extensions frontend bundle from this private fork while retaining installed furniture packs and backup compatibility.

## 1.16.1

### Fixed

- Reworded the furniture-library teaser so it only points to optional furniture packs and no longer suggests that the bundled add-ons still need unlocking.
- Made the floor-plan lock action explicit and added its missing Vietnamese labels and explanation.

## 1.16.0

### Changed

- **Bundled add-ons enabled:** Camera cockpit, Weather outside, Live screens, Energy Pro, Sound & Cinema and Car Pro are available by default in this fork without a feature pack. Optional signed furniture and asset packs remain supported separately.
- Updated the Extensions page, card hints, manuals and Vietnamese translations to describe the fork's bundled features accurately.

## 1.15.0

### New

- **Outdoor water pump:** a compact domestic pump with motor, pump housing, suction and delivery pipes, 2D plan symbol and a live status light. It follows lawn and terrace heights, links to a Home Assistant switch or fan, and can discover a clearly named pump entity even outside a room.

## 1.14.0

### New

- **Wall-mounted split air conditioner:** a wall-mounted indoor unit with outlet flap, guide vanes and status light; it can automatically link to a room's Home Assistant `climate` entity and glows cool blue while cooling or warm while heating.

## 1.13.0

### New

- **U-shaped staircase with a landing:** two parallel flights turn 180° at a half-height landing, include guard rails, use a clear two-flight plan symbol and automatically open the floor above.

## 1.12.1

### Changed

- Added Vietnamese to the editor and Home Assistant integration.
- Transferred the fork's repository links, documentation, support channels and code ownership to PATCoder97.
- Kept the original author's optional shop and signed pack compatibility explicitly separated as third-party services.

## 1.12.0

### Fixed

- A roof section drawn over an upper floor with a gap in its middle (a stairwell) landed on the ground floor; the wall top is now found at nine points, and the roof form gets **Sits on floor** to move a section onto another floor (#166 by speedymk1).
- Helpers could not be picked: number fields now offer `input_number` and `number` helpers, on/off fields `input_boolean` – for solar, energy, the car and contacts (#161 by vwtuner).
- Outdoor lamps lit nothing once two rooms of the floor were joined into one light zone (#160 by Thundras).
- Mirrored furniture showed its inside faces; only lying cylinders and the contact shadow are rewound now, the smart fridge's doors and screen and pack lamps (arc lamp, wall unit) follow the mirror (#159 by Thundras).
- The state picture of a screen furniture sat below the screen when a mount height was set, and changing only the mount height did not move the glow (#157 by Thundras).

### New

- **Glass wall:** a new preset under doors & windows – fixed floor-to-ceiling glazing with slim mullions for an indoor glass wall (#163 by xFireShade).
- **Show a device as furniture:** a placed device turns into a fitting furniture item in its place, already linked (a speaker or smart display for a media player, a lamp for a light …), and back to a pin.
- **Sound & Cinema, more life:** the quick menu gets **Play** with your stations and playlists (set in the editor, `media_player.play_media`, also for Echos via search phrases) and the player's sources; a speaker's pin steps aside while its card floats; players without a title show their app or source; one card per player, furniture linked by hand first; cards survive short cloud dropouts; the volume answers while dragging.
- **Home Cinema & Hi-Fi pack, release 2 (free for owners):** 13 smart speakers and smart displays (ball, cylinder, puck, pod, tall, oval, compact and portable multiroom, premium soundbar, displays 5″/7″/8″/15″); with Sound & Cinema their light ring glows in the app's colour and the displays show the cover.
- **Own buttons:** in the central menu, with a label, an icon and an action – open a path, show an entity's details, call a service, or fire a DOM event for a browser_mod popup with your own card; set in the editor under Favourites or per card with `buttons:` (discussion #143 by Schobiwan88).
- **Phones: a shorter header:** quality, look, markers and FPS fold behind a ⚙ button, two header lines instead of three (#131 by denisb88).
- **Living room pack, release 3 (free for owners):** a wall unit with lit glass vitrines – as a lamp, a linked light makes the vitrines and LED strips glow, your own TV goes into the niche – and a wall unit with a TV whose screen shows the media player (discussion #153 by Pitbull19850119).
- **Thickness per wall:** every wall of a room gets a thickness field in the wall-heights box (a 36.5 cm outer wall, an 11.5 cm partition); a shared wall takes the thicker setting (discussion #149 by ArtakerCadSystems).
- **Central menu and favourites:** a star above the magnifier opens all lights on / off and all blinds up / down for the floor shown or the whole house (with a confirmation), plus favourites – scenes, scripts, automations, buttons and switches picked in the editor; the room panel gets **All on** next to All off and **All up / All down** for its blinds; card option `central` (#145 by daene85).
- **Names under markers:** a device or furniture with an own name can show it small under its pin in 3D ("Show the name under the marker"), or every named device with the card option `marker_names: true` (#156 by denisb88).
- **Solar on hip ends:** hip and pyramid roof sections offer their two triangular ends for solar fields and roof windows (discussions #158 by bert-MI4U and #134).
- **Better furniture search:** several words in any order, German and English names and the pack name, a "nothing found" line, the field stays on top while scrolling, Escape clears it (discussion #155 by biancapascal).
- **Hide a state in the room panel:** per device of a room ("Aa"), and a bare "unknown" of switches, covers and lights is left out anyway (discussion #154 by ggeudens).
- **Outdoor round:** a **slope** per outdoor area (height difference and direction; fences, lamps and furniture on it follow, #148), **holes** – an area marked "cut out" becomes a hole in the areas beneath it (#144), a **pergola / frame** type with corner posts, beams, rafters and optional **X-bracing**, an **open** outline for fences and pergolas leaning against the house (#141), and a **wild patch** type (#142); all by denisb88.
- **Garden & Terrace pack, release 3 (free for owners):** trees by species – oak, lime, birch, maple, fruit tree – conifers – spruce, pine, thuja – plus shrub, flowering shrub, brush for a wild patch and a group of three trees; the demo garden shows them (#142 by denisb88).
- **Car Pro (Pro add-on, €5.90):** a glass card over the car (charge with a bar, range, charging power, lock / climate / charge buttons); the car in its parking spot shows charge, range, charging, lock and climate from its integration – a light band in the charge colour, a warm glow while the climate runs, a pin with percent and kilometres, "away" with the tracker's zone, and a quick menu with lock/unlock (unlocking asks), climate and charging; one entity of the car is enough, the rest is found on its device (discussions #71 and #73, #16 by tomfischer98).
- **Sound & Cinema (Pro add-on, €3.90):** speakers show a now-playing card with cover, title, artist and volume (play/pause, previous, next on it), sound rings pulse around playing speakers, multiroom groups are joined by lines, and the quick menu of a media player gets play/pause, track change and volume (discussion #6 by MisterAndrew3000, the most-voted idea).

## 1.11.1

### New

- **Values at the room names:** a heatmap mode "Values" writes temperature, humidity and CO₂ under each room name instead of colouring the floors (discussion #153 by Pitbull19850119).
- **Slats:** the quick menu and the room panel show a tilt slider (or slats open/closed) for covers that support it – Raffstores, venetian blinds (discussion #146 by Schobiwan88).
- **Hide entities from the room panel:** an eye in the room's device list keeps an entity of the area out of the panel (discussion #152 by ggeudens).
- **Height offset for outdoor areas:** a driveway down to a lower garage or a raised terrace sits below or above the ground; lamps on it follow (#148 by denisb88).
- **Shift and turn the whole house:** "Take every floor along" moves or turns every floor with the roof, outdoor areas, cables, meter and hologram (discussion #140 by robertkrizovnik).
- **Background picture:** move and scale it in the plan (drag it, pull the corner handle) and turn it with a rotation field.

### Fixed

- Device holograms (Energy Pro) sat at the wrong height on floors above or below ground – the floor's elevation was left out (#151 by fschade).

## 1.11.0

### New

- **Hedges and fences take a height** of their own, and every outdoor area can hide its neon outline (#141 and #144 by denisb88).
- The card option for the energy values at the top says that it belongs to Energy Pro (discussion #104).
- **The eye – a clean view:** a button at the bottom left of the 3D view hides every bar, chip row, thumbnail, value and switch so only the stage remains (half a screen more on a phone); the next tap brings them back, and the device remembers the choice. Card options `controls_hidden` and `controls_hide_after` (seconds without a touch) (#131 by denisb88).
- The installed version stands at the right end of the panel header (hover it for the integration's version).
- **Accent colour of your own:** a colour well beside the look (and the card option `accent`) recolours the neon lines and glowing edges, the buttons and the pins – amber, green, purple, whatever fits the wall (discussions #32 by hohenpul and #102 by MrSideline).
- **Furniture with a state:** any item can show an entity that reports on, occupied or home – its top glows; two entities light the halves of a bed (left/right) or a bunk bed (bottom/top) (#116 by hahne-t, discussion #11 by StevenKRT).
- **Lamps: colour and brightness from a second entity** – for lights a relay switches while the bulb knows its colour (discussion #132 by Schobiwan88).
- **Cut view cuts tall furniture:** wardrobes, stairs and tall units are cut at the wall cut height, so a stair in the middle of the house no longer hides the rooms behind it (discussion #133 by Schobiwan88).
- **Sidelights of a front door:** a single sidelight can sit on the hinge side, and the widths are adjustable, left and right separately with two (discussion #135 by Schobiwan88).
- **Mirror furniture:** a switch in the furniture form, in the right-click menu of the plan and in the furnish bar of the 3D view turns an item left-right – the L-sofa the other way round, a cabinet with its door on the other side, pack items too (#107 by N4IR0, discussion #121 by Thundras).
- **Floor and room bar:** a ≡ button at its right end wraps it onto several lines (remembered per device); in one line it scrolls with the mouse wheel and shows a thin scrollbar under the pointer; in the house view each floor's rooms follow a small floor label (#129 by denisb88).
- **LED strips tilt and stand upright:** a tilt about the strip's length lays it against a roof slope or turns it sideways; "Upright" stands it on end from its mount height – along a door frame, as a light column (#123 by RobertSorgenfrei, discussion #122 by idaho).

## 1.10.2

### New

- **Energy Pro: every plant keeps its card** – the plant whose field carries the main hologram no longer loses its own card; the main card steps aside next to the field unless it was moved by hand (#128 by denisb88).
- **Energy Pro: the main hologram can hang free** at a point in the plan (handle ◈ in the energy tool, height above the ground) instead of only on a solar field (#128).
- **Energy Pro: a switch per inverter** hides that plant's card (#128).

### Fixed

- **Camera wall** shares the sheet between the cameras: one camera fills it, two sit side by side, up to four in a 2×2 grid, more in three or four columns. Tapping a tile shows that camera big as a live stream through Home Assistant’s own player (the tiles stay stills, and a small note in the wall header and in the look-through bar says so); from there "Look through the camera" goes into the 3D view, and "Back to the view" brings the wall back.
- **Door form:** the switch "Show closed without a sensor" was missing – it sat in the window-only sensor block; the drive's position sensor and confirm switch show only once a drive is set or found; the drive field is called "Drive" for doors and gates.
- **Wall heights:** the rows in the room form lay out cleanly again (name and height, the buttons below, a split point in its own line) instead of the cut button slipping out of line.
- **Canopies stay on their posts** when the floors are pulled apart; before, a terrace roof or carport lifted off with the house roof (discussion #137 by RobertSorgenfrei).
- A device marker set to **"always"** shows its value (temperature, humidity …) on the floor as well, not only inside its room (discussion #130 by Chipsy79).
- **Cut view:** a tap on the cut-away upper part of a window no longer switches its blind or curtain by mistake; it goes through to what lies behind (discussion #127 by creativeibiza).

## 1.10.1

### New

- **Own name for a placed device** in the plan, without renaming the entity in Home Assistant (#125 by RobertSorgenfrei).
- **Turn a floor by 90°** in the floor form, for a floor drawn the wrong way round (discussion #120 by MStengel69).
- **Card:** `room:` starts the card in one room, e.g. a display for the kids' room (discussion #119 by HeroHoshy).
- A roof slope that reaches down into the floor below the attic cuts that floor's walls as well (discussion #75, idaho).
- **Camera cockpit 2** (a free update of the Pro add-on): **detection pins** – what a camera's sensors see right now (person, vehicle, animal, motion – Frigate, UniFi Protect, Reolink …) stands in front of it as a pin with the time; the **camera wall** – every placed camera's live picture at once ("Cameras" switch, card option `camera_wall`), motion framed red, recording marked; a tap looks through the camera.

### Fixed

- A camera mounted just inside an outer wall and looking out had its wedge cut by that wall (20 cm long); the wall the camera hangs on no longer counts (reported by the maintainer's own driveway camera).
- The version notice now tells which side is behind: an old bundle in the browser or the companion app gets "reload the page" with a Reload button (and the cache hint for the companion app) instead of "restart Home Assistant"; both versions are shown. A pack with a Pro feature this frontend does not know yet says so instead of looking like a furniture pack (support case of a French customer).

## 1.10.0

### New

- **Roof slopes with knee walls:** when a roof section's top of walls lies below the ceiling of the floor underneath, that floor's walls end under the roof – knee walls at the eaves, gables up to the ridge, inner walls cut by the slope; windows stay below it. Dashed headroom lines (1.5 m, 2 m) in the plan editor (mindmonk's description in [PR #66](https://github.com/Mastershort/neonplan3d/pull/66), discussions #64, #75).
- **Roof stays:** a switch in the view bar (and the card option `roof_fade: false`) keeps the roof on the house while zooming in; in the editor's roof and energy tools it always stays.
- **Roof windows:** a window motor (Velux, Roto, Fakro as a cover) opens the sash as far as it stands, a name, a warm glow while open or tilted, and a hole in the slope of a roof section so the attic looks out (discussion #47, PR #66 by mindmonk).
- **Dormers and cross gables:** "+ Dormer" in a section's form puts a dormer on a slope (gable or pent); its depth ends where its ridge meets the slope, the slope opens only where the dormer's roof lies above it (valleys), the cheeks close it, the attic wall rises up to it for the dormer window. A wide dormer with its eaves on the top of walls is a cross gable (a three-gable house). Where sections overlap, the higher roof is the ceiling (discussion #75, PR #66 by mindmonk).
- **Roof shapes:** half-hip, pyramid, mansard and flat with parapet join gable, hip, pent and flat; attic walls end under hipped ends and broken slopes as well (discussions #90, #74, #47).
- **Flat roof as a free shape:** "Take the floor's outline" gives a flat section the outline of the floor's rooms (L, Z, U …) as one surface; its corners can be dragged (#108 by rolandarends).
- **Roller shutters on doors:** a front door, French window or sliding door takes a cover too; the blind comes down over it and can be moved like a window's (#114 by denisb88).
- **Shift a floor:** "Shift the floor" in the floor form moves everything on the floor by X and Z (#25 by morbidos123).
- **Split a wall:** ✂ in the wall heights box cuts a wall at a point of your own, so one wall in line can have two heights (2.5 m next to 1.7 m); the split point can be moved and removed (#109 by rolandarends).

## 1.9.2

### Fixed

- Pack furniture that lights but is not "electric" (mirror with light, bedside lamp, aquarium, fire bowl, star ceiling, LED niche, light cove, workshop light, night light) had no light field in the editor and a tap sent an invalid entity id to Home Assistant (#46 by StevenKRT and N4IR0, #88 by wh1tetiger).
- The lit wall face left a misaligned dark rectangle over windows on low floors: the light cells now break at every sill, top and side of an opening (#87 by newbeehome).
- The plan editor stayed in English for French, Spanish, Dutch, Italian (and Hungarian): its bundle never fetched the language file (#96 by denisb88).
- A TV that only reports "on" (Samsung, LG) glows now; before, only "playing" lit the screen (#98 by newbeehome).
- Dimmed lights looked switched off: the glow follows a perceptual curve now, a lamp at 10 % still reads as on (#103 by newbeehome).
- Free-standing walls (a garden wall) take wall-mounted solar fields, on both sides (#105 by rolandarends).
- An LED strip outside the house sits on the ground again (lawn, terrace) instead of a slab's thickness above it (#70 by domodial).

### New

- **Doors without a sensor** can be drawn closed ("Show closed without a sensor" in the door form) instead of half open (discussion #86 by robertkrizovnik).
- **Card:** `start_view` gives a card a start view of its own, e.g. for a small overview on another dashboard; the editor's start view section shows the line to copy (discussion #89 by karli4711).
- French, Spanish, Dutch and Italian: the 43 texts added since 1.9.0 (energy setup, tilt angle, icons, help) are translated now; they showed in English.
- **Hungarian** as the fifth extra language (proofread by kopaszsop, [#51](https://github.com/Mastershort/neonplan3d/issues/51)).
- **Module power (Wp)** per solar field instead of the fixed 400 W, for the kWp of fields and strings and the living modules (#99 by denisb88).
- **Floors apart** lifts the roof off the top floor as well (#101 by rolandarends).
- **Energy Pro – device holograms:** every device with a power sensor can carry a small glass card (power now, today's kWh, day curve), in the house view and on its floor; "Hologram over the device" in the furniture form; a **Holograms** button in the energy bar hides all cards (card option `holograms`). The first free update of the pack.

## 1.9.1

### New

- **Own marker symbols:** any Material Design icon (`mdi:…`) for a device or an electric furniture item ([#62](https://github.com/Mastershort/neonplan3d/issues/62)).
- **Tilt angle sensor** on windows: the sash tilts as far as the sensor reports, with maximum angle, offset and sign ([#15](https://github.com/Mastershort/neonplan3d/issues/15)).
- **Camera wedge:** can be switched off per camera, and in 3D it ends at the first wall ([discussions #49, #50](https://github.com/Mastershort/neonplan3d/discussions/49)).
- **Dashboard button** on the card: `dashboard` and `dashboard_label` open another dashboard or view ([discussion #48](https://github.com/Mastershort/neonplan3d/discussions/48)).
- **Wall heights per part** of a wall that a neighbouring room splits ([#77](https://github.com/Mastershort/neonplan3d/issues/77)).
- **Light through open walls:** with "No wall" a lamp lights the neighbouring room as if it were one room (idea and fork by Thundras, [discussion #68](https://github.com/Mastershort/neonplan3d/discussions/68)).
- **Energy tool, easier to set up:** a setup checklist at the top that jumps to what is missing; "Take over from the energy dashboard" now fills the devices (and creates missing ones); a hint with a one-tap fix when a grid or battery sensor counts the other way round; the hologram also without a solar field (beside the house); the energy bar steps back while the hologram shows; a plain hologram on the tablet level.
- **Help and feedback:** buttons for a GitHub issue (problem) and a discussion (idea) in the editor's settings and on the Extensions page; manual chapter 6.4 describes Energy Pro.
- **Shop connection:** activations failed with HTTP 429 for everyone – the shop's web host turns away Home Assistant's default user agent. NeonPlan now sends its own, retries a throttled request twice with a pause (Retry-After respected), spaces out pack downloads, and explains a 429 in plain words.
- **Energy Pro:** one hologram per plant (a balcony plant with its own inverter gets its own card over its field); home batteries with separate charging and discharging sensors (e.g. Anker Solix) through the new "Charging power" field; meters with separate import and export sensors through "Export power"; the power pickers list every sensor in W or kW, even without a device class.

### Fixed

- The start view also holds when a floor is opened: the house no longer turns round ([discussion #67](https://github.com/Mastershort/neonplan3d/discussions/67)).
- Two windows one above the other both cut their hole into the wall (reported by Thundras).
- iPad: the "Add floor" menu stays inside the sidebar ([#85](https://github.com/Mastershort/neonplan3d/issues/85)).

## 1.9.0

### New

- **Four more languages:** French, Spanish, Dutch and Italian, following the Home Assistant user's language. They come as separate language files fetched only when needed, so the bundles stay small for wall tablets. French was asked for in [#51](https://github.com/Mastershort/neonplan3d/issues/51) (thanks, denisb88).
- **No wall:** every wall of a room can be left out (button "No wall" in the wall heights), for open floor plans whose rooms are one space but separate areas in Home Assistant ([discussion #68](https://github.com/Mastershort/neonplan3d/discussions/68)).
- **Start view:** remember the current 3D view in the editor; the 3D view, the card and the kiosk then open the house that way, e.g. from the garden side ([discussion #67](https://github.com/Mastershort/neonplan3d/discussions/67)).
- **Energy tool:** the **electricity meter** (grid sensor, shows import/export) and the **grid connection** (where the cable to the utility leaves the plot) as energy devices; an **Energy balance** section with the sensors of the house, taken from the devices in the plan or from Home Assistant's energy dashboard; several inverters and batteries with their own sensors; **models** for inverters (wall, slim, hybrid) and batteries (tower, wall, compact). The hidden energy settings and the meter tool are gone in favour of this.
- **Names:** every piece of furniture and every energy device can carry its own name, shown in lists, forms and on its pin in 3D.
- Groundwork for the coming Pro add-on **Energy Pro** (power-flow cables, living solar modules, glass hologram): built in and locked until the add-on is released.

## 1.8.1

### Fixed

- Entities without a registry entry (set up in YAML without a unique ID, e.g. USB cameras) can be placed: they show up under "without area" ([#56](https://github.com/Mastershort/neonplan3d/issues/56)).

## 1.8.0

### New

- **Energy tool with solar fields** on the roof, free-standing on frames (garden, garage roof, with height and rotation, turn handle) and on house walls (upright or tilted away, up to a canopy); dragged in the plan and in the 3D view: modules in rows and columns on any roof face, lying in its slope, on flat roofs on tilted frames; placed on the sunniest face, dragged in the plan (also onto another face), with the field's kWp. Rows of their own length ("4, 4, 3"), single modules on/off, full black or blue look, module size, a name and a PV sensor per field, and strings that join fields across roofs (name, PV sensor, inverter). Solar fields are not held by the plan lock. On roof sections the faces include the overhang, so modules reach down to the eave.
- **Energy devices:** solar inverter, home battery and wallbox, added and moved in the Energy tool; placed in the garage or a utility room against a wall, and the plan moves to them.
- Home battery shows its charge and charging direction, the wallbox its status (charging, plugged in).
- Solar fields and roof windows can be fixed. New furniture brings the plan to where it was put.
- **Roof windows** in the roof faces, with blind, contact and tilt contact (the sash swings out, the blind comes down).

## 1.7.0

### New

- **Ask before switching for blinds and garage doors:** open, close and positions ask first in the quick menu and the room panel; a swipe on the marker no longer moves them ([discussion #36](https://github.com/Mastershort/neonplan3d/discussions/36)). Devices that ask first no longer react to a swipe either.
- **Status sensors on furniture:** a 3D printer's print status (or any enum status sensor) can be linked; the item counts as active while it prints or runs ([#41](https://github.com/Mastershort/neonplan3d/issues/41)).
- **Worktop:** a free top without a base, its height is the top edge ([discussion #37](https://github.com/Mastershort/neonplan3d/discussions/37)).

## 1.6.2

### Fixed

- The 3D view did not load on older iPads (iOS 15 and 16) with "SyntaxError: Unexpected token '{'"; the bundles are now built for Safari 15 and newer ([#42](https://github.com/Mastershort/neonplan3d/issues/42)).

## 1.6.1

### Fixed

- A table lamp, floor lamp or uplight with a height above the floor set by hand now moves the lamp itself, not only its selection box ([#20](https://github.com/Mastershort/neonplan3d/issues/20)).
- Heatmap and room panel with °F: sensors in °F are converted, the legend and values show Home Assistant's unit.
- Overlapping floor openings are cut as one outline (an L-shaped opening) instead of breaking the floor.
- A floor opening snapped to the room's edge is cut instead of being reported as outside the room.
- The rain warning uses the weather entity chosen in the plan settings.

### New

- The warning for a window open in the rain can be switched off on its own (plan settings, weather).
- Robot vacuums clean the room they report: a "current room" sensor (Roborock, Dreame …) is found on the robot's device and matched by room or area name.
- Robot vacuums drive around cabinets, sofas, beds and appliances, but under tables, desks and chairs.

## 1.6.0

### New

- **New in the shop** on the Extensions page (with a shop key) and a dot on the tab.
- **Loyalty discount** code for further purchases, shown in NeonPlan 3D.
- The Extensions page shows once what a pack update brought.
- Screens and status lights of pack furniture can link a light (glow in its colour) or a switch.

## 1.5.0

### New

- **Roof sections:** roofs made of several parts (L/T houses, barns, extensions), each with shape (gable, hip, pent, flat), ridge direction, eave and pitch per side; proposed from the rooms; new Roof tool in the editor.
- **Canopies** (terrace roof, carport): posts and beams, see-through roof.
- **Outdoor areas** are resized at their corners.

## 1.4.0

### New

- **Devices from other areas and without an area** in the room form (source switch, grouped by area).
- **Place all** is a small link that asks first.
- **Room climate per room:** chosen sensors for temperature, humidity and CO₂; automatic skips device temperatures (3D printer, heat pump flow).

### Fixes

- Built-in furniture follows its height above floor in 3D (a dryer on the washing machine, #13).
- The height above floor counts from the floor: wall cabinets (1.45 m), wall TVs and radiators can be set lower too.

## 1.3.0

### New

- **Locking the floor plan** (rooms, walls, doors, windows, outdoor areas) and **fixing furniture and devices** (lock in the form, key L, right-click menu with duplicate, turn and delete).
- **More sensors:** gas and water meters, energy, illuminance, pressure and air quality can be placed; values use Home Assistant's decimals (#7).
- **TV on a smart plug:** TVs and media walls may link a switch instead of a media player (#5).
- **Marker in 3D per device:** automatic, always, without watts or hidden.
- **Highlight when closed** for doors and windows (WC, child's room).

### Fixes

- Furniture and lamps with a linked entity can be dragged in 3D again (grabbing the item or its marker).

## 1.2.0

### New

- **Wall height per wall:** parapets, counters and half-height dividers. Rooms get a *Wall heights* box with every wall, free walls a height field.
- **Doors and windows in free walls:** the *Door & window* tool now also works on free-standing walls.
- **Height above floor** for wall lights and LED strips; strips below 1 m shine upwards.
- **Ridge direction** of gable roofs: along the long or the short side (terraced houses, #1).
- **Arrow keys** nudge the selection in the plan editor: one grid step, Shift 10 cm, Alt 1 cm.

### Fixes

- Several lamps linked to the same light no longer stay green in 3D; all follow the light.

### Community

- Issue templates, this changelog and an Ideas section for feature requests with voting.

## 1.1.1

### New

- **Door style "Opening (no door)":** a passage between two rooms, just a gap in the wall without frame or leaf.

## 1.1.0

### New

- **Free-standing walls:** the *Wall* tool draws a partition through part of a room.

## 1.0.2

### Fixes

- Floor openings show from above; their rim glows like the wall tops.
- The editor warns when a floor opening reaches across a room boundary.

## 1.0.1

### New

- Manual links in the app, in your Home Assistant language (German or English).

## 1.0.0

The first public release: plan editor in Home Assistant, live neon 3D view, 40 built-in furniture models,
cameras, wall tablet features, dashboard card with three looks, optional furniture packs and Pro add-ons.
