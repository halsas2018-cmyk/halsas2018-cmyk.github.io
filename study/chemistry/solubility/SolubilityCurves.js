export default [
  {
    heading: "What a solubility curve shows",
    body: "A solubility curve is a graph of the solubility of a substance (usually in g per 100 g water) plotted on the y-axis against temperature on the x-axis. Each point on a curve marks the exact saturation limit at that temperature: any amount below the curve is unsaturated, any point on it is saturated. Drawing curves for several salts on the same axes lets you compare them directly. The curve is built from experimental measurements at many temperatures, not from theory alone.",
  },
  {
    heading: "How the curve is plotted",
    body: "To draw a solubility curve you measure, for several temperatures, the mass of solute that just saturates a fixed mass of water (often 100 g). You then plot each (temperature, solubility) pair and join the points with a smooth line. For example, if 13 g, 32 g and 110 g of KNO₃ saturate 100 g water at 0 °C, 20 °C and 60 °C, those three points define part of its rising curve. More points give a more reliable shape, and different salts give very different curves.",
  },
  {
    heading: "Reading the curve (interpolation)",
    body: "To find the solubility at a temperature not listed, locate the temperature on the x-axis, move vertically to the curve, then horizontally to the y-axis to read the value. For KNO₃ at 30 °C the curve gives roughly 46 g per 100 g water, meaning that is the most that can dissolve at that temperature. This interpolation is exactly how exam questions ask you to use a printed curve, so practice reading to the nearest grid line. Values read between measured points are estimates, not exact.",
  },
  {
    heading: "Solids — curves rise with temperature",
    body: "Almost all solid solutes become more soluble as temperature increases, so their curves slope upward to the right. The steepness varies: KNO₃ and NH₄NO₃ have very steep curves (strongly temperature-dependent), while NaCl's curve is almost flat (barely changes with heat). A steep curve means a small temperature drop releases a large amount of solid as crystals. Knowing the shape tells you how useful heating will be for dissolving or later crystallising that salt.",
  },
  {
    heading: "Gases — curves fall with temperature",
    body: "Dissolved gases behave oppositely to solids: their solubility decreases as temperature rises, so a gas solubility curve slopes downward. Warm water holds less oxygen, carbon dioxide and ammonia than cold water, which is why a warmed soda goes flat faster and warm lakes can suffer oxygen shortage. Pressure, not just temperature, also governs gas solubility, so gas curves are usually drawn for a fixed pressure. This contrast with solids is a common exam point.",
  },
  {
    heading: "Comparing two salts on one graph",
    body: "When two solubility curves cross, the more soluble salt changes with temperature. For example, at low temperatures NaCl may be more soluble than KNO₃, but above the crossing point KNO₃ becomes more soluble. This crossover is the basis of fractional crystallisation: by cooling a mixed hot solution, the salt whose curve drops most steeply crystallises first while the other stays dissolved. Reading which curve is higher at a given temperature answers 'which salt is more soluble here?'",
  },
  {
    heading: "Predicting crystallisation on cooling",
    body: "A solubility curve lets you calculate how much solid appears when a saturated solution is cooled. If a solution saturated with KNO₃ at 60 °C (110 g/100 g water) is cooled to 20 °C (32 g/100 g water), then 110 − 32 = 78 g of KNO₃ crystallises out per 100 g of water used. The rest remains dissolved at the new, lower saturation limit. This single calculation underlies nearly every crystallisation and purification problem in the topic.",
  },
  {
    heading: "Uses of solubility curves",
    body: "Solubility curves are used to choose conditions for purifying a salt, to predict the yield of crystals from cooling, and to separate mixtures of salts by fractional crystallisation. They also help decide whether heating or cooling is the better way to dissolve or recover a substance in industry and the lab. In environmental and biological contexts they explain why gas solubility matters for aquatic life. Reading and interpreting these graphs is a core exam papers skill.",
  },
  {
    heading: "Exceptions and flat curves",
    body: "Not every solid curve rises steeply; sodium chloride is the classic near-flat example, with solubility changing only slightly from about 36 g/100 g at 0 °C to 39 g/100 g at 100 °C. Calcium carbonate and many metal hydroxides are effectively insoluble across the whole temperature range, so their 'curves' sit near the axis. Assuming every salt behaves like KNO₃ is a frequent mistake — always read the actual printed curve rather than guessing its slope.",
  },
  {
    heading: "Worked example — reading and using a curve",
    body: "Using a printed KNO₃ curve, read its solubility as 46 g/100 g water at 30 °C and 88 g/100 g water at 50 °C. If 200 g of water holds a saturated solution at 50 °C it contains 2 × 88 = 176 g of KNO₃. Cooling this to 30 °C, the water can now hold only 2 × 46 = 92 g, so 176 − 92 = 84 g of KNO₃ crystallises. This step-by-step use of the curve shows both reading skill and a yield calculation.",
  },
  {
    heading: "Why salts differ in temperature sensitivity",
    body: "The way a salt's solubility responds to heat reflects the balance of energies when it dissolves: breaking the lattice and hydrating the ions. For salts like KNO₃ the dissolution absorbs heat (endothermic), so raising the temperature strongly favours more dissolving and the curve climbs steeply. For salts like NaCl the energy change is near zero, so temperature barely matters and the curve is flat. This energetic picture connects the curve's shape back to the dissolution process studied earlier.",
  },
];
