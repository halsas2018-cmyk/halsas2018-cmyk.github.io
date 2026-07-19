import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StatusBar, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlipCard from "../../titration/FlipCard";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import { METHODS } from "./oxygen-data";

const ACCENT = "#16a34a";

export default function ChemOxygenPrep() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "nonmetals";

  const [methodId, setMethodId] = useState(METHODS[0].id);
  const method = METHODS.find((m) => m.id === methodId) || METHODS[0];

  function start() {
    haptic.light();
    navigation.navigate("ChemOxygenLab", { experiment, topicId, config: { method } });
  }

  const Chip = ({ item, selected, onPick }) => (
    <TouchableOpacity onPress={onPick} style={{ flexDirection: "row", alignItems: "center", backgroundColor: selected ? "#dcfce7" : theme.colors.surface, borderWidth: 1.5, borderColor: selected ? ACCENT : theme.colors.border, borderRadius: 12, paddingVertical: 9, paddingHorizontal: 12, marginRight: 8, marginBottom: 8 }}>
      <Text style={{ fontSize: 13, fontWeight: selected ? "800" : "600", color: selected ? "#14532d" : theme.colors.textMuted }}>{item.name}</Text>
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
          <FlipCard emoji="🔥" title="Method 1: heating" front="Heat potassium manganate(VII) to release oxygen." back="2KMnO₄(s) → K₂MnO₄(s) + MnO₂(s) + O₂(g). The purple solid breaks down on heating, giving off oxygen." />
          <FlipCard emoji="💧" title="Method 2: catalyst" front="Add manganese(IV) oxide to hydrogen peroxide." back="2H₂O₂(aq) → 2H₂O(l) + O₂(g). Manganese(IV) oxide is a catalyst — it speeds the breakdown without being used up." />
          <FlipCard emoji="🎯" title="Your task" front="Choose a method, generate the gas, and collect it in a gas jar." back="Next: (1) choose the method, (2) set up + react, (3) collect O₂ in the gas jar, (4) it relights a glowing splint." />

          <Section title="1 · CHOOSE THE METHOD">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {METHODS.map((m) => (
                <Chip key={m.id} item={m} selected={methodId === m.id} onPick={() => setMethodId(m.id)} />
              ))}
            </View>
            <Text style={{ fontSize: 12, color: "#94a3b8", marginTop: 4 }}>{method.note}</Text>
            <Text style={{ fontSize: 12, color: "#94a3b8", marginTop: 4 }}>{method.formula}</Text>
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
