import React from "react";
import { View, Text, StatusBar } from "react-native";
import AdBanner from "../components/AdBanner";

export default function StudyHubScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#f9fafb", justifyContent: "center", alignItems: "center", padding: 16 }}>
      <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />
      <Text style={{ fontSize: 24, marginBottom: 8 }}>📚</Text>
      <Text style={{ fontSize: 18, fontWeight: "700", color: "#111827" }}>Study Cards</Text>
      <Text style={{ fontSize: 14, color: "#6b7280", marginTop: 4, marginBottom: 16, textAlign: "center" }}>Active recall & terminology decks</Text>
      <AdBanner />
    </View>
  );
}
