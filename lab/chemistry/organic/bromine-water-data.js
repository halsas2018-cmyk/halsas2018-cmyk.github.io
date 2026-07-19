// Shared data + helpers for the bromine-water unsaturation test.

export const BROMINE = "#f97316";
export const CLEAR = "#fdf2f8";

export const SAMPLES = [
  { id: "alkene", name: "Alkene (e.g. ethene)", decolorizes: true, note: "Alkenes have a C=C double bond that reacts with bromine, decolorising it." },
  { id: "alkane", name: "Alkane (e.g. hexane)", decolorizes: false, note: "Alkanes have only C–C single bonds; they do not react with bromine water." },
];
