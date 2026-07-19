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
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import Svg, { Path, Line, Polyline, Text as SvgText, Circle, Rect } from "react-native-svg";
import { labStorage } from "../../../storage/labStorage";
import { RetortStand } from "../../components/svgKit";
import {
  LOAD_STEP,
  MAX_LOADS,
  limitOfProportionality,
  extensionFor,
  analyse,
} from "./hooke-data";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";

const ACCENT = "#0ea5e9";
const STEP_LABELS = ["Set up", "Load", "Plot"];
const NATURAL = 90; // px — unstretched spring length drawn

// Build a vertical zig-zag (helical) spring path of width w and height h.
function springPath(w, h, coils = 8) {
  const half = w / 2;
  const seg = h / (coils * 2);
  let d = `M ${half} 0`;
  for (let i = 0; i < coils; i++) {
    const y1 = i * 2 * seg + seg;
    const y2 = i * 2 * seg + 2 * seg;
    d += ` L ${i % 2 === 0 ? w : 0} ${y1} L ${i % 2 === 0 ? 0 : w} ${y2}`;
  }
  d += ` L ${half} ${h}`;
  return d;
}

export default function PhysicsHookeLab() {
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "all-elastic-solids";
  const cfg = route.params?.config;
  const theme = useTheme();

  const k = cfg?.k || 50;
  const limitLoad = useMemo(() => limitOfProportionality(k), [k]);

  const [stageH, setStageH] = useState(0);
  const stageMaxPx = stageH > 0 ? Math.round(stageH * 0.6) : 240;
  // Map the proportional region to ~200 px so the spring visibly stretches on-screen.
  const pxPerM = useMemo(() => 200 / (limitLoad / k), [limitLoad, k]);

  const [loadCount, setLoadCount] = useState(0);
  const [points, setPoints] = useState([]); // [{ load, extension }] increasing load
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState(
    "Add 0.5 N loads one at a time. Watch the spring stretch and the load–extension graph build. Finish once the line bends."
  );
  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const extAnim = useRef(new Animated.Value(0)).current;

  // Current total load (N) and physical extension (m).
  const load = loadCount * LOAD_STEP;
  const extension = useMemo(() => {
    if (loadCount === 0) return 0;
    return extensionFor(load, k, limitLoad);
  }, [loadCount, load, k, limitLoad]);

  const targetPx = Math.min(extension * pxPerM, stageMaxPx);

  const springScaleY = extAnim.interpolate({
    inputRange: [0, stageMaxPx],
    outputRange: [1, (NATURAL + stageMaxPx) / NATURAL],
  });

  const say = (m) => setMessage(m);

  useEffect(() => {
    Animated.timing(extAnim, {
      toValue: targetPx,
      duration: 450,
      useNativeDriver: true,
    }).start();
  }, [targetPx, extAnim, stageMaxPx]);

  function addLoad() {
    haptic.light();
    if (status === "success" || status === "failed") return;
    if (loadCount >= MAX_LOADS) return say("The spring is at its maximum tested load. Press Finish to read your results.");
    const newCount = loadCount + 1;
    const newLoad = newCount * LOAD_STEP;
    const newExt = extensionFor(newLoad, k, limitLoad);
    setLoadCount(newCount);
    setPoints((prev) => [...prev, { load: newLoad, extension: newExt }]);
    if (newLoad <= limitLoad) {
      setStatus("elastic");
      say(`Load = ${newLoad.toFixed(1)} N → extension = ${(newExt * 100).toFixed(1)} cm. Still within the elastic region (straight line).`);
    } else {
      setStatus("yielding");
      say(`Load = ${newLoad.toFixed(1)} N → extension = ${(newExt * 100).toFixed(1)} cm. The spring has passed its limit of proportionality and is deforming — the graph bends upward.`);
    }
  }

  function removeLoad() {
    haptic.light();
    if (status === "success" || status === "failed") return;
    if (loadCount === 0) return;
    const newCount = loadCount - 1;
    setLoadCount(newCount);
    setPoints((prev) => prev.slice(0, -1));
    setStatus(newCount === 0 ? "idle" : "elastic");
    say(newCount === 0 ? "All loads removed. The spring returns to its natural length." : "One load removed.");
  }

  function reset() {
    haptic.light();
    setLoadCount(0);
    setPoints([]);
    setStatus("idle");
    setSaved(false);
    say("Bench reset. The spring is back to its natural length. Add loads to begin.");
  }

  function finish() {
    haptic.success();
    if (loadCount < 4) {
      return say("Add at least 4 loads (including some past the bend) before finishing, so you can read both k and the limit of proportionality.");
    }
    setStatus("success");
    setSaved(false);
    setNotes("");
    say("✅ Experiment complete! Your load–extension graph is plotted. Tap View Report to see k and the limit of proportionality.");
  }

  const analysis = useMemo(() => analyse(points, k), [points, k]);

  async function saveReport() {
    haptic.light();
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "hookes-law",
      experimentTitle: experiment.title || "Hooke's Law (Load vs Extension)",
      topicId,
      date: new Date().toLocaleDateString(),
      springConstantChosen: k,
      springConstantMeasured: analysis.k,
      limitOfProportionality: analysis.limitLoad,
      loadsTested: loadCount,
      maxLoad: parseFloat(load.toFixed(2)),
      maxExtensionCm: parseFloat((extension * 100).toFixed(2)),
      status: "success",
      summary: `Measured k ≈ ${analysis.k} N/m (chosen ${k} N/m); limit of proportionality ≈ ${
        analysis.limitLoad != null ? analysis.limitLoad.toFixed(2) + " N" : "not reached"
      }.`,
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); say("📝 Report saved to your phone."); }
    else say("Could not save the report. Please try again.");
  }

  const step = status === "idle" ? 0 : status === "success" || status === "failed" ? 2 : 1;

  // ----- graph layout -----
  const GW = 196, GH = 250, M = { l: 34, r: 12, t: 14, b: 30 };
  const pw = GW - M.l - M.r, ph = GH - M.t - M.b;
  const xMax = Math.max(...points.map((p) => p.extension * 100), 1) * 1.15 || 1;
  const yMax = Math.max(...points.map((p) => p.load), 1) * 1.15 || 1;
  const gx = (eCm) => M.l + (eCm / xMax) * pw;
  const gy = (fN) => M.t + ph - (fN / yMax) * ph;
  const lopExtCm = analysis.limitLoad != null ? (analysis.limitLoad / k) * 100 : null;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />
      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: ACCENT, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>
          {experiment.title || "Hooke's Law"}
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
      <View
        onLayout={(e) => setStageH(e.nativeEvent.layout.height)}
        style={{ flex: 1, flexDirection: "row", backgroundColor: theme.colors.surfaceMuted }}
      >
        {/* ----- apparatus (left) ----- */}
        <View style={{ flex: 1, position: "relative" }}>
          <View style={{ position: "absolute", left: 24, top: 0 }}>
            <RetortStand h={Math.max(stageH || 300, 240)} withClamp />
          </View>

          {/* natural-length reference line (static) */}
          <View style={{ position: "absolute", left: 78, top: 42 + NATURAL, width: 70, height: 1, backgroundColor: "#94a3b8" }} />

          {/* spring (scales vertically from the clamp) */}
          <Animated.View
            style={{
              position: "absolute",
              left: 92,
              top: 42,
              width: 40,
              height: NATURAL,
              transformOrigin: "top center",
              transform: [{ scaleY: springScaleY }],
            }}
          >
            <Svg width={40} height={NATURAL} viewBox={`0 0 40 ${NATURAL}`}>
              <Path d={springPath(40, NATURAL, 9)} stroke={ACCENT} strokeWidth={3} fill="none" strokeLinecap="round" />
            </Svg>
          </Animated.View>

          {/* load (translates down with the spring) */}
          <Animated.View
            style={{
              position: "absolute",
              left: 80,
              top: 42 + NATURAL,
              width: 64,
              height: 44,
              transform: [{ translateY: extAnim }],
            }}
          >
            {/* moving pointer tick at the top of the load */}
            <View style={{ position: "absolute", left: -2, top: 0, width: 64, height: 1, backgroundColor: "#ef4444" }} />
            <Svg width={64} height={44} viewBox="0 0 64 44">
              <Path d="M32 0 L32 8" stroke="#64748b" strokeWidth={2} />
              <Rect x={12} y={8} width={40} height={32} rx={5} fill="#94a3b8" stroke="#475569" strokeWidth={1.5} />
              <SvgText x={32} y={28} fontSize={11} fill="#fff" textAnchor="middle" fontWeight="700">
                {load.toFixed(1)}N
              </SvgText>
            </Svg>
          </Animated.View>
        </View>

        {/* ----- graph (right) ----- */}
        <View style={{ width: GW + 8, justifyContent: "center", alignItems: "center", paddingRight: 8 }}>
          <Svg width={GW} height={GH} viewBox={`0 0 ${GW} ${GH}`}>
            {/* axes */}
            <Line x1={M.l} y1={M.t} x2={M.l} y2={M.t + ph} stroke={theme.colors.text} strokeWidth={1.5} />
            <Line x1={M.l} y1={M.t + ph} x2={M.l + pw} y2={M.t + ph} stroke={theme.colors.text} strokeWidth={1.5} />
            {/* axis labels */}
            <SvgText x={M.l + pw / 2} y={GH - 6} fontSize={9} fill={theme.colors.textMuted} textAnchor="middle">extension (cm)</SvgText>
            <SvgText x={10} y={M.t + ph / 2} fontSize={9} fill={theme.colors.textMuted} textAnchor="middle" transform={`rotate(-90 10 ${M.t + ph / 2})`}>load (N)</SvgText>
            {/* limit-of-proportionality marker */}
            {lopExtCm != null && lopExtCm <= xMax ? (
              <Line x1={gx(lopExtCm)} y1={M.t} x2={gx(lopExtCm)} y2={M.t + ph} stroke="#ef4444" strokeWidth={1.5} strokeDasharray="4 3" />
            ) : null}
            {/* data polyline (load vs extension) */}
            {points.length >= 2 ? (
              <Polyline
                points={points.map((p) => `${gx(p.extension * 100)},${gy(p.load)}`).join(" ")}
                fill="none"
                stroke={ACCENT}
                strokeWidth={2.5}
                strokeLinejoin="round"
              />
            ) : null}
            {/* data points */}
            {points.map((p, i) => (
              <Circle key={i} cx={gx(p.extension * 100)} cy={gy(p.load)} r={3} fill={i === points.length - 1 ? ACCENT : theme.colors.surface} stroke={ACCENT} strokeWidth={1.5} />
            ))}
          </Svg>
        </View>
      </View>

      {/* ===== CONTROL PANEL ===== */}
      <View style={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 16, paddingTop: 14, paddingBottom: 18, shadowColor: "#000", shadowOffset: { width: 0, height: -3 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 10 }}>
        <View style={{ backgroundColor: status === "failed" ? "#fef2f2" : status === "yielding" ? "#fff7ed" : status === "success" ? "#f0fdf4" : "#ecfeff", borderRadius: 12, padding: 12, borderWidth: 1, borderColor: status === "failed" ? "#fecaca" : status === "yielding" ? "#fed7aa" : status === "success" ? "#bbf7d0" : "#bae6fd", marginBottom: 12, minHeight: 58, justifyContent: "center" }}>
          <Text style={{ fontSize: 13, lineHeight: 19, color: theme.colors.text }}>{message}</Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
          <Text style={{ fontSize: 12, fontWeight: "700", color: theme.colors.textMuted }}>Load: {load.toFixed(1)} N</Text>
          <Text style={{ fontSize: 12, fontWeight: "700", color: theme.colors.textMuted }}>Ext: {(extension * 100).toFixed(1)} cm</Text>
          <Text style={{ fontSize: 12, fontWeight: "800", color: ACCENT }}>k = {k} N/m</Text>
        </View>

        {status === "success" ? (
          <>
            <Btn label="📝 View Report" onPress={() => setReportOpen(true)} accent={ACCENT} full />
            <Btn label="↺ Reset Experiment" onPress={reset} accent="#64748b" full />
          </>
        ) : (
          <>
            <View style={{ flexDirection: "row", marginBottom: 8 }}>
              <Btn label="＋ Add Load (0.5 N)" onPress={addLoad} accent={ACCENT} disabled={loadCount >= MAX_LOADS} />
              <View style={{ width: 8 }} />
              <Btn label="－ Remove" onPress={removeLoad} accent="#64748b" disabled={loadCount === 0} />
            </View>
            <View style={{ flexDirection: "row" }}>
              <Btn label="↺ Reset" onPress={reset} accent="#64748b" />
              <View style={{ width: 8 }} />
              <Btn label="✓ Finish" onPress={finish} accent="#16a34a" disabled={loadCount < 4} />
            </View>
            <Text style={{ fontSize: 11, color: theme.colors.textMuted, textAlign: "center", marginTop: 8 }}>
              {loadCount}/{MAX_LOADS} loads · {lopExtCm != null ? `LOP ≈ ${analysis.limitLoad?.toFixed?.(2)} N` : "add more to find the limit"}
            </Text>
          </>
        )}
      </View>

      <Modal visible={reportOpen} transparent animationType="slide" onRequestClose={() => setReportOpen(false)}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
          <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.45)", justifyContent: "flex-end" }}>
            <ScrollView style={{ maxHeight: "88%" }} contentContainerStyle={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 24, paddingBottom: 32 }} keyboardShouldPersistTaps="handled">
              <View style={{ width: 40, height: 4, backgroundColor: theme.colors.border, borderRadius: 2, alignSelf: "center", marginBottom: 18 }} />
              <Text style={{ fontSize: 26, textAlign: "center" }}>🎉</Text>
              <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>Hooke's Law Report</Text>
              <View style={{ backgroundColor: theme.colors.surfaceMuted, borderRadius: 12, padding: 14, marginVertical: 14 }}>
                <Text style={{ fontSize: 13, color: theme.colors.text }}>• Chosen spring constant: <Text style={{ fontWeight: "800" }}>{k} N/m</Text></Text>
                <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 4 }}>• Measured k (slope): <Text style={{ fontWeight: "800" }}>{analysis.k} N/m</Text></Text>
                <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 4 }}>• Limit of proportionality: <Text style={{ fontWeight: "800" }}>{analysis.limitLoad != null ? analysis.limitLoad.toFixed(2) + " N" : "not reached"}</Text></Text>
                <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 4 }}>• Loads tested: {loadCount} (max {load.toFixed(1)} N)</Text>
                <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 4 }}>• Max extension: {(extension * 100).toFixed(1)} cm</Text>
              </View>
              <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.text, marginBottom: 6 }}>Your report / observations</Text>
              <TextInput
                style={{ borderWidth: 1, borderColor: theme.colors.border, borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }}
                placeholder="e.g. The load–extension graph was a straight line until ~2.5 N, then bent — that is the limit of proportionality."
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

function Btn({ label, onPress, disabled, accent = ACCENT, full }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.85}
      style={{ flex: full ? 0 : 1, backgroundColor: disabled ? "#e5e7eb" : accent, borderRadius: 11, paddingVertical: 12, alignItems: "center", justifyContent: "center", opacity: disabled ? 0.6 : 1, marginTop: full ? 8 : 0 }}
    >
      <Text style={{ color: disabled ? "#94a3b8" : "#fff", fontWeight: "800", fontSize: 14 }} numberOfLines={1}>{label}</Text>
    </TouchableOpacity>
  );
}
