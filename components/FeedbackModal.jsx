import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Modal, Linking, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme, hexToRgba } from "../theme";
import { haptic } from "../haptic";
import { Pressable } from "./ui";
import { WHATSAPP_NUMBER } from "../constants";

// "Support us" sheet. Ask-first: shown on first launch (after a beat) and
// periodically afterwards (gated by feedbackStorage). Never blocks the app.
export default function FeedbackModal({ visible, onClose }) {
  const theme = useTheme();

  function leaveFeedback() {
    haptic.success();
    const msg = "Hi SciPractice team! I'd like to share feedback about the app:";
    Linking.openURL(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`);
    onClose();
  }

  function rateApp() {
    // Re-use the feedback channel for now (store-review link is deploy-time).
    haptic.success();
    leaveFeedback();
  }

  if (!visible) return null;

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} />
      <View style={{ flex: 1, backgroundColor: "rgba(15,23,42,0.5)", justifyContent: "center", alignItems: "center", padding: 24 }}>
        <View style={{ width: "100%", maxWidth: 380, backgroundColor: theme.colors.surface, borderRadius: 24, padding: 24, borderWidth: 1, borderColor: theme.colors.border, ...theme.shadowLg }}>
          <View style={{ alignItems: "center", marginBottom: 14 }}>
            <View style={{ width: 64, height: 64, borderRadius: 32, backgroundColor: hexToRgba(theme.colors.primary, 0.14), alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
              <Text style={{ fontSize: 32 }}>💬</Text>
            </View>
            <Text style={{ fontSize: 19, fontWeight: "800", color: theme.colors.text, textAlign: "center" }}>Support us with your feedback</Text>
            <Text style={{ fontSize: 13.5, color: theme.colors.textMuted, textAlign: "center", marginTop: 6, lineHeight: 20 }}>
              SciPractice is free and built for students. A quick rating or message helps us keep improving it.
            </Text>
          </View>

          <Pressable
            onPress={rateApp}
            style={{
              backgroundColor: theme.colors.primary,
              borderRadius: 14,
              paddingVertical: 14,
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <Text style={{ color: theme.colors.onPrimary, fontWeight: "800", fontSize: 15 }}>⭐ Rate the app</Text>
          </Pressable>

          <Pressable
            onPress={leaveFeedback}
            style={{
              backgroundColor: theme.colors.surface,
              borderWidth: 1,
              borderColor: theme.colors.border,
              borderRadius: 14,
              paddingVertical: 14,
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <Text style={{ color: theme.colors.text, fontWeight: "800", fontSize: 15 }}>✍️ Send feedback</Text>
          </Pressable>

          <TouchableOpacity onPress={() => { haptic.light(); onClose(); }} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
            <Text style={{ textAlign: "center", color: theme.colors.textFaint, fontSize: 13, fontWeight: "600", marginTop: 4 }}>Maybe later</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
