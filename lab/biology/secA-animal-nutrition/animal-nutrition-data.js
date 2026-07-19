// Shared data + biology helpers for the animal-nutrition practical
// (qualitative food tests: starch / glucose / protein / fat).
// Mirrors the titration / plant-nutrition data-file pattern.

// Food samples to test. `composition` lists which food substances are present
// (used to compute the correct colour change for each reagent).
export const FOOD_SAMPLES = [
  { id: "potato", name: "Boiled potato", emoji: "🥔", composition: ["starch"] },
  { id: "honey", name: "Honey", emoji: "🍯", composition: ["glucose"] },
  { id: "egg", name: "Egg white", emoji: "🥚", composition: ["protein"] },
  { id: "butter", name: "Butter", emoji: "🧈", composition: ["fat"] },
  { id: "milk", name: "Milk", emoji: "🥛", composition: ["protein", "fat"] },
  { id: "banana", name: "Ripe banana", emoji: "🍌", composition: ["starch", "glucose"] },
  { id: "bread", name: "Bread", emoji: "🍞", composition: ["starch"] },
  { id: "peanut", name: "Peanut", emoji: "🥜", composition: ["protein", "fat"] },
];

// The four classic qualitative reagents. `target` is the food substance each
// one detects. `positive` / `negative` give the resulting liquid colour.
export const FOOD_REAGENTS = [
  {
    id: "iodine",
    name: "Iodine solution",
    icon: "🟤",
    target: "starch",
    positive: "#1f2937",
    positiveLabel: "Blue-black",
    negative: "#fde68a",
    negativeLabel: "No change (pale yellow)",
    test: "Starch test",
  },
  {
    id: "benedict",
    name: "Benedict's solution (heated)",
    icon: "🔴",
    target: "glucose",
    positive: "#b91c1c",
    positiveLabel: "Brick-red",
    negative: "#fde68a",
    negativeLabel: "No change (blue)",
    test: "Reducing-sugar test",
  },
  {
    id: "biuret",
    name: "Biuret reagent",
    icon: "🟣",
    target: "protein",
    positive: "#7c3aed",
    positiveLabel: "Violet / purple",
    negative: "#fde68a",
    negativeLabel: "No change (pale blue)",
    test: "Protein test",
  },
  {
    id: "ethanol",
    name: "Ethanol (then water)",
    icon: "⚪",
    target: "fat",
    positive: "#f1f5f9",
    positiveLabel: "Cloudy white",
    negative: "#fde68a",
    negativeLabel: "No change (clear)",
    test: "Fat test",
  },
];

export const SUBSTANCE_LABELS = {
  starch: "Starch",
  glucose: "Glucose (sugar)",
  protein: "Protein",
  fat: "Fat",
};

export function getSample(id) {
  return FOOD_SAMPLES.find((s) => s.id === id) || FOOD_SAMPLES[0];
}

export function getReagent(id) {
  return FOOD_REAGENTS.find((r) => r.id === id) || FOOD_REAGENTS[0];
}

// Compute the outcome colour for a given sample + reagent.
export function resultColor(sample, reagent) {
  const present = sample.composition.includes(reagent.target);
  return {
    present,
    color: present ? reagent.positive : reagent.negative,
    label: present ? reagent.positiveLabel : reagent.negativeLabel,
  };
}

export function substancesPresentLabel(sample) {
  return sample.composition.map((c) => SUBSTANCE_LABELS[c]).join(" + ");
}

// Short description of each test for the pre-lab briefing cards.
export const FOOD_TEST_EXPLAINERS = [
  { emoji: "🟤", title: "Starch — iodine", text: "Add iodine solution to the food. Starch turns it blue-black. No starch = no colour change." },
  { emoji: "🔴", title: "Sugar — Benedict's", text: "Heat the food with Benedict's solution. A reducing sugar (e.g. glucose) gives a brick-red precipitate." },
  { emoji: "🟣", title: "Protein — biuret", text: "Add biuret reagent. Protein turns the solution violet / purple." },
  { emoji: "⚪", title: "Fat — ethanol", text: "Shake the food with ethanol, then add water. Fat makes the mixture turn cloudy white." },
];

export function foodTestSummary(sample) {
  return `You tested "${sample.name}". The substances present were: ${substancesPresentLabel(
    sample
  )}. Each positive reagent produced its characteristic colour change.`;
}
