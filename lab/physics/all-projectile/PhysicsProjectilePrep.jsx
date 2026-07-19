import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlipCard from "../../titration/FlipCard";
import { PROJECTILE_APPARATUS, projectileMetrics } from "./projectile-data";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";

const ACCENT = "#7c3aed";

export default function PhysicsProjectilePrep() {
  const navigation = useNavigation();
  const route = useRoute();
  const theme = useTheme();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "all-projectile";

  const [app, setApp] = useState([]);
  const [v, setV] = useState(22); // m/s
  const [theta, setTheta] = useState(45); // degrees

  const metric = projectileMetrics(v, theta);

  function toggleApp(id) {
    setApp((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function start() {
    haptic.light();
    const required = PROJECTILE_APPARATUS.filter((a) => a.needed).map((a) => a.id);
    const missing = required.filter((r) => !app.includes(r));
    if (missing.length) return Alert.alert("Missing apparatus", "Select all the required apparatus before you start.");

    const config = { v, theta, apparatus: app };
    navigation.navigate("PhysicsProjectileLab", { experiment, topicId, config });
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

          <FlipCard emoji="🎯" title="What is projectile motion?" front="A projectile is any object thrown/launched, moving under gravity alone after launch (ignoring air resistance)." back="Its horizontal motion has constant velocity, while its vertical motion accelerates at g = 9.8 m/s² downward. The two combine to give a parabolic path." accent={ACCENT} />
          <FlipCard emoji="📐" title="Key equations" front="Range R = v² sin(2θ) / g · Max height H = v² sin²θ / (2g)." back="Time of flight T = 2v sinθ / g. Use g = 9.8 m/s². The 45° launch gives the maximum range for a fixed speed." accent={ACCENT} />
          <FlipCard emoji="🚀" title="Your task" front="Set the launch speed and angle, then aim for the target band on the range." back="Next you will: (1) pick apparatus, (2) choose speed & angle (the calculator previews your range), then press Start to fire the projectile and measure where it lands." accent={ACCENT} />

          <Section title="1 · CHOOSE YOUR APPARATUS">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {PROJECTILE_APPARATUS.map((a) => (
                <Chip key={a.id} item={a} selected={app.includes(a.id)} onPick={() => toggleApp(a.id)} right={a.needed ? <Text style={{ fontSize: 9, color: ACCENT, fontWeight: "800", marginLeft: 6 }}>REQ</Text> : null} />
              ))}
            </View>
          </Section>

          <Section title="2 · LAUNCH SPEED (m/s)">
            <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14 }}>
              <Text style={{ fontSize: 22, fontWeight: "900", color: ACCENT }}>{v} m/s</Text>
              <View style={{ flexDirection: "row", marginTop: 8 }}>
                {[10, 18, 22, 30, 40].map((val) => (
                  <TouchableOpacity key={val} onPress={() => setV(val)} style={{ flex: 1, marginHorizontal: 3, backgroundColor: v === val ? ACCENT : theme.colors.surfaceMuted, borderRadius: 10, paddingVertical: 9 }}>
                    <Text style={{ textAlign: "center", fontSize: 13, fontWeight: "800", color: v === val ? "#fff" : theme.colors.textMuted }}>{val}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </Section>

          <Section title="3 · LAUNCH ANGLE (°)">
            <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14 }}>
              <Text style={{ fontSize: 22, fontWeight: "900", color: ACCENT }}>{theta}°</Text>
              <View style={{ flexDirection: "row", marginTop: 8 }}>
                {[20, 35, 45, 60, 75].map((val) => (
                  <TouchableOpacity key={val} onPress={() => setTheta(val)} style={{ flex: 1, marginHorizontal: 3, backgroundColor: theta === val ? ACCENT : theme.colors.surfaceMuted, borderRadius: 10, paddingVertical: 9 }}>
                    <Text style={{ textAlign: "center", fontSize: 13, fontWeight: "800", color: theta === val ? "#fff" : theme.colors.textMuted }}>{val}°</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </Section>

          <Section title="4 · RANGE CALCULATOR (g = 9.8 m/s²)">
            <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14 }}>
              <Text style={{ fontSize: 13, color: theme.colors.text }}>Predicted range: <Text style={{ fontWeight: "900", color: ACCENT, fontSize: 16 }}>{metric.range.toFixed(1)} m</Text></Text>
              <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 6 }}>Max height: <Text style={{ fontWeight: "800" }}>{metric.maxHeight.toFixed(1)} m</Text></Text>
              <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 6 }}>Time of flight: <Text style={{ fontWeight: "800" }}>{metric.timeOfFlight.toFixed(2)} s</Text></Text>
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
