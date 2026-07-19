import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlipCard from "../../titration/FlipCard";
import { EXTRACTION_METALS, EXTRACTION_APPARATUS, extractionMethodLabel } from "./metals-data";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";

const GREEN = "#16a34a";

export default function MetalsExtractionPrep() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "metals";

  const [app, setApp] = useState([]);
  const [metalId, setMetalId] = useState(null);

  const metal = EXTRACTION_METALS.find((m) => m.id === metalId);

  function toggleApp(id) {
    setApp((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function start() {
    const required = EXTRACTION_APPARATUS.filter((a) => a.needed).map((a) => a.id);
    const missing = required.filter((r) => !app.includes(r));
    if (missing.length) return Alert.alert("Missing apparatus", "Select all the required apparatus before you start.");
    if (!metal) return Alert.alert("Pick an ore", "Choose the metal ore you want to extract.");

    const config = { metal, apparatus: app };
    navigation.navigate("MetalsExtractionLab", { experiment, topicId, config });
  }

  const Chip = ({ item, selected, onPick, right }) => (
    <TouchableOpacity onPress={onPick} style={{ flexDirection: "row", alignItems: "center", backgroundColor: selected ? "#e7f6ec" : "#fff", borderWidth: 1.5, borderColor: selected ? GREEN : "#e5e7eb", borderRadius: 12, paddingVertical: 9, paddingHorizontal: 12, marginRight: 8, marginBottom: 8 }}>
      {item.icon ? <Text style={{ fontSize: 15, marginRight: 6 }}>{item.icon}</Text> : null}
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
          <Text style={{ fontSize: 16, color: GREEN, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }}>Pre-lab Briefing</Text>
      </View>

      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={0}>
        <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 24 }} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
          <Text style={{ fontSize: 13, fontWeight: "700", color: GREEN, marginBottom: 4 }}>📚 Tap each card to flip it</Text>

          <FlipCard emoji="⛏️" title="What is extraction?" front="Extracting a metal means getting it out of its ore — the rocky compound it is found in." back="Metals sit in the reactivity series. Very reactive metals (K, Na, Ca, Mg, Al) are extracted by ELECTROLYSIS of their molten ore. Less reactive metals (Zn, Fe, Sn, Pb, Cu) are extracted by REDUCTION with carbon / carbon monoxide. The least reactive (Ag, Au) are found NATIVE — pure, in the ground." />
          <FlipCard emoji="🧰" title="Apparatus" front="Crucible / cell, furnace, coke (carbon), carbon electrodes, DC power supply, tongs, goggles." back="• Crucible / cell — holds the ore. • Furnace — provides heat for reduction. • Coke — the carbon reductant. • Electrodes + DC supply — drive electrolysis of the molten salt/oxide." />
          <FlipCard emoji="⚡" title="Electrolysis vs reduction" front="Reactive metals → electrolysis. Less reactive metals → reduction with carbon." back="A reactive metal holds onto its ore too strongly for carbon to win, so you push the reaction with electricity (electrolysis). Less reactive metals are below carbon in the series, so carbon CAN take their oxygen away — reduction. Choosing the wrong method fails to produce the metal." />
          <FlipCard emoji="🎯" title="Your task" front="Choose your apparatus & the ore, then see the extraction method." back="Next you will: (1) pick the apparatus, (2) choose the metal ore, (3) read the method from the calculator, then press Start to run the extraction and pick the correct process." />

          <Section title="1 · CHOOSE YOUR APPARATUS">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {EXTRACTION_APPARATUS.map((a) => (
                <Chip key={a.id} item={a} selected={app.includes(a.id)} onPick={() => toggleApp(a.id)} right={a.needed ? <Text style={{ fontSize: 9, color: GREEN, fontWeight: "800", marginLeft: 6 }}>REQ</Text> : null} />
              ))}
            </View>
          </Section>

          <Section title="2 · CHOOSE THE ORE / METAL">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {EXTRACTION_METALS.map((m) => (
                <Chip key={m.id} item={m} selected={metalId === m.id} onPick={() => setMetalId(m.id)} right={<View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: m.metalColor, marginLeft: 7, borderWidth: 1, borderColor: "#e5e7eb" }} />} />
              ))}
            </View>
          </Section>

          <Section title="3 · EXTRACTION METHOD CALCULATOR">
            <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14 }}>
              {metal ? (
                <>
                  <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>Ore: <Text style={{ fontWeight: "800" }}>{metal.ore}</Text></Text>
                  <View style={{ flexDirection: "row", alignItems: "baseline", marginTop: 8 }}>
                    <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>Method: </Text>
                    <Text style={{ fontSize: 18, fontWeight: "900", color: GREEN }}>{extractionMethodLabel(metal)}</Text>
                  </View>
                  <Text style={{ fontSize: 12, color: "#94a3b8", marginTop: 4 }}>
                    {metal.method === "electrolysis" ? "Apply a DC current — carbon cannot reduce this metal." : metal.method === "reduction" ? "Use coke / carbon as the reducing agent." : "Collect the native metal directly — no chemical reduction needed."}
                  </Text>
                </>
              ) : (
                <Text style={{ fontSize: 12, color: "#94a3b8" }}>Pick an ore to see its extraction method.</Text>
              )}
            </View>
          </Section>
        </ScrollView>

        <View style={{ backgroundColor: theme.colors.surface, borderTopWidth: 1, borderTopColor: theme.colors.border, padding: 16 }}>
          <TouchableOpacity onPress={() => { haptic.light(); start(); }} style={{ backgroundColor: GREEN, borderRadius: 12, paddingVertical: 15 }}>
            <Text style={{ color: "#fff", textAlign: "center", fontWeight: "800", fontSize: 16 }}>▶ Start Experiment</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
