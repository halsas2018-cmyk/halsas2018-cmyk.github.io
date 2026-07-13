import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import TopicsScreen from "../screens/TopicsScreen";
import QuizScreen from "../screens/QuizScreen";
import HistoryScreen from "../screens/HistoryScreen";
import ResultScreen from "../screens/ResultScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={TabNavigator} />
      <Stack.Screen name="TopicsScreen" component={TopicsScreen} />
      <Stack.Screen name="QuizScreen" component={QuizScreen} />
      <Stack.Screen name="ResultScreen" component={ResultScreen} />
      <Stack.Screen name="HistoryScreen" component={HistoryScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}