import React, { useState, useRef, useEffect, useMemo } from "react";
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
import Svg, { Polygon, Line, Rect } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { labStorage } from "../../../storage/labStorage";
import {
  inclineDistance,
  forceAlongPlane,
  workAgainstGravity,
  gpeGained,
} from "./workenergy-data";
import { Arrow, Label, LabTable } from "../../components/svgKit";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";

const ACCENT = "#ea580c";
const STEP_LABELS = ["Set up", "Push", "Report"];

// Fixed scene geometry (viewBox 0 0 SCENE_W SCENE_H, 1:1 with the rendered Svg).
const SCENE_W = 280;
const SCENE_H = 260;
const BASE_Y = 220;
const START_X = 40;
const END_X = 230;
const RUN = END_X - START_X; // 190 px horizontal run
const BLOCK_W = 40;
const BLOCK_H = 26;

export default function PhysicsWorkEnergyLab() {
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "p2-work-energy-power";
  const cfg = route.params?.config;
  const theme = useTheme();

  const [mass, setMass] = useState(cfg?.mass || 1.0);
  const [angle, setAngle] = useState(cfg?.angle || 20);
  const [height, setHeight] = useState(cfg?.height || 1.0);

  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState(
    "Set the mass, angle & height, then press Push to slide the block to the top of the plane."
  );
  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const progress = useRef(new Animated.Value(0)).current;
  const animRef = useRef(null);

  // ---- derived physics ----
  const d = inclineDistance(height, angle);
  const F = forceAlongPlane(mass, angle);
  const W = workAgainstGravity(mass, height);
  const gpe = gpeGained(mass, height);
  const finiteD = isFinite(d);

  // ---- geometry for the scene ----
  const rise = Math.min(Math.max(RUN * Math.tan((angle * Math.PI) / 180), 8), 190);
  const surfaceAngleDeg = (Math.atan2(rise, RUN) * 180) / Math.PI;
  const C = { x: END_X, y: BASE_Y - rise }; // top of incline
  const A = { x: START_X, y: BASE_Y }; // bottom of incline

  // Block centre as a function of progress p (0 at A, 1 at C), offset up off the surface.
  const len = Math.sqrt(rise * rise + RUN * RUN);
  const offX = (-rise / len) * (BLOCK_H / 2 + 1);
  const offY = (-RUN / len) * (BLOCK_H / 2 + 1);

  const blockX = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [A.x + offX - BLOCK_W / 2, C.x + offX - BLOCK_W / 2],
  });
  const blockY = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [A.y + offY - BLOCK_H / 2, C.y + offY - BLOCK_H / 2],
  });
  const blockRotate = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [`${surfaceAngleDeg}deg`, `${surfaceAngleDeg}deg`],
  });

  const say = (m) => setMessage(m);

  useEffect(() => {
    return () => {
      if (animRef.current) animRef.current.stop();
    };
  }, []);

  function step(setter, value, delta, min, max) {
    if (status === "running") return;
    const next = Math.min(max, Math.max(min, parseFloat((value + delta).toFixed(2))));
    setter(next);
  }

  function push() {
    haptic.light();
    if (status === "running") return;
    if (!finiteD) return say("Set an angle greater than 0° so the block can slide up.");
    progress.setValue(0);
    setStatus("running");
    setSaved(false);
    setNotes("");
    say(`💪 Pushing the ${mass} kg block up the ${angle}° plane (d ≈ ${d.toFixed(2)} m)…`);
    const duration = Math.min(Math.max(d * 700, 1400), 3200);
    animRef.current = Animated.timing(progress, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    });
    animRef.current.start(({ finished }) => {
      if (!finished) return;
      setStatus("success");
      say(`🎉 Done! Work done = ${W.toFixed(1)} J, GPE gained = ${gpe.toFixed(1)} J, force along plane = ${F.toFixed(1)} N.`);
    });
  }

  function reset() {
    haptic.light();
    if (animRef.current) animRef.current.stop();
    Animated.timing(progress, { toValue: 0, duration: 350, useNativeDriver: true }).start();
    setStatus("idle");
    say("Bench reset. Adjust the variables and press Push again.");
  }

  async function saveReport() {
    haptic.light();
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "work-inclined-plane",
      experimentTitle: experiment.title || "Work Done on an Inclined Plane",
      topicId,
      date: new Date().toLocaleDateString(),
      mass,
      angle,
      height,
      distance: finiteD ? parseFloat(d.toFixed(2)) : 0,
      force: parseFloat(F.toFixed(2)),
      work: parseFloat(W.toFixed(2)),
      gpe: parseFloat(gpe.toFixed(2)),
      status: "success",
      summary: `Block ${mass} kg pushed up ${angle}° plane to height ${height} m: W = ${W.toFixed(1)} J, GPE = ${gpe.toFixed(1)} J, F = ${F.toFixed(1)} N.`,
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); say("📝 Report saved to your phone."); }
    else say("Could not save the report. Please try again.");
  }

  const stepIdx = status === "idle" ? 0 : status === "running" ? 1 : 2;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />
      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: ACCENT, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>
          {experiment.title || "Work Done on an Inclined Plane"}
        </Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center", paddingVertical: 10, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.borderSoft, gap: 6 }}>
        {STEP_LABELS.map((l, i) => (
          <View key={l} style={{ alignItems: "center", marginHorizontal: 4 }}>
            <View style={{ width: 22, height: 22, borderRadius: 11, alignItems: "center", justifyContent: "center", backgroundColor: i < stepIdx ? ACCENT : i === stepIdx ? "#fed7aa" : theme.colors.border }}>
              <Text style={{ fontSize: 11, fontWeight: "800", color: i < step ? "#fff" : theme.colors.textMuted }}>{i < step ? "✓" : i + 1}</Text>
            </View>
            <Text style={{ fontSize: 9, color: theme.colors.textMuted, marginTop: 3, fontWeight: "600" }}>{l}</Text>
          </View>
        ))}
      </View>

      {/* ===== BENCH / STAGE ===== */}
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: theme.colors.surfaceMuted }}>
        <View style={{ width: SCENE_W, height: SCENE_H, position: "relative" }}>
          <Svg width={SCENE_W} height={SCENE_H} viewBox={`0 0 ${SCENE_W} ${SCENE_H}`}>
            {/* inclined plane (triangle) */}
            <Polygon
              points={`${A.x},${A.y} ${END_X},${BASE_Y} ${C.x},${C.y}`}
              fill="#fde6d3"
              stroke={ACCENT}
              strokeWidth="2.5"
            />
            {/* base / ground */}
            <Line x1={10} y1={BASE_Y} x2={270} y2={BASE_Y} stroke={ACCENT} strokeWidth="3" />
            {/* height reference (dashed vertical at top) */}
            <Line x1={C.x} y1={BASE_Y} x2={C.x} y2={C.y} stroke={theme.colors.textMuted} strokeWidth="1.5" strokeDasharray="4 4" />
            {/* applied force arrow along the surface (push direction) */}
            <Arrow x1={A.x + 14} y1={A.y - 6} x2={C.x - 14} y2={C.y + 6} color={ACCENT} w={3} label="F" />
            {/* angle wedge: base line + surface line from A */}
            <Line x1={A.x} y1={A.y} x2={A.x + 46} y2={A.y} stroke={theme.colors.textMuted} strokeWidth="1.5" />
            <Line x1={A.x} y1={A.y} x2={A.x + 46 * Math.cos((surfaceAngleDeg * Math.PI) / 180)} y2={A.y - 46 * Math.sin((surfaceAngleDeg * Math.PI) / 180)} stroke={theme.colors.textMuted} strokeWidth="1.5" />
            <Label x={A.x + 58} y={A.y - 18} text={`θ = ${angle}°`} color={theme.colors.text} size={11} />
            <Label x={C.x + 4} y={(BASE_Y + C.y) / 2} text={`h = ${height} m`} color={theme.colors.text} size={10} />
          </Svg>

          {/* animated block sliding along the surface */}
          <Animated.View
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: BLOCK_W,
              height: BLOCK_H,
              transformOrigin: "center",
              transform: [{ translateX: blockX }, { translateY: blockY }, { rotate: blockRotate }],
            }}
          >
            <Svg width={BLOCK_W} height={BLOCK_H} viewBox={`0 0 ${BLOCK_W} ${BLOCK_H}`}>
              <Rect x="1" y="1" width={BLOCK_W - 2} height={BLOCK_H - 2} rx="5" fill={ACCENT} stroke="#9a3412" strokeWidth="2" />
              <Rect x="4" y="4" width={BLOCK_W - 8} height="5" rx="2.5" fill="#fdba74" />
            </Svg>
          </Animated.View>
        </View>
        <View style={{ marginTop: 8, width: SCENE_W + 40 }}>
          <LabTable w={SCENE_W + 40} h={18} />
        </View>
      </View>

      {/* ===== CONTROL PANEL ===== */}
      <View style={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 16, paddingTop: 14, paddingBottom: 18, shadowColor: "#000", shadowOffset: { width: 0, height: -3 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 10 }}>
        <View style={{ backgroundColor: status === "failed" ? "#fef2f2" : status === "success" ? "#f0fdf4" : "#fff7ed", borderRadius: 12, padding: 12, borderWidth: 1, borderColor: status === "failed" ? "#fecaca" : status === "success" ? "#bbf7d0" : "#fed7aa", marginBottom: 12, minHeight: 58, justifyContent: "center" }}>
          <Text style={{ fontSize: 13, lineHeight: 19, color: theme.colors.text }}>{message}</Text>
        </View>

        {status === "success" ? (
          <>
            <Btn label="📝 View Report" onPress={() => setReportOpen(true)} accent={ACCENT} full />
            <Btn label="↺ Reset Experiment" onPress={reset} accent="#64748b" full />
          </>
        ) : (
          <>
            {/* variable steppers */}
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 8 }}>
              <Stepper label={`m ${mass} kg`} onMinus={() => step(setMass, mass, -0.5, 0.5, 5)} onPlus={() => step(setMass, mass, 0.5, 0.5, 5)} disabled={status === "running"} />
              <View style={{ width: 8 }} />
              <Stepper label={`θ ${angle}°`} onMinus={() => step(setAngle, angle, -5, 5, 60)} onPlus={() => step(setAngle, angle, 5, 5, 60)} disabled={status === "running"} />
              <View style={{ width: 8 }} />
              <Stepper label={`h ${height} m`} onMinus={() => step(setHeight, height, -0.1, 0.2, 5)} onPlus={() => step(setHeight, height, 0.1, 0.2, 5)} disabled={status === "running"} />
            </View>

            <View style={{ backgroundColor: "#ffedd5", borderRadius: 10, padding: 10, marginBottom: 10 }}>
              <Text style={{ fontSize: 12, fontWeight: "800", color: "#9a3412" }}>
                d = {finiteD ? d.toFixed(2) : "∞"} m · F = {F.toFixed(2)} N · W = {W.toFixed(2)} J
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <Btn label={status === "running" ? "… Pushing" : "① Push block"} onPress={push} accent={ACCENT} disabled={status === "running"} />
              <View style={{ width: 8 }} />
              <Btn label="↺ Reset" onPress={reset} accent="#64748b" disabled={status === "running"} />
            </View>
          </>
        )}
      </View>

      <Modal visible={reportOpen} transparent animationType="slide" onRequestClose={() => setReportOpen(false)}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
          <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.45)", justifyContent: "flex-end" }}>
            <ScrollView style={{ maxHeight: "88%" }} contentContainerStyle={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 24, paddingBottom: 32 }} keyboardShouldPersistTaps="handled">
              <View style={{ width: 40, height: 4, backgroundColor: theme.colors.border, borderRadius: 2, alignSelf: "center", marginBottom: 18 }} />
              <Text style={{ fontSize: 26, textAlign: "center" }}>🎉</Text>
              <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>Work Done!</Text>
              <View style={{ backgroundColor: theme.colors.surfaceMuted, borderRadius: 12, padding: 14, marginVertical: 14 }}>
                <Text style={{ fontSize: 13, color: theme.colors.text }}>• Mass: {mass} kg · Angle: {angle}° · Height: {height} m</Text>
                <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 4 }}>• Distance along plane: <Text style={{ fontWeight: "800" }}>{finiteD ? d.toFixed(2) : "∞"} m</Text></Text>
                <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 4 }}>• Force along plane: <Text style={{ fontWeight: "800" }}>{F.toFixed(2)} N</Text></Text>
                <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 4 }}>• Work done: <Text style={{ fontWeight: "800" }}>{W.toFixed(2)} J</Text></Text>
                <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 4 }}>• GPE gained: <Text style={{ fontWeight: "800" }}>{gpe.toFixed(2)} J</Text></Text>
              </View>
              <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.text, marginBottom: 6 }}>Your report / observations</Text>
              <TextInput
                style={{ borderWidth: 1, borderColor: theme.colors.border, borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }}
                placeholder="e.g. Work input (F·d) equalled the GPE gained, confirming energy is conserved when friction is ignored."
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

function Stepper({ label, onMinus, onPlus, disabled }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff7ed", borderRadius: 10, paddingVertical: 8, paddingHorizontal: 4, alignItems: "center" }}>
      <Text style={{ fontSize: 12, fontWeight: "800", color: "#9a3412", marginBottom: 4 }}>{label}</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={onMinus} disabled={disabled} style={{ width: 30, height: 30, borderRadius: 8, backgroundColor: disabled ? "#f1f5f9" : "#fed7aa", alignItems: "center", justifyContent: "center" }}>
          <Text style={{ fontSize: 18, fontWeight: "900", color: disabled ? "#cbd5e1" : ACCENT }}>−</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPlus} disabled={disabled} style={{ width: 30, height: 30, borderRadius: 8, backgroundColor: disabled ? "#f1f5f9" : "#fed7aa", alignItems: "center", justifyContent: "center", marginLeft: 8 }}>
          <Text style={{ fontSize: 18, fontWeight: "900", color: disabled ? "#cbd5e1" : ACCENT }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
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
