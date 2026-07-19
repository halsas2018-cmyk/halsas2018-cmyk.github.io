import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, StatusBar, Modal, ScrollView, Animated, Easing, KeyboardAvoidingView, Platform } from "react-native";
import { Svg, Circle } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { labStorage } from "../../../storage/labStorage";
import { BunsenBurner, TestTube } from "../../components/svgKit";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import { CATIONS, ANIONS, optionsFor } from "./ion-tests-data";

const ACCENT = "#0ea5e9";
const STEP_LABELS = ["Run test", "Observe", "Identify"];

export default function ChemIonTestsLab() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "acids";
  const cfg = route.params?.config;

  const kind = cfg?.kind || "cation";
  const target = cfg?.target || CATIONS[0];
  const pool = kind === "cation" ? CATIONS : ANIONS;
  const opts = optionsFor(target, pool);

  const [ran, setRan] = useState(false);
  const [identified, setIdentified] = useState(null);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState(
    kind === "cation"
      ? "Light the Bunsen and hold the sample wire in the flame."
      : "Add the reagent to the sample solution in the test tube."
  );
  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const flame = useRef(new Animated.Value(0)).current;
  const ppt = useRef(new Animated.Value(0)).current;
  const animTo = (a, v, d = 700) => Animated.timing(a, { toValue: v, duration: d, easing: Easing.out(Easing.quad), useNativeDriver: false }).start();

  const labelStyle = { fontSize: 11, color: "#64748b", fontWeight: "700", marginTop: 14 };

  function runTest() {
    if (ran) return;
    haptic.light();
    setRan(true);
    if (kind === "cation") animTo(flame, 1, 700);
    else animTo(ppt, 1, 700);
    setMessage("Observe the result, then pick what you see from the options.");
  }

  function identify(id) {
    haptic.light();
    setIdentified(id);
    if (id === target.id) {
      setStatus("success");
      setMessage(`✅ Correct! ${target.name} — ${kind === "cation" ? target.flameName + " flame" : target.reagent + " → " + target.result}.`);
    } else {
      setMessage("❌ Not quite — look again at the result and try once more.");
    }
  }

  function reset() {
    setRan(false); setIdentified(null); setStatus("idle"); setSaved(false); setNotes("");
    flame.setValue(0); ppt.setValue(0);
    setMessage(kind === "cation" ? "Light the Bunsen and hold the sample wire in the flame." : "Add the reagent to the sample solution in the test tube.");
  }

  async function saveReport() {
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "ion-tests",
      experimentTitle: experiment.title || "Tests for Anions & Cations",
      topicId,
      date: new Date().toLocaleDateString(),
      group: kind,
      ion: target.name,
      observed: kind === "cation" ? target.flameName + " flame" : target.reagent + " → " + target.result,
      result: `Identified ${target.name}`,
      status: "success",
      summary: `Ran the ${kind === "cation" ? "flame" : "reagent"} test for ${target.name}. Observed: ${kind === "cation" ? target.flameName : target.result}.`,
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); setMessage("📝 Report saved."); } else setMessage("Could not save the report.");
  }

  const step = ran ? (status === "success" ? 3 : 2) : 0;
  const liqColor = kind === "cation" ? "#60a5fa" : ran && target.id !== "co3" ? (target.pptColor || "#f8fafc") : "#60a5fa";

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />
      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: ACCENT, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>{experiment.title || "Tests for Anions & Cations"}</Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center", paddingVertical: 10, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border, gap: 6 }}>
        {STEP_LABELS.map((l, i) => (
          <View key={l} style={{ alignItems: "center", marginHorizontal: 4 }}>
            <View style={{ width: 22, height: 22, borderRadius: 11, alignItems: "center", justifyContent: "center", backgroundColor: i < step ? ACCENT : i === step ? "#bae6fd" : "#e5e7eb" }}>
              <Text style={{ fontSize: 11, fontWeight: "800", color: i < step ? "#fff" : "#475569" }}>{i < step ? "✓" : i + 1}</Text>
            </View>
            <Text style={{ fontSize: 9, color: "#94a3b8", marginTop: 3, fontWeight: "600" }}>{l}</Text>
          </View>
        ))}
      </View>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {kind === "cation" ? (
          <View style={{ alignItems: "center" }}>
            <Animated.View style={{ opacity: flame, marginBottom: 6 }}>
              <Svg width={80} height={80} viewBox="0 0 80 80">
                <Circle cx={40} cy={40} r={34} fill={target.flame} opacity={0.85} />
                <Circle cx={40} cy={40} r={20} fill="#ffffff" opacity={0.5} />
              </Svg>
            </Animated.View>
            <BunsenBurner flame={ran} />
            <Text style={labelStyle}>{ran ? target.flameName : "Flame off"}</Text>
          </View>
        ) : (
          <View style={{ alignItems: "center" }}>
            <Animated.View style={{ opacity: ppt }}>
              <TestTube fill={0.55} color={liqColor} />
            </Animated.View>
            {ran && target.id === "co3" ? <Bubbles color="#cbd5e1" /> : null}
            <Text style={[labelStyle, { marginTop: 6 }]}>{ran ? (target.id === "co3" ? "Effervescence (CO₂)" : "Precipitate formed") : "Sample solution"}</Text>
          </View>
        )}
      </View>

      <View style={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 16, paddingTop: 14, paddingBottom: 18, shadowColor: "#000", shadowOffset: { width: 0, height: -3 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 10 }}>
        <View style={{ backgroundColor: status === "success" ? "#f0fdf4" : "#eff6ff", borderRadius: 12, padding: 12, borderWidth: 1, borderColor: status === "success" ? "#bbf7d0" : "#bae6fd", marginBottom: 12, minHeight: 58, justifyContent: "center" }}>
          <Text style={{ fontSize: 13, lineHeight: 19, color: theme.colors.textMuted }}>{message}</Text>
        </View>

        {!ran ? (
          <Btn label="▶ Run test" onPress={runTest} accent={ACCENT} full />
        ) : status === "success" ? (
          <>
            <Btn label="📝 View Report" onPress={() => setReportOpen(true)} accent={ACCENT} full />
            <TouchableOpacity onPress={reset} style={{ marginTop: 10, alignItems: "center", paddingVertical: 8 }}>
              <Text style={{ color: "#64748b", fontWeight: "700", fontSize: 13 }}>↺ Reset Experiment</Text>
            </TouchableOpacity>
          </>
        ) : (
          <View>
            <Text style={{ fontSize: 12, fontWeight: "700", color: theme.colors.textMuted, marginBottom: 8 }}>Which result do you observe?</Text>
            {opts.map((o) => (
              <TouchableOpacity key={o.id} onPress={() => identify(o.id)} disabled={identified === o.id} style={{ backgroundColor: identified === o.id ? "#e0f2fe" : theme.colors.surface, borderWidth: 1.5, borderColor: identified === o.id ? ACCENT : theme.colors.border, borderRadius: 12, paddingVertical: 12, paddingHorizontal: 14, marginBottom: 8 }}>
                <Text style={{ fontSize: 14, fontWeight: identified === o.id ? "800" : "600", color: identified === o.id ? "#0c4a6e" : theme.colors.text }}>{o.name}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity onPress={reset} style={{ marginTop: 4, alignItems: "center", paddingVertical: 8 }}>
              <Text style={{ color: "#64748b", fontWeight: "700", fontSize: 13 }}>↺ Reset Experiment</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <Modal visible={reportOpen} transparent animationType="slide" onRequestClose={() => setReportOpen(false)}>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.45)", justifyContent: "flex-end" }}>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ maxHeight: "88%" }}>
            <ScrollView style={{ maxHeight: "100%" }} contentContainerStyle={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 24, paddingBottom: 32 }} keyboardShouldPersistTaps="handled">
              <View style={{ width: 40, height: 4, backgroundColor: "#d1d5db", borderRadius: 2, alignSelf: "center", marginBottom: 18 }} />
              <Text style={{ fontSize: 26, textAlign: "center" }}>🎉</Text>
              <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>Test Complete!</Text>
              <View style={{ backgroundColor: theme.colors.surfaceMuted, borderRadius: 12, padding: 14, marginVertical: 14 }}>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>• Group: {kind === "cation" ? "Cations (flame test)" : "Anions (reagent test)"}</Text>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Ion: <Text style={{ fontWeight: "800" }}>{target.name}</Text></Text>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Observed: {kind === "cation" ? target.flameName + " flame" : target.reagent + " → " + target.result}</Text>
              </View>
              <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.textMuted, marginBottom: 6 }}>Your report / observations</Text>
              <TextInput
                style={{ borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }}
                placeholder="e.g. The orange-yellow flame was easy to see against a dark background."
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

function Bubbles({ color }) {
  const a = useRef(new Animated.Value(0)).current;
  const o = useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    const run = () => {
      a.setValue(0); o.setValue(0.7);
      Animated.parallel([
        Animated.timing(a, { toValue: -50, duration: 1000, easing: Easing.out(Easing.quad), useNativeDriver: true }),
        Animated.timing(o, { toValue: 0, duration: 1000, useNativeDriver: true }),
      ]).start(() => run());
    };
    run();
    return () => { a.stopAnimation(); o.stopAnimation(); };
  }, [a, o]);
  return (
    <Animated.View style={{ position: "absolute", top: 10, width: 8, height: 8, borderRadius: 4, backgroundColor: color, opacity: o, transform: [{ translateY: a }] }} />
  );
}

function Btn({ label, onPress, disabled, accent = ACCENT, full }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.85}
      style={{ width: full ? "100%" : undefined, backgroundColor: disabled ? "#e5e7eb" : accent, borderRadius: 11, paddingVertical: 12, alignItems: "center", justifyContent: "center", opacity: disabled ? 0.55 : 1 }}
    >
      <Text style={{ color: disabled ? "#94a3b8" : "#fff", fontWeight: "800", fontSize: full ? 14 : 11.5 }} numberOfLines={1}>{label}</Text>
    </TouchableOpacity>
  );
}
