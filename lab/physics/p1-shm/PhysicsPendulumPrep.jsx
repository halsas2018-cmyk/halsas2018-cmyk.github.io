import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlipCard from "../../titration/FlipCard";
import { PENDULUM_APPARATUS, pendulumPeriod, pendulumFrequency, PENDULUM_AMPLITUDES } from "./pendulum-data";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";

const ACCENT = "#7c3aed";

export default function PhysicsPendulumPrep() {
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "p1-shm";
  const theme = useTheme();

  const [app, setApp] = useState([]);
  const [L, setL] = useState(0.8); // m
  const [ampId, setAmpId] = useState("small");
  const amp = PENDULUM_AMPLITUDES.find((a) => a.id === ampId) || PENDULUM_AMPLITUDES[0];

  const T = pendulumPeriod(L);
  const f = pendulumFrequency(L);

  function toggleApp(id) {
    setApp((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function start() {
    haptic.light();
    const required = PENDULUM_APPARATUS.filter((a) => a.needed).map((a) => a.id);
    const missing = required.filter((r) => !app.includes(r));
    if (missing.length) return Alert.alert("Missing apparatus", "Select all the required apparatus before you start.");

    const config = { L, ampDeg: amp.deg, apparatus: app };
    navigation.navigate("PhysicsPendulumLab", { experiment, topicId, config });
  }

  const Chip = ({ item, selected, onPick, right }) => (
    <TouchableOpacity onPress={onPick} style={{ flexDirection: "row", alignItems: "center", backgroundColor: selected ? "#f3e8ff" : theme.colors.surface, borderWidth: 1.5, borderColor: selected ? ACCENT : theme.colors.border, borderRadius: 12, paddingVertical: 9, paddingHorizontal: 12, marginRight: 8, marginBottom: 8 }}>
      {item.icon ? <Text style={{ fontSize: 15, marginRight: 6 }}>{item.icon}</Text> : null}
      <Text style={{ fontSize: 13, fontWeight: selected ? "800" : "600", color: selected ? "#581c87" : theme.colors.text }}>{item.name}</Text>
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
          <Text style={{ fontSize: 16, color: ACCENT, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }}>Pre-lab Briefing</Text>
      </View>

      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={0}>
        <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 24 }} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
          <Text style={{ fontSize: 13, fontWeight: "700", color: ACCENT, marginBottom: 4 }}>📚 Tap each card to flip it</Text>

          <FlipCard emoji="🕰️" title="What is S.H.M.?" front="Simple Harmonic Motion is to-and-fro motion where acceleration ∝ displacement and points back to the centre." back="A pendulum approximates S.H.M. for small angles. Its period depends only on length and g — NOT on the mass or amplitude (for small swings)." accent={ACCENT} />
          <FlipCard emoji="📐" title="Key equation" front="Period T = 2π √(L / g)." back="Frequency f = 1 / T. Doubling the length multiplies the period by √2 ≈ 1.41. The bob's mass does NOT change the period." accent={ACCENT} />
          <FlipCard emoji="🎯" title="Your task" front="Set the string length & amplitude, then time the swings to find T." back="Next you will: (1) pick apparatus, (2) choose length & amplitude (the calculator previews T), then press Start to release the bob and measure its period with the stopwatch." accent={ACCENT} />

          <Section title="1 · CHOOSE YOUR APPARATUS">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {PENDULUM_APPARATUS.map((a) => (
                <Chip key={a.id} item={a} selected={app.includes(a.id)} onPick={() => toggleApp(a.id)} right={a.needed ? <Text style={{ fontSize: 9, color: ACCENT, fontWeight: "800", marginLeft: 6 }}>REQ</Text> : null} />
              ))}
            </View>
          </Section>

          <Section title="2 · STRING LENGTH (m)">
            <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14 }}>
              <Text style={{ fontSize: 22, fontWeight: "900", color: ACCENT }}>{L.toFixed(2)} m</Text>
              <View style={{ flexDirection: "row", marginTop: 8, flexWrap: "wrap" }}>
                {[0.3, 0.5, 0.8, 1.0, 1.2, 2.0].map((val) => (
                  <TouchableOpacity key={val} onPress={() => setL(val)} style={{ width: "30%", margin: "1.5%", backgroundColor: L === val ? ACCENT : theme.colors.surfaceMuted, borderRadius: 10, paddingVertical: 9 }}>
                    <Text style={{ textAlign: "center", fontSize: 13, fontWeight: "800", color: L === val ? "#fff" : theme.colors.textMuted }}>{val}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </Section>

          <Section title="3 · AMPLITUDE">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {PENDULUM_AMPLITUDES.map((a) => (
                <Chip key={a.id} item={a} selected={ampId === a.id} onPick={() => setAmpId(a.id)} />
              ))}
            </View>
          </Section>

          <Section title="4 · PERIOD CALCULATOR (g = 9.8 m/s²)">
            <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14 }}>
              <Text style={{ fontSize: 13, color: theme.colors.text }}>Predicted period: <Text style={{ fontWeight: "900", color: ACCENT, fontSize: 16 }}>{T.toFixed(3)} s</Text></Text>
              <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 6 }}>Frequency: <Text style={{ fontWeight: "800" }}>{f.toFixed(3)} Hz</Text></Text>
              <Text style={{ fontSize: 12, color: theme.colors.textMuted, marginTop: 6 }}>Independent of bob mass & (for small angles) amplitude.</Text>
            </View>
          </Section>
        </ScrollView>

        <View style={{ backgroundColor: theme.colors.surface, borderTopWidth: 1, borderTopColor: theme.colors.border, padding: 16 }}>
          <TouchableOpacity onPress={start} style={{ backgroundColor: ACCENT, borderRadius: 12, paddingVertical: 15 }}>
            <Text style={{ color: "#fff", textAlign: "center", fontWeight: "800", fontSize: 16 }}>▶ Start Experiment</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
