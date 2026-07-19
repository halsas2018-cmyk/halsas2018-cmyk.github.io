import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getSubject, hexToRgba } from "./studyData";
import { studyStorage } from "../storage/studyStorage";
import { useTheme } from "../theme";
import BannerAd from "../components/BannerAd";
import { withInlineBanner } from "../components/inlineAd";

function ProgressTrack({ value, color }) {
  return (
    <View style={{ height: 6, borderRadius: 3, backgroundColor: hexToRgba(color, 0.14), overflow: "hidden" }}>
      <View style={{ height: "100%", borderRadius: 3, backgroundColor: color, width: `${Math.min(100, Math.max(0, value * 100))}%` }} />
    </View>
  );
}

export default function StudyTopicsScreen({ route, navigation }) {
  const theme = useTheme();
  const { subjectId } = route.params || { subjectId: "Chemistry" };
  const subject = getSubject(subjectId);
  const accent = subject.accent || "#16a34a";
  const [doneMap, setDoneMap] = useState({});

  useEffect(() => {
    studyStorage.getAll().then((all) => {
      const m = {};
      subject.topics.forEach((t) => {
        let done = 0;
        (t.subtopics || []).forEach((st) => {
          if (all[`${subjectId}::${t.id}::${st}`]?.completed) done++;
        });
        m[t.id] = done;
      });
      setDoneMap(m);
    });
  }, [subjectId]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.surface} translucent={false} />

      <View style={{ backgroundColor: theme.colors.surface, paddingTop: 16, paddingBottom: 16, paddingHorizontal: 16, borderBottomWidth: 1, borderBottomColor: hexToRgba(accent, 0.12) }}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ alignSelf: "flex-start", marginBottom: 8 }}>
          <Text style={{ color: theme.colors.textMuted, fontWeight: "700", fontSize: 13 }}>‹ All subjects</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 26, marginRight: 10 }}>{subject.icon}</Text>
          <Text style={{ fontSize: 22, fontWeight: "800", color: theme.colors.text, textTransform: "capitalize" }}>{subjectId} topics</Text>
        </View>
      </View>

      <FlatList
        data={withInlineBanner(subject.topics, 4)}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          if (item.__bannerAd) {
            return (
              <View key={item.id} style={{ marginVertical: 8 }}>
                <BannerAd />
              </View>
            );
          }
          const total = item.subtopics ? item.subtopics.length : 1;
          const done = doneMap[item.id] || 0;
          const frac = total ? done / total : 0;
          const started = done > 0 && done < total;
          return (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigation.navigate("StudySubtopics", { subjectId, topicId: item.id, topicName: item.name })}
              style={{
                backgroundColor: theme.colors.surface,
                borderWidth: 1,
                borderColor: theme.colors.border,
                borderRadius: 16,
                padding: 16,
                marginBottom: 12,
                shadowColor: accent,
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.03,
                shadowRadius: 8,
                elevation: 1,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
                <Text style={{ fontSize: 15, fontWeight: "800", color: accent, marginRight: 10 }}>{String(index + 1).padStart(2, "0")}</Text>
                <Text style={{ flex: 1, fontSize: 15, fontWeight: "700", color: theme.colors.text }}>{item.name}</Text>
                {done === total ? (
                  <Text style={{ fontSize: 12, fontWeight: "700", color: theme.colors.success }}>✓ Done</Text>
                ) : started ? (
                  <Text style={{ fontSize: 12, fontWeight: "700", color: accent }}>↺ Resume</Text>
                ) : null}
              </View>
              <ProgressTrack value={frac} color={accent} />
              <Text style={{ fontSize: 11.5, color: theme.colors.textFaint, marginTop: 6 }}>{done} / {total} subtopics</Text>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}
