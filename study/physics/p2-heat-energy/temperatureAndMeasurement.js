export default [
  {
    heading: "What temperature is",
    body: "Temperature is a measure of the degree of hotness or coldness of a body — it tells us which way heat will flow when two bodies are placed in contact. By the zeroth law of thermodynamics, if two bodies are each in thermal equilibrium with a third, they share the same temperature. Heat always flows spontaneously from the hotter body to the colder one until their temperatures equalise. Temperature is therefore a comparative, relative quantity, not an amount of energy. It is distinct from heat (the energy actually transferred), and is read with a thermometer.",
  },
  {
    heading: "Heat is not the same as temperature",
    body: "A large jug of warm water at 40 °C contains far more internal energy than a small red-hot nail at 600 °C, yet the nail has the higher temperature. Temperature governs the direction of flow; the quantity of thermal energy that can be transferred also depends on the mass and the material. This is why adding a cup of boiling water to a bath barely changes the bath's temperature. Confusing the two is a classic source of error in heat problems, so always ask: am I comparing 'how hot' (temperature) or 'how much energy' (heat)?",
  },
  {
    heading: "Thermometric properties",
    body: "Every thermometer works because some physical property of a material changes reproducibly with temperature. Common thermometric properties are the volume of a liquid (mercury, alcohol), the electrical resistance of a wire, the emf produced by two joined metals (thermocouple), the pressure of a fixed mass of gas at constant volume, and the colour of a glowing object. The property chosen must change smoothly and return to the same value at the same temperature, so the thermometer can be calibrated and read repeatedly.",
  },
  {
    heading: "Fixed points and graduation",
    body: "To put numbers on a temperature scale we choose two reproducible fixed points and divide the interval between them. On the Celsius scale the lower fixed point is the ice point (pure melting ice at 0 °C) and the upper is the steam point (steam from water boiling at standard atmospheric pressure, 100 °C). The interval is divided into 100 equal degrees, so a liquid-in-glass thermometer is graduated by marking these two levels and subdividing. Other scales use different fixed points, but the principle of two reference temperatures is universal.",
  },
  {
    heading: "Celsius and absolute (Kelvin) scales",
    body: "The Celsius scale places ice at 0 °C and steam at 100 °C. The absolute or thermodynamic scale uses the kelvin (K) as its unit, with absolute zero (−273 °C, where molecular motion theoretically stops) as its origin. The two are related by K = °C + 273 (more precisely 273.15). Because gas laws such as V/T = constant only hold when T is an absolute temperature, kelvin must be used in all gas-law calculations; converting a Celsius value to kelvin is an essential first step.",
  },
  {
    heading: "Liquid-in-glass thermometers",
    body: "These contain a thermometric liquid in a thin capillary joined to a bulb. Mercury is used where a wide range and a non-wetting, visible column are wanted; alcohol (dyed red) is used for low temperatures because it freezes below −100 °C whereas mercury freezes at −39 °C. The clinical thermometer has a constriction that lets the column rise but traps it so the reading holds after removal; the maximum–minimum thermometer records the highest and lowest temperatures reached using indices moved by a floating marker.",
  },
  {
    heading: "Constant-volume gas thermometer",
    body: "This is the most accurate thermometer and is used to define the thermodynamic temperature scale. A fixed mass of gas is kept at constant volume while its pressure is measured at the temperature of interest; pressure is proportional to absolute temperature, so T = 273.16 × (P / P_triple) at the triple point of water. Because the result is nearly independent of the gas chosen (in the limit of low pressure), it provides a standard against which other thermometers are calibrated, even though it is too bulky for everyday use.",
  },
  {
    heading: "Resistance and thermocouple thermometers",
    body: "A resistance thermometer measures the change in electrical resistance of a pure metal (platinum) or semiconductor with temperature; it is very sensitive, stable and good over a wide range, so it is used in laboratories and industry. A thermocouple joins two different metals and produces a small voltage (emf) that grows with the temperature difference between its junctions; it responds quickly and measures very high as well as very low temperatures. Both give an electrical output that can be logged by a computer, unlike a simple glass thermometer.",
  },
  {
    heading: "Optical pyrometer",
    body: "A pyrometer measures very high temperatures, such as those of a furnace or the Sun's surface, without touching the hot object. It compares the brightness or colour of the glowing body with that of a calibrated hot filament inside the instrument; when the two match, the temperature is read off. Because it works by radiation, it can measure objects that would destroy a contact thermometer, and is the only practical choice above about 1000 °C.",
  },
  {
    heading: "Worked example — scale conversions",
    body: "Convert 25 °C to kelvin: T = 25 + 273 = 298 K. Convert 373 K back to Celsius: θ = 373 − 273 = 100 °C, the steam point. A body at −40 °C is at 233 K. In every gas-law problem, first add 273 to any Celsius temperature to obtain kelvin, do the calculation, then convert back only if the question asks for °C. Forgetting this step is the single most common mistake in heat-energy questions.",
  },
  {
    heading: "Choosing and limiting a thermometer",
    body: "The right thermometer depends on the range, the needed precision and whether contact is possible. Alcohol suits freezers, mercury suits ordinary room and lab use up to about 300 °C, platinum resistance and thermocouples cover industrial ranges, and pyrometers cover furnaces. All have limits: a liquid thermometer bursts or gives false readings if taken beyond its range, and response is slowed by a large bulb or poor thermal contact. Matching the instrument to the job is part of good experimental design.",
  },
];
