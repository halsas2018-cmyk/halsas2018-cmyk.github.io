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
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { labStorage } from "../../../storage/labStorage";
import { pendulumPeriod, pendulumFrequency, largeAngleFactor, PENDULUM_AMPLITUDES } from "./pendulum-data";
import { PendulumStand, PendulumBob } from "../../components/svgKit";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";

const ACCENT = "#7c3aed";
const STEP_LABELS = ["Set up", "Release", "Measure"];
const TARGET = 2.0; // s — tune the length to hit this period
const TOL = 0.06;

export default function PhysicsPendulumLab() {
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "p1-shm";
  const cfg = route.params?.config;
  const theme = useTheme();

  const [L, setL] = useState(cfg?.L || 0.8);
  const [ampDeg, setAmpDeg] = useState(cfg?.ampDeg || 10);
  const [stageH, setStageH] = useState(0);

  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState(
    "Set the string length & amplitude, then Release the bob and Measure its period. Aim for T ≈ 2.00 s."
  );
  const [measured, setMeasured] = useState(null);
  const [count, setCount] = useState(0);
  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const swing = useRef(new Animated.Value(ampDeg)).current;
  const rafRef = useRef(null);
  const timerRef = useRef(null);
  const startRef = useRef(0);
  const oscRef = useRef(0);
  const elapsedRef = useRef(0);

  const [elapsedLive, setElapsedLive] = useState(0);
  const [liveT, setLiveT] = useState(0);
  const [liveOsc, setLiveOsc] = useState(0);

  const T = pendulumPeriod(L);
  const w = (2 * Math.PI) / T;

  // Pivot near the top; arm length in pixels scaled to fit.
  const pivotX = 0; // set in layout (center)
  const pivotY = 36;
  let lenPx = 220;
  if (stageH > 0) lenPx = Math.min(L * 130, stageH - 110);

  const rotate = swing.interpolate({
    inputRange: [-90, 90],
    outputRange: ["-90deg", "90deg"],
  });

  const say = (m) => setMessage(m);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  function release() {
    haptic.light();
    if (status === "running") return;
    if (timerRef.current) clearInterval(timerRef.current);
    swing.setValue(ampDeg);
    startRef.current = Date.now();
    oscRef.current = 0;
    elapsedRef.current = 0;
    setElapsedLive(0);
    setLiveT(0);
    setLiveOsc(0);
    setMeasured(null);
    setStatus("running");
    say(`⏱️ Timing swings (T_theory = ${T.toFixed(3)} s)…`);
    const loop = () => {
      const t = (Date.now() - startRef.current) / 1000;
      const ang = ampDeg * Math.cos(w * t);
      swing.setValue(ang);
      const done = Math.floor((w * t) / (2 * Math.PI));
      if (done > oscRef.current) oscRef.current = done;
      elapsedRef.current = t;
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    // Live timer readout (10 Hz) — shows elapsed time, running period & swing count.
    timerRef.current = setInterval(() => {
      const e = elapsedRef.current;
      const o = Math.max(oscRef.current, 1);
      setElapsedLive(e);
      setLiveOsc(oscRef.current);
      setLiveT(e / o);
    }, 100);
  }

  function measure() {
    haptic.light();
    if (status !== "running") {
      return say("Release the bob first, then Measure after it swings!");
    }
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (timerRef.current) clearInterval(timerRef.current);
    const c = Math.max(oscRef.current, 1);
    const m = elapsedRef.current / c;
    setCount(c);
    setMeasured(m);
    const diff = Math.abs(m - TARGET);
    if (diff <= TOL) {
      setStatus("success");
      setSaved(false);
      setNotes("");
      say(`🎯 Spot on! Measured T = ${m.toFixed(3)} s over ${c} oscillation(s) — matches the ${TARGET.toFixed(2)} s target.`);
    } else {
      setStatus("failed");
      say(
        `💥 Measured T = ${m.toFixed(3)} s, but the target is ${TARGET.toFixed(2)} s. ${
          m > TARGET ? "Use a SHORTER string." : "Use a LONGER string."
        } Tap Reset and try again.`
      );
    }
  }

  function reset() {
    haptic.light();
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (timerRef.current) clearInterval(timerRef.current);
    setElapsedLive(0);
    setLiveT(0);
    setLiveOsc(0);
    swing.setValue(ampDeg);
    setStatus("idle");
    setMeasured(null);
    setCount(0);
    say("Bench reset. Release the bob to time its swings.");
  }

  async function saveReport() {
    haptic.light();
    const factor = ampDeg >= 30 ? largeAngleFactor(ampDeg) : 1;
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "p1-shm",
      experimentTitle: experiment.title || "Simple Harmonic Motion",
      topicId,
      date: new Date().toLocaleDateString(),
      L,
      ampDeg,
      periodTheoretical: parseFloat(T.toFixed(3)),
      periodMeasured: measured != null ? parseFloat(measured.toFixed(3)) : parseFloat(T.toFixed(3)),
      frequency: parseFloat(pendulumFrequency(L).toFixed(3)),
      target: TARGET,
      status: "success",
      summary: `Period ${T.toFixed(3)} s at L=${L} m, amplitude ${ampDeg}°.`,
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); say("📝 Report saved to your phone."); }
    else say("Could not save the report. Please try again.");
  }

  const step = status === "idle" ? 0 : status === "running" ? 1 : 2;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />
      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: ACCENT, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>
          {experiment.title || "Simple Harmonic Motion"}
        </Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center", paddingVertical: 10, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.borderSoft, gap: 6 }}>
        {STEP_LABELS.map((l, i) => (
          <View key={l} style={{ alignItems: "center", marginHorizontal: 4 }}>
            <View style={{ width: 22, height: 22, borderRadius: 11, alignItems: "center", justifyContent: "center", backgroundColor: i < step ? ACCENT : i === step ? "#ddd6fe" : theme.colors.border }}>
              <Text style={{ fontSize: 11, fontWeight: "800", color: i < step ? "#fff" : theme.colors.textMuted }}>{i < step ? "✓" : i + 1}</Text>
            </View>
            <Text style={{ fontSize: 9, color: theme.colors.textMuted, marginTop: 3, fontWeight: "600" }}>{l}</Text>
          </View>
        ))}
      </View>

      {/* ===== BENCH / STAGE ===== */}
      <View
        onLayout={(e) => setStageH(e.nativeEvent.layout.height)}
        style={{ flex: 1, alignItems: "center", backgroundColor: theme.colors.surfaceMuted }}
      >
        <View style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, alignItems: "center" }}>
          {/* stand */}
          <View style={{ position: "absolute", left: 0, right: 0, top: pivotY - 2, alignItems: "center" }}>
            <PendulumStand h={Math.max(stageH - pivotY + 2, 230)} />
          </View>

          {/* rotating arm + bob — the WHOLE group swings about the pivot (top), so the bob moves along the arc */}
          <Animated.View
            style={{
              position: "absolute",
              top: pivotY,
              left: "50%",
              width: 0,
              height: 0,
              transform: [{ rotate }],
              transformOrigin: "top center",
            }}
          >
            <View style={{ position: "absolute", left: -2, top: 0, width: 4, height: lenPx, backgroundColor: "#7c3aed", borderRadius: 2 }} />
            <View style={{ position: "absolute", left: -18, top: lenPx - 18, width: 36, height: 36 }}>
              <PendulumBob r={16} />
            </View>
          </Animated.View>

          {/* amplitude arc reference */}
          <View style={{ position: "absolute", top: pivotY, width: 2 * lenPx * Math.sin((ampDeg * Math.PI) / 180), height: 2, backgroundColor: "#e9d5ff", transform: [{ rotate: `${-ampDeg}deg` }], transformOrigin: "left center" }} />
        </View>
      </View>

      {/* ===== CONTROL PANEL ===== */}
      <View style={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 16, paddingTop: 14, paddingBottom: 18, shadowColor: "#000", shadowOffset: { width: 0, height: -3 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 10 }}>
        <View style={{ backgroundColor: status === "failed" ? "#fef2f2" : status === "success" ? "#f0fdf4" : "#f5f3ff", borderRadius: 12, padding: 12, borderWidth: 1, borderColor: status === "failed" ? "#fecaca" : status === "success" ? "#bbf7d0" : "#ddd6fe", marginBottom: 12, minHeight: 58, justifyContent: "center" }}>
          <Text style={{ fontSize: 13, lineHeight: 19, color: theme.colors.text }}>{message}</Text>
        </View>

        {status === "failed" ? (
          <>
            {measured != null && (
              <Text style={{ fontSize: 13, color: "#b91c1c", marginBottom: 10, textAlign: "center", fontWeight: "700" }}>
                Measured T = {measured.toFixed(3)} s — target {TARGET.toFixed(2)} s. Adjust the length, then Reset.
              </Text>
            )}
            <Btn label="↺ Reset Experiment" onPress={reset} accent="#64748b" full />
          </>
        ) : status === "success" ? (
          <>
            <Btn label="📝 View Report" onPress={() => setReportOpen(true)} accent={ACCENT} full />
            <Btn label="↺ Reset Experiment" onPress={reset} accent="#64748b" full />
          </>
        ) : (
          <>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
              <Text style={{ fontSize: 12, fontWeight: "700", color: theme.colors.textMuted }}>Length {L} m · Amp {ampDeg}°</Text>
              <Text style={{ fontSize: 12, fontWeight: "800", color: ACCENT }}>T ≈ {T.toFixed(2)} s</Text>
            </View>
            {status === "running" && (
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 8, backgroundColor: "#eef2ff", borderRadius: 8, paddingVertical: 8, paddingHorizontal: 8 }}>
                <Text style={{ fontSize: 12, fontWeight: "800", color: "#4338ca" }}>⏱ {elapsedLive.toFixed(2)} s</Text>
                <Text style={{ fontSize: 12, fontWeight: "800", color: "#4338ca" }}>T {liveT.toFixed(2)} s</Text>
                <Text style={{ fontSize: 12, fontWeight: "800", color: "#4338ca" }}>#{liveOsc} swings</Text>
              </View>
            )}
            <View style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 8 }}>
              {[0.3, 0.5, 0.8, 1.0, 1.2, 2.0].map((val) => (
                <TouchableOpacity key={val} onPress={() => setL(val)} disabled={status === "running"} style={{ width: "30%", margin: "1.5%", backgroundColor: L === val ? ACCENT : theme.colors.surfaceMuted, borderRadius: 8, paddingVertical: 8 }}>
                  <Text style={{ textAlign: "center", fontSize: 11, fontWeight: "800", color: L === val ? "#fff" : theme.colors.textMuted }}>{val} m</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 10 }}>
              {PENDULUM_AMPLITUDES.map((a) => (
                <TouchableOpacity key={a.id} onPress={() => setAmpDeg(a.deg)} disabled={status === "running"} style={{ flex: 1, marginHorizontal: 3, backgroundColor: ampDeg === a.deg ? ACCENT : theme.colors.surfaceMuted, borderRadius: 8, paddingVertical: 8 }}>
                  <Text style={{ textAlign: "center", fontSize: 11, fontWeight: "800", color: ampDeg === a.deg ? "#fff" : theme.colors.textMuted }}>{a.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
            {measured != null && (
              <Text style={{ fontSize: 12, color: theme.colors.text, marginBottom: 8, textAlign: "center" }}>
                Measured T = <Text style={{ fontWeight: "800" }}>{measured.toFixed(3)} s</Text> over {count} oscillation(s)
              </Text>
            )}
            <View style={{ flexDirection: "row" }}>
              <Btn label={status === "running" ? "… Timing" : "① Release"} onPress={release} accent={ACCENT} disabled={status === "running"} />
              <View style={{ width: 8 }} />
              <Btn label="② Measure" onPress={measure} accent="#0ea5e9" disabled={status !== "running"} />
            </View>
            <TouchableOpacity onPress={reset} style={{ marginTop: 8, alignItems: "center", paddingVertical: 6 }}>
              <Text style={{ color: theme.colors.textMuted, fontWeight: "700", fontSize: 12 }}>↺ Reset</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      <Modal visible={reportOpen} transparent animationType="slide" onRequestClose={() => setReportOpen(false)}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.45)", justifyContent: "flex-end" }}>
          <ScrollView style={{ maxHeight: "88%" }} contentContainerStyle={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 24, paddingBottom: 32 }} keyboardShouldPersistTaps="handled">
            <View style={{ width: 40, height: 4, backgroundColor: theme.colors.border, borderRadius: 2, alignSelf: "center", marginBottom: 18 }} />
            <Text style={{ fontSize: 26, textAlign: "center" }}>🎉</Text>
            <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>Period Measured!</Text>
            <View style={{ backgroundColor: theme.colors.surfaceMuted, borderRadius: 12, padding: 14, marginVertical: 14 }}>
              <Text style={{ fontSize: 13, color: theme.colors.text }}>• Length: {L} m · Amplitude: {ampDeg}°</Text>
              <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 4 }}>• Theoretical T: <Text style={{ fontWeight: "800" }}>{T.toFixed(3)} s</Text></Text>
              <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 4 }}>• Measured T: {measured != null ? measured.toFixed(3) : T.toFixed(3)} s</Text>
              <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 4 }}>• Frequency: {pendulumFrequency(L).toFixed(3)} Hz</Text>
            </View>
            <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.text, marginBottom: 6 }}>Your report / observations</Text>
            <TextInput
              style={{ borderWidth: 1, borderColor: theme.colors.border, borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }}
              placeholder="e.g. Doubling the length increased the period by √2, confirming T = 2π√(L/g)."
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
            <TouchableOpacity onPress={() => { setReportOpen(false); navigation.goBack(); }} style={{ marginTop: 10, backgroundColor: theme.colors.surfaceMuted, borderRadius: 12, paddingVertical: 13 }}>
              <Text style={{ color: theme.colors.text, textAlign: "center", fontWeight: "700", fontSize: 14 }}>Done</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        </KeyboardAvoidingView>
      </Modal>
    </SafeAreaView>
  );
}

function Btn({ label, onPress, disabled, accent = ACCENT }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.85}
      style={{ flex: 1, backgroundColor: disabled ? "#e5e7eb" : accent, borderRadius: 11, paddingVertical: 12, alignItems: "center", justifyContent: "center", opacity: disabled ? 0.6 : 1 }}
    >
      <Text style={{ color: disabled ? "#94a3b8" : "#fff", fontWeight: "800", fontSize: 14 }} numberOfLines={1}>{label}</Text>
    </TouchableOpacity>
  );
}
