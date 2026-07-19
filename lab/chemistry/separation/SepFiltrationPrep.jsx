import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlipCard from "../../titration/FlipCard";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import {
  FILTRATION_APPARATUS,
  FILTRATION_MIXTURES,
  separationResult,
} from "./separation-data";

const GREEN = "#16a34a";

export default function SepFiltrationPrep() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "separation";

  const [app, setApp] = useState([]);
  const [mixId, setMixId] = useState(null);

  const mixture = FILTRATION_MIXTURES.find((m) => m.id === mixId);
  const result = mixture ? separationResult(mixture) : null;

  function toggleApp(id) {
    setApp((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function start() {
    const required = FILTRATION_APPARATUS.filter((a) => a.needed).map((a) => a.id);
    const missing = required.filter((r) => !app.includes(r));
    if (missing.length) return Alert.alert("Missing apparatus", "Select all the required apparatus before you start.");
    if (!mixture) return Alert.alert("Pick a mixture", "Choose the mixture you want to separate.");

    const config = { mixture, apparatus: app };
    navigation.navigate("SepFiltrationLab", { experiment, topicId, config });
  }

  const Chip = ({ item, selected, onPick, right }) => (
    <TouchableOpacity onPress={onPick} style={{ flexDirection: "row", alignItems: "center", backgroundColor: selected ? "#e7f6ec" : "#fff", borderWidth: 1.5, borderColor: selected ? GREEN : "#e5e7eb", borderRadius: 12, paddingVertical: 9, paddingHorizontal: 12, marginRight: 8, marginBottom: 8 }}>
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

          <FlipCard emoji="🔺" title="What is filtration?" front="A way to separate an INSOLUBLE solid from a liquid." back="The mixture is poured through filter paper in a funnel. The liquid (filtrate) passes through the tiny pores; the solid particles are too big and stay behind as the residue on the paper." />
          <FlipCard emoji="🥢" title="Apparatus" front="Filter funnel, filter paper, beaker, glass rod." back="• Filter paper sits in the funnel and traps the solid. • Glass rod guides the stream down the funnel wall so you don't splash. • The beaker below catches the filtrate." />
          <FlipCard emoji="🌫️" title="Filtration vs decantation" front="Filtration traps a solid on paper; decantation just pours liquid off a settled solid." back="If the solid has settled, you can carefully pour (decant) the liquid away, leaving the solid behind. Filtration is used when the solid stays suspended and won't settle quickly." />
          <FlipCard emoji="🧂" title="Soluble vs insoluble" front="Only INSOLUBLE solids are trapped. A dissolved (soluble) solid passes through with the liquid." back="In sand + salt water, the sand is trapped on the paper (residue) while the salt water passes through (filtrate). To get the salt you'd then evaporate the filtrate." />
          <FlipCard emoji="🎯" title="Your task" front="Choose apparatus and a mixture, then see what ends up where." back="Next you will: (1) pick the apparatus, (2) choose a mixture (insoluble vs soluble solid), and (3) check the residue / filtrate prediction. Then press Start to run the filtration." />

          <Section title="1 · CHOOSE YOUR APPARATUS">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {FILTRATION_APPARATUS.map((a) => (
                <Chip key={a.id} item={a} selected={app.includes(a.id)} onPick={() => toggleApp(a.id)} right={a.needed ? <Text style={{ fontSize: 9, color: GREEN, fontWeight: "800", marginLeft: 6 }}>REQ</Text> : null} />
              ))}
            </View>
          </Section>

          <Section title="2 · CHOOSE A MIXTURE">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {FILTRATION_MIXTURES.map((m) => (
                <Chip key={m.id} item={m} selected={mixId === m.id} onPick={() => setMixId(m.id)} />
              ))}
            </View>
            {mixture ? <Text style={{ fontSize: 12, color: "#94a3b8", marginTop: 6 }}>{mixture.note}</Text> : null}
          </Section>

          <Section title="3 · PREDICTED RESULT">
            <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14 }}>
              {result ? (
                <>
                  <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
                    <View style={{ width: 14, height: 14, borderRadius: 7, backgroundColor: "#92400e", marginRight: 8 }} />
                    <Text style={{ fontSize: 13, fontWeight: "700", color: theme.colors.textMuted, flex: 1 }}>Residue (on paper):</Text>
                    <Text style={{ fontSize: 13, fontWeight: "800", color: GREEN }}>{result.residue}</Text>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
                    <View style={{ width: 14, height: 14, borderRadius: 7, backgroundColor: "#38bdf8", marginRight: 8 }} />
                    <Text style={{ fontSize: 13, fontWeight: "700", color: theme.colors.textMuted, flex: 1 }}>Filtrate (through):</Text>
                    <Text style={{ fontSize: 13, fontWeight: "800", color: GREEN }}>{result.filtrate}</Text>
                  </View>
                  <Text style={{ fontSize: 12, color: "#94a3b8", marginTop: 4 }}>
                    {result.decant}. The insoluble solid is retained; the liquid (and anything dissolved in it) passes through.
                  </Text>
                </>
              ) : (
                <Text style={{ fontSize: 12, color: "#94a3b8" }}>Pick a mixture to see what ends up in the residue vs the filtrate.</Text>
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
