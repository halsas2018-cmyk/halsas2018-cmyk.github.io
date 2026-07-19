import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, TextInput, StatusBar, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlipCard from "../../titration/FlipCard";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import {
  GAS_APPARATUS,
  PRESSURE_OPTIONS,
  VOLUME_OPTIONS,
  TEMP_OPTIONS,
  GAS_SCENARIOS,
  CHANGED_VALUES,
  computeGasAnswer,
  finalState,
  gasTolerance,
} from "./states-data.js";

const GREEN = "#16a34a";

export default function StatesGasLawsPrep() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "states";

  const [app, setApp] = useState([]);
  const [P1, setP1] = useState(null);
  const [V1, setV1] = useState(null);
  const [T1c, setT1c] = useState(null);
  const [scenarioId, setScenarioId] = useState(null);
  const [changed, setChanged] = useState(null);
  const [guess, setGuess] = useState("");

  const scenario = GAS_SCENARIOS.find((s) => s.id === scenarioId) || null;
  const initReady = P1 != null && V1 != null && T1c != null;
  const init = initReady ? { P1, V1, T1c } : null;
  const changedReady = changed != null;

  const answer = scenario && initReady && changedReady ? computeGasAnswer(scenarioId, init, changed) : null;
  const tol = answer ? gasTolerance(answer.value) : null;

  function toggleApp(id) {
    setApp((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function pickScenario(id) {
    setScenarioId(id);
    setChanged(null); // reset the changed value when the scenario changes
  }

  function start() {
    const required = GAS_APPARATUS.filter((a) => a.needed).map((a) => a.id);
    const missing = required.filter((r) => !app.includes(r));
    if (missing.length) return Alert.alert("Missing apparatus", "Select all the required apparatus before you start.");
    if (!initReady) return Alert.alert("Set initial conditions", "Choose the starting pressure, volume and temperature.");
    if (!scenario) return Alert.alert("Pick a law", "Choose which gas law you want to investigate.");
    if (!changedReady) return Alert.alert("Set the change", "Enter the new value of the changed variable.");
    const g = parseFloat(guess);
    if (!(g > 0) && g !== 0) return Alert.alert("Enter a prediction", "Type your predicted value for the new " + scenario.findVar + ".");
    if (!answer) return Alert.alert("Calculation error", "Something went wrong — check your inputs.");

    const config = {
      scenarioId,
      scenario,
      init,
      changed,
      guess: g,
      answer,
      final: finalState(scenarioId, init, changed),
      apparatus: app,
    };
    navigation.navigate("StatesGasLawsLab", { experiment, topicId, config });
  }

  const Chip = ({ item, selected, onPick, right }) => (
    <TouchableOpacity onPress={onPick} style={{ flexDirection: "row", alignItems: "center", backgroundColor: selected ? "#e7f6ec" : "#fff", borderWidth: 1.5, borderColor: selected ? GREEN : "#e5e7eb", borderRadius: 12, paddingVertical: 9, paddingHorizontal: 12, marginRight: 8, marginBottom: 8 }}>
      <Text style={{ fontSize: 13, fontWeight: selected ? "800" : "600", color: selected ? "#14532d" : theme.colors.textMuted }}>{item.icon ? item.icon + " " : ""}{item.label || item.name}</Text>
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

          <FlipCard emoji="🫧" title="Boyle's law" front="At constant temperature, pressure and volume are inversely proportional: P₁V₁ = P₂V₂." back="Squeeze a gas (smaller V) and its pressure rises; let it expand (bigger V) and pressure falls. The product P×V stays constant. A piston in a sealed syringe shows this clearly." />
          <FlipCard emoji="🌡️" title="Charles's law" front="At constant pressure, volume is directly proportional to absolute temperature: V₁/T₁ = V₂/T₂." back="Heat a gas and it expands; cool it and it shrinks — but ONLY if you use Kelvin (°C + 273). Doubling the Kelvin temperature doubles the volume. A balloon over a warm bath shows this." />
          <FlipCard emoji="🧰" title="Apparatus" front="A gas syringe (with a pressure gauge) — and a thermometer/water bath for Charles's law." back="• Gas syringe — holds a fixed amount of gas and reads its volume. • Pressure gauge — reads the pressure. • Thermometer + water bath — set and hold the temperature for Charles's law." />
          <FlipCard emoji="🎯" title="Your task" front="Set the starting conditions, pick a law, change one variable and predict the result." back="Next you will: (1) pick apparatus, (2) set P₁/V₁/T₁, (3) choose a law and the changed variable, (4) enter your prediction. The calculator checks the formula for you, then press Start." />

          <Section title="1 · CHOOSE YOUR APPARATUS">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {GAS_APPARATUS.map((a) => (
                <Chip key={a.id} item={a} selected={app.includes(a.id)} onPick={() => toggleApp(a.id)} right={a.needed ? <Text style={{ fontSize: 9, color: GREEN, fontWeight: "800", marginLeft: 6 }}>REQ</Text> : null} />
              ))}
            </View>
          </Section>

          <Section title="2 · INITIAL CONDITIONS">
            <Text style={{ fontSize: 11, fontWeight: "700", color: "#9ca3af", marginBottom: 6 }}>PRESSURE  P₁</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 8 }}>
              {PRESSURE_OPTIONS.map((p) => (
                <Chip key={p.id} item={p} selected={P1 === p.value} onPick={() => setP1(p.value)} />
              ))}
            </View>
            <Text style={{ fontSize: 11, fontWeight: "700", color: "#9ca3af", marginBottom: 6 }}>VOLUME  V₁</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 8 }}>
              {VOLUME_OPTIONS.map((v) => (
                <Chip key={v.id} item={v} selected={V1 === v.value} onPick={() => setV1(v.value)} />
              ))}
            </View>
            <Text style={{ fontSize: 11, fontWeight: "700", color: "#9ca3af", marginBottom: 6 }}>TEMPERATURE  T₁</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {TEMP_OPTIONS.map((t) => (
                <Chip key={t.id} item={t} selected={T1c === t.value} onPick={() => setT1c(t.value)} />
              ))}
            </View>
          </Section>

          <Section title="3 · CHOOSE A GAS LAW & WHAT CHANGES">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {GAS_SCENARIOS.map((s) => (
                <Chip key={s.id} item={s} selected={scenarioId === s.id} onPick={() => pickScenario(s.id)} />
              ))}
            </View>
            {scenario ? (
              <View style={{ marginTop: 10 }}>
                <Text style={{ fontSize: 11, fontWeight: "700", color: "#9ca3af", marginBottom: 6 }}>
                  NEW VALUE OF {scenario.changedVar} ({scenario.changedVar === "T" ? "°C" : scenario.changedVar})
                </Text>
                <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                  {CHANGED_VALUES[scenario.id].map((c) => (
                    <Chip key={c.id} item={c} selected={changed === c.value} onPick={() => setChanged(c.value)} />
                  ))}
                </View>
              </View>
            ) : null}
          </Section>

          <Section title="4 · PREDICT & CALCULATOR">
            <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted, flex: 1 }}>Your predicted {scenario ? scenario.findVar : "value"}</Text>
                <TextInput
                  value={guess}
                  onChangeText={setGuess}
                  keyboardType="numeric"
                  placeholder="?"
                  style={{ borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 8, padding: 8, width: 80, textAlign: "center", fontSize: 14, color: theme.colors.text }}
                />
                <Text style={{ fontSize: 13, color: "#6b7280", marginLeft: 6 }}>{scenario ? scenario.unit : ""}</Text>
              </View>
              {answer ? (
                <>
                  <Text style={{ fontSize: 12, color: "#6b7280", marginTop: 10, fontStyle: "italic" }}>{answer.formula}</Text>
                  <View style={{ flexDirection: "row", alignItems: "baseline", marginTop: 8 }}>
                    <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>True {scenario.findVar}: </Text>
                    <Text style={{ fontSize: 22, fontWeight: "900", color: GREEN }}>{answer.value} {answer.unit}</Text>
                  </View>
                  <Text style={{ fontSize: 12, color: "#94a3b8", marginTop: 4 }}>
                    You pass if your prediction is within ±{tol} {answer.unit}. {scenario.law}'s law holds — {scenario.changedVar} changed, {scenario.findVar} follows.
                  </Text>
                </>
              ) : (
                <Text style={{ fontSize: 12, color: "#94a3b8", marginTop: 10 }}>Set the initial conditions, a law and the changed value to see the true result.</Text>
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
