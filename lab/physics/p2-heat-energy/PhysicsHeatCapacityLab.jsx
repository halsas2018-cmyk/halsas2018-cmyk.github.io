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
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import { labStorage } from "../../../storage/labStorage";
import { MATERIALS, computeTf, computeC } from "./heat-data";
import { Beaker, Thermometer } from "../../components/svgKit";

const ACCENT = "#ea580c";
const STEP_LABELS = ["Setup", "Heat", "Measure"];
const T_MIN = 15;
const T_MAX = 100;
const TOL = 0.1; // 10% tolerance on computed c

export default function PhysicsHeatCapacityLab() {
  const navigation = useNavigation();
  const route = useRoute();
  const theme = useTheme();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "p2-heat-energy";
  const cfg = route.params?.config || { material: "copper", ms: 100, mw: 150 };

  const mat = MATERIALS.find((m) => m.id === cfg.material) || MATERIALS[0];
  const ms = cfg.ms / 1000;
  const mw = cfg.mw / 1000;
  const tFinal = computeTf({ ms, mw, cs: mat.c });

  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState(
    "Press ‘Add hot solid’ to drop the pre-heated solid into the water and watch the thermometer rise."
  );
  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);
  const [cInput, setCInput] = useState("");
  const [cError, setCError] = useState("");
  const [displayTemp, setDisplayTemp] = useState(20); // integer readout, counts up 1° at a time
  const countTimer = useRef(null);

  const dropAnim = useRef(new Animated.Value(0)).current; // 0 = above, 1 = in water
  const tempAnim = useRef(new Animated.Value(0)).current; // 0 -> 1 fills the mercury column to tFinal

  const frac = (t) => Math.max(0, Math.min(1, (t - T_MIN) / (T_MAX - T_MIN)));
  const tempFill = tempAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [frac(20), frac(tFinal)],
  });
  const solidTranslate = dropAnim.interpolate({ inputRange: [0, 1], outputRange: [-70, 0] });

  const say = (m) => setMessage(m);

  const clearCount = () => {
    if (countTimer.current) {
      clearInterval(countTimer.current);
      countTimer.current = null;
    }
  };

  const finishMeasure = () => {
    setStatus("measure");
    say(
      `🌡️ Final temperature reached ${tFinal.toFixed(1)} °C. Compute the specific heat capacity: c = m𝓌·c𝓌·ΔT𝓌 / (mₛ·ΔTₛ), then press ‘Verify’.`
    );
  };

  // Stepwise integer readout: increments displayTemp by 1 until it reaches the
  // rounded final temperature (instead of jumping straight to the final value).
  const startCountUp = () => {
    clearCount();
    const target = Math.round(tFinal);
    setDisplayTemp(20);
    if (target <= 20) {
      finishMeasure();
      return;
    }
    const stepMs = Math.max(60, Math.round(1500 / (target - 20)));
    let cur = 20;
    countTimer.current = setInterval(() => {
      cur += 1;
      setDisplayTemp(cur);
      if (cur >= target) {
        clearCount();
        finishMeasure();
      }
    }, stepMs);
  };

  function addSolid() {
    haptic.light();
    if (status === "heating" || status === "measure") return;
    setStatus("heating");
    setCError("");
    setCInput("");
    dropAnim.setValue(0);
    tempAnim.setValue(0);
    setDisplayTemp(20);
    say("⬇️ Dropping the hot solid into the water…");
    // The solid drops first; once it lands the mercury column rises smoothly
    // while the readout counts up 1° at a time to the final temperature.
    Animated.timing(dropAnim, {
      toValue: 1,
      duration: 600,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(tempAnim, {
        toValue: 1,
        duration: 1500,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: false,
      }).start();
      startCountUp();
    });
  }

  function verify() {
    haptic.light();
    const entered = parseFloat(cInput);
    if (!entered || entered <= 0) {
      setCError("Enter your computed value in J/(kg·°C).");
      return;
    }
    const errPct = Math.abs(entered - mat.c) / mat.c;
    const cMeasured = computeC({ ms, mw, tInit: 20, tFinal });
    if (errPct <= TOL) {
      setStatus("success");
      setSaved(false);
      setNotes("");
      say(`✅ Correct! Your value ${entered.toFixed(0)} J/(kg·°C) is within range. (Accepted ≈ ${mat.c} J/(kg·°C).)`);
    } else {
      setStatus("failed");
      setCError(
        `Not quite — your value is ${((errPct - TOL) * 100).toFixed(0)}% off the accepted range. Re-check c = m𝓌·c𝓌·ΔT𝓌 / (mₛ·ΔTₛ). Tap Reset and re-measure.`
      );
    }
  }

  function reset() {
    haptic.light();
    clearCount();
    dropAnim.setValue(0);
    tempAnim.setValue(0);
    setDisplayTemp(20);
    setStatus("idle");
    setCInput("");
    setCError("");
    say("Bench reset. Press ‘Add hot solid’ to try again.");
  }

  async function saveReport() {
    haptic.light();
    const cMeasured = computeC({ ms, mw, tInit: 20, tFinal });
    const errPct = Math.abs((cMeasured || mat.c) - mat.c) / mat.c * 100;
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "p2-heat-energy-specific-heat",
      experimentTitle: experiment.title || "Specific Heat Capacity",
      topicId,
      date: new Date().toLocaleDateString(),
      material: mat.name,
      ms: parseFloat(ms.toFixed(3)),
      mw: parseFloat(mw.toFixed(3)),
      tInit: 20,
      tHot: 100,
      tFinal: parseFloat(tFinal.toFixed(2)),
      cMeasured: cMeasured ? parseFloat(cMeasured.toFixed(1)) : null,
      cAccepted: mat.c,
      errorPct: parseFloat(errPct.toFixed(1)),
      status: "success",
      summary: `${mat.name}: measured c ≈ ${cMeasured ? cMeasured.toFixed(0) : "?"} J/(kg·°C) (accepted ${mat.c}).`,
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); say("📝 Report saved to your phone."); }
    else say("Could not save the report. Please try again.");
  }

  const step = status === "idle" ? 0 : status === "heating" ? 1 : 2;

  useEffect(() => () => clearCount(), []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />
      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: ACCENT, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>
          {experiment.title || "Specific Heat Capacity"}
        </Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center", paddingVertical: 10, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.borderSoft, gap: 6 }}>
        {STEP_LABELS.map((l, i) => (
          <View key={l} style={{ alignItems: "center", marginHorizontal: 4 }}>
            <View style={{ width: 22, height: 22, borderRadius: 11, alignItems: "center", justifyContent: "center", backgroundColor: i < step ? ACCENT : i === step ? "#fed7aa" : theme.colors.border }}>
              <Text style={{ fontSize: 11, fontWeight: "800", color: i < step ? "#fff" : theme.colors.textMuted }}>{i < step ? "✓" : i + 1}</Text>
            </View>
            <Text style={{ fontSize: 9, color: theme.colors.textFaint, marginTop: 3, fontWeight: "600" }}>{l}</Text>
          </View>
        ))}
      </View>

      {/* ===== BENCH / STAGE ===== */}
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: theme.colors.surfaceMuted, padding: 16 }}>
        <View style={{ flexDirection: "row", alignItems: "flex-end", justifyContent: "center" }}>
          {/* thermometer */}
          <View style={{ marginRight: 18, marginBottom: 18 }}>
            <Thermometer h={150} temp={tempFill} color={ACCENT} />
            <Text style={{ textAlign: "center", fontSize: 13, fontWeight: "800", color: ACCENT, marginTop: 2 }}>
              {displayTemp} °C
            </Text>
          </View>

          {/* beaker + dropping solid */}
          <View style={{ position: "relative", width: 130, height: 150 }}>
            <Animated.View style={{ position: "absolute", left: 49, top: 6, transform: [{ translateY: solidTranslate }] }}>
              <View style={{ width: 32, height: 32, borderRadius: 7, backgroundColor: mat.color, borderWidth: 1.5, borderColor: "#475569" }} />
            </Animated.View>
            <View style={{ position: "absolute", bottom: 0, left: 0 }}>
              <Beaker w={130} h={140} fill={0.55} color="#60a5fa" />
            </View>
          </View>
        </View>

        <Text style={{ marginTop: 8, fontSize: 13, color: theme.colors.textMuted, fontWeight: "600" }}>
          {mat.name} ({cfg.ms} g) → {cfg.mw} g water @ 20 °C
        </Text>
      </View>

      {/* ===== CONTROL PANEL ===== */}
      <View style={{ backgroundColor: theme.colors.surface, borderTopWidth: 1, borderTopColor: theme.colors.border, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 16, paddingTop: 14, paddingBottom: 18, shadowColor: "#000", shadowOffset: { width: 0, height: -3 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 10 }}>
        <View style={{ backgroundColor: status === "failed" ? "#fef2f2" : status === "success" ? "#f0fdf4" : "#fff7ed", borderRadius: 12, padding: 12, borderWidth: 1, borderColor: status === "failed" ? "#fecaca" : status === "success" ? "#bbf7d0" : "#fed7aa", marginBottom: 12, minHeight: 58, justifyContent: "center" }}>
          <Text style={{ fontSize: 13, lineHeight: 19, color: theme.colors.text }}>{message}</Text>
        </View>

        {status === "failed" ? (
          <Btn label="↺ Reset Experiment" onPress={reset} accent="#64748b" full />
        ) : status === "success" ? (
          <>
            <Btn label="📝 View Report" onPress={() => setReportOpen(true)} accent={ACCENT} full />
            <TouchableOpacity onPress={reset} style={{ marginTop: 10, alignItems: "center", paddingVertical: 8 }}>
              <Text style={{ color: theme.colors.textMuted, fontWeight: "700", fontSize: 13 }}>↺ Reset Experiment</Text>
            </TouchableOpacity>
          </>
        ) : status === "measure" ? (
          <>
            <Text style={{ fontSize: 12, fontWeight: "700", color: theme.colors.textMuted, marginBottom: 6 }}>
              Final temp {tFinal.toFixed(1)} °C · solve for c (J/(kg·°C))
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TextInput
                style={{ flex: 1, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 10, padding: 10, fontSize: 15, color: theme.colors.text }}
                placeholder="your c value"
                keyboardType="numeric"
                value={cInput}
                onChangeText={(t) => { setCInput(t); setCError(""); }}
              />
              <TouchableOpacity onPress={verify} style={{ marginLeft: 8, backgroundColor: ACCENT, borderRadius: 10, paddingVertical: 12, paddingHorizontal: 16 }}>
                <Text style={{ color: "#fff", fontWeight: "800", fontSize: 14 }}>Verify</Text>
              </TouchableOpacity>
            </View>
            {cError ? <Text style={{ color: "#b91c1c", fontSize: 12, marginTop: 6, fontWeight: "600" }}>{cError}</Text> : null}
            <TouchableOpacity onPress={reset} style={{ marginTop: 10, alignItems: "center", paddingVertical: 6 }}>
              <Text style={{ color: theme.colors.textFaint, fontWeight: "700", fontSize: 12 }}>↺ Reset</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Btn label={status === "heating" ? "… Heating" : "⬇️ Add hot solid & stir"} onPress={addSolid} accent={ACCENT} full disabled={status === "heating"} />
          </>
        )}
      </View>

      <Modal visible={reportOpen} transparent animationType="slide" onRequestClose={() => setReportOpen(false)}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
          <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.45)", justifyContent: "flex-end" }}>
            <ScrollView style={{ maxHeight: "88%" }} contentContainerStyle={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 24, paddingBottom: 32 }} keyboardShouldPersistTaps="handled">
              <View style={{ width: 40, height: 4, backgroundColor: theme.colors.border, borderRadius: 2, alignSelf: "center", marginBottom: 18 }} />
              <Text style={{ fontSize: 26, textAlign: "center" }}>🎉</Text>
              <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>Specific Heat Measured!</Text>
              <View style={{ backgroundColor: theme.colors.surfaceMuted, borderRadius: 12, padding: 14, marginVertical: 14 }}>
                <Text style={{ fontSize: 13, color: theme.colors.text }}>• Solid: {mat.name} ({cfg.ms} g)</Text>
                <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 4 }}>• Water: {cfg.mw} g @ 20 °C</Text>
                <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 4 }}>• Final temp: <Text style={{ fontWeight: "800" }}>{tFinal.toFixed(1)} °C</Text></Text>
                <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 4 }}>• c (accepted): {mat.c} J/(kg·°C)</Text>
              </View>
              <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.text, marginBottom: 6 }}>Your report / observations</Text>
              <TextInput
                style={{ borderWidth: 1, borderColor: theme.colors.border, borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }}
                placeholder="e.g. The copper raised the water by 4.7 °C; c ≈ 390 J/(kg·°C), close to the table value."
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
      style={{
        width: full ? "100%" : undefined,
        backgroundColor: disabled ? "#e5e7eb" : accent,
        borderRadius: 11,
        paddingVertical: 12,
        alignItems: "center",
        justifyContent: "center",
        opacity: disabled ? 0.6 : 1,
      }}
    >
      <Text style={{ color: disabled ? "#94a3b8" : "#fff", fontWeight: "800", fontSize: 14 }} numberOfLines={1}>{label}</Text>
    </TouchableOpacity>
  );
}
