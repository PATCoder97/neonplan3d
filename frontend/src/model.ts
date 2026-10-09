// Data model shared by editor, 3D view and backend (see custom_components/neonplan3d/schema.py).
// Units are metres; x grows to the right, z grows downwards (as in the 2D editor).

import { packItem } from "./packs.ts";
import { BUILTIN_VEHICLE_TYPES, ELECTRIC_FURNITURE, ENERGY_DEVICES, FURNITURE_GROUPS, FURNITURE_SIZE, FURNITURE_TYPES, LAMP_TYPES, STAIR_TYPES, type FurnitureType } from "./furniture/metadata.ts";
import type { LampModel } from "./viewer/viewer3d.ts";

// Compatibility facade: existing callers can keep importing furniture metadata from model.ts.
export { BUILTIN_VEHICLE_TYPES, ELECTRIC_FURNITURE, ENERGY_DEVICES, FURNITURE_GROUPS, FURNITURE_SIZE, FURNITURE_TYPES, LAMP_TYPES, STAIR_TYPES };
export type { FurnitureType };

export type Vec2 = [number, number];
export type CoveredRoomKind = "veranda" | "balcony" | "canopy";

/** Sensors a room's climate is read from (null = automatic, "none" = no value). */
export interface RoomClimate {
  temperature?: string | null;
  humidity?: string | null;
  co2?: string | null;
}

/** A wall height on a room edge, or one per part of a split edge. */
export type WallHeight = number | null | (number | null)[];

export interface Room {
  /** Room temperature, humidity and CO2: chosen sensors instead of the automatic pick. */
  climate?: RoomClimate | null;
  id: string;
  name: string;
  area_id: string | null;
  points: Vec2[];
  floor_material: string;
  /** An open room keeps room/area/device behaviour but renders as a veranda, roofless balcony or canopy. */
  kind?: "room" | CoveredRoomKind;
  /** Covered-room roof finish and structural options, rendered with the canonical room palette. */
  roof_style?: "solid" | "glass" | "tile" | null;
  /** Veranda railing, or the high fence and front gate around a covered yard. */
  railing?: boolean | null;
  columns?: number | null;
  column_size?: number | null;
  height?: number | null;
  slope?: number | null;
  slope_dir?: SlopeDir;
  /** Leave the last polygon edge open where the covered room joins the house. */
  open?: boolean;
  /** Entities shown in the room's panel although they are not in the plan. */
  panel?: string[];
  /** Entities of the room's area kept out of the room panel. */
  hidden?: string[];
  /** Entities whose state text the room panel leaves out (a cover that only reports "unknown", D154). */
  no_state?: string[];
  /**
   * Height of the wall on each edge (index = edge points[i] -> points[i + 1]); null = full floor height, 0 = no
   * wall. An edge that other rooms split into parts may carry a list instead: one height per part, in order.
   */
  wall_heights?: WallHeight[];
  /**
   * Thickness of the wall on each edge in m (index = edge); null = the building's exterior or interior
   * thickness. A wall two rooms share takes the thicker of their settings (D149).
   */
  wall_thickness?: (number | null)[];
  /**
   * Split points on each edge (index = edge): distances in metres from points[i] where the wall is cut
   * into parts of their own (each with its own height), e.g. a 2.5 m wall next to a 1.7 m one in line.
   */
  wall_splits?: (number[] | null)[];
}

export function isCoveredRoom(room: Room): room is Room & { kind: CoveredRoomKind } {
  return room.kind === "veranda" || room.kind === "balcony" || room.kind === "canopy";
}

/** Front edge of a covered polygon: opposite and parallel to its omitted house edge, else the longest. */
export function coveredFrontEdge(poly: readonly Vec2[], openEnd: number): number {
  if (poly.length < 2) return 0;
  if (openEnd < 0) {
    let front = 0;
    let longest = -1;
    for (let i = 0; i < poly.length; i++) {
      const p = poly[i];
      const q = poly[(i + 1) % poly.length];
      const length = Math.hypot(q[0] - p[0], q[1] - p[1]);
      if (length > longest) [front, longest] = [i, length];
    }
    return front;
  }
  const wa = poly[openEnd];
  const wb = poly[(openEnd + 1) % poly.length];
  const wdx = wb[0] - wa[0];
  const wdz = wb[1] - wa[1];
  const wl = Math.hypot(wdx, wdz) || 1;
  const wx = (wa[0] + wb[0]) / 2;
  const wz = (wa[1] + wb[1]) / 2;
  let front = 0;
  let best = -1;
  for (let i = 0; i < poly.length; i++) {
    if (i === openEnd) continue;
    const p = poly[i];
    const q = poly[(i + 1) % poly.length];
    const dx = q[0] - p[0];
    const dz = q[1] - p[1];
    const l = Math.hypot(dx, dz) || 1;
    const parallel = Math.abs((dx * wdx + dz * wdz) / (l * wl));
    const distance = Math.abs(wdx * ((p[1] + q[1]) / 2 - wz) - wdz * ((p[0] + q[0]) / 2 - wx)) / wl;
    const score = distance * parallel;
    if (score > best) [front, best] = [i, score];
  }
  return front;
}

export type OpeningType = "door" | "window" | "garage";

/** Entity link of an opening: null = assigned automatically by area, "none" = no entity. */
export type EntityRef = string | null;

export interface Opening {
  id: string;
  room_id: string;
  /** Room edge the opening sits on (points[edge] -> points[edge + 1]); 0 in a free wall. */
  edge: number;
  /** Distance of the opening's centre from points[edge], or from the free wall's start (metres). */
  offset: number;
  /** Free wall the opening sits in (its id); room_id is then the room the wall stands in. */
  wall?: string | null;
  width: number;
  type: OpeningType;
  /** Height of the bottom above the floor; 0 for doors, garage doors and terrace doors. */
  sill: number;
  height: number;
  /** Hinge as seen from the room; with two leaves, the side of the main leaf. */
  hinge: "left" | "right";
  /** One leaf, or two (double door, French window) opening from the middle. */
  leaves: 1 | 2;
  /** Doors swing into their room ("in") or to the other side ("out"). */
  swing: "in" | "out";
  /** Look of the door or window (null = automatic: a front door in an exterior wall, else a room door). */
  style?: OpeningStyle | null;
  /** One sidelight: on the hinge side instead of opposite the hinge. */
  sidelight_hinge?: boolean;
  /** Width of the sidelight(s) in m (null = automatic); with two, `sidelight_width2` is the right one (seen from the room). */
  sidelight_width?: number | null;
  sidelight_width2?: number | null;
  /** Contact of the second leaf (null = none). */
  contact2: string | null;
  /** Windows: which sensors report the sash (null: a contact, plus a tilt sensor when one is set). */
  sensor?: "contact" | "handle" | "contact_tilt" | null;
  /** The same for the second leaf of a double window, with its own tilt sensor. */
  sensor2?: "contact" | "handle" | "contact_tilt" | null;
  tilt2?: string | null;
  /** A sensor reporting the blind's position while it moves (covers that only report at the end). */
  position?: string | null;
  /** The position sensor counts the other way round (0 = open). */
  position_inverted?: boolean;
  /** Windows: a sensor with the sash's tilt angle (degrees); the sash tilts in 3D as far as it reports. */
  tilt_angle?: EntityRef;
  /** Angle that counts as fully tilted (default 15°), an offset the sensor reports when closed, and the other sign. */
  tilt_max?: number | null;
  tilt_offset?: number | null;
  tilt_invert?: boolean;
  /** Door: drawn closed when no sensor says otherwise (default: half open, so the door is seen). */
  shut?: boolean;
  /** Highlight in 3D while open (null, default) or while closed (a WC or a child's room door). */
  mark?: "closed" | null;
  /** Ask before moving the blind or garage door; it then does not follow a swipe either. */
  confirm?: boolean;
  cover: EntityRef;
  contact: EntityRef;
  tilt: EntityRef;
}

/** A picture rule of a screen: while `entity` is in `state`, the stored image (or a URL) is shown. */
export interface ScreenPicture {
  entity: string;
  /** Compare this attribute (e.g. app_name) instead of the state. */
  attribute?: string | null;
  /** The value to match: exact, or contained in the value's text ("youtube" in "com.google.android.youtube.tv"); "*" = any. */
  state: string;
  /** An image id of the image store, or an http(s) URL. */
  image: string;
}

export interface Furniture {
  /** Fixed against moving by accident. */
  locked?: boolean | null;
  id: string;
  type: string;
  x: number;
  z: number;
  rotation: number;
  w: number;
  d: number;
  h: number;
  variant: string | null;
  /** Own name (e.g. "Wechselrichter Nord"); null = the type's name. */
  name?: string | null;
  /** The own name shows as a small label under its marker in 3D. */
  show_name?: boolean;
  /** An own symbol for the marker: a Material Design icon name without "mdi:" (null = by kind). */
  icon?: string | null;
  /** Linked entity, e.g. the TV's media player (null = automatic, "none" = none). */
  entity?: EntityRef;
  /** Combined ceiling fan: its independently controlled light (the main entity remains the fan). */
  light_entity?: EntityRef;
  /** Power sensor (null = automatic: the linked entity's device or a matching name). */
  power?: EntityRef;
  /** Smart fridge: door sensors of the left (freezer) and right (fridge) door; the doors open in 3D while they report open. */
  door_left?: EntityRef;
  door_right?: EntityRef;
  /** Home battery: its state of charge (%). Wallbox: a status sensor (charging, car plugged in). */
  soc?: EntityRef;
  /** Home battery: a separate sensor with the charging power (W) when the power sensor only reports discharging. */
  charge?: EntityRef;
  /** Meter: a separate sensor with the export power (W) when the power sensor only reports import. */
  export?: EntityRef;
  /** Energie Pro: a glass card over the device with its power now, today's kWh and the day curve. */
  holo?: boolean;
  /** Energie Pro, inverter: false hides the plant's card over its field. */
  plant_card?: boolean;
  status?: EntityRef;
  /** Robot vacuum: sensor naming the room it cleans right now (null = automatic, "none" = the dock's room). */
  room_sensor?: EntityRef;
  /** Ask before switching the linked entity. */
  confirm?: boolean;
  /** Its marker in 3D: automatic (null), always shown, shown without watts, or hidden. */
  marker?: MarkerShow | null;
  /** Height of the bottom edge above the floor (null = default: the floor, a pack item's mount, a surface below). */
  mount_y?: number | null;
  /** Any furniture: an entity whose state the item shows – it glows while on, occupied or home (a bed with an occupancy mat, a chair, a sauna). */
  state_entity?: EntityRef;
  /** A second state entity for the other half: left/right (a double bed) or bottom/top (a bunk bed). */
  state_entity2?: EntityRef;
  state_split?: "left_right" | "top_bottom" | null;
  /** Lamps: a second entity whose colour and brightness the lamp shows while the linked switch is on (a relay switches the light, the bulb itself knows its colour). */
  color_entity?: EntityRef;
  /** Mirrored (left-right) – an L-sofa the other way round, a cabinet with its door on the other side. */
  mirror?: boolean;
  /** LED strip: tilt about its length (°; 0 = lying flat, 90 = its face points sideways, e.g. along a roof slope). */
  tilt?: number;
  /** LED strip: standing upright – its length runs up from the mount height (door frame, light column). */
  upright?: boolean;
  /** Screens: pictures shown while an entity is in a state (first match wins; "*" = any state). */
  pictures?: ScreenPicture[];
  /** Screens: what shows around a rule picture – a dark screen (default) or a white one (for dark logos). */
  screen_bg?: "black" | "white";
  /** Parking spots: the vehicle shown (a pack item type) while `entity` reports a car. */
  vehicle?: string | null;
  /** Auto Pro: the car's entities (each null = found on the device of `device`, or of the presence entity). */
  car?: CarLinks | null;
  /** Parking spots: size factor of the vehicle (1 = the pack item's size). */
  scale?: number;
  /** Parking spots: a sensor naming the kind of vehicle, and which vehicle each state means. */
  type_entity?: string | null;
  types?: { state: string; vehicle: string }[];
}

export type LampMount = "ceiling" | "floor" | "table" | "wall";

/** How a device's marker shows in 3D (null = automatic by the marker mode). */
export const MARKER_SHOWS = ["always", "no_power", "never"] as const;
export type MarkerShow = (typeof MARKER_SHOWS)[number];

export interface Placement {
  /** Fixed against moving by accident. */
  locked?: boolean | null;
  entity_id: string;
  x: number;
  z: number;
  /** Height above the floor; null = default for the device kind (and lamp mount). */
  y: number | null;
  /** Lights: how the lamp is mounted; null = ceiling. */
  mount?: LampMount | null;
  /** Turn around the vertical axis (degrees): wall lamps, spots, displays face that way. */
  rotation?: number;
  /** Cameras: opening angle of the field of view (degrees) and how far it reaches (m); null = default. */
  fov?: number | null;
  reach?: number | null;
  /** Cameras: how far it looks down (degrees below the horizon; null = 20° on a wall, 65° as a dome). */
  tilt?: number | null;
  /** Ask before switching this device (3D tap, quick menu, room panel). */
  confirm?: boolean;
  /** Its marker in 3D: automatic (null), always shown, shown without watts, or hidden. */
  marker?: MarkerShow | null;
  /** An own symbol for the marker: a Material Design icon name without "mdi:" (null = by kind). */
  icon?: string | null;
  /** An own name in the plan (null = the entity's name), without renaming the entity in Home Assistant. */
  name?: string | null;
  /** The own name shows as a small label under its marker in 3D. */
  show_name?: boolean;
  /** Cameras: show the field-of-view wedge on the floor (null = yes). */
  cone?: boolean | null;
}

export interface Background {
  image_id: string;
  x: number;
  z: number;
  width: number;
  opacity: number;
  /** Turn about the picture's middle (degrees, clockwise in the plan). */
  rotation?: number;
}

export interface Floor {
  id: string;
  name: string;
  elevation: number;
  height: number;
  cut_height: number;
  rooms: Room[];
  openings: Opening[];
  furniture: Furniture[];
  placements: Placement[];
  background: Background | null;
  outdoor: OutdoorArea[];
  /** Free-standing walls (a partition through half a room); room walls come from the room edges. */
  walls?: FreeWall[];
  /** Linked floor of Home Assistant's floor registry. */
  ha_floor: string | null;
}

/** A wall drawn on its own, from a to b along its centre line. */
export interface FreeWall {
  id: string;
  a: Vec2;
  b: Vec2;
  /** Thickness in metres (null = the interior wall thickness of the settings). */
  thickness?: number | null;
  /** Height in metres (null = full floor height), e.g. a half-height wall or a counter. */
  height?: number | null;
}

/** "custom": the roof is made of sections (wings of an L- or T-shaped house, a barn, a lean-to …). */
export type RoofType = "none" | "flat" | "gable" | "custom";

/** Shapes of a roof section. */
export const ROOF_SHAPES = ["gable", "hip", "halfhip", "pyramid", "mansard", "pent", "flat", "parapet"] as const;
export type RoofShape = (typeof ROOF_SHAPES)[number];

/**
 * One roof section over a rectangle of the plan (at the outer wall faces; the overhang comes on top).
 * Heights are above the ground. Across the ridge, side "a" is the low coordinate (z for a ridge along
 * x, x for a ridge along z), side "b" the high one; each side has its own eave height and pitch, so one
 * slope can reach further down (a catslide over a lower part). A pent roof rises from side a.
 */
export interface RoofSection {
  id: string;
  x0: number;
  z0: number;
  x1: number;
  z1: number;
  shape: RoofShape;
  /** The ridge runs along x or along z. */
  axis: "x" | "z";
  eave_a: number;
  eave_b: number;
  /** Slopes in degrees. */
  pitch_a: number;
  pitch_b: number;
  /** Top of the walls below: gable and knee walls are built from here up to the roof. */
  base: number;
  /** Overhang beyond the walls (null = the roof setting). */
  overhang?: number | null;
  /** Sides a and b swapped: side a is the high coordinate (a pent roof then rises the other way). */
  flip?: boolean;
  /**
   * A flat roof as a free shape: its footprint polygon (plan coordinates at the outer wall faces, the
   * overhang comes on top); x0 … z1 then hold the polygon's bounding box.
   */
  points?: Vec2[] | null;
  /** A dormer: a small section on the slope of another one, open towards that slope at its rear. */
  dormer?: boolean;
  /** Fixed: cannot be moved or resized by accident (the plan lock fixes every section too). */
  locked?: boolean;
  /** A canopy (terrace roof, carport): posts and beams instead of walls, a see-through roof. */
  open?: boolean;
}

export interface RoofSettings {
  type: RoofType;
  /** Slope of a gable roof in degrees. */
  pitch: number;
  /** How far the roof reaches beyond the outer walls (metres). */
  overhang: number;
  /** Gable roof: ridge along the long side (default) or across, along the short side (terraced houses). */
  ridge?: "long" | "short" | null;
  /** Roof sections of a "custom" roof. */
  sections?: RoofSection[];
  /** Solar fields on the roof faces. */
  solar?: SolarField[];
  /** Strings that fields belong to. */
  strings?: SolarString[];
  /** Roof windows on the roof faces. */
  windows?: RoofWindow[];
  /** Energie Pro: the hologram's place and size. */
  hologram?: HologramSettings | null;
  /** Energie Pro: cables laid by hand (the others find their own way). */
  cables?: CableRoute[];
}

/**
 * A field of solar modules on a roof face (see solar.ts): rows × columns from its lower left corner (u along
 * the eave, v up the slope, in metres). On a flat roof the modules stand on frames, tilted by `tilt`.
 */
export interface SolarField {
  id: string;
  /** Roof face: "main:a" / "main:b" / "main:top" (single roof) or "<section id>:a" / ":b" / ":top"; hip ends ":c" / ":d". */
  face: string;
  u: number;
  v: number;
  rows: number;
  cols: number;
  /** Portrait (default) or landscape modules. */
  portrait: boolean;
  /** Flat roofs: tilt of the frames in degrees (null = 15°). */
  tilt?: number | null;
  /** Flat roofs: the modules lean the other way. */
  flip?: boolean;
  /** PV power sensor of this field, e.g. its string (null = the plant's sensor from the energy settings). */
  entity?: string | null;
  /** Name, e.g. "String 1 south". */
  name?: string | null;
  /** Modules per row when the rows differ (e.g. [4, 4, 3]); null = `cols` in every row. */
  layout?: number[] | null;
  /** Shorter rows sit left, centred or right. */
  align?: "left" | "center" | "right" | null;
  /** Modules left out, as "row:column" (row 0 at the eave). */
  skip?: string[] | null;
  /** Look: full black (default) or classic blue. */
  look?: "black" | "blue" | null;
  /** Module size in portrait, width × height in metres (null = 1.13 × 1.72). */
  module_w?: number | null;
  module_h?: number | null;
  /** Peak power of one module (Wp); null = 400. */
  wp?: number | null;
  /** The string the field belongs to (see RoofSettings.strings); fields on several roofs can share one. */
  string?: string | null;
  /** Free-standing fields (face "ground"): rotation of the rows in the plan, degrees. */
  rotation?: number | null;
  /** Free-standing fields: height of the surface they stand on above the ground floor (a garage roof); null = the ground. */
  base?: number | null;
  /** Fixed: cannot be moved by accident. */
  locked?: boolean;
}

/**
 * A roof window on a roof face (u along the eave, v up the slope, in metres, at its lower left corner). Like a
 * window it follows a contact (open or tilted: the sash swings out at the top) and a blind (cover).
 */
/** Energie Pro: where the hologram hangs – on a solar field, moved along the field and up the slope, scaled. */
export interface HologramSettings {
  /** Where it hangs: on a solar field (default), or free at a point in the plan. */
  place?: "field" | "free";
  /** The field it hangs on (null: the biggest one). */
  field: string | null;
  /** Free placement: the point in the plan (m) and the height of the card's middle above the ground floor (m). */
  x?: number;
  z?: number;
  height?: number;
  /** Size factor (1 = normal). */
  size: number;
  /** Offset from the field's middle along the eave (m, + = right) and up the slope (m). */
  right: number;
  up: number;
}

export const DEFAULT_HOLOGRAM: HologramSettings = { field: null, size: 1, right: 0, up: 0 };

/**
 * Energie Pro: a cable laid by hand. Its id names the cable ("solar:<field>", "inv:<inverter>", "bat:<battery>",
 * "grid"); the points are its way in the plan, run at `height` above the given floor.
 */
export interface CableRoute {
  id: string;
  floor_id: string;
  points: Vec2[];
  height: number;
  /** Fixed: its points cannot be moved by accident. */
  locked?: boolean;
}

export interface RoofWindow {
  id: string;
  face: string;
  u: number;
  v: number;
  /** Size in metres (null = 0.78 × 1.18, a common size). */
  w?: number | null;
  h?: number | null;
  cover?: EntityRef;
  contact?: EntityRef;
  tilt?: EntityRef;
  /** A window motor (a cover whose position opens the sash that far). */
  window?: EntityRef;
  name?: string | null;
  /** Fixed: cannot be moved by accident. */
  locked?: boolean;
}

/** A string of solar modules: one or more fields wired together to one inverter. */
export interface SolarString {
  id: string;
  name: string;
  /** PV power sensor of the string. */
  entity?: string | null;
  /** The inverter it feeds (an "inverter" furniture item). */
  inverter?: string | null;
}

export const BUTTON_ACTIONS = ["navigate", "more_info", "service", "fire_dom_event"] as const;
export type ButtonAction = (typeof BUTTON_ACTIONS)[number];

/**
 * An own button in the central menu (D143): opens a dashboard path, the more-info dialog of an entity,
 * calls a service, or fires a DOM event (a browser_mod popup with your own card).
 */
export interface CustomButton {
  id: string;
  label: string;
  /** Material Design icon name without "mdi:". */
  icon?: string | null;
  action: ButtonAction;
  /** navigate: the path ("/lovelace/rollos"); more_info: the entity; service: "domain.service". */
  target?: string | null;
  /** service: its data; fire_dom_event: the event's detail (e.g. { browser_mod: { service, data } }). */
  data?: Record<string, unknown> | null;
}

/**
 * Something to play on a speaker from its quick menu (Klang & Kino): media_player.play_media with this
 * content type and id – a radio stream URL, a Music Assistant or Sonos URI, or for an Echo (Alexa Media
 * Player) the type SPOTIFY / AMAZON_MUSIC / TUNEIN with what you would say ("Rock Antenne").
 */
export interface MediaPreset {
  id: string;
  label: string;
  type: string;
  content: string;
}

export interface BuildingSettings {
  /** Device quick menu. Classic remains selectable as a rollback path. */
  menu_style?: "classic" | "honeycomb";
  /** Stations and playlists for the speakers' quick menu (Klang & Kino). */
  media_presets?: MediaPreset[];
  /** Favourites of the house: scenes, scripts, automations, buttons and switches in the central menu of the 3D view (#145). */
  favorites?: string[];
  /** Own buttons in the central menu (D143). */
  buttons?: CustomButton[];
  wall_exterior: number;
  wall_interior: number;
  grid: number;
  /** Direction of north in the plan, degrees clockwise from "up" (for the sun). */
  north: number;
  roof: RoofSettings;
  /** The weather entity shown outside the house (null = the first one). */
  weather_entity?: string | null;
  /** Which weather effects the 3D view shows (null = all but fog). */
  weather_effects?: WeatherEffect[] | null;
  /** Warning for a window open while it rains (default on). */
  rain_warning?: boolean;
  /** Plan lock: rooms, walls, doors, windows and outdoor areas cannot be moved by accident. */
  lock_plan?: boolean;
  /** The camera the house view opens with (3D view, card, kiosk); null = fitted from the front left. */
  start_view?: StartView | null;
}

/** A camera position around the house: azimuth and polar angle (radians) and the distance (m). */
export interface StartView {
  theta: number;
  phi: number;
  radius: number;
}

/**
 * Whether an item is fixed: rooms, walls, doors, windows and outdoor areas follow the plan lock alone,
 * furniture and devices their own lock.
 */
export function isFixed(item: object | null | undefined, structural: boolean, settings: Pick<BuildingSettings, "lock_plan">): boolean {
  if (!item) return false;
  return structural ? !!settings.lock_plan : !!(item as { locked?: boolean | null }).locked;
}

export const WEATHER_EFFECTS = ["rain", "snow", "fog", "clouds", "lightning", "sky"] as const;
export type WeatherEffect = (typeof WEATHER_EFFECTS)[number];
/** The effects shown when the plan does not say: everything but fog (fog greys the whole scene). */
export const DEFAULT_WEATHER_EFFECTS: WeatherEffect[] = ["rain", "snow", "clouds", "lightning", "sky"];

export const OUTDOOR_TYPES = ["lawn", "terrace", "path", "driveway", "pool", "bed", "wild", "hedge", "fence", "pergola"] as const;
export type OutdoorType = (typeof OUTDOOR_TYPES)[number];

/** Top of each kind of outdoor area above ground level (pool: its water, below). */
export const OUTDOOR_TOP: Record<OutdoorType, number> = {
  lawn: 0.012,
  terrace: 0.12,
  path: 0.02,
  driveway: 0.02,
  pool: -0.25,
  bed: 0.15,
  wild: 0.03,
  hedge: 1.2,
  fence: 1.0,
  pergola: 2.2,
};

/** Built-in floor/slab height of room-like covered structures. */
export const COVERED_FLOOR_TOP: Record<CoveredRoomKind, number> = {
  canopy: 0.02,
  veranda: 0.12,
  balcony: 0.12,
};

export function coveredFloorTop(type: CoveredRoomKind): number {
  return COVERED_FLOOR_TOP[type];
}

/** Types that stand on the ground as structures (no surface to stand on, no light pool). */
export function outdoorStanding(type: OutdoorType): boolean {
  return type === "hedge" || type === "fence" || type === "pergola";
}

/** The directions an area can fall towards: +x (right in the plan), −x, +z (down in the plan), −z. */
export const SLOPE_DIRS = ["x", "-x", "z", "-z"] as const;
export type SlopeDir = (typeof SLOPE_DIRS)[number];

/**
 * How far the surface of an area has dropped at a point (m, ≥ 0): zero on the high edge, the full
 * slope on the low edge, along the slope direction across the extent of the polygon.
 */
export function outdoorDrop(
  a: { points: Vec2[]; slope?: number | null; slope_dir?: SlopeDir | null; type?: OutdoorType | CoveredRoomKind },
  x: number,
  z: number,
): number {
  const slope = a.slope ?? 0;
  if (!slope || a.type === "pool") return 0;
  const dir = a.slope_dir ?? "x";
  const proj = (px: number, pz: number) => (dir === "x" ? px : dir === "-x" ? -px : dir === "z" ? pz : -pz);
  let lo = Infinity;
  let hi = -Infinity;
  for (const [px, pz] of a.points) {
    const v = proj(px, pz);
    lo = Math.min(lo, v);
    hi = Math.max(hi, v);
  }
  if (hi - lo < 1e-6) return 0;
  const t = Math.min(1, Math.max(0, (proj(x, z) - lo) / (hi - lo)));
  return slope * t;
}

/** Height of the surface of an area at a point, in floor coordinates (offset and slope included). */
export function outdoorTopAt(floor: Floor, a: OutdoorArea, x: number, z: number): number {
  return groundLevel(floor) + (a.offset ?? 0) + OUTDOOR_TOP[a.type] - outdoorDrop(a, x, z);
}

/** Ground level in floor coordinates: below the ground floor slab (0.2 m), the floor itself further up. */
export function groundLevel(floor: Floor): number {
  return floor.elevation > 0.3 ? 0 : -0.2;
}

/** Height outdoor lamps stand on at a point: ground level, or the top of a terrace or bed there. */
export function outdoorGround(floor: Floor, x: number, z: number): number {
  const inside = (floor.outdoor ?? []).filter((o) => !outdoorStanding(o.type) && o.type !== "pool" && pointInPolygon([x, z], o.points));
  // an area cut out of the one beneath it wins over that one
  const a = [...inside].reverse().find((o) => o.cut) ?? inside[0];
  return a ? outdoorTopAt(floor, a, x, z) : groundLevel(floor);
}

/** Auto Pro: which entities tell the car's state; null = automatic (an entity of the car's Home Assistant device). */
export interface CarLinks {
  /** Any entity of the car's device: the others are found beside it. */
  device?: EntityRef;
  soc?: EntityRef;
  range?: EntityRef;
  /** Charging power (W/kW), a charging binary sensor, or the charge switch. */
  charging?: EntityRef;
  plugged?: EntityRef;
  lock?: EntityRef;
  climate?: EntityRef;
  tracker?: EntityRef;
}

/** Area outside the house (lawn, terrace, pool, hedge …), drawn like a room. */
export interface OutdoorArea {
  id: string;
  type: OutdoorType;
  points: Vec2[];
  /** Standing structures (hedge, fence, pergola): their height in m. */
  height?: number | null;
  /** False hides the neon outline (a plot of several lawns without lines crossing it). */
  outline?: boolean;
  /** Height offset in m: a driveway piece in front of a lower garage sits below the ground (negative), a raised terrace above. */
  offset?: number | null;
  /** Fall in m across the area along slope_dir (a driveway down to the garage, a sloping lawn); the high edge sits at the offset. */
  slope?: number | null;
  slope_dir?: SlopeDir;
  /** Fences and pergolas: the closing edge is left out, so the structure can lean against the house. */
  open?: boolean;
  /** Pergola: diagonal X-bracing on every side. */
  bracing?: boolean;
  /** This area is cut out of every area beneath it that contains it (a wild patch or pond inside a lawn). */
  cut?: boolean;
}

/** Energy flow: meter position and power sensors (W). Grid positive = import, battery positive = discharging. */
export interface EnergySettings {
  meter: { floor_id: string; x: number; z: number } | null;
  grid: string | null;
  grid_invert: boolean;
  solar: string | null;
  battery: string | null;
  battery_invert: boolean;
  battery_soc: string | null;
  /** House consumption (W); null = from the balance of grid, solar and battery. */
  consumption: string | null;
  tariff: string | null;
}

/** A person and the sensor whose state names the room they are in (ESPresense, Bermuda, …). */
export interface PresenceLink {
  person: string;
  sensor: string | null;
}

export interface Building {
  version: 1;
  floors: Floor[];
  settings: BuildingSettings;
  energy: EnergySettings;
  presence: PresenceLink[];
}

export const DEFAULT_ENERGY: EnergySettings = {
  meter: null,
  grid: null,
  grid_invert: false,
  solar: null,
  battery: null,
  battery_invert: false,
  battery_soc: null,
  consumption: null,
  tariff: null,
};

export const FLOOR_MATERIALS = ["wood", "oak", "tiles", "carpet", "stone", "concrete"] as const;

export const DEFAULT_ROOF: RoofSettings = { type: "none", pitch: 35, overhang: 0.4 };

export const DEFAULT_SETTINGS: BuildingSettings = { menu_style: "honeycomb", wall_exterior: 0.24, wall_interior: 0.12, grid: 0.05, north: 0, roof: { ...DEFAULT_ROOF } };

/** Unknown or missing persisted values fail closed to the proven classic menu. */
export function normalizeMenuStyle(value: unknown): "classic" | "honeycomb" {
  return value === "honeycomb" ? "honeycomb" : "classic";
}

export function emptyBuilding(): Building {
  return { version: 1, floors: [], settings: { ...DEFAULT_SETTINGS }, energy: { ...DEFAULT_ENERGY }, presence: [] };
}

export function newFloor(id: string, name: string, elevation: number): Floor {
  return {
    id,
    name,
    elevation,
    height: 2.5,
    cut_height: 1.15,
    rooms: [],
    openings: [],
    furniture: [],
    placements: [],
    background: null,
    outdoor: [],
    walls: [],
    ha_floor: null,
  };
}

/** Storey height used to place floors created from Home Assistant levels. */
export const LEVEL_HEIGHT = 2.75;

/** Where a new floor goes: at its Home Assistant level if known, otherwise on top. */
export function floorElevation(floors: Floor[], level: number | null | undefined): number {
  if (level != null && Number.isFinite(level)) return Math.round(level * LEVEL_HEIGHT * 100) / 100;
  const top = floors.reduce<Floor | null>((t, f) => (!t || f.elevation > t.elevation ? f : t), null);
  return top ? Math.round((top.elevation + top.height + 0.25) * 100) / 100 : 0;
}

/**
 * Rooms for areas as 4 × 3 m tiles in rows beside a floor's existing rooms, to be dragged into place
 * and resized.
 */
export function roomTiles(floor: Floor, areas: { area_id: string; name: string }[], id: () => string): Room[] {
  const xs = floor.rooms.flatMap((r) => r.points.map((p) => p[0]));
  const zs = floor.rooms.flatMap((r) => r.points.map((p) => p[1]));
  const x0 = xs.length ? Math.ceil(Math.max(...xs)) + 1 : 0;
  const z0 = zs.length ? Math.floor(Math.min(...zs)) : 0;
  return areas.map((a, i) => {
    const x = x0 + (i % 3) * 4.5;
    const z = z0 + Math.floor(i / 3) * 3.5;
    return { id: id(), name: a.name, area_id: a.area_id, points: [[x, z], [x + 4, z], [x + 4, z + 3], [x, z + 3]] as Vec2[], floor_material: "wood" };
  });
}

/**
 * Resizes a furniture item by dragging one corner (`corner`: signs of the corner in the item's own
 * frame) to a plan point; the opposite corner stays in place. Sizes snap to `grid`.
 */
export function resizeFurniture(f: Furniture, corner: [1 | -1, 1 | -1], p: Vec2, grid: number): Pick<Furniture, "x" | "z" | "w" | "d"> {
  const a = (f.rotation * Math.PI) / 180;
  const c = Math.cos(a);
  const s = Math.sin(a);
  const [sx, sz] = corner;
  // item axes in the plan: local x → (c, s), local z → (-s, c)
  const ax = f.x - sx * (f.w / 2) * c + sz * (f.d / 2) * s;
  const az = f.z - sx * (f.w / 2) * s - sz * (f.d / 2) * c;
  const dx = p[0] - ax;
  const dz = p[1] - az;
  const snapSize = (v: number) => Math.max(0.1, Math.round(v / grid) * grid);
  const w = snapSize((dx * c + dz * s) * sx);
  const d = snapSize((-dx * s + dz * c) * sz);
  const r = (v: number) => Math.round(v * 1000) / 1000;
  return { x: r(ax + sx * (w / 2) * c - sz * (d / 2) * s), z: r(az + sx * (w / 2) * s + sz * (d / 2) * c), w: r(w), d: r(d) };
}

/** One of a furniture item's corners in plan coordinates. */
export function furnitureCorner(f: Pick<Furniture, "x" | "z" | "rotation" | "w" | "d">, corner: [1 | -1, 1 | -1]): Vec2 {
  const a = (f.rotation * Math.PI) / 180;
  const c = Math.cos(a);
  const s = Math.sin(a);
  const [sx, sz] = corner;
  return [f.x + sx * (f.w / 2) * c - sz * (f.d / 2) * s, f.z + sx * (f.w / 2) * s + sz * (f.d / 2) * c];
}

/** Rotation whose local front (+z) points from the furniture centre towards `p`. */
export function furnitureRotationAt(f: Pick<Furniture, "x" | "z">, p: Vec2): number {
  return (Math.atan2(-(p[0] - f.x), p[1] - f.z) * 180) / Math.PI;
}

/** Default height of the bottom of a wall light above the floor (metres). */
export const WALL_LAMP_Y = 1.75;

/** Items that can be lifted off the floor (a wall cabinet, a shelf, a wall light, an LED strip): everything but lamps hung from the ceiling and the ceiling-mounted pack items. */
export function canLift(f: Pick<Furniture, "type">): boolean {
  if (["lamp_ceiling", "lamp_downlight", "lamp_spot", "lamp_panel", "lamp_panel_round", "lamp_pendant", "lamp_cinema_star_ceiling", "fan_ceiling", "fan_ceiling_light", "access_point", "smoke_detector", "cinema_projector_ceiling", "cinema_speaker_ceiling", "stairwell", "parking"].includes(f.type) || STAIR_TYPES.has(f.type)) return false;
  return packItem(f.type)?.mount !== "ceiling";
}

export function isLamp(type: string): boolean {
  return LAMP_TYPES.has(type) || !!packItem(type)?.light;
}

/** Furniture a table lamp can stand on. */
const SURFACES = new Set<string>([
  "table",
  "table_round",
  "coffee_table",
  "coffee_table_round",
  "coffee_table_glass",
  "nesting_tables",
  "side_table_round",
  "console_table",
  "lowboard_120",
  "lowboard_160",
  "lowboard_200",
  "table_120",
  "table_160",
  "table_200",
  "table_solid_220",
  "tv_console",
  "desk",
  "desk_l",
  "desk_corner",
  "desk_sit_stand",
  "desk_kids",
  "table_chairs_kids",
  "changing_dresser",
  "nightstand",
  "nightstand_drawer",
  "nightstand_slim",
  "nightstand_floating",
  "vanity_mirror",
  "vanity_light",
  "changing_table",
  "vanity_60",
  "vanity_80",
  "vanity_100",
  "double_vanity_120",
  "bathroom_cabinet_mid",
  "bathroom_wall_shelf",
  "washer_vanity",
  "builtin_shelf_niche",
  "window_seat",
  "platform_steps",
  "sideboard",
  "dresser",
  "kitchen",
  "island",
  "kitchen_island_bar",
  "kitchen_cart",
  "kitchen_open_shelf",
  "worktop",
  "tv_board",
  "dishwasher",
  "washer",
  "dryer",
  "cinema_vinyl_shelf",
  "cinema_hifi_rack",
]);

/**
 * Positions of a rows × cols grid of lamps in a room: cells of equal size over the room's bounding box,
 * one lamp per cell centre that lies inside the room (L-shaped rooms simply leave cells out).
 */
export function spotGrid(room: Room, rows: number, cols: number, inset = 0): Vec2[] {
  const b = bounds(room.points);
  const w = b.x1 - b.x0 - 2 * inset;
  const d = b.z1 - b.z0 - 2 * inset;
  const out: Vec2[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const p: Vec2 = [Math.round((b.x0 + inset + (w / cols) * (c + 0.5)) * 1000) / 1000, Math.round((b.z0 + inset + (d / rows) * (r + 0.5)) * 1000) / 1000];
      if (pointInPolygon(p, room.points)) out.push(p);
    }
  }
  return out;
}

export type Direction = "right" | "down" | "left" | "up";

/** Point `length` metres from `p` in a plan direction (right = +x, down = +z, as in the editor). */
export function step(p: Vec2, length: number, dir: Direction): Vec2 {
  const r = (v: number) => Math.round(v * 1000) / 1000;
  const [dx, dz] = { right: [1, 0], down: [0, 1], left: [-1, 0], up: [0, -1] }[dir];
  return [r(p[0] + dx * length), r(p[1] + dz * length)];
}

/** Height of the highest furniture top under a point (0 = the floor). */
/**
 * Height of the bottom of a built-in model as drawn (a wall cabinet hangs at 1.45 m, a wall TV is
 * centred at 1.3 m, a radiator stands on short brackets); the mount height replaces it.
 */
export function builtinBase(f: Pick<Furniture, "type" | "h"> & { variant?: string | null }): number {
  switch (f.type) {
    case "home_battery":
      // a wall battery hangs at hip height
      return f.variant === "wall" ? 0.5 : 0;
    case "kitchen_wall":
      return 1.45;
    case "floating_shelf":
      return 1.35;
    case "wall_shelf_garage":
      return 1.25;
    case "whiteboard_office":
      return 1.2;
    case "filament_shelf_wall":
      return 1.1;
    case "cat_scratch_board_wall":
      return 0.65;
    case "cat_wall_perch":
      return 1.15;
    case "cat_climbing_steps_wall":
      return 0.55;
    case "fitness_mirror_wall":
      return 0.5;
    case "fitness_wall_bars":
      return 0.3;
    case "fitness_mirror_smart":
      return 0.4;
    case "cinema_screen_wall":
    case "cinema_screen_roller":
      return 0.65;
    case "cinema_speaker_wall":
    case "cinema_speaker_inwall":
      return 1.2;
    case "cinema_acoustic_panel":
      return 0.65;
    case "cinema_tv_oled_65":
    case "cinema_tv_oled_85":
      return 0.75;
    case "nightstand_floating":
      return 0.48;
    case "tv_wall":
      return Math.max(0, 1.3 - f.h / 2);
    case "radiator":
      return 0.12;
    case "air_conditioner":
      return 1.9;
    case "inverter":
      return 1.1;
    case "wallbox":
      return 1.0;
    case "meter":
      return 0.4;
    case "security_camera":
      return 1.85;
    case "smart_lock":
      return 0.95;
    case "wall_thermostat":
      return 1.35;
    case "siren_alarm":
      return 1.85;
    case "electrical_panel":
      return 0.85;
    case "ventilation_fan":
      return 1.8;
    case "wall_switch":
      return 1.05;
    case "wall_outlet":
    case "smart_plug":
      return 0.3;
    case "motion_sensor":
      return 1.9;
    case "contact_sensor":
      return 1.1;
    case "temperature_humidity_sensor":
      return 1.35;
    case "video_doorbell":
      return 1.25;
    default:
      return 0;
  }
}

export function surfaceHeight(floor: Floor, x: number, z: number): number {
  let top = 0;
  for (const f of floor.furniture) {
    if (!(SURFACES.has(f.type) || packItem(f.type)?.surface) || !pointInPolygon([x, z], furnitureFootprint(f))) continue;
    top = Math.max(top, f.h);
  }
  return top;
}

export const OPENING_DEFAULTS = {
  door: { width: 0.9, sill: 0, height: 2.05 },
  window: { width: 1.2, sill: 0.9, height: 1.3 },
  garage: { width: 2.5, sill: 0, height: 2.1 },
} as const;

/** Kinds of openings offered when placing one; a terrace door is a window down to the floor. */
/** Door looks: room doors, front doors (with glass, one or two sidelights), a glass door, a sliding door. */
export const DOOR_STYLES = ["interior", "front", "front_glass", "sidelight", "sidelights", "glass", "sliding", "passage"] as const;
/** "glass_wall": fixed floor-to-ceiling glazing without sashes, slim mullions (an indoor glass wall, #163). */
export const WINDOW_STYLES = ["standard", "bars", "glass_wall"] as const;
export type OpeningStyle = (typeof DOOR_STYLES)[number] | (typeof WINDOW_STYLES)[number];

/** The style an opening is drawn with: its own, or the automatic one for its wall. */
export function openingStyle(o: Pick<Opening, "type" | "style">, exterior: boolean): OpeningStyle {
  if (o.type === "door") return o.style && (DOOR_STYLES as readonly string[]).includes(o.style) ? o.style : exterior ? "front" : "interior";
  return o.style && (WINDOW_STYLES as readonly string[]).includes(o.style) ? o.style : "standard";
}

/**
 * Where the fixed glass beside a front door's leaf sits, along the opening (0 … W, 2 cm margins): the
 * panels and the leaf's span. One sidelight sits opposite the hinge unless `sidelight_hinge`; the widths
 * come from the opening (null = automatic) and shrink together so the leaf keeps at least 0.5 m.
 */
export function sidelightLayout(
  W: number,
  style: OpeningStyle,
  hingeAtStart: boolean,
  o: Pick<Opening, "sidelight_hinge" | "sidelight_width" | "sidelight_width2">,
): { panels: [number, number][]; x0: number; x1: number } | null {
  if (style !== "sidelight" && style !== "sidelights") return null;
  const both = style === "sidelights";
  const total = W - 0.04;
  const autoLeaf = Math.min(1.05, Math.max(0.6, total - (both ? 0.6 : 0.3)));
  const autoSide = (total - autoLeaf) / (both ? 2 : 1);
  let s1 = o.sidelight_width ?? autoSide;
  let s2 = both ? (o.sidelight_width2 ?? o.sidelight_width ?? autoSide) : 0;
  s1 = Math.max(0.1, s1);
  s2 = both ? Math.max(0.1, s2) : 0;
  const room = total - 0.5;
  if (s1 + s2 > room) {
    const k = Math.max(0, room) / (s1 + s2);
    s1 *= k;
    s2 *= k;
  }
  if (both) return { panels: [[0.02, 0.02 + s1], [W - 0.02 - s2, W - 0.02]], x0: 0.02 + s1, x1: W - 0.02 - s2 };
  // one panel: at the start when the hinge is at the end (opposite), or at the hinge when asked for
  const atStart = hingeAtStart ? !!o.sidelight_hinge : !o.sidelight_hinge;
  return atStart ? { panels: [[0.02, 0.02 + s1]], x0: 0.02 + s1, x1: W - 0.02 } : { panels: [[W - 0.02 - s1, W - 0.02]], x0: 0.02, x1: W - 0.02 - s1 };
}

/** A front door look (thick leaf, threshold, light above it). */
export function isFrontDoor(style: OpeningStyle): boolean {
  return style === "front" || style === "front_glass" || style === "sidelight" || style === "sidelights";
}

export const OPENING_PRESETS = {
  door: { type: "door", leaves: 1, width: 0.9, sill: 0, height: 2.05, style: "interior" },
  front: { type: "door", leaves: 1, width: 1.0, sill: 0, height: 2.1, style: "front" },
  door_double: { type: "door", leaves: 2, width: 1.6, sill: 0, height: 2.05 },
  window: { type: "window", leaves: 1, width: 1.2, sill: 0.9, height: 1.3 },
  window_double: { type: "window", leaves: 2, width: 1.6, sill: 0.9, height: 1.3 },
  terrace: { type: "window", leaves: 1, width: 1.0, sill: 0, height: 2.1 },
  terrace_double: { type: "window", leaves: 2, width: 1.8, sill: 0, height: 2.1 },
  garage: { type: "garage", leaves: 1, width: 2.5, sill: 0, height: 2.1 },
  glass_wall: { type: "window", leaves: 1, width: 2.0, sill: 0, height: 2.4, style: "glass_wall" },
} as const satisfies Record<string, { type: OpeningType; leaves: 1 | 2; width: number; sill: number; height: number; style?: OpeningStyle }>;

export type OpeningPreset = keyof typeof OPENING_PRESETS;

/** The preset an opening matches (by type, leaves, style and whether it reaches the floor). */
export function openingPreset(o: Pick<Opening, "type" | "leaves" | "sill" | "style">): OpeningPreset {
  if (o.type === "garage") return "garage";
  if (o.type === "window" && o.style === "glass_wall") return "glass_wall";
  const two = o.leaves === 2;
  if (o.type === "door") {
    if (!two && o.style && isFrontDoor(o.style)) return "front";
    return two ? "door_double" : "door";
  }
  if (o.sill < 0.1) return two ? "terrace_double" : "terrace";
  return two ? "window_double" : "window";
}

/** Fill fields added in later versions so older saved buildings keep working. */
export function normalizeBuilding(b: Building): Building {
  b.energy = { ...DEFAULT_ENERGY, ...(b.energy ?? {}) };
  b.presence = b.presence ?? [];
  b.settings = { ...DEFAULT_SETTINGS, ...b.settings, roof: { ...DEFAULT_ROOF, ...(b.settings?.roof ?? {}) } };
  for (const f of b.floors) {
    f.outdoor = f.outdoor ?? [];
    f.walls = f.walls ?? [];
    f.rooms = f.rooms.map((r) => ({ ...r, panel: r.panel ?? [] }));
    f.ha_floor = f.ha_floor ?? null;
    f.placements = f.placements.map((p) => ({ ...p, mount: p.mount ?? null, rotation: p.rotation ?? 0 }));
    f.furniture = f.furniture.map((m) => {
      const item = { ...m, entity: m.entity ?? null, power: m.power ?? null };
      // The original robot entry was only 10 cm high. Upgrade exactly that legacy default to the
      // tower dock shown by the current model, while preserving every manually resized instance.
      if (m.type === "robot_vacuum" && Math.abs(m.w - 0.36) < 0.001 && Math.abs(m.d - 0.5) < 0.001 && Math.abs(m.h - 0.1) < 0.001) {
        const [w, d, h] = FURNITURE_SIZE.robot_vacuum;
        return { ...item, w, d, h };
      }
      return item;
    });
    // lights placed as devices (before lamps existed) become lamps of their mount type
    const lights = f.placements.filter((p) => p.entity_id.startsWith("light."));
    if (lights.length) {
      const type: Record<LampMount, FurnitureType> = { ceiling: "lamp_ceiling", floor: "lamp_floor", table: "lamp_table", wall: "lamp_wall" };
      for (const p of lights) {
        const t = type[p.mount ?? "ceiling"];
        const [w, d, h] = FURNITURE_SIZE[t];
        f.furniture.push({ id: `lamp_${p.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g, "_")}`.slice(0, 64), type: t, x: p.x, z: p.z, rotation: 0, w, d, h, variant: null, entity: p.entity_id, power: null });
      }
      f.placements = f.placements.filter((p) => !p.entity_id.startsWith("light."));
    }
    f.openings = f.openings.map((o) => ({
      ...o,
      hinge: o.hinge ?? "left",
      leaves: o.leaves ?? 1,
      swing: o.swing ?? "in",
      style: o.style ?? null,
      cover: o.cover ?? null,
      contact: o.contact ?? null,
      contact2: o.contact2 ?? null,
      tilt: o.tilt ?? null,
    }));
  }
  return b;
}

export function uid(prefix: string): string {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}`;
}

/** Signed area (positive = counter-clockwise in x/z maths orientation). */
export function signedArea(points: readonly Vec2[]): number {
  let a = 0;
  for (let i = 0; i < points.length; i++) {
    const [x0, z0] = points[i];
    const [x1, z1] = points[(i + 1) % points.length];
    a += x0 * z1 - x1 * z0;
  }
  return a / 2;
}

export function polygonArea(points: readonly Vec2[]): number {
  return Math.abs(signedArea(points));
}

/** Area-weighted centroid; falls back to the vertex average for degenerate polygons. */
export function centroid(points: readonly Vec2[]): Vec2 {
  const a = signedArea(points);
  if (Math.abs(a) < 1e-9) {
    const n = points.length || 1;
    return [points.reduce((s, p) => s + p[0], 0) / n, points.reduce((s, p) => s + p[1], 0) / n];
  }
  let cx = 0;
  let cz = 0;
  for (let i = 0; i < points.length; i++) {
    const [x0, z0] = points[i];
    const [x1, z1] = points[(i + 1) % points.length];
    const f = x0 * z1 - x1 * z0;
    cx += (x0 + x1) * f;
    cz += (z0 + z1) * f;
  }
  return [cx / (6 * a), cz / (6 * a)];
}

/** True when the polygon is an axis-aligned rectangle (so the editor can offer x/z/width/depth fields). */
export function isAxisRect(points: readonly Vec2[]): boolean {
  if (points.length !== 4) return false;
  for (let i = 0; i < 4; i++) {
    const [x0, z0] = points[i];
    const [x1, z1] = points[(i + 1) % 4];
    if (Math.abs(x0 - x1) > 1e-6 && Math.abs(z0 - z1) > 1e-6) return false;
  }
  return true;
}

export function bounds(points: readonly Vec2[]): { x0: number; z0: number; x1: number; z1: number } {
  let x0 = Infinity;
  let z0 = Infinity;
  let x1 = -Infinity;
  let z1 = -Infinity;
  for (const [x, z] of points) {
    x0 = Math.min(x0, x);
    z0 = Math.min(z0, z);
    x1 = Math.max(x1, x);
    z1 = Math.max(z1, z);
  }
  return { x0, z0, x1, z1 };
}

/** Corners of a furniture item in world x/z (rotated rectangle). */
export function furnitureFootprint(f: Furniture): Vec2[] {
  const a = (f.rotation * Math.PI) / 180;
  const c = Math.cos(a);
  const s = Math.sin(a);
  const hw = f.w / 2;
  const hd = f.d / 2;
  return [
    [-hw, -hd],
    [hw, -hd],
    [hw, hd],
    [-hw, hd],
  ].map(([x, z]) => [f.x + x * c - z * s, f.z + x * s + z * c] as Vec2);
}

export function pointInPolygon(p: Vec2, points: readonly Vec2[]): boolean {
  let inside = false;
  for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
    const [xi, zi] = points[i];
    const [xj, zj] = points[j];
    if (zi > p[1] !== zj > p[1] && p[0] < ((xj - xi) * (p[1] - zi)) / (zj - zi) + xi) inside = !inside;
  }
  return inside;
}

/** 3D model of each lamp type. */
export const LAMP_MODEL: Record<string, LampModel> = {
  lamp_ceiling: "ceiling",
  lamp_downlight: "downlight",
  lamp_spot: "spot",
  lamp_panel: "panel",
  lamp_uplight: "uplight",
  lamp_bollard: "bollard",
  lamp_garden: "garden",
  lamp_column: "column",
  lamp_tv_bars: "tv_bars",
  lamp_orb_table: "orb_table",
  lamp_portable: "portable",
  lamp_ambient_spot: "ambient",
  lamp_cube: "cube",
  lamp_panel_round: "round_panel",
  lamp_garden_spots: "garden_set",
  lamp_wall_updown: "wall_updown",
  lamp_night_moon: "kids_moon",
  lamp_star_projector: "star_projector",
  lamp_cinema_star_ceiling: "star_ceiling",
  lamp_pendant: "pendant",
  lamp_floor: "floor",
  lamp_table: "table",
  lamp_wall: "wall",
  led_strip: "strip",
};
