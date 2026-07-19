import React, { useState } from "react";
import { View, Text, TouchableOpacity, StatusBar, Modal, ScrollView, KeyboardAvoidingView, Platform, TextInput } from "react-native";
import { Svg, G, Line, Rect, Polygon } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { labStorage } from "../../../storage/labStorage";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import { LEFT, MOMENT_L, RIGHT_MASSES, RIGHT_DISTS, rightMoment, isBalanced } from "./moments-data";

const ACCENT = "#0ea5e9";
const STEP_LABELS = ["Right mass", "Distance", "Result"];
const PIV = [165, 120];

export default function PhysMomentsLab() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "p1-equilibrium-forces";
  const cfg = route.params?.config;

  const [mR, setMR] = useState(RIGHT_MASSES[1]);
  const [dR, setDR] = useState(RIGHT_DISTS[1]);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("Left load is fixed at 30 g, 40 cm from the pivot. Balance it on the right.");
  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const net = MOMENT_L - rightMoment(mR, dR);
  const tilt = Math.max(-18, Math.min(18, net * 0.03));

  function check() {
    haptic.light();
    if (isBalanced(mR, dR)) {
      setStatus("success");
      setMessage(`✅ Balanced! Left ${MOMENT_L} g·cm = right ${rightMoment(mR, dR)} g·cm. The beam is level.`);
    } else {
      setStatus("wrong");
      const dir = net > 0 ? "The left side is heavier — lighten the right or move it closer." : "The right side is heavier — add mass or move it further out.";
      setMessage(`❌ Not balanced (right = ${rightMoment(mR, dR)} g·cm). ${dir}`);
    }
  }

  function reset() {
    setMR(RIGHT_MASSES[1]); setDR(RIGHT_DISTS[1]); setStatus("idle"); setSaved(false); setNotes("");
    setMessage("Left load is fixed at 30 g, 40 cm from the pivot. Balance it on the right.");
  }

  async function saveReport() {
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "principle-moments",
      experimentTitle: experiment.title || "Principle of Moments",
      topicId,
      date: new Date().toLocaleDateString(),
      left: `${LEFT.m} g × ${LEFT.d} cm = ${MOMENT_L} g·cm`,
      right: `${mR} g × ${dR} cm = ${rightMoment(mR, dR)} g·cm`,
      result: isBalanced(mR, dR) ? "Beam balanced" : "Beam balanced (after adjustment)",
      status: "success",
      summary: `Balanced the left load (${MOMENT_L} g·cm) with a right load of ${mR} g at ${dR} cm (${rightMoment(mR, dR)} g·cm), confirming Σ clockwise = Σ anticlockwise moments.`,
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); setMessage("📝 Report saved."); } else setMessage("Could not save the report.");
  }

  const step = status === "success" ? 3 : 2;
  const Chip = ({ item, selected, onPick, suffix = "" }) => (
    <TouchableOpacity onPress={onPick} style={{ backgroundColor: selected ? "#e0f2fe" : theme.colors.surface, borderWidth: 1.5, borderColor: selected ? ACCENT : theme.colors.border, borderRadius: 10, paddingVertical: 8, paddingHorizontal: 11, margin: 3 }}>
      <Text style={{ fontWeight: "800", fontSize: 12.5, color: selected ? "#075985" : theme.colors.textMuted }}>{item}{suffix}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />
      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: ACCENT, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>{experiment.title || "Principle of Moments"}</Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center", paddingVertical: 10, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border, gap: 6 }}>
        {STEP_LABELS.map((l, i) => (
          <View key={l} style={{ alignItems: "center", marginHorizontal: 4 }}>
            <View style={{ width: 22, height: 22, borderRadius: 11, alignItems: "center", justifyContent: "center", backgroundColor: i < step ? ACCENT : i === step ? "#bae6fd" : "#e5e7eb" }}>
              <Text style={{ fontSize: 11, fontWeight: "800", color: i < step ? "#fff" : "#475569" }}>{i < step ? "✓" : i + 1}</Text>
            </View>
            <Text style={{ fontSize: 9, color: "#94a3b8", marginTop: 3, fontWeight: "600" }}>{l}</Text>
          </View>
        ))}
      </View>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Svg width={330} height={220} viewBox="0 0 330 220">
          {/* pivot support */}
          <Polygon points="155,120 175,120 165,150" fill="#475569" />
          <Line x1={165} y1={150} x2={165} y2={185} stroke="#475569" strokeWidth={3} />
          {/* beam rotates about pivot */}
          <G transform={`rotate(${tilt} ${PIV[0]} ${PIV[1]})`}>
            <Rect x={45} y={114} width={240} height={12} rx={3} fill={ACCENT} />
            {/* left load */}
            <Rect x={53} y={86} width={26} height={28} rx={3} fill="#16a34a" />
            <Line x1={66} y1={114} x2={66} y2={100} stroke="#0f172a" strokeWidth={1.5} />
            {/* right load */}
            <Rect x={251} y={86} width={26} height={28} rx={3} fill={status === "success" ? "#16a34a" : "#f59e0b"} />
            <Line x1={264} y1={114} x2={264} y2={100} stroke="#0f172a" strokeWidth={1.5} />
          </G>
        </Svg>
        <Text style={{ fontSize: 11, color: "#64748b", fontWeight: "700", marginTop: 6 }}>
          Left: {LEFT.m} g × {LEFT.d} cm = {MOMENT_L} g·cm  ·  Right: {mR} g × {dR} cm = {rightMoment(mR, dR)} g·cm
        </Text>
      </View>

      <View style={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 16, paddingTop: 14, paddingBottom: 18, shadowColor: "#000", shadowOffset: { width: 0, height: -3 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 10 }}>
        <View style={{ backgroundColor: status === "success" ? "#f0fdf4" : "#eff6ff", borderRadius: 12, padding: 12, borderWidth: 1, borderColor: status === "success" ? "#bbf7d0" : "#bae6fd", marginBottom: 12, minHeight: 58, justifyContent: "center" }}>
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
            <Text style={{ fontSize: 11, fontWeight: "800", color: "#6b7280", marginBottom: 4, letterSpacing: 0.4 }}>RIGHT MASS (g)</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 8 }}>
              {RIGHT_MASSES.map((m) => <Chip key={m} item={m} selected={mR === m} onPick={() => { setMR(m); setStatus("idle"); }} />)}
            </View>
            <Text style={{ fontSize: 11, fontWeight: "800", color: "#6b7280", marginBottom: 4, letterSpacing: 0.4 }}>DISTANCE FROM PIVOT (cm)</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 10 }}>
              {RIGHT_DISTS.map((d) => <Chip key={d} item={d} selected={dR === d} onPick={() => { setDR(d); setStatus("idle"); }} />)}
            </View>
            <View style={{ flexDirection: "row" }}>
              <Btn label="✓ Check balance" onPress={check} accent={ACCENT} />
              <Btn label="↺ Reset" onPress={reset} accent="#94a3b8" />
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
              <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>Beam Balanced!</Text>
              <View style={{ backgroundColor: theme.colors.surfaceMuted, borderRadius: 12, padding: 14, marginVertical: 14 }}>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>• Left: <Text style={{ fontWeight: "800" }}>{LEFT.m} g × {LEFT.d} cm = {MOMENT_L} g·cm</Text></Text>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Right: {mR} g × {dR} cm = {rightMoment(mR, dR)} g·cm</Text>
              </View>
              <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.textMuted, marginBottom: 6 }}>Your report / observations</Text>
              <TextInput style={{ borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }} placeholder="e.g. The beam was level when the two moments were equal." value={notes} onChangeText={setNotes} multiline />
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
