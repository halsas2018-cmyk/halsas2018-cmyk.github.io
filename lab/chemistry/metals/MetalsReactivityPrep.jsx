import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlipCard from "../../titration/FlipCard";
import { DISPLACEMENT_METALS, REACTIVITY_APPARATUS, willDisplace, displacementOutcome } from "./metals-data";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";

const GREEN = "#16a34a";

export default function MetalsReactivityPrep() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "metals";

  const [app, setApp] = useState([]);
  const [stripId, setStripId] = useState(null);
  const [saltId, setSaltId] = useState(null);

  const stripMetal = DISPLACEMENT_METALS.find((m) => m.id === stripId);
  const saltMetal = DISPLACEMENT_METALS.find((m) => m.id === saltId);
  const occurs = stripMetal && saltMetal ? willDisplace(stripMetal.id, saltMetal.id) : null;

  function toggleApp(id) {
    setApp((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function start() {
    const required = REACTIVITY_APPARATUS.filter((a) => a.needed).map((a) => a.id);
    const missing = required.filter((r) => !app.includes(r));
    if (missing.length) return Alert.alert("Missing apparatus", "Select all the required apparatus before you start.");
    if (!stripMetal) return Alert.alert("Pick a strip metal", "Choose the metal you will dip into the solution.");
    if (!saltMetal) return Alert.alert("Pick a salt", "Choose the metal whose salt solution you will use.");
    if (stripId === saltId) return Alert.alert("Same metal", "Pick two DIFFERENT metals so a displacement can happen.");

    const config = { stripMetal, saltMetal, willDisplace: occurs, apparatus: app };
    navigation.navigate("MetalsReactivityLab", { experiment, topicId, config });
  }

  const Chip = ({ item, selected, onPick, right }) => (
    <TouchableOpacity onPress={onPick} style={{ flexDirection: "row", alignItems: "center", backgroundColor: selected ? "#e7f6ec" : "#fff", borderWidth: 1.5, borderColor: selected ? GREEN : "#e5e7eb", borderRadius: 12, paddingVertical: 9, paddingHorizontal: 12, marginRight: 8, marginBottom: 8 }}>
      {item.symbol ? <View style={{ width: 14, height: 14, borderRadius: 4, backgroundColor: item.metalColor, marginRight: 7, borderWidth: 1, borderColor: "#e5e7eb" }} /> : null}
      <Text style={{ fontSize: 13, fontWeight: selected ? "800" : "600", color: selected ? "#14532d" : theme.colors.textMuted }}>{item.symbol} · {item.name}</Text>
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

          <FlipCard emoji="📊" title="What is the reactivity series?" front="A list of metals ranked from most to least reactive (K, Na, Ca, Mg, Al, C, Zn, Fe, Sn, Pb, (H), Cu, Hg, Ag, Pt, Au)." back="A MORE reactive metal will push a LESS reactive metal out of its compound. So if you dip metal A into a solution of metal B's salt, A displaces B only if A is higher in the series than B." />
          <FlipCard emoji="🪙" title="The displacement rule" front="A more reactive metal displaces a less reactive one from its salt solution." back="Example: zinc (Zn) is above copper (Cu), so a zinc strip in copper(II) sulphate solution dissolves and copper metal deposits (the blue solution fades). Iron in magnesium sulphate does nothing — Mg is above Fe." />
          <FlipCard emoji="🧪" title="The experiment" front="Dip a clean metal strip into the salt solution of another metal and watch for a colour / coating change." back="If displacement occurs, the dipped strip gets a coating of the other metal and the solution colour changes (e.g. blue Cu²⁺ fades as Zn²⁺ forms). If no change, the strip was less reactive than the metal in solution." />
          <FlipCard emoji="🔍" title="Your task" front="Pick two metals, predict if displacement happens, then test it." back="Next you will: (1) pick the apparatus, (2) choose the strip metal, (3) choose the salt solution metal, (4) read the prediction, then press Start and observe." />

          <Section title="1 · CHOOSE YOUR APPARATUS">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {REACTIVITY_APPARATUS.map((a) => (
                <Chip key={a.id} item={a} selected={app.includes(a.id)} onPick={() => toggleApp(a.id)} right={a.needed ? <Text style={{ fontSize: 9, color: GREEN, fontWeight: "800", marginLeft: 6 }}>REQ</Text> : null} />
              ))}
            </View>
          </Section>

          <Section title="2 · CHOOSE THE DIPPED STRIP METAL">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {DISPLACEMENT_METALS.map((m) => (
                <Chip key={m.id} item={m} selected={stripId === m.id} onPick={() => setStripId(m.id)} />
              ))}
            </View>
          </Section>

          <Section title="3 · CHOOSE THE SALT SOLUTION METAL">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {DISPLACEMENT_METALS.map((m) => (
                <Chip key={m.id} item={m} selected={saltId === m.id} onPick={() => setSaltId(m.id)} />
              ))}
            </View>
          </Section>

          <Section title="4 · DISPLACEMENT PREDICTION">
            <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14 }}>
              {stripMetal && saltMetal && stripId !== saltId ? (
                <>
                  <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>
                    Dip <Text style={{ fontWeight: "800" }}>{stripMetal.symbol}</Text> into <Text style={{ fontWeight: "800" }}>{saltMetal.symbol}</Text> solution:
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "baseline", marginTop: 8 }}>
                    <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>Prediction: </Text>
                    <Text style={{ fontSize: 18, fontWeight: "900", color: occurs ? "#dc2626" : "#64748b" }}>{occurs ? "DISPLACEMENT ✔" : "NO REACTION"}</Text>
                  </View>
                  <Text style={{ fontSize: 12, color: "#94a3b8", marginTop: 4 }}>{displacementOutcome(stripMetal, saltMetal)}</Text>
                </>
              ) : (
                <Text style={{ fontSize: 12, color: "#94a3b8" }}>Pick two different metals to see the prediction.</Text>
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
