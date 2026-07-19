import React, { useState } from "react";
import { View, Text, TouchableOpacity, StatusBar, Modal, ScrollView, KeyboardAvoidingView, Platform, TextInput } from "react-native";
import { Svg, Path, Circle, Line, Rect } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { labStorage } from "../../../storage/labStorage";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import { F0, FREQS, current, isResonant } from "./lcr-resonance-data";

const ACCENT = "#10b981";
const STEP_LABELS = ["Tune f", "Read I", "Result"];
const IMAX = 10 / 10; // V/R = 1.0 A

export default function PhysLcrResonanceLab() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "p5-ac-circuits";
  const cfg = route.params?.config;

  const [f, setF] = useState(FREQS[2]);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("Sweep the frequency and watch the ammeter — find where the current is maximum.");
  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const I = current(f);
  const barW = Math.max(6, (I / IMAX) * 260);

  function tune(nf) {
    haptic.light();
    setF(nf);
    setStatus("idle");
    if (isResonant(nf)) {
      setStatus("success");
      setMessage(`✅ Resonance! At f = ${nf} Hz, X_L = X_C so Z = R and current is maximum (I = V/R = ${I.toFixed(3)} A).`);
    } else {
      setMessage(`f = ${nf} Hz → I = ${I.toFixed(3)} A. ${nf < F0 ? "Increase" : "Decrease"} the frequency toward resonance (~${F0.toFixed(0)} Hz).`);
    }
  }

  function reset() {
    setF(FREQS[2]); setStatus("idle"); setSaved(false); setNotes("");
    setMessage("Sweep the frequency and watch the ammeter — find where the current is maximum.");
  }

  async function saveReport() {
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "lcr-resonance",
      experimentTitle: experiment.title || "Resonance in an LCR Circuit",
      topicId,
      date: new Date().toLocaleDateString(),
      resonantFreq: `${F0.toFixed(1)} Hz`,
      currentAtResonance: `${IMAX.toFixed(3)} A`,
      result: `Found resonance near ${F0.toFixed(0)} Hz (I_max ≈ ${IMAX.toFixed(2)} A)`,
      status: "success",
      summary: `Swept frequency of the series LCR circuit; current peaked at f₀ = 1/(2π√LC) ≈ ${F0.toFixed(0)} Hz where X_L = X_C and I = V/R = ${IMAX.toFixed(2)} A.`,
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); setMessage("📝 Report saved."); } else setMessage("Could not save the report.");
  }

  const step = status === "success" ? 3 : 2;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />
      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: ACCENT, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>{experiment.title || "LCR Resonance"}</Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center", paddingVertical: 10, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border, gap: 6 }}>
        {STEP_LABELS.map((l, i) => (
          <View key={l} style={{ alignItems: "center", marginHorizontal: 4 }}>
            <View style={{ width: 22, height: 22, borderRadius: 11, alignItems: "center", justifyContent: "center", backgroundColor: i < step ? ACCENT : i === step ? "#a7f3d0" : "#e5e7eb" }}>
              <Text style={{ fontSize: 11, fontWeight: "800", color: i < step ? "#fff" : "#475569" }}>{i < step ? "✓" : i + 1}</Text>
            </View>
            <Text style={{ fontSize: 9, color: "#94a3b8", marginTop: 3, fontWeight: "600" }}>{l}</Text>
          </View>
        ))}
      </View>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Svg width={330} height={210} viewBox="0 0 330 210">
          <Path d="M60 40 H270 a14 14 0 0 1 14 14 V150 a14 14 0 0 1 -14 14 H60 a14 14 0 0 1 -14 -14 V54 a14 14 0 0 1 14 -14 Z" stroke="#475569" strokeWidth={3} fill="none" />
          {/* AC source */}
          <Circle cx={165} cy={40} r={16} stroke={ACCENT} strokeWidth={2.5} fill="#ecfdf5" />
          <Svg.Text x={165} y={45} fontSize={16} fill={ACCENT} textAnchor="middle" fontWeight="800">~</Svg.Text>
          {/* resistor (right) */}
          <Path d="M284 90 l8 6 l-16 12 l16 12 l-8 6" stroke="#475569" strokeWidth={2.5} fill="none" />
          {/* inductor (left) */}
          <Path d="M46 120 q10 -14 20 0 q10 -14 20 0 q10 -14 20 0" stroke="#475569" strokeWidth={2.5} fill="none" />
          {/* capacitor (top-left) */}
          <Line x1={95} y1={26} x2={95} y2={40} stroke="#475569" strokeWidth={2.5} />
          <Line x1={105} y1={26} x2={105} y2={40} stroke="#475569" strokeWidth={2.5} />
          {/* ammeter */}
          <Circle cx={165} cy={170} r={20} stroke="#0ea5e9" strokeWidth={2.5} fill="#eff6ff" />
          <Svg.Text x={165} y={167} fontSize={11} fill="#0ea5e9" textAnchor="middle" fontWeight="800">A</Svg.Text>
          <Svg.Text x={165} y={180} fontSize={9} fill="#0f172a" textAnchor="middle">{I.toFixed(3)} A</Svg.Text>
        </Svg>
        {/* current bar */}
        <View style={{ width: 260, height: 14, backgroundColor: "#e5e7eb", borderRadius: 7, marginTop: 6, overflow: "hidden" }}>
          <View style={{ width: barW, height: 14, backgroundColor: status === "success" ? ACCENT : "#f59e0b", borderRadius: 7 }} />
        </View>
        <Text style={{ fontSize: 11, color: "#64748b", fontWeight: "700", marginTop: 4 }}>Circuit current: {I.toFixed(3)} A  (max ≈ {IMAX.toFixed(2)} A)</Text>
      </View>

      <View style={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 16, paddingTop: 14, paddingBottom: 18, shadowColor: "#000", shadowOffset: { width: 0, height: -3 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 10 }}>
        <View style={{ backgroundColor: status === "success" ? "#f0fdf4" : "#eff6ff", borderRadius: 12, padding: 12, borderWidth: 1, borderColor: status === "success" ? "#bbf7d0" : "#a7f3d0", marginBottom: 12, minHeight: 58, justifyContent: "center" }}>
          <Text style={{ fontSize: 13, lineHeight: 19, color: theme.colors.textMuted }}>{message}</Text>
        </View>
        {status === "success" ? (
          <>
            <Btn label="📝 View Report" onPress={() => setReportOpen(true)} accent={ACCENT} full />
            <TouchableOpacity onPress={reset} style={{ marginTop: 10, alignItems: "center", paddingVertical: 8 }}>
              <Text style={{ color: "#64748b", fontWeight: "700", fontSize: 13 }}>↺ Reset Experiment</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={{ fontSize: 11, fontWeight: "800", color: "#6b7280", marginBottom: 6, letterSpacing: 0.4 }}>FREQUENCY (Hz)</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 8 }}>
              {FREQS.map((n) => (
                <TouchableOpacity key={n} onPress={() => tune(n)} style={{ backgroundColor: f === n ? "#d1fae5" : theme.colors.surface, borderWidth: 1.5, borderColor: f === n ? ACCENT : theme.colors.border, borderRadius: 10, paddingVertical: 8, paddingHorizontal: 12, margin: 3 }}>
                  <Text style={{ fontWeight: "800", fontSize: 13, color: f === n ? "#065f46" : theme.colors.textMuted }}>{n}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <Btn label="↺ Reset" onPress={reset} accent="#94a3b8" full />
          </>
        )}
      </View>

      <Modal visible={reportOpen} transparent animationType="slide" onRequestClose={() => setReportOpen(false)}>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.45)", justifyContent: "flex-end" }}>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ maxHeight: "88%" }}>
            <ScrollView style={{ maxHeight: "100%" }} contentContainerStyle={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 24, paddingBottom: 32 }} keyboardShouldPersistTaps="handled">
              <View style={{ width: 40, height: 4, backgroundColor: "#d1d5db", borderRadius: 2, alignSelf: "center", marginBottom: 18 }} />
              <Text style={{ fontSize: 26, textAlign: "center" }}>🎉</Text>
              <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>Resonance Found!</Text>
              <View style={{ backgroundColor: theme.colors.surfaceMuted, borderRadius: 12, padding: 14, marginVertical: 14 }}>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>• Resonant f₀: <Text style={{ fontWeight: "800" }}>{F0.toFixed(1)} Hz</Text></Text>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Max current: {IMAX.toFixed(2)} A (I = V/R)</Text>
              </View>
              <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.textMuted, marginBottom: 6 }}>Your report / observations</Text>
              <TextInput style={{ borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }} placeholder="e.g. The ammeter peaked at f₀ where X_L = X_C." value={notes} onChangeText={setNotes} multiline />
              {saved ? (
                <View style={{ marginTop: 14, backgroundColor: "#f0fdf4", borderRadius: 12, padding: 14, alignItems: "center" }}>
                  <Text style={{ color: ACCENT, fontWeight: "700" }}>📝 Saved to your phone!</Text>
                </View>
              ) : (
                <TouchableOpacity onPress={saveReport} style={{ marginTop: 14, backgroundColor: ACCENT, borderRadius: 12, paddingVertical: 14 }}>
                  <Text style={{ color: "#fff", textAlign: "center", fontWeight: "700", fontSize: 15 }}>Save Report</Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity onPress={() => { setReportOpen(false); navigation.goBack(); }} style={{ marginTop: 10, backgroundColor: "#f1f5f9", borderRadius: 12, paddingVertical: 13 }}>
                <Text style={{ color: "#0f172a", textAlign: "center", fontWeight: "700", fontSize: 14 }}>Done</Text>
              </TouchableOpacity>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

function Btn({ label, onPress, disabled, accent = ACCENT, full }) {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} activeOpacity={0.85} style={{ flex: full ? undefined : 1, width: full ? "100%" : undefined, backgroundColor: disabled ? "#e5e7eb" : accent, borderRadius: 11, paddingVertical: 12, alignItems: "center", justifyContent: "center", marginHorizontal: full ? 0 : 3, opacity: disabled ? 0.55 : 1 }}>
      <Text style={{ color: disabled ? "#94a3b8" : "#fff", fontWeight: "800", fontSize: full ? 14 : 11.5 }} numberOfLines={1}>{label}</Text>
    </TouchableOpacity>
  );
}
