export default [
  {
    heading: "Gravity as acceleration",
    body: "Near Earth's surface every falling body accelerates downward at g, the acceleration due to gravity, approximately 9.8 m s⁻² (often rounded to 10 m s⁻² in exams). This makes motion under gravity a special case of constant-acceleration motion, so the four equations of motion apply with a replaced by g. The value of g varies slightly with altitude and latitude but is taken as constant near the surface. Air resistance is neglected unless a question explicitly includes it.",
  },
  {
    heading: "g as gravitational field intensity",
    body: "Physically, g is the gravitational field intensity: the force per unit mass exerted by Earth, g = F/m, with units N kg⁻¹ (numerically equal to m s⁻²). At the surface g ≈ 9.8 N kg⁻¹, meaning each kilogram of mass feels a 9.8 N downward pull (its weight). This links the kinematics of falling to Newton's law of gravitation. Stating g = F/m shows examiners you understand it is a field quantity, not just a number to plug in.",
  },
  {
    heading: "Why all masses fall together (no air resistance)",
    body: "In a vacuum, objects of different masses fall with the same acceleration g and hit the ground simultaneously. This is because weight (mg) and inertia (m) both scale with mass, so the acceleration a = F/m = mg/m = g is independent of m. Galileo's famous demonstration and the guinea-and-feather experiment confirm it. Air resistance changes this in everyday air, which is why a feather drifts while a stone plummets — but the ideal case assumes g alone.",
  },
  {
    heading: "Upward projection — rising phase",
    body: "When a body is thrown vertically upward, take upward as positive so a = −g. It slows by g each second until its velocity reaches zero at the highest point. Time to reach the top is t = u/g, where u is the launch speed. At the top the body is momentarily at rest (v = 0) but acceleration is still −g, so it immediately begins to fall back. Example: thrown up at 20 m s⁻¹, t_top = 20/9.8 ≈ 2.04 s.",
  },
  {
    heading: "Maximum height reached",
    body: "The greatest height H above the launch point comes from v² = u² + 2as with v = 0 at the top and a = −g: 0 = u² − 2gH, so H = u²/(2g). Example: u = 20 m s⁻¹, g = 9.8 → H = 400/19.6 ≈ 20.4 m. This formula needs no time and is the fastest route to maximum height. It also shows doubling the launch speed quadruples the height, since H depends on u².",
  },
  {
    heading: "Symmetry — time up equals time down",
    body: "For a body thrown up and caught at the SAME height it was launched, the motion is symmetric: time rising equals time falling, and the speed on return equals the launch speed (but downward). Total flight time up and back is 2u/g. Example: launched at 20 m s⁻¹ → total time ≈ 2 × 2.04 = 4.08 s. If it lands lower (e.g. off a cliff) the symmetry breaks and you must solve the full equation for the longer fall.",
  },
  {
    heading: "Worked example — object dropped",
    body: "A stone is dropped (u = 0) and falls for 2 s. Using v = u + gt with g = 9.8: v = 0 + 9.8 × 2 = 19.6 m s⁻¹ downward. Its displacement is s = ½gt² = ½ × 9.8 × 4 = 19.6 m. The speed and the distance numerically coincide here only because u = 0 and the numbers align; in general keep them distinct. Dropping means u = 0, the simplest gravity problem.",
  },
  {
    heading: "Worked example — thrown upward fully",
    body: "A ball is thrown up at 15 m s⁻¹ (g = 10 m s⁻² for simplicity). Time to top: t = 15/10 = 1.5 s. Max height: H = 15²/(2×10) = 225/20 = 11.25 m. Total flight back to launch height: 2 × 1.5 = 3.0 s, returning at 15 m s⁻¹ downward. Using the equations of motion with a = −g reproduces each value, confirming gravity is just constant acceleration in disguise.",
  },
  {
    heading: "Objects projected downward",
    body: "If a body is thrown downward (or off a height) with initial speed u in the direction of gravity, take downward as positive so a = +g. Then v = u + gt and s = ut + ½gt² give speed and distance fallen directly. Example: dropped from a tower with u = 0, after 3 s, s = ½ × 9.8 × 9 ≈ 44.1 m. Choosing the direction of motion as positive keeps all signs simple and avoids sign confusion.",
  },
  {
    heading: "Air resistance and real-world limits",
    body: "In reality air resistance grows with speed and eventually balances weight, producing a terminal velocity where net force is zero and the body falls at constant speed. This means real falling motion is NOT uniformly accelerated at high speeds, so the equations of motion only approximate the early, slower phase. exam papers problems almost always assume 'neglect air resistance' so that g stays constant; only specialised questions introduce drag. Always check whether resistance is mentioned before applying g as constant.",
  },
];
