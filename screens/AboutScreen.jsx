import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StatusBar, Linking, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Constants from "expo-constants";
import { useTheme, hexToRgba } from "../theme";
import { haptic } from "../haptic";
import { Pressable } from "../components/ui";
import { notificationStorage } from "../storage/notificationStorage";
import { applySettings } from "../components/NotificationManager";

const BULLETS = [
  ["📚", "Built from the standard science curriculum", "Every topic, subtopic and question follows the core secondary-school general science syllabus."],
  ["🧪", "Virtual labs that you drive", "26 interactive simulations — the student does the work: pick apparatus, run the reaction, read the result."],
  ["🃏", "Study cards written like a textbook", "313 subtopics across Chemistry, Biology and Physics, each a short, rich lesson you can swipe through."],
  ["📴", "100% offline", "All content lives on your phone. No data needed to practice — open it on the bus, in the library, anywhere."],
];

export default function AboutScreen({ navigation }) {
  const theme = useTheme();
  const version = (Constants.expoConfig && Constants.expoConfig.version) || Constants.manifest?.version || "1.0.0";
  const [reminderOn, setReminderOn] = useState(false);

  useEffect(() => {
    notificationStorage.getSettings().then((s) => setReminderOn(s.enabled));
  }, []);

  async function toggleReminder(value) {
    haptic.light();
    const settings = await notificationStorage.getSettings();
    const next = { ...settings, enabled: value };
    if (value) {
      const ok = await applySettings(next);
      setReminderOn(ok);
    } else {
      await applySettings(next);
      setReminderOn(false);
    }
  }

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

        {/* Appearance: System / Light / Dark. Bound to theme.setMode. */}
        <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 16, padding: 16, marginBottom: 16 }}>
          <Text style={{ fontSize: 13, fontWeight: "800", color: theme.colors.textMuted, letterSpacing: 0.6, marginBottom: 10 }}>APPEARANCE</Text>
          <View style={{ flexDirection: "row", gap: 8 }}>
            {[
              { k: "system", label: "System" },
              { k: "light", label: "Light" },
              { k: "dark", label: "Dark" },
            ].map((opt) => {
              const active = theme.mode === opt.k;
              return (
                <Pressable
                  key={opt.k}
                  onPress={() => { haptic.light(); theme.setMode(opt.k); }}
                  style={{
                    flex: 1, alignItems: "center", paddingVertical: 10, borderRadius: 12,
                    backgroundColor: active ? theme.colors.primary : theme.colors.surfaceAlt,
                    borderWidth: 1, borderColor: active ? theme.colors.primary : theme.colors.border,
                  }}
                >
                  <Text style={{ color: active ? theme.colors.onPrimary : theme.colors.text, fontWeight: "800", fontSize: 13 }}>{opt.label}</Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        {/* Daily study reminder — schedules a local notification at 7 PM. */}
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 16, padding: 16, marginBottom: 16 }}>
          <View style={{ flex: 1, marginRight: 12 }}>
            <Text style={{ fontSize: 14, fontWeight: "800", color: theme.colors.text }}>Daily study reminder</Text>
            <Text style={{ fontSize: 12, color: theme.colors.textMuted, marginTop: 2 }}>A nudge at 7:00 PM to keep your streak alive</Text>
          </View>
          <Switch
            value={reminderOn}
            onValueChange={toggleReminder}
            thumbColor={reminderOn ? theme.colors.primary : "#cbd5e1"}
            trackColor={{ false: theme.colors.border, true: theme.colors.primarySoft }}
            ios_backgroundColor={theme.colors.border}
          />
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
