import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Modal,
  ScrollView,
  Animated,
  Easing,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { labStorage } from "../../../storage/labStorage";
import { MEDIA, mediaById, refract } from "./refraction-data";
import Svg, { Line } from "react-native-svg";
import { RayBox, GlassBlock, LightRay, NormalLine, Protractor } from "../../components/svgKit";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";

const ACCENT = "#7c3aed";
const STEP_LABELS = ["Set up", "Shine", "Measure"];

export default function PhysicsRefractionLab() {
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "p3-light-waves";
  const cfg = route.params?.config;
  const theme = useTheme();

  const [m1, setM1] = useState(cfg?.m1 || "air");
  const [m2, setM2] = useState(cfg?.m2 || "glass");
  const [theta1, setTheta1] = useState(cfg?.theta1 || 30);

  const [stageW, setStageW] = useState(0);
  const [stageH, setStageH] = useState(0);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState(
    "Pick the two media & the incident angle, then Shine the ray and read the refracted angle θ₂."
  );
  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const upper = mediaById(m1);
  const lower = mediaById(m2);
  const res = refract(upper.n, lower.n, theta1);

  const pAni = useRef(new Animated.Value(0)).current;
  const aniRef = useRef(null);

  // Geometry (computed when stage measured / params change).
  let cx = stageW / 2;
  let cy = stageH / 2;
  let rayLen = 0;
  let A = null, P = null, B = null, C = null;
  if (stageW > 0 && stageH > 0) {
    rayLen = Math.min(cx, cy) - 32;
    const t1 = (theta1 * Math.PI) / 180;
    P = { x: cx, y: cy };
    A = { x: cx - rayLen * Math.sin(t1), y: cy - rayLen * Math.cos(t1) };
    if (!res.tir && res.theta2 != null) {
      const t2 = (res.theta2 * Math.PI) / 180;
      B = { x: cx + rayLen * Math.sin(t2), y: cy + rayLen * Math.cos(t2) };
    } else {
      // total internal reflection: reflect down-left
      C = { x: cx - rayLen * Math.sin(t1), y: cy + rayLen * Math.cos(t1) };
    }
  }

  const endX = res.tir ? (C ? C.x : cx) : B ? B.x : cx;
  const endY = res.tir ? (C ? C.y : cy) : B ? B.y : cy;
  const dotX = pAni.interpolate({
    inputRange: [0, 1, 2],
    outputRange: A ? [A.x, P.x, endX] : [cx, cx, cx],
  });
  const dotY = pAni.interpolate({
    inputRange: [0, 1, 2],
    outputRange: A ? [A.y, P.y, endY] : [cy, cy, cy],
  });

  useEffect(() => {
    if (!A) return;
    if (aniRef.current) aniRef.current.stop();
    pAni.setValue(0);
    aniRef.current = Animated.loop(
      Animated.timing(pAni, { toValue: 2, duration: 2000, easing: Easing.linear, useNativeDriver: false })
    );
    aniRef.current.start();
    return () => aniRef.current && aniRef.current.stop();
  }, [theta1, m1, m2, stageW, stageH, A]);

  const say = (m) => setMessage(m);

  function shine() {
    haptic.light();
    setStatus("running");
    if (res.tir) {
      say(`🔁 Total Internal Reflection! θ₁ = ${theta1}° exceeds the critical angle ${res.critical.toFixed(1)}°, so the ray reflects back into ${upper.name}. No refracted ray.`);
    } else {
      say(`✅ Ray bends to θ₂ = ${res.theta2.toFixed(1)}° (${lower.n > upper.n ? "toward" : "away from"} the normal). Tap Measure to log it.`);
    }
  }

  function measure() {
    haptic.light();
    if (status !== "running") return say("Shine the ray first, then Measure.");
    setSaved(false);
    setNotes("");
    setStatus("success");
  }

  function reset() {
    haptic.light();
    if (aniRef.current) aniRef.current.stop();
    pAni.setValue(0);
    setStatus("idle");
    say("Bench reset. Shine the ray again to re-measure.");
  }

  async function saveReport() {
    haptic.light();
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "p3-light-waves",
      experimentTitle: experiment.title || "Refraction of Light",
      topicId,
      date: new Date().toLocaleDateString(),
      upper: upper.name,
      lower: lower.name,
      n1: upper.n,
      n2: lower.n,
      theta1,
      theta2: res.tir ? null : parseFloat(res.theta2.toFixed(2)),
      tir: res.tir,
      critical: res.critical != null ? parseFloat(res.critical.toFixed(2)) : null,
      status: "success",
      summary: res.tir
        ? `TIR at θ₁=${theta1}° (${upper.name}→${lower.name}).`
        : `θ₂=${res.theta2.toFixed(1)}° via n₁sinθ₁=n₂sinθ₂.`,
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); say("📝 Report saved to your phone."); }
    else say("Could not save the report. Please try again.");
  }

  const step = status === "idle" ? 0 : status === "success" ? 2 : 1;

  const MediaChip = ({ m, sel, onPick }) => (
    <TouchableOpacity key={m.id} onPress={onPick} style={{ flex: 1, marginHorizontal: 3, backgroundColor: sel ? ACCENT : theme.colors.surfaceMuted, borderRadius: 8, paddingVertical: 8 }}>
      <Text style={{ textAlign: "center", fontSize: 11, fontWeight: "800", color: sel ? "#fff" : theme.colors.textMuted }}>{m.name}</Text>
      <Text style={{ textAlign: "center", fontSize: 9, color: sel ? "#ede9fe" : theme.colors.textFaint }}>n={m.n}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />
      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: ACCENT, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>
          {experiment.title || "Refraction of Light"}
        </Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center", paddingVertical: 10, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.borderSoft, gap: 6 }}>
        {STEP_LABELS.map((l, i) => (
          <View key={l} style={{ alignItems: "center", marginHorizontal: 4 }}>
            <View style={{ width: 22, height: 22, borderRadius: 11, alignItems: "center", justifyContent: "center", backgroundColor: i < step ? ACCENT : i === step ? "#ddd6fe" : theme.colors.border }}>
              <Text style={{ fontSize: 11, fontWeight: "800", color: i < step ? "#fff" : theme.colors.textMuted }}>{i < step ? "✓" : i + 1}</Text>
            </View>
            <Text style={{ fontSize: 9, color: theme.colors.textMuted, marginTop: 3, fontWeight: "600" }}>{l}</Text>
          </View>
        ))}
      </View>

      {/* ===== BENCH / STAGE ===== */}
      <View
        onLayout={(e) => {
          setStageW(e.nativeEvent.layout.width);
          setStageH(e.nativeEvent.layout.height);
        }}
        style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: theme.colors.surfaceMuted }}
      >
        {stageW > 0 ? (
          <View style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }}>
            {/* upper medium fill */}
            <View style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: cy, backgroundColor: upper.color }} />

            {/* glass block (lower medium) */}
            <View style={{ position: "absolute", left: 0, top: cy, right: 0, bottom: 0 }}>
              <GlassBlock w={stageW} h={Math.max(stageH - cy, 1)} />
            </View>

            {/* rays + geometry overlay */}
            <Svg width={stageW} height={stageH} style={{ position: "absolute", left: 0, top: 0 }}>
              <Line x1={0} y1={cy} x2={stageW} y2={cy} stroke="#475569" strokeWidth={2} />
              <NormalLine x={cx} y1={cy - rayLen - 10} y2={cy + rayLen + 10} />
              <Protractor cx={cx} cy={cy} r={Math.min(rayLen + 6, Math.min(cx, cy) - 4)} />
              {A && <LightRay x1={A.x} y1={A.y} x2={P.x} y2={P.y} color="#dc2626" w={4} />}
              {!res.tir && B && <LightRay x1={P.x} y1={P.y} x2={B.x} y2={B.y} color="#16a34a" w={4} />}
              {res.tir && C && <LightRay x1={P.x} y1={P.y} x2={C.x} y2={C.y} color="#16a34a" w={4} />}
            </Svg>

            {/* ray box at incident source */}
            {A && (
              <View style={{ position: "absolute", left: A.x - 30, top: A.y - 18, transform: [{ rotate: `${90 - theta1}deg` }] }}>
                <RayBox />
              </View>
            )}

            {/* moving photon */}
            {A && (
              <Animated.View
                style={{ position: "absolute", width: 12, height: 12, borderRadius: 6, backgroundColor: "#fde047", borderWidth: 1.5, borderColor: "#ca8a04", left: dotX, top: dotY, zIndex: 5, shadowColor: "#fde047", shadowOpacity: 0.9, shadowRadius: 6 }}
              />
            )}

            {/* labels */}
            <Text style={{ position: "absolute", top: 8, left: 8, fontSize: 11, fontWeight: "800", color: "#334155" }}>{upper.name} (n={upper.n})</Text>
            <Text style={{ position: "absolute", bottom: 8, left: 8, fontSize: 11, fontWeight: "800", color: "#334155" }}>{lower.name} (n={lower.n})</Text>
            <Text style={{ position: "absolute", top: cy - 18, left: cx + 6, fontSize: 10, color: "#dc2626", fontWeight: "800" }}>θ₁={theta1}°</Text>
            {!res.tir && B && <Text style={{ position: "absolute", top: cy + 6, left: cx + 6, fontSize: 10, color: "#16a34a", fontWeight: "800" }}>θ₂={res.theta2.toFixed(1)}°</Text>}
            {res.tir && <Text style={{ position: "absolute", top: cy + 6, left: cx + 6, fontSize: 10, color: "#16a34a", fontWeight: "800" }}>TIR</Text>}
          </View>
        ) : (
          <Text style={{ color: theme.colors.textFaint }}>Loading bench…</Text>
        )}
      </View>

      {/* ===== CONTROL PANEL ===== */}
      <View style={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 16, paddingTop: 14, paddingBottom: 18, shadowColor: "#000", shadowOffset: { width: 0, height: -3 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 10 }}>
        <View style={{ backgroundColor: status === "failed" ? "#fef2f2" : status === "success" ? "#f0fdf4" : "#f5f3ff", borderRadius: 12, padding: 12, borderWidth: 1, borderColor: status === "failed" ? "#fecaca" : status === "success" ? "#bbf7d0" : "#ddd6fe", marginBottom: 12, minHeight: 58, justifyContent: "center" }}>
          <Text style={{ fontSize: 13, lineHeight: 19, color: theme.colors.text }}>{message}</Text>
        </View>

        {status === "success" ? (
          <>
            <Btn label="📝 View Report" onPress={() => setReportOpen(true)} accent={ACCENT} full />
            <TouchableOpacity onPress={reset} style={{ marginTop: 10, alignItems: "center", paddingVertical: 8 }}>
              <Text style={{ color: theme.colors.textMuted, fontWeight: "700", fontSize: 13 }}>↺ Reset Experiment</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={{ fontSize: 11, fontWeight: "700", color: theme.colors.textMuted, marginBottom: 4 }}>UPPER (incident)</Text>
            <View style={{ flexDirection: "row", marginBottom: 6 }}>
              {MEDIA.map((m) => <MediaChip key={m.id} m={m} sel={m1 === m.id} onPick={() => setM1(m.id)} />)}
            </View>
            <Text style={{ fontSize: 11, fontWeight: "700", color: theme.colors.textMuted, marginBottom: 4, marginTop: 4 }}>LOWER (refracted)</Text>
            <View style={{ flexDirection: "row", marginBottom: 8 }}>
              {MEDIA.map((m) => <MediaChip key={m.id} m={m} sel={m2 === m.id} onPick={() => setM2(m.id)} />)}
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
              <Text style={{ fontSize: 12, fontWeight: "700", color: theme.colors.textMuted }}>θ₁ = {theta1}°</Text>
              <Text style={{ fontSize: 12, fontWeight: "800", color: ACCENT }}>{res.tir ? "TIR" : `θ₂ = ${res.theta2.toFixed(1)}°`}</Text>
            </View>
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
              {[15, 30, 45, 60, 75].map((val) => (
                <TouchableOpacity key={val} onPress={() => setTheta1(val)} disabled={status === "running"} style={{ flex: 1, marginHorizontal: 2, backgroundColor: theta1 === val ? ACCENT : theme.colors.surfaceMuted, borderRadius: 8, paddingVertical: 7 }}>
                  <Text style={{ textAlign: "center", fontSize: 11, fontWeight: "800", color: theta1 === val ? "#fff" : theme.colors.textMuted }}>{val}°</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={{ flexDirection: "row" }}>
              <Btn label={status === "running" ? "✨ Shining" : "🔦 Shine Ray"} onPress={shine} accent={ACCENT} disabled={status === "running"} />
              <View style={{ width: 8 }} />
              <Btn label="📐 Measure" onPress={measure} accent="#0ea5e9" disabled={status !== "running"} />
            </View>
            <TouchableOpacity onPress={reset} style={{ marginTop: 8, alignItems: "center", paddingVertical: 6 }}>
              <Text style={{ color: theme.colors.textFaint, fontWeight: "700", fontSize: 12 }}>↺ Reset</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      <Modal visible={reportOpen} transparent animationType="slide" onRequestClose={() => setReportOpen(false)}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.45)", justifyContent: "flex-end" }}>
          <ScrollView style={{ maxHeight: "88%" }} contentContainerStyle={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 24, paddingBottom: 32 }} keyboardShouldPersistTaps="handled">
            <View style={{ width: 40, height: 4, backgroundColor: theme.colors.border, borderRadius: 2, alignSelf: "center", marginBottom: 18 }} />
            <Text style={{ fontSize: 26, textAlign: "center" }}>🎉</Text>
            <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>Refraction Logged!</Text>
            <View style={{ backgroundColor: theme.colors.surfaceMuted, borderRadius: 12, padding: 14, marginVertical: 14 }}>
              <Text style={{ fontSize: 13, color: theme.colors.text }}>• {upper.name} (n={upper.n}) → {lower.name} (n={lower.n})</Text>
              <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 4 }}>• Incident θ₁ = {theta1}°</Text>
              {res.tir ? (
                <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 4 }}>• Total Internal Reflection (θc = {res.critical.toFixed(1)}°)</Text>
              ) : (
                <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 4 }}>• Refracted θ₂ = <Text style={{ fontWeight: "800" }}>{res.theta2.toFixed(1)}°</Text></Text>
              )}
            </View>
            <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.text, marginBottom: 6 }}>Your report / observations</Text>
            <TextInput
              style={{ borderWidth: 1, borderColor: theme.colors.border, borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }}
              placeholder="e.g. Going air→glass the ray bent toward the normal, confirming n₁sinθ₁=n₂sinθ₂."
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
            <TouchableOpacity onPress={() => { setReportOpen(false); navigation.goBack(); }} style={{ marginTop: 10, backgroundColor: theme.colors.surfaceMuted, borderRadius: 12, paddingVertical: 13 }}>
              <Text style={{ color: theme.colors.text, textAlign: "center", fontWeight: "700", fontSize: 14 }}>Done</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        </KeyboardAvoidingView>
      </Modal>
    </SafeAreaView>
  );
}

function Btn({ label, onPress, disabled, accent = ACCENT }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.85}
      style={{ flex: 1, backgroundColor: disabled ? theme.colors.border : accent, borderRadius: 11, paddingVertical: 12, alignItems: "center", justifyContent: "center", opacity: disabled ? 0.6 : 1 }}
    >
      <Text style={{ color: disabled ? theme.colors.textFaint : "#fff", fontWeight: "800", fontSize: 14 }} numberOfLines={1}>{label}</Text>
    </TouchableOpacity>
  );
}
