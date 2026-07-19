import React, { useState, useRef, useEffect } from "react";
import { View, Text, TouchableOpacity, StatusBar, Modal, ScrollView, Animated, Easing, KeyboardAvoidingView, Platform, TextInput } from "react-native";
import { Svg, Path, Circle, Line, Rect } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { labStorage } from "../../../storage/labStorage";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import { K, MASSES, extension, period } from "./loaded-spring-data";

const ACCENT = "#f59e0b";
const STEP_LABELS = ["Choose mass", "Watch", "Result"];
const CX = 165, TOPY = 30, REST = 120, AMP = 16;

function coilPath(ext) {
  const botY = REST + ext;
  const n = 8, span = botY - TOPY - 14;
  let d = `M${CX} ${TOPY}`;
  for (let i = 1; i <= n; i++) {
    const y = TOPY + (span * i) / n + 7;
    const x = CX + (i % 2 === 0 ? 9 : -9);
    d += ` L${x} ${y}`;
  }
  d += ` L${CX} ${botY}`;
  return d;
}

export default function PhysLoadedSpringLab() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "p1-shm";
  const cfg = route.params?.config;

  const [mg, setMg] = useState(MASSES[1]);
  const [running, setRunning] = useState(false);
  const [picked, setPicked] = useState(null);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("Choose a mass to load onto the spring.");
  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const extPx = extension(mg) * 1500;
  const T = period(mg);
  const vis = T * 1400; // slowed for visibility (ms)
  const y = useRef(new Animated.Value(0)).current;
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) ref.current.stop();
    y.setValue(0);
    if (!running) return;
    ref.current = Animated.loop(
      Animated.timing(y, { toValue: 1, duration: vis, easing: Easing.linear, useNativeDriver: true })
    );
    ref.current.start();
    return () => ref.current && ref.current.stop();
  }, [running, mg, vis]);

  const ty = y.interpolate({ inputRange: [0, 0.25, 0.5, 0.75, 1], outputRange: [0, AMP, 0, -AMP, 0] });
  const dy = Animated.add(extPx, ty);

  function choose(m) {
    haptic.light();
    setMg(m); setRunning(true); setPicked(null); setStatus("idle");
    setMessage(`Loaded ${m} g — the spring stretches and oscillates. Period T ≈ ${period(m).toFixed(3)} s.`);
  }

  function pick(a) {
    haptic.light();
    setPicked(a);
    if (a === "inc") {
      setStatus("success");
      setMessage("✅ Correct! T = 2π√(m/k), so a larger mass gives a longer period (and more stretch).");
    } else {
      setStatus("wrong");
      setMessage("❌ Not quite — re-read T = 2π√(m/k). Heavier mass ⇒ longer period.");
    }
  }

  function reset() {
    setRunning(false); setPicked(null); setStatus("idle"); setSaved(false); setNotes("");
    setMessage("Choose a mass to load onto the spring.");
  }

  async function saveReport() {
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "loaded-spring",
      experimentTitle: experiment.title || "Period of a Loaded Spring",
      topicId,
      date: new Date().toLocaleDateString(),
      mass: `${mg} g`,
      extension: `${(extension(mg) * 100).toFixed(2)} cm`,
      period: `${T.toFixed(3)} s`,
      result: `T = 2π√(m/k) ≈ ${T.toFixed(3)} s`,
      status: "success",
      summary: `Loaded ${mg} g onto the spring; extension x = mg/k = ${(extension(mg) * 100).toFixed(2)} cm and period T = 2π√(m/k) ≈ ${T.toFixed(3)} s.`,
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); setMessage("📝 Report saved."); } else setMessage("Could not save the report.");
  }

  const step = status === "success" ? 3 : running ? 2 : 0;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />
      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: ACCENT, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>{experiment.title || "Loaded Spring"}</Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center", paddingVertical: 10, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border, gap: 6 }}>
        {STEP_LABELS.map((l, i) => (
          <View key={l} style={{ alignItems: "center", marginHorizontal: 4 }}>
            <View style={{ width: 22, height: 22, borderRadius: 11, alignItems: "center", justifyContent: "center", backgroundColor: i < step ? ACCENT : i === step ? "#fde68a" : "#e5e7eb" }}>
              <Text style={{ fontSize: 11, fontWeight: "800", color: i < step ? "#fff" : "#475569" }}>{i < step ? "✓" : i + 1}</Text>
            </View>
            <Text style={{ fontSize: 9, color: "#94a3b8", marginTop: 3, fontWeight: "600" }}>{l}</Text>
          </View>
        ))}
      </View>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Svg width={330} height={230} viewBox="0 0 330 230">
          <Line x1={CX - 40} y1={TOPY} x2={CX + 40} y2={TOPY} stroke="#475569" strokeWidth={4} />
          <Animated.View style={{ transform: [{ translateY: dy }] }}>
            <Svg width={330} height={230} viewBox="0 0 330 230" y={-0}>
              <Path d={coilPath(extPx)} stroke="#94a3b8" strokeWidth={3} fill="none" />
              <Rect x={CX - 22} y={REST + extPx} width={44} height={26} rx={4} fill={status === "success" ? "#16a34a" : "#f59e0b"} />
            </Svg>
          </Animated.View>
        </Svg>
        <Text style={{ fontSize: 11, color: "#64748b", fontWeight: "700", marginTop: 6 }}>
          {running ? `m = ${mg} g  ·  x ≈ ${(extension(mg) * 100).toFixed(2)} cm  ·  T ≈ ${T.toFixed(3)} s` : "Spring at rest"}
        </Text>
      </View>

      <View style={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 16, paddingTop: 14, paddingBottom: 18, shadowColor: "#000", shadowOffset: { width: 0, height: -3 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 10 }}>
        <View style={{ backgroundColor: status === "success" ? "#f0fdf4" : "#eff6ff", borderRadius: 12, padding: 12, borderWidth: 1, borderColor: status === "success" ? "#bbf7d0" : "#fde68a", marginBottom: 12, minHeight: 58, justifyContent: "center" }}>
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
            <Text style={{ fontSize: 11, fontWeight: "800", color: "#6b7280", marginBottom: 6, letterSpacing: 0.4 }}>CHOOSE MASS (g)</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center", marginBottom: 8 }}>
              {MASSES.map((m) => (
                <TouchableOpacity key={m} onPress={() => choose(m)} style={{ backgroundColor: mg === m ? "#fef3c7" : theme.colors.surface, borderWidth: 1.5, borderColor: mg === m ? ACCENT : theme.colors.border, borderRadius: 10, paddingVertical: 8, paddingHorizontal: 13, margin: 3 }}>
                  <Text style={{ fontWeight: "800", fontSize: 13, color: mg === m ? "#92400e" : theme.colors.textMuted }}>{m}</Text>
                </TouchableOpacity>
              ))}
            </View>
            {running && (
              <>
                <Text style={{ fontSize: 11, fontWeight: "800", color: "#6b7280", marginBottom: 6, letterSpacing: 0.4 }}>HOW DOES T DEPEND ON m?</Text>
                {[
                  ["inc", "T increases as the mass increases"],
                  ["dec", "T decreases as the mass increases"],
                  ["ind", "T does not depend on the mass"],
                ].map(([k, l]) => (
                  <TouchableOpacity key={k} onPress={() => pick(k)} style={{ backgroundColor: picked === k ? (status === "success" ? "#bbf7d0" : "#fee2e2") : theme.colors.bg, borderWidth: 1.5, borderColor: picked === k ? (status === "success" ? ACCENT : "#ef4444") : theme.colors.border, borderRadius: 10, paddingVertical: 9, paddingHorizontal: 12, marginBottom: 6 }}>
                    <Text style={{ fontWeight: "700", fontSize: 12.5, color: picked === k ? (status === "success" ? "#14532d" : "#b91c1c") : theme.colors.textMuted }}>{l}</Text>
                  </TouchableOpacity>
                ))}
              </>
            )}
            <Btn label="↺ Reset" onPress={reset} accent="#94a3b8" full />
          </>
        )}
      </View>

      <Modal visible={reportOpen} transparent animationType="slide" onRequestClose={() => setReportOpen(false)}>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.45)", justifyContent: "flex-end" }}>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ maxHeight: "88%" }}>
            <ScrollView style={{ maxHeight: "100%" }} contentContainerStyle={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 24, paddingBottom: 32 }} keyboardShouldPersistTaps="handled">
              <View style={{ width: 40, height: 4, backgroundColor: "#d1d5db", borderRadius: 2, alignSelf: "center", marginBottom: 18 }} />
              <Text style={{ fontSize: 26, textAlign: "center" }}>🎉</Text>
              <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>Oscillation Logged!</Text>
              <View style={{ backgroundColor: theme.colors.surfaceMuted, borderRadius: 12, padding: 14, marginVertical: 14 }}>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>• Mass: <Text style={{ fontWeight: "800" }}>{mg} g</Text></Text>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Extension: {(extension(mg) * 100).toFixed(2)} cm</Text>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Period T ≈ {T.toFixed(3)} s</Text>
              </View>
              <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.textMuted, marginBottom: 6 }}>Your report / observations</Text>
              <TextInput style={{ borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }} placeholder="e.g. Heavier mass stretched the spring more and oscillated more slowly." value={notes} onChangeText={setNotes} multiline />
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
