export default [
  {
    heading: "Gravitational potential — definition",
    body: "Gravitational potential V at a point is the work done per unit mass in bringing a test mass from infinity to that point. In symbols V = −G M / r for a point mass or spherical body of mass M at distance r. It is a scalar quantity, so it adds algebraically from several masses. Potential measures the 'gravitational terrain': a deep negative well near a massive body. Defining it from infinity (where V = 0) gives a consistent zero everywhere in empty space.",
  },
  {
    heading: "Why potential is negative",
    body: "V is negative because gravity is attractive: you must do negative work (the field does the work) to bring a mass inward from infinity, or equivalently you must supply positive energy to pull it back out. The zero is fixed at infinity, the farthest possible point, where there is no interaction. Closer to a mass the well deepens, so V becomes more negative (e.g. −6.3×10⁷ J/kg at Earth's surface). The negative sign is physical, not arbitrary — it tells you a mass is bound. Only with enough energy can it escape to V = 0.",
  },
  {
    heading: "Potential vs field strength",
    body: "Potential V (a scalar, J/kg) and field strength g (a vector, N/kg) describe the same field from different angles. They are linked by the potential gradient: g = −dV/dr (the field points in the direction of steepest decrease of potential). Where equipotentials are close together the gradient — and hence g — is large. Potential is easier to calculate because scalars add without direction; field tells you the actual force direction. Knowing one lets you find the other by differentiation or its inverse.",
  },
  {
    heading: "Gravitational potential energy",
    body: "The gravitational potential energy U of a mass m at a point is simply U = m V = −G M m / r. It is the work needed to assemble the system from infinite separation. To move a mass from r₁ to r₂ you change its U by ΔU = m(V₂ − V₁). Lifting a mass on Earth (small heights) this reduces to ΔU = mgh, the familiar form, because near the surface V changes approximately linearly with height. Potential energy is what is conserved in orbital motion alongside kinetic energy.",
  },
  {
    heading: "Escape velocity — the idea",
    body: "Escape velocity is the minimum speed an object needs at a planet's surface to reach infinity with zero speed left, never to fall back. It is the speed at which the object's initial kinetic energy exactly cancels the gravitational potential well. Any slower and gravity reels it back; any faster and it arrives at infinity with surplus speed. Remarkably, the required speed depends only on the planet's mass and radius, not on the object's mass or direction (ignoring air resistance and rotation).",
  },
  {
    heading: "Deriving escape velocity",
    body: "Set the initial kinetic energy equal to the magnitude of the potential energy at the surface: ½ m v² = G M m / R. The mass m cancels, giving v = √(2 G M / R). Using g = G M / R² this becomes v = √(2 g R). The cancellation of m is crucial: a feather and a rocket need the same escape speed. The derivation assumes no atmosphere and no extra thrust — a real rocket can escape slower by burning fuel continuously, but the ideal speed is the benchmark.",
  },
  {
    heading: "Earth's escape velocity",
    body: "For Earth, R ≈ 6.4×10⁶ m and g ≈ 9.8 m/s², so v = √(2 × 9.8 × 6.4×10⁶) = √(1.25×10⁸) ≈ 11 200 m/s ≈ 11.2 km/s. This is about 33 times the speed of sound and far beyond any aircraft. That is why rockets need enormous thrust and multi-stage design to shed weight. The Moon's smaller g and R give only ≈ 2.4 km/s, which is why lunar launch is easier. Escape speed scales with √(M/R).",
  },
  {
    heading: "Independence from the rocket's mass",
    body: "Because m cancels in ½mv² = GMm/R, escape velocity is the same for a pebble or a spaceship — only the energy required differs (a heavier craft needs more total energy and thus more fuel). This often surprises students who think a 'heavier' object must be launched faster. Direction also does not matter for the ideal speed, only that air resistance is ignored. In practice, atmosphere and Earth's rotation (launching eastward near the equator) give a small assist, so real launches need slightly less.",
  },
  {
    heading: "Energy reasoning — KE versus PE",
    body: "The escape condition is simply that total mechanical energy E = KE + PE ≥ 0. At the surface E = ½mv² − G M m / R; escape requires E ≥ 0, yielding the same v = √(2GM/R). If E < 0 the object is bound and moves in an ellipse (or circle) — that is an orbit. If E = 0 it just reaches infinity; if E > 0 it escapes on a hyperbola. This energy criterion unifies orbits and escape in one equation and is the cleanest way to decide whether a body is bound.",
  },
  {
    heading: "Binding energy",
    body: "The binding energy of a body at a planet's surface is the energy you must supply to free it — numerically G M m / R, equal to the magnitude of its negative potential energy. For Earth and a 1 kg mass this is about 6.3×10⁷ J. Binding energy explains why atmospheres stay (light molecules may still escape if hot enough) and why objects in orbit need continuous speed to avoid falling. It is the positive energy 'debt' that escape velocity is designed to pay off. More bound systems (larger M/R) have larger binding energy.",
  },
  {
    heading: "Common pitfalls",
    body: "Two mistakes recur. First, potential V is a scalar but field strength g is a vector — do not add potentials as if they had directions, and do not forget g points toward the mass while V just gets more negative. Second, escape velocity is a speed (magnitude) only; direction and air drag do not appear in the ideal formula, though drag hugely affects real launches. Also remember V is negative and zero at infinity, not at the surface. Keeping these straight prevents sign and direction errors in calculations.",
  },
  {
    heading: "Worked example — escape from a planet",
    body: "A planet has M = 4.0×10²⁴ kg and R = 7.0×10⁶ m. Escape speed v = √(2 G M / R) = √(2 × 6.67×10⁻¹¹ × 4.0×10²⁴ / 7.0×10⁶) = √(5.34×10¹⁴ / 7.0×10⁶) = √(7.63×10⁷) ≈ 8730 m/s ≈ 8.7 km/s. Note m cancels, so this holds for any craft. The surface gravitational potential is V = −G M / R ≈ −3.8×10⁷ J/kg. This shows how to compute both escape speed and potential from M and R directly.",
  },
];
