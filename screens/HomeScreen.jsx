import React, { useState, useRef } from "react";
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
import AdBanner from "../components/AdBanner";

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

export default function HomeScreen({ navigation }) {
  const [bookingVisible, setBookingVisible] = useState(false);
  const [bookingTopic, setBookingTopic] = useState("");
  const [studentName, setStudentName] = useState("");
  const [preferredTime, setPreferredTime] = useState("");

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

  const cardShadow = {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 3,
  };

  return (
    // FIXED: Imported from react-native-safe-area-context, removed manual padding, added clear top edge targets
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f9fafb" }} edges={['top', 'left', 'right']}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" translucent={false} />

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

      <ScrollView style={s.root} contentContainerStyle={{ paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
        <View style={s.hero}>
          <Text style={s.heroLogo}>⚗️ SciPractice</Text>
          <Text style={[s.heroSub, { lineHeight: 18 }]}>Science Practice · Official Syllabus</Text>
          <View style={s.heroBadge}>
            <Text style={s.heroBadgeText}>Free Practice App</Text>
          </View>
        </View>

        <Text style={[s.sectionLabel, { letterSpacing: 0.8, fontWeight: "700", opacity: 0.7 }]}>CHOOSE A SUBJECT</Text>

        <View style={{ paddingHorizontal: 16 }}>
          {SUBJECTS.map((sub) => (
            <PremiumPressable
              key={sub.id}
              disabled={sub.comingSoon}
              onPress={() => navigation.navigate("TopicsScreen", { subjectId: sub.id })}
              style={[
                s.subjectCard,
                cardShadow,
                {
                  borderColor: sub.border,
                  backgroundColor: sub.light,
                  opacity: sub.comingSoon ? 0.6 : 1,
                  marginHorizontal: 0,
                  marginBottom: 12
                }
              ]}
            >
              <View style={s.subjectLeft}>
                <Text style={s.subjectIcon}>{sub.icon}</Text>
                <View>
                  <Text style={[s.subjectName, { color: sub.accent, textTransform: "capitalize", fontWeight: "700" }]}>{sub.id}</Text>
                  <Text style={s.subjectDesc}>
                    {sub.comingSoon ? "Coming Soon" : `${sub.topics.length} topics · Official Syllabus`}
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
            style={[s.tutorBanner, cardShadow, { marginHorizontal: 0, backgroundColor: "#ffffff", borderWidth: 1, borderColor: "#e5e7eb" }]}
            onPress={() => openBooking("General Chemistry")}
          >
            <View style={s.tutorTextBlock}>
              <Text style={s.tutorTitle}>📚 1-on-1 Tutorial</Text>
              <Text style={[s.tutorDesc, { lineHeight: 18, marginTop: 2, color: "#4b5563" }]}>Book a live session with a Chemistry teacher</Text>
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
                { flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#fff5f5", borderWidth: 1, borderColor: "#fecaca", borderRadius: 14, padding: 14 },
                cardShadow
              ]}
              onPress={() => Linking.openURL(YOUTUBE_URL)}
            >
              <Text style={{ fontSize: 18, marginRight: 8 }}>📺</Text>
              <Text style={{ fontSize: 13, fontWeight: "700", color: "#b91c1c" }}>Watch Tutorials</Text>
            </PremiumPressable>
          </View>

          <View style={{ flex: 1 }}>
            <PremiumPressable
              style={[
                { flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#eff6ff", borderWidth: 1, borderColor: "#bfdbfe", borderRadius: 14, padding: 14 },
                cardShadow
              ]}
              onPress={() => Linking.openURL(WEBSITE_URL)}
            >
              <Text style={{ fontSize: 18, marginRight: 8 }}>🌐</Text>
              <Text style={{ fontSize: 13, fontWeight: "700", color: "#1d4ed8" }}>Our Website</Text>
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
                backgroundColor: "rgba(37, 99, 235, 0.08)",
                borderWidth: 1,
                borderColor: "rgba(37, 99, 235, 0.15)",
                borderRadius: 14,
                padding: 14
              },
              cardShadow
            ]}
            onPress={() => navigation.navigate("HistoryScreen")}
          >
            <Text style={{ fontSize: 16, marginRight: 8 }}>📊</Text>
            <Text style={{ fontSize: 13, fontWeight: "700", color: "#2563eb" }}>Review Previous Results</Text>
          </PremiumPressable>
        </View>

        <AdBanner />
      </ScrollView>
    </SafeAreaView>
  );
}
