import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StatusBar, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlipCard from "../../titration/FlipCard";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import { SOLUTES, FLASK_VOLS, concentration } from "./standard-solution-data";

const ACCENT = "#16a34a";
const MASSES = [2.5, 5.0, 10.0, 13.25];

export default function ChemStandardSolutionPrep() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "stoich";

  const [solId, setSolId] = useState(SOLUTES[0].id);
  const [mass, setMass] = useState(5.0);
  const [vol, setVol] = useState(250);
  const solute = SOLUTES.find((s) => s.id === solId) || SOLUTES[0];
  const c = concentration(mass, solute.M, vol);

  function start() {
    haptic.light();
    navigation.navigate("ChemStandardSolutionLab", { experiment, topicId, config: { solute, mass, vol, c } });
  }

  const Chip = ({ item, selected, onPick, right }) => (
    <TouchableOpacity onPress={onPick} style={{ flexDirection: "row", alignItems: "center", backgroundColor: selected ? "#dcfce7" : theme.colors.surface, borderWidth: 1.5, borderColor: selected ? ACCENT : theme.colors.border, borderRadius: 12, paddingVertical: 9, paddingHorizontal: 12, marginRight: 8, marginBottom: 8 }}>
      <Text style={{ fontSize: 13, fontWeight: selected ? "800" : "600", color: selected ? "#14532d" : theme.colors.textMuted }}>{item.name}</Text>
      {right}
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
          <FlipCard emoji="⚖️" title="What is a standard solution?" front="A solution of known exact concentration, made by dissolving a known mass of solute and making it up to a known volume." back="Because the mass and final volume are known precisely, the concentration c = n / V is exact. Used to standardise other solutions in titrations." />
          <FlipCard emoji="🧮" title="The calculation" front="c = mass ÷ (M × V), where V is in dm³." back="moles n = mass / M (M = molar mass). Volume V must be in dm³ (÷1000 from mL). Then c = n / V in mol dm⁻³." />
          <FlipCard emoji="🎯" title="Your task" front="Choose a solute, mass and flask volume, then make up the solution and read its concentration." back="Next: (1) pick the solute, (2) set the mass, (3) set the volume, (4) run and compute c." />

          <Section title="1 · CHOOSE THE SOLUTE">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {SOLUTES.map((s) => (
                <Chip key={s.id} item={s} selected={solId === s.id} onPick={() => setSolId(s.id)} right={<Text style={{ fontSize: 10, color: ACCENT, fontWeight: "800", marginLeft: 6 }}>{s.formula}</Text>} />
              ))}
            </View>
          </Section>

          <Section title="2 · MASS OF SOLUTE">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {MASSES.map((m) => (
                <Chip key={m} item={{ name: m + " g" }} selected={mass === m} onPick={() => setMass(m)} />
              ))}
            </View>
          </Section>

          <Section title="3 · FINAL VOLUME">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {FLASK_VOLS.map((v) => (
                <Chip key={v} item={{ name: v + " mL" }} selected={vol === v} onPick={() => setVol(v)} />
              ))}
            </View>
          </Section>

          <Section title="4 · PREDICTED CONCENTRATION">
            <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14 }}>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>
                c = {mass} g ÷ ({solute.M} × {vol}/1000 dm³) = <Text style={{ fontWeight: "800", color: ACCENT }}>{c.toFixed(3)} mol dm⁻³</Text>
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
