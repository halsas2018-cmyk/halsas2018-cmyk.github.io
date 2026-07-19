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
import { useNavigation, useRoute } from "@react-navigation/native";
import { labStorage } from "../../../storage/labStorage";
import { circuitCurrent, circuitPower, SAFE_MAX_CURRENT } from "./circuit-data";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import Svg from "react-native-svg";
import { Battery, Bulb, Resistor, Switch, Ammeter, Wire, Ground } from "../../components/svgKit";

const ACCENT = "#7c3aed";
const STEP_LABELS = ["Wire up", "Power", "Measure"];
const TARGETS = [0.15, 0.3, 0.6, 0.9, 1.2]; // A — student picks a target current
const TOL_I = 0.08;

export default function PhysicsCircuitLab() {
  const navigation = useNavigation();
  const route = useRoute();
  const theme = useTheme();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "p5-ac-circuits";
  const cfg = route.params?.config;

  const [V, setV] = useState(cfg?.V || 6);
  const [R, setR] = useState(cfg?.R || 10);
  const [target, setTarget] = useState(cfg?.target || 0.6);

  const [stageW, setStageW] = useState(0);
  const [stageH, setStageH] = useState(0);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState(
    "Pick a target current, set the voltage & resistance, then Power the circuit so the ammeter matches the chosen band."
  );
  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const flowTop = useRef(new Animated.Value(0)).current;
  const flowBot = useRef(new Animated.Value(0)).current;
  const loopRef = useRef(null);

  const I = circuitCurrent(V, R);
  const P = circuitPower(V, R);
  const overload = isFinite(I) && I > SAFE_MAX_CURRENT;
  const lit = isFinite(I) && I > 0.001 && !overload;

  // brightness 0..1
  const brightness = isFinite(I) ? Math.min(I / 2.5, 1) : 0;

  const wireLen = stageW > 0 ? stageW - 124 : 0;
  const spacing = 28;
  const nDots = wireLen > 0 ? Math.ceil(wireLen / spacing) + 1 : 0;

  useEffect(() => {
    if (loopRef.current) loopRef.current.stop();
    if (!lit || wireLen <= 0) {
      flowTop.setValue(0);
      flowBot.setValue(0);
      return;
    }
    // faster current → shorter loop duration
    const dur = Math.max(280, 1400 / Math.max(I, 0.05));
    loopRef.current = Animated.loop(
      Animated.timing(flowTop, { toValue: 1, duration: dur, easing: Easing.linear, useNativeDriver: true })
    );
    const loop2 = Animated.loop(
      Animated.timing(flowBot, { toValue: 1, duration: dur, easing: Easing.linear, useNativeDriver: true })
    );
    flowTop.setValue(0);
    loopRef.current.start();
    loop2.start();
    return () => {
      loopRef.current && loopRef.current.stop();
      loop2.stop();
    };
  }, [V, R, lit, wireLen, I]);

  const topX = flowTop.interpolate({ inputRange: [0, 1], outputRange: [0, -spacing] });
  const botX = flowBot.interpolate({ inputRange: [0, 1], outputRange: [0, spacing] });

  const say = (m) => setMessage(m);

  function power() {
    haptic.light();
    if (overload) {
      setStatus("failed");
      return say(`💥 Fuse blown! Current ${I.toFixed(2)} A exceeds the safe ${SAFE_MAX_CURRENT} A. Increase the resistance or lower the voltage, then Reset.`);
    }
    if (!isFinite(I) || I <= 0.001) {
      return say("🔌 No current yet — raise the voltage above 0 V to power the circuit.");
    }
    setStatus("running");
    const diff = Math.abs(I - target);
    if (diff <= TOL_I) {
      setSaved(false);
      setNotes("");
      setStatus("success");
      say(`💡 Target hit! Current = ${I.toFixed(2)} A, inside the ${target.toFixed(2)} A band. Bulb glowing.`);
    } else {
      say(
        `🔋 Current = ${I.toFixed(2)} A, bulb ${brightness > 0.6 ? "bright" : brightness > 0.25 ? "glowing" : "dim"}. Target is ${target.toFixed(2)} A. ${
          I > target ? "Add resistance or lower voltage." : "Lower resistance or raise voltage."
        }`
      );
    }
  }

  function reset() {
    haptic.light();
    if (loopRef.current) loopRef.current.stop();
    flowTop.setValue(0);
    flowBot.setValue(0);
    setStatus("idle");
    say("Bench reset. Set voltage & resistance, then Power the circuit.");
  }

  async function saveReport() {
    haptic.light();
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "p5-ac-circuits",
      experimentTitle: experiment.title || "Electric Circuits: Ohm's Law",
      topicId,
      date: new Date().toLocaleDateString(),
      V,
      R,
      current: parseFloat(I.toFixed(3)),
      power: parseFloat(P.toFixed(3)),
      target,
      status: "success",
      summary: `I = ${I.toFixed(2)} A at V=${V} V, R=${R} Ω.`,
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); say("📝 Report saved to your phone."); }
    else say("Could not save the report. Please try again.");
  }

  const step = status === "idle" ? 0 : status === "success" || status === "failed" ? 2 : 1;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />
      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: ACCENT, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>
          {experiment.title || "Electric Circuits"}
        </Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center", paddingVertical: 10, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.borderSoft, gap: 6 }}>
        {STEP_LABELS.map((l, i) => (
          <View key={l} style={{ alignItems: "center", marginHorizontal: 4 }}>
            <View style={{ width: 22, height: 22, borderRadius: 11, alignItems: "center", justifyContent: "center", backgroundColor: i < step ? ACCENT : i === step ? "#ddd6fe" : theme.colors.border }}>
              <Text style={{ fontSize: 11, fontWeight: "800", color: i < step ? "#fff" : theme.colors.textMuted }}>{i < step ? "✓" : i + 1}</Text>
            </View>
            <Text style={{ fontSize: 9, color: theme.colors.textFaint, marginTop: 3, fontWeight: "600" }}>{l}</Text>
          </View>
        ))}
      </View>

      {/* ===== BENCH / STAGE ===== */}
      <View
        onLayout={(e) => {
          setStageW(e.nativeEvent.layout.width);
          setStageH(e.nativeEvent.layout.height);
        }}
        style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#0f172a" }}
      >
        {stageW > 0 ? (
          <View style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }}>
            {/* bench ground */}
            <View style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
              <Ground w={stageW} />
            </View>

            {/* wires */}
            <Svg width={stageW} height={stageH} style={{ position: "absolute", left: 0, top: 0 }}>
              <Wire d={`M64 64 L${stageW - 60} 64 L${stageW - 60} ${stageH - 64} L64 ${stageH - 64} Z`} color="#94a3b8" />
            </Svg>

            {/* electrons top */}
            <Animated.View style={{ position: "absolute", left: 64, top: 60, transform: [{ translateX: topX }] }}>
              {Array.from({ length: nDots }).map((_, i) => (
                <View key={i} style={{ position: "absolute", left: i * spacing, width: 8, height: 8, borderRadius: 4, backgroundColor: "#22d3ee", shadowColor: "#22d3ee", shadowOpacity: 0.9, shadowRadius: 6 }} />
              ))}
            </Animated.View>
            {/* electrons bottom */}
            <Animated.View style={{ position: "absolute", left: 64, bottom: 60, transform: [{ translateX: botX }] }}>
              {Array.from({ length: nDots }).map((_, i) => (
                <View key={i} style={{ position: "absolute", left: i * spacing, width: 8, height: 8, borderRadius: 4, backgroundColor: "#22d3ee", shadowColor: "#22d3ee", shadowOpacity: 0.9, shadowRadius: 6 }} />
              ))}
            </Animated.View>

            {/* battery (left) */}
            <View style={{ position: "absolute", left: 42, top: stageH / 2 - 18 }}>
              <Battery />
            </View>
            <Text style={{ position: "absolute", left: 6, top: stageH / 2 - 6, color: "#fbbf24", fontSize: 11, fontWeight: "800" }}>{V}V</Text>

            {/* bulb (right) */}
            <View style={{ position: "absolute", left: stageW - 78, top: stageH / 2 - 30, width: 36, height: 50, alignItems: "center" }}>
              <Bulb lit={lit && !overload} />
              <Text style={{ position: "absolute", bottom: -16, color: "#cbd5e1", fontSize: 10 }}>{R}Ω</Text>
              {overload && <Text style={{ position: "absolute", top: -18, fontSize: 16 }}>💥</Text>}
            </View>

            {/* resistor (top wire) */}
            <View style={{ position: "absolute", left: stageW / 2 - 30, top: 52 }}>
              <Resistor />
            </View>

            {/* ammeter (bottom wire) */}
            <View style={{ position: "absolute", left: stageW / 2 - 80, top: stageH - 64 - 27 }}>
              <Ammeter value={`${isFinite(I) ? I.toFixed(2) : "∞"} A`} />
            </View>

            {/* switch (bottom wire) */}
            <View style={{ position: "absolute", left: stageW / 2 + 24, top: stageH - 64 - 15 }}>
              <Switch closed={lit && !overload} />
            </View>

            {/* readings */}
            <View style={{ position: "absolute", top: 12, left: 12, backgroundColor: "#1e293b", borderRadius: 8, paddingHorizontal: 10, paddingVertical: 6 }}>
              <Text style={{ color: "#22d3ee", fontSize: 12, fontWeight: "800" }}>A: {isFinite(I) ? I.toFixed(2) : "∞"} A</Text>
              <Text style={{ color: "#a5b4fc", fontSize: 11 }}>V: {V} V</Text>
              <Text style={{ color: "#fbbf24", fontSize: 11 }}>P: {isFinite(P) ? P.toFixed(2) : "∞"} W</Text>
              <Text style={{ color: "#fca5a5", fontSize: 11 }}>Target: {target.toFixed(2)} A</Text>
            </View>
          </View>
        ) : (
          <Text style={{ color: "#94a3b8" }}>Loading circuit…</Text>
        )}
      </View>

      {/* ===== CONTROL PANEL ===== */}
      <View style={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 16, paddingTop: 14, paddingBottom: 18, shadowColor: "#000", shadowOffset: { width: 0, height: -3 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 10 }}>
        <View style={{ backgroundColor: status === "failed" ? "#fef2f2" : status === "success" ? "#f0fdf4" : "#f5f3ff", borderRadius: 12, padding: 12, borderWidth: 1, borderColor: status === "failed" ? "#fecaca" : status === "success" ? "#bbf7d0" : "#ddd6fe", marginBottom: 12, minHeight: 58, justifyContent: "center" }}>
          <Text style={{ fontSize: 13, lineHeight: 19, color: "#1f2937" }}>{message}</Text>
        </View>

        {status === "failed" ? (
          <Btn label="↺ Reset Experiment" onPress={reset} accent="#64748b" full />
        ) : status === "success" ? (
          <>
            <Btn label="📝 View Report" onPress={() => { haptic.light(); setReportOpen(true); }} accent={ACCENT} full />
            <TouchableOpacity onPress={reset} style={{ marginTop: 10, alignItems: "center", paddingVertical: 8 }}>
              <Text style={{ color: theme.colors.textMuted, fontWeight: "700", fontSize: 13 }}>↺ Reset Experiment</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={{ fontSize: 12, fontWeight: "800", color: theme.colors.textMuted, marginBottom: 6 }}>① Pick a target current (A)</Text>
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
              {TARGETS.map((t) => (
                <TouchableOpacity
                  key={t}
                  onPress={() => setTarget(t)}
                  disabled={status === "running"}
                  style={{ flex: 1, marginHorizontal: 2, backgroundColor: target === t ? ACCENT : theme.colors.surfaceMuted, borderRadius: 8, paddingVertical: 7 }}
                >
                  <Text style={{ textAlign: "center", fontSize: 11, fontWeight: "800", color: target === t ? "#fff" : theme.colors.textMuted }}>{t.toFixed(2)}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
              <Text style={{ fontSize: 12, fontWeight: "700", color: theme.colors.textMuted }}>V {V} · R {R}Ω</Text>
              <Text style={{ fontSize: 12, fontWeight: "800", color: ACCENT }}>I = {isFinite(I) ? I.toFixed(2) : "∞"} A</Text>
            </View>
            <View style={{ flexDirection: "row", marginBottom: 8 }}>
              {[1.5, 3, 6, 9, 12].map((val) => (
                <TouchableOpacity key={val} onPress={() => setV(val)} disabled={status === "running"} style={{ flex: 1, marginHorizontal: 2, backgroundColor: V === val ? ACCENT : theme.colors.surfaceMuted, borderRadius: 8, paddingVertical: 7 }}>
                  <Text style={{ textAlign: "center", fontSize: 11, fontWeight: "800", color: V === val ? "#fff" : theme.colors.textMuted }}>{val}V</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 10 }}>
              {[2, 5, 10, 22, 47, 100].map((val) => (
                <TouchableOpacity key={val} onPress={() => setR(val)} disabled={status === "running"} style={{ width: "30%", margin: "1.5%", backgroundColor: R === val ? ACCENT : theme.colors.surfaceMuted, borderRadius: 8, paddingVertical: 7 }}>
                  <Text style={{ textAlign: "center", fontSize: 11, fontWeight: "800", color: R === val ? "#fff" : theme.colors.textMuted }}>{val}Ω</Text>
                </TouchableOpacity>
              ))}
            </View>
            <Btn label={status === "running" ? "⚡ Powered" : "⚡ Power Circuit"} onPress={power} accent={ACCENT} full disabled={status === "running"} />
            <TouchableOpacity onPress={reset} style={{ marginTop: 8, alignItems: "center", paddingVertical: 6 }}>
              <Text style={{ color: theme.colors.textFaint, fontWeight: "700", fontSize: 12 }}>↺ Reset</Text>
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
            <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>Circuit Complete!</Text>
            <View style={{ backgroundColor: theme.colors.surfaceMuted, borderRadius: 12, padding: 14, marginVertical: 14 }}>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>• Voltage: {V} V · Resistance: {R} Ω</Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Current I = <Text style={{ fontWeight: "800" }}>{isFinite(I) ? I.toFixed(2) : "∞"} A</Text></Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Power P = {isFinite(P) ? P.toFixed(2) : "∞"} W</Text>
            </View>
            <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.textMuted, marginBottom: 6 }}>Your report / observations</Text>
            <TextInput
              style={{ borderWidth: 1, borderColor: theme.colors.border, borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }}
              placeholder="e.g. I = V/R: halving the resistance doubled the current and the bulb's brightness."
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
      style={{ width: full ? "100%" : undefined, backgroundColor: disabled ? "#e5e7eb" : accent, borderRadius: 11, paddingVertical: 12, alignItems: "center", justifyContent: "center", opacity: disabled ? 0.6 : 1 }}
    >
      <Text style={{ color: disabled ? "#94a3b8" : "#fff", fontWeight: "800", fontSize: 14 }} numberOfLines={1}>{label}</Text>
    </TouchableOpacity>
  );
}
