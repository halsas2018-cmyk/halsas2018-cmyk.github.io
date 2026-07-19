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
import Svg, { Rect } from "react-native-svg";
import { useNavigation, useRoute } from "@react-navigation/native";
import { labStorage } from "../../../storage/labStorage";
import { EXTRACTION_METALS } from "./metals-data";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";

const GREEN = "#16a34a";
const GLASS = "#94a3b8";
const ORE = "#9ca3af"; // grey ore colour

const STEP_LABELS = ["Ore", "Process", "Extract", "Collect"];

export default function MetalsExtractionLab() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "metals";
  const cfg = route.params?.config;

  const metal = cfg?.metal || EXTRACTION_METALS[0];

  const [orePlaced, setOrePlaced] = useState(false);
  const [processApplied, setProcessApplied] = useState(null);
  const [extracted, setExtracted] = useState(false);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState(`Place the ${metal.name} ore in the furnace, then choose the correct extraction process.`);

  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const melt = useRef(new Animated.Value(0)).current;
  const glow = useRef(new Animated.Value(0)).current;
  const metalY = useRef(new Animated.Value(0)).current;

  const liquidColor = melt.interpolate({
    inputRange: [0, 1],
    outputRange: [ORE, metal.metalColor],
  });
  const glowOpacity = glow.interpolate({ inputRange: [0, 1], outputRange: [0.15, 0.9] });

  const say = (m) => setMessage(m);
  const successGlow = useRef(new Animated.Value(0)).current;
  const successGlowLoop = useRef(null);
  const successPulse = () => {
    if (successGlowLoop.current) successGlowLoop.current.stop();
    successGlow.setValue(0.4);
    successGlowLoop.current = Animated.loop(
      Animated.sequence([
        Animated.timing(successGlow, { toValue: 1, duration: 750, easing: Easing.inOut(Easing.quad), useNativeDriver: true }),
        Animated.timing(successGlow, { toValue: 0.45, duration: 750, easing: Easing.inOut(Easing.quad), useNativeDriver: true }),
      ])
    );
    successGlowLoop.current.start();
  };
  const stopSuccessGlow = () => {
    if (successGlowLoop.current) successGlowLoop.current.stop();
    successGlowLoop.current = null;
    successGlow.setValue(0);
  };
  useEffect(() => {
    if (status === "success") successPulse();
    else stopSuccessGlow();
    return () => stopSuccessGlow();
  }, [status]);
  const animTo = (a, v, d = 600, native = false) =>
    Animated.timing(a, { toValue: v, duration: d, easing: Easing.out(Easing.quad), useNativeDriver: native }).start();

  function placeOre() {
    if (orePlaced) return;
    setOrePlaced(true);
    animTo(glow, 0.4, 400);
    say(`✓ ${metal.ore} placed in the furnace. Now pick the correct process for ${metal.name}.`);
  }

  function applyProcess(method, accent) {
    if (!orePlaced) return say("Place the ore in the furnace first! ⛏️");
    if (status === "failed" || status === "success") return;
    if (processApplied) return;
    if (method !== metal.method) {
      setStatus("failed");
      return say(`💥 Wrong method! ${metal.name} is extracted by ${metal.methodLabel.toLowerCase()}, not ${method === "electrolysis" ? "reduction with carbon" : method === "reduction" ? "electrolysis" : "collection"}. The ore did not yield metal. Tap Reset to try the right process.`);
    }
    setProcessApplied(method);
    setStatus("running");
    animTo(glow, 1, 700);
    animTo(melt, 1, 1600);
    animTo(metalY, 1, 1400);
    Animated.delay(1700).start(() => {
      setExtracted(true);
      say(`✅ ${metal.name} extracted! The metal has separated from its ore. Tap 'Collect metal'.`);
    });
  }

  function collect() {
    haptic.light();
    if (!extracted) return;
    setStatus("success");
    setSaved(false);
    setNotes("");
    say("✅ Extraction complete. Write up your report.");
  }

  function reset() {
    setOrePlaced(false);
    setProcessApplied(null);
    setExtracted(false);
    setStatus("idle");
    melt.setValue(0); glow.setValue(0); metalY.setValue(0);
    say(`Bench reset. Place the ${metal.ore} to begin.`);
  }

  async function saveReport() {
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "extraction",
      experimentTitle: experiment.title || "Extraction of Metals",
      topicId,
      date: new Date().toLocaleDateString(),
      metal: metal.name,
      symbol: metal.symbol,
      ore: metal.ore,
      method: metal.methodLabel,
      status: "success",
      summary: `${metal.name} extracted by ${metal.methodLabel}.`,
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); say("📝 Report saved to your phone. Review it any time from the Lab hub."); }
    else say("Could not save the report. Please try again.");
  }

  const step = orePlaced ? (processApplied ? (extracted ? 3 : 2) : 1) : 0;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />

      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: GREEN, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>
          {experiment.title || "Extraction of Metals"}
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
        <Animated.View pointerEvents="none" style={{ position: "absolute", width: 230, height: 230, borderRadius: 115, backgroundColor: GREEN, opacity: successGlow.interpolate({ inputRange: [0, 1], outputRange: [0, 0.14] }), transform: [{ scale: successGlow.interpolate({ inputRange: [0, 1], outputRange: [0.85, 1.12] }) }] }} />
        <View style={{ position: "absolute", bottom: 52, width: "100%", height: 2, backgroundColor: "#d1d5db" }} />

        {/* Furnace / cell (vector) */}
        <View style={{ width: 150, height: 150, alignItems: "center", justifyContent: "center" }}>
          <Svg width={150} height={150} viewBox="0 0 150 150">
            <Rect x={0} y={0} width={150} height={150} rx={16} fill="#475569" />
            <Rect x={29} y={29} width={92} height={92} rx={12} fill="#1e293b" stroke="#334155" strokeWidth={3} />
            <Rect x={28} y={8} width={5} height={22} fill={GLASS} />
            <Rect x={117} y={8} width={5} height={22} fill={GLASS} />
          </Svg>
          <Animated.View style={{ position: "absolute", width: 96, height: 96, borderRadius: 12, backgroundColor: "#f59e0b", opacity: glowOpacity }} />
          <View style={{ position: "absolute", width: 92, height: 92, alignItems: "center", justifyContent: "flex-end", overflow: "hidden" }}>
            <Animated.View style={{ height: 70, width: 86, backgroundColor: liquidColor }} />
            {/* rising molten metal nugget */}
            <Animated.View
              style={{
                position: "absolute",
                bottom: 8,
                width: 26,
                height: 16,
                borderRadius: 8,
                backgroundColor: metal.metalColor,
                borderWidth: 1,
                borderColor: "#0f172a",
                opacity: melt,
                transform: [{ translateY: metalY.interpolate({ inputRange: [0, 1], outputRange: [0, -34] }) }],
              }}
            />
          </View>
        </View>

        <Text style={{ fontSize: 11, color: "#64748b", fontWeight: "700", marginTop: 14 }}>
          {extracted ? `${metal.name} (${metal.symbol}) separated ✓` : orePlaced ? `Heating ${metal.ore}…` : "Furnace empty"}
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
        ) : !orePlaced ? (
          <View style={{ flexDirection: "row" }}>
            <Btn label="① Place ore" onPress={placeOre} accent={GREEN} full />
          </View>
        ) : (
          <>
            <Text style={{ fontSize: 11, fontWeight: "700", color: "#64748b", marginBottom: 6, textAlign: "center" }}>Choose the process for {metal.name}</Text>
            <View style={{ flexDirection: "row" }}>
              <Btn label="② Coke (reduce)" onPress={() => applyProcess("reduction")} disabled={!!processApplied} accent="#475569" />
              <Btn label="② Electrolysis" onPress={() => applyProcess("electrolysis")} disabled={!!processApplied} accent="#7c3aed" />
              <Btn label="② Collect" onPress={() => applyProcess("native")} disabled={!!processApplied} accent="#f59e0b" />
            </View>
            {extracted ? (
              <Btn label="③ Collect metal" onPress={collect} accent={GREEN} full />
            ) : null}
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
            <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>Extraction Complete!</Text>
            <View style={{ backgroundColor: theme.colors.surfaceMuted, borderRadius: 12, padding: 14, marginVertical: 14 }}>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>• Metal: {metal.name} ({metal.symbol})</Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Ore: {metal.ore}</Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Method: <Text style={{ fontWeight: "800" }}>{metal.methodLabel}</Text></Text>
            </View>
            <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.textMuted, marginBottom: 6 }}>Your report / observations</Text>
            <TextInput
              style={{ borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }}
              placeholder="e.g. The reactive metal was extracted by electrolysis; carbon could not reduce it."
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
