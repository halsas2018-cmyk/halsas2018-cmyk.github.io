// Shared data + biology helpers for the plant-nutrition practical
// (rate of photosynthesis vs light intensity). Mirrors the titration/metals data files.

// Apparatus for the pondweed (Elodea) light-intensity practical.
export const PHOTOSYNTHESIS_APPARATUS = [
  { id: "beaker", name: "Beaker of water", needed: true, icon: "🥤" },
  { id: "pondweed", name: "Pondweed (Elodea)", needed: true, icon: "🌿" },
  { id: "funnel", name: "Funnel", needed: true, icon: "🔻" },
  { id: "tube", name: "Inverted test tube", needed: true, icon: "🧪" },
  { id: "lamp", name: "Lamp (light source)", needed: true, icon: "💡" },
  { id: "ruler", name: "Ruler", needed: true, icon: "📏" },
  { id: "bicarb", name: "Sodium hydrogencarbonate", needed: false, icon: "🧂" },
];

// Light-intensity levels. Rate of O₂ bubble production rises with light
// intensity, then PLATEAUS (light saturation) — extra light no longer speeds
// up the reaction because another factor (CO₂ / temperature) limits it.
// `bubblesPerMin` is the expected relative rate at that level.
export const LIGHT_LEVELS = [
  { id: "low", label: "Low — lamp far (60 cm)", bubblesPerMin: 5, color: "#fcd34d" },
  { id: "medium", label: "Medium — lamp 30 cm", bubblesPerMin: 14, color: "#fbbf24" },
  { id: "high", label: "High — lamp 15 cm", bubblesPerMin: 26, color: "#f59e0b" },
  { id: "veryhigh", label: "Very high — lamp 5 cm", bubblesPerMin: 28, color: "#ea580c" },
];

export function getLightLevel(id) {
  return LIGHT_LEVELS.find((l) => l.id === id) || LIGHT_LEVELS[1];
}

export function relationshipNote() {
  return "As light intensity increases, the rate of photosynthesis rises — but only up to a point. Once light is no longer the limiting factor (CO₂ or temperature is), the rate PLATEAUS and extra light does not help.";
}
