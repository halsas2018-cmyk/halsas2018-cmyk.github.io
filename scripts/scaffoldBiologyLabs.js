// Scaffold coming-soon biology lab experiments so every topic has 2-3 total.
// Re-runnable: skips topics already having >=2 experiment files, never touches
// existing experiment files or their index entries (they are re-enumerated).
//
//   node scripts/scaffoldBiologyLabs.js
//
// Convention (matches existing repo): each <expId>.js default-exports
//   { id, topicId, title, status: "coming-soon" }
// and the topic index.js imports each with explicit ./<file>.js and exports the array.

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BIO_DIR = path.resolve(__dirname, "..", "lab", "biology");

// Real biology practical titles per topic (2 each -> 3 total).
// Titles are topic-appropriate and distinct from any existing experiment.
const TITLES = {
  "secA-animal-nutrition": [
    "Food Tests for Starch, Glucose and Protein",
    "Effect of Salivary Amylase on Starch",
  ],
  "secA-behavioural-adaptation": [
    "Observing Taxis and Tropism in Organisms",
    "Recording Behaviour of Social Insects (Ants)",
  ],
  "secA-cell-properties": [
    "Comparing Living and Non-Living Materials",
    "Observing Sensitivity and Growth in Seedlings",
  ],
  "secA-cell-structure": [
    "Microscopic Examination of Plant and Animal Cells",
    "Observation of Onion Epidermis and Cheek Cells",
  ],
  "secA-classification": [
    "Classification of Local Plant and Animal Specimens",
    "Use of a Dichotomous Key to Identify Organisms",
  ],
  "secA-conservation-resources": [
    "Survey of Soil and Water Conservation Practices",
    "Assessing Wildlife and Forest Resource Use",
  ],
  "secA-conservation-ways": [
    "Studying the Role of Conservation Agencies",
    "Evaluating Benefits of Protected Areas",
  ],
  "secA-ecol-factors": [
    "Measuring Light Intensity as an Ecological Factor",
    "Measuring Soil pH and Edaphic Factors",
  ],
  "secA-ecol-management": [
    "Observing Biological Associations (Symbiosis)",
    "Studying the Effects of Pollution on a Habitat",
  ],
  "secA-ecol-measurement": [
    "Measuring Temperature and Humidity in a Habitat",
    "Measuring Wind Speed and Light in the Field",
  ],
  "secA-ecol-population": [
    "Studying Ecological Succession on a Fallow Plot",
    "Observing Methods of Pest Control",
  ],
  "secA-ecosystem": [
    "Constructing a Model of a Pond Ecosystem",
    "Identifying Components of a Local Ecosystem",
  ],
  "secA-energy-flow": [
    "Constructing a Food Chain and Energy Pyramid",
    "Studying Trophic Levels in a Grassland",
  ],
  "secA-evolution": [
    "Comparing Homologous Structures Across Species",
    "Studying Evidence of Evolution from Fossils",
  ],
  "secA-excretory-systems": [
    "Dissection of a Kidney Model",
    "Observing Excretory Products in Urine Analysis",
  ],
  "secA-food-webs": [
    "Building a Food Web from Field Observations",
    "Studying Decomposition and Nutrient Return",
  ],
  "secA-forms-of-cells": [
    "Observing Single-Celled Organisms under the Microscope",
    "Comparing Colonial and Filamentous Algae",
  ],
  "secA-genetics-applications": [
    "Studying Selective Breeding in Crop Plants",
    "Observing Genetic Crosses with Seed Traits",
  ],
  "secA-genetics-linkage": [
    "Determining Sex in a Given Organism",
    "Observing Sex-Linked Inheritance Patterns",
  ],
  "secA-genetics-probability": [
    "Monohybrid Cross Using a Punnett Square",
    "Investigating Hybrid Formation in Peas",
  ],
  "secA-genetics-terms": [
    "Defining Genetic Terms with Specimen Examples",
    "Illustrating Dominant and Recessive Traits",
  ],
  "secA-genetics-transmission": [
    "Tracing Trait Transmission in a Family",
    "Observing Chromosome Behaviour in Division",
  ],
  "secA-hormonal": [
    "Observing the Effect of Auxin on Root Growth",
    "Studying Animal Hormone Action with a Bioassay",
  ],
  "secA-internal-environment": [
    "Microscopic Examination of a Kidney Section",
    "Studying the Role of Skin in Homeostasis",
  ],
  "secA-microorganisms": [
    "Culturing Microorganisms on an Agar Plate",
    "Observing Bacteria and Fungi under the Microscope",
  ],
  "secA-nervous": [
    "Demonstrating a Simple Reflex Arc",
    "Dissecting a Grasshopper to Show Nervous Tissue",
  ],
  "secA-organization": [
    "Observing Levels of Organization in a Plant",
    "Studying Tissues Under the Light Microscope",
  ],
  "secA-reproduction": [
    "Dissection of a Flowering Plant Reproductive Whorl",
    "Observing Stages of Metamorphosis in Insects",
  ],
  "secA-respiratory-system": [
    "Measuring Human Lung Volume",
    "Detecting Carbon Dioxide in Exhaled Air",
  ],
  "secA-sense-organs": [
    "Dissection of a Mammalian Eye Model",
    "Studying the Structure of the Human Ear",
  ],
  "secA-supporting-tissues": [
    "Comparing Plant Supporting Tissues (Collenchyma/Xylem)",
    "Studying the Mammalian Skeleton",
  ],
  "secA-transport": [
    "Observing Blood Vessels in a Transparent Fin",
    "Studying Water Transport in a Plant Stem",
  ],
  "secA-variation-morphological": [
    "Measuring Morphological Variation in a Population",
    "Taking and Comparing Fingerprint Patterns",
  ],
  "secA-variation-physiological": [
    "Testing for Tongue Rolling Ability in a Group",
    "Determining Blood Groups in a Sample",
  ],
  "secC-adaptation-survival": [
    "Studying Adaptive Features of Desert Plants",
    "Observing Survival Structures in Local Animals",
  ],
  "secC-adaptive-colouration": [
    "Observing Camouflage in Preserved Specimens",
    "Studying Warning Colouration in Insects",
  ],
  "secC-agric-relevance": [
    "Studying the Role of Legumes in Soil Fertility",
    "Observing Crop Pest and Disease Control",
  ],
  "secC-alimentary": [
    "Dissection of a Rat/Mammal Alimentary Canal",
    "Studying the Layout of the Digestive Tract",
  ],
  "secC-blood-transfusion": [
    "Performing a Simulated Blood Grouping Test",
    "Studying Compatibility in Transfusion",
  ],
  "secC-cell-theory": [
    "Observing Cells to Verify the Cell Theory",
    "Drawing and Labelling Microscopic Cell Stages",
  ],
  "secC-components": [
    "Identifying Abiotic and Biotic Components",
    "Mapping a Local Habitat's Components",
  ],
  "secC-crime-detection": [
    "Using Blood Grouping in a Forensic Scenario",
    "Analysing Hair and Fibre Evidence",
  ],
  "secC-energy-transform": [
    "Tracing Energy Transformation in a Food Chain",
    "Studying Photosynthesis as Energy Capture",
  ],
  "secC-excretory": [
    "Observing Excretory Organs in a Dissection",
    "Studying the Nephron from a Model",
  ],
  "secC-feeding-habits": [
    "Classifying Animals by Feeding Habit",
    "Studying Mouthpart Adaptations in Insects",
  ],
  "secC-habitats": [
    "Comparing Aquatic and Terrestrial Habitats",
    "Surveying Organisms in a Pond Habitat",
  ],
  "secC-irritability": [
    "Demonstrating Plant Response to Stimuli",
    "Observing Irritability in a Simple Organism",
  ],
  "secC-management": [
    "Studying Population Tolerance to Pollutants",
    "Observing Succession in a Managed Plot",
  ],
  "secC-microorganisms": [
    "Culturing Microbes from Environmental Samples",
    "Observing Harmful and Beneficial Microbes",
  ],
  "secC-modes-nutrition": [
    "Classifying Organisms by Mode of Nutrition",
    "Studying Saprophytic and Parasitic Modes",
  ],
  "secC-nitrogen-cycle": [
    "Modelling the Nitrogen Cycle with a Flow Chart",
    "Studying Nitrogen-Fixing Organisms in Soil",
  ],
  "secC-nutrient-cycling": [
    "Tracing Carbon Cycling in a Habitat",
    "Studying Decomposition and Nutrient Return",
  ],
  "secC-paternity": [
    "Using Blood Groups to Determine Paternity",
    "Studying Inheritance Patterns in a Case",
  ],
  "secC-reproduction": [
    "Dissecting Reproductive Structures of a Flower",
    "Observing Asexual Reproduction in Fungi",
  ],
  "secC-sense-organs": [
    "Studying the Structure of the Eye Model",
    "Observing Response of the Ear to Sound",
  ],
  "secC-structural-adaptation": [
    "Comparing Structural Adaptations of Birds",
    "Studying Leaf Adaptations in Aquatic Plants",
  ],
};

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function jsIdent(file) {
  // file is like "secA-cell-structure-1.js" -> "secA_cell_structure_1"
  return file.replace(/\.js$/, "").replace(/[^a-zA-Z0-9]/g, "_");
}

function buildExperimentFile(topicId, expId, title) {
  const ident = expId.replace(/-/g, "_");
  return (
    `const ${ident} = {\n` +
    `  id: "${expId}",\n` +
    `  topicId: "${topicId}",\n` +
    `  title: "${title}",\n` +
    `  status: "coming-soon",\n` +
    `};\n\n` +
    `export default ${ident};\n`
  );
}

function buildIndex(existingFiles, newFiles) {
  // Existing experiments (incl. interactive) keep their order first; new ones appended.
  const existing = [...existingFiles].sort();
  const added = [...newFiles].sort();
  const all = [...existing, ...added];
  const imports = all.map((f) => `import ${jsIdent(f)} from "./${f}";`).join("\n");
  const arr = all.map((f) => `  ${jsIdent(f)},`).join("\n");
  return `${imports}\n\nconst experiments = [\n${arr}\n];\n\nexport default experiments;\n`;
}

let expanded = 0;
let added = 0;

// A file we generated follows the pattern "<topicId>-<digits>.js".
const addedRe = (topicId) => new RegExp(`^${topicId.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}-\\d+\\.js$`);

for (const topicId of Object.keys(TITLES)) {
  const dir = path.join(BIO_DIR, topicId);
  if (!fs.existsSync(dir)) {
    console.log("SKIP (no dir):", topicId);
    continue;
  }
  const all = fs.readdirSync(dir).filter((f) => f.endsWith(".js") && f !== "index.js");
  const re = addedRe(topicId);
  let existing = all.filter((f) => !re.test(f));
  let addedFiles = all.filter((f) => re.test(f));

  if (all.length >= 2) {
    // Already has enough; just re-write index with existing-first ordering.
    fs.writeFileSync(path.join(dir, "index.js"), buildIndex(existing, addedFiles));
    console.log("OK (>=2):", topicId, all.length);
    continue;
  }

  const titles = TITLES[topicId];
  for (let i = 0; i < titles.length; i++) {
    const seq = all.length + i + 1;
    const expId = `${topicId}-${seq}`;
    const file = `${expId}.js`;
    fs.writeFileSync(path.join(dir, file), buildExperimentFile(topicId, expId, titles[i]));
    addedFiles.push(file);
    added++;
  }
  fs.writeFileSync(path.join(dir, "index.js"), buildIndex(existing, addedFiles));
  expanded++;
  console.log("EXPANDED:", topicId, `was ${all.length} -> now ${all.length + titles.length} (+${titles.length})`);
}

console.log(`\nDone. Topics expanded: ${expanded}. Experiments added: ${added}.`);
