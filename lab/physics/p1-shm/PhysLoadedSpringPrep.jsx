import React from "react";
import { View, Text, TouchableOpacity, StatusBar, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlipCard from "../../titration/FlipCard";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";

const ACCENT = "#f59e0b";

export default function PhysLoadedSpringPrep() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "p1-shm";

  function start() {
    haptic.light();
    navigation.navigate("PhysLoadedSpringLab", { experiment, topicId, config: {} });
  }

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
          <FlipCard emoji="🌀" title="A mass on a spring" front="Hang a mass on a spring and let it oscillate — it moves with simple harmonic motion." back="The period depends only on the mass m and the spring constant k: T = 2π√(m/k)." />
          <FlipCard emoji="📏" title="What you measure" front="Add a known mass, let the spring stretch (x = mg/k), then time its oscillations." back="A heavier mass stretches the spring more AND takes longer to complete one oscillation." />
          <FlipCard emoji="🎯" title="Your task" front="Choose a mass, watch it oscillate, then state how T depends on m." back="Next: (1) pick a mass, (2) watch the oscillation, (3) choose the correct T–m relationship." />
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
