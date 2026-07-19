import React, { useState } from "react";
import { View, Text, TouchableOpacity, StatusBar, Modal, ScrollView, KeyboardAvoidingView, Platform, TextInput } from "react-native";
import { Svg, Polygon, Circle, Line } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { labStorage } from "../../../storage/labStorage";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import { POLY_POINTS, S1, S2, COG, TOL, within } from "./centre-gravity-data";

const ACCENT = "#0ea5e9";
const STEP_LABELS = ["Mark CoG", "Suspend", "Result"];
const W = 330, H = 220;

export default function PhysCentreGravityLab() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "p1-equilibrium-forces";
  const cfg = route.params?.config;

  const [guess, setGuess] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("Tap the lamina where you think its centre of gravity is.");
  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  function onTap(e) {
    if (revealed) return;
    haptic.light();
    const { locationX, locationY } = e.nativeEvent;
    setGuess([locationX, locationY]);
    setStatus("idle");
  }

  function suspend() {
    haptic.light();
    if (!guess) return setMessage("Tap the lamina to mark your guess first.");
    setRevealed(true);
    setMessage("Plumb lines from the two holes cross at the true CoG. Now check your mark.");
  }

  function check() {
    haptic.light();
    if (!guess) return setMessage("Tap the lamina to mark your guess first.");
    if (within(guess, COG)) {
      setStatus("success");
      setMessage("✅ Spot on! Your mark is at the centre of gravity.");
    } else {
      setStatus("wrong");
      setMessage(`❌ A bit off — the true CoG is where the plumb lines cross. Try again.`);
    }
  }

  function reset() {
    setGuess(null); setRevealed(false); setStatus("idle"); setSaved(false); setNotes("");
    setMessage("Tap the lamina where you think its centre of gravity is.");
  }

  async function saveReport() {
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "centre-of-gravity",
      experimentTitle: experiment.title || "Centre of Gravity of a Lamina",
      topicId,
      date: new Date().toLocaleDateString(),
      cog: `(${COG[0].toFixed(0)}, ${COG[1].toFixed(0)})`,
      result: "Located the CoG by the plumb-line method",
      status: "success",
      summary: `Marked a guess on the irregular lamina, revealed the plumb lines from two holes, and confirmed the CoG where they cross.`,
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); setMessage("📝 Report saved."); } else setMessage("Could not save the report.");
  }

  const step = revealed ? (status === "success" ? 3 : 2) : guess ? 1 : 0;
  const near = guess && within(guess, COG);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />
      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: ACCENT, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>{experiment.title || "Centre of Gravity"}</Text>
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
        <View style={{ width: W, height: H }} onTouchEnd={onTap}>
          <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
            <Polygon points={POLY_POINTS} fill="#bae6fd" stroke={ACCENT} strokeWidth={2} />
            {/* holes */}
            <Circle cx={S1[0]} cy={S1[1]} r={4} fill="#0f172a" />
            <Circle cx={S2[0]} cy={S2[1]} r={4} fill="#0f172a" />
            {/* plumb lines revealed */}
            {revealed && (
              <>
                <Line x1={S1[0]} y1={S1[1]} x2={COG[0]} y2={COG[1]} stroke="#ef4444" strokeWidth={1.5} strokeDasharray="5 4" />
                <Line x1={S2[0]} y1={S2[1]} x2={COG[0]} y2={COG[1]} stroke="#ef4444" strokeWidth={1.5} strokeDasharray="5 4" />
                <Circle cx={COG[0]} cy={COG[1]} r={6} fill="#ef4444" />
              </>
            )}
            {/* user guess */}
            {guess && <Circle cx={guess[0]} cy={guess[1]} r={7} fill={status === "success" ? ACCENT : "#f59e0b"} stroke="#fff" strokeWidth={2} />}
          </Svg>
        </View>
        <Text style={{ fontSize: 11, color: "#64748b", fontWeight: "700", marginTop: 10 }}>
          {revealed ? "Red = true CoG from plumb lines" : "Tap inside the shape to mark"}
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
        ) : !revealed ? (
          <View style={{ flexDirection: "row" }}>
            <Btn label="🔍 Reveal plumb lines" onPress={suspend} accent={ACCENT} />
            <Btn label="↺ Clear" onPress={reset} accent="#94a3b8" />
          </View>
        ) : (
          <View style={{ flexDirection: "row" }}>
            <Btn label="✓ Check" onPress={check} accent={ACCENT} />
            <Btn label="↺ Clear" onPress={reset} accent="#94a3b8" />
          </View>
        )}
      </View>

      <Modal visible={reportOpen} transparent animationType="slide" onRequestClose={() => setReportOpen(false)}>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.45)", justifyContent: "flex-end" }}>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ maxHeight: "88%" }}>
            <ScrollView style={{ maxHeight: "100%" }} contentContainerStyle={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 24, paddingBottom: 32 }} keyboardShouldPersistTaps="handled">
              <View style={{ width: 40, height: 4, backgroundColor: "#d1d5db", borderRadius: 2, alignSelf: "center", marginBottom: 18 }} />
              <Text style={{ fontSize: 26, textAlign: "center" }}>🎉</Text>
              <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>CoG Located!</Text>
              <View style={{ backgroundColor: theme.colors.surfaceMuted, borderRadius: 12, padding: 14, marginVertical: 14 }}>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>• True CoG: <Text style={{ fontWeight: "800" }}>({COG[0].toFixed(0)}, {COG[1].toFixed(0)})</Text></Text>
                <Text style={{ fontSize: 12, color: "#94a3b8", marginTop: 6 }}>Plumb-line construction from two holes.</Text>
              </View>
              <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.textMuted, marginBottom: 6 }}>Your report / observations</Text>
              <TextInput style={{ borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }} placeholder="e.g. The lamina balanced when pinned at the crossing point of the two plumb lines." value={notes} onChangeText={setNotes} multiline />
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
