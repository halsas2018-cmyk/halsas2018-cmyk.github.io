import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
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
import LabResultsScreen from "../screens/LabResultsScreen";
import StudyHubScreen from "../study/StudyHubScreen";
import ExamsHubScreen from "../screens/ExamsHubScreen";

const Tab = createBottomTabNavigator();
const LabStack = createNativeStackNavigator();

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
      <LabStack.Screen
        name="LabResultsScreen"
        component={LabResultsScreen}
        options={{ tabBarStyle: { display: "none" } }}
      />
    </LabStack.Navigator>
  );
}

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#2563eb",
        tabBarInactiveTintColor: "#6b7280",
        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderTopWidth: 0,
          height: 70,
          paddingBottom: 12,
          paddingTop: 8,
          shadowColor: "#000000",
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
                backgroundColor: "#eff6ff", 
                width: 48,
                height: 30,
                borderRadius: 16,
                alignItems: "center",
                justifyContent: "center",
                shadowColor: "#2563eb",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.12,
                shadowRadius: 3,
                elevation: 2, 
              }}>
                {/* Icon is nested inside so it sits on top */}
                <Ionicons name={iconName} size={20} color="#2563eb" />
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
        component={StudyHubScreen}
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
