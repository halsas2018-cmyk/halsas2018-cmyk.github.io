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
import { Svg } from "react-native-svg";
import { useNavigation, useRoute } from "@react-navigation/native";
import { labStorage } from "../../../storage/labStorage";
import { PLATING_METALS, PLATE_OBJECTS, ELECTROLYTES, electrolyteFor } from "./redox-data";
import { Battery, Switch, Ammeter, Wire, ElectrodeCell } from "../../components/svgKit";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";

const GREEN = "#16a34a";
const GLASS = "#94a3b8";
const BASE_DEPOSIT_MS = 7000; // deposit time at 1.0 A
const STEP_LABELS = ["Electrolyte", "Anode", "Cathode", "Connect", "Plate"];

export default function RedoxElectroplatingLab() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "redox";
  const cfg = route.params?.config;

  const metal = cfg?.platingMetal || PLATING_METALS[0];
  const object = cfg?.object || PLATE_OBJECTS[0];
  const electrolyte = cfg?.electrolyte || electrolyteFor(metal.id) || ELECTROLYTES[0];

  const [current, setCurrent] = useState(1.0); // student-controlled current (A)
  const [electrolyteAdded, setElectrolyteAdded] = useState(false);
  const [anodeAdded, setAnodeAdded] = useState(false);
  const [cathodeAdded, setCathodeAdded] = useState(false);
  const [polarityReversed, setPolarityReversed] = useState(false);
  const [batteryOn, setBatteryOn] = useState(false);
  const [deposit, setDeposit] = useState(0); // 0 → 1
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState(`Set up your cell, then pour the ${electrolyte.name} electrolyte into the beaker.`);

  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  // ---- Animations ----
  const liquidIn = useRef(new Animated.Value(0)).current;
  const coating = useRef(new Animated.Value(0)).current; // cathode colour crossfade
  const coatW = useRef(new Animated.Value(0)).current; // cathode coating thickness (px)
  const anodeShrink = useRef(new Animated.Value(0)).current; // anode dissolves
  const ion1 = useRef(new Animated.Value(0)).current;
  const ion2 = useRef(new Animated.Value(0)).current;
  const ion3 = useRef(new Animated.Value(0)).current;
  const ion4 = useRef(new Animated.Value(0)).current;
  const ions = [ion1, ion2, ion3, ion4];
  const bub1 = useRef(new Animated.Value(0)).current;
  const bub2 = useRef(new Animated.Value(0)).current;
  const bub3 = useRef(new Animated.Value(0)).current;
  const bub4 = useRef(new Animated.Value(0)).current;
  const bubbles = [bub1, bub2, bub3, bub4];
  const timerRef = useRef(null);

  const liquidColor = electrolyte.color;
  const coatingColor = metal.color;

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
  const animTo = (a, v, d = 600, native = false) =>
    Animated.timing(a, { toValue: v, duration: d, easing: Easing.out(Easing.quad), useNativeDriver: native }).start();

  const ionDuration = () => Math.max(700, Math.round(2400 / current));
  const bubbleDuration = () => Math.max(600, Math.round(1800 / current));

  function startIons() {
    ions.forEach((v, i) => {
      v.setValue(0);
      Animated.loop(
        Animated.sequence([
          Animated.delay(i * 500),
          Animated.timing(v, { toValue: 1, duration: ionDuration(), easing: Easing.linear, useNativeDriver: true }),
        ])
      ).start();
    });
  }
  function stopIons() { ions.forEach((v) => v.stopAnimation()); }
  function startBubbles() {
    bubbles.forEach((v, i) => {
      v.setValue(0);
      Animated.loop(
        Animated.sequence([
          Animated.delay(i * 350),
          Animated.timing(v, { toValue: 1, duration: bubbleDuration(), easing: Easing.linear, useNativeDriver: true }),
        ])
      ).start();
    });
  }
  function stopBubbles() { bubbles.forEach((v) => v.stopAnimation()); }
  function clearTimer() {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
  }

  function setCurrentBy(delta) {
    const next = Math.round((current + delta) * 10) / 10;
    if (next < 0.2 || next > 2.0) return;
    setCurrent(next);
    say(`Current set to ${next.toFixed(1)} A — a higher current plates ${metal.name} faster.`);
  }

  function pourElectrolyte() {
    if (electrolyteAdded) return;
    setElectrolyteAdded(true);
    animTo(liquidIn, 1, 500);
    say(`✓ ${electrolyte.name} (${electrolyte.formula}) poured in. Now insert the ${metal.name} anode.`);
  }
  function insertAnode() {
    if (!electrolyteAdded) return say("Pour the electrolyte first! 🥃");
    if (anodeAdded) return;
    setAnodeAdded(true);
    say(`✓ ${metal.name} bar is the ANODE (+). Connect it to the positive terminal. Now add the object (cathode).`);
  }
  function insertCathode() {
    if (!anodeAdded) return say("Insert the anode first! 🟫");
    if (cathodeAdded) return;
    setCathodeAdded(true);
    say(`✓ The ${object.name} is the CATHODE (−). Connect the battery with + → anode, − → cathode, then switch on.`);
  }
  function connectBattery() {
    if (!cathodeAdded) return say("Insert both electrodes first! 🔌");
    if (batteryOn) return;
    setBatteryOn(true);
    say(`Battery connected (${polarityReversed ? "REVERSED" : "correct"} polarity). Set the current, then press "Start electrolysis".`);
  }
  function switchOn() {
    haptic.light();
    if (!batteryOn) return say("Connect the battery first! 🔌");
    if (status === "failed" || status === "success") return;
    if (polarityReversed) {
      setStatus("failed");
      stopIons();
      stopBubbles();
      return say("💥 Wrong polarity! + was connected to the cathode, so the object became the anode and started to dissolve instead of being plated. No coating forms. Tap Reset to wire it correctly.");
    }
    setStatus("running");
    setDeposit(0);
    const ms = Math.round(BASE_DEPOSIT_MS / current);
    animTo(coating, 1, ms, false);
    animTo(coatW, 16, ms, false); // coating grows thicker with time
    animTo(anodeShrink, 1, ms, true);
    startIons();
    startBubbles(); // gas evolves at the anode during electrolysis
    say(`⚡ Electrolysis running at ${current.toFixed(1)} A — ${metal.name} ions migrate to the cathode and the coating builds up.`);
    let start = Date.now();
    timerRef.current = setInterval(() => {
      const p = Math.min((Date.now() - start) / ms, 1);
      setDeposit(Math.round(p * 100) / 100);
      if (p >= 1) {
        clearTimer();
        stopIons();
        stopBubbles();
        setStatus("success");
        setSaved(false);
        setNotes("");
        say("✅ Plating complete! A smooth layer of " + metal.name + " now coats the " + object.name + ". Write up your report.");
      }
    }, 100);
  }

  function reset() {
    clearTimer();
    stopIons();
    stopBubbles();
    setElectrolyteAdded(false);
    setAnodeAdded(false);
    setCathodeAdded(false);
    setBatteryOn(false);
    setPolarityReversed(false);
    setDeposit(0);
    setStatus("idle");
    liquidIn.setValue(0);
    coating.setValue(0);
    coatW.setValue(0);
    anodeShrink.setValue(0);
    ions.forEach((v) => v.setValue(0));
    bubbles.forEach((v) => v.setValue(0));
    say(`Bench reset. Pour the ${electrolyte.name} electrolyte to begin.`);
  }

  async function saveReport() {
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "electroplating",
      experimentTitle: experiment.title || "Electroplating",
      topicId,
      date: new Date().toLocaleDateString(),
      platingMetal: metal.name,
      platingSymbol: metal.symbol,
      object: object.name,
      electrolyte: electrolyte.formula,
      current: `${current.toFixed(1)} A`,
      polarity: polarityReversed ? "reversed (wrong)" : "correct (+ → anode)",
      result: `A visible ${metal.name} coating formed on the ${object.name}.`,
      status: "success",
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); say("📝 Report saved to your phone. Review it any time from the Lab hub."); }
    else say("Could not save the report. Please try again.");
  }

  const step = electrolyteAdded ? (anodeAdded ? (cathodeAdded ? (batteryOn ? 4 : 3) : 2) : 1) : 0;
  const running = status === "running";

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />

      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: GREEN, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>
          {experiment.title || "Electroplating"}
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

        {/* Apparatus: svgKit circuit + beaker */}
        <View style={{ position: "relative", width: 240, height: 220, alignItems: "center" }}>
          {/* connecting wires (inline Svg, behind components) */}
          <SvgWires />

          <View style={{ position: "absolute", left: 10, top: 14 }}><Battery /></View>
          <View style={{ position: "absolute", left: 86, top: 18 }}><Switch closed={batteryOn && status !== "failed"} /></View>
          <View style={{ position: "absolute", left: 176, top: 8 }}><Ammeter value={`${current.toFixed(1)} A`} /></View>

          {/* beaker / cell */}
          <View style={{ position: "absolute", left: 45, top: 64, width: 150, height: 150 }}>
            <ElectrodeCell w={150} h={150} fill={0} color={liquidColor} left={metal.color} right="#9ca3af" />

            {/* electrolyte liquid */}
            <Animated.View style={{ position: "absolute", bottom: 14, left: 10, right: 10, height: 108, backgroundColor: liquidColor, opacity: liquidIn.interpolate({ inputRange: [0, 1], outputRange: [0, 0.85] }) }} />

            {/* migrating ions: anode (left) → cathode (right) */}
            {ions.map((v, i) => (
              <Animated.View
                key={i}
                style={{
                  position: "absolute",
                  top: 50 + i * 18,
                  left: 18,
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: coatingColor,
                  opacity: v.interpolate({ inputRange: [0, 0.1, 0.9, 1], outputRange: [0, 1, 1, 0] }),
                  transform: [{ translateX: v.interpolate({ inputRange: [0, 1], outputRange: [0, 112] }) }],
                }}
              />
            ))}

            {/* bubbles evolving at the anode (left electrode) */}
            {bubbles.map((v, i) => (
              <Animated.View
                key={i}
                style={{
                  position: "absolute",
                  left: 20 + i * 5,
                  bottom: 26,
                  width: 5,
                  height: 5,
                  borderRadius: 2.5,
                  backgroundColor: "#f8fafc",
                  opacity: v.interpolate({ inputRange: [0, 0.15, 0.85, 1], outputRange: [0, 1, 1, 0] }),
                  transform: [{ translateY: v.interpolate({ inputRange: [0, 1], outputRange: [0, -100] }) }],
                }}
              />
            ))}

            {/* anode (plating metal) — dissolves slightly as it plates */}
            <Animated.View
              style={{
                position: "absolute",
                left: 26,
                top: 14,
                width: 8,
                height: 120,
                backgroundColor: metal.color,
                borderRadius: 2,
                borderWidth: 1,
                borderColor: "#00000022",
                transform: [{ scaleY: anodeShrink.interpolate({ inputRange: [0, 1], outputRange: [1, 0.82] }) }],
              }}
            />

            {/* cathode (object) with growing metal coating */}
            <View style={{ position: "absolute", right: 26, top: 14, width: 8, height: 120, borderRadius: 2, backgroundColor: "#9ca3af", borderWidth: 1, borderColor: "#00000022", alignItems: "center", justifyContent: "center" }}>
              <Text style={{ fontSize: 9 }}>{object.symbol}</Text>
              <Animated.View style={{ position: "absolute", right: 8, top: 0, bottom: 0, width: coatW, borderRadius: 2, backgroundColor: coatingColor, opacity: coating }} />
            </View>
          </View>
        </View>

        <Text style={{ fontSize: 11, color: "#64748b", fontWeight: "700", marginTop: 4 }}>
          {running
            ? `Plating… coat ${Math.round(deposit * 100)}% formed`
            : status === "success"
            ? `${metal.name} coating complete ✓`
            : cathodeAdded
            ? batteryOn
              ? "Cell ready — start the electrolysis"
              : "Connect the battery (correct polarity)"
            : anodeAdded
            ? "Anode in — add the object"
            : electrolyteAdded
            ? "Electrolyte in — add the anode"
            : "Empty beaker"}
        </Text>
      </View>

      {/* ===== CONTROL PANEL ===== */}
      <View style={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 16, paddingTop: 14, paddingBottom: 18, shadowColor: "#000", shadowOffset: { width: 0, height: -3 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 10 }}>
        <View style={{ backgroundColor: status === "failed" ? "#fef2f2" : status === "success" ? "#f0fdf4" : "#eff6ff", borderRadius: 12, padding: 12, borderWidth: 1, borderColor: status === "failed" ? "#fecaca" : status === "success" ? "#bbf7d0" : "#bfdbfe", marginBottom: 12, minHeight: 58, justifyContent: "center" }}>
          <Text style={{ fontSize: 13, lineHeight: 19, color: theme.colors.textMuted }}>{message}</Text>
        </View>

        {/* student current control */}
        {!running && status !== "success" && status !== "failed" ? (
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: theme.colors.surfaceMuted, borderRadius: 12, paddingVertical: 8, marginBottom: 10, borderWidth: 1, borderColor: theme.colors.border }}>
            <Text style={{ fontSize: 12, fontWeight: "800", color: theme.colors.textMuted, marginRight: 10 }}>Current</Text>
            <TouchableOpacity onPress={() => setCurrentBy(-0.2)} disabled={current <= 0.2} style={{ width: 34, height: 34, borderRadius: 17, backgroundColor: current <= 0.2 ? "#e5e7eb" : "#2563eb", alignItems: "center", justifyContent: "center" }}>
              <Text style={{ color: current <= 0.2 ? "#94a3b8" : "#fff", fontWeight: "900", fontSize: 18 }}>−</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 15, fontWeight: "900", color: "#0f172a", marginHorizontal: 12, minWidth: 46, textAlign: "center" }}>{current.toFixed(1)} A</Text>
            <TouchableOpacity onPress={() => setCurrentBy(0.2)} disabled={current >= 2.0} style={{ width: 34, height: 34, borderRadius: 17, backgroundColor: current >= 2.0 ? "#e5e7eb" : "#2563eb", alignItems: "center", justifyContent: "center" }}>
              <Text style={{ color: current >= 2.0 ? "#94a3b8" : "#fff", fontWeight: "900", fontSize: 18 }}>+</Text>
            </TouchableOpacity>
          </View>
        ) : null}

        {running ? (
          <TouchableOpacity onPress={reset} style={{ alignItems: "center", paddingVertical: 12 }}>
            <Text style={{ color: "#64748b", fontWeight: "700", fontSize: 14 }}>↺ Reset Experiment</Text>
          </TouchableOpacity>
        ) : status === "success" ? (
          <>
            <Btn label="📝 View Report" onPress={() => setReportOpen(true)} accent={GREEN} full />
            <TouchableOpacity onPress={reset} style={{ marginTop: 10, alignItems: "center", paddingVertical: 8 }}>
              <Text style={{ color: "#64748b", fontWeight: "700", fontSize: 13 }}>↺ Reset Experiment</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <View style={{ flexDirection: "row" }}>
              <Btn label="① Electrolyte" onPress={pourElectrolyte} disabled={electrolyteAdded} accent={electrolyte.color} />
              <Btn label="② Anode" onPress={insertAnode} disabled={!electrolyteAdded || anodeAdded} accent={metal.color} />
              <Btn label="③ Cathode" onPress={insertCathode} disabled={!anodeAdded || cathodeAdded} accent="#6b7280" />
            </View>
            <View style={{ flexDirection: "row", marginTop: 8 }}>
              <Btn label={polarityReversed ? "⟲ Correct polarity" : "⟳ Reverse polarity"} onPress={() => setPolarityReversed((p) => !p)} disabled={batteryOn} accent="#7c3aed" />
              <Btn label="④ Connect" onPress={connectBattery} disabled={!cathodeAdded || batteryOn} accent="#2563eb" />
              <Btn label="⑤ Start" onPress={switchOn} disabled={!batteryOn} accent={GREEN} />
            </View>
            {(status === "failed" || batteryOn) && (
              <TouchableOpacity onPress={reset} style={{ marginTop: 10, alignItems: "center", paddingVertical: 8 }}>
                <Text style={{ color: "#64748b", fontWeight: "700", fontSize: 13 }}>↺ Reset Experiment</Text>
              </TouchableOpacity>
            )}
          </>
        )}
      </View>

      <Modal visible={reportOpen} transparent animationType="slide" onRequestClose={() => setReportOpen(false)}>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.45)", justifyContent: "flex-end" }}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ maxHeight: "88%" }}>
          <ScrollView style={{ maxHeight: "100%" }} contentContainerStyle={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 24, paddingBottom: 32 }} keyboardShouldPersistTaps="handled">
            <View style={{ width: 40, height: 4, backgroundColor: "#d1d5db", borderRadius: 2, alignSelf: "center", marginBottom: 18 }} />
            <Text style={{ fontSize: 26, textAlign: "center" }}>🎉</Text>
            <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>Electroplating Complete!</Text>
            <View style={{ backgroundColor: theme.colors.surfaceMuted, borderRadius: 12, padding: 14, marginVertical: 14 }}>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>• Plating metal (anode): {metal.name} ({metal.symbol})</Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Object (cathode): {object.name}</Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Electrolyte: {electrolyte.formula}</Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Current: {current.toFixed(1)} A</Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Polarity: {polarityReversed ? "REVERSED (wrong)" : "correct (+ → anode)"}</Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Result: <Text style={{ fontWeight: "800" }}>A {metal.name} coating formed on the {object.name}.</Text></Text>
            </View>
            <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.textMuted, marginBottom: 6 }}>Your report / observations</Text>
            <TextInput
              style={{ borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }}
              placeholder="e.g. The steel spoon turned coppery as current flowed. Electrons moved from the copper anode to the spoon cathode."
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

// Inline wire drawing that connects the svgKit Battery / Switch / Ammeter to the
// two electrodes inside the beaker (electrode tops at x=75 and x=165, y=74).
function SvgWires() {
  return (
    <Svg width={240} height={220} viewBox="0 0 240 220" style={{ position: "absolute", left: 0, top: 0 }}>
      <Wire d="M54 30 H92" />          {/* battery + → switch */}
      <Wire d="M136 33 H176" />        {/* switch → ammeter */}
      <Wire d="M196 50 V60 H165 V74" /> {/* ammeter → cathode (right electrode) */}
      <Wire d="M10 32 V60 H75 V74" />   {/* battery − → anode (left electrode) */}
    </Svg>
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
