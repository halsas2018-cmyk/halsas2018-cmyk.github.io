import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StatusBar, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlipCard from "../../titration/FlipCard";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import { CATIONS, ANIONS } from "./ion-tests-data";

const ACCENT = "#0ea5e9";

export default function ChemIonTestsPrep() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "acids";

  const [kind, setKind] = useState("cation");
  const pool = kind === "cation" ? CATIONS : ANIONS;
  const [targetId, setTargetId] = useState(CATIONS[0].id);
  const target = pool.find((x) => x.id === targetId) || pool[0];

  function start() {
    haptic.light();
    navigation.navigate("ChemIonTestsLab", {
      experiment,
      topicId,
      config: { kind, target },
    });
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
          <FlipCard emoji="🔥" title="Flame tests (cations)" front="Dip a nichrome wire in the sample and hold it in a Bunsen flame. Each metal ion colours the flame." back="Sodium = orange-yellow, Potassium = lilac, Calcium = brick-red, Copper = blue-green, Lithium = crimson. The flame colour identifies the cation." />
          <FlipCard emoji="🧪" title="Precipitate tests (anions)" front="Add a reagent to a solution; a precipitate or gas shows which anion is present." back="Chloride + silver nitrate → white ppt. Sulfate + barium chloride → white ppt. Carbonate + dilute acid → CO₂ bubbles." />
          <FlipCard emoji="🎯" title="Your task" front="Pick a group and an ion, then run the test and identify what you observe." back="Next: (1) choose cation or anion, (2) pick the ion, (3) run the test, (4) identify the result from the options." />

          <Section title="1 · CHOOSE THE GROUP">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Chip item={{ name: "Cations (flame test)" }} selected={kind === "cation"} onPick={() => { setKind("cation"); setTargetId(CATIONS[0].id); }} />
              <Chip item={{ name: "Anions (reagent test)" }} selected={kind === "anion"} onPick={() => { setKind("anion"); setTargetId(ANIONS[0].id); }} />
            </View>
          </Section>

          <Section title={kind === "cation" ? "2 · CHOOSE THE CATION" : "2 · CHOOSE THE ANION"}>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {pool.map((x) => (
                <Chip key={x.id} item={x} selected={targetId === x.id} onPick={() => setTargetId(x.id)} />
              ))}
            </View>
            <Text style={{ fontSize: 12, color: "#94a3b8", marginTop: 4 }}>{target.note}</Text>
          </Section>

          <Section title="3 · PREDICTED RESULT">
            <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14 }}>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>
                {kind === "cation"
                  ? `Flame colour: ${target.flameName}`
                  : `Add ${target.reagent} → ${target.result}`}
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
