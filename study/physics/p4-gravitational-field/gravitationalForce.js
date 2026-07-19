export default [
  {
    heading: "Newton's law of gravitation — statement",
    body: "Newton's law of universal gravitation states that every particle of matter attracts every other particle with a force directly proportional to the product of their masses and inversely proportional to the square of the distance between their centres. In symbols: F = G m₁m₂ / r². The law is 'universal' because it applies everywhere — between protons, between you and Earth, and between galaxies. It replaced the idea of separate 'terrestrial' and 'celestial' mechanics with one rule. Gravity is always attractive; there is no negative mass to repel.",
  },
  {
    heading: "The formula and its meaning",
    body: "In F = G m₁m₂ / r², m₁ and m₂ are the two masses, r is the distance between their centres, and F is the magnitude of the attractive force on each (equal and opposite by Newton's third law). Doubling either mass doubles F; doubling r reduces F to one-quarter. The force acts along the line joining the centres. The law assumes the bodies are point masses or spherically symmetric, so r is measured centre-to-centre. It is the backbone of orbital and tidal calculations.",
  },
  {
    heading: "The universal constant G",
    body: "G is the universal gravitational constant, approximately 6.67 × 10⁻¹¹ N m² kg⁻². Its tiny value tells you why gravity is weak between everyday objects — you do not feel the pull of the person next to you. Cavendish first measured G in 1798 using a torsion balance, effectively 'weighing the Earth'. Because G is the same everywhere, the law truly is universal. Its smallness is why gravity dominates only at planetary and cosmic scales, not on a laboratory bench.",
  },
  {
    heading: "The inverse-square law",
    body: "The '1/r²' in the formula is the inverse-square law: the force spreads over the surface area of a sphere (4πr²) as you move away, so its intensity drops as 1/r². Halving r makes F four times larger; tripling r makes it nine times smaller. The same geometric law governs light intensity, electric force and sound spread. It is why distant stars, though enormous, exert negligible pull on us. Recognising 1/r² lets you predict how gravity weakens with distance without recalculating from scratch.",
  },
  {
    heading: "Direction and nature of the force",
    body: "Gravitational force is always attractive and acts along the straight line connecting the two centres of mass. Each body feels a force toward the other, equal in magnitude and opposite in direction (Newton's third law) — the Earth pulls the apple down and the apple pulls the Earth up with the same force. Because it is always attractive, gravity can only bind things together, never push apart. This distinguishes it from electric forces, which can attract or repel. The direction is what defines the field lines of a mass.",
  },
  {
    heading: "Linking G to g",
    body: "Near Earth's surface, equating Newton's law with weight gives the local field strength. For a mass m at radius R from Earth's centre: G M m / R² = mg, hence g = G M / R². This shows the everyday 9.8 m/s² is just the universal law evaluated for Earth's mass and radius. It also means if you know G, M and R you can compute g for any planet. The link is the single most important bridge between the two parts of this topic and appears constantly in problems.",
  },
  {
    heading: "Universality — from apples to galaxies",
    body: "The same law explains an apple falling, the Moon orbiting Earth, and the planets orbiting the Sun. The Moon stays in orbit because Earth's gravity provides the centripetal force: G M m / r² = m v² / r. Tides arise from the Sun and Moon's differential gravitational pull. Entire galaxies are bound by gravity acting between their stars and dark matter. Nothing in the law changes from bench to cosmos — only the scales of m, r and F differ. This unity is why Newton's law is called 'universal'.",
  },
  {
    heading: "Worked example — force between two masses",
    body: "Find the gravitational force between two 1.0 kg masses placed 0.10 m apart. F = G m₁m₂ / r² = (6.67×10⁻¹¹ × 1 × 1) / (0.10)² = 6.67×10⁻¹¹ / 0.01 = 6.67×10⁻⁹ N. This force is astonishingly small — far too weak to notice, which is why we only feel Earth's gravity. The example shows how G's tiny size suppresses gravity at human scales. Yet the same formula, with Earth's mass, gives your full weight.",
  },
  {
    heading: "Worked example — weight from the law",
    body: "A 70 kg person stands on Earth (M = 6.0×10²⁴ kg, R = 6.4×10⁶ m). Weight W = G M m / R² = (6.67×10⁻¹¹ × 6.0×10²⁴ × 70) / (6.4×10⁶)². Numerator = 2.80×10¹⁶; denominator = 4.10×10¹³; W ≈ 684 N, i.e. about 9.8 × 70. This reproduces W = mg using only G, M and R — confirming the G-to-g link. It demonstrates that your weight is literally Earth's gravitational pull on you computed from first principles.",
  },
  {
    heading: "When the law applies and its limits",
    body: "Newton's law works superbly for point masses and spherically symmetric bodies (by the shell theorem, a uniform sphere acts as if all its mass were at the centre). It accurately predicts planetary orbits and satellite motion. However, it fails at very high speeds or in very strong fields, where Einstein's general relativity is needed (e.g. Mercury's orbit, GPS clocks). At atomic scales quantum gravity is unfinished, though Newton's law is irrelevant there because electric forces dominate. for the exam papers, treat the inverse-square law as exact for the problems given.",
  },
  {
    heading: "Field strength from the force law",
    body: "The gravitational field strength at distance r from a mass M is the force per unit mass: g(r) = F/m = G M / r². This is the field view of the same law — instead of two interacting masses, we describe the field produced by M and the force it would exert on any m. Field lines of a point mass radiate inward and thin as 1/r². This field formulation is what connects to the 'acceleration due to gravity' and 'potential' subtopics. Thinking in fields avoids having to specify a second mass every time.",
  },
  {
    heading: "Summary",
    body: "Newton's law of gravitation, F = G m₁m₂ / r², is the inverse-square rule that quantifies the attractive force between any two masses anywhere in the universe. With G ≈ 6.67×10⁻¹¹ N m² kg⁻² it links directly to local gravity via g = G M / R² and explains orbits, tides and weight. Its weakness at human scales explains why we feel only Earth's pull, while its universality explains the cosmos. Combined with the field and potential ideas, it completes the gravitational-field picture you need for the exam.",
  },
];
