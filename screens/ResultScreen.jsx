import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { quizStorage } from '../storage/quizStorage';
import { WHATSAPP_NUMBER } from '../constants';
import { useTheme, hexToRgba } from '../theme';
import { haptic } from '../haptic';
import { Confetti } from '../components/ui';
import { useAds } from '../components/AdProvider';
import BookingModal from '../components/BookingModal';

export default function ResultScreen({ route, navigation }) {
  const {
    score = 0,
    total = 0,
    topicId,
    subjectId = "chemistry",
    examMode = false,
    combined = false
  } = route.params || {};
  const theme = useTheme();
  const { maybeResultToTopics } = useAds();

  const [bookingVisible, setBookingVisible] = useState(false);
  const [studentName, setStudentName] = useState("");
  const [preferredTime, setPreferredTime] = useState("");

  const displayTotal = total > 0 ? total : 5;
  const percentage = displayTotal > 0 ? Math.round((score / displayTotal) * 100) : 0;
  const isPass = displayTotal > 0 ? score / displayTotal >= 0.6 : false;

  // Study Cards use the SUBJECTS `id` ("Chemistry"/"Biology"/"Physics"); getSubject
  // is case-insensitive, so a quiz subjectId like "chemistry" resolves fine. A
  // combined final exam has subjectId "Combined" (no single subject) — send those
  // to the study subject picker instead of a specific topic list.
  const studyableSubject = ["chemistry", "biology", "physics"].includes(
    (subjectId || "").toLowerCase()
  );

  function handleStudy() {
    if (studyableSubject) {
      // ResultScreen is in the root stack; StudyTopics is nested:
      // MainTabs (tab) -> StudyHub (tab) -> StudyStack -> StudyTopics.
      navigation.navigate('MainTabs', {
        screen: 'StudyHub',
        params: { screen: 'StudyTopics', params: { subjectId } },
      });
    } else {
      navigation.navigate('MainTabs', {
        screen: 'StudyHub',
        params: { screen: 'StudyHubScreen' },
      });
    }
  }

  useEffect(() => {
    if (topicId && displayTotal > 0) {
      quizStorage.saveResult(topicId, score, displayTotal);
    }
  }, []);

  function handleBookNow() {
    if (!studentName.trim() || !preferredTime.trim()) {
      alert("Please fill in your name and preferred time.");
      return;
    }
    const cleanSubject = subjectId ? subjectId.replace(/_/g, ' ').toUpperCase() : "CHEMISTRY";
    const cleanTopic = topicId ? topicId.replace(/_/g, ' ').toUpperCase() : cleanSubject;
    const msg = `Hello, I would like to book a ${cleanSubject} tutorial.\n\nName: ${studentName}\nTopic: ${cleanTopic}\nPreferred Time: ${preferredTime}\n\nPlease confirm availability and payment details.`;
    Linking.openURL(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`);
    setBookingVisible(false);
  }

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.bg }}>
      <SafeAreaView style={{ flex: 1 }} edges={['top', 'left', 'right']}>
        <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} />
        <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.contentContainer}>
          <BookingModal
            visible={bookingVisible}
            onClose={() => setBookingVisible(false)}
            bookingTopic={topicId ? topicId.replace(/_/g, ' ').toUpperCase() : "CHEMISTRY"}
            studentName={studentName}
            setStudentName={setStudentName}
            preferredTime={preferredTime}
            setPreferredTime={setPreferredTime}
            onBookNow={handleBookNow}
          />

          <Text style={[styles.mainTitle, { color: theme.colors.text }]}>Performance Summary</Text>
          <Text style={[styles.subTitle, { color: theme.colors.textMuted }]}>{examMode ? (combined ? "COMPLETE FINAL EXAM" : `${subjectId} FINAL EXAM`) : (topicId ? topicId.replace(/_/g, ' ').toUpperCase() : "QUIZ")}</Text>

          <View style={[styles.outerCircle, { backgroundColor: theme.colors.surface, borderColor: hexToRgba(theme.colors.primary, 0.15) }]}>
            <Text style={[styles.percentText, { color: theme.colors.text }]}>{percentage}%</Text>
            <Text style={[styles.fractionText, { color: theme.colors.textMuted }]}>{score} / {displayTotal} Correct</Text>
          </View>

          <Text style={[
            styles.statusBanner,
            percentage >= 70 ? { color: theme.colors.success } : { color: theme.colors.danger },
          ]}>
            {percentage >= 70
              ? "Great job! You have passed this topic section successfully."
              : "Keep reviewing! Review this topic to build your confidence."}
          </Text>

          <View style={styles.buttonStack}>
            {/* FIXED: Using replace to wipe the view stack state and re-initialize a fresh quiz set */}
            <TouchableOpacity
              style={[styles.translucentBlueBtn, { backgroundColor: theme.colors.accentBlueSoft, borderWidth: 1, borderColor: hexToRgba(theme.colors.accentBlue, 0.25) }]}
              onPress={() => {
                haptic.light();
                if (examMode) {
                  navigation.replace('ExamScreen', combined ? { combined: true } : { subjectId });
                } else if (topicId) {
                  navigation.replace('QuizScreen', { topicId, subjectId, refreshKey: Date.now() });
                } else {
                  navigation.goBack();
                }
              }}
            >
              <Text style={[styles.blueBtnText, { color: theme.colors.accentBlue }]}>Try Again</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.translucentIndigoBtn, { backgroundColor: theme.colors.accentPurpleSoft, borderWidth: 1, borderColor: hexToRgba(theme.colors.accentPurple, 0.25) }]} onPress={() => { haptic.light(); handleStudy(); }}>
              <Text style={[styles.indigoBtnText, { color: theme.colors.accentPurple }]}>📚 Study This Subject</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.translucentGreenBtn, { backgroundColor: theme.colors.primarySoft, borderWidth: 1, borderColor: hexToRgba(theme.colors.primary, 0.25) }]} onPress={() => { haptic.light(); setBookingVisible(true); }}>
              <Text style={[styles.greenBtnText, { color: theme.colors.primary }]}>Book a Private Tutor</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.translucentWhiteBtn, { backgroundColor: theme.colors.surfaceAlt, borderWidth: 1, borderColor: theme.colors.border }]}
              onPress={() => {
                haptic.light();
                if (examMode) {
                  navigation.navigate('MainTabs', { screen: 'ExamsHub' });
                } else {
                  maybeResultToTopics(() => navigation.navigate('TopicsScreen', { subjectId }));
                }
              }}
            >
              <Text style={[styles.whiteBtnText, { color: theme.colors.textMuted }]}>{examMode ? "Back to Exams" : "Back to Topics List"}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
      {/* Celebration overlay — only fires on a passing score */}
      <Confetti active={isPass} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  contentContainer: { alignItems: 'center', padding: 24, paddingTop: 40 },
  mainTitle: { fontSize: 26, fontWeight: 'bold', color: '#0f172a', marginTop: 20 },
  subTitle: { fontSize: 15, color: '#64748b', marginBottom: 24 },
  outerCircle: { width: 150, height: 150, borderRadius: 75, borderWidth: 5, borderColor: 'rgba(37, 99, 235, 0.1)', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', marginBottom: 24 },
  percentText: { fontSize: 36, fontWeight: 'bold', color: '#0f172a' },
  fractionText: { fontSize: 13, color: '#64748b', marginTop: 2 },
  statusBanner: { fontSize: 15, fontWeight: '600', textAlign: 'center', paddingHorizontal: 16, marginBottom: 30, lineHeight: 22 },
  successText: { color: '#16a34a' },
  failText: { color: '#dc2626' },
  buttonStack: { width: '100%', gap: 12 },
  translucentBlueBtn: { backgroundColor: 'rgba(37, 99, 235, 0.12)', width: '100%', paddingVertical: 15, borderRadius: 12, alignItems: 'center' },
  blueBtnText: { color: '#2563eb', fontSize: 16, fontWeight: 'bold' },
  translucentIndigoBtn: { backgroundColor: 'rgba(99, 102, 241, 0.12)', width: '100%', paddingVertical: 15, borderRadius: 12, alignItems: 'center' },
  indigoBtnText: { color: '#6366f1', fontSize: 16, fontWeight: 'bold' },
  translucentGreenBtn: { backgroundColor: 'rgba(22, 163, 74, 0.12)', width: '100%', paddingVertical: 15, borderRadius: 12, alignItems: 'center' },
  greenBtnText: { color: '#16a34a', fontSize: 16, fontWeight: 'bold' },
  translucentWhiteBtn: { backgroundColor: 'rgba(0, 0, 0, 0.04)', width: '100%', paddingVertical: 15, borderRadius: 12, alignItems: 'center' },
  whiteBtnText: { color: '#475569', fontSize: 16, fontWeight: 'bold' }
});
