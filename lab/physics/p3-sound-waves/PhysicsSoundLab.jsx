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
import Svg, { Path, Rect, Line, Circle, G } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { labStorage } from "../../../storage/labStorage";
import { wavelength, firstResonantLength, FREQUENCIES, SPEEDS, MAX_COLUMN, pitchLabel } from "./sound-data";
import { Arrow, Label } from "../../components/svgKit";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";

const ACCENT = "#0ea5e9";
const STEP_LABELS = ["Set up", "Strike", "Resonate"];
const TOL = 0.015; // m — tolerance for the first resonance

// SVG geometry (px in the apparatus viewBox).
const TUBE_CENTER = 110;
const TUBE_LEFT = 90;
const TUBE_RIGHT = 130;
const TUBE_TOP = 70;
const TUBE_BOTTOM = 300;
const TUBE_PX = TUBE_BOTTOM - TUBE_TOP; // 230 px interior
const PX_PER_M = TUBE_PX / MAX_COLUMN;

export default function PhysicsSoundLab() {
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "p3-sound-waves";
  const cfg = route.params?.config;
  const theme = useTheme();

  const [freq, setFreq] = useState(cfg?.frequency || 384);
  const [speed, setSpeed] = useState(cfg?.speed || 340);
  // Air-column length = distance from water surface to the open top (m).
  const [column, setColumn] = useState(0.6);

  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState(
    "Set the frequency & speed, then Strike the fork and raise the water until the air column equals λ/4 — the tube will resonate."
  );
  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const [phase, setPhase] = useState(0);
  const rafRef = useRef(null);

  const lambda = wavelength(speed, freq); // m
  const Lres = firstResonantLength(speed, freq); // m (λ/4)
  const atResonance = Math.abs(column - Lres) <= TOL;

  const say = (m) => setMessage(m);

  // Animate the fork vibration + standing wave while struck / resonating.
  useEffect(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (status === "struck" || status === "success") {
      const start = Date.now();
      const loop = () => {
        setPhase((Date.now() - start) / 1000);
        rafRef.current = requestAnimationFrame(loop);
      };
      rafRef.current = requestAnimationFrame(loop);
    }
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [status]);

  function checkResonance() {
    const LresNow = firstResonantLength(speed, freq);
    if (Math.abs(column - LresNow) <= TOL) {
      if (status !== "success") {
        setStatus("success");
        setSaved(false);
        setNotes("");
        say(`🎵 RESONANCE! Air column ${column.toFixed(3)} m matches λ/4 = ${LresNow.toFixed(3)} m. The tube rings loudly.`);
      }
    }
  }

  function strike() {
    haptic.light();
    if (status === "success") return;
    setStatus("struck");
    const LresNow = firstResonantLength(speed, freq);
    if (Math.abs(column - LresNow) <= TOL) {
      setStatus("success");
      setSaved(false);
      setNotes("");
      say(`🎵 RESONANCE! Air column ${column.toFixed(3)} m matches λ/4 = ${LresNow.toFixed(3)} m. The tube rings loudly.`);
    } else {
      say(`🔔 Fork struck at ${freq} Hz (λ = ${wavelength(speed, freq).toFixed(3)} m). Slide the water until the air column reaches λ/4 = ${LresNow.toFixed(3)} m to hear it resonate.`);
    }
  }

  function changeColumn(delta) {
    haptic.light();
    if (status === "success") return;
    const next = Math.max(0.05, Math.min(MAX_COLUMN, +(column + delta).toFixed(3)));
    setColumn(next);
    // Defer resonance check until after state update.
    setTimeout(checkResonance, 0);
  }

  function setFreqSafe(f) {
    haptic.light();
    setFreq(f);
    if (status === "success" || status === "struck") checkResonanceAfter(f, speed);
  }
  function setSpeedSafe(v) {
    haptic.light();
    setSpeed(v);
    if (status === "success" || status === "struck") checkResonanceAfter(freq, v);
  }
  function checkResonanceAfter(f, v) {
    const LresNow = firstResonantLength(v, f);
    if (Math.abs(column - LresNow) <= TOL) {
      setStatus("success");
      setSaved(false);
      setNotes("");
      say(`🎵 RESONANCE! Air column ${column.toFixed(3)} m matches λ/4 = ${LresNow.toFixed(3)} m.`);
    }
  }

  function reset() {
    haptic.light();
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setColumn(0.6);
    setStatus("idle");
    setSaved(false);
    say("Bench reset. Strike the fork and adjust the water level to find resonance.");
  }

  async function saveReport() {
    haptic.light();
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "sound-resonance",
      experimentTitle: experiment.title || "Sound: Frequency, Pitch & Resonance",
      topicId,
      date: new Date().toLocaleDateString(),
      frequency: freq,
      speed,
      wavelength: parseFloat(lambda.toFixed(4)),
      resonantLength: parseFloat(Lres.toFixed(4)),
      pitch: pitchLabel(freq),
      status: "success",
      summary: `λ = ${lambda.toFixed(3)} m, first resonance at ${Lres.toFixed(3)} m (f = ${freq} Hz, v = ${speed} m/s).`,
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); say("📝 Report saved to your phone."); }
    else say("Could not save the report. Please try again.");
  }

  const step = status === "idle" ? 0 : status === "struck" ? 1 : 2;

  // ---- wave / fork geometry ----
  const colPx = column * PX_PER_M;
  const waterTopPx = TUBE_BOTTOM - colPx;
  const resWaterTopPx = TUBE_TOP + Lres * PX_PER_M;

  // Breathing amplitude — louder (bigger) at resonance.
  const breathe = status === "struck" || status === "success"
    ? (0.65 + 0.35 * Math.abs(Math.sin(2 * Math.PI * 7 * phase)))
    : 0.25;
  const ampBase = atResonance ? 24 : 14;
  const A = ampBase * breathe;

  const wavePath = buildWave(column, lambda, A, waterTopPx, TUBE_TOP, TUBE_CENTER);

  // Fork vibration offset (visual-only, slowed so it's visible).
  const vib = status === "struck" || status === "success"
    ? Math.sin(2 * Math.PI * 9 * phase) * 3
    : 0;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />
      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: ACCENT, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>
          {experiment.title || "Sound: Frequency, Pitch & Resonance"}
        </Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center", paddingVertical: 10, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.borderSoft, gap: 6 }}>
        {STEP_LABELS.map((l, i) => (
          <View key={l} style={{ alignItems: "center", marginHorizontal: 4 }}>
            <View style={{ width: 22, height: 22, borderRadius: 11, alignItems: "center", justifyContent: "center", backgroundColor: i < step ? ACCENT : i === step ? "#bae6fd" : theme.colors.border }}>
              <Text style={{ fontSize: 11, fontWeight: "800", color: i < step ? "#fff" : theme.colors.textMuted }}>{i < step ? "✓" : i + 1}</Text>
            </View>
            <Text style={{ fontSize: 9, color: theme.colors.textMuted, marginTop: 3, fontWeight: "600" }}>{l}</Text>
          </View>
        ))}
      </View>

      {/* ===== BENCH / STAGE ===== */}
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: theme.colors.surfaceMuted }}>
        <Svg width={220} height={330} viewBox="0 0 220 330">
          {/* bench */}
          <Rect x={0} y={TUBE_BOTTOM + 6} width={220} height={20} fill="#e2e8f0" />
          <Line x1={0} y1={TUBE_BOTTOM + 6} x2={220} y2={TUBE_BOTTOM + 6} stroke="#cbd5e1" strokeWidth={2} />

          {/* tuning fork (shakes with vibration) */}
          <G x={vib} y={0}>
            <Line x1={TUBE_CENTER} y1={TUBE_TOP - 40} x2={TUBE_CENTER} y2={TUBE_TOP - 12} stroke="#64748b" strokeWidth={4} />
            <Path d={`M${TUBE_CENTER - 9} ${TUBE_TOP - 12} Q${TUBE_CENTER} ${TUBE_TOP - 4} ${TUBE_CENTER + 9} ${TUBE_TOP - 12}`} fill="none" stroke="#64748b" strokeWidth={4} />
            <Line x1={TUBE_CENTER - 9} y1={TUBE_TOP - 12} x2={TUBE_CENTER - 9} y2={TUBE_TOP - 36} stroke="#94a3b8" strokeWidth={4} />
            <Line x1={TUBE_CENTER + 9} y1={TUBE_TOP - 12} x2={TUBE_CENTER + 9} y2={TUBE_TOP - 36} stroke="#94a3b8" strokeWidth={4} />
            <Circle cx={TUBE_CENTER - 9} cy={TUBE_TOP - 36} r={3} fill="#94a3b8" />
            <Circle cx={TUBE_CENTER + 9} cy={TUBE_TOP - 36} r={3} fill="#94a3b8" />
          </G>

          {/* resonance tube (glass) */}
          <Rect x={TUBE_LEFT} y={TUBE_TOP} width={TUBE_RIGHT - TUBE_LEFT} height={TUBE_PX} rx={4} fill="#dbeafe" stroke="#93c5fd" strokeWidth={3} />
          {/* open top rim */}
          <Line x1={TUBE_LEFT} y1={TUBE_TOP} x2={TUBE_RIGHT} y2={TUBE_TOP} stroke="#93c5fd" strokeWidth={4} />

          {/* water */}
          <Rect x={TUBE_LEFT + 2} y={waterTopPx} width={TUBE_RIGHT - TUBE_LEFT - 4} height={TUBE_BOTTOM - waterTopPx - 2} fill="#38bdf8" opacity={0.85} />

          {/* standing wave in the air column */}
          {status === "struck" || status === "success" ? (
            <Path d={wavePath} fill="none" stroke={atResonance ? "#f59e0b" : ACCENT} strokeWidth={2.5} />
          ) : null}

          {/* resonant-length guide line */}
          <Line x1={TUBE_LEFT - 14} y1={resWaterTopPx} x2={TUBE_RIGHT + 6} y2={resWaterTopPx} stroke="#f59e0b" strokeWidth={1.5} strokeDasharray="5 4" />
          <Arrow x1={TUBE_RIGHT + 12} y1={resWaterTopPx} x2={TUBE_RIGHT + 30} y2={resWaterTopPx} color="#f59e0b" w={2} />
          <Label x={TUBE_RIGHT + 34} y={resWaterTopPx + 3} text="λ/4" color="#f59e0b" size={10} />

          <Label x={TUBE_CENTER} y={TUBE_TOP - 50} text="open end" color="#64748b" size={9} />
          <Label x={TUBE_CENTER} y={TUBE_BOTTOM + 2} text="water" color="#0369a1" size={9} />
        </Svg>
      </View>

      {/* ===== CONTROL PANEL ===== */}
      <View style={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 16, paddingTop: 14, paddingBottom: 18, shadowColor: "#000", shadowOffset: { width: 0, height: -3 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 10 }}>
        <View style={{ backgroundColor: status === "success" ? "#f0fdf4" : "#f0f9ff", borderRadius: 12, padding: 12, borderWidth: 1, borderColor: status === "success" ? "#bbf7d0" : "#bae6fd", marginBottom: 12, minHeight: 58, justifyContent: "center" }}>
          <Text style={{ fontSize: 13, lineHeight: 19, color: theme.colors.text }}>{message}</Text>
        </View>

        {/* live read-out */}
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10, backgroundColor: "#e0f2fe", borderRadius: 8, paddingVertical: 8, paddingHorizontal: 8 }}>
          <Text style={{ fontSize: 12, fontWeight: "800", color: "#075985" }}>λ {lambda.toFixed(3)} m</Text>
          <Text style={{ fontSize: 12, fontWeight: "800", color: "#075985" }}>λ/4 {Lres.toFixed(3)} m</Text>
          <Text style={{ fontSize: 12, fontWeight: "800", color: "#075985" }}>air {column.toFixed(3)} m</Text>
        </View>

        <Text style={{ fontSize: 11, fontWeight: "800", color: theme.colors.textMuted, marginBottom: 6 }}>FREQUENCY (Hz)</Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 10 }}>
          {FREQUENCIES.map((f) => (
            <TouchableOpacity key={f} onPress={() => setFreqSafe(f)} disabled={status === "success"} style={{ width: "18%", margin: "1%", backgroundColor: freq === f ? ACCENT : theme.colors.surfaceMuted, borderRadius: 8, paddingVertical: 7 }}>
              <Text style={{ textAlign: "center", fontSize: 11, fontWeight: "800", color: freq === f ? "#fff" : theme.colors.textMuted }}>{f}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={{ fontSize: 11, fontWeight: "800", color: theme.colors.textMuted, marginBottom: 6 }}>SPEED OF SOUND (m/s)</Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 10 }}>
          {SPEEDS.map((v) => (
            <TouchableOpacity key={v} onPress={() => setSpeedSafe(v)} disabled={status === "success"} style={{ width: "30%", margin: "1.5%", backgroundColor: speed === v ? ACCENT : theme.colors.surfaceMuted, borderRadius: 8, paddingVertical: 8 }}>
              <Text style={{ textAlign: "center", fontSize: 11, fontWeight: "800", color: speed === v ? "#fff" : theme.colors.textMuted }}>{v}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {status === "success" ? (
          <>
            <Btn label="📝 View Report" onPress={() => setReportOpen(true)} accent={ACCENT} full />
            <Btn label="↺ Reset Experiment" onPress={reset} accent="#64748b" full />
          </>
        ) : (
          <>
            <View style={{ flexDirection: "row", marginBottom: 8 }}>
              <TouchableOpacity onPress={() => changeColumn(0.02)} disabled={status === "success"} style={{ flex: 1, marginRight: 4, backgroundColor: theme.colors.surfaceMuted, borderRadius: 10, paddingVertical: 10 }}>
                <Text style={{ textAlign: "center", fontSize: 12, fontWeight: "800", color: theme.colors.text }}>💧 Water ▲ (raise)</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => changeColumn(-0.02)} disabled={status === "success"} style={{ flex: 1, marginLeft: 4, backgroundColor: theme.colors.surfaceMuted, borderRadius: 10, paddingVertical: 10 }}>
                <Text style={{ textAlign: "center", fontSize: 12, fontWeight: "800", color: theme.colors.text }}>💧 Water ▼ (lower)</Text>
              </TouchableOpacity>
            </View>
            <Btn label={status === "struck" ? "🔔 Fork ringing…" : "① Strike Fork"} onPress={strike} accent={ACCENT} full disabled={status === "struck"} />
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
              <Text style={{ fontSize: 26, textAlign: "center" }}>🎵</Text>
              <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>Resonance Found!</Text>
              <View style={{ backgroundColor: theme.colors.surfaceMuted, borderRadius: 12, padding: 14, marginVertical: 14 }}>
                <Text style={{ fontSize: 13, color: theme.colors.text }}>• Frequency: {freq} Hz · Pitch: {pitchLabel(freq)}</Text>
                <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 4 }}>• Speed of sound: {speed} m/s</Text>
                <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 4 }}>• Wavelength λ: <Text style={{ fontWeight: "800" }}>{lambda.toFixed(3)} m</Text></Text>
                <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 4 }}>• First resonant length (λ/4): <Text style={{ fontWeight: "800" }}>{Lres.toFixed(3)} m</Text></Text>
              </View>
              <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.text, marginBottom: 6 }}>Your report / observations</Text>
              <TextInput
                style={{ borderWidth: 1, borderColor: theme.colors.border, borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }}
                placeholder="e.g. Lowering the frequency lengthened the wavelength, so the resonant water level dropped."
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

// Build a standing-wave envelope inside the air column: zero displacement at the
// water surface, growing to an antinode at the open top. One bump ≈ λ/4.
function buildWave(column, lambdaM, A, waterTopPx, tubeTop, centerX) {
  if (!lambdaM) return "";
  const steps = 44;
  const colPx = waterTopPx - tubeTop;
  if (colPx <= 0) return "";
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const frac = i / steps;
    const y = waterTopPx - frac * colPx; // from water surface up to the top
    const distM = frac * column; // distance from water (0) to open top (column)
    const xoff = A * Math.sin((2 * Math.PI * distM) / lambdaM);
    const x = centerX + xoff;
    d += (i === 0 ? "M" : "L") + x.toFixed(1) + " " + y.toFixed(1) + " ";
  }
  return d;
}

function Btn({ label, onPress, disabled, accent = ACCENT, full }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.85}
      style={{ backgroundColor: disabled ? "#e5e7eb" : accent, borderRadius: 11, paddingVertical: 12, alignItems: "center", justifyContent: "center", opacity: disabled ? 0.6 : 1, marginBottom: full ? 8 : 0 }}
    >
      <Text style={{ color: disabled ? "#94a3b8" : "#fff", fontWeight: "800", fontSize: 14 }} numberOfLines={1}>{label}</Text>
    </TouchableOpacity>
  );
}
