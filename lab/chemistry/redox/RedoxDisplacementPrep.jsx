import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlipCard from "../../titration/FlipCard";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import {
  DISPLACE_METALS,
  DISPLACEMENT_APPARATUS,
  willDisplace,
  displacementEquations,
} from "./redox-data";

const GREEN = "#16a34a";

export default function RedoxDisplacementPrep() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "redox";

  const [app, setApp] = useState([]);
  const [addedId, setAddedId] = useState(null);
  const [saltId, setSaltId] = useState(null);
  const [prediction, setPrediction] = useState(null); // true = "yes, displaces"

  const added = DISPLACE_METALS.find((m) => m.id === addedId);
  const salt = DISPLACE_METALS.find((m) => m.id === saltId);
  const occurs = added && salt ? willDisplace(added, salt) : null;
  const sameMetal = added && salt && added.id === salt.id;
  const eq = added && salt && occurs ? displacementEquations(added, salt) : null;
  const predictionCorrect = occurs != null && prediction != null ? prediction === occurs : null;

  function toggleApp(id) {
    setApp((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function start() {
    const required = DISPLACEMENT_APPARATUS.filter((a) => a.needed).map((a) => a.id);
    const missing = required.filter((r) => !app.includes(r));
    if (missing.length) return Alert.alert("Missing apparatus", "Select all the required apparatus before you start.");
    if (!added) return Alert.alert("Pick a metal strip", "Choose the solid metal you will dip into the solution.");
    if (!salt) return Alert.alert("Pick a salt", "Choose which metal's solution to use.");
    if (added.id === salt.id) return Alert.alert("Same metal", "The strip and the salt must be DIFFERENT metals — pick another salt.");
    if (prediction == null) return Alert.alert("Make a prediction", "Predict whether the displacement will happen before you start.");

    const config = {
      addedMetal: added,
      saltMetal: salt,
      predicted: prediction,
      apparatus: app,
    };
    navigation.navigate("RedoxDisplacementLab", { experiment, topicId, config });
  }

  const Chip = ({ item, selected, onPick, right }) => (
    <TouchableOpacity onPress={onPick} style={{ flexDirection: "row", alignItems: "center", backgroundColor: selected ? "#e7f6ec" : "#fff", borderWidth: 1.5, borderColor: selected ? GREEN : "#e5e7eb", borderRadius: 12, paddingVertical: 9, paddingHorizontal: 12, marginRight: 8, marginBottom: 8 }}>
      {item.color ? <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: item.color, marginRight: 7 }} /> : null}
      <Text style={{ fontSize: 13, fontWeight: selected ? "800" : "600", color: selected ? "#14532d" : theme.colors.textMuted }}>{item.symbol ? item.symbol + " " : ""}{item.name}</Text>
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

          <FlipCard emoji="🔁" title="What is a displacement reaction?" front="A more reactive metal pushes a less reactive metal out of its dissolved salt." back="If you dip a reactive metal into a solution of a less reactive metal's salt, the reactive metal dissolves and the less reactive metal comes out as a solid. No reaction happens the other way round." />
          <FlipCard emoji="📏" title="The reactivity series" front="Most → least reactive: Mg > Zn > Fe > Pb > Cu > Ag." back="A metal higher in the series displaces one lower down from its aqueous salt. Mg displaces Cu; Cu does NOT displace Mg. Hydrogen sits between Pb and Cu." />
          <FlipCard emoji="🧪" title="What you see" front="The strip may get a coating; the solution may change colour as the new metal forms." back="Example: dipping Zn into CuSO₄ turns the strip coppery and the blue solution fades as Cu²⁺ ions are replaced by colourless Zn²⁺. If no displacement can occur, nothing changes." />
          <FlipCard emoji="⚖️" title="Your task" front="Pick two metals, predict if displacement occurs, then watch it happen." back="Next you will: (1) choose your apparatus, (2) pick the solid metal strip, (3) pick the salt's metal, (4) predict the outcome, then press Start to run the reaction." />

          <Section title="1 · CHOOSE YOUR APPARATUS">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {DISPLACEMENT_APPARATUS.map((a) => (
                <Chip key={a.id} item={a} selected={app.includes(a.id)} onPick={() => toggleApp(a.id)} right={a.needed ? <Text style={{ fontSize: 9, color: GREEN, fontWeight: "800", marginLeft: 6 }}>REQ</Text> : null} />
              ))}
            </View>
          </Section>

          <Section title="2 · CHOOSE THE SOLID METAL STRIP">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {DISPLACE_METALS.map((m) => (
                <Chip key={m.id} item={m} selected={addedId === m.id} onPick={() => setAddedId(m.id)} />
              ))}
            </View>
          </Section>

          <Section title="3 · CHOOSE THE SALT (METAL IN SOLUTION)">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {DISPLACE_METALS.map((m) => (
                <Chip key={m.id} item={m} selected={saltId === m.id} onPick={() => setSaltId(m.id)} right={added && m.id === added.id ? <Text style={{ fontSize: 9, color: "#dc2626", fontWeight: "800", marginLeft: 6 }}>SAME</Text> : null} />
              ))}
            </View>
            {sameMetal ? (
              <Text style={{ fontSize: 12, color: "#dc2626", marginTop: 6, fontWeight: "600" }}>⚠️ The strip and the salt are the same metal — pick a different salt.</Text>
            ) : null}
          </Section>

          <Section title="4 · PREDICT: WILL DISPLACEMENT OCCUR?">
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity onPress={() => setPrediction(true)} style={{ flex: 1, marginRight: 6, backgroundColor: prediction === true ? "#e7f6ec" : "#fff", borderWidth: 1.5, borderColor: prediction === true ? GREEN : "#e5e7eb", borderRadius: 12, paddingVertical: 12, alignItems: "center" }}>
                <Text style={{ fontWeight: "800", color: prediction === true ? "#14532d" : theme.colors.textMuted }}>Yes, it displaces</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setPrediction(false)} style={{ flex: 1, marginLeft: 6, backgroundColor: prediction === false ? "#e7f6ec" : "#fff", borderWidth: 1.5, borderColor: prediction === false ? GREEN : "#e5e7eb", borderRadius: 12, paddingVertical: 12, alignItems: "center" }}>
                <Text style={{ fontWeight: "800", color: prediction === false ? "#14532d" : theme.colors.textMuted }}>No, it stays the same</Text>
              </TouchableOpacity>
            </View>
          </Section>

          <Section title="5 · REACTIVITY CHECK">
            <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14 }}>
              {added && salt ? (
                <>
                  <Text style={{ fontSize: 12, color: "#6b7280" }}>{added.name} (strip) vs {salt.name}²⁺ (in solution)</Text>
                  {sameMetal ? (
                    <Text style={{ fontSize: 13, color: "#dc2626", marginTop: 8, fontWeight: "700" }}>Pick two different metals.</Text>
                  ) : (
                    <>
                      <Text style={{ fontSize: 13, color: occurs ? GREEN : "#64748b", marginTop: 8, fontWeight: "700" }}>
                        {occurs ? `✓ ${added.symbol} is MORE reactive → it displaces ${salt.symbol}.` : `✗ ${added.symbol} is LESS reactive → NO displacement.`}
                      </Text>
                      {eq ? (
                        <Text style={{ fontSize: 12, color: theme.colors.textMuted, marginTop: 6 }}>{eq.overall}</Text>
                      ) : (
                        <Text style={{ fontSize: 12, color: "#94a3b8", marginTop: 6 }}>Nothing changes — the strip stays as {added.symbol}.</Text>
                      )}
                      {predictionCorrect != null ? (
                        <Text style={{ fontSize: 12, color: predictionCorrect ? GREEN : "#dc2626", marginTop: 8, fontWeight: "700" }}>
                          {predictionCorrect ? "✓ Your prediction was correct!" : "✗ Your prediction was wrong — watch what actually happens."}
                        </Text>
                      ) : null}
                    </>
                  )}
                </>
              ) : (
                <Text style={{ fontSize: 12, color: "#94a3b8" }}>Pick the strip metal and the salt to check the reactivity.</Text>
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
