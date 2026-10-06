/** Stable editor navigation: tools are grouped by the job the user is doing. */
export type EditorTool = "select" | "rect" | "polygon" | "measure" | "opening" | "furniture" | "outdoor" | "hole" | "wall" | "roof" | "energy" | "settings";

export const EDITOR_TOOL_GROUPS: readonly { key: "plan" | "layout" | "building" | "project"; tools: readonly EditorTool[] }[] = [
  { key: "plan", tools: ["select", "rect", "polygon", "wall", "opening"] },
  { key: "layout", tools: ["furniture", "outdoor"] },
  { key: "building", tools: ["hole", "roof", "energy"] },
  { key: "project", tools: ["settings"] },
];

export type FurniturePane = "library" | "properties";

/** Properties only make sense while an item is selected; deletion returns to the library. */
export function resolvedFurniturePane(requested: FurniturePane, hasSelection: boolean): FurniturePane {
  return requested === "properties" && hasSelection ? "properties" : "library";
}
