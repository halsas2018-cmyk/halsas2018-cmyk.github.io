import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SUBJECTS } from "../constants";
import { studyStorage } from "../storage/studyStorage";
import { hexToRgba, countSubtopics } from "./studyData";
import { useTheme } from "../theme";
import { ProgressRing } from "../components/ui";
import BannerAd from "../components/BannerAd";

export default function StudyHubScreen({ navigation }) {
  const theme = useTheme();
  const subjects = SUBJECTS.filter((s) => !s.comingSoon);
  const [stats, setStats] = useState({});

  useEffect(() => {
    studyStorage.getAll().then((all) => {
      const out = {};
      subjects.forEach((s) => {
        let done = 0;
        Object.keys(all).forEach((k) => {
          if (k.startsWith(`${s.id}::`) && all[k].completed) done++;
        });
        out[s.id] = { done, total: countSubtopics(s.id) };
      });
      setStats(out);
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.accentPurpleSoft} translucent={false} />

      <View style={{ backgroundColor: theme.colors.accentPurpleSoft, paddingTop: 30, paddingBottom: 24, paddingHorizontal: 20, alignItems: "center", overflow: "hidden" }}>
        <View style={{ position: "absolute", top: -50, left: -30, width: 150, height: 150, borderRadius: 75, backgroundColor: hexToRgba(theme.colors.accentPurple, 0.16) }} />
        <View style={{ position: "absolute", bottom: -60, right: -40, width: 170, height: 170, borderRadius: 85, backgroundColor: hexToRgba(theme.colors.success, 0.12) }} />
        <View style={{ alignItems: "center" }}>
          <View style={{ width: 64, height: 64, borderRadius: 20, backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: hexToRgba(theme.colors.accentPurple, 0.25), alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
            <Text style={{ fontSize: 32 }}>📚</Text>
          </View>
          <Text style={{ fontSize: 26, fontWeight: "800", color: theme.colors.text }}>Study Cards</Text>
          <Text style={{ fontSize: 13.5, color: theme.colors.textMuted, marginTop: 6, textAlign: "center", lineHeight: 20, maxWidth: 320 }}>
            Swipe through bite-size explanations. Pick up where you left off, anytime.
          </Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
        {subjects.map((sub) => {
          const st = stats[sub.id] || { done: 0, total: countSubtopics(sub.id) };
          const frac = st.total ? st.done / st.total : 0;
          return (
            <TouchableOpacity
              key={sub.id}
              activeOpacity={0.9}
              onPress={() => navigation.navigate("StudyTopics", { subjectId: sub.id })}
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: theme.colors.surface,
                borderWidth: 1,
                borderColor: theme.colors.border,
                borderRadius: 18,
                padding: 16,
                marginBottom: 14,
                shadowColor: sub.accent,
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.04,
                shadowRadius: 10,
                elevation: 2,
              }}
            >
              <View style={{ width: 52, height: 52, borderRadius: 14, backgroundColor: theme.colors.surfaceAlt, borderWidth: 1, borderColor: hexToRgba(sub.accent, 0.25), alignItems: "center", justifyContent: "center", marginRight: 14 }}>
                <Text style={{ fontSize: 26 }}>{sub.icon}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 17, fontWeight: "800", color: theme.colors.text, textTransform: "capitalize" }}>{sub.id}</Text>
                <Text style={{ fontSize: 12, color: theme.colors.textMuted, marginTop: 2 }}>
                  {st.done} / {st.total} subtopics completed
                </Text>
                <View style={{ marginTop: 8, alignItems: "center" }}>
                  <ProgressRing size={64} stroke={7} progress={frac} color={theme.colors.primary}>
                    <Text style={{ fontSize: 12, fontWeight: "800", color: theme.colors.text }}>{st.done}/{st.total}</Text>
                  </ProgressRing>
                </View>
              </View>
              <Text style={{ fontSize: 20, fontWeight: "700", color: sub.accent, marginLeft: 10 }}>›</Text>
            </TouchableOpacity>
          );
        })}

        <BannerAd />
      </ScrollView>
    </SafeAreaView>
  );
}
