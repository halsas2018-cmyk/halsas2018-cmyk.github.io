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
  Path,
  Ellipse,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { labStorage } from "../../../storage/labStorage";
import { Thermometer } from "../../components/svgKit";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import {
  computeNeutralization,
  tempFraction,
  CUP_CAPACITY,
} from "./energy-data";

const GREEN = "#16a34a";

const STEP_LABELS = ["Acid", "Alkali", "Stir", "Compute"];

// Blend two hex colors (for the mixed-solution tint).
function mix(a, b, t) {
  const pa = parseInt(a.slice(1), 16);
  const pb = parseInt(b.slice(1), 16);
  const ar = (pa >> 16) & 255, ag = (pa >> 8) & 255, ab = pa & 255;
  const br = (pb >> 16) & 255, bg = (pb >> 8) & 255, bb = pb & 255;
  const r = Math.round(ar + (br - ar) * t);
  const g = Math.round(ag + (bg - ag) * t);
  const bl = Math.round(ab + (bb - ab) * t);
  return `rgb(${r},${g},${bl})`;
}

export default function EnergyCalorimetryLab() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "energy";
  const cfg = route.params?.config;

  const acid = cfg?.acid || { name: "Hydrochloric acid", formula: "HCl", color: "#38bdf8" };
  const base = cfg?.base || { name: "Sodium hydroxide", formula: "NaOH", color: "#f472b6" };
  const acidVol = cfg?.acidVol || 25;
  const baseVol = cfg?.baseVol || 25;

  const calc = computeNeutralization({ acid, base, acidVol, baseVol });
  const acidFrac = Math.min(1, acidVol / Math.max(1, calc.totalVol));
  const willOverflow = calc.overflow;

  const [acidPoured, setAcidPoured] = useState(false);
  const [alkaliPoured, setAlkaliPoured] = useState(false);
  const [stirring, setStirring] = useState(false);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState(
    `Pour ${acidVol} mL of ${acid.formula} into the polystyrene cup, then add the alkali.`
  );

  const [liquidColor, setLiquidColor] = useState(acid.color);
  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const liquidFill = useRef(new Animated.Value(0)).current;
  const tempAnim = useRef(new Animated.Value(tempFraction(calc.initialTemp))).current;
  const stirSpin = useRef(new Animated.Value(0)).current;
  const [frac, setFrac] = useState(tempFraction(calc.initialTemp));
  const [fillState, setFillState] = useState(0);

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

  // Listeners keep the numeric readout + Thermometer + liquid level in sync.
  useEffect(() => {
    const idT = tempAnim.addListener(({ value }) => setFrac(value));
    const idF = liquidFill.addListener(({ value }) => setFillState(value));
    return () => {
      tempAnim.removeListener(idT);
      liquidFill.removeListener(idF);
    };
  }, [tempAnim, liquidFill]);

  const animTo = (a, v, d = 600, native = false) =>
    Animated.timing(a, { toValue: v, duration: d, easing: Easing.out(Easing.quad), useNativeDriver: native }).start();

  const displayTemp = 15 + frac * 30;

  function pourAcid() {
    if (acidPoured) return;
    setAcidPoured(true);
    setLiquidColor(acid.color);
    animTo(liquidFill, acidFrac, 700, false);
    setMessage(`✓ ${acid.formula} poured. Now add ${baseVol} mL of ${base.formula}.`);
  }

  function pourAlkali() {
    if (!acidPoured) return say("Pour the acid in first! 🧪");
    if (alkaliPoured) return;
    if (willOverflow) {
      setAlkaliPoured(true);
      animTo(liquidFill, 1, 400, false);
      setStatus("failed");
      setMessage(`💥 OVERFLOW! ${calc.totalVol} mL is more than the cup's ${CUP_CAPACITY} mL. The solution spills out — reset and use smaller volumes.`);
      return;
    }
    setAlkaliPoured(true);
    setLiquidColor(mix(acid.color, "#e2e8f0", 0.55));
    animTo(liquidFill, 1, 700, false);
    setMessage(`✓ ${base.formula} added. Stir to mix, then read the thermometer.`);
  }

  function stir() {
    haptic.light();
    if (!alkaliPoured) return say("Add both solutions before stirring! 🥢");
    if (stirring || status !== "idle") return;
    setStirring(true);
    Animated.loop(
      Animated.timing(stirSpin, { toValue: 1, duration: 600, easing: Easing.linear, useNativeDriver: true })
    ).start();
    // Temperature animates UP as the reaction releases heat.
    animTo(tempAnim, tempFraction(calc.finalTemp), 1800, false);
    Animated.delay(1900).start(() => {
      setStirring(false);
      stirSpin.stopAnimation();
      stirSpin.setValue(0);
      setStatus("success");
      setSaved(false);
      setNotes("");
      setMessage(`✅ Neutralization complete! Temperature rose ${calc.deltaT.toFixed(1)} °C. See the report for the enthalpy.`);
    });
  }

  function say(m) { setMessage(m); }

  function reset() {
    setAcidPoured(false);
    setAlkaliPoured(false);
    setStirring(false);
    setStatus("idle");
    liquidFill.setValue(0);
    tempAnim.setValue(tempFraction(calc.initialTemp));
    setFrac(tempFraction(calc.initialTemp));
    stirSpin.setValue(0);
    setLiquidColor(acid.color);
    setMessage(`Bench reset. Pour ${acidVol} mL of ${acid.formula} to begin.`);
  }

  async function saveReport() {
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "heat-neutralization",
      experimentTitle: experiment.title || "Measuring Heat of Neutralization",
      topicId,
      date: new Date().toLocaleDateString(),
      acid: acid.formula,
      base: base.formula,
      acidVol,
      baseVol,
      initialTemp: calc.initialTemp.toFixed(1),
      finalTemp: calc.finalTemp.toFixed(1),
      deltaT: calc.deltaT.toFixed(2),
      molesWater: calc.molesWater.toFixed(5),
      qJ: Math.round(calc.qJ),
      dH: calc.dH.toFixed(1),
      result: `ΔH = −${calc.dH.toFixed(1)} kJ/mol`,
      status: "success",
      summary: `Mixed ${acidVol} mL ${acid.formula} + ${baseVol} mL ${base.formula}. Temp rose ${calc.deltaT.toFixed(1)} °C → q = ${Math.round(calc.qJ)} J, ΔH = −${calc.dH.toFixed(1)} kJ/mol.`,
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); say("📝 Report saved to your phone. Review it any time from the Lab hub."); }
    else say("Could not save the report. Please try again.");
  }

  const step = acidPoured ? (alkaliPoured ? (status === "success" ? 3 : 2) : 1) : 0;

  // ----- inline polystyrene cup (tapered) with animated liquid level -----
  const CUP_W = 150, CUP_H = 175;
  const CUP_TOP = 10, CUP_BOTTOM = CUP_H - 12;
  const f = Math.max(0, Math.min(1, fillState));
  const topY = CUP_BOTTOM - f * (CUP_BOTTOM - 22);
  const slope = (32 - 20) / (CUP_BOTTOM - CUP_TOP);
  const lx = 20 + (topY - CUP_TOP) * slope;
  const rx = 130 - (topY - CUP_TOP) * slope;
  const liquidD = `M${lx.toFixed(1)} ${topY.toFixed(1)} L${rx.toFixed(1)} ${topY.toFixed(1)} L118 ${CUP_BOTTOM} L32 ${CUP_BOTTOM} Z`;

  const Cup = () => (
    <Svg width={CUP_W} height={CUP_H} viewBox={`0 0 ${CUP_W} ${CUP_H}`}>
      <Path d={`M20 ${CUP_TOP} L130 ${CUP_TOP} L118 ${CUP_BOTTOM} L32 ${CUP_BOTTOM} Z`} fill="#ffffff" stroke="#cbd5e1" strokeWidth="3" />
      {f > 0.01 ? <Path d={liquidD} fill={liquidColor} opacity={0.85} /> : null}
      <Ellipse cx={75} cy={CUP_TOP} rx={55} ry={8} fill="#f8fafc" stroke="#cbd5e1" strokeWidth="3" />
    </Svg>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />

      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: GREEN, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>
          {experiment.title || "Measuring Heat of Neutralization"}
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
        <Animated.View pointerEvents="none" style={{ position: "absolute", width: 250, height: 250, borderRadius: 125, backgroundColor: GREEN, opacity: glow.interpolate({ inputRange: [0, 1], outputRange: [0, 0.14] }), transform: [{ scale: glow.interpolate({ inputRange: [0, 1], outputRange: [0.85, 1.12] }) }] }} />
        <View style={{ position: "absolute", bottom: 52, width: "100%", height: 2, backgroundColor: "#d1d5db" }} />

        {/* Temperature readout */}
        <View style={{ position: "absolute", top: 6, right: 18, alignItems: "center", backgroundColor: "#fff", borderRadius: 12, paddingVertical: 8, paddingHorizontal: 12, borderWidth: 1, borderColor: "#e5e7eb" }}>
          <Text style={{ fontSize: 11, color: "#64748b", fontWeight: "700" }}>Temp</Text>
          <Text style={{ fontSize: 22, fontWeight: "900", color: displayTemp >= calc.initialTemp + 0.5 ? "#dc2626" : "#0f172a" }}>
            {displayTemp.toFixed(1)}°C
          </Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          {/* Polystyrene cup with liquid */}
          <View style={{ width: CUP_W, height: CUP_H, position: "relative" }}>
            <Cup />
            {/* Stirring rod */}
            <Animated.View style={{ position: "absolute", top: -28, left: CUP_W / 2 - 3, transform: [{ rotate: stirSpin.interpolate({ inputRange: [0, 1], outputRange: ["0deg", "360deg"] }) }] }}>
              <View style={{ width: 6, height: 90, backgroundColor: "#cbd5e1", borderRadius: 3, borderWidth: 1, borderColor: "#94a3b8" }} />
            </Animated.View>
            {/* Stirring bubbles */}
            {stirring ? (
              <View style={{ position: "absolute", bottom: 30, left: 0, right: 0, height: 80, alignItems: "center" }}>
                {[0, 1, 2].map((i) => (
                  <Bubble key={i} delay={i * 250} color={liquidColor} />
                ))}
              </View>
            ) : null}
          </View>

          {/* Thermometer beside the cup */}
          <View style={{ marginLeft: 6, marginBottom: 4 }}>
            <Thermometer h={130} temp={frac} color="#ef4444" />
          </View>
        </View>

        <Text style={{ fontSize: 11, color: "#64748b", fontWeight: "700", marginTop: 14 }}>
          {!acidPoured ? "Empty cup" : !alkaliPoured ? `Acid: ${acid.formula}` : status === "success" ? "Neutralized 🌡️" : "Mixing…"}
        </Text>
      </View>

      {/* ===== CONTROL PANEL ===== */}
      <View style={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 16, paddingTop: 14, paddingBottom: 18, shadowColor: "#000", shadowOffset: { width: 0, height: -3 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 10 }}>
        <View style={{ backgroundColor: status === "failed" ? "#fef2f2" : status === "success" ? "#f0fdf4" : "#eff6ff", borderRadius: 12, padding: 12, borderWidth: 1, borderColor: status === "failed" ? "#fecaca" : status === "success" ? "#bbf7d0" : "#bfdbfe", marginBottom: 12, minHeight: 58, justifyContent: "center" }}>
          <Text style={{ fontSize: 13, lineHeight: 19, color: theme.colors.textMuted }}>{message}</Text>
        </View>

        {status === "failed" ? (
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
          <View style={{ flexDirection: "row" }}>
            <Btn label="① Pour acid" onPress={pourAcid} disabled={acidPoured} />
            <Btn label="② Pour alkali" onPress={pourAlkali} disabled={!acidPoured || alkaliPoured} accent="#7c3aed" />
            <Btn label="③ Stir" onPress={stir} disabled={!alkaliPoured || stirring} accent={GREEN} />
          </View>
        )}
      </View>

      <Modal visible={reportOpen} transparent animationType="slide" onRequestClose={() => setReportOpen(false)}>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.45)", justifyContent: "flex-end" }}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ maxHeight: "88%" }}>
          <ScrollView style={{ maxHeight: "100%" }} contentContainerStyle={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 24, paddingBottom: 32 }} keyboardShouldPersistTaps="handled">
            <View style={{ width: 40, height: 4, backgroundColor: "#d1d5db", borderRadius: 2, alignSelf: "center", marginBottom: 18 }} />
            <Text style={{ fontSize: 26, textAlign: "center" }}>🎉</Text>
            <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>Neutralization Measured!</Text>
            <View style={{ backgroundColor: theme.colors.surfaceMuted, borderRadius: 12, padding: 14, marginVertical: 14 }}>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>• Acid: {acid.formula} ({acidVol} mL)</Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Alkali: {base.formula} ({baseVol} mL)</Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Temperature rise: <Text style={{ fontWeight: "800" }}>+{calc.deltaT.toFixed(1)} °C</Text></Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Heat released q = m·c·ΔT = <Text style={{ fontWeight: "800" }}>{Math.round(calc.qJ)} J</Text></Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Moles of H₂O = {calc.molesWater.toFixed(5)} mol</Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• ΔH = −q ÷ moles = <Text style={{ fontWeight: "800", color: GREEN }}>−{calc.dH.toFixed(1)} kJ/mol</Text></Text>
            </View>
            <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.textMuted, marginBottom: 6 }}>Your report / observations</Text>
            <TextInput
              style={{ borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }}
              placeholder="e.g. The temperature rose smoothly then levelled off. Heat loss to the cup was small."
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
        Animated.timing(y, { toValue: -60, duration: 1100, delay, easing: Easing.out(Easing.quad), useNativeDriver: true }),
        Animated.timing(o, { toValue: 0, duration: 1100, delay, useNativeDriver: true }),
      ]).start(() => run());
    };
    run();
    return () => { y.stopAnimation(); o.stopAnimation(); };
  }, [delay, y, o]);
  return (
    <Animated.View style={{ position: "absolute", bottom: 0, width: 8, height: 8, borderRadius: 4, backgroundColor: "#ffffff", opacity: o, transform: [{ translateY: y }] }} />
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
