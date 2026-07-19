import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getSubject, hexToRgba } from "./studyData";
import { studyStorage } from "../storage/studyStorage";
import { useTheme } from "../theme";
import BannerAd from "../components/BannerAd";
import { withInlineBanner } from "../components/inlineAd";

export default function StudySubtopicsScreen({ route, navigation }) {
  const theme = useTheme();
  const { subjectId, topicId, topicName } = route.params || {};
  const subject = getSubject(subjectId);
  const accent = subject.accent || "#16a34a";
  const topic = (subject.topics || []).find((t) => t.id === topicId) || {};
  const subtopics = topic.subtopics || [];
  const [progress, setProgress] = useState({});

  useEffect(() => {
    studyStorage.getAll().then((all) => {
      const m = {};
      subtopics.forEach((st) => {
        m[st] = all[`${subjectId}::${topicId}::${st}`] || { cardIndex: 0, completed: false };
      });
      setProgress(m);
    });
  }, [subjectId, topicId]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.surface} translucent={false} />

      <View style={{ backgroundColor: theme.colors.surface, paddingTop: 16, paddingBottom: 16, paddingHorizontal: 16, borderBottomWidth: 1, borderBottomColor: hexToRgba(accent, 0.12) }}>
        <TouchableOpacity onPress={() => navigation.navigate("StudyTopics", { subjectId })} style={{ alignSelf: "flex-start", marginBottom: 8 }}>
          <Text style={{ color: theme.colors.textMuted, fontWeight: "700", fontSize: 13 }}>‹ {subjectId} topics</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: "800", color: theme.colors.text }}>{topicName}</Text>
        <Text style={{ fontSize: 12, color: theme.colors.textMuted, marginTop: 2 }}>{subtopics.length} subtopics · swipe through the cards</Text>
      </View>

      {subtopics.length === 0 ? (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 32 }}>
          <View style={{ backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: theme.radius.lg, padding: 28, alignItems: "center", width: "100%", ...theme.shadowSm }}>
            <Text style={{ fontSize: 48, marginBottom: 12 }}>🌱</Text>
            <Text style={{ fontSize: 17, fontWeight: "800", color: theme.colors.text, textAlign: "center" }}>Nothing here yet</Text>
            <Text style={{ fontSize: 13.5, color: theme.colors.textMuted, textAlign: "center", marginTop: 6, lineHeight: 20 }}>
              Study cards for this topic are on the way. Check back soon!
            </Text>
          </View>
        </View>
      ) : (
        <FlatList
          data={withInlineBanner(subtopics, 4)}
          keyExtractor={(item) => (typeof item === "string" ? item : item.id)}
          contentContainerStyle={{ padding: 16, paddingBottom: 40 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            if (item && item.__bannerAd) {
              return (
                <View key={item.id} style={{ marginVertical: 8 }}>
                  <BannerAd />
                </View>
              );
            }
            const p = progress[item] || { cardIndex: 0, completed: false };
            let badge, badgeColor;
            if (p.completed) { badge = "✓ Done"; badgeColor = theme.colors.success; }
            else if (p.cardIndex > 0) { badge = `↺ Card ${p.cardIndex + 1}+`; badgeColor = accent; }
            else { badge = "New"; badgeColor = theme.colors.textFaint; }
            return (
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.navigate("StudyCard", { subjectId, topicId, subtopic: item, topicName })}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: theme.colors.surface,
                  borderWidth: 1,
                  borderColor: p.completed ? hexToRgba(theme.colors.success, 0.3) : theme.colors.border,
                  borderRadius: 14,
                  padding: 15,
                  marginBottom: 10,
                }}
              >
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 15, fontWeight: "700", color: theme.colors.text }}>{item}</Text>
                </View>
                <View style={{ backgroundColor: hexToRgba(badgeColor, 0.12), paddingVertical: 4, paddingHorizontal: 10, borderRadius: 12 }}>
                  <Text style={{ fontSize: 11.5, fontWeight: "700", color: badgeColor }}>{badge}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </SafeAreaView>
  );
}
