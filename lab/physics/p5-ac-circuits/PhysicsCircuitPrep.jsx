import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlipCard from "../../titration/FlipCard";
import { CIRCUIT_APPARATUS, circuitCurrent, circuitPower, SAFE_MAX_CURRENT } from "./circuit-data";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";

const ACCENT = "#7c3aed";

export default function PhysicsCircuitPrep() {
  const navigation = useNavigation();
  const route = useRoute();
  const theme = useTheme();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "p5-ac-circuits";

  const [app, setApp] = useState([]);
  const [V, setV] = useState(6); // V
  const [R, setR] = useState(10); // Ω

  const I = circuitCurrent(V, R);
  const P = circuitPower(V, R);

  function toggleApp(id) {
    setApp((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function start() {
    haptic.light();
    const required = CIRCUIT_APPARATUS.filter((a) => a.needed).map((a) => a.id);
    const missing = required.filter((r) => !app.includes(r));
    if (missing.length) return Alert.alert("Missing apparatus", "Select all the required apparatus before you start.");

    const config = { V, R, apparatus: app };
    navigation.navigate("PhysicsCircuitLab", { experiment, topicId, config });
  }

  const Chip = ({ item, selected, onPick, right }) => (
    <TouchableOpacity onPress={onPick} style={{ flexDirection: "row", alignItems: "center", backgroundColor: selected ? "#f3e8ff" : theme.colors.surface, borderWidth: 1.5, borderColor: selected ? ACCENT : theme.colors.border, borderRadius: 12, paddingVertical: 9, paddingHorizontal: 12, marginRight: 8, marginBottom: 8 }}>
      {item.icon ? <Text style={{ fontSize: 15, marginRight: 6 }}>{item.icon}</Text> : null}
      <Text style={{ fontSize: 13, fontWeight: selected ? "800" : "600", color: selected ? "#581c87" : theme.colors.textMuted }}>{item.name}</Text>
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

          <FlipCard emoji="💡" title="What is Ohm's law?" front="For a metal conductor at constant temperature, current is proportional to voltage: V = I R." back="I = V / R and P = V × I (power dissipated as heat). Doubling the voltage doubles the current; doubling the resistance halves it." accent={ACCENT} />
          <FlipCard emoji="⚠️" title="Stay safe!" front="Current = voltage ÷ resistance. Too little resistance = too much current." back={`A very low resistance (near 0 Ω) acts like a short circuit and the current spikes. Above ${SAFE_MAX_CURRENT} A the fuse 'blows' — the experiment fails and you must reset.`} accent={ACCENT} />
          <FlipCard emoji="🎯" title="Your task" front="Set the voltage & resistance, then aim the current at the target band." back="Next you will: (1) pick apparatus, (2) choose voltage & resistor (the calculator previews I), then press Start to light the bulb and try to hit the target current." accent={ACCENT} />

          <Section title="1 · CHOOSE YOUR APPARATUS">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {CIRCUIT_APPARATUS.map((a) => (
                <Chip key={a.id} item={a} selected={app.includes(a.id)} onPick={() => toggleApp(a.id)} right={a.needed ? <Text style={{ fontSize: 9, color: ACCENT, fontWeight: "800", marginLeft: 6 }}>REQ</Text> : null} />
              ))}
            </View>
          </Section>

          <Section title="2 · VOLTAGE (V)">
            <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14 }}>
              <Text style={{ fontSize: 22, fontWeight: "900", color: ACCENT }}>{V} V</Text>
              <View style={{ flexDirection: "row", marginTop: 8 }}>
                {[1.5, 3, 6, 9, 12].map((val) => (
                  <TouchableOpacity key={val} onPress={() => setV(val)} style={{ flex: 1, marginHorizontal: 3, backgroundColor: V === val ? ACCENT : theme.colors.surfaceMuted, borderRadius: 10, paddingVertical: 9 }}>
                    <Text style={{ textAlign: "center", fontSize: 13, fontWeight: "800", color: V === val ? "#fff" : theme.colors.textMuted }}>{val}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </Section>

          <Section title="3 · RESISTANCE (Ω)">
            <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14 }}>
              <Text style={{ fontSize: 22, fontWeight: "900", color: ACCENT }}>{R} Ω</Text>
              <View style={{ flexDirection: "row", marginTop: 8, flexWrap: "wrap" }}>
                {[2, 5, 10, 22, 47, 100].map((val) => (
                  <TouchableOpacity key={val} onPress={() => setR(val)} style={{ width: "30%", margin: "1.5%", backgroundColor: R === val ? ACCENT : theme.colors.surfaceMuted, borderRadius: 10, paddingVertical: 9 }}>
                    <Text style={{ textAlign: "center", fontSize: 13, fontWeight: "800", color: R === val ? "#fff" : theme.colors.textMuted }}>{val}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </Section>

          <Section title="4 · CURRENT CALCULATOR">
            <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14 }}>
              {isFinite(I) ? (
                <>
                  <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>Current I = <Text style={{ fontWeight: "900", color: ACCENT, fontSize: 16 }}>{I.toFixed(2)} A</Text></Text>
                  <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 6 }}>Power P = <Text style={{ fontWeight: "800" }}>{P.toFixed(2)} W</Text></Text>
                </>
              ) : (
                <Text style={{ fontSize: 13, color: "#b91c1c", fontWeight: "800" }}>Resistance ≈ 0 Ω → short circuit! Current would be unsafe.</Text>
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
