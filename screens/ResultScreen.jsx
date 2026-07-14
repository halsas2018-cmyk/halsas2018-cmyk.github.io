import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { quizStorage } from '../storage/quizStorage';
import { WHATSAPP_NUMBER } from '../constants';
import BookingModal from '../components/BookingModal';
import BannerAd from '../components/BannerAd';
import { useAds } from '../components/AdProvider';

export default function ResultScreen({ route, navigation }) {
  const { 
    score = 0, 
    total = 0, 
    topicId,
    subjectId = "chemistry" 
  } = route.params || {};

  const { maybeResultToTopics } = useAds();
  const [bookingVisible, setBookingVisible] = useState(false);
  const [studentName, setStudentName] = useState("");
  const [preferredTime, setPreferredTime] = useState("");

  const displayTotal = total > 0 ? total : 5;
  const percentage = displayTotal > 0 ? Math.round((score / displayTotal) * 100) : 0;

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
    const cleanTopic = topicId ? topicId.replace(/_/g, ' ').toUpperCase() : "CHEMISTRY";
    const msg = `Hello, I would like to book a Chemistry tutorial.\n\nName: ${studentName}\nTopic: ${cleanTopic}\nPreferred Time: ${preferredTime}\n\nPlease confirm availability and payment details.`;
    Linking.openURL(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`);
    setBookingVisible(false);
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
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

      <Text style={styles.mainTitle}>Performance Summary</Text>
      <Text style={styles.subTitle}>{topicId ? topicId.replace(/_/g, ' ').toUpperCase() : "QUIZ"} SECTION</Text>

      <View style={styles.outerCircle}>
        <Text style={styles.percentText}>{percentage}%</Text>
        <Text style={styles.fractionText}>{score} / {displayTotal} Correct</Text>
      </View>

      <Text style={[styles.statusBanner, percentage >= 70 ? styles.successText : styles.failText]}>
        {percentage >= 70 
          ? "Great job! You have passed this topic section successfully." 
          : "Keep reviewing! Review this topic to build your confidence."}
      </Text>

      <BannerAd />

      <View style={styles.buttonStack}>
        {/* FIXED: Using replace to wipe the view stack state and re-initialize a fresh quiz set */}
        <TouchableOpacity 
          style={styles.translucentBlueBtn} 
          onPress={() => {
            if (topicId) {
              navigation.replace('QuizScreen', { topicId, subjectId, refreshKey: Date.now() });
            } else {
              navigation.goBack();
            }
          }}
        >
          <Text style={styles.blueBtnText}>Try Again</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.translucentGreenBtn} onPress={() => setBookingVisible(true)}>
          <Text style={styles.greenBtnText}>Book a Private Tutor</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.translucentWhiteBtn}
          onPress={() => maybeResultToTopics(() => navigation.popTo('TopicsScreen'))}
        >
          <Text style={styles.whiteBtnText}>Back to Topics List</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
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
  translucentGreenBtn: { backgroundColor: 'rgba(22, 163, 74, 0.12)', width: '100%', paddingVertical: 15, borderRadius: 12, alignItems: 'center' },
  greenBtnText: { color: '#16a34a', fontSize: 16, fontWeight: 'bold' },
  translucentWhiteBtn: { backgroundColor: 'rgba(0, 0, 0, 0.04)', width: '100%', paddingVertical: 15, borderRadius: 12, alignItems: 'center' },
  whiteBtnText: { color: '#475569', fontSize: 16, fontWeight: 'bold' }
});
