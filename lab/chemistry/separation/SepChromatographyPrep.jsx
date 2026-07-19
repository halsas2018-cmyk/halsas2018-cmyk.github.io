import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlipCard from "../../titration/FlipCard";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import {
  CHROMATOGRAPHY_APPARATUS,
  SOLVENTS,
  DYES,
  travelOrder,
} from "./separation-data";

const GREEN = "#16a34a";

export default function SepChromatographyPrep() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "separation";

  const [app, setApp] = useState([]);
  const [solventId, setSolventId] = useState(null);
  const [dyeId, setDyeId] = useState(null);

  const solvent = SOLVENTS.find((s) => s.id === solventId);
  const dye = DYES.find((d) => d.id === dyeId);
  const order = solvent && dye ? travelOrder(dye, solvent) : null;

  function toggleApp(id) {
    setApp((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function start() {
    const required = CHROMATOGRAPHY_APPARATUS.filter((a) => a.needed).map((a) => a.id);
    const missing = required.filter((r) => !app.includes(r));
    if (missing.length) return Alert.alert("Missing apparatus", "Select all the required apparatus before you start.");
    if (!solvent) return Alert.alert("Pick a solvent", "Choose the solvent (mobile phase) you will use.");
    if (!dye) return Alert.alert("Pick an ink", "Choose the ink or dye mixture to separate.");

    const config = { solvent, mixture: dye, apparatus: app };
    navigation.navigate("SepChromatographyLab", { experiment, topicId, config });
  }

  const Chip = ({ item, selected, onPick, right }) => (
    <TouchableOpacity onPress={onPick} style={{ flexDirection: "row", alignItems: "center", backgroundColor: selected ? "#e7f6ec" : "#fff", borderWidth: 1.5, borderColor: selected ? GREEN : "#e5e7eb", borderRadius: 12, paddingVertical: 9, paddingHorizontal: 12, marginRight: 8, marginBottom: 8 }}>
      {item.color ? <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: item.color, marginRight: 7 }} /> : null}
      <Text style={{ fontSize: 13, fontWeight: selected ? "800" : "600", color: selected ? "#14532d" : theme.colors.textMuted }}>{item.icon ? item.icon + " " : ""}{item.name}</Text>
      {right}
    </TouchableOpacity>
  );

  const Section = ({ title, children }) => (
    <View style={{ marginBottom: 18 }}>
      <Text style={{ fontSize: 12, fontWeight: "800", color: "#6b7280", marginBottom: 10, letterSpacing: 0.5 }}>{title}</Text>
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

          <FlipCard emoji="🧪" title="What is chromatography?" front="A way to separate the coloured components of a mixture using a stationary phase and a moving solvent." back="A drop of ink is spotted on paper. The solvent climbs the paper by capillary action, carrying each component at a different rate. Components that are more soluble in the solvent and less stuck to the paper travel furthest — so the colours split apart." />
          <FlipCard emoji="📄" title="Apparatus" front="Chromatography paper, a beaker of solvent, a pencil + ruler, a cover." back="• Paper = the stationary phase. • Beaker holds the solvent (mobile phase). • Pencil line marks where to spot (ink would dissolve and run). • A cover keeps the air saturated so the solvent doesn't evaporate from the paper." />
          <FlipCard emoji="💧" title="Solvent & Rf" front="Rf = distance travelled by component ÷ distance travelled by solvent." back="Each component has its own Rf. It depends on how soluble the component is in the solvent and how strongly it is adsorbed to the paper. More soluble / less adsorbed = higher Rf = travels further. We predict Rf = (1 − affinity) × solventStrength." />
          <FlipCard emoji="🌈" title="Why it works" front="Black ink is not one substance — it is several dyes mixed together." back="On the paper each dye moves at its own speed, so a single black spot spreads into separate coloured bands. That's how you prove a 'black' ink contains blue, red, yellow, etc." />
          <FlipCard emoji="🎯" title="Your task" front="Choose apparatus, a solvent and an ink, then see which colour travels furthest." back="Next you will: (1) pick the apparatus, (2) choose a solvent, (3) choose an ink/dye mixture, and (4) check the predicted travel order. Then press Start to run the chromatography." />

          <Section title="1 · CHOOSE YOUR APPARATUS">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {CHROMATOGRAPHY_APPARATUS.map((a) => (
                <Chip key={a.id} item={a} selected={app.includes(a.id)} onPick={() => toggleApp(a.id)} right={a.needed ? <Text style={{ fontSize: 9, color: GREEN, fontWeight: "800", marginLeft: 6 }}>REQ</Text> : null} />
              ))}
            </View>
          </Section>

          <Section title="2 · CHOOSE A SOLVENT (MOBILE PHASE)">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {SOLVENTS.map((s) => (
                <Chip key={s.id} item={s} selected={solventId === s.id} onPick={() => setSolventId(s.id)} />
              ))}
            </View>
            {solvent ? <Text style={{ fontSize: 12, color: "#94a3b8", marginTop: 6 }}>{solvent.note}</Text> : null}
          </Section>

          <Section title="3 · CHOOSE AN INK / DYE MIXTURE">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {DYES.map((d) => (
                <Chip key={d.id} item={d} selected={dyeId === d.id} onPick={() => setDyeId(d.id)} />
              ))}
            </View>
          </Section>

          <Section title="4 · PREDICTED TRAVEL ORDER">
            <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14 }}>
              {order ? (
                <>
                  <Text style={{ fontSize: 12, color: "#6b7280", marginBottom: 8 }}>
                    With <Text style={{ fontWeight: "700" }}>{solvent.name}</Text>, the components travel furthest → baseline in this order:
                  </Text>
                  {order.map((c, i) => (
                    <View key={c.id} style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
                      <View style={{ width: 14, height: 14, borderRadius: 7, backgroundColor: c.color, marginRight: 8 }} />
                      <Text style={{ fontSize: 13, fontWeight: "700", color: theme.colors.textMuted, flex: 1 }}>{i + 1}. {c.name}</Text>
                      <Text style={{ fontSize: 13, fontWeight: "800", color: GREEN }}>Rf {c.rf.toFixed(2)}</Text>
                    </View>
                  ))}
                  <Text style={{ fontSize: 12, color: "#94a3b8", marginTop: 4 }}>
                    Highest Rf = travels furthest up the paper. Stop the run before the solvent reaches the top!
                  </Text>
                </>
              ) : (
                <Text style={{ fontSize: 12, color: "#94a3b8" }}>Pick a solvent and an ink to see the predicted order.</Text>
              )}
            </View>
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
