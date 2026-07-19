import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlipCard from "../../titration/FlipCard";
import { REFRACTION_APPARATUS, MEDIA, mediaById, refract } from "./refraction-data";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";

const ACCENT = "#7c3aed";

export default function PhysicsRefractionPrep() {
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "p3-light-waves";
  const theme = useTheme();

  const [app, setApp] = useState([]);
  const [m1, setM1] = useState("air");
  const [m2, setM2] = useState("glass");
  const [theta1, setTheta1] = useState(30);

  const upper = mediaById(m1);
  const lower = mediaById(m2);
  const result = refract(upper.n, lower.n, theta1);

  function toggleApp(id) {
    setApp((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function start() {
    haptic.light();
    const required = REFRACTION_APPARATUS.filter((a) => a.needed).map((a) => a.id);
    const missing = required.filter((r) => !app.includes(r));
    if (missing.length) return Alert.alert("Missing apparatus", "Select all the required apparatus before you start.");

    const config = { m1, m2, theta1, apparatus: app };
    navigation.navigate("PhysicsRefractionLab", { experiment, topicId, config });
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

  const MediaChip = ({ m }) => (
    <Chip item={m} selected={m1 === m.id} onPick={() => setM1(m.id)} right={<Text style={{ fontSize: 11, color: ACCENT, fontWeight: "800", marginLeft: 6 }}>n={m.n}</Text>} />
  );
  const MediaChip2 = ({ m }) => (
    <Chip item={m} selected={m2 === m.id} onPick={() => setM2(m.id)} right={<Text style={{ fontSize: 11, color: ACCENT, fontWeight: "800", marginLeft: 6 }}>n={m.n}</Text>} />
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

          <FlipCard emoji="🔦" title="What is refraction?" front="Light bends when it passes from one medium into another because its speed changes." back="Snell's law: n₁ sin θ₁ = n₂ sin θ₂. Going into a denser medium (bigger n) the ray bends TOWARD the normal; into a rarer medium it bends AWAY." accent={ACCENT} />
          <FlipCard emoji="🪞" title="Total internal reflection" front="From dense → rarer, if θ₁ is large enough the ray reflects completely instead of refracting." back="This happens past the critical angle θc = arcsin(n₂ / n₁). Used in fibre optics. Going rarer → dense never gives TIR." accent={ACCENT} />
          <FlipCard emoji="🎯" title="Your task" front="Pick the two media & the incident angle, then measure θ₂." back="Next you will: (1) pick apparatus, (2) choose media & angle (the calculator previews θ₂), then press Start to shine the ray and read the refracted angle." accent={ACCENT} />

          <Section title="1 · CHOOSE YOUR APPARATUS">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {REFRACTION_APPARATUS.map((a) => (
                <Chip key={a.id} item={a} selected={app.includes(a.id)} onPick={() => toggleApp(a.id)} right={a.needed ? <Text style={{ fontSize: 9, color: ACCENT, fontWeight: "800", marginLeft: 6 }}>REQ</Text> : null} />
              ))}
            </View>
          </Section>

          <Section title="2 · UPPER MEDIUM (incident)">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {MEDIA.map((m) => <MediaChip key={m.id} m={m} />)}
            </View>
          </Section>

          <Section title="3 · LOWER MEDIUM (refracted)">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {MEDIA.map((m) => <MediaChip2 key={m.id} m={m} />)}
            </View>
          </Section>

          <Section title="4 · INCIDENT ANGLE θ₁ (°)">
            <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14 }}>
              <Text style={{ fontSize: 22, fontWeight: "900", color: ACCENT }}>{theta1}°</Text>
              <View style={{ flexDirection: "row", marginTop: 8 }}>
                {[15, 30, 45, 60, 75].map((val) => (
                  <TouchableOpacity key={val} onPress={() => setTheta1(val)} style={{ flex: 1, marginHorizontal: 3, backgroundColor: theta1 === val ? ACCENT : theme.colors.surfaceMuted, borderRadius: 10, paddingVertical: 9 }}>
                    <Text style={{ textAlign: "center", fontSize: 13, fontWeight: "800", color: theta1 === val ? "#fff" : theme.colors.textMuted }}>{val}°</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </Section>

          <Section title="5 · SNELL'S LAW CALCULATOR">
            <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14 }}>
              {result.tir ? (
                <>
                  <Text style={{ fontSize: 13, color: "#b91c1c", fontWeight: "800" }}>Total Internal Reflection!</Text>
                  <Text style={{ fontSize: 12, color: theme.colors.textMuted, marginTop: 4 }}>Critical angle θc = {result.critical?.toFixed(1)}°. θ₁ exceeds it, so no refracted ray.</Text>
                </>
              ) : (
                <>
                  <Text style={{ fontSize: 13, color: theme.colors.text }}>Refracted θ₂ = <Text style={{ fontWeight: "900", color: ACCENT, fontSize: 16 }}>{result.theta2.toFixed(1)}°</Text></Text>
                  <Text style={{ fontSize: 12, color: theme.colors.textMuted, marginTop: 4 }}>
                    {lower.n > upper.n ? "Bends toward the normal (denser)." : lower.n < upper.n ? "Bends away from the normal (rarer)." : "No bending (same medium)."}
                  </Text>
                </>
              )}
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
