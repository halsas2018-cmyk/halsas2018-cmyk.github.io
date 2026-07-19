import React from "react";
import { View, Text, ScrollView, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SUBJECTS } from "../constants";
import { useTheme, hexToRgba } from "../theme";
import { useAds } from "../components/AdProvider";
import BannerAd from "../components/BannerAd";

// Exam size per subject (mirrors ExamScreen's EXAM_PRESETS for the info line).
const EXAM_INFO = {
  Chemistry: { count: 45, minutes: 30 },
  Biology: { count: 45, minutes: 30 },
  Physics: { count: 45, minutes: 30 },
};

export default function ExamsHubScreen({ navigation }) {
  const theme = useTheme();
  const { showExamLaunch } = useAds();
  const subjects = SUBJECTS.filter((s) => !s.comingSoon);

  const launch = (params) => showExamLaunch(() => navigation.navigate("ExamScreen", params));

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />

      {/* Beautified, centered header with soft translucent colour washes */}
      <View style={{ backgroundColor: theme.colors.accentPurpleSoft, paddingTop: 30, paddingBottom: 24, paddingHorizontal: 20, alignItems: "center", overflow: "hidden" }}>
        <View style={{ position: "absolute", top: -50, left: -30, width: 150, height: 150, borderRadius: 75, backgroundColor: hexToRgba(theme.colors.accentPurple, 0.16) }} />
        <View style={{ position: "absolute", bottom: -60, right: -40, width: 170, height: 170, borderRadius: 85, backgroundColor: hexToRgba(theme.colors.primary, 0.12) }} />

        <View style={{ alignItems: "center" }}>
          <View style={{ width: 64, height: 64, borderRadius: 32, backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: hexToRgba(theme.colors.accentPurple, 0.20), alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
            <Text style={{ fontSize: 32 }}>🎓</Text>
          </View>
          <Text style={{ fontSize: 26, fontWeight: "800", color: theme.colors.text, textAlign: "center" }}>Final Exams</Text>
          <Text style={{ fontSize: 13.5, color: theme.colors.textMuted, marginTop: 6, textAlign: "center", lineHeight: 20, maxWidth: 320 }}>
            Full-length syllabus mock papers. Timed, across every topic — just like the real thing.
          </Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
        {/* Combined all-subjects exam — translucent indigo treatment */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: theme.colors.accentPurpleSoft,
            borderWidth: 1,
            borderColor: hexToRgba(theme.colors.accentPurple, 0.35),
            borderRadius: 18,
            padding: 16,
            marginBottom: 14,
          }}
        >
          <View style={{
            width: 56,
            height: 56,
            borderRadius: 16,
            backgroundColor: hexToRgba(theme.colors.accentPurple, 0.16),
            alignItems: "center",
            justifyContent: "center",
            marginRight: 14,
          }}>
            <Text style={{ fontSize: 28 }}>🏆</Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 17, fontWeight: "800", color: theme.colors.accentPurple }}>Complete Final Exam</Text>
            <Text style={{ fontSize: 12.5, color: theme.colors.textMuted, marginTop: 3, lineHeight: 17 }}>
              120 questions · 60 min · all 3 subjects (40 each)
            </Text>
          </View>

          <View
            onTouchEnd={() => launch({ combined: true })}
            style={{
              backgroundColor: hexToRgba(theme.colors.accentPurple, 0.16),
              borderRadius: 12,
              paddingVertical: 8,
              paddingHorizontal: 14,
            }}
          >
            <Text style={{ color: theme.colors.accentPurple, fontWeight: "800", fontSize: 14 }}>Start →</Text>
          </View>
        </View>

        {subjects.map((sub) => {
          const info = EXAM_INFO[sub.id] || { count: 45, minutes: 30 };
          return (
            <View
              key={sub.id}
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: theme.colors.surface,
                borderWidth: 1,
                borderColor: sub.border,
                borderRadius: 18,
                padding: 16,
                marginBottom: 14,
                elevation: 2,
              }}
            >
              <View style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                backgroundColor: sub.light,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 14,
              }}>
                <Text style={{ fontSize: 28 }}>{sub.icon}</Text>
              </View>

              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 17, fontWeight: "800", color: theme.colors.text, textTransform: "capitalize" }}>
                  {sub.id}
                </Text>
                <Text style={{ fontSize: 12.5, color: theme.colors.textMuted, marginTop: 3, lineHeight: 17 }}>
                  {info.count} questions · {info.minutes} min · {sub.topics.length} topics
                </Text>
              </View>

              <View
                onTouchEnd={() => launch({ subjectId: sub.id })}
                style={{
                  backgroundColor: sub.light,
                  borderWidth: 1,
                  borderColor: sub.border,
                  borderRadius: 12,
                  paddingVertical: 8,
                  paddingHorizontal: 14,
                }}
              >
                <Text style={{ color: sub.accent, fontWeight: "800", fontSize: 14 }}>Start →</Text>
              </View>
            </View>
          );
        })}

        <View style={{ marginTop: 8, backgroundColor: theme.colors.accentBlueSoft, borderWidth: 1, borderColor: hexToRgba(theme.colors.accentBlue, 0.25), borderRadius: 14, padding: 14 }}>
          <Text style={{ fontSize: 12.5, color: theme.colors.accentBlue, fontWeight: "600", lineHeight: 18 }}>
            Tip: the exam is timed. If the clock runs out, your answers so far are submitted automatically — so keep moving and trust your first instinct.
          </Text>
        </View>

        <BannerAd />
      </ScrollView>
    </SafeAreaView>
  );
}
