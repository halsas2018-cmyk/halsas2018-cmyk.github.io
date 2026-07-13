// biology — Simple Measurement of Ecological Factors
const questions = [
  {
    question: "Which instrument is used to measure air temperature in an ecological study?",
    options: [
      "A. Hygrometer",
      "B. Thermometer",
      "C. Rain gauge",
      "D. Anemometer"
    ],
    answer: "B",
    explanation: "A thermometer measures temperature; a hygrometer measures humidity and an anemometer measures wind speed.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "The instrument used to measure relative humidity in the field is the",
    options: [
      "A. Barometer",
      "B. Hydrometer",
      "C. Hygrometer",
      "D. Thermometer"
    ],
    answer: "C",
    explanation: "A hygrometer measures the moisture content (humidity) of air, while a hydrometer measures liquid density.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "Rainfall is most directly measured using a",
    options: [
      "A. Rain gauge",
      "B. Wind vane",
      "C. Light meter",
      "D. pH meter"
    ],
    answer: "A",
    explanation: "A rain gauge collects and measures the amount of liquid precipitation over a set period, usually in millimetres.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "The direction from which wind blows is determined using a",
    options: [
      "A. Anemometer",
      "B. Wind vane",
      "C. Rain gauge",
      "D. Thermometer"
    ],
    answer: "B",
    explanation: "A wind vane points into the wind and shows wind direction, whereas an anemometer measures wind speed.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "Wind speed is measured with an",
    options: [
      "A. Anemometer",
      "B. Aneroid barometer",
      "C. Wind vane",
      "D. Hygrometer"
    ],
    answer: "A",
    explanation: "An anemometer (often with rotating cups) quantifies wind speed, commonly in km/h or m/s.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "Light intensity in an ecosystem can be measured using a",
    options: [
      "A. Photometer",
      "B. Rain gauge",
      "C. Thermometer",
      "D. Quadrat"
    ],
    answer: "A",
    explanation: "A light meter or photometer measures light intensity, often expressed in lux.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "Soil pH is commonly measured in the field with a",
    options: [
      "A. pH meter",
      "B. Anemometer",
      "C. Quadrat",
      "D. Transect line"
    ],
    answer: "A",
    explanation: "A pH meter (or soil pH kit) determines the acidity or alkalinity of soil or water.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "A quadrat is primarily used in ecology to measure the",
    options: [
      "A. Speed of wind",
      "B. Abundance and distribution of organisms",
      "C. pH of soil",
      "D. Amount of rainfall"
    ],
    answer: "B",
    explanation: "A quadrat is a square sampling frame used to estimate the abundance, frequency and distribution of organisms in an area.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "The percentage cover of a plant species in a quadrat refers to the",
    options: [
      "A. Number of individual plants",
      "B. Proportion of the quadrat area covered by the species",
      "C. Height of the tallest plant",
      "D. Number of different species"
    ],
    answer: "B",
    explanation: "Percentage cover is the estimated fraction of the quadrat's ground area occupied by a species, useful for dominant plants.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "Frequency of a species, when using quadrats, is the",
    options: [
      "A. Number of individuals per quadrat",
      "B. Percentage of quadrats in which the species occurs",
      "C. Total area covered",
      "D. Number of different species"
    ],
    answer: "B",
    explanation: "Frequency is the proportion of sampling quadrats that contain the species, expressed as a percentage.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "A line transect is used to study",
    options: [
      "A. Wind speed along a coast",
      "B. The distribution of organisms along a line",
      "C. The pH of deep soil",
      "D. Rainfall in a forest"
    ],
    answer: "B",
    explanation: "A line transect is a straight line along which organisms are recorded, revealing changes in distribution (zonation).",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "A belt transect differs from a line transect because it uses a",
    options: [
      "A. Single string only",
      "B. Strip of defined width with quadrats",
      "C. Thermometer",
      "D. Rain gauge"
    ],
    answer: "B",
    explanation: "A belt transect is a wide strip sampled with quadrats, giving more quantitative data than a single line.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "Zonation of organisms along a shore is best studied using a",
    options: [
      "A. Belt transect",
      "B. Rain gauge",
      "C. pH meter",
      "D. Anemometer"
    ],
    answer: "A",
    explanation: "Belt (and line) transects reveal the bands or zones of different species along an environmental gradient such as a shore.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "In capture-recapture, the estimated total population is given by N =",
    options: [
      "A. (n1 + n2) / m",
      "B. (n1 × n2) / m",
      "C. (n1 × m) / n2",
      "D. n1 + n2 + m"
    ],
    answer: "B",
    explanation: "The Lincoln index estimates population N = (n1 × n2) / m, where n1 are first caught, n2 second caught, m recaptured marked.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "In the Lincoln index, the symbol 'm' represents the number of",
    options: [
      "A. Animals marked in the first catch",
      "B. Marked animals recaptured in the second sample",
      "C. Total animals in the population",
      "D. Unmarked animals in the first catch"
    ],
    answer: "B",
    explanation: "m is the number of marked individuals recaptured in the second sample, used to estimate total population size.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "A key assumption of the capture-recapture method is that",
    options: [
      "A. The population is rapidly increasing",
      "B. Marked and unmarked individuals mix freely and marking does not affect survival",
      "C. No animals are ever recaptured",
      "D. The habitat changes completely between samples"
    ],
    answer: "B",
    explanation: "The method assumes the marked individuals redistribute evenly and marking does not affect their chance of capture or survival.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "Simpson's diversity index measures",
    options: [
      "A. Only the number of individuals",
      "B. Both species richness and evenness",
      "C. Wind speed",
      "D. Soil pH"
    ],
    answer: "B",
    explanation: "Simpson's index combines the number of species (richness) and their relative abundances (evenness) into one value.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "A community with high species diversity is indicated by a Simpson's index value that is",
    options: [
      "A. Close to 0",
      "B. Close to 1",
      "C. Negative",
      "D. Equal to the number of individuals"
    ],
    answer: "B",
    explanation: "Simpson's index ranges from 0 to 1; values near 1 indicate high diversity and evenness among species.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "The unit commonly used to express rainfall amount is",
    options: [
      "A. Millimetres",
      "B. Degrees Celsius",
      "C. Lux",
      "D. pH units"
    ],
    answer: "A",
    explanation: "Rainfall is reported as depth in millimetres collected in a rain gauge over a period.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "Temperature is measured in units of",
    options: [
      "A. Lux",
      "B. Millimetres",
      "C. Degrees Celsius",
      "D. pH"
    ],
    answer: "C",
    explanation: "Air and soil temperature are recorded in degrees Celsius (or Fahrenheit) using a thermometer.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "Light intensity is commonly expressed in",
    options: [
      "A. Lux",
      "B. Millimetres",
      "C. pH units",
      "D. Percent humidity"
    ],
    answer: "A",
    explanation: "A light meter reports illuminance in lux, the SI unit of light intensity per unit area.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "A hygrometer most commonly reports humidity as",
    options: [
      "A. Percentage relative humidity",
      "B. Millimetres",
      "C. Lux",
      "D. Degrees"
    ],
    answer: "A",
    explanation: "Relative humidity is the percentage of water vapour in air relative to saturation, reported by a hygrometer.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "Which abiotic factor would a wind vane and anemometer together help measure?",
    options: [
      "A. Humidity",
      "B. Wind direction and speed",
      "C. Light intensity",
      "D. Soil pH"
    ],
    answer: "B",
    explanation: "A wind vane gives direction while an anemometer gives speed; together they describe the wind regime.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "To estimate the abundance of a sessile organism such as a barnacle, the most appropriate tool is a",
    options: [
      "A. Thermometer",
      "B. Quadrat",
      "C. Wind vane",
      "D. pH meter"
    ],
    answer: "B",
    explanation: "Quadrats are ideal for counting stationary (sessile) organisms like barnacles or plants within a fixed area.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "Random sampling with quadrats is achieved by using",
    options: [
      "A. A compass only",
      "B. Random coordinates or a random number table",
      "C. A single fixed point",
      "D. The transect line only"
    ],
    answer: "B",
    explanation: "Random placement (via coordinates or random numbers) avoids bias and makes the sample representative.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "The number of different species present in a community is called its",
    options: [
      "A. Evenness",
      "B. Species richness",
      "C. Abundance",
      "D. Biomass"
    ],
    answer: "B",
    explanation: "Species richness is simply the count of different species; evenness describes how equal their abundances are.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "A pitfall trap is used in ecology to sample",
    options: [
      "A. Flying insects",
      "B. Small ground-dwelling (crawling) animals",
      "C. Fish",
      "D. Birds"
    ],
    answer: "B",
    explanation: "A pitfall trap is a container sunk into the ground that catches small crawling invertebrates walking across the surface.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "A sweep net is most suitable for sampling",
    options: [
      "A. Soil pH",
      "B. Flying or vegetation-dwelling insects",
      "C. Fish in a pond",
      "D. Tree height"
    ],
    answer: "B",
    explanation: "A sweep net is swept through grass or foliage to collect insects and other small arthropods living there.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "To measure the pH of pond water in the field, one should use a",
    options: [
      "A. Rain gauge",
      "B. pH meter or indicator paper",
      "C. Anemometer",
      "D. Quadrat"
    ],
    answer: "B",
    explanation: "A pH meter or indicator paper gives the acidity/alkalinity of the water sample directly in the field.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "The standard size of a most frequently used ecological quadrat is",
    options: [
      "A. 1 m × 1 m",
      "B. 10 m × 10 m",
      "C. 100 m × 100 m",
      "D. 1 cm × 1 cm"
    ],
    answer: "A",
    explanation: "A 1 m × 1 m quadrat is a common, convenient size for sampling plants and small invertebrates on the ground.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "When using a line transect, an organism is recorded only if it",
    options: [
      "A. Touches the line",
      "B. Is taller than 1 m",
      "C. Is a predator",
      "D. Lives underground"
    ],
    answer: "A",
    explanation: "In a basic line transect, species touching or lying on the line are recorded along its length.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "A pooter is a device used to collect",
    options: [
      "A. Small ground insects by suction",
      "B. Fish",
      "C. Birds",
      "D. Soil samples"
    ],
    answer: "A",
    explanation: "A pooter uses suction through a tube to safely gather small insects for identification.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "The abundance of a mobile animal population is best estimated by",
    options: [
      "A. A single quadrat count",
      "B. Capture-recapture (mark-release-recapture)",
      "C. A rain gauge",
      "D. A light meter"
    ],
    answer: "B",
    explanation: "Mobile animals cannot be counted by fixed quadrats, so mark-recapture provides a population estimate.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "Which of these is an abiotic factor that can be measured in the field?",
    options: [
      "A. Predation",
      "B. Soil temperature",
      "C. Competition",
      "D. Parasitism"
    ],
    answer: "B",
    explanation: "Soil temperature is a non-living (abiotic) factor; predation, competition and parasitism are biotic interactions.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "The evenness of species in a community refers to",
    options: [
      "A. The total number of individuals",
      "B. How similar the abundances of different species are",
      "C. The pH of the soil",
      "D. The wind speed"
    ],
    answer: "B",
    explanation: "Evenness describes whether species are present in similar numbers or one dominates the community.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "A thermometer placed in a Stevenson screen is used to measure",
    options: [
      "A. Wind speed",
      "B. Air temperature in the shade",
      "C. Rainfall",
      "D. Light intensity"
    ],
    answer: "B",
    explanation: "A Stevenson screen shelters thermometers from sun and rain, giving a standard shaded air-temperature reading.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "The abundance of organisms can be expressed as the number per",
    options: [
      "A. Unit area or volume",
      "B. Degree Celsius",
      "C. Lux",
      "D. pH unit"
    ],
    answer: "A",
    explanation: "Density (abundance) is typically given as individuals per unit area (e.g. per m²) or per unit volume.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "A transect placed perpendicular to a river bank would best reveal",
    options: [
      "A. Wind direction",
      "B. Changes in species across the bank (zonation)",
      "C. Soil pH only",
      "D. Rainfall amount"
    ],
    answer: "B",
    explanation: "A transect crossing the bank shows how species composition changes with distance from the water (zonation).",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "To compare light intensity at the top and bottom of a canopy, one uses a",
    options: [
      "A. Thermometer",
      "B. Light meter",
      "C. Rain gauge",
      "D. Wind vane"
    ],
    answer: "B",
    explanation: "A light meter measures illuminance at different heights to show how light varies through the canopy.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "Marking animals for recapture should use a method that is",
    options: [
      "A. Harmful so they are easier to find",
      "B. Harmless and does not increase predation risk",
      "C. Permanent dye that kills them",
      "D. A bright colour that attracts predators"
    ],
    answer: "B",
    explanation: "Marks must be safe, long-lasting and not alter the animal's survival or behaviour, to keep estimates valid.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "Which instrument measures both wind speed and direction when combined?",
    options: [
      "A. Anemometer plus wind vane",
      "B. Hygrometer",
      "C. Barometer",
      "D. Photometer"
    ],
    answer: "A",
    explanation: "A cup anemometer gives speed and a wind vane gives direction; weather stations combine both.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "The total number of individuals of a species in a given area is its",
    options: [
      "A. Species richness",
      "B. Population size",
      "C. Diversity index",
      "D. Frequency"
    ],
    answer: "B",
    explanation: "Population size is the actual number of individuals of a species present in the area studied.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "Sampling error in quadrat studies is reduced by",
    options: [
      "A. Using a single large quadrat",
      "B. Increasing the number of quadrats sampled",
      "C. Ignoring random placement",
      "D. Sampling only one habitat"
    ],
    answer: "B",
    explanation: "More replicate quadrats give a better estimate of the true population and reduce sampling error.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "A kite or balloon-mounted thermometer is used to measure temperature at",
    options: [
      "A. Ground level only",
      "B. Different heights above the ground",
      "C. Underwater",
      "D. Below the soil"
    ],
    answer: "B",
    explanation: "Instruments lifted on kites or balloons record air temperature at various altitudes above the surface.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "Percentage frequency of a species is calculated as",
    options: [
      "A. (Number of quadrats with species / total quadrats) × 100",
      "B. Total individuals × 100",
      "C. Area covered × 100",
      "D. Number of species × 100"
    ],
    answer: "A",
    explanation: "Frequency % = (quadrats containing the species ÷ total quadrats) × 100, showing how common it is spatially.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "Which of the following is a biotic method of measuring community structure?",
    options: [
      "A. Using a quadrat to count plant species",
      "B. Measuring wind speed",
      "C. Recording soil pH",
      "D. Measuring rainfall"
    ],
    answer: "A",
    explanation: "Counting living organisms (plants via quadrats) assesses biotic community structure, unlike physical abiotic measures.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "A Secchi disc is used in aquatic ecology to measure",
    options: [
      "A. Water temperature",
      "B. Water clarity / transparency",
      "C. Wind speed",
      "D. Soil pH"
    ],
    answer: "B",
    explanation: "A Secchi disc lowered into water measures transparency (clarity) by the depth at which it disappears.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "To estimate the population of a lake fish, the most suitable method is",
    options: [
      "A. Quadrat counting",
      "B. Mark-recapture using tagged fish",
      "C. A rain gauge",
      "D. A light meter"
    ],
    answer: "B",
    explanation: "Mobile fish are estimated by capturing, marking, releasing and recapturing (Lincoln index), not by quadrats.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "The abiotic factor 'edaphic' refers to properties of the",
    options: [
      "A. Atmosphere",
      "B. Soil",
      "C. Water body",
      "D. Light"
    ],
    answer: "B",
    explanation: "Edaphic factors are soil-related (texture, pH, moisture) that influence the organisms living there.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "Recording the pH, temperature and dissolved oxygen of a pond measures its",
    options: [
      "A. Biotic diversity only",
      "B. Abiotic (physical/chemical) conditions",
      "C. Species richness",
      "D. Population size"
    ],
    answer: "B",
    explanation: "pH, temperature and dissolved oxygen are non-living abiotic variables describing the pond's environment.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "A frame quadrat with a grid of strings is used to help estimate",
    options: [
      "A. Wind direction",
      "B. Percentage cover of species",
      "C. Air pressure",
      "D. Rainfall"
    ],
    answer: "B",
    explanation: "Grid lines in a quadrat let observers estimate the proportion of area covered by each species (percentage cover).",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "If 40 animals are marked and released, then 50 are caught later of which 10 are marked, the estimated population is",
    options: [
      "A. 100",
      "B. 200",
      "C. 80",
      "D. 400"
    ],
    answer: "B",
    explanation: "N = (40 × 50) / 10 = 2000 / 10 = 200 animals estimated in the total population.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "Continuous monitoring of temperature over 24 hours is best done with a",
    options: [
      "A. Maximum-minimum thermometer",
      "B. Single reading thermometer",
      "C. Rain gauge",
      "D. Light meter"
    ],
    answer: "A",
    explanation: "A maximum-minimum thermometer records the highest and lowest temperatures reached, summarizing daily range.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "The main purpose of a transect in ecological measurement is to study",
    options: [
      "A. A single point in detail",
      "B. Changes in communities along an environmental gradient",
      "C. Wind speed",
      "D. Soil pH at one spot"
    ],
    answer: "B",
    explanation: "Transects reveal how species distribution changes progressively along a gradient such as altitude or shore.",
    subtopic: "Simple Measurement of Ecological Factors"
  },
  {
    question: "A non-living factor such as light, temperature or rainfall is described as",
    options: [
      "A. Biotic",
      "B. Abiotic",
      "C. Trophic",
      "D. Symbiotic"
    ],
    answer: "B",
    explanation: "Abiotic factors are the non-living physical and chemical components of the environment.",
    subtopic: "Simple Measurement of Ecological Factors"
  }
];

module.exports = questions;
