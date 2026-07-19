export default [
  {
    heading: "How a rocket produces thrust",
    body: "A rocket works by expelling hot gas backward at very high speed through its nozzle. By Newton's third law (action and reaction), the backward momentum of the exhaust is matched by an equal forward momentum given to the rocket, producing thrust. Unlike a jet engine, a rocket carries both its fuel AND its oxidiser, so it needs no surrounding air and works perfectly in the vacuum of space — the only propulsion method that does.",
  },
  {
    heading: "Newton's laws in rocket motion",
    body: "Newton's second law explains the resulting acceleration: the net upward thrust minus weight equals mass times acceleration. Newton's first law means the rocket coasts once thrust stops, and weight continually pulls it back toward Earth. The third law is the heart of the mechanism: the force accelerating the exhaust downward is exactly the force pushing the rocket upward, so the two are inseparable.",
  },
  {
    heading: "Thrust from rate of momentum change",
    body: "The forward thrust F equals the rate at which the exhaust carries momentum backward: F = u (dm/dt), where u is the exhaust speed relative to the rocket and dm/dt is the rate of fuel mass ejected per second. A larger exhaust velocity or a higher mass-flow rate gives greater thrust. This is why engineers seek both hot, fast-expanding gases (high u) and powerful pumps (high dm/dt) for liftoff.",
  },
  {
    heading: "Conservation of momentum",
    body: "As the rocket throws mass backward, the remaining rocket-plus-unburnt-fuel must gain equal forward momentum to keep the total momentum of the system constant. Initially the system is at rest, so the forward momentum of the rocket exactly balances the backward momentum of the ejected gas. This momentum balance — not 'pushing against the air' — is what accelerates the vehicle, which is why rockets function in empty space.",
  },
  {
    heading: "The Tsiolkovsky rocket equation",
    body: "Because the rocket loses mass as it burns fuel, its acceleration increases even with steady thrust. Integrating the momentum balance gives the ideal rocket equation: Δv = u ln(m₀/m), where m₀ is the initial (fueled) mass, m is the final mass and u the exhaust velocity. It shows that to reach large speed changes you need either very high exhaust velocity or a mass ratio m₀/m far greater than 1 — which is hard to achieve with a single stage.",
  },
  {
    heading: "Escape velocity",
    body: "To leave Earth's gravitational field entirely a body needs enough kinetic energy to overcome gravitational potential energy: ½mv² = GMm/R. Solving gives v = √(2GM/R) ≈ 11.2 km/s at Earth's surface. Below this speed gravity eventually pulls the object back; at or above it, the object escapes to infinity with zero residual speed. Reaching orbit needs only about 7.9 km/s, but escaping needs √2 times that — the extra energy is significant.",
  },
  {
    heading: "Why rockets use multiple stages",
    body: "A single rocket cannot easily carry enough fuel because it would also have to lift that fuel's own weight. Multi-stage rockets shed their empty, spent lower stages during flight, discarding dead mass so later, smaller stages accelerate more easily. Each stage fires, then separates, leaving a lighter vehicle for the next burn. This staging is what makes it practical to reach orbit and beyond with chemical fuels.",
  },
  {
    heading: "Worked example — escape velocity check",
    body: "Using M = 6.0 × 10²⁴ kg, R = 6.4 × 10⁶ m, G = 6.67 × 10⁻¹¹: v = √(2 × 6.67×10⁻¹¹ × 6.0×10²⁴ / 6.4×10⁶) = √(1.25×10⁸) ≈ 1.12 × 10⁴ m/s = 11.2 km/s. A rocket launched slower than this from the surface will rise, slow under gravity, and fall back; one reaching this speed can coast away forever without further thrust.",
  },
  {
    heading: "Orbital insertion and trajectories",
    body: "A launch does not aim straight up forever. After vertical liftoff the rocket pitches over to build horizontal speed, then a final burn inserts the payload into the desired orbit. To reach another planet the craft may use a transfer (Hohmann) ellipse; to leave Earth entirely it must reach escape velocity. Careful timing and direction (the launch window) are needed so the target body is in the right place on arrival.",
  },
  {
    heading: "Uses of rockets",
    body: "Rockets are the only practical way to reach space: they launch communication, weather and navigation satellites, resupply space stations such as the ISS, and send scientific probes to the Moon, planets and beyond. In military form they deliver payloads as missiles. Reusable launch vehicles are lowering the cost of access to orbit, enabling Earth observation, global internet constellations and crewed spaceflight.",
  },
];
