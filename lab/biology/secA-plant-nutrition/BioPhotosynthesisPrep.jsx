import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlipCard from "../../titration/FlipCard";
import { PHOTOSYNTHESIS_APPARATUS, LIGHT_LEVELS } from "./plant-nutrition-data";

const GREEN = "#16a34a";

export default function BioPhotosynthesisPrep() {
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const theme = useTheme();
  const topicId = route.params?.topicId || "secA-plant-nutrition";

  const [app, setApp] = useState([]);
  const [lightId, setLightId] = useState(null);

  const light = LIGHT_LEVELS.find((l) => l.id === lightId);

  function toggleApp(id) {
    setApp((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function start() {
    const required = PHOTOSYNTHESIS_APPARATUS.filter((a) => a.needed).map((a) => a.id);
    const missing = required.filter((r) => !app.includes(r));
    if (missing.length) return Alert.alert("Missing apparatus", "Select all the required apparatus before you start.");
    if (!light) return Alert.alert("Pick a light level", "Choose how close the lamp will be.");

    const config = { light };
    navigation.navigate("BioPhotosynthesisLab", { experiment, topicId, config });
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

          <FlipCard emoji="🌿" title="What is photosynthesis?" front="Plants use light to turn CO₂ and water into glucose and oxygen." back="In the presence of chlorophyll and light: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂. The oxygen is given off as a gas — we count the bubbles from pondweed to measure the rate." />
          <FlipCard emoji="💡" title="Light & rate" front="More light → faster photosynthesis, up to a point." back="Light provides the energy. As light intensity rises, the rate rises too — but it PLATEAUS once another factor (CO₂ or temperature) becomes limiting. Extra light then makes no difference." />
          <FlipCard emoji="🧪" title="The setup" front="Pondweed under an inverted test tube in water, lit by a lamp at a set distance." back="O₂ bubbles collect in the inverted tube. Move the lamp closer for higher light intensity. Count bubbles per minute to find the relative rate." />
          <FlipCard emoji="🎯" title="Your task" front="Set up the practical, then measure the bubble rate at your chosen light level." back="Next you will: (1) pick the apparatus, (2) choose the lamp distance (light intensity), then press Start to watch bubbles form and compute the relative rate." />

          <Section title="1 · CHOOSE YOUR APPARATUS">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {PHOTOSYNTHESIS_APPARATUS.map((a) => (
                <Chip key={a.id} item={a} selected={app.includes(a.id)} onPick={() => toggleApp(a.id)} right={a.needed ? <Text style={{ fontSize: 9, color: GREEN, fontWeight: "800", marginLeft: 6 }}>REQ</Text> : null} />
              ))}
            </View>
          </Section>

          <Section title="2 · CHOOSE THE LIGHT INTENSITY (LAMP DISTANCE)">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {LIGHT_LEVELS.map((l) => (
                <Chip key={l.id} item={l} selected={lightId === l.id} onPick={() => setLightId(l.id)} right={<View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: l.color, marginLeft: 7, borderWidth: 1, borderColor: theme.colors.border }} />} />
              ))}
            </View>
            {light ? (
              <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14, marginTop: 8 }}>
                <Text style={{ fontSize: 13, color: theme.colors.text }}>Expected relative rate: <Text style={{ fontWeight: "800", color: GREEN }}>{light.bubblesPerMin} bubbles / min</Text></Text>
                <Text style={{ fontSize: 12, color: theme.colors.textMuted, marginTop: 4 }}>{light.id === "veryhigh" || light.id === "high" ? "Near the plateau — little gain from more light." : "Below the plateau — more light speeds it up."}</Text>
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
