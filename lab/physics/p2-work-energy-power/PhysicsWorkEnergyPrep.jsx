import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlipCard from "../../titration/FlipCard";
import {
  WORK_APPARATUS,
  inclineDistance,
  forceAlongPlane,
  workAgainstGravity,
  MASS_PRESETS,
  ANGLE_PRESETS,
  HEIGHT_PRESETS,
} from "./workenergy-data";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";

const ACCENT = "#ea580c";

export default function PhysicsWorkEnergyPrep() {
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "p2-work-energy-power";
  const theme = useTheme();

  const [app, setApp] = useState([]);
  const [mass, setMass] = useState(1.0); // kg
  const [angle, setAngle] = useState(20); // degrees
  const [height, setHeight] = useState(1.0); // m

  const d = inclineDistance(height, angle);
  const F = forceAlongPlane(mass, angle);
  const W = workAgainstGravity(mass, height);
  const finiteD = isFinite(d);

  function toggleApp(id) {
    setApp((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function step(setter, value, delta, min, max) {
    const next = Math.min(max, Math.max(min, parseFloat((value + delta).toFixed(2))));
    setter(next);
  }

  function start() {
    haptic.light();
    const required = WORK_APPARATUS.filter((a) => a.needed).map((a) => a.id);
    const missing = required.filter((r) => !app.includes(r));
    if (missing.length) return Alert.alert("Missing apparatus", "Select all the required apparatus before you start.");
    if (!finiteD) return Alert.alert("Invalid angle", "The plane angle must be greater than 0° so the block can slide up.");

    const config = { mass, angle, height, apparatus: app };
    navigation.navigate("PhysicsWorkEnergyLab", { experiment, topicId, config });
  }

  const Chip = ({ item, selected, onPick, right }) => (
    <TouchableOpacity onPress={onPick} style={{ flexDirection: "row", alignItems: "center", backgroundColor: selected ? "#ffedd5" : theme.colors.surface, borderWidth: 1.5, borderColor: selected ? ACCENT : theme.colors.border, borderRadius: 12, paddingVertical: 9, paddingHorizontal: 12, marginRight: 8, marginBottom: 8 }}>
      {item.icon ? <Text style={{ fontSize: 15, marginRight: 6 }}>{item.icon}</Text> : null}
      <Text style={{ fontSize: 13, fontWeight: selected ? "800" : "600", color: selected ? "#9a3412" : theme.colors.text }}>{item.name}</Text>
      {right}
    </TouchableOpacity>
  );

  const Stepper = ({ label, value, unit, onMinus, onPlus, onPick }) => (
    <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14, marginBottom: 12 }}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <Text style={{ fontSize: 14, fontWeight: "800", color: theme.colors.text }}>{label}</Text>
        <Text style={{ fontSize: 22, fontWeight: "900", color: ACCENT }}>{value} <Text style={{ fontSize: 13, fontWeight: "700", color: theme.colors.textMuted }}>{unit}</Text></Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={onMinus} style={{ width: 44, height: 36, borderRadius: 10, backgroundColor: theme.colors.surfaceMuted, alignItems: "center", justifyContent: "center" }}>
          <Text style={{ fontSize: 22, fontWeight: "900", color: ACCENT }}>−</Text>
        </TouchableOpacity>
        <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
          {onPick.map((v) => (
            <TouchableOpacity key={v} onPress={() => onPick(v)} style={{ paddingVertical: 6, paddingHorizontal: 9, marginHorizontal: 3, backgroundColor: value === v ? ACCENT : theme.colors.surfaceMuted, borderRadius: 8 }}>
              <Text style={{ fontSize: 12, fontWeight: "800", color: value === v ? "#fff" : theme.colors.textMuted }}>{v}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity onPress={onPlus} style={{ width: 44, height: 36, borderRadius: 10, backgroundColor: theme.colors.surfaceMuted, alignItems: "center", justifyContent: "center" }}>
          <Text style={{ fontSize: 22, fontWeight: "900", color: ACCENT }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
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

          <FlipCard emoji="⚡" title="What is work?" front="Work is done when a force moves an object through a distance: W = F × d (along the force direction)." back="Pushing a block up a slope, only the component of your push ALONG the plane does useful work against gravity. Work is measured in joules (J)." accent={ACCENT} />
          <FlipCard emoji="📐" title="Key equations" front="Force up plane F = mg sinθ. Height gain h. Work = mgh." back="Distance along plane d = h / sinθ. Force along plane F = mg sinθ. Work input = F·d = mg·sinθ·(h/sinθ) = mgh — equal to the GPE gained (friction ignored)." accent={ACCENT} />
          <FlipCard emoji="🎯" title="Your task" front="Set the mass, the plane angle and the height, then push the block to the top." back="Next you will: (1) confirm your setup, (2) press Push to slide the block up, then (3) view the report showing work done, GPE gained and the force needed." accent={ACCENT} />

          <Section title="1 · CHOOSE YOUR APPARATUS">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {WORK_APPARATUS.map((a) => (
                <Chip key={a.id} item={a} selected={app.includes(a.id)} onPick={() => toggleApp(a.id)} right={a.needed ? <Text style={{ fontSize: 9, color: ACCENT, fontWeight: "800", marginLeft: 6 }}>REQ</Text> : null} />
              ))}
            </View>
          </Section>

          <Section title="2 · SET THE VARIABLES">
            <Stepper label="Mass (m)" value={mass} unit="kg" onMinus={() => step(setMass, mass, -0.5, 0.5, 5)} onPlus={() => step(setMass, mass, 0.5, 0.5, 5)} onPick={MASS_PRESETS} />
            <Stepper label="Plane angle (θ)" value={angle} unit="°" onMinus={() => step(setAngle, angle, -5, 5, 60)} onPlus={() => step(setAngle, angle, 5, 5, 60)} onPick={ANGLE_PRESETS} />
            <Stepper label="Height (h)" value={height} unit="m" onMinus={() => step(setHeight, height, -0.1, 0.2, 5)} onPlus={() => step(setHeight, height, 0.1, 0.2, 5)} onPick={HEIGHT_PRESETS} />
          </Section>

          <Section title="3 · CALCULATOR PREVIEW (g = 9.8 m/s²)">
            <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14 }}>
              <Text style={{ fontSize: 13, color: theme.colors.text }}>Distance along plane: <Text style={{ fontWeight: "900", color: ACCENT, fontSize: 15 }}>{finiteD ? d.toFixed(2) : "∞"} m</Text></Text>
              <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 6 }}>Force along plane: <Text style={{ fontWeight: "900", color: ACCENT, fontSize: 15 }}>{F.toFixed(2)} N</Text></Text>
              <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 6 }}>Work done / GPE: <Text style={{ fontWeight: "900", color: ACCENT, fontSize: 15 }}>{W.toFixed(2)} J</Text></Text>
              <Text style={{ fontSize: 12, color: theme.colors.textMuted, marginTop: 6 }}>Ideal case: work input = GPE gained (friction ignored).</Text>
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
