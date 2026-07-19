import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StatusBar, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlipCard from "../../titration/FlipCard";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import { ORGANELLES } from "./cell-structure-data";

const ACCENT = "#16a34a";

export default function BioCellStructurePrep() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "secA-cell-structure";

  const [type, setType] = useState("plant");
  const list = ORGANELLES[type];

  function start() {
    haptic.light();
    navigation.navigate("BioCellStructureLab", { experiment, topicId, config: { type } });
  }

  const Chip = ({ item, selected, onPick }) => (
    <TouchableOpacity onPress={onPick} style={{ flexDirection: "row", alignItems: "center", backgroundColor: selected ? "#dcfce7" : theme.colors.surface, borderWidth: 1.5, borderColor: selected ? ACCENT : theme.colors.border, borderRadius: 12, paddingVertical: 9, paddingHorizontal: 12, marginRight: 8, marginBottom: 8 }}>
      <Text style={{ fontSize: 13, fontWeight: selected ? "800" : "600", color: selected ? "#14532d" : theme.colors.textMuted }}>{item}</Text>
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
          <Text style={{ fontSize: 16, color: ACCENT, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }}>Pre-lab Briefing</Text>
      </View>

      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={0}>
        <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 24 }} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
          <Text style={{ fontSize: 13, fontWeight: "700", color: ACCENT, marginBottom: 4 }}>📚 Tap each card to flip it</Text>
          <FlipCard emoji="🧫" title="Plant vs animal cells" front="Both have a membrane, cytoplasm and nucleus. Plant cells add a wall, chloroplasts and a large vacuole." back="Plant cells are box-shaped (cell wall) and make food (chloroplasts). Animal cells are rounder and have mitochondria for energy." />
          <FlipCard emoji="🔬" title="Key organelles" front="Nucleus controls the cell; membrane controls entry; mitochondria release energy." back="The nucleus holds DNA. The cell membrane is the gatekeeper. Chloroplasts (plants) do photosynthesis. The vacuole stores water." />
          <FlipCard emoji="🎯" title="Your task" front="Pick a cell type, study the diagram, then identify organelles in a quiz." back="Next: (1) choose plant or animal cell, (2) review the labelled diagram, (3) answer 3 identification questions." />

          <Section title="1 · CHOOSE THE CELL TYPE">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Chip item="Plant cell" selected={type === "plant"} onPick={() => setType("plant")} />
              <Chip item="Animal cell" selected={type === "animal"} onPick={() => setType("animal")} />
            </View>
          </Section>

          <Section title="2 · ORGANELLES TO LEARN">
            <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 14 }}>
              {list.map((o) => (
                <Text key={o.id} style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• <Text style={{ fontWeight: "700" }}>{o.name}</Text> — {o.role}</Text>
              ))}
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
