// Shared data + chemistry helpers for the SOLUBILITY topic "Solubility &
// Crystallization" practical (heating water, dissolving a solute to saturation,
// then cooling to crystallize the excess). The Prep and Lab screens both import
// from here — mirrors titration/reagents.js and energy/energy-data.js.

// Room temperature used as the cooling target (°C).
export const ROOM_TEMP = 20;
// Default water mass used in the school practical (g).
export const DEFAULT_WATER = 100;

// Solubility options per 100 g of water. Two anchors (20 °C and 100 °C) let us
// linearly interpolate solubility at any temperature in between. Highly
// temperature-dependent salts (KNO3) give the most dramatic crystallization.
export const SOLUTES = [
  { id: "kno3", name: "Potassium nitrate", formula: "KNO₃", color: "#a3e635", sol20: 31.6, sol100: 246, note: "Very temperature-dependent — a classic crystallization salt." },
  { id: "cuso4", name: "Copper(II) sulphate", formula: "CuSO₄", color: "#38bdf8", sol20: 20.7, sol100: 75.4, note: "Blue crystals; solubility rises noticeably with heat." },
  { id: "kcl", name: "Potassium chloride", formula: "KCl", color: "#f472b6", sol20: 34.0, sol100: 56.3, note: "Moderately temperature-dependent." },
  { id: "nacl", name: "Sodium chloride", formula: "NaCl", color: "#fbbf24", sol20: 36.0, sol100: 39.2, note: "Almost temperature-independent — poor crystallization demo." },
];

// Temperatures the student can heat the solution to (°C).
export const HEAT_TEMPS = [60, 80, 100];
// Water masses the student can choose (g).
export const WATER_MASSES = [50, 100, 150];

// Apparatus used in the practical (shown in the prep checklist).
export const SOL_APPARATUS = [
  { id: "beaker", name: "Beaker", needed: true, icon: "🥤" },
  { id: "burner", name: "Bunsen burner", needed: true, icon: "🔥" },
  { id: "thermometer", name: "Thermometer", needed: true, icon: "🌡️" },
  { id: "rod", name: "Stirring rod", needed: true, icon: "🥢" },
  { id: "goggles", name: "Safety goggles", needed: false, icon: "🥽" },
];

// Linear interpolation of solubility (g / 100 g water) at temperature T (°C).
export function solubilityAt(solute, T) {
  const t = Math.max(0, Math.min(100, T));
  const frac = (t - ROOM_TEMP) / (100 - ROOM_TEMP);
  return solute.sol20 + (solute.sol100 - solute.sol20) * frac;
}

// Full crystallization calculation for the chosen mix.
// addedMass = total solute tipped in (g); dissolved is capped at the hot-temp
// saturation, any remainder is "excess" sitting undissolved. On cooling the
// dissolved amount above the room-temp saturation recrystallizes (plus the
// excess that never dissolved stays as solid).
export function computeSolubility({ solute, heatTemp, waterMass, addedMass }) {
  const solubilityHot = solubilityAt(solute, heatTemp); // g / 100 g water
  const solubilityRoom = solubilityAt(solute, ROOM_TEMP); // g / 100 g water
  const satHotMass = (solubilityHot * waterMass) / 100; // g that fit when hot
  const satRoomMass = (solubilityRoom * waterMass) / 100; // g that fit when cool
  const dissolvedMass = Math.min(addedMass, satHotMass);
  const excess = Math.max(0, addedMass - satHotMass);
  const crystals = Math.max(0, dissolvedMass - satRoomMass) + excess;
  return {
    solubilityHot,
    solubilityRoom,
    satHotMass,
    satRoomMass,
    dissolvedMass,
    excess,
    crystals,
  };
}

// Map a temperature (°C) to the 0..1 fraction used by svgKit Thermometer
// (range 20 °C → 0, 100 °C → 1).
export function tempFraction(t) {
  return Math.max(0, Math.min(1, (t - ROOM_TEMP) / (100 - ROOM_TEMP)));
}
