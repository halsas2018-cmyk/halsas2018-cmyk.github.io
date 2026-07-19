import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, StatusBar, Modal, ScrollView, TextInput, Animated, Easing, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import { useNavigation, useRoute } from "@react-navigation/native";
import { labStorage } from "../../../storage/labStorage";
import { getLightLevel, relationshipNote, LIGHT_LEVELS } from "./plant-nutrition-data";
import Svg, { Rect, Circle, Line, Ellipse, Polygon } from "react-native-svg";

const GREEN = "#16a34a";
const WINDOW_MS = 7000; // measurement window

export default function BioPhotosynthesisLab() {
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const theme = useTheme();
  const topicId = route.params?.topicId || "secA-plant-nutrition";
  const cfg = route.params?.config;
  const [light, setLight] = useState(cfg?.light || getLightLevel("medium"));

  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState(
    `Set-up ready: pondweed under an inverted tube, lit by a lamp at "${light.label}". Press Start to count O₂ bubbles.`
  );
  const [bubbles, setBubbles] = useState([]);
  const [count, setCount] = useState(0);
  const [measuredRate, setMeasuredRate] = useState(null);
  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const idRef = useRef(0);
  const countRef = useRef(0);
  const timerRef = useRef(null);
  const stopRef = useRef(null);

  const say = (m) => setMessage(m);

  function spawnBubble() {
    const id = idRef.current++;
    const av = new Animated.Value(0);
    const x = ((id * 19) % 60) - 30;
    setBubbles((prev) => [...prev, { id, av, x }]);
    countRef.current += 1;
    setCount(countRef.current);
    Animated.timing(av, { toValue: 1, duration: 1600, easing: Easing.linear, useNativeDriver: false }).start(() => {
      setBubbles((prev) => prev.filter((b) => b.id !== id));
    });
  }

  function start() {
    if (status === "running" || status === "measured" || status === "success") return;
    // clear any leftovers
    setBubbles([]);
    countRef.current = 0;
    setCount(0);
    setMeasuredRate(null);
    setStatus("running");
    say(`💡 Lamp on (${light.label}). Counting O₂ bubbles…`);
    const intervalMs = Math.max(220, 60000 / light.bubblesPerMin);
    timerRef.current = setInterval(spawnBubble, intervalMs);
    stopRef.current = setTimeout(() => {
      clearInterval(timerRef.current);
      const rate = Math.round((countRef.current * 60000) / WINDOW_MS);
      setMeasuredRate(rate);
      setStatus("measured");
      say(`✅ Measured rate: ${rate} bubbles/min. Now decide how rate changes with light.`);
    }, WINDOW_MS);
  }

  function choose(id) {
    if (status !== "measured") return;
    if (id === "plateau") {
      setStatus("success");
      setSaved(false);
      setNotes("");
      say(`✅ Correct! Rate rises with light, then plateaus.`);
    } else {
      setStatus("failed");
      say(
        id === "forever"
          ? `💡 Wrong. Light is not the only factor — once CO₂ or temperature limits the reaction, the rate PLATEAUS. Reset and try again.`
          : `💡 Wrong. Less light means less energy, so the rate is LOWER, not higher. Reset and try again.`
      );
    }
  }

  function reset() {
    if (timerRef.current) clearInterval(timerRef.current);
    if (stopRef.current) clearTimeout(stopRef.current);
    timerRef.current = null;
    stopRef.current = null;
    setBubbles([]);
    countRef.current = 0;
    setCount(0);
    setMeasuredRate(null);
    setStatus("idle");
    say(`Bench reset. Lamp at "${light.label}". Press Run to count bubbles.`);
  }

  // Student-controlled variable: change the light intensity (stops any run).
  function pickLight(l) {
    if (timerRef.current) clearInterval(timerRef.current);
    if (stopRef.current) clearTimeout(stopRef.current);
    timerRef.current = null;
    stopRef.current = null;
    setBubbles([]);
    countRef.current = 0;
    setCount(0);
    setMeasuredRate(null);
    setStatus("idle");
    setLight(l);
    say(`Condition set: ${l.label}. Press Run to count O₂ bubbles.`);
  }

  async function saveReport() {
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "photosynthesis",
      experimentTitle: experiment.title || "Rate of Photosynthesis vs Light Intensity",
      topicId,
      date: new Date().toLocaleDateString(),
      light: light.label,
      expectedRate: light.bubblesPerMin,
      measuredRate,
      summary: `At ${light.label}, the relative rate was ${measuredRate} bubbles/min.`,
      explanation: relationshipNote(),
      status: "success",
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); say("📝 Report saved to your phone. Review it any time from the Lab hub."); }
    else say("Could not save the report. Please try again.");
  }

  const OPTIONS = [
    { id: "forever", label: "Keeps rising forever", correct: false },
    { id: "plateau", label: "Rises, then plateaus", correct: true },
    { id: "falls", label: "Falls as light increases", correct: false },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />
      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: GREEN, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>
          {experiment.title || "Photosynthesis Rate"}
        </Text>
      </View>

      {/* ===== BENCH: fixed stage (top) + caption panel (below), never overlapping ===== */}
      <View style={{ flex: 1 }}>
        {/* ---- STAGE: centered scene, always visible, drawn with inline SVG ---- */}
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", paddingVertical: 8 }}>
          <View style={{ width: 340, height: 220, position: "relative" }}>
            {/* whole scene in one Svg — no text labels sit on the drawing */}
            <Svg width={340} height={220} viewBox="0 0 340 220">
              {/* bench / table */}
              <Rect x={0} y={196} width={340} height={24} fill="#e2e8f0" />
              <Line x1={0} y1={196} x2={340} y2={196} stroke="#cbd5e1" strokeWidth={2} />

              {/* lamp (light source) on the left — glow scales with intensity */}
              <Rect x={14} y={26} width={46} height={26} rx={5} fill="#475569" />
              <Rect x={22} y={52} width={30} height={14} rx={3} fill="#334155" />
              <Circle cx={37} cy={39} r={14} fill={light.color} opacity={0.35 + 0.65 * lightGlow(light)} />
              <Circle cx={37} cy={39} r={7} fill="#fffbeb" />

              {/* light rays from the lamp to the leaf (brighter at higher intensity) */}
              <Line x1={52} y1={35} x2={200} y2={84} stroke={light.color} strokeWidth={3} strokeOpacity={0.35 + 0.65 * lightGlow(light)} strokeLinecap="round" />
              <Line x1={52} y1={42} x2={200} y2={106} stroke={light.color} strokeWidth={3} strokeOpacity={0.35 + 0.65 * lightGlow(light)} strokeLinecap="round" />
              <Line x1={52} y1={49} x2={200} y2={128} stroke={light.color} strokeWidth={3} strokeOpacity={0.35 + 0.65 * lightGlow(light)} strokeLinecap="round" />

              {/* beaker of water holding the pondweed */}
              <Rect x={150} y={120} width={120} height={84} rx={6} fill="rgba(224,242,254,0.55)" stroke="#475569" strokeWidth={2.5} />
              <Rect x={154} y={150} width={112} height={50} fill="rgba(186,230,253,0.6)" />
              <Line x1={150} y1={150} x2={270} y2={150} stroke="#7dd3fc" strokeWidth={1.5} />

              {/* pondweed stem + leaf (the plant) */}
              <Line x1={210} y1={150} x2={210} y2={96} stroke="#15803d" strokeWidth={4} />
              <Ellipse cx={210} cy={92} rx={52} ry={30} fill="#16a34a" stroke="#14532d" strokeWidth={2.5} />
              <Line x1={162} y1={92} x2={258} y2={92} stroke="#14532d" strokeWidth={1.5} opacity={0.6} />

              {/* CO2 IN (green) — enters the leaf from the lower left */}
              <Line x1={70} y1={170} x2={132} y2={170} stroke="#16a34a" strokeWidth={3} />
              <Polygon points="122,162 140,170 122,178" fill="#16a34a" />
              {/* O2 OUT (blue) — leaves the leaf upward to the right (where bubbles rise) */}
              <Line x1={262} y1={72} x2={282} y2={82} stroke="#0ea5e9" strokeWidth={3} />
              <Polygon points="288,68 270,80 288,92" fill="#0ea5e9" />
            </Svg>

            {/* O2 bubbles rising from the leaf (animated, on top of the scene) */}
            {bubbles.map((b) => {
              const ty = b.av.interpolate({ inputRange: [0, 1], outputRange: [0, -120] });
              return (
                <Animated.View
                  key={b.id}
                  style={{
                    position: "absolute",
                    bottom: 132,
                    left: 205 + b.x,
                    width: 10,
                    height: 10,
                    transform: [{ translateY: ty }],
                  }}
                >
                  <Bubble size={10} />
                </Animated.View>
              );
            })}
          </View>

          {/* live counter under the stage, not on the drawing */}
          <View style={{ marginTop: 12, backgroundColor: theme.colors.surface, borderRadius: 10, paddingHorizontal: 14, paddingVertical: 6, borderWidth: 1, borderColor: "#e2e8f0" }}>
            <Text style={{ fontSize: 13, fontWeight: "800", color: theme.colors.text }}>
              {status === "running" ? `Bubbles counted: ${count}` : measuredRate != null ? `Relative rate: ${measuredRate} bubbles/min` : "Rate: —"}
            </Text>
          </View>
        </View>

        {/* ---- CAPTION PANEL: diagram key + instructions, in their own block ---- */}
        <View style={{ paddingHorizontal: 14, paddingBottom: 4 }}>
          <View style={{ backgroundColor: theme.colors.surface, borderRadius: 12, padding: 12, borderWidth: 1, borderColor: "#e2e8f0" }}>
            <Text style={{ fontSize: 12, fontWeight: "800", color: theme.colors.text, marginBottom: 6 }}>How to read the diagram</Text>
            <Text style={{ fontSize: 11.5, lineHeight: 17, color: theme.colors.text }}>
              {"💡 Lamp = light source (your variable — set it below)\n🟠 Rays = light reaching the leaf\n🟢 Green arrow = CO₂ entering the leaf\n🔵 Blue arrow = O₂ leaving the leaf (the bubbles)\n🌿 Leaf in water = pondweed (Elodea)\nThe brighter the lamp, the FASTER the bubbles rise."}
            </Text>
          </View>
        </View>
      </View>

      {/* ===== CONTROL PANEL ===== */}
      <View style={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 16, paddingTop: 14, paddingBottom: 18, shadowColor: "#000", shadowOffset: { width: 0, height: -3 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 10 }}>
        <View style={{ backgroundColor: status === "failed" ? "#fef2f2" : status === "success" ? "#f0fdf4" : "#eff6ff", borderRadius: 12, padding: 12, borderWidth: 1, borderColor: status === "failed" ? "#fecaca" : status === "success" ? "#bbf7d0" : "#bfdbfe", marginBottom: 12, minHeight: 58, justifyContent: "center" }}>
          <Text style={{ fontSize: 13, lineHeight: 19, color: "#1f2937" }}>{message}</Text>
        </View>

        {status === "failed" ? (
          <TouchableOpacity onPress={reset} style={{ alignItems: "center", paddingVertical: 12 }}>
            <Text style={{ color: theme.colors.textMuted, fontWeight: "700", fontSize: 14 }}>↺ Reset Experiment</Text>
          </TouchableOpacity>
        ) : status === "success" ? (
          <>
            <Btn label="📝 View Report" onPress={() => setReportOpen(true)} accent={GREEN} full />
            <TouchableOpacity onPress={reset} style={{ marginTop: 10, alignItems: "center", paddingVertical: 8 }}>
              <Text style={{ color: theme.colors.textMuted, fontWeight: "700", fontSize: 13 }}>↺ Reset Experiment</Text>
            </TouchableOpacity>
          </>
        ) : status === "measured" ? (
          <>
            <Text style={{ fontSize: 12, fontWeight: "800", color: theme.colors.text, marginBottom: 8 }}>As light intensity increases, the rate of photosynthesis:</Text>
            {OPTIONS.map((o) => (
              <TouchableOpacity key={o.id} onPress={() => choose(o.id)} style={{ backgroundColor: theme.colors.surfaceAlt, borderWidth: 1, borderColor: "#e2e8f0", borderRadius: 11, paddingVertical: 12, paddingHorizontal: 14, marginBottom: 8 }}>
                <Text style={{ fontSize: 13.5, fontWeight: "700", color: theme.colors.text }}>{o.label}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity onPress={reset} style={{ marginTop: 4, alignItems: "center", paddingVertical: 8 }}>
              <Text style={{ color: theme.colors.textMuted, fontWeight: "700", fontSize: 13 }}>↺ Reset Experiment</Text>
            </TouchableOpacity>
          </>
        ) : (
          <View>
            <Text style={{ fontSize: 12, fontWeight: "800", color: theme.colors.text, marginBottom: 8 }}>Light intensity (your variable — tap to change):</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 12 }}>
              {LIGHT_LEVELS.map((l) => (
                <TouchableOpacity
                  key={l.id}
                  onPress={() => pickLight(l)}
                  style={{
                    paddingHorizontal: 13,
                    paddingVertical: 7,
                    borderRadius: 18,
                    marginRight: 6,
                    marginBottom: 6,
                    borderWidth: 1.5,
                    borderColor: light.id === l.id ? GREEN : "#e2e8f0",
                    backgroundColor: light.id === l.id ? "#dcfce7" : theme.colors.bg,
                  }}
                >
                  <Text style={{ fontSize: 11.5, fontWeight: "800", color: light.id === l.id ? "#166534" : theme.colors.textMuted }}>
                    {l.id === "veryhigh" ? "Very high" : l.id === "low" ? "Low" : l.id === "medium" ? "Medium" : "High"}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <Btn label={status === "running" ? "💡 Counting O₂ bubbles…" : "▶ Run experiment"} onPress={() => { haptic.light(); start(); }} disabled={status === "running"} accent={GREEN} full />
            <TouchableOpacity onPress={reset} style={{ marginTop: 8, alignItems: "center", paddingVertical: 6 }}>
              <Text style={{ color: theme.colors.textMuted, fontWeight: "700", fontSize: 12 }}>↺ Reset</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <Modal visible={reportOpen} transparent animationType="slide" onRequestClose={() => setReportOpen(false)}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.45)", justifyContent: "flex-end" }}>
          <ScrollView style={{ maxHeight: "88%" }} contentContainerStyle={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 24, paddingBottom: 32 }} keyboardShouldPersistTaps="handled">
            <View style={{ width: 40, height: 4, backgroundColor: "#d1d5db", borderRadius: 2, alignSelf: "center", marginBottom: 18 }} />
            <Text style={{ fontSize: 26, textAlign: "center" }}>🎉</Text>
            <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>Practical Complete!</Text>
            <View style={{ backgroundColor: theme.colors.bg, borderRadius: 12, padding: 14, marginVertical: 14 }}>
              <Text style={{ fontSize: 13, color: theme.colors.text }}>• Light level: {light.label}</Text>
              <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 4 }}>• Measured relative rate: <Text style={{ fontWeight: "800" }}>{measuredRate} bubbles/min</Text></Text>
              <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 4 }}>• Expected: ~{light.bubblesPerMin} bubbles/min</Text>
              <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 6, lineHeight: 19 }}>{relationshipNote()}</Text>
            </View>
            <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.text, marginBottom: 6 }}>Your report / observations</Text>
            <TextInput
              style={{ borderWidth: 1, borderColor: theme.colors.border, borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }}
              placeholder="e.g. Rate rose with light but plateaued at high intensity — light was no longer limiting."
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
            <TouchableOpacity onPress={() => { setReportOpen(false); navigation.goBack(); }} style={{ marginTop: 10, backgroundColor: theme.colors.surfaceAlt, borderRadius: 12, paddingVertical: 13 }}>
              <Text style={{ color: theme.colors.text, textAlign: "center", fontWeight: "700", fontSize: 14 }}>Done</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        </KeyboardAvoidingView>
      </Modal>
    </SafeAreaView>
  );
}

function Bubble({ size = 10 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 10 10">
      <Circle cx={5} cy={5} r={4} fill="#ffffff" stroke="#7dd3fc" strokeWidth={1} />
    </Svg>
  );
}

// Maps a light level id to a 0..1 intensity used for the lamp glow / ray brightness.
function lightGlow(l) {
  const map = { low: 0.15, medium: 0.5, high: 0.8, veryhigh: 1 };
  return map[l.id] != null ? map[l.id] : 0.5;
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
        backgroundColor: disabled ? theme.colors.border : accent,
        borderRadius: 11,
        paddingVertical: 12,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: full ? 0 : 3,
        opacity: disabled ? 0.55 : 1,
      }}
    >
      <Text style={{ color: disabled ? theme.colors.textMuted : "#fff", fontWeight: "800", fontSize: full ? 14 : 11.5 }} numberOfLines={1}>{label}</Text>
    </TouchableOpacity>
  );
}
