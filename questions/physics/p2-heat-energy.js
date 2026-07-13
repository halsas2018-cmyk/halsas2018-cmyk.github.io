// physics — Heat Energy
const questions = [
  {
    question: "Temperature is a measure of the",
    options: [
      "A. total heat in a body",
      "B. degree of hotness or coldness of a body",
      "C. mass of a body",
      "D. volume of a body"
    ],
    answer: "B",
    explanation: "Temperature measures how hot or cold a body is, not the total heat content.",
    subtopic: "Temperature & measurement"
  },
  {
    question: "The SI unit of temperature is the",
    options: [
      "A. degree Celsius",
      "B. kelvin",
      "C. joule",
      "D. calorie"
    ],
    answer: "B",
    explanation: "The kelvin (K) is the SI base unit of thermodynamic temperature.",
    subtopic: "Temperature & measurement"
  },
  {
    question: "The instrument used for measuring temperature is the",
    options: [
      "A. barometer",
      "B. thermometer",
      "C. hydrometer",
      "D. manometer"
    ],
    answer: "B",
    explanation: "A thermometer measures temperature.",
    subtopic: "Temperature & measurement"
  },
  {
    question: "The ice point on the Celsius scale is",
    options: [
      "A. 0 °C",
      "B. 100 °C",
      "C. 32 °C",
      "D. 273 °C"
    ],
    answer: "A",
    explanation: "On the Celsius scale the ice point (melting ice) is 0 °C.",
    subtopic: "Temperature & measurement"
  },
  {
    question: "The steam point on the Celsius scale is",
    options: [
      "A. 0 °C",
      "B. 100 °C",
      "C. 50 °C",
      "D. 212 °C"
    ],
    answer: "B",
    explanation: "On the Celsius scale the steam point (boiling water at 1 atm) is 100 °C.",
    subtopic: "Temperature & measurement"
  },
  {
    question: "To convert 27 °C to kelvin, the value is",
    options: [
      "A. 27 K",
      "B. 300 K",
      "C. 246 K",
      "D. 327 K"
    ],
    answer: "B",
    explanation: "K = °C + 273, so 27 + 273 = 300 K.",
    subtopic: "Temperature & measurement"
  },
  {
    question: "A temperature of 373 K corresponds to",
    options: [
      "A. 100 °C",
      "B. 0 °C",
      "C. 273 °C",
      "D. 646 °C"
    ],
    answer: "A",
    explanation: "°C = K - 273, so 373 - 273 = 100 °C.",
    subtopic: "Temperature & measurement"
  },
  {
    question: "Mercury is preferred in thermometers because it",
    options: [
      "A. is colourful only",
      "B. expands uniformly and is a good conductor",
      "C. freezes at high temperature",
      "D. does not conduct heat"
    ],
    answer: "B",
    explanation: "Mercury expands fairly uniformly with temperature and conducts heat well, making it a good thermometric liquid.",
    subtopic: "Temperature & measurement"
  },
  {
    question: "The lower fixed point of a thermometer is the",
    options: [
      "A. boiling point of water",
      "B. melting point of pure ice",
      "C. room temperature",
      "D. body temperature"
    ],
    answer: "B",
    explanation: "The lower fixed point is the temperature of pure melting ice (0 °C).",
    subtopic: "Temperature & measurement"
  },
  {
    question: "Clinical thermometers usually measure temperatures in the range",
    options: [
      "A. -10 °C to 110 °C",
      "B. 35 °C to 42 °C",
      "C. 0 °C to 100 °C",
      "D. 100 °C to 200 °C"
    ],
    answer: "B",
    explanation: "Clinical thermometers are designed for human body temperature, roughly 35–42 °C.",
    subtopic: "Temperature & measurement"
  },
  {
    question: "One effect of heating a substance is that it may",
    options: [
      "A. lose mass only",
      "B. change its state",
      "C. become colder",
      "D. stop conducting"
    ],
    answer: "B",
    explanation: "Heating can cause a change of state, e.g. ice melting to water.",
    subtopic: "Effects of heat"
  },
  {
    question: "When a solid is heated, it may",
    options: [
      "A. melt",
      "B. freeze",
      "C. condense",
      "D. sublimate only downward"
    ],
    answer: "A",
    explanation: "Sufficient heating raises a solid to its melting point and it melts.",
    subtopic: "Effects of heat"
  },
  {
    question: "Heating a liquid to its boiling point causes it to",
    options: [
      "A. freeze",
      "B. boil and vaporise",
      "C. condense",
      "D. solidify"
    ],
    answer: "B",
    explanation: "At the boiling point a liquid changes to vapour (boils).",
    subtopic: "Effects of heat"
  },
  {
    question: "Heat supplied to a substance during a change of state is used to",
    options: [
      "A. raise its temperature",
      "B. overcome intermolecular forces, not raise temperature",
      "C. lower its temperature",
      "D. reduce its mass"
    ],
    answer: "B",
    explanation: "During melting/boiling, the heat (latent) breaks bonds; temperature stays constant.",
    subtopic: "Effects of heat"
  },
  {
    question: "A bimetallic strip bends when heated because the two metals have different",
    options: [
      "A. densities",
      "B. coefficients of expansion",
      "C. colours",
      "D. melting points only"
    ],
    answer: "B",
    explanation: "Different expansion rates cause the strip to bend when heated; this is used in thermostats.",
    subtopic: "Effects of heat"
  },
  {
    question: "Which of the following is NOT an effect of heat?",
    options: [
      "A. Expansion",
      "B. Change of state",
      "C. Increase in temperature",
      "D. Decrease in mass"
    ],
    answer: "D",
    explanation: "Heating does not reduce the mass of a substance; the others are genuine effects of heat.",
    subtopic: "Effects of heat"
  },
  {
    question: "Thermal expansion is the tendency of matter to",
    options: [
      "A. contract on heating",
      "B. change in volume with temperature",
      "C. lose heat",
      "D. become denser always"
    ],
    answer: "B",
    explanation: "Most substances expand (increase in volume) when heated.",
    subtopic: "Thermal expansion"
  },
  {
    question: "Linear expansivity α is defined as the fractional change in length per",
    options: [
      "A. unit mass",
      "B. unit rise in temperature",
      "C. unit volume",
      "D. unit pressure"
    ],
    answer: "B",
    explanation: "Linear expansivity α = (ΔL/L)/Δθ, the fractional length change per degree temperature rise.",
    subtopic: "Thermal expansion"
  },
  {
    question: "A metal rod of length 2 m is heated from 20 °C to 70 °C. If α = 1.2×10⁻⁵ K⁻¹, the expansion is",
    options: [
      "A. 1.2×10⁻³ m",
      "B. 2.4×10⁻³ m",
      "C. 1.2×10⁻⁵ m",
      "D. 0.12 m"
    ],
    answer: "A",
    explanation: "ΔL = LαΔθ = 2 × 1.2×10⁻⁵ × 50 = 1.2×10⁻³ m.",
    subtopic: "Thermal expansion"
  },
  {
    question: "Gaps are left between railway tracks to allow for",
    options: [
      "A. contraction only in winter",
      "B. expansion in hot weather",
      "C. decoration",
      "D. easier laying"
    ],
    answer: "B",
    explanation: "Expansion gaps prevent buckling when the rails heat and expand.",
    subtopic: "Thermal expansion"
  },
  {
    question: "Which of the following expands most when heated?",
    options: [
      "A. Solids",
      "B. Liquids",
      "C. Gases",
      "D. They expand equally"
    ],
    answer: "C",
    explanation: "For the same temperature rise, gases expand much more than liquids and solids.",
    subtopic: "Thermal expansion"
  },
  {
    question: "A mercury-in-glass thermometer works because mercury",
    options: [
      "A. contracts on heating",
      "B. expands on heating",
      "C. changes colour",
      "D. evaporates in the tube"
    ],
    answer: "B",
    explanation: "Mercury expands when heated, rising in the capillary tube to indicate temperature.",
    subtopic: "Thermal expansion"
  },
  {
    question: "The coefficient of volume expansion of a gas at constant pressure is approximately",
    options: [
      "A. 1/273 K⁻¹",
      "B. 1 K⁻¹",
      "C. 273 K⁻¹",
      "D. 0 K⁻¹"
    ],
    answer: "A",
    explanation: "At constant pressure, gases expand by about 1/273 of their volume per kelvin (Charles's law).",
    subtopic: "Thermal expansion"
  },
  {
    question: "A 10 m long iron pipe (α = 1.0×10⁻⁵ K⁻¹) is heated by 30 K. Its increase in length is",
    options: [
      "A. 3×10⁻³ m",
      "B. 3×10⁻⁴ m",
      "C. 3×10⁻⁵ m",
      "D. 0.3 m"
    ],
    answer: "A",
    explanation: "ΔL = 10 × 1.0×10⁻⁵ × 30 = 3×10⁻³ m.",
    subtopic: "Thermal expansion"
  },
  {
    question: "Heat can be transferred by conduction, convection and",
    options: [
      "A. radiation",
      "B. expansion",
      "C. evaporation",
      "D. condensation"
    ],
    answer: "A",
    explanation: "The three modes of heat transfer are conduction, convection and radiation.",
    subtopic: "Heat transfer"
  },
  {
    question: "Conduction of heat occurs mainly in",
    options: [
      "A. liquids only",
      "B. gases only",
      "C. solids (especially metals)",
      "D. a vacuum only"
    ],
    answer: "C",
    explanation: "Conduction is most effective in solids, particularly metals with free electrons.",
    subtopic: "Heat transfer"
  },
  {
    question: "Convection is the transfer of heat by the movement of",
    options: [
      "A. electrons",
      "B. fluids (liquids and gases)",
      "C. radiation waves",
      "D. solids"
    ],
    answer: "B",
    explanation: "Convection occurs when heated fluid rises and cooler fluid sinks, carrying heat.",
    subtopic: "Heat transfer"
  },
  {
    question: "Radiation transfers heat by",
    options: [
      "A. matter movement",
      "B. electromagnetic waves requiring no medium",
      "C. electron flow",
      "D. sound waves"
    ],
    answer: "B",
    explanation: "Radiation is heat transfer via electromagnetic waves and needs no material medium.",
    subtopic: "Heat transfer"
  },
  {
    question: "A shiny, silvery surface is a good",
    options: [
      "A. absorber of radiation",
      "B. reflector and poor absorber of radiation",
      "C. conductor only",
      "D. convecter"
    ],
    answer: "B",
    explanation: "Bright polished surfaces reflect radiation and absorb poorly; dark surfaces absorb well.",
    subtopic: "Heat transfer"
  },
  {
    question: "The vacuum flask minimises heat transfer by",
    options: [
      "A. conduction, convection and radiation",
      "B. conduction only",
      "C. radiation only",
      "D. none of these"
    ],
    answer: "A",
    explanation: "A vacuum flask reduces all three modes: vacuum stops conduction/convection, silvering reduces radiation.",
    subtopic: "Heat transfer"
  },
  {
    question: "Land and sea breezes are caused mainly by",
    options: [
      "A. conduction",
      "B. convection",
      "C. radiation only",
      "D. expansion of solids"
    ],
    answer: "B",
    explanation: "Differential heating of land and sea sets up convective air circulation (breezes).",
    subtopic: "Heat transfer"
  },
  {
    question: "Which of these is the poorest conductor of heat?",
    options: [
      "A. Copper",
      "B. Aluminium",
      "C. Wood",
      "D. Iron"
    ],
    answer: "C",
    explanation: "Wood is a poor conductor (good insulator) compared with metals.",
    subtopic: "Heat transfer"
  },
  {
    question: "Boyle's law states that for a fixed mass of gas at constant temperature, pressure is",
    options: [
      "A. directly proportional to volume",
      "B. inversely proportional to volume",
      "C. independent of volume",
      "D. proportional to temperature"
    ],
    answer: "B",
    explanation: "Boyle's law: PV = constant, so P ∝ 1/V at constant temperature.",
    subtopic: "Gas laws"
  },
  {
    question: "A gas has volume 4 L at pressure 2 atm. At constant temperature, if pressure becomes 8 atm, the volume is",
    options: [
      "A. 1 L",
      "B. 8 L",
      "C. 16 L",
      "D. 2 L"
    ],
    answer: "A",
    explanation: "PV = constant → V₂ = P₁V₁/P₂ = 2×4/8 = 1 L.",
    subtopic: "Gas laws"
  },
  {
    question: "Charles's law states that at constant pressure, the volume of a fixed mass of gas is proportional to its",
    options: [
      "A. pressure",
      "B. absolute temperature",
      "C. mass",
      "D. density"
    ],
    answer: "B",
    explanation: "Charles's law: V ∝ T (in kelvin) at constant pressure.",
    subtopic: "Gas laws"
  },
  {
    question: "A gas occupies 3 L at 300 K. At constant pressure, its volume at 600 K is",
    options: [
      "A. 1.5 L",
      "B. 6 L",
      "C. 3 L",
      "D. 12 L"
    ],
    answer: "B",
    explanation: "V₂/V₁ = T₂/T₁ = 600/300 = 2 → V₂ = 6 L.",
    subtopic: "Gas laws"
  },
  {
    question: "The pressure law states that at constant volume, pressure is proportional to",
    options: [
      "A. Celsius temperature",
      "B. absolute (kelvin) temperature",
      "C. volume",
      "D. mass"
    ],
    answer: "B",
    explanation: "Pressure law: P ∝ T (kelvin) at constant volume.",
    subtopic: "Gas laws"
  },
  {
    question: "A gas at 273 K and 1 atm is heated to 546 K at constant volume. Its new pressure is",
    options: [
      "A. 0.5 atm",
      "B. 2 atm",
      "C. 1 atm",
      "D. 4 atm"
    ],
    answer: "B",
    explanation: "P₂/P₁ = T₂/T₁ = 546/273 = 2 → P₂ = 2 atm.",
    subtopic: "Gas laws"
  },
  {
    question: "The ideal gas equation is",
    options: [
      "A. PV = nRT",
      "B. P = nV",
      "C. PV = mRT",
      "D. P + V = nR"
    ],
    answer: "A",
    explanation: "For an ideal gas, PV = nRT where n is the number of moles and R the gas constant.",
    subtopic: "Gas laws"
  },
  {
    question: "For 1 mole of an ideal gas at STP (T = 273 K, P = 1.0×10⁵ Pa), using R = 8.3 J/mol·K, the volume is approximately",
    options: [
      "A. 0.0224 m³",
      "B. 22.4 m³",
      "C. 2.24 m³",
      "D. 0.224 m³"
    ],
    answer: "A",
    explanation: "V = nRT/P = 1×8.3×273 / 1.0×10⁵ ≈ 0.0227 m³ ≈ 0.0224 m³ (22.4 L).",
    subtopic: "Gas laws"
  },
  {
    question: "Specific heat capacity is defined as the heat required to raise the temperature of",
    options: [
      "A. 1 kg of a substance by 1 K",
      "B. 1 g of a substance by 1 °C only when boiling",
      "C. the whole body by 1 K",
      "D. 1 kg by 100 K"
    ],
    answer: "A",
    explanation: "Specific heat capacity c is the heat needed to raise 1 kg of a substance by 1 K (or 1 °C).",
    subtopic: "Measurement of heat"
  },
  {
    question: "The unit of specific heat capacity is",
    options: [
      "A. J/kg·K",
      "B. J/K",
      "C. kg·K/J",
      "D. W"
    ],
    answer: "A",
    explanation: "Specific heat capacity has units J kg⁻¹ K⁻¹.",
    subtopic: "Measurement of heat"
  },
  {
    question: "The heat required to raise the temperature of mass m of a substance of specific heat c by Δθ is",
    options: [
      "A. mc",
      "B. mcΔθ",
      "C. mΔθ/c",
      "D. cΔθ"
    ],
    answer: "B",
    explanation: "Heat Q = mcΔθ, where c is the specific heat capacity.",
    subtopic: "Measurement of heat"
  },
  {
    question: "How much heat is needed to raise 2 kg of water (c = 4200 J/kg·K) by 10 K?",
    options: [
      "A. 4200 J",
      "B. 84000 J",
      "C. 840 J",
      "D. 42000 J"
    ],
    answer: "B",
    explanation: "Q = mcΔθ = 2 × 4200 × 10 = 84000 J.",
    subtopic: "Measurement of heat"
  },
  {
    question: "A 0.5 kg piece of metal (c = 400 J/kg·K) cools by 20 K. Heat lost is",
    options: [
      "A. 400 J",
      "B. 4000 J",
      "C. 200 J",
      "D. 8000 J"
    ],
    answer: "B",
    explanation: "Q = mcΔθ = 0.5 × 400 × 20 = 4000 J.",
    subtopic: "Measurement of heat"
  },
  {
    question: "A calorimeter is used to measure",
    options: [
      "A. pressure",
      "B. heat exchange / specific heat",
      "C. volume of gas",
      "D. temperature only"
    ],
    answer: "B",
    explanation: "A calorimeter measures heat transferred in thermal processes.",
    subtopic: "Measurement of heat"
  },
  {
    question: "The principle of mixtures states that in an insulated calorimeter, heat lost by hot bodies equals",
    options: [
      "A. heat gained by cold bodies",
      "B. total initial heat",
      "C. heat lost to surroundings",
      "D. zero always"
    ],
    answer: "A",
    explanation: "Assuming no heat loss, heat lost by hot substances = heat gained by cold ones.",
    subtopic: "Measurement of heat"
  },
  {
    question: "Latent heat is the heat required to change the state of a substance",
    options: [
      "A. without change in temperature",
      "B. with a rise in temperature",
      "C. with a fall in temperature",
      "D. without change in mass"
    ],
    answer: "A",
    explanation: "Latent heat is absorbed or released during a change of state at constant temperature.",
    subtopic: "Latent heat"
  },
  {
    question: "The specific latent heat of fusion is the heat needed to melt",
    options: [
      "A. 1 kg of a solid at its melting point",
      "B. 1 kg of a liquid at its boiling point",
      "C. 1 kg of gas",
      "D. any mass by 1 K"
    ],
    answer: "A",
    explanation: "It is the heat required to melt 1 kg of a solid at its melting point without temperature change.",
    subtopic: "Latent heat"
  },
  {
    question: "Heat needed to melt 2 kg of ice (L_f = 3.34×10⁵ J/kg) is",
    options: [
      "A. 6.68×10⁵ J",
      "B. 1.67×10⁵ J",
      "C. 3.34×10⁵ J",
      "D. 6.68×10³ J"
    ],
    answer: "A",
    explanation: "Q = mL = 2 × 3.34×10⁵ = 6.68×10⁵ J.",
    subtopic: "Latent heat"
  },
  {
    question: "The specific latent heat of vaporisation is the heat needed to boil",
    options: [
      "A. 1 kg of liquid at its boiling point into vapour",
      "B. 1 kg of solid at melting point",
      "C. 1 kg of gas",
      "D. 1 kg by 1 K"
    ],
    answer: "A",
    explanation: "It is the heat required to vaporise 1 kg of liquid at its boiling point.",
    subtopic: "Latent heat"
  },
  {
    question: "Heat required to vaporise 0.5 kg of water (L_v = 2.26×10⁶ J/kg) is",
    options: [
      "A. 1.13×10⁶ J",
      "B. 4.52×10⁶ J",
      "C. 2.26×10⁶ J",
      "D. 1.13×10³ J"
    ],
    answer: "A",
    explanation: "Q = mL = 0.5 × 2.26×10⁶ = 1.13×10⁶ J.",
    subtopic: "Latent heat"
  },
  {
    question: "During melting, the temperature of a pure substance",
    options: [
      "A. rises steadily",
      "B. remains constant",
      "C. falls steadily",
      "D. doubles"
    ],
    answer: "B",
    explanation: "At the melting point, added heat goes into latent heat, so temperature stays constant.",
    subtopic: "Latent heat"
  },
  {
    question: "A vapour is a gas formed by",
    options: [
      "A. boiling or evaporation of a liquid",
      "B. melting a solid",
      "C. sublimation of a gas",
      "D. freezing a liquid"
    ],
    answer: "A",
    explanation: "A vapour is the gaseous form of a substance that is normally liquid or solid at room conditions, produced by evaporation or boiling.",
    subtopic: "Vapour & vapour pressure"
  },
  {
    question: "Vapour pressure of a liquid depends mainly on its",
    options: [
      "A. volume",
      "B. temperature",
      "C. mass",
      "D. colour"
    ],
    answer: "B",
    explanation: "Vapour pressure increases with temperature as more molecules escape the liquid.",
    subtopic: "Vapour & vapour pressure"
  },
  {
    question: "A liquid boils when its vapour pressure equals the",
    options: [
      "A. atmospheric pressure",
      "B. volume of the container",
      "C. mass of the liquid",
      "D. temperature in Celsius"
    ],
    answer: "A",
    explanation: "Boiling occurs when the vapour pressure equals the external (atmospheric) pressure.",
    subtopic: "Vapour & vapour pressure"
  },
  {
    question: "At higher altitudes, water boils at a temperature",
    options: [
      "A. above 100 °C",
      "B. below 100 °C",
      "C. exactly 100 °C",
      "D. of 0 °C"
    ],
    answer: "B",
    explanation: "Atmospheric pressure is lower at high altitude, so water boils below 100 °C.",
    subtopic: "Vapour & vapour pressure"
  },
  {
    question: "Evaporation causes cooling because",
    options: [
      "A. the fastest molecules remain",
      "B. the fastest molecules escape, leaving slower (cooler) ones",
      "C. heat is added",
      "D. pressure increases"
    ],
    answer: "B",
    explanation: "Evaporation removes the highest-energy molecules, lowering the average kinetic energy (temperature) of the remainder.",
    subtopic: "Vapour & vapour pressure"
  },
  {
    question: "Humidity is a measure of the amount of",
    options: [
      "A. water vapour in the air",
      "B. oxygen in the air",
      "C. heat in the air",
      "D. dust in the air"
    ],
    answer: "A",
    explanation: "Humidity describes the water vapour content of the air.",
    subtopic: "Humidity"
  },
  {
    question: "Relative humidity is the ratio of the actual vapour pressure to the",
    options: [
      "A. saturation vapour pressure at that temperature",
      "B. atmospheric pressure",
      "C. total air pressure",
      "D. vapour pressure of ice"
    ],
    answer: "A",
    explanation: "Relative humidity = (actual vapour pressure / saturation vapour pressure) × 100%.",
    subtopic: "Humidity"
  },
  {
    question: "A hygrometer is an instrument used to measure",
    options: [
      "A. humidity",
      "B. temperature",
      "C. pressure",
      "D. volume"
    ],
    answer: "A",
    explanation: "A hygrometer measures the humidity (moisture content) of the air.",
    subtopic: "Humidity"
  },
  {
    question: "On a hot, humid day, sweat evaporates",
    options: [
      "A. quickly, cooling the body",
      "B. slowly because the air is already moist",
      "C. not at all since it is hot",
      "D. into ice"
    ],
    answer: "B",
    explanation: "High humidity means air is near saturation, so evaporation (and cooling) is slower.",
    subtopic: "Humidity"
  },
  {
    question: "Dew forms when air is cooled to its",
    options: [
      "A. boiling point",
      "B. dew point (saturation temperature)",
      "C. melting point",
      "D. freezing point of air"
    ],
    answer: "B",
    explanation: "When air cools to the dew point, it becomes saturated and water condenses as dew.",
    subtopic: "Humidity"
  },
  {
    question: "A 1 kg iron block (c = 450 J/kg·K) at 100 °C is dropped into 1 kg water (c = 4200 J/kg·K) at 20 °C in an insulated calorimeter. The final temperature is closest to",
    options: [
      "A. 20 °C",
      "B. 27.7 °C",
      "C. 60 °C",
      "D. 100 °C"
    ],
    answer: "B",
    explanation: "Heat lost by iron = 450×1×(100-T); gained by water = 4200×1×(T-20). Equating: 45000-450T = 4200T-84000 → 4650T = 129000 → T ≈ 27.7 °C. The large specific heat of water keeps the rise small.",
    subtopic: "Measurement of heat"
  }
];

module.exports = questions;
