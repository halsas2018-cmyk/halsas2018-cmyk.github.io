import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import s from "../styles";
import { useTheme, hexToRgba } from "../theme";
import { haptic } from "../haptic";
import { useAds } from "../components/AdProvider";

// The full question bank is ~3,750 questions (Biology alone is ~2,975).
// Importing it at module top would force Metro to evaluate the entire bank at
// APP STARTUP, making the home/topic screens lag before they become interactive.
// Instead, lazy-load only the subject being quizzed (cached per subject), so
// e.g. a Chemistry quiz never parses Biology's ~2,975 questions.
// Metro only allows lazy `require` with a STATIC string literal, so each loader
// is a function wrapping a literal-path require (deferred until first call).
const SUBJECT_QUESTION_MODULES = {
  chemistry: () => require("../questions/chemistry/index").default,
  biology: () => require("../questions/biology/index").default,
  physics: () => require("../questions/physics/index").default,
};

const _subjectBanks = {};
function getQUESTIONS(subjectId) {
  const key = (subjectId || "chemistry").toLowerCase();
  if (!_subjectBanks[key]) {
    const loader = SUBJECT_QUESTION_MODULES[key];
    _subjectBanks[key] = loader ? loader() : require("../questions/index").default;
  }
  return _subjectBanks[key];
}

export default function QuizScreen({ route, navigation }) {
  const { subjectId, topicId, topicTitle } = route.params || {};
  const { maybeQuizComplete } = useAds();
  const theme = useTheme();
  
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answersHistory, setAnswersHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const initializeQuiz = () => {
    setLoading(true);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnswersHistory([]);

    const QUESTIONS = getQUESTIONS(subjectId);
    let pool = QUESTIONS[topicId] || [];
    if (pool.length === 0 && topicTitle) {
      const matchedKey = Object.keys(QUESTIONS).find(key =>
        topicTitle.toLowerCase().includes(key.toLowerCase()) ||
        key.toLowerCase().includes(topicId?.toLowerCase())
      );
      if (matchedKey) pool = QUESTIONS[matchedKey];
    }

    if (pool.length > 0) {
      const randomized = [...pool].sort(() => 0.5 - Math.random());
      setQuestions(randomized.slice(0, 5));
    } else {
      setQuestions([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    initializeQuiz();
  }, [topicId, topicTitle]);

  useEffect(() => {
    if (route.params?.resetQuizState) {
      initializeQuiz();
      navigation.setParams({ resetQuizState: undefined });
    }
  }, [route.params?.resetQuizState]);

  if (loading) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg, justifyContent: "center", alignItems: "center" }}>
        <StatusBar barStyle="dark-content" backgroundColor={theme.colors.bg} />
        <Text style={{ color: theme.colors.textMuted, fontWeight: "600" }}>Loading session...</Text>
      </SafeAreaView>
    );
  }

  if (questions.length === 0) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg, justifyContent: "center", alignItems: "center", padding: 24 }}>
        <StatusBar barStyle="dark-content" backgroundColor={theme.colors.bg} />
        <Text style={{ fontSize: 44, marginBottom: 12 }}>🧪</Text>
        <Text style={{ fontSize: 18, fontWeight: "700", color: theme.colors.text }}>Question Set Not Found</Text>
        <TouchableOpacity
          onPress={() => { haptic.light(); navigation.canGoBack() ? navigation.goBack() : navigation.popTo("TopicsScreen"); }}
          style={{ marginTop: 24, backgroundColor: theme.colors.accentBlueSoft, borderWidth: 1, borderColor: hexToRgba(theme.colors.accentBlue, 0.4), paddingVertical: 10, paddingHorizontal: 20, borderRadius: 12 }}
        >
          <Text style={{ color: theme.colors.accentBlue, fontWeight: "700" }}>Return to Topics</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  const q = questions[currentIndex];

  const handleOptionPress = (optionString) => {
    if (selectedAnswer !== null) return;
    haptic.light();
    setSelectedAnswer(optionString);
    setShowExplanation(true);

    const isCorrect = optionString[0] === q.answer;
    if (isCorrect) setScore((prev) => prev + 1);

    setAnswersHistory((prev) => [...prev, { correct: isCorrect }]);
  };

  const handleNext = () => {
    haptic.light();
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      maybeQuizComplete(() => navigation.replace("ResultScreen", {
        score: score,
        total: questions.length,
        topicId: topicId,
        subjectId: subjectId
      }));
    }
  };

  return (
    // FIXED: Using precise top edge padding context structures to shield header elements from shifting
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={['top', 'left', 'right']}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.surface} translucent={false} />

      {/* Premium Top Navigation Bar */}
      <View style={{ paddingHorizontal: 16, paddingTop: 14, paddingBottom: 14, flexDirection: "row", alignItems: "center", backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.surfaceAlt }}>
        <TouchableOpacity onPress={() => { haptic.light(); navigation.canGoBack() ? navigation.goBack() : navigation.popTo("TopicsScreen"); }} style={{ paddingVertical: 4, paddingHorizontal: 4 }}>
          <Text style={{ color: theme.colors.primary, fontWeight: "700", fontSize: 14 }}>← Back</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 15, fontWeight: "800", color: theme.colors.text, flex: 1, textAlign: "center", marginHorizontal: 12 }} numberOfLines={1}>
          {topicTitle || "Evaluation Session"}
        </Text>
        <Text style={{ fontSize: 13, color: theme.colors.textMuted, fontWeight: "700", minWidth: 40, textAlign: "right" }}>
          {currentIndex + 1} of {questions.length}
        </Text>
      </View>

      {/* Segmented Top Edge Progress Tracker */}
      <View style={{ flexDirection: "row", paddingHorizontal: 16, marginTop: 12, gap: 5 }}>
        {questions.map((_, i) => {
          let segmentColor = theme.colors.border;
          if (i < answersHistory.length) {
            segmentColor = answersHistory[i].correct ? theme.colors.primary : theme.colors.danger;
          } else if (i === currentIndex) {
            segmentColor = theme.colors.primary;
          }
          return (
            <View key={i} style={{ flex: 1, height: 5, backgroundColor: segmentColor, borderRadius: 10 }} />
          );
        })}
      </View>

      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
        {/* Centered Subtopic Depth Bubble */}
        {q.subtopic && (
          <View style={{ alignItems: "center", marginBottom: 16 }}>
            <View style={{
              backgroundColor: hexToRgba(theme.colors.primary, 0.08),
              borderColor: hexToRgba(theme.colors.primary, 0.35),
              borderWidth: 1,
              borderRadius: 20,
              paddingHorizontal: 14,
              paddingVertical: 5,
              shadowColor: theme.colors.primary,
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.04,
              shadowRadius: 3,
              elevation: 1
            }}>
              <Text style={{ color: theme.colors.primaryDark, fontSize: 12, fontWeight: "700", letterSpacing: 0.2 }}>
                {q.subtopic}
              </Text>
            </View>
          </View>
        )}

        {/* Core Question Layout Card Pod */}
        <View style={{
          backgroundColor: theme.colors.surface,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: theme.colors.border,
          padding: 20,
          marginBottom: 16,
          shadowColor: theme.colors.text,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.02,
          shadowRadius: 8,
          elevation: 2
        }}>
          <Text style={{ fontSize: 18, fontWeight: "800", color: theme.colors.text, lineHeight: 26, textAlign: "center" }}>
            {q.question}
          </Text>
        </View>

        {/* Dynamic Translucent Choice Matrix Items */}
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
                cardBorder = hexToRgba(theme.colors.primary, 0.35);
                cardBg = hexToRgba(theme.colors.primary, 0.08);
                prefixBg = hexToRgba(theme.colors.primary, 0.12);
                prefixText = theme.colors.primaryDark;
                textBodyColor = theme.colors.primaryDark;
              } else if (isSelected) {
                cardBorder = hexToRgba(theme.colors.danger, 0.4);
                cardBg = theme.colors.dangerSoft;
                prefixBg = hexToRgba(theme.colors.danger, 0.15);
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
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  borderWidth: 1,
                  borderRadius: 14,
                  padding: 12,
                  backgroundColor: cardBg,
                  borderColor: cardBorder,
                  elevation: 1
                }}
              >
                <View style={{ width: 32, height: 32, borderRadius: 8, backgroundColor: prefixBg, alignItems: "center", justifyContent: "center", marginRight: 12 }}>
                  <Text style={{ fontSize: 14, fontWeight: "800", color: prefixText }}>{opt[0]}</Text>
                </View>
                <Text style={{ flex: 1, fontSize: 15, fontWeight: "600", color: textBodyColor }}>
                  {opt.slice(3)}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Live Explanations Feedback Window Box */}
        {showExplanation && (
          <View style={{
            backgroundColor: selectedAnswer[0] === q.answer ? hexToRgba(theme.colors.primary, 0.08) : theme.colors.dangerSoft,
            borderWidth: 1,
            borderColor: selectedAnswer[0] === q.answer ? hexToRgba(theme.colors.primary, 0.35) : hexToRgba(theme.colors.danger, 0.4),
            borderRadius: 14,
            padding: 16,
            marginBottom: 16
          }}>
            <Text style={{ fontSize: 15, fontWeight: "800", color: selectedAnswer[0] === q.answer ? theme.colors.primary : theme.colors.danger, marginBottom: 4 }}>
              {selectedAnswer[0] === q.answer ? "✓ Correct!" : `✗ Incorrect — Answer is ${q.answer}`}
            </Text>
            <Text style={{ fontSize: 13, color: theme.colors.textMuted, lineHeight: 18, fontWeight: "500" }}>
              {q.explanation}
            </Text>
          </View>
        )}

        {/* Continuous Navigation Action Trigger Button */}
        {selectedAnswer && (
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={handleNext}
            style={{
              backgroundColor: theme.colors.primary,
              paddingVertical: 14,
              borderRadius: 14,
              alignItems: "center",
              justifyContent: "center",
              shadowColor: theme.colors.primary,
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 6,
              elevation: 2
            }}
          >
            <Text style={{ color: theme.colors.onPrimary, fontSize: 15, fontWeight: "700" }}>
              {currentIndex + 1 < questions.length ? "Next Question →" : "See Results"}
            </Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
