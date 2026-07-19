export default [
  {
    heading: "Ranking the media by speed",
    body: "Sound travels fastest in solids, next fastest in liquids, and slowest in gases. Typical values are about 5000 m/s in steel, 340 m/s in air, and around 1500 m/s in water. Useful exam figures to remember are 330–340 m/s in air at room temperature, ~1500 m/s in water, and several thousand m/s in common metals such as steel and aluminium.",
  },
  {
    heading: "Why solids transmit fastest",
    body: "The speed depends on the medium's elastic modulus divided by its density, v = √(E/ρ). Solids are both stiff (large E) and their particles are tightly bound, so a displacement is passed on almost immediately to the next particle. Gases have a very small modulus because they compress easily, so even though they are light the ratio E/ρ ends up small and the speed is low.",
  },
  {
    heading: "Temperature raises the speed in a gas",
    body: "In air the speed increases by about 0.6 m/s for every 1 °C rise in temperature. At 0 °C sound travels about 331 m/s; at 20 °C it is about 343 m/s; at 30 °C about 349 m/s. A useful approximation is v ≈ 331 + 0.6T, where T is in °C. Hotter air has faster-moving molecules that hand the disturbance on more quickly.",
  },
  {
    heading: "Pressure and humidity effects",
    body: "For an ideal gas at fixed temperature, changing the pressure changes the density in the same proportion, so the ratio P/ρ (and hence v) is unchanged — sound speed in air is essentially independent of ordinary pressure changes. Humidity slightly increases the speed because water vapour is lighter than the nitrogen and oxygen it partly replaces, lowering the average density of the air.",
  },
  {
    heading: "The elastic-modulus formula",
    body: "In general v = √(E/ρ), where E is the appropriate elastic modulus and ρ the density. For a gas the relevant modulus is the adiabatic bulk modulus γP, giving v = √(γP/ρ). In a solid rod the modulus is Young's modulus E_Y, giving v = √(E_Y/ρ). All these forms say the same thing: stiff-and-light media carry sound quickly, soft-and-heavy media carry it slowly.",
  },
  {
    heading: "Laplace's correction explained",
    body: "Newton's original v = √(P/ρ) predicted 280 m/s in air, well below the measured 332 m/s. Laplace realised a sound wave compresses and rarefies the gas so rapidly that no heat flows in or out — the process is adiabatic, not isothermal. Using the adiabatic bulk modulus γP (γ = 1.4 for air) raises the predicted speed to √1.4 × 280 ≈ 332 m/s, matching experiment.",
  },
  {
    heading: "Worked example — speed at 30 °C",
    body: "Using v ≈ 331 + 0.6T, the speed of sound in air at 30 °C is v = 331 + 0.6 × 30 = 331 + 18 = 349 m/s. If a lightning flash is seen and the thunder is heard 3 s later, the storm is about d = v·t = 349 × 3 ≈ 1047 m, or roughly 1.0 km away. This shows how the temperature-corrected speed gives a realistic distance estimate.",
  },
  {
    heading: "Practical note on measuring v",
    body: "Because the speed in air is sensitive to temperature, any experiment to measure it (such as a resonance tube) must record the air temperature and apply v ≈ 331 + 0.6T. Neglecting the temperature correction is a common source of error and can make a measured value look several percent too low or too high, so always state the temperature with your result.",
  },
];
