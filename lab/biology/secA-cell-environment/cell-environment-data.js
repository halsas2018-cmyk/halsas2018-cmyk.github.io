// Shared data + biology helpers for the cell-environment practical (osmosis).
// Mirrors lab/titration/reagents.js and lab/chemistry/metals/metals-data.js.

// Apparatus for the osmosis (visking-tubing) practical.
export const OSMOSIS_APPARATUS = [
  { id: "visking", name: "Visking tubing (membrane)", needed: true, icon: "🧫" },
  { id: "beaker", name: "Beaker", needed: true, icon: "🥤" },
  { id: "sugar", name: "Concentrated sugar solution", needed: true, icon: "🍬" },
  { id: "water", name: "Distilled water", needed: true, icon: "💧" },
  { id: "cylinder", name: "Measuring cylinder", needed: true, icon: "📏" },
  { id: "stand", name: "Clamp & stand", needed: false, icon: "🏗️" },
  { id: "goggles", name: "Safety goggles", needed: false, icon: "🥽" },
];

// The two possible concentrated solutes for the setup.
export const OSMOSIS_SOLUTES = [
  { id: "sugar", name: "Sugar (sucrose)", color: "#f59e0b" },
  { id: "salt", name: "Salt (NaCl)", color: "#ef4444" },
];

// Net direction of WATER movement by osmosis for a given concentrated side.
// Water always moves from the dilute (low solute) side INTO the concentrated
// (high solute) side, down its own concentration gradient, across the membrane.
export function netDirectionLabel(concentratedSide) {
  return `into the ${concentratedSide} side (the concentrated solution)`;
}

export function osmosisExplanation(concentratedSide, soluteName) {
  return `Water moves by osmosis from the dilute side into the ${concentratedSide} side — the ${soluteName} solution with the higher solute concentration. The concentrated side gains water, so its level rises while the dilute side's level falls. Solute particles cannot cross the semi-permeable membrane.`;
}
