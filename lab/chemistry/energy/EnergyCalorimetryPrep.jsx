import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlipCard from "../../titration/FlipCard";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import {
  CAL_ACIDS,
  CAL_BASES,
  CAL_APPARATUS,
  CUP_CAPACITY,
  computeNeutralization,
} from "./energy-data";

const GREEN = "#16a34a";

const VOLUMES = [25, 30, 40, 50];

export default function EnergyCalorimetryPrep() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "energy";

  const [acidId, setAcidId] = useState(CAL_ACIDS[0].id);
  const [baseId, setBaseId] = useState(CAL_BASES[0].id);
  const [acidVol, setAcidVol] = useState(25);
  const [baseVol, setBaseVol] = useState(25);
  const [app, setApp] = useState([]);

  const acid = CAL_ACIDS.find((a) => a.id === acidId);
  const base = CAL_BASES.find((b) => b.id === baseId);
  const totalVol = acidVol + baseVol;
  const preview = computeNeutralization({ acid, base, acidVol, baseVol });

  function toggleApp(id) {
    setApp((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function start() {
    const required = CAL_APPARATUS.filter((a) => a.needed).map((a) => a.id);
    const missing = required.filter((r) => !app.includes(r));
    if (missing.length) return Alert.alert("Missing apparatus", "Select all the required apparatus before you start.");
    navigation.navigate("EnergyCalorimetryLab", {
      experiment,
      topicId,
      config: { acid, base, acidVol, baseVol },
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

  const VolRow = ({ value, onSet }) => (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {VOLUMES.map((v) => (
        <TouchableOpacity key={v} onPress={() => onSet(v)} style={{ paddingVertical: 8, paddingHorizontal: 14, marginRight: 8, borderRadius: 10, borderWidth: 1.5, borderColor: value === v ? GREEN : "#e5e7eb", backgroundColor: value === v ? "#e7f6ec" : "#fff" }}>
          <Text style={{ fontSize: 13, fontWeight: value === v ? "800" : "600", color: value === v ? "#14532d" : theme.colors.textMuted }}>{v} mL</Text>
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

          <FlipCard emoji="🌡️" title="What is heat of neutralization?" front="When an acid and an alkali react, heat is released. We measure the temperature rise of the solution." back="Neutralization is H⁺(aq) + OH⁻(aq) → H₂O(l). For a strong acid + strong base it releases about 57 kJ per mole of water formed. We use a polystyrene cup (good insulator) + thermometer to catch the heat." />
          <FlipCard emoji="🧰" title="Apparatus" front="Polystyrene cup, thermometer, stirring rod, measuring cylinders, safety goggles." back="• Polystyrene cup — insulates so little heat escapes. • Thermometer — reads the temperature rise. • Stirring rod — mixes the reactants evenly so the temperature is uniform." />
          <FlipCard emoji="🧪" title="The calculation" front="q = m × c × ΔT, then ΔH = −q ÷ moles of water formed." back="m = total mass of solution (≈ total volume in mL). c = 4.18 J g⁻¹ °C⁻¹ (specific heat of water). ΔT = final − initial temperature. Divide the heat by moles of H₂O to get the enthalpy of neutralization (kJ mol⁻¹)." />
          <FlipCard emoji="🎯" title="Your task" front="Pick an acid, an alkali and their volumes, then run the mix and read the thermometer." back="Next you will: (1) choose your acid & alkali, (2) set the volumes, (3) pour → stir → watch the temperature rise, then (4) read the computed heat and enthalpy. Don't overfill the cup!" />

          <Section title="1 · CHOOSE THE ACID">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {CAL_ACIDS.map((a) => (
                <Chip key={a.id} item={a} selected={acidId === a.id} onPick={() => setAcidId(a.id)} right={<Text style={{ fontSize: 9, color: GREEN, fontWeight: "800", marginLeft: 6 }}>{a.formula}</Text>} />
              ))}
            </View>
            <Text style={{ fontSize: 12, color: "#94a3b8", marginTop: 4 }}>{acid.note}</Text>
          </Section>

          <Section title="2 · CHOOSE THE ALKALI">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {CAL_BASES.map((b) => (
                <Chip key={b.id} item={b} selected={baseId === b.id} onPick={() => setBaseId(b.id)} right={<Text style={{ fontSize: 9, color: GREEN, fontWeight: "800", marginLeft: 6 }}>{b.formula}</Text>} />
              ))}
            </View>
            <Text style={{ fontSize: 12, color: "#94a3b8", marginTop: 4 }}>{base.note}</Text>
          </Section>

          <Section title="3 · SET THE VOLUMES">
            <Text style={{ fontSize: 12, fontWeight: "700", color: theme.colors.textMuted, marginBottom: 8 }}>Acid volume ({acid.formula})</Text>
            <VolRow value={acidVol} onSet={setAcidVol} />
            <Text style={{ fontSize: 12, fontWeight: "700", color: theme.colors.textMuted, marginBottom: 8, marginTop: 12 }}>Alkali volume ({base.formula})</Text>
            <VolRow value={baseVol} onSet={setBaseVol} />
            <Text style={{ fontSize: 12, color: totalVol > CUP_CAPACITY ? "#dc2626" : "#94a3b8", marginTop: 8 }}>
              Total = {totalVol} mL {totalVol > CUP_CAPACITY ? "— TOO MUCH! The cup holds " + CUP_CAPACITY + " mL and will overflow." : `(cup holds ${CUP_CAPACITY} mL).`}
            </Text>
          </Section>

          <Section title="4 · CHOOSE YOUR APPARATUS">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {CAL_APPARATUS.map((a) => (
                <Chip key={a.id} item={a} selected={app.includes(a.id)} onPick={() => toggleApp(a.id)} right={a.needed ? <Text style={{ fontSize: 9, color: GREEN, fontWeight: "800", marginLeft: 6 }}>REQ</Text> : null} />
              ))}
            </View>
          </Section>

          <Section title="5 · PREDICTED RESULT">
            <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14 }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 12, color: "#64748b" }}>Expected temp rise</Text>
                <Text style={{ fontSize: 14, fontWeight: "800", color: GREEN }}>+{preview.deltaT.toFixed(1)} °C</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 6 }}>
                <Text style={{ fontSize: 12, color: "#64748b" }}>Expected ΔH (neut.)</Text>
                <Text style={{ fontSize: 14, fontWeight: "800", color: "#0f172a" }}>−{preview.dH.toFixed(1)} kJ/mol</Text>
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
