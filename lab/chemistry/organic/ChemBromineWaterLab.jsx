import React, { useState, useRef, useEffect } from "react";
import { View, Text, TouchableOpacity, StatusBar, Modal, ScrollView, Animated, Easing, KeyboardAvoidingView, Platform, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { labStorage } from "../../../storage/labStorage";
import { TestTube } from "../../components/svgKit";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import { BROMINE, CLEAR, SAMPLES } from "./bromine-water-data";

const ACCENT = "#16a34a";
const STEP_LABELS = ["Add sample", "Mix", "Observe", "Result"];
const TUBE_W = 54;
const TUBE_H = 170;

// Droplet falling into test tube
function Droplet({ color, onComplete }) {
  const y = useRef(new Animated.Value(-40)).current;
  const o = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    y.setValue(-40);
    o.setValue(1);
    scale.setValue(1);

    Animated.sequence([
      Animated.parallel([
        Animated.timing(y, { toValue: 65, duration: 650, easing: Easing.in(Easing.quad), useNativeDriver: true }),
        Animated.timing(o, { toValue: 1, duration: 200, useNativeDriver: true }),
      ]),
      Animated.parallel([
        Animated.timing(scale, { toValue: 0.2, duration: 180, useNativeDriver: true }),
        Animated.timing(o, { toValue: 0, duration: 180, useNativeDriver: true }),
      ]),
    ]).start(() => {
      if (mounted.current && onComplete) {
        onComplete();
      }
    });

    return () => {
      mounted.current = false;
      y.stopAnimation();
      o.stopAnimation();
      scale.stopAnimation();
    };
  }, [y, o, scale, onComplete]);

  return (
    <Animated.View
      style={{
        position: "absolute",
        top: 0,
        left: "50%",
        marginLeft: -5,
        width: 10,
        height: 14,
        borderRadius: 5,
        backgroundColor: color,
        opacity: o,
        transform: [{ translateY: y }, { scale }],
        zIndex: 5,
      }}
    />
  );
}

// Bubble animation for reaction
function ReactionBubble({ delay, color }) {
  const y = useRef(new Animated.Value(0)).current;
  const o = useRef(new Animated.Value(0)).current;
  const x = useRef(new Animated.Value(0)).current;
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    const run = () => {
      if (!mounted.current) return;
      y.setValue(0);
      o.setValue(0.7);
      x.setValue((Math.random() - 0.5) * 12);
      Animated.parallel([
        Animated.timing(y, { toValue: -75, duration: 1100, delay, easing: Easing.out(Easing.quad), useNativeDriver: true }),
        Animated.timing(o, { toValue: 0, duration: 1100, delay, useNativeDriver: true }),
        Animated.timing(x, { toValue: (Math.random() - 0.5) * 14, duration: 1100, delay, easing: Easing.out(Easing.quad), useNativeDriver: true }),
      ]).start(() => {
        if (mounted.current) run();
      });
    };
    run();
    return () => {
      mounted.current = false;
      y.stopAnimation();
      o.stopAnimation();
      x.stopAnimation();
    };
  }, [delay, y, o, x]);

  return (
    <Animated.View
      style={{
        position: "absolute",
        bottom: 25,
        left: "50%",
        marginLeft: -3,
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: color,
        opacity: o,
        transform: [{ translateY: y }, { translateX: x }],
      }}
    />
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
  const [message, setMessage] = useState("Add the sample to the orange bromine water.");
  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const glow = useRef(new Animated.Value(0)).current;
  const clearAnim = useRef(new Animated.Value(0)).current;
  const shakeAnim = useRef(new Animated.Value(0)).current;
  const shakeLoop = useRef(null);

  const [showDroplet, setShowDroplet] = useState(false);
  const [showBubbles, setShowBubbles] = useState(false);

  const animTo = (a, v, d = 700, native = false) =>
    Animated.timing(a, { toValue: v, duration: d, easing: Easing.out(Easing.quad), useNativeDriver: native }).start();
  const labelStyle = { fontSize: 12, color: "#64748b", fontWeight: "700", marginTop: 14, textAlign: "center" };

  // Wiggle / shake loop during mixing
  useEffect(() => {
    if (mixing) {
      shakeLoop.current = Animated.loop(
        Animated.sequence([
          Animated.timing(shakeAnim, { toValue: 3, duration: 80, useNativeDriver: true }),
          Animated.timing(shakeAnim, { toValue: -3, duration: 80, useNativeDriver: true }),
          Animated.timing(shakeAnim, { toValue: 0, duration: 80, useNativeDriver: true }),
        ])
      );
      shakeLoop.current.start();
    } else {
      if (shakeLoop.current) shakeLoop.current.stop();
      shakeAnim.setValue(0);
    }
    return () => {
      if (shakeLoop.current) shakeLoop.current.stop();
    };
  }, [mixing, shakeAnim]);

  // Handle completion when the droplet reaches the liquid
  const handleDropletComplete = () => {
    setShowDroplet(false);
    setMixing(true);
    setShowBubbles(true);
    animTo(glow, 1, 500, true);
    setMessage(
      sample.decolorizes
        ? "Mixing… C=C double bond reacts with bromine!"
        : "Mixing… alkane has no double bond to react with bromine."
    );

    if (sample.decolorizes) {
      // Smoothly fade from orange bromine to clear/colorless
      Animated.timing(clearAnim, {
        toValue: 1,
        duration: 2000,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: true,
      }).start(() => {
        setMixing(false);
        setShowBubbles(false);
        setStatus("success");
        haptic.success();
        setMessage("✅ Bromine water DECOLOURISED (orange → colourless)! The sample is UNSATURATED (alkene).");
      });
    } else {
      // Stays orange: no decolourisation
      setTimeout(() => {
        setMixing(false);
        setShowBubbles(false);
        setStatus("success");
        haptic.success();
        setMessage("✅ Bromine water REMAINED ORANGE! No reaction took place. The sample is SATURATED (alkane).");
      }, 2000);
    }
  };

  function addSample() {
    if (added) return;
    haptic.light();
    setAdded(true);
    setShowDroplet(true);
    setMessage("Adding sample drop by drop…");
  }

  function reset() {
    if (shakeLoop.current) shakeLoop.current.stop();
    setAdded(false);
    setMixing(false);
    setStatus("idle");
    setSaved(false);
    setNotes("");
    glow.setValue(0);
    clearAnim.setValue(0);
    shakeAnim.setValue(0);
    setShowDroplet(false);
    setShowBubbles(false);
    setMessage("Add the sample to the orange bromine water.");
  }

  async function saveReport() {
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "bromine-water",
      experimentTitle: experiment.title || "Bromine-Water Unsaturation Test",
      topicId,
      date: new Date().toLocaleDateString(),
      sample: sample.name,
      result: sample.decolorizes ? "Decolourised (orange → colourless) → unsaturated (alkene)" : "Stayed orange → saturated (alkane)",
      status: "success",
      summary: `Added ${sample.name} to orange-brown bromine water. ${sample.decolorizes ? "Orange colour disappeared rapidly; addition across the C=C double bond confirmed unsaturation (alkene)." : "Orange colour remained unchanged; no addition reaction took place (saturated alkane)." }`,
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); setMessage("📝 Report saved."); } else setMessage("Could not save the report.");
  }

  const step = status === "success" ? 4 : mixing ? 2 : added ? 1 : 0;

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
        <Animated.View
          pointerEvents="none"
          style={{
            position: "absolute",
            width: 170,
            height: 170,
            borderRadius: 85,
            backgroundColor: ACCENT,
            opacity: glow.interpolate({ inputRange: [0, 1], outputRange: [0, 0.14] }),
            transform: [{ scale: glow.interpolate({ inputRange: [0, 1], outputRange: [0.85, 1.1] }) }],
          }}
        />

        {/* Test tube container with gentle shake on mixing */}
        <Animated.View
          style={{
            transform: [
              {
                rotate: shakeAnim.interpolate({
                  inputRange: [-3, 3],
                  outputRange: ["-3.5deg", "3.5deg"],
                }),
              },
            ],
          }}
        >
          <View style={{ position: "relative", width: TUBE_W, height: TUBE_H }}>
            {/* Base layer: orange-brown bromine water */}
            <TestTube w={TUBE_W} h={TUBE_H} fill={0.6} color={BROMINE} />

            {/* Clear layer: fades in smoothly for unsaturated alkene */}
            {sample.decolorizes && (
              <Animated.View style={{ position: "absolute", top: 0, left: 0, opacity: clearAnim }}>
                <TestTube w={TUBE_W} h={TUBE_H} fill={0.6} color={CLEAR} />
              </Animated.View>
            )}

            {/* Droplet falling into tube mouth */}
            {showDroplet && (
              <Droplet
                color="#38bdf8"
                onComplete={handleDropletComplete}
              />
            )}

            {/* Reaction bubbles inside liquid */}
            {showBubbles && (
              <View style={{ position: "absolute", bottom: 25, left: 0, right: 0, height: 80, alignItems: "center" }}>
                {[0, 1, 2, 3].map((i) => (
                  <ReactionBubble key={i} delay={i * 220} color={sample.decolorizes ? "#ffffff" : "#f97316"} />
                ))}
              </View>
            )}
          </View>
        </Animated.View>

        <Text style={labelStyle}>
          {status === "success" 
            ? (sample.decolorizes ? "Colourless solution (alkene reacted) ✅" : "Orange solution unchanged (alkane) ✅") 
            : mixing 
            ? "Mixing & reacting… 🫧" 
            : added 
            ? "Sample entering tube…" 
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
                <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Result: {sample.decolorizes ? "Decolourised (orange → colourless) → unsaturated (alkene)" : "Stayed orange → saturated (alkane)"}</Text>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Mechanism: {sample.decolorizes ? "Electrophilic addition across the C=C double bond" : "No reaction (requires UV light for free radical substitution)"}</Text>
              </View>
              <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.textMuted, marginBottom: 6 }}>Your report / observations</Text>
              <TextInput
                style={{ borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }}
                placeholder="e.g. The orange colour faded rapidly within seconds — confirming an alkene with a C=C double bond."
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
