export default [
  {
    heading: "How gases behave",
    body: "A gas is made of particles that are far apart with negligible attraction between them, so a gas has no fixed shape or volume and fills whatever container holds it. Gases are easily compressed because there is empty space between the particles, and they are much less dense than liquids or solids. The pressure a gas exerts comes from its particles colliding with the walls of the container — more collisions, or harder collisions, mean higher pressure. All the gas laws describe how pressure, volume and temperature are linked.",
  },
  {
    heading: "Boyle's law — pressure and volume",
    body: "Boyle's law states that for a fixed mass of gas at constant temperature, the pressure is inversely proportional to the volume: P ∝ 1/V, or P₁V₁ = P₂V₂. Squeezing the gas into a smaller volume forces the particles closer, so they hit the walls more often and the pressure rises. Worked example: 2.0 dm³ of gas at 100 kPa is compressed to 0.50 dm³ at the same temperature. P₂ = P₁V₁/V₂ = (100 × 2.0)/0.50 = 400 kPa.",
  },
  {
    heading: "Charles' law — volume and temperature",
    body: "Charles' law states that for a fixed mass of gas at constant pressure, the volume is directly proportional to its absolute temperature: V ∝ T, or V₁/T₁ = V₂/T₂. Heating makes the particles move faster and hit the walls harder; if the pressure is held constant the gas must expand. Temperatures MUST be in kelvin (K = °C + 273). Worked example: 3.0 dm³ of gas at 300 K is heated to 450 K at constant pressure. V₂ = V₁T₂/T₁ = 3.0 × 450/300 = 4.5 dm³.",
  },
  {
    heading: "Pressure law (Gay-Lussac)",
    body: "For a fixed mass of gas at constant volume, the pressure is directly proportional to its absolute temperature: P ∝ T, or P₁/T₁ = P₂/T₂. Heating the gas while keeping the volume fixed makes particles move faster and strike the walls harder and more often, raising the pressure. This is why a sealed aerosol can or pressure cooker becomes more dangerous when heated. As with Charles' law, the temperature must be in kelvin for the proportion to hold.",
  },
  {
    heading: "Dalton's law of partial pressures",
    body: "Dalton's law states that in a mixture of gases that do not react, the total pressure is the sum of the individual partial pressures: P_total = p₁ + p₂ + p₃ + … . Each gas contributes the pressure it would exert if it alone occupied the container. Worked example: in a mixture, nitrogen exerts 60 kPa, oxygen 20 kPa and carbon dioxide 10 kPa, so the total pressure is 60 + 20 + 10 = 90 kPa. This law is used when collecting a gas over water, where the water vapour adds its own partial pressure.",
  },
  {
    heading: "Graham's law of diffusion",
    body: "Graham's law states that the rate of diffusion (or effusion) of a gas is inversely proportional to the square root of its molar mass: rate ∝ 1/√M. Lighter gases therefore diffuse faster than heavier ones. Worked example: compare hydrogen (M = 2) and oxygen (M = 32). Rate(H₂)/Rate(O₂) = √(32/2) = √16 = 4, so hydrogen diffuses four times as fast as oxygen. This explains why a helium balloon shrinks faster than an air-filled one.",
  },
  {
    heading: "Avogadro's law and molar gas volume",
    body: "Avogadro's law states that equal volumes of all gases, at the same temperature and pressure, contain the same number of molecules. One mole of any gas therefore occupies the same volume. At room temperature and pressure (r.t.p., ~25 °C and 1 atm) this molar gas volume is about 24 dm³; at standard temperature and pressure (s.t.p., 0 °C and 1 atm) it is about 22.4 dm³. This lets you convert between the volume of a gas and the number of moles.",
  },
  {
    heading: "The ideal gas equation PV = nRT",
    body: "Combining the gas laws gives the ideal gas equation PV = nRT, which links pressure P, volume V, number of moles n, the gas constant R and absolute temperature T. Use it to find any one quantity when the others are known. Worked example: find the volume of 0.50 mol of gas at 300 K and 100 kPa (R = 8.31 J mol⁻¹ K⁻¹). V = nRT/P = (0.50 × 8.31 × 300)/100 000 = 0.0125 m³ = 12.5 dm³. Always convert pressure to pascals and volume to m³ when using R = 8.31.",
  },
  {
    heading: "Units and temperature in gas calculations",
    body: "Getting the units right is the most common source of error in gas calculations. Temperature must always be in kelvin (add 273 to the Celsius value) because the laws are proportional to absolute temperature, not to °C. Pressure and volume must be in consistent units on both sides of an equation — if you use P in kPa and V in dm³ for P₁V₁ = P₂V₂ the units cancel, but for PV = nRT you need SI units (Pa and m³) with R = 8.31.",
  },
  {
    heading: "Ideal versus real gases",
    body: "An ideal gas is a model in which particles have zero size and no attractions between them, so PV = nRT is exact. Real gases behave ideally only at low pressure and high temperature, where the particles are far apart and move fast. They deviate near condensation (low temperature, high pressure), where the particles' own volume and their attractions can no longer be ignored — the measured PV then differs from nRT. This deviation is greatest for gases with strong intermolecular forces, such as ammonia or carbon dioxide.",
  },
  {
    heading: "The kinetic model explains the laws",
    body: "Every gas law can be explained by the kinetic molecular model. Boyle's law: smaller volume means more frequent wall collisions, so higher pressure. Charles' law: higher temperature means faster particles, so the gas must expand to keep the pressure constant. Graham's law: lighter particles move faster at the same temperature, so they diffuse more quickly. The model unifies the maths and the physical picture, which is exactly what exam questions ask you to do.",
  },
  {
    heading: "Worked example — combining the laws",
    body: "A gas occupies 1.0 dm³ at 2.0 atm and 273 K. What volume will it occupy at 1.0 atm and 546 K? Combine the laws as V₂ = V₁ × (P₁/P₂) × (T₂/T₁). Substituting: V₂ = 1.0 × (2.0/1.0) × (546/273) = 1.0 × 2 × 2 = 4.0 dm³. Halving the pressure doubles the volume, and doubling the absolute temperature doubles it again, giving a fourfold increase. This combined form is the practical version of the ideal gas equation for fixed-mass gas problems.",
  },
];
