import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlipCard from "../../titration/FlipCard";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import { IONIC_PAIRS } from "./bonding-data";

const GREEN = "#16a34a";

export default function BondIonicPrep() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "bonding";

  const [pairId, setPairId] = useState(IONIC_PAIRS[0].id);
  const pair = IONIC_PAIRS.find((p) => p.id === pairId);

  function start() {
    haptic.light();
    navigation.navigate("BondIonicLab", {
      experiment,
      topicId,
      config: { pairId },
    });
  }

  const Chip = ({ item, selected, onPick, right }) => (
    <TouchableOpacity onPress={onPick} style={{ flexDirection: "row", alignItems: "center", backgroundColor: selected ? "#e7f6ec" : "#fff", borderWidth: 1.5, borderColor: selected ? GREEN : "#e5e7eb", borderRadius: 12, paddingVertical: 9, paddingHorizontal: 12, marginRight: 8, marginBottom: 8 }}>
      {item.icon ? <Text style={{ fontSize: 15, marginRight: 6 }}>{item.icon}</Text> : null}
      <Text style={{ fontSize: 13, fontWeight: selected ? "800" : "600", color: selected ? "#14532d" : theme.colors.textMuted }}>{item.label || item.name}</Text>
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
          <Text style={{ fontSize: 16, color: GREEN, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }}>Pre-lab Briefing</Text>
      </View>

      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={0}>
        <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 24 }} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
          <Text style={{ fontSize: 13, fontWeight: "700", color: GREEN, marginBottom: 4 }}>📚 Tap each card to flip it</Text>

          <FlipCard emoji="⚛️" title="What is an ionic bond?" front="An ionic bond forms when a metal atom gives one or more electrons to a non-metal atom." back="The metal becomes a positive ion (cation) and the non-metal becomes a negative ion (anion). Opposite charges attract, holding the ions together in a crystal lattice. Example: Na + Cl → Na⁺Cl⁻ (sodium chloride / table salt)." />
          <FlipCard emoji="🧲" title="Why do electrons transfer?" front="Metals have few valence electrons; non-metals need a few more to fill their outer shell." back="Atoms are most stable with a full outer shell (the octet rule). A metal loses its valence electron(s) easily; a non-metal gains electron(s) to complete its shell. Both end up with noble-gas electron arrangements." />
          <FlipCard emoji="🔢" title="Charges & the formula" front="The number of electrons lost = the metal's charge; gained = the non-metal's charge." back="One electron lost → +1 (e.g. Na⁺), two lost → +2 (e.g. Mg²⁺). The ions combine so total charge = 0, giving the formula: Na⁺Cl⁻ → NaCl, Mg²⁺O²⁻ → MgO, K⁺Br⁻ → KBr." />
          <FlipCard emoji="🎯" title="Your task" front="Pick a metal/non-metal pair, then watch the valence electron(s) jump across and the ions form." back="Next you will: (1) choose a pair, (2) transfer the valence electron(s) from the metal to the non-metal, (3) see the cation & anion with their charges, then (4) build the ionic lattice. The report shows the ions and the compound formula." />

          <Section title="1 · CHOOSE THE PAIR">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {IONIC_PAIRS.map((p) => (
                <Chip
                  key={p.id}
                  item={{ label: `${p.metalSymbol} + ${p.nonmetalSymbol}` }}
                  selected={pairId === p.id}
                  onPick={() => setPairId(p.id)}
                  right={<Text style={{ fontSize: 9, color: GREEN, fontWeight: "800", marginLeft: 6 }}>{p.formula}</Text>}
                />
              ))}
            </View>
            <Text style={{ fontSize: 12, color: "#94a3b8", marginTop: 4 }}>
              {pair.metalName} ({pair.metalSymbol}) loses {pair.transferred} electron{pair.transferred > 1 ? "s" : ""} → {pair.metalIon}; {pair.nonmetalName} ({pair.nonmetalSymbol}) gains it → {pair.nonmetalIon}. Product: {pair.formula} ({pair.compoundName}).
            </Text>
          </Section>
        </ScrollView>

        <View style={{ backgroundColor: theme.colors.surface, borderTopWidth: 1, borderTopColor: theme.colors.border, padding: 16 }}>
          <TouchableOpacity onPress={start} style={{ backgroundColor: GREEN, borderRadius: 12, paddingVertical: 15 }}>
            <Text style={{ color: "#fff", textAlign: "center", fontWeight: "800", fontSize: 16 }}>▶ Start Experiment</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
