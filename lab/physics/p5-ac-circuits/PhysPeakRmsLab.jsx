import React, { useState } from "react";
import { View, Text, TouchableOpacity, StatusBar, Modal, ScrollView, KeyboardAvoidingView, Platform, TextInput } from "react-native";
import { Svg, Path, Line, Rect } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { labStorage } from "../../../storage/labStorage";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import { PEAK_DIV, VOLTS_PER_DIV, vPeak, vRms, rmsOptions } from "./peak-rms-data";

const ACCENT = "#10b981";
const STEP_LABELS = ["Set V/DIV", "Read", "Result"];
const W = 300, H = 200, MIDY = 100, DIV = 22, AMP = PEAK_DIV * DIV, WL = 120;

function sinePath(voltsDiv) {
  // amplitude is fixed at PEAK_DIV divisions tall
  let d = "";
  for (let x = 0; x <= W; x += 4) {
    const y = MIDY - AMP * Math.sin((2 * Math.PI * x) / WL);
    d += (x === 0 ? "M" : "L") + x + " " + y.toFixed(1);
  }
  return d;
}

export default function PhysPeakRmsLab() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "p5-ac-circuits";
  const cfg = route.params?.config;

  const [vd, setVd] = useState(VOLTS_PER_DIV[1]);
  const [picked, setPicked] = useState(null);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("Set VOLTS/DIV, then read the peak height (4 divisions) from the trace.");
  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const vp = vPeak(vd);
  const vr = vRms(vd);

  function setDiv(v) {
    haptic.light();
    setVd(v); setPicked(null); setStatus("idle");
    setMessage(`Trace peak = 4 divisions. With ${v} V/DIV, Vₚ = ${vp} V. Now pick Vᵣₘₛ = Vₚ/√2.`);
  }

  function pick(v) {
    haptic.light();
    setPicked(v);
    if (Math.abs(v - vr) < 0.06) {
      setStatus("success");
      setMessage(`✅ Correct! Vₚ = ${vp} V, so Vᵣₘₛ = ${vp}/√2 ≈ ${vr.toFixed(1)} V.`);
    } else {
      setStatus("wrong");
      setMessage(`❌ Vᵣₘₛ = Vₚ/√2 = ${vr.toFixed(1)} V. Try the division again.`);
    }
  }

  function reset() {
    setVd(VOLTS_PER_DIV[1]); setPicked(null); setStatus("idle"); setSaved(false); setNotes("");
    setMessage("Set VOLTS/DIV, then read the peak height (4 divisions) from the trace.");
  }

  async function saveReport() {
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "peak-rms",
      experimentTitle: experiment.title || "Peak and RMS Values",
      topicId,
      date: new Date().toLocaleDateString(),
      voltsPerDiv: `${vd} V/DIV`,
      peak: `${vp} V`,
      rms: `${vr.toFixed(2)} V`,
      result: `Vₚ = ${vp} V, Vᵣₘₛ ≈ ${vr.toFixed(1)} V`,
      status: "success",
      summary: `Read a peak of 4 divisions at ${vd} V/DIV → Vₚ = ${vp} V; converted to RMS Vᵣₘₛ = Vₚ/√2 ≈ ${vr.toFixed(1)} V.`,
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); setMessage("📝 Report saved."); } else setMessage("Could not save the report.");
  }

  const step = status === "success" ? 3 : picked ? 2 : 0;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />
      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: ACCENT, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>{experiment.title || "Peak & RMS"}</Text>
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
        <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
          <Rect x={0} y={0} width={W} height={H} fill="#0f172a" />
          {Array.from({ length: Math.floor(W / DIV) + 1 }).map((_, i) => (
            <Line key={"v" + i} x1={i * DIV} y1={0} x2={i * DIV} y2={H} stroke="#1e3a34" strokeWidth={1} />
          ))}
          {Array.from({ length: Math.floor(H / DIV) + 1 }).map((_, i) => (
            <Line key={"h" + i} x1={0} y1={i * DIV} x2={W} y2={i * DIV} stroke="#1e3a34" strokeWidth={1} />
          ))}
          <Line x1={0} y1={MIDY} x2={W} y2={MIDY} stroke="#14532d" strokeWidth={1.5} />
          <Path d={sinePath(vd)} stroke="#34d399" strokeWidth={2.5} fill="none" />
        </Svg>
        <Text style={{ fontSize: 11, color: "#64748b", fontWeight: "700", marginTop: 8 }}>
          VOLTS/DIV = {vd} V  ·  peak = 4 div  →  Vₚ = {vp} V
        </Text>
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
            <Text style={{ fontSize: 11, fontWeight: "800", color: "#6b7280", marginBottom: 6, letterSpacing: 0.4 }}>VOLTS / DIV</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 8 }}>
              {VOLTS_PER_DIV.map((v) => (
                <TouchableOpacity key={v} onPress={() => setDiv(v)} style={{ backgroundColor: vd === v ? "#d1fae5" : theme.colors.surface, borderWidth: 1.5, borderColor: vd === v ? ACCENT : theme.colors.border, borderRadius: 10, paddingVertical: 8, paddingHorizontal: 12, margin: 3 }}>
                  <Text style={{ fontWeight: "800", fontSize: 12.5, color: vd === v ? "#065f46" : theme.colors.textMuted }}>{v}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <Text style={{ fontSize: 11, fontWeight: "800", color: "#6b7280", marginBottom: 6, letterSpacing: 0.4 }}>PICK Vᵣₘₛ (V)</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {rmsOptions(vd).map((v) => (
                <TouchableOpacity key={v} onPress={() => pick(v)} style={{ backgroundColor: picked === v ? (status === "success" ? "#bbf7d0" : "#fee2e2") : theme.colors.bg, borderWidth: 1.5, borderColor: picked === v ? (status === "success" ? ACCENT : "#ef4444") : theme.colors.border, borderRadius: 10, paddingVertical: 9, paddingHorizontal: 13, margin: 3 }}>
                  <Text style={{ fontWeight: "800", fontSize: 13, color: picked === v ? (status === "success" ? "#14532d" : "#b91c1c") : theme.colors.textMuted }}>{v.toFixed(1)}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}
      </View>

      <Modal visible={reportOpen} transparent animationType="slide" onRequestClose={() => setReportOpen(false)}>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.45)", justifyContent: "flex-end" }}>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ maxHeight: "88%" }}>
            <ScrollView style={{ maxHeight: "100%" }} contentContainerStyle={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 24, paddingBottom: 32 }} keyboardShouldPersistTaps="handled">
              <View style={{ width: 40, height: 4, backgroundColor: "#d1d5db", borderRadius: 2, alignSelf: "center", marginBottom: 18 }} />
              <Text style={{ fontSize: 26, textAlign: "center" }}>🎉</Text>
              <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>Values Read!</Text>
              <View style={{ backgroundColor: theme.colors.surfaceMuted, borderRadius: 12, padding: 14, marginVertical: 14 }}>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>• VOLTS/DIV: <Text style={{ fontWeight: "800" }}>{vd} V</Text></Text>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Vₚ (peak): {vp} V</Text>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Vᵣₘₛ: {vr.toFixed(2)} V</Text>
              </View>
              <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.textMuted, marginBottom: 6 }}>Your report / observations</Text>
              <TextInput style={{ borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }} placeholder="e.g. Set the scope to 2 V/DIV; peak was 4 divisions." value={notes} onChangeText={setNotes} multiline />
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
