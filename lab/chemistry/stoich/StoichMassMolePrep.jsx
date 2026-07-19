import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Alert, KeyboardAvoidingView, Platform, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlipCard from "../../titration/FlipCard";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import {
  REACTIONS,
  STOICH_APPARATUS,
  computeStoich,
} from "./stoich-data";

const GREEN = "#16a34a";

export default function StoichMassMolePrep() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "stoich";

  const [reactionId, setReactionId] = useState(REACTIONS[0].id);
  const reaction = REACTIONS.find((r) => r.id === reactionId) || REACTIONS[0];
  const [massA, setMassA] = useState("4");
  const [massB, setMassB] = useState("32");
  const [app, setApp] = useState([]);

  const [ra, rb] = reaction.reactants;
  const preview = computeStoich({ reaction, massA, massB });

  function toggleApp(id) {
    haptic.light();
    setApp((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function pickReaction(id) {
    haptic.light();
    setReactionId(id);
    // Sensible default masses so the preview is meaningful.
    const def = { water: ["4", "32"], neutral: ["36.5", "40"], ammonia: ["28", "6"] }[id] || ["10", "10"];
    setMassA(def[0]);
    setMassB(def[1]);
  }

  function start() {
    const required = STOICH_APPARATUS.filter((a) => a.needed).map((a) => a.id);
    const missing = required.filter((r) => !app.includes(r));
    if (missing.length) return Alert.alert("Missing apparatus", "Select all the required apparatus before you start.");
    const a = parseFloat(massA), b = parseFloat(massB);
    if (!Number.isFinite(a) || a <= 0 || !Number.isFinite(b) || b <= 0)
      return Alert.alert("Enter masses", "Enter a positive mass (g) for both reactants.");
    navigation.navigate("StoichMassMoleLab", {
      experiment,
      topicId,
      config: { reaction, massA: String(a), massB: String(b), bunsen: app.includes("bunsen"), thermometer: app.includes("thermometer") },
    });
  }

  const Chip = ({ item, selected, onPick, right }) => (
    <TouchableOpacity onPress={onPick} style={{ flexDirection: "row", alignItems: "center", backgroundColor: selected ? "#e7f6ec" : theme.colors.surface, borderWidth: 1.5, borderColor: selected ? GREEN : theme.colors.border, borderRadius: 12, paddingVertical: 9, paddingHorizontal: 12, marginRight: 8, marginBottom: 8 }}>
      {item.icon ? <Text style={{ fontSize: 15, marginRight: 6 }}>{item.icon}</Text> : null}
      <Text style={{ fontSize: 13, fontWeight: selected ? "800" : "600", color: selected ? "#14532d" : theme.colors.textMuted }}>{item.name || item.label}</Text>
      {right}
    </TouchableOpacity>
  );

  const Section = ({ title, children }) => (
    <View style={{ marginBottom: 18 }}>
      <Text style={{ fontSize: 12, fontWeight: "800", color: theme.colors.textMuted, marginBottom: 10, letterSpacing: 0.5 }}>{title}</Text>
      {children}
    </View>
  );

  const MassField = ({ value, onSet, label, color }) => (
    <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
      <View style={{ width: 14, height: 14, borderRadius: 7, backgroundColor: color, marginRight: 8 }} />
      <Text style={{ fontSize: 13, fontWeight: "700", color: theme.colors.text, width: 130 }}>{label}</Text>
      <TextInput
        style={{ flex: 1, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 10, paddingVertical: 8, paddingHorizontal: 12, fontSize: 15, fontWeight: "700", color: theme.colors.text, textAlign: "right" }}
        keyboardType="decimal-pad"
        value={value}
        onChangeText={onSet}
        placeholder="g"
      />
      <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginLeft: 6, fontWeight: "700" }}>g</Text>
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

          <FlipCard emoji="⚖️" title="What is stoichiometry?" front="Stoichiometry uses a balanced equation to work out how much product forms from given masses of reactants." back="The key steps: (1) convert each reactant mass to moles using moles = mass ÷ Mr, (2) use the equation's coefficients to find which reactant runs out first (the limiting reagent), then (3) calculate the theoretical mass of product." />
          <FlipCard emoji="🔢" title="Moles from mass" front="moles = mass (g) ÷ Mr. Every substance has its own relative molecular mass, Mr." back="For example H₂ has Mr = 2 (two H atoms), O₂ has Mr = 32, H₂O has Mr = 18. Dividing the mass you weigh out by Mr tells you how many moles you actually have." />
          <FlipCard emoji="🚦" title="Limiting reagent" front="The reactant that produces the LEAST product limits the reaction — it is used up first." back="Compare moles ÷ coefficient for each reactant. The smallest value is the limiting reagent. The other reactant is in excess and some is left over." />
          <FlipCard emoji="🎯" title="Your task" front="Pick a reaction, enter the masses of the two reactants, then run it and read the limiting reagent and product mass." back="Next you will: (1) choose a balanced reaction, (2) type in the reactant masses, (3) press React, watch the reactants be consumed and product form, then (4) read the report." />

          <Section title="1 · CHOOSE THE REACTION">
            {REACTIONS.map((r) => (
              <TouchableOpacity key={r.id} onPress={() => pickReaction(r.id)} activeOpacity={0.9} style={{ backgroundColor: reactionId === r.id ? "#e7f6ec" : theme.colors.surface, borderWidth: 1.5, borderColor: reactionId === r.id ? GREEN : theme.colors.border, borderRadius: 12, padding: 12, marginBottom: 8 }}>
                <Text style={{ fontSize: 14, fontWeight: "800", color: reactionId === r.id ? "#14532d" : theme.colors.text }}>{r.balanced}</Text>
                <Text style={{ fontSize: 12, color: theme.colors.textMuted, marginTop: 2 }}>{r.title}</Text>
              </TouchableOpacity>
            ))}
          </Section>

          <Section title="2 · ENTER REACTANT MASSES (g)">
            <Text style={{ fontSize: 12, fontWeight: "700", color: theme.colors.textMuted, marginBottom: 8 }}>Type the mass you weighed out for each reactant.</Text>
            <MassField value={massA} onSet={setMassA} label={`${ra.name} (${ra.formula})`} color={ra.color} />
            <MassField value={massB} onSet={setMassB} label={`${rb.name} (${rb.formula})`} color={rb.color} />
            <Text style={{ fontSize: 11, color: theme.colors.textMuted, marginTop: 2 }}>Mr of {ra.formula} = {ra.Mr} · Mr of {rb.formula} = {rb.Mr}</Text>
          </Section>

          <Section title="3 · CHOOSE YOUR APPARATUS">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {STOICH_APPARATUS.map((a) => (
                <Chip key={a.id} item={a} selected={app.includes(a.id)} onPick={() => toggleApp(a.id)} right={a.needed ? <Text style={{ fontSize: 9, color: GREEN, fontWeight: "800", marginLeft: 6 }}>REQ</Text> : null} />
              ))}
            </View>
          </Section>

          <Section title="4 · PREDICTED RESULT">
            <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14 }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 12, color: theme.colors.textMuted }}>Limiting reagent</Text>
                <Text style={{ fontSize: 14, fontWeight: "800", color: GREEN }}>{preview.limitingName}</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 6 }}>
                <Text style={{ fontSize: 12, color: theme.colors.textMuted }}>Theoretical product</Text>
                <Text style={{ fontSize: 14, fontWeight: "800", color: theme.colors.text }}>{preview.productMass.toFixed(2)} g</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 6 }}>
                <Text style={{ fontSize: 12, color: theme.colors.textMuted }}>moles {ra.formula} / {rb.formula}</Text>
                <Text style={{ fontSize: 13, fontWeight: "700", color: theme.colors.text }}>{preview.molesA.toFixed(3)} / {preview.molesB.toFixed(3)}</Text>
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
