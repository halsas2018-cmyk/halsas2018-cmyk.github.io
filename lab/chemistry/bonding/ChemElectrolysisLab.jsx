import React, { useState, useRef, useEffect } from "react";
import { View, Text, TouchableOpacity, StatusBar, Modal, ScrollView, Animated, Easing, KeyboardAvoidingView, Platform, TextInput } from "react-native";
import { Svg, Circle, Rect, Path } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { labStorage } from "../../../storage/labStorage";
import { ElectrodeCell, Battery, Bulb, Wire } from "../../components/svgKit";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import { ELECTRODES } from "./electrolysis-data";

const ACCENT = "#16a34a";
const STEP_LABELS = ["Set up", "Pass current", "Observe", "Result"];

// Copper ion (Cu²⁺) moving to cathode
function CopperIon({ delay, progress }) {
  const x = useRef(new Animated.Value(0)).current;
  const y = useRef(new Animated.Value(0)).current;
  const o = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    if (progress > 0) {
      x.setValue(0);
      y.setValue(0);
      o.setValue(0.8);
      Animated.parallel([
        Animated.timing(x, { toValue: -60, duration: 2000, delay, easing: Easing.out(Easing.quad), useNativeDriver: true }),
        Animated.timing(y, { toValue: -10, duration: 2000, delay, easing: Easing.out(Easing.quad), useNativeDriver: true }),
        Animated.timing(o, { toValue: 0, duration: 500, delay: delay + 1500, useNativeDriver: true }),
      ]).start();
    }
  }, [progress, delay, x, y, o]);

  return (
    <Animated.View style={{ 
      position: "absolute", 
      left: "50%", 
      top: "50%", 
      marginLeft: -6, 
      marginTop: -6,
      width: 12, 
      height: 12, 
      borderRadius: 6, 
      backgroundColor: "#3b82f6", 
      opacity: o,
      transform: [{ translateX: x }, { translateY: y }]
    }} />
  );
}

// Sulfate ion (SO₄²⁻) moving to anode
function SulfateIon({ delay, progress }) {
  const x = useRef(new Animated.Value(0)).current;
  const y = useRef(new Animated.Value(0)).current;
  const o = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    if (progress > 0) {
      x.setValue(0);
      y.setValue(0);
      o.setValue(0.8);
      Animated.parallel([
        Animated.timing(x, { toValue: 60, duration: 2000, delay, easing: Easing.out(Easing.quad), useNativeDriver: true }),
        Animated.timing(y, { toValue: -10, duration: 2000, delay, easing: Easing.out(Easing.quad), useNativeDriver: true }),
        Animated.timing(o, { toValue: 0, duration: 500, delay: delay + 1500, useNativeDriver: true }),
      ]).start();
    }
  }, [progress, delay, x, y, o]);

  return (
    <Animated.View style={{ 
      position: "absolute", 
      left: "50%", 
      top: "50%", 
      marginLeft: -8, 
      marginTop: -8,
      width: 16, 
      height: 16, 
      borderRadius: 8, 
      backgroundColor: "#f59e0b", 
      opacity: o,
      transform: [{ translateX: x }, { translateY: y }]
    }} />
  );
}

// Hydrogen bubbles at cathode
function HydrogenBubble({ delay, active }) {
  const y = useRef(new Animated.Value(0)).current;
  const o = useRef(new Animated.Value(0)).current;
  const x = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    if (!active) return;
    const run = () => {
      y.setValue(0); o.setValue(0.7); x.setValue((Math.random() - 0.5) * 15);
      Animated.parallel([
        Animated.timing(y, { toValue: -80, duration: 1500, delay, easing: Easing.out(Easing.quad), useNativeDriver: true }),
        Animated.timing(o, { toValue: 0, duration: 1500, delay, useNativeDriver: true }),
        Animated.timing(x, { toValue: (Math.random() - 0.5) * 20, duration: 1500, delay, easing: Easing.out(Easing.quad), useNativeDriver: true }),
      ]).start(() => run());
    };
    run();
    return () => { y.stopAnimation(); o.stopAnimation(); x.stopAnimation(); };
  }, [delay, active, y, o, x]);

  return (
    <Animated.View style={{ 
      position: "absolute", 
      bottom: 20, 
      left: "25%", 
      marginLeft: -3, 
      width: 6, 
      height: 6, 
      borderRadius: 3, 
      backgroundColor: "#fff", 
      opacity: o, 
      transform: [{ translateY: y }, { translateX: x }] 
    }} />
  );
}

// Oxygen bubbles at anode
function OxygenBubble({ delay, active }) {
  const y = useRef(new Animated.Value(0)).current;
  const o = useRef(new Animated.Value(0)).current;
  const x = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    if (!active) return;
    const run = () => {
      y.setValue(0); o.setValue(0.7); x.setValue((Math.random() - 0.5) * 15);
      Animated.parallel([
        Animated.timing(y, { toValue: -80, duration: 1500, delay, easing: Easing.out(Easing.quad), useNativeDriver: true }),
        Animated.timing(o, { toValue: 0, duration: 1500, delay, useNativeDriver: true }),
        Animated.timing(x, { toValue: (Math.random() - 0.5) * 20, duration: 1500, delay, easing: Easing.out(Easing.quad), useNativeDriver: true }),
      ]).start(() => run());
    };
    run();
    return () => { y.stopAnimation(); o.stopAnimation(); x.stopAnimation(); };
  }, [delay, active, y, o, x]);

  return (
    <Animated.View style={{ 
      position: "absolute", 
      bottom: 20, 
      left: "75%", 
      marginLeft: -3, 
      width: 6, 
      height: 6, 
      borderRadius: 3, 
      backgroundColor: "#fff", 
      opacity: o, 
      transform: [{ translateY: y }, { translateX: x }] 
    }} />
  );
}

// Copper deposit growing on cathode
function CopperDeposit({ progress }) {
  const scale = useRef(new Animated.Value(0)).current;
  const o = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    if (progress > 0) {
      Animated.parallel([
        Animated.timing(scale, { toValue: 1, duration: 1500, delay: 1000, easing: Easing.out(Easing.back(1.5)), useNativeDriver: true }),
        Animated.timing(o, { toValue: 1, duration: 1000, delay: 1000, useNativeDriver: true }),
      ]).start();
    }
  }, [progress, scale, o]);

  return (
    <Animated.View style={{ 
      position: "absolute", 
      bottom: 35, 
      left: "25%", 
      marginLeft: -20,
      width: 40, 
      height: 15, 
      borderRadius: 4, 
      backgroundColor: "#b45309", 
      borderWidth: 1, 
      borderColor: "#92400e",
      opacity: o,
      transform: [{ scale }]
    }} />
  );
}

// Anode dissolving
function AnodeDissolve({ progress }) {
  const width = useRef(new Animated.Value(40)).current;
  const o = useRef(new Animated.Value(1)).current;
  
  useEffect(() => {
    if (progress > 0) {
      Animated.parallel([
        Animated.timing(width, { toValue: 20, duration: 3000, delay: 500, easing: Easing.out(Easing.quad), useNativeDriver: true }),
        Animated.timing(o, { toValue: 0.6, duration: 3000, delay: 500, useNativeDriver: true }),
      ]).start();
    }
  }, [progress, width, o]);

  return (
    <Animated.View style={{ 
      position: "absolute", 
      bottom: 35, 
      left: "75%", 
      marginLeft: -20,
      width: width,
      height: 40, 
      borderRadius: 4, 
      backgroundColor: "#b45309", 
      borderWidth: 1, 
      borderColor: "#92400e",
      opacity: o
    }} />
  );
}

// Color transition for solution (blue to pale blue)
function SolutionColor({ progress }) {
  const anim = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    if (progress > 0) {
      Animated.timing(anim, { toValue: 1, duration: 3000, easing: Easing.out(Easing.quad), useNativeDriver: false }).start();
    }
  }, [progress, anim]);

  return anim;
}

export default function ChemElectrolysisLab() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "bonding";
  const cfg = route.params?.config;

  const elect = cfg?.elect || ELECTRODES[0];
  const [on, setOn] = useState(false);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("Set up the circuit and close the switch.");
  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);
  const [progress, setProgress] = useState(0);

  const glow = useRef(new Animated.Value(0)).current;
  const solutionColorAnim = useRef(new Animated.Value(0)).current;
  const animTo = (a, v, d = 700, native = false) => Animated.timing(a, { toValue: v, duration: d, easing: Easing.out(Easing.quad), useNativeDriver: native }).start();
  const labelStyle = { fontSize: 11, color: "#64748b", fontWeight: "700", marginTop: 12 };

  function setup() {
    haptic.light();
    setMessage("Circuit ready — close the switch to pass current.");
  }

  function passCurrent() {
    if (on) return;
    haptic.light();
    setOn(true);
    animTo(glow, 1, 500);
    animTo(solutionColorAnim, 1, 3000, false);
    setProgress(1);
    setMessage("Current flowing... Cu²⁺ ions move to cathode, SO₄²⁻ to anode. Watch the colour fade.");
    
    Animated.delay(3500).start(() => {
      setStatus("success");
      setMessage(`✅ Electrolysis complete! Cathode: ${elect.cathode}. Anode: ${elect.anode}. Solution faded from blue to pale blue.`);
    });
  }

  function reset() {
    setOn(false); setStatus("idle"); setSaved(false); setNotes(""); 
    setProgress(0);
    glow.setValue(0); 
    solutionColorAnim.setValue(0);
    setMessage("Set up the circuit and close the switch.");
  }

  async function saveReport() {
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "electrolysis-cuso4",
      experimentTitle: experiment.title || "Electrolysis of Copper(II) Sulphate",
      topicId,
      date: new Date().toLocaleDateString(),
      electrodes: elect.name,
      cathodeProduct: elect.cathode,
      anodeProduct: elect.anode,
      result: `Cathode: ${elect.cathode}; Anode: ${elect.anode}`,
      status: "success",
      summary: `Electrolysed CuSO₄ with ${elect.name}. ${elect.cathode}; ${elect.anode}. Blue solution faded as Cu²⁺ deposited.`,
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); setMessage("📝 Report saved."); } else setMessage("Could not save the report.");
  }

  const step = on ? (status === "success" ? 3 : 2) : 0;
  const stepNum = status === "success" ? 4 : on ? (status === "success" ? 3 : 2) : step;

  // Interpolate solution color from blue to pale blue
  const solutionColor = solutionColorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["#3b82f6", "#93c5fd"],
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />
      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: ACCENT, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>{experiment.title || "Electrolysis of CuSO₄"}</Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center", paddingVertical: 10, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border, gap: 6 }}>
        {STEP_LABELS.map((l, i) => (
          <View key={l} style={{ alignItems: "center", marginHorizontal: 4 }}>
            <View style={{ width: 22, height: 22, borderRadius: 11, alignItems: "center", justifyContent: "center", backgroundColor: i < stepNum ? ACCENT : i === stepNum ? "#bbf7d0" : "#e5e7eb" }}>
              <Text style={{ fontSize: 11, fontWeight: "800", color: i < stepNum ? "#fff" : "#475569" }}>{i < stepNum ? "✓" : i + 1}</Text>
            </View>
            <Text style={{ fontSize: 9, color: "#94a3b8", marginTop: 3, fontWeight: "600" }}>{l}</Text>
          </View>
        ))}
      </View>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={{ position: "relative", width: 280, height: 200 }}>
          {/* Electrode cell with animated solution color */}
          <ElectrodeCell fill={0.6} color={solutionColor} left="#b45309" right="#b45309" />
          
          {/* Moving ions animation */}
          {on && (
            <View style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none" }}>
              {/* Cu²⁺ ions moving to cathode (left) */}
              {[0, 1, 2, 3].map((i) => (
                <CopperIon key={i} delay={i * 400} progress={progress} />
              ))}
              {/* SO₄²⁻ ions moving to anode (right) */}
              {[0, 1, 2, 3].map((i) => (
                <SulfateIon key={i} delay={i * 400 + 200} progress={progress} />
              ))}
              {/* Hydrogen bubbles at cathode */}
              {[0, 1, 2].map((i) => (
                <HydrogenBubble key={i} delay={i * 300} active={on} />
              ))}
              {/* Oxygen bubbles at anode */}
              {[0, 1, 2].map((i) => (
                <OxygenBubble key={i} delay={i * 300 + 150} active={on} />
              ))}
              {/* Copper deposit on cathode */}
              <CopperDeposit progress={progress} />
              {/* Anode dissolving */}
              <AnodeDissolve progress={progress} />
            </View>
          )}
          
          {/* Labels */}
          <View style={{ position: "absolute", bottom: -30, left: "20%", marginLeft: -30, alignItems: "center" }}>
            <Text style={{ fontSize: 10, fontWeight: "700", color: "#b45309" }}>Cathode (-)</Text>
            <Text style={{ fontSize: 9, color: "#64748b" }}>Cu deposit</Text>
          </View>
          <View style={{ position: "absolute", bottom: -30, left: "80%", marginLeft: -30, alignItems: "center" }}>
            <Text style={{ fontSize: 10, fontWeight: "700", color: "#b45309" }}>Anode (+)</Text>
            <Text style={{ fontSize: 9, color: "#64748b" }}>Cu dissolves</Text>
          </View>
        </View>
        
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
          <Battery />
          <Wire d="M0 0 L20 0" />
          <Bulb lit={on} />
        </View>
        <Text style={labelStyle}>
          {status === "success" ? "Electrolysis complete ✅" : on ? "Current flowing — ions moving, colour fading…" : "Switch open"}
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
          <View style={{ flexDirection: "row" }}>
            <Btn label="① Set up" onPress={setup} disabled={on} />
            <Btn label="② Pass current" onPress={passCurrent} disabled={on} accent={ACCENT} />
          </View>
        )}
      </View>

      <Modal visible={reportOpen} transparent animationType="slide" onRequestClose={() => setReportOpen(false)}>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.45)", justifyContent: "flex-end" }}>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ maxHeight: "88%" }}>
            <ScrollView style={{ maxHeight: "100%" }} contentContainerStyle={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 24, paddingBottom: 32 }} keyboardShouldPersistTaps="handled">
              <View style={{ width: 40, height: 4, backgroundColor: "#d1d5db", borderRadius: 2, alignSelf: "center", marginBottom: 18 }} />
              <Text style={{ fontSize: 26, textAlign: "center" }}>🎉</Text>
              <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>Electrolysis Done!</Text>
              <View style={{ backgroundColor: theme.colors.surfaceMuted, borderRadius: 12, padding: 14, marginVertical: 14 }}>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>• Electrodes: <Text style={{ fontWeight: "800" }}>{elect.name}</Text></Text>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Cathode: {elect.cathode}</Text>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Anode: {elect.anode}</Text>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Observation: Blue CuSO₄ solution faded to pale blue as Cu²⁺ deposited</Text>
              </View>
              <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.textMuted, marginBottom: 6 }}>Your report / observations</Text>
              <TextInput
                style={{ borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }}
                placeholder="e.g. A pink-brown coating of copper appeared on the cathode. The blue solution became paler. Bubbles at both electrodes."
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
      style={{ flex: full ? undefined : 1, width: full ? "100%" : undefined, backgroundColor: disabled ? "#e5e7eb" : accent, borderRadius: 11, paddingVertical: 12, alignItems: "center", justifyContent: "center", marginHorizontal: full ? 0 : 3, opacity: disabled ? 0.55 : 1 }}
    >
      <Text style={{ color: disabled ? "#94a3b8" : "#fff", fontWeight: "800", fontSize: full ? 14 : 11.5 }} numberOfLines={1}>{label}</Text>
    </TouchableOpacity>
  );
}
