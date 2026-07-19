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
import { RUST_CONDITIONS } from "./metals-data";
import { TestTube, Nail } from "../../components/svgKit";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";

const GREEN = "#16a34a";
const GLASS = "#94a3b8";
const STEEL = "#b0b0b0";
const RUST = "#c2410e";

const STEP_LABELS = ["Nail", "Seal", "Wait", "Record"];

export default function MetalsRustingLab() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "metals";
  const cfg = route.params?.config;

  const condition = cfg?.condition || RUST_CONDITIONS[0];
  const WILL = cfg?.willRust != null ? cfg.willRust : condition.willRust;

  const [nailPlaced, setNailPlaced] = useState(false);
  const [sealed, setSealed] = useState(false);
  const [running, setRunning] = useState(false);
  const [observed, setObserved] = useState(false);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState(`Place an iron nail in the test tube, seal it for the "${condition.label}" condition, then leave it.`);

  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const rust = useRef(new Animated.Value(0)).current;
  const waterO = useRef(new Animated.Value(0)).current;

  const nailColor = rust.interpolate({
    inputRange: [0, 1],
    outputRange: [STEEL, WILL ? RUST : STEEL],
  });
  const showWater = condition.id === "air_water" || condition.id === "salt_water";

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

  function placeNail() {
    if (nailPlaced) return;
    setNailPlaced(true);
    say(`✓ Iron nail placed. Now seal the tube for the "${condition.label}" condition.`);
  }
  function seal() {
    if (!nailPlaced) return say("Place the iron nail first! 🔩");
    if (sealed) return;
    setSealed(true);
    if (showWater) animTo(waterO, 1, 400, false);
    say(`✓ Tube sealed: ${condition.label}. Leave it and watch for rust.`);
  }
  function wait() {
    haptic.light();
    if (!sealed) return say("Seal the tube first! 🧷");
    if (running || observed) return;
    setRunning(true);
    animTo(rust, 1, 1800, false);
    Animated.delay(1850).start(() => {
      setRunning(false);
      setObserved(true);
      if (WILL) say("🔬 The nail is covered in orange-brown rust! Record your observation.");
      else say("🔬 The nail looks unchanged — no rust formed. Record your observation.");
    });
  }

  function record(answer) {
    if (!observed) return;
    if (answer === WILL) {
      setStatus("success");
      setSaved(false);
      setNotes("");
      say("✅ Correct! Your observation matches the rusting rule.");
    } else {
      setStatus("failed");
      say(`💥 Not quite. Under "${condition.label}", the nail ${WILL ? "DID rust (both oxygen and water were present)" : "did NOT rust (one of oxygen or water was kept out)"}. Tap Reset to try again.`);
    }
  }

  function reset() {
    setNailPlaced(false);
    setSealed(false);
    setRunning(false);
    setObserved(false);
    setStatus("idle");
    rust.setValue(0); waterO.setValue(0);
    say(`Bench reset. Place the nail for the "${condition.label}" condition.`);
  }

  async function saveReport() {
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "rusting",
      experimentTitle: experiment.title || "Rusting & Corrosion Prevention",
      topicId,
      date: new Date().toLocaleDateString(),
      condition: condition.label,
      willRust: WILL,
      result: WILL ? "Rusted" : "No rust",
      status: "success",
      summary: WILL ? `Rusted under ${condition.label} (O₂ + H₂O present).` : `No rust under ${condition.label} (water or air excluded).`,
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); say("📝 Report saved to your phone. Review it any time from the Lab hub."); }
    else say("Could not save the report. Please try again.");
  }

  const step = nailPlaced ? (sealed ? (observed ? 3 : 2) : 1) : 0;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />

      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: GREEN, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>
          {experiment.title || "Rusting & Corrosion Prevention"}
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

        {/* Test tube (vector glass + water + rusting nail) */}
        <View style={{ width: 64, height: 150, position: "relative", alignItems: "center" }}>
          <TestTube w={64} h={150} fill={0} />
          <Animated.View style={{ position: "absolute", bottom: 0, left: 6, right: 6, height: 40, backgroundColor: "#7dd3fc", opacity: waterO }} />
          {/* Iron nail (rust crossfade) */}
          <Animated.View style={{ position: "absolute", bottom: showWater ? 46 : 14, width: 16, height: 90, transform: [{ rotate: "18deg" }] }}>
            <Animated.View style={{ position: "absolute", opacity: rust.interpolate({ inputRange: [0, 1], outputRange: [1, 0] }) }}>
              <Nail w={16} h={90} rust={0} />
            </Animated.View>
            <Animated.View style={{ position: "absolute", opacity: rust }}>
              <Nail w={16} h={90} rust={1} />
            </Animated.View>
          </Animated.View>
        </View>

        <Text style={{ fontSize: 11, color: "#64748b", fontWeight: "700", marginTop: 14 }}>
          {!nailPlaced ? "Empty tube" : !observed ? `Condition: ${condition.label}` : WILL ? "Rust forming 🟠" : "Nail unchanged"}
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
            <Btn label="① Place nail" onPress={placeNail} disabled={nailPlaced} />
            <Btn label="② Seal tube" onPress={seal} disabled={!nailPlaced || sealed} accent="#7c3aed" />
            <Btn label="③ Leave" onPress={wait} disabled={!sealed || running} accent={GREEN} />
          </View>
        ) : (
          <>
            <Text style={{ fontSize: 12, fontWeight: "800", color: theme.colors.textMuted, textAlign: "center", marginBottom: 8 }}>Did the nail rust?</Text>
            <View style={{ flexDirection: "row" }}>
              <Btn label="Yes — rusted" onPress={() => record(true)} accent={RUST} />
              <Btn label="No — no rust" onPress={() => record(false)} accent={GREEN} />
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
              <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>• Condition: {condition.label}</Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Result: <Text style={{ fontWeight: "800" }}>{WILL ? "Rusted 🟠" : "No rust"}</Text></Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Reason: {WILL ? "Both oxygen and water were present." : "Water or air was excluded — rusting cannot start."}</Text>
            </View>
            <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.textMuted, marginBottom: 6 }}>Your report / observations</Text>
            <TextInput
              style={{ borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }}
              placeholder="e.g. The nail rusted only where both air and water reached it. Paint would have prevented it."
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
