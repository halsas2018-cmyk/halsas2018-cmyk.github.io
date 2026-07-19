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
import { DIFFUSION_GASES, grahamsRate, diffusionRatio, orderByMass } from "./states-data.js";
import { GasJar } from "../../components/svgKit";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";

const GREEN = "#16a34a";
const STEEL = "#9ca3af";

// Bench geometry (px). Two gas jars joined by a central tube.
const JAR_W = 120; // each jar width
const GAP = 18; // connecting-tube gap between jars
const TOTAL_W = JAR_W * 2 + GAP; // full bench width
const BENCH_H = 150; // bench height
const PER_GAS = 16; // particles per gas
const BASE_JITTER = 1.9; // px per frame random-walk step (scaled by rate)
const STEP_MS = 33; // physics tick

const STEP_LABELS = ["Jars", "Gas A", "Gas B", "Diffuse"];

const rand = (a, b) => a + Math.random() * (b - a);
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

export default function StatesDiffusionLab() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "states";
  const cfg = route.params?.config;

  const fallbackA = DIFFUSION_GASES[0]; // H₂
  const fallbackB = DIFFUSION_GASES[4]; // CO₂
  const gasA = cfg?.gasA || fallbackA;
  const gasB = cfg?.gasB || fallbackB;
  const ordered = orderByMass(gasA, gasB);
  const lighter = ordered.lighter;
  const heavier = ordered.heavier;
  const lighterType = lighter === gasA ? "A" : "B";
  const ratio = diffusionRatio(lighter.molarMass, heavier.molarMass);
  const predFaster = cfg?.prediction || null;
  const maxRate = Math.max(1 / Math.sqrt(gasA.molarMass), 1 / Math.sqrt(gasB.molarMass));

  const [placed, setPlaced] = useState(false);
  const [aFilled, setAFilled] = useState(false);
  const [bFilled, setBFilled] = useState(false);
  const [running, setRunning] = useState(false);
  const [phase, setPhase] = useState("setup"); // "setup" | "question"
  const [status, setStatus] = useState("idle"); // idle | failed | success
  const [message, setMessage] = useState("Place the two gas jars on the bench to begin.");

  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const [frame, setFrame] = useState(0); // bumps every physics tick to re-render particles
  const particlesRef = useRef([]);
  const diffusingRef = useRef(false);
  const revealedRef = useRef(false);
  const loopRef = useRef(null);
  const fallbackRef = useRef(null);

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

  // Seed the particle field (all inactive until each jar is filled).
  function seed() {
    const ps = [];
    for (let i = 0; i < PER_GAS; i++) {
      ps.push({ type: "A", id: gasA.id, M: gasA.molarMass, x: rand(12, JAR_W - 12), y: rand(16, BENCH_H - 16), active: false });
      ps.push({ type: "B", id: gasB.id, M: gasB.molarMass, x: rand(JAR_W + GAP + 12, TOTAL_W - 12), y: rand(16, BENCH_H - 16), active: false });
    }
    particlesRef.current = ps;
  }
  useEffect(() => {
    seed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function stopLoop() {
    if (loopRef.current) { clearInterval(loopRef.current); loopRef.current = null; }
  }
  function clearFallback() {
    if (fallbackRef.current) { clearTimeout(fallbackRef.current); fallbackRef.current = null; }
  }

  // One physics tick: random-walk every active particle. Lighter gas (higher
  // rate) takes bigger steps so it visibly reaches the centre first (Graham).
  function physicsTick() {
    const diff = diffusingRef.current;
    const ps = particlesRef.current;
    const tubeCentre = JAR_W + GAP / 2;
    for (const p of ps) {
      if (!p.active) continue;
      const scale = (1 / Math.sqrt(p.M)) / maxRate; // 0..1, larger for lighter gas
      const j = BASE_JITTER * scale;
      let dx = (Math.random() * 2 - 1) * j;
      let dy = (Math.random() * 2 - 1) * j;
      if (diff) {
        const dir = p.x < tubeCentre ? 1 : -1; // bias toward the opposite jar
        dx += dir * 0.4 * scale;
      }
      p.x += dx;
      p.y += dy;
      p.y = clamp(p.y, 12, BENCH_H - 12);
      if (diff) {
        p.x = clamp(p.x, 8, TOTAL_W - 8);
      } else if (p.type === "A") {
        p.x = clamp(p.x, 12, JAR_W - 8);
      } else {
        p.x = clamp(p.x, JAR_W + GAP + 8, TOTAL_W - 10);
      }
    }
    setFrame((f) => f + 1);

    if (diff && !revealedRef.current) {
      const reached = ps.some(
        (p) => p.active && p.type === lighterType && p.x > JAR_W - 8 && p.x < JAR_W + GAP + 8
      );
      if (reached) {
        revealedRef.current = true;
        clearFallback();
        setPhase("question");
        say(`Which gas reached the centre of the container first? Tap the correct one. 🤔`);
      }
    }
  }

  const say = (m) => setMessage(m);

  function placeJars() {
    if (placed) return;
    setPlaced(true);
    say(`Two gas jars joined by a tube. ✓ Now fill jar A with ${gasA.name}.`);
  }
  function fillA() {
    if (!placed) return say("Place the two jars first! 🫙");
    if (aFilled) return;
    setAFilled(true);
    particlesRef.current.forEach((p) => { if (p.type === "A") { p.active = true; p.x = rand(12, JAR_W - 12); p.y = rand(16, BENCH_H - 16); } });
    setFrame((f) => f + 1);
    say(`${gasA.name} (${gasA.formula}) released into jar A — ${PER_GAS} molecules appear. ✓ Fill jar B.`);
  }
  function fillB() {
    if (!aFilled) return say("Fill jar A first! 💨");
    if (bFilled) return;
    setBFilled(true);
    particlesRef.current.forEach((p) => { if (p.type === "B") { p.active = true; p.x = rand(JAR_W + GAP + 12, TOTAL_W - 12); p.y = rand(16, BENCH_H - 16); } });
    setFrame((f) => f + 1);
    say(`${gasB.name} (${gasB.formula}) released into jar B. ✓ Open the valve to start diffusion.`);
  }
  function startDiffuse() {
    haptic.light();
    if (!bFilled) return say("Fill both jars before you start! 🧪");
    if (running) return;
    setRunning(true);
    setPhase("setup");
    setStatus("idle");
    revealedRef.current = false;
    diffusingRef.current = true;
    say(`Valve open! Both gases spread toward each other through the tube — watch which reaches the centre first. 🌬️`);
    stopLoop();
    loopRef.current = setInterval(physicsTick, STEP_MS);
    clearFallback();
    fallbackRef.current = setTimeout(() => {
      if (!revealedRef.current) {
        revealedRef.current = true;
        setPhase("question");
        say(`Which gas reached the centre of the container first? Tap the correct one. 🤔`);
      }
    }, 4500);
  }

  function answer(key) {
    const chosen = key === "A" ? gasA : gasB;
    if (chosen.id === lighter.id) {
      setStatus("success");
      setSaved(false);
      setNotes("");
      say(`✅ Correct! ${lighter.name} (M=${lighter.molarMass}) is lighter, so it diffuses ${ratio}× faster.`);
    } else {
      setStatus("failed");
      say(`❌ Not quite — ${heavier.name} is heavier, so ${lighter.name} actually reached the centre first. Tap Reset to retry.`);
    }
  }

  function reset() {
    stopLoop();
    clearFallback();
    diffusingRef.current = false;
    revealedRef.current = false;
    setRunning(false);
    setPhase("setup");
    setStatus("idle");
    setPlaced(false);
    setAFilled(false);
    setBFilled(false);
    seed();
    setFrame(0);
    say("Bench reset. Place the two gas jars to begin.");
  }

  async function saveReport() {
    const predictedGas = predFaster === "A" ? gasA : predFaster === "B" ? gasB : null;
    const predictionCorrect = predictedGas ? predictedGas.id === lighter.id : null;
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "diffusion",
      experimentTitle: experiment.title || "Diffusion of Gases",
      topicId,
      date: new Date().toLocaleDateString(),
      gasA: `${gasA.name} (${gasA.formula}, M=${gasA.molarMass})`,
      gasB: `${gasB.name} (${gasB.formula}, M=${gasB.molarMass})`,
      lighterGas: lighter.name,
      rateA: grahamsRate(gasA.molarMass),
      rateB: grahamsRate(gasB.molarMass),
      ratio: `${ratio}×`,
      prediction: predictedGas ? predictedGas.name : "—",
      observation: `${lighter.name} diffused faster`,
      predictionCorrect: predictionCorrect == null ? "n/a" : predictionCorrect,
      status: "success",
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); say("📝 Report saved to your phone. Review it any time from the Lab hub."); }
    else say("Could not save the report. Please try again.");
  }

  // ----- live concentration read-out -----
  const ps = particlesRef.current;
  const tubeCentre = JAR_W + GAP / 2;
  let leftA = 0, leftB = 0, rightA = 0, rightB = 0;
  for (const p of ps) {
    if (!p.active) continue;
    if (p.x < tubeCentre) { if (p.type === "A") leftA++; else leftB++; }
    else { if (p.type === "A") rightA++; else rightB++; }
  }
  const leftTotal = leftA + leftB || 1;
  const rightTotal = rightA + rightB || 1;

  const step = placed ? (aFilled ? (bFilled ? 3 : 2) : 1) : 0;
  const showQuestion = phase === "question" && status !== "success" && status !== "failed";
  const showFail = status === "failed";
  const showSuccess = status === "success";

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />

      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: GREEN, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>
          {experiment.title || "Diffusion of Gases"}
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

        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
          <GasTag label={`A · ${gasA.name}`} color={gasA.color} />
          <Text style={{ fontSize: 12, color: "#94a3b8", marginHorizontal: 10, fontWeight: "700" }}>vs</Text>
          <GasTag label={`B · ${gasB.name}`} color={gasB.color} />
        </View>

        {/* bench stage */}
        <View style={{ position: "relative", width: TOTAL_W, height: BENCH_H }}>
          {/* jar A */}
          <View style={{ position: "absolute", left: 0, top: 0, width: JAR_W, height: BENCH_H }}>
            <GasJar w={JAR_W} h={BENCH_H} fill={0} />
          </View>
          {/* jar B */}
          <View style={{ position: "absolute", left: JAR_W + GAP, top: 0, width: JAR_W, height: BENCH_H }}>
            <GasJar w={JAR_W} h={BENCH_H} fill={0} />
          </View>
          {/* connecting tube at mid-height */}
          <View style={{ position: "absolute", left: JAR_W - 2, top: BENCH_H / 2 - 7, width: GAP + 4, height: 14, backgroundColor: "#cbd5e1", borderRadius: 3, borderWidth: 1, borderColor: "#94a3b8" }} />
          {/* valve / stopper: visible while barrier is up */}
          {!diffusingRef.current && !running ? (
            <View style={{ position: "absolute", left: JAR_W + GAP / 2 - 6, top: BENCH_H / 2 - 11, width: 12, height: 22, borderRadius: 3, backgroundColor: "#475569" }} />
          ) : null}

          {/* gas particles */}
          {ps.map((p, i) =>
            p.active ? (
              <View
                key={i}
                style={{
                  position: "absolute",
                  left: p.x - 3.5,
                  top: p.y - 3.5,
                  width: 7,
                  height: 7,
                  borderRadius: 3.5,
                  backgroundColor: p.type === "A" ? gasA.color : gasB.color,
                  opacity: 0.92,
                }}
              />
            ) : null
          )}

          {/* centre label */}
          <View style={{ position: "absolute", left: 0, right: 0, top: -2, alignItems: "center" }}>
            <Text style={{ fontSize: 10, color: "#475569", fontWeight: "700", backgroundColor: "rgba(255,255,255,0.75)", paddingHorizontal: 8, paddingVertical: 2, borderRadius: 8 }}>
              {running ? (phase === "question" ? "Which reached centre first?" : "Diffusing…") : placed ? "Jars ready" : "Empty container"}
            </Text>
          </View>
        </View>

        {/* live concentration read-out */}
        <View style={{ flexDirection: "row", marginTop: 10, gap: 14 }}>
          <Conc label={`Jar A`} aPct={Math.round((leftA / leftTotal) * 100)} bPct={Math.round((leftB / leftTotal) * 100)} aColor={gasA.color} bColor={gasB.color} />
          <Conc label={`Jar B`} aPct={Math.round((rightA / rightTotal) * 100)} bPct={Math.round((rightB / rightTotal) * 100)} aColor={gasA.color} bColor={gasB.color} />
        </View>

        <Text style={{ fontSize: 11, color: "#64748b", fontWeight: "700", marginTop: 8 }}>
          {running ? `Lighter gas = ${lighter.name} (M=${lighter.molarMass})` : `Graham: rate ∝ 1/√M`}
        </Text>
      </View>

      {/* ===== CONTROL PANEL ===== */}
      <View style={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 16, paddingTop: 14, paddingBottom: 18, shadowColor: "#000", shadowOffset: { width: 0, height: -3 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 10 }}>
        <View style={{ backgroundColor: showFail ? "#fef2f2" : showSuccess ? "#f0fdf4" : "#eff6ff", borderRadius: 12, padding: 12, borderWidth: 1, borderColor: showFail ? "#fecaca" : showSuccess ? "#bbf7d0" : "#bfdbfe", marginBottom: 12, minHeight: 58, justifyContent: "center" }}>
          <Text style={{ fontSize: 13, lineHeight: 19, color: theme.colors.textMuted }}>{message}</Text>
        </View>

        {showQuestion ? (
          <View>
            <Text style={{ fontSize: 12, fontWeight: "800", color: theme.colors.textMuted, marginBottom: 8, textAlign: "center" }}>Tap the gas that reached the centre FIRST:</Text>
            <View style={{ flexDirection: "row" }}>
              <Btn label={`A · ${gasA.name}`} onPress={() => answer("A")} accent={gasA.color} />
              <Btn label={`B · ${gasB.name}`} onPress={() => answer("B")} accent={gasB.color} />
            </View>
          </View>
        ) : showSuccess ? (
          <Btn label="📝 View Report" onPress={() => setReportOpen(true)} accent={GREEN} full />
        ) : showFail ? (
          <TouchableOpacity onPress={reset} style={{ alignItems: "center", paddingVertical: 12 }}>
            <Text style={{ color: "#64748b", fontWeight: "700", fontSize: 14 }}>↺ Reset Experiment</Text>
          </TouchableOpacity>
        ) : (
          <View style={{ flexDirection: "row" }}>
            <Btn label="① Place jars" onPress={placeJars} disabled={placed} />
            <Btn label={`② Fill A`} onPress={fillA} disabled={!placed || aFilled} accent={gasA.color} />
            <Btn label={`③ Fill B`} onPress={fillB} disabled={!aFilled || bFilled} accent={gasB.color} />
            <Btn label="④ Open valve" onPress={startDiffuse} disabled={!bFilled || running} accent={GREEN} />
          </View>
        )}

        {(running || status === "failed") && !showSuccess ? (
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
            <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>Diffusion Complete!</Text>
            <View style={{ backgroundColor: theme.colors.surfaceMuted, borderRadius: 12, padding: 14, marginVertical: 14 }}>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>• Gas A: {gasA.name} ({gasA.formula}, M = {gasA.molarMass})</Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Gas B: {gasB.name} ({gasB.formula}, M = {gasB.molarMass})</Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Rate A = 1/√{gasA.molarMass} = <Text style={{ fontWeight: "800" }}>{grahamsRate(gasA.molarMass).toFixed(3)}</Text></Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Rate B = 1/√{gasB.molarMass} = <Text style={{ fontWeight: "800" }}>{grahamsRate(gasB.molarMass).toFixed(3)}</Text></Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Lightest gas {lighter.name} diffuses {ratio} times as fast.</Text>
              {predFaster ? (
                <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>
                  • Your prediction: {(predFaster === "A" ? gasA : gasB).name} —{" "}
                  <Text style={{ fontWeight: "800", color: ((predFaster === "A" ? gasA : gasB).id === lighter.id) ? GREEN : "#dc2626" }}>
                    {((predFaster === "A" ? gasA : gasB).id === lighter.id) ? "correct ✓" : "incorrect ✗"}
                  </Text>
                </Text>
              ) : null}
            </View>
            <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.textMuted, marginBottom: 6 }}>Your report / observations</Text>
            <TextInput
              style={{ borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }}
              placeholder="e.g. The lighter gas reached the centre of the container first — this matches Graham's law."
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

function GasTag({ label, color }) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#fff", borderWidth: 1, borderColor: "#e2e8f0", borderRadius: 10, paddingVertical: 5, paddingHorizontal: 10 }}>
      <View style={{ width: 11, height: 11, borderRadius: 5.5, backgroundColor: color, marginRight: 6 }} />
      <Text style={{ fontSize: 12, fontWeight: "700", color: "#334155" }}>{label}</Text>
    </View>
  );
}

function Conc({ label, aPct, bPct, aColor, bColor }) {
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ fontSize: 10, fontWeight: "800", color: "#475569", marginBottom: 3 }}>{label}</Text>
      <View style={{ width: 90, height: 12, borderRadius: 6, overflow: "hidden", flexDirection: "row", backgroundColor: "#e5e7eb" }}>
        <View style={{ width: `${aPct}%`, height: 12, backgroundColor: aColor }} />
        <View style={{ width: `${bPct}%`, height: 12, backgroundColor: bColor }} />
      </View>
      <Text style={{ fontSize: 9, color: "#64748b", marginTop: 2, fontWeight: "700" }}>{aPct}% A · {bPct}% B</Text>
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
