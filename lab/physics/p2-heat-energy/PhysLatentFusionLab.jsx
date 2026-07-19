import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, StatusBar, Modal, ScrollView, Animated, Easing, KeyboardAvoidingView, Platform, TextInput } from "react-native";
import { Svg, Rect, Path } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { labStorage } from "../../../storage/labStorage";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import { Beaker, Thermometer } from "../../components/svgKit";
import { C, WATER_MASSES, WATER_TEMPS, ICE_MASSES, latentHeat, lOptions } from "./latent-fusion-data";

const ACCENT = "#ef4444";
const STEP_LABELS = ["Set up", "Add ice", "Result"];

export default function PhysLatentFusionLab() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "p2-heat-energy";
  const cfg = route.params?.config;

  const [mw, setMw] = useState(WATER_MASSES[1]);
  const [tw, setTw] = useState(WATER_TEMPS[1]);
  const [mice, setMice] = useState(ICE_MASSES[1]);
  const [added, setAdded] = useState(false);
  const [picked, setPicked] = useState(null);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("Set up the warm water, then add the ice.");
  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const temp = useRef(new Animated.Value(tw)).current;
  const L = latentHeat(mw, tw, mice);

  function addIce() {
    if (added) return;
    haptic.light();
    setAdded(true);
    setStatus("idle"); setPicked(null);
    Animated.timing(temp, { toValue: 0, duration: 1200, easing: Easing.out(Easing.quad), useNativeDriver: false }).start();
    setMessage(`Ice melting — the water cools to 0 °C. Energy lost by water = m_w·c·T_w = ${mw * C * tw} J; this melts ${mice} g of ice. Now pick L.`);
  }

  function pick(v) {
    haptic.light();
    setPicked(v);
    if (Math.abs(v - L) < 1) {
      setStatus("success");
      setMessage(`✅ Correct! L = m_w·c·T_w / m_ice = ${L.toFixed(0)} J/g.`);
    } else {
      setStatus("wrong");
      setMessage(`❌ Use L = m_w·c·T_w / m_ice = ${L.toFixed(0)} J/g.`);
    }
  }

  function reset() {
    setAdded(false); setPicked(null); setStatus("idle"); setSaved(false); setNotes("");
    temp.setValue(tw);
    setMessage("Set up the warm water, then add the ice.");
  }

  async function saveReport() {
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "latent-fusion",
      experimentTitle: experiment.title || "Latent Heat of Fusion of Ice",
      topicId,
      date: new Date().toLocaleDateString(),
      waterMass: `${mw} g`,
      waterTemp: `${tw} °C`,
      iceMass: `${mice} g`,
      result: `L ≈ ${L.toFixed(0)} J/g`,
      status: "success",
      summary: `Warm water (${mw} g at ${tw} °C) cooled to 0 °C, melting ${mice} g of ice; L = m_w·c·T_w/m_ice = ${L.toFixed(0)} J/g.`,
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); setMessage("📝 Report saved."); } else setMessage("Could not save the report.");
  }

  const step = status === "success" ? 3 : added ? 2 : 0;
  const Chip = ({ item, suffix, selected, onPick }) => (
    <TouchableOpacity onPress={onPick} style={{ backgroundColor: selected ? "#fee2e2" : theme.colors.surface, borderWidth: 1.5, borderColor: selected ? ACCENT : theme.colors.border, borderRadius: 10, paddingVertical: 8, paddingHorizontal: 11, margin: 3 }}>
      <Text style={{ fontWeight: "800", fontSize: 12.5, color: selected ? "#b91c1c" : theme.colors.textMuted }}>{item}{suffix}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />
      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: ACCENT, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>{experiment.title || "Latent Heat of Fusion"}</Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center", paddingVertical: 10, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border, gap: 6 }}>
        {STEP_LABELS.map((l, i) => (
          <View key={l} style={{ alignItems: "center", marginHorizontal: 4 }}>
            <View style={{ width: 22, height: 22, borderRadius: 11, alignItems: "center", justifyContent: "center", backgroundColor: i < step ? ACCENT : i === step ? "#fecaca" : "#e5e7eb" }}>
              <Text style={{ fontSize: 11, fontWeight: "800", color: i < step ? "#fff" : "#475569" }}>{i < step ? "✓" : i + 1}</Text>
            </View>
            <Text style={{ fontSize: 9, color: "#94a3b8", marginTop: 3, fontWeight: "600" }}>{l}</Text>
          </View>
        ))}
      </View>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          <Beaker fill={0.6} color="#93c5fd" label="H₂O" />
          <View style={{ marginLeft: 8, marginBottom: 10 }}>
            <Thermometer temp={temp.interpolate({ inputRange: [0, 50], outputRange: [0, 1] })} color="#ef4444" />
          </View>
        </View>
        {added && (
          <View style={{ flexDirection: "row", marginTop: 6 }}>
            {[0, 1, 2].map((i) => (
              <Svg key={i} width={26} height={26} viewBox="0 0 26 26" style={{ marginHorizontal: 2 }}>
                <Path d="M13 2 C7 8 7 16 13 24 C19 16 19 8 13 2 Z" fill="#bfdbfe" stroke="#60a5fa" strokeWidth={1.5} />
              </Svg>
            ))}
          </View>
        )}
        <Text style={{ fontSize: 11, color: "#64748b", fontWeight: "700", marginTop: 8 }}>
          {added ? "Temp → 0 °C, ice melting" : `Water: ${mw} g at ${tw} °C`}
        </Text>
      </View>

      <View style={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 16, paddingTop: 14, paddingBottom: 18, shadowColor: "#000", shadowOffset: { width: 0, height: -3 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 10 }}>
        <View style={{ backgroundColor: status === "success" ? "#f0fdf4" : "#eff6ff", borderRadius: 12, padding: 12, borderWidth: 1, borderColor: status === "success" ? "#bbf7d0" : "#fecaca", marginBottom: 12, minHeight: 58, justifyContent: "center" }}>
          <Text style={{ fontSize: 13, lineHeight: 19, color: theme.colors.textMuted }}>{message}</Text>
        </View>
        {status === "success" ? (
          <>
            <Btn label="📝 View Report" onPress={() => setReportOpen(true)} accent={ACCENT} full />
            <TouchableOpacity onPress={reset} style={{ marginTop: 10, alignItems: "center", paddingVertical: 8 }}>
              <Text style={{ color: "#64748b", fontWeight: "700", fontSize: 13 }}>↺ Reset Experiment</Text>
            </TouchableOpacity>
          </>
        ) : !added ? (
          <>
            <Text style={{ fontSize: 11, fontWeight: "800", color: "#6b7280", marginBottom: 4, letterSpacing: 0.4 }}>WATER MASS (g)</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 6 }}>
              {WATER_MASSES.map((m) => <Chip key={m} item={m} selected={mw === m} onPick={() => { setMw(m); setStatus("idle"); }} />)}
            </View>
            <Text style={{ fontSize: 11, fontWeight: "800", color: "#6b7280", marginBottom: 4, letterSpacing: 0.4 }}>WATER TEMP (°C)</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 6 }}>
              {WATER_TEMPS.map((t) => <Chip key={t} item={t} selected={tw === t} onPick={() => { setTw(t); temp.setValue(t); setStatus("idle"); }} />)}
            </View>
            <Text style={{ fontSize: 11, fontWeight: "800", color: "#6b7280", marginBottom: 4, letterSpacing: 0.4 }}>ICE MASS (g)</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 8 }}>
              {ICE_MASSES.map((m) => <Chip key={m} item={m} selected={mice === m} onPick={() => { setMice(m); setStatus("idle"); }} />)}
            </View>
            <Btn label="🧊 Add ice" onPress={addIce} accent={ACCENT} full />
          </>
        ) : (
          <>
            <Text style={{ fontSize: 11, fontWeight: "800", color: "#6b7280", marginBottom: 6, letterSpacing: 0.4 }}>PICK LATENT HEAT L (J/g)</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {lOptions(mw, tw, mice).map((v) => (
                <TouchableOpacity key={v} onPress={() => pick(v)} style={{ backgroundColor: picked === v ? (status === "success" ? "#bbf7d0" : "#fee2e2") : theme.colors.bg, borderWidth: 1.5, borderColor: picked === v ? (status === "success" ? ACCENT : "#ef4444") : theme.colors.border, borderRadius: 10, paddingVertical: 9, paddingHorizontal: 13, margin: 3 }}>
                  <Text style={{ fontWeight: "800", fontSize: 13, color: picked === v ? (status === "success" ? "#14532d" : "#b91c1c") : theme.colors.textMuted }}>{v}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <Btn label="↺ Reset" onPress={reset} accent="#94a3b8" full />
          </>
        )}
      </View>

      <Modal visible={reportOpen} transparent animationType="slide" onRequestClose={() => setReportOpen(false)}>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.45)", justifyContent: "flex-end" }}>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ maxHeight: "88%" }}>
            <ScrollView style={{ maxHeight: "100%" }} contentContainerStyle={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 24, paddingBottom: 32 }} keyboardShouldPersistTaps="handled">
              <View style={{ width: 40, height: 4, backgroundColor: "#d1d5db", borderRadius: 2, alignSelf: "center", marginBottom: 18 }} />
              <Text style={{ fontSize: 26, textAlign: "center" }}>🎉</Text>
              <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>L Determined!</Text>
              <View style={{ backgroundColor: theme.colors.surfaceMuted, borderRadius: 12, padding: 14, marginVertical: 14 }}>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>• Water: <Text style={{ fontWeight: "800" }}>{mw} g @ {tw} °C</Text></Text>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Ice: {mice} g</Text>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• L ≈ {L.toFixed(0)} J/g</Text>
              </View>
              <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.textMuted, marginBottom: 6 }}>Your report / observations</Text>
              <TextInput style={{ borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }} placeholder="e.g. The temperature held at 0 °C while the ice melted." value={notes} onChangeText={setNotes} multiline />
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
