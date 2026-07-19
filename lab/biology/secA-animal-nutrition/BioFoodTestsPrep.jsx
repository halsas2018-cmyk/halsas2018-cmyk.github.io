import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlipCard from "../../titration/FlipCard";
import { FOOD_SAMPLES, FOOD_TEST_EXPLAINERS } from "./animal-nutrition-data";

const GREEN = "#16a34a";

export default function BioFoodTestsPrep() {
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const theme = useTheme();
  const topicId = route.params?.topicId || "secA-animal-nutrition";

  const [sampleId, setSampleId] = useState(null);

  const sample = FOOD_SAMPLES.find((s) => s.id === sampleId);

  function start() {
    if (!sample) return Alert.alert("Pick a food sample", "Choose the food you want to test first.");

    const config = { sample };
    navigation.navigate("BioFoodTestsLab", { experiment, topicId, config });
  }

  const Chip = ({ item, selected, onPick, right }) => (
    <TouchableOpacity onPress={onPick} style={{ flexDirection: "row", alignItems: "center", backgroundColor: selected ? theme.colors.primarySoft : theme.colors.surface, borderWidth: 1.5, borderColor: selected ? GREEN : theme.colors.border, borderRadius: 12, paddingVertical: 9, paddingHorizontal: 12, marginRight: 8, marginBottom: 8 }}>
      {item.icon ? <Text style={{ fontSize: 15, marginRight: 6 }}>{item.icon}</Text> : null}
      <Text style={{ fontSize: 13, fontWeight: selected ? "800" : "600", color: selected ? "#14532d" : theme.colors.text }}>{item.name}</Text>
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
          <Text style={{ fontSize: 16, color: GREEN, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }}>Pre-lab Briefing</Text>
      </View>

      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={0}>
        <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 24 }} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
          <Text style={{ fontSize: 13, fontWeight: "700", color: GREEN, marginBottom: 4 }}>📚 Tap each card to flip it</Text>

          <FlipCard emoji="🧪" title="Qualitative food tests" front="We use simple colour-change reagents to detect the food substances in a sample." back="Starch → iodine (blue-black). Reducing sugar → Benedict's (brick-red, after heating). Protein → biuret (violet). Fat → ethanol (cloudy white). A clear / unchanged result means that substance is absent." />
          <FlipCard emoji="🔬" title="How it works" front="Add the reagent to the food and watch the liquid change colour." back="A POSITIVE result is a characteristic new colour. A NEGATIVE result keeps the original pale colour. Compare what you see to the known positives to identify what is in the food." />
          <FlipCard emoji="🎯" title="Your task" front="Pick a mystery food, then test it with each reagent." back="Next you will: (1) choose a food sample, (2) add iodine, Benedict's, biuret and ethanol one at a time, watch the colour, then record which substances are present." />

          <Section title="1 · CHOOSE THE FOOD SAMPLE TO TEST">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {FOOD_SAMPLES.map((s) => (
                <Chip key={s.id} item={s} selected={sampleId === s.id} onPick={() => setSampleId(s.id)} />
              ))}
            </View>
          </Section>

          <Section title="2 · THE FOUR REAGENTS">
            {FOOD_TEST_EXPLAINERS.map((e) => (
              <View key={e.title} style={{ flexDirection: "row", backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 12, padding: 12, marginBottom: 8 }}>
                <Text style={{ fontSize: 18, marginRight: 10 }}>{e.emoji}</Text>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 13.5, fontWeight: "800", color: theme.colors.text }}>{e.title}</Text>
                  <Text style={{ fontSize: 12.5, color: theme.colors.textMuted, marginTop: 2, lineHeight: 18 }}>{e.text}</Text>
                </View>
              </View>
            ))}
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
