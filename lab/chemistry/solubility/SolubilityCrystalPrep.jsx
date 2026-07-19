import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlipCard from "../../titration/FlipCard";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import {
  SOLUTES,
  HEAT_TEMPS,
  WATER_MASSES,
  SOL_APPARATUS,
  computeSolubility,
  ROOM_TEMP,
} from "./solubility-data";

const GREEN = "#16a34a";

export default function SolubilityCrystalPrep() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "solubility";

  const [soluteId, setSoluteId] = useState(SOLUTES[0].id);
  const [heatTemp, setHeatTemp] = useState(HEAT_TEMPS[1]);
  const [waterMass, setWaterMass] = useState(100);
  const [app, setApp] = useState([]);

  const solute = SOLUTES.find((s) => s.id === soluteId);

  // Predict the outcome assuming the student dissolves to saturation when hot.
  const preview = computeSolubility({
    solute,
    heatTemp,
    waterMass,
    addedMass: (computeSolubility({ solute, heatTemp, waterMass, addedMass: 1e9 }).satHotMass),
  });

  function toggleApp(id) {
    setApp((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function start() {
    const required = SOL_APPARATUS.filter((a) => a.needed).map((a) => a.id);
    const missing = required.filter((r) => !app.includes(r));
    if (missing.length) return Alert.alert("Missing apparatus", "Select all the required apparatus before you start.");
    navigation.navigate("SolubilityCrystalLab", {
      experiment,
      topicId,
      config: { solute, heatTemp, waterMass },
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

  const OptionRow = ({ values, value, onSet, unit }) => (
    <View style={{ flexDirection: "row", alignItems: "center", flexWrap: "wrap" }}>
      {values.map((v) => (
        <TouchableOpacity key={v} onPress={() => onSet(v)} style={{ paddingVertical: 8, paddingHorizontal: 14, marginRight: 8, marginBottom: 8, borderRadius: 10, borderWidth: 1.5, borderColor: value === v ? GREEN : "#e5e7eb", backgroundColor: value === v ? "#e7f6ec" : "#fff" }}>
          <Text style={{ fontSize: 13, fontWeight: value === v ? "800" : "600", color: value === v ? "#14532d" : theme.colors.textMuted }}>{v} {unit}</Text>
        </TouchableOpacity>
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

          <FlipCard emoji="💧" title="What is solubility?" front="Solubility is the maximum mass of a solute that dissolves in 100 g of water at a given temperature." back="Solubility is usually given in g / 100 g water. Most solids dissolve MORE as the water gets hotter. When no more will dissolve, the solution is saturated." />
          <FlipCard emoji="🔥" title="Heat to dissolve more" front="Hot water holds far more solute than cold water. Heat the water, then add solute until no more dissolves." back="Heating raises the solubility, so you can pack much more solute into the same water. Stop adding once extra solute just sits at the bottom — that's saturation at the hot temperature." />
          <FlipCard emoji="❄️" title="Cool to crystallize" front="When the hot saturated solution cools, solubility falls and the extra solute crystallizes out." back="Cooling to room temperature lowers the solubility. The dissolved solute above the room-temperature limit can no longer stay dissolved, so it forms crystals. This is how we purify and recover solids." />
          <FlipCard emoji="🎯" title="Your task" front="Pick a solute, a heating temperature and a water mass, then heat → dissolve → cool to grow crystals." back="Next you will: (1) heat the water, (2) add solute until saturated, (3) cool the beaker and watch crystals form, then (4) read the solubility and crystal mass in the report." />

          <Section title="1 · CHOOSE THE SOLUTE">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {SOLUTES.map((s) => (
                <Chip key={s.id} item={s} selected={soluteId === s.id} onPick={() => setSoluteId(s.id)} right={<Text style={{ fontSize: 9, color: GREEN, fontWeight: "800", marginLeft: 6 }}>{s.formula}</Text>} />
              ))}
            </View>
            <Text style={{ fontSize: 12, color: "#94a3b8", marginTop: 4 }}>{solute.note}</Text>
          </Section>

          <Section title="2 · HEATING TEMPERATURE">
            <Text style={{ fontSize: 12, fontWeight: "700", color: theme.colors.textMuted, marginBottom: 8 }}>Temperature to heat the water to</Text>
            <OptionRow values={HEAT_TEMPS} value={heatTemp} onSet={setHeatTemp} unit="°C" />
            <Text style={{ fontSize: 12, color: "#94a3b8", marginTop: 4 }}>Higher temperatures dissolve more — giving larger crystals on cooling.</Text>
          </Section>

          <Section title="3 · MASS OF WATER">
            <Text style={{ fontSize: 12, fontWeight: "700", color: theme.colors.textMuted, marginBottom: 8 }}>Mass of water in the beaker</Text>
            <OptionRow values={WATER_MASSES} value={waterMass} onSet={setWaterMass} unit="g" />
          </Section>

          <Section title="4 · CHOOSE YOUR APPARATUS">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {SOL_APPARATUS.map((a) => (
                <Chip key={a.id} item={a} selected={app.includes(a.id)} onPick={() => toggleApp(a.id)} right={a.needed ? <Text style={{ fontSize: 9, color: GREEN, fontWeight: "800", marginLeft: 6 }}>REQ</Text> : null} />
              ))}
            </View>
          </Section>

          <Section title="5 · PREDICTED RESULT">
            <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14 }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 12, color: "#64748b" }}>Solubility at {heatTemp}°C</Text>
                <Text style={{ fontSize: 14, fontWeight: "800", color: GREEN }}>{preview.solubilityHot.toFixed(1)} g/100g</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 6 }}>
                <Text style={{ fontSize: 12, color: "#64748b" }}>Solubility at {ROOM_TEMP}°C</Text>
                <Text style={{ fontSize: 14, fontWeight: "800", color: "#0f172a" }}>{preview.solubilityRoom.toFixed(1)} g/100g</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 6 }}>
                <Text style={{ fontSize: 12, color: "#64748b" }}>Predicted crystals (on cooling)</Text>
                <Text style={{ fontSize: 14, fontWeight: "800", color: "#0f172a" }}>{preview.crystals.toFixed(1)} g</Text>
              </View>
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
