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
  Svg,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { labStorage } from "../../../storage/labStorage";
import {
  BoilingTube,
  BunsenBurner,
  Thermometer,
  GasJar,
  Arrow,
  Label,
} from "../../components/svgKit";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import {
  computeReaction,
  tempFraction,
  gasFraction,
  ENZYME,
} from "./biochem-data";

const GREEN = "#16a34a";

const STEP_LABELS = ["Heat", "Mix", "React", "Measure"];

export default function BiochemEnzymeLab() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "biochem";
  const cfg = route.params?.config || {};

  const tempId = cfg.tempId || "optimum";
  const phId = cfg.phId || "neutral";
  const subId = cfg.subId || "medium";

  const calc = computeReaction({ tempId, phId, subId });
  const targetTempFrac = tempFraction(calc.temp.temp);
  const targetGasFrac = gasFraction(calc.gasVolume);

  const [heated, setHeated] = useState(false);
  const [mixed, setMixed] = useState(false);
  const [reacting, setReacting] = useState(false);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState(
    `Heat the water bath to ${calc.temp.label} before adding catalase.`
  );

  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const tempAnim = useRef(new Animated.Value(tempFraction(10))).current;
  const gasAnim = useRef(new Animated.Value(0)).current;
  const liquidAnim = useRef(new Animated.Value(0)).current;

  const [tempFrac, setTempFrac] = useState(tempFraction(10));
  const [gasFrac, setGasFrac] = useState(0);
  const [liquidFrac, setLiquidFrac] = useState(0);

  useEffect(() => {
    const idT = tempAnim.addListener(({ value }) => setTempFrac(value));
    const idG = gasAnim.addListener(({ value }) => setGasFrac(value));
    const idL = liquidAnim.addListener(({ value }) => setLiquidFrac(value));
    return () => {
      tempAnim.removeListener(idT);
      gasAnim.removeListener(idG);
      liquidAnim.removeListener(idL);
    };
  }, [tempAnim, gasAnim, liquidAnim]);

  const animTo = (a, v, d = 600, native = false) =>
    Animated.timing(a, { toValue: v, duration: d, easing: Easing.out(Easing.quad), useNativeDriver: native }).start();

  function heat() {
    if (heated) return;
    setHeated(true);
    haptic.medium();
    animTo(tempAnim, targetTempFrac, 1400, false);
    setMessage(`🔥 Water bath heating to ${calc.temp.label}. Wait until the thermometer settles before mixing.`);
  }

  function mix() {
    if (!heated) return say("Heat the bath first! 🔥");
    if (mixed) return;
    setMixed(true);
    haptic.light();
    animTo(liquidAnim, 0.6, 600, false);
    setMessage(`✓ Added ${ENZYME.name} + ${calc.sub.label}. Now start the reaction to collect the O₂.`);
  }

  function react() {
    if (!mixed) return say("Add the enzyme + substrate first! 🧪");
    if (reacting || status !== "idle") return;
    setReacting(true);
    haptic.medium();
    const dur = Math.max(1400, Math.min(3600, 3600 - calc.rate * 60));
    animTo(gasAnim, targetGasFrac, dur, false);
    Animated.delay(dur).start(() => {
      setReacting(false);
      setStatus("success");
      setSaved(false);
      setNotes("");
      setMessage(
        `✅ Done! Rate = ${calc.rate.toFixed(1)} cm³ O₂/min` +
          (calc.denatured ? " — high heat DENATURED catalase, so almost no gas formed." : ".") +
          " Tap View Report for the full result."
      );
    });
  }

  function say(m) { setMessage(m); }

  function reset() {
    setHeated(false);
    setMixed(false);
    setReacting(false);
    setStatus("idle");
    tempAnim.setValue(tempFraction(10));
    gasAnim.setValue(0);
    liquidAnim.setValue(0);
    setTempFrac(tempFraction(10));
    setGasFrac(0);
    setLiquidFrac(0);
    setMessage(`Bench reset. Heat the bath to ${calc.temp.label} to begin.`);
  }

  async function saveReport() {
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "enzyme-rate",
      experimentTitle: experiment.title || "Enzyme Action & Reaction Rate",
      topicId,
      date: new Date().toLocaleDateString(),
      temperature: calc.temp.label,
      pH: calc.ph.label,
      substrate: calc.sub.label,
      rate: calc.rate.toFixed(1),
      gasVolume: calc.gasVolume.toFixed(1),
      windowMin: calc.windowMin,
      denatured: calc.denatured,
      result: `Rate = ${calc.rate.toFixed(1)} cm³ O₂/min`,
      status: "success",
      summary: `Catalase + ${calc.sub.label} at ${calc.temp.label}, ${calc.ph.label}. Collected ${calc.gasVolume.toFixed(1)} cm³ O₂ in ${calc.windowMin} min → rate ${calc.rate.toFixed(1)} cm³/min. ${calc.optimumNote}`,
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); say("📝 Report saved to your phone. Review it any time from the Lab hub."); }
    else say("Could not save the report. Please try again.");
  }

  const step = heated ? (mixed ? (status === "success" ? 3 : 2) : 1) : 0;

  // Bubbles appear once the mix is made and the reaction runs (and remain on success).
  const showBubbles = mixed;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />

      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: GREEN, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>
          {experiment.title || "Enzyme Action & Reaction Rate"}
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
        <View style={{ position: "absolute", bottom: 52, width: "100%", height: 2, backgroundColor: "#d1d5db" }} />

        {/* Temperature readout */}
        <View style={{ position: "absolute", top: 6, right: 18, alignItems: "center", backgroundColor: "#fff", borderRadius: 12, paddingVertical: 8, paddingHorizontal: 12, borderWidth: 1, borderColor: "#e5e7eb" }}>
          <Text style={{ fontSize: 11, color: "#64748b", fontWeight: "700" }}>Temp</Text>
          <Text style={{ fontSize: 22, fontWeight: "900", color: heated ? "#0f172a" : "#64748b" }}>
            {(tempFrac * 90).toFixed(0)}°C
          </Text>
        </View>

        {/* Fixed 340x300 stage with all apparatus (kitted components + overlay) */}
        <View style={{ width: 340, height: 300, position: "relative" }}>
          <View style={{ position: "absolute", left: 64, top: 200 }}><BunsenBurner flame={heated} /></View>
          <View style={{ position: "absolute", left: 66, top: 55 }}><BoilingTube fill={liquidFrac} color="#bbf7d0" /></View>
          <View style={{ position: "absolute", left: 120, top: 70 }}><Thermometer h={90} temp={tempFrac} color="#ef4444" /></View>
          <View style={{ position: "absolute", left: 250, top: 120 }}><GasJar fill={gasFrac} color="#93c5fd" /></View>

          {/* Delivery tube (H₂O₂/O₂) + labels overlay */}
          <Svg width={340} height={300} viewBox="0 0 340 300" style={{ position: "absolute", left: 0, top: 0 }} pointerEvents="none">
            <Arrow x1={92} y1={62} x2={248} y2={132} color="#94a3b8" w={3} label="O₂" />
            <Label x={89} y={48} text="Catalase + H₂O₂" color="#475569" size={11} />
            <Label x={285} y={114} text="O₂ collected" color="#475569" size={11} />
          </Svg>

          {/* Rising bubbles inside the boiling tube */}
          {showBubbles ? (
            <View style={{ position: "absolute", left: 70, top: 65, width: 38, height: 135 }} pointerEvents="none">
              {[0, 1, 2, 3].map((i) => (
                <Bubble key={"bt" + i} delay={i * 300} color="#ffffff" />
              ))}
            </View>
          ) : null}

          {/* Rising bubbles inside the gas jar (collected O₂) */}
          {showBubbles ? (
            <View style={{ position: "absolute", left: 256, top: 128, width: 58, height: 138 }} pointerEvents="none">
              {[0, 1, 2].map((i) => (
                <Bubble key={"gj" + i} delay={i * 420} color="#ffffff" />
              ))}
            </View>
          ) : null}
        </View>

        <Text style={{ fontSize: 11, color: "#64748b", fontWeight: "700", marginTop: 4 }}>
          {!heated ? "Cold bath" : !mixed ? `Heated: ${calc.temp.label}` : status === "success" ? "Reaction complete" : "Reacting…"}
        </Text>
      </View>

      {/* ===== CONTROL PANEL ===== */}
      <View style={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 16, paddingTop: 14, paddingBottom: 18, shadowColor: "#000", shadowOffset: { width: 0, height: -3 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 10 }}>
        <View style={{ backgroundColor: status === "failed" ? "#fef2f2" : status === "success" ? "#f0fdf4" : "#eff6ff", borderRadius: 12, padding: 12, borderWidth: 1, borderColor: status === "failed" ? "#fecaca" : status === "success" ? "#bbf7d0" : "#bfdbfe", marginBottom: 12, minHeight: 58, justifyContent: "center" }}>
          <Text style={{ fontSize: 13, lineHeight: 19, color: theme.colors.textMuted }}>{message}</Text>
        </View>

        {status === "success" ? (
          <>
            <Btn label="📝 View Report" onPress={() => setReportOpen(true)} accent={GREEN} full />
            <TouchableOpacity onPress={reset} style={{ marginTop: 10, alignItems: "center", paddingVertical: 8 }}>
              <Text style={{ color: "#64748b", fontWeight: "700", fontSize: 13 }}>↺ Reset Experiment</Text>
            </TouchableOpacity>
          </>
        ) : (
          <View style={{ flexDirection: "row" }}>
            <Btn label="① Heat bath" onPress={heat} disabled={heated} />
            <Btn label="② Mix" onPress={mix} disabled={!heated || mixed} accent="#7c3aed" />
            <Btn label="③ React" onPress={react} disabled={!mixed || reacting} accent={GREEN} />
          </View>
        )}
      </View>

      <Modal visible={reportOpen} transparent animationType="slide" onRequestClose={() => setReportOpen(false)}>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.45)", justifyContent: "flex-end" }}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ maxHeight: "88%" }}>
          <ScrollView style={{ maxHeight: "100%" }} contentContainerStyle={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 24, paddingBottom: 32 }} keyboardShouldPersistTaps="handled">
            <View style={{ width: 40, height: 4, backgroundColor: "#d1d5db", borderRadius: 2, alignSelf: "center", marginBottom: 18 }} />
            <Text style={{ fontSize: 26, textAlign: "center" }}>🎉</Text>
            <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>Enzyme Rate Measured!</Text>
            <View style={{ backgroundColor: theme.colors.surfaceMuted, borderRadius: 12, padding: 14, marginVertical: 14 }}>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>• Temperature: <Text style={{ fontWeight: "800" }}>{calc.temp.label}</Text></Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• pH: <Text style={{ fontWeight: "800" }}>{calc.ph.label}</Text></Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Substrate: <Text style={{ fontWeight: "800" }}>{calc.sub.label}</Text></Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• O₂ collected in {calc.windowMin} min: <Text style={{ fontWeight: "800" }}>{calc.gasVolume.toFixed(1)} cm³</Text></Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Reaction rate: <Text style={{ fontWeight: "800", color: GREEN }}>{calc.rate.toFixed(1)} cm³ O₂/min</Text></Text>
              <Text style={{ fontSize: 12, color: theme.colors.textMuted, marginTop: 8, fontStyle: "italic" }}>{calc.optimumNote}</Text>
            </View>
            <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.textMuted, marginBottom: 6 }}>Your report / observations</Text>
            <TextInput
              style={{ borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }}
              placeholder="e.g. The high-temperature tube produced almost no bubbles — the enzyme was denatured. The neutral, optimum-temp tube fizzed fastest."
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

function Bubble({ delay, color }) {
  const y = useRef(new Animated.Value(0)).current;
  const o = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const run = () => {
      y.setValue(0); o.setValue(0.7);
      Animated.parallel([
        Animated.timing(y, { toValue: -118, duration: 1200, delay, easing: Easing.out(Easing.quad), useNativeDriver: true }),
        Animated.timing(o, { toValue: 0, duration: 1200, delay, useNativeDriver: true }),
      ]).start(() => run());
    };
    run();
    return () => { y.stopAnimation(); o.stopAnimation(); };
  }, [delay, y, o]);
  return (
    <Animated.View style={{ position: "absolute", bottom: 6, left: 6 + (delay % 3) * 10, width: 7, height: 7, borderRadius: 3.5, backgroundColor: "#ffffff", opacity: o, transform: [{ translateY: y }] }} />
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
