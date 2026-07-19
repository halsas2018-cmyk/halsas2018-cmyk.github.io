// Shared data + chemistry helpers for the metals practicals (extraction,
// reactivity-series displacement, rusting). All three Prep/Lab screens import
// from here — mirrors titration/reagents.js and kinetics/rateData.js.

// ---- Reactivity series (most → least reactive). Index = rank (lower = more reactive). ----
const SERIES = [
  "k", "na", "ca", "mg", "al", "c", "zn", "fe", "sn", "pb", "h", "cu", "hg", "ag", "pt", "au",
];

export function rank(id) {
  const r = SERIES.indexOf(id);
  return r < 0 ? SERIES.length : r; // unknown → least reactive
}

// A metal displaces another from its salt solution iff it sits HIGHER in the
// series (smaller rank). e.g. Zn (rank 6) displaces Cu (rank 11) → true.
export function willDisplace(stripId, saltId) {
  return rank(stripId) < rank(saltId);
}

// ============================================================
// 1 · EXTRACTION OF METALS
// ============================================================
// Reactive metals → electrolysis of molten ore.
// Less reactive (after C) → reduction with carbon / CO.
// Very unreactive (Cu…Au) → found native / simple reduction.
export const EXTRACTION_METALS = [
  { id: "aluminium", name: "Aluminium", symbol: "Al", ore: "Bauxite (Al₂O₃)", method: "electrolysis", methodLabel: "Electrolysis of molten ore (cryolite)", metalColor: "#d1d5db" },
  { id: "sodium", name: "Sodium", symbol: "Na", ore: "Rock salt (NaCl)", method: "electrolysis", methodLabel: "Electrolysis of molten NaCl", metalColor: "#e5e7eb" },
  { id: "calcium", name: "Calcium", symbol: "Ca", ore: "Limestone (CaCl₂)", method: "electrolysis", methodLabel: "Electrolysis of molten CaCl₂", metalColor: "#e2e8f0" },
  { id: "magnesium", name: "Magnesium", symbol: "Mg", ore: "Magnesite / seawater (MgCl₂)", method: "electrolysis", methodLabel: "Electrolysis of molten MgCl₂", metalColor: "#d6e4ff" },
  { id: "zinc", name: "Zinc", symbol: "Zn", ore: "Zinc blende (ZnS)", method: "reduction", methodLabel: "Reduction with carbon / CO", metalColor: "#9ca3af" },
  { id: "iron", name: "Iron", symbol: "Fe", ore: "Haematite (Fe₂O₃)", method: "reduction", methodLabel: "Reduction with CO in blast furnace", metalColor: "#b0b0b0" },
  { id: "tin", name: "Tin", symbol: "Sn", ore: "Cassiterite (SnO₂)", method: "reduction", methodLabel: "Reduction with carbon", metalColor: "#c7cdd6" },
  { id: "lead", name: "Lead", symbol: "Pb", ore: "Galena (PbS)", method: "reduction", methodLabel: "Reduction with carbon / CO", metalColor: "#94a3b8" },
  { id: "copper", name: "Copper", symbol: "Cu", ore: "Copper pyrites (CuFeS₂)", method: "reduction", methodLabel: "Reduction with carbon / scrap iron", metalColor: "#b45309" },
  { id: "silver", name: "Silver", symbol: "Ag", ore: "Native / argentite", method: "native", methodLabel: "Found native — pan / separate", metalColor: "#d1d5db" },
  { id: "gold", name: "Gold", symbol: "Au", ore: "Native", method: "native", methodLabel: "Found native — panning", metalColor: "#f59e0b" },
];

export const EXTRACTION_APPARATUS = [
  { id: "crucible", name: "Crucible / cell", needed: true, icon: "⚗️" },
  { id: "furnace", name: "Furnace", needed: true, icon: "🔥" },
  { id: "coke", name: "Coke (carbon)", needed: true, icon: "⚫" },
  { id: "electrodes", name: "Carbon electrodes", needed: true, icon: "🔌" },
  { id: "powersupply", name: "DC power supply", needed: true, icon: "🔋" },
  { id: "tongs", name: "Tongs", needed: false, icon: "🗜️" },
  { id: "goggles", name: "Safety goggles", needed: false, icon: "🥽" },
];

export function extractionMethodLabel(metal) {
  return metal.methodLabel;
}

// ============================================================
// 2 · REACTIVITY SERIES DISPLACEMENT
// ============================================================
// Curated set of metals used in the school displacement practical.
// ionColor = colour of the metal's aqueous ion (for the salt solution).
export const DISPLACEMENT_METALS = [
  { id: "mg", name: "Magnesium", symbol: "Mg", metalColor: "#d6e4ff", ionColor: "#eef2f7" },
  { id: "al", name: "Aluminium", symbol: "Al", metalColor: "#d1d5db", ionColor: "#eef2f7" },
  { id: "zn", name: "Zinc", symbol: "Zn", metalColor: "#9ca3af", ionColor: "#eef2f7" },
  { id: "fe", name: "Iron", symbol: "Fe", metalColor: "#b0b0b0", ionColor: "#bbf7d0" },
  { id: "pb", name: "Lead", symbol: "Pb", metalColor: "#94a3b8", ionColor: "#eef2f7" },
  { id: "cu", name: "Copper", symbol: "Cu", metalColor: "#b45309", ionColor: "#3b82f6" },
  { id: "ag", name: "Silver", symbol: "Ag", metalColor: "#d1d5db", ionColor: "#eef2f7" },
  { id: "au", name: "Gold", symbol: "Au", metalColor: "#f59e0b", ionColor: "#eef2f7" },
];

export const REACTIVITY_APPARATUS = [
  { id: "beaker", name: "Beaker", needed: true, icon: "🥤" },
  { id: "strip", name: "Metal strip", needed: true, icon: "🪙" },
  { id: "salt", name: "Salt solution", needed: true, icon: "🧪" },
  { id: "stand", name: "Test-tube stand", needed: false, icon: "🏗️" },
  { id: "goggles", name: "Safety goggles", needed: false, icon: "🥽" },
];

// Predicted outcome text for the prep calculator.
export function displacementOutcome(stripMetal, saltMetal) {
  const occurs = willDisplace(stripMetal.id, saltMetal.id);
  if (occurs) {
    return `${stripMetal.symbol} is MORE reactive than ${saltMetal.symbol}, so it displaces ${saltMetal.symbol} from solution. ${stripMetal.symbol} dissolves and ${saltMetal.symbol} (${saltMetal.metalColor === "#b45309" ? "copper" : "metal"}) deposits.`;
  }
  return `${stripMetal.symbol} is LESS reactive than ${saltMetal.symbol}, so NO displacement — nothing happens.`;
}

// ============================================================
// 3 · RUSTING & CORROSION PREVENTION
// ============================================================
// Rusting needs BOTH oxygen (air) AND water.
// Preventing either stops rust.
export const RUST_CONDITIONS = [
  { id: "air_water", label: "Air + water", willRust: true, note: "Nail in open air over water — both oxygen and water present." },
  { id: "salt_water", label: "Salt water + air", willRust: true, note: "Salt water speeds up rusting (electrolyte)." },
  { id: "dry_air", label: "Dry air (CaCl₂)", willRust: false, note: "Drying agent removes water — no rust." },
  { id: "boiled_oil", label: "Boiled water + oil", willRust: false, note: "Boiled water has no dissolved air; oil seals out oxygen." },
  { id: "painted", label: "Painted nail", willRust: false, note: "Paint keeps out both water and air." },
  { id: "galvanised", label: "Galvanised (Zn)", willRust: false, note: "Zinc coating sacrificially protects the iron." },
];

export const RUST_APPARATUS = [
  { id: "tube", name: "Test tube", needed: true, icon: "🧪" },
  { id: "nail", name: "Iron nail", needed: true, icon: "🔩" },
  { id: "cork", name: "Cork / seal", needed: true, icon: "🧷" },
  { id: "rack", name: "Test-tube rack", needed: false, icon: "🏗️" },
  { id: "goggles", name: "Safety goggles", needed: false, icon: "🥽" },
];

export function rustOutcome(condition) {
  return condition.willRust
    ? `${condition.label}: iron + oxygen + water → hydrated iron(III) oxide (rust). RUSTS.`
    : `${condition.label}: one of oxygen or water is absent, so rusting cannot start. NO RUST.`;
}
