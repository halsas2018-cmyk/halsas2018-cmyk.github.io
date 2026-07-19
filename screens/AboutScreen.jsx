import React from "react";
import { View, Text, ScrollView, StatusBar, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Constants from "expo-constants";
import { useTheme, hexToRgba } from "../theme";
import { haptic } from "../haptic";
import { Pressable } from "../components/ui";

const BULLETS = [
  ["📚", "Built from the standard science curriculum", "Every topic, subtopic and question follows the core secondary-school general science syllabus."],
  ["🧪", "Virtual labs that you drive", "26 interactive simulations — the student does the work: pick apparatus, run the reaction, read the result."],
  ["🃏", "Study cards written like a textbook", "313 subtopics across Chemistry, Biology and Physics, each a short, rich lesson you can swipe through."],
  ["📴", "100% offline", "All content lives on your phone. No data needed to practice — open it on the bus, in the library, anywhere."],
];

export default function AboutScreen({ navigation }) {
  const theme = useTheme();
  const version = (Constants.expoConfig && Constants.expoConfig.version) || Constants.manifest?.version || "1.0.0";

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />

      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <Pressable onPress={() => { haptic.light(); navigation.goBack(); }} hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}>
          <Text style={{ fontSize: 16, color: theme.colors.primary, fontWeight: "700" }}>‹ Back</Text>
        </Pressable>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }}>About SciPractice</Text>
      </View>

      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: "center", marginBottom: 18 }}>
          <View style={{ width: 72, height: 72, borderRadius: 20, backgroundColor: theme.colors.primarySoft, alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
            <Text style={{ fontSize: 36 }}>⚗️</Text>
          </View>
          <Text style={{ fontSize: 22, fontWeight: "900", color: theme.colors.text }}>SciPractice</Text>
          <Text style={{ fontSize: 12, color: theme.colors.textMuted, marginTop: 2 }}>v{version} · General Science Practice</Text>
        </View>

        {BULLETS.map(([icon, title, body]) => (
          <View key={title} style={{ flexDirection: "row", backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 16, padding: 16, marginBottom: 12 }}>
            <Text style={{ fontSize: 24, marginRight: 14 }}>{icon}</Text>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 14, fontWeight: "800", color: theme.colors.text }}>{title}</Text>
              <Text style={{ fontSize: 12.5, color: theme.colors.textMuted, marginTop: 4, lineHeight: 18 }}>{body}</Text>
            </View>
          </View>
        ))}

        <Pressable
          onPress={() => { haptic.light(); Linking.openURL("https://scipractice.netlify.app/"); }}
          style={[{
            marginTop: 8, backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border,
            borderRadius: 14, paddingVertical: 14, alignItems: "center",
          }, theme.shadowSm]}
        >
          <Text style={{ color: theme.colors.primary, fontWeight: "800", fontSize: 13 }}>Visit our website →</Text>
        </Pressable>

        <Text style={{ textAlign: "center", color: theme.colors.textFaint, fontSize: 11, marginTop: 20 }}>
          Made for science students everywhere. Practice smart, learn with confidence.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
