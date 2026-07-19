import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlipCard from "../../titration/FlipCard";
import { RUST_CONDITIONS, RUST_APPARATUS, rustOutcome } from "./metals-data";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";

const GREEN = "#16a34a";

export default function MetalsRustingPrep() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "metals";

  const [app, setApp] = useState([]);
  const [condId, setCondId] = useState(null);

  const condition = RUST_CONDITIONS.find((c) => c.id === condId);

  function toggleApp(id) {
    setApp((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function start() {
    const required = RUST_APPARATUS.filter((a) => a.needed).map((a) => a.id);
    const missing = required.filter((r) => !app.includes(r));
    if (missing.length) return Alert.alert("Missing apparatus", "Select all the required apparatus before you start.");
    if (!condition) return Alert.alert("Pick a condition", "Choose the condition the nail is kept in.");

    const config = { condition, willRust: condition.willRust, apparatus: app };
    navigation.navigate("MetalsRustingLab", { experiment, topicId, config });
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

          <FlipCard emoji="🟠" title="What is rusting?" front="Rusting is the corrosion of iron — it slowly turns into a flaky orange-brown solid." back="Rust is hydrated iron(III) oxide, Fe₂O₃·xH₂O. It forms ONLY when iron meets BOTH oxygen (from the air) AND water. Remove either one and rusting stops. 4Fe + 3O₂ + xH₂O → 2Fe₂O₃·xH₂O." />
          <FlipCard emoji="🧰" title="Apparatus" front="Test tube, iron nail, cork / seal, test-tube rack, safety goggles." back="• Test tube — holds the nail in the chosen condition. • Cork — seals the tube to keep air in/out as needed. • Rack — holds the tube upright." />
          <FlipCard emoji="🛡️" title="Prevention" front="Stop rust by keeping out water OR air — or by sacrificial protection." back="Paint / grease / oil and galvanising (zinc coating) block both water and air. Drying agents remove water; boiling water + oil removes dissolved air. Zinc is more reactive than iron, so it corrodes first (sacrificial protection)." />
          <FlipCard emoji="🎯" title="Your task" front="Choose your apparatus & a condition, then predict if it rusts." back="Next you will: (1) pick the apparatus, (2) choose the condition (air+water, dry, oil-sealed, painted, galvanised…), (3) read the prediction, then press Start to run the test." />

          <Section title="1 · CHOOSE YOUR APPARATUS">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {RUST_APPARATUS.map((a) => (
                <Chip key={a.id} item={a} selected={app.includes(a.id)} onPick={() => toggleApp(a.id)} right={a.needed ? <Text style={{ fontSize: 9, color: GREEN, fontWeight: "800", marginLeft: 6 }}>REQ</Text> : null} />
              ))}
            </View>
          </Section>

          <Section title="2 · CHOOSE THE CONDITION">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {RUST_CONDITIONS.map((c) => (
                <Chip key={c.id} item={c} selected={condId === c.id} onPick={() => setCondId(c.id)} right={c.willRust ? <Text style={{ fontSize: 9, color: "#dc2626", fontWeight: "800", marginLeft: 6 }}>RUST</Text> : <Text style={{ fontSize: 9, color: GREEN, fontWeight: "800", marginLeft: 6 }}>SAFE</Text>} />
              ))}
            </View>
            {condition ? <Text style={{ fontSize: 12, color: "#94a3b8", marginTop: 6 }}>{condition.note}</Text> : null}
          </Section>

          <Section title="3 · RUST PREDICTION CALCULATOR">
            <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14 }}>
              {condition ? (
                <>
                  <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                    <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>Prediction: </Text>
                    <Text style={{ fontSize: 18, fontWeight: "900", color: condition.willRust ? "#dc2626" : "#16a34a" }}>{condition.willRust ? "RUSTS ✔" : "NO RUST"}</Text>
                  </View>
                  <Text style={{ fontSize: 12, color: "#94a3b8", marginTop: 4 }}>{rustOutcome(condition)}</Text>
                </>
              ) : (
                <Text style={{ fontSize: 12, color: "#94a3b8" }}>Pick a condition to see the prediction.</Text>
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
