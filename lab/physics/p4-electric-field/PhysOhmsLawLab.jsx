import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Modal,
  ScrollView,
  Animated,
  Easing,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Svg, { Line, Circle, Text as SvgText, Rect } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { labStorage } from "../../../storage/labStorage";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import {
  VOLTAGE_STEPS,
  noisyCurrent,
  estimatedR,
  resistanceTolerance,
  current as idealCurrent,
} from "./ohms-law-data";

const ACCENT = "#0ea5e9";
const STEP_LABELS = ["Set up", "Record", "Graph", "Result"];

// ── tiny I–V plot ───────────────────────────────────────────────────────────
function IVGraph({ readings, R, width = 220, height = 140 }) {
  const PAD = { l: 36, r: 12, t: 12, b: 28 };
  const W = width - PAD.l - PAD.r;
  const H = height - PAD.t - PAD.b;
  const maxV = 6;
  const maxI = idealCurrent(maxV, R) * 1.15;

  function xOf(v) { return PAD.l + (v / maxV) * W; }
  function yOf(i) { return PAD.t + H - (i / maxI) * H; }

  // ideal line
  const x1 = xOf(0); const y1 = yOf(0);
  const x2 = xOf(maxV); const y2 = yOf(idealCurrent(maxV, R));

  return (
    <Svg width={width} height={height}>
      {/* axes */}
      <Line x1={PAD.l} y1={PAD.t} x2={PAD.l} y2={PAD.t + H} stroke="#cbd5e1" strokeWidth={1.5} />
      <Line x1={PAD.l} y1={PAD.t + H} x2={PAD.l + W} y2={PAD.t + H} stroke="#cbd5e1" strokeWidth={1.5} />
      {/* axis labels */}
      <SvgText x={PAD.l + W / 2} y={height - 2} fontSize="9" fill="#94a3b8" textAnchor="middle">V (volts)</SvgText>
      <SvgText x={8} y={PAD.t + H / 2} fontSize="9" fill="#94a3b8" textAnchor="middle" rotation="-90" originX={8} originY={PAD.t + H / 2}>I (A)</SvgText>
      {/* grid lines */}
      {[1,2,3,4,5,6].map(v => (
        <Line key={v} x1={xOf(v)} y1={PAD.t} x2={xOf(v)} y2={PAD.t+H} stroke="#f1f5f9" strokeWidth={1} />
      ))}
      {/* ideal line (dashed) */}
      <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={ACCENT} strokeWidth={1.2} strokeDasharray="4,3" opacity={0.4} />
      {/* data points */}
      {readings.filter(r => r.V > 0).map((r, i) => (
        <Circle key={i} cx={xOf(r.V)} cy={yOf(r.I)} r={4} fill={ACCENT} opacity={0.9} />
      ))}
      {/* best-fit line through origin if ≥2 points */}
      {readings.filter(r => r.V > 0).length >= 2 && (() => {
        const est = estimatedR(readings);
        if (!est) return null;
        const iy2 = idealCurrent(maxV, est);
        return <Line x1={xOf(0)} y1={yOf(0)} x2={xOf(maxV)} y2={yOf(iy2)} stroke="#f97316" strokeWidth={2} opacity={0.75} />;
      })()}
    </Svg>
  );
}

// ── circuit diagram ─────────────────────────────────────────────────────────
function CircuitDiagram({ V, I, R, isOn, bulbGlow }) {
  const glowOpacity = bulbGlow.interpolate({ inputRange: [0, 1], outputRange: [0, 0.85] });
  const glowScale  = bulbGlow.interpolate({ inputRange: [0, 1], outputRange: [0.6, 1.1] });
  return (
    <View style={{ alignItems: "center" }}>
      <Svg width={200} height={120} viewBox="0 0 200 120">
        {/* battery */}
        <Rect x={4} y={44} width={22} height={34} rx={4} fill="#1e293b" />
        <Rect x={9} y={48} width={12} height={8} rx={1} fill="#f59e0b" />
        <Rect x={9} y={62} width={12} height={8} rx={1} fill="#6b7280" />
        <SvgText x={15} y={91} fontSize="7" fill="#94a3b8" textAnchor="middle">{V}V</SvgText>
        {/* wires */}
        <Line x1={26} y1={52} x2={80} y2={52} stroke="#374151" strokeWidth={2.5} />
        <Line x1={80} y1={52} x2={80} y2={30} stroke="#374151" strokeWidth={2.5} />
        <Line x1={80} y1={30} x2={170} y2={30} stroke="#374151" strokeWidth={2.5} />
        <Line x1={170} y1={30} x2={170} y2={68} stroke="#374151" strokeWidth={2.5} />
        <Line x1={170} y1={68} x2={26} y2={68} stroke="#374151" strokeWidth={2.5} />
        {/* ammeter */}
        <Circle cx={110} cy={30} r={12} fill="#fff" stroke="#374151" strokeWidth={1.5} />
        <SvgText x={110} y={34} fontSize="10" fill="#374151" textAnchor="middle" fontWeight="700">A</SvgText>
        {/* resistor box */}
        <Rect x={134} y={56} width={36} height={18} rx={4} fill="#e0f2fe" stroke={ACCENT} strokeWidth={1.5} />
        <SvgText x={152} y={68} fontSize="8" fill={ACCENT} textAnchor="middle" fontWeight="700">{R}Ω</SvgText>
        {/* voltmeter (parallel) */}
        <Line x1={134} y1={65} x2={134} y2={90} stroke="#94a3b8" strokeWidth={1.2} strokeDasharray="3,2" />
        <Line x1={170} y1={65} x2={170} y2={90} stroke="#94a3b8" strokeWidth={1.2} strokeDasharray="3,2" />
        <Line x1={134} y1={90} x2={170} y2={90} stroke="#94a3b8" strokeWidth={1.2} strokeDasharray="3,2" />
        <Circle cx={152} cy={90} r={9} fill="#fff" stroke="#94a3b8" strokeWidth={1} />
        <SvgText x={152} y={93} fontSize="8" fill="#64748b" textAnchor="middle" fontWeight="700">V</SvgText>
        {/* current indicator on wire */}
        {isOn && (
          <Circle cx={110} cy={68} r={4} fill="#f97316" opacity={0.8} />
        )}
      </Svg>
      {/* bulb glow */}
      <Animated.View style={{
        width: 44, height: 44, borderRadius: 22,
        backgroundColor: "#fef08a",
        opacity: glowOpacity,
        transform: [{ scale: glowScale }],
        shadowColor: "#fbbf24", shadowRadius: 12, shadowOpacity: 0.9,
        elevation: 6,
        marginTop: -8,
      }} />
      <Text style={{ fontSize: 10, color: "#64748b", fontWeight: "700", marginTop: 2 }}>
        {isOn ? `I = ${I} A` : "Circuit open"}
      </Text>
    </View>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
export default function PhysOhmsLawLab() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "p4-electric-field";
  const cfg = route.params?.config || {};

  const R = cfg.R || 10;
  const Rlabel = cfg.Rlabel || `${R} Ω`;

  const [setupDone, setSetupDone] = useState(false);
  const [circuitOn, setCircuitOn] = useState(false);
  const [readings, setReadings] = useState([]); // { V, I }[]
  const [currentV, setCurrentV] = useState(0);  // voltage dial position index
  const [status, setStatus] = useState("idle"); // idle | recording | done | success
  const [message, setMessage] = useState("Set up the circuit: battery, ammeter, voltmeter, and resistor.");
  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const bulbGlow = useRef(new Animated.Value(0)).current;
  const glowLoop = useRef(null);

  const say = (m) => setMessage(m);

  const tol = resistanceTolerance(R);
  const estR = estimatedR(readings);
  const isCorrect = estR != null && Math.abs(estR - R) <= tol;
  const recordedAll = VOLTAGE_STEPS.every((v) => readings.some((r) => r.V === v));
  const step = setupDone ? (circuitOn ? (recordedAll ? 3 : 2) : 1) : 0;

  // current live reading
  const liveI = circuitOn ? noisyCurrent(VOLTAGE_STEPS[currentV], R) : 0;

  // bulb glow animation based on current
  useEffect(() => {
    if (circuitOn && VOLTAGE_STEPS[currentV] > 0) {
      const fraction = idealCurrent(VOLTAGE_STEPS[currentV], R) / idealCurrent(6, R);
      if (glowLoop.current) { glowLoop.current.stop(); glowLoop.current = null; }
      glowLoop.current = Animated.loop(
        Animated.sequence([
          Animated.timing(bulbGlow, { toValue: fraction, duration: 600, easing: Easing.inOut(Easing.quad), useNativeDriver: true }),
          Animated.timing(bulbGlow, { toValue: fraction * 0.85, duration: 600, easing: Easing.inOut(Easing.quad), useNativeDriver: true }),
        ])
      );
      glowLoop.current.start();
    } else {
      if (glowLoop.current) { glowLoop.current.stop(); glowLoop.current = null; }
      Animated.timing(bulbGlow, { toValue: 0, duration: 300, useNativeDriver: true }).start();
    }
    return () => { if (glowLoop.current) { glowLoop.current.stop(); glowLoop.current = null; } };
  }, [circuitOn, currentV]);

  function doSetup() {
    setSetupDone(true);
    say("Circuit assembled. ✓ Close the switch to connect the battery.");
  }

  function closeSwitch() {
    if (!setupDone) return say("Set up the circuit first! 🔧");
    setCircuitOn(true);
    setStatus("recording");
    say(`Switch closed — circuit live. Dial V = ${VOLTAGE_STEPS[currentV]} V and tap 'Record reading'.`);
  }

  function dialUp() {
    if (currentV < VOLTAGE_STEPS.length - 1) {
      const next = currentV + 1;
      setCurrentV(next);
      say(`Voltage set to ${VOLTAGE_STEPS[next]} V. Tap 'Record reading' to log the ammeter value.`);
    }
  }

  function dialDown() {
    if (currentV > 0) {
      const next = currentV - 1;
      setCurrentV(next);
      say(`Voltage set to ${VOLTAGE_STEPS[next]} V.`);
    }
  }

  function recordReading() {
    haptic.light();
    const v = VOLTAGE_STEPS[currentV];
    const i = noisyCurrent(v, R);
    // Replace or add reading for this voltage
    setReadings((prev) => {
      const without = prev.filter((r) => r.V !== v);
      return [...without, { V: v, I: i }].sort((a, b) => a.V - b.V);
    });
    say(`✓ Recorded: V = ${v} V, I = ${i} A. ${currentV < VOLTAGE_STEPS.length - 1 ? "Dial up and record the next step." : "All voltages recorded! Open the switch and view results."}`);
    if (VOLTAGE_STEPS.every((sv) => sv === v || readings.some((r) => r.V === sv))) {
      // check if this was the last one
    }
  }

  function openSwitch() {
    setCircuitOn(false);
    if (readings.filter((r) => r.V > 0).length < 3) {
      return say("⚠️ You need at least 3 voltage readings before finishing. Close the switch again.");
    }
    setStatus("done");
    const est = estimatedR(readings);
    const ok = est != null && Math.abs(est - R) <= tol;
    if (ok) {
      say(`✅ Excellent! Your estimated R = ${est} Ω — matches the true ${R} Ω within ±${tol} Ω. Ohm's law confirmed!`);
    } else if (est != null) {
      say(`Your estimated R = ${est} Ω (true value: ${R} Ω). ${Math.abs(est - R) <= tol * 2 ? "Close! Check your readings and try again." : "Off — try recording more voltage steps for a better fit."}`);
    } else {
      say("Not enough data to estimate R. Record at least 2 non-zero voltage steps.");
    }
  }

  function reset() {
    if (glowLoop.current) { glowLoop.current.stop(); glowLoop.current = null; }
    bulbGlow.setValue(0);
    setSetupDone(false);
    setCircuitOn(false);
    setReadings([]);
    setCurrentV(0);
    setStatus("idle");
    say("Bench reset. Set up the circuit to begin.");
  }

  async function saveReport() {
    const est = estimatedR(readings);
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "ohms-law",
      experimentTitle: experiment.title || "Ohm's Law & Resistance",
      topicId,
      date: new Date().toLocaleDateString(),
      resistor: Rlabel,
      trueR: R,
      estimatedR: est,
      readings: readings.map((r) => `V=${r.V}V I=${r.I}A`).join(", "),
      status: "done",
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); say("📝 Report saved to your phone."); }
    else say("Could not save the report. Please try again.");
  }

  const isIdle = status === "idle";
  const isRecording = status === "recording";
  const isDone = status === "done";
  const curV = VOLTAGE_STEPS[currentV];
  const curI = circuitOn ? noisyCurrent(curV, R) : 0;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />

      {/* Header */}
      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: ACCENT, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>
          {experiment.title || "Ohm's Law"}
        </Text>
      </View>

      {/* Step bar */}
      <View style={{ flexDirection: "row", justifyContent: "center", paddingVertical: 10, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border, gap: 6 }}>
        {STEP_LABELS.map((l, i) => (
          <View key={l} style={{ alignItems: "center", marginHorizontal: 4 }}>
            <View style={{ width: 22, height: 22, borderRadius: 11, alignItems: "center", justifyContent: "center", backgroundColor: i < step ? ACCENT : i === step ? "#e0f2fe" : "#e5e7eb" }}>
              <Text style={{ fontSize: 11, fontWeight: "800", color: i < step ? "#fff" : "#475569" }}>{i < step ? "✓" : i + 1}</Text>
            </View>
            <Text style={{ fontSize: 9, color: "#94a3b8", marginTop: 3, fontWeight: "600" }}>{l}</Text>
          </View>
        ))}
      </View>

      {/* Bench */}
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ alignItems: "center", paddingVertical: 16, paddingHorizontal: 12 }}>

        {/* Circuit diagram */}
        <CircuitDiagram V={curV} I={circuitOn ? noisyCurrent(curV, R) : 0} R={R} isOn={circuitOn && curV > 0} bulbGlow={bulbGlow} />

        {/* Live meters */}
        <View style={{ flexDirection: "row", marginTop: 16, backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 12, paddingVertical: 10, paddingHorizontal: 18 }}>
          <MeterBox label="V" value={`${curV} V`} accent={ACCENT} />
          <View style={{ width: 1, backgroundColor: theme.colors.border, marginHorizontal: 14 }} />
          <MeterBox label="I" value={circuitOn ? `${noisyCurrent(curV, R)} A` : "— A"} accent="#f97316" />
          <View style={{ width: 1, backgroundColor: theme.colors.border, marginHorizontal: 14 }} />
          <MeterBox label="R" value={Rlabel} accent="#8b5cf6" />
        </View>

        {/* Voltage dial */}
        {isRecording && (
          <View style={{ marginTop: 14, alignItems: "center" }}>
            <Text style={{ fontSize: 11, fontWeight: "700", color: "#6b7280", marginBottom: 8 }}>VOLTAGE DIAL</Text>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
              <TouchableOpacity onPress={dialDown} disabled={currentV === 0} style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: currentV === 0 ? "#e5e7eb" : ACCENT, alignItems: "center", justifyContent: "center" }}>
                <Text style={{ color: currentV === 0 ? "#94a3b8" : "#fff", fontWeight: "900", fontSize: 20 }}>−</Text>
              </TouchableOpacity>
              <View style={{ minWidth: 70, alignItems: "center", backgroundColor: "#1e293b", borderRadius: 10, paddingVertical: 8, paddingHorizontal: 14 }}>
                <Text style={{ fontSize: 24, fontWeight: "900", color: "#fbbf24", fontVariant: ["tabular-nums"] }}>{curV}</Text>
                <Text style={{ fontSize: 10, color: "#94a3b8", fontWeight: "700" }}>volts</Text>
              </View>
              <TouchableOpacity onPress={dialUp} disabled={currentV === VOLTAGE_STEPS.length - 1} style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: currentV === VOLTAGE_STEPS.length - 1 ? "#e5e7eb" : ACCENT, alignItems: "center", justifyContent: "center" }}>
                <Text style={{ color: currentV === VOLTAGE_STEPS.length - 1 ? "#94a3b8" : "#fff", fontWeight: "900", fontSize: 20 }}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* I–V Graph */}
        {readings.length > 0 && (
          <View style={{ marginTop: 16, backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 14, padding: 12 }}>
            <Text style={{ fontSize: 11, fontWeight: "800", color: "#6b7280", marginBottom: 6 }}>I–V GRAPH (orange = best-fit, dashed = ideal)</Text>
            <IVGraph readings={readings} R={R} />
            {estR != null && (
              <Text style={{ fontSize: 12, color: "#374151", marginTop: 6, fontWeight: "700" }}>
                Estimated R = {estR} Ω  {Math.abs(estR - R) <= tol ? "✓ within tolerance" : `(true: ${R} Ω)`}
              </Text>
            )}
          </View>
        )}

        {/* Readings table */}
        {readings.length > 0 && (
          <View style={{ marginTop: 12, width: "100%", backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 12, overflow: "hidden" }}>
            <View style={{ flexDirection: "row", backgroundColor: "#f1f5f9", paddingVertical: 6, paddingHorizontal: 12 }}>
              <Text style={{ flex: 1, fontSize: 11, fontWeight: "800", color: "#475569" }}>V (volts)</Text>
              <Text style={{ flex: 1, fontSize: 11, fontWeight: "800", color: "#475569" }}>I (A)</Text>
              <Text style={{ flex: 1, fontSize: 11, fontWeight: "800", color: "#475569" }}>R = V/I (Ω)</Text>
            </View>
            {readings.map((r, i) => (
              <View key={i} style={{ flexDirection: "row", paddingVertical: 6, paddingHorizontal: 12, borderTopWidth: 1, borderTopColor: "#f1f5f9" }}>
                <Text style={{ flex: 1, fontSize: 12, color: theme.colors.text }}>{r.V}</Text>
                <Text style={{ flex: 1, fontSize: 12, color: theme.colors.text }}>{r.I}</Text>
                <Text style={{ flex: 1, fontSize: 12, color: theme.colors.text }}>{r.V === 0 ? "—" : Math.round((r.V / r.I) * 100) / 100}</Text>
              </View>
            ))}
          </View>
        )}

      </ScrollView>

      {/* Control panel */}
      <View style={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 16, paddingTop: 14, paddingBottom: 18, shadowColor: "#000", shadowOffset: { width: 0, height: -3 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 10 }}>
        <View style={{ backgroundColor: isDone ? "#f0fdf4" : "#eff6ff", borderRadius: 12, padding: 12, borderWidth: 1, borderColor: isDone ? "#bbf7d0" : "#bfdbfe", marginBottom: 12, minHeight: 52, justifyContent: "center" }}>
          <Text style={{ fontSize: 13, lineHeight: 19, color: theme.colors.textMuted }}>{message}</Text>
        </View>

        {isIdle ? (
          <Btn label="① Set up circuit" onPress={() => doSetup()} accent={ACCENT} full />
        ) : !circuitOn && !isDone ? (
          <Btn label="② Close switch (connect)" onPress={() => closeSwitch()} accent={ACCENT} full />
        ) : isRecording ? (
          <View>
            <View style={{ flexDirection: "row", marginBottom: 8 }}>
              <Btn label="✓ Record reading" onPress={() => recordReading()} accent={ACCENT} />
              <Btn label="⏹ Open switch" onPress={() => openSwitch()} accent="#ef4444" />
            </View>
            <TouchableOpacity onPress={reset} style={{ alignItems: "center", paddingVertical: 8 }}>
              <Text style={{ color: "#64748b", fontWeight: "700", fontSize: 13 }}>↺ Reset Experiment</Text>
            </TouchableOpacity>
          </View>
        ) : isDone ? (
          <View>
            <Btn label="📝 View Report" onPress={() => setReportOpen(true)} accent={ACCENT} full />
            <TouchableOpacity onPress={reset} style={{ marginTop: 10, alignItems: "center", paddingVertical: 8 }}>
              <Text style={{ color: "#64748b", fontWeight: "700", fontSize: 13 }}>↺ Reset Experiment</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>

      {/* Report Modal */}
      <Modal visible={reportOpen} transparent animationType="slide" onRequestClose={() => setReportOpen(false)}>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.45)", justifyContent: "flex-end" }}>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ maxHeight: "88%" }}>
            <ScrollView style={{ maxHeight: "100%" }} contentContainerStyle={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 24, paddingBottom: 32 }} keyboardShouldPersistTaps="handled">
              <View style={{ width: 40, height: 4, backgroundColor: "#d1d5db", borderRadius: 2, alignSelf: "center", marginBottom: 18 }} />
              <Text style={{ fontSize: 26, textAlign: "center" }}>⚡</Text>
              <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>Experiment Complete!</Text>
              <View style={{ backgroundColor: theme.colors.surfaceMuted || "#f8fafc", borderRadius: 12, padding: 14, marginVertical: 14 }}>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>• Resistor: {Rlabel} (true R = {R} Ω)</Text>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Readings: {readings.map(r => `${r.V}V→${r.I}A`).join(", ")}</Text>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Estimated R: <Text style={{ fontWeight: "800" }}>{estR ?? "n/a"} Ω</Text></Text>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Formula: V = I × R  → Ohm's Law confirmed: {isCorrect ? "✓ Yes" : "✗ Not within tolerance"}</Text>
              </View>
              <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.textMuted, marginBottom: 6 }}>Your report / observations</Text>
              <TextInput
                style={{ borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }}
                placeholder="e.g. The I–V graph was a straight line through the origin, confirming V ∝ I at constant R."
                value={notes}
                onChangeText={setNotes}
                multiline
              />
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

function MeterBox({ label, value, accent }) {
  return (
    <View style={{ alignItems: "center", minWidth: 60 }}>
      <Text style={{ fontSize: 10, color: "#94a3b8", fontWeight: "800" }}>{label}</Text>
      <Text style={{ fontSize: 15, fontWeight: "900", color: accent }}>{value}</Text>
    </View>
  );
}

function Btn({ label, onPress, disabled, accent = ACCENT, full }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.85}
      style={{
        flex: full ? undefined : 1,
        width: full ? "100%" : undefined,
        backgroundColor: disabled ? "#e5e7eb" : accent,
        borderRadius: 11,
        paddingVertical: 12,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: full ? 0 : 3,
        opacity: disabled ? 0.55 : 1,
      }}
    >
      <Text style={{ color: disabled ? "#94a3b8" : "#fff", fontWeight: "800", fontSize: full ? 14 : 11.5 }} numberOfLines={1}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
