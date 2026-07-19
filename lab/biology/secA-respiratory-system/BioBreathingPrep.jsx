import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlipCard from "../../titration/FlipCard";
import { BREATHING_APPARATUS, BREATHING_RATES } from "./respiratory-data";

const GREEN = "#16a34a";

export default function BioBreathingPrep() {
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const theme = useTheme();
  const topicId = route.params?.topicId || "secA-respiratory-system";

  const [app, setApp] = useState([]);
  const [rateId, setRateId] = useState(null);

  const rate = BREATHING_RATES.find((r) => r.id === rateId);

  function toggleApp(id) {
    setApp((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function start() {
    const required = BREATHING_APPARATUS.filter((a) => a.needed).map((a) => a.id);
    const missing = required.filter((r) => !app.includes(r));
    if (missing.length) return Alert.alert("Missing apparatus", "Select all the required apparatus before you start.");
    if (!rate) return Alert.alert("Pick a condition", "Choose whether the person is at rest or just exercised.");

    const config = { rate };
    navigation.navigate("BioBreathingLab", { experiment, topicId, config });
  }

  const Chip = ({ item, selected, onPick, right }) => (
    <TouchableOpacity onPress={onPick} style={{ flexDirection: "row", alignItems: "center", backgroundColor: selected ? theme.colors.primarySoft : theme.colors.surface, borderWidth: 1.5, borderColor: selected ? GREEN : theme.colors.border, borderRadius: 12, paddingVertical: 9, paddingHorizontal: 12, marginRight: 8, marginBottom: 8 }}>
      {item.icon ? <Text style={{ fontSize: 15, marginRight: 6 }}>{item.icon}</Text> : null}
      <Text style={{ fontSize: 13, fontWeight: selected ? "800" : "600", color: selected ? "#14532d" : theme.colors.text }}>{item.name}</Text>
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
          <Text style={{ fontSize: 16, color: GREEN, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }}>Pre-lab Briefing</Text>
      </View>

      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={0}>
        <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 24 }} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
          <Text style={{ fontSize: 13, fontWeight: "700", color: GREEN, marginBottom: 4 }}>📚 Tap each card to flip it</Text>

          <FlipCard emoji="🫁" title="The breathing model" front="A bell jar + rubber-sheet diaphragm models the human thorax." back="Pulling the sheet DOWN (inhale) enlarges the jar's volume, so 'lungs' expand and air is drawn IN. Pushing it UP (exhale) squeezes the lungs, pushing air OUT." />
          <FlipCard emoji="🧪" title="Limewater & CO₂" front="Exhaled air turns limewater cloudy; inhaled air does not." back="Carbon dioxide makes limewater (calcium hydroxide) go milky by forming calcium carbonate. Exhaled air carries more CO₂ from respiration, so its limewater clouds over while fresh inhaled air stays clear." />
          <FlipCard emoji="🎯" title="Your task" front="Run the breathing model, then explain the CO₂ test and the diaphragm." back="Next you will: (1) pick the apparatus, (2) choose rest vs after-exercise, then press Start to watch the diaphragm/lungs move and the exhaled limewater cloud over." />

          <Section title="1 · CHOOSE YOUR APPARATUS">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {BREATHING_APPARATUS.map((a) => (
                <Chip key={a.id} item={a} selected={app.includes(a.id)} onPick={() => toggleApp(a.id)} right={a.needed ? <Text style={{ fontSize: 9, color: GREEN, fontWeight: "800", marginLeft: 6 }}>REQ</Text> : null} />
              ))}
            </View>
          </Section>

          <Section title="2 · CHOOSE THE CONDITION">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {BREATHING_RATES.map((r) => (
                <Chip key={r.id} item={r} selected={rateId === r.id} onPick={() => setRateId(r.id)} right={<View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: r.color, marginLeft: 7, borderWidth: 1, borderColor: theme.colors.border }} />} />
              ))}
            </View>
            {rate ? (
              <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14, marginTop: 8 }}>
                <Text style={{ fontSize: 13, color: theme.colors.text }}>You will demonstrate <Text style={{ fontWeight: "800", color: GREEN }}>{rate.cycles} breaths</Text>.</Text>
                <Text style={{ fontSize: 12, color: theme.colors.textMuted, marginTop: 4 }}>{rate.id === "exercise" ? "Deeper, faster breaths — the limewater clouds over more quickly." : "Quiet breaths — watch the slow diaphragm rhythm."}</Text>
              </View>
            ) : null}
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
