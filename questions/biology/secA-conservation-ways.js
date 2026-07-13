// biology — Ways of Ensuring Conservation
const questions = [
  // ===== agencies =====
  {
    question: "Which United Nations agency is primarily responsible for matters of food, agriculture, and forestry worldwide?",
    options: [
      "A. UNESCO",
      "B. FAO",
      "C. WHO",
      "D. IMF"
    ],
    answer: "B",
    explanation: "The Food and Agriculture Organization (FAO) of the UN leads international efforts on agriculture, forestry, and fisheries conservation.",
    subtopic: "agencies"
  },
  {
    question: "The International Union for Conservation of Nature (IUCN) is best known for publishing which of the following?",
    options: [
      "A. The Red List of Threatened Species",
      "B. The Blue Book of Laws",
      "C. The Green Index of Forests",
      "D. The White Paper on Climate"
    ],
    answer: "A",
    explanation: "The IUCN publishes the Red List of Threatened Species, which assesses the extinction risk of species globally.",
    subtopic: "agencies"
  },
  {
    question: "Which global non-governmental organization focuses on wilderness protection and the conservation of endangered species through funding projects worldwide?",
    options: [
      "A. IUCN",
      "B. WHO",
      "C. WWF",
      "D. FIFA"
    ],
    answer: "C",
    explanation: "The World Wide Fund for Nature (WWF) is an NGO that funds conservation projects and campaigns to protect endangered species and habitats.",
    subtopic: "agencies"
  },
  {
    question: "The United Nations Environment Programme (UNEP) was established primarily to:",
    options: [
      "A. Regulate international trade in weapons",
      "B. Coordinate UN environmental activities",
      "C. Manage global health programmes",
      "D. Control international shipping"
    ],
    answer: "B",
    explanation: "UNEP coordinates UN environmental activities, assists developing countries in environmental policy, and promotes sustainable development.",
    subtopic: "agencies"
  },
  {
    question: "In Nigeria, which government agency is charged with the protection and management of national parks?",
    options: [
      "A. Federal Ministry of Education",
      "B. National Parks Service",
      "C. Nigerian Customs Service",
      "D. Central Bank of Nigeria"
    ],
    answer: "B",
    explanation: "The National Parks Service (NPS) is responsible for the management, protection, and conservation of Nigeria's national parks.",
    subtopic: "agencies"
  },
  {
    question: "The agency responsible for forestry management, afforestation, and desertification control in Nigeria includes the:",
    options: [
      "A. Forestry Research Institute of Nigeria",
      "B. Federal Ministry of Petroleum",
      "C. National Bureau of Statistics",
      "D. Nigerian Immigration Service"
    ],
    answer: "A",
    explanation: "The Forestry Research Institute of Nigeria (FRIN) and related forestry bodies manage forests, afforestation, and fight desertification.",
    subtopic: "agencies"
  },
  {
    question: "Which body was established in Nigeria to enforce environmental standards and regulate pollution (now part of the Federal Ministry of Environment)?",
    options: [
      "A. NAFDAC",
      "B. FEPA",
      "C. EFCC",
      "D. NNPC"
    ],
    answer: "B",
    explanation: "The Federal Environmental Protection Agency (FEPA) was created to enforce environmental standards and control pollution in Nigeria.",
    subtopic: "agencies"
  },
  {
    question: "The Convention on International Trade in Endangered Species (CITES) is enforced through cooperation between which type of agencies?",
    options: [
      "A. Customs and wildlife authorities",
      "B. Football associations",
      "C. Broadcasting corporations",
      "D. Tax offices only"
    ],
    answer: "A",
    explanation: "CITES is enforced by national customs and wildlife management authorities that monitor and control cross-border trade in protected species.",
    subtopic: "agencies"
  },
  {
    question: "Which organization is dedicated to the protection of wetlands of international importance under the Ramsar Convention?",
    options: [
      "A. The Ramsar Secretariat / Wetlands International",
      "B. World Bank",
      "C. Interpol",
      "D. OPEC"
    ],
    answer: "A",
    explanation: "The Ramsar Convention Secretariat and Wetlands International promote the conservation and wise use of wetlands worldwide.",
    subtopic: "agencies"
  },
  {
    question: "BirdLife International is a global partnership of conservation organizations focused on the conservation of:",
    options: [
      "A. Marine mammals",
      "B. Birds and their habitats",
      "C. Tropical timber",
      "D. Freshwater fish only"
    ],
    answer: "B",
    explanation: "BirdLife International works to conserve birds, their habitats, and global biodiversity through a worldwide partnership.",
    subtopic: "agencies"
  },
  {
    question: "The Global Environment Facility (GEF) provides grants to developing countries for projects that benefit the:",
    options: [
      "A. Global environment",
      "B. Private banks",
      "C. Military",
      "D. Tourism boards only"
    ],
    answer: "A",
    explanation: "The GEF funds projects in biodiversity, climate, land degradation, and other areas that deliver global environmental benefits.",
    subtopic: "agencies"
  },
  {
    question: "Which agency is primarily responsible for regulating the import and export of agricultural and forest products to prevent illegal logging?",
    options: [
      "A. Customs Service",
      "B. Immigration Service",
      "C. Road Safety Corps",
      "D. Police Force only"
    ],
    answer: "A",
    explanation: "Customs authorities inspect shipments and enforce bans on illegal timber and wildlife product imports/exports.",
    subtopic: "agencies"
  },
  {
    question: "The United Nations Educational, Scientific and Cultural Organization (UNESCO) contributes to conservation mainly through:",
    options: [
      "A. The World Heritage Sites programme",
      "B. Currency exchange",
      "C. Military peacekeeping",
      "D. Sports regulation"
    ],
    answer: "A",
    explanation: "UNESCO designates World Heritage Sites, protecting areas of outstanding natural and cultural value from degradation.",
    subtopic: "agencies"
  },
  {
    question: "The role of community-based conservation organizations is to:",
    options: [
      "A. Involve local people in protecting their natural resources",
      "B. Sell wildlife abroad",
      "C. Replace national governments",
      "D. Ban all human activity in forests"
    ],
    answer: "A",
    explanation: "Community-based organizations engage local communities in sustainable resource management, improving conservation outcomes.",
    subtopic: "agencies"
  },
  {
    question: "Which international body assesses global climate science and informs conservation policy through its assessment reports?",
    options: [
      "A. IPCC",
      "B. FIFA",
      "C. WHO",
      "D. WTO"
    ],
    answer: "A",
    explanation: "The Intergovernmental Panel on Climate Change (IPCC) evaluates climate science, guiding policies that affect ecosystem conservation.",
    subtopic: "agencies"
  },
  {
    question: "The Nigerian Conservation Foundation (NCF) is a non-governmental organization that works to:",
    options: [
      "A. Promote the sustainable use and conservation of natural resources",
      "B. Regulate the stock exchange",
      "C. Build highways",
      "D. License radio stations"
    ],
    answer: "A",
    explanation: "The NCF is a leading Nigerian NGO focused on nature conservation, environmental education, and sustainable resource use.",
    subtopic: "agencies"
  },
  {
    question: "Which Nigerian agency combats illicit trafficking networks that are sometimes linked to organized wildlife crime?",
    options: [
      "A. NDLEA",
      "B. NAFDAC",
      "C. FRSC",
      "D. NCC"
    ],
    answer: "A",
    explanation: "The National Drug Law Enforcement Agency (NDLEA) combats illicit trafficking, which can overlap with organized wildlife crime networks.",
    subtopic: "agencies"
  },
  // ===== laws =====
  {
    question: "CITES is an international treaty that regulates:",
    options: [
      "A. International trade in endangered species",
      "B. Ocean fishing quotas only",
      "C. Airline safety",
      "D. Patent law"
    ],
    answer: "A",
    explanation: "CITES controls international trade in specimens of wild animals and plants to ensure it does not threaten their survival.",
    subtopic: "laws"
  },
  {
    question: "Game laws are enacted primarily to:",
    options: [
      "A. Protect wildlife from overhunting and poaching",
      "B. Promote urbanization",
      "C. Tax farmers",
      "D. Regulate television"
    ],
    answer: "A",
    explanation: "Game laws set seasons, limits, and protected species to prevent over-exploitation of wild animals through hunting.",
    subtopic: "laws"
  },
  {
    question: "The establishment of game reserves and national parks is a legal means of:",
    options: [
      "A. Creating protected areas where exploitation is restricted",
      "B. Encouraging mining",
      "C. Expanding farmland",
      "D. Building cities"
    ],
    answer: "A",
    explanation: "Protected areas legally restrict destructive activities so that flora and fauna can survive and reproduce safely.",
    subtopic: "laws"
  },
  {
    question: "A common legal penalty for poaching endangered animals in many countries is:",
    options: [
      "A. Imprisonment and heavy fines",
      "B. A warning letter only",
      "C. A small tax refund",
      "D. Free hunting licence"
    ],
    answer: "A",
    explanation: "Poaching protected species typically carries imprisonment and substantial fines to deter illegal hunting.",
    subtopic: "laws"
  },
  {
    question: "The Ramsar Convention is an international treaty focused on the conservation and wise use of:",
    options: [
      "A. Wetlands",
      "B. Mountains",
      "C. Deserts",
      "D. Grasslands only"
    ],
    answer: "A",
    explanation: "The Ramsar Convention promotes the conservation and sustainable use of wetlands as habitats of high ecological value.",
    subtopic: "laws"
  },
  {
    question: "Environmental protection decrees and laws often require industries to conduct a(n) ________ before starting projects.",
    options: [
      "A. Environmental Impact Assessment (EIA)",
      "B. Market survey",
      "C. Religious ceremony",
      "D. Sports event"
    ],
    answer: "A",
    explanation: "An Environmental Impact Assessment evaluates likely environmental effects of a proposed project before approval is granted.",
    subtopic: "laws"
  },
  {
    question: "Banning the export of endangered species without a permit is a measure provided under:",
    options: [
      "A. CITES",
      "B. The Geneva Convention",
      "C. Maritime law",
      "D. Copyright law"
    ],
    answer: "A",
    explanation: "CITES requires permits for international trade in listed species, effectively banning unpermitted export of endangered species.",
    subtopic: "laws"
  },
  {
    question: "National conservation laws often prohibit the collection of which of the following without a licence?",
    options: [
      "A. Endangered plants and animals",
      "B. Rainwater",
      "C. Sand from beaches only",
      "D. Atmospheric air"
    ],
    answer: "A",
    explanation: "Conservation laws protect endangered flora and fauna by banning unlicensed collection, trade, or possession.",
    subtopic: "laws"
  },
  {
    question: "Which of the following is a treaty aimed at reducing biodiversity loss by establishing protected areas and sustainable use?",
    options: [
      "A. Convention on Biological Diversity (CBD)",
      "B. Kyoto Protocol on cooling",
      "C. Geneva Accord",
      "D. Antarctic Treaty on whaling only"
    ],
    answer: "A",
    explanation: "The CBD commits nations to conserve biodiversity, use its components sustainably, and share benefits fairly.",
    subtopic: "laws"
  },
  {
    question: "Laws banning the burning of bush during dry seasons help conservation by:",
    options: [
      "A. Preventing destruction of habitats and soil fertility",
      "B. Increasing poaching",
      "C. Encouraging erosion",
      "D. Reducing rainfall legally"
    ],
    answer: "A",
    explanation: "Closed-season and anti-bush-burning laws protect vegetation and wildlife from uncontrolled fire damage.",
    subtopic: "laws"
  },
  {
    question: "The Montreal Protocol is a treaty that, while focused on ozone, indirectly aids conservation by:",
    options: [
      "A. Phasing out ozone-depleting substances that harm ecosystems",
      "B. Banning fishing",
      "C. Regulating football",
      "D. Taxing sugar"
    ],
    answer: "A",
    explanation: "By phasing out CFCs, the Montreal Protocol protects the ozone layer, shielding ecosystems from harmful UV radiation.",
    subtopic: "laws"
  },
  {
    question: "A legal 'closed season' for fishing means that:",
    options: [
      "A. Fishing is prohibited during breeding periods",
      "B. Fishing is allowed all year",
      "C. Only tourists may fish",
      "D. All fish are killed"
    ],
    answer: "A",
    explanation: "Closed seasons protect fish during spawning so populations can replenish and avoid collapse.",
    subtopic: "laws"
  },
  {
    question: "The Convention on the Conservation of Migratory Species (CMS) protects animals that:",
    options: [
      "A. Migrate across national boundaries",
      "B. Live only in one pond",
      "C. Are domesticated",
      "D. Are extinct"
    ],
    answer: "A",
    explanation: "CMS conserves migratory species whose survival depends on international cooperation across their range states.",
    subtopic: "laws"
  },
  {
    question: "Strict nature reserves are areas where, by law, human entry and exploitation are:",
    options: [
      "A. Highly restricted or prohibited",
      "B. Encouraged for farming",
      "C. Allowed for mining",
      "D. Open to logging"
    ],
    answer: "A",
    explanation: "Strict nature reserves permit only limited scientific access, forbidding exploitation to preserve pristine ecosystems.",
    subtopic: "laws"
  },
  {
    question: "Effective enforcement of conservation laws relies heavily on:",
    options: [
      "A. Rangers, courts, and penalties",
      "B. Weather forecasts",
      "C. Religious leaders only",
      "D. Social media likes"
    ],
    answer: "A",
    explanation: "Effective enforcement combines park rangers, the judiciary, and meaningful penalties to deter violators.",
    subtopic: "laws"
  },
  {
    question: "The Endangered Species Act (modeled in many countries) aims to:",
    options: [
      "A. Protect and recover imperiled species and their habitats",
      "B. Promote hunting",
      "C. Remove protected areas",
      "D. Subsidize logging"
    ],
    answer: "A",
    explanation: "Endangered Species Acts list threatened species and mandate recovery plans and habitat protection.",
    subtopic: "laws"
  },
  // ===== benefits =====
  {
    question: "Conservation of forests helps maintain the oxygen-carbon dioxide balance because trees:",
    options: [
      "A. Release oxygen during photosynthesis",
      "B. Produce carbon dioxide only",
      "C. Absorb oxygen",
      "D. Stop all respiration"
    ],
    answer: "A",
    explanation: "Through photosynthesis, trees absorb CO2 and release O2, helping regulate atmospheric gases.",
    subtopic: "benefits"
  },
  {
    question: "One major economic benefit of conservation is:",
    options: [
      "A. Income from ecotourism and sustainable resources",
      "B. Immediate clearing of all forests",
      "C. Loss of jobs",
      "D. Increased pollution"
    ],
    answer: "A",
    explanation: "Conserved landscapes attract ecotourism and supply renewable resources, generating long-term income.",
    subtopic: "benefits"
  },
  {
    question: "Protecting watersheds through conservation ensures:",
    options: [
      "A. A steady supply of clean water",
      "B. More flooding only",
      "C. Saltwater intrusion everywhere",
      "D. Loss of aquifers"
    ],
    answer: "A",
    explanation: "Forests and wetlands in watersheds filter and regulate water flow, securing clean water supplies.",
    subtopic: "benefits"
  },
  {
    question: "Biodiversity conservation is important because it:",
    options: [
      "A. Maintains ecosystem stability and resilience",
      "B. Reduces all plant life",
      "C. Causes monocultures",
      "D. Eliminates species interaction"
    ],
    answer: "A",
    explanation: "Diverse ecosystems are more stable and better able to recover from disturbances and climate stress.",
    subtopic: "benefits"
  },
  {
    question: "Conservation helps regulate the climate by:",
    options: [
      "A. Storing carbon in vegetation and soils",
      "B. Releasing all stored carbon",
      "C. Increasing deforestation",
      "D. Burning fossil fuels"
    ],
    answer: "A",
    explanation: "Forests and soils act as carbon sinks, removing CO2 from the atmosphere and mitigating climate change.",
    subtopic: "benefits"
  },
  {
    question: "Preserving genetic diversity in wild species benefits agriculture by:",
    options: [
      "A. Providing genes for crop and livestock improvement",
      "B. Eliminating all wild relatives",
      "C. Stopping breeding",
      "D. Reducing food variety"
    ],
    answer: "A",
    explanation: "Wild relatives supply disease-resistance and yield genes used to breed better crops and livestock.",
    subtopic: "benefits"
  },
  {
    question: "Conservation of soil through afforestation prevents:",
    options: [
      "A. Soil erosion and loss of fertility",
      "B. Plant growth",
      "C. Rain formation",
      "D. All microbial life"
    ],
    answer: "A",
    explanation: "Tree roots bind soil and reduce runoff, preventing erosion and maintaining farmland fertility.",
    subtopic: "benefits"
  },
  {
    question: "Protecting pollinators such as bees through conservation directly supports:",
    options: [
      "A. Crop production and food security",
      "B. Decline of all plants",
      "C. Increase in pests only",
      "D. Loss of fruits"
    ],
    answer: "A",
    explanation: "Pollinators are essential for the reproduction of many food crops, underpinning agricultural yields.",
    subtopic: "benefits"
  },
  {
    question: "Conservation of mangroves benefits coastal communities by:",
    options: [
      "A. Acting as storm barriers and nursery grounds for fish",
      "B. Increasing coastal erosion",
      "C. Removing all fish",
      "D. Blocking all tides"
    ],
    answer: "A",
    explanation: "Mangroves buffer storm surges and serve as breeding grounds for fish, supporting fisheries and protection.",
    subtopic: "benefits"
  },
  {
    question: "One benefit of conserving endangered species is that they may provide:",
    options: [
      "A. Undiscovered medicinal compounds",
      "B. No value at all",
      "C. Only pests",
      "D. Immediate extinction benefit"
    ],
    answer: "A",
    explanation: "Many medicines originate from wild species, so conserving them preserves potential future pharmaceutical sources.",
    subtopic: "benefits"
  },
  {
    question: "Sustainable harvesting of timber ensures that:",
    options: [
      "A. Future generations can still use forest resources",
      "B. Forests are removed permanently",
      "C. Soil is bare",
      "D. All trees die"
    ],
    answer: "A",
    explanation: "Sustainable forestry balances extraction with regrowth so resources remain available indefinitely.",
    subtopic: "benefits"
  },
  {
    question: "Conservation of natural habitats helps control pests and diseases by:",
    options: [
      "A. Maintaining natural predators and ecological balance",
      "B. Removing all predators",
      "C. Increasing monocultures",
      "D. Spreading pathogens"
    ],
    answer: "A",
    explanation: "Intact ecosystems harbour predators and competitors that naturally regulate pest and disease outbreaks.",
    subtopic: "benefits"
  },
  {
    question: "Ecotourism, a benefit of conservation, provides:",
    options: [
      "A. Employment and revenue for local communities",
      "B. Only environmental damage",
      "C. No income",
      "D. Permanent closure of parks"
    ],
    answer: "A",
    explanation: "Well-managed ecotourism creates jobs and funds local economies while incentivizing habitat protection.",
    subtopic: "benefits"
  },
  {
    question: "Conserving wetlands benefits people by:",
    options: [
      "A. Filtering pollutants and buffering floods",
      "B. Increasing flooding damage",
      "C. Removing all water",
      "D. Producing deserts"
    ],
    answer: "A",
    explanation: "Wetlands trap sediments and pollutants and absorb floodwaters, protecting downstream communities.",
    subtopic: "benefits"
  },
  {
    question: "Maintaining ecological balance through conservation prevents:",
    options: [
      "A. The dominance and collapse caused by a single species outbreak",
      "B. All plant growth",
      "C. Natural cycles",
      "D. Stable climates"
    ],
    answer: "A",
    explanation: "Conservation keeps food webs intact, preventing any one species from exploding and destabilizing the system.",
    subtopic: "benefits"
  },
  {
    question: "Conservation of rivers and lakes helps guarantee:",
    options: [
      "A. Clean freshwater for drinking and irrigation",
      "B. Saltwater everywhere",
      "C. Drying of all sources",
      "D. Toxic water only"
    ],
    answer: "A",
    explanation: "Protecting freshwater bodies from pollution secures safe water for people, crops, and wildlife.",
    subtopic: "benefits"
  },
  {
    question: "A key benefit of protecting the ozone layer via conservation-linked policies is:",
    options: [
      "A. Reduced harmful ultraviolet radiation reaching life on Earth",
      "B. More skin cancer",
      "C. Higher UV damage",
      "D. Loss of atmosphere"
    ],
    answer: "A",
    explanation: "A healthy ozone layer shields organisms from UV-B radiation, reducing cancer risk and ecosystem damage.",
    subtopic: "benefits"
  }
];

module.exports = questions;
