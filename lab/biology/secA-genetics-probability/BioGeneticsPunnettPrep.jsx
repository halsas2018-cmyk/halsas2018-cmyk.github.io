import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlipCard from "../../titration/FlipCard";
import { GENOTYPES, TRAIT } from "./genetics-data";

const GREEN = "#16a34a";

export default function BioGeneticsPunnettPrep() {
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const theme = useTheme();
  const topicId = route.params?.topicId || "secA-genetics-probability";

  const [p1, setP1] = useState(null);
  const [p2, setP2] = useState(null);

  function start() {
    if (!p1) return Alert.alert("Pick Parent 1", "Select the genotype for the first parent.");
    if (!p2) return Alert.alert("Pick Parent 2", "Select the genotype for the second parent.");

    const config = { parent1: p1, parent2: p2 };
    navigation.navigate("BioGeneticsPunnettLab", { experiment, topicId, config });
  }

  const Chip = ({ item, selected, onPick }) => (
    <TouchableOpacity onPress={onPick} style={{ flexDirection: "row", alignItems: "center", backgroundColor: selected ? theme.colors.primarySoft : theme.colors.surface, borderWidth: 1.5, borderColor: selected ? GREEN : theme.colors.border, borderRadius: 12, paddingVertical: 11, paddingHorizontal: 18, marginRight: 8, marginBottom: 8 }}>
      <Text style={{ fontSize: 15, fontWeight: selected ? "800" : "600", color: selected ? "#14532d" : theme.colors.text }}>{item}</Text>
      {selected ? <Text style={{ fontSize: 12, color: GREEN, fontWeight: "800", marginLeft: 8 }}>✓</Text> : null}
    </TouchableOpacity>
  );

  const Section = ({ title, children }) => (
    <View style={{ marginBottom: 18 }}>
      <Text style={{ fontSize: 12, fontWeight: "800", color: theme.colors.textMuted, marginBottom: 10, letterSpacing: 0.5 }}>{title}</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>{children}</View>
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

          <FlipCard emoji="🧬" title="What is a monohybrid cross?" front="A cross that follows the inheritance of ONE trait, e.g. plant height (tall vs short)." back="Each parent carries two alleles for the trait. Offspring inherit one allele from each parent. A Punnett square predicts the possible genetic combinations." />
          <FlipCard emoji="🎲" title="The alleles" front={`T = ${TRAIT.dominantPhenotype} (dominant), t = ${TRAIT.recessivePhenotype} (recessive).`} back="Alleles are alternative forms of a gene. A dominant allele (T) masks a recessive one (t), so TT and Tt both look tall, while tt looks short." />
          <FlipCard emoji="🧫" title="Gametes" front="Each parent's gametes carry only ONE allele." back="During gamete formation the two alleles separate (Mendel's law of segregation). A Tt parent produces half T gametes and half t gametes; a TT parent produces only T; a tt parent only t." />
          <FlipCard emoji="🎯" title="Your task" front="Pick two parental genotypes, build the square, then predict the phenotype ratio." back="Next you will: (1) choose Parent 1's genotype, (2) choose Parent 2's genotype, then press Start to fill the Punnett square and check your prediction." />

          <Section title="1 · PARENT 1 GENOTYPE">
            {GENOTYPES.map((g) => (
              <Chip key={g} item={g} selected={p1 === g} onPick={() => { haptic.light(); setP1(g); }} />
            ))}
          </Section>

          <Section title="2 · PARENT 2 GENOTYPE">
            {GENOTYPES.map((g) => (
              <Chip key={g} item={g} selected={p2 === g} onPick={() => { haptic.light(); setP2(g); }} />
            ))}
          </Section>

          <View style={{ backgroundColor: theme.colors.surfaceAlt, borderRadius: 12, padding: 14, marginTop: 4 }}>
            <Text style={{ fontSize: 13, lineHeight: 19, color: theme.colors.text }}>
              Cross: <Text style={{ fontWeight: "800" }}>{p1 || "—"}</Text> × <Text style={{ fontWeight: "800" }}>{p2 || "—"}</Text>
              {"  "}(T = {TRAIT.dominantPhenotype}, t = {TRAIT.recessivePhenotype})
            </Text>
          </View>
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
