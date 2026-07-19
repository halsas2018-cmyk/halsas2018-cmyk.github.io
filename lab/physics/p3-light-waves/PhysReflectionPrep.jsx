import React, { useState } from "react";
import { View, Text, TouchableOpacity, StatusBar, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlipCard from "../../titration/FlipCard";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import { ANGLE_CHOICES } from "./reflection-data";

const ACCENT = "#7c3aed";

export default function PhysReflectionPrep() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "p3-light-waves";

  const [theta, setTheta] = useState(ANGLE_CHOICES[1]);

  function start() {
    haptic.light();
    navigation.navigate("PhysReflectionLab", { experiment, topicId, config: { theta } });
  }

  const Chip = ({ item, selected, onPick }) => (
    <TouchableOpacity onPress={onPick} style={{ backgroundColor: selected ? "#ede9fe" : theme.colors.surface, borderWidth: 1.5, borderColor: selected ? ACCENT : theme.colors.border, borderRadius: 12, paddingVertical: 9, paddingHorizontal: 14, marginRight: 8, marginBottom: 8 }}>
      <Text style={{ fontSize: 13, fontWeight: selected ? "800" : "600", color: selected ? "#5b21b6" : theme.colors.textMuted }}>{item}°</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />
      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: ACCENT, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }}>Pre-lab Briefing</Text>
      </View>

      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={0}>
        <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 24 }} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
          <Text style={{ fontSize: 13, fontWeight: "700", color: ACCENT, marginBottom: 4 }}>📚 Tap each card to flip it</Text>
          <FlipCard emoji="🪞" title="The laws of reflection" front="(1) The incident ray, reflected ray and normal all lie in one plane." back="(2) The angle of incidence equals the angle of reflection: θᵢ = θᵣ, both measured from the normal." />
          <FlipCard emoji="📐" title="What you measure" front="θᵢ is between the incoming ray and the normal; θᵣ is between the outgoing ray and the normal." back="The normal is the line drawn at 90° to the mirror surface at the point where the ray strikes." />
          <FlipCard emoji="🎯" title="Your task" front="Pick an incident angle, shine the ray, then read off θᵣ." back="Next: (1) choose θᵢ, (2) shine, (3) measure θᵣ and confirm θᵢ = θᵣ." />

          <Text style={{ fontSize: 12, fontWeight: "800", color: "#6b7280", marginTop: 18, marginBottom: 10, letterSpacing: 0.5 }}>1 · CHOOSE ANGLE OF INCIDENCE (θᵢ)</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {ANGLE_CHOICES.map((c) => (
              <Chip key={c} item={c} selected={theta === c} onPick={() => setTheta(c)} />
            ))}
          </View>
        </ScrollView>

        <View style={{ backgroundColor: theme.colors.surface, borderTopWidth: 1, borderTopColor: theme.colors.border, padding: 16 }}>
          <TouchableOpacity onPress={start} style={{ backgroundColor: ACCENT, borderRadius: 12, paddingVertical: 15 }}>
            <Text style={{ color: "#fff", textAlign: "center", fontWeight: "800", fontSize: 16 }}>▶ Start Experiment</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
