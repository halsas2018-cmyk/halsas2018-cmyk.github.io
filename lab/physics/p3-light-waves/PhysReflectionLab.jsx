import React, { useState } from "react";
import { View, Text, TouchableOpacity, StatusBar, Modal, ScrollView, KeyboardAvoidingView, Platform, TextInput } from "react-native";
import { Svg, Line } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { labStorage } from "../../../storage/labStorage";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import { ANGLE_CHOICES, reflectedAngle } from "./reflection-data";

const ACCENT = "#7c3aed";
const STEP_LABELS = ["Set θᵢ", "Shine", "Measure"];
const CX = 165, CY = 140, L = 110;

export default function PhysReflectionLab() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "p3-light-waves";
  const cfg = route.params?.config;

  const theta = cfg?.theta || 30;
  const thetaR = reflectedAngle(theta);
  const t = (theta * Math.PI) / 180;
  const Ax = CX - L * Math.sin(t), Ay = CY - L * Math.cos(t);
  const Bx = CX + L * Math.sin(t), By = CY - L * Math.cos(t);

  const [lit, setLit] = useState(false);
  const [picked, setPicked] = useState(null);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("Shine the ray to see the incident and reflected beams.");
  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  function shine() {
    haptic.light();
    setLit(true); setPicked(null); setStatus("idle");
    setMessage(`Ray strikes the mirror at θᵢ = ${theta}°. Read the reflected angle θᵣ.`);
  }

  function pick(a) {
    haptic.light();
    setPicked(a);
    if (a === thetaR) {
      setStatus("success");
      setMessage(`✅ Correct! θᵣ = ${a}° equals θᵢ = ${theta}°. The law of reflection holds.`);
    } else {
      setStatus("wrong");
      setMessage(`❌ Close — but θᵣ should equal θᵢ. You read ${a}°, the true value is ${thetaR}°.`);
    }
  }

  function reset() {
    setLit(false); setPicked(null); setStatus("idle"); setSaved(false); setNotes("");
    setMessage("Shine the ray to see the incident and reflected beams.");
  }

  async function saveReport() {
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "laws-reflection",
      experimentTitle: experiment.title || "Laws of Reflection",
      topicId,
      date: new Date().toLocaleDateString(),
      incidence: `${theta}°`,
      reflection: `${thetaR}°`,
      result: `θᵢ = θᵣ = ${theta}°`,
      status: "success",
      summary: `Shone a ray at θᵢ=${theta}° onto a plane mirror and measured θᵣ=${thetaR}°, confirming θᵢ = θᵣ.`,
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); setMessage("📝 Report saved."); } else setMessage("Could not save the report.");
  }

  const step = lit ? (status === "success" ? 3 : 2) : 0;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />
      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: ACCENT, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>{experiment.title || "Laws of Reflection"}</Text>
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
          {/* normal */}
          <Line x1={CX} y1={CY - 70} x2={CX} y2={CY + 70} stroke="#94a3b8" strokeWidth={1.5} strokeDasharray="5 4" />
          {/* mirror */}
          <Line x1={30} y1={CY} x2={300} y2={CY} stroke="#475569" strokeWidth={5} />
          {Array.from({ length: 14 }).map((_, i) => (
            <Line key={i} x1={40 + i * 19} y1={CY + 8} x2={48 + i * 19} y2={CY} stroke="#94a3b8" strokeWidth={1.5} />
          ))}
          {/* incident ray */}
          {lit && <Line x1={Ax} y1={Ay} x2={CX} y2={CY} stroke="#f59e0b" strokeWidth={3} />}
          {/* reflected ray */}
          {lit && <Line x1={CX} y1={CY} x2={Bx} y2={By} stroke="#ef4444" strokeWidth={3} />}
          {/* point of incidence */}
          <Line x1={CX - 4} y1={CY - 4} x2={CX + 4} y2={CY + 4} stroke="#0f172a" strokeWidth={2} />
          <Line x1={CX - 4} y1={CY + 4} x2={CX + 4} y2={CY - 4} stroke="#0f172a" strokeWidth={2} />
        </Svg>
        <Text style={{ fontSize: 11, color: "#64748b", fontWeight: "700", marginTop: 10 }}>
          {lit ? `θᵢ = ${theta}°  —  reflected ray shown in red` : "Mirror ready"}
        </Text>
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
          <>
            {!lit ? (
              <Btn label="💡 Shine ray" onPress={shine} accent={ACCENT} full />
            ) : (
              <>
                <Text style={{ fontSize: 11, fontWeight: "800", color: "#6b7280", marginBottom: 8, letterSpacing: 0.4 }}>READ θᵣ (reflected angle)</Text>
                <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center", marginBottom: 8 }}>
                  {ANGLE_CHOICES.map((a) => (
                    <TouchableOpacity key={a} onPress={() => pick(a)} style={{ backgroundColor: picked === a ? (status === "success" ? "#bbf7d0" : "#fee2e2") : theme.colors.bg, borderWidth: 1.5, borderColor: picked === a ? (status === "success" ? ACCENT : "#ef4444") : theme.colors.border, borderRadius: 10, paddingVertical: 8, paddingHorizontal: 12, margin: 3 }}>
                      <Text style={{ fontWeight: "800", fontSize: 13, color: picked === a ? (status === "success" ? "#14532d" : "#b91c1c") : theme.colors.textMuted }}>{a}°</Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <Btn label="↺ Reset" onPress={reset} accent="#94a3b8" full />
              </>
            )}
          </>
        )}
      </View>

      <Modal visible={reportOpen} transparent animationType="slide" onRequestClose={() => setReportOpen(false)}>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.45)", justifyContent: "flex-end" }}>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ maxHeight: "88%" }}>
            <ScrollView style={{ maxHeight: "100%" }} contentContainerStyle={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 24, paddingBottom: 32 }} keyboardShouldPersistTaps="handled">
              <View style={{ width: 40, height: 4, backgroundColor: "#d1d5db", borderRadius: 2, alignSelf: "center", marginBottom: 18 }} />
              <Text style={{ fontSize: 26, textAlign: "center" }}>🎉</Text>
              <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>Law Confirmed!</Text>
              <View style={{ backgroundColor: theme.colors.surfaceMuted, borderRadius: 12, padding: 14, marginVertical: 14 }}>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>• θᵢ (incidence): <Text style={{ fontWeight: "800" }}>{theta}°</Text></Text>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• θᵣ (reflection): {thetaR}°</Text>
                <Text style={{ fontSize: 12, color: "#94a3b8", marginTop: 6 }}>θᵢ = θᵣ ✓</Text>
              </View>
              <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.textMuted, marginBottom: 6 }}>Your report / observations</Text>
              <TextInput style={{ borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }} placeholder="e.g. Measured the angles with a protractor; both came out equal." value={notes} onChangeText={setNotes} multiline />
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
