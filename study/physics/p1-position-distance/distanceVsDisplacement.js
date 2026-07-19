export default [
  {
    heading: "Distance defined",
    body: "Distance is the total length of the actual path travelled between two points. It is a scalar quantity, meaning it has magnitude only and no direction, and it is always positive or zero no matter which way you move. Walking forward then back adds both legs to the distance, so it grows with every step taken. Because it follows the real route, distance depends on the path, not just the endpoints.",
  },
  {
    heading: "Displacement defined",
    body: "Displacement is the shortest straight-line distance from the starting point to the finishing point, together with the direction from start to finish. It is a vector, so it carries both size and sense (e.g. '8 m east'). Unlike distance, displacement ignores the winding route and cares only where you began and ended. It can be smaller than the distance, equal to it, or even zero.",
  },
  {
    heading: "Scalar versus vector — the core difference",
    body: "The distinction rests on the scalar/vector split taught across the syllabus. Distance is a scalar (magnitude only); displacement is a vector (magnitude and direction). You add scalars by ordinary arithmetic but must add vectors by accounting for direction, often with components or a scale diagram. Confusing the two is a frequent source of error, so always ask 'does direction matter here?' before choosing.",
  },
  {
    heading: "When distance and displacement agree or differ",
    body: "If motion is along a single straight line in one direction, distance and the magnitude of displacement are equal. They diverge as soon as the path bends or reverses: a curved road, a back-and-forth walk, or any turn makes the distance longer than the straight-line displacement. The more twisting the route, the larger the gap between the two quantities becomes.",
  },
  {
    heading: "Zero displacement after a round trip",
    body: "Displacement measures net change of position, so returning to the start gives zero displacement even after a long journey. A runner who laps a 400 m track and stops where she began has travelled 400 m of distance but has a displacement of 0 m. The start and end coordinates are identical, so their difference vanishes — a striking result that exams love to test.",
  },
  {
    heading: "The magnitude rule |displacement| ≤ distance",
    body: "Because the straight line is the shortest connection between two points, the magnitude of displacement can never exceed the distance travelled; it is equal only for straight-line one-way motion. Writing this as |s| ≤ d is a useful check on your answers. If a calculation ever gives a displacement larger than the distance, a sign or direction error has crept in.",
  },
  {
    heading: "Worked example — a two-leg journey",
    body: "A student walks 30 m east, then 40 m north. Distance = 30 + 40 = 70 m (both legs of the path). Displacement is the straight line from start to finish: √(30² + 40²) = 50 m on a bearing of tan⁻¹(40/30) ≈ 053°. Note 50 m < 70 m, matching |s| ≤ d, and the direction is essential to the displacement answer.",
  }
];
