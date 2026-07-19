import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Modal,
  ScrollView,
  TextInput,
  Animated,
  Easing,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { labStorage } from "../../../storage/labStorage";
import { DISTILLATION_MIXTURES, fractionOrder } from "./separation-data";
import { RoundBottomFlask, Condenser, BunsenBurner, Beaker } from "../../components/svgKit";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";

const GREEN = "#16a34a";
const GLASS = "#94a3b8";

export default function SepDistillationLab() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "separation";
  const cfg = route.params?.config;

  const mixture = cfg?.mixture || DISTILLATION_MIXTURES[1];
  const fractions = fractionOrder(mixture);
  const maxBp = fractions[fractions.length - 1].bp;

  const [setupDone, setSetupDone] = useState(false);
  const [heating, setHeating] = useState(false);
  const [paused, setPaused] = useState(false);
  const [temp, setTemp] = useState(20);
  const [collected, setCollected] = useState([]);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState(
    `Assemble the flask, fractionating column, condenser and receiver for ${mixture.name}.`
  );

  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  // Receiver liquid level — rises as each fraction is collected.
  const recLevel = useRef(new Animated.Value(0)).current;
  const [recLevelState, setRecLevelState] = useState(0);
  useEffect(() => {
    const id = recLevel.addListener(({ value }) => setRecLevelState(value));
    return () => recLevel.removeListener(id);
  }, [recLevel]);

  const wisp = useRef(new Animated.Value(0)).current;
  const timerRef = useRef(null);
  const pausedRef = useRef(false);

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

  const nextFraction = () => fractions.find((f) => !collected.includes(f.id));
  const isReady = (f) => temp >= f.bp - 3;

  function startWisp() {
    wisp.setValue(0);
    Animated.loop(
      Animated.sequence([
        Animated.timing(wisp, { toValue: 1, duration: 1600, easing: Easing.in(Easing.quad), useNativeDriver: true }),
        Animated.timing(wisp, { toValue: 0, duration: 1, useNativeDriver: true }),
      ])
    ).start();
  }
  function stopWisp() {
    wisp.stopAnimation();
  }
  function clearTimer() {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
  }

  function setup() {
    if (setupDone) return;
    setSetupDone(true);
    say(`✓ Apparatus assembled for ${mixture.name}. Press Heat to begin distillation.`);
  }
  function heat() {
    haptic.light();
    if (!setupDone) return say("Assemble the apparatus first! 🔧");
    if (heating) return;
    setHeating(true);
    setStatus("running");
    setPaused(false);
    pausedRef.current = false;
    startWisp();
    say("🔥 Heating… the lowest-boiling fraction will distil first. Watch the thermometer, then 'Stop & Collect'.");
    timerRef.current = setInterval(() => {
      if (pausedRef.current) return; // paused: student is collecting a fraction
      setTemp((t) => {
        const nt = Math.min(maxBp + 12, t + 0.5);
        if (nt >= maxBp + 12) clearTimer();
        return Math.round(nt * 10) / 10;
      });
    }, 220);
  }

  // Student-driven pause: stop the heating to collect, then continue.
  function togglePause() {
    if (!heating) return;
    const np = !paused;
    setPaused(np);
    pausedRef.current = np;
    if (np) {
      stopWisp();
      say("⏸ Heating paused. Collect the fraction that is currently at its boiling point, then press 'Continue Heating'.");
    } else {
      startWisp();
      say("▶ Heating resumed — watch the thermometer for the next fraction.");
    }
  }

  function collect(liquid) {
    if (!heating) return say("Start heating before you collect anything! 🔥");
    const next = nextFraction();
    if (!next) return;
    if (liquid.id !== next.id) {
      return say(`⚠️ Collect ${next.name} (bp ${next.bp} °C) first — it distils before ${liquid.name} (bp ${liquid.bp} °C).`);
    }
    if (!isReady(liquid)) {
      return say(`🌡️ Thermometer reads ${temp.toFixed(1)} °C. ${liquid.name} only boils at ${liquid.bp} °C — keep heating (or pause to collect).`);
    }
    const updated = [...collected, liquid.id];
    setCollected(updated);
    // animate the receiving jar filling with the freshly collected distillate
    Animated.timing(recLevel, {
      toValue: updated.length / fractions.length,
      duration: 700,
      easing: Easing.out(Easing.quad),
      useNativeDriver: false,
    }).start();
    if (updated.length === fractions.length) {
      clearTimer();
      stopWisp();
      setHeating(false);
      setPaused(false);
      pausedRef.current = false;
      setStatus("success");
      setSaved(false);
      setNotes("");
      say("✅ All fractions collected in boiling-point order! Tap 'View Report' to write it up.");
    } else {
      const nf = fractions.find((f) => !updated.includes(f.id));
      say(`✓ ${liquid.name} collected at ${temp.toFixed(1)} °C. Receiver now contains ${updated.length}/${fractions.length} fractions. Next: ${nf.name} (bp ${nf.bp} °C).`);
    }
  }

  function reset() {
    clearTimer();
    stopWisp();
    setSetupDone(false); setHeating(false); setPaused(false); pausedRef.current = false; setTemp(20); setCollected([]); setStatus("idle");
    wisp.setValue(0);
    recLevel.setValue(0);
    setRecLevelState(0);
    say(`Bench reset. Assemble the apparatus for ${mixture.name} to begin.`);
  }

  async function saveReport() {
    const ordered = fractions.filter((f) => collected.includes(f.id));
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "distillation",
      experimentTitle: experiment.title || "Fractional Distillation",
      topicId,
      date: new Date().toLocaleDateString(),
      mixture: mixture.name,
      fractionsCollected: ordered.map((f) => `${f.name} (${f.bp} °C)`),
      order: ordered.map((f) => f.name).join(" → "),
      status: "success",
      summary: `Separated ${mixture.name}; fractions collected ${ordered.map((f) => f.name).join(" → ")} (lowest BP first).`,
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); say("📝 Report saved to your phone. Review it any time from the Lab hub."); }
    else say("Could not save the report. Please try again.");
  }

  const vaporH = Math.min(1, Math.max(0, (temp - 20) / (maxBp - 20)));

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />

      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: GREEN, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>
          {experiment.title || "Fractional Distillation"}
        </Text>
      </View>

      {/* ===== BENCH ===== */}
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Animated.View pointerEvents="none" style={{ position: "absolute", width: 230, height: 230, borderRadius: 115, backgroundColor: GREEN, opacity: glow.interpolate({ inputRange: [0, 1], outputRange: [0, 0.14] }), transform: [{ scale: glow.interpolate({ inputRange: [0, 1], outputRange: [0.85, 1.12] }) }] }} />
        <View style={{ position: "absolute", bottom: 30, width: "100%", height: 2, backgroundColor: "#d1d5db" }} />

        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          {/* Round-bottom flask with mixture + Bunsen burner + heat wisp */}
          <View style={{ alignItems: "center", marginRight: 10, position: "relative" }}>
            <View style={{ width: 90, height: 72, position: "relative", overflow: "hidden" }}>
              <RoundBottomFlask w={90} h={72} fill={0} />
              {mixture.liquids.map((l, i) => (
                <View key={l.id} style={{ position: "absolute", bottom: (72 / mixture.liquids.length) * i, left: 4, right: 4, height: 72 / mixture.liquids.length, backgroundColor: l.color + "cc" }} />
              ))}
            </View>
            <Animated.View style={{ position: "absolute", bottom: 76, width: 8, height: 18, borderRadius: 4, backgroundColor: "#cbd5e1", opacity: wisp.interpolate({ inputRange: [0, 1], outputRange: [0, 0.7] }), transform: [{ translateY: wisp.interpolate({ inputRange: [0, 1], outputRange: [0, -70] }) }] }} />
            <View style={{ position: "absolute", bottom: -38, left: 0, right: 0, alignItems: "center" }}>
              <BunsenBurner w={34} h={46} flame={heating && !paused} />
            </View>
          </View>

          {/* Fractionating column */}
          <View style={{ width: 26, height: 130, borderWidth: 3, borderColor: GLASS, borderTopWidth: 0, borderBottomWidth: 0, backgroundColor: "rgba(148,163,184,0.18)", overflow: "hidden", justifyContent: "flex-end" }}>
            <View style={{ height: `${Math.round(vaporH * 100)}%`, backgroundColor: "rgba(203,213,225,0.7)" }} />
          </View>

          {/* Condenser (horizontal) + drip */}
          <View style={{ width: 64, height: 26, alignItems: "center", justifyContent: "center", marginLeft: 6, marginBottom: 50 }}>
            <Condenser w={64} h={26} />
          </View>
          <View style={{ width: 3, height: 18, backgroundColor: "#38bdf8", marginLeft: 70, marginBottom: 30, opacity: heating ? 0.8 : 0 }} />
        </View>

        {/* Receiving flask — visibly FILLS as each fraction is collected */}
        <View style={{ flexDirection: "row", alignItems: "flex-end", marginTop: 8 }}>
          <View style={{ width: 64, height: 50, position: "relative", overflow: "hidden" }}>
            <Beaker w={64} h={50} fill={0} />
            {/* rising distillate: stacked coloured bands clipped to the fill level */}
            <Animated.View
              style={{
                position: "absolute",
                left: 4,
                right: 4,
                bottom: 4,
                height: recLevelState * 42,
                overflow: "hidden",
              }}
            >
              <View style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 42 }}>
                {fractions.map((f) => {
                  const l = mixture.liquids.find((x) => x.id === f.id);
                  return (
                    <View key={f.id} style={{ height: 42 / fractions.length, width: "100%", backgroundColor: l.color + "cc" }} />
                  );
                })}
              </View>
            </Animated.View>
          </View>
          <Text style={{ fontSize: 9, color: "#64748b", marginLeft: 6, fontWeight: "700" }}>
            Receiver{collected.length ? `\n${collected.length}/${fractions.length}` : ""}
          </Text>
        </View>

        <View style={{ position: "absolute", right: 22, top: 12, backgroundColor: "#fff", borderWidth: 1, borderColor: "#e2e8f0", borderRadius: 12, paddingVertical: 8, paddingHorizontal: 14, alignItems: "center", elevation: 2 }}>
          <Text style={{ fontSize: 9, color: "#94a3b8", fontWeight: "700" }}>THERMOMETER</Text>
          <Text style={{ fontSize: 22, fontWeight: "900", color: heating ? "#dc2626" : "#cbd5e1" }}>{temp.toFixed(1)}</Text>
          <Text style={{ fontSize: 9, color: "#94a3b8", fontWeight: "700" }}>°C</Text>
        </View>

        <Text style={{ fontSize: 11, color: "#64748b", fontWeight: "700", marginTop: 14 }}>
          {status === "running"
            ? heating ? "Distilling — collect each fraction as it boils." : "Almost done…"
            : setupDone ? "Heating ready" : "Apparatus"}
        </Text>
      </View>

      {/* ===== CONTROL PANEL ===== */}
      <View style={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 16, paddingTop: 14, paddingBottom: 18, shadowColor: "#000", shadowOffset: { width: 0, height: -3 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 10 }}>
        <View style={{ backgroundColor: status === "success" ? "#f0fdf4" : "#eff6ff", borderRadius: 12, padding: 12, borderWidth: 1, borderColor: status === "success" ? "#bbf7d0" : "#bfdbfe", marginBottom: 12, minHeight: 58, justifyContent: "center" }}>
          <Text style={{ fontSize: 13, lineHeight: 19, color: theme.colors.textMuted }}>{message}</Text>
        </View>

        {!setupDone ? (
          <Btn label="① Set up apparatus" onPress={setup} full />
        ) : !heating && status !== "success" ? (
          <Btn label="② Heat" onPress={heat} accent={GREEN} full />
        ) : status === "success" ? (
          <>
            <Btn label="📝 View Report" onPress={() => setReportOpen(true)} accent={GREEN} full />
            <TouchableOpacity onPress={reset} style={{ marginTop: 10, alignItems: "center", paddingVertical: 8 }}>
              <Text style={{ color: "#64748b", fontWeight: "700", fontSize: 13 }}>↺ Reset Experiment</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            {paused ? (
              <Btn label="▶ Continue Heating" onPress={togglePause} accent={GREEN} full />
            ) : (
              <Btn label="⏸ Stop & Collect" onPress={togglePause} accent="#ea580c" full />
            )}
            <Text style={{ fontSize: 11, fontWeight: "800", color: "#6b7280", marginBottom: 8, marginTop: 10 }}>COLLECT FRACTIONS (lowest BP first)</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {fractions.map((f) => {
                const done = collected.includes(f.id);
                const next = nextFraction();
                const isNext = next && f.id === next.id;
                const ready = isNext && isReady(f);
                return (
                  <TouchableOpacity
                    key={f.id}
                    onPress={() => collect(f)}
                    disabled={done}
                    style={{ flexDirection: "row", alignItems: "center", backgroundColor: done ? "#e7f6ec" : ready ? "#dcfce7" : "#fff", borderWidth: 1.5, borderColor: done ? GREEN : ready ? "#16a34a" : "#e5e7eb", borderRadius: 12, paddingVertical: 8, paddingHorizontal: 10, marginRight: 6, marginBottom: 6, opacity: done ? 0.7 : 1 }}
                  >
                    <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: f.color, marginRight: 6 }} />
                    <Text style={{ fontSize: 12, fontWeight: done ? "800" : "600", color: done ? "#14532d" : theme.colors.textMuted }}>{f.name} {f.bp}°</Text>
                    {done ? <Text style={{ fontSize: 11, color: GREEN, fontWeight: "800", marginLeft: 4 }}>✓</Text> : null}
                  </TouchableOpacity>
                );
              })}
            </View>
            <TouchableOpacity onPress={reset} style={{ marginTop: 8, alignItems: "center", paddingVertical: 8 }}>
              <Text style={{ color: "#64748b", fontWeight: "700", fontSize: 13 }}>↺ Reset Experiment</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      <Modal visible={reportOpen} transparent animationType="slide" onRequestClose={() => setReportOpen(false)}>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.45)", justifyContent: "flex-end" }}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ maxHeight: "88%" }}>
          <ScrollView style={{ maxHeight: "100%" }} contentContainerStyle={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 24, paddingBottom: 32 }} keyboardShouldPersistTaps="handled">
            <View style={{ width: 40, height: 4, backgroundColor: "#d1d5db", borderRadius: 2, alignSelf: "center", marginBottom: 18 }} />
            <Text style={{ fontSize: 26, textAlign: "center" }}>🎉</Text>
            <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>Distillation Complete!</Text>
            <View style={{ backgroundColor: theme.colors.surfaceMuted, borderRadius: 12, padding: 14, marginVertical: 14 }}>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>• Mixture: {mixture.name}</Text>
              {fractions.filter((f) => collected.includes(f.id)).map((f, i) => (
                <Text key={f.id} style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• {i + 1}. {f.name} (bp {f.bp} °C)</Text>
              ))}
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Order: lowest → highest boiling point</Text>
            </View>
            <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.textMuted, marginBottom: 6 }}>Your report / observations</Text>
            <TextInput
              style={{ borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }}
              placeholder="e.g. The fraction with the lowest boiling point distilled first. Fractions came off in order of increasing boiling point."
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
