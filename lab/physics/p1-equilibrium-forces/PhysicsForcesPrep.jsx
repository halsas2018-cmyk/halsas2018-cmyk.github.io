import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlipCard from "../../titration/FlipCard";
import { FORCE_APPARATUS, resultant } from "./forces-data";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";

const ACCENT = "#0d9488"; // teal

export default function PhysicsForcesPrep() {
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "p1-equilibrium-forces";
  const theme = useTheme();

  const [app, setApp] = useState([]);
  const [P, setP] = useState(30); // N
  const [Q, setQ] = useState(40); // N
  const [theta, setTheta] = useState(60); // ° between P and Q

  const R = resultant(P, Q, theta);

  function toggleApp(id) {
    setApp((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function start() {
    haptic.light();
    const required = FORCE_APPARATUS.filter((a) => a.needed).map((a) => a.id);
    const missing = required.filter((r) => !app.includes(r));
    if (missing.length) return Alert.alert("Missing apparatus", "Select all the required apparatus before you start.");

    const config = { P, Q, theta };
    navigation.navigate("PhysicsForcesLab", { experiment, topicId, config });
  }

  const Chip = ({ item, selected, onPick, right }) => (
    <TouchableOpacity onPress={onPick} style={{ flexDirection: "row", alignItems: "center", backgroundColor: selected ? "#ccfbf1" : theme.colors.surface, borderWidth: 1.5, borderColor: selected ? ACCENT : theme.colors.border, borderRadius: 12, paddingVertical: 9, paddingHorizontal: 12, marginRight: 8, marginBottom: 8 }}>
      {item.icon ? <Text style={{ fontSize: 15, marginRight: 6 }}>{item.icon}</Text> : null}
      <Text style={{ fontSize: 13, fontWeight: selected ? "800" : "600", color: selected ? "#134e4a" : theme.colors.text }}>{item.name}</Text>
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

          <FlipCard emoji="🟡" title="What is the parallelogram law?" front="If two forces act at a point, their combined effect (resultant) is the diagonal of the parallelogram they form." back="Three forces are in equilibrium when they form a closed triangle — the third force (equilibrant) is equal and opposite to the resultant." accent={ACCENT} />
          <FlipCard emoji="📐" title="Key relation" front="Resultant R = √(P² + Q² + 2PQ cosθ), where θ is the angle between P and Q." back="The equilibrant E has the same magnitude as R but points the opposite way, so P + Q + E = 0. This is the triangle of forces." accent={ACCENT} />
          <FlipCard emoji="🎯" title="Your task" front="Set the two forces P and Q and the angle between them, then find the resultant (and equilibrant)." back="Next: pick apparatus, choose P, Q and θ (the calculator previews the resultant), then press Start to draw the vectors and verify equilibrium." accent={ACCENT} />

          <Section title="1 · CHOOSE YOUR APPARATUS">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {FORCE_APPARATUS.map((a) => (
                <Chip key={a.id} item={a} selected={app.includes(a.id)} onPick={() => toggleApp(a.id)} right={a.needed ? <Text style={{ fontSize: 9, color: ACCENT, fontWeight: "800", marginLeft: 6 }}>REQ</Text> : null} />
              ))}
            </View>
          </Section>

          <Section title="2 · FORCE P (N)">
            <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14 }}>
              <Text style={{ fontSize: 22, fontWeight: "900", color: ACCENT }}>{P} N</Text>
              <View style={{ flexDirection: "row", marginTop: 8 }}>
                {[20, 30, 40].map((val) => (
                  <TouchableOpacity key={val} onPress={() => setP(val)} style={{ flex: 1, marginHorizontal: 3, backgroundColor: P === val ? ACCENT : theme.colors.surfaceMuted, borderRadius: 10, paddingVertical: 9 }}>
                    <Text style={{ textAlign: "center", fontSize: 13, fontWeight: "800", color: P === val ? "#fff" : theme.colors.textMuted }}>{val}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </Section>

          <Section title="3 · FORCE Q (N)">
            <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14 }}>
              <Text style={{ fontSize: 22, fontWeight: "900", color: ACCENT }}>{Q} N</Text>
              <View style={{ flexDirection: "row", marginTop: 8 }}>
                {[20, 30, 40].map((val) => (
                  <TouchableOpacity key={val} onPress={() => setQ(val)} style={{ flex: 1, marginHorizontal: 3, backgroundColor: Q === val ? ACCENT : theme.colors.surfaceMuted, borderRadius: 10, paddingVertical: 9 }}>
                    <Text style={{ textAlign: "center", fontSize: 13, fontWeight: "800", color: Q === val ? "#fff" : theme.colors.textMuted }}>{val}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </Section>

          <Section title="4 · ANGLE BETWEEN P AND Q (°)">
            <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14 }}>
              <Text style={{ fontSize: 22, fontWeight: "900", color: ACCENT }}>{theta}°</Text>
              <View style={{ flexDirection: "row", marginTop: 8 }}>
                {[30, 45, 60, 90, 120].map((val) => (
                  <TouchableOpacity key={val} onPress={() => setTheta(val)} style={{ flex: 1, marginHorizontal: 3, backgroundColor: theta === val ? ACCENT : theme.colors.surfaceMuted, borderRadius: 10, paddingVertical: 9 }}>
                    <Text style={{ textAlign: "center", fontSize: 12, fontWeight: "800", color: theta === val ? "#fff" : theme.colors.textMuted }}>{val}°</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </Section>

          <Section title="5 · RESULTANT PREVIEW">
            <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14 }}>
              <Text style={{ fontSize: 13, color: theme.colors.text }}>Resultant R: <Text style={{ fontWeight: "900", color: ACCENT, fontSize: 16 }}>{R.mag.toFixed(1)} N</Text></Text>
              <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 6 }}>Direction: <Text style={{ fontWeight: "800" }}>{R.angleDeg.toFixed(1)}</Text> degrees from P</Text>
              <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 6 }}>Equilibrant E = <Text style={{ fontWeight: "800" }}>{R.mag.toFixed(1)} N</Text> (opposite R)</Text>
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
