import secA_classification from "./secA-classification/index.js";
import secA_organization from "./secA-organization/index.js";
import secA_forms_of_cells from "./secA-forms-of-cells/index.js";
import secA_cell_structure from "./secA-cell-structure/index.js";
import secA_cell_environment from "./secA-cell-environment/index.js";
import secA_cell_properties from "./secA-cell-properties/index.js";
import secA_supporting_tissues from "./secA-supporting-tissues/index.js";
import secA_transport from "./secA-transport/index.js";
import secA_respiratory_system from "./secA-respiratory-system/index.js";
import secA_excretory_systems from "./secA-excretory-systems/index.js";
import secA_internal_environment from "./secA-internal-environment/index.js";
import secA_hormonal from "./secA-hormonal/index.js";
import secA_nervous from "./secA-nervous/index.js";
import secA_sense_organs from "./secA-sense-organs/index.js";
import secA_reproduction from "./secA-reproduction/index.js";
import secA_plant_nutrition from "./secA-plant-nutrition/index.js";
import secA_animal_nutrition from "./secA-animal-nutrition/index.js";
import secA_ecosystem from "./secA-ecosystem/index.js";
import secA_ecol_factors from "./secA-ecol-factors/index.js";
import secA_ecol_measurement from "./secA-ecol-measurement/index.js";
import secA_food_webs from "./secA-food-webs/index.js";
import secA_energy_flow from "./secA-energy-flow/index.js";
import secA_ecol_management from "./secA-ecol-management/index.js";
import secA_ecol_population from "./secA-ecol-population/index.js";
import secA_microorganisms from "./secA-microorganisms/index.js";
import secA_conservation_resources from "./secA-conservation-resources/index.js";
import secA_conservation_ways from "./secA-conservation-ways/index.js";
import secA_variation_morphological from "./secA-variation-morphological/index.js";
import secA_variation_physiological from "./secA-variation-physiological/index.js";
import secA_genetics_terms from "./secA-genetics-terms/index.js";
import secA_genetics_transmission from "./secA-genetics-transmission/index.js";
import secA_genetics_probability from "./secA-genetics-probability/index.js";
import secA_genetics_linkage from "./secA-genetics-linkage/index.js";
import secA_genetics_applications from "./secA-genetics-applications/index.js";
import secA_behavioural_adaptation from "./secA-behavioural-adaptation/index.js";
import secA_evolution from "./secA-evolution/index.js";
import secC_cell_theory from "./secC-cell-theory/index.js";
import secC_irritability from "./secC-irritability/index.js";
import secC_excretory from "./secC-excretory/index.js";
import secC_sense_organs from "./secC-sense-organs/index.js";
import secC_reproduction from "./secC-reproduction/index.js";
import secC_nitrogen_cycle from "./secC-nitrogen-cycle/index.js";
import secC_modes_nutrition from "./secC-modes-nutrition/index.js";
import secC_alimentary from "./secC-alimentary/index.js";
import secC_feeding_habits from "./secC-feeding-habits/index.js";
import secC_components from "./secC-components/index.js";
import secC_energy_transform from "./secC-energy-transform/index.js";
import secC_nutrient_cycling from "./secC-nutrient-cycling/index.js";
import secC_management from "./secC-management/index.js";
import secC_habitats from "./secC-habitats/index.js";
import secC_agric_relevance from "./secC-agric-relevance/index.js";
import secC_microorganisms from "./secC-microorganisms/index.js";
import secC_crime_detection from "./secC-crime-detection/index.js";
import secC_blood_transfusion from "./secC-blood-transfusion/index.js";
import secC_paternity from "./secC-paternity/index.js";
import secC_adaptation_survival from "./secC-adaptation-survival/index.js";
import secC_structural_adaptation from "./secC-structural-adaptation/index.js";
import secC_adaptive_colouration from "./secC-adaptive-colouration/index.js";

const topics = [
  { topicId: "secA-classification", topicName: "Classification of Living Things", experiments: secA_classification },
  { topicId: "secA-organization", topicName: "Organization of Life", experiments: secA_organization },
  { topicId: "secA-forms-of-cells", topicName: "Forms of Living Cells", experiments: secA_forms_of_cells },
  { topicId: "secA-cell-structure", topicName: "Cell Structure & Functions", experiments: secA_cell_structure },
  { topicId: "secA-cell-environment", topicName: "Cell & Environment", experiments: secA_cell_environment },
  { topicId: "secA-cell-properties", topicName: "Properties & Functions of Living Cells", experiments: secA_cell_properties },
  { topicId: "secA-supporting-tissues", topicName: "Tissues & Supporting Systems", experiments: secA_supporting_tissues },
  { topicId: "secA-transport", topicName: "Transport in Living Things", experiments: secA_transport },
  { topicId: "secA-respiratory-system", topicName: "Respiratory System", experiments: secA_respiratory_system },
  { topicId: "secA-excretory-systems", topicName: "Excretory Systems & Mechanisms", experiments: secA_excretory_systems },
  { topicId: "secA-internal-environment", topicName: "Regulation of Internal Environment", experiments: secA_internal_environment },
  { topicId: "secA-hormonal", topicName: "Hormonal Coordination", experiments: secA_hormonal },
  { topicId: "secA-nervous", topicName: "Nervous Coordination", experiments: secA_nervous },
  { topicId: "secA-sense-organs", topicName: "Sense Organs", experiments: secA_sense_organs },
  { topicId: "secA-reproduction", topicName: "Reproduction", experiments: secA_reproduction },
  { topicId: "secA-plant-nutrition", topicName: "Plant Nutrition", experiments: secA_plant_nutrition },
  { topicId: "secA-animal-nutrition", topicName: "Animal Nutrition", experiments: secA_animal_nutrition },
  { topicId: "secA-ecosystem", topicName: "Ecosystem", experiments: secA_ecosystem },
  { topicId: "secA-ecol-factors", topicName: "Ecological Factors", experiments: secA_ecol_factors },
  { topicId: "secA-ecol-measurement", topicName: "Simple Measurement of Ecological Factors", experiments: secA_ecol_measurement },
  { topicId: "secA-food-webs", topicName: "Food Webs & Trophic Levels", experiments: secA_food_webs },
  { topicId: "secA-energy-flow", topicName: "Energy Flow", experiments: secA_energy_flow },
  { topicId: "secA-ecol-management", topicName: "Ecological Management", experiments: secA_ecol_management },
  { topicId: "secA-ecol-population", topicName: "Ecology of Population", experiments: secA_ecol_population },
  { topicId: "secA-microorganisms", topicName: "Microorganisms & Health", experiments: secA_microorganisms },
  { topicId: "secA-conservation-resources", topicName: "Resources to Conserve", experiments: secA_conservation_resources },
  { topicId: "secA-conservation-ways", topicName: "Ways of Ensuring Conservation", experiments: secA_conservation_ways },
  { topicId: "secA-variation-morphological", topicName: "Morphological Variations", experiments: secA_variation_morphological },
  { topicId: "secA-variation-physiological", topicName: "Physiological Variations", experiments: secA_variation_physiological },
  { topicId: "secA-genetics-terms", topicName: "Genetic Terminologies", experiments: secA_genetics_terms },
  { topicId: "secA-genetics-transmission", topicName: "Transmission & Expression of Characteristics", experiments: secA_genetics_transmission },
  { topicId: "secA-genetics-probability", topicName: "Probability in Genetics", experiments: secA_genetics_probability },
  { topicId: "secA-genetics-linkage", topicName: "Linkage, Sex Determination & Sex-linked Characters", experiments: secA_genetics_linkage },
  { topicId: "secA-genetics-applications", topicName: "Applications of Heredity Principles", experiments: secA_genetics_applications },
  { topicId: "secA-behavioural-adaptation", topicName: "Behavioural Adaptations in Social Animals", experiments: secA_behavioural_adaptation },
  { topicId: "secA-evolution", topicName: "Evolution", experiments: secA_evolution },
  { topicId: "secC-cell-theory", topicName: "Cell Theory", experiments: secC_cell_theory },
  { topicId: "secC-irritability", topicName: "Irritability as Basic Characteristic", experiments: secC_irritability },
  { topicId: "secC-excretory", topicName: "Excretory Systems", experiments: secC_excretory },
  { topicId: "secC-sense-organs", topicName: "Sense Organs", experiments: secC_sense_organs },
  { topicId: "secC-reproduction", topicName: "Reproduction", experiments: secC_reproduction },
  { topicId: "secC-nitrogen-cycle", topicName: "Nitrogen Cycle", experiments: secC_nitrogen_cycle },
  { topicId: "secC-modes-nutrition", topicName: "Modes of Nutrition", experiments: secC_modes_nutrition },
  { topicId: "secC-alimentary", topicName: "Alimentary System", experiments: secC_alimentary },
  { topicId: "secC-feeding-habits", topicName: "Feeding Habits", experiments: secC_feeding_habits },
  { topicId: "secC-components", topicName: "Ecological Components", experiments: secC_components },
  { topicId: "secC-energy-transform", topicName: "Energy Transformation in Nature", experiments: secC_energy_transform },
  { topicId: "secC-nutrient-cycling", topicName: "Nutrient Cycling in Nature", experiments: secC_nutrient_cycling },
  { topicId: "secC-management", topicName: "Ecological Management", experiments: secC_management },
  { topicId: "secC-habitats", topicName: "Habitats", experiments: secC_habitats },
  { topicId: "secC-agric-relevance", topicName: "Relevance of Biology to Agriculture", experiments: secC_agric_relevance },
  { topicId: "secC-microorganisms", topicName: "Microorganisms: Man and His Health", experiments: secC_microorganisms },
  { topicId: "secC-crime-detection", topicName: "Crime Detection", experiments: secC_crime_detection },
  { topicId: "secC-blood-transfusion", topicName: "Blood Transfusion", experiments: secC_blood_transfusion },
  { topicId: "secC-paternity", topicName: "Determination of Paternity", experiments: secC_paternity },
  { topicId: "secC-adaptation-survival", topicName: "Adaptation for Survival", experiments: secC_adaptation_survival },
  { topicId: "secC-structural-adaptation", topicName: "Structural Adaptation", experiments: secC_structural_adaptation },
  { topicId: "secC-adaptive-colouration", topicName: "Adaptive Colouration", experiments: secC_adaptive_colouration },
];

export default topics;
