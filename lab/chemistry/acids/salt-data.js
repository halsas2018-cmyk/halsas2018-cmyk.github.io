// Shared data + chemistry helpers for the SALT PREPARATION practical
// (preparing a salt by neutralization + evaporation + crystallization).
// Reuses the reagent lists from the titration practical.

import { ACIDS, BASES, recommendIndicator } from "../../titration/reagents.js";

// Concentrations used in the school practical (mol dm⁻³).
export const SALT_ACID_M = 1.0;
export const SALT_BASE_M = 1.0;

// Default acid volume (mL); the user can change it in the Prep screen.
export const DEFAULT_ACID_VOL = 25;

// Product salt for each acid|base pair.
export const SALT_PRODUCTS = {
  "hcl|naoh": { formula: "NaCl", name: "Sodium chloride" },
  "hcl|koh": { formula: "KCl", name: "Potassium chloride" },
  "hcl|nh3": { formula: "NH₄Cl", name: "Ammonium chloride" },
  "h2so4|naoh": { formula: "Na₂SO₄", name: "Sodium sulphate" },
  "h2so4|koh": { formula: "K₂SO₄", name: "Potassium sulphate" },
  "h2so4|nh3": { formula: "(NH₄)₂SO₄", name: "Ammonium sulphate" },
  "hno3|naoh": { formula: "NaNO₃", name: "Sodium nitrate" },
  "hno3|koh": { formula: "KNO₃", name: "Potassium nitrate" },
  "hno3|nh3": { formula: "NH₄NO₃", name: "Ammonium nitrate" },
};

export function getAcid(id) {
  return ACIDS.find((a) => a.id === id) || ACIDS[0];
}
export function getBase(id) {
  return BASES.find((b) => b.id === id) || BASES[0];
}
export function productFor(acid, base) {
  return SALT_PRODUCTS[`${acid.id}|${base.id}`] || { formula: "?", name: "Unknown salt" };
}

// Volume of alkali (mL, 1.0 M) needed to exactly neutralize the acid.
// moles H⁺ = C·V_acid·factor_a ; moles OH⁻ = C·V_base·factor_b.
export function requiredAlkaliVol(acid, base, acidVol) {
  return (acidVol * acid.factor) / base.factor;
}

// Indicator colour as the neutralization proceeds.
//   progress 0   → fully acidic
//   progress ≈ 1 → endpoint (neutral)
//   progress > 1 → alkaline (overshoot)
export function indicatorColor(indicator, progress) {
  if (indicator.id === "phenolphthalein") {
    if (progress < 0.98) return "#f1f5f9"; // colourless in acid
    if (progress <= 1.12) return "#ec4899"; // pink at endpoint
    return "#db2777"; // deeper pink = excess alkali
  }
  // methyl orange / methyl red: red(acid) → orange(endpoint) → yellow(alkali)
  if (progress < 0.98) return "#dc2626";
  if (progress <= 1.12) return "#f59e0b";
  return "#facc15";
}

export function indicatorLabel(indicator, progress) {
  if (progress < 0.98) return indicator.id === "phenolphthalein" ? "colourless (acidic)" : "red (acidic)";
  if (progress <= 1.12) return "ENDPOINT (neutral)";
  return indicator.id === "phenolphthalein" ? "pink (alkaline)" : "yellow (alkaline)";
}
