import React, { useState, useEffect, useRef, useMemo } from "react";
import { View, Text, TouchableOpacity, ScrollView, StatusBar, useWindowDimensions, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getSubject, hexToRgba, buildCards } from "./studyData";
import { studyStorage } from "../storage/studyStorage";
import { useTheme } from "../theme";
import BannerAd from "../components/BannerAd";

// One premium card. Pops with a spring whenever it becomes the active card.
function StudyCard({ item, accent, active }) {
  const theme = useTheme();
  const scale = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    if (active) {
      scale.setValue(0.95);
      Animated.spring(scale, { toValue: 1, useNativeDriver: true, tension: 140, friction: 9 }).start();
    }
  }, [active]);

  return (
    <View style={{ flex: 1, justifyContent: "center", paddingHorizontal: 16 }}>
      <Animated.View
        style={{
          transform: [{ scale }],
          backgroundColor: theme.colors.surface,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: hexToRgba(accent, 0.3),
          borderLeftWidth: 5,
          borderLeftColor: hexToRgba(accent, 0.55),
          padding: 22,
          shadowColor: accent,
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.08,
          shadowRadius: 16,
          elevation: 6,
        }}
      >
        <View style={{ backgroundColor: hexToRgba(accent, 0.12), alignSelf: "flex-start", paddingVertical: 4, paddingHorizontal: 12, borderRadius: 12, marginBottom: 14 }}>
          <Text style={{ fontSize: 11, fontWeight: "800", color: accent, letterSpacing: 0.5 }}>KEY POINT</Text>
        </View>
        {item.heading ? <Text style={{ fontSize: 19, fontWeight: "800", color: theme.colors.text, marginBottom: 10, lineHeight: 25 }}>{item.heading}</Text> : null}
        <Text style={{ fontSize: 16.5, color: theme.colors.textMuted, lineHeight: 25 }}>{item.body}</Text>
      </Animated.View>
    </View>
  );
}

export default function StudyCardScreen({ route, navigation }) {
  const theme = useTheme();
  const { subjectId, topicId, subtopic, topicName } = route.params || {};
  const subject = getSubject(subjectId);
  const accent = subject.accent || "#16a34a";
  const { width } = useWindowDimensions();

  const cards = useMemo(() => buildCards(subjectId, topicId, subtopic), [subjectId, topicId, subtopic]);
  const total = cards.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [showCelebrate, setShowCelebrate] = useState(false);
  const [completed, setCompleted] = useState(false);

  const scrollRef = useRef(null);
  const didResume = useRef(false);
  const fill = useRef(new Animated.Value(0)).current;

  // Load saved progress (resume memory) and snap to the last card viewed.
  useEffect(() => {
    studyStorage.getProgress(subjectId, topicId, subtopic).then((p) => {
      const start = Math.min(p.cardIndex || 0, total - 1);
      setCompleted(!!p.completed);
      setCurrentIndex(start);
      setLoaded(true);
    });
  }, [subjectId, topicId, subtopic, total]);

  // Snap the deck to the resumed card once layout width is known.
  useEffect(() => {
    if (loaded && !didResume.current && scrollRef.current) {
      scrollRef.current.scrollTo({ x: currentIndex * width, animated: false });
      didResume.current = true;
    }
  }, [loaded, width, currentIndex]);

  // Animate the progress fill whenever the card changes.
  useEffect(() => {
    Animated.timing(fill, {
      toValue: total ? (currentIndex + 1) / total : 0,
      duration: 280,
      useNativeDriver: false,
    }).start();
  }, [currentIndex, total]);

  function onSwipeEnd(e) {
    const i = Math.round(e.nativeEvent.contentOffset.x / width);
    if (i !== currentIndex) {
      setCurrentIndex(i);
      studyStorage.saveProgress(subjectId, topicId, subtopic, i);
    }
  }

  function goTo(i) {
    const clamped = Math.max(0, Math.min(i, total - 1));
    scrollRef.current?.scrollTo({ x: clamped * width, animated: true });
    setCurrentIndex(clamped);
    studyStorage.saveProgress(subjectId, topicId, subtopic, clamped);
  }

  function finish() {
    studyStorage.markComplete(subjectId, topicId, subtopic);
    setCompleted(true);
    setShowCelebrate(true);
  }

  const atLast = currentIndex === total - 1;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.surface} translucent={false} />

      {/* Header */}
      <View style={{ backgroundColor: theme.colors.surface, paddingTop: 14, paddingBottom: 12, paddingHorizontal: 16, borderBottomWidth: 1, borderBottomColor: hexToRgba(accent, 0.12) }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: "row", alignItems: "center" }} accessibilityRole="button" accessibilityLabel="Go back">
            <Text style={{ color: theme.colors.textMuted, fontWeight: "700", fontSize: 13 }}>‹ Back</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 13, fontWeight: "700", color: accent }}>{completed ? "✓ Completed" : subtopic}</Text>
          <TouchableOpacity onPress={finish} accessibilityRole="button" accessibilityLabel="Mark done">
            <Text style={{ color: accent, fontWeight: "800", fontSize: 13 }}>Done ✓</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", alignItems: "baseline", justifyContent: "space-between", marginTop: 8 }}>
          <Text style={{ fontSize: 12.5, color: theme.colors.textMuted, fontWeight: "600" }}>{topicName}</Text>
          <Text style={{ fontSize: 12.5, color: theme.colors.textMuted, fontWeight: "700" }}>Card {currentIndex + 1} / {total}</Text>
        </View>
        {/* Fill slider */}
        <View style={{ height: 7, borderRadius: 4, backgroundColor: hexToRgba(accent, 0.14), overflow: "hidden", marginTop: 8 }}>
          <Animated.View
            style={{
              height: "100%",
              borderRadius: 4,
              backgroundColor: accent,
              width: fill.interpolate({ inputRange: [0, 1], outputRange: ["0%", "100%"] }),
            }}
          />
        </View>
      </View>

      {/* Swipeable deck */}
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onSwipeEnd}
        keyboardShouldPersistTaps="handled"
        style={{ flex: 1 }}
      >
        {cards.map((c, i) => (
          <View key={c.id} style={{ width }}>
            <StudyCard item={c} accent={accent} active={i === currentIndex} />
          </View>
        ))}
      </ScrollView>

      {/* Small banner while studying — sits above the nav controls */}
      <BannerAd />

      {/* Controls */}
      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 14, borderTopWidth: 1, borderTopColor: hexToRgba(accent, 0.1), backgroundColor: theme.colors.surface }}>
        <TouchableOpacity
          onPress={() => goTo(currentIndex - 1)}
          disabled={currentIndex === 0}
          accessibilityRole="button"
          accessibilityLabel="Previous card"
          style={{ opacity: currentIndex === 0 ? 0.4 : 1, paddingVertical: 10, paddingHorizontal: 18, borderRadius: 12, borderWidth: 1, borderColor: hexToRgba(accent, 0.25) }}
        >
          <Text style={{ color: accent, fontWeight: "700" }}>‹ Prev</Text>
        </TouchableOpacity>

        <View style={{ flex: 1, alignItems: "center" }}>
          {atLast ? (
            <TouchableOpacity
              onPress={finish}
              accessibilityRole="button"
              accessibilityLabel="Mark subtopic done"
              style={{ backgroundColor: accent, paddingVertical: 11, paddingHorizontal: 22, borderRadius: 12, shadowColor: accent, shadowOpacity: 0.2, shadowRadius: 8, elevation: 3 }}
            >
              <Text style={{ color: theme.colors.white, fontWeight: "800" }}>Mark subtopic done 🎉</Text>
            </TouchableOpacity>
          ) : (
            <Text style={{ color: theme.colors.textFaint, fontSize: 12, fontWeight: "600" }}>Swipe to continue →</Text>
          )}
        </View>

        <TouchableOpacity
          onPress={() => goTo(currentIndex + 1)}
          disabled={atLast}
          accessibilityRole="button"
          accessibilityLabel="Next card"
          style={{ opacity: atLast ? 0.4 : 1, paddingVertical: 10, paddingHorizontal: 18, borderRadius: 12, borderWidth: 1, borderColor: hexToRgba(accent, 0.25) }}
        >
          <Text style={{ color: accent, fontWeight: "700" }}>Next ›</Text>
        </TouchableOpacity>
      </View>

      {/* Celebration */}
      {showCelebrate ? (
        <View style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: theme.colors.overlay, alignItems: "center", justifyContent: "center", padding: 24 }}>
          <View style={{ backgroundColor: theme.colors.surface, borderRadius: 22, padding: 28, alignItems: "center", width: "100%" }}>
            <Text style={{ fontSize: 52 }}>🎉</Text>
            <Text style={{ fontSize: 20, fontWeight: "800", color: theme.colors.text, marginTop: 10, textAlign: "center" }}>Subtopic complete!</Text>
            <Text style={{ fontSize: 13.5, color: theme.colors.textMuted, marginTop: 6, textAlign: "center" }}>{subtopic} is saved to your study tracker.</Text>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: accent, paddingVertical: 12, paddingHorizontal: 28, borderRadius: 12, marginTop: 18 }} accessibilityRole="button" accessibilityLabel="Continue">
              <Text style={{ color: theme.colors.white, fontWeight: "800" }}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </SafeAreaView>
  );
}
