// Shared data + helpers for the convex-lens focal-length practical.
export const F = 15; // focal length (cm), fixed for the sim
export const HO = 4; // object height (cm)

export const U_CHOICES = [20, 25, 30, 40, 60]; // object distances (cm)

// Thin-lens equation: 1/f = 1/u + 1/v  ->  v = u f / (u - f)
export function imageDistance(u, f = F) {
  return (u * f) / (u - f);
}

export function magnification(u, f = F) {
  const v = imageDistance(u, f);
  return v / u;
}

export function imageHeight(u, f = F) {
  return HO * magnification(u, f);
}

// Closest valid screen step (5 cm grid) for a given real image distance.
export function snap(v) {
  return Math.round(v / 5) * 5;
}
