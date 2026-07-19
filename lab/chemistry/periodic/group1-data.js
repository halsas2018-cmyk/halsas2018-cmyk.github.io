// Shared data + helpers for the Group 1 (alkali metals) reactivity-with-water practical.

export const METALS = [
  { id: "li", name: "Lithium (Li)", order: 1, vigor: "gentle fizzing", flame: null, note: "Least reactive of the three; floats and fizzes gently, then disappears." },
  { id: "na", name: "Sodium (Na)", order: 2, vigor: "vigorous fizzing, melts to a ball", flame: null, note: "Floats, darts around, melts into a shiny ball that fizzes rapidly." },
  { id: "k", name: "Potassium (K)", order: 3, vigor: "explosive, ignites with a lilac flame", flame: "#c084fc", note: "Most reactive; sparks immediately and burns with a lilac flame." },
];

export const REACT_ORDER = "Li < Na < K  (reactivity increases down the group)";
