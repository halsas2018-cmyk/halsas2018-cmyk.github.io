export default [
  {
    heading: "What the SI system is",
    body: "SI stands for the Système International d'Unités — the single agreed world standard for scientific measurement, adopted by scientists in every country so that results can be repeated and compared exactly. It is built from just seven base units, and every other unit you meet is derived by combining these. When a chemist in Lagos reports a mass in kilograms, that value means precisely the same thing to a chemist in Accra or London. This shared language is what makes chemistry a genuinely international science.",
  },
  {
    heading: "The seven base units",
    body: "Every measurable quantity traces back to one of seven base units: length in metres (m), mass in kilograms (kg), time in seconds (s), electric current in amperes (A), thermodynamic temperature in kelvin (K), amount of substance in moles (mol), and luminous intensity in candela (cd). The kilogram is the only base unit still defined by a physical artefact's mass equivalent rather than a fundamental constant, though modern definitions tie all seven to unchanging natural constants. Learn these seven by heart — they are the alphabet of every other unit in chemistry.",
  },
  {
    heading: "Length, mass, time and volume in the lab",
    body: "The quantities you measure most often are length, mass, time and volume. Length is measured with a ruler or metre rule (in metres, or cm/mm with prefixes); mass with a balance (in kilograms or grams); time with a stopclock or timer (seconds). Volume is a derived quantity — it is length cubed — and in the lab you usually measure it with a measuring cylinder, burette or pipette in cubic centimetres (cm³) or cubic decimetres (dm³), where 1 dm³ = 1 litre. Being fluent with these four is the foundation of every quantitative experiment.",
  },
  {
    heading: "Temperature: Celsius versus kelvin",
    body: "You will meet temperature in two scales. The Celsius scale (°C) sets water's freezing point at 0 °C and boiling point at 100 °C, which is convenient for the lab bench. The SI base unit is the kelvin (K), where 0 K is absolute zero — the coldest possible temperature, where particles have minimum energy. To convert, add 273: 25 °C = 298 K, and 0 K = −273 °C. A temperature difference of 1 °C equals a difference of 1 K, but the zero points differ, so you must use kelvin when a formula involves temperature directly (such as in gas-law calculations).",
  },
  {
    heading: "Derived units are built from bases",
    body: "Most quantities you calculate are derived by multiplying or dividing base units. Area is m², volume is m³, speed is m s⁻¹, density is kg m⁻³, and force is the newton (N = kg·m·s⁻²). Some derived units get their own names — the joule (J) for energy, the pascal (Pa) for pressure, the watt (W) for power. The crucial habit is to track units through every calculation: if the units cancel to give the expected unit, your algebra is almost certainly right; if they do not, your method has failed.",
  },
  {
    heading: "Scaling units with prefixes",
    body: "Prefixes rescale a unit by a power of ten so you can write very large or very small quantities without long strings of zeros. Common ones are mega- (10⁶), kilo- (10³), centi- (10⁻²), milli- (10⁻³), micro- (10⁻⁶) and nano- (10⁻⁹). So 1 km = 1000 m, 1 cm = 0.01 m, 1 mg = 0.001 g. In chemistry the mole uses these constantly: millimoles (mmol) and micromoles (µmol) describe tiny amounts. Always convert prefixed units back to the base unit before plugging them into an equation, or your answer will be off by a factor of ten.",
  },
  {
    heading: "Converting between units safely",
    body: "Unit conversion is where many marks are lost. The safe method is to multiply by a conversion factor written as a fraction equal to one (e.g. 1 kg / 1000 g) so the unwanted unit cancels. To convert 250 g to kg: 250 g × (1 kg / 1000 g) = 0.250 kg. Notice the gram cancels, leaving kilograms. Doing this step explicitly in your working prevents the classic slip of multiplying when you should divide, and it keeps the unit attached to the number at every stage of the problem.",
  },
  {
    heading: "Significant figures and units together",
    body: "A measured number carries both a value and a precision, expressed through significant figures — the digits you are certain of plus one estimated digit. When you report 2.54 g, the three figures signal the balance could resolve to hundredths of a gram. In a calculation the final answer must be rounded to match the LEAST precise measurement that went into it; you cannot create certainty that was never measured. A number written with no unit is meaningless, and a wrong unit almost always reveals a wrong method, so always carry the unit and the right number of figures together.",
  },
  {
    heading: "Scientific notation for extreme values",
    body: "Chemistry spans enormous and tiny numbers — Avogadro's number is 6.02 × 10²³ particles per mole, while an atomic radius is about 1 × 10⁻¹⁰ m. Scientific notation writes any value as a number between 1 and 10 multiplied by a power of ten, which makes the significant figures and the magnitude obvious at a glance. It also keeps arithmetic manageable and avoids miscounting zeros. You will use it constantly for molar masses, concentrations and equilibrium constants, so it must become second nature rather than a chore.",
  },
];
