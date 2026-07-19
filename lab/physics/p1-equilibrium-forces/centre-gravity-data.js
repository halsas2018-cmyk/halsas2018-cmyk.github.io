// Shared data + helpers for the centre-of-gravity practical.
// Irregular lamina described as an SVG polygon (viewBox 330 x 220).
export const VERTICES = [
  [70, 70], [185, 55], [235, 95], [210, 165], [120, 180], [75, 125],
];
export const POLY_POINTS = VERTICES.map((v) => v.join(",")).join(" ");

// Two suspension holes used for the plumb-line construction.
export const S1 = [75, 125];
export const S2 = [185, 55];

// True centre of gravity ≈ average of vertices (used as the sim's "true" CoG).
export const COG = (() => {
  const sx = VERTICES.reduce((a, v) => a + v[0], 0) / VERTICES.length;
  const sy = VERTICES.reduce((a, v) => a + v[1], 0) / VERTICES.length;
  return [sx, sy];
})();

export const TOL = 18; // px tolerance for a correct guess

export function within(p, q, tol = TOL) {
  return Math.hypot(p[0] - q[0], p[1] - q[1]) <= tol;
}
