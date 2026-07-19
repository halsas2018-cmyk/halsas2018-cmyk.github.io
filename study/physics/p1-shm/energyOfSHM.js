export default [
  {
    heading: "The two forms of energy in S.H.M.",
    body: `A body executing S.H.M. continually swaps between kinetic energy (K.E.) and potential energy (P.E.). The kinetic energy is greatest at the equilibrium position, where the speed is maximum, and falls to zero at the extremes where the body momentarily stops. The potential energy — stored in the stretched spring or raised bob — is greatest at the extremes and zero at the centre. As the body oscillates, energy flows back and forth between these two stores, exactly out of phase with each other.`,
  },
  {
    heading: "Total energy is constant (ideal case)",
    body: `In the absence of friction and air resistance, no energy is lost, so the total mechanical energy E = K.E. + P.E. stays constant throughout the motion. Its value is set by the amplitude: E = ½ mω²A² = ½ kA² (using ω² = k/m). At the centre all of this energy is kinetic; at the extremes all of it is potential. The constancy of total energy is just conservation of energy applied to the ideal oscillator, and it is why the amplitude does not decay.`,
  },
  {
    heading: "Formulas for K.E. and P.E. at displacement x",
    body: `At displacement x the speed is v = ω√(A² − x²), so the kinetic energy is K.E. = ½ m v² = ½ mω²(A² − x²). The potential energy is the remainder, P.E. = E − K.E. = ½ mω²x² = ½ k x². You can see directly: when x = 0 (centre) P.E. = 0 and K.E. is maximum ½ mω²A²; when x = A (extreme) K.E. = 0 and P.E. is maximum ½ mω²A². These two parabolas always sum to the flat total-energy line.`,
  },
  {
    heading: "Energy–displacement graphs",
    body: `If you plot energy against displacement x, the P.E. curve is a U-shaped parabola (½ kx²) opening upward, the K.E. curve is an upside-down parabola (½ k(A² − x²)), and the total energy is a horizontal straight line touching the tops of both. The two parabolas are mirror images about the centre line, and at every x their heights add up to the constant total. These graphs are a quick way to "see" the continuous energy exchange during one oscillation.`,
  },
  {
    heading: "Why the body keeps moving — the energy swap",
    body: `The energy interchange explains the perpetual to-and-fro of an ideal oscillator. At an extreme the body has maximum potential energy and zero speed; the restoring force then accelerates it, converting that stored energy into kinetic energy as it heads for the centre. At the centre the kinetic energy is maximum and the body coasts through, then climbs against the restoring force, converting kinetic back into potential. This endless conversion, with no net loss, is what sustains the motion.`,
  },
  {
    heading: "Worked example — energies at several positions",
    body: `A body of mass m = 0.50 kg oscillates with amplitude A = 0.10 m and angular frequency ω = 20 rad s⁻¹. The total energy is E = ½ mω²A² = ½ × 0.50 × 400 × 0.010 = 1.0 J. At the centre (x = 0) all 1.0 J is kinetic. At the extreme (x = A = 0.10 m) all 1.0 J is potential. Halfway out, x = 0.05 m, P.E. = ½ × 0.50 × 400 × 0.0025 = 0.25 J and K.E. = 1.0 − 0.25 = 0.75 J. The swap is clear and the sum stays 1.0 J.`,
  },
  {
    heading: "Energy and amplitude",
    body: `Because total energy E = ½ kA², the energy stored in an oscillator grows with the square of its amplitude. Doubling the amplitude quadruples the total energy, even though the period is unchanged. This is why a violently swinging pendulum (large A) carries far more energy than a gently swinging one of the same length. It also means that to halve the energy you need only reduce the amplitude by a factor of √2, not by half.`,
  },
  {
    heading: "Real oscillators lose energy (damping)",
    body: `In practice the total energy is not perfectly constant: air resistance, friction at the support and sound radiation steadily remove energy, so the amplitude decays and the motion is damped. The energy–displacement parabolas then shrink over time. Light damping hardly changes the period but noticeably reduces amplitude; heavy damping can prevent oscillation altogether (the body just creeps back to equilibrium). The constant-energy ideal is the baseline from which damping is measured.`,
  },
];
