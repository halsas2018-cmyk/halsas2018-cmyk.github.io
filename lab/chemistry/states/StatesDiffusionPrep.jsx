import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlipCard from "../../titration/FlipCard";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import {
  DIFFUSION_GASES,
  DIFFUSION_APPARATUS,
  grahamsRate,
  diffusionRatio,
  orderByMass,
} from "./states-data.js";

const GREEN = "#16a34a";

export default function StatesDiffusionPrep() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "states";

  const [app, setApp] = useState([]);
  const [gasAId, setGasAId] = useState(null);
  const [gasBId, setGasBId] = useState(null);
  const [predFaster, setPredFaster] = useState(null); // "A" or "B"

  const gasA = DIFFUSION_GASES.find((g) => g.id === gasAId);
  const gasB = DIFFUSION_GASES.find((g) => g.id === gasBId);
  const sameGas = gasA && gasB && gasA.id === gasB.id;

  const ordered = gasA && gasB && !sameGas ? orderByMass(gasA, gasB) : null;
  const calc = ordered
    ? {
        rateA: grahamsRate(gasA.molarMass),
        rateB: grahamsRate(gasB.molarMass),
        ratio: diffusionRatio(ordered.lighter.molarMass, ordered.heavier.molarMass),
        lighter: ordered.lighter,
      }
    : null;

  function toggleApp(id) {
    setApp((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function start() {
    const required = DIFFUSION_APPARATUS.filter((a) => a.needed).map((a) => a.id);
    const missing = required.filter((r) => !app.includes(r));
    if (missing.length) return Alert.alert("Missing apparatus", "Select all the required apparatus before you start.");
    if (!gasA || !gasB) return Alert.alert("Pick both gases", "Choose two different gases to compare.");
    if (sameGas) return Alert.alert("Same gas", "Pick TWO different gases — diffusion is about comparing rates.");
    if (!predFaster) return Alert.alert("Make a prediction", "Predict which gas will diffuse faster before you start.");

    const config = {
      gasA,
      gasB,
      lighterId: ordered.lighter.id,
      prediction: predFaster, // "A" or "B"
      apparatus: app,
    };
    navigation.navigate("StatesDiffusionLab", { experiment, topicId, config });
  }

  const Chip = ({ item, selected, onPick, right }) => (
    <TouchableOpacity onPress={onPick} style={{ flexDirection: "row", alignItems: "center", backgroundColor: selected ? "#e7f6ec" : "#fff", borderWidth: 1.5, borderColor: selected ? GREEN : "#e5e7eb", borderRadius: 12, paddingVertical: 9, paddingHorizontal: 12, marginRight: 8, marginBottom: 8 }}>
      {item.color ? <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: item.color, marginRight: 7 }} /> : null}
      <Text style={{ fontSize: 13, fontWeight: selected ? "800" : "600", color: selected ? "#14532d" : theme.colors.textMuted }}>{item.icon ? item.icon + " " : ""}{item.name} ({item.formula})</Text>
      {right}
    </TouchableOpacity>
  );

  const Section = ({ title, children }) => (
    <View style={{ marginBottom: 18 }}>
      <Text style={{ fontSize: 12, fontWeight: "800", color: "#6b7280", marginBottom: 10, letterSpacing: 0.5 }}>{title}</Text>
      {children}
    </View>
  );

  const PRED_CHOICES = gasA && gasB && !sameGas
    ? [
        { key: "A", gas: gasA },
        { key: "B", gas: gasB },
      ]
    : [];

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

          <FlipCard emoji="💨" title="What is diffusion?" front="Diffusion is the spreading of gas particles from a region of high concentration to one of low concentration." back="Gas particles move randomly and quickly. Given time, two different gases placed side by side mix evenly. We compare HOW FAST different gases diffuse." />
          <FlipCard emoji="⚖️" title="Graham's law" front="Lighter gases diffuse faster. Rate ∝ 1 / √(molar mass)." back="Graham's law: the rate of diffusion of a gas is inversely proportional to the square root of its molar mass. So a gas that is 4× heavier diffuses only half as fast. Hydrogen (M=2) is far quicker than chlorine (M=71)." />
          <FlipCard emoji="🧰" title="Apparatus" front="Two gas jars joined by a tube, plus a stopwatch to time the spread." back="• Two gas jars — one filled with each gas. • Connecting tube — links the jars so the gases mix. • Stopwatch — times how long a colour/odour takes to appear on the far side. A porous barrier can separate them until you start." />
          <FlipCard emoji="🔬" title="Method" front="Fill each jar with a different gas, open the link, and watch them mix." back="The lighter gas's particles cover the distance to the other jar first. By timing arrival (or observing which colour reaches the centre sooner) you confirm Graham's law." />
          <FlipCard emoji="🎯" title="Your task" front="Pick two gases, predict which diffuses faster, then run the simulation." back="Next you will: (1) pick the apparatus, (2) choose gas A & gas B, (3) predict which diffuses faster (the calculator checks Graham's law for you), then press Start." />

          <Section title="1 · CHOOSE YOUR APPARATUS">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {DIFFUSION_APPARATUS.map((a) => (
                <Chip key={a.id} item={a} selected={app.includes(a.id)} onPick={() => toggleApp(a.id)} right={a.needed ? <Text style={{ fontSize: 9, color: GREEN, fontWeight: "800", marginLeft: 6 }}>REQ</Text> : null} />
              ))}
            </View>
          </Section>

          <Section title="2 · CHOOSE GAS A">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {DIFFUSION_GASES.map((g) => (
                <Chip key={g.id} item={g} selected={gasAId === g.id} onPick={() => setGasAId(g.id)} />
              ))}
            </View>
          </Section>

          <Section title="3 · CHOOSE GAS B">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {DIFFUSION_GASES.map((g) => (
                <Chip key={g.id} item={g} selected={gasBId === g.id} onPick={() => setGasBId(g.id)} />
              ))}
            </View>
            {sameGas ? <Text style={{ fontSize: 12, color: "#dc2626", marginTop: 6, fontWeight: "600" }}>⚠️ Pick a DIFFERENT gas for B.</Text> : null}
          </Section>

          <Section title="4 · PREDICT WHICH DIFFUSES FASTER">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {PRED_CHOICES.map((c) => (
                <Chip
                  key={c.key}
                  item={c.gas}
                  selected={predFaster === c.key}
                  onPick={() => setPredFaster(c.key)}
                  right={<Text style={{ fontSize: 9, color: "#6b7280", fontWeight: "800", marginLeft: 6 }}>gas {c.key}</Text>}
                />
              ))}
            </View>
            {!gasA || !gasB || sameGas ? (
              <Text style={{ fontSize: 12, color: "#94a3b8", marginTop: 6 }}>Choose two different gases first.</Text>
            ) : null}
          </Section>

          <Section title="5 · GRAHAM'S LAW CALCULATOR">
            <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14 }}>
              {calc ? (
                <>
                  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>Rate A ({gasA.formula})</Text>
                    <Text style={{ fontSize: 13, fontWeight: "800", color: theme.colors.text }}>{calc.rateA.toFixed(3)}</Text>
                  </View>
                  <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 4 }}>
                    <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>Rate B ({gasB.formula})</Text>
                    <Text style={{ fontSize: 13, fontWeight: "800", color: theme.colors.text }}>{calc.rateB.toFixed(3)}</Text>
                  </View>
                  <View style={{ height: 1, backgroundColor: theme.colors.border, marginVertical: 10 }} />
                  <Text style={{ fontSize: 12, color: "#6b7280", lineHeight: 18 }}>
                    1/√M means the lighter gas always wins. <Text style={{ fontWeight: "800", color: GREEN }}>{calc.lighter.name}</Text> is lighter, so it diffuses{" "}
                    <Text style={{ fontWeight: "800", color: GREEN }}>{calc.ratio}×</Text> faster than {calc.lighter.id === gasA.id ? gasB.name : gasA.name}.
                  </Text>
                  {predFaster ? (
                    <Text style={{ fontSize: 12, marginTop: 8, fontWeight: "700", color: (predFaster === "A" ? gasA.id : gasB.id) === calc.lighter.id ? GREEN : "#dc2626" }}>
                      {(predFaster === "A" ? gasA.name : gasB.name) === calc.lighter.name
                        ? "✓ Your prediction matches Graham's law."
                        : "⚠️ Chemistry says the lighter gas (" + calc.lighter.name + ") is faster — watch what happens in the sim!"}
                    </Text>
                  ) : null}
                </>
              ) : (
                <Text style={{ fontSize: 12, color: "#94a3b8" }}>Pick two different gases to see their relative diffusion rates.</Text>
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
