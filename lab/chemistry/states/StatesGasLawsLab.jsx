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
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Rect, Circle } from "react-native-svg";
import { useNavigation, useRoute } from "@react-navigation/native";
import { labStorage } from "../../../storage/labStorage";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import {
  GAS_SCENARIOS,
  computeGasAnswer,
  finalState,
  gasTolerance,
} from "./states-data.js";

const GREEN = "#16a34a";
const GLASS = "#94a3b8";
const BLUE = "#0ea5e9";

const STEP_LABELS = ["Apparatus", "Initial", "Run"];

// Map a volume (L) to a pixel column height on the bench.
function volToHeight(V) {
  const vMin = 5, vMax = 45, hMin = 40, hMax = 190;
  const t = (V - vMin) / (vMax - vMin);
  return Math.round(hMin + Math.max(0, Math.min(1, t)) * (hMax - hMin));
}
function lerp(a, b, t) {
  return a + (b - a) * t;
}
function round2(n) {
  return Math.round(n * 100) / 100;
}

export default function StatesGasLawsLab() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "states";
  const cfg = route.params?.config;

  // Normalise config (with a sensible no-config fallback so the screen
  // also works if navigated to directly).
  const fallbackScenario = GAS_SCENARIOS[0];
  const scenario = cfg?.scenario || fallbackScenario;
  const init = cfg?.init || { P1: 2, V1: 20, T1c: 25 };
  const changed = cfg?.changed != null ? cfg.changed : 4.0;
  const guess = cfg?.guess != null ? cfg.guess : 10;
  const answer = cfg?.answer || computeGasAnswer(scenario.id, init, changed);
  const final = cfg?.final || finalState(scenario.id, init, changed);
  const tol = gasTolerance(answer.value);
  const law = scenario.law; // "Boyle" | "Charles"

  const [setupDone, setSetupDone] = useState(false);
  const [initialSet, setInitialSet] = useState(false);
  const [running, setRunning] = useState(false);
  const [paused, setPaused] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | running | failed | success
  const [live, setLive] = useState({ P: init.P1, V: init.V1, Tc: init.T1c });
  const [message, setMessage] = useState("Set up the gas syringe and pressure gauge to begin.");

  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const timerRef = useRef(null);
  const stepRef = useRef(0);

  const say = (m) => setMessage(m);
  const glow = useRef(new Animated.Value(0)).current;
  const glowLoop = useRef(null);
  const pulseGlow = () => {
    if (glowLoop.current) glowLoop.current.stop();
    glow.setValue(0.4);
    glowLoop.current = Animated.loop(
      Animated.sequence([
        Animated.timing(glow, { toValue: 1, duration: 750, easing: Easing.inOut(Easing.quad), useNativeDriver: true }),
        Animated.timing(glow, { toValue: 0.45, duration: 750, easing: Easing.inOut(Easing.quad), useNativeDriver: true }),
      ])
    );
    glowLoop.current.start();
  };
  const stopGlow = () => {
    if (glowLoop.current) glowLoop.current.stop();
    glowLoop.current = null;
    glow.setValue(0);
  };
  useEffect(() => {
    if (status === "success") pulseGlow();
    else stopGlow();
    return () => stopGlow();
  }, [status]);

  function clearTimer() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  function setup() {
    if (setupDone) return;
    setSetupDone(true);
    say("Apparatus ready: gas syringe + pressure gauge. ✓ Now record the initial conditions.");
  }
  function setInitial() {
    if (!setupDone) return say("Set up the apparatus first! 🔧");
    if (initialSet) return;
    setInitialSet(true);
    setLive({ P: init.P1, V: init.V1, Tc: init.T1c });
    say(`Initial state set: P = ${init.P1} atm, V = ${init.V1} L, T = ${init.T1c} °C. ✓ Apply the change and run.`);
  }

  function run(fromStep = 0) {
    haptic.light();
    if (!initialSet) return say("Record the initial conditions first! 📋");
    if (status === "running" && !paused) return;
    setRunning(true);
    setPaused(false);
    setStatus("running");
    say(`Changing ${scenario.changedVar} to ${changed}${scenario.changedVar === "T" ? " °C" : " " + scenario.changedVar} — watch the gas respond…`);
    const steps = 34;
    const dur = 1700;
    let i = fromStep;
    clearTimer();
    timerRef.current = setInterval(() => {
      i++;
      stepRef.current = i;
      const p = Math.min(i / steps, 1);
      const eased = 1 - Math.pow(1 - p, 2);
      setLive({
        P: round2(lerp(init.P1, final.P, eased)),
        V: round2(lerp(init.V1, final.V, eased)),
        Tc: round2(lerp(init.T1c, final.Tc, eased)),
      });
      if (p >= 1) {
        clearTimer();
        finish();
      }
    }, dur / steps);
  }

  // Student-controlled stop: halts the animation mid-run so they can
  // resume from where it left off (or reset).
  function stop() {
    if (status !== "running") return;
    clearTimer();
    setPaused(true);
    say("⏸ Paused. Tap Resume to continue the experiment, or Reset to start over.");
  }

  function resume() {
    if (status !== "running") return;
    run(stepRef.current);
  }

  function finish() {
    const correct = Math.abs(guess - answer.value) <= tol;
    if (correct) {
      setStatus("success");
      setSaved(false);
      setNotes("");
      say(`✅ Spot on! The ${scenario.findVar} is ${answer.value} ${answer.unit}. Your prediction was within ±${tol}.`);
    } else {
      setStatus("failed");
      say(`💥 Off the mark — the true ${scenario.findVar} is ${answer.value} ${answer.unit} (your guess ${guess}). ${scenario.law}'s law: ${answer.formula}. Tap Reset to retry.`);
    }
  }

  function reset() {
    clearTimer();
    stepRef.current = 0;
    setRunning(false);
    setPaused(false);
    setStatus("idle");
    setSetupDone(false);
    setInitialSet(false);
    setLive({ P: init.P1, V: init.V1, Tc: init.T1c });
    say("Bench reset. Set up the apparatus to begin.");
  }

  async function saveReport() {
    const correct = Math.abs(guess - answer.value) <= tol;
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "gas-laws",
      experimentTitle: experiment.title || "Boyle's Law & Charles's Law",
      topicId,
      date: new Date().toLocaleDateString(),
      law: scenario.law,
      scenario: scenario.label,
      initial: `P=${init.P1} atm, V=${init.V1} L, T=${init.T1c} °C`,
      changed: `${scenario.changedVar}=${changed}${scenario.changedVar === "T" ? " °C" : " " + scenario.changedVar}`,
      predicted: `${guess} ${answer.unit}`,
      actual: `${answer.value} ${answer.unit}`,
      formula: answer.formula,
      withinTolerance: correct,
      status: "success",
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); say("📝 Report saved to your phone. Review it any time from the Lab hub."); }
    else say("Could not save the report. Please try again.");
  }

  const step = setupDone ? (initialSet ? 2 : 1) : 0;
  const showSuccess = status === "success";
  const showFail = status === "failed";
  const isRunning = status === "running";

  const colHeight = volToHeight(live.V);
  const balloonScale = Math.max(0.3, Math.min(2.2, live.V / 20));
  const heated = live.Tc > init.T1c + 0.5;
  const cooled = live.Tc < init.T1c - 0.5;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />

      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: GREEN, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>
          {experiment.title || "Boyle's & Charles's Law"}
        </Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center", paddingVertical: 10, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border, gap: 6 }}>
        {STEP_LABELS.map((l, i) => (
          <View key={l} style={{ alignItems: "center", marginHorizontal: 4 }}>
            <View style={{ width: 22, height: 22, borderRadius: 11, alignItems: "center", justifyContent: "center", backgroundColor: i < step ? GREEN : i === step ? "#bfdbfe" : "#e5e7eb" }}>
              <Text style={{ fontSize: 11, fontWeight: "800", color: i < step ? "#fff" : "#475569" }}>{i < step ? "✓" : i + 1}</Text>
            </View>
            <Text style={{ fontSize: 9, color: "#94a3b8", marginTop: 3, fontWeight: "600" }}>{l}</Text>
          </View>
        ))}
      </View>

      {/* ===== BENCH ===== */}
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Animated.View pointerEvents="none" style={{ position: "absolute", width: 230, height: 230, borderRadius: 115, backgroundColor: GREEN, opacity: glow.interpolate({ inputRange: [0, 1], outputRange: [0, 0.14] }), transform: [{ scale: glow.interpolate({ inputRange: [0, 1], outputRange: [0.85, 1.12] }) }] }} />
        {law === "Boyle" ? (
          // Boyle: piston in a sealed cylinder, gas column height ∝ volume.
          <View style={{ alignItems: "center", position: "relative" }}>
            <Svg width={92} height={210} viewBox="0 0 92 210">
              <Rect x={2} y={2} width={88} height={206} rx={10} fill="#e0f2fe" fillOpacity={0.5} stroke={GLASS} strokeWidth={2.5} />
            </Svg>
            <Animated.View style={{ position: "absolute", left: 6, right: 6, bottom: 6, height: colHeight, backgroundColor: BLUE, opacity: 0.55 }} />
            {[0.25, 0.5, 0.75].map((g) => (
              <View key={g} style={{ position: "absolute", left: 6, right: 6, bottom: 6 + 210 * g, height: 1.5, backgroundColor: GLASS }} />
            ))}
            {/* piston resting on top of the gas column */}
            <View style={{ position: "absolute", bottom: 6 + colHeight, width: 104, height: 12, backgroundColor: "#475569", borderRadius: 3, left: -6 }} />
            <View style={{ position: "absolute", bottom: 6 + colHeight + 12, width: 8, height: 210 - colHeight - 12, backgroundColor: "#64748b" }} />
            <Text style={{ fontSize: 11, color: "#64748b", fontWeight: "700", marginTop: 10 }}>
              {scenario.label.includes("pressure") ? "Pressure ↑ → volume ↓" : "Volume ↑ → pressure ↓"}
            </Text>
          </View>
        ) : (
          // Charles: a balloon that grows/shrinks with volume (and temperature).
          <View style={{ alignItems: "center" }}>
            {heated ? <Text style={{ fontSize: 22, marginBottom: 4 }}>🔥</Text> : cooled ? <Text style={{ fontSize: 22, marginBottom: 4 }}>❄️</Text> : <View style={{ height: 26 }} />}
            <Animated.View style={{ transform: [{ scale: balloonScale }] }}>
              <Svg width={120} height={120} viewBox="0 0 120 120">
                <Circle cx={60} cy={60} r={56} fill={BLUE} fillOpacity={0.5} stroke={BLUE} strokeWidth={2} />
              </Svg>
            </Animated.View>
            <View style={{ position: "absolute", bottom: -6, width: 30, height: 16, backgroundColor: "transparent", borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: BLUE, borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }} />
            <Text style={{ fontSize: 11, color: "#64748b", fontWeight: "700", marginTop: 12 }}>
              V ∝ T (Kelvin): {heated ? "warmer → bigger" : cooled ? "cooler → smaller" : "constant"}
            </Text>
          </View>
        )}

        {/* Live P/V/T readout */}
        <View style={{ flexDirection: "row", marginTop: 22, backgroundColor: "#fff", borderWidth: 1, borderColor: "#e2e8f0", borderRadius: 12, paddingVertical: 8, paddingHorizontal: 14 }}>
          <Readout label="P" value={`${live.P} atm`} />
          <View style={{ width: 1, backgroundColor: "#e5e7eb", marginHorizontal: 12 }} />
          <Readout label="V" value={`${live.V} L`} />
          <View style={{ width: 1, backgroundColor: "#e5e7eb", marginHorizontal: 12 }} />
          <Readout label="T" value={`${live.Tc} °C`} />
        </View>
      </View>

      {/* ===== CONTROL PANEL ===== */}
      <View style={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 16, paddingTop: 14, paddingBottom: 18, shadowColor: "#000", shadowOffset: { width: 0, height: -3 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 10 }}>
        <View style={{ backgroundColor: showFail ? "#fef2f2" : showSuccess ? "#f0fdf4" : "#eff6ff", borderRadius: 12, padding: 12, borderWidth: 1, borderColor: showFail ? "#fecaca" : showSuccess ? "#bbf7d0" : "#bfdbfe", marginBottom: 12, minHeight: 58, justifyContent: "center" }}>
          <Text style={{ fontSize: 13, lineHeight: 19, color: theme.colors.textMuted }}>{message}</Text>
        </View>

        {isRunning ? (
          <View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
              <Text style={{ fontSize: 14, color: "#475569", fontWeight: "700" }}>{paused ? `Paused — ${law}'s law` : `Running ${law}'s law…`}</Text>
            </View>
            {paused ? (
              <Btn label="▶ Resume" onPress={resume} accent={GREEN} full />
            ) : (
              <Btn label="⏸ Stop" onPress={stop} accent="#f59e0b" full />
            )}
            <TouchableOpacity onPress={reset} style={{ alignItems: "center", paddingVertical: 10, marginTop: 4 }}>
              <Text style={{ color: "#64748b", fontWeight: "700", fontSize: 13 }}>↺ Reset Experiment</Text>
            </TouchableOpacity>
          </View>
        ) : showSuccess ? (
          <Btn label="📝 View Report" onPress={() => setReportOpen(true)} accent={GREEN} full />
        ) : showFail ? (
          <TouchableOpacity onPress={reset} style={{ alignItems: "center", paddingVertical: 12 }}>
            <Text style={{ color: "#64748b", fontWeight: "700", fontSize: 14 }}>↺ Reset Experiment</Text>
          </TouchableOpacity>
        ) : (
          <View style={{ flexDirection: "row" }}>
            <Btn label="① Set up" onPress={setup} disabled={setupDone} />
            <Btn label="② Initial" onPress={setInitial} disabled={!setupDone || initialSet} accent="#0ea5e9" />
            <Btn label="③ Run" onPress={run} disabled={!initialSet || running} accent={GREEN} />
          </View>
        )}

        {initialSet && !showFail && !showSuccess && !isRunning ? (
          <TouchableOpacity onPress={reset} style={{ marginTop: 10, alignItems: "center", paddingVertical: 8 }}>
            <Text style={{ color: "#64748b", fontWeight: "700", fontSize: 13 }}>↺ Reset Experiment</Text>
          </TouchableOpacity>
        ) : null}
      </View>

      <Modal visible={reportOpen} transparent animationType="slide" onRequestClose={() => setReportOpen(false)}>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.45)", justifyContent: "flex-end" }}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ maxHeight: "88%" }}>
          <ScrollView style={{ maxHeight: "100%" }} contentContainerStyle={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 24, paddingBottom: 32 }} keyboardShouldPersistTaps="handled">
            <View style={{ width: 40, height: 4, backgroundColor: "#d1d5db", borderRadius: 2, alignSelf: "center", marginBottom: 18 }} />
            <Text style={{ fontSize: 26, textAlign: "center" }}>🎉</Text>
            <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>Experiment Complete!</Text>
            <View style={{ backgroundColor: theme.colors.surfaceMuted, borderRadius: 12, padding: 14, marginVertical: 14 }}>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>• Law: {scenario.law} — {scenario.label}</Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Initial: P={init.P1} atm, V={init.V1} L, T={init.T1c} °C</Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Changed: {scenario.changedVar} = {changed}{scenario.changedVar === "T" ? " °C" : " " + scenario.changedVar}</Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Your prediction: <Text style={{ fontWeight: "800" }}>{guess} {answer.unit}</Text></Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• True {scenario.findVar}: <Text style={{ fontWeight: "800" }}>{answer.value} {answer.unit}</Text></Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Formula: {answer.formula}</Text>
            </View>
            <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.textMuted, marginBottom: 6 }}>Your report / observations</Text>
            <TextInput
              style={{ borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }}
              placeholder="e.g. At constant temperature, doubling the pressure halved the volume (P×V constant)."
              value={notes}
              onChangeText={setNotes}
              multiline
            />
            {saved ? (
              <View style={{ marginTop: 14, backgroundColor: "#f0fdf4", borderRadius: 12, padding: 14, alignItems: "center" }}>
                <Text style={{ color: GREEN, fontWeight: "700" }}>📝 Saved to your phone!</Text>
              </View>
            ) : (
              <TouchableOpacity onPress={saveReport} style={{ marginTop: 14, backgroundColor: GREEN, borderRadius: 12, paddingVertical: 14 }}>
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

function Readout({ label, value }) {
  return (
    <View style={{ alignItems: "center", minWidth: 56 }}>
      <Text style={{ fontSize: 10, color: "#94a3b8", fontWeight: "800" }}>{label}</Text>
      <Text style={{ fontSize: 15, fontWeight: "900", color: "#0f172a" }}>{value}</Text>
    </View>
  );
}

function Btn({ label, onPress, disabled, accent = GREEN, full }) {
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
      <Text style={{ color: disabled ? "#94a3b8" : "#fff", fontWeight: "800", fontSize: full ? 14 : 11.5 }} numberOfLines={1}>{label}</Text>
    </TouchableOpacity>
  );
}
