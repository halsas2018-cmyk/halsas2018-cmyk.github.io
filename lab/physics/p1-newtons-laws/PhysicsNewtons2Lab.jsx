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
import Svg, { Rect, Line, Circle, G, Polygon } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { labStorage } from "../../../storage/labStorage";
import { accel, accelFromMeasure, TRACK_REAL_M, MASS_CHOICES, FORCE_CHOICES } from "./newtons-data";
import { RetortStand, LabTable } from "../../components/svgKit";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";

const ACCENT = "#2563eb";
const STEP_LABELS = ["Set up", "Accelerate", "Measure"];
const TOL = 0.05; // m/s² — measured vs F/m must agree within this
const T_MAX = 8; // s — safety cap for very small accelerations
const CART_W = 70;

function Trolley({ w = CART_W, h = 34, force = 4, color = ACCENT }) {
  const arrowLen = Math.max(14, Math.min(50, force * 5));
  const ax = w * 0.35;
  return (
    <Svg width={w} height={h + 16} viewBox={`0 0 ${w} ${h + 16}`}>
      {/* applied-force arrow (pulls the trolley to the right) */}
      <Line x1={ax} y1={2} x2={ax + arrowLen} y2={2} stroke={color} strokeWidth={3} />
      <Polygon points={`${ax + arrowLen},2 ${ax + arrowLen - 7},-2 ${ax + arrowLen - 7},6`} fill={color} />
      {/* body */}
      <Rect x={3} y={8} width={w - 6} height={h} rx={7} fill="#dbeafe" stroke={color} strokeWidth={2.5} />
      <Rect x={w / 2 - 15} y={14} width={30} height={11} rx={3} fill="#bfdbfe" />
      {/* wheels */}
      <Circle cx={16} cy={h + 12} r={7} fill="#334155" />
      <Circle cx={w - 16} cy={h + 12} r={7} fill="#334155" />
      <Circle cx={16} cy={h + 12} r={3} fill="#cbd5e1" />
      <Circle cx={w - 16} cy={h + 12} r={3} fill="#cbd5e1" />
    </Svg>
  );
}

export default function PhysicsNewtons2Lab() {
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "p1-newtons-laws";
  const cfg = route.params?.config;
  const theme = useTheme();

  const [mass, setMass] = useState(cfg?.mass || 1.0);
  const [force, setForce] = useState(cfg?.force || 4);
  const [stageW, setStageW] = useState(0);
  const [stageH, setStageH] = useState(0);

  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState(
    "Set the trolley mass & applied force, then Accelerate the trolley and Measure its motion. Confirm that a = F / m."
  );
  const [measured, setMeasured] = useState(null);
  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const pos = useRef(new Animated.Value(0)).current;
  const rafRef = useRef(null);
  const startRef = useRef(0);
  const finalTRef = useRef(0);
  const finalSRef = useRef(0);

  const [liveT, setLiveT] = useState(0);
  const [liveV, setLiveV] = useState(0);
  const [liveS, setLiveS] = useState(0);

  const a = accel(force, mass);

  const margin = 24;
  const trackPx = stageW > 0 ? stageW - 2 * margin : 0;
  const travelPx = Math.max(0, trackPx - CART_W);
  const trackY = stageH > 0 ? Math.max(stageH * 0.42, 96) : 96;
  const pxPerM = travelPx > 0 ? travelPx / TRACK_REAL_M : 1;

  const say = (m) => setMessage(m);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // changing mass/force re-arms the bench to idle
  function rearm() {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    pos.setValue(0);
    setMeasured(null);
    setLiveT(0);
    setLiveV(0);
    setLiveS(0);
    setStatus("idle");
  }

  function accelerate() {
    haptic.light();
    if (status === "running") return;
    rearm();
    setStatus("running");
    say(`⚡ Accelerating: a = F / m = ${force} / ${mass} = ${a.toFixed(2)} m/s²…`);
    startRef.current = Date.now();
    finalTRef.current = 0;
    finalSRef.current = 0;
    const loop = () => {
      const t = (Date.now() - startRef.current) / 1000;
      const s = 0.5 * a * t * t; // metres from rest
      let px = s * pxPerM;
      const done = px >= travelPx || t >= T_MAX;
      if (px > travelPx) px = travelPx;
      pos.setValue(px);
      setLiveT(t);
      setLiveV(a * t);
      setLiveS(s);
      if (done) {
        const tf = Math.min(t, T_MAX);
        finalTRef.current = tf;
        finalSRef.current = px / pxPerM;
        setLiveT(tf);
        setLiveV(a * tf);
        setLiveS(finalSRef.current);
        setStatus("ready");
        say(`🛑 Trolley reached the end after ${tf.toFixed(2)} s. Now press Measure to read its acceleration.`);
        return;
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
  }

  function measure() {
    haptic.light();
    if (status !== "ready") {
      return say("Accelerate the trolley first, then Measure its motion!");
    }
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const t = Math.max(finalTRef.current, 0.001);
    const s = finalSRef.current;
    const m = accelFromMeasure(s, t);
    setMeasured(parseFloat(m.toFixed(3)));
    const diff = Math.abs(m - a);
    if (diff <= TOL) {
      setStatus("success");
      setSaved(false);
      setNotes("");
      say(`✅ Confirmed! Measured a = ${m.toFixed(3)} m/s² matches F / m = ${a.toFixed(2)} m/s². F = ma holds.`);
    } else {
      setStatus("failed");
      say(`💥 Measured a = ${m.toFixed(3)} m/s², expected ${a.toFixed(2)} m/s². Re-arm and try again.`);
    }
  }

  function reset() {
    haptic.light();
    rearm();
    say("Bench reset. Set the mass & force, then Accelerate the trolley.");
  }

  async function saveReport() {
    haptic.light();
    const m = measured != null ? measured : parseFloat(a.toFixed(3));
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "newtons-second-law",
      experimentTitle: experiment.title || "Newton's Second Law (F = ma)",
      topicId,
      date: new Date().toLocaleDateString(),
      mass,
      force,
      accelerationTheoretical: parseFloat(a.toFixed(3)),
      accelerationMeasured: parseFloat(m.toFixed(3)),
      trackLengthM: TRACK_REAL_M,
      status: "success",
      summary: `a = F/m = ${force}/${mass} = ${a.toFixed(2)} m/s²; measured ${m.toFixed(3)} m/s² — F = ma confirmed.`,
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); say("📝 Report saved to your phone."); }
    else say("Could not save the report. Please try again.");
  }

  const step = status === "idle" ? 0 : status === "running" || status === "ready" ? 1 : 2;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />
      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: ACCENT, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>
          {experiment.title || "Newton's Second Law (F = ma)"}
        </Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center", paddingVertical: 10, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.borderSoft, gap: 6 }}>
        {STEP_LABELS.map((l, i) => (
          <View key={l} style={{ alignItems: "center", marginHorizontal: 4 }}>
            <View style={{ width: 22, height: 22, borderRadius: 11, alignItems: "center", justifyContent: "center", backgroundColor: i < step ? ACCENT : i === step ? "#bfdbfe" : theme.colors.border }}>
              <Text style={{ fontSize: 11, fontWeight: "800", color: i < step ? "#fff" : theme.colors.textMuted }}>{i < step ? "✓" : i + 1}</Text>
            </View>
            <Text style={{ fontSize: 9, color: theme.colors.textMuted, marginTop: 3, fontWeight: "600" }}>{l}</Text>
          </View>
        ))}
      </View>

      {/* ===== BENCH / STAGE ===== */}
      <View
        onLayout={(e) => { setStageW(e.nativeEvent.layout.width); setStageH(e.nativeEvent.layout.height); }}
        style={{ flex: 1, alignItems: "center", backgroundColor: theme.colors.surfaceMuted }}
      >
        {/* bench table at the bottom */}
        <View style={{ position: "absolute", bottom: 0, left: 0, right: 0, alignItems: "center" }}>
          <LabTable w={Math.max(stageW, 320)} h={28} />
        </View>
        {/* retort stand (left support) */}
        <View style={{ position: "absolute", left: 14, bottom: 26 }}>
          <RetortStand h={Math.max(stageH * 0.5, 150)} />
        </View>

        {/* track + trolley */}
        <View style={{ position: "absolute", left: margin, top: trackY, width: trackPx, height: 80 }}>
          {/* track line */}
          <Svg width={trackPx} height={60} viewBox={`0 0 ${trackPx} 60`}>
            <Line x1={0} y1={48} x2={trackPx} y2={48} stroke="#64748b" strokeWidth={4} />
            <Line x1={0} y1={44} x2={trackPx} y2={44} stroke="#cbd5e1" strokeWidth={1.5} />
            {/* end stop */}
            <Rect x={trackPx - 8} y={30} width={8} height={20} rx={2} fill="#334155" />
            {/* metre ticks */}
            {[0.25, 0.5, 0.75].map((p) => (
              <Line key={p} x1={trackPx * p} y1={44} x2={trackPx * p} y2={54} stroke="#94a3b8" strokeWidth={1.5} />
            ))}
          </Svg>

          {/* moving trolley */}
          <Animated.View
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: [{ translateX: pos }],
            }}
          >
            <Trolley force={force} color={ACCENT} />
          </Animated.View>
        </View>
      </View>

      {/* ===== CONTROL PANEL ===== */}
      <View style={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 16, paddingTop: 14, paddingBottom: 18, shadowColor: "#000", shadowOffset: { width: 0, height: -3 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 10 }}>
        <View style={{ backgroundColor: status === "failed" ? "#fef2f2" : status === "success" ? "#f0fdf4" : "#eff6ff", borderRadius: 12, padding: 12, borderWidth: 1, borderColor: status === "failed" ? "#fecaca" : status === "success" ? "#bbf7d0" : "#bfdbfe", marginBottom: 12, minHeight: 58, justifyContent: "center" }}>
          <Text style={{ fontSize: 13, lineHeight: 19, color: theme.colors.text }}>{message}</Text>
        </View>

        {status === "failed" ? (
          <>
            {measured != null && (
              <Text style={{ fontSize: 13, color: "#b91c1c", marginBottom: 10, textAlign: "center", fontWeight: "700" }}>
                Measured a = {measured.toFixed(3)} m/s² — expected {a.toFixed(2)} m/s². Re-arm the bench.
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
              <Text style={{ fontSize: 12, fontWeight: "700", color: theme.colors.textMuted }}>Mass {mass} kg · Force {force} N</Text>
              <Text style={{ fontSize: 12, fontWeight: "800", color: ACCENT }}>a = {a.toFixed(2)} m/s²</Text>
            </View>
            {status !== "idle" && (
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 8, backgroundColor: "#eff6ff", borderRadius: 8, paddingVertical: 8, paddingHorizontal: 8 }}>
                <Text style={{ fontSize: 12, fontWeight: "800", color: "#1e40af" }}>⏱ {liveT.toFixed(2)} s</Text>
                <Text style={{ fontSize: 12, fontWeight: "800", color: "#1e40af" }}>v {liveV.toFixed(2)} m/s</Text>
                <Text style={{ fontSize: 12, fontWeight: "800", color: "#1e40af" }}>s {liveS.toFixed(2)} m</Text>
              </View>
            )}
            <View style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 8 }}>
              {MASS_CHOICES.map((val) => (
                <TouchableOpacity key={val} onPress={() => { setMass(val); rearm(); }} disabled={status === "running"} style={{ width: "30%", margin: "1.5%", backgroundColor: mass === val ? ACCENT : theme.colors.surfaceMuted, borderRadius: 8, paddingVertical: 8 }}>
                  <Text style={{ textAlign: "center", fontSize: 11, fontWeight: "800", color: mass === val ? "#fff" : theme.colors.textMuted }}>{val} kg</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 10 }}>
              {FORCE_CHOICES.map((val) => (
                <TouchableOpacity key={val} onPress={() => { setForce(val); rearm(); }} disabled={status === "running"} style={{ width: "30%", margin: "1.5%", backgroundColor: force === val ? ACCENT : theme.colors.surfaceMuted, borderRadius: 8, paddingVertical: 8 }}>
                  <Text style={{ textAlign: "center", fontSize: 11, fontWeight: "800", color: force === val ? "#fff" : theme.colors.textMuted }}>{val} N</Text>
                </TouchableOpacity>
              ))}
            </View>
            {measured != null && (
              <Text style={{ fontSize: 12, color: theme.colors.text, marginBottom: 8, textAlign: "center" }}>
                Measured a = <Text style={{ fontWeight: "800" }}>{measured.toFixed(3)} m/s²</Text>
              </Text>
            )}
            <View style={{ flexDirection: "row" }}>
              <Btn label={status === "running" ? "… Accelerating" : "① Accelerate"} onPress={accelerate} accent={ACCENT} disabled={status === "running"} />
              <View style={{ width: 8 }} />
              <Btn label="② Measure" onPress={measure} accent="#0ea5e9" disabled={status !== "ready"} />
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
              <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>F = ma Confirmed!</Text>
              <View style={{ backgroundColor: theme.colors.surfaceMuted, borderRadius: 12, padding: 14, marginVertical: 14 }}>
                <Text style={{ fontSize: 13, color: theme.colors.text }}>• Trolley mass: {mass} kg</Text>
                <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 4 }}>• Applied force: {force} N</Text>
                <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 4 }}>• Predicted a = F/m: <Text style={{ fontWeight: "800" }}>{a.toFixed(3)} m/s²</Text></Text>
                <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 4 }}>• Measured a: {measured != null ? measured.toFixed(3) : a.toFixed(3)} m/s²</Text>
                <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 4 }}>• Track length: {TRACK_REAL_M} m</Text>
              </View>
              <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.text, marginBottom: 6 }}>Your report / observations</Text>
              <TextInput
                style={{ borderWidth: 1, borderColor: theme.colors.border, borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }}
                placeholder="e.g. Doubling the force doubled the acceleration; doubling the mass halved it — confirming a = F/m."
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
