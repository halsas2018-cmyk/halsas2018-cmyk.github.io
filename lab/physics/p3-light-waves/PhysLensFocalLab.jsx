import React, { useState } from "react";
import { View, Text, TouchableOpacity, StatusBar, Modal, ScrollView, Animated, Easing, KeyboardAvoidingView, Platform, TextInput } from "react-native";
import { Svg, Line, Path, Ellipse } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { labStorage } from "../../../storage/labStorage";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import { F, HO, imageDistance, imageHeight, snap } from "./lens-focal-data";

const ACCENT = "#7c3aed";
const STEP_LABELS = ["Set u", "Move screen", "Result"];
const SCALE = 2, HSCALE = 4, MIDX = 165, BASEY = 130;

export default function PhysLensFocalLab() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "p3-light-waves";
  const cfg = route.params?.config;

  const u = cfg?.u || 25;
  const v = imageDistance(u);
  const vSnap = snap(v);
  const hi = imageHeight(u);

  const [screen, setScreen] = useState(40);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("Move the screen until the image is sharp.");
  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const objX = MIDX - u * SCALE;
  const imgX = MIDX + screen * SCALE;
  const objTop = BASEY - HO * HSCALE;
  const imgTop = BASEY - hi * HSCALE;
  const lensTop = BASEY - 55, lensBot = BASEY + 55;

  function move(d) {
    haptic.light();
    setScreen((s) => Math.max(20, Math.min(110, s + d)));
    setStatus("idle");
  }

  function check() {
    haptic.light();
    if (Math.abs(screen - vSnap) <= 2) {
      setStatus("success");
      setMessage(`✅ Sharp image! u=${u} cm, v≈${vSnap} cm → f = uv/(u+v) = ${((u * vSnap) / (u + vSnap)).toFixed(1)} cm.`);
    } else {
      const dir = screen < vSnap ? "Move the screen further right." : "Move the screen back left.";
      setMessage(`❌ Not sharp yet. ${dir} (target v ≈ ${vSnap} cm).`);
    }
  }

  function reset() {
    setScreen(40); setStatus("idle"); setSaved(false); setNotes("");
    setMessage("Move the screen until the image is sharp.");
  }

  async function saveReport() {
    const f = ((u * vSnap) / (u + vSnap)).toFixed(1);
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "lens-focal-length",
      experimentTitle: experiment.title || "Focal Length of a Convex Lens",
      topicId,
      date: new Date().toLocaleDateString(),
      objectDistance: `${u} cm`,
      imageDistance: `${vSnap} cm`,
      focalLength: `${f} cm`,
      result: `f ≈ ${f} cm (u=${u} cm, v=${vSnap} cm)`,
      status: "success",
      summary: `Set u=${u} cm, found sharp image at v≈${vSnap} cm, giving focal length f≈${f} cm (lens equation).`,
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); setMessage("📝 Report saved."); } else setMessage("Could not save the report.");
  }

  const step = status === "success" ? 3 : screen !== 40 ? 2 : 0;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />
      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: ACCENT, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>{experiment.title || "Convex Lens"}</Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center", paddingVertical: 10, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border, gap: 6 }}>
        {STEP_LABELS.map((l, i) => (
          <View key={l} style={{ alignItems: "center", marginHorizontal: 4 }}>
            <View style={{ width: 22, height: 22, borderRadius: 11, alignItems: "center", justifyContent: "center", backgroundColor: i < step ? ACCENT : i === step ? "#ddd6fe" : "#e5e7eb" }}>
              <Text style={{ fontSize: 11, fontWeight: "800", color: i < step ? "#fff" : "#475569" }}>{i < step ? "✓" : i + 1}</Text>
            </View>
            <Text style={{ fontSize: 9, color: "#94a3b8", marginTop: 3, fontWeight: "600" }}>{l}</Text>
          </View>
        ))}
      </View>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Svg width={330} height={200} viewBox="0 0 330 200">
          <Line x1={20} y1={BASEY} x2={310} y2={BASEY} stroke="#cbd5e1" strokeWidth={2} />
          {/* object arrow */}
          <Line x1={objX} y1={BASEY} x2={objX} y2={objTop} stroke="#16a34a" strokeWidth={3} />
          <Path d={`M${objX - 4} ${objTop + 6} L${objX} ${objTop} L${objX + 4} ${objTop + 6} Z`} fill="#16a34a" />
          {/* lens */}
          <Ellipse cx={MIDX} cy={BASEY} rx={5} ry={55} fill="#a5b4fc" opacity={0.6} stroke={ACCENT} strokeWidth={2} />
          <Line x1={MIDX} y1={lensTop} x2={MIDX} y2={lensBot} stroke={ACCENT} strokeWidth={2} />
          {/* rays */}
          <Line x1={objX} y1={objTop} x2={MIDX} y2={BASEY} stroke="#f59e0b" strokeWidth={1.5} opacity={0.8} />
          <Line x1={MIDX} y1={BASEY} x2={imgX} y2={imgTop} stroke="#f59e0b" strokeWidth={1.5} opacity={0.8} />
          <Line x1={objX} y1={objTop} x2={MIDX} y2={lensTop} stroke="#f59e0b" strokeWidth={1} opacity={0.5} />
          <Line x1={MIDX} y1={lensTop} x2={imgX} y2={imgTop} stroke="#f59e0b" strokeWidth={1} opacity={0.5} />
          {/* image arrow */}
          <Line x1={imgX} y1={BASEY} x2={imgX} y2={imgTop} stroke="#dc2626" strokeWidth={3} />
          <Path d={`M${imgX - 4} ${imgTop + 6} L${imgX} ${imgTop} L${imgX + 4} ${imgTop + 6} Z`} fill="#dc2626" />
          {/* screen */}
          <Line x1={imgX} y1={BASEY - 70} x2={imgX} y2={BASEY + 20} stroke="#0ea5e9" strokeWidth={4} />
        </Svg>
        <Text style={{ fontSize: 11, color: "#64748b", fontWeight: "700", marginTop: 10 }}>u = {u} cm  ·  screen at {screen} cm  ·  sharp image ≈ {vSnap} cm</Text>
      </View>

      <View style={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 16, paddingTop: 14, paddingBottom: 18, shadowColor: "#000", shadowOffset: { width: 0, height: -3 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 10 }}>
        <View style={{ backgroundColor: status === "success" ? "#f0fdf4" : "#eff6ff", borderRadius: 12, padding: 12, borderWidth: 1, borderColor: status === "success" ? "#bbf7d0" : "#ddd6fe", marginBottom: 12, minHeight: 58, justifyContent: "center" }}>
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
            <Btn label="◀ Screen" onPress={() => move(-5)} accent="#94a3b8" />
            <Btn label="Screen ▶" onPress={() => move(5)} accent="#94a3b8" />
            <Btn label="✓ Check" onPress={check} accent={ACCENT} />
          </View>
        )}
      </View>

      <Modal visible={reportOpen} transparent animationType="slide" onRequestClose={() => setReportOpen(false)}>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.45)", justifyContent: "flex-end" }}>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ maxHeight: "88%" }}>
            <ScrollView style={{ maxHeight: "100%" }} contentContainerStyle={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 24, paddingBottom: 32 }} keyboardShouldPersistTaps="handled">
              <View style={{ width: 40, height: 4, backgroundColor: "#d1d5db", borderRadius: 2, alignSelf: "center", marginBottom: 18 }} />
              <Text style={{ fontSize: 26, textAlign: "center" }}>🎉</Text>
              <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>Focal Length Found!</Text>
              <View style={{ backgroundColor: theme.colors.surfaceMuted, borderRadius: 12, padding: 14, marginVertical: 14 }}>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>• u (object): <Text style={{ fontWeight: "800" }}>{u} cm</Text></Text>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• v (image): {vSnap} cm</Text>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• f (focal length): {((u * vSnap) / (u + vSnap)).toFixed(1)} cm</Text>
              </View>
              <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.textMuted, marginBottom: 6 }}>Your report / observations</Text>
              <TextInput style={{ borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }} placeholder="e.g. A real, inverted image formed when the screen matched the image distance." value={notes} onChangeText={setNotes} multiline />
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
    <TouchableOpacity onPress={onPress} disabled={disabled} activeOpacity={0.85} style={{ flex: full ? undefined : 1, width: full ? "100%" : undefined, backgroundColor: disabled ? "#e5e7eb" : accent, borderRadius: 11, paddingVertical: 12, alignItems: "center", justifyContent: "center", marginHorizontal: full ? 0 : 3, opacity: disabled ? 0.55 : 1 }}>
      <Text style={{ color: disabled ? "#94a3b8" : "#fff", fontWeight: "800", fontSize: full ? 14 : 11.5 }} numberOfLines={1}>{label}</Text>
    </TouchableOpacity>
  );
}
