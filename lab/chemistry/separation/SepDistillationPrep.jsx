import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlipCard from "../../titration/FlipCard";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import {
  DISTILLATION_APPARATUS,
  DISTILLATION_MIXTURES,
  fractionOrder,
} from "./separation-data";

const GREEN = "#16a34a";

export default function SepDistillationPrep() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "separation";

  const [app, setApp] = useState([]);
  const [mixId, setMixId] = useState(null);

  const mixture = DISTILLATION_MIXTURES.find((m) => m.id === mixId);
  const fractions = mixture ? fractionOrder(mixture) : null;

  function toggleApp(id) {
    setApp((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function start() {
    const required = DISTILLATION_APPARATUS.filter((a) => a.needed).map((a) => a.id);
    const missing = required.filter((r) => !app.includes(r));
    if (missing.length) return Alert.alert("Missing apparatus", "Select all the required apparatus before you start.");
    if (!mixture) return Alert.alert("Pick a mixture", "Choose the liquid mixture you want to separate.");

    const config = { mixture, apparatus: app };
    navigation.navigate("SepDistillationLab", { experiment, topicId, config });
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

          <FlipCard emoji="🔥" title="What is fractional distillation?" front="A way to separate MISCIBLE liquids that have different boiling points." back="The mixture is heated. The liquid with the LOWEST boiling point boils first, its vapour rises, is cooled in the condenser and collected. Then the next-lowest boils, and so on. Fractions come off in order of INCREASING boiling point." />
          <FlipCard emoji="🧱" title="Apparatus" front="Round-bottom flask, fractionating column, condenser, heat source, receiving flask." back="• Column gives vapours many cool surfaces to condense and revaporise, sharpening the separation. • Condenser (cold water jacket) turns vapour back to liquid. • Receiving flask collects each fraction in turn as the thermometer temperature climbs." />
          <FlipCard emoji="🌡️" title="Reading the thermometer" front="The temperature tells you WHICH fraction is distilling." back="A fraction distils only when the thermometer reaches its boiling point. So you collect the lowest-boiling fraction first and stop changing receivers as the temperature rises past each boiling point." />
          <FlipCard emoji="🛢️" title="Real example" front="Crude oil is separated into petrol, naphtha, kerosene, diesel…" back="All miscible hydrocarbons with different boiling ranges. Heating the column and collecting at rising temperatures yields each fraction cleanly — exactly the industrial process." />
          <FlipCard emoji="🎯" title="Your task" front="Choose apparatus and a mixture, then see the distilling order." back="Next you will: (1) pick the apparatus, (2) choose a liquid mixture, and (3) check the order the fractions will come off. Then press Start to run the distillation." />

          <Section title="1 · CHOOSE YOUR APPARATUS">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {DISTILLATION_APPARATUS.map((a) => (
                <Chip key={a.id} item={a} selected={app.includes(a.id)} onPick={() => toggleApp(a.id)} right={a.needed ? <Text style={{ fontSize: 9, color: GREEN, fontWeight: "800", marginLeft: 6 }}>REQ</Text> : null} />
              ))}
            </View>
          </Section>

          <Section title="2 · CHOOSE A LIQUID MIXTURE">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {DISTILLATION_MIXTURES.map((m) => (
                <Chip key={m.id} item={m} selected={mixId === m.id} onPick={() => setMixId(m.id)} />
              ))}
            </View>
          </Section>

          <Section title="3 · PREDICTED DISTILLING ORDER">
            <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14 }}>
              {fractions ? (
                <>
                  <Text style={{ fontSize: 12, color: "#6b7280", marginBottom: 8 }}>
                    Fractions distil off in order of increasing boiling point:
                  </Text>
                  {fractions.map((l, i) => (
                    <View key={l.id} style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
                      <View style={{ width: 14, height: 14, borderRadius: 7, backgroundColor: l.color, marginRight: 8 }} />
                      <Text style={{ fontSize: 13, fontWeight: "700", color: theme.colors.textMuted, flex: 1 }}>{i + 1}. {l.name}</Text>
                      <Text style={{ fontSize: 13, fontWeight: "800", color: GREEN }}>{l.bp} °C</Text>
                    </View>
                  ))}
                  <Text style={{ fontSize: 12, color: "#94a3b8", marginTop: 4 }}>
                    Lowest boiling point distils FIRST. Collect each fraction as the thermometer reaches its temperature.
                  </Text>
                </>
              ) : (
                <Text style={{ fontSize: 12, color: "#94a3b8" }}>Pick a mixture to see the distilling order.</Text>
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
