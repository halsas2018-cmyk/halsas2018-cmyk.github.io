export default [
  {
    heading: "The principle of conservation of mechanical energy",
    body: "If only conservative forces (like gravity or an ideal spring) act on a system, its total mechanical energy — the sum of kinetic and potential energy — remains constant. Energy does not disappear; it is continuously exchanged between KE and PE as the body moves. Stated as a rule: in the absence of friction and air resistance, KE + PE at one point equals KE + PE at any other point. This is a restricted form of the general conservation law.",
  },
  {
    heading: "Exactly when the principle applies",
    body: "Mechanical energy is conserved ONLY when no non-conservative forces do work. Conservative forces (gravity, ideal spring, electrostatic) merely shuffle energy between KE and PE and net to zero over a closed path. Non-conservative forces — friction, air drag, the force from an engine or a person's push — add or remove mechanical energy. So a falling rock in vacuum conserves mechanical energy; the same rock through air does not, because drag bleeds energy into heat.",
  },
  {
    heading: "The conservation equation",
    body: "Writing the principle explicitly: KE₁ + PE₁ = KE₂ + PE₂, or ½mv₁² + mgh₁ = ½mv₂² + mgh₂ (for gravity alone). Rearranging, a loss in PE equals a gain in KE and vice versa. Because mass often cancels, you can find a speed from a height change without knowing the mass. This single equation replaces much of the kinematics you would otherwise need.",
  },
  {
    heading: "Solving problems by swapping energy forms",
    body: "Conservation lets you relate height and speed directly. For a body sliding frictionlessly from height h to the bottom: mgh = ½mv², so v = √(2gh), independent of mass. For a pendulum released from angle θ, the drop h = L(1 − cosθ) gives the speed at the lowest point. Choose two convenient points (usually top and bottom), write KE + PE at each, and equate. This is usually faster and safer than force-and-acceleration methods.",
  },
  {
    heading: "Verifying the principle experimentally",
    body: "The principle is confirmed with a simple pendulum or a falling-bob setup. Measure the height a bob is raised and its speed at the lowest point; compute GPE lost and KE gained and show they are equal within experimental error. A linear air-track with a glider and a known drop, or a ball bearing rolling down a curved track, gives the same verification. Small discrepancies are attributed to friction and air resistance, not to a failure of the law.",
  },
  {
    heading: "Worked example: a frictionless slide",
    body: "A child of mass 30 kg (mass cancels) slides from rest down a frictionless chute that drops 4 m. Conservation gives mgh = ½mv², so v = √(2gh) = √(2 × 10 × 4) = √80 ≈ 8.9 m/s at the bottom. The 30 kg is irrelevant to the speed. Had we used kinematics (v² = u² + 2as with a = g sinθ) we would reach the same answer but with more steps.",
  },
  {
    heading: "Worked example: pendulum speed at the bottom",
    body: "A pendulum bob of length 2 m is pulled aside until the string makes 60° with the vertical and released. The vertical drop is h = L(1 − cos60°) = 2(1 − 0.5) = 1 m. Conservation: mgh = ½mv² → v = √(2 × 10 × 1) = √20 ≈ 4.47 m/s at the lowest point. At the release point all energy was GPE; at the bottom it is all KE; the total never changed.",
  },
  {
    heading: "When mechanical energy appears to 'fail'",
    body: "A bouncing ball never returns to its original height, and a skier slows on flat ground — mechanical energy seems lost. The cause is non-conservative work: friction and air resistance do negative work, converting mechanical energy into thermal energy of the surfaces and the air. The ball's mechanical energy decreases each bounce, yet the total energy (now including heat and sound) is fully conserved. Mechanical-energy conservation is simply not the right tool when dissipative forces act.",
  },
  {
    heading: "Total energy is still conserved",
    body: "The general law of conservation of energy is never violated. When friction reduces mechanical energy, exactly that amount appears as internal (thermal) energy — the surfaces get slightly warmer, the air carries sound. A careful experiment measuring the temperature rise confirms the missing mechanical energy equals the heat gained. So 'mechanical energy is not conserved' is a statement about the mechanical part only, not about energy overall.",
  },
  {
    heading: "Real systems: hydroelectric power",
    body: "A hydroelectric dam is a large-scale application. Water high in the reservoir has GPE; as it falls through the turbines gravity does work, converting GPE to KE of the flowing water, then to KE of turbine blades, then to electrical energy. Friction in the turbines and pipes wastes some as heat, so the electrical output is less than the initial GPE — efficiency below 100%, but total energy conserved throughout.",
  },
  {
    heading: "Common misconceptions to avoid",
    body: "Students often say energy is 'used up' or 'destroyed' by motion — it is not; it is transformed. Others think a moving object 'has momentum, not energy' — it has both, in different units. Another trap: assuming conservation applies even with friction. Finally, confusing KE with momentum (both grow with speed but KE ∝ v² while momentum ∝ v) leads to wrong numerical predictions. State clearly which form you are tracking.",
  },
  {
    heading: "A reliable problem-solving strategy",
    body: "For any mechanical-energy question: (1) list the two points of interest; (2) write KE + PE at each, choosing a clear zero for PE; (3) equate them if no friction acts, or include a '− energy lost to heat' term if it does; (4) cancel mass where possible and solve for the unknown (usually v or h); (5) check units give joules and the answer is sensible. This routine handles slides, swings, projectiles' vertical motion, and springs consistently.",
  },
];
