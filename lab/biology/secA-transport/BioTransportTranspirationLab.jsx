import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, StatusBar, Modal, ScrollView, TextInput, Animated, Easing, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import { useNavigation, useRoute } from "@react-navigation/native";
import { labStorage } from "../../../storage/labStorage";
import { ENV_CONDITIONS, rankOrder, rankLabel, transpirationExplanation } from "./transport-data";
import Svg, { Rect, Line, Circle } from "react-native-svg";
import { LeafSection, Arrow, Label } from "../../components/svgKit";

const GREEN = "#16a34a";

// How the bubble moves along the tube: faster (shorter sim time) under a higher rate.
const TUBE_TRAVEL = 228; // px the bubble travels from reservoir end to the plant end
const SIM_SECONDS = (rate) => Math.min(16, 50 / rate); // time-compressed for the demo

export default function BioTransportTranspirationLab() {
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const theme = useTheme();
  const topicId = route.params?.topicId || "secA-transport";
  const cfg = route.params?.config;
  const condition = cfg?.condition || ENV_CONDITIONS[0];

  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState(
    `Potometer set up in the "${condition.name}" condition. Press Start to release the air bubble and watch it move along the capillary tube.`
  );
  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const bubbleX = useRef(new Animated.Value(0)).current;
  const animRef = useRef(null);

  const say = (m) => setMessage(m);

  function start() {
    if (status === "running" || status === "success") return;
    bubbleX.setValue(0);
    setStatus("running");
    setSaved(false);
    setNotes("");
    haptic.light();
    say(`💨 Bubble released! In the "${condition.name}" condition it is moving ${condition.rate.toFixed(1)} mm/min. Watch closely…`);
    const durationMs = SIM_SECONDS(condition.rate) * 1000;
    animRef.current = Animated.timing(bubbleX, {
      toValue: TUBE_TRAVEL,
      duration: durationMs,
      easing: Easing.linear,
      useNativeDriver: true,
    });
    animRef.current.start(({ finished }) => {
      if (finished) {
        setStatus("success");
        haptic.success();
        say(`✅ Bubble reached the mark. Transpiration rate ≈ ${condition.rate.toFixed(1)} mm/min — this ranks ${rankLabel(condition.id)}.`);
      }
    });
  }

  function reset() {
    if (animRef.current) animRef.current.stop();
    bubbleX.setValue(0);
    setStatus("idle");
    say(`Bench reset in the "${condition.name}" condition. Press Start to release the bubble again.`);
  }

  async function saveReport() {
    const order = rankOrder();
    const rankLines = order
      .map((c, i) => `${i + 1}. ${c.name} — ${c.rate.toFixed(1)} mm/min`)
      .join("\n");
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "transpiration",
      experimentTitle: experiment.title || "Transpiration Rate (Potometer)",
      topicId,
      date: new Date().toLocaleDateString(),
      condition: condition.name,
      rate: condition.rate,
      rank: rankLabel(condition.id),
      rankOrder: rankLines,
      summary: `In the "${condition.name}" condition the bubble moved at ${condition.rate.toFixed(1)} mm/min (${rankLabel(condition.id)}).`,
      explanation: transpirationExplanation(condition),
      status: "success",
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); say("📝 Report saved to your phone. Review it any time from the Lab hub."); }
    else say("Could not save the report. Please try again.");
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

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />
      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: GREEN, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>
          {experiment.title || "Transpiration Rate"}
        </Text>
      </View>

      {/* ===== BENCH (fixed stage, always visible) ===== */}
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 8 }}>
        <View style={{ width: 320, height: 220, position: "relative" }}>
          <Svg width={320} height={220} style={{ position: "absolute", top: 0, left: 0 }}>
            {/* water reservoir (left) */}
            <Rect x={6} y={112} width={46} height={40} rx={8} fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="2" />
            <Rect x={9} y={126} width={40} height={23} rx={4} fill="#7dd3fc" />
            <Label x={29} y={106} text="reservoir" color="#0369a1" size={9} />

            {/* connector from reservoir to capillary tube */}
            <Rect x={52} y={128} width={10} height={8} fill="#bae6fd" />

            {/* capillary tube */}
            <Rect x={60} y={124} width={240} height={12} rx={6} fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
            {/* graduation ticks every 40px = 10 mm */}
            {[0, 40, 80, 120, 160, 200, 240].map((dx, i) => (
              <Line key={i} x1={60 + dx} y1={124} x2={60 + dx} y2={136} stroke="#cbd5e1" strokeWidth="1" />
            ))}
            {[0, 10, 20, 30, 40, 50, 60].map((mm, i) => (
              <Label key={i} x={60 + i * 40} y={146} text={`${mm}`} color="#64748b" size={8} />
            ))}
            <Label x={180} y={162} text="capillary tube (mm scale)" color="#475569" size={9} />

            {/* plant stem rising to the leafy shoot on the right */}
            <Line x1={300} y1={130} x2={300} y2={70} stroke="#15803d" strokeWidth="4" />
            <Arrow x1={300} y1={70} x2={300} y2={44} color="#15803d" />

            {/* wind / light cue arrow showing bubble direction */}
            <Arrow x1={90} y1={104} x2={210} y2={104} color={condition.color} label="air bubble" />
          </Svg>

          {/* leafy shoot (plant cutting) */}
          <View style={{ position: "absolute", top: 6, right: 8 }}>
            <LeafSection w={80} h={56} lit={condition.id !== "dark"} />
          </View>

          {/* moving air bubble */}
          <Animated.View
            style={{
              position: "absolute",
              top: 123,
              left: 62,
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: "#ef4444",
              borderWidth: 2,
              borderColor: "#fff",
              transform: [{ translateX: bubbleX }],
            }}
          />
        </View>

        {status === "success" ? (
          <View style={{ marginTop: 10, backgroundColor: "#dcfce7", borderRadius: 10, paddingHorizontal: 12, paddingVertical: 6 }}>
            <Text style={{ fontSize: 12, fontWeight: "800", color: "#166534" }}>⬇ Rate ≈ {condition.rate.toFixed(1)} mm/min · {rankLabel(condition.id)}</Text>
          </View>
        ) : null}
      </View>

      {/* ===== CONTROL PANEL ===== */}
      <View style={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 16, paddingTop: 14, paddingBottom: 18, shadowColor: "#000", shadowOffset: { width: 0, height: -3 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 10 }}>
        <View style={{ backgroundColor: status === "success" ? "#f0fdf4" : "#eff6ff", borderRadius: 12, padding: 12, borderWidth: 1, borderColor: status === "success" ? "#bbf7d0" : "#bfdbfe", marginBottom: 12, minHeight: 58, justifyContent: "center" }}>
          <Text style={{ fontSize: 13, lineHeight: 19, color: "#1f2937" }}>{message}</Text>
        </View>

        {status === "success" ? (
          <>
            <Btn label="📝 View Report" onPress={() => setReportOpen(true)} accent={GREEN} full />
            <TouchableOpacity onPress={reset} style={{ marginTop: 10, alignItems: "center", paddingVertical: 8 }}>
              <Text style={{ color: theme.colors.textMuted, fontWeight: "700", fontSize: 13 }}>↺ Reset Experiment</Text>
            </TouchableOpacity>
          </>
        ) : (
          <View style={{ flexDirection: "row" }}>
            <Btn label={status === "running" ? "💨 Bubble moving…" : "① Release bubble"} onPress={() => { haptic.light(); start(); }} disabled={status === "running"} accent={GREEN} full />
            {(status === "running") ? (
              <TouchableOpacity onPress={reset} style={{ marginLeft: 10, alignItems: "center", justifyContent: "center", paddingHorizontal: 14 }}>
                <Text style={{ color: theme.colors.textMuted, fontWeight: "700", fontSize: 13 }}>↺</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        )}
      </View>

      <Modal visible={reportOpen} transparent animationType="slide" onRequestClose={() => setReportOpen(false)}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.45)", justifyContent: "flex-end" }}>
          <ScrollView style={{ maxHeight: "88%" }} contentContainerStyle={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 24, paddingBottom: 32 }} keyboardShouldPersistTaps="handled">
            <View style={{ width: 40, height: 4, backgroundColor: "#d1d5db", borderRadius: 2, alignSelf: "center", marginBottom: 18 }} />
            <Text style={{ fontSize: 26, textAlign: "center" }}>🎉</Text>
            <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>Transpiration Measured!</Text>
            <View style={{ backgroundColor: theme.colors.bg, borderRadius: 12, padding: 14, marginVertical: 14 }}>
              <Text style={{ fontSize: 13, color: theme.colors.text }}>• Condition: {condition.name}</Text>
              <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 4 }}>• Transpiration rate: <Text style={{ fontWeight: "800" }}>{condition.rate.toFixed(1)} mm/min</Text></Text>
              <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 4 }}>• Rank: <Text style={{ fontWeight: "800" }}>{rankLabel(condition.id)}</Text></Text>
              <Text style={{ fontSize: 12, color: theme.colors.text, marginTop: 8, lineHeight: 18 }}>{transpirationExplanation(condition)}</Text>
            </View>
            <Text style={{ fontSize: 12, fontWeight: "700", color: theme.colors.text, marginTop: 6, marginBottom: 6 }}>Rank order of all conditions (fastest → slowest):</Text>
            <View style={{ backgroundColor: theme.colors.bg, borderRadius: 12, padding: 12, marginBottom: 12 }}>
              {rankOrder().map((c, i) => (
                <Text key={c.id} style={{ fontSize: 12.5, color: theme.colors.text, lineHeight: 20 }}>{i + 1}. {c.name} — {c.rate.toFixed(1)} mm/min</Text>
              ))}
            </View>
            <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.text, marginBottom: 6 }}>Your report / observations</Text>
            <TextInput
              style={{ borderWidth: 1, borderColor: theme.colors.border, borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }}
              placeholder="e.g. The bubble moved fastest in bright + windy air and barely moved in the dark. Wind removes humid air at the leaf surface."
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
        </View>
        </KeyboardAvoidingView>
      </Modal>
    </SafeAreaView>
  );
}
