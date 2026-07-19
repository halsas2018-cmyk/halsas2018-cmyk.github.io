import React, { useState } from "react";
import { View, Text, TouchableOpacity, StatusBar, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlipCard from "../../titration/FlipCard";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import { U_CHOICES } from "./lens-focal-data";

const ACCENT = "#7c3aed";

export default function PhysLensFocalPrep() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "p3-light-waves";

  const [u, setU] = useState(U_CHOICES[1]);

  function start() {
    haptic.light();
    navigation.navigate("PhysLensFocalLab", { experiment, topicId, config: { u } });
  }

  const Chip = ({ item, selected, onPick }) => (
    <TouchableOpacity onPress={onPick} style={{ backgroundColor: selected ? "#ede9fe" : theme.colors.surface, borderWidth: 1.5, borderColor: selected ? ACCENT : theme.colors.border, borderRadius: 12, paddingVertical: 9, paddingHorizontal: 14, marginRight: 8, marginBottom: 8 }}>
      <Text style={{ fontSize: 13, fontWeight: selected ? "800" : "600", color: selected ? "#5b21b6" : theme.colors.textMuted }}>{item} cm</Text>
    </TouchableOpacity>
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
          <FlipCard emoji="🔍" title="Why measure focal length?" front="The focal length f of a convex lens is the distance from the lens to its principal focus F." back="With 1/f = 1/u + 1/v you can find f by measuring the object distance u and the image distance v." />
          <FlipCard emoji="📏" title="The method" front="Place an object (u) in front of the lens, move a screen until a sharp image forms, then read v." back="When the screen is sharp, the image distance v is the screen position. Then compute f = uv/(u+v)." />
          <FlipCard emoji="🎯" title="Your task" front="Pick an object distance, then slide the screen until the image is sharp." back="Next: (1) choose u, (2) move the screen to the sharp-image position, (3) check your result." />

          <Text style={{ fontSize: 12, fontWeight: "800", color: "#6b7280", marginTop: 18, marginBottom: 10, letterSpacing: 0.5 }}>1 · CHOOSE OBJECT DISTANCE (u)</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {U_CHOICES.map((c) => (
              <Chip key={c} item={c} selected={u === c} onPick={() => setU(c)} />
            ))}
          </View>
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
