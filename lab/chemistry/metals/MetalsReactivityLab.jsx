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
import { DISPLACEMENT_METALS } from "./metals-data";
import { Beaker, MetalStrip } from "../../components/svgKit";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";

const GREEN = "#16a34a";
const GLASS = "#94a3b8";

const STEP_LABELS = ["Solution", "Strip", "Observe", "Record"];

export default function MetalsReactivityLab() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "metals";
  const cfg = route.params?.config;

  const stripMetal = cfg?.stripMetal || DISPLACEMENT_METALS.find((m) => m.id === "zn");
  const saltMetal = cfg?.saltMetal || DISPLACEMENT_METALS.find((m) => m.id === "cu");
  const WILL = cfg?.willDisplace != null ? cfg.willDisplace : stripMetal.id === "zn" && saltMetal.id === "cu";

  const [solutionAdded, setSolutionAdded] = useState(false);
  const [stripAdded, setStripAdded] = useState(false);
  const [observed, setObserved] = useState(false);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState(`Half-fill the beaker with ${saltMetal.symbol} salt solution, then dip the ${stripMetal.symbol} strip.`);

  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const stripY = useRef(new Animated.Value(0)).current;
  const shift = useRef(new Animated.Value(0)).current;
  const depositO = useRef(new Animated.Value(0)).current;

  const solutionColor = shift.interpolate({
    inputRange: [0, 1],
    outputRange: [saltMetal.ionColor, WILL ? stripMetal.ionColor : saltMetal.ionColor],
  });

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

  function addSolution() {
    if (solutionAdded) return;
    setSolutionAdded(true);
    say(`✓ ${saltMetal.symbol} salt solution added (${saltMetal.ionColor === "#3b82f6" ? "blue" : "colourless"}). Now dip the ${stripMetal.symbol} strip.`);
  }

  function addStrip() {
    haptic.light();
    if (!solutionAdded) return say("Add the salt solution first! 🧪");
    if (stripAdded) return;
    setStripAdded(true);
    animTo(stripY, 1, 500, false);
    Animated.delay(520).start(() => {
      if (WILL) {
        animTo(shift, 1, 900, false);
        animTo(depositO, 1, 900, false);
        setObserved(true);
        say(`🔬 Displacement! ${stripMetal.symbol} dissolves and ${saltMetal.symbol} deposits on the strip. The solution colour changes. Record your observation.`);
      } else {
        setObserved(true);
        say(`🔬 No change — the ${stripMetal.symbol} strip did nothing in ${saltMetal.symbol} solution (it is less reactive). Record your observation.`);
      }
    });
  }

  function record(answer) {
    if (!observed) return;
    if (answer === WILL) {
      setStatus("success");
      setSaved(false);
      setNotes("");
      say("✅ Correct! Your observation matches the reactivity series.");
    } else {
      setStatus("failed");
      say(`💥 Not quite. ${WILL ? `${stripMetal.symbol} is more reactive than ${saltMetal.symbol}, so displacement DID occur.` : `${stripMetal.symbol} is less reactive than ${saltMetal.symbol}, so NO displacement occurred.`} Tap Reset to try again.`);
    }
  }

  function reset() {
    setSolutionAdded(false);
    setStripAdded(false);
    setObserved(false);
    setStatus("idle");
    stripY.setValue(0); shift.setValue(0); depositO.setValue(0);
    say(`Bench reset. Add ${saltMetal.symbol} solution to begin.`);
  }

  async function saveReport() {
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "reactivity-series",
      experimentTitle: experiment.title || "Reactivity Series Displacement",
      topicId,
      date: new Date().toLocaleDateString(),
      stripMetal: stripMetal.name,
      saltMetal: saltMetal.name,
      displacement: WILL,
      result: WILL ? `${stripMetal.symbol} displaced ${saltMetal.symbol}` : `No reaction`,
      status: "success",
      summary: WILL ? `${stripMetal.symbol} (more reactive) displaced ${saltMetal.symbol}.` : `${stripMetal.symbol} (less reactive) — no displacement.`,
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); say("📝 Report saved to your phone. Review it any time from the Lab hub."); }
    else say("Could not save the report. Please try again.");
  }

  const step = solutionAdded ? (stripAdded ? (observed ? 3 : 2) : 1) : 0;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />

      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: GREEN, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>
          {experiment.title || "Reactivity Series Displacement"}
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
        <View style={{ position: "absolute", bottom: 52, width: "100%", height: 2, backgroundColor: "#d1d5db" }} />

        {/* Beaker (vector glass + animated solution) */}
        <View style={{ width: 120, height: 140, alignItems: "center", justifyContent: "flex-end", position: "relative" }}>
          <Beaker w={120} h={140} fill={0} />
          <Animated.View style={{ position: "absolute", bottom: 10, left: 8, right: 8, height: 96, backgroundColor: solutionColor }} />
          {/* Metal strip (lowers into solution) */}
          <Animated.View
            style={{
              position: "absolute",
              top: -8,
              transform: [{ translateY: stripY.interpolate({ inputRange: [0, 1], outputRange: [0, 40] }) }],
            }}
          >
            <View style={{ width: 14, height: 70, alignItems: "center", justifyContent: "center" }}>
              <View style={{ transform: [{ rotate: "90deg" }] }}>
                <MetalStrip w={70} h={14} color={stripMetal.metalColor} />
                <Animated.View style={{ position: "absolute", inset: 0, borderRadius: 3, backgroundColor: saltMetal.metalColor, opacity: depositO }} />
              </View>
            </View>
          </Animated.View>
        </View>

        <Text style={{ fontSize: 11, color: "#64748b", fontWeight: "700", marginTop: 14 }}>
          {!solutionAdded ? "Empty beaker" : !observed ? `${stripMetal.symbol} strip dipping…` : WILL ? `${saltMetal.symbol} depositing on ${stripMetal.symbol} ✓` : "No visible change"}
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
        ) : !observed ? (
          <View style={{ flexDirection: "row" }}>
            <Btn label={`① ${saltMetal.symbol} solution`} onPress={addSolution} disabled={solutionAdded} />
            <Btn label={`② Add ${stripMetal.symbol} strip`} onPress={addStrip} disabled={!solutionAdded || stripAdded} accent={GREEN} />
          </View>
        ) : (
          <>
            <Text style={{ fontSize: 12, fontWeight: "800", color: theme.colors.textMuted, textAlign: "center", marginBottom: 8 }}>Did a displacement reaction occur?</Text>
            <View style={{ flexDirection: "row" }}>
              <Btn label="Yes — reaction" onPress={() => record(true)} accent="#dc2626" />
              <Btn label="No — no change" onPress={() => record(false)} accent="#64748b" />
            </View>
            <TouchableOpacity onPress={reset} style={{ marginTop: 10, alignItems: "center", paddingVertical: 8 }}>
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
            <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>Observation Recorded!</Text>
            <View style={{ backgroundColor: theme.colors.surfaceMuted, borderRadius: 12, padding: 14, marginVertical: 14 }}>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>• Dipped: {stripMetal.name} ({stripMetal.symbol}) strip</Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• In: {saltMetal.name} ({saltMetal.symbol}) solution</Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Result: <Text style={{ fontWeight: "800" }}>{WILL ? `${stripMetal.symbol} displaced ${saltMetal.symbol}` : "No reaction"}</Text></Text>
            </View>
            <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.textMuted, marginBottom: 6 }}>Your report / observations</Text>
            <TextInput
              style={{ borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }}
              placeholder="e.g. The blue solution faded as copper deposited on the zinc strip — Zn is above Cu."
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
