export default [
  {
    heading: "Reading the velocity–time graph",
    body: "A velocity–time graph plots velocity (vertical axis) against time (horizontal axis). For straight-line motion, velocity carries a sign: positive means one direction, negative the opposite. Two pieces of physical information are read directly from it: the gradient (slope) at any point gives the acceleration, and the area between the line and the time axis gives the displacement. Mastering these two readings solves most practical kinematics problems graphically.",
  },
  {
    heading: "Gradient gives acceleration",
    body: "The gradient of a velocity–time graph is rise/run = Δv/Δt, which is exactly the definition of acceleration. So a steeper line means a larger acceleration. A straight line has constant gradient → uniform acceleration; a curved line has changing gradient → non-uniform acceleration. To find instantaneous acceleration on a curve, draw a tangent and measure its slope. This graphical method works even when the motion is not uniform.",
  },
  {
    heading: "Area under the graph gives displacement",
    body: "The area between the velocity–time line and the time axis equals the displacement travelled (distance with direction). For a rectangle of height v over time t, area = v × t = displacement; for a triangle, area = ½ × base × height. A horizontal line at v = 5 m s⁻¹ for 4 s gives area 20 m displacement. This is why, even without the equations of motion, you can recover distance straight from the graph.",
  },
  {
    heading: "Horizontal line — constant velocity",
    body: "A horizontal line on a velocity–time graph means velocity is unchanged, so the gradient (and hence acceleration) is zero. The object moves at constant speed in a fixed direction — no speeding up or slowing down. The displacement is simply the rectangular area under the line. For example, a car cruising at 20 m s⁻¹ for 10 s covers 20 × 10 = 200 m, read directly as the rectangle's area.",
  },
  {
    heading: "Straight sloping line — uniform acceleration",
    body: "An upward straight line means velocity increases steadily: uniform positive acceleration. A downward straight line means velocity decreases steadily: uniform deceleration (retardation). The acceleration is the line's gradient; the displacement is the trapezium (or triangle plus rectangle) area beneath it. Because the graph is straight, the equations of motion apply, and the gradient/area results match the algebraic answers exactly.",
  },
  {
    heading: "Curved line — non-uniform acceleration",
    body: "A curved velocity–time graph shows acceleration that changes with time; the gradient at each point differs. Where the curve gets steeper, acceleration is increasing; where it flattens, acceleration is decreasing. You cannot use a single equation of motion for the whole curve — instead find the tangent's slope for instantaneous acceleration, and count the area under the curve (by counting squares or integration) for displacement. This is the general case that uniform-motion formulas approximate.",
  },
  {
    heading: "Worked example — acceleration from gradient",
    body: "A velocity–time graph shows a straight line from (0 s, 0 m s⁻¹) to (5 s, 20 m s⁻¹). The gradient is (20 − 0)/(5 − 0) = 4 m s⁻², so the object accelerates uniformly at 4 m s⁻². This matches a = (v − u)/t computed algebraically. Reading the gradient avoids needing to remember a formula and works for any straight segment of a graph, including when the line does not pass through the origin.",
  },
  {
    heading: "Worked example — distance from area",
    body: "A car moves at 10 m s⁻¹ for 4 s, then accelerates uniformly to 22 m s⁻¹ over the next 3 s. The first part is a rectangle: area = 10 × 4 = 40 m. The second is a trapezium: area = ½ × (10 + 22) × 3 = 48 m. Total displacement = 40 + 48 = 88 m. Splitting the graph into simple shapes (rectangles, triangles, trapezia) lets you sum the area without integration.",
  },
  {
    heading: "Negative velocity and direction",
    body: "When the line dips below the time axis, velocity is negative — the object is moving back the opposite way. Displacement (signed area) can then cancel: area above the axis is positive, area below is negative, and the net area gives the final displacement from the start. Distance travelled, by contrast, is the total area counted as positive regardless of sign. Confusing the two is a frequent source of lost marks.",
  },
  {
    heading: "Distance versus displacement on the graph",
    body: "Because area above the axis is positive and area below is negative, the net (signed) area is displacement, while the sum of the absolute areas is total distance. For a ball thrown up and caught at the same height, the up-trip area and down-trip area are equal and opposite, giving zero net displacement but a large distance travelled. Always decide which quantity the question asks for before summing areas, and label your regions clearly.",
  },
  {
    heading: "Combining gradient and area in one problem",
    body: "A velocity–time graph can give both acceleration and displacement in a single figure. Take a line rising from 5 m s⁻¹ at t = 0 to 17 m s⁻¹ at t = 6 s: gradient = (17 − 5)/6 = 2 m s⁻² (the acceleration), and the trapezium area = ½ × (5 + 17) × 6 = 66 m (the displacement). No equations of motion are needed, and the graph also reveals at a glance whether motion was uniform and in which direction it occurred.",
  },
];
