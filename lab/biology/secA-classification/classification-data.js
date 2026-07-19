// Shared data + helpers for the dichotomous-key classification practical.

// A short linear key that narrows to a single organism.
export const STEPS = [
  { q: "Does the organism have a backbone?", correct: "No", hint: "Worms and insects have no spine — they are invertebrates." },
  { q: "Does it have a long, segmented body?", correct: "Yes", hint: "A segmented, soft body points to an earthworm (annelid)." },
  { q: "Does it live in damp soil?", correct: "Yes", hint: "Earthworms burrow in moist soil and eat decaying matter." },
];

export const TARGET = "Earthworm";
