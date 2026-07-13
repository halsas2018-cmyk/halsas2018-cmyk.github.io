import React, { useState, useRef } from "react";
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
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { labStorage } from "../../../storage/labStorage";
import { HIDE_AT, THIOSULPHATE, ACID_VOLUME, rate } from "./rateData";

const GREEN = "#16a34a";
const GLASS = "#94a3b8";
const TOL = 1.5; // success window (s) around the true disappearance time

const STEP_LABELS = ["Thiosulphate", "Acid", "Timer", "Stop"];

export default function RateExperiment() {
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "kinetics";
  const cfg = route.params?.config;

  const conc = cfg?.concentration || 0.10;
  const concLabel = cfg?.concLabel || `${conc.toFixed(2)} mol/dm³`;
  const THIO = cfg?.thioVolume || THIOSULPHATE.volume;
  const ACIDV = cfg?.acidVolume || ACID_VOLUME;
  const PREDICTED = cfg?.target || 30;
  const TARGET = useRef(Math.max(2, Math.round((PREDICTED + (Math.random() * 1.2 - 0.6)) * 10) / 10)).current;
  const RUN_MS = (TARGET / HIDE_AT) * 1000;

  const [thioAdded, setThioAdded] = useState(false);
  const [acidAdded, setAcidAdded] = useState(false);
  const [started, setStarted] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState(`Place the conical flask on the tile, then add ${THIO} mL of sodium thiosulphate.`);

  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const cloud = useRef(new Animated.Value(0)).current;
  const liquidIn = useRef(new Animated.Value(0)).current;
  const acidBottleY = useRef(new Animated.Value(70)).current;
  const acidD1Y = useRef(new Animated.Value(0)).current;
  const acidD1O = useRef(new Animated.Value(0)).current;
  const acidD2Y = useRef(new Animated.Value(0)).current;
  const acidD2O = useRef(new Animated.Value(0)).current;
  const b1 = useRef(new Animated.Value(0)).current;
  const b2 = useRef(new Animated.Value(0)).current;
  const b3 = useRef(new Animated.Value(0)).current;
  const b4 = useRef(new Animated.Value(0)).current;
  const b5 = useRef(new Animated.Value(0)).current;
  const startRef = useRef(0);
  const timerRef = useRef(null);

  // clear pale-blue solution → milky white suspension as sulphur precipitates
  const liquidColor = cloud.interpolate({
    inputRange: [0, 0.45, 1],
    outputRange: ["rgba(186,230,253,0.6)", "rgba(226,232,240,0.9)", "rgba(255,255,255,0.97)"],
  });
  const crossOpacity = cloud.interpolate({ inputRange: [0, HIDE_AT, 1], outputRange: [1, 0.12, 0] });
  const bubbles = [b1, b2, b3, b4, b5];

  const say = (m) => setMessage(m);
  const animTo = (a, v, d = 600) =>
    Animated.timing(a, { toValue: v, duration: d, easing: Easing.out(Easing.quad), useNativeDriver: false }).start();

  function startBubbles() {
    bubbles.forEach((b, i) => {
      b.setValue(0);
      Animated.loop(
        Animated.sequence([
          Animated.delay(i * 280),
          Animated.timing(b, { toValue: 1, duration: 1300, easing: Easing.in(Easing.quad), useNativeDriver: true }),
        ])
      ).start();
    });
  }
  function stopBubbles() {
    bubbles.forEach((b) => b.stopAnimation());
  }
  function clearTimer() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }
  function dropAcid(y, o) {
    return Animated.sequence([
      Animated.timing(o, { toValue: 1, duration: 60, useNativeDriver: true }),
      Animated.timing(y, { toValue: 52, duration: 320, easing: Easing.in(Easing.quad), useNativeDriver: true }),
      Animated.timing(o, { toValue: 0, duration: 120, useNativeDriver: true }),
    ]);
  }

  function addThio() {
    if (thioAdded) return;
    setThioAdded(true);
    animTo(liquidIn, 1, 500);
    say(`✓ ${THIO} mL sodium thiosulphate added (clear solution). Now add ${ACIDV} mL of ${concLabel} HCl.`);
  }
  function addAcid() {
    if (!thioAdded) return say("Add the sodium thiosulphate first! 💧");
    if (acidAdded) return;
    setAcidAdded(true);
    Animated.sequence([
      Animated.timing(acidBottleY, { toValue: 0, duration: 300, useNativeDriver: false }),
      dropAcid(acidD1Y, acidD1O),
      Animated.delay(150),
      dropAcid(acidD2Y, acidD2O),
      Animated.timing(acidBottleY, { toValue: 70, duration: 300, useNativeDriver: false }),
    ]).start();
    say(`✓ ${ACIDV} mL ${concLabel} HCl poured in. The reaction begins — start the stopwatch! ⏱️`);
  }
  function startTimer() {
    if (!acidAdded) return say("Add the acid first to start the reaction! 🧪");
    if (started) return;
    setStarted(true);
    setStatus("running");
    setElapsed(0);
    startRef.current = Date.now();
    animTo(cloud, 1, RUN_MS);
    startBubbles();
    timerRef.current = setInterval(() => {
      const e = Math.round(((Date.now() - startRef.current) / 1000) * 10) / 10;
      setElapsed(e);
      if (e > TARGET + 4) stop(e);
    }, 100);
    say("Watch the cross — stop the watch the instant it disappears! 🔍");
  }

  function stop(autoE) {
    clearTimer();
    stopBubbles();
    const e = autoE != null ? autoE : elapsed;
    if (e < TARGET - TOL) {
      setStatus("failed");
      animTo(cloud, Math.min((e / TARGET) * HIDE_AT, HIDE_AT * 0.6));
      return say(`⏱️ Too early! At ${e.toFixed(1)} s the cross was still clearly visible (it vanishes near ${TARGET.toFixed(1)} s). Tap Reset to retry.`);
    }
    if (e > TARGET + TOL) {
      setStatus("failed");
      animTo(cloud, 1, 300);
      return say(`💥 Too late! You stopped at ${e.toFixed(1)} s but the cross vanished near ${TARGET.toFixed(1)} s — the solution was already fully cloudy. Tap Reset to retry.`);
    }
    setStatus("success");
    setSaved(false);
    setNotes("");
    say("✅ Perfect timing! The cross just disappeared. Tap 'View Report' to write it up.");
  }

  function reset() {
    clearTimer();
    stopBubbles();
    setThioAdded(false);
    setAcidAdded(false);
    setStarted(false);
    setElapsed(0);
    setStatus("idle");
    cloud.setValue(0);
    liquidIn.setValue(0);
    acidBottleY.setValue(70);
    [acidD1O, acidD2O].forEach((a) => a.setValue(0));
    [acidD1Y, acidD2Y].forEach((a) => a.setValue(0));
    bubbles.forEach((b) => b.setValue(0));
    say(`Bench reset. Add ${THIO} mL of sodium thiosulphate to begin.`);
  }

  async function saveReport() {
    const e = Math.round(elapsed * 10) / 10;
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "thiosulphate",
      experimentTitle: experiment.title || "Rate of Reaction",
      topicId,
      date: new Date().toLocaleDateString(),
      concentrationValue: conc,
      concentrationLabel: concLabel,
      timeRecorded: e,
      predictedTime: PREDICTED,
      rate: rate(Math.max(e, 0.1)),
      status: "success",
      summary: `Cross vanished at ${e.toFixed(1)} s · ${concLabel}`,
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) {
      setSaved(true);
      say("📝 Report saved to your phone. Review it any time from the Lab hub.");
    } else say("Could not save the report. Please try again.");
  }

  const step = thioAdded ? (acidAdded ? (started ? 3 : 2) : 1) : 0;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#eef2f7" }} edges={["top", "left", "right"]}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" translucent={false} />

      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: "#fff", borderBottomWidth: 1, borderBottomColor: "#e5e7eb" }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: GREEN, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: "#111827", marginRight: 40 }} numberOfLines={1}>
          {experiment.title || "Rate of Reaction"}
        </Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center", paddingVertical: 10, backgroundColor: "#fff", borderBottomWidth: 1, borderBottomColor: "#f1f5f9", gap: 6 }}>
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

        {/* White tile with the cross, sitting UNDER the flask */}
        <View style={{ position: "absolute", bottom: 56, width: 156, height: 74, backgroundColor: "#fff", borderRadius: 10, borderWidth: 1, borderColor: "#e5e7eb", alignItems: "center", justifyContent: "center", shadowColor: "#000", shadowOpacity: 0.06, shadowRadius: 6, elevation: 3 }}>
          <Animated.Text style={{ fontSize: 44, fontWeight: "900", color: "#111827", opacity: crossOpacity }}>✕</Animated.Text>
        </View>

        {/* Acid bottle (rises & pours when acid is added) */}
        <Animated.View style={{ position: "absolute", left: 16, top: 54, transform: [{ translateY: acidBottleY }], alignItems: "center" }}>
          <View style={{ width: 30, height: 42, backgroundColor: "#fff", borderWidth: 2, borderColor: GLASS, borderRadius: 6, alignItems: "center", justifyContent: "flex-end", paddingBottom: 4 }}>
            <View style={{ width: 16, height: 18, backgroundColor: "#0ea5e9", borderRadius: 2 }} />
          </View>
          <Text style={{ fontSize: 8, color: "#64748b", marginTop: 2, fontWeight: "700" }}>HCl</Text>
        </Animated.View>
        <Animated.View style={{ position: "absolute", left: 40, top: 100, width: 7, height: 11, borderRadius: 4, backgroundColor: "#0ea5e9", opacity: acidD1O, transform: [{ translateY: acidD1Y }] }} />
        <Animated.View style={{ position: "absolute", left: 45, top: 100, width: 7, height: 11, borderRadius: 4, backgroundColor: "#0ea5e9", opacity: acidD2O, transform: [{ translateY: acidD2Y }] }} />

        {/* Conical (Erlenmeyer) flask drawn with a glass cone + neck */}
        <View style={{ width: 124, height: 152, alignItems: "center", justifyContent: "flex-end", marginTop: 8 }}>
          {/* glass cone body */}
          <View style={{ position: "absolute", bottom: 0, width: 0, height: 0, borderLeftWidth: 62, borderRightWidth: 62, borderBottomWidth: 104, borderLeftColor: "transparent", borderRightColor: "transparent", borderBottomColor: "rgba(148,163,184,0.42)" }} />
          {/* graduation marks */}
          {[0.32, 0.5, 0.68].map((g) => (
            <View key={g} style={{ position: "absolute", right: 14, bottom: 104 * g, width: 12, height: 1.5, backgroundColor: "rgba(148,163,184,0.75)" }} />
          ))}
          {/* liquid (coloured cone) */}
          <Animated.View style={{ position: "absolute", bottom: 1, width: 0, height: 0, borderLeftWidth: 54, borderRightWidth: 54, borderBottomWidth: 90, borderLeftColor: "transparent", borderRightColor: "transparent", borderBottomColor: liquidColor, opacity: liquidIn }} />
          {/* rising bubbles */}
          {bubbles.map((b, i) => (
            <Animated.View
              key={i}
              style={{
                position: "absolute",
                left: 48 + i * 7,
                bottom: 6,
                width: 6,
                height: 6,
                borderRadius: 3,
                backgroundColor: "#ffffff",
                opacity: b.interpolate({ inputRange: [0, 1], outputRange: [0.9, 0] }),
                transform: [{ translateY: b.interpolate({ inputRange: [0, 1], outputRange: [0, -72] }) }],
              }}
            />
          ))}
          {/* neck */}
          <View style={{ position: "absolute", bottom: 104, width: 30, height: 26, borderWidth: 3, borderColor: GLASS, borderBottomWidth: 0, borderTopLeftRadius: 5, borderTopRightRadius: 5, backgroundColor: "rgba(255,255,255,0.55)" }} />
          {/* rim */}
          <View style={{ position: "absolute", bottom: 130, width: 36, height: 6, backgroundColor: GLASS, borderRadius: 3 }} />
        </View>

        <View style={{ position: "absolute", right: 22, top: 12, backgroundColor: "#fff", borderWidth: 1, borderColor: "#e2e8f0", borderRadius: 12, paddingVertical: 8, paddingHorizontal: 14, alignItems: "center", elevation: 2 }}>
          <Text style={{ fontSize: 9, color: "#94a3b8", fontWeight: "700" }}>STOPWATCH</Text>
          <Text style={{ fontSize: 22, fontWeight: "900", color: started ? "#0284c7" : "#cbd5e1" }}>{elapsed.toFixed(1)}</Text>
          <Text style={{ fontSize: 9, color: "#94a3b8", fontWeight: "700" }}>s elapsed</Text>
        </View>

        <Text style={{ fontSize: 11, color: "#64748b", fontWeight: "700", marginTop: 14 }}>
          {status === "running"
            ? elapsed >= TARGET - TOL
              ? "Cross almost gone… STOP now!"
              : "Watching the cross…"
            : acidAdded
            ? "Acid added — start the timer"
            : thioAdded
            ? "Thiosulphate added"
            : "Empty flask on the tile"}
        </Text>
      </View>

      {/* ===== CONTROL PANEL ===== */}
      <View style={{ backgroundColor: "#fff", borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 16, paddingTop: 14, paddingBottom: 18, shadowColor: "#000", shadowOffset: { width: 0, height: -3 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 10 }}>
        <View style={{ backgroundColor: status === "failed" ? "#fef2f2" : status === "success" ? "#f0fdf4" : "#eff6ff", borderRadius: 12, padding: 12, borderWidth: 1, borderColor: status === "failed" ? "#fecaca" : status === "success" ? "#bbf7d0" : "#bfdbfe", marginBottom: 12, minHeight: 58, justifyContent: "center" }}>
          <Text style={{ fontSize: 13, lineHeight: 19, color: "#1f2937" }}>{message}</Text>
        </View>

        {status === "running" ? (
          <>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
              <Text style={{ fontSize: 14, color: "#475569", fontWeight: "700" }}>Elapsed: </Text>
              <Text style={{ fontSize: 26, fontWeight: "900", color: "#0284c7" }}>{elapsed.toFixed(1)} s</Text>
            </View>
            <TouchableOpacity onPress={() => stop()} activeOpacity={0.85} style={{ backgroundColor: "#dc2626", borderRadius: 12, paddingVertical: 14, alignItems: "center" }}>
              <Text style={{ color: "#fff", fontWeight: "800", fontSize: 15 }}>⏹ Stop — cross gone</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={reset} style={{ marginTop: 10, alignItems: "center", paddingVertical: 8 }}>
              <Text style={{ color: "#64748b", fontWeight: "700", fontSize: 13 }}>↺ Reset Experiment</Text>
            </TouchableOpacity>
          </>
        ) : status === "idle" ? (
          <View style={{ flexDirection: "row" }}>
            <Btn label={`① ${THIO} mL Na₂S₂O₃`} onPress={addThio} disabled={thioAdded} />
            <Btn label={`② ${ACIDV} mL HCl`} onPress={addAcid} disabled={!thioAdded || acidAdded} accent="#0ea5e9" />
            <Btn label="③ Start" onPress={startTimer} disabled={!acidAdded || started} accent={GREEN} />
          </View>
        ) : status === "success" ? (
          <>
            <Btn label="📝 View Report" onPress={() => setReportOpen(true)} accent={GREEN} full />
            <TouchableOpacity onPress={reset} style={{ marginTop: 10, alignItems: "center", paddingVertical: 8 }}>
              <Text style={{ color: "#64748b", fontWeight: "700", fontSize: 13 }}>↺ Reset Experiment</Text>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity onPress={reset} style={{ alignItems: "center", paddingVertical: 12 }}>
            <Text style={{ color: "#64748b", fontWeight: "700", fontSize: 14 }}>↺ Reset Experiment</Text>
          </TouchableOpacity>
        )}
      </View>

      <Modal visible={reportOpen} transparent animationType="slide" onRequestClose={() => setReportOpen(false)}>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.45)", justifyContent: "flex-end" }}>
          <ScrollView style={{ maxHeight: "88%" }} contentContainerStyle={{ backgroundColor: "#fff", borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 24, paddingBottom: 32 }} keyboardShouldPersistTaps="handled">
            <View style={{ width: 40, height: 4, backgroundColor: "#d1d5db", borderRadius: 2, alignSelf: "center", marginBottom: 18 }} />
            <Text style={{ fontSize: 26, textAlign: "center" }}>🎉</Text>
            <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: "#111827", marginTop: 6 }}>Experiment Complete!</Text>
            <View style={{ backgroundColor: "#f8fafc", borderRadius: 12, padding: 14, marginVertical: 14 }}>
              <Text style={{ fontSize: 13, color: "#374151" }}>• Acid concentration: {concLabel}</Text>
              <Text style={{ fontSize: 13, color: "#374151", marginTop: 4 }}>• {THIO} mL Na₂S₂O₃ + {ACIDV} mL HCl</Text>
              <Text style={{ fontSize: 13, color: "#374151", marginTop: 4 }}>• Time recorded: <Text style={{ fontWeight: "800" }}>{elapsed.toFixed(1)} s</Text></Text>
              <Text style={{ fontSize: 13, color: "#374151", marginTop: 4 }}>• Predicted time: {PREDICTED.toFixed(1)} s</Text>
              <Text style={{ fontSize: 13, color: "#374151", marginTop: 4 }}>• Rate = 1 ÷ t = <Text style={{ fontWeight: "800" }}>{rate(Math.max(elapsed, 0.1)).toFixed(3)} s⁻¹</Text></Text>
            </View>
            <Text style={{ fontSize: 12, fontWeight: "600", color: "#374151", marginBottom: 6 }}>Your report / observations</Text>
            <TextInput
              style={{ borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 10, padding: 12, fontSize: 14, color: "#111827", height: 90, textAlignVertical: "top" }}
              placeholder="e.g. The cross disappeared as the solution turned milky. Higher concentration → shorter time."
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
