import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StatusBar, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlipCard from "../../titration/FlipCard";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import { METALS, REACT_ORDER } from "./group1-data";

const ACCENT = "#16a34a";

export default function ChemGroup1Prep() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "periodic";

  const [metalId, setMetalId] = useState(METALS[0].id);
  const metal = METALS.find((m) => m.id === metalId) || METALS[0];

  function start() {
    haptic.light();
    navigation.navigate("ChemGroup1Lab", { experiment, topicId, config: { metal } });
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
          <FlipCard emoji="💧" title="The reaction" front="Alkali metals react with water to make an alkali + hydrogen gas." back="2M(s) + 2H₂O(l) → 2MOH(aq) + H₂(g). The metal floats (less dense than water) and moves around as hydrogen is released." />
          <FlipCard emoji="🔥" title="Trend down the group" front="Reactivity increases from lithium to potassium." back="Li is gentle, Na is vigorous and melts, K is explosive and catches fire (lilac flame). The outer electron is easier to lose further down the group." />
          <FlipCard emoji="🎯" title="Your task" front="Drop a metal into water and observe how vigorously it reacts." back="Next: (1) choose the metal, (2) drop it in, (3) watch the reaction, (4) compare with the reactivity trend." />

          <Section title="1 · CHOOSE THE METAL">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {METALS.map((m) => (
                <Chip key={m.id} item={m} selected={metalId === m.id} onPick={() => setMetalId(m.id)} />
              ))}
            </View>
            <Text style={{ fontSize: 12, color: "#94a3b8", marginTop: 4 }}>{metal.note}</Text>
          </Section>

          <Section title="2 · PREDICTED RESULT">
            <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14 }}>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>Expected: {metal.vigor}.</Text>
              <Text style={{ fontSize: 12, color: "#94a3b8", marginTop: 6 }}>{REACT_ORDER}</Text>
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
