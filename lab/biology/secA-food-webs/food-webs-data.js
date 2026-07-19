// Shared data + helpers for the food-web practical.

export const WEB = [
  { id: "grass", name: "Grass", level: "Producer" },
  { id: "grasshopper", name: "Grasshopper", level: "Primary consumer" },
  { id: "frog", name: "Frog", level: "Secondary consumer" },
  { id: "snake", name: "Snake", level: "Tertiary consumer" },
];

// Correct trophic order (energy flows in this direction).
export const ORDER = ["grass", "grasshopper", "frog", "snake"];

// Display order is shuffled so the user must reason about trophic levels.
export const DISPLAY = ["snake", "grass", "frog", "grasshopper"];
