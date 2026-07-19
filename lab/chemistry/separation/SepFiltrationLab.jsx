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
import { FILTRATION_MIXTURES, separationResult } from "./separation-data";
import { Funnel, FilterPaper, Beaker } from "../../components/svgKit";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";

const GREEN = "#16a34a";
const GLASS = "#94a3b8";

export default function SepFiltrationLab() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "separation";
  const cfg = route.params?.config;

  const mixture = cfg?.mixture || FILTRATION_MIXTURES[0];
  const result = separationResult(mixture);
  const liquidColor = "#38bdf8";
  const residueColor = "#92400e";

  const [filterPlaced, setFilterPlaced] = useState(false);
  const [poured, setPoured] = useState(false);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState(
    `Place the filter paper in the funnel, then set the funnel over the beaker for ${mixture.name}.`
  );

  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);
  const [decanted, setDecanted] = useState(false);

  const funnelLiquid = useRef(new Animated.Value(0)).current; // height of mixture in funnel
  const filtrate = useRef(new Animated.Value(0)).current; // height of liquid in beaker
  const residueO = useRef(new Animated.Value(0)).current; // residue appears on the paper
  const dropY = useRef(new Animated.Value(0)).current;
  const dropO = useRef(new Animated.Value(0)).current;
  const decantPour = useRef(new Animated.Value(0)).current; // pour into 2nd beaker

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
  const animHeight = (a, v, d = 1500, native = false) =>
    Animated.timing(a, { toValue: v, duration: d, easing: Easing.out(Easing.quad), useNativeDriver: native }).start();

  function startDrip() {
    dropY.setValue(0); dropO.setValue(1);
    Animated.loop(
      Animated.sequence([
        Animated.timing(dropY, { toValue: 0, duration: 1, useNativeDriver: true }),
        Animated.parallel([
          Animated.timing(dropY, { toValue: 60, duration: 700, easing: Easing.in(Easing.quad), useNativeDriver: true }),
          Animated.timing(dropO, { toValue: 1, duration: 20, useNativeDriver: true }),
        ]),
        Animated.timing(dropO, { toValue: 0, duration: 160, useNativeDriver: true }),
        Animated.delay(120),
      ])
    ).start();
  }
  function stopDrip() {
    dropY.stopAnimation(); dropO.stopAnimation();
  }

  function placeFilter() {
    if (filterPlaced) return;
    setFilterPlaced(true);
    say(`✓ Filter paper seated in the funnel. Now pour the ${mixture.name} mixture in.`);
  }
  function pour() {
    if (!filterPlaced) return say("Place the filter paper in the funnel first! 📄");
    if (poured) return;
    setPoured(true);
    animHeight(funnelLiquid, 46, 600);
    say(`✓ ${mixture.name} poured into the funnel. Press 'Filter' to let the liquid through.`);
  }
  function filterRun() {
    haptic.light();
    if (!poured) return say("Pour the mixture into the funnel first! 💧");
    if (status === "running" || status === "success") return;
    setStatus("running");
    say(`Filtering… the ${result.residue} is trapped on the paper while the ${mixture.liquid} passes through.`);
    startDrip();
    Animated.parallel([
      animHeight(funnelLiquid, 0, 3000),
      animHeight(filtrate, 64, 3200),
      animHeight(residueO, 1, 2200, false),
    ]);
    setTimeout(() => {
      stopDrip();
      setStatus("success");
      setSaved(false);
      setNotes("");
      say("✅ Filtration complete! Residue retained, filtrate collected. Tap 'View Report' (or Decant the filtrate).");
    }, 3400);
  }
  function decant() {
    if (status !== "success" || decanted) return;
    setDecanted(true);
    animHeight(decantPour, 40, 900);
    say(`Decanted the ${mixture.liquid} filtrate off into a clean beaker, leaving it ready — the ${result.residue} stays behind on the paper.`);
  }
  function reset() {
    stopDrip();
    setFilterPlaced(false); setPoured(false); setStatus("idle"); setDecanted(false);
    [funnelLiquid, filtrate, residueO, decantPour].forEach((a) => a.setValue(0));
    say(`Bench reset. Place the filter paper to begin the ${mixture.name} separation.`);
  }

  async function saveReport() {
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "filtration",
      experimentTitle: experiment.title || "Filtration & Decantation",
      topicId,
      date: new Date().toLocaleDateString(),
      mixture: mixture.name,
      residue: result.residue,
      filtrate: result.filtrate,
      decanted: decanted,
      status: "success",
      summary: `Residue = ${result.residue} (retained). Filtrate = ${result.filtrate}.${decanted ? " Filtrate decanted off into a clean beaker." : ""}`,
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); say("📝 Report saved to your phone. Review it any time from the Lab hub."); }
    else say("Could not save the report. Please try again.");
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />

      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: GREEN, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>
          {experiment.title || "Filtration & Decantation"}
        </Text>
      </View>

      {/* ===== BENCH ===== */}
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Animated.View pointerEvents="none" style={{ position: "absolute", width: 230, height: 230, borderRadius: 115, backgroundColor: GREEN, opacity: glow.interpolate({ inputRange: [0, 1], outputRange: [0, 0.14] }), transform: [{ scale: glow.interpolate({ inputRange: [0, 1], outputRange: [0.85, 1.12] }) }] }} />
        <View style={{ position: "absolute", bottom: 30, width: "100%", height: 2, backgroundColor: "#d1d5db" }} />

        {/* Funnel + filter paper + mixture + residue */}
        <View style={{ alignItems: "center" }}>
          <View style={{ position: "relative", alignItems: "center" }}>
            <Funnel w={96} h={76} />
            {/* filter paper inside the funnel */}
            <View style={{ position: "absolute", top: 18, left: 0, right: 0, alignItems: "center" }}>
              <FilterPaper w={52} h={40} spots={[]} />
            </View>
            {/* mixture liquid sitting in the funnel (height animated) */}
            <Animated.View style={{ position: "absolute", top: 16, left: 30, width: 0, height: 0, borderLeftWidth: 18, borderRightWidth: 18, borderBottomWidth: funnelLiquid, borderLeftColor: "transparent", borderRightColor: "transparent", borderBottomColor: liquidColor + "cc" }} />
            {/* residue retained on the paper (opacity animated) */}
            <Animated.View style={{ position: "absolute", top: 48, left: 42, width: 12, height: 8, borderRadius: 3, backgroundColor: residueColor, opacity: residueO }} />
          </View>
        </View>

        {/* filtrate dripping into the beaker */}
        <Animated.View style={{ position: "absolute", top: 150, width: 8, height: 11, borderRadius: 4, backgroundColor: liquidColor, opacity: dropO, transform: [{ translateY: dropY }] }} />

        {/* beaker collecting filtrate (level animated) */}
        <View style={{ position: "absolute", bottom: 32, width: 86, height: 78, position: "relative" }}>
          <Beaker w={86} h={78} fill={0} />
          <Animated.View style={{ position: "absolute", bottom: 10, left: 8, right: 8, height: filtrate, backgroundColor: liquidColor + "cc" }} />
        </View>

        {/* optional second beaker for decantation */}
        {decanted ? (
          <View style={{ position: "absolute", bottom: 32, right: 28, width: 70, height: 64, position: "relative" }}>
            <Beaker w={70} h={64} fill={0} />
            <Animated.View style={{ position: "absolute", bottom: 9, left: 7, right: 7, height: decantPour, backgroundColor: liquidColor + "cc" }} />
          </View>
        ) : null}

        <Text style={{ fontSize: 11, color: "#64748b", fontWeight: "700", marginTop: 14, position: "absolute", bottom: 6 }}>
          {status === "running" ? "Filtering…" : status === "success" ? "Residue retained ✓" : poured ? "Ready to filter" : filterPlaced ? "Filter paper placed" : "Empty funnel"}
        </Text>
      </View>

      {/* ===== CONTROL PANEL ===== */}
      <View style={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 16, paddingTop: 14, paddingBottom: 18, shadowColor: "#000", shadowOffset: { width: 0, height: -3 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 10 }}>
        <View style={{ backgroundColor: status === "success" ? "#f0fdf4" : "#eff6ff", borderRadius: 12, padding: 12, borderWidth: 1, borderColor: status === "success" ? "#bbf7d0" : "#bfdbfe", marginBottom: 12, minHeight: 58, justifyContent: "center" }}>
          <Text style={{ fontSize: 13, lineHeight: 19, color: theme.colors.textMuted }}>{message}</Text>
        </View>

        {status === "idle" ? (
          <View style={{ flexDirection: "row" }}>
            <Btn label="① Filter paper" onPress={placeFilter} disabled={filterPlaced} />
            <Btn label="② Pour" onPress={pour} disabled={!filterPlaced || poured} accent="#0ea5e9" />
            <Btn label="③ Filter" onPress={filterRun} disabled={!poured} accent={GREEN} />
          </View>
        ) : status === "success" ? (
          <>
            <Btn label="📝 View Report" onPress={() => setReportOpen(true)} accent={GREEN} full />
            {!decanted ? (
              <TouchableOpacity onPress={decant} style={{ marginTop: 10, alignItems: "center", paddingVertical: 10 }}>
                <Text style={{ color: "#0ea5e9", fontWeight: "700", fontSize: 14 }}>🫗 Decant filtrate (optional)</Text>
              </TouchableOpacity>
            ) : null}
            <TouchableOpacity onPress={reset} style={{ marginTop: 6, alignItems: "center", paddingVertical: 8 }}>
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
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ maxHeight: "88%" }}>
          <ScrollView style={{ maxHeight: "100%" }} contentContainerStyle={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 24, paddingBottom: 32 }} keyboardShouldPersistTaps="handled">
            <View style={{ width: 40, height: 4, backgroundColor: "#d1d5db", borderRadius: 2, alignSelf: "center", marginBottom: 18 }} />
            <Text style={{ fontSize: 26, textAlign: "center" }}>🎉</Text>
            <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>Filtration Complete!</Text>
            <View style={{ backgroundColor: theme.colors.surfaceMuted, borderRadius: 12, padding: 14, marginVertical: 14 }}>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>• Mixture: {mixture.name}</Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Residue (on paper): <Text style={{ fontWeight: "800" }}>{result.residue}</Text></Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Filtrate (through): <Text style={{ fontWeight: "800" }}>{result.filtrate}</Text></Text>
              {decanted ? <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Decanted: yes</Text> : null}
            </View>
            <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.textMuted, marginBottom: 6 }}>Your report / observations</Text>
            <TextInput
              style={{ borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }}
              placeholder="e.g. The insoluble solid stayed on the filter paper while the liquid passed through into the beaker."
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
