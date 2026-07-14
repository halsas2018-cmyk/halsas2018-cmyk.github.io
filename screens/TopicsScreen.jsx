import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import s from "../styles";
import { SUBJECTS, WHATSAPP_NUMBER, LOCKED_TOPICS } from "../constants";
import BookingModal from "../components/BookingModal";
import BannerAd from "../components/BannerAd";
import { withInlineBanner } from "../components/inlineAd";
import { useAds } from "../components/AdProvider";

export default function TopicsScreen({ route, navigation }) {
  const { subjectId } = route.params || { subjectId: "Chemistry" };
  const [bookingVisible, setBookingVisible] = useState(false);
  const [bookingTopic, setBookingTopic] = useState("");
  const [studentName, setStudentName] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const { unlockWithRewarded } = useAds();

  const subjectData = SUBJECTS.find(
    (sub) => sub.id.toLowerCase() === subjectId.toLowerCase()
  ) || SUBJECTS[0];

  const cardShadow = {
    shadowColor: subjectData.accent || "#16a34a",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 2,
  };

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
    const msg = `Hello, I would like to book a 1-on-1 ${subjectData.id} tutorial.\n\nName: ${studentName}\nTopic: ${bookingTopic}\nPreferred Time: ${preferredTime}\n\nPlease confirm availability and payment details.`;
    Linking.openURL(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`);
    setBookingVisible(false);
  }

  return (
    // FIXED: Swapped layout engine, removed manual padding, targeted exact layout bounds
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

      {/* Ultra-Minimal Transparent Centered Header */}
      <View style={{ paddingHorizontal: 16, paddingTop: 12, paddingBottom: 10 }}>
        {/* Minimal Left-Aligned Back Nav Action */}
        <TouchableOpacity
          onPress={() => navigation.navigate("MainTabs", { screen: "PracticeHub" })}
          style={{ alignSelf: "flex-start", paddingVertical: 4, paddingHorizontal: 4, marginBottom: 8 }}
        >
          <Text style={{ color: "#6b7280", fontWeight: "700", fontSize: 13 }}>← Back to Subjects</Text>
        </TouchableOpacity>

        {/* Clean Dynamic Layout Label Setup */}
        <View style={{ alignItems: "center", justifyContent: "center", marginTop: 4 }}>
          <Text style={{
            fontSize: 24,
            fontWeight: "800",
            color: "#111827",
            letterSpacing: -0.3,
            textTransform: "capitalize"
          }}>
            {subjectData.id} Questions
          </Text>
          <Text style={{ fontSize: 12, color: "#6b7280", fontWeight: "500", marginTop: 2 }}>
            Interactive Practice
          </Text>
        </View>
      </View>

      {/* Topics Stream — windowed FlatList so only visible cards mount
          (Biology's 58 topics no longer block initial render like Chemistry's 15). */}
      <FlatList
        data={withInlineBanner(subjectData.topics, 4)}
        keyExtractor={(item) => item.id}
        initialNumToRender={10}
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
          const displayIndex = String(index + 1).padStart(2, '0');
          const subtopicsString = item.subtopics ? item.subtopics.join(" · ") : "General study module";

          return (
            <View
              style={[
                {
                  backgroundColor: "#ffffff",
                  borderRadius: 16,
                  borderWidth: 1,
                  borderColor: "#e5e7eb",
                  padding: 16,
                  marginBottom: 14,
                },
                cardShadow
              ]}
            >
              {/* Header Details Info */}
              <View style={{ flexDirection: "row", alignItems: "flex-start", marginBottom: 14 }}>
                <Text style={{
                  fontSize: 15,
                  fontWeight: "800",
                  color: subjectData.accent || "#16a34a",
                  marginRight: 10,
                  marginTop: 1
                }}>
                  {displayIndex}
                </Text>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 16, fontWeight: "700", color: "#111827", marginBottom: 4 }}>
                    {item.name}
                  </Text>
                  <Text style={{ fontSize: 12, color: "#6b7280", fontWeight: "500", lineHeight: 16 }}>
                    {subtopicsString}
                  </Text>
                </View>
              </View>

              {/* Explicit Translucent Buttons Row */}
              <View style={{ flexDirection: "row", gap: 10 }}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    if (LOCKED_TOPICS.includes(item.id)) {
                      unlockWithRewarded(() => navigation.navigate("QuizScreen", {
                        subjectId: subjectData.id,
                        topicId: item.id,
                        topicTitle: item.name
                      }));
                    } else {
                      navigation.navigate("QuizScreen", {
                        subjectId: subjectData.id,
                        topicId: item.id,
                        topicTitle: item.name
                      });
                    }
                  }}
                  style={{
                    flex: 1,
                    backgroundColor: LOCKED_TOPICS.includes(item.id) ? "#fffbeb" : "#f0fdf4",
                    borderWidth: 1,
                    borderColor: LOCKED_TOPICS.includes(item.id) ? "#fde68a" : "#bbf7d0",
                    paddingVertical: 10,
                    borderRadius: 12,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Text style={{ color: LOCKED_TOPICS.includes(item.id) ? "#b45309" : "#16a34a", fontSize: 13, fontWeight: "700" }}>
                    {LOCKED_TOPICS.includes(item.id) ? "🔒 Watch Ad" : "Practice"}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => openBooking(item.name)}
                  style={{
                    flex: 1,
                    backgroundColor: "#eff6ff",
                    borderWidth: 1,
                    borderColor: "#bfdbfe",
                    paddingVertical: 10,
                    borderRadius: 12,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Text style={{ color: "#2563eb", fontSize: 13, fontWeight: "700" }}>Book Tutor</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}
