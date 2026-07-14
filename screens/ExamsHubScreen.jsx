import React from "react";
import { View, Text, StatusBar, TouchableOpacity, Alert } from "react-native";
import { useAds } from "../components/AdProvider";
import BannerAd from "../components/BannerAd";

export default function ExamsHubScreen() {
  const { showExamLaunch } = useAds();

  return (
    <View style={{ flex: 1, backgroundColor: "#f9fafb", justifyContent: "center", alignItems: "center", padding: 24 }}>
      <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />
      <Text style={{ fontSize: 24, marginBottom: 8 }}>🎓</Text>
      <Text style={{ fontSize: 18, fontWeight: "700", color: "#111827" }}>Final Exams</Text>
      <Text style={{ fontSize: 14, color: "#6b7280", marginTop: 4, marginBottom: 20, textAlign: "center" }}>
        Full-length syllabus practice examinations
      </Text>

      <TouchableOpacity
        onPress={() => showExamLaunch(() => Alert.alert("Final Exams", "Full-length practice examinations are coming soon!"))}
        style={{ backgroundColor: "#2563eb", paddingVertical: 14, paddingHorizontal: 28, borderRadius: 12, marginBottom: 20 }}
      >
        <Text style={{ color: "#fff", fontWeight: "700", fontSize: 15 }}>Start Final Exam</Text>
      </TouchableOpacity>

      <BannerAd />
    </View>
  );
}
