import React, { useState } from "react";
import { View, Text, TouchableOpacity, StatusBar, Modal, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { labStorage } from "../../../storage/labStorage";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import { WEB, ORDER, DISPLAY } from "./food-webs-data";

const ACCENT = "#16a34a";

export default function BioFoodWebsLab() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "secA-food-webs";

  const [seq, setSeq] = useState([]);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("Tap the organisms in energy-flow order (producer first).");
  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const byId = (id) => WEB.find((w) => w.id === id);

  function tap(id) {
    haptic.light();
    const next = [...seq, id];
    const idx = next.length - 1;
    if (id !== ORDER[idx]) {
      setSeq([]);
      setMessage("❌ Wrong order — energy starts with the producer (Grass). Tap again from the beginning.");
      return;
    }
    if (next.length === ORDER.length) {
      setSeq(next);
      setStatus("success");
      setMessage("✅ Food web built! Energy flows Grass → Grasshopper → Frog → Snake.");
    } else {
      setSeq(next);
      setMessage(`✅ ${byId(id).name} added (${byId(id).level}). Next trophic level →`);
    }
  }

  function reset() {
    setSeq([]); setStatus("idle"); setSaved(false); setNotes("");
    setMessage("Tap the organisms in energy-flow order (producer first).");
  }

  async function saveReport() {
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "secA-food-webs",
      experimentTitle: experiment.title || "Building Food Webs",
      topicId,
      date: new Date().toLocaleDateString(),
      chain: ORDER.map((id) => byId(id).name).join(" → "),
      result: "Built a 4-level food web",
      status: "success",
      summary: `Linked the food web: ${ORDER.map((id) => byId(id).name).join(" → ")}. Removing any level disrupts the web.`,
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); setMessage("📝 Report saved."); } else setMessage("Could not save the report.");
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />
      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: ACCENT, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>{experiment.title || "Food Webs"}</Text>
      </View>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 16 }}>
        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
          {DISPLAY.map((id) => {
            const o = byId(id);
            const picked = seq.includes(id);
            return (
              <TouchableOpacity key={id} onPress={() => tap(id)} disabled={status === "success"} style={{ backgroundColor: picked ? "#bbf7d0" : theme.colors.surface, borderWidth: 1.5, borderColor: picked ? ACCENT : theme.colors.border, borderRadius: 12, paddingVertical: 14, paddingHorizontal: 16, margin: 6, opacity: status === "success" && !picked ? 0.5 : 1 }}>
                <Text style={{ fontSize: 14, fontWeight: picked ? "800" : "600", color: picked ? "#14532d" : theme.colors.text }}>{o.name}</Text>
                <Text style={{ fontSize: 10, color: "#94a3b8", marginTop: 2 }}>{o.level}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <Text style={{ fontSize: 12, color: "#64748b", marginTop: 10, fontWeight: "700" }}>Chain so far: {seq.length ? seq.map((id) => byId(id).name).join(" → ") : "—"}</Text>
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
          <TouchableOpacity onPress={reset} style={{ alignItems: "center", paddingVertical: 8 }}>
            <Text style={{ color: "#64748b", fontWeight: "700", fontSize: 13 }}>↺ Clear chain</Text>
          </TouchableOpacity>
        )}
      </View>

      <Modal visible={reportOpen} transparent animationType="slide" onRequestClose={() => setReportOpen(false)}>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.45)", justifyContent: "flex-end" }}>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ maxHeight: "88%" }}>
            <ScrollView style={{ maxHeight: "100%" }} contentContainerStyle={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 24, paddingBottom: 32 }} keyboardShouldPersistTaps="handled">
              <View style={{ width: 40, height: 4, backgroundColor: "#d1d5db", borderRadius: 2, alignSelf: "center", marginBottom: 18 }} />
              <Text style={{ fontSize: 26, textAlign: "center" }}>🎉</Text>
              <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>Food Web Built!</Text>
              <View style={{ backgroundColor: theme.colors.surfaceMuted, borderRadius: 12, padding: 14, marginVertical: 14 }}>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>• Chain: <Text style={{ fontWeight: "800" }}>{ORDER.map((id) => byId(id).name).join(" → ")}</Text></Text>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Energy flows from producer to tertiary consumer</Text>
              </View>
              <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.textMuted, marginBottom: 6 }}>Your report / observations</Text>
              <TextInput
                style={{ borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }}
                placeholder="e.g. Removing the frog would let grasshoppers increase and starve the grass."
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
