// biology — Ecological Factors
const questions = [
  {
    question: "Which physical factor is most directly required for photosynthesis in green plants?",
    options: [
      "A. Wind",
      "B. Light",
      "C. Soil pH",
      "D. Relative humidity"
    ],
    answer: "B",
    explanation: "Light provides the energy that drives photosynthesis; without adequate light, plants cannot manufacture their own food.",
    subtopic: "physical factors"
  },
  {
    question: "The average weather condition of an area over a long period of time is best described as its?",
    options: [
      "A. Weather",
      "B. Climate",
      "C. Altitude",
      "D. Latitude"
    ],
    answer: "B",
    explanation: "Climate is the long-term average pattern of temperature, rainfall and other conditions, while weather refers to short-term changes.",
    subtopic: "physical factors"
  },
  {
    question: "High temperature affects the distribution of organisms mainly because it influences?",
    options: [
      "A. Soil texture",
      "B. Enzyme activity",
      "C. Humus content",
      "D. Soil salinity"
    ],
    answer: "B",
    explanation: "Temperature affects the rate of enzyme-catalysed reactions; extreme temperatures denature enzymes and limit where organisms can survive.",
    subtopic: "physical factors"
  },
  {
    question: "The amount of rainfall in an area largely determines the?",
    options: [
      "A. Soil pH",
      "B. Type of biome",
      "C. Soil texture",
      "D. Altitude"
    ],
    answer: "B",
    explanation: "Rainfall is a major determinant of biome type, distinguishing forests, grasslands and deserts.",
    subtopic: "physical factors"
  },
  {
    question: "Wind increases the rate of transpiration in plants by?",
    options: [
      "A. Lowering soil pH",
      "B. Removing water vapour around leaves",
      "C. Increasing soil water",
      "D. Reducing light intensity"
    ],
    answer: "B",
    explanation: "Wind blows away the humid air surrounding stomata, increasing the diffusion gradient and so increasing transpiration.",
    subtopic: "physical factors"
  },
  {
    question: "Which of the following is a physical factor affecting the distribution of organisms?",
    options: [
      "A. Soil humus",
      "B. Soil texture",
      "C. Temperature",
      "D. Soil organisms"
    ],
    answer: "C",
    explanation: "Temperature is a non-biological (physical/abiotic) factor; humus, texture and organisms are soil-related edaphic or biotic factors.",
    subtopic: "physical factors"
  },
  {
    question: "Light intensity affects the vertical distribution of organisms in a pond mainly through its effect on?",
    options: [
      "A. Photosynthesis",
      "B. Soil erosion",
      "C. Wind speed",
      "D. Salinity"
    ],
    answer: "A",
    explanation: "Light penetrates water and limits photosynthesis, so photosynthetic organisms are confined to the illuminated upper layers.",
    subtopic: "physical factors"
  },
  {
    question: "Relative humidity is a measure of?",
    options: [
      "A. The amount of rainfall",
      "B. Water vapour in air relative to saturation",
      "C. Soil water content",
      "D. Wind velocity"
    ],
    answer: "B",
    explanation: "Relative humidity is the amount of water vapour present in air expressed as a percentage of the maximum it can hold at that temperature.",
    subtopic: "physical factors"
  },
  {
    question: "Low relative humidity in the atmosphere tends to?",
    options: [
      "A. Decrease transpiration",
      "B. Increase transpiration",
      "C. Increase soil pH",
      "D. Reduce light"
    ],
    answer: "B",
    explanation: "Dry air creates a steeper water-vapour gradient from leaf to air, increasing the rate of transpiration.",
    subtopic: "physical factors"
  },
  {
    question: "Which gas is essential for aerobic respiration in most organisms?",
    options: [
      "A. Carbon dioxide",
      "B. Oxygen",
      "C. Nitrogen",
      "D. Hydrogen"
    ],
    answer: "B",
    explanation: "Aerobic respiration requires oxygen as the final electron acceptor in the breakdown of food to release energy.",
    subtopic: "physical factors"
  },
  {
    question: "Carbon dioxide concentration in the atmosphere is important to plants because it is used in?",
    options: [
      "A. Respiration",
      "B. Photosynthesis",
      "C. Transpiration",
      "D. Nitrogen fixation"
    ],
    answer: "B",
    explanation: "Carbon dioxide is the carbon source fixed during photosynthesis to form carbohydrates.",
    subtopic: "physical factors"
  },
  {
    question: "The pH of a freshwater habitat can affect aquatic organisms because it influences?",
    options: [
      "A. Enzyme activity",
      "B. Wind speed",
      "C. Altitude",
      "D. Latitude"
    ],
    answer: "A",
    explanation: "pH affects the shape and activity of enzymes and the availability of ions, influencing which organisms can live there.",
    subtopic: "physical factors"
  },
  {
    question: "At higher altitudes, temperature generally?",
    options: [
      "A. Increases",
      "B. Decreases",
      "C. Remains constant",
      "D. Becomes alkaline"
    ],
    answer: "B",
    explanation: "Temperature falls with increasing altitude (about 1 C per 100 m), limiting the organisms found at high elevations.",
    subtopic: "physical factors"
  },
  {
    question: "Latitude influences the distribution of organisms mainly by affecting?",
    options: [
      "A. Soil humus",
      "B. Temperature and day length",
      "C. Soil texture",
      "D. Soil organisms"
    ],
    answer: "B",
    explanation: "Latitude determines solar angle and seasonality, controlling temperature and day length and hence climate and biome.",
    subtopic: "physical factors"
  },
  {
    question: "Fire as an ecological factor is most common in which vegetation type?",
    options: [
      "A. Rainforest",
      "B. Savanna",
      "C. Tundra",
      "D. Mangrove"
    ],
    answer: "B",
    explanation: "Savanna ecosystems are characterised by seasonal fires that shape plant and animal communities.",
    subtopic: "physical factors"
  },
  {
    question: "Wind aids dispersal of seeds that are?",
    options: [
      "A. Heavy and round",
      "B. Light with wings or hairs",
      "C. Buoyant in water only",
      "D. Stored underground"
    ],
    answer: "B",
    explanation: "Wind-dispersed seeds are light and often have wings or hair-like structures (pappus) to carry them on air currents.",
    subtopic: "physical factors"
  },
  {
    question: "Strong wind can limit plant growth by causing?",
    options: [
      "A. Increased photosynthesis",
      "B. Physical damage and water loss",
      "C. Higher soil pH",
      "D. More humus"
    ],
    answer: "B",
    explanation: "Wind can break plant parts and increase transpiration, leading to desiccation and reduced growth.",
    subtopic: "physical factors"
  },
  {
    question: "The thermocline in a lake refers to a layer where?",
    options: [
      "A. Light is absent",
      "B. Temperature changes rapidly with depth",
      "C. Soil is formed",
      "D. Wind is strongest"
    ],
    answer: "B",
    explanation: "A thermocline is a zone of rapid temperature change with depth that separates warmer surface water from colder deep water.",
    subtopic: "physical factors"
  },
  {
    question: "Seasonal variation in temperature and rainfall is most pronounced in the?",
    options: [
      "A. Equatorial rainforest",
      "B. Temperate regions",
      "C. Deep ocean",
      "D. Polar ice"
    ],
    answer: "B",
    explanation: "Temperate regions have distinct seasons with large annual swings in temperature and precipitation.",
    subtopic: "physical factors"
  },
  {
    question: "Which physical factor determines the depth to which light penetrates aquatic ecosystems?",
    options: [
      "A. Turbidity of water",
      "B. Wind speed",
      "C. Soil pH",
      "D. Altitude"
    ],
    answer: "A",
    explanation: "Suspended particles and dissolved colour make water turbid, reducing light penetration and the depth of the photic zone.",
    subtopic: "physical factors"
  },
  {
    question: "Deserts are characterised primarily by?",
    options: [
      "A. High rainfall",
      "B. Very low rainfall",
      "C. High humidity",
      "D. Low temperature"
    ],
    answer: "B",
    explanation: "Deserts receive very little precipitation (typically under 250 mm per year), which limits plant and animal life.",
    subtopic: "physical factors"
  },
  {
    question: "The ozone layer protects living organisms from harmful?",
    options: [
      "A. Infrared radiation",
      "B. Ultraviolet radiation",
      "C. Visible light",
      "D. Radio waves"
    ],
    answer: "B",
    explanation: "The ozone layer absorbs much of the sun's ultraviolet radiation, which can damage DNA in living cells.",
    subtopic: "physical factors"
  },
  {
    question: "Organisms that can tolerate a wide range of temperatures are described as?",
    options: [
      "A. Stenothermal",
      "B. Eurythermal",
      "C. Stenohaline",
      "D. Poikilothermic"
    ],
    answer: "B",
    explanation: "Eurythermal organisms tolerate a wide temperature range; stenothermal ones tolerate only a narrow range.",
    subtopic: "physical factors"
  },
  {
    question: "Which factor is responsible for the formation of distinct layers (strata) in a tropical rainforest?",
    options: [
      "A. Competition for light",
      "B. Soil texture",
      "C. Wind direction",
      "D. Soil pH"
    ],
    answer: "A",
    explanation: "Plants grow at different heights to access light, producing emergent, canopy, understory and forest floor layers.",
    subtopic: "physical factors"
  },
  {
    question: "Photoperiodism in plants refers to their response to?",
    options: [
      "A. Soil pH",
      "B. Length of day and night",
      "C. Wind speed",
      "D. Soil water"
    ],
    answer: "B",
    explanation: "Photoperiodism is the response of plants (e.g. flowering) to the relative lengths of day and night.",
    subtopic: "physical factors"
  },
  {
    question: "Which of these is NOT a physical (abiotic) factor?",
    options: [
      "A. Temperature",
      "B. Light",
      "C. Predation",
      "D. Wind"
    ],
    answer: "C",
    explanation: "Predation is a biotic (living) interaction, whereas temperature, light and wind are physical/abiotic factors.",
    subtopic: "physical factors"
  },
  {
    question: "Low temperature in winter causes many plants to become dormant because?",
    options: [
      "A. Light increases",
      "B. Enzyme activity and metabolism slow down",
      "C. Soil becomes acidic",
      "D. Wind stops"
    ],
    answer: "B",
    explanation: "Cold slows biochemical reactions and metabolism, so plants enter dormancy until conditions improve.",
    subtopic: "physical factors"
  },
  {
    question: "The process by which water vapour is lost from plant leaves is called?",
    options: [
      "A. Photosynthesis",
      "B. Transpiration",
      "C. Respiration",
      "D. Germination"
    ],
    answer: "B",
    explanation: "Transpiration is the loss of water vapour from aerial parts of plants, mainly through stomata.",
    subtopic: "physical factors"
  },
  {
    question: "Mountainous areas often have different vegetation zones because of changes in?",
    options: [
      "A. Soil humus only",
      "B. Temperature and rainfall with altitude",
      "C. Wind direction only",
      "D. Soil colour"
    ],
    answer: "B",
    explanation: "As altitude rises, temperature drops and rainfall patterns change, producing distinct vegetation belts.",
    subtopic: "physical factors"
  },
  {
    question: "Which physical factor is measured using a maximum-minimum thermometer?",
    options: [
      "A. Rainfall",
      "B. Temperature",
      "C. Wind speed",
      "D. Humidity"
    ],
    answer: "B",
    explanation: "A maximum-minimum thermometer records the highest and lowest temperatures reached over a period.",
    subtopic: "physical factors"
  },
  {
    question: "Edaphic factors are those that relate to the?",
    options: [
      "A. Climate",
      "B. Soil",
      "C. Atmosphere",
      "D. Light"
    ],
    answer: "B",
    explanation: "Edaphic factors are the soil-related physical and chemical properties that affect organisms.",
    subtopic: "edaphic factors"
  },
  {
    question: "Soil texture depends mainly on the proportion of?",
    options: [
      "A. Humus and water",
      "B. Sand, silt and clay particles",
      "C. Air and organisms",
      "D. pH and salinity"
    ],
    answer: "B",
    explanation: "Soil texture is determined by the relative amounts of sand, silt and clay mineral particles.",
    subtopic: "edaphic factors"
  },
  {
    question: "A soil with large particles and good drainage but low water retention is?",
    options: [
      "A. Clayey",
      "B. Sandy",
      "C. Loamy",
      "D. Humus"
    ],
    answer: "B",
    explanation: "Sandy soil has large particles and pores, drains quickly and holds little water, so it dries out easily.",
    subtopic: "edaphic factors"
  },
  {
    question: "Clayey soils are characterised by?",
    options: [
      "A. Large particles and quick drainage",
      "B. Small particles and poor drainage",
      "C. High sand content",
      "D. Lack of minerals"
    ],
    answer: "B",
    explanation: "Clay particles are tiny and pack tightly, holding water and reducing drainage and aeration.",
    subtopic: "edaphic factors"
  },
  {
    question: "Loamy soil is considered best for crop growth because it?",
    options: [
      "A. Is pure clay",
      "B. Has a balanced mixture of textures and good fertility",
      "C. Contains no organic matter",
      "D. Drains too fast"
    ],
    answer: "B",
    explanation: "Loam balances sand, silt and clay, retaining water and nutrients while still draining and aerating well.",
    subtopic: "edaphic factors"
  },
  {
    question: "Soil pH most directly affects?",
    options: [
      "A. Wind speed",
      "B. Nutrient availability to plants",
      "C. Day length",
      "D. Altitude"
    ],
    answer: "B",
    explanation: "Soil pH controls the solubility and uptake of mineral nutrients and the activity of soil microbes.",
    subtopic: "edaphic factors"
  },
  {
    question: "Most crop plants grow best in soils that are?",
    options: [
      "A. Strongly acidic",
      "B. Slightly acidic to neutral",
      "C. Strongly alkaline only",
      "D. Highly saline"
    ],
    answer: "B",
    explanation: "Most crops thrive in near-neutral to slightly acidic soils where nutrient availability is optimal.",
    subtopic: "edaphic factors"
  },
  {
    question: "The decayed organic matter in soil that improves fertility is called?",
    options: [
      "A. Clay",
      "B. Humus",
      "C. Sand",
      "D. Silt"
    ],
    answer: "B",
    explanation: "Humus is decomposed organic matter that improves soil structure, water retention and nutrient content.",
    subtopic: "edaphic factors"
  },
  {
    question: "Soil air is important to plant roots because it provides?",
    options: [
      "A. Carbon dioxide for photosynthesis",
      "B. Oxygen for root respiration",
      "C. Light for growth",
      "D. Nitrogen for flowering"
    ],
    answer: "B",
    explanation: "Roots respire aerobically and need soil oxygen; waterlogged soils lack air and can suffocate roots.",
    subtopic: "edaphic factors"
  },
  {
    question: "Soil water is held most tightly in?",
    options: [
      "A. Sandy soil",
      "B. Clayey soil",
      "C. Gravel",
      "D. Pure humus"
    ],
    answer: "B",
    explanation: "Clay has a large surface area and fine pores that hold water strongly against gravity.",
    subtopic: "edaphic factors"
  },
  {
    question: "Earthworms improve soil mainly by?",
    options: [
      "A. Increasing acidity",
      "B. Burrowing and mixing, improving aeration",
      "C. Removing humus",
      "D. Reducing water"
    ],
    answer: "B",
    explanation: "Earthworms create channels and mix organic matter through soil, improving aeration, drainage and fertility.",
    subtopic: "edaphic factors"
  },
  {
    question: "The layer of soil rich in organic matter and living roots is the?",
    options: [
      "A. Bedrock",
      "B. Topsoil",
      "C. Parent material",
      "D. Subsoil only"
    ],
    answer: "B",
    explanation: "Topsoil (A horizon) is the uppermost layer, rich in humus, roots and soil organisms and most fertile.",
    subtopic: "edaphic factors"
  },
  {
    question: "Leaching is the process by which?",
    options: [
      "A. Water adds minerals to topsoil",
      "B. Soluble nutrients are washed down beyond plant roots",
      "C. Soil becomes dry",
      "D. Humus is formed"
    ],
    answer: "B",
    explanation: "Leaching moves dissolved nutrients downward with percolating water, often depleting the topsoil.",
    subtopic: "edaphic factors"
  },
  {
    question: "Soil fertility is the ability of soil to supply plants with?",
    options: [
      "A. Only water",
      "B. Essential nutrients in adequate amounts",
      "C. Only air",
      "D. Strong acidity"
    ],
    answer: "B",
    explanation: "A fertile soil provides the right balance of mineral nutrients, water, air and organic matter for plant growth.",
    subtopic: "edaphic factors"
  },
  {
    question: "Which soil type would you expect to have the highest capillarity (rising of water)?",
    options: [
      "A. Sandy soil",
      "B. Clayey soil",
      "C. Gravel",
      "D. Pure sand heap"
    ],
    answer: "B",
    explanation: "Fine pores in clay draw water upward by capillarity more strongly than coarse sandy soils.",
    subtopic: "edaphic factors"
  },
  {
    question: "Soil organisms such as bacteria and fungi are important because they?",
    options: [
      "A. Compact the soil",
      "B. Decompose organic matter and recycle nutrients",
      "C. Increase salinity",
      "D. Remove oxygen"
    ],
    answer: "B",
    explanation: "Decomposers break down dead matter, releasing mineral nutrients back into the soil for plant uptake.",
    subtopic: "edaphic factors"
  },
  {
    question: "Silt particles are intermediate in size between?",
    options: [
      "A. Sand and gravel",
      "B. Sand and clay",
      "C. Clay and humus",
      "D. Gravel and loam"
    ],
    answer: "B",
    explanation: "Silt is finer than sand but coarser than clay, giving loam its intermediate, fertile texture.",
    subtopic: "edaphic factors"
  },
  {
    question: "Acidic soils can be corrected (limed) by adding?",
    options: [
      "A. Ammonium sulphate",
      "B. Calcium carbonate (lime)",
      "C. Sodium chloride",
      "D. Urea"
    ],
    answer: "B",
    explanation: "Lime (calcium carbonate) neutralises soil acidity, raising pH and improving nutrient availability.",
    subtopic: "edaphic factors"
  },
  {
    question: "The parent material of soil is the?",
    options: [
      "A. Living vegetation",
      "B. Underlying rock from which soil forms",
      "C. Top layer of humus",
      "D. Soil air"
    ],
    answer: "B",
    explanation: "Parent material is the rock or sediment that weathers physically and chemically to form soil.",
    subtopic: "edaphic factors"
  },
  {
    question: "Waterlogged (anaerobic) soils are poor for most plants because?",
    options: [
      "A. They have too much oxygen",
      "B. Roots cannot respire without air",
      "C. They are too dry",
      "D. pH is always high"
    ],
    answer: "B",
    explanation: "Saturated soils displace air, depriving roots of oxygen and leading to poor growth or death.",
    subtopic: "edaphic factors"
  },
  {
    question: "The cation exchange capacity of soil relates to its ability to?",
    options: [
      "A. Hold and supply nutrient ions",
      "B. Reflect light",
      "C. Stop wind",
      "D. Increase salinity"
    ],
    answer: "A",
    explanation: "Cation exchange capacity is the soil's ability to hold positively charged nutrient ions and release them to plants.",
    subtopic: "edaphic factors"
  },
  {
    question: "Which of the following increases the water-holding capacity of sandy soil?",
    options: [
      "A. Adding gravel",
      "B. Adding humus or clay",
      "C. Removing organic matter",
      "D. Increasing sand only"
    ],
    answer: "B",
    explanation: "Humus and fine clay particles increase the surface area and pore spaces that retain water in sandy soils.",
    subtopic: "edaphic factors"
  },
  {
    question: "Soil erosion is most severe on?",
    options: [
      "A. Dense forest with cover",
      "B. Bare slopes with little vegetation",
      "C. Well-vegetated grassland",
      "D. Deep clay soil"
    ],
    answer: "B",
    explanation: "Without plant cover to bind soil and intercept rain, bare slopes lose topsoil rapidly to erosion.",
    subtopic: "edaphic factors"
  },
  {
    question: "Nutrient deficiency in plants often first shows as?",
    options: [
      "A. Yellowing of older or younger leaves",
      "B. Faster growth",
      "C. More flowers only",
      "D. Increased height only"
    ],
    answer: "A",
    explanation: "Deficiencies such as nitrogen or magnesium show as chlorosis (yellowing), often in older or younger leaves depending on the nutrient.",
    subtopic: "edaphic factors"
  },
  {
    question: "Which mineral is a major component of plant fertilizers represented as N-P-K?",
    options: [
      "A. Nitrogen, Phosphorus, Potassium",
      "B. Sodium, Phosphorus, Potassium",
      "C. Nitrogen, Protein, Krypton",
      "D. Nickel, Phosphorus, Krypton"
    ],
    answer: "A",
    explanation: "N-P-K stands for nitrogen, phosphorus and potassium, the three primary macronutrients in fertilizers.",
    subtopic: "edaphic factors"
  },
  {
    question: "The accumulation of salts at the soil surface is called?",
    options: [
      "A. Leaching",
      "B. Salinization",
      "C. Humification",
      "D. Erosion"
    ],
    answer: "B",
    explanation: "Salinization occurs when evaporation leaves soluble salts at the surface, reducing soil productivity.",
    subtopic: "edaphic factors"
  },
  {
    question: "Soil structure refers to the?",
    options: [
      "A. Size of individual particles",
      "B. Arrangement of particles into aggregates",
      "C. Colour of the soil",
      "D. pH only"
    ],
    answer: "B",
    explanation: "Soil structure is how particles clump into aggregates (crumbs, blocks), affecting aeration and drainage.",
    subtopic: "edaphic factors"
  },
  {
    question: "Plants adapted to low-nutrient, acidic soils such as heathlands are often?",
    options: [
      "A. Fast-growing crops",
      "B. Ericaceous (heath) species with mycorrhizae",
      "C. Cacti only",
      "D. Aquatic plants"
    ],
    answer: "B",
    explanation: "Heathland plants (e.g. heathers) tolerate acidic, infertile soils and often associate with mycorrhizal fungi for nutrients.",
    subtopic: "edaphic factors"
  },
  {
    question: "Which soil property best explains why clay soils become waterlogged after heavy rain?",
    options: [
      "A. Large particle size",
      "B. Small pores that slow drainage",
      "C. High sand content",
      "D. Low humus"
    ],
    answer: "B",
    explanation: "Fine clay pores have low permeability, so water drains slowly and the soil stays saturated after rain.",
    subtopic: "edaphic factors"
  },
  {
    question: "The process of humus formation from dead organic matter is called?",
    options: [
      "A. Mineralisation only",
      "B. Humification",
      "C. Salinization",
      "D. Leaching"
    ],
    answer: "B",
    explanation: "Humification is the decomposition and synthesis of stable organic matter (humus) from dead plant and animal material.",
    subtopic: "edaphic factors"
  }
];

module.exports = questions;
