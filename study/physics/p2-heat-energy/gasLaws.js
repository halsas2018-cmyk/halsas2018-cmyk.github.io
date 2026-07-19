export default [
  {
    heading: "The gas laws and the kinetic model",
    body: "The gas laws describe how the pressure P, volume V and absolute temperature T of a fixed mass of gas are linked. They are explained by the kinetic theory: a gas is many tiny molecules moving at random and bouncing off the container walls, and the pressure is the average force of those collisions. Heating makes molecules move faster (harder collisions, more pressure); squeezing the gas into a smaller volume makes collisions more frequent (higher pressure). The laws are exact only for an ideal gas, but real gases obey them well at ordinary pressures.",
  },
  {
    heading: "Boyle's law",
    body: "At constant temperature, the pressure of a fixed mass of gas is inversely proportional to its volume: P ∝ 1/V, so PV = constant, and for two states P₁V₁ = P₂V₂. If you halve the volume, the molecules hit the walls twice as often and the pressure doubles. A graph of P against V is a hyperbola, while P against 1/V is a straight line through the origin. Boyle's law is verified with a trapped air column and a pressure gauge (e.g. a J-tube with a mercury index).",
  },
  {
    heading: "Charles's law",
    body: "At constant pressure, the volume of a fixed mass of gas is directly proportional to its absolute temperature: V ∝ T, so V/T = constant, and V₁/T₁ = V₂/T₂. As the gas is heated it expands (pushing a piston or a movable index to keep pressure constant). Extrapolating V to zero gives −273 °C, which defines absolute zero. A graph of V against T (in kelvin) is a straight line; using Celsius would give a misleading intercept, so convert to kelvin first.",
  },
  {
    heading: "Pressure law (Gay-Lussac's law)",
    body: "At constant volume, the pressure of a fixed mass of gas is directly proportional to its absolute temperature: P ∝ T, so P/T = constant, and P₁/T₁ = P₂/T₂. Heating the gas in a rigid container makes molecules move faster and strike the walls harder, raising the pressure. This is why a sealed aerosol can or car tyre pressure climbs on a hot day and why such containers carry 'keep away from heat' warnings. Again, T must be in kelvin.",
  },
  {
    heading: "The general gas law",
    body: "Combining the three laws gives PV/T = constant for a fixed mass, or in full PV = nRT where n is the number of moles and R the molar gas constant. For two states of the same gas: P₁V₁/T₁ = P₂V₂/T₂. This single equation handles any change in which P, V and T all vary together. It is the workhorse formula for gas problems and replaces the separate laws as special cases when one quantity is held fixed.",
  },
  {
    heading: "Worked example — Boyle's law",
    body: "A gas occupies 12 cm³ at 100 kPa. If the pressure is increased to 300 kPa at constant temperature, what is the new volume? Using P₁V₁ = P₂V₂: V₂ = P₁V₁ / P₂ = (100 × 12) / 300 = 4 cm³. The volume has been reduced to one third because the pressure was tripled, exactly as inverse proportionality predicts. Always keep the pressure and volume in consistent units; only their ratio matters here.",
  },
  {
    heading: "Worked example — Charles's and general law",
    body: "A balloon holds 2.0 L of air at 27 °C (300 K). If it is heated to 127 °C (400 K) at constant pressure, V₂ = V₁ T₂ / T₁ = 2.0 × 400 / 300 = 2.67 L. Alternatively, 500 cm³ of gas at 200 kPa and 300 K is compressed to 100 cm³ and heated to 600 K: P₂ = P₁V₁T₂ / (T₁V₂) = (200 × 500 × 600) / (300 × 100) = 2000 kPa. The general law handles both changes at once.",
  },
  {
    heading: "Kinetic-theory explanation of the laws",
    body: "Boyle's law: smaller volume → molecules closer to the walls → more frequent collisions → higher pressure. Charles's law: higher temperature → faster molecules → to keep pressure constant the gas must expand so collisions become less frequent. Pressure law: constant volume, higher temperature → faster, harder collisions → higher pressure. Absolute zero is the temperature at which molecular motion (and thus pressure, at fixed volume) would theoretically cease. The model thus explains every law from particle behaviour.",
  },
  {
    heading: "Real gases and applications",
    body: "Real gases deviate from the laws at high pressure or low temperature (molecules attract and have size), but the laws are excellent approximations in everyday conditions. A vivid application is the vehicle safety air bag, which inflates in a fraction of a second when a chemical reaction releases a large volume of gas; the gas laws govern how that gas fills the bag as it expands and cools. Compressors, refrigerators, weather balloons and internal-combustion engines all rely on the same relationships between P, V and T.",
  },
  {
    heading: "Worked example — moles and R",
    body: "For 0.50 mol of an ideal gas at 300 K occupying 0.012 m³, the pressure is P = nRT / V. With R = 8.31 J mol⁻¹ K⁻¹, P = (0.50 × 8.31 × 300) / 0.012 ≈ 1.04 × 10⁵ Pa (about 1 atm). This shows how the same general law links amount of substance to the measurable P, V and T. In exams, decide first whether you are given n (use PV = nRT) or a fixed mass undergoing a change (use P₁V₁/T₁ = P₂V₂/T₂).",
  },
];
