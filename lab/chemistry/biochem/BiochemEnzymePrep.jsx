import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlipCard from "../../titration/FlipCard";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import {
  TEMP_BANDS,
  PH_LEVELS,
  SUBSTRATE_LEVELS,
  ENZ_APPARATUS,
  ENZYME,
  computeReaction,
} from "./biochem-data";

const GREEN = "#16a34a";

export default function BiochemEnzymePrep() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "biochem";

  const [tempId, setTempId] = useState("optimum");
  const [phId, setPhId] = useState("neutral");
  const [subId, setSubId] = useState("medium");
  const [app, setApp] = useState([]);

  const preview = computeReaction({ tempId, phId, subId });

  function toggleApp(id) {
    setApp((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function start() {
    const required = ENZ_APPARATUS.filter((a) => a.needed).map((a) => a.id);
    const missing = required.filter((r) => !app.includes(r));
    if (missing.length) return Alert.alert("Missing apparatus", "Select all the required apparatus before you start.");
    navigation.navigate("BiochemEnzymeLab", {
      experiment,
      topicId,
      config: { tempId, phId, subId },
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

  const BandRow = ({ list, value, onSet }) => (
    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
      {list.map((b) => (
        <Chip key={b.id} item={b} selected={value === b.id} onPick={() => onSet(b.id)} />
      ))}
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

          <FlipCard emoji="🧬" title="What is an enzyme?" front="Enzymes are biological catalysts. Catalase breaks hydrogen peroxide (H₂O₂) into water and oxygen gas." back="Catalase speeds up 2 H₂O₂ → 2 H₂O + O₂. The enzyme is not used up. Temperature, pH and substrate concentration all change how FAST the reaction runs." />
          <FlipCard emoji="🔥" title="Temperature" front="Rate rises to an optimum (≈37 °C) then falls. Very high heat DENATURES the enzyme." back="Heat gives molecules more energy, so more collisions happen — up to a point. Past ~60 °C the enzyme's shape unfolds and its active site no longer fits the substrate, so the rate crashes." />
          <FlipCard emoji="💧" title="pH & substrate" front="Catalase likes neutral pH. More substrate (H₂O₂) means a faster reaction — until the enzyme is saturated." back="Wrong pH distorts the active site. Substrate concentration raises the rate because collisions are more frequent, but once every active site is busy the rate levels off." />
          <FlipCard emoji="🎯" title="Your task" front="Choose a temperature, pH and substrate concentration, then run the reaction and collect the O₂." back="Next you will: (1) heat the bath to your temperature, (2) add catalase + H₂O₂, (3) start the reaction and watch O₂ fill the gas jar, then (4) read the reaction rate." />

          <Section title="1 · CHOOSE THE TEMPERATURE">
            <BandRow list={TEMP_BANDS} value={tempId} onSet={setTempId} />
            <Text style={{ fontSize: 12, color: "#94a3b8", marginTop: 4 }}>{preview.temp.note}</Text>
          </Section>

          <Section title="2 · CHOOSE THE pH">
            <BandRow list={PH_LEVELS} value={phId} onSet={setPhId} />
            <Text style={{ fontSize: 12, color: "#94a3b8", marginTop: 4 }}>{preview.ph.note}</Text>
          </Section>

          <Section title="3 · CHOOSE THE SUBSTRATE CONCENTRATION">
            <BandRow list={SUBSTRATE_LEVELS} value={subId} onSet={setSubId} />
            <Text style={{ fontSize: 12, color: "#94a3b8", marginTop: 4 }}>{preview.sub.note}</Text>
          </Section>

          <Section title="4 · CHOOSE YOUR APPARATUS">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {ENZ_APPARATUS.map((a) => (
                <Chip key={a.id} item={a} selected={app.includes(a.id)} onPick={() => toggleApp(a.id)} right={a.needed ? <Text style={{ fontSize: 9, color: GREEN, fontWeight: "800", marginLeft: 6 }}>REQ</Text> : null} />
              ))}
            </View>
          </Section>

          <Section title="5 · PREDICTED RESULT">
            <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14 }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 12, color: "#64748b" }}>Predicted rate</Text>
                <Text style={{ fontSize: 14, fontWeight: "800", color: GREEN }}>{preview.rate.toFixed(1)} cm³/min</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 6 }}>
                <Text style={{ fontSize: 12, color: "#64748b" }}>O₂ in 2 min</Text>
                <Text style={{ fontSize: 14, fontWeight: "800", color: "#0f172a" }}>{preview.gasVolume.toFixed(1)} cm³</Text>
              </View>
              <Text style={{ fontSize: 12, color: "#94a3b8", marginTop: 8 }}>Using {preview.temp.label}, {preview.ph.label}, {preview.sub.label}.</Text>
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
