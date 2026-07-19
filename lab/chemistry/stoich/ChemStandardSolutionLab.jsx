import React, { useState, useRef, useEffect } from "react";
import { View, Text, TouchableOpacity, StatusBar, Modal, ScrollView, Animated, Easing, KeyboardAvoidingView, Platform } from "react-native";
import { Svg, Path } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { labStorage } from "../../../storage/labStorage";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";

const ACCENT = "#16a34a";
const STEP_LABELS = ["Weigh", "Dissolve", "Make up"];

export default function ChemStandardSolutionLab() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "stoich";
  const cfg = route.params?.config;

  const solute = cfg?.solute || { name: "Sodium chloride", formula: "NaCl", M: 58.5, color: "#e0f2fe" };
  const mass = cfg?.mass || 5.0;
  const vol = cfg?.vol || 250;
  const c = cfg?.c || 0;

  const [step, setStep] = useState(0);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState(`Weigh out ${mass} g of ${solute.formula}.`);
  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const fill = useRef(new Animated.Value(0)).current;
  const [fillState, setFillState] = useState(0);
  const animTo = (a, v, d = 700) => Animated.timing(a, { toValue: v, duration: d, easing: Easing.out(Easing.quad), useNativeDriver: false }).start();
  useEffect(() => {
    const id = fill.addListener(({ value }) => setFillState(value));
    return () => fill.removeListener(id);
  }, [fill]);
  const labelStyle = { fontSize: 11, color: "#64748b", fontWeight: "700", marginTop: 14 };

  const steps = [
    () => { haptic.light(); setStep(1); setMessage(`Dissolve the ${mass} g of ${solute.formula} in distilled water.`); },
    () => { haptic.light(); setStep(2); setMessage("Transfer to a volumetric flask and top up to the mark with distilled water."); },
    () => {
      haptic.light();
      animTo(fill, 1, 900);
      Animated.delay(950).start(() => {
        setStep(3); setStatus("success");
        setMessage(`✅ Standard solution made! c = ${c.toFixed(3)} mol dm⁻³.`);
      });
    },
  ];

  function reset() {
    setStep(0); setStatus("idle"); setSaved(false); setNotes(""); fill.setValue(0); setFillState(0);
    setMessage(`Weigh out ${mass} g of ${solute.formula}.`);
  }

  async function saveReport() {
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "standard-solution",
      experimentTitle: experiment.title || "Preparation of a Standard Solution",
      topicId,
      date: new Date().toLocaleDateString(),
      solute: `${solute.name} (${solute.formula})`,
      mass: String(mass),
      volume: String(vol),
      concentration: c.toFixed(3) + " mol dm⁻³",
      result: `c = ${c.toFixed(3)} mol dm⁻³`,
      status: "success",
      summary: `Dissolved ${mass} g ${solute.formula} (M=${solute.M}) and made up to ${vol} mL → c = ${c.toFixed(3)} mol dm⁻³.`,
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); setMessage("📝 Report saved."); } else setMessage("Could not save the report.");
  }

  // Volumetric flask outline + animated liquid + mark line.
  const W = 120, H = 170, TOP = 14, BOT = H - 14;
  const f = Math.max(0, Math.min(1, fillState));
  const topY = BOT - f * (BOT - 50);
  const slope = (28 - 14) / (BOT - TOP);
  const lx = 14 + (topY - TOP) * slope;
  const rx = 106 - (topY - TOP) * slope;
  const liquidD = `M${lx.toFixed(1)} ${topY.toFixed(1)} L${rx.toFixed(1)} ${topY.toFixed(1)} L94 ${BOT} L26 ${BOT} Z`;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />
      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: ACCENT, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>{experiment.title || "Standard Solution"}</Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center", paddingVertical: 10, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border, gap: 6 }}>
        {STEP_LABELS.map((l, i) => (
          <View key={l} style={{ alignItems: "center", marginHorizontal: 4 }}>
            <View style={{ width: 22, height: 22, borderRadius: 11, alignItems: "center", justifyContent: "center", backgroundColor: i < step ? ACCENT : i === step ? "#bbf7d0" : "#e5e7eb" }}>
              <Text style={{ fontSize: 11, fontWeight: "800", color: i < step ? "#fff" : "#475569" }}>{i < step ? "✓" : i + 1}</Text>
            </View>
            <Text style={{ fontSize: 9, color: "#94a3b8", marginTop: 3, fontWeight: "600" }}>{l}</Text>
          </View>
        ))}
      </View>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
          <Path d={`M14 ${TOP} L106 ${TOP} L94 ${BOT} L26 ${BOT} Z`} fill="#ffffff" stroke="#cbd5e1" strokeWidth="3" />
          {f > 0.01 ? <Path d={liquidD} fill={solute.color} opacity={0.85} /> : null}
          {step >= 2 ? <Path d={`M22 ${50} L98 ${50}`} stroke={ACCENT} strokeWidth="3" /> : null}
        </Svg>
        <Text style={labelStyle}>{step >= 2 ? `Made up to ${vol} mL` : step === 1 ? "Dissolving…" : `${mass} g weighed`}</Text>
      </View>

      <View style={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 16, paddingTop: 14, paddingBottom: 18, shadowColor: "#000", shadowOffset: { width: 0, height: -3 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 10 }}>
        <View style={{ backgroundColor: status === "success" ? "#f0fdf4" : "#eff6ff", borderRadius: 12, padding: 12, borderWidth: 1, borderColor: status === "success" ? "#bbf7d0" : "#bbf7d0", marginBottom: 12, minHeight: 58, justifyContent: "center" }}>
          <Text style={{ fontSize: 13, lineHeight: 19, color: theme.colors.textMuted }}>{message}</Text>
        </View>

        {status === "success" ? (
          <>
            <Btn label="📝 View Report" onPress={() => setReportOpen(true)} accent={ACCENT} full />
            <TouchableOpacity onPress={reset} style={{ marginTop: 10, alignItems: "center", paddingVertical: 8 }}>
              <Text style={{ color: "#64748b", fontWeight: "700", fontSize: 13 }}>↺ Reset Experiment</Text>
            </TouchableOpacity>
          </>
        ) : (
          <Btn label={`${step + 1} · ${STEP_LABELS[step]}`} onPress={steps[step]} accent={ACCENT} full />
        )}
      </View>

      <Modal visible={reportOpen} transparent animationType="slide" onRequestClose={() => setReportOpen(false)}>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.45)", justifyContent: "flex-end" }}>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ maxHeight: "88%" }}>
            <ScrollView style={{ maxHeight: "100%" }} contentContainerStyle={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 24, paddingBottom: 32 }} keyboardShouldPersistTaps="handled">
              <View style={{ width: 40, height: 4, backgroundColor: "#d1d5db", borderRadius: 2, alignSelf: "center", marginBottom: 18 }} />
              <Text style={{ fontSize: 26, textAlign: "center" }}>🎉</Text>
              <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>Standard Solution Made!</Text>
              <View style={{ backgroundColor: theme.colors.surfaceMuted, borderRadius: 12, padding: 14, marginVertical: 14 }}>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>• Solute: <Text style={{ fontWeight: "800" }}>{solute.name} ({solute.formula})</Text></Text>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Mass: {mass} g (M = {solute.M})</Text>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Volume: {vol} mL</Text>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Concentration: <Text style={{ fontWeight: "800", color: ACCENT }}>{c.toFixed(3)} mol dm⁻³</Text></Text>
              </View>
              <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.textMuted, marginBottom: 6 }}>Your report / observations</Text>
              <TextInput
                style={{ borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }}
                placeholder="e.g. The solution was clear and colourless after topping up to the mark."
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
