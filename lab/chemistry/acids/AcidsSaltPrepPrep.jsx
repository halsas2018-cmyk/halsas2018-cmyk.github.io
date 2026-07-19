import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlipCard from "../../titration/FlipCard";
import { ACIDS, BASES, recommendIndicator } from "../../titration/reagents";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import {
  DEFAULT_ACID_VOL,
  requiredAlkaliVol,
  productFor,
} from "./salt-data";

const GREEN = "#16a34a";

const ACID_VOLS = [20, 25, 30, 40];

export default function AcidsSaltPrepPrep() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "acids";

  const [acidId, setAcidId] = useState("hcl");
  const [baseId, setBaseId] = useState("naoh");
  const [acidVol, setAcidVol] = useState(DEFAULT_ACID_VOL);

  const acid = ACIDS.find((a) => a.id === acidId);
  const base = BASES.find((b) => b.id === baseId);
  const rec = recommendIndicator(acid, base);
  const indicator = { id: rec.best || "phenolphthalein", name: rec.best ? rec.best : "Phenolphthalein" };
  const reqVol = requiredAlkaliVol(acid, base, acidVol);
  const product = productFor(acid, base);

  function start() {
    navigation.navigate("AcidsSaltPrepLab", {
      experiment,
      topicId,
      config: { acid, base, acidVol, indicatorId: indicator.id, indicatorName: indicator.name },
    });
  }

  const Chip = ({ item, selected, onPick, right }) => (
    <TouchableOpacity onPress={onPick} style={{ flexDirection: "row", alignItems: "center", backgroundColor: selected ? "#e7f6ec" : "#fff", borderWidth: 1.5, borderColor: selected ? GREEN : "#e5e7eb", borderRadius: 12, paddingVertical: 9, paddingHorizontal: 12, marginRight: 8, marginBottom: 8 }}>
      {item.icon ? <Text style={{ fontSize: 15, marginRight: 6 }}>{item.icon}</Text> : null}
      <Text style={{ fontSize: 13, fontWeight: selected ? "800" : "600", color: selected ? "#14532d" : theme.colors.textMuted }}>{item.label || item.name}</Text>
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

          <FlipCard emoji="🧂" title="How do you make a salt?" front="Neutralize an acid with an alkali, then evaporate the water to leave crystals of salt." back="Method: add alkali to acid until the indicator shows neutral (endpoint). The salt stays dissolved. Heat the solution to evaporate water until it is saturated, then leave it to cool so pure crystals form." />
          <FlipCard emoji="🧪" title="Why an indicator?" front="An indicator shows the exact neutral point so you don't add too much alkali." back="In acid the indicator is one colour; at the neutral endpoint it changes (e.g. methyl orange red → orange). If you add too much alkali the solution becomes alkaline and the salt is impure — you must start again." />
          <FlipCard emoji="🔥" title="Evaporate & crystallize" front="Boil off water to saturation, then cool to grow crystals." back="Heat the neutral solution in an evaporating basin (Bunsen burner) until only a small volume remains and crystals appear at the edge. Stop heating and let it cool — the salt crystallizes out as the solution becomes saturated on cooling." />
          <FlipCard emoji="🎯" title="Your task" front="Pick an acid + alkali, neutralize to the endpoint, then evaporate and crystallize." back="Next you will: (1) choose your acid & alkali, (2) add alkali drop by drop until the endpoint, (3) heat to evaporate, then (4) cool to crystallize. Watch the indicator colour!" />

          <Section title="1 · CHOOSE THE ACID">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {ACIDS.map((a) => (
                <Chip key={a.id} item={a} selected={acidId === a.id} onPick={() => setAcidId(a.id)} right={<Text style={{ fontSize: 9, color: GREEN, fontWeight: "800", marginLeft: 6 }}>{a.formula}</Text>} />
              ))}
            </View>
          </Section>

          <Section title="2 · CHOOSE THE ALKALI">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {BASES.map((b) => (
                <Chip key={b.id} item={b} selected={baseId === b.id} onPick={() => setBaseId(b.id)} right={<Text style={{ fontSize: 9, color: GREEN, fontWeight: "800", marginLeft: 6 }}>{b.formula}</Text>} />
              ))}
            </View>
          </Section>

          <Section title="3 · ACID VOLUME">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {ACID_VOLS.map((v) => (
                <TouchableOpacity key={v} onPress={() => setAcidVol(v)} style={{ paddingVertical: 8, paddingHorizontal: 14, marginRight: 8, borderRadius: 10, borderWidth: 1.5, borderColor: acidVol === v ? GREEN : "#e5e7eb", backgroundColor: acidVol === v ? "#e7f6ec" : "#fff" }}>
                  <Text style={{ fontSize: 13, fontWeight: acidVol === v ? "800" : "600", color: acidVol === v ? "#14532d" : theme.colors.textMuted }}>{v} mL</Text>
                </TouchableOpacity>
              ))}
            </View>
          </Section>

          <Section title="4 · PLAN PREVIEW">
            <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14 }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 12, color: "#64748b" }}>Indicator</Text>
                <Text style={{ fontSize: 13, fontWeight: "800", color: "#0f172a" }}>{indicator.name}</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 6 }}>
                <Text style={{ fontSize: 12, color: "#64748b" }}>Alkali to endpoint</Text>
                <Text style={{ fontSize: 13, fontWeight: "800", color: GREEN }}>{reqVol.toFixed(1)} mL</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 6 }}>
                <Text style={{ fontSize: 12, color: "#64748b" }}>Salt product</Text>
                <Text style={{ fontSize: 13, fontWeight: "800", color: "#0f172a" }}>{product.formula} · {product.name}</Text>
              </View>
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
