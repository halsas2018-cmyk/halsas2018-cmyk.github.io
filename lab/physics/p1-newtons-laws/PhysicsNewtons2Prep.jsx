import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlipCard from "../../titration/FlipCard";
import { NEWTONS_APPARATUS, accel, MASS_CHOICES, FORCE_CHOICES } from "./newtons-data";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";

const ACCENT = "#2563eb";

export default function PhysicsNewtons2Prep() {
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "p1-newtons-laws";
  const theme = useTheme();

  const [app, setApp] = useState([]);
  const [mass, setMass] = useState(1.0); // kg
  const [force, setForce] = useState(4); // N

  const a = accel(force, mass);

  function toggleApp(id) {
    setApp((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function start() {
    haptic.light();
    const required = NEWTONS_APPARATUS.filter((x) => x.needed).map((x) => x.id);
    const missing = required.filter((r) => !app.includes(r));
    if (missing.length) return Alert.alert("Missing apparatus", "Select all the required apparatus before you start.");

    const config = { mass, force, apparatus: app };
    navigation.navigate("PhysicsNewtons2Lab", { experiment, topicId, config });
  }

  const Chip = ({ item, selected, onPick, right }) => (
    <TouchableOpacity onPress={onPick} style={{ flexDirection: "row", alignItems: "center", backgroundColor: selected ? "#dbeafe" : theme.colors.surface, borderWidth: 1.5, borderColor: selected ? ACCENT : theme.colors.border, borderRadius: 12, paddingVertical: 9, paddingHorizontal: 12, marginRight: 8, marginBottom: 8 }}>
      {item.icon ? <Text style={{ fontSize: 15, marginRight: 6 }}>{item.icon}</Text> : null}
      <Text style={{ fontSize: 13, fontWeight: selected ? "800" : "600", color: selected ? "#1e40af" : theme.colors.text }}>{item.name}</Text>
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

          <FlipCard emoji="⚡" title="What is F = ma?" front="Newton's Second Law: the acceleration of an object is directly proportional to the net force and inversely proportional to its mass (a = F / m)." back="Double the force → double the acceleration. Double the mass → halve the acceleration. This is the core equation of dynamics." accent={ACCENT} />
          <FlipCard emoji="🛒" title="The set-up" front="A trolley on a horizontal track is pulled by an applied force (e.g. a hanging mass over a pulley)." back="Friction is neglected. The trolley starts from rest and accelerates along the track. We measure its motion to find a and check it equals F / m." accent={ACCENT} />
          <FlipCard emoji="🎯" title="Your task" front="Set the trolley mass & applied force, then Release and Measure the acceleration." back="Next you will: (1) pick apparatus, (2) choose mass & force (the calculator previews a = F / m), then press Start to release the trolley and measure its motion." accent={ACCENT} />

          <Section title="1 · CHOOSE YOUR APPARATUS">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {NEWTONS_APPARATUS.map((x) => (
                <Chip key={x.id} item={x} selected={app.includes(x.id)} onPick={() => toggleApp(x.id)} right={x.needed ? <Text style={{ fontSize: 9, color: ACCENT, fontWeight: "800", marginLeft: 6 }}>REQ</Text> : null} />
              ))}
            </View>
          </Section>

          <Section title="2 · TROLLEY MASS (kg)">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {MASS_CHOICES.map((val) => (
                <TouchableOpacity key={val} onPress={() => setMass(val)} style={{ width: "30%", margin: "1.5%", backgroundColor: mass === val ? ACCENT : theme.colors.surface, borderWidth: 1, borderColor: mass === val ? ACCENT : theme.colors.border, borderRadius: 10, paddingVertical: 9 }}>
                  <Text style={{ textAlign: "center", fontSize: 13, fontWeight: "800", color: mass === val ? "#fff" : theme.colors.textMuted }}>{val}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </Section>

          <Section title="3 · APPLIED FORCE (N)">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {FORCE_CHOICES.map((val) => (
                <TouchableOpacity key={val} onPress={() => setForce(val)} style={{ width: "30%", margin: "1.5%", backgroundColor: force === val ? ACCENT : theme.colors.surface, borderWidth: 1, borderColor: force === val ? ACCENT : theme.colors.border, borderRadius: 10, paddingVertical: 9 }}>
                  <Text style={{ textAlign: "center", fontSize: 13, fontWeight: "800", color: force === val ? "#fff" : theme.colors.textMuted }}>{val}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </Section>

          <Section title="4 · ACCELERATION CALCULATOR (a = F / m)">
            <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14 }}>
              <Text style={{ fontSize: 13, color: theme.colors.text }}>a = {force} N ÷ {mass} kg =</Text>
              <Text style={{ fontSize: 26, fontWeight: "900", color: ACCENT, marginTop: 2 }}>{a.toFixed(2)} m/s²</Text>
              <Text style={{ fontSize: 12, color: theme.colors.textMuted, marginTop: 6 }}>Friction & air resistance are neglected in this model.</Text>
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
