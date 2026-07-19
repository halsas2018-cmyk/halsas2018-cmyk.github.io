// Shared data + chemistry helpers for the SEPARATION topic practicals
// (paper chromatography, fractional distillation, filtration & decantation).
//
// Both the Prep wizards and the Lab simulations import from this one file so
// the substance / apparatus lists and the prediction maths stay in sync.

// =====================================================================
// PAPER CHROMATOGRAPHY
// Separation depends on differential solubility in the mobile phase (solvent)
// and differential adsorption to the stationary phase (paper). A component
// that is MORE soluble in the solvent and LESS adsorbed to the paper travels
// further up the sheet — it has a higher Rf value.
// =====================================================================

export const CHROMATOGRAPHY_APPARATUS = [
  { id: "paper", name: "Chromatography paper", needed: true, icon: "📄" },
  { id: "beaker", name: "Beaker (solvent)", needed: true, icon: "🥤" },
  { id: "solvent", name: "Solvent", needed: true, icon: "💧" },
  { id: "pencil", name: "Pencil + ruler", needed: true, icon: "✏️" },
  { id: "cover", name: "Lid / cover", needed: false, icon: "🛡️" },
  { id: "stand", name: "Retort stand", needed: false, icon: "🏗️" },
];

// Solvent "strength" = how far it carries components overall (mobile phase
// mobility). More polar solvents (water) carry polar dyes only a little; less
// polar solvents (propanone) carry most dyes a long way.
export const SOLVENTS = [
  { id: "water", name: "Water", polarity: 1.0, strength: 0.45, note: "Polar — carries polar dyes only a short distance." },
  { id: "ethanol", name: "Ethanol", polarity: 0.7, strength: 0.72, note: "Moderately polar — a balanced carrier." },
  { id: "propanone", name: "Propanone (acetone)", polarity: 0.35, strength: 1.0, note: "Less polar — carries most dyes far up the paper." },
];

// Ink / dye mixtures. Each component has an `affinity` (adsorption to the
// paper stationary phase, 0..1). Higher affinity = held back more = lower Rf.
export const DYES = [
  {
    id: "black",
    name: "Black ink",
    components: [
      { id: "blue", name: "Blue", color: "#2563eb", affinity: 0.20 },
      { id: "red", name: "Red", color: "#dc2626", affinity: 0.50 },
      { id: "yellow", name: "Yellow", color: "#f59e0b", affinity: 0.80 },
    ],
  },
  {
    id: "green",
    name: "Green ink",
    components: [
      { id: "yellow", name: "Yellow", color: "#f59e0b", affinity: 0.15 },
      { id: "blue", name: "Blue", color: "#2563eb", affinity: 0.45 },
    ],
  },
  {
    id: "food",
    name: "Food colouring",
    components: [
      { id: "red", name: "Red", color: "#dc2626", affinity: 0.30 },
      { id: "blue", name: "Blue", color: "#2563eb", affinity: 0.62 },
    ],
  },
];

// Rf = how far the component travels relative to the solvent front.
//   Rf = (1 − affinity) × solventStrength
// Clamped to a sensible 0.05–0.95 range.
export function componentRf(component, solvent) {
  const rf = (1 - component.affinity) * solvent.strength;
  return Math.min(0.95, Math.max(0.05, Math.round(rf * 100) / 100));
}

// Components in travelling order (furthest-travelled first) with their Rf.
export function travelOrder(mixture, solvent) {
  return [...mixture.components]
    .map((c) => ({ ...c, rf: componentRf(c, solvent) }))
    .sort((a, b) => b.rf - a.rf);
}

// =====================================================================
// FRACTIONAL DISTILLATION
// Separates MISCIBLE liquids by boiling point. The fraction with the LOWEST
// boiling point vaporises first and is collected first; fractions are
// collected in order of INCREASING boiling point.
// =====================================================================

export const DISTILLATION_APPARATUS = [
  { id: "flask", name: "Round-bottom flask", needed: true, icon: "⚗️" },
  { id: "column", name: "Fractionating column", needed: true, icon: "🧱" },
  { id: "condenser", name: "Condenser", needed: true, icon: "❄️" },
  { id: "heat", name: "Heat source", needed: true, icon: "🔥" },
  { id: "receiver", name: "Receiving flask", needed: true, icon: "🥤" },
  { id: "thermometer", name: "Thermometer", needed: false, icon: "🌡️" },
];

// Each mixture is a set of miscible liquids with boiling points (°C).
export const DISTILLATION_MIXTURES = [
  {
    id: "ethanolwater",
    name: "Ethanol + Water",
    liquids: [
      { id: "ethanol", name: "Ethanol", bp: 78, color: "#f59e0b" },
      { id: "water", name: "Water", bp: 100, color: "#38bdf8" },
    ],
  },
  {
    id: "crude",
    name: "Crude oil fractions",
    liquids: [
      { id: "petrol", name: "Petrol", bp: 40, color: "#84cc16" },
      { id: "naphtha", name: "Naphtha", bp: 90, color: "#eab308" },
      { id: "kerosene", name: "Kerosene", bp: 150, color: "#f97316" },
      { id: "diesel", name: "Diesel", bp: 250, color: "#7c3aed" },
    ],
  },
  {
    id: "methwater",
    name: "Methanol + Water",
    liquids: [
      { id: "methanol", name: "Methanol", bp: 65, color: "#22d3ee" },
      { id: "water", name: "Water", bp: 100, color: "#38bdf8" },
    ],
  },
];

// Fractions in the order they distil off — lowest boiling point first.
export function fractionOrder(mixture) {
  return [...mixture.liquids].sort((a, b) => a.bp - b.bp);
}

// =====================================================================
// FILTRATION & DECANTATION
// Filtration separates an INSOLUBLE solid from a liquid: the solid (residue)
// is retained on the filter paper while the liquid (filtrate) passes through.
// Decantation pours off the liquid, leaving a settled solid behind.
// =====================================================================

export const FILTRATION_APPARATUS = [
  { id: "funnel", name: "Filter funnel", needed: true, icon: "🔺" },
  { id: "paper", name: "Filter paper", needed: true, icon: "📄" },
  { id: "beaker", name: "Beaker", needed: true, icon: "🥤" },
  { id: "rod", name: "Glass rod", needed: true, icon: "🥢" },
  { id: "stand", name: "Stand & clamp", needed: false, icon: "🏗️" },
];

// Each mixture describes what is insoluble (retained), what is soluble (passes
// through in the filtrate) and the liquid medium.
export const FILTRATION_MIXTURES = [
  {
    id: "sandwater",
    name: "Sand + water",
    insoluble: "Sand",
    soluble: null,
    liquid: "Water",
    note: "Insoluble sand suspended in water.",
  },
  {
    id: "saltsand",
    name: "Salt + sand + water",
    insoluble: "Sand",
    soluble: "Salt",
    liquid: "Water",
    note: "Insoluble sand PLUS salt dissolved in the water.",
  },
  {
    id: "chalkwater",
    name: "Chalk + water",
    insoluble: "Chalk",
    soluble: null,
    liquid: "Water",
    note: "Insoluble chalk powder suspended in water.",
  },
];

// What ends up in the residue vs the filtrate for a chosen mixture.
export function separationResult(mixture) {
  const residue = mixture.insoluble;
  const filtrate = mixture.soluble
    ? `${mixture.liquid} + dissolved ${mixture.soluble}`
    : mixture.liquid;
  const decant = `Decant off the ${mixture.liquid} (and ${mixture.soluble ? "dissolved " + mixture.soluble : "solid"})`;
  return { residue, filtrate, decant };
}
