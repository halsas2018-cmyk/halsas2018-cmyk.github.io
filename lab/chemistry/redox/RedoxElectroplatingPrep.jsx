import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlipCard from "../../titration/FlipCard";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import {
  PLATING_METALS,
  ELECTROLYTES,
  PLATE_OBJECTS,
  ELECTROPLATING_APPARATUS,
  electrolyteFor,
  isElectrolyteMatch,
} from "./redox-data";

const GREEN = "#16a34a";

export default function RedoxElectroplatingPrep() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "redox";

  const [app, setApp] = useState([]);
  const [metalId, setMetalId] = useState(null);
  const [electrolyteId, setElectrolyteId] = useState(null);
  const [objectId, setObjectId] = useState(null);

  const metal = PLATING_METALS.find((m) => m.id === metalId);
  const electrolyte = ELECTROLYTES.find((e) => e.id === electrolyteId);
  const object = PLATE_OBJECTS.find((o) => o.id === objectId);
  // The electrolyte is only valid if its metal matches the chosen plating metal.
  const matchOk = metal && electrolyte ? isElectrolyteMatch(metal.id, electrolyte.id) : false;

  function toggleApp(id) {
    setApp((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function start() {
    const required = ELECTROPLATING_APPARATUS.filter((a) => a.needed).map((a) => a.id);
    const missing = required.filter((r) => !app.includes(r));
    if (missing.length) return Alert.alert("Missing apparatus", "Select all the required apparatus before you start.");
    if (!metal) return Alert.alert("Pick a plating metal", "Choose the metal you will plate with (the anode).");
    if (!object) return Alert.alert("Pick an object", "Choose the object to be coated (the cathode).");
    if (!electrolyte) return Alert.alert("Pick an electrolyte", "Choose the salt solution to use.");
    if (!matchOk) {
      const correct = electrolyteFor(metal.id);
      return Alert.alert(
        "Electrolyte mismatch",
        `The electrolyte must contain the SAME metal ions as the metal you plate with. For ${metal.name}, use ${correct ? correct.name : "the matching salt"}.`
      );
    }

    const config = {
      platingMetal: metal,
      electrolyte,
      object,
      apparatus: app,
    };
    navigation.navigate("RedoxElectroplatingLab", { experiment, topicId, config });
  }

  const Chip = ({ item, selected, onPick, right }) => (
    <TouchableOpacity onPress={onPick} style={{ flexDirection: "row", alignItems: "center", backgroundColor: selected ? "#e7f6ec" : "#fff", borderWidth: 1.5, borderColor: selected ? GREEN : "#e5e7eb", borderRadius: 12, paddingVertical: 9, paddingHorizontal: 12, marginRight: 8, marginBottom: 8 }}>
      {item.color ? <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: item.color, marginRight: 7 }} /> : null}
      <Text style={{ fontSize: 13, fontWeight: selected ? "800" : "600", color: selected ? "#14532d" : theme.colors.textMuted }}>{item.symbol ? item.symbol + " " : ""}{item.name || item.formula}</Text>
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

          <FlipCard emoji="🔌" title="What is electroplating?" front="Electroplating uses electricity to coat a cheap metal object with a thin layer of a nicer/shinier metal." back="The object is the CATHODE (−). The plating metal is the ANODE (+). When current flows, the anode dissolves into the solution and the metal ions travel across and deposit as a solid coating on the cathode." />
          <FlipCard emoji="🧰" title="Apparatus" front="Beaker, DC supply, wires, plating-metal bar (anode), object (cathode)." back="• Beaker holds the electrolyte (a salt solution of the plating metal). • DC supply drives the reaction. • The plating-metal bar is the ANODE (+); the object to coat is the CATHODE (−). • Wires connect each electrode to the correct terminal." />
          <FlipCard emoji="⚡" title="Anode vs cathode" front="Anode = + = oxidation (metal dissolves). Cathode = − = reduction (metal plates out)." back={`At the anode: M → M${"²⁺"} + 2e⁻ (the bar loses mass). At the cathode: M${"²⁺"} + 2e⁻ → M (the object gains a coating). Electrons flow from the anode to the cathode through the wire.`} />
          <FlipCard emoji="🧪" title="The electrolyte" front="The solution must contain the SAME metal ions you are plating with." back="Copper plating needs copper(II) sulphate; silver plating needs silver nitrate; and so on. If the electrolyte's metal differs from the anode metal, the wrong metal plates out and the result is ruined." />
          <FlipCard emoji="🎯" title="Your task" front="Pick the metal, the object and the matching electrolyte, then plate it." back="Next you will: (1) choose your apparatus, (2) pick the plating metal, (3) pick the object, (4) pick the matching electrolyte, then press Start to run the cell. Watch the coating form as current flows." />

          <Section title="1 · CHOOSE YOUR APPARATUS">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {ELECTROPLATING_APPARATUS.map((a) => (
                <Chip key={a.id} item={a} selected={app.includes(a.id)} onPick={() => toggleApp(a.id)} right={a.needed ? <Text style={{ fontSize: 9, color: GREEN, fontWeight: "800", marginLeft: 6 }}>REQ</Text> : null} />
              ))}
            </View>
          </Section>

          <Section title="2 · CHOOSE THE PLATING METAL (ANODE)">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {PLATING_METALS.map((m) => (
                <Chip key={m.id} item={m} selected={metalId === m.id} onPick={() => { setMetalId(m.id); setElectrolyteId(null); }} />
              ))}
            </View>
          </Section>

          <Section title="3 · CHOOSE THE OBJECT TO COAT (CATHODE)">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {PLATE_OBJECTS.map((o) => (
                <Chip key={o.id} item={o} selected={objectId === o.id} onPick={() => setObjectId(o.id)} />
              ))}
            </View>
          </Section>

          <Section title="4 · CHOOSE THE ELECTROLYTE">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {ELECTROLYTES.map((e) => (
                <Chip key={e.id} item={e} selected={electrolyteId === e.id} onPick={() => setElectrolyteId(e.id)} right={metal && e.metalId === metal.id ? <Text style={{ fontSize: 9, color: GREEN, fontWeight: "800", marginLeft: 6 }}>MATCH</Text> : null} />
              ))}
            </View>
            {metal && electrolyte && !matchOk ? (
              <Text style={{ fontSize: 12, color: "#dc2626", marginTop: 6, fontWeight: "600" }}>⚠️ {electrolyte.name} does not contain {metal.name} ions — pick the matching salt.</Text>
            ) : null}
          </Section>

          <Section title="5 · CELL SET-UP CHECK">
            <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14 }}>
              {metal ? (
                <>
                  <Text style={{ fontSize: 12, color: "#6b7280" }}>Anode (+): {metal.name} dissolves</Text>
                  <Text style={{ fontSize: 12, color: "#6b7280", marginTop: 4 }}>{metal.symbol} → {metal.symbol}²⁺ + {metal.charge}e⁻</Text>
                  <Text style={{ fontSize: 12, color: "#6b7280", marginTop: 10 }}>Cathode (−): {object ? object.name : "the object"} gets coated</Text>
                  <Text style={{ fontSize: 12, color: "#6b7280", marginTop: 4 }}>{metal.symbol}²⁺ + {metal.charge}e⁻ → {metal.symbol}</Text>
                  <Text style={{ fontSize: 12, color: matchOk ? GREEN : "#dc2626", marginTop: 10, fontWeight: "700" }}>
                    {matchOk ? `✓ Electrolyte ${electrolyte.formula} matches — ready to plate.` : "Pick a matching electrolyte to continue."}
                  </Text>
                </>
              ) : (
                <Text style={{ fontSize: 12, color: "#94a3b8" }}>Pick a plating metal to see the half-equations.</Text>
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
