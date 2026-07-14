import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import s from "../styles";
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
      <SafeAreaView style={{ flex: 1, backgroundColor: "#f9fafb", justifyContent: "center", alignItems: "center" }}>
        <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />
        <Text style={{ color: "#6b7280", fontWeight: "600" }}>Loading session...</Text>
      </SafeAreaView>
    );
  }

  if (questions.length === 0) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#f9fafb", justifyContent: "center", alignItems: "center", padding: 24 }}>
        <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />
        <Text style={{ fontSize: 44, marginBottom: 12 }}>🧪</Text>
        <Text style={{ fontSize: 18, fontWeight: "700", color: "#111827" }}>Question Set Not Found</Text>
        <TouchableOpacity
          onPress={() => navigation.canGoBack() ? navigation.goBack() : navigation.popTo("TopicsScreen")}
          style={{ marginTop: 24, backgroundColor: "#eff6ff", borderWidth: 1, borderColor: "#bfdbfe", paddingVertical: 10, paddingHorizontal: 20, borderRadius: 12 }}
        >
          <Text style={{ color: "#2563eb", fontWeight: "700" }}>Return to Topics</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  const q = questions[currentIndex];

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
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f8fafc" }} edges={['top', 'left', 'right']}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" translucent={false} />

      {/* Premium Top Navigation Bar */}
      <View style={{ paddingHorizontal: 16, paddingTop: 14, paddingBottom: 14, flexDirection: "row", alignItems: "center", backgroundColor: "#ffffff", borderBottomWidth: 1, borderBottomColor: "#f1f5f9" }}>
        <TouchableOpacity onPress={() => navigation.canGoBack() ? navigation.goBack() : navigation.popTo("TopicsScreen")} style={{ paddingVertical: 4, paddingHorizontal: 4 }}>
          <Text style={{ color: "#16a34a", fontWeight: "700", fontSize: 14 }}>← Back</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 15, fontWeight: "800", color: "#1e293b", flex: 1, textAlign: "center", marginHorizontal: 12 }} numberOfLines={1}>
          {topicTitle || "Evaluation Session"}
        </Text>
        <Text style={{ fontSize: 13, color: "#64748b", fontWeight: "700", minWidth: 40, textAlign: "right" }}>
          {currentIndex + 1} of {questions.length}
        </Text>
      </View>

      {/* Segmented Top Edge Progress Tracker */}
      <View style={{ flexDirection: "row", paddingHorizontal: 16, marginTop: 12, gap: 5 }}>
        {questions.map((_, i) => {
          let segmentColor = "#e2e8f0";
          if (i < answersHistory.length) {
            segmentColor = answersHistory[i].correct ? "#16a34a" : "#ef4444";
          } else if (i === currentIndex) {
            segmentColor = "#16a34a";
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
              backgroundColor: "#f0fdf4",
              borderColor: "#bbf7d0",
              borderWidth: 1,
              borderRadius: 20,
              paddingHorizontal: 14,
              paddingVertical: 5,
              shadowColor: "#16a34a",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.04,
              shadowRadius: 3,
              elevation: 1
            }}>
              <Text style={{ color: "#15803d", fontSize: 12, fontWeight: "700", letterSpacing: 0.2 }}>
                {q.subtopic}
              </Text>
            </View>
          </View>
        )}

        {/* Core Question Layout Card Pod */}
        <View style={{
          backgroundColor: "#ffffff",
          borderRadius: 20,
          borderWidth: 1,
          borderColor: "#e2e8f0",
          padding: 20,
          marginBottom: 16,
          shadowColor: "#0f172a",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.02,
          shadowRadius: 8,
          elevation: 2
        }}>
          <Text style={{ fontSize: 18, fontWeight: "800", color: "#0f172a", lineHeight: 26, textAlign: "center" }}>
            {q.question}
          </Text>
        </View>

        {/* Dynamic Translucent Choice Matrix Items */}
        <View style={{ gap: 12, marginBottom: 16 }}>
          {q.options.map((opt) => {
            const isSelected = selectedAnswer === opt;
            const isCorrect = opt[0] === q.answer;

            let cardBorder = "#e2e8f0";
            let cardBg = "#ffffff";
            let prefixBg = "#f1f5f9";
            let prefixText = "#64748b";
            let textBodyColor = "#334155";

            if (selectedAnswer !== null) {
              if (isCorrect) {
                cardBorder = "#bbf7d0";
                cardBg = "#f0fdf4";
                prefixBg = "#dcfce7";
                prefixText = "#166534";
                textBodyColor = "#166534";
              } else if (isSelected) {
                cardBorder = "#fecaca";
                cardBg = "#fef2f2";
                prefixBg = "#fee2e2";
                prefixText = "#991b1b";
                textBodyColor = "#991b1b";
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
            backgroundColor: selectedAnswer[0] === q.answer ? "#f0fdf4" : "#fef2f2",
            borderWidth: 1,
            borderColor: selectedAnswer[0] === q.answer ? "#bbf7d0" : "#fecaca",
            borderRadius: 14,
            padding: 16,
            marginBottom: 16
          }}>
            <Text style={{ fontSize: 15, fontWeight: "800", color: selectedAnswer[0] === q.answer ? "#16a34a" : "#dc2626", marginBottom: 4 }}>
              {selectedAnswer[0] === q.answer ? "✓ Correct!" : `✗ Incorrect — Answer is ${q.answer}`}
            </Text>
            <Text style={{ fontSize: 13, color: "#475569", lineHeight: 18, fontWeight: "500" }}>
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
              backgroundColor: "#16a34a",
              paddingVertical: 14,
              borderRadius: 14,
              alignItems: "center",
              justifyContent: "center",
              shadowColor: "#16a34a",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 6,
              elevation: 2
            }}
          >
            <Text style={{ color: "#ffffff", fontSize: 15, fontWeight: "700" }}>
              {currentIndex + 1 < questions.length ? "Next Question →" : "See Results"}
            </Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
