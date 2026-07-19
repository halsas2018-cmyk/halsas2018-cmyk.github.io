export default [
  {
    heading: "Statement of Archimedes' principle",
    body: "Archimedes' principle states that when a body is wholly or partially immersed in a fluid, it experiences an upthrust equal to the weight of the fluid it displaces. In symbols, U = weight of displaced fluid = ρ_f · V_displaced · g, where ρ_f is the fluid density, V_displaced the volume of fluid pushed aside, and g the acceleration due to gravity. The principle applies to liquids and gases alike, which is why both ships and balloons obey it.",
  },
  {
    heading: "Why upthrust arises — the pressure difference",
    body: "A submerged body has its top at a smaller depth than its bottom, so the fluid pressure on the bottom (P = ρgh, larger h) exceeds that on the top. The net upward force from this pressure difference is the upthrust. For a fully submerged body of height H and horizontal area A, the force difference is ρg(H)·A = ρg·(volume) = ρVg. This derivation shows the upthrust is exactly the weight of displaced fluid, confirming the principle from first principles.",
  },
  {
    heading: "Upthrust equals apparent loss of weight",
    body: "Directly from the principle, the upthrust on a body equals its loss of apparent weight when immersed: U = W_air − W_fluid. Weigh a stone in air (say 7.0 N) and suspended in water (5.0 N); the loss is 2.0 N, so the upthrust and the weight of displaced water are both 2.0 N. This identity is the practical bridge between weighing experiments and buoyancy calculations, and it is how relative density is found without a volume measurement.",
  },
  {
    heading: "Experimental verification of the principle",
    body: "To verify it, suspend a solid from a spring balance, record its weight in air, then lower it into water and record the new reading. The loss in weight is the upthrust. Collect the overflow water in a beaker as the solid is immersed, weigh that water, and show its weight equals the upthrust. Agreeing results confirm Archimedes' principle. Using an overflow (eureka) can with a top pan balance is the standard school verification.",
  },
  {
    heading: "Finding relative density of a solid denser than water",
    body: "Weigh the solid in air (W) and in water (W_w). The upthrust in water is W − W_w, which equals the weight of an equal volume of water. Relative density = (weight in air) / (loss of weight in water) = W / (W − W_w), because R.D. = ρ_solid/ρ_water = (W/V)/(U_water/V) with the same volume V. Example: W = 12 N, W_w = 10 N gives R.D. = 12 / 2 = 6. The unitless answer is correct since it is a ratio.",
  },
  {
    heading: "Solids less dense than water — the sinker method",
    body: "A body lighter than water (e.g. cork) will not stay submerged, so tie it to a heavy 'sinker' already underwater. Weigh the sinker alone in water (W_s), then the sinker plus the light body fully immersed (W_combined). The extra upthrust on the light body is W_s − W_combined, equal to the weight of its own volume of water. Then R.D. = (weight of body in air) / (that upthrust). This extends Archimedes' method to floating solids.",
  },
  {
    heading: "Density of a liquid by Archimedes' principle",
    body: "Weigh a solid in air (W), in water (W_w), and in the unknown liquid (W_l). The upthrust in water is W − W_w (weight of equal volume of water) and in the liquid is W − W_l (weight of equal volume of liquid). R.D. of liquid = (W − W_l) / (W − W_w); multiply by 1000 for kg m⁻³. This uses the same solid as a 'density probe' whose volume cancels, avoiding any direct volume measurement.",
  },
  {
    heading: "Worked example — density of a metal",
    body: "A metal piece weighs 3.9 N in air and 3.4 N in water. Upthrust = 0.5 N = weight of displaced water, so the displaced water mass is 0.5 / 10 = 0.05 kg and its volume is 0.05 / 1000 = 5 × 10⁻⁵ m³, which is also the metal's volume. Density = (3.9/10) / (5×10⁻⁵) = 0.39 / 0.00005 = 7800 kg m⁻³. The metal is brass or steel. Note g = 10 m s⁻² was used for simplicity.",
  },
  {
    heading: "Worked example — relative density of a liquid",
    body: "A glass bob weighs 5.0 N in air, 3.0 N in water, and 3.2 N in oil. Upthrust in water = 2.0 N; upthrust in oil = 1.8 N. R.D. of oil = 1.8 / 2.0 = 0.90. So the oil's density = 0.90 × 1000 = 900 kg m⁻³. Because the same bob displaces the same volume in each fluid, the ratio of upthrusts is the ratio of fluid densities — a clean, exam-friendly method.",
  },
  {
    heading: "Upthrust in different fluids and at depth",
    body: "Because U = ρ_f · V · g, the same fully submerged body experiences a larger upthrust in a denser fluid (seawater vs fresh water) and a smaller one in a lighter fluid (oil). Upthrust does NOT depend on the depth of submersion for a fully immersed body, since V_displaced is constant; it only grows while more of the body is being submerged. In air the upthrust is tiny (air density ~1.2 kg m⁻³) and is usually ignored except for balloons.",
  },
  {
    heading: "Practical importance of the principle",
    body: "Archimedes' principle underlies ship design, hydrometers, submarines, and the determination of purity and composition of materials. It explains why a loaded ship sits lower in fresh water than in seawater (fresh water is less dense, so more volume must be displaced). It also lets foundries check for cavities in castings: a hollow (porous) casting has lower density than a sound one and shows a smaller apparent loss of weight than expected.",
  },
];
