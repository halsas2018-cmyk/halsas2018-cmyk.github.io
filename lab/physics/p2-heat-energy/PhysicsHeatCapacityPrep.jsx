import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlipCard from "../../titration/FlipCard";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import { HEAT_APPARATUS, MATERIALS, computeTf } from "./heat-data";

const ACCENT = "#ea580c"; // heat orange

export default function PhysicsHeatCapacityPrep() {
  const navigation = useNavigation();
  const route = useRoute();
  const theme = useTheme();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "p2-heat-energy";

  const [app, setApp] = useState([]);
  const [material, setMaterial] = useState("copper");
  const [ms, setMs] = useState(100); // g
  const [mw, setMw] = useState(150); // g

  const mat = MATERIALS.find((m) => m.id === material);
  const tf = computeTf({
    ms: ms / 1000,
    mw: mw / 1000,
    cs: mat.c,
  });

  function toggleApp(id) {
    setApp((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function start() {
    haptic.light();
    const required = HEAT_APPARATUS.filter((a) => a.needed).map((a) => a.id);
    const missing = required.filter((r) => !app.includes(r));
    if (missing.length) return Alert.alert("Missing apparatus", "Select all the required apparatus before you start.");

    const config = { material, ms, mw };
    navigation.navigate("PhysicsHeatCapacityLab", { experiment, topicId, config });
  }

  const Chip = ({ item, selected, onPick, right }) => (
    <TouchableOpacity onPress={onPick} style={{ flexDirection: "row", alignItems: "center", backgroundColor: selected ? "#ffedd5" : theme.colors.surface, borderWidth: 1.5, borderColor: selected ? ACCENT : theme.colors.border, borderRadius: 12, paddingVertical: 9, paddingHorizontal: 12, marginRight: 8, marginBottom: 8 }}>
      {item.icon ? <Text style={{ fontSize: 15, marginRight: 6 }}>{item.icon}</Text> : null}
      <Text style={{ fontSize: 13, fontWeight: selected ? "800" : "600", color: selected ? "#9a3412" : theme.colors.text }}>{item.name}</Text>
      {right}
    </TouchableOpacity>
  );

  const Section = ({ title, children }) => (
    <View style={{ marginBottom: 18 }}>
      <Text style={{ fontSize: 12, fontWeight: "800", color: theme.colors.textMuted, marginBottom: 10, letterSpacing: 0.5 }}>{title}</Text>
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

          <FlipCard emoji="🌡️" title="What is specific heat capacity?" front="Specific heat capacity c is the heat needed to raise 1 kg of a substance by 1 °C." back="Its unit is J/(kg·°C). Different materials store heat differently — metal warms and cools faster than water." accent={ACCENT} />
          <FlipCard emoji="⚗️" title="The method" front="Heat a solid to 100 °C in boiling water, then drop it into cooler water in a calorimeter (beaker)." back="Heat lost by the solid = heat gained by the water: mₛ·cₛ·ΔTₛ = m𝓌·c𝓌·ΔT𝓌. You measure the final temperature and solve for cₛ." accent={ACCENT} />
          <FlipCard emoji="🎯" title="Your task" front="Pick a solid + masses, then run the sim to find the final temperature and compute c." back="Next you will: (1) pick apparatus, (2) choose the solid + masses, then press Start to drop the hot solid and read the temperature rise." accent={ACCENT} />

          <Section title="1 · CHOOSE YOUR APPARATUS">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {HEAT_APPARATUS.map((a) => (
                <Chip key={a.id} item={a} selected={app.includes(a.id)} onPick={() => toggleApp(a.id)} right={a.needed ? <Text style={{ fontSize: 9, color: ACCENT, fontWeight: "800", marginLeft: 6 }}>REQ</Text> : null} />
              ))}
            </View>
          </Section>

          <Section title="2 · SOLID MATERIAL">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {MATERIALS.map((m) => (
                <Chip key={m.id} item={m} selected={material === m.id} onPick={() => setMaterial(m.id)} />
              ))}
            </View>
          </Section>

          <Section title="3 · MASS OF SOLID (g)">
            <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14 }}>
              <Text style={{ fontSize: 22, fontWeight: "900", color: ACCENT }}>{ms} g</Text>
              <View style={{ flexDirection: "row", marginTop: 8 }}>
                {[50, 100, 150].map((val) => (
                  <TouchableOpacity key={val} onPress={() => setMs(val)} style={{ flex: 1, marginHorizontal: 3, backgroundColor: ms === val ? ACCENT : theme.colors.surfaceMuted, borderRadius: 10, paddingVertical: 9 }}>
                    <Text style={{ textAlign: "center", fontSize: 13, fontWeight: "800", color: ms === val ? "#fff" : theme.colors.textMuted }}>{val}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </Section>

          <Section title="4 · MASS OF WATER (g)">
            <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14 }}>
              <Text style={{ fontSize: 22, fontWeight: "900", color: ACCENT }}>{mw} g</Text>
              <View style={{ flexDirection: "row", marginTop: 8 }}>
                {[100, 150, 200].map((val) => (
                  <TouchableOpacity key={val} onPress={() => setMw(val)} style={{ flex: 1, marginHorizontal: 3, backgroundColor: mw === val ? ACCENT : theme.colors.surfaceMuted, borderRadius: 10, paddingVertical: 9 }}>
                    <Text style={{ textAlign: "center", fontSize: 13, fontWeight: "800", color: mw === val ? "#fff" : theme.colors.textMuted }}>{val}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </Section>

          <Section title="5 · PREDICTED FINAL TEMPERATURE">
            <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14 }}>
              <Text style={{ fontSize: 13, color: theme.colors.text }}>With {mat.name} ({ms} g) into {mw} g water at 20 °C:</Text>
              <Text style={{ fontSize: 22, fontWeight: "900", color: ACCENT, marginTop: 6 }}>{tf.toFixed(1)} °C</Text>
              <Text style={{ fontSize: 12, color: theme.colors.textMuted, marginTop: 4 }}>Rise of {(tf - 20).toFixed(1)} °C. (You will measure this in the sim.)</Text>
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
