export default [
  {
    heading: "Volume — the space a body occupies",
    body: "Volume is the amount of three-dimensional space a body takes up. Its SI unit is the cubic metre (m³), but in the lab you will more often use the cubic centimetre (cm³) or the litre (L), where 1 L = 1000 cm³ = 10⁻³ m³. For a regular solid you calculate volume from its shape — for example a rectangular block is V = length × breadth × height. For an irregular solid the volume is found by the method of displacement (see below), because no simple formula applies.",
  },
  {
    heading: "Derived units of volume",
    body: "Volume is a derived quantity: it comes from the base quantity length raised to the third power, so its dimension is L³. This is why the unit is a cube of a length unit — m³, cm³, or mm³. Because the units are cubic, scaling a length by 2 scales the volume by 2³ = 8, a fact that surprises students in the exam problems. Always keep the cube in your unit when substituting into density or pressure formulas.",
  },
  {
    heading: "Density — mass packed into a volume",
    body: "Density ρ (the Greek letter rho) is the mass per unit volume of a substance: ρ = m / V. Its SI unit is the kilogram per cubic metre (kg m⁻³), though g cm⁻³ is common in the lab (1 g cm⁻³ = 1000 kg m⁻³). Density is an intensive property — it does not depend on how much of the substance you have. Lead (about 11 300 kg m⁻³) is far denser than wood (about 600 kg m⁻³), which is why a small lead weight feels heavier than a large wooden block.",
  },
  {
    heading: "Why density is a useful identifying property",
    body: "Because density is fixed for a pure substance at a given temperature, measuring it can identify an unknown material or reveal impurities. A manufacturer checks that a batch of metal has the expected density, and a forensic scientist uses density to distinguish fake from real gold. Temperature matters: most substances expand when heated, so their density falls slightly. in the exam problems, assume density is constant unless the question states otherwise.",
  },
  {
    heading: "Relative density (specific gravity)",
    body: "Relative density (R.D.), also called specific gravity, is the ratio of the density of a substance to the density of water: R.D. = ρ_substance / ρ_water. It is a pure number with NO unit because the units cancel. Since water has density 1000 kg m⁻³ (or 1 g cm⁻³), you can convert: density in kg m⁻³ = R.D. × 1000, and density in g cm⁻³ = R.D. × 1. A substance with R.D. > 1 is denser than water and sinks; R.D. < 1 is less dense and floats.",
  },
  {
    heading: "Volume of an irregular solid by displacement",
    body: "To find the volume of an irregular stone, tie it to a thread and lower it into a measuring cylinder partly filled with water, noting the rise in the water level. The increase in volume reading equals the volume of the stone, because the stone pushes aside its own volume of water. This method relies on water being (for practical purposes) incompressible. Record the meniscus at eye level to avoid parallax error, and choose a cylinder whose range gives a clear, measurable rise.",
  },
  {
    heading: "Measuring the density of a solid",
    body: "Weigh the solid on a balance to get its mass m, then find its volume V by geometry (regular shape) or displacement (irregular shape). Substitute into ρ = m / V. Example: a stone of mass 54 g displaces 20 cm³ of water, so ρ = 54 / 20 = 2.7 g cm⁻³ = 2700 kg m⁻³, identifying it as aluminium. Report the unit and round to match the least precise measurement, usually two or three significant figures.",
  },
  {
    heading: "Measuring the density of a liquid",
    body: "For a liquid, use a clean dry measuring cylinder or a density (specific-gravity) bottle of known volume. Weigh the empty bottle (m₀), fill it with the liquid and weigh again (m₁); the liquid mass is m₁ − m₀ and its volume is the bottle's volume V. Then ρ = (m₁ − m₀) / V. The density bottle is preferred for accuracy because its volume is precisely known and far smaller errors arise than with a graduated cylinder.",
  },
  {
    heading: "Relative density of a liquid by the bottle method",
    body: "Weigh a density bottle empty (m₀), full of the liquid (m₁), and full of water (m₂). The mass of liquid is m₁ − m₀ and the mass of an equal volume of water is m₂ − m₀, so R.D. = (m₁ − m₀) / (m₂ − m₀). The bottle's volume cancels, so you never need to know it. This is the standard, most reliable school method and appears frequently in practical exam questions.",
  },
  {
    heading: "Worked example — density of an irregular solid",
    body: "A piece of metal has mass 237 g. When suspended in water it displaces 30 cm³. Its density is ρ = m / V = 237 / 30 = 7.9 g cm⁻³ = 7900 kg m⁻³, close to iron. Note we used cm³ so the answer came out in g cm⁻³, then multiplied by 1000 to convert to SI units. Always state which unit system you are using before you calculate.",
  },
  {
    heading: "Worked example — relative density of a liquid",
    body: "A density bottle has mass 20.0 g empty, 45.0 g full of oil, and 44.0 g full of water. Mass of oil = 25.0 g, mass of equal water = 24.0 g, so R.D. of oil = 25.0 / 24.0 = 1.04. The oil is slightly denser than water. Its density is 1.04 × 1000 = 1040 kg m⁻³. Because the calculation is a ratio, the bottle volume need not be known.",
  },
  {
    heading: "Common mistakes to avoid",
    body: "Students often forget to convert units before substituting: mixing cm³ with m³ gives density wrong by a factor of a million. Another error is confusing mass and weight — density uses mass, not the force of gravity. Finally, relative density has no unit, so writing '1.04 g/cm³' for an R.D. is a contradiction; that value is a density, not a relative density.",
  },
];
