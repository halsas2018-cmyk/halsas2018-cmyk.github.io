// Shared data + helpers for the electrolysis of copper(II) sulphate practical.

export const ELECTRODES = [
  { id: "inert", name: "Graphite (inert)", cathode: "Copper deposits as a pink/brown solid", anode: "Colourless O₂ bubbles (from water)", note: "Inert electrodes don't take part: Cu²⁺ + 2e⁻ → Cu at the cathode; 4OH⁻ → O₂ + 2H₂O + 4e⁻ at the anode." },
  { id: "copper", name: "Copper", cathode: "Copper plates onto the cathode (thickens)", anode: "Anode dissolves: Cu → Cu²⁺ + 2e⁻", note: "With copper electrodes the anode dissolves and pure copper deposits on the cathode — this is electroplating / purification." },
];
