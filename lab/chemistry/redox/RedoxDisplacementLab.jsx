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
import { DISPLACE_METALS, willDisplace, displacementEquations } from "./redox-data";
import { ElectrodeCell, MetalStrip } from "../../components/svgKit";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";

const GREEN = "#16a34a";
const GLASS = "#94a3b8";
const REACTION_MS = 6000; // time for a visible coating to form
const NORX_MS = 2600; // wait before confirming "no reaction"
const STEP_LABELS = ["Solution", "Strip", "Observe"];

export default function RedoxDisplacementLab() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "redox";
  const cfg = route.params?.config;

  const added = cfg?.addedMetal || DISPLACE_METALS[4]; // Cu
  const salt = cfg?.saltMetal || DISPLACE_METALS[5]; // Ag (no displacement)
  const predicted = cfg?.predicted != null ? cfg?.predicted : null;

  const sameMetal = added.id === salt.id;
  const occurs = willDisplace(added, salt);
  const eq = occurs ? displacementEquations(added, salt) : null;

  const [solutionAdded, setSolutionAdded] = useState(false);
  const [stripAdded, setStripAdded] = useState(false);
  const [progress, setProgress] = useState(0); // 0 → 1
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState(`Pour the ${salt.name} solution into the beaker, then dip the ${added.name} strip.`);

  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const soln = useRef(new Animated.Value(0)).current; // solution colour amount (0 → 0.85)
  const coating = useRef(new Animated.Value(0)).current; // strip coating (opacity crossfade → native false)
  const timerRef = useRef(null);

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

  // How much colour remains at the end of a displacement (blue Cu²⁺ fades most).
  const fadedLevel = salt.ionColor === "#1d4ed8" ? 0.22 : 0.5;

  function clearTimer() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  function pourSolution() {
    if (solutionAdded) return;
    setSolutionAdded(true);
    animTo(soln, 0.85, 500);
    say(`✓ ${salt.name}²⁺ solution poured in (${salt.ionColor === "#1d4ed8" ? "blue" : "pale"} colour). Now dip the ${added.name} strip.`);
  }

  function insertStrip() {
    haptic.light();
    if (!solutionAdded) return say("Pour the solution first! 🧪");
    if (stripAdded) return;
    setStripAdded(true);

    if (sameMetal) {
      setStatus("failed");
      return say(`💥 The strip and the solution are both ${added.name} — there is nothing to displace. Use a DIFFERENT metal for the strip or the salt. Tap Reset.`);
    }

    if (occurs) {
      setStatus("running");
      setProgress(0);
      animTo(coating, 1, REACTION_MS, false);
      animTo(soln, fadedLevel, REACTION_MS, false);
      let start = Date.now();
      timerRef.current = setInterval(() => {
        const p = Math.min((Date.now() - start) / REACTION_MS, 1);
        setProgress(Math.round(p * 100) / 100);
        if (p >= 1) {
          clearTimer();
          setStatus("success");
          setSaved(false);
          setNotes("");
          say(`✅ Done! ${added.name} displaced ${salt.name}. The strip is now coated with ${salt.name}, and the solution lost its colour.`);
        }
      }, 100);
    } else {
      // No displacement possible — wait, then report "no change".
      setStatus("running");
      let start = Date.now();
      timerRef.current = setInterval(() => {
        const p = Math.min((Date.now() - start) / NORX_MS, 1);
        setProgress(Math.round(p * 100) / 100);
        if (p >= 1) {
          clearTimer();
          setStatus("success");
          setSaved(false);
          setNotes("");
          say(`✅ Observation complete: NO change. ${added.name} is LESS reactive than ${salt.name}, so it cannot displace ${salt.symbol}²⁺. The strip and solution stay the same.`);
        }
      }, 100);
    }
  }

  function reset() {
    clearTimer();
    setSolutionAdded(false);
    setStripAdded(false);
    setProgress(0);
    setStatus("idle");
    soln.setValue(0);
    coating.setValue(0);
    say(`Bench reset. Pour the ${salt.name} solution to begin.`);
  }

  async function saveReport() {
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "metal-displacement",
      experimentTitle: experiment.title || "Metal Displacement Reactions",
      topicId,
      date: new Date().toLocaleDateString(),
      addedMetal: added.name,
      saltMetal: salt.name,
      prediction: predicted == null ? "not recorded" : predicted ? "displacement" : "no displacement",
      predictionCorrect: predicted == null ? null : predicted === occurs,
      occurred: occurs,
      result: occurs
        ? `${added.name} displaced ${salt.name}. The strip gained a ${salt.name} coating.`
        : `No displacement: ${added.name} is less reactive than ${salt.name}.`,
      status: "success",
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); say("📝 Report saved to your phone. Review it any time from the Lab hub."); }
    else say("Could not save the report. Please try again.");
  }

  const step = solutionAdded ? (stripAdded ? 2 : 1) : 0;
  const running = status === "running";

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />

      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: GREEN, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>
          {experiment.title || "Metal Displacement Reactions"}
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
        {/* Beaker / cell (vector glass + animated solution) */}
        <View style={{ width: 170, height: 170, position: "relative", alignItems: "center", justifyContent: "flex-end" }}>
          <ElectrodeCell w={170} h={170} fill={0} color={salt.ionColor} dip={false} />
          <Animated.View style={{ position: "absolute", bottom: 10, left: 10, right: 10, top: 40, backgroundColor: salt.ionColor, opacity: soln }} />

          {/* The metal strip (coating overlays the deposited metal) */}
          <View style={{ position: "absolute", bottom: 18, width: 26, height: 96, alignItems: "center", justifyContent: "center" }}>
            <View style={{ width: 26, height: 96, alignItems: "center", justifyContent: "center" }}>
              <View style={{ transform: [{ rotate: "90deg" }] }}>
                <MetalStrip w={96} h={26} color={added.color} />
                <Animated.View style={{ position: "absolute", inset: 0, borderRadius: 3, backgroundColor: salt.color, opacity: coating }} />
              </View>
            </View>
            <Text style={{ position: "absolute", fontSize: 12, fontWeight: "800", color: "#0f172a" }}>{added.symbol}</Text>
          </View>
        </View>

        <Text style={{ fontSize: 11, color: "#64748b", fontWeight: "700", marginTop: 14 }}>
          {running
            ? occurs
              ? `Reacting… coating ${Math.round(progress * 100)}%`
              : `Watching… ${Math.round(progress * 100)}%`
            : status === "success"
            ? occurs
              ? `${salt.name} coating formed ✓`
              : "No change — no displacement ✓"
            : solutionAdded
            ? "Solution in — dip the strip"
            : "Empty beaker"}
        </Text>
      </View>

      {/* ===== CONTROL PANEL ===== */}
      <View style={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 16, paddingTop: 14, paddingBottom: 18, shadowColor: "#000", shadowOffset: { width: 0, height: -3 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 10 }}>
        <View style={{ backgroundColor: status === "failed" ? "#fef2f2" : status === "success" ? "#f0fdf4" : "#eff6ff", borderRadius: 12, padding: 12, borderWidth: 1, borderColor: status === "failed" ? "#fecaca" : status === "success" ? "#bbf7d0" : "#bfdbfe", marginBottom: 12, minHeight: 58, justifyContent: "center" }}>
          <Text style={{ fontSize: 13, lineHeight: 19, color: theme.colors.textMuted }}>{message}</Text>
        </View>

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
              <Btn label={`① ${salt.symbol}²⁺ solution`} onPress={pourSolution} disabled={solutionAdded} accent="#0ea5e9" />
              <Btn label={`② ${added.symbol} strip`} onPress={insertStrip} disabled={!solutionAdded || stripAdded} accent={added.color} />
            </View>
            {(status === "failed" || solutionAdded) && (
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
            <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>Observation Recorded!</Text>
            <View style={{ backgroundColor: theme.colors.surfaceMuted, borderRadius: 12, padding: 14, marginVertical: 14 }}>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>• Strip metal: {added.name} ({added.symbol})</Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Salt solution: {salt.name}²⁺</Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Outcome: <Text style={{ fontWeight: "800" }}>{occurs ? `${added.symbol} displaced ${salt.symbol}` : "No displacement"}</Text></Text>
              {eq ? (
                <Text style={{ fontSize: 12, color: theme.colors.textMuted, marginTop: 4 }}>• {eq.overall}</Text>
              ) : (
                <Text style={{ fontSize: 12, color: theme.colors.textMuted, marginTop: 4 }}>• {added.symbol} is less reactive than {salt.symbol}.</Text>
              )}
              {predicted != null ? (
                <Text style={{ fontSize: 12, color: predicted === occurs ? GREEN : "#dc2626", marginTop: 4, fontWeight: "700" }}>
                  • Your prediction was {predicted === occurs ? "correct ✓" : "wrong ✗"}.
                </Text>
              ) : null}
            </View>
            <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.textMuted, marginBottom: 6 }}>Your report / observations</Text>
            <TextInput
              style={{ borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }}
              placeholder={occurs ? "e.g. The strip turned coppery; the blue solution faded as Zn²⁺ replaced Cu²⁺." : "e.g. Nothing changed — Cu cannot displace Ag because Cu is less reactive."}
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
