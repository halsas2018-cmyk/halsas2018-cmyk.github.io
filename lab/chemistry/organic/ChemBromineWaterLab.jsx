import React, { useState, useRef, useEffect } from "react";
import { View, Text, TouchableOpacity, StatusBar, Modal, ScrollView, Animated, Easing, KeyboardAvoidingView, Platform, TextInput } from "react-native";
import { Svg, Path, Circle, Rect } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { labStorage } from "../../../storage/labStorage";
import { TestTube } from "../../components/svgKit";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import { BROMINE, CLEAR, SAMPLES } from "./bromine-water-data";

const ACCENT = "#16a34a";
const STEP_LABELS = ["Add sample", "Mix", "Observe", "Result"];

// Droplet falling into test tube
function Droplet({ delay, color, onComplete }) {
  const y = useRef(new Animated.Value(-50)).current;
  const o = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    const run = () => {
      y.setValue(-50); o.setValue(1); scale.setValue(1);
      Animated.sequence([
        Animated.parallel([
          Animated.timing(y, { toValue: 80, duration: 600, delay, easing: Easing.in(Easing.quad), useNativeDriver: true }),
          Animated.timing(o, { toValue: 1, duration: 200, delay, useNativeDriver: true }),
        ]),
        Animated.parallel([
          Animated.timing(scale, { toValue: 0.3, duration: 200, useNativeDriver: true }),
          Animated.timing(o, { toValue: 0, duration: 200, useNativeDriver: true }),
        ]),
      ]).start(() => {
        onComplete && onComplete();
      });
    };
    run();
    return () => { y.stopAnimation(); o.stopAnimation(); scale.stopAnimation(); };
  }, [delay, y, o, scale, onComplete]);
  return (
    <Animated.View style={{ position: "absolute", top: 0, left: "50%", marginLeft: -6, width: 12, height: 16, borderRadius: 6, backgroundColor: color, opacity: o, transform: [{ translateY: y }, { scale }] }} />
  );
}

// Color transition animation
function ColorTransition({ color, duration = 1000 }) {
  const anim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    anim.setValue(0);
    Animated.timing(anim, { toValue: 1, duration, easing: Easing.out(Easing.quad), useNativeDriver: false }).start();
  }, [color, duration, anim]);
  return anim;
}

// Bubble animation for reaction
function ReactionBubble({ delay, color }) {
  const y = useRef(new Animated.Value(0)).current;
  const o = useRef(new Animated.Value(0)).current;
  const x = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const run = () => {
      y.setValue(0); o.setValue(0.7); x.setValue((Math.random() - 0.5) * 20);
      Animated.parallel([
        Animated.timing(y, { toValue: -100, duration: 1200, delay, easing: Easing.out(Easing.quad), useNativeDriver: true }),
        Animated.timing(o, { toValue: 0, duration: 1200, delay, useNativeDriver: true }),
        Animated.timing(x, { toValue: (Math.random() - 0.5) * 30, duration: 1200, delay, easing: Easing.out(Easing.quad), useNativeDriver: true }),
      ]).start(() => run());
    };
    run();
    return () => { y.stopAnimation(); o.stopAnimation(); x.stopAnimation(); };
  }, [delay, y, o, x]);
  return (
    <Animated.View style={{ position: "absolute", bottom: 20, left: "50%", marginLeft: -4, width: 8, height: 8, borderRadius: 4, backgroundColor: color, opacity: o, transform: [{ translateY: y }, { translateX: x }] }} />
  );
}

export default function ChemBromineWaterLab() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "organic";
  const cfg = route.params?.config;

  const sample = cfg?.sample || SAMPLES[0];
  const [added, setAdded] = useState(false);
  const [mixing, setMixing] = useState(false);
  const [status, setStatus] = useState("idle");
  const [liquidColor, setLiquidColor] = useState(BROMINE);
  const [message, setMessage] = useState("Add the sample to the bromine water.");
  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const glow = useRef(new Animated.Value(0)).current;
  const colorAnim = useRef(new Animated.Value(0)).current;
  const [showDroplet, setShowDroplet] = useState(false);
  const [showBubbles, setShowBubbles] = useState(false);

  const animTo = (a, v, d = 700, native = false) => Animated.timing(a, { toValue: v, duration: d, easing: Easing.out(Easing.quad), useNativeDriver: native }).start();
  const labelStyle = { fontSize: 11, color: "#64748b", fontWeight: "700", marginTop: 14 };

  function addSample() {
    if (added) return;
    haptic.light();
    setAdded(true);
    setShowDroplet(true);
    setMessage("Adding sample…");
    
    // Animate droplet falling
    setTimeout(() => {
      setShowDroplet(false);
      setMixing(true);
      setShowBubbles(true);
      animTo(glow, 1, 500);
      setMessage("Mixing… watch for colour change.");
      
      // Animate color transition
      if (sample.decolorizes) {
        Animated.timing(colorAnim, { toValue: 1, duration: 2000, easing: Easing.out(Easing.quad), useNativeDriver: false }).start(() => {
          setLiquidColor(CLEAR);
          setMixing(false);
          setShowBubbles(false);
          setStatus("success");
          setMessage("✅ The orange colour disappeared — the sample is UNSATURATED (an alkene).");
        });
      } else {
        Animated.delay(2000).start(() => {
          setMixing(false);
          setShowBubbles(false);
          setStatus("success");
          setMessage("✅ The orange colour remained — the sample is SATURATED (an alkane, no double bond).");
        });
      }
    }, 800);
  }

  function reset() {
    setAdded(false); setMixing(false); setStatus("idle"); setSaved(false); setNotes("");
    setLiquidColor(BROMINE); glow.setValue(0); colorAnim.setValue(0);
    setShowDroplet(false); setShowBubbles(false);
    setMessage("Add the sample to the bromine water.");
  }

  async function saveReport() {
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "bromine-water",
      experimentTitle: experiment.title || "Bromine-Water Unsaturation Test",
      topicId,
      date: new Date().toLocaleDateString(),
      sample: sample.name,
      result: sample.decolorizes ? "Decolourised → unsaturated (alkene)" : "Stayed orange → saturated (alkane)",
      status: "success",
      summary: `Added ${sample.name} to bromine water. ${sample.decolorizes ? "Orange colour disappeared (unsaturation)." : "Colour stayed orange (saturated)."}`,
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); setMessage("📝 Report saved."); } else setMessage("Could not save the report.");
  }

  const step = status === "success" ? 4 : mixing ? 3 : added ? 2 : 0;

  // Interpolate color for smooth transition
  const displayColor = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [BROMINE, CLEAR],
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />
      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: ACCENT, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>{experiment.title || "Bromine-Water Test"}</Text>
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
        <Animated.View pointerEvents="none" style={{ position: "absolute", width: 160, height: 160, borderRadius: 80, backgroundColor: ACCENT, opacity: glow.interpolate({ inputRange: [0, 1], outputRange: [0, 0.12] }), transform: [{ scale: glow.interpolate({ inputRange: [0, 1], outputRange: [0.85, 1.1] }) }] }} />
        <View style={{ position: "relative", width: 60, height: 180 }}>
          <TestTube fill={0.6} color={displayColor} />
          {/* Droplet falling */}
          {showDroplet && <Droplet delay={0} color={sample.color || "#64748b"} onComplete={() => {}} />}
          {/* Reaction bubbles */}
          {showBubbles && (
            <View style={{ position: "absolute", bottom: 30, left: 0, right: 0, height: 100, alignItems: "center" }}>
              {[0, 1, 2, 3].map((i) => <ReactionBubble key={i} delay={i * 200} color={sample.decolorizes ? "#fff" : BROMINE} />)}
            </View>
          )}
        </View>
        <Text style={labelStyle}>
          {status === "success" 
            ? (sample.decolorizes ? "Colourless — unsaturated! ✅" : "Still orange — saturated ✅") 
            : mixing 
            ? "Reacting… 🫧" 
            : added 
            ? "Sample added, mixing…" 
            : "Orange bromine water"}
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
          <Btn label={added ? (mixing ? "② Mixing…" : "② Observe") : "① Add sample"} onPress={addSample} disabled={added} accent={ACCENT} full />
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
                <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>• Sample: <Text style={{ fontWeight: "800" }}>{sample.name}</Text></Text>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Result: {sample.decolorizes ? "Decolourised → unsaturated (alkene)" : "Stayed orange → saturated (alkane)"}</Text>
              </View>
              <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.textMuted, marginBottom: 6 }}>Your report / observations</Text>
              <TextInput
                style={{ borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }}
                placeholder="e.g. The orange colour faded within seconds — a clear positive test."
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
