import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Linking,
  Animated,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import s from "../styles";
import { SUBJECTS, WHATSAPP_NUMBER, YOUTUBE_URL, WEBSITE_URL } from "../constants";
import BookingModal from "../components/BookingModal";
import { useTheme, hexToRgba } from "../theme";
import { haptic } from "../haptic";
import { Pressable } from "../components/ui";
import { streakStorage } from "../storage/streakStorage";
import { studyStorage } from "../storage/studyStorage";
import { quizStorage } from "../storage/quizStorage";
import { labStorage } from "../storage/labStorage";
import { recommendNext } from "../study/studyData";

function PremiumPressable({ onPress, style, children, disabled }) {
  const scaleValue = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    if (disabled) return;
    Animated.spring(scaleValue, {
      toValue: 0.97,
      useNativeDriver: true,
      tension: 100,
      friction: 6,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
      tension: 100,
      friction: 6,
    }).start();
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      disabled={disabled}
      style={{ width: "100%" }}
    >
      <Animated.View style={[style, { transform: [{ scale: scaleValue }] }]}>
        {children}
      </Animated.View>
    </TouchableOpacity>
  );
}

function topicNameOf(subjectId, topicId) {
  const sub = SUBJECTS.find((x) => x.id.toLowerCase() === (subjectId || "").toLowerCase());
  const t = sub && (sub.topics || []).find((x) => x.id === topicId);
  return t ? t.name : subjectId;
}

export default function HomeScreen({ navigation }) {
  const theme = useTheme();
  const [bookingVisible, setBookingVisible] = useState(false);
  const [bookingTopic, setBookingTopic] = useState("");
  const [studentName, setStudentName] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [streak, setStreak] = useState(0);
  const [stats, setStats] = useState({ questions: 0, labs: 0 });
  const [continueEntry, setContinueEntry] = useState(null);
  const [recommended, setRecommended] = useState(null);

  function openBooking(topicName) {
    setBookingTopic(topicName);
    setStudentName("");
    setPreferredTime("");
    setBookingVisible(true);
  }

  function handleBookNow() {
    if (!studentName.trim() || !preferredTime.trim()) {
      alert("Please fill in your name and preferred time.");
      return;
    }
    const msg = `Hello, I would like to book a Chemistry tutorial.\n\nName: ${studentName}\nTopic: ${bookingTopic}\nPreferred Time: ${preferredTime}\n\nPlease confirm availability and payment details.`;
    Linking.openURL(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`);
    setBookingVisible(false);
  }

  useEffect(() => {
    streakStorage.getState().then((st) => setStreak(st.count || 0));
    quizStorage.getAllResults().then((records) => {
      const q = (records || []).reduce((n, r) => n + (r.total || 0), 0);
      labStorage.getAllReports().then((reps) => {
        setStats({ questions: q, labs: (reps || []).length });
      });
    });
    studyStorage.getAll().then((all) => {
      let best = null;
      Object.entries(all || {}).forEach(([key, val]) => {
        if (val && !val.completed) {
          if (
            !best ||
            (val.updatedAt || 0) > (best.v.updatedAt || 0) ||
            ((val.updatedAt || 0) === (best.v.updatedAt || 0) &&
              (val.cardIndex || 0) > (best.v.cardIndex || 0))
          ) {
            const parts = key.split("::");
            best = {
              v: val,
              subjectId: parts[0],
              topicId: parts[1],
              subtopic: parts.slice(2).join("::"),
            };
          }
        }
      });
      setContinueEntry(best);
    });
    recommendNext().then((r) => setRecommended(r));
  }, []);

  const cardShadow = {
    shadowColor: theme.colors.primary,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 2,
  };

  return (
    // FIXED: Imported from react-native-safe-area-context, removed manual padding, added clear top edge targets
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={['top', 'left', 'right']}>
      <StatusBar
        barStyle={theme.isDark ? "light-content" : "dark-content"}
        backgroundColor={theme.colors.primarySoft}
        translucent={false}
      />

      <BookingModal
        visible={bookingVisible}
        onClose={() => setBookingVisible(false)}
        bookingTopic={bookingTopic}
        studentName={studentName}
        setStudentName={setStudentName}
        preferredTime={preferredTime}
        setPreferredTime={setPreferredTime}
        onBookNow={handleBookNow}
      />

      {/* Static home header — pinned at the top so content scrolls under it.
          Distinct horizontal layout (badge left, text right) so it isn't a
          copy of the centred Final Exams header. */}
      <View
        style={{ backgroundColor: theme.colors.primarySoft, paddingTop: 18, paddingBottom: 16, paddingHorizontal: 16, borderBottomWidth: 1, borderBottomColor: hexToRgba(theme.colors.primary, 0.18), flexDirection: "row", alignItems: "center", overflow: "hidden" }}
      >
        <View style={{ width: 56, height: 56, borderRadius: 14, backgroundColor: hexToRgba(theme.colors.primary, 0.14), borderWidth: 1, borderColor: hexToRgba(theme.colors.primary, 0.25), alignItems: "center", justifyContent: "center", marginRight: 14 }}>
          <Text style={{ fontSize: 28 }}>⚗️</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 22, fontWeight: "800", color: theme.colors.primary }}>SciPractice</Text>
          <Text style={{ fontSize: 12.5, color: theme.colors.textMuted, marginTop: 2 }}>Science Practice · Exam Prep</Text>
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 6, gap: 8, flexWrap: "wrap" }}>
            <View style={{ backgroundColor: hexToRgba(theme.colors.primary, 0.12), paddingVertical: 3, paddingHorizontal: 10, borderRadius: 20, borderWidth: 1, borderColor: hexToRgba(theme.colors.primary, 0.2) }}>
              <Text style={{ color: theme.colors.primaryDark, fontWeight: "700", fontSize: 11 }}>Free Practice App</Text>
            </View>
            {streak > 0 ? (
              <View style={{ backgroundColor: theme.colors.starSoft, paddingVertical: 3, paddingHorizontal: 10, borderRadius: 20 }}>
                <Text style={{ color: theme.colors.star, fontWeight: "700", fontSize: 11 }}>🔥 {streak}-day streak</Text>
              </View>
            ) : null}
          </View>
        </View>
      </View>

      <ScrollView style={s.root} contentContainerStyle={{ paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
        {/* LIVE STATS — circular bubbles */}
        <View style={{ flexDirection: "row", justifyContent: "space-around", paddingHorizontal: 16, marginTop: 18 }}>
          {[
            { val: stats.questions, label: "Questions", emoji: "✏️", color: theme.colors.accentBlue },
            { val: stats.labs, label: "Labs", emoji: "⚗️", color: theme.colors.primary },
            { val: streak, label: "Day streak", emoji: "🔥", color: theme.colors.star },
          ].map((b, i) => (
            <View key={i} style={{ alignItems: "center", width: "30%" }}>
              <View
                style={{
                  width: 66,
                  height: 66,
                  borderRadius: 33,
                  backgroundColor: theme.colors.surface,
                  borderWidth: 1.5,
                  borderColor: hexToRgba(b.color, 0.35),
                  alignItems: "center",
                  justifyContent: "center",
                  ...cardShadow,
                }}
              >
                <Text style={{ fontSize: 13, marginBottom: 1 }}>{b.emoji}</Text>
                <Text style={{ fontSize: 19, fontWeight: "800", color: b.color }}>{b.val}</Text>
              </View>
              <Text style={{ fontSize: 11, color: theme.colors.textMuted, marginTop: 6, textAlign: "center" }}>{b.label}</Text>
            </View>
          ))}
        </View>

        {/* CONTINUE WHERE YOU LEFT OFF */}
        {continueEntry ? (
          <View style={{ paddingHorizontal: 16, marginTop: 14 }}>
            <Pressable
              onPress={() => {
                haptic.light();
                navigation.navigate("MainTabs", {
                  screen: "StudyHub",
                  params: {
                    screen: "StudySubtopics",
                    params: { subjectId: continueEntry.subjectId, topicId: continueEntry.topicId },
                  },
                });
              }}
              style={[
                cardShadow,
                {
                  backgroundColor: theme.colors.surface,
                  borderWidth: 1,
                  borderColor: theme.colors.border,
                  borderRadius: theme.radius.lg,
                  padding: 14,
                  flexDirection: "row",
                  alignItems: "center",
                },
              ]}
            >
              <View style={{ width: 46, height: 46, borderRadius: 14, backgroundColor: theme.colors.primarySoft, alignItems: "center", justifyContent: "center", marginRight: 14 }}>
                <Text style={{ fontSize: 22 }}>▶️</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 10.5, fontWeight: "800", color: theme.colors.primary, letterSpacing: 0.6 }}>CONTINUE LEARNING</Text>
                <Text style={{ fontSize: 16, fontWeight: "800", color: theme.colors.text, marginTop: 2 }}>
                  {topicNameOf(continueEntry.subjectId, continueEntry.topicId)}
                </Text>
                <Text style={{ fontSize: 12, color: theme.colors.textMuted, marginTop: 1 }}>
                  {continueEntry.subtopic} · pick up where you stopped
                </Text>
              </View>
              <View style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: theme.colors.primary, alignItems: "center", justifyContent: "center" }}>
                <Text style={{ color: theme.colors.onPrimary, fontSize: 16, fontWeight: "800" }}>›</Text>
              </View>
            </Pressable>
          </View>
        ) : null}

        {/* RECOMMENDED NEXT */}
        {recommended ? (
          <View style={{ paddingHorizontal: 16, marginTop: 14 }}>
            <View
              style={[
                cardShadow,
                {
                  backgroundColor: theme.colors.surface,
                  borderWidth: 1,
                  borderColor: theme.colors.border,
                  borderRadius: theme.radius.lg,
                  padding: 16,
                },
              ]}
            >
              <Text style={{ fontSize: 11, fontWeight: "800", color: theme.colors.textMuted, letterSpacing: 0.6 }}>RECOMMENDED NEXT</Text>
              <Text style={{ fontSize: 17, fontWeight: "800", color: theme.colors.text, marginTop: 6 }}>
                {topicNameOf(recommended.subjectId, recommended.topicId)}
              </Text>
              <Text style={{ fontSize: 12.5, color: theme.colors.textMuted, marginTop: 2 }}>Based on your syllabus progress</Text>
              <Pressable
                onPress={() => {
                  haptic.light();
                  navigation.navigate("MainTabs", {
                    screen: "StudyHub",
                    params: {
                      screen: "StudySubtopics",
                      params: { subjectId: recommended.subjectId, topicId: recommended.topicId },
                    },
                  });
                }}
                style={{
                  backgroundColor: theme.colors.primary,
                  paddingVertical: 11,
                  paddingHorizontal: 22,
                  borderRadius: theme.radius.md,
                  alignSelf: "flex-start",
                  marginTop: 12,
                  ...theme.shadowSm,
                }}
              >
                <Text style={{ color: theme.colors.onPrimary, fontWeight: "800", fontSize: 13 }}>Start →</Text>
              </Pressable>
            </View>
          </View>
        ) : null}

        <Text style={[s.sectionLabel, { letterSpacing: 0.8, fontWeight: "700", opacity: 0.7, paddingHorizontal: 16, marginTop: 22 }]}>CHOOSE A SUBJECT</Text>

        <View style={{ paddingHorizontal: 16 }}>
          {SUBJECTS.map((sub) => (
            <PremiumPressable
              key={sub.id}
              disabled={sub.comingSoon}
              onPress={() => {
                haptic.light();
                navigation.navigate("TopicsScreen", { subjectId: sub.id });
              }}
              hitSlop={{ top: 6, bottom: 6, left: 6, right: 6 }}
              style={[
                s.subjectCard,
                cardShadow,
                {
                  borderColor: theme.colors.border,
                  backgroundColor: theme.colors.surface,
                  opacity: sub.comingSoon ? 0.6 : 1,
                  marginHorizontal: 0,
                  marginBottom: 12,
                },
              ]}
            >
              <View style={s.subjectLeft}>
                <Text style={s.subjectIcon}>{sub.icon}</Text>
                <View>
                  <Text style={[s.subjectName, { color: sub.accent, textTransform: "capitalize", fontWeight: "700" }]}>{sub.id}</Text>
                  <Text style={s.subjectDesc}>
                    {sub.comingSoon ? "Coming Soon" : `${sub.topics.length} topics · Exam syllabus`}
                  </Text>
                </View>
              </View>
              {sub.comingSoon ? (
                <View style={[s.csPill, { backgroundColor: sub.border }]}>
                  <Text style={{ color: sub.accent, fontSize: 11, fontWeight: "700" }}>Soon</Text>
                </View>
              ) : (
                <Text style={{ color: sub.accent, fontSize: 20, fontWeight: "700" }}>→</Text>
              )}
            </PremiumPressable>
          ))}
        </View>

        <View style={{ paddingHorizontal: 16, marginTop: 4 }}>
          <PremiumPressable
            style={[s.tutorBanner, cardShadow, { marginHorizontal: 0, backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border }]}
            onPress={() => { haptic.light(); openBooking("General Chemistry"); }}
          >
            <View style={s.tutorTextBlock}>
              <Text style={s.tutorTitle}>📚 1-on-1 Tutorial</Text>
              <Text style={[s.tutorDesc, { lineHeight: 18, marginTop: 2, color: theme.colors.textMuted }]}>Book a live session with a Chemistry teacher</Text>
            </View>
            <View style={s.tutorBtn}>
              <Text style={s.btnText}>Book Now</Text>
            </View>
          </PremiumPressable>
        </View>

        <View style={{ flexDirection: "row", paddingHorizontal: 16, marginTop: 12, marginBottom: 4, gap: 10 }}>
          <View style={{ flex: 1 }}>
            <PremiumPressable
              style={[
                { flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: theme.colors.dangerSoft, borderWidth: 1, borderColor: hexToRgba(theme.colors.danger, 0.3), borderRadius: 14, padding: 14 },
                cardShadow
              ]}
              onPress={() => { haptic.light(); Linking.openURL(YOUTUBE_URL); }}
            >
              <Text style={{ fontSize: 18, marginRight: 8 }}>📺</Text>
              <Text style={{ fontSize: 13, fontWeight: "700", color: theme.colors.danger }}>Watch Tutorials</Text>
            </PremiumPressable>
          </View>

          <View style={{ flex: 1 }}>
            <PremiumPressable
              style={[
                { flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: theme.colors.accentBlueSoft, borderWidth: 1, borderColor: hexToRgba(theme.colors.accentBlue, 0.3), borderRadius: 14, padding: 14 },
                cardShadow
              ]}
              onPress={() => { haptic.light(); Linking.openURL(WEBSITE_URL); }}
            >
              <Text style={{ fontSize: 18, marginRight: 8 }}>🌐</Text>
              <Text style={{ fontSize: 13, fontWeight: "700", color: theme.colors.accentBlue }}>Our Website</Text>
            </PremiumPressable>
          </View>
        </View>

        <View style={{ paddingHorizontal: 16, marginTop: 12 }}>
          <PremiumPressable
            style={[
              {
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: theme.colors.accentBlueSoft,
                borderWidth: 1,
                borderColor: hexToRgba(theme.colors.accentBlue, 0.3),
                borderRadius: 14,
                padding: 14,
              },
              cardShadow
            ]}
            onPress={() => { haptic.light(); navigation.navigate("HistoryScreen"); }}
          >
            <Text style={{ fontSize: 16, marginRight: 8 }}>📊</Text>
            <Text style={{ fontSize: 13, fontWeight: "700", color: theme.colors.accentBlue }}>Review Previous Results</Text>
          </PremiumPressable>
        </View>

        {/* About SciPractice */}
        <View style={{ paddingHorizontal: 16, marginTop: 20, alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.navigate("AboutScreen")}>
            <Text style={{ fontSize: 12.5, color: theme.colors.textMuted, fontWeight: "600" }}>About SciPractice</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
