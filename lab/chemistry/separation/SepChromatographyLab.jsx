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
import { SOLVENTS, DYES, componentRf, travelOrder } from "./separation-data";
import { Beaker } from "../../components/svgKit";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";

const GREEN = "#16a34a";
const GLASS = "#94a3b8";

const PAPER_H = 240;
const BASELINE = 34; // distance of the spot line from the bottom of the paper
const TRAVEL = 180; // max distance a spot (Rf 1.0) would travel up the paper

const STEP_LABELS = ["Spot", "Stand", "Run"];

export default function SepChromatographyLab() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "separation";
  const cfg = route.params?.config;

  const solvent = cfg?.solvent || SOLVENTS[2];
  const mixture = cfg?.mixture || DYES[0];
  const comps = mixture.components;

  const [spotted, setSpotted] = useState(false);
  const [stood, setStood] = useState(false);
  const [status, setStatus] = useState("idle");
  const [paused, setPaused] = useState(false);
  const [message, setMessage] = useState(
    `Draw a pencil line near the bottom of the paper and spot your ${mixture.name.toLowerCase()}.`
  );

  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  // Solvent climbs from the bottom of the paper (height of the wet front).
  const front = useRef(new Animated.Value(0)).current;
  // One animated offset (translateY, negative = up) per component spot.
  const spots = useRef(comps.map(() => new Animated.Value(0))).current;
  // Animation handles so the STUDENT can stop the development mid-run.
  const frontAnim = useRef(null);
  const spotAnims = useRef([]);
  const frontVal = useRef(0);
  useEffect(() => {
    const id = front.addListener(({ value }) => { frontVal.current = value; });
    return () => front.removeListener(id);
  }, [front]);

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
  const animHeight = (a, v, d = 4200) =>
    Animated.timing(a, { toValue: v, duration: d, easing: Easing.inOut(Easing.quad), useNativeDriver: false }).start();

  function drawSpot() {
    if (spotted) return;
    setSpotted(true);
    say(`✓ Pencil line drawn and ${mixture.name} spotted on the baseline. Now stand the paper in the beaker of ${solvent.name}.`);
  }
  function standPaper() {
    if (!spotted) return say("Spot the paper first! ✏️");
    if (stood) return;
    setStood(true);
    say(`✓ Paper stood in ${solvent.name}. The solvent will climb by capillary action — press Run.`);
  }
  function run() {
    haptic.light();
    if (!stood) return say("Stand the paper in the solvent first! 💧");
    if (status === "success") return;
    if (status === "running" && !paused) return; // already developing
    setStatus("running");
    setPaused(false);
    say(`Solvent rising through the paper… the ${mixture.name} components separate by Rf. Tap 'Stop' when the colours have separated.`);
    frontAnim.current = Animated.timing(front, {
      toValue: TRAVEL + BASELINE - 8,
      duration: 7000,
      easing: Easing.inOut(Easing.quad),
      useNativeDriver: false,
    });
    frontAnim.current.start();
    const order = travelOrder(mixture, solvent);
    const byId = Object.fromEntries(order.map((c) => [c.id, c.rf]));
    spotAnims.current = spots.map((s, i) => {
      const c = comps[i];
      const rf = byId[c.id] != null ? byId[c.id] : componentRf(c, solvent);
      const a = Animated.timing(s, {
        toValue: -(rf * TRAVEL),
        duration: 6600 + i * 120,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: true,
      });
      a.start();
      return a;
    });
  }

  // THE STUDENT ends the development by tapping Stop, not a timer.
  function stopDev() {
    haptic.light();
    if (status !== "running") return;
    if (frontAnim.current) frontAnim.current.stop();
    spotAnims.current.forEach((a) => a && a.stop());
    const fv = frontVal.current;
    const threshold = BASELINE + TRAVEL * 0.5; // half-developed = clearly separated
    if (fv < threshold) {
      setPaused(true);
      say("↩️ You stopped a little early — the colours haven't separated clearly yet. Tap 'Resume' to let the solvent climb further.");
      return;
    }
    setStatus("success");
    setSaved(false);
    setNotes("");
    say("✅ Run complete! The colours have separated by Rf. Tap 'View Report' to write it up.");
  }
  function reset() {
    setSpotted(false); setStood(false); setStatus("idle");
    front.setValue(0);
    spots.forEach((s) => s.setValue(0));
    say(`Bench reset. Spot your ${mixture.name.toLowerCase()} to begin.`);
  }

  async function saveReport() {
    const order = travelOrder(mixture, solvent);
    const furthest = order[0];
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "chromatography",
      experimentTitle: experiment.title || "Paper Chromatography",
      topicId,
      date: new Date().toLocaleDateString(),
      solvent: solvent.name,
      mixture: mixture.name,
      components: order.map((c) => `${c.name} (Rf ${c.rf.toFixed(2)})`),
      furthestComponent: `${furthest.name} (Rf ${furthest.rf.toFixed(2)})`,
      status: "success",
      summary: `Separated ${mixture.name} in ${solvent.name}; ${furthest.name} travelled furthest (Rf ${furthest.rf.toFixed(2)}).`,
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); say("📝 Report saved to your phone. Review it any time from the Lab hub."); }
    else say("Could not save the report. Please try again.");
  }

  const step = spotted ? (stood ? 2 : 1) : 0;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />

      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: GREEN, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>
          {experiment.title || "Paper Chromatography"}
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
        <View style={{ position: "absolute", bottom: 30, width: "100%", height: 2, backgroundColor: "#d1d5db" }} />

        {/* Beaker of solvent (vector) */}
        <View style={{ position: "absolute", bottom: 24, width: 120, height: 88, alignItems: "center", justifyContent: "flex-end" }}>
          <Beaker w={120} h={88} fill={1} color="#38bdf8" />
        </View>
        <Text style={{ position: "absolute", bottom: 70, fontSize: 10, color: "#64748b", fontWeight: "700" }}>{solvent.name}</Text>

        {/* Chromatography paper */}
        <View style={{ width: 84, height: PAPER_H, backgroundColor: "#fffdf7", borderWidth: 1.5, borderColor: "#e5e7eb", borderRadius: 6, overflow: "hidden" }}>
          <Animated.View style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: front, backgroundColor: "rgba(56,189,248,0.22)" }} />
          {/* baseline */}
          <View style={{ position: "absolute", left: 0, right: 0, bottom: BASELINE, height: 1.5, backgroundColor: "#9ca3af" }} />
          {/* component spots */}
          {comps.map((c, i) => (
            <Animated.View
              key={c.id}
              style={{
                position: "absolute",
                left: 42 - 7,
                bottom: BASELINE - 7,
                width: 14,
                height: 14,
                borderRadius: 7,
                backgroundColor: c.color,
                borderWidth: 1,
                borderColor: "#00000020",
                transform: [{ translateY: spots[i] }],
              }}
            />
          ))}
        </View>
        <Text style={{ fontSize: 11, color: "#64748b", fontWeight: "700", marginTop: 12 }}>
          {status === "running" ? (paused ? "Paused — tap Resume to develop further" : "Solvent climbing…") : status === "success" ? "Colours separated by Rf ✓" : stood ? "Ready to run" : spotted ? "Paper spotted" : "Empty paper"}
        </Text>
      </View>

      {/* ===== CONTROL PANEL ===== */}
      <View style={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 16, paddingTop: 14, paddingBottom: 18, shadowColor: "#000", shadowOffset: { width: 0, height: -3 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 10 }}>
        <View style={{ backgroundColor: status === "success" ? "#f0fdf4" : "#eff6ff", borderRadius: 12, padding: 12, borderWidth: 1, borderColor: status === "success" ? "#bbf7d0" : "#bfdbfe", marginBottom: 12, minHeight: 58, justifyContent: "center" }}>
          <Text style={{ fontSize: 13, lineHeight: 19, color: theme.colors.textMuted }}>{message}</Text>
        </View>

        {status === "idle" ? (
          <View style={{ flexDirection: "row" }}>
            <Btn label="① Spot" onPress={drawSpot} disabled={spotted} />
            <Btn label="② Stand" onPress={standPaper} disabled={!spotted || stood} accent="#0ea5e9" />
            <Btn label="③ Run" onPress={run} disabled={!stood} accent={GREEN} />
          </View>
        ) : status === "success" ? (
          <>
            <Btn label="📝 View Report" onPress={() => setReportOpen(true)} accent={GREEN} full />
            <TouchableOpacity onPress={reset} style={{ marginTop: 10, alignItems: "center", paddingVertical: 8 }}>
              <Text style={{ color: "#64748b", fontWeight: "700", fontSize: 13 }}>↺ Reset Experiment</Text>
            </TouchableOpacity>
          </>
        ) : status === "running" ? (
          paused ? (
            <Btn label="▶ Resume development" onPress={run} accent={GREEN} full />
          ) : (
            <Btn label="■ Stop & read" onPress={stopDev} accent="#dc2626" full />
          )
        ) : (
          <TouchableOpacity onPress={reset} style={{ alignItems: "center", paddingVertical: 12 }}>
            <Text style={{ color: "#64748b", fontWeight: "700", fontSize: 14 }}>↺ Reset Experiment</Text>
          </TouchableOpacity>
        )}
      </View>

      <Modal visible={reportOpen} transparent animationType="slide" onRequestClose={() => setReportOpen(false)}>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.45)", justifyContent: "flex-end" }}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ maxHeight: "88%" }}>
          <ScrollView style={{ maxHeight: "100%" }} contentContainerStyle={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 24, paddingBottom: 32 }} keyboardShouldPersistTaps="handled">
            <View style={{ width: 40, height: 4, backgroundColor: "#d1d5db", borderRadius: 2, alignSelf: "center", marginBottom: 18 }} />
            <Text style={{ fontSize: 26, textAlign: "center" }}>🎉</Text>
            <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>Chromatography Complete!</Text>
            <View style={{ backgroundColor: theme.colors.surfaceMuted, borderRadius: 12, padding: 14, marginVertical: 14 }}>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>• Solvent: {solvent.name}</Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Mixture: {mixture.name}</Text>
              {travelOrder(mixture, solvent).map((c, i) => (
                <Text key={c.id} style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>
                  • {i + 1}. {c.name}: Rf {c.rf.toFixed(2)} {i === 0 ? "(furthest)" : ""}
                </Text>
              ))}
            </View>
            <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.textMuted, marginBottom: 6 }}>Your report / observations</Text>
            <TextInput
              style={{ borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }}
              placeholder="e.g. The black ink split into blue, red and yellow bands. Blue travelled furthest (highest Rf)."
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
