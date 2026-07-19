export default [
  {
    heading: "What a measurement really is",
    body: "A measurement is a comparison. Every time you measure a length, a mass, or a time you are asking 'how many times does a chosen standard fit into this quantity?' That standard is the unit (the metre, the kilogram, the second). A complete measurement always has two inseparable parts: a numerical value AND a unit. Writing '5' on its own tells nobody anything; '5.0 cm' says the length is five centimetres. Dropping the unit is one of the most common errors in practical work and it makes a result meaningless.",
  },
  {
    heading: "Why we need agreed standards (SI)",
    body: "Science is international, so every country agrees to use the same base units — the SI (Système International) system. The seven base quantities are length (metre, m), mass (kilogram, kg), time (second, s), electric current (ampere, A), temperature (kelvin, K), amount of substance (mole, mol) and luminous intensity (candela, cd). Every other unit you meet (the newton, the joule, the pascal) is built by combining these base units. Using one shared system means a result obtained in Lagos means exactly the same thing in London or Accra.",
  },
  {
    heading: "Accuracy vs precision — the key distinction",
    body: "These two words are not interchangeable. Accuracy describes how close your measured value is to the TRUE value; precision describes how close your repeated measurements are to EACH OTHER. Aarcher who hits the same spot on the target every time is precise; if that spot is the bullseye they are also accurate. A balance can be very precise (it repeats the same reading) yet inaccurate (the reading is offset because it was not tared). When you evaluate an experiment you must comment on BOTH, and they are judged independently.",
  },
  {
    heading: "Errors: random and systematic",
    body: "No measurement is perfect, and the gap between your value and the true value is the error. Systematic errors shift every reading the same way — a zero error on a balance, parallax from reading a meniscus at the wrong eye level, or a thermometer that reads 1 °C high. They reduce accuracy and cannot be cured by repeating. Random errors vary unpredictably — tiny air currents, human reaction time, electrical noise. They reduce precision but are reduced by taking the MEAN of many readings. Good experimental technique attacks both: calibrate to remove systematic error, replicate to average out random error.",
  },
  {
    heading: "Uncertainty and how to estimate it",
    body: "Uncertainty is a honest statement of how far a reading might be from the truth. For a single analogue reading (a scale you read by eye) the uncertainty is about half the smallest division — if a ruler is marked in millimetres, you can confidently judge to ±0.5 mm. For a digital instrument the uncertainty is about ±1 in the last displayed digit. When readings are combined in a calculation the uncertainties combine too, so the final answer is only as trustworthy as its weakest input.",
  },
  {
    heading: "Significant figures — what they mean",
    body: "Significant figures are the digits in a number that actually carry meaning: all the digits you are certain of, plus ONE extra digit that you estimated. The rules are: keep every non-zero digit; keep zeros trapped between non-zero digits (1005 has four); keep trailing zeros AFTER a decimal point (2.0 has two, 2.00 has three). Leading zeros only mark the decimal place and are NEVER significant — 0.0042 has just two significant figures. The number of figures you write is a signal of how precisely you measured.",
  },
  {
    heading: "Why final answers must respect sig-figs",
    body: "A calculation cannot create certainty that was not in the measurements. If you weigh 2.54 g (three figures) and divide by 1.1 g (two figures), the answer cannot honestly claim three figures — it must be rounded to two. Rounding too late (copying all ten digits a calculator shows) invents false precision; rounding too early accumulates error. The rule of thumb: keep extra figures during the working, then round the FINAL result to match the LEAST precise measurement that fed into it.",
  },
  {
    heading: "Scientific notation for very large or small numbers",
    body: "Writing 0.000000042 m or 602 000 000 000 000 000 000 000 atoms is clumsy and error-prone. Scientific notation expresses a number as a value between 1 and 10 multiplied by a power of ten: 4.2 × 10⁻⁸ m and 6.02 × 10²³ atoms. This makes the significant figures obvious (both examples show two) and keeps the magnitude readable. In chemistry and physics you will use it constantly for atomic masses, concentrations and cosmic distances.",
  },
  {
    heading: "Estimation and order-of-magnitude thinking",
    body: "Before you calculate, a quick mental estimate protects you from absurd answers. If you expect the mass of a beaker to be tens of grams and your calculation returns 3 kg, something is wrong. Order-of-magnitude reasoning means asking 'is this about 10, 100, or 1000?' — it catches unit-conversion slips (using cm instead of m), sign errors and misplaced decimal points long before they become a graded mistake. Train yourself to predict the rough size of every answer first.",
  },
  {
    heading: "Worked example — sig-figs in a density calculation",
    body: "A student measures the mass of a stone as 24.6 g (three sig-figs) and its volume by displacement as 9.2 cm³ (two sig-figs). Density = mass ÷ volume = 24.6 ÷ 9.2 = 2.6739… g/cm³. Because the volume has only two significant figures — the least precise measurement — the final answer is reported as 2.7 g/cm³. Notice we kept the extra digits while dividing, then rounded only at the end, and the unit travels with the number throughout.",
  },
  {
    heading: "Recording results like a scientist",
    body: "Good laboratory records are written so someone else could repeat your work exactly. That means: the unit on every reading, the instrument and its uncertainty noted, raw data in a tidy table with clear headings, and calculations shown (not just the final number). A result with no unit, no uncertainty and no shown working is not science — it is a guess dressed up as a measurement. The habits you build here are the same ones examiners and university labs expect.",
  },
];
