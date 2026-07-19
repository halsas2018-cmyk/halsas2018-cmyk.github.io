import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlipCard from "../../titration/FlipCard";
import { POTOMETER_APPARATUS, ENV_CONDITIONS } from "./transport-data";

const GREEN = "#16a34a";

export default function BioTransportTranspirationPrep() {
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const theme = useTheme();
  const topicId = route.params?.topicId || "secA-transport";

  const [app, setApp] = useState([]);
  const [conditionId, setConditionId] = useState(null);

  const condition = ENV_CONDITIONS.find((c) => c.id === conditionId);

  function toggleApp(id) {
    haptic.light();
    setApp((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function start() {
    const required = POTOMETER_APPARATUS.filter((a) => a.needed).map((a) => a.id);
    const missing = required.filter((r) => !app.includes(r));
    if (missing.length) return Alert.alert("Missing apparatus", "Select all the required apparatus before you start.");
    if (!condition) return Alert.alert("Pick a condition", "Choose the environmental condition to test.");

    const config = { condition };
    navigation.navigate("BioTransportTranspirationLab", { experiment, topicId, config });
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

          <FlipCard emoji="🌿" title="What is transpiration?" front="Transpiration is the loss of water vapour from a plant, mainly through leaf stomata." back="Water evaporates from leaf surfaces and is pulled up from the roots. A potometer measures the water a shoot TAKES UP — a close proxy for the water it LOSES by transpiration." />
          <FlipCard emoji="🧪" title="The potometer" front="An air bubble in a capillary tube shows how fast water moves through the shoot." back="The shoot draws water from a reservoir, pulling the bubble along the tube. The faster the bubble moves, the higher the transpiration (water uptake) rate." />
          <FlipCard emoji="🌬️" title="What changes the rate?" front="Light, wind, humidity and temperature all affect transpiration." back="Bright light + wind open stomata and remove humid air → fastest. Dark + high humidity close stomata / reduce the gradient → slowest. You will compare four conditions." />
          <FlipCard emoji="🎯" title="Your task" front="Set up the potometer, pick a condition, then measure the bubble's rate." back="Next you will: (1) pick the apparatus, (2) choose an environmental condition, then press Start to watch the bubble move and read off the transpiration rate." />

          <Section title="1 · CHOOSE YOUR APPARATUS">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {POTOMETER_APPARATUS.map((a) => (
                <Chip key={a.id} item={a} selected={app.includes(a.id)} onPick={() => toggleApp(a.id)} right={a.needed ? <Text style={{ fontSize: 9, color: GREEN, fontWeight: "800", marginLeft: 6 }}>REQ</Text> : null} />
              ))}
            </View>
          </Section>

          <Section title="2 · CHOOSE THE ENVIRONMENTAL CONDITION">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {ENV_CONDITIONS.map((c) => (
                <Chip key={c.id} item={c} selected={conditionId === c.id} onPick={() => { haptic.light(); setConditionId(c.id); }} right={conditionId === c.id ? <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: c.color, marginLeft: 7, borderWidth: 1, borderColor: theme.colors.border }} /> : null} />
              ))}
            </View>
            {condition ? (
              <Text style={{ fontSize: 12, color: theme.colors.text, marginTop: 8, lineHeight: 18 }}>{condition.note}</Text>
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
