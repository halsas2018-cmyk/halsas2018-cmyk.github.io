import React from "react";
import { View, Text, TextInput, TouchableOpacity, Modal } from "react-native";
import s from "../styles";
import { SESSION_PRICES } from "../constants";

// ─── BOOKING MODAL ────────────────────────────────────────────────────────────
// Edit SESSION_PRICES in constants.js to change prices
// Edit WHATSAPP_NUMBER in constants.js to change the booking number

export default function BookingModal({
  visible,
  onClose,
  bookingTopic,
  studentName,
  setStudentName,
  preferredTime,
  setPreferredTime,
  onBookNow
}) {
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={s.modalOverlay}>
        <View style={s.modalCard}>
          <View style={s.modalHeader}>
            <Text style={s.modalTitle}>📅 Book a Tutorial</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={s.modalClose}>✕</Text>
            </TouchableOpacity>
          </View>

          <Text style={s.modalTopic}>{bookingTopic}</Text>

          <Text style={s.inputLabel}>Your Name</Text>
          <TextInput
            value={studentName}
            onChangeText={setStudentName}
            placeholder="Enter your full name"
            placeholderTextColor="#9ca3af"
            style={s.input}
          />

          <Text style={s.inputLabel}>Preferred Time</Text>
          <TextInput
            value={preferredTime}
            onChangeText={setPreferredTime}
            placeholder="e.g. Saturday 3pm"
            placeholderTextColor="#9ca3af"
            style={s.input}
          />

          <View style={s.sessionBox}>
            <Text style={s.sessionLabel}>SESSION OPTIONS</Text>
            {SESSION_PRICES.map((session, i) => (
              <View key={i} style={s.sessionRow}>
                <Text style={s.sessionName}>{session.duration} — {session.label}</Text>
                <Text style={s.sessionPrice}>{session.price}</Text>
              </View>
            ))}
          </View>

          <TouchableOpacity style={s.whatsappBtn} onPress={onBookNow}>
            <Text style={s.btnText}>Continue on WhatsApp →</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
