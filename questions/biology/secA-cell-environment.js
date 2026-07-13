// biology — Cell & Environment
const questions = [
  {
    question: "The net movement of particles from a region of higher concentration to a region of lower concentration is called?",
    options: [
      "A. Osmosis",
      "B. Diffusion",
      "C. Active transport",
      "D. Transpiration"
    ],
    answer: "B",
    explanation: "Diffusion is passive movement down a concentration gradient.",
    subtopic: "diffusion"
  },
  {
    question: "Diffusion requires?",
    options: [
      "A. Energy from ATP",
      "B. No energy input (it is passive)",
      "C. A membrane pump",
      "D. Living cells only"
    ],
    answer: "B",
    explanation: "Diffusion is a passive process driven by the kinetic energy of molecules.",
    subtopic: "diffusion"
  },
  {
    question: "Osmosis is the diffusion of?",
    options: [
      "A. Any solute",
      "B. Water molecules through a selectively permeable membrane",
      "C. Glucose",
      "D. Proteins"
    ],
    answer: "B",
    explanation: "Osmosis is the net movement of water across a semi-permeable membrane.",
    subtopic: "osmosis"
  },
  {
    question: "In osmosis, water moves from a region of?",
    options: [
      "A. Low water potential to high water potential",
      "B. High water potential to low water potential",
      "C. High solute to low solute only",
      "D. Equal concentration to equal concentration"
    ],
    answer: "B",
    explanation: "Water moves from a dilute (high water potential) solution to a concentrated (low water potential) one.",
    subtopic: "osmosis"
  },
  {
    question: "A cell placed in a hypotonic solution will?",
    options: [
      "A. Shrink",
      "B. Become turgid (swell) as water enters",
      "C. Stay the same",
      "D. Burst immediately always"
    ],
    answer: "B",
    explanation: "In a hypotonic solution water enters the cell, making it turgid (plant) or swollen (animal).",
    subtopic: "osmosis"
  },
  {
    question: "A cell placed in a hypertonic solution will?",
    options: [
      "A. Swell",
      "B. Lose water and shrink (plasmolyse in plants)",
      "C. Remain unchanged",
      "D. Divide"
    ],
    answer: "B",
    explanation: "Water leaves the cell into the more concentrated external solution.",
    subtopic: "osmosis"
  },
  {
    question: "When a plant cell loses water and the membrane pulls away from the wall, the process is?",
    options: [
      "A. Turgidity",
      "B. Plasmolysis",
      "C. Diffusion",
      "D. Endocytosis"
    ],
    answer: "B",
    explanation: "Plasmolysis is the shrinkage of the protoplast away from the cell wall.",
    subtopic: "osmosis"
  },
  {
    question: "Active transport differs from diffusion in that it?",
    options: [
      "A. Needs no energy",
      "B. Moves substances against a concentration gradient using energy",
      "C. Only moves water",
      "D. Is always passive"
    ],
    answer: "B",
    explanation: "Active transport uses ATP to move molecules against their gradient.",
    subtopic: "active transport"
  },
  {
    question: "The energy used in active transport comes from?",
    options: [
      "A. Sunlight directly",
      "B. ATP (respiration)",
      "C. Diffusion",
      "D. Osmosis"
    ],
    answer: "B",
    explanation: "ATP produced by respiration powers active transport pumps.",
    subtopic: "active transport"
  },
  {
    question: "Root hair cells absorb mineral salts from the soil mainly by?",
    options: [
      "A. Osmosis only",
      "B. Active transport",
      "C. Diffusion of salts out",
      "D. Transpiration"
    ],
    answer: "B",
    explanation: "Mineral ions are often absorbed against their gradient via active transport.",
    subtopic: "active transport"
  },
  {
    question: "Oxygen enters a cell from the blood mainly by?",
    options: [
      "A. Active transport",
      "B. Diffusion",
      "C. Osmosis",
      "D. Bulk flow"
    ],
    answer: "B",
    explanation: "Oxygen diffuses from high to low concentration across the membrane.",
    subtopic: "diffusion"
  },
  {
    question: "Carbon dioxide moves from body cells into the blood by?",
    options: [
      "A. Active transport",
      "B. Diffusion",
      "C. Osmosis",
      "D. Phagocytosis"
    ],
    answer: "B",
    explanation: "CO2 diffuses down its concentration gradient into the blood.",
    subtopic: "diffusion"
  },
  {
    question: "Which process explains water uptake by plant roots from the soil?",
    options: [
      "A. Active transport",
      "B. Osmosis",
      "C. Diffusion of solutes",
      "D. Translocation"
    ],
    answer: "B",
    explanation: "Soil water enters root hairs by osmosis.",
    subtopic: "osmosis"
  },
  {
    question: "A selectively permeable membrane allows?",
    options: [
      "A. Everything to pass",
      "B. Only certain substances to pass",
      "C. Nothing to pass",
      "D. Only proteins"
    ],
    answer: "B",
    explanation: "Selective permeability restricts passage to specific molecules.",
    subtopic: "diffusion"
  },
  {
    question: "Diffusion is fastest when?",
    options: [
      "A. The distance is large",
      "B. The concentration gradient is steep and distance is short",
      "C. Temperature is very low",
      "D. The membrane is thick"
    ],
    answer: "B",
    explanation: "A steep gradient and short distance speed up diffusion (Fick's law).",
    subtopic: "diffusion"
  },
  {
    question: "In an isotonic solution, a cell will?",
    options: [
      "A. Burst",
      "B. Shrink",
      "C. Neither gain nor lose net water",
      "D. Become plasmolysed"
    ],
    answer: "C",
    explanation: "Isotonic means equal water potential inside and out; no net water movement.",
    subtopic: "osmosis"
  },
  {
    question: "Red blood cells placed in pure water will?",
    options: [
      "A. Plasmolyse",
      "B. Burst (haemolyse) due to water entering",
      "C. Stay the same",
      "D. Shrink"
    ],
    answer: "B",
    explanation: "Animal cells have no wall; water inflow causes them to burst (lyse).",
    subtopic: "osmosis"
  },
  {
    question: "The movement of substances into a cell by engulfing them in a vesicle is?",
    options: [
      "A. Exocytosis",
      "B. Endocytosis",
      "C. Osmosis",
      "D. Diffusion"
    ],
    answer: "B",
    explanation: "Endocytosis (e.g. phagocytosis) takes in materials by membrane engulfment.",
    subtopic: "active transport"
  },
  {
    question: "Which of the following is an example of active transport in humans?",
    options: [
      "A. Oxygen entering cells",
      "B. Glucose reabsorption in kidney tubules against a gradient",
      "C. CO2 leaving cells",
      "D. Water entering roots"
    ],
    answer: "B",
    explanation: "Kidney tubules reabsorb glucose against its gradient using active transport.",
    subtopic: "active transport"
  },
  {
    question: "Water potential is highest in?",
    options: [
      "A. A concentrated sugar solution",
      "B. Pure water",
      "C. A salty solution",
      "D. Protoplasm"
    ],
    answer: "B",
    explanation: "Pure water has the highest (zero) water potential; solutes lower it.",
    subtopic: "osmosis"
  },
  {
    question: "Which process does NOT require a living, metabolising cell?",
    options: [
      "A. Active transport",
      "B. Diffusion",
      "C. Endocytosis",
      "D. Exocytosis"
    ],
    answer: "B",
    explanation: "Diffusion can occur in non-living systems; active processes need metabolism.",
    subtopic: "diffusion"
  },
  {
    question: "A plant cell in a concentrated salt solution becomes flaccid because of?",
    options: [
      "A. Turgidity",
      "B. Loss of water by osmosis",
      "C. Active uptake of salt",
      "D. Cell division"
    ],
    answer: "B",
    explanation: "Water leaves the cell by osmosis, reducing turgor.",
    subtopic: "osmosis"
  },
  {
    question: "The rate of diffusion is increased by?",
    options: [
      "A. Lower temperature",
      "B. Larger surface area",
      "C. Thicker membrane",
      "D. Smaller gradient"
    ],
    answer: "B",
    explanation: "A larger surface area provides more space for molecules to cross.",
    subtopic: "diffusion"
  },
  {
    question: "Active transport is needed when a cell must?",
    options: [
      "A. Move water out",
      "B. Accumulate substances against a concentration gradient",
      "C. Let gases diffuse",
      "D. Equalise concentrations"
    ],
    answer: "B",
    explanation: "Accumulating substances from low to high concentration requires energy.",
    subtopic: "active transport"
  },
  {
    question: "Which of these moves WITH a concentration gradient and needs NO energy?",
    options: [
      "A. Active transport",
      "B. Diffusion",
      "C. Endocytosis",
      "D. Exocytosis"
    ],
    answer: "B",
    explanation: "Diffusion is passive, down the gradient.",
    subtopic: "diffusion"
  },
  {
    question: "The term for the pressure exerted by water moving into a plant cell is?",
    options: [
      "A. Osmotic pressure",
      "B. Turgor pressure",
      "C. Blood pressure",
      "D. Air pressure"
    ],
    answer: "B",
    explanation: "Turgor pressure is the outward pressure of the protoplast on the wall.",
    subtopic: "osmosis"
  },
  {
    question: "Mineral ions in the soil are usually at a LOWER concentration than inside root cells, so they are taken up by?",
    options: [
      "A. Osmosis",
      "B. Active transport",
      "C. Diffusion outward",
      "D. Transpiration"
    ],
    answer: "B",
    explanation: "Uptake against a gradient requires active transport.",
    subtopic: "active transport"
  },
  {
    question: "Which statement about osmosis is correct?",
    options: [
      "A. It moves solutes, not water",
      "B. It is diffusion of water through a semi-permeable membrane",
      "C. It needs ATP",
      "D. It only occurs in animals"
    ],
    answer: "B",
    explanation: "Osmosis specifically refers to water diffusion across a selective membrane.",
    subtopic: "osmosis"
  },
  {
    question: "A partially permeable membrane is one that?",
    options: [
      "A. Blocks all molecules",
      "B. Allows solvent (water) but restricts many solutes",
      "C. Allows only proteins",
      "D. Has no pores"
    ],
    answer: "B",
    explanation: "Such membranes let water through but limit solute passage.",
    subtopic: "osmosis"
  },
  {
    question: "The process by which amoeba engulfs food particles is?",
    options: [
      "A. Pinocytosis",
      "B. Phagocytosis",
      "C. Osmosis",
      "D. Diffusion"
    ],
    answer: "B",
    explanation: "Phagocytosis is the engulfing of solid particles by a cell.",
    subtopic: "active transport"
  },
  {
    question: "Which of the following requires carrier proteins in the membrane?",
    options: [
      "A. Simple diffusion of gases",
      "B. Facilitated diffusion and active transport",
      "C. Osmosis through a wall",
      "D. Bulk flow"
    ],
    answer: "B",
    explanation: "Facilitated diffusion and active transport both use membrane carrier/channel proteins.",
    subtopic: "active transport"
  },
  {
    question: "Facilitated diffusion differs from active transport because it?",
    options: [
      "A. Uses ATP",
      "B. Is passive (down gradient) but needs a carrier",
      "C. Moves against gradient",
      "D. Only moves water"
    ],
    answer: "B",
    explanation: "Facilitated diffusion is passive but relies on carrier proteins.",
    subtopic: "diffusion"
  },
  {
    question: "If a cell is surrounded by a solution with the same water potential as its contents, the cell is in?",
    options: [
      "A. A hypotonic solution",
      "B. An isotonic solution",
      "C. A hypertonic solution",
      "D. A plasmolysing solution"
    ],
    answer: "B",
    explanation: "Equal water potential means isotonic; no net water movement.",
    subtopic: "osmosis"
  },
  {
    question: "In mammals, the tendency of red blood cells to burst in water is prevented in the body by?",
    options: [
      "A. Active transport out of water",
      "B. Blood plasma being isotonic to the cells",
      "C. A cell wall",
      "D. Osmosis reversal"
    ],
    answer: "B",
    explanation: "Plasma is isotonic to RBCs, preventing net water inflow.",
    subtopic: "osmosis"
  },
  {
    question: "The main reason leaves have a large surface area is to?",
    options: [
      "A. Store water",
      "B. Increase the rate of gas diffusion (and light capture)",
      "C. Reduce photosynthesis",
      "D. Stop transpiration"
    ],
    answer: "B",
    explanation: "A large surface area speeds diffusion of gases for photosynthesis/respiration.",
    subtopic: "diffusion"
  },
  {
    question: "Which of the following is a passive process?",
    options: [
      "A. Active transport",
      "B. Osmosis",
      "C. Endocytosis",
      "D. Exocytosis"
    ],
    answer: "B",
    explanation: "Osmosis, like diffusion, is passive and needs no energy.",
    subtopic: "osmosis"
  },
  {
    question: "When the external solution is more concentrated than the cell sap, the solution is?",
    options: [
      "A. Hypotonic",
      "B. Hypertonic",
      "C. Isotonic",
      "D. Neutral"
    ],
    answer: "B",
    explanation: "A more concentrated (lower water potential) external solution is hypertonic.",
    subtopic: "osmosis"
  },
  {
    question: "The uptake of glucose by the human intestine is an example of?",
    options: [
      "A. Osmosis",
      "B. Facilitated diffusion/active transport",
      "C. Simple diffusion only",
      "D. Phagocytosis"
    ],
    answer: "B",
    explanation: "Glucose uses carriers; often co-transported actively with sodium.",
    subtopic: "active transport"
  },
  {
    question: "Which process moves molecules from low to high concentration?",
    options: [
      "A. Diffusion",
      "B. Osmosis",
      "C. Active transport",
      "D. Facilitated diffusion"
    ],
    answer: "C",
    explanation: "Only active transport moves substances against their gradient.",
    subtopic: "active transport"
  },
  {
    question: "The concentration gradient is the?",
    options: [
      "A. Difference in concentration between two regions",
      "B. Total amount of solute",
      "C. Speed of the membrane",
      "D. Size of the cell"
    ],
    answer: "A",
    explanation: "A gradient is the difference driving passive movement.",
    subtopic: "diffusion"
  },
  {
    question: "Exocytosis is the process by which a cell?",
    options: [
      "A. Takes in solids",
      "B. Releases materials in vesicles to the outside",
      "C. Absorbs water",
      "D. Divides"
    ],
    answer: "B",
    explanation: "Exocytosis expels substances via fusion of vesicles with the membrane.",
    subtopic: "active transport"
  },
  {
    question: "Which of these best explains why a dried seed swells when placed in water?",
    options: [
      "A. Active transport",
      "B. Osmosis",
      "C. Diffusion of solutes out",
      "D. Respiration"
    ],
    answer: "B",
    explanation: "Water enters the seed by osmosis, causing swelling.",
    subtopic: "osmosis"
  },
  {
    question: "The movement of water from the soil into a root hair is driven by?",
    options: [
      "A. Active transport of water",
      "B. A water potential gradient (osmosis)",
      "C. Diffusion of salts out",
      "D. Wind"
    ],
    answer: "B",
    explanation: "Soil water has higher water potential than root hair sap, so water enters by osmosis.",
    subtopic: "osmosis"
  },
  {
    question: "Temperature affects diffusion because higher temperature?",
    options: [
      "A. Stops molecular motion",
      "B. Increases molecular kinetic energy and rate",
      "C. Lowers the gradient",
      "D. Blocks membranes"
    ],
    answer: "B",
    explanation: "Heat increases particle motion, speeding diffusion.",
    subtopic: "diffusion"
  },
  {
    question: "A cell that uses active transport extensively would need many?",
    options: [
      "A. Chloroplasts",
      "B. Mitochondria (for ATP)",
      "C. Vacuoles",
      "D. Cell walls"
    ],
    answer: "B",
    explanation: "Active transport needs ATP, so ATP-producing mitochondria are abundant.",
    subtopic: "active transport"
  },
  {
    question: "Which of the following is TRUE of plasmolysis?",
    options: [
      "A. It occurs in hypotonic solution",
      "B. It is the shrinkage of the protoplast in a hypertonic solution",
      "C. It increases turgor",
      "D. It happens only in animal cells"
    ],
    answer: "B",
    explanation: "Plasmolysis occurs when water leaves a plant cell in a hypertonic solution.",
    subtopic: "osmosis"
  },
  {
    question: "Simple diffusion across a membrane is fastest for?",
    options: [
      "A. Large proteins",
      "B. Small, non-polar molecules like oxygen",
      "C. Ions only",
      "D. Starch"
    ],
    answer: "B",
    explanation: "Small non-polar molecules cross membranes most easily by simple diffusion.",
    subtopic: "diffusion"
  },
  {
    question: "The movement of water out of a cell into a strong sugar solution demonstrates?",
    options: [
      "A. Active transport",
      "B. Osmosis",
      "C. Diffusion of sugar in",
      "D. Endocytosis"
    ],
    answer: "B",
    explanation: "Net water loss to a concentrated solution is osmosis.",
    subtopic: "osmosis"
  },
  {
    question: "An advantage of active transport to organisms is that it allows?",
    options: [
      "A. Movement only down gradients",
      "B. Uptake of essential substances even when scarce outside",
      "C. No energy use",
      "D. Random distribution"
    ],
    answer: "B",
    explanation: "Active transport lets cells accumulate needed substances regardless of external concentration.",
    subtopic: "active transport"
  }
];

module.exports = questions;
