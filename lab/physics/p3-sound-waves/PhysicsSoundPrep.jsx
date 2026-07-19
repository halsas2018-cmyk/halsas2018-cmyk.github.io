import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlipCard from "../../titration/FlipCard";
import { SOUND_APPARATUS, FREQUENCIES, SPEEDS, wavelength, firstResonantLength } from "./sound-data";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";

const ACCENT = "#0ea5e9";

export default function PhysicsSoundPrep() {
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "p3-sound-waves";
  const theme = useTheme();

  const [app, setApp] = useState([]);
  const [freq, setFreq] = useState(384); // Hz
  const [speed, setSpeed] = useState(340); // m/s

  const lambda = wavelength(speed, freq);
  const Lres = firstResonantLength(speed, freq);

  function toggleApp(id) {
    setApp((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function start() {
    haptic.light();
    const required = SOUND_APPARATUS.filter((a) => a.needed).map((a) => a.id);
    const missing = required.filter((r) => !app.includes(r));
    if (missing.length) return Alert.alert("Missing apparatus", "Select all the required apparatus before you start.");

    const config = { frequency: freq, speed, apparatus: app };
    navigation.navigate("PhysicsSoundLab", { experiment, topicId, config });
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

          <FlipCard emoji="🔊" title="Pitch & frequency" front="Pitch is how high or low a sound seems. Higher frequency → higher pitch." back="Frequency f (Hz) is the number of vibrations per second of the source. A tuning fork stamped 512 Hz makes 512 compressions each second — it sounds higher than a 256 Hz fork." accent={ACCENT} />
          <FlipCard emoji="🌊" title="Key equation" front="Wavelength λ = v / f, where v is the speed of sound." back="In air v ≈ 340 m/s. A 340 Hz note has λ = 1.00 m. Halve the frequency and the wavelength doubles. Wavelength is the distance between successive compressions." accent={ACCENT} />
          <FlipCard emoji="🎯" title="Your task" front="Drive a resonance tube with a tuning fork and find the first resonant length." back="Next you will: (1) pick apparatus, (2) choose frequency & speed of sound (the calculator previews λ and λ/4), then press Start to strike the fork and slide the water level until the air column sings at λ/4." accent={ACCENT} />

          <Section title="1 · CHOOSE YOUR APPARATUS">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {SOUND_APPARATUS.map((a) => (
                <Chip key={a.id} item={a} selected={app.includes(a.id)} onPick={() => toggleApp(a.id)} right={a.needed ? <Text style={{ fontSize: 9, color: ACCENT, fontWeight: "800", marginLeft: 6 }}>REQ</Text> : null} />
              ))}
            </View>
          </Section>

          <Section title="2 · FREQUENCY OF TUNING FORK (Hz)">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {FREQUENCIES.map((f) => (
                <TouchableOpacity key={f} onPress={() => setFreq(f)} style={{ width: "30%", margin: "1.5%", backgroundColor: freq === f ? ACCENT : theme.colors.surfaceMuted, borderRadius: 10, paddingVertical: 11 }}>
                  <Text style={{ textAlign: "center", fontSize: 13, fontWeight: "800", color: freq === f ? "#fff" : theme.colors.textMuted }}>{f}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </Section>

          <Section title="3 · SPEED OF SOUND (m/s)">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {SPEEDS.map((v) => (
                <TouchableOpacity key={v} onPress={() => setSpeed(v)} style={{ width: "30%", margin: "1.5%", backgroundColor: speed === v ? ACCENT : theme.colors.surfaceMuted, borderRadius: 10, paddingVertical: 11 }}>
                  <Text style={{ textAlign: "center", fontSize: 13, fontWeight: "800", color: speed === v ? "#fff" : theme.colors.textMuted }}>{v}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </Section>

          <Section title="4 · RESONANCE CALCULATOR">
            <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14 }}>
              <Text style={{ fontSize: 13, color: theme.colors.text }}>Wavelength λ = <Text style={{ fontWeight: "900", color: ACCENT, fontSize: 16 }}>{lambda.toFixed(3)} m</Text></Text>
              <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 6 }}>First resonant length (λ/4): <Text style={{ fontWeight: "900", color: ACCENT, fontSize: 16 }}>{Lres.toFixed(3)} m</Text></Text>
              <Text style={{ fontSize: 12, color: theme.colors.textMuted, marginTop: 6 }}>Raise the water until the air column equals λ/4 — the tube will resonate loudly.</Text>
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
