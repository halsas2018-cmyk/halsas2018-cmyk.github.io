import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
  Linking,
  Modal,
  BackHandler,
  StatusBar,
} from "react-native";

import QUESTIONS from "./questions/index";
import { SUBJECTS, WHATSAPP_NUMBER, YOUTUBE_URL, WEBSITE_URL, LOCKED_TOPICS } from "./constants";
import s from "./styles";
import AdBanner from "./components/AdBanner";
import { useInterstitialAd } from "./components/InterstitialAd";
import { useRewardedAd } from "./components/RewardedAd";
import BookingModal from "./components/BookingModal";

export default function SciPractice() {
  const [screen, setScreen] = useState("home");
  const [activeSubject, setActiveSubject] = useState(null);
  const [topicObj, setTopicObj] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [bookingVisible, setBookingVisible] = useState(false);
  const [bookingTopic, setBookingTopic] = useState("");
  const [studentName, setStudentName] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [sessionCount, setSessionCount] = useState(0);
  const [showInterstitial, setShowInterstitial] = useState(false);
  const [interstitialDest, setInterstitialDest] = useState("result");
  const [showRewardedLock, setShowRewardedLock] = useState(false);
  const [pendingTopic, setPendingTopic] = useState(null);
  const { showAd: showRewardedInterstitial } = useInterstitialAd(() => { setShowInterstitial(false); setScreen(interstitialDest); });
  const { showAd: showRewardedUnlock } = useRewardedAd(() => {
    if (!pendingTopic) return;
    const qs = QUESTIONS[pendingTopic.id];
    if (!qs || qs.length === 0) { Alert.alert("Coming Soon", "Questions for this topic are being added soon."); return; }
    const shuffled = qs.slice().sort(() => 0.5 - Math.random());
    setTopicObj(pendingTopic);
    setQuestions(shuffled.slice(0, 5));
    setCurrent(0);
    setAnswers([]);
    setSelected(null);
    setShowExplanation(false);
    setShowRewardedLock(false);
    setScreen("quiz");
  });

  const subj = activeSubject ? SUBJECTS.find((s) => s.id === activeSubject) : SUBJECTS[0];

  // Hardware back button handling
  useEffect(() => {
    const onBackPress = () => {
      if (bookingVisible) { setBookingVisible(false); return true; }
      if (screen === "quiz" || screen === "result") { setScreen("topics"); return true; }
      if (screen === "topics") { setScreen("home"); return true; }
      return false;
    };
    const sub = BackHandler.addEventListener("hardwareBackPress", onBackPress);
    return () => sub.remove();
  }, [screen, bookingVisible]);

  function startPractice(top) {
    if (LOCKED_TOPICS.includes(top.id)) {
      setPendingTopic(top);
      setShowRewardedLock(true);
      return;
    }
    const qs = QUESTIONS[top.id];
    if (!qs || qs.length === 0) {
      Alert.alert("Coming Soon", "Questions for this topic are being added soon.");
      return;
    }
    const shuffled = qs.slice().sort(() => 0.5 - Math.random());
    setTopicObj(top);
    setQuestions(shuffled.slice(0, 5));
    setCurrent(0);
    setAnswers([]);
    setSelected(null);
    setShowExplanation(false);
    setScreen("quiz");
  }

  function openBooking(topicName) {
    setBookingTopic(topicName);
    setStudentName("");
    setPreferredTime("");
    setBookingVisible(true);
  }

  function handleAnswer(opt) {
    if (selected) return;
    setSelected(opt);
    setShowExplanation(true);
    const correct = opt[0] === questions[current].answer;
    setAnswers((prev) => [...prev, { selected: opt, correct }]);
  }

  function handleNext() {
    if (current + 1 < questions.length) {
      setCurrent((prev) => prev + 1);
      setSelected(null);
      setShowExplanation(false);
    } else {
      const newCount = sessionCount + 1;
      setSessionCount(newCount);
      if (newCount % 2 === 0) {
        setInterstitialDest("result");
        showRewardedInterstitial();
      } else {
        setScreen("result");
      }
    }
  }

  function handleBookNow() {
    if (!studentName.trim() || !preferredTime.trim()) {
      Alert.alert("Missing Info", "Please fill in your name and preferred time.");
      return;
    }
    const msg = `Hello, I would like to book a Chemistry tutorial.\n\nName: ${studentName}\nTopic: ${bookingTopic}\nPreferred Time: ${preferredTime}\n\nPlease confirm availability and payment details.`;
    Linking.openURL(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`);
    setBookingVisible(false);
  }

  const score = answers.filter((a) => a.correct).length;
  const pct = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;
  const gradeColor = pct >= 80 ? "#16a34a" : pct >= 60 ? "#2563eb" : pct >= 40 ? "#d97706" : "#dc2626";
  const gradeLabel = pct >= 80 ? "Excellent! 🏆" : pct >= 60 ? "Good effort 👍" : pct >= 40 ? "Keep practising 💪" : "Needs more work 📖";

  const bookingModalProps = {
    visible: bookingVisible,
    onClose: () => setBookingVisible(false),
    bookingTopic,
    studentName,
    setStudentName,
    preferredTime,
    setPreferredTime,
    onBookNow: handleBookNow,
  };

  // ── HOME ────────────────────────────────────────────────────────────────────
  if (screen === "home") return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <BookingModal {...bookingModalProps} />
      <ScrollView style={s.root} contentContainerStyle={{ paddingBottom: 30 }}>
        <View style={s.hero}>
          <Text style={s.heroLogo}>⚗️ SciPractice</Text>
          <Text style={s.heroSub}>WAEC Science Practice · Official Syllabus</Text>
          <View style={s.heroBadge}>
            <Text style={s.heroBadgeText}>Free Practice App</Text>
          </View>
        </View>

        <Text style={s.sectionLabel}>CHOOSE A SUBJECT</Text>

        {SUBJECTS.map((sub) => (
          <TouchableOpacity
            key={sub.id}
            disabled={sub.comingSoon}
            onPress={() => { setActiveSubject(sub.id); setScreen("topics"); }}
            style={[s.subjectCard, { borderColor: sub.border, backgroundColor: sub.light, opacity: sub.comingSoon ? 0.6 : 1 }]}>
            <View style={s.subjectLeft}>
              <Text style={s.subjectIcon}>{sub.icon}</Text>
              <View>
                <Text style={[s.subjectName, { color: sub.accent }]}>{sub.id}</Text>
                <Text style={s.subjectDesc}>
                  {sub.comingSoon ? "Coming Soon" : `${sub.topics.length} topics · WAEC Syllabus`}
                </Text>
              </View>
            </View>
            {sub.comingSoon
              ? <View style={[s.csPill, { backgroundColor: sub.border }]}>
                  <Text style={{ color: sub.accent, fontSize: 11, fontWeight: "700" }}>Soon</Text>
                </View>
              : <Text style={{ color: sub.accent, fontSize: 20, fontWeight: "700" }}>→</Text>}
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={s.tutorBanner} onPress={() => openBooking("General Chemistry")}>
          <View style={s.tutorTextBlock}>
            <Text style={s.tutorTitle}>📚 1-on-1 Tutorial</Text>
            <Text style={s.tutorDesc}>Book a live session with a Chemistry teacher</Text>
          </View>
          <View style={s.tutorBtn}>
            <Text style={s.btnText}>Book Now</Text>
          </View>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', marginHorizontal: 16, marginTop: 10, marginBottom: 4 }}>
          <TouchableOpacity
            style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 12, padding: 14, marginRight: 8 }}
            onPress={() => Linking.openURL(YOUTUBE_URL)}>
            <Text style={{ fontSize: 18, marginRight: 8 }}>📺</Text>
            <Text style={{ fontSize: 13, fontWeight: '700', color: '#dc2626' }}>Watch Tutorials</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 12, padding: 14 }}
            onPress={() => Linking.openURL(WEBSITE_URL)}>
            <Text style={{ fontSize: 18, marginRight: 8 }}>🌐</Text>
            <Text style={{ fontSize: 13, fontWeight: '700', color: '#2563eb' }}>Our Website</Text>
          </TouchableOpacity>
        </View>

        <AdBanner />
      </ScrollView>
    </View>
  );

  // ── TOPICS ──────────────────────────────────────────────────────────────────
  if (showRewardedLock) return (
    <View style={{ flex: 1, backgroundColor: "#f9fafb", justifyContent: "center", alignItems: "center", padding: 24 }}>
      <Text style={{ fontSize: 48, marginBottom: 16 }}>🔒</Text>
      <Text style={{ fontSize: 20, fontWeight: "700", color: "#111827", marginBottom: 8, textAlign: "center" }}>Advanced Topic</Text>
      <Text style={{ fontSize: 14, color: "#6b7280", textAlign: "center", marginBottom: 8 }}>{pendingTopic?.name}</Text>
      <Text style={{ fontSize: 13, color: "#6b7280", textAlign: "center", marginBottom: 32, lineHeight: 20 }}>This is an advanced WAEC topic. Watch a short video to unlock this practice session.</Text>
      <TouchableOpacity
        style={{ backgroundColor: "#16a34a", paddingVertical: 14, paddingHorizontal: 40, borderRadius: 10, marginBottom: 12, width: "100%", alignItems: "center" }}
        onPress={() => showRewardedUnlock()}>
        <Text style={{ color: "#fff", fontWeight: "700", fontSize: 15 }}>▶ Watch Ad — Unlock Now</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ paddingVertical: 12, width: "100%", alignItems: "center" }}
        onPress={() => setShowRewardedLock(false)}>
        <Text style={{ color: "#9ca3af", fontSize: 14 }}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  if (screen === "topics") return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor={subj.light} />
      <BookingModal {...bookingModalProps} />
      <View style={[s.topBar, { backgroundColor: subj.light, borderBottomColor: subj.border }]}>
        <TouchableOpacity onPress={() => setScreen("home")}>
          <Text style={s.backBtn}>← Back</Text>
        </TouchableOpacity>
        <Text style={[s.topBarTitle, { color: subj.accent }]}>{subj.icon} {subj.id}</Text>
      </View>
      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 30 }}>
        {subj.topics.map((top, i) => {
          const hasQuestions = QUESTIONS[top.id] && QUESTIONS[top.id].length > 0;
          return (
            <View key={top.id} style={[s.topicCard, { borderColor: subj.border }]}>
              <View style={s.topicRow}>
                <Text style={[s.topicNum, { color: subj.accent }]}>{String(i + 1).padStart(2, "0")}</Text>
                <View style={s.topicMid}>
                  <View style={s.topicNameRow}>
                    <Text style={s.topicName}>{top.name}</Text>
                    {!hasQuestions && (
                      <View style={s.lockedPill}>
                        <Text style={s.lockedPillText}>Soon</Text>
                      </View>
                    )}
                  </View>
                  <Text style={s.topicSub}>{top.subtopics.join(" · ")}</Text>
                </View>
              </View>
              <View style={s.topicBtns}>
                <TouchableOpacity
                  style={[s.practiceBtn, { backgroundColor: hasQuestions ? subj.accent : "#9ca3af" }]}
                  onPress={() => startPractice(top)}>
                  <Text style={s.btnText}>Practice</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[s.bookBtn, { borderColor: subj.accent }]}
                  onPress={() => openBooking(top.name)}>
                  <Text style={[s.bookBtnText, { color: subj.accent }]}>Book Tutor</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <AdBanner style={{ marginBottom: 16 }} />
    </View>
  );

  // ── QUIZ ────────────────────────────────────────────────────────────────────
  if (showInterstitial) return (
    <View style={{ flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center', padding: 24 }}>
      <Text style={{ color: '#fff', fontSize: 13, marginBottom: 24, opacity: 0.6 }}>Advertisement</Text>
      <View style={{ backgroundColor: '#1a1a1a', borderRadius: 16, padding: 32, width: '100%', alignItems: 'center' }}>
        <Text style={{ color: '#fff', fontSize: 22, fontWeight: '700', marginBottom: 8 }}>📢 Ad Placeholder</Text>
        <Text style={{ color: '#888', fontSize: 13, textAlign: 'center', marginBottom: 32 }}>Real AdMob interstitial will show here in production</Text>
        <TouchableOpacity
          style={{ backgroundColor: '#16a34a', paddingVertical: 14, paddingHorizontal: 40, borderRadius: 10 }}
          onPress={() => { setShowInterstitial(false); setScreen(interstitialDest); }}>
          <Text style={{ color: '#fff', fontWeight: '700', fontSize: 16 }}>Continue →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  if (screen === "quiz" && questions.length > 0) {
    const q = questions[current];
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" backgroundColor="#f0fdf4" />
        <BookingModal {...bookingModalProps} />
        <View style={[s.topBar, { backgroundColor: "#f0fdf4", borderBottomColor: "#bbf7d0" }]}>
          <TouchableOpacity onPress={() => setScreen("topics")}>
            <Text style={s.backBtn}>✕ Exit</Text>
          </TouchableOpacity>
          <Text style={s.quizTopicLabel}>{topicObj.name}</Text>
          <Text style={s.qCount}>{current + 1}/{questions.length}</Text>
        </View>

        <View style={s.progressRow}>
          {questions.map((_, i) => (
            <View key={i} style={[s.progressSeg, {
              backgroundColor: i < answers.length
                ? (answers[i].correct ? "#16a34a" : "#dc2626")
                : i === current ? "#16a34a" : "#e5e7eb"
            }]} />
          ))}
        </View>

        <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 30 }}>
          {q.subtopic && (
            <View style={s.subtopicChip}>
              <Text style={s.subtopicText}>{q.subtopic}</Text>
            </View>
          )}
          <Text style={s.qText}>{q.question}</Text>

          {q.options.map((opt) => {
            const isSelected = selected === opt;
            const isCorrect = opt[0] === q.answer;
            let bg = "#fff", border = "#e5e7eb", textColor = "#1f2937";
            if (selected) {
              if (isCorrect) { bg = "#f0fdf4"; border = "#16a34a"; textColor = "#166534"; }
              else if (isSelected) { bg = "#fef2f2"; border = "#dc2626"; textColor = "#991b1b"; }
            }
            return (
              <TouchableOpacity
                key={opt}
                disabled={selected !== null}
                onPress={() => handleAnswer(opt)}
                style={[s.optBtn, { backgroundColor: bg, borderColor: border }]}>
                <View style={[s.optLabel, {
                  backgroundColor: selected ? (isCorrect ? "#dcfce7" : isSelected ? "#fee2e2" : "#f3f4f6") : "#f3f4f6"
                }]}>
                  <Text style={[s.optLabelText, {
                    color: selected ? (isCorrect ? "#166534" : isSelected ? "#991b1b" : "#6b7280") : "#6b7280"
                  }]}>{opt[0]}</Text>
                </View>
                <Text style={[s.optText, { color: textColor }]}>{opt.slice(3)}</Text>
              </TouchableOpacity>
            );
          })}

          {showExplanation && (
            <View style={[s.explanBox, {
              backgroundColor: answers[answers.length - 1]?.correct ? "#f0fdf4" : "#fef2f2",
              borderColor: answers[answers.length - 1]?.correct ? "#bbf7d0" : "#fecaca"
            }]}>
              <Text style={[s.explanTitle, { color: answers[answers.length - 1]?.correct ? "#16a34a" : "#dc2626" }]}>
                {answers[answers.length - 1]?.correct ? "✓ Correct!" : `✗ Incorrect — Answer is ${q.answer}`}
              </Text>
              <Text style={s.explanText}>{q.explanation}</Text>
            </View>
          )}

          {selected && (
            <TouchableOpacity style={s.nextBtn} onPress={handleNext}>
              <Text style={s.btnText}>
                {current + 1 < questions.length ? "Next Question →" : "See Results"}
              </Text>
            </TouchableOpacity>
          )}
        </ScrollView>
        <AdBanner style={{ margin: 16 }} />
      </View>
    );
  }

  // ── RESULT ──────────────────────────────────────────────────────────────────
  if (screen === "result") return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <BookingModal {...bookingModalProps} />
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 40 }}>
        <View style={s.resultCard}>
          <Text style={s.resultIcon}>⚗️</Text>
          <Text style={[s.resultPct, { color: gradeColor }]}>{pct}%</Text>
          <Text style={[s.resultGrade, { color: gradeColor }]}>{gradeLabel}</Text>
          <Text style={s.resultDetail}>{score} of {questions.length} correct</Text>
          <Text style={s.resultTopic}>{topicObj?.name}</Text>
          <View style={s.breakdownRow}>
            {answers.map((a, i) => (
              <View key={i} style={[s.bdDot, { backgroundColor: a.correct ? "#dcfce7" : "#fee2e2" }]}>
                <Text style={{ color: a.correct ? "#16a34a" : "#dc2626", fontWeight: "700" }}>
                  {a.correct ? "✓" : "✗"}
                </Text>
              </View>
            ))}
          </View>
          <TouchableOpacity style={[s.resultBtn, { backgroundColor: "#16a34a" }]} onPress={() => startPractice(topicObj)}>
            <Text style={s.btnText}>Try Again</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[s.resultBtn, { backgroundColor: "#fff", borderWidth: 1, borderColor: "#16a34a" }]} onPress={() => openBooking(topicObj?.name)}>
            <Text style={[s.btnText, { color: "#16a34a" }]}>📅 Book a Tutorial</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[s.resultBtn, { backgroundColor: "#f3f4f6" }]} onPress={() => { setInterstitialDest("topics"); showRewardedInterstitial(); }}>
            <Text style={[s.btnText, { color: "#374151" }]}>Back to Topics</Text>
          </TouchableOpacity>
        </View>
        <AdBanner />
      </ScrollView>
    </View>
  );

  return null;
}
