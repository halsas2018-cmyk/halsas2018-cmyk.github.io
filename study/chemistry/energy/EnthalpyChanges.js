export default [
  {
    heading: "Defining an enthalpy change, ΔH",
    body: "An enthalpy change ΔH is the heat exchanged at constant pressure for a specified reaction, quoted per mole of reaction as written. It is meaningless without the equation, state symbols and conditions, because ΔH depends on all of these. For example neutralisation of a strong acid and base gives about −57 kJ mol⁻¹, but only for H⁺(aq) + OH⁻(aq) → H₂O(l); change the equation and the value changes too, so always write the full equation with ΔH.",
  },
  {
    heading: "Standard conditions (ΔH°)",
    body: "To compare enthalpy values fairly they are recorded under STANDARD conditions: 1 atmosphere pressure, a stated temperature (conventionally 298 K or 25 °C), 1 mole of substance, and solutions at 1 mol dm⁻³. A value measured this way is written ΔH° (the degree symbol marks 'standard'). Enthalpies at other temperatures or pressures are not directly comparable, so always state the conditions with any ΔH you report.",
  },
  {
    heading: "Enthalpy of combustion, ΔH꜀",
    body: "The standard enthalpy of combustion is the heat released when ONE mole of a substance burns COMPLETELY in oxygen under standard conditions. Combustion is always exothermic, so ΔH꜀ is negative. For methane: CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l), ΔH꜀ = −890 kJ mol⁻¹. These values compare fuels — the more negative (or more heat per gram), the better. Water is liquid because that is its standard state at 298 K.",
  },
  {
    heading: "Enthalpy of formation, ΔHբ",
    body: "The standard enthalpy of formation is the heat change when ONE mole of a compound forms from its elements in their standard states. By definition the formation enthalpy of any element in its standard state is zero (O₂(g), C(graphite), H₂(g) all have ΔHբ = 0). Formation enthalpies are building blocks: Hess's law lets us combine them to find almost any other enthalpy change without a new experiment.",
  },
  {
    heading: "Atomization and sublimation enthalpies",
    body: "Atomization enthalpy is the heat needed to turn one mole of an element in its standard state into gaseous atoms (Na(s) → Na(g)). Sublimation enthalpy turns a solid directly to gas (I₂(s) → I₂(g)). These are always endothermic because bonds or lattice forces must break. They appear in Born–Haber cycles, where building an ionic solid from gaseous ions reverses the atomization-plus-ionization steps.",
  },
  {
    heading: "Enthalpy of dissolution",
    body: "The enthalpy of dissolution is the heat change when ONE mole of solute dissolves in a LARGE excess of water, so further dilution causes no further change. It can be positive (endothermic, e.g. NH₄NO₃, which cools the solution) or negative (exothermic, e.g. NaOH, which warms it). The net value balances endothermic breaking of the crystal lattice against exothermic hydration of the ions by water.",
  },
  {
    heading: "Lattice vs hydration energy",
    body: "Dissolving an ionic solid splits into two competing steps: breaking the ionic lattice (endothermic lattice dissociation) and surrounding each ion with water (exothermic hydration). If hydration releases more than the lattice costs, dissolution is exothermic; if not, endothermic. This competition also explains solubility trends and why some salts, such as AgCl, are barely soluble — their lattice energy is too large to be overcome.",
  },
  {
    heading: "Enthalpy of neutralisation",
    body: "The enthalpy of neutralisation is the heat released when ONE mole of H⁺ reacts with ONE mole of OH⁻ to form water: H⁺(aq) + OH⁻(aq) → H₂O(l). For a strong acid–strong base it is about −57 kJ mol⁻¹, because the net reaction is always the same. Weak acids or bases give less exothermic values because extra heat is first absorbed ionising the weak reagent before H⁺ and OH⁻ meet.",
  },
  {
    heading: "Hess's law of heat summation",
    body: "Hess's law states that the total enthalpy change for a reaction is the same no matter which route is taken, provided initial and final states are identical — a direct consequence of enthalpy being a state function. This lets us find an awkward ΔH by adding easier steps. The formation enthalpy of CO₂ can be found from carbon burning directly, or via CO then CO₂; both routes give the same total because start and end are the same.",
  },
  {
    heading: "Born–Haber cycles",
    body: "A Born–Haber cycle is an enthalpy cycle used to calculate the lattice energy of an ionic solid that cannot be measured directly. It combines measurable steps — atomization, ionization, electron affinity and formation — into a closed loop from elements to the ionic crystal. Because the total change around the loop is fixed by Hess's law, the unknown lattice energy is found by difference, showing why ionic compounds are stable despite costly ion formation.",
  },
  {
    heading: "Bond energy and bond dissociation energy",
    body: "Bond dissociation energy is the energy to break ONE mole of a specific bond in a gaseous molecule (H–H in H₂(g) needs +436 kJ mol⁻¹). The AVERAGE bond energy averages this over many molecules (C–H is about +413 kJ mol⁻¹). Larger bond energies mean stronger bonds; comparing them lets us judge which bonds break most easily when a reaction begins.",
  },
  {
    heading: "Calculating ΔH from bond energies",
    body: "The enthalpy change can be estimated from bond energies: ΔH ≈ Σ(bonds broken) − Σ(bonds formed), since breaking costs energy (+) and making releases it (−). For H₂ + Cl₂ → 2HCl: break H–H (436) + Cl–Cl (243) = +679 kJ; form 2 × H–Cl (862) = −862 kJ; so ΔH ≈ 679 − 862 = −183 kJ mol⁻¹ (exothermic). The estimate ignores state and is approximate, but predicts the sign and rough magnitude.",
  },
];
