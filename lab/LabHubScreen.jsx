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
import { WHATSAPP_NUMBER } from "../constants";
import BookingModal from "../components/BookingModal";
import BannerAd from "../components/BannerAd";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useTheme, hexToRgba } from "../../theme";

// Premium pressable with haptic-like scale effect on click
function PremiumPressable({ onPress, style, children, disabled }) {
  const scaleValue = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    if (disabled) return;
    Animated.spring(scaleValue, {
      toValue: 0.96,
      useNativeDriver: true,
      tension: 120,
      friction: 7,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
      tension: 120,
      friction: 7,
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

export default function LabHubScreen() {
  const navigation = useNavigation();
  const theme = useTheme();
  const [bookingVisible, setBookingVisible] = useState(false);
  const [studentName, setStudentName] = useState("");
  const [preferredTime, setPreferredTime] = useState("");

  function openBooking() {
    setStudentName("");
    setPreferredTime("");
    setBookingVisible(true);
  }

  function handleBookNow() {
    if (!studentName.trim() || !preferredTime.trim()) {
      alert("Please fill in your name and preferred time.");
      return;
    }
    const msg = `Hello, I would like to book a 1-on-1 virtual mentoring session for SciPractice Lab.\n\nName: ${studentName}\nTopic: General Science & Virtual Lab Tutoring\nPreferred Time: ${preferredTime}\n\nPlease confirm availability and payment details.`;
    Linking.openURL(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`);
    setBookingVisible(false);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={['top', 'left', 'right']}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />

      <BookingModal
        visible={bookingVisible}
        onClose={() => setBookingVisible(false)}
        bookingTopic="General Science & Lab Tutoring"
        studentName={studentName}
        setStudentName={setStudentName}
        preferredTime={preferredTime}
        setPreferredTime={setPreferredTime}
        onBookNow={handleBookNow}
      />

      {/* Header */}
      <View style={{ paddingHorizontal: 16, paddingTop: 16, paddingBottom: 12, alignItems: "center", borderBottomWidth: 1, borderBottomColor: theme.colors.surfaceAlt, backgroundColor: theme.colors.surface }}>
        <Text style={{ fontSize: 24, fontWeight: "900", color: theme.colors.text, letterSpacing: -0.5 }}>🧪 Virtual Lab Suite</Text>
        <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4, textAlign: "center" }}>
          Run simulations, inspect models, or book a session with a specialist
        </Text>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 40, gap: 14 }} showsVerticalScrollIndicator={false}>

        {/* PREVIOUS LAB RESULTS */}
        <PremiumPressable onPress={() => navigation.navigate("LabResultsScreen")} style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: hexToRgba(theme.colors.primary, 0.08),
          borderWidth: 1,
          borderColor: hexToRgba(theme.colors.primary, 0.15),
          borderRadius: 14,
          padding: 14,
        }}>
          <Text style={{ fontSize: 16, marginRight: 8 }}>📋</Text>
          <Text style={{ fontSize: 13, fontWeight: "700", color: theme.colors.primary }}>Review Previous Lab Results</Text>
        </PremiumPressable>

        {/* CHEMISTRY CARD */}
        <PremiumPressable onPress={() => navigation.navigate("ChemistryExperiments")} style={{
          backgroundColor: hexToRgba(theme.colors.primary, 0.08),
          borderWidth: 1,
          borderColor: hexToRgba(theme.colors.primary, 0.35),
          borderRadius: 16,
          padding: 18,
          flexDirection: "row",
          alignItems: "center",
          shadowColor: theme.colors.primary,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.03,
          shadowRadius: 8,
          elevation: 2,
        }}>
          <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: hexToRgba(theme.colors.primary, 0.12), alignItems: "center", justifyContent: "center", marginRight: 16 }}>
            <Ionicons name="beaker" size={24} color={theme.colors.primary} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 18, fontWeight: "800", color: theme.colors.primaryDark }}>Chemistry Lab</Text>
            <Text style={{ fontSize: 12, color: theme.colors.primaryDark, marginTop: 2 }}>Titrations, Gas Chambers, Redox Cells</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={theme.colors.textFaint} />
        </PremiumPressable>

        {/* PHYSICS CARD */}
        <PremiumPressable onPress={() => navigation.navigate("PhysicsExperiments")} style={{
          backgroundColor: hexToRgba(theme.colors.accentPurple, 0.08),
          borderWidth: 1,
          borderColor: hexToRgba(theme.colors.accentPurple, 0.4),
          borderRadius: 16,
          padding: 18,
          flexDirection: "row",
          alignItems: "center",
          shadowColor: theme.colors.accentPurple,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.03,
          shadowRadius: 8,
          elevation: 2,
        }}>
          <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: hexToRgba(theme.colors.accentPurple, 0.12), alignItems: "center", justifyContent: "center", marginRight: 16 }}>
            <Ionicons name="flash" size={24} color={theme.colors.accentPurple} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 18, fontWeight: "800", color: theme.colors.accentPurple }}>Physics Lab</Text>
            <Text style={{ fontSize: 12, color: theme.colors.accentPurple, marginTop: 2 }}>Pendulums, Circuit Sandbox, Optics</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={theme.colors.textFaint} />
        </PremiumPressable>

        {/* BIOLOGY CARD */}
        <PremiumPressable onPress={() => navigation.navigate("BiologyExperiments")} style={{
          backgroundColor: theme.colors.accentBlueSoft,
          borderWidth: 1,
          borderColor: hexToRgba(theme.colors.accentBlue, 0.4),
          borderRadius: 16,
          padding: 18,
          flexDirection: "row",
          alignItems: "center",
          shadowColor: theme.colors.accentBlue,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.03,
          shadowRadius: 8,
          elevation: 2,
        }}>
          <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: hexToRgba(theme.colors.accentBlue, 0.12), alignItems: "center", justifyContent: "center", marginRight: 16 }}>
            <Ionicons name="leaf" size={24} color={theme.colors.accentBlue} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 18, fontWeight: "800", color: theme.colors.accentBlue }}>Biology Lab</Text>
            <Text style={{ fontSize: 12, color: theme.colors.accentBlue, marginTop: 2 }}>Microscope Slides, Osmosis, Photosynthesis</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={theme.colors.textFaint} />
        </PremiumPressable>

        <BannerAd />

        {/* BOOK A TUTOR CARD */}
        <PremiumPressable onPress={openBooking} style={{
          backgroundColor: "#fff7ed",
          borderWidth: 1,
          borderColor: "#fed7aa",
          borderRadius: 16,
          padding: 18,
          flexDirection: "row",
          alignItems: "center",
          shadowColor: "#ea580c",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.03,
          shadowRadius: 8,
          elevation: 2,
          marginTop: 10,
        }}>
          <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: "#ffedd5", alignItems: "center", justifyContent: "center", marginRight: 16 }}>
            <Ionicons name="calendar" size={24} color="#ea580c" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 18, fontWeight: "800", color: "#c2410c" }}>Book a Tutor</Text>
            <Text style={{ fontSize: 12, color: "#c2410c", marginTop: 2 }}>1-on-1 practical walkthroughs on Zoom</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#ea580c" />
        </PremiumPressable>
      </ScrollView>
    </SafeAreaView>
  );
}