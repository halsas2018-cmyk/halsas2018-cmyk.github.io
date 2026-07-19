import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, StatusBar, Modal, ScrollView, TextInput, Animated, Easing, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import { useNavigation, useRoute } from "@react-navigation/native";
import { labStorage } from "../../../storage/labStorage";
import { FOOD_REAGENTS, SUBSTANCE_LABELS, getSample, resultColor, foodTestSummary } from "./animal-nutrition-data";
import Svg, { Path, Circle } from "react-native-svg";
import { TestTube, Arrow } from "../../components/svgKit";

const GREEN = "#16a34a";

export default function BioFoodTestsLab() {
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const theme = useTheme();
  const topicId = route.params?.topicId || "secA-animal-nutrition";
  const cfg = route.params?.config;
  const sample = cfg?.sample || getSample("potato");

  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState(
    `Bench ready: "${sample.name}". Add each reagent to its own test tube and watch the colour change, then record what you detect.`
  );
  const [added, setAdded] = useState({});
  const [picked, setPicked] = useState({});
  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  // Per-reagent animated values (initialised lazily).
  const revealRefs = useRef({});
  const dropRefs = useRef({});
  const getReveal = (id) => (revealRefs.current[id] = revealRefs.current[id] || new Animated.Value(0));
  const getDrop = (id) => (dropRefs.current[id] = dropRefs.current[id] || new Animated.Value(0));

  const say = (m) => setMessage(m);

  function addReagent(id) {
    if (status !== "idle" || added[id]) return;
    setAdded((prev) => ({ ...prev, [id]: true }));
    const d = getDrop(id);
    const r = getReveal(id);
    d.setValue(0);
    r.setValue(0);
    Animated.sequence([
      Animated.timing(d, { toValue: 1, duration: 320, easing: Easing.linear, useNativeDriver: false }),
      Animated.timing(r, { toValue: 1, duration: 320, easing: Easing.linear, useNativeDriver: false }),
    ]).start();
    say(`💧 Added ${getReagentName(id)}. Watch the tube — a colour change means a POSITIVE test.`);
  }

  function getReagentName(id) {
    return FOOD_REAGENTS.find((x) => x.id === id)?.name || id;
  }

  function record() {
    if (status !== "idle") return;
    if (Object.keys(added).length < 4) {
      say("🧪 Add ALL FOUR reagents first so you can see every result before you identify the food.");
      return;
    }
    setStatus("identify");
    setPicked({});
    say("🔎 Now record your identification: which food substances did the tests reveal?");
  }

  function toggleSubstance(key) {
    if (status !== "identify") return;
    setPicked((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  function submit() {
    if (status !== "identify") return;
    const got = Object.keys(picked).filter((k) => picked[k]).sort();
    const want = [...sample.composition].sort();
    const match = got.length === want.length && got.every((g, i) => g === want[i]);
    if (match) {
      setStatus("success");
      setSaved(false);
      setNotes("");
      say(`✅ Correct! "${sample.name}" contains: ${sample.composition.map((c) => SUBSTANCE_LABELS[c]).join(" + ")}.`);
    } else {
      setStatus("failed");
      const extra = got.some((g) => !want.includes(g));
      const missing = want.some((w) => !got.includes(w));
      say(
        `💡 Not quite. ${
          extra ? "You recorded a substance the tests did NOT show. " : ""
        }${missing ? "You missed a substance that gave a positive test. " : ""}Re-read each tube's colour and try again.`
      );
    }
  }

  function reset() {
    setAdded({});
    setPicked({});
    FOOD_REAGENTS.forEach((r) => {
      getReveal(r.id).setValue(0);
      getDrop(r.id).setValue(0);
    });
    setStatus("idle");
    say(`Bench reset. "${sample.name}" is ready to test again.`);
  }

  async function saveReport() {
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "food-tests",
      experimentTitle: experiment.title || "Food Tests: Starch, Glucose, Protein & Fat",
      topicId,
      date: new Date().toLocaleDateString(),
      sample: sample.name,
      detected: sample.composition.map((c) => SUBSTANCE_LABELS[c]).join(", "),
      summary: foodTestSummary(sample),
      status: "success",
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
          {experiment.title || "Food Tests"}
        </Text>
      </View>

      {/* ===== BENCH ===== */}
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 13, fontWeight: "800", color: theme.colors.textMuted, marginBottom: 10 }}>
          Sample: {sample.emoji} {sample.name}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          {FOOD_REAGENTS.map((r) => {
            const res = resultColor(sample, r);
            const reveal = getReveal(r.id);
            const drop = getDrop(r.id);
            const dropY = drop.interpolate({ inputRange: [0, 1], outputRange: [-8, 64] });
            const dropOp = drop.interpolate({ inputRange: [0, 0.85, 1], outputRange: [0, 1, 0] });
            return (
              <View key={r.id} style={{ alignItems: "center", marginHorizontal: 9, width: 46 }}>
                <View style={{ width: 46, height: 150, position: "relative", alignItems: "center" }}>
                  <TestTube w={34} h={120} />
                  {/* animated liquid */}
                  <Animated.View
                    style={{
                      position: "absolute",
                      bottom: 9,
                      left: 6,
                      right: 6,
                      height: 76,
                      borderRadius: 8,
                      backgroundColor: res.color,
                      opacity: reveal,
                    }}
                  />
                  {/* falling drop */}
                  <Animated.View
                    style={{
                      position: "absolute",
                      top: 6,
                      left: 19,
                      width: 8,
                      height: 10,
                      opacity: dropOp,
                      transform: [{ translateY: dropY }],
                    }}
                  >
                    <Drop size={10} color={res.color} />
                  </Animated.View>
                  <Text style={{ position: "absolute", bottom: -16, fontSize: 9, color: theme.colors.textMuted, textAlign: "center", width: 56 }}>
                    {r.target === "starch" ? "Iodine" : r.target === "glucose" ? "Benedict's" : r.target === "protein" ? "Biuret" : "Ethanol"}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => { haptic.light(); addReagent(r.id); }}
                  disabled={status !== "idle" || !!added[r.id]}
                  style={{
                    marginTop: 26,
                    backgroundColor: added[r.id] ? theme.colors.primarySoft : theme.colors.surface,
                    borderWidth: 1.5,
                    borderColor: added[r.id] ? GREEN : theme.colors.border,
                    borderRadius: 9,
                    paddingVertical: 7,
                    paddingHorizontal: 6,
                    width: 56,
                    opacity: status !== "idle" || added[r.id] ? (added[r.id] ? 1 : 0.5) : 1,
                  }}
                >
                  <Text style={{ fontSize: 9.5, fontWeight: "800", color: added[r.id] ? "#166534" : theme.colors.text, textAlign: "center" }}>
                    {added[r.id] ? "✓ Added" : "Add"}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>

        {status === "identify" ? (
          <View style={{ marginTop: 14, backgroundColor: "#fffbeb", borderRadius: 10, paddingHorizontal: 12, paddingVertical: 6, borderWidth: 1, borderColor: "#fde68a" }}>
            <Text style={{ fontSize: 11.5, fontWeight: "700", color: "#92400e" }}>🔎 Tick the substances the tests revealed</Text>
          </View>
        ) : null}
        {status === "success" ? (
          <View style={{ marginTop: 14, backgroundColor: "#f0fdf4", borderRadius: 10, paddingHorizontal: 12, paddingVertical: 6, borderWidth: 1, borderColor: "#bbf7d0" }}>
            <Text style={{ fontSize: 12, fontWeight: "800", color: "#166534" }}>✅ Identified: {sample.composition.map((c) => SUBSTANCE_LABELS[c]).join(" + ")}</Text>
          </View>
        ) : null}
      </View>

      {/* ===== CONTROL PANEL ===== */}
      <View style={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 16, paddingTop: 14, paddingBottom: 18, shadowColor: "#000", shadowOffset: { width: 0, height: -3 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 10 }}>
        <View style={{ backgroundColor: status === "failed" ? "#fef2f2" : status === "success" ? "#f0fdf4" : "#eff6ff", borderRadius: 12, padding: 12, borderWidth: 1, borderColor: status === "failed" ? "#fecaca" : status === "success" ? "#bbf7d0" : "#bfdbfe", marginBottom: 12, minHeight: 58, justifyContent: "center" }}>
          <Text style={{ fontSize: 13, lineHeight: 19, color: "#1f2937" }}>{message}</Text>
        </View>

        {status === "failed" ? (
          <TouchableOpacity onPress={reset} style={{ alignItems: "center", paddingVertical: 12 }}>
            <Text style={{ color: theme.colors.textMuted, fontWeight: "700", fontSize: 14 }}>↺ Reset Experiment</Text>
          </TouchableOpacity>
        ) : status === "success" ? (
          <>
            <Btn label="📝 View Report" onPress={() => setReportOpen(true)} accent={GREEN} full />
            <TouchableOpacity onPress={reset} style={{ marginTop: 10, alignItems: "center", paddingVertical: 8 }}>
              <Text style={{ color: theme.colors.textMuted, fontWeight: "700", fontSize: 13 }}>↺ Reset Experiment</Text>
            </TouchableOpacity>
          </>
        ) : status === "identify" ? (
          <>
            <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center", marginBottom: 10 }}>
              {Object.keys(SUBSTANCE_LABELS).map((key) => (
                <TouchableOpacity
                  key={key}
                  onPress={() => toggleSubstance(key)}
                  style={{
                    backgroundColor: picked[key] ? "#e7f6ec" : theme.colors.surfaceAlt,
                    borderWidth: 1.5,
                    borderColor: picked[key] ? GREEN : "#e2e8f0",
                    borderRadius: 11,
                    paddingVertical: 9,
                    paddingHorizontal: 14,
                    margin: 4,
                  }}
                >
                  <Text style={{ fontSize: 13, fontWeight: "800", color: picked[key] ? "#14532d" : theme.colors.text }}>{SUBSTANCE_LABELS[key]}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <Btn label="✅ Submit identification" onPress={() => { haptic.light(); submit(); }} accent={GREEN} full />
            <TouchableOpacity onPress={reset} style={{ marginTop: 6, alignItems: "center", paddingVertical: 8 }}>
              <Text style={{ color: theme.colors.textMuted, fontWeight: "700", fontSize: 13 }}>↺ Reset Experiment</Text>
            </TouchableOpacity>
          </>
        ) : (
          <View style={{ flexDirection: "row" }}>
            <Btn
              label={Object.keys(added).length < 4 ? `Add reagents (${Object.keys(added).length}/4)` : "🧪 Record identification"}
              onPress={() => { haptic.light(); Object.keys(added).length < 4 ? say("Tap each 'Add' button under the tubes to drop in a reagent.") : record(); }}
              accent={GREEN}
              full
            />
          </View>
        )}
      </View>

      <Modal visible={reportOpen} transparent animationType="slide" onRequestClose={() => setReportOpen(false)}>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.45)", justifyContent: "flex-end" }}>
          <KeyboardAvoidingView style={{ maxHeight: "88%" }} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={0}>
            <ScrollView style={{ maxHeight: "88%" }} contentContainerStyle={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 24, paddingBottom: 32 }} keyboardShouldPersistTaps="handled">
              <View style={{ width: 40, height: 4, backgroundColor: "#d1d5db", borderRadius: 2, alignSelf: "center", marginBottom: 18 }} />
              <Text style={{ fontSize: 26, textAlign: "center" }}>🎉</Text>
              <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>Food Identified!</Text>
              <View style={{ backgroundColor: theme.colors.bg, borderRadius: 12, padding: 14, marginVertical: 14 }}>
                <Text style={{ fontSize: 13, color: theme.colors.text }}>• Sample tested: {sample.name}</Text>
                <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 4 }}>• Substances present: <Text style={{ fontWeight: "800" }}>{sample.composition.map((c) => SUBSTANCE_LABELS[c]).join(" + ")}</Text></Text>
                <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 6, lineHeight: 19 }}>{foodTestSummary(sample)}</Text>
              </View>
              <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.text, marginBottom: 6 }}>Your report / observations</Text>
              <TextInput
                style={{ borderWidth: 1, borderColor: theme.colors.border, borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }}
                placeholder="e.g. Iodine went blue-black → starch present; Benedict's brick-red → glucose present."
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
              <TouchableOpacity onPress={() => { setReportOpen(false); navigation.goBack(); }} style={{ marginTop: 10, backgroundColor: theme.colors.surfaceAlt, borderRadius: 12, paddingVertical: 13 }}>
                <Text style={{ color: theme.colors.text, textAlign: "center", fontWeight: "700", fontSize: 14 }}>Done</Text>
              </TouchableOpacity>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

function Drop({ size = 10, color = "#60a5fa" }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 10 10">
      <Path d="M5 1 C5 1 9 5.5 9 7.5 A4 4 0 0 1 1 7.5 C1 5.5 5 1 5 1 Z" fill={color} />
    </Svg>
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
        backgroundColor: disabled ? theme.colors.border : accent,
        borderRadius: 11,
        paddingVertical: 12,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: full ? 0 : 3,
        opacity: disabled ? 0.55 : 1,
      }}
    >
      <Text style={{ color: disabled ? theme.colors.textMuted : "#fff", fontWeight: "800", fontSize: full ? 14 : 11.5 }} numberOfLines={1}>{label}</Text>
    </TouchableOpacity>
  );
}
