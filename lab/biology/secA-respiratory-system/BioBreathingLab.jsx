import React, { useState, useRef, useEffect } from "react";
import { View, Text, TouchableOpacity, StatusBar, Modal, ScrollView, TextInput, Animated, Easing, Platform, KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import { useNavigation, useRoute } from "@react-navigation/native";
import { labStorage } from "../../../storage/labStorage";
import { getRate, breathingSummary, breathingExplanation } from "./respiratory-data";
import Svg, { Path, Rect, Ellipse, Line, Circle } from "react-native-svg";
import { TestTube, Arrow } from "../../components/svgKit";

const GREEN = "#16a34a";

export default function BioBreathingLab() {
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const theme = useTheme();
  const topicId = route.params?.topicId || "secA-respiratory-system";
  const cfg = route.params?.config;
  const rate = cfg?.rate || getRate("rest");

  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState(
    `Bench ready: bell-jar thorax model + two limewater tubes. Tap Inhale to take the first breath (${rate.label.toLowerCase()}).`
  );
  const [phase, setPhase] = useState("rest");
  const [breaths, setBreaths] = useState(0);
  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const breath = useRef(new Animated.Value(0)).current;   // 0 = exhaled, 1 = inhaled
  const exTurb = useRef(new Animated.Value(0)).current;    // exhaled limewater cloudiness 0..1
  const busy = useRef(false);                              // guards against double-tapping a breath

  // Lungs grow on inhale; diaphragm flattens & moves down on inhale.
  const lungScale = breath.interpolate({ inputRange: [0, 1], outputRange: [0.82, 1.16] });
  const diaphragmY = breath.interpolate({ inputRange: [0, 1], outputRange: [-4, 20] });
  const exTurbOpacity = exTurb.interpolate({ inputRange: [0, 1], outputRange: [0, 1] });

  const say = (m) => setMessage(m);

  // Student drives each breath manually:
  //  1) tap Inhale -> lungs fill, diaphragm pulls DOWN
  //  2) tap Exhale -> lungs shrink, diaphragm domes UP, CO2 clouds the exhaled tube
  function inhale() {
    if (busy.current) return;
    if (status === "identify" || status === "success" || status === "failed") return;
    if (phase !== "rest") return;
    busy.current = true;
    setStatus("breathing");
    setPhase("inhaling");
    breath.stopAnimation();
    say("💨 INHALE: the diaphragm contracts and pulls DOWN, the chest expands and the lungs fill with fresh (low-CO₂) air.");
    Animated.timing(breath, { toValue: 1, duration: 1700, easing: Easing.inOut(Easing.sin), useNativeDriver: false }).start(() => {
      busy.current = false;
      setPhase("exhaling");
    });
  }

  function exhale() {
    if (busy.current) return;
    if (phase !== "exhaling") return;
    busy.current = true;
    say("😤 EXHALE: the diaphragm relaxes and domes UP; air rich in CO₂ leaves the body and clouds the exhaled limewater.");
    Animated.timing(breath, { toValue: 0, duration: 1700, easing: Easing.inOut(Easing.sin), useNativeDriver: false }).start(() => {
      busy.current = false;
      const done = breaths + 1;
      setBreaths(done);
      exTurb.setValue(Math.min(1, done / rate.cycles));
      if (done >= rate.cycles) {
        setStatus("identify");
        setPhase("rest");
        say("✅ Several breaths done — the EXHALED limewater is now cloudy/milky. Now answer the question below.");
      } else {
        setPhase("rest");
        say(`✅ Breath ${done} of ${rate.cycles} complete. Tap Inhale for the next breath.`);
      }
    });
  }

  function choose(id) {
    if (status !== "identify") return;
    if (id === "correct") {
      setStatus("success");
      setSaved(false);
      setNotes("");
      say("✅ Correct! Exhaled air has more CO₂ (cloudy limewater); on inhale the diaphragm contracts and moves DOWN.");
    } else {
      setStatus("failed");
      say(
        id === "inhaled"
          ? "💡 Wrong. Fresh inhaled air has little CO₂ — ITS limewater stays clear. It is the EXHALED air that clouds the limewater. Reset and watch again."
          : id === "same"
          ? "💡 Wrong. The two air samples are NOT the same — exhaled air carries the extra CO₂ from respiration. Reset and watch again."
          : "💡 Wrong. On inhalation the diaphragm contracts and flattens DOWNWARD (it does not bulge up). Reset and watch again."
      );
    }
  }

  function reset() {
    busy.current = false;
    breath.stopAnimation(() => breath.setValue(0));
    exTurb.setValue(0);
    setBreaths(0);
    setPhase("rest");
    setStatus("idle");
    say(`Bench reset. Tap Inhale to take the first breath (${rate.label.toLowerCase()}).`);
  }

  async function saveReport() {
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "breathing-co2",
      experimentTitle: experiment.title || "Detecting Carbon Dioxide in Exhaled Air",
      topicId,
      date: new Date().toLocaleDateString(),
      condition: rate.label,
      breaths: rate.cycles,
      summary: breathingSummary(rate),
      explanation: breathingExplanation(),
      status: "success",
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); say("📝 Report saved to your phone. Review it any time from the Lab hub."); }
    else say("Could not save the report. Please try again.");
  }

  const OPTIONS = [
    { id: "correct", label: "Exhaled air has more CO₂ (cloudy limewater); on inhale the diaphragm contracts and moves DOWN.", correct: true },
    { id: "inhaled", label: "Inhaled air has more CO₂ (its limewater clouds); diaphragm moves UP on inhale.", correct: false },
    { id: "same", label: "Both air samples are identical; the diaphragm barely moves.", correct: false },
    { id: "o2", label: "Exhaled air has more O₂; the diaphragm bulges UP on inhale.", correct: false },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />
      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: GREEN, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>
          {experiment.title || "Breathing & CO₂"}
        </Text>
      </View>

      {/* ===== BENCH: fixed stage (top) + caption panel (below), never overlapping ===== */}
      <View style={{ flex: 1 }}>
        {/* ---- STAGE: centered, always visible, separate from text ---- */}
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", paddingVertical: 10 }}>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            <ThoraxModel lungScale={lungScale} diaphragmY={diaphragmY} />
            <View style={{ marginLeft: 10, alignItems: "center" }}>
              <LimeTube label="Inhaled air (fresh)" turbOpacity={0} clear />
              <View style={{ height: 10 }} />
              <LimeTube label="Exhaled air" turbOpacity={exTurbOpacity} />
            </View>
            {/* CO2 leaving the exhaled tube — its own arrow, clear of the tubes */}
            <Svg width={64} height={40} style={{ marginLeft: 2, marginTop: 70 }}>
              <Arrow x1={4} y1={20} x2={58} y2={20} color="#ea580c" w={3} />
            </Svg>
          </View>

          {/* phase badge — sits under the stage, not on the drawing */}
          <View style={{ marginTop: 14, flexDirection: "row", alignItems: "center" }}>
            <View style={{ backgroundColor: status === "breathing" ? "#e0f2fe" : theme.colors.surfaceAlt, borderRadius: 20, paddingHorizontal: 14, paddingVertical: 6, borderWidth: 1, borderColor: status === "breathing" ? "#7dd3fc" : "#e2e8f0" }}>
              <Text style={{ fontSize: 12.5, fontWeight: "800", color: status === "breathing" ? "#0369a1" : theme.colors.textMuted }}>
                {phase === "inhaling" ? "💨 Inhaling…" : phase === "exhaling" ? "😤 Exhaling…" : "🫁 At rest"}
              </Text>
            </View>
          </View>
        </View>

        {/* ---- CAPTION PANEL: instructions & legend, in their own block below the stage ---- */}
        <View style={{ paddingHorizontal: 14, paddingBottom: 4 }}>
          <View style={{ backgroundColor: theme.colors.surface, borderRadius: 12, padding: 12, borderWidth: 1, borderColor: "#e2e8f0" }}>
            <Text style={{ fontSize: 12, fontWeight: "800", color: theme.colors.text, marginBottom: 6 }}>What you are looking at</Text>
            <Text style={{ fontSize: 11.5, lineHeight: 17, color: theme.colors.text }}>
              {"🔔 Bell-jar = thorax (chest wall)\n⬇️ Rubber sheet = diaphragm (moves DOWN on inhale)\n🎈 Balloons = lungs (fill on inhale)\n🧪 Left tube: inhaled air → limewater stays CLEAR\n🧪 Right tube: exhaled air → limewater turns CLOUDY (more CO₂)\n➡️ Arrow: CO₂ leaving the body on exhale"}
            </Text>
          </View>
        </View>
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
            <Text style={{ fontSize: 12, fontWeight: "800", color: theme.colors.text, marginBottom: 8 }}>What does the cloudy limewater prove, and what happens to the diaphragm when you inhale?</Text>
            {OPTIONS.map((o) => (
              <TouchableOpacity key={o.id} onPress={() => choose(o.id)} style={{ backgroundColor: theme.colors.surfaceAlt, borderWidth: 1, borderColor: "#e2e8f0", borderRadius: 11, paddingVertical: 12, paddingHorizontal: 14, marginBottom: 8 }}>
                <Text style={{ fontSize: 13, fontWeight: "700", color: theme.colors.text }}>{o.label}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity onPress={reset} style={{ marginTop: 4, alignItems: "center", paddingVertical: 8 }}>
              <Text style={{ color: theme.colors.textMuted, fontWeight: "700", fontSize: 13 }}>↺ Reset Experiment</Text>
            </TouchableOpacity>
          </>
        ) : (
          <View>
            {phase === "inhaling" ? (
              <Btn label="💨 Inhaling… (wait)" onPress={() => {}} disabled accent={GREEN} full />
            ) : phase === "exhaling" ? (
              <Btn label="② Exhale → cloud the limewater" onPress={exhale} accent={GREEN} full />
            ) : (
              <Btn
                label={breaths > 0 ? `① Inhale again (breath ${breaths + 1} of ${rate.cycles})` : "① Inhale (fill the lungs)"}
                onPress={() => { haptic.light(); inhale(); }}
                accent={GREEN}
                full
              />
            )}
          </View>
        )}
      </View>

      <Modal visible={reportOpen} transparent animationType="slide" onRequestClose={() => setReportOpen(false)}>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.45)", justifyContent: "flex-end" }}>
          <KeyboardAvoidingView style={{ maxHeight: "88%" }} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={0}>
            <ScrollView style={{ maxHeight: "88%" }} contentContainerStyle={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 24, paddingBottom: 32 }} keyboardShouldPersistTaps="handled">
              <View style={{ width: 40, height: 4, backgroundColor: "#d1d5db", borderRadius: 2, alignSelf: "center", marginBottom: 18 }} />
              <Text style={{ fontSize: 26, textAlign: "center" }}>🎉</Text>
              <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>Practical Complete!</Text>
              <View style={{ backgroundColor: theme.colors.bg, borderRadius: 12, padding: 14, marginVertical: 14 }}>
                <Text style={{ fontSize: 13, color: theme.colors.text }}>• Condition: {rate.label}</Text>
                <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 4 }}>• Breaths demonstrated: <Text style={{ fontWeight: "800" }}>{rate.cycles}</Text></Text>
                <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 6, lineHeight: 19 }}>{breathingSummary(rate)}</Text>
                <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 6, lineHeight: 19 }}>{breathingExplanation()}</Text>
              </View>
              <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.text, marginBottom: 6 }}>Your report / observations</Text>
              <TextInput
                style={{ borderWidth: 1, borderColor: theme.colors.border, borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }}
                placeholder="e.g. Exhaled limewater turned milky; diaphragm flattened downward as air was drawn in."
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

// ---- inline thorax model (bell jar + diaphragm + lungs) ----
function ThoraxModel({ lungScale, diaphragmY }) {
  return (
    <View style={{ alignItems: "center" }}>
      <Svg width={190} height={230} viewBox="0 0 190 230">
        {/* bell jar (thorax wall) */}
        <Path
          d="M30 55 A40 40 0 0 1 160 55 L160 205 L30 205 Z"
          fill="rgba(219,234,254,0.35)"
          stroke="#93c5fd"
          strokeWidth="3"
        />
        {/* trachea + bronchi */}
        <Line x1={95} y1={20} x2={95} y2={95} stroke="#475569" strokeWidth="4" />
        <Line x1={95} y1={95} x2={68} y2={120} stroke="#475569" strokeWidth="4" />
        <Line x1={95} y1={95} x2={122} y2={120} stroke="#475569" strokeWidth="4" />
        {/* left lung */}
        <Animated.View style={{ position: "absolute", left: 30, top: 86, width: 56, height: 86, transform: [{ scale: lungScale }] }}>
          <Svg width={56} height={86} viewBox="0 0 56 86">
            <Ellipse cx={28} cy={43} rx={26} ry={42} fill="#fecaca" stroke="#ef4444" strokeWidth="2.5" />
          </Svg>
        </Animated.View>
        {/* right lung */}
        <Animated.View style={{ position: "absolute", left: 104, top: 86, width: 56, height: 86, transform: [{ scale: lungScale }] }}>
          <Svg width={56} height={86} viewBox="0 0 56 86">
            <Ellipse cx={28} cy={43} rx={26} ry={42} fill="#fecaca" stroke="#ef4444" strokeWidth="2.5" />
          </Svg>
        </Animated.View>
        {/* diaphragm (rubber sheet) */}
        <Animated.View style={{ position: "absolute", left: 30, top: 196, width: 130, transform: [{ translateY: diaphragmY }] }}>
          <Svg width={130} height={26} viewBox="0 0 130 26">
            <Path d="M2 4 Q65 22 128 4" stroke="#475569" strokeWidth="4" fill="none" />
            <Path d="M2 12 Q65 30 128 12" stroke="#475569" strokeWidth="3" fill="none" opacity="0.6" />
          </Svg>
        </Animated.View>
      </Svg>
      {/* caption below the drawing, never overlapping it */}
      <Text style={{ fontSize: 10, color: "#0369a1", fontWeight: "700", marginTop: 2 }}>Thorax model</Text>
    </View>
  );
}

// ---- limewater test tube with animated cloudiness ----
function LimeTube({ label, turbOpacity, clear }) {
  return (
    <View style={{ alignItems: "center" }}>
      <View style={{ width: 46, height: 150, position: "relative", alignItems: "center" }}>
        <TestTube w={34} h={120} fill={1} color={clear ? "#fefce8" : "#fefce8"} />
        {/* milky-white overlay — clearly visible against the cream clear liquid */}
        <Animated.View
          style={{
            position: "absolute",
            bottom: 9,
            left: 6,
            right: 6,
            height: 76,
            borderRadius: 8,
            backgroundColor: "#ffffff",
            opacity: turbOpacity,
          }}
        />
        <Text style={{ position: "absolute", bottom: -16, fontSize: 8.5, color: theme.colors.textMuted, textAlign: "center", width: 70 }}>
          {label}
        </Text>
      </View>
    </View>
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
