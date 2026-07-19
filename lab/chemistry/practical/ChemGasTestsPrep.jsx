import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StatusBar, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlipCard from "../../titration/FlipCard";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import { GASES } from "./gas-tests-data";

const ACCENT = "#0ea5e9";

export default function ChemGasTestsPrep() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "practical";

  const [gasId, setGasId] = useState(GASES[0].id);
  const gas = GASES.find((g) => g.id === gasId) || GASES[0];

  function start() {
    haptic.light();
    navigation.navigate("ChemGasTestsLab", { experiment, topicId, config: { gas } });
  }

  const Chip = ({ item, selected, onPick }) => (
    <TouchableOpacity onPress={onPick} style={{ flexDirection: "row", alignItems: "center", backgroundColor: selected ? "#e0f2fe" : theme.colors.surface, borderWidth: 1.5, borderColor: selected ? ACCENT : theme.colors.border, borderRadius: 12, paddingVertical: 9, paddingHorizontal: 12, marginRight: 8, marginBottom: 8 }}>
      <Text style={{ fontSize: 13, fontWeight: selected ? "800" : "600", color: selected ? "#0c4a6e" : theme.colors.textMuted }}>{item.name}</Text>
    </TouchableOpacity>
  );

  const Section = ({ title, children }) => (
    <View style={{ marginBottom: 18 }}>
      <Text style={{ fontSize: 12, fontWeight: "800", color: "#6b7280", marginBottom: 10, letterSpacing: 0.5 }}>{title}</Text>
      {children}
    </View>
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
          <FlipCard emoji="🔥" title="Oxygen (O₂)" front="A glowing splint relights in oxygen." back="Oxygen supports combustion strongly — a glowing (not flaming) splint bursts back into flame." />
          <FlipCard emoji="🌫️" title="Carbon dioxide (CO₂)" front="CO₂ turns limewater milky." back="Bubble the gas through limewater (calcium hydroxide solution); it turns cloudy white as calcium carbonate forms." />
          <FlipCard emoji="💥" title="Hydrogen (H₂)" front="Hydrogen gives a 'pop' with a lighted splint." back="Hold a lighted splint to the gas — the rapid combustion of H₂ in air makes a squeaky pop." />
          <FlipCard emoji="🎯" title="Your task" front="Pick a gas, collect it in a gas jar, then run its test and observe." back="Next: (1) choose the gas, (2) collect it, (3) run the test, (4) read the outcome." />

          <Section title="1 · CHOOSE THE GAS">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {GASES.map((g) => (
                <Chip key={g.id} item={g} selected={gasId === g.id} onPick={() => setGasId(g.id)} />
              ))}
            </View>
            <Text style={{ fontSize: 12, color: "#94a3b8", marginTop: 4 }}>{gas.note}</Text>
          </Section>

          <Section title="2 · PREDICTED RESULT">
            <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14 }}>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>
                {gas.test}: {gas.result}
              </Text>
            </View>
          </Section>
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
