import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, StatusBar, Modal, ScrollView, TextInput, Animated, Easing, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import { useNavigation, useRoute } from "@react-navigation/native";
import { labStorage } from "../../../storage/labStorage";
import { netDirectionLabel, osmosisExplanation } from "./cell-environment-data";
import Svg, { Path } from "react-native-svg";
import { CellMembrane, Beaker, Arrow } from "../../components/svgKit";

const GREEN = "#16a34a";

export default function BioOsmosisLab() {
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const theme = useTheme();
  const topicId = route.params?.topicId || "secA-cell-environment";
  const cfg = route.params?.config;
  const solute = cfg?.solute || { id: "sugar", name: "Sugar (sucrose)", color: "#f59e0b" };

  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState(
    `Set-up ready: dilute water on the left, concentrated ${solute.name} on the right, divided by a membrane. Press Start to watch osmosis.`
  );
  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const leftLevel = useRef(new Animated.Value(0)).current;   // 0 -> dilute side drops
  const rightLevel = useRef(new Animated.Value(0)).current;  // 0 -> concentrated side rises
  const leftPx = leftLevel.interpolate({ inputRange: [0, 1], outputRange: [95, 62] });
  const rightPx = rightLevel.interpolate({ inputRange: [0, 1], outputRange: [95, 128] });

  const molecules = useRef(
    Array.from({ length: 8 }, (_, i) => ({
      av: new Animated.Value(0),
      y: 36 + ((i * 17) % 104),
      dur: 2000 + ((i * 230) % 1100),
      x0: 50 + ((i * 11) % 30),
    }))
  ).current;
  const loopsRef = useRef([]);

  const say = (m) => setMessage(m);

  function start() {
    if (status === "running" || status === "observe" || status === "success") return;
    loopsRef.current.forEach((l) => l.stop());
    loopsRef.current = [];
    molecules.forEach((m) => {
      m.av.setValue(0);
      const l = Animated.loop(
        Animated.timing(m.av, { toValue: 1, duration: m.dur, easing: Easing.linear, useNativeDriver: false })
      );
      l.start();
      loopsRef.current.push(l);
    });
    Animated.timing(leftLevel, { toValue: 1, duration: 4000, useNativeDriver: false }).start();
    Animated.timing(rightLevel, { toValue: 1, duration: 4000, useNativeDriver: false }).start();
    setStatus("running");
    say(`💧 Water molecules are crossing the membrane from the dilute side into the ${solute.name} side. Watch carefully…`);
    Animated.delay(4200).start(() => {
      setStatus("observe");
      say(`✅ Observation complete. In which direction did water move by osmosis?`);
    });
  }

  function choose(id) {
    if (status !== "observe") return;
    if (id === "into") {
      setStatus("success");
      setSaved(false);
      setNotes("");
      say(`✅ Correct! Water moved by osmosis into the concentrated ${solute.name} side.`);
    } else {
      setStatus("failed");
      say(
        id === "out"
          ? `💡 Not quite. The concentrated side has FEWER free water molecules, so water moves INTO it — not out of it. Reset and watch again.`
          : `💡 Wrong. A concentration difference means there IS a net movement. Water moves INTO the side with more solute. Reset and watch again.`
      );
    }
  }

  function reset() {
    loopsRef.current.forEach((l) => l.stop());
    loopsRef.current = [];
    molecules.forEach((m) => m.av.setValue(0));
    leftLevel.setValue(0);
    rightLevel.setValue(0);
    setStatus("idle");
    say(`Bench reset. Dilute water (left) · concentrated ${solute.name} (right). Press Start to begin.`);
  }

  async function saveReport() {
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "osmosis",
      experimentTitle: experiment.title || "Osmosis Across a Semi-Permeable Membrane",
      topicId,
      date: new Date().toLocaleDateString(),
      solute: solute.name,
      direction: netDirectionLabel("right"),
      summary: `Water moved by osmosis ${netDirectionLabel("right")}.`,
      explanation: osmosisExplanation("right", solute.name),
      status: "success",
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); say("📝 Report saved to your phone. Review it any time from the Lab hub."); }
    else say("Could not save the report. Please try again.");
  }

  const OPTIONS = [
    { id: "into", label: "Into the concentrated solution", correct: true },
    { id: "out", label: "Out of the concentrated solution (into dilute)", correct: false },
    { id: "none", label: "Equal both ways — no net movement", correct: false },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />
      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: GREEN, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>
          {experiment.title || "Osmosis"}
        </Text>
      </View>

      {/* ===== BENCH ===== */}
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {/* scene: two beakers divided by a semi-permeable membrane */}
        <View style={{ width: 320, height: 190, position: "relative" }}>
          {/* left beaker (dilute solution) */}
          <View style={{ position: "absolute", left: 4, top: 28, width: 130, height: 150 }}>
            <Beaker w={130} h={150} fill={0} />
            <Animated.View
              style={{ position: "absolute", bottom: 6, left: 8, right: 8, height: leftPx, backgroundColor: "#bae6fd", borderRadius: 4 }}
            />
            <Text style={{ position: "absolute", top: 6, left: 0, right: 0, textAlign: "center", fontSize: 10, color: "#0369a1", fontWeight: "700" }}>
              Dilute (water)
            </Text>
          </View>

          {/* right beaker (concentrated solution) */}
          <View style={{ position: "absolute", right: 4, top: 28, width: 130, height: 150 }}>
            <Beaker w={130} h={150} fill={0} />
            <Animated.View
              style={{ position: "absolute", bottom: 6, left: 8, right: 8, height: rightPx, backgroundColor: "#fde68a", borderRadius: 4 }}
            />
            {/* solute dots */}
            {[20, 60, 100, 40, 80, 120].map((top, i) => (
              <View key={i} style={{ position: "absolute", top, left: 26 + ((i * 23) % 50), width: 7, height: 7, borderRadius: 3.5, backgroundColor: solute.color }} />
            ))}
            <Text style={{ position: "absolute", top: 6, left: 0, right: 0, textAlign: "center", fontSize: 10, color: "#92400e", fontWeight: "700" }}>
              Concentrated
            </Text>
          </View>

          {/* semi-permeable membrane (CellMembrane as a vertical partition) */}
          <View style={{ position: "absolute", left: 145, top: 28, width: 30, height: 150, alignItems: "center" }}>
            <CellMembrane w={30} h={150} type="plant" conc="" arrows={[]} />
          </View>

          {/* net water movement arrows: left (dilute) -> right (concentrated) */}
          <Svg width={320} height={190} style={{ position: "absolute", top: 0, left: 0 }}>
            <Arrow x1={72} y1={62} x2={248} y2={62} color="#2563eb" label="net water" />
            <Arrow x1={72} y1={102} x2={248} y2={102} color="#2563eb" />
            <Arrow x1={72} y1={142} x2={248} y2={142} color="#2563eb" />
          </Svg>
        </View>

        {/* water molecules crossing the membrane (keep animated wrappers) */}
        {molecules.map((m, i) => {
          const tx = m.av.interpolate({ inputRange: [0, 1], outputRange: [m.x0, m.x0 + 175] });
          const op = m.av.interpolate({ inputRange: [0, 0.12, 0.5, 0.88, 1], outputRange: [0, 1, 1, 1, 0] });
          return (
            <Animated.View
              key={i}
              style={{
                position: "absolute",
                top: m.y,
                left: 0,
                width: 12,
                height: 12,
                opacity: op,
                transform: [{ translateX: tx }],
              }}
            >
              <Drop size={12} color="#0ea5e9" />
            </Animated.View>
          );
        })}

        {status === "observe" ? (
          <View style={{ marginTop: 8, backgroundColor: "#dcfce7", borderRadius: 10, paddingHorizontal: 12, paddingVertical: 6 }}>
            <Text style={{ fontSize: 12, fontWeight: "800", color: "#166534" }}>⬇ Net water movement: INTO concentrated side</Text>
          </View>
        ) : null}
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
        ) : status === "observe" ? (
          <>
            <Text style={{ fontSize: 12, fontWeight: "800", color: theme.colors.text, marginBottom: 8 }}>Net direction of water movement:</Text>
            {OPTIONS.map((o) => (
              <TouchableOpacity key={o.id} onPress={() => choose(o.id)} style={{ backgroundColor: theme.colors.surfaceAlt, borderWidth: 1, borderColor: "#e2e8f0", borderRadius: 11, paddingVertical: 12, paddingHorizontal: 14, marginBottom: 8 }}>
                <Text style={{ fontSize: 13.5, fontWeight: "700", color: theme.colors.text }}>{o.label}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity onPress={reset} style={{ marginTop: 4, alignItems: "center", paddingVertical: 8 }}>
              <Text style={{ color: theme.colors.textMuted, fontWeight: "700", fontSize: 13 }}>↺ Reset Experiment</Text>
            </TouchableOpacity>
          </>
        ) : (
          <View style={{ flexDirection: "row" }}>
            <Btn label={status === "running" ? "💧 Osmosis in progress…" : "① Start osmosis"} onPress={() => { haptic.light(); start(); }} disabled={status === "running"} accent={GREEN} full />
          </View>
        )}
      </View>

      <Modal visible={reportOpen} transparent animationType="slide" onRequestClose={() => setReportOpen(false)}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.45)", justifyContent: "flex-end" }}>
          <ScrollView style={{ maxHeight: "88%" }} contentContainerStyle={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 24, paddingBottom: 32 }} keyboardShouldPersistTaps="handled">
            <View style={{ width: 40, height: 4, backgroundColor: "#d1d5db", borderRadius: 2, alignSelf: "center", marginBottom: 18 }} />
            <Text style={{ fontSize: 26, textAlign: "center" }}>🎉</Text>
            <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>Osmosis Demonstrated!</Text>
            <View style={{ backgroundColor: theme.colors.bg, borderRadius: 12, padding: 14, marginVertical: 14 }}>
              <Text style={{ fontSize: 13, color: theme.colors.text }}>• Solute (concentrated side): {solute.name}</Text>
              <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 4 }}>• Net water movement: <Text style={{ fontWeight: "800" }}>{netDirectionLabel("right")}</Text></Text>
              <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 6, lineHeight: 19 }}>{osmosisExplanation("right", solute.name)}</Text>
            </View>
            <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.text, marginBottom: 6 }}>Your report / observations</Text>
            <TextInput
              style={{ borderWidth: 1, borderColor: theme.colors.border, borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }}
              placeholder="e.g. The concentrated side's level rose as water moved in; solute could not cross the membrane."
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

function Drop({ size = 12, color = "#0ea5e9" }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 12 12">
      <Path d="M6 1 C6 1 11 7 11 9 A5 5 0 0 1 1 9 C1 7 6 1 6 1 Z" fill={color} />
    </Svg>
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
