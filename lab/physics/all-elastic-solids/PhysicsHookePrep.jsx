import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlipCard from "../../titration/FlipCard";
import { HOOKE_APPARATUS, SPRING_CONSTANTS } from "./hooke-data";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";

const ACCENT = "#0ea5e9";

export default function PhysicsHookePrep() {
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "all-elastic-solids";
  const theme = useTheme();

  const [app, setApp] = useState([]);
  const [kId, setKId] = useState("medium");
  const kObj = SPRING_CONSTANTS.find((s) => s.id === kId) || SPRING_CONSTANTS[1];

  function toggleApp(id) {
    setApp((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function start() {
    haptic.light();
    const required = HOOKE_APPARATUS.filter((a) => a.needed).map((a) => a.id);
    const missing = required.filter((r) => !app.includes(r));
    if (missing.length) return Alert.alert("Missing apparatus", "Select all the required apparatus before you start.");

    const config = { k: kObj.k, apparatus: app };
    navigation.navigate("PhysicsHookeLab", { experiment, topicId, config });
  }

  const Chip = ({ item, selected, onPick, right }) => (
    <TouchableOpacity onPress={onPick} style={{ flexDirection: "row", alignItems: "center", backgroundColor: selected ? "#e0f2fe" : theme.colors.surface, borderWidth: 1.5, borderColor: selected ? ACCENT : theme.colors.border, borderRadius: 12, paddingVertical: 9, paddingHorizontal: 12, marginRight: 8, marginBottom: 8 }}>
      {item.icon ? <Text style={{ fontSize: 15, marginRight: 6 }}>{item.icon}</Text> : null}
      <Text style={{ fontSize: 13, fontWeight: selected ? "800" : "600", color: selected ? "#075985" : theme.colors.text }}>{item.name}</Text>
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

          <FlipCard emoji="🌀" title="What is Hooke's Law?" front="For a spring, the extension is proportional to the load hung on it — up to a limit." back="Hooke's law: load F = k × extension e. The constant k is the spring constant (N/m). The graph of load vs extension is a straight line through the origin while the spring is elastic." accent={ACCENT} />
          <FlipCard emoji="📈" title="The load–extension graph" front="Plot load (vertical) against extension (horizontal). In the elastic range it is a straight line." back="The slope of that straight line equals the spring constant k. Beyond the limit of proportionality the line bends and the spring is permanently deformed." accent={ACCENT} />
          <FlipCard emoji="🎯" title="Your task" front="Hang increasing 0.5 N loads on the spring and measure the extension each time." back="Next you will: (1) pick apparatus, (2) choose a spring constant k, then press Start to add loads and plot load vs extension live. Finish once the line bends to read k and the limit of proportionality." accent={ACCENT} />

          <Section title="1 · CHOOSE YOUR APPARATUS">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {HOOKE_APPARATUS.map((a) => (
                <Chip key={a.id} item={a} selected={app.includes(a.id)} onPick={() => toggleApp(a.id)} right={a.needed ? <Text style={{ fontSize: 9, color: ACCENT, fontWeight: "800", marginLeft: 6 }}>REQ</Text> : null} />
              ))}
            </View>
          </Section>

          <Section title="2 · CHOOSE THE SPRING CONSTANT k">
            <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14 }}>
              <Text style={{ fontSize: 13, color: theme.colors.text, marginBottom: 10 }}>A stiffer spring stretches less for the same load (larger k).</Text>
              <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                {SPRING_CONSTANTS.map((s) => (
                  <TouchableOpacity key={s.id} onPress={() => setKId(s.id)} style={{ width: "48%", margin: "1%", backgroundColor: kId === s.id ? ACCENT : theme.colors.surfaceMuted, borderRadius: 10, paddingVertical: 11 }}>
                    <Text style={{ textAlign: "center", fontSize: 12, fontWeight: "800", color: kId === s.id ? "#fff" : theme.colors.text }}>{s.k} N/m</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </Section>

          <Section title="3 · THE EQUATION">
            <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14 }}>
              <Text style={{ fontSize: 15, fontWeight: "900", color: ACCENT }}>F = k × e</Text>
              <Text style={{ fontSize: 12, color: theme.colors.textMuted, marginTop: 6 }}>
                F = load (N), e = extension (m), k = spring constant ({kObj.k} N/m chosen).
              </Text>
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
