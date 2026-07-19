import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlipCard from "../../titration/FlipCard";
import { OSMOSIS_APPARATUS, OSMOSIS_SOLUTES } from "./cell-environment-data";

const GREEN = "#16a34a";

export default function BioOsmosisPrep() {
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const theme = useTheme();
  const topicId = route.params?.topicId || "secA-cell-environment";

  const [app, setApp] = useState([]);
  const [soluteId, setSoluteId] = useState(null);

  const solute = OSMOSIS_SOLUTES.find((s) => s.id === soluteId);

  function toggleApp(id) {
    setApp((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function start() {
    const required = OSMOSIS_APPARATUS.filter((a) => a.needed).map((a) => a.id);
    const missing = required.filter((r) => !app.includes(r));
    if (missing.length) return Alert.alert("Missing apparatus", "Select all the required apparatus before you start.");
    if (!solute) return Alert.alert("Pick a solute", "Choose the concentrated solution for the demonstration.");

    const config = { solute };
    navigation.navigate("BioOsmosisLab", { experiment, topicId, config });
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

          <FlipCard emoji="💧" title="What is osmosis?" front="Osmosis is the net movement of water across a semi-permeable membrane." back="Water moves from a region of lower solute concentration (dilute) to a region of higher solute concentration (concentrated). Only water passes — the solute particles are too big to cross the membrane." />
          <FlipCard emoji="🧫" title="The membrane" front="A semi-permeable membrane lets water through but not large solute molecules." back="Visking (dialysis) tubing is a model membrane. Small water molecules slip through its pores; large sugar or salt ions cannot, so they stay on their own side." />
          <FlipCard emoji="⚖️" title="Which way?" front="Water moves INTO the side with the higher solute concentration." back="The concentrated solution has fewer free water molecules per volume, so water diffuses down its own gradient — into the concentrated side. That side gains volume and its level rises." />
          <FlipCard emoji="🎯" title="Your task" front="Set up the osmosis demo, then identify the net direction of water movement." back="Next you will: (1) pick the apparatus, (2) choose the concentrated solution, then press Start to watch water cross the membrane and identify the net movement direction." />

          <Section title="1 · CHOOSE YOUR APPARATUS">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {OSMOSIS_APPARATUS.map((a) => (
                <Chip key={a.id} item={a} selected={app.includes(a.id)} onPick={() => toggleApp(a.id)} right={a.needed ? <Text style={{ fontSize: 9, color: GREEN, fontWeight: "800", marginLeft: 6 }}>REQ</Text> : null} />
              ))}
            </View>
          </Section>

          <Section title="2 · CHOOSE THE CONCENTRATED SOLUTION">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {OSMOSIS_SOLUTES.map((s) => (
                <Chip key={s.id} item={s} selected={soluteId === s.id} onPick={() => setSoluteId(s.id)} right={soluteId === s.id ? <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: s.color, marginLeft: 7, borderWidth: 1, borderColor: theme.colors.border }} /> : null} />
              ))}
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
