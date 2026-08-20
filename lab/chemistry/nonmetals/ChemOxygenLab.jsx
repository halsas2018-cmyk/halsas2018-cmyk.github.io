import React, { useState, useRef, useEffect } from "react";
import { View, Text, TouchableOpacity, StatusBar, Modal, ScrollView, Animated, Easing, KeyboardAvoidingView, Platform, TextInput } from "react-native";
import { Svg, Path, Circle } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { labStorage } from "../../../storage/labStorage";
import { BunsenBurner, GasJar, BoilingTube } from "../../components/svgKit";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import { METHODS } from "./oxygen-data";

const ACCENT = "#16a34a";
const STEP_LABELS = ["React", "Collect", "Test", "Result"];

// Gas bubble particle
function GasBubble({ delay, color = "#93c5fd" }) {
  const y = useRef(new Animated.Value(0)).current;
  const o = useRef(new Animated.Value(0)).current;
  const x = useRef(new Animated.Value(0)).current;
  const mounted = useRef(true);
  useEffect(() => {
    mounted.current = true;
    const run = () => {
      if (!mounted.current) return;
      y.setValue(0); o.setValue(0.8); x.setValue((Math.random() - 0.5) * 20);
      Animated.parallel([
        Animated.timing(y, { toValue: -120, duration: 1500, delay, easing: Easing.out(Easing.quad), useNativeDriver: true }),
        Animated.timing(o, { toValue: 0, duration: 1500, delay, useNativeDriver: true }),
        Animated.timing(x, { toValue: (Math.random() - 0.5) * 30, duration: 1500, delay, easing: Easing.out(Easing.quad), useNativeDriver: true }),
      ]).start(() => {
        if (mounted.current) run();
      });
    };
    run();
    return () => { mounted.current = false; y.stopAnimation(); o.stopAnimation(); x.stopAnimation(); };
  }, [delay, y, o, x]);
  return (
    <Animated.View style={{ position: "absolute", bottom: 10, left: "50%", marginLeft: -4, width: 8, height: 8, borderRadius: 4, backgroundColor: color, opacity: o, transform: [{ translateY: y }, { translateX: x }] }} />
  );
}

// Glowing splint test animation
function SplintTest({ active, onComplete }) {
  const glow = useRef(new Animated.Value(0)).current;
  const y = useRef(new Animated.Value(0)).current;
  const mounted = useRef(true);
  useEffect(() => {
    mounted.current = true;
    if (active) {
      y.setValue(0);
      glow.setValue(0);
      Animated.parallel([
        Animated.timing(y, { toValue: -60, duration: 800, easing: Easing.out(Easing.quad), useNativeDriver: true }),
        Animated.timing(glow, { toValue: 1, duration: 500, useNativeDriver: true }),
      ]).start(() => {
        if (!mounted.current) return;
        Animated.delay(1000).start(() => {
          if (!mounted.current) return;
          Animated.parallel([
            Animated.timing(y, { toValue: 0, duration: 500, useNativeDriver: true }),
            Animated.timing(glow, { toValue: 0, duration: 500, useNativeDriver: true }),
          ]).start(() => {
            if (mounted.current) onComplete && onComplete();
          });
        });
      });
    }
    return () => { mounted.current = false; y.stopAnimation(); glow.stopAnimation(); };
  }, [active, y, glow, onComplete]);
  return (
    <Animated.View style={{ position: "absolute", bottom: 80, right: -30, transform: [{ translateY: y }] }}>
      <Svg width={40} height={80} viewBox="0 0 40 80">
        <Path d="M20 0 L20 70" stroke="#92400e" strokeWidth="4" />
        <Path d="M20 0 L14 10 L26 10 Z" fill={glow.interpolate({ inputRange: [0, 1], outputRange: ["#f59e0b", "#fbbf24"] })} />
        <Animated.View style={{ position: "absolute", top: -10, left: 5, right: 5, height: 20, borderRadius: 10, backgroundColor: "#fbbf24", opacity: glow }} />
      </Svg>
    </Animated.View>
  );
}

export default function ChemOxygenLab() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "nonmetals";
  const cfg = route.params?.config;

  const method = cfg?.method || METHODS[0];
  const [reacting, setReacting] = useState(false);
  const [collected, setCollected] = useState(false);
  const [testing, setTesting] = useState(false);
  const [testDone, setTestDone] = useState(false);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState(method.id === "kmno4" ? "Heat the potassium manganate(VII)." : "Add MnO₂ to the hydrogen peroxide.");
  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const fill = useRef(new Animated.Value(0)).current;
  const liquidFill = useRef(new Animated.Value(0)).current;
  const endpointScale = useRef(new Animated.Value(0)).current;
  const resultCardY = useRef(new Animated.Value(100)).current;
  const animTo = (a, v, d = 800, native = false) => Animated.timing(a, { toValue: v, duration: d, easing: Easing.out(Easing.quad), useNativeDriver: native }).start();
  const labelStyle = { fontSize: 11, color: "#64748b", fontWeight: "700", marginTop: 14 };

  function react() {
    if (reacting) return;
    haptic.light();
    setReacting(true);
    setMessage("Gas is being produced — lead it into the gas jar.");
    // Animate liquid in boiling tube
    animTo(liquidFill, 0.3, 1000);
    // Start gas collection after delay
    Animated.delay(1200).start(() => setCollected(true));
  }

  function collect() {
    if (!reacting || collected) return;
    haptic.light();
    animTo(fill, 1, 2000);
    animTo(liquidFill, 0.1, 2000);
    Animated.delay(2100).start(() => {
      setMessage("✅ Gas jar full of oxygen. Now test with a glowing splint.");
    });
  }

  function testOxygen() {
    if (!collected || testing) return;
    haptic.light();
    setTesting(true);
    setMessage("Testing with glowing splint…");
    // The SplintTest component will handle animation and call onComplete
  }

  function onTestComplete() {
    setTesting(false);
    setTestDone(true);
    setStatus("success");
    setMessage("✅ Oxygen confirmed! The glowing splint relit brightly.");
    // Trigger endpoint animations
    Animated.sequence([
      Animated.timing(endpointScale, { toValue: 1.2, duration: 300, easing: Easing.out(Easing.back(1.5)), useNativeDriver: true }),
      Animated.timing(endpointScale, { toValue: 1, duration: 200, useNativeDriver: true }),
    ]).start();
    Animated.timing(resultCardY, { toValue: 0, duration: 600, easing: Easing.out(Easing.quad), useNativeDriver: true }).start();
  }

  function reset() {
    setReacting(false); setCollected(false); setTesting(false); setTestDone(false); setStatus("idle"); setSaved(false); setNotes("");
    fill.setValue(0); liquidFill.setValue(0.5);
    endpointScale.setValue(0);
    resultCardY.setValue(100);
    setMessage(method.id === "kmno4" ? "Heat the potassium manganate(VII)." : "Add MnO₂ to the hydrogen peroxide.");
  }

  async function saveReport() {
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "oxygen-prep",
      experimentTitle: experiment.title || "Laboratory Preparation of Oxygen",
      topicId,
      date: new Date().toLocaleDateString(),
      method: method.name,
      equation: method.formula,
      result: "O₂ collected (relights glowing splint)",
      status: "success",
      summary: `Used ${method.name} (${method.formula}) to prepare oxygen, collected in a gas jar. Glowing splint test positive.`,
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); setMessage("📝 Report saved."); } else setMessage("Could not save the report.");
  }

  const stepNum = status === "success" ? 4 : testing ? 3 : collected ? 2 : reacting ? 1 : 0;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />
      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: ACCENT, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>{experiment.title || "Preparation of Oxygen"}</Text>
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
        <View style={{ flexDirection: "row", alignItems: "flex-end", position: "relative" }}>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <BunsenBurner flame={reacting} />
            <BoilingTube fill={liquidFill} color="#fca5a5" />
            {/* Gas bubbles in boiling tube */}
            {reacting && !collected && (
              <View style={{ position: "absolute", bottom: 40, left: 0, right: 0, height: 60, alignItems: "center" }}>
                {[0, 1, 2].map((i) => <GasBubble key={i} delay={i * 300} color="#fca5a5" />)}
              </View>
            )}
          </View>
          <Svg width={60} height={40} viewBox="0 0 60 40" style={{ marginBottom: 60 }}>
            <Path d="M10 5 L10 30 L50 30 L50 5" stroke="#94a3b8" strokeWidth="3" fill="none" />
            {/* Delivery tube bubbles */}
            {reacting && (
              <Svg width={60} height={40} viewBox="0 0 60 40" style={{ position: "absolute", top: 0, left: 0 }}>
                {[0, 1].map((i) => (
                  <GasBubble key={i} delay={i * 400} color="#93c5fd" />
                ))}
              </Svg>
            )}
          </Svg>
          <Animated.View style={{ opacity: fill }}>
            <GasJar fill={1} color="#93c5fd" />
            {/* Bubbles rising in gas jar during collection */}
            {collected && !testDone && (
              <View style={{ position: "absolute", bottom: 20, left: 0, right: 0, height: 100, alignItems: "center" }}>
                {[0, 1, 2, 3].map((i) => <GasBubble key={i} delay={i * 250} color="#93c5fd" />)}
              </View>
            )}
          </Animated.View>
          {/* Splint test animation */}
          <SplintTest active={testing} onComplete={onTestComplete} />
          
          {/* Endpoint checkmark animation */}
          {status === "success" && (
            <View style={{ position: "absolute", top: -60, left: 0, right: 0, alignItems: "center", zIndex: 10 }}>
              <Animated.View style={{ 
                width: 60, height: 60, borderRadius: 30, 
                backgroundColor: ACCENT, 
                alignItems: "center", justifyContent: "center",
                transform: [{ scale: endpointScale }],
                shadowColor: ACCENT,
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.4,
                shadowRadius: 8,
                elevation: 8,
              }}>
                <Text style={{ fontSize: 28, color: "#fff" }}>✓</Text>
              </Animated.View>
              <View style={{ marginTop: 6, paddingHorizontal: 10, paddingVertical: 3, backgroundColor: "rgba(22, 163, 74, 0.1)", borderRadius: 6, borderWidth: 1, borderColor: ACCENT }}>
                <Text style={{ fontSize: 12, fontWeight: "800", color: ACCENT, textAlign: "center" }}>
                  Oxygen confirmed — glowing splint relit!
                </Text>
              </View>
            </View>
          )}
        </View>
        <Text style={labelStyle}>
          {testDone ? "O₂ confirmed! 🔥" : testing ? "Testing with glowing splint…" : collected ? "O₂ collected — test it" : reacting ? "Gas flowing…" : "Apparatus set up"}
        </Text>
      </View>

      <View style={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 16, paddingTop: 14, paddingBottom: 18, shadowColor: "#000", shadowOffset: { width: 0, height: -3 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 10 }}>
        <View style={{ backgroundColor: status === "success" ? "#f0fdf4" : "#eff6ff", borderRadius: 12, padding: 12, borderWidth: 1, borderColor: status === "success" ? "#bbf7d0" : "#bbf7d0", marginBottom: 12, minHeight: 58, justifyContent: "center" }}>
          <Text style={{ fontSize: 13, lineHeight: 19, color: theme.colors.textMuted }}>{message}</Text>
        </View>

        {/* Result card - slides up on success */}
        <Animated.View style={{ 
          position: "absolute", 
          bottom: 20, 
          left: 16, 
          right: 16,
          backgroundColor: "#f0fdf4",
          borderWidth: 2,
          borderColor: ACCENT,
          borderRadius: 16,
          padding: 16,
          transform: [{ translateY: resultCardY }],
          zIndex: 20,
          shadowColor: ACCENT,
          shadowOffset: { width: 0, height: 6 },
          shadowOpacity: 0.3,
          shadowRadius: 12,
          elevation: 10,
        }}>
          <Text style={{ fontSize: 16, fontWeight: "900", color: ACCENT, textAlign: "center", marginBottom: 8 }}>
            🎉 Experiment Complete!
          </Text>
          <View style={{ backgroundColor: "#dcfce7", borderRadius: 8, padding: 10 }}>
            <Text style={{ fontSize: 12, fontWeight: "700", color: "#14532d", textAlign: "center" }}>
              Method: {method.name}
            </Text>
            <Text style={{ fontSize: 12, fontWeight: "700", color: "#14532d", textAlign: "center", marginTop: 2 }}>
              Equation: {method.formula}
            </Text>
            <Text style={{ fontSize: 12, fontWeight: "700", color: "#14532d", textAlign: "center", marginTop: 2 }}>
              Result: O₂ collected (relights glowing splint) ✓
            </Text>
          </Text>
        </Animated.View>

        {status === "success" ? (
          <View style={{ width: "100%" }}>
            <Btn label="📝 View Report" onPress={() => setReportOpen(true)} accent={ACCENT} full />
            <TouchableOpacity onPress={reset} style={{ marginTop: 10, alignItems: "center", paddingVertical: 8 }}>
              <Text style={{ color: "#64748b", fontWeight: "700", fontSize: 13 }}>↺ Reset Experiment</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
            <Btn label="① React" onPress={react} disabled={reacting} style={{ margin: 3 }} />
            <Btn label="② Collect" onPress={collect} disabled={!reacting || collected} accent={ACCENT} style={{ margin: 3 }} />
            <Btn label="③ Test O₂" onPress={testOxygen} disabled={!collected || testing || testDone} accent="#f59e0b" style={{ margin: 3 }} />
          </View>
        )}
      </View>

      <Modal visible={reportOpen} transparent animationType="slide" onRequestClose={() => setReportOpen(false)}>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.45)", justifyContent: "flex-end" }}>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ maxHeight: "88%" }}>
            <ScrollView style={{ maxHeight: "100%" }} contentContainerStyle={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 24, paddingBottom: 32 }} keyboardShouldPersistTaps="handled">
              <View style={{ width: 40, height: 4, backgroundColor: "#d1d5db", borderRadius: 2, alignSelf: "center", marginBottom: 18 }} />
              <Text style={{ fontSize: 26, textAlign: "center" }}>🎉</Text>
              <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>Oxygen Prepared!</Text>
              <View style={{ backgroundColor: theme.colors.surfaceMuted, borderRadius: 12, padding: 14, marginVertical: 14 }}>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>• Method: <Text style={{ fontWeight: "800" }}>{method.name}</Text></Text>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Equation: {method.formula}</Text>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Result: O₂ collected (relights glowing splint)</Text>
              </View>
              <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.textMuted, marginBottom: 6 }}>Your report / observations</Text>
              <TextInput
                style={{ borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }}
                placeholder="e.g. The gas jar filled from the bottom up as oxygen displaced the air. Glowing splint relit instantly."
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

function Btn({ label, onPress, disabled, accent = ACCENT, full, style }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.85}
      style={{ flex: full ? undefined : 1, width: full ? "100%" : undefined, backgroundColor: disabled ? "#e5e7eb" : accent, borderRadius: 11, paddingVertical: 12, alignItems: "center", justifyContent: "center", marginHorizontal: full ? 0 : 3, opacity: disabled ? 0.55 : 1, ...style }}
    >
      <Text style={{ color: disabled ? "#94a3b8" : "#fff", fontWeight: "800", fontSize: full ? 14 : 11.5 }} numberOfLines={1}>{label}</Text>
    </TouchableOpacity>
  );
}
