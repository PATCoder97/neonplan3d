import assert from "node:assert/strict";
import { test } from "node:test";
import { STRUCTURAL_ONLY_FURNITURE_TYPES } from "../furniture/catalog.ts";
import type { Furniture } from "../model.ts";
import { mountBase, setPacks, type FurniturePack } from "../packs.ts";
import { builtinBase, ELECTRIC_FURNITURE, FURNITURE_SIZE, FURNITURE_TYPES, LAMP_MODEL, newFloor } from "../model.ts";
import { pushFanRotor, pushFurniture, screenRect } from "./furniture.ts";
import { GeoBuffer, LineBuffer } from "./geo.ts";

const PACK: FurniturePack = {
  id: "t.cars",
  name: "Cars",
  publisher: "t",
  licensee: null,
  items: [
    {
      id: "wedge",
      name: { de: "Keil", en: "Wedge" },
      size: [2, 4, 1],
      parts: [
        // a hood: the top rectangle is shorter and sits further back
        { shape: "loft", x: 0, z: 0.25, w: 1, d: 0.5, y: 0, h: 0.5, color: "body", tx: 0, tz: 0.05, tw: 0.9, td: 0.1, edges: "glow" },
        // a wheel lying along x
        { shape: "cyl", axis: "x", x: -0.4, z: -0.3, w: 0.1, d: 0.2, y: 0, h: 0.4, color: "dark", edges: true },
      ],
    },
  ],
};

function build(type: string) {
  const buf = new GeoBuffer();
  const lines = new LineBuffer();
  const f: Furniture = { id: "f", type, x: 1, z: 2, rotation: 90, w: 2, d: 4, h: 1, variant: null, entity: null, power: null };
  pushFurniture(buf, lines, new GeoBuffer(), f);
  return { buf, lines };
}

test("every non-lamp catalog item builds visible finite 3D geometry", () => {
  for (const type of FURNITURE_TYPES) {
    if (LAMP_MODEL[type] || (STRUCTURAL_ONLY_FURNITURE_TYPES as readonly string[]).includes(type)) continue;
    const [w, d, h] = FURNITURE_SIZE[type];
    const buf = new GeoBuffer();
    const lines = new LineBuffer();
    const shadow = new GeoBuffer();
    pushFurniture(buf, lines, shadow, { id: type, type, x: 0, z: 0, rotation: 0, w, d, h, variant: null } as Furniture);
    assert.ok(buf.count > 0 || lines.p.length > 0, `${type}: visible geometry`);
    assert.ok(buf.p.every(Number.isFinite) && buf.c.every(Number.isFinite) && lines.p.every(Number.isFinite), `${type}: finite geometry`);
  }
});

test("garden vegetation families keep recognisable silhouettes within their declared height", () => {
  const trees = ["tree_oak", "tree_lime", "tree_birch", "tree_maple", "tree_fruit", "tree_spruce", "tree_pine", "tree_thuja"] as const;
  for (const type of trees) {
    const [w, d, h] = FURNITURE_SIZE[type];
    const buf = new GeoBuffer();
    const lines = new LineBuffer();
    pushFurniture(buf, lines, new GeoBuffer(), { id: type, type, x: 0, z: 0, rotation: 0, w, d, h, variant: null } as Furniture);
    const ys = buf.p.filter((_, index) => index % 3 === 1);
    assert.ok(buf.count > 50 && lines.p.length > 0, `${type}: trunk and crown are visible`);
    assert.ok(Math.min(...ys) >= -1e-6 && Math.max(...ys) <= h + 1e-6, `${type}: geometry stays inside its height`);
  }

  const counts = ["shrub", "shrub_flowering", "brush_wild", "trees_group_3"].map((type) => {
    const [w, d, h] = FURNITURE_SIZE[type as keyof typeof FURNITURE_SIZE];
    const buf = new GeoBuffer();
    const lines = new LineBuffer();
    pushFurniture(buf, lines, new GeoBuffer(), { id: type, type, x: 0, z: 0, rotation: 0, w, d, h, variant: null } as Furniture);
    assert.ok(buf.count > 0 || lines.p.length > 0, `${type}: visible vegetation geometry`);
    return buf.count + lines.p.length;
  });
  assert.ok(counts[1] > counts[0], "the flowering shrub adds blossoms");
  assert.ok(counts[3] > counts[0], "the tree group contains more geometry than one shrub");
});

test("garage workshop fixtures have dedicated geometry and the wall shelf uses its mount height", () => {
  const types = ["workbench", "workbench_pegboard", "tool_cabinet", "tool_chest", "storage_rack_garage", "air_compressor", "shop_vacuum", "ladder_step", "ladder_extension", "storage_boxes", "tire_stack", "bike_rack", "repair_stand", "parts_bin", "utility_sink_garage", "charging_bay"] as const;
  for (const type of types) {
    const [w, d, h] = FURNITURE_SIZE[type];
    const buf = new GeoBuffer(), lines = new LineBuffer();
    pushFurniture(buf, lines, new GeoBuffer(), { id: type, type, x: 0, z: 0, rotation: 0, w, d, h, variant: null } as Furniture);
    assert.ok(buf.count > 0 || lines.p.length > 0, `${type}: visible dedicated geometry`);
  }
  const floor = newFloor("g", "Garage", 0);
  assert.equal(mountBase(floor, { type: "wall_shelf_garage", x: 0, z: 0, h: FURNITURE_SIZE.wall_shelf_garage[2] }), 1.25);
});

test("pet furniture batch one has bounded geometry and correct wall mounts", () => {
  const types = ["cat_tree_large", "cat_scratching_post", "cat_scratch_board_wall", "cat_cave", "cat_bed_round", "cat_wall_perch", "cat_climbing_steps_wall", "litter_box_hood", "litter_box_self_cleaning", "dog_bed", "dog_basket", "dog_house"] as const;
  const complexity = new Map<string, number>();
  for (const type of types) {
    const [w, d, h] = FURNITURE_SIZE[type];
    const buf = new GeoBuffer();
    const lines = new LineBuffer();
    const item = { id: type, type, x: 0, z: 0, rotation: 0, w, d, h, variant: null } as Furniture;
    pushFurniture(buf, lines, new GeoBuffer(), item, builtinBase(item));
    assert.ok(buf.count > 0 && lines.p.length > 0, `${type}: solid and outline geometry`);
    assert.ok(buf.p.every(Number.isFinite) && lines.p.every(Number.isFinite), `${type}: finite geometry`);
    const ys = buf.p.filter((_, index) => index % 3 === 1);
    assert.ok(Math.min(...ys) >= -1e-6 && Math.max(...ys) <= h + 1e-6, `${type}: geometry stays inside declared height`);
    complexity.set(type, buf.count + lines.p.length);
  }
  assert.ok(complexity.get("litter_box_self_cleaning")! > complexity.get("litter_box_hood")!, "automatic litter box adds its mechanism");
  const floor = newFloor("pets", "Pets", 0);
  assert.equal(mountBase(floor, { type: "cat_scratch_board_wall", x: 0, z: 0, h: FURNITURE_SIZE.cat_scratch_board_wall[2] }), 0.65);
  assert.equal(mountBase(floor, { type: "cat_wall_perch", x: 0, z: 0, h: FURNITURE_SIZE.cat_wall_perch[2] }), 1.15);
  assert.equal(mountBase(floor, { type: "cat_climbing_steps_wall", x: 0, z: 0, h: FURNITURE_SIZE.cat_climbing_steps_wall[2] }), 0.55);
});

test("pet furniture batch two has distinct bounded habitats and powered care devices", () => {
  const types = ["pet_bowls", "pet_feeder_automatic", "pet_water_fountain", "pet_gate", "pet_stairs", "hamster_cage", "small_animal_cage", "rabbit_enclosure_outdoor", "bird_cage", "aquarium_100", "aquarium_240_cabinet", "terrarium"] as const;
  const complexity = new Map<string, number>();
  for (const type of types) {
    const [w, d, h] = FURNITURE_SIZE[type];
    const buf = new GeoBuffer();
    const lines = new LineBuffer();
    const item = { id: type, type, x: 0, z: 0, rotation: 0, w, d, h, variant: null } as Furniture;
    pushFurniture(buf, lines, new GeoBuffer(), item, builtinBase(item));
    assert.ok(buf.count > 0 && lines.p.length > 0, `${type}: solid and outline geometry`);
    assert.ok(buf.p.every(Number.isFinite) && lines.p.every(Number.isFinite), `${type}: finite geometry`);
    const ys = buf.p.filter((_, index) => index % 3 === 1);
    assert.ok(Math.min(...ys) >= -1e-6 && Math.max(...ys) <= h + 1e-6, `${type}: geometry stays inside declared height`);
    complexity.set(type, buf.count + lines.p.length);
  }
  assert.ok(complexity.get("aquarium_240_cabinet")! > complexity.get("aquarium_100")!, "large aquarium includes its cabinet");
  assert.notEqual(complexity.get("terrarium"), complexity.get("aquarium_100"), "dry and aquatic habitats keep distinct interiors");
  for (const type of ["pet_feeder_automatic", "pet_water_fountain", "aquarium_100", "aquarium_240_cabinet", "terrarium"]) assert.ok(ELECTRIC_FURNITURE.has(type), `${type}: powered capability`);
});

test("fitness family has bounded dedicated equipment, wall mounts and a smart live mirror", () => {
  const types = ["fitness_treadmill", "fitness_power_rack", "fitness_rower", "fitness_spin_bike", "fitness_dumbbell_rack", "fitness_punching_bag", "fitness_yoga_mat", "fitness_cross_trainer", "fitness_mirror_wall", "fitness_ball", "fitness_wall_bars", "fitness_mirror_smart", "fitness_bike_trainer", "fitness_sauna_cabin", "fitness_massage_chair", "fitness_kettlebell_set", "fitness_water_station"] as const;
  const signatures = new Set<string>();
  for (const type of types) {
    const [w, d, h] = FURNITURE_SIZE[type];
    const buf = new GeoBuffer();
    const lines = new LineBuffer();
    const item = { id: type, type, x: 0, z: 0, rotation: 0, w, d, h, variant: null } as Furniture;
    pushFurniture(buf, lines, new GeoBuffer(), item, builtinBase(item));
    assert.ok(buf.count > 0 && lines.p.length > 0, `${type}: solid and outline geometry`);
    assert.ok(buf.p.every(Number.isFinite) && lines.p.every(Number.isFinite), `${type}: finite geometry`);
    const ys = buf.p.filter((_, index) => index % 3 === 1);
    assert.ok(Math.min(...ys) >= -1e-6 && Math.max(...ys) <= h + 1e-6, `${type}: geometry stays inside declared height`);
    signatures.add(`${buf.count}:${lines.p.length}`);
  }
  assert.ok(signatures.size >= 13, "fitness models keep varied geometric complexity");
  const floor = newFloor("fitness", "Fitness", 0);
  assert.equal(mountBase(floor, { type: "fitness_mirror_wall", x: 0, z: 0, h: FURNITURE_SIZE.fitness_mirror_wall[2] }), 0.5);
  assert.equal(mountBase(floor, { type: "fitness_wall_bars", x: 0, z: 0, h: FURNITURE_SIZE.fitness_wall_bars[2] }), 0.3);
  assert.equal(mountBase(floor, { type: "fitness_mirror_smart", x: 0, z: 0, h: FURNITURE_SIZE.fitness_mirror_smart[2] }), 0.4);
  const [w, d, h] = FURNITURE_SIZE.fitness_mirror_smart;
  assert.ok(screenRect({ id: "fitness-screen", type: "fitness_mirror_smart", x: 0, z: 0, rotation: 0, w, d, h, variant: null } as Furniture, floor), "smart mirror exposes a Live Screen");
  for (const type of ["fitness_treadmill", "fitness_rower", "fitness_spin_bike", "fitness_cross_trainer", "fitness_mirror_smart", "fitness_bike_trainer", "fitness_sauna_cabin", "fitness_massage_chair", "fitness_water_station"]) assert.ok(ELECTRIC_FURNITURE.has(type), `${type}: powered capability`);
});

test("home-cinema batch one has bounded AV geometry, correct mounts and live display surfaces", () => {
  const types = ["cinema_screen_wall", "cinema_screen_roller", "cinema_projector_ceiling", "cinema_projector_table", "cinema_speaker_tower", "cinema_speaker_bookshelf", "cinema_speaker_center", "cinema_subwoofer", "cinema_soundbar", "cinema_speaker_wall", "cinema_speaker_ceiling", "cinema_av_receiver", "cinema_tv_oled_65", "cinema_tv_oled_85", "cinema_projector_ust", "cinema_screen_floor_rising"] as const;
  const signatures = new Set<string>();
  for (const type of types) {
    const [w, d, h] = FURNITURE_SIZE[type];
    const buf = new GeoBuffer();
    const lines = new LineBuffer();
    const item = { id: type, type, x: 0, z: 0, rotation: 0, w, d, h, variant: null } as Furniture;
    pushFurniture(buf, lines, new GeoBuffer(), item, builtinBase(item));
    assert.ok(buf.count > 0 && lines.p.length > 0, `${type}: solid and outline geometry`);
    assert.ok(buf.p.every(Number.isFinite) && lines.p.every(Number.isFinite), `${type}: finite geometry`);
    const ys = buf.p.filter((_, index) => index % 3 === 1);
    assert.ok(Math.min(...ys) >= -1e-6 && Math.max(...ys) <= h + 1e-6, `${type}: geometry stays inside declared height`);
    signatures.add(`${buf.count}:${lines.p.length}`);
    assert.ok(ELECTRIC_FURNITURE.has(type), `${type}: powered capability`);
  }
  assert.ok(signatures.size >= 8, "cinema models keep varied geometric complexity");

  const floor = newFloor("cinema", "Cinema", 0);
  assert.equal(mountBase(floor, { type: "cinema_screen_wall", x: 0, z: 0, h: FURNITURE_SIZE.cinema_screen_wall[2] }), 0.65);
  assert.equal(mountBase(floor, { type: "cinema_screen_roller", x: 0, z: 0, h: FURNITURE_SIZE.cinema_screen_roller[2] }), 0.65);
  assert.equal(mountBase(floor, { type: "cinema_speaker_wall", x: 0, z: 0, h: FURNITURE_SIZE.cinema_speaker_wall[2] }), 1.2);
  assert.equal(mountBase(floor, { type: "cinema_projector_ceiling", x: 0, z: 0, h: FURNITURE_SIZE.cinema_projector_ceiling[2] }), floor.height - FURNITURE_SIZE.cinema_projector_ceiling[2]);
  assert.equal(mountBase(floor, { type: "cinema_speaker_ceiling", x: 0, z: 0, h: FURNITURE_SIZE.cinema_speaker_ceiling[2] }), floor.height - FURNITURE_SIZE.cinema_speaker_ceiling[2]);
  assert.equal(mountBase(floor, { type: "cinema_tv_oled_65", x: 0, z: 0, h: FURNITURE_SIZE.cinema_tv_oled_65[2] }), 0.75);

  for (const type of ["cinema_screen_wall", "cinema_screen_roller", "cinema_screen_floor_rising", "cinema_tv_oled_65", "cinema_tv_oled_85"] as const) {
    const [w, d, h] = FURNITURE_SIZE[type];
    assert.ok(screenRect({ id: type, type, x: 0, z: 0, rotation: 0, w, d, h, variant: null } as Furniture, floor), `${type}: Live Screen surface`);
  }
  const [soundbarW, soundbarD, soundbarH] = FURNITURE_SIZE.cinema_soundbar;
  assert.equal(screenRect({ id: "soundbar", type: "cinema_soundbar", x: 0, z: 0, rotation: 0, w: soundbarW, d: soundbarD, h: soundbarH, variant: null } as Furniture, floor), null);
});

test("kitchen expansion has distinct functional geometry, powered appliances and correct mounts", () => {
  const types = ["kitchen_coffee_machine", "kitchen_wine_fridge", "kitchen_island_bar", "kitchen_recycling_station", "kitchen_pantry_pullout", "kitchen_corner_carousel", "kitchen_oven_tower", "kitchen_open_shelf", "kitchen_spice_rack_wall", "kitchen_cart", "kitchen_plate_rack_wall", "kitchen_freezer"] as const;
  const signatures = new Set<string>();
  for (const type of types) {
    const [w, d, h] = FURNITURE_SIZE[type];
    const buf = new GeoBuffer();
    const lines = new LineBuffer();
    const item = { id: type, type, x: 0, z: 0, rotation: 0, w, d, h, variant: null } as Furniture;
    pushFurniture(buf, lines, new GeoBuffer(), item, builtinBase(item));
    assert.ok(buf.count > 0 && lines.p.length > 0, `${type}: solid and outline geometry`);
    assert.ok(buf.p.every(Number.isFinite) && lines.p.every(Number.isFinite), `${type}: finite geometry`);
    const ys = buf.p.filter((_, index) => index % 3 === 1);
    assert.ok(Math.min(...ys) >= -1e-6 && Math.max(...ys) <= h + 1e-6, `${type}: geometry stays inside declared height`);
    signatures.add(`${buf.count}:${lines.p.length}`);
  }
  assert.ok(signatures.size >= 9, "kitchen models keep varied geometric complexity");
  for (const type of ["kitchen_coffee_machine", "kitchen_wine_fridge", "kitchen_oven_tower", "kitchen_freezer"]) assert.ok(ELECTRIC_FURNITURE.has(type), `${type}: powered capability`);

  const floor = newFloor("kitchen", "Kitchen", 0);
  floor.furniture.push({ id: "island", type: "kitchen_island_bar", x: 0, z: 0, rotation: 0, w: 2.2, d: 1.05, h: 1.05, variant: null } as Furniture);
  assert.equal(mountBase(floor, { type: "kitchen_coffee_machine", x: 0, z: 0, h: FURNITURE_SIZE.kitchen_coffee_machine[2] }), 1.05);
  assert.equal(mountBase(floor, { type: "kitchen_open_shelf", x: 2, z: 2, h: FURNITURE_SIZE.kitchen_open_shelf[2] }), 1.25);
  assert.equal(mountBase(floor, { type: "kitchen_spice_rack_wall", x: 2, z: 2, h: FURNITURE_SIZE.kitchen_spice_rack_wall[2] }), 1.3);
  assert.equal(mountBase(floor, { type: "kitchen_plate_rack_wall", x: 2, z: 2, h: FURNITURE_SIZE.kitchen_plate_rack_wall[2] }), 1.25);
});

test("home-cinema batch two completes seating, acoustics and hi-fi with correct capabilities", () => {
  const types = ["cinema_turntable", "cinema_vinyl_shelf", "cinema_game_console", "cinema_hifi_rack", "cinema_chair", "cinema_chair_row_3", "cinema_acoustic_panel", "cinema_bass_trap_corner", "cinema_popcorn_machine", "cinema_surround_speaker_stand", "cinema_speaker_inwall", "cinema_media_streamer", "cinema_bluray_player", "cinema_stereo_amplifier", "cinema_headphone_stand"] as const;
  const signatures = new Set<string>();
  for (const type of types) {
    const [w, d, h] = FURNITURE_SIZE[type];
    const buf = new GeoBuffer();
    const lines = new LineBuffer();
    const item = { id: type, type, x: 0, z: 0, rotation: 0, w, d, h, variant: null } as Furniture;
    pushFurniture(buf, lines, new GeoBuffer(), item, builtinBase(item));
    assert.ok(buf.count > 0 && lines.p.length > 0, `${type}: solid and outline geometry`);
    assert.ok(buf.p.every(Number.isFinite) && lines.p.every(Number.isFinite), `${type}: finite geometry`);
    const ys = buf.p.filter((_, index) => index % 3 === 1);
    assert.ok(Math.min(...ys) >= -1e-6 && Math.max(...ys) <= h + 1e-6, `${type}: geometry stays inside declared height`);
    signatures.add(`${buf.count}:${lines.p.length}`);
  }
  assert.ok(signatures.size >= 11, "cinema batch-two models keep varied geometric complexity");
  assert.ok(LAMP_MODEL.lamp_cinema_star_ceiling === "star_ceiling", "star ceiling participates in live lamp rendering");
  for (const type of ["cinema_turntable", "cinema_game_console", "cinema_hifi_rack", "cinema_popcorn_machine", "cinema_surround_speaker_stand", "cinema_speaker_inwall", "cinema_media_streamer", "cinema_bluray_player", "cinema_stereo_amplifier", "lamp_cinema_star_ceiling"]) assert.ok(ELECTRIC_FURNITURE.has(type), `${type}: powered capability`);

  const floor = newFloor("cinema-two", "Cinema", 0);
  const [shelfW, shelfD, shelfH] = FURNITURE_SIZE.cinema_vinyl_shelf;
  floor.furniture.push({ id: "vinyl-shelf", type: "cinema_vinyl_shelf", x: 0, z: 0, rotation: 0, w: shelfW, d: shelfD, h: shelfH, variant: null } as Furniture);
  assert.equal(mountBase(floor, { type: "cinema_turntable", x: 0, z: 0, h: FURNITURE_SIZE.cinema_turntable[2] }), shelfH);
  assert.equal(mountBase(floor, { type: "cinema_acoustic_panel", x: 2, z: 2, h: FURNITURE_SIZE.cinema_acoustic_panel[2] }), 0.65);
  assert.equal(mountBase(floor, { type: "cinema_speaker_inwall", x: 2, z: 2, h: FURNITURE_SIZE.cinema_speaker_inwall[2] }), 1.2);
});

test("office fixtures have distinct geometry and monitors follow the supporting desk", () => {
  const types = ["desk_l", "desk_corner", "desk_sit_stand", "chair_ergonomic", "chair_visitor", "filing_cabinet", "drawer_unit_office", "bookcase_office", "monitor_single", "monitor_dual", "pc_tower", "gaming_chair", "sim_racing_cockpit", "server_rack_42u", "printer_3d_open", "whiteboard_office", "monitor_triple", "arcade_cabinet", "laser_printer", "phone_booth_office", "printer_3d_enclosed", "filament_shelf_wall"] as const;
  const complexity = new Map<string, number>();
  const geometry = new Map<string, string>();
  for (const type of types) {
    const [w, d, h] = FURNITURE_SIZE[type];
    const buf = new GeoBuffer();
    const lines = new LineBuffer();
    pushFurniture(buf, lines, new GeoBuffer(), { id: type, type, x: 0, z: 0, rotation: 0, w, d, h, variant: null } as Furniture);
    assert.ok(buf.count > 0 && lines.p.length > 0, `${type}: solid and outline geometry`);
    complexity.set(type, buf.count + lines.p.length);
    geometry.set(type, buf.p.map((value, index) => Math.round((value / (index % 3 === 0 ? w : index % 3 === 2 ? d : h)) * 1000)).join(","));
  }
  assert.notEqual(geometry.get("desk_l"), geometry.get("desk_corner"), "L and corner desks use distinct footprints");
  assert.ok(complexity.get("monitor_dual")! > complexity.get("monitor_single")!, "the dual setup contains a second display");
  assert.ok(complexity.get("monitor_triple")! > complexity.get("monitor_dual")!, "the triple setup contains a third display");
  assert.ok(complexity.get("printer_3d_enclosed")! > complexity.get("printer_3d_open")!, "the enclosed printer adds its protective shell");

  const floor = newFloor("office", "Office", 0);
  const [w, d, h] = FURNITURE_SIZE.desk_sit_stand;
  floor.furniture.push({ id: "desk", type: "desk_sit_stand", x: 0, z: 0, rotation: 0, w, d, h, variant: null } as Furniture);
  assert.equal(mountBase(floor, { type: "monitor_single", x: 0, z: 0, h: FURNITURE_SIZE.monitor_single[2] }), h);
  assert.equal(mountBase(floor, { type: "monitor_dual", x: 0, z: 0, h: FURNITURE_SIZE.monitor_dual[2] }), h);
  assert.equal(mountBase(floor, { type: "monitor_triple", x: 0, z: 0, h: FURNITURE_SIZE.monitor_triple[2] }), h);
  assert.equal(mountBase(floor, { type: "printer_3d_open", x: 0, z: 0, h: FURNITURE_SIZE.printer_3d_open[2] }), h);
  assert.equal(mountBase(floor, { type: "laser_printer", x: 0, z: 0, h: FURNITURE_SIZE.laser_printer[2] }), h);
  assert.equal(mountBase(floor, { type: "whiteboard_office", x: 2, z: 2, h: FURNITURE_SIZE.whiteboard_office[2] }), 1.2);
  assert.equal(mountBase(floor, { type: "filament_shelf_wall", x: 2, z: 2, h: FURNITURE_SIZE.filament_shelf_wall[2] }), 1.1);
  const [arcadeW, arcadeD, arcadeH] = FURNITURE_SIZE.arcade_cabinet;
  const arcadeScreen = screenRect({ id: "arcade", type: "arcade_cabinet", x: 0, z: 0, rotation: 0, w: arcadeW, d: arcadeD, h: arcadeH, variant: null } as Furniture, floor)!;
  assert.ok(arcadeScreen.y0 > 0 && arcadeScreen.y1 < arcadeH && arcadeScreen.z > arcadeD * 0.28, "the live screen sits on the recessed cabinet face");
});

test("kids-room fixtures keep playful silhouettes and tabletop devices follow the kids desk", () => {
  const types = ["tipi_kids", "play_kitchen_kids", "desk_kids", "toy_shelf_boxes", "cushion_corner_kids", "rocking_horse", "play_rug_road", "table_chairs_kids", "ball_pit", "bed_house", "baby_monitor", "changing_dresser", "wardrobe_kids", "toy_boxes_3"] as const;
  for (const type of types) {
    const [w, d, h] = FURNITURE_SIZE[type];
    const buf = new GeoBuffer();
    const lines = new LineBuffer();
    pushFurniture(buf, lines, new GeoBuffer(), { id: type, type, x: 0, z: 0, rotation: 0, w, d, h, variant: null } as Furniture);
    assert.ok(buf.count > 0 && lines.p.length > 0, `${type}: solid and outline geometry`);
    const ys = buf.p.filter((_, index) => index % 3 === 1);
    assert.ok(Math.min(...ys) >= -1e-6 && Math.max(...ys) <= h + 1e-6, `${type}: geometry stays inside declared height`);
  }

  const floor = newFloor("kids", "Kids", 0);
  const [deskW, deskD, deskH] = FURNITURE_SIZE.desk_kids;
  floor.furniture.push({ id: "kids-desk", type: "desk_kids", x: 0, z: 0, rotation: 0, w: deskW, d: deskD, h: deskH, variant: null } as Furniture);
  assert.equal(mountBase(floor, { type: "baby_monitor", x: 0, z: 0, h: FURNITURE_SIZE.baby_monitor[2] }), deskH);
  assert.equal(mountBase(floor, { type: "lamp_night_moon", x: 0, z: 0, h: FURNITURE_SIZE.lamp_night_moon[2] }), deskH);
  assert.equal(mountBase(floor, { type: "lamp_star_projector", x: 0, z: 0, h: FURNITURE_SIZE.lamp_star_projector[2] }), deskH);
  const [monitorW, monitorD, monitorH] = FURNITURE_SIZE.baby_monitor;
  const monitorScreen = screenRect({ id: "baby-monitor", type: "baby_monitor", x: 0, z: 0, rotation: 0, w: monitorW, d: monitorD, h: monitorH, variant: null } as Furniture, floor)!;
  assert.ok(monitorScreen.y0 > deskH && monitorScreen.z > monitorD / 2, "the camera screen sits on the front of the desk-mounted monitor");
});

test("living-room sofa variants keep fixed seats and distinct corner footprints", () => {
  const geometry = (type: "sofa_2" | "sofa_3" | "sofa_4" | "sofa_corner_left" | "sofa_corner_right" | "sofa_chaise" | "sofa_u") => {
    const [w, d, h] = FURNITURE_SIZE[type];
    const buf = new GeoBuffer();
    pushFurniture(buf, new LineBuffer(), new GeoBuffer(), { id: type, type, x: 0, z: 0, rotation: 0, w, d, h, variant: null } as Furniture);
    return buf;
  };
  const seats = (["sofa_2", "sofa_3", "sofa_4"] as const).map((type) => geometry(type).count);
  assert.ok(seats[0] < seats[1] && seats[1] < seats[2], "each larger sofa adds a dedicated cushion");

  const xs = (type: "sofa_corner_left" | "sofa_corner_right", mirror: boolean) =>
    geometry(type).p
      .filter((_, index) => index % 3 === 0)
      .map((x) => {
        const value = Math.round((mirror ? -x : x) * 1e6) / 1e6;
        return Object.is(value, -0) ? 0 : value;
      })
      .sort((a, b) => a - b);
  assert.deepEqual(xs("sofa_corner_left", false), xs("sofa_corner_right", true), "left and right corner models mirror exactly");

  const frontSides = (type: "sofa_chaise" | "sofa_u") => {
    const [, d] = FURNITURE_SIZE[type];
    const p = geometry(type).p;
    const xs = Array.from({ length: p.length / 3 }, (_, i) => [p[i * 3], p[i * 3 + 2]]).filter(([, z]) => z > d * 0.35).map(([x]) => x);
    return { left: xs.some((x) => x < -0.2), right: xs.some((x) => x > 0.2) };
  };
  assert.deepEqual(frontSides("sofa_chaise"), { left: true, right: false }, "the chaise projects on one side");
  assert.deepEqual(frontSides("sofa_u"), { left: true, right: true }, "the U sofa projects on both sides");
});

test("living-room lowboards add compartments with their fixed widths", () => {
  const outlines = (["lowboard_120", "lowboard_160", "lowboard_200"] as const).map((type) => {
    const [w, d, h] = FURNITURE_SIZE[type];
    const lines = new LineBuffer();
    pushFurniture(new GeoBuffer(), lines, new GeoBuffer(), { id: type, type, x: 0, z: 0, rotation: 0, w, d, h, variant: null } as Furniture);
    return lines.p.length;
  });
  assert.ok(outlines[0] < outlines[1] && outlines[1] < outlines[2], "wider lowboards contain more outlined compartments");
});

test("fixed bedroom wardrobes preserve their declared door count", () => {
  const outlines = (["wardrobe_2door", "wardrobe_3door"] as const).map((type) => {
    const [w, d, h] = FURNITURE_SIZE[type];
    const lines = new LineBuffer();
    pushFurniture(new GeoBuffer(), lines, new GeoBuffer(), { id: type, type, x: 0, z: 0, rotation: 0, w, d, h, variant: null } as Furniture);
    return lines.p.length;
  });
  assert.ok(outlines[1] > outlines[0], "a three-door wardrobe has an extra divider and handle");
});

test("the floating nightstand uses wall height and casts no floor shadow", () => {
  const floor = newFloor("eg", "EG", 0);
  const [w, d, h] = FURNITURE_SIZE.nightstand_floating;
  const item = { id: "floating-nightstand", type: "nightstand_floating", x: 0, z: 0, rotation: 0, w, d, h, variant: null } as Furniture;
  const buf = new GeoBuffer();
  const shadow = new GeoBuffer();
  const base = mountBase(floor, item);
  pushFurniture(buf, new LineBuffer(), shadow, item, base);
  assert.equal(base, 0.48);
  assert.equal(shadow.p.length, 0);
  assert.ok(Math.abs(Math.min(...buf.p.filter((_, i) => i % 3 === 1)) - base) < 1e-6);
});

test("a TV on a stand exposes a screen inside its declared frame", () => {
  const floor = newFloor("eg", "EG", 0);
  const [w, d, h] = FURNITURE_SIZE.tv_stand;
  const tv = { id: "tv", type: "tv_stand", x: 0, z: 0, w, d, h, rotation: 0, variant: null } as Furniture;
  const screen = screenRect(tv, floor)!;
  assert.ok(screen.x0 < 0 && screen.x1 > 0 && screen.y0 > 0 && screen.y1 < h);
  assert.ok(screen.z > 0 && screen.z < d / 2);
});

test("the media wall keeps its live screen on the front face", () => {
  const floor = newFloor("eg", "EG", 0);
  const [w, d, h] = FURNITURE_SIZE.media_wall_tv;
  const wall = { id: "media", type: "media_wall_tv", x: 0, z: 0, w, d, h, rotation: 0, variant: null } as Furniture;
  const screen = screenRect(wall, floor)!;
  assert.ok(screen.x0 < 0 && screen.x1 > 0 && screen.y0 > h * 0.3 && screen.y1 < h);
  assert.ok(screen.z > d / 2, "screen sits in front of the wall cabinetry");
});

test("a U-shaped stair builds two flights and a half-height landing", () => {
  const buf = new GeoBuffer();
  const lines = new LineBuffer();
  const stair: Furniture = { id: "u", type: "stairs_landing", x: 0, z: 0, rotation: 0, w: 2.1, d: 3.2, h: 2.8, variant: null };
  pushFurniture(buf, lines, new GeoBuffer(), stair);
  const ys = buf.p.filter((_, i) => i % 3 === 1);
  assert.ok(buf.count > 100 && lines.p.length > 0, "steps, landing and rails are drawn");
  assert.ok(buf.p.every(Number.isFinite) && lines.p.every(Number.isFinite), "finite geometry");
  assert.ok(Math.abs(Math.min(...ys)) < 1e-6, "starts on the lower floor");
  assert.ok(Math.abs(Math.max(...ys) - 2.8) < 1e-6, "reaches the upper floor");
  assert.ok(ys.some((y) => Math.abs(y - 1.4) < 1e-6), "landing is at half-height");

  // Both sloping rails meet the landing rails at shared endpoints: the inner pair closes the
  // stairwell gap and the outer pair runs around the back without floating breaks.
  const near = (a: number, b: number) => Math.abs(a - b) < 1e-6;
  const hasSegment = (a: [number, number, number], b: [number, number, number]) => {
    for (let i = 0; i < lines.p.length; i += 6) {
      const p = lines.p.slice(i, i + 3);
      const q = lines.p.slice(i + 3, i + 6);
      const same = (u: number[], v: number[]) => u.every((n, j) => near(n, v[j]));
      if ((same(p, a) && same(q, b)) || (same(p, b) && same(q, a))) return true;
    }
    return false;
  };
  const gap = Math.min(0.16, stair.w * 0.12);
  const flightW = (stair.w - gap) / 2;
  const landingD = Math.min(stair.d * 0.34, Math.max(stair.d * 0.22, flightW));
  const front = -stair.d / 2 + landingD;
  const back = -stair.d / 2 + 0.03;
  const railY = stair.h / 2 + Math.min(0.9, Math.max(0.55, stair.h * 0.32));
  const lowerOuter = -stair.w / 2 + 0.03;
  const lowerInner = -gap / 2 - 0.03;
  const upperInner = gap / 2 + 0.03;
  const upperOuter = stair.w / 2 - 0.03;
  assert.ok(hasSegment([lowerInner, railY, front], [upperInner, railY, front]), "inner landing rail is continuous");
  assert.ok(hasSegment([lowerOuter, railY, back], [upperOuter, railY, back]), "outer landing rail is continuous");
});

test("loft and lying cylinder parts build finite geometry with their outlines", () => {
  setPacks([PACK]);
  const { buf, lines } = build("pack:t.cars:wedge");
  assert.ok(buf.count > 20, "triangles");
  assert.ok(buf.p.every(Number.isFinite) && lines.p.every(Number.isFinite), "finite");
  // the loft: 4 sides x 2 + top 2 = 10 triangles; the 12-sided wheel: 24 sides + 24 caps... plus 14 here
  const ys = buf.p.filter((_, i) => i % 3 === 1);
  assert.ok(Math.max(...ys) <= 0.5 + 1e-6 && Math.min(...ys) >= 0, "heights within the parts");
  // top outline of the loft (4) + 4 sloped corners + two wheel rims (14 each)
  assert.equal(lines.p.length / 6, 8 + 28);
  // the wheel's rim lies along x (after the 90° turn: along z in the world)
  const wheelSegs = lines.p.length / 6 - 8;
  assert.ok(wheelSegs === 28);
});

test("a built-in item lifted by its mount height (a dryer on the washer) leaves the floor", () => {
  const dryer = { id: "d", type: "dryer", x: 0, z: 0, w: 0.6, d: 0.6, h: 0.85, rotation: 0, variant: null } as Furniture;
  const ys = (base: number) => {
    const buf = new GeoBuffer();
    const shadow = new GeoBuffer();
    pushFurniture(buf, new LineBuffer(), shadow, dryer, base);
    const y = buf.p.filter((_, i) => i % 3 === 1);
    return { min: Math.min(...y), max: Math.max(...y), shadow: shadow.p.length };
  };
  const floor = ys(0);
  const lifted = ys(0.85);
  assert.ok(Math.abs(floor.min) < 1e-6 && floor.shadow > 0);
  assert.ok(Math.abs(lifted.min - 0.85) < 1e-6, `min ${lifted.min}`);
  assert.ok(Math.abs(lifted.max - floor.max - 0.85) < 1e-6);
  // no contact shadow on the floor under a lifted item
  assert.equal(lifted.shadow, 0);
});

test("the mount height is absolute: a wall cabinet hangs at 1.45 m and can go lower", () => {
  const cab = { id: "c", type: "kitchen_wall", x: 0, z: 0, w: 0.8, d: 0.35, h: 0.7, rotation: 0, variant: null } as Furniture;
  const floor = newFloor("eg", "EG", 0);
  const minY = (f: Furniture) => {
    const buf = new GeoBuffer();
    pushFurniture(buf, new LineBuffer(), new GeoBuffer(), f, mountBase(floor, f));
    return Math.min(...buf.p.filter((_, i) => i % 3 === 1));
  };
  assert.equal(mountBase(floor, cab), 1.45);
  assert.ok(Math.abs(minY(cab) - 1.45) < 1e-6);
  assert.ok(Math.abs(minY({ ...cab, mount_y: 1.0 }) - 1.0) < 1e-6);
  const [w, d, h] = FURNITURE_SIZE.floating_shelf;
  const shelf = { id: "floating", type: "floating_shelf", x: 0, z: 0, w, d, h, rotation: 0, variant: null } as Furniture;
  assert.equal(mountBase(floor, shelf), 1.35);
  assert.ok(Math.abs(minY(shelf) - 1.35) < 1e-6);
  assert.ok(Math.abs(minY({ ...shelf, mount_y: 1.0 }) - 1.0) < 1e-6, "custom mount moves the complete shelf assembly");
});

test("a split air conditioner hangs high on the wall and exposes its outlet as the active face", () => {
  const ac = { id: "ac", type: "air_conditioner", x: 0, z: 0, w: 1, d: 0.22, h: 0.3, rotation: 0, variant: null } as Furniture;
  const floor = newFloor("eg", "EG", 0);
  const buf = new GeoBuffer();
  const shadow = new GeoBuffer();
  const base = mountBase(floor, ac);
  pushFurniture(buf, new LineBuffer(), shadow, ac, base);
  const ys = buf.p.filter((_, i) => i % 3 === 1);
  assert.equal(base, 1.9);
  assert.ok(Math.abs(Math.min(...ys) - 1.9) < 1e-6);
  assert.ok(Math.abs(Math.max(...ys) - 2.2) < 1e-6);
  assert.equal(shadow.p.length, 0, "a wall unit casts no floor contact shadow");
  const outlet = screenRect(ac, floor)!;
  assert.ok(outlet.y0 >= 1.9 && outlet.y1 < 2.2 && outlet.x0 < 0 && outlet.x1 > 0);
});

test("an outdoor water pump sits on the terrace with its shadow and live status window", () => {
  const pump = { id: "pump", type: "water_pump", x: 2, z: 1, w: 0.55, d: 0.4, h: 0.45, rotation: 0, variant: null } as Furniture;
  const floor = newFloor("eg", "EG", 0);
  floor.outdoor = [{ id: "yard", type: "terrace", points: [[0, 0], [4, 0], [4, 3], [0, 3]] }];
  const base = mountBase(floor, pump);
  const buf = new GeoBuffer();
  const lines = new LineBuffer();
  const shadow = new GeoBuffer();
  pushFurniture(buf, lines, shadow, pump, base);
  const ys = buf.p.filter((_, i) => i % 3 === 1);
  const shadowYs = shadow.p.filter((_, i) => i % 3 === 1);
  assert.ok(buf.count > 100 && lines.p.length > 0, "motor, pump chamber and pipes are drawn");
  assert.ok(buf.p.every(Number.isFinite) && lines.p.every(Number.isFinite));
  assert.ok(Math.abs(Math.min(...ys) - base) < 1e-6, "the pump rests on the terrace");
  assert.ok(shadowYs.length > 0 && Math.abs(Math.min(...shadowYs) - (base + 0.003)) < 1e-6, "the contact shadow follows the terrace");
  const status = screenRect(pump, floor)!;
  assert.ok(status.y0 > base && status.y1 < base + pump.h && status.x0 < 0 && status.x1 > 0);
});

test("Vietnamese home furniture builds finite dedicated geometry at the correct mount", () => {
  const floor = newFloor("eg", "EG", 0);
  const types = [
    "altar", "altar_wall", "shoe_cabinet", "motorbike", "fan_ceiling", "fan_ceiling_light", "fan_wall", "fan_floor", "water_heater", "drying_rack",
    "shoe_bench", "room_divider", "range_hood", "microwave", "water_purifier", "kitchen_corner", "kitchen_display", "vanity", "crib",
    "bed_single", "bed_double", "sofa_l", "sofa_bed", "shower_screen", "hammock", "stone_table_set", "planter_large",
    "water_tank", "gate", "fence",
  ] as const;
  for (const type of types) {
    const [w, d, h] = FURNITURE_SIZE[type];
    const item = { id: type, type, x: 0, z: 0, w, d, h, rotation: 0, variant: null } as Furniture;
    const base = mountBase(floor, item);
    const buf = new GeoBuffer();
    const lines = new LineBuffer();
    const shadow = new GeoBuffer();
    pushFurniture(buf, lines, shadow, item, base);
    assert.ok(buf.count > 0 && lines.p.length > 0, `${type}: dedicated solid and outline geometry`);
    assert.ok(buf.p.every(Number.isFinite) && lines.p.every(Number.isFinite), `${type}: finite geometry`);
    const ys = buf.p.filter((_, i) => i % 3 === 1);
    assert.ok(Math.min(...ys) >= base - 1e-6, `${type}: does not fall below its mount`);
    assert.ok(Math.max(...ys) <= base + h + 0.03, `${type}: stays within its declared height`);
  }
  assert.equal(mountBase(floor, { type: "altar_wall", x: 0, z: 0, h: FURNITURE_SIZE.altar_wall[2] }), 1.45);
  assert.equal(mountBase(floor, { type: "water_heater", x: 0, z: 0, h: FURNITURE_SIZE.water_heater[2] }), 1.7);
  assert.equal(mountBase(floor, { type: "range_hood", x: 0, z: 0, h: FURNITURE_SIZE.range_hood[2] }), 1.35);
  assert.equal(mountBase(floor, { type: "fan_ceiling", x: 0, z: 0, h: FURNITURE_SIZE.fan_ceiling[2] }), floor.height - FURNITURE_SIZE.fan_ceiling[2]);
  assert.equal(mountBase(floor, { type: "fan_ceiling_light", x: 0, z: 0, h: FURNITURE_SIZE.fan_ceiling_light[2] }), floor.height - FURNITURE_SIZE.fan_ceiling_light[2]);
  assert.equal(mountBase(floor, { type: "fan_wall", x: 0, z: 0, h: FURNITURE_SIZE.fan_wall[2] }), 1.55);
  const heater = { id: "heater", type: "water_heater", x: 0, z: 0, w: 0.75, d: 0.35, h: 0.45, rotation: 0, variant: null } as Furniture;
  const indicator = screenRect(heater, floor)!;
  assert.ok(indicator.y0 > 1.7 && indicator.y1 < 2.15, "the water heater exposes its live status lamp");
  floor.furniture.push({ id: "counter", type: "worktop", x: 1, z: 1, w: 1.2, d: 0.62, h: 0.91, rotation: 0, variant: null } as Furniture);
  assert.equal(mountBase(floor, { type: "microwave", x: 1, z: 1, h: 0.3 }), 0.91);
});

test("the upright water purifier has a cabinet, top faucet and front status mark", () => {
  const floor = newFloor("eg", "EG", 0);
  const [w, d, h] = FURNITURE_SIZE.water_purifier;
  const purifier = { id: "p", type: "water_purifier", x: 0, z: 0, w, d, h, rotation: 0, variant: null } as Furniture;
  const buf = new GeoBuffer();
  const lines = new LineBuffer();
  pushFurniture(buf, lines, new GeoBuffer(), purifier);
  const solidY = buf.p.filter((_, i) => i % 3 === 1);
  const faucet = Array.from({ length: buf.p.length / 3 }, (_, i) => buf.p.slice(i * 3, i * 3 + 3)).filter((p) => p[1] > h * 0.82);
  assert.ok(Math.max(...solidY) > h * 0.96, "solid faucet rises above the cabinet");
  assert.ok(Math.min(...faucet.map((p) => p[2])) < 0 && Math.max(...faucet.map((p) => p[2])) > d * 0.06, "short gooseneck reaches forward to its outlet");
  const status = screenRect(purifier, floor)!;
  assert.ok(status.y0 > 0 && status.y1 < h * 0.8 && status.z > d / 2, "status mark stays on the glass cabinet front");
});

test("smart-home furniture builds recognisable finite geometry at its declared mount", () => {
  const floor = newFloor("eg", "EG", 0);
  for (const type of ["air_purifier", "smart_speaker", "security_camera", "smart_lock", "smart_curtain", "robot_vacuum", "robot_mower", "network_cabinet", "nas_server", "access_point", "wall_thermostat", "smoke_detector", "siren_alarm", "electrical_panel", "ups_unit", "modem_router", "heat_pump_outdoor", "hot_water_tank", "ventilation_fan", "humidifier", "smart_display", "wall_switch", "wall_outlet", "smart_plug", "motion_sensor", "contact_sensor", "water_leak_sensor", "temperature_humidity_sensor", "video_doorbell", "washer_dryer_tower", "balcony_solar"] as const) {
    const [w, d, h] = FURNITURE_SIZE[type];
    const item = { id: type, type, x: 0, z: 0, w, d, h, rotation: 0, variant: null } as Furniture;
    const base = mountBase(floor, item);
    const buf = new GeoBuffer();
    const lines = new LineBuffer();
    pushFurniture(buf, lines, new GeoBuffer(), item, base);
    const ys = buf.p.filter((_, i) => i % 3 === 1);
    assert.ok(buf.count > 20 && lines.p.length > 0, `${type}: detailed solid and outline geometry`);
    assert.ok(buf.p.every(Number.isFinite) && lines.p.every(Number.isFinite), `${type}: finite geometry`);
    assert.ok(Math.min(...ys) >= base - 1e-6 && Math.max(...ys) <= base + h + 0.02, `${type}: stays inside its mounted height`);
  }
  assert.equal(mountBase(floor, { type: "security_camera", x: 0, z: 0, h: FURNITURE_SIZE.security_camera[2] }), 1.85);
  assert.equal(mountBase(floor, { type: "smart_lock", x: 0, z: 0, h: FURNITURE_SIZE.smart_lock[2] }), 0.95);
  assert.equal(mountBase(floor, { type: "wall_thermostat", x: 0, z: 0, h: FURNITURE_SIZE.wall_thermostat[2] }), 1.35);
  assert.equal(mountBase(floor, { type: "siren_alarm", x: 0, z: 0, h: FURNITURE_SIZE.siren_alarm[2] }), 1.85);
  assert.equal(mountBase(floor, { type: "access_point", x: 0, z: 0, h: FURNITURE_SIZE.access_point[2] }), floor.height - FURNITURE_SIZE.access_point[2]);
  assert.equal(mountBase(floor, { type: "smoke_detector", x: 0, z: 0, h: FURNITURE_SIZE.smoke_detector[2] }), floor.height - FURNITURE_SIZE.smoke_detector[2]);
  assert.equal(mountBase(floor, { type: "electrical_panel", x: 0, z: 0, h: FURNITURE_SIZE.electrical_panel[2] }), 0.85);
  assert.equal(mountBase(floor, { type: "ventilation_fan", x: 0, z: 0, h: FURNITURE_SIZE.ventilation_fan[2] }), 1.8);
  assert.equal(mountBase(floor, { type: "wall_switch", x: 0, z: 0, h: FURNITURE_SIZE.wall_switch[2] }), 1.05);
  assert.equal(mountBase(floor, { type: "wall_outlet", x: 0, z: 0, h: FURNITURE_SIZE.wall_outlet[2] }), 0.3);
  assert.equal(mountBase(floor, { type: "motion_sensor", x: 0, z: 0, h: FURNITURE_SIZE.motion_sensor[2] }), 1.9);
  assert.equal(mountBase(floor, { type: "video_doorbell", x: 0, z: 0, h: FURNITURE_SIZE.video_doorbell[2] }), 1.25);
  for (const type of ["network_cabinet", "nas_server", "access_point", "wall_thermostat", "smoke_detector", "siren_alarm", "electrical_panel", "ups_unit", "modem_router", "heat_pump_outdoor", "hot_water_tank", "ventilation_fan", "humidifier", "smart_display", "wall_switch", "wall_outlet", "smart_plug", "motion_sensor", "contact_sensor", "water_leak_sensor", "temperature_humidity_sensor", "video_doorbell", "washer_dryer_tower", "balcony_solar"] as const) {
    const [w, d, h] = FURNITURE_SIZE[type];
    assert.ok(screenRect({ id: type, type, x: 0, z: 0, w, d, h, rotation: 0, variant: null } as Furniture, floor), `${type}: live indicator`);
  }
});

test("ceiling, ceiling-light, wall and floor fans have separate finite rotors for live animation", () => {
  for (const type of ["fan_ceiling", "fan_ceiling_light", "fan_wall", "fan_floor"] as const) {
    const [w, d, h] = FURNITURE_SIZE[type];
    const buf = new GeoBuffer();
    const lines = new LineBuffer();
    pushFanRotor(buf, lines, type, w, d, h);
    assert.ok(buf.count > 20, `${type}: solid blades and hub`);
    assert.ok(lines.p.length > 0, `${type}: outlined rotor`);
    assert.ok(buf.p.every(Number.isFinite) && lines.p.every(Number.isFinite), `${type}: finite geometry`);
  }
  const counts = ["3", "4", "5"].map((variant) => {
    const buf = new GeoBuffer();
    pushFanRotor(buf, new LineBuffer(), "fan_ceiling", 1.4, 1.4, 0.32, variant);
    return buf.count;
  });
  assert.ok(counts[0] < counts[1] && counts[1] < counts[2], "ceiling variants add one blade at a time");
  const defaultRotor = new GeoBuffer();
  pushFanRotor(defaultRotor, new LineBuffer(), "fan_ceiling", 1.4, 1.4, 0.32);
  assert.equal(defaultRotor.count, counts[2], "the official five-blade pack shape is the default");
});

/** Signed volume of a closed-ish mesh: positive when its triangles face outwards. */
function orientation(buf: GeoBuffer): number {
  let v = 0;
  for (let i = 0; i < buf.p.length; i += 9) {
    const [ax, ay, az, bx, by, bz, cx, cy, cz] = buf.p.slice(i, i + 9);
    v += ax * (by * cz - bz * cy) - ay * (bx * cz - bz * cx) + az * (bx * cy - by * cx);
  }
  return v;
}

test("a mirrored item keeps its faces pointing outwards (#159)", () => {
  setPacks([PACK]);
  for (const type of ["sofa", "bed", "fridge", "water_pump", "pack:t.cars:wedge"]) {
    const vol = (mirror: boolean) => {
      const buf = new GeoBuffer();
      const f: Furniture = { id: "f", type, x: 0, z: 0, rotation: 30, w: 2, d: 1, h: 1, variant: null, entity: null, power: null, mirror };
      pushFurniture(buf, new LineBuffer(), new GeoBuffer(), f);
      return orientation(buf);
    };
    const plain = vol(false);
    const mirrored = vol(true);
    assert.ok(Math.sign(plain) === Math.sign(mirrored) && Math.abs(plain - mirrored) < Math.abs(plain) * 0.01 + 1e-6, `${type}: ${plain} vs ${mirrored}`);
  }
});

test("a mirrored pack lamp is drawn mirrored and still faces outwards", async () => {
  const { pushPackLamp } = await import("./furniture.ts");
  setPacks([PACK]);
  const item = PACK.items[0];
  const vol = (mirror: boolean) => {
    const buf = new GeoBuffer();
    pushPackLamp(buf, item, { x: 0, z: 0, rotation: 0, w: 2, d: 4, h: 1, mirror }, 0, 0xffffff);
    return { v: orientation(buf), xs: buf.p.filter((_, i) => i % 3 === 0) };
  };
  const a = vol(false);
  const b = vol(true);
  assert.ok(Math.sign(a.v) === Math.sign(b.v));
  // the wheel sits at x = -0.4 of the item: mirrored, it moves to the other side
  near2(Math.min(...a.xs), -Math.max(...b.xs));
});

function near2(a: number, b: number) {
  assert.ok(Math.abs(a - b) < 1e-6, `${a} != ${b}`);
}
