import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../theme";
import { haptic } from "../haptic";
import HomeScreen from "../screens/HomeScreen";
import LabHubScreen from "../lab/LabHubScreen";
import ChemistryExperimentsScreen from "../lab/ChemistryExperimentsScreen";
import BiologyExperimentsScreen from "../lab/BiologyExperimentsScreen";
import PhysicsExperimentsScreen from "../lab/PhysicsExperimentsScreen";
import ExperimentsScreen from "../lab/ExperimentsScreen";
import TitrationExperiment from "../lab/chemistry/acids/TitrationExperiment";
import TitrationPrep from "../lab/titration/TitrationPrep";
import RateExperiment from "../lab/chemistry/kinetics/RateExperiment";
import RatePrep from "../lab/chemistry/kinetics/RatePrep";
// Chemistry interactive labs
import MetalsExtractionPrep from "../lab/chemistry/metals/MetalsExtractionPrep";
import MetalsExtractionLab from "../lab/chemistry/metals/MetalsExtractionLab";
import MetalsReactivityPrep from "../lab/chemistry/metals/MetalsReactivityPrep";
import MetalsReactivityLab from "../lab/chemistry/metals/MetalsReactivityLab";
import MetalsRustingPrep from "../lab/chemistry/metals/MetalsRustingPrep";
import MetalsRustingLab from "../lab/chemistry/metals/MetalsRustingLab";
import RedoxElectroplatingPrep from "../lab/chemistry/redox/RedoxElectroplatingPrep";
import RedoxElectroplatingLab from "../lab/chemistry/redox/RedoxElectroplatingLab";
import RedoxDisplacementPrep from "../lab/chemistry/redox/RedoxDisplacementPrep";
import RedoxDisplacementLab from "../lab/chemistry/redox/RedoxDisplacementLab";
import SepChromatographyPrep from "../lab/chemistry/separation/SepChromatographyPrep";
import SepChromatographyLab from "../lab/chemistry/separation/SepChromatographyLab";
import SepDistillationPrep from "../lab/chemistry/separation/SepDistillationPrep";
import SepDistillationLab from "../lab/chemistry/separation/SepDistillationLab";
import SepFiltrationPrep from "../lab/chemistry/separation/SepFiltrationPrep";
import SepFiltrationLab from "../lab/chemistry/separation/SepFiltrationLab";
import StatesDiffusionPrep from "../lab/chemistry/states/StatesDiffusionPrep";
import StatesDiffusionLab from "../lab/chemistry/states/StatesDiffusionLab";
import StatesGasLawsPrep from "../lab/chemistry/states/StatesGasLawsPrep";
import StatesGasLawsLab from "../lab/chemistry/states/StatesGasLawsLab";
import EnergyCalorimetryPrep from "../lab/chemistry/energy/EnergyCalorimetryPrep";
import EnergyCalorimetryLab from "../lab/chemistry/energy/EnergyCalorimetryLab";
import AcidsSaltPrepPrep from "../lab/chemistry/acids/AcidsSaltPrepPrep";
import AcidsSaltPrepLab from "../lab/chemistry/acids/AcidsSaltPrepLab";
// Biology interactive labs
import BioOsmosisPrep from "../lab/biology/secA-cell-environment/BioOsmosisPrep";
import BioOsmosisLab from "../lab/biology/secA-cell-environment/BioOsmosisLab";
import BioPhotosynthesisPrep from "../lab/biology/secA-plant-nutrition/BioPhotosynthesisPrep";
import BioPhotosynthesisLab from "../lab/biology/secA-plant-nutrition/BioPhotosynthesisLab";
import BioFoodTestsPrep from "../lab/biology/secA-animal-nutrition/BioFoodTestsPrep";
import BioFoodTestsLab from "../lab/biology/secA-animal-nutrition/BioFoodTestsLab";
import BioBreathingPrep from "../lab/biology/secA-respiratory-system/BioBreathingPrep";
import BioBreathingLab from "../lab/biology/secA-respiratory-system/BioBreathingLab";
// Physics interactive labs
import PhysicsProjectilePrep from "../lab/physics/all-projectile/PhysicsProjectilePrep";
import PhysicsProjectileLab from "../lab/physics/all-projectile/PhysicsProjectileLab";
import PhysicsPendulumPrep from "../lab/physics/p1-shm/PhysicsPendulumPrep";
import PhysicsPendulumLab from "../lab/physics/p1-shm/PhysicsPendulumLab";
import PhysicsRefractionPrep from "../lab/physics/p3-light-waves/PhysicsRefractionPrep";
import PhysicsRefractionLab from "../lab/physics/p3-light-waves/PhysicsRefractionLab";
import PhysicsCircuitPrep from "../lab/physics/p5-ac-circuits/PhysicsCircuitPrep";
import PhysicsCircuitLab from "../lab/physics/p5-ac-circuits/PhysicsCircuitLab";
import PhysicsHeatCapacityPrep from "../lab/physics/p2-heat-energy/PhysicsHeatCapacityPrep";
import PhysicsHeatCapacityLab from "../lab/physics/p2-heat-energy/PhysicsHeatCapacityLab";
import PhysicsForcesPrep from "../lab/physics/p1-equilibrium-forces/PhysicsForcesPrep";
import PhysicsForcesLab from "../lab/physics/p1-equilibrium-forces/PhysicsForcesLab";
// New interactive labs (batch 1)
import StoichMassMolePrep from "../lab/chemistry/stoich/StoichMassMolePrep";
import StoichMassMoleLab from "../lab/chemistry/stoich/StoichMassMoleLab";
import BondIonicPrep from "../lab/chemistry/bonding/BondIonicPrep";
import BondIonicLab from "../lab/chemistry/bonding/BondIonicLab";
import SolubilityCrystalPrep from "../lab/chemistry/solubility/SolubilityCrystalPrep";
import SolubilityCrystalLab from "../lab/chemistry/solubility/SolubilityCrystalLab";
import BiochemEnzymePrep from "../lab/chemistry/biochem/BiochemEnzymePrep";
import BiochemEnzymeLab from "../lab/chemistry/biochem/BiochemEnzymeLab";
import PhysicsNewtons2Prep from "../lab/physics/p1-newtons-laws/PhysicsNewtons2Prep";
import PhysicsNewtons2Lab from "../lab/physics/p1-newtons-laws/PhysicsNewtons2Lab";
import PhysicsWorkEnergyPrep from "../lab/physics/p2-work-energy-power/PhysicsWorkEnergyPrep";
import PhysicsWorkEnergyLab from "../lab/physics/p2-work-energy-power/PhysicsWorkEnergyLab";
import PhysicsSoundPrep from "../lab/physics/p3-sound-waves/PhysicsSoundPrep";
import PhysicsSoundLab from "../lab/physics/p3-sound-waves/PhysicsSoundLab";
import PhysicsHookePrep from "../lab/physics/all-elastic-solids/PhysicsHookePrep";
import PhysicsHookeLab from "../lab/physics/all-elastic-solids/PhysicsHookeLab";
import BioGeneticsPunnettPrep from "../lab/biology/secA-genetics-probability/BioGeneticsPunnettPrep";
import BioGeneticsPunnettLab from "../lab/biology/secA-genetics-probability/BioGeneticsPunnettLab";
import BioTransportTranspirationPrep from "../lab/biology/secA-transport/BioTransportTranspirationPrep";
import BioTransportTranspirationLab from "../lab/biology/secA-transport/BioTransportTranspirationLab";
// Batch 2 interactive labs (20 new: 8 chemistry, 4 biology, 8 physics)
import ChemIonTestsPrep from "../lab/chemistry/acids/ChemIonTestsPrep";
import ChemIonTestsLab from "../lab/chemistry/acids/ChemIonTestsLab";
import ChemGasTestsPrep from "../lab/chemistry/practical/ChemGasTestsPrep";
import ChemGasTestsLab from "../lab/chemistry/practical/ChemGasTestsLab";
import ChemBromineWaterPrep from "../lab/chemistry/organic/ChemBromineWaterPrep";
import ChemBromineWaterLab from "../lab/chemistry/organic/ChemBromineWaterLab";
import ChemGroup1Prep from "../lab/chemistry/periodic/ChemGroup1Prep";
import ChemGroup1Lab from "../lab/chemistry/periodic/ChemGroup1Lab";
import ChemStandardSolutionPrep from "../lab/chemistry/stoich/ChemStandardSolutionPrep";
import ChemStandardSolutionLab from "../lab/chemistry/stoich/ChemStandardSolutionLab";
import ChemOxygenPrep from "../lab/chemistry/nonmetals/ChemOxygenPrep";
import ChemOxygenLab from "../lab/chemistry/nonmetals/ChemOxygenLab";
import ChemSoapPrep from "../lab/chemistry/industry/ChemSoapPrep";
import ChemSoapLab from "../lab/chemistry/industry/ChemSoapLab";
import ChemElectrolysisPrep from "../lab/chemistry/bonding/ChemElectrolysisPrep";
import ChemElectrolysisLab from "../lab/chemistry/bonding/ChemElectrolysisLab";
import BioCellStructurePrep from "../lab/biology/secA-cell-structure/BioCellStructurePrep";
import BioCellStructureLab from "../lab/biology/secA-cell-structure/BioCellStructureLab";
import BioClassificationPrep from "../lab/biology/secA-classification/BioClassificationPrep";
import BioClassificationLab from "../lab/biology/secA-classification/BioClassificationLab";
import BioFoodWebsPrep from "../lab/biology/secA-food-webs/BioFoodWebsPrep";
import BioFoodWebsLab from "../lab/biology/secA-food-webs/BioFoodWebsLab";
import BioEcosystemPrep from "../lab/biology/secA-ecosystem/BioEcosystemPrep";
import BioEcosystemLab from "../lab/biology/secA-ecosystem/BioEcosystemLab";
import PhysLensFocalPrep from "../lab/physics/p3-light-waves/PhysLensFocalPrep";
import PhysLensFocalLab from "../lab/physics/p3-light-waves/PhysLensFocalLab";
import PhysReflectionPrep from "../lab/physics/p3-light-waves/PhysReflectionPrep";
import PhysReflectionLab from "../lab/physics/p3-light-waves/PhysReflectionLab";
import PhysCentreGravityPrep from "../lab/physics/p1-equilibrium-forces/PhysCentreGravityPrep";
import PhysCentreGravityLab from "../lab/physics/p1-equilibrium-forces/PhysCentreGravityLab";
import PhysMomentsPrep from "../lab/physics/p1-equilibrium-forces/PhysMomentsPrep";
import PhysMomentsLab from "../lab/physics/p1-equilibrium-forces/PhysMomentsLab";
import PhysLoadedSpringPrep from "../lab/physics/p1-shm/PhysLoadedSpringPrep";
import PhysLoadedSpringLab from "../lab/physics/p1-shm/PhysLoadedSpringLab";
import PhysPeakRmsPrep from "../lab/physics/p5-ac-circuits/PhysPeakRmsPrep";
import PhysPeakRmsLab from "../lab/physics/p5-ac-circuits/PhysPeakRmsLab";
import PhysLcrResonancePrep from "../lab/physics/p5-ac-circuits/PhysLcrResonancePrep";
import PhysLcrResonanceLab from "../lab/physics/p5-ac-circuits/PhysLcrResonanceLab";
import PhysLatentFusionPrep from "../lab/physics/p2-heat-energy/PhysLatentFusionPrep";
import PhysLatentFusionLab from "../lab/physics/p2-heat-energy/PhysLatentFusionLab";
import LabResultsScreen from "../screens/LabResultsScreen";
// Study cards
import StudyHubScreen from "../study/StudyHubScreen";
import StudyTopicsScreen from "../study/StudyTopicsScreen";
import StudySubtopicsScreen from "../study/StudySubtopicsScreen";
import StudyCardScreen from "../study/StudyCardScreen";
import ExamsHubScreen from "../screens/ExamsHubScreen";

const Tab = createBottomTabNavigator();
const LabStack = createNativeStackNavigator();
const StudyStack = createNativeStackNavigator();

function StudyStackNavigator() {
  return (
    <StudyStack.Navigator initialRouteName="StudyHubScreen" screenOptions={{ headerShown: false }}>
      <StudyStack.Screen name="StudyHubScreen" component={StudyHubScreen} />
      <StudyStack.Screen
        name="StudyTopics"
        component={StudyTopicsScreen}
        options={{ tabBarStyle: { display: "none" } }}
      />
      <StudyStack.Screen
        name="StudySubtopics"
        component={StudySubtopicsScreen}
        options={{ tabBarStyle: { display: "none" } }}
      />
      <StudyStack.Screen
        name="StudyCard"
        component={StudyCardScreen}
        options={{ tabBarStyle: { display: "none" } }}
      />
    </StudyStack.Navigator>
  );
}

function LabStackNavigator() {
  return (
    <LabStack.Navigator screenOptions={{ headerShown: false }}>
      <LabStack.Screen name="LabHubScreen" component={LabHubScreen} />
      <LabStack.Screen
        name="ChemistryExperiments"
        component={ChemistryExperimentsScreen}
        options={{ tabBarStyle: { display: "none" } }}
      />
      <LabStack.Screen
        name="BiologyExperiments"
        component={BiologyExperimentsScreen}
        options={{ tabBarStyle: { display: "none" } }}
      />
      <LabStack.Screen
        name="PhysicsExperiments"
        component={PhysicsExperimentsScreen}
        options={{ tabBarStyle: { display: "none" } }}
      />
      <LabStack.Screen
        name="Experiments"
        component={ExperimentsScreen}
        options={{ tabBarStyle: { display: "none" } }}
      />
      <LabStack.Screen
        name="TitrationExperiment"
        component={TitrationExperiment}
        options={{ tabBarStyle: { display: "none" } }}
      />
      <LabStack.Screen
        name="TitrationPrep"
        component={TitrationPrep}
        options={{ tabBarStyle: { display: "none" } }}
      />
      <LabStack.Screen
        name="RateExperiment"
        component={RateExperiment}
        options={{ tabBarStyle: { display: "none" } }}
      />
      <LabStack.Screen
        name="RatePrep"
        component={RatePrep}
        options={{ tabBarStyle: { display: "none" } }}
      />
      {/* Chemistry interactive labs */}
      <LabStack.Screen name="MetalsExtractionPrep" component={MetalsExtractionPrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="MetalsExtractionLab" component={MetalsExtractionLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="MetalsReactivityPrep" component={MetalsReactivityPrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="MetalsReactivityLab" component={MetalsReactivityLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="MetalsRustingPrep" component={MetalsRustingPrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="MetalsRustingLab" component={MetalsRustingLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="RedoxElectroplatingPrep" component={RedoxElectroplatingPrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="RedoxElectroplatingLab" component={RedoxElectroplatingLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="RedoxDisplacementPrep" component={RedoxDisplacementPrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="RedoxDisplacementLab" component={RedoxDisplacementLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="SepChromatographyPrep" component={SepChromatographyPrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="SepChromatographyLab" component={SepChromatographyLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="SepDistillationPrep" component={SepDistillationPrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="SepDistillationLab" component={SepDistillationLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="SepFiltrationPrep" component={SepFiltrationPrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="SepFiltrationLab" component={SepFiltrationLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="StatesDiffusionPrep" component={StatesDiffusionPrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="StatesDiffusionLab" component={StatesDiffusionLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="StatesGasLawsPrep" component={StatesGasLawsPrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="StatesGasLawsLab" component={StatesGasLawsLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="EnergyCalorimetryPrep" component={EnergyCalorimetryPrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="EnergyCalorimetryLab" component={EnergyCalorimetryLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="AcidsSaltPrepPrep" component={AcidsSaltPrepPrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="AcidsSaltPrepLab" component={AcidsSaltPrepLab} options={{ tabBarStyle: { display: "none" } }} />
      {/* Biology interactive labs */}
      <LabStack.Screen name="BioOsmosisPrep" component={BioOsmosisPrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="BioOsmosisLab" component={BioOsmosisLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="BioPhotosynthesisPrep" component={BioPhotosynthesisPrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="BioPhotosynthesisLab" component={BioPhotosynthesisLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="BioFoodTestsPrep" component={BioFoodTestsPrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="BioFoodTestsLab" component={BioFoodTestsLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="BioBreathingPrep" component={BioBreathingPrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="BioBreathingLab" component={BioBreathingLab} options={{ tabBarStyle: { display: "none" } }} />
      {/* Physics interactive labs */}
      <LabStack.Screen name="PhysicsProjectilePrep" component={PhysicsProjectilePrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="PhysicsProjectileLab" component={PhysicsProjectileLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="PhysicsPendulumPrep" component={PhysicsPendulumPrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="PhysicsPendulumLab" component={PhysicsPendulumLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="PhysicsRefractionPrep" component={PhysicsRefractionPrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="PhysicsRefractionLab" component={PhysicsRefractionLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="PhysicsCircuitPrep" component={PhysicsCircuitPrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="PhysicsCircuitLab" component={PhysicsCircuitLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="PhysicsHeatCapacityPrep" component={PhysicsHeatCapacityPrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="PhysicsHeatCapacityLab" component={PhysicsHeatCapacityLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="PhysicsForcesPrep" component={PhysicsForcesPrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="PhysicsForcesLab" component={PhysicsForcesLab} options={{ tabBarStyle: { display: "none" } }} />
      {/* New interactive labs (batch 1) */}
      <LabStack.Screen name="StoichMassMolePrep" component={StoichMassMolePrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="StoichMassMoleLab" component={StoichMassMoleLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="BondIonicPrep" component={BondIonicPrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="BondIonicLab" component={BondIonicLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="SolubilityCrystalPrep" component={SolubilityCrystalPrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="SolubilityCrystalLab" component={SolubilityCrystalLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="BiochemEnzymePrep" component={BiochemEnzymePrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="BiochemEnzymeLab" component={BiochemEnzymeLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="PhysicsNewtons2Prep" component={PhysicsNewtons2Prep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="PhysicsNewtons2Lab" component={PhysicsNewtons2Lab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="PhysicsWorkEnergyPrep" component={PhysicsWorkEnergyPrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="PhysicsWorkEnergyLab" component={PhysicsWorkEnergyLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="PhysicsSoundPrep" component={PhysicsSoundPrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="PhysicsSoundLab" component={PhysicsSoundLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="PhysicsHookePrep" component={PhysicsHookePrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="PhysicsHookeLab" component={PhysicsHookeLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="BioGeneticsPunnettPrep" component={BioGeneticsPunnettPrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="BioGeneticsPunnettLab" component={BioGeneticsPunnettLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="BioTransportTranspirationPrep" component={BioTransportTranspirationPrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="BioTransportTranspirationLab" component={BioTransportTranspirationLab} options={{ tabBarStyle: { display: "none" } }} />
      {/* Batch 2 interactive labs (20 new) */}
      <LabStack.Screen name="ChemIonTestsPrep" component={ChemIonTestsPrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="ChemIonTestsLab" component={ChemIonTestsLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="ChemGasTestsPrep" component={ChemGasTestsPrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="ChemGasTestsLab" component={ChemGasTestsLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="ChemBromineWaterPrep" component={ChemBromineWaterPrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="ChemBromineWaterLab" component={ChemBromineWaterLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="ChemGroup1Prep" component={ChemGroup1Prep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="ChemGroup1Lab" component={ChemGroup1Lab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="ChemStandardSolutionPrep" component={ChemStandardSolutionPrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="ChemStandardSolutionLab" component={ChemStandardSolutionLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="ChemOxygenPrep" component={ChemOxygenPrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="ChemOxygenLab" component={ChemOxygenLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="ChemSoapPrep" component={ChemSoapPrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="ChemSoapLab" component={ChemSoapLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="ChemElectrolysisPrep" component={ChemElectrolysisPrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="ChemElectrolysisLab" component={ChemElectrolysisLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="BioCellStructurePrep" component={BioCellStructurePrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="BioCellStructureLab" component={BioCellStructureLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="BioClassificationPrep" component={BioClassificationPrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="BioClassificationLab" component={BioClassificationLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="BioFoodWebsPrep" component={BioFoodWebsPrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="BioFoodWebsLab" component={BioFoodWebsLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="BioEcosystemPrep" component={BioEcosystemPrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="BioEcosystemLab" component={BioEcosystemLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="PhysLensFocalPrep" component={PhysLensFocalPrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="PhysLensFocalLab" component={PhysLensFocalLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="PhysReflectionPrep" component={PhysReflectionPrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="PhysReflectionLab" component={PhysReflectionLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="PhysCentreGravityPrep" component={PhysCentreGravityPrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="PhysCentreGravityLab" component={PhysCentreGravityLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="PhysMomentsPrep" component={PhysMomentsPrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="PhysMomentsLab" component={PhysMomentsLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="PhysLoadedSpringPrep" component={PhysLoadedSpringPrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="PhysLoadedSpringLab" component={PhysLoadedSpringLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="PhysPeakRmsPrep" component={PhysPeakRmsPrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="PhysPeakRmsLab" component={PhysPeakRmsLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="PhysLcrResonancePrep" component={PhysLcrResonancePrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="PhysLcrResonanceLab" component={PhysLcrResonanceLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="PhysLatentFusionPrep" component={PhysLatentFusionPrep} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen name="PhysLatentFusionLab" component={PhysLatentFusionLab} options={{ tabBarStyle: { display: "none" } }} />
      <LabStack.Screen
        name="LabResultsScreen"
        component={LabResultsScreen}
        options={{ tabBarStyle: { display: "none" } }}
      />
    </LabStack.Navigator>
  );
}

export default function TabNavigator() {
  const tabNav = useNavigation();
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenListeners={{
        tabPress: (e) => {
          haptic.light();
          // Always land on the subject-selection screen when entering Study
          // Cards — deep links (e.g. "Continue learning") and any stale
          // persisted stack state can otherwise strand the tab deep inside.
          const tabName = e?.data?.route?.name;
          if (tabName === "StudyHub") {
            try {
              tabNav.dispatch({
                ...CommonActions.reset({
                  routes: [{ name: "StudyHubScreen" }],
                }),
                target: "StudyHub",
              });
            } catch (err) {}
          }
        },
      }}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: theme.colors.accentBlue,
        tabBarInactiveTintColor: theme.colors.textFaint,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopWidth: 0,
          height: 70,
          paddingBottom: 12,
          paddingTop: 8,
          shadowColor: theme.colors.primary,
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.06,
          shadowRadius: 12,
          elevation: 10,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
          marginTop: 4,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "PracticeHub") {
            iconName = focused ? "flask" : "flask-outline";
          } else if (route.name === "LabHub") {
            iconName = focused ? "beaker" : "beaker-outline";
          } else if (route.name === "StudyHub") {
            iconName = focused ? "book" : "book-outline";
          } else if (route.name === "ExamsHub") {
            iconName = focused ? "document-text" : "document-text-outline";
          }

          if (focused) {
            return (
              <View style={{
                backgroundColor: theme.colors.accentBlueSoft,
                width: 48,
                height: 30,
                borderRadius: 16,
                alignItems: "center",
                justifyContent: "center",
                shadowColor: theme.colors.accentBlue,
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.12,
                shadowRadius: 3,
                elevation: 2,
              }}>
                <Ionicons name={iconName} size={20} color={theme.colors.accentBlue} />
              </View>
            );
          }

          return <Ionicons name={iconName} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="PracticeHub"
        component={HomeScreen}
        options={{ tabBarLabel: "Practice" }}
      />
      <Tab.Screen
        name="LabHub"
        component={LabStackNavigator}
        options={{ tabBarLabel: "Virtual Lab" }}
      />
      <Tab.Screen
        name="StudyHub"
        component={StudyStackNavigator}
        options={{ tabBarLabel: "Study Cards" }}
      />
      <Tab.Screen
        name="ExamsHub"
        component={ExamsHubScreen}
        options={{ tabBarLabel: "Final Exams" }}
      />
    </Tab.Navigator>
  );
}
