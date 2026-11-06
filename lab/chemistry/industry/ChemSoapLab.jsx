import React, { useState, useRef, useEffect } from "react";
import { View, Text, TouchableOpacity, StatusBar, Modal, ScrollView, Animated, Easing, KeyboardAvoidingView, Platform, TextInput } from "react-native";
import Svg, { Rect, Circle } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { labStorage } from "../../../storage/labStorage";
import { Beaker, HotPlate } from "../../components/svgKit";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import { FATS, SALT_OUT } from "./soap-data";

const ACCENT = "#16a34a";
const STEP_LABELS = ["Heat + NaOH", "Add salt", "Collect soap"];

// Bubble animation for saponification reaction
function Bubble({ delay, color, size = 8 }) {
  const y = useRef(new Animated.Value(0)).current;
  const o = useRef(new Animated.Value(0)).current;
  const x = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    let active = true;
    const run = () => {
      if (!active) return;
      y.setValue(0);
      o.setValue(0.75);
      x.setValue((Math.random() - 0.5) * 16);
      Animated.parallel([
        Animated.timing(y, { toValue: -65, duration: 1300, delay, easing: Easing.out(Easing.quad), useNativeDriver: true }),
        Animated.timing(o, { toValue: 0, duration: 1300, delay, useNativeDriver: true }),
        Animated.timing(x, { toValue: (Math.random() - 0.5) * 24, duration: 1300, delay, easing: Easing.out(Easing.quad), useNativeDriver: true }),
      ]).start(() => {
        if (active) run();
      });
    };
    run();
    return () => {
      active = false;
      y.stopAnimation();
      o.stopAnimation();
      x.stopAnimation();
    };
  }, [delay, y, o, x]);

  return (
    <Animated.View
      style={{
        position: "absolute",
        bottom: 18,
        left: "50%",
        marginLeft: -size / 2,
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: color || "#ffffff",
        opacity: o,
        transform: [{ translateY: y }, { translateX: x }],
      }}
    />
  );
}

// Soap curd particle (symmetrically spaced inside the 120px beaker)
function SoapCurd({ delay, index }) {
  const scale = useRef(new Animated.Value(0)).current;
  const o = useRef(new Animated.Value(0)).current;
  const y = useRef(new Animated.Value(15)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(scale, { toValue: 1, duration: 600, delay: delay + index * 120, easing: Easing.out(Easing.back(1.5)), useNativeDriver: true }),
      Animated.timing(o, { toValue: 1, duration: 400, delay: delay + index * 120, useNativeDriver: true }),
      Animated.timing(y, { toValue: 0, duration: 600, delay: delay + index * 120, easing: Easing.out(Easing.quad), useNativeDriver: true }),
    ]).start();
  }, [delay, index, scale, o, y]);

  // Symmetrically spaced inside the 120px beaker (x = 16 to x = 104)
  const leftPos = 16 + index * 18;

  return (
    <Animated.View
      style={{
        position: "absolute",
        bottom: 45,
        left: leftPos,
        width: 16,
        height: 12,
        borderRadius: 4,
        backgroundColor: "#ffffff",
        borderWidth: 1.5,
        borderColor: "#cbd5e1",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.12,
        shadowRadius: 2,
        elevation: 2,
        opacity: o,
        transform: [{ scale }, { translateY: y }],
      }}
    />
  );
}

export default function ChemSoapLab() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "industry";
  const cfg = route.params?.config;

  const fat = cfg?.fat || FATS[0];
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState(`Heat ${fat.name} with sodium hydroxide.`);
  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const glow = useRef(new Animated.Value(0)).current;
  const liquidFill = useRef(new Animated.Value(0.35)).current;
  const [fillState, setFillState] = useState(0.35);
  const stirSpin = useRef(new Animated.Value(0)).current;
  const [showBubbles, setShowBubbles] = useState(false);
  const [showCurds, setShowCurds] = useState(false);

  useEffect(() => {
    const id = liquidFill.addListener(({ value }) => setFillState(value));
    return () => liquidFill.removeListener(id);
  }, [liquidFill]);

  const animTo = (a, v, d = 700, native = false) => Animated.timing(a, { toValue: v, duration: d, easing: Easing.out(Easing.quad), useNativeDriver: native }).start();
  const labelStyle = { fontSize: 11, color: "#64748b", fontWeight: "700", marginTop: 12 };

  const steps = [
    () => { 
      haptic.light(); 
      setStep(1); 
      animTo(glow, 1, 500);
      animTo(liquidFill, 0.65, 1000);
      setShowBubbles(true);
      setMessage("Mixture heating — fat is reacting with NaOH (saponification). Bubbles forming...");
      // Start stirring animation
      Animated.loop(
        Animated.timing(stirSpin, { toValue: 1, duration: 1000, easing: Easing.linear, useNativeDriver: true })
      ).start();
    },
    () => { 
      haptic.light(); 
      setStep(2); 
      setShowBubbles(false);
      stirSpin.stopAnimation();
      stirSpin.setValue(0);
      setMessage(SALT_OUT + " — Adding salt to precipitate soap...");
      // Animate curds forming
      setTimeout(() => setShowCurds(true), 500);
    },
    () => { 
      haptic.light(); 
      setStep(3); 
      glow.setValue(0); 
      setStatus("success"); 
      setMessage("✅ Soap precipitated as solid curds — skim and shape it!"); 
    },
  ];

  function reset() {
    setStep(0); setStatus("idle"); setSaved(false); setNotes(""); 
    glow.setValue(0);
    liquidFill.setValue(0.35);
    setFillState(0.35);
    stirSpin.stopAnimation();
    stirSpin.setValue(0);
    setShowBubbles(false); setShowCurds(false);
    setMessage(`Heat ${fat.name} with sodium hydroxide.`);
  }

  async function saveReport() {
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "soap",
      experimentTitle: experiment.title || "Soap Preparation (Saponification)",
      topicId,
      date: new Date().toLocaleDateString(),
      fat: fat.name,
      result: "Soap precipitated (saponification)",
      status: "success",
      summary: `Heated ${fat.name} with NaOH (saponification) then added salt; soap precipitated as curds.`,
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); setMessage("📝 Report saved."); } else setMessage("Could not save the report.");
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />
      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: ACCENT, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>{experiment.title || "Soap Preparation"}</Text>
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
        {/* Glow effect */}
        <Animated.View
          pointerEvents="none"
          style={{
            position: "absolute",
            width: 170,
            height: 170,
            borderRadius: 85,
            backgroundColor: ACCENT,
            opacity: glow.interpolate({ inputRange: [0, 1], outputRange: [0, 0.12] }),
            transform: [{ scale: glow.interpolate({ inputRange: [0, 1], outputRange: [0.85, 1.1] }) }],
          }}
        />

        {/* Beaker container - exact 120x140 matching Beaker SVG */}
        <View style={{ width: 120, height: 140, position: "relative" }}>
          <Beaker w={120} h={140} fill={fillState} color="#fef08a" label="fat + NaOH" />

          {/* Stirring rod animation - centered in beaker, swirling gently */}
          <Animated.View
            style={{
              position: "absolute",
              top: 6,
              left: "50%",
              marginLeft: -2,
              transform: [
                {
                  translateX: stirSpin.interpolate({
                    inputRange: [0, 0.25, 0.5, 0.75, 1],
                    outputRange: [0, 6, 0, -6, 0],
                  }),
                },
                {
                  rotate: stirSpin.interpolate({
                    inputRange: [0, 0.25, 0.5, 0.75, 1],
                    outputRange: ["0deg", "7deg", "0deg", "-7deg", "0deg"],
                  }),
                },
              ],
            }}
          >
            <View style={{ width: 4, height: 95, backgroundColor: "#94a3b8", borderRadius: 2 }} />
          </Animated.View>

          {/* Bubbles during saponification - inside beaker liquid area */}
          {showBubbles && (
            <View style={{ position: "absolute", top: 0, left: 10, right: 10, bottom: 0 }} pointerEvents="none">
              {[0, 1, 2, 3, 4].map((i) => (
                <Bubble key={i} delay={i * 200} color="#ffffff" size={6 + (i % 3) * 2} />
              ))}
            </View>
          )}

          {/* Soap curds forming - neatly across liquid surface */}
          {showCurds && (
            <View style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }} pointerEvents="none">
              {[0, 1, 2, 3, 4].map((i) => (
                <SoapCurd key={i} delay={0} index={i} />
              ))}
            </View>
          )}
        </View>

        {/* HotPlate directly underneath beaker */}
        <HotPlate w={130} h={36} />

        <Text style={labelStyle}>
          {step === 0 ? `${fat.name} + NaOH` : step === 1 ? "Saponification in progress… 🫧" : step === 2 ? "Adding salt — curds forming…" : "Soap curds ready! 🧼"}
        </Text>
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
              <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>Soap Made!</Text>
              <View style={{ backgroundColor: theme.colors.surfaceMuted, borderRadius: 12, padding: 14, marginVertical: 14 }}>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>• Fat: <Text style={{ fontWeight: "800" }}>{fat.name}</Text></Text>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Process: saponification (fat + NaOH)</Text>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Result: soap precipitated as curds</Text>
              </View>
              <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.textMuted, marginBottom: 6 }}>Your report / observations</Text>
              <TextInput
                style={{ borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }}
                placeholder="e.g. The mixture thickened, then white curds appeared after adding salt."
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
