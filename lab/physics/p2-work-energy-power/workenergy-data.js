// Shared data + physics helpers for the Work Done on an Inclined Plane practical.
// Prep + Lab import from here. Mirrors titration/reagents.js and pendulum-data.js.

export const G_DEFAULT = 9.8; // m/s²

export const WORK_APPARATUS = [
  { id: "plane", name: "Inclined plane", needed: true, icon: "📐" },
  { id: "block", name: "Block / load", needed: true, icon: "🧊" },
  { id: "spring", name: "Force meter", needed: true, icon: "💪" },
  { id: "ruler", name: "Metre rule", needed: true, icon: "📏" },
  { id: "protractor", name: "Protractor", needed: true, icon: "📐" },
  { id: "goggles", name: "Safety goggles", needed: false, icon: "🥽" },
];

// Distance travelled ALONG the plane for a given vertical height h and angle θ:
//   d = h / sin θ
export function inclineDistance(h, thetaDeg, g = G_DEFAULT) {
  const s = Math.sin((thetaDeg * Math.PI) / 180);
  if (s <= 0) return Infinity;
  return h / s;
}

// Force needed to push the block up the plane (ignoring friction):
//   F = m g sin θ
export function forceAlongPlane(m, thetaDeg, g = G_DEFAULT) {
  return m * g * Math.sin((thetaDeg * Math.PI) / 180);
}

// Work done AGAINST gravity raising the block by vertical height h:
//   W = m g h   (this is also the GPE gained)
export function workAgainstGravity(m, h, g = G_DEFAULT) {
  return m * g * h;
}

// GPE gained equals the work done against gravity (ideal, no friction).
export function gpeGained(m, h, g = G_DEFAULT) {
  return workAgainstGravity(m, h, g);
}

// Work INPUT supplied along the plane = F · d. With F = mg sinθ and d = h / sinθ
// this simplifies to m g h — exactly the GPE gained. This equality is the key
// teaching point of the experiment (energy is conserved; friction ignored).
export function workInput(m, h, thetaDeg, g = G_DEFAULT) {
  const d = inclineDistance(h, thetaDeg, g);
  return forceAlongPlane(m, thetaDeg, g) * d; // === m g h
}

export const MASS_PRESETS = [0.5, 1.0, 1.5, 2.0, 3.0]; // kg
export const ANGLE_PRESETS = [10, 15, 20, 30, 45]; // degrees
export const HEIGHT_PRESETS = [0.2, 0.5, 1.0, 1.5, 2.0]; // m
