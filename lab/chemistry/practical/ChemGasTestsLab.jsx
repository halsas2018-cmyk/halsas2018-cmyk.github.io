import React, { useState, useRef, useEffect } from "react";
import { View, Text, TouchableOpacity, StatusBar, Modal, ScrollView, Animated, Easing, KeyboardAvoidingView, Platform, TextInput } from "react-native";
import Svg, { Path, Circle, Rect } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { labStorage } from "../../../storage/labStorage";
import { GasJar, TestTube } from "../../components/svgKit";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import { GASES } from "./gas-tests-data";

const ACCENT = "#0ea5e9";
const STEP_LABELS = ["Collect", "Run test", "Observe", "Result"];

// Gas bubble rising in jar
function GasBubble({ delay, color }) {
  const y = useRef(new Animated.Value(0)).current;
  const o = useRef(new Animated.Value(0)).current;
  const x = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const run = () => {
      y.setValue(0); o.setValue(0.7); x.setValue((Math.random() - 0.5) * 15);
      Animated.parallel([
        Animated.timing(y, { toValue: -120, duration: 1500, delay, easing: Easing.out(Easing.quad), useNativeDriver: true }),
        Animated.timing(o, { toValue: 0, duration: 1500, delay, useNativeDriver: true }),
        Animated.timing(x, { toValue: (Math.random() - 0.5) * 25, duration: 1500, delay, easing: Easing.out(Easing.quad), useNativeDriver: true }),
      ]).start(() => run());
    };
    run();
    return () => { y.stopAnimation(); o.stopAnimation(); x.stopAnimation(); };
  }, [delay, y, o, x]);
  return (
    <Animated.View style={{ position: "absolute", bottom: 15, left: "50%", marginLeft: -4, width: 8, height: 8, borderRadius: 4, backgroundColor: color, opacity: o, transform: [{ translateY: y }, { translateX: x }] }} />
  );
}

// Test-specific animation components
function LimewaterTest({ active, onComplete }) {
  const cloudy = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (active) {
      cloudy.setValue(0);
      Animated.timing(cloudy, { toValue: 1, duration: 2000, easing: Easing.out(Easing.quad), useNativeDriver: true }).start(() => {
        Animated.delay(1000).start(() => onComplete && onComplete());
      });
    }
  }, [active, cloudy, onComplete]);
  return (
    <Animated.View style={{ position: "absolute", top: 20, left: 0, right: 0, height: 80, alignItems: "center" }}>
      <View style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: cloudy.interpolate({ inputRange: [0, 1], outputRange: ["#e0f2fe", "#fef3c7"] }), borderWidth: 2, borderColor: "#94a3b8" }} />
      <Text style={{ position: "absolute", bottom: -20, fontSize: 10, color: "#64748b", fontWeight: "700" }}>Limewater</Text>
    </Animated.View>
  );
}

function GlowingSplintTest({ active, onComplete }) {
  const glow = useRef(new Animated.Value(0)).current;
  const y = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (active) {
      y.setValue(0); glow.setValue(0);
      Animated.parallel([
        Animated.timing(y, { toValue: -50, duration: 800, easing: Easing.out(Easing.quad), useNativeDriver: true }),
        Animated.timing(glow, { toValue: 1, duration: 500, useNativeDriver: true }),
      ]).start(() => {
        Animated.delay(1000).start(() => {
          Animated.parallel([
            Animated.timing(y, { toValue: 0, duration: 500, useNativeDriver: true }),
            Animated.timing(glow, { toValue: 0, duration: 500, useNativeDriver: true }),
          ]).start(() => onComplete && onComplete());
        });
      });
    }
  }, [active, y, glow, onComplete]);
  return (
    <Animated.View style={{ position: "absolute", top: 30, right: -20, transform: [{ translateY: y }] }}>
      <Svg width={40} height={70} viewBox="0 0 40 70">
        <Path d="M20 0 L20 60" stroke="#92400e" strokeWidth="4" />
        <Path d="M20 0 L14 10 L26 10 Z" fill={glow.interpolate({ inputRange: [0, 1], outputRange: ["#f59e0b", "#fbbf24"] })} />
        <Animated.View style={{ position: "absolute", top: -10, left: 5, right: 5, height: 20, borderRadius: 10, backgroundColor: "#fbbf24", opacity: glow }} />
      </Svg>
    </Animated.View>
  );
}

function PopTest({ active, onComplete }) {
  const pop = useRef(new Animated.Value(0)).current;
  const flash = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (active) {
      pop.setValue(0); flash.setValue(0);
      Animated.sequence([
        Animated.timing(pop, { toValue: 1, duration: 300, useNativeDriver: true }),
        Animated.timing(flash, { toValue: 1, duration: 100, useNativeDriver: true }),
        Animated.timing(flash, { toValue: 0, duration: 200, useNativeDriver: true }),
        Animated.timing(pop, { toValue: 0, duration: 500, useNativeDriver: true }),
      ]).start(() => {
        Animated.delay(500).start(() => onComplete && onComplete());
      });
    }
  }, [active, pop, flash, onComplete]);
  return (
    <Animated.View style={{ position: "absolute", top: 20, left: 0, right: 0, height: 80, alignItems: "center" }}>
      <Animated.View style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: flash.interpolate({ inputRange: [0, 1], outputRange: ["transparent", "#fff"] }), borderWidth: 2, borderColor: "#94a3b8" }}>
        <Animated.View style={{ flex: 1, justifyContent: "center", alignItems: "center", transform: [{ scale: pop.interpolate({ inputRange: [0, 1], outputRange: [0.5, 1.5] }) }] }}>
          <Text style={{ fontSize: 24, fontWeight: "900", color: "#dc2626" }}>💥</Text>
        </Animated.View>
      </Animated.View>
      <Text style={{ position: "absolute", bottom: -20, fontSize: 10, color: "#64748b", fontWeight: "700" }}>H₂ pop test</Text>
    </Animated.View>
  );
}

function DampLitmusTest({ active, onComplete, color }) {
  const change = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (active) {
      change.setValue(0);
      Animated.timing(change, { toValue: 1, duration: 1500, easing: Easing.out(Easing.quad), useNativeDriver: true }).start(() => {
        Animated.delay(1000).start(() => onComplete && onComplete());
      });
    }
  }, [active, change, onComplete]);
  return (
    <Animated.View style={{ position: "absolute", top: 30, left: -20 }}>
      <Svg width={30} height={60} viewBox="0 0 30 60">
        <Rect x={5} y={10} width={20} height={40} fill={change.interpolate({ inputRange: [0, 1], outputRange: ["#e0f2fe", color] })} stroke="#94a3b8" strokeWidth="1" rx={3} />
      </Svg>
      <Text style={{ position: "absolute", top: 55, left: -5, fontSize: 10, color: "#64748b", fontWeight: "700" }}>Damp litmus</Text>
    </Animated.View>
  );
}

export default function ChemGasTestsLab() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "practical";
  const cfg = route.params?.config;

  const gas = cfg?.gas || GASES[0];

  const [collected, setCollected] = useState(false);
  const [testing, setTesting] = useState(false);
  const [testDone, setTestDone] = useState(false);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("Collect the gas in the gas jar first.");
  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const fill = useRef(new Animated.Value(0)).current;
  const animTo = (a, v, d = 700, native = false) => Animated.timing(a, { toValue: v, duration: d, easing: Easing.out(Easing.quad), useNativeDriver: native }).start();

  const labelStyle = { fontSize: 11, color: "#64748b", fontWeight: "700", marginTop: 14 };

  function collect() {
    if (collected) return;
    haptic.light();
    setCollected(true);
    animTo(fill, 1, 1500);
    setMessage(`Gas collected. Now run the ${gas.test} test.`);
  }

  function runTest() {
    if (!collected || testing) return;
    haptic.light();
    setTesting(true);
    setMessage(`Running ${gas.test} test…`);
  }

  function onTestComplete() {
    setTesting(false);
    setTestDone(true);
    setStatus("success");
    setMessage(`✅ ${gas.name}: ${gas.result}.`);
  }

  function reset() {
    setCollected(false); setTesting(false); setTestDone(false); setStatus("idle"); setSaved(false); setNotes("");
    fill.setValue(0);
    setMessage("Collect the gas in the gas jar first.");
  }

  async function saveReport() {
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "gas-tests",
      experimentTitle: experiment.title || "Tests for Gases (CO2, O2, H2, NH3)",
      topicId,
      date: new Date().toLocaleDateString(),
      gas: gas.name,
      test: gas.test,
      result: gas.result,
      status: "success",
      summary: `Collected ${gas.name} and ran the ${gas.test} test — observed: ${gas.result}.`,
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); setMessage("📝 Report saved."); } else setMessage("Could not save the report.");
  }

  const step = status === "success" ? 4 : testing ? 3 : collected ? 2 : 0;

  // Determine test component based on gas
  const renderTest = () => {
    if (!testing && !testDone) return null;
    switch (gas.id) {
      case "co2":
        return <LimewaterTest active={testing || testDone} onComplete={onTestComplete} />;
      case "o2":
        return <GlowingSplintTest active={testing} onComplete={onTestComplete} />;
      case "h2":
        return <PopTest active={testing} onComplete={onTestComplete} />;
      case "nh3":
        return <DampLitmusTest active={testing || testDone} onComplete={onTestComplete} color="#fef08a" />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />
      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: ACCENT, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>{experiment.title || "Tests for Gases"}</Text>
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
        <View style={{ position: "relative", width: 100, height: 200 }}>
          <Animated.View style={{ opacity: fill }}>
            <GasJar fill={1} color={gas.color} />
            {/* Bubbles rising in gas jar during collection */}
            {(collected && !testDone) && (
              <View style={{ position: "absolute", bottom: 20, left: 0, right: 0, height: 120, alignItems: "center" }}>
                {[0, 1, 2, 3, 4].map((i) => <GasBubble key={i} delay={i * 200} color={gas.color} />)}
              </View>
            )}
          </Animated.View>
          {/* Test animation overlay */}
          {renderTest()}
        </View>
        <Text style={labelStyle}>
          {testDone ? `${gas.name} identified! ✅` : testing ? `Testing: ${gas.test}…` : collected ? `${gas.name} collected — run test` : "Empty gas jar"}
        </Text>
      </View>

      <View style={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 16, paddingTop: 14, paddingBottom: 18, shadowColor: "#000", shadowOffset: { width: 0, height: -3 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 10 }}>
        <View style={{ backgroundColor: status === "success" ? "#f0fdf4" : "#eff6ff", borderRadius: 12, padding: 12, borderWidth: 1, borderColor: status === "success" ? "#bbf7d0" : "#bae6fd", marginBottom: 12, minHeight: 58, justifyContent: "center" }}>
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
          <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
            <Btn label="① Collect" onPress={collect} disabled={collected} style={{ margin: 3 }} />
            <Btn label="② Run test" onPress={runTest} disabled={!collected || testing} accent={ACCENT} style={{ margin: 3 }} />
          </View>
        )}
      </View>

      <Modal visible={reportOpen} transparent animationType="slide" onRequestClose={() => setReportOpen(false)}>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.45)", justifyContent: "flex-end" }}>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ maxHeight: "88%" }}>
            <ScrollView style={{ maxHeight: "100%" }} contentContainerStyle={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 24, paddingBottom: 32 }} keyboardShouldPersistTaps="handled">
              <View style={{ width: 40, height: 4, backgroundColor: "#d1d5db", borderRadius: 2, alignSelf: "center", marginBottom: 18 }} />
              <Text style={{ fontSize: 26, textAlign: "center" }}>🎉</Text>
              <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>Gas Identified!</Text>
              <View style={{ backgroundColor: theme.colors.surfaceMuted, borderRadius: 12, padding: 14, marginVertical: 14 }}>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>• Gas: <Text style={{ fontWeight: "800" }}>{gas.name}</Text></Text>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Test: {gas.test}</Text>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Observed: {gas.result}</Text>
              </View>
              <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.textMuted, marginBottom: 6 }}>Your report / observations</Text>
              <TextInput
                style={{ borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }}
                placeholder="e.g. The limewater turned milky within seconds of bubbling the gas through."
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
