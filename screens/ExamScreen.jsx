import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme, hexToRgba } from "../theme";

// Lazy per-subject question bank — mirrors QuizScreen's loader so we never pull
// the whole ~5,900-question bank into memory at app startup. Metro only allows
// lazy `require` with a STATIC string literal, hence the thunk wrappers.
const SUBJECT_QUESTION_MODULES = {
  chemistry: () => require("../questions/chemistry/index").default,
  biology: () => require("../questions/biology/index").default,
  physics: () => require("../questions/physics/index").default,
};

const _banks = {};
function getQUESTIONS(subjectId) {
  const key = (subjectId || "chemistry").toLowerCase();
  if (!_banks[key]) {
    const loader = SUBJECT_QUESTION_MODULES[key];
    _banks[key] = loader ? loader() : {};
  }
  return _banks[key];
}

// Pull every question for a subject into a flat array.
function collectSubject(subjectId) {
  const bank = getQUESTIONS(subjectId);
  const all = [];
  Object.keys(bank).forEach((k) => {
    (bank[k] || []).forEach((q) => all.push(q));
  });
  return all;
}

function shuffle(arr) {
  return [...arr].sort(() => 0.5 - Math.random());
}

// Per-subject exam presets.
const EXAM_PRESETS = {
  chemistry: { count: 45, minutes: 30, accent: "#16a34a", icon: "👨🏽‍🔬" },
  biology: { count: 45, minutes: 30, accent: "#2563eb", icon: "🧬" },
  physics: { count: 45, minutes: 30, accent: "#7c3aed", icon: "⚡" },
};

// The all-in-one "Complete Final Exam": 40 questions from each of the 3
// subjects, for 120 in total, on a 60-minute clock.
const COMBINED_PRESET = { count: 120, minutes: 60, accent: "#6366f1", icon: "🏆" };
const COMBINED_SUBJECTS = ["chemistry", "biology", "physics"];
const PER_SUBJECT = 40;

export default function ExamScreen({ route, navigation }) {
  const { subjectId = "chemistry", combined = false } = route.params || {};
  const theme = useTheme();
  const preset = combined ? COMBINED_PRESET : (EXAM_PRESETS[subjectId] || EXAM_PRESETS.chemistry);
  const accent = preset.accent;
  const headerTint = hexToRgba(accent, 0.10);
  const pillBg = hexToRgba(accent, 0.16);

  const totalSeconds = preset.minutes * 60;

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answersHistory, setAnswersHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(totalSeconds);

  const finishedRef = useRef(false);
  const dotsRef = useRef(null);

  // Build the exam: the whole bank (single subject) or 40 from each subject
  // (combined), all shuffled.
  useEffect(() => {
    let pool = [];
    if (combined) {
      COMBINED_SUBJECTS.forEach((sid) => {
        const shuffled = shuffle(collectSubject(sid));
        pool = pool.concat(shuffled.slice(0, PER_SUBJECT));
      });
      pool = shuffle(pool);
    } else {
      const shuffled = shuffle(collectSubject(subjectId));
      const count = Math.min(preset.count, shuffled.length);
      pool = shuffled.slice(0, count);
    }
    setQuestions(pool);
    setLoading(false);
  }, [subjectId, combined, preset.count]);

  // Countdown timer — starts once the questions are ready.
  useEffect(() => {
    if (loading || questions.length === 0) return undefined;
    const id = setInterval(() => {
      setTimeLeft((t) => (t <= 1 ? 0 : t - 1));
    }, 1000);
    return () => clearInterval(id);
  }, [loading, questions.length]);

  // Auto-submit when the clock hits zero.
  useEffect(() => {
    if (timeLeft === 0 && questions.length > 0) {
      finishExam();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft]);

  // Keep the current question's dot in view as you move through the exam.
  useEffect(() => {
    if (dotsRef.current && questions.length > 0) {
      const x = Math.max(0, currentIndex * 16 - 120);
      dotsRef.current.scrollTo({ x, animated: true });
    }
  }, [currentIndex, questions.length]);

  const finishExam = () => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    navigation.navigate("ResultScreen", {
      score,
      total: questions.length,
      subjectId: combined ? "Combined" : subjectId,
      examMode: true,
      combined,
      topicId: combined ? "Combined Final Exam" : `${subjectId} Final Exam`,
    });
  };

  const handleOptionPress = (optionString) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(optionString);
    setShowExplanation(true);

    const isCorrect = optionString[0] === q.answer;
    if (isCorrect) setScore((prev) => prev + 1);
    setAnswersHistory((prev) => [...prev, { correct: isCorrect }]);
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      finishExam();
    }
  };

  const handleEnd = () => {
    Alert.alert(
      "End Exam?",
      "You will submit now with your current score. This cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        { text: "End Exam", style: "destructive", onPress: () => finishExam() },
      ]
    );
  };

  const handleBack = () => {
    if (finishedRef.current) return;
    Alert.alert("Leave Exam?", "Your progress will be lost.", [
      { text: "Stay", style: "cancel" },
      { text: "Leave", style: "destructive", onPress: () => navigation.goBack() },
    ]);
  };

  const labelText = combined ? "ALL SUBJECTS" : "FINAL EXAM";
  const centerText = combined ? "Complete Exam" : subjectId;

  if (loading) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg, justifyContent: "center", alignItems: "center" }}>
        <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />
        <Text style={{ fontSize: 40, marginBottom: 12 }}>{preset.icon}</Text>
        <Text style={{ color: theme.colors.textMuted, fontWeight: "700", fontSize: 16 }}>Building your exam…</Text>
      </SafeAreaView>
    );
  }

  if (questions.length === 0) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg, justifyContent: "center", alignItems: "center", padding: 24 }}>
        <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} />
        <Text style={{ fontSize: 44, marginBottom: 12 }}>📝</Text>
        <Text style={{ fontSize: 18, fontWeight: "700", color: theme.colors.text }}>No Questions Yet</Text>
        <Text style={{ fontSize: 14, color: theme.colors.textMuted, marginTop: 6, textAlign: "center" }}>
          This subject's question bank is still being prepared.
        </Text>
      </SafeAreaView>
    );
  }

  const q = questions[currentIndex];
  const mm = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const ss = String(timeLeft % 60).padStart(2, "0");
  const timeFrac = questions.length > 0 ? timeLeft / totalSeconds : 0;
  const timeColor = timeLeft > totalSeconds * 0.5 ? "#16a34a" : timeLeft > totalSeconds * 0.2 ? "#d97706" : "#dc2626";

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />

      {/* Translucent exam-mode header */}
      <View style={{ backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border, paddingHorizontal: 16, paddingTop: 16, paddingBottom: 14 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={handleBack} style={{ paddingVertical: 4, paddingHorizontal: 4 }}>
            <Text style={{ color: theme.colors.textMuted, fontWeight: "700", fontSize: 14 }}>← Back</Text>
          </TouchableOpacity>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={{ color: theme.colors.textMuted, fontSize: 10.5, fontWeight: "800", letterSpacing: 1.5 }}>{labelText}</Text>
            <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: "800", marginTop: 1 }} numberOfLines={1}>
              {centerText}
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: pillBg, borderRadius: 12, paddingVertical: 5, paddingHorizontal: 10 }}>
            <Text style={{ fontSize: 13, marginRight: 4 }}>⏱</Text>
            <Text style={{ color: accent, fontSize: 14, fontWeight: "800" }}>{mm}:{ss}</Text>
          </View>
        </View>
        <Text style={{ color: theme.colors.textMuted, fontSize: 12, textAlign: "center", marginTop: 6, fontWeight: "600" }}>
          Question {currentIndex + 1} of {questions.length}
        </Text>
      </View>

      {/* Timer progress bar */}
      <View style={{ height: 5, backgroundColor: theme.colors.border }}>
        <View style={{ height: 5, width: `${Math.max(2, timeFrac * 100)}%`, backgroundColor: timeColor }} />
      </View>

      {/* One dot per question — scrolls, auto-centres on the current one */}
      <View style={{ backgroundColor: theme.colors.bg, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <ScrollView
          ref={dotsRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 10 }}
        >
          {questions.map((_, i) => {
            let dotColor = theme.colors.border;
            let dotSize = 10;
            if (i < answersHistory.length) {
              dotColor = answersHistory[i].correct ? theme.colors.success : theme.colors.danger;
            } else if (i === currentIndex) {
              dotColor = accent;
              dotSize = 13;
            }
            return (
              <View
                key={i}
                style={{
                  width: dotSize,
                  height: dotSize,
                  borderRadius: dotSize / 2,
                  backgroundColor: dotColor,
                  marginRight: 6,
                }}
              />
            );
          })}
        </ScrollView>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
        {q.subtopic && (
          <View style={{ alignItems: "center", marginBottom: 16 }}>
            <View style={{
              backgroundColor: theme.colors.primarySoft,
              borderColor: hexToRgba(theme.colors.primary, 0.3),
              borderWidth: 1,
              borderRadius: 20,
              paddingHorizontal: 14,
              paddingVertical: 5,
            }}>
              <Text style={{ color: theme.colors.primaryDark, fontSize: 12, fontWeight: "700", letterSpacing: 0.2 }}>
                {q.subtopic}
              </Text>
            </View>
          </View>
        )}

        <View style={{
          backgroundColor: theme.colors.surface,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: theme.colors.border,
          padding: 20,
          marginBottom: 16,
          shadowColor: theme.isDark ? "#000000" : "#0f172a",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: theme.isDark ? 0.35 : 0.03,
          shadowRadius: 8,
          elevation: 2,
        }}>
          <Text style={{ fontSize: 18, fontWeight: "800", color: theme.colors.text, lineHeight: 26, textAlign: "center" }}>
            {q.question}
          </Text>
        </View>

        <View style={{ gap: 12, marginBottom: 16 }}>
          {q.options.map((opt) => {
            const isSelected = selectedAnswer === opt;
            const isCorrect = opt[0] === q.answer;

            let cardBorder = theme.colors.border;
            let cardBg = theme.colors.surface;
            let prefixBg = theme.colors.surfaceAlt;
            let prefixText = theme.colors.textMuted;
            let textBodyColor = theme.colors.text;

            if (selectedAnswer !== null) {
              if (isCorrect) {
                cardBorder = theme.colors.success;
                cardBg = theme.colors.successSoft;
                prefixBg = hexToRgba(theme.colors.success, 0.25);
                prefixText = theme.colors.success;
                textBodyColor = theme.colors.success;
              } else if (isSelected) {
                cardBorder = theme.colors.danger;
                cardBg = theme.colors.dangerSoft;
                prefixBg = hexToRgba(theme.colors.danger, 0.25);
                prefixText = theme.colors.danger;
                textBodyColor = theme.colors.danger;
              }
            }

            return (
              <TouchableOpacity
                key={opt}
                disabled={selectedAnswer !== null}
                activeOpacity={0.85}
                onPress={() => handleOptionPress(opt)}
                accessibilityRole="button"
                accessibilityLabel={`Option ${opt[0]}: ${opt.slice(3)}`}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  borderWidth: 1,
                  borderRadius: 14,
                  padding: 12,
                  backgroundColor: cardBg,
                  borderColor: cardBorder,
                  elevation: 1,
                }}
              >
                <View style={{ width: 32, height: 32, borderRadius: 16, backgroundColor: prefixBg, alignItems: "center", justifyContent: "center", marginRight: 12 }}>
                  <Text style={{ fontSize: 14, fontWeight: "800", color: prefixText }}>{opt[0]}</Text>
                </View>
                <Text style={{ flex: 1, fontSize: 15, fontWeight: "600", color: textBodyColor }}>
                  {opt.slice(3)}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {showExplanation && (
          <View style={{
            backgroundColor: selectedAnswer[0] === q.answer ? theme.colors.successSoft : theme.colors.dangerSoft,
            borderWidth: 1,
            borderColor: selectedAnswer[0] === q.answer ? theme.colors.success : theme.colors.danger,
            borderRadius: 14,
            padding: 16,
            marginBottom: 16,
          }}>
            <Text style={{ fontSize: 15, fontWeight: "800", color: selectedAnswer[0] === q.answer ? theme.colors.success : theme.colors.danger, marginBottom: 4 }}>
              {selectedAnswer[0] === q.answer ? "✓ Correct!" : `✗ Incorrect — Answer is ${q.answer}`}
            </Text>
            <Text style={{ fontSize: 13, color: theme.colors.textMuted, lineHeight: 18, fontWeight: "500" }}>
              {q.explanation}
            </Text>
          </View>
        )}

        {selectedAnswer && (
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={handleNext}
            style={{
              backgroundColor: pillBg,
              borderWidth: 1,
              borderColor: hexToRgba(accent, 0.3),
              paddingVertical: 14,
              borderRadius: 14,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: accent, fontSize: 15, fontWeight: "700" }}>
              {currentIndex + 1 < questions.length ? "Next Question →" : "See Results"}
            </Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          onPress={handleEnd}
          style={{ marginTop: 14, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 12, paddingVertical: 10, alignItems: "center", backgroundColor: theme.colors.surface }}
        >
          <Text style={{ color: theme.colors.textFaint, fontWeight: "700", fontSize: 13 }}>End Exam Early</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
