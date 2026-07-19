export default [
  {
    heading: "Statement of Newton's second law",
    body: "Newton's second law: the rate of change of momentum of a body is directly proportional to the applied resultant force and is in its direction. For constant mass this becomes F = ma — the resultant force equals mass × acceleration. Force and acceleration are vectors pointing the same way, so doubling the force doubles the acceleration, and doubling the mass halves it. Zero net force (F = 0) gives zero acceleration, which is exactly the first law.",
  },
  {
    heading: "Mass, acceleration, and force direction",
    body: "F = ma makes three predictions: (1) fixed mass — larger resultant force gives larger acceleration; (2) fixed force — larger mass gives smaller acceleration; (3) acceleration is always in the DIRECTION of the resultant force. If you pull a block right with a net 5 N it accelerates right; pull left with net 5 N and it accelerates (or decelerates) left. Always resolve all forces to find the single resultant before applying F = ma.",
  },
  {
    heading: "Momentum and its conservation",
    body: "Momentum p = mv (mass × velocity), a vector in kg m/s. Linear momentum is CONSERVED in an isolated system: total momentum before equals total after, provided no external resultant force acts. This governs collisions, explosions, and recoil. Because momentum is a vector you must assign directions (right positive, left negative) and total the signed momenta, not just their magnitudes.",
  },
  {
    heading: "Force as rate of change of momentum",
    body: "The full form is F = Δp/Δt = mΔv/Δt (constant m). It still holds when mass changes, as in a rocket burning fuel. A given force produces a fixed rate of momentum change, so changing momentum quickly (small Δt) needs a large force — a fast stop is jarring. Spreading the same change over a longer time needs a smaller force, which is why crumple zones and airbags lengthen stopping time to reduce peak force on occupants.",
  },
  {
    heading: "Impulse — force multiplied by time",
    body: "Impulse = average force × time = Ft = Δp (change in momentum), unit newton-second (N s = kg m/s). A cricketer pulls hands BACK when catching a fast ball so the same momentum change occurs over a longer time, reducing the average force on the hands. In a collision the area under a force–time graph equals the impulse. A short sharp blow (small t, large F) can deliver the same impulse as a gentle long push (large t, small F).",
  },
  {
    heading: "The newton as a unit of force",
    body: "The SI unit of force is the newton (N): 1 N is the force giving a 1 kg mass an acceleration of 1 m/s², so 1 N = 1 kg m/s². Force answers should be given in newtons. For weight, W = mg with g ≈ 9.8 (or 10) m/s², so a 1 kg mass weighs about 9.8 N on Earth. Note that kg m/s² is dimensionally a force but the newton is the conventional unit.",
  },
  {
    heading: "Worked example — accelerating a car",
    body: "An 800 kg car accelerates from rest to 20 m/s in 10 s: a = (20 − 0)/10 = 2 m/s². Resultant force F = ma = 800 × 2 = 1 600 N. If air and rolling resistance oppose with 400 N, the engine must supply 1 600 + 400 = 2 000 N. This shows F = ma uses the RESULTANT force; resistive forces must be added back to find the actual applied (engine) force. Subtract oppositely directed forces first.",
  },
  {
    heading: "Worked example — impulse in a collision",
    body: "A 0.15 kg ball at 12 m/s is hit and leaves at 20 m/s opposite. Take outgoing as positive: initial p = 0.15 × (−12) = −1.8, final p = 0.15 × 20 = 3.0 kg m/s. Δp = 3.0 − (−1.8) = 4.8 kg m/s, so impulse = 4.8 N s. If contact lasts 0.02 s, average force F = Δp/t = 4.8/0.02 = 240 N. Such large forces over tiny times explain why bats and balls are damaged on impact.",
  },
  {
    heading: "Conservation of momentum in collisions",
    body: "For a straight-line collision with no external force: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂ (signed velocities). A 2 kg cart at 3 m/s hits a stationary 1 kg cart and they stick: momentum before = 6 kg m/s, after 3v = 6 so v = 2 m/s right. This is INELASTIC (they stick; KE not conserved, momentum is). ELASTIC collisions conserve both momentum and kinetic energy; perfect elasticity is idealised (gas molecules, hard spheres).",
  },
  {
    heading: "Application — recoil of a gun",
    body: "A gun and bullet form an isolated system, so total momentum stays zero. A 0.02 kg bullet at 400 m/s has 8 kg m/s forward; the 4 kg gun gains 8 kg m/s backward, recoil speed 8/4 = 2 m/s. The third-law forces are equal and opposite, but the light bullet gets huge acceleration while the heavy gun recoils gently — the same impulse produces very different velocities for different masses. Recoil pads soften the kick.",
  },
  {
    heading: "Application — jet and rocket propulsion",
    body: "Rockets and jets expel mass at high speed, so by momentum conservation the vehicle gains momentum the opposite way. A rocket ejects gas downward and gains equal upward momentum — and this works in vacuum because it carries its own oxidiser; it does NOT push against air. A jet draws in and expels atmospheric air. Thrust equals the rate of momentum change of the exhaust: more mass flow or higher speed gives greater thrust, directly from the momentum form of the second law.",
  },
  {
    heading: "Ticker-timer verification of F = ma",
    body: "Verify the second law with a ticker-timer: a trolley is pulled by a falling mass over a pulley, and its tape shows uniformly growing dot spacing (constant acceleration under roughly constant force). Varying the falling mass shows a ∝ F; adding trolley mass shows a ∝ 1/m, together a ∝ F/m, i.e. F ∝ ma. Plotting measured acceleration against F at fixed mass yields a straight line through the origin — the experimental signature of the second law.",
  },
];
