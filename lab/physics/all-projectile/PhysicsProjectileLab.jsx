import React, { useState, useRef } from "react";
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
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { labStorage } from "../../../storage/labStorage";
import { projectileMetrics, sampleTrajectory } from "./projectile-data";
import { Launcher, Projectile, Ground, Trajectory } from "../../components/svgKit";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";

const ACCENT = "#7c3aed";
const STEP_LABELS = ["Aim", "Launch", "Measure"];
const TARGETS = [10, 20, 25, 35, 45]; // m — student picks a target zone
const TOL = 3; // m band half-width

export default function PhysicsProjectileLab() {
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "all-projectile";
  const cfg = route.params?.config;
  const theme = useTheme();

  const [v, setV] = useState(cfg?.v || 22);
  const [theta, setTheta] = useState(cfg?.theta || 45);
  const [target, setTarget] = useState(cfg?.target || 25);

  const [stageW, setStageW] = useState(0);
  const [stageH, setStageH] = useState(0);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState(
    "Pick a target zone, set the speed & angle, then press Launch to land the projectile inside it."
  );
  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const progress = useRef(new Animated.Value(0)).current;
  const animRef = useRef(null);

  const metric = projectileMetrics(v, theta);

  const leftPad = 34;
  const groundYOffset = 44;

  // Pixel scale so the whole arc fits the stage.
  let scale = 1;
  let rangePx = 0;
  let maxHpx = 0;
  let originX = leftPad;
  let groundY = stageH - groundYOffset;
  if (stageW > 0 && stageH > 0) {
    const availW = stageW - leftPad - 20;
    const availH = groundY - 30;
    const rSafe = Math.max(metric.range, 0.001);
    const hSafe = Math.max(metric.maxHeight, 0.001);
    scale = Math.min(availW / rSafe, availH / hSafe);
    scale = Math.min(scale, 60); // visual cap
    rangePx = metric.range * scale;
    maxHpx = metric.maxHeight * scale;
  }

  // Guide arc points (pixels).
  const pts = stageW > 0 ? sampleTrajectory(v, theta, 9.8, 40) : [];
  const dotPts = pts.map((p) => ({
    x: originX + p.x * scale,
    y: groundY - p.y * scale,
  }));

  // Ball interpolation (left monotonic in p; top is parabolic).
  const ps = dotPts.length ? dotPts.map((_, i) => i / (dotPts.length - 1)) : [0, 1];
  const lefts = dotPts.length ? dotPts.map((d) => d.x) : [originX, originX];
  const tops = dotPts.length ? dotPts.map((d) => d.y) : [groundY, groundY];
  const ballLeft = progress.interpolate({ inputRange: ps, outputRange: lefts });
  const ballTop = progress.interpolate({ inputRange: ps, outputRange: tops });

  const targetPx = originX + target * scale;

  const say = (m) => setMessage(m);

  function launch() {
    haptic.light();
    if (status === "running") return;
    if (animRef.current) animRef.current.stop();
    progress.setValue(0);
    setStatus("running");
    say("🚀 Firing…");
    animRef.current = Animated.timing(progress, {
      toValue: 1,
      duration: 1800,
      easing: Easing.linear,
      useNativeDriver: false,
    });
    animRef.current.start(() => onLanding());
  }

  function onLanding() {
    const diff = Math.abs(metric.range - target);
    if (diff <= TOL) {
      setStatus("success");
      setSaved(false);
      setNotes("");
      say(`🎯 Bullseye! The projectile landed ${metric.range.toFixed(1)} m away — inside the ${target} m target zone.`);
    } else {
      setStatus("failed");
      say(
        `💥 Landed ${metric.range.toFixed(1)} m away. The target zone is ${target - TOL}–${target + TOL} m. ${
          metric.range > target ? "Reduce speed or angle." : "Increase speed or angle."
        } Tap Reset and try again.`
      );
    }
  }

  function reset() {
    haptic.light();
    if (animRef.current) animRef.current.stop();
    progress.setValue(0);
    setStatus("idle");
    say("Bench reset. Adjust your launch and press Launch.");
  }

  async function saveReport() {
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "all-projectile",
      experimentTitle: experiment.title || "Projectile Motion Simulator",
      topicId,
      date: new Date().toLocaleDateString(),
      v,
      theta,
      range: parseFloat(metric.range.toFixed(2)),
      maxHeight: parseFloat(metric.maxHeight.toFixed(2)),
      timeOfFlight: parseFloat(metric.timeOfFlight.toFixed(2)),
      target,
      status: "success",
      summary: `Range ${metric.range.toFixed(1)} m at v=${v} m/s, θ=${theta}°.`,
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); say("📝 Report saved to your phone."); }
    else say("Could not save the report. Please try again.");
  }

  const step = status === "idle" ? 0 : status === "running" ? 1 : 2;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />
      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: ACCENT, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>
          {experiment.title || "Projectile Motion"}
        </Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center", paddingVertical: 10, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.surfaceMuted, gap: 6 }}>
        {STEP_LABELS.map((l, i) => (
          <View key={l} style={{ alignItems: "center", marginHorizontal: 4 }}>
            <View style={{ width: 22, height: 22, borderRadius: 11, alignItems: "center", justifyContent: "center", backgroundColor: i < step ? ACCENT : i === step ? "#ddd6fe" : "#e5e7eb" }}>
              <Text style={{ fontSize: 11, fontWeight: "800", color: i < step ? "#fff" : theme.colors.textMuted }}>{i < step ? "✓" : i + 1}</Text>
            </View>
            <Text style={{ fontSize: 9, color: "#94a3b8", marginTop: 3, fontWeight: "600" }}>{l}</Text>
          </View>
        ))}
      </View>

      {/* ===== BENCH / STAGE ===== */}
      <View
        onLayout={(e) => {
          setStageW(e.nativeEvent.layout.width);
          setStageH(e.nativeEvent.layout.height);
        }}
        style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: theme.colors.bg }}
      >
        {stageW > 0 ? (
          <View style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }}>
            {/* ground area tint */}
            <View style={{ position: "absolute", left: 0, right: 0, top: groundY, bottom: 0, backgroundColor: "#dcfce7" }} />

            {/* guide trajectory (decorative, scaled to the shot) */}
            {rangePx > 0 && maxHpx > 0 ? (
              <View style={{ position: "absolute", left: originX - 20, top: groundY - maxHpx - 40 }}>
                <Trajectory w={rangePx + 40} h={maxHpx + 60} color="#c4b5fd" />
              </View>
            ) : null}

            {/* target zones — selected one highlighted */}
            {TARGETS.map((t) => {
              const px = originX + t * scale;
              const isSel = t === target;
              const bandW = Math.max(TOL * scale, 4);
              return (
                <View key={t}>
                  <View
                    style={{
                      position: "absolute",
                      top: 24,
                      bottom: groundYOffset,
                      width: isSel ? bandW : 2,
                      left: px - (isSel ? bandW / 2 : 1),
                      backgroundColor: isSel ? "#fde68a" : "#fef3c7",
                      borderWidth: isSel ? 1 : 0,
                      borderColor: "#f59e0b",
                      opacity: isSel ? 1 : 0.7,
                    }}
                  />
                  {isSel && (
                    <Text style={{ position: "absolute", top: 6, left: px - 22, fontSize: 10, fontWeight: "800", color: "#b45309" }}>
                      🎯 {t}m
                    </Text>
                  )}
                </View>
              );
            })}

            {/* launcher */}
            <View style={{ position: "absolute", left: originX - 35, top: groundY - 40 }}>
              <Launcher angle={-theta} />
            </View>

            {/* ground surface */}
            <View style={{ position: "absolute", left: 0, top: groundY - 6 }}>
              <Ground w={stageW} />
            </View>

            {/* ball */}
            <Animated.View
              style={{
                position: "absolute",
                width: 18,
                height: 18,
                left: ballLeft,
                top: ballTop,
              }}
            >
              <Projectile r={9} />
            </Animated.View>
          </View>
        ) : (
          <Text style={{ color: "#94a3b8" }}>Loading bench…</Text>
        )}
      </View>

      {/* ===== CONTROL PANEL ===== */}
      <View style={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 16, paddingTop: 14, paddingBottom: 18, shadowColor: "#000", shadowOffset: { width: 0, height: -3 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 10 }}>
        <View style={{ backgroundColor: status === "failed" ? "#fef2f2" : status === "success" ? "#f0fdf4" : "#f5f3ff", borderRadius: 12, padding: 12, borderWidth: 1, borderColor: status === "failed" ? "#fecaca" : status === "success" ? "#bbf7d0" : "#ddd6fe", marginBottom: 12, minHeight: 58, justifyContent: "center" }}>
          <Text style={{ fontSize: 13, lineHeight: 19, color: theme.colors.text }}>{message}</Text>
        </View>

        {status === "failed" ? (
          <Btn label="↺ Reset Experiment" onPress={reset} accent={theme.colors.textMuted} full />
        ) : status === "success" ? (
          <>
            <Btn label="📝 View Report" onPress={() => setReportOpen(true)} accent={ACCENT} full />
            <TouchableOpacity onPress={reset} style={{ marginTop: 10, alignItems: "center", paddingVertical: 8 }}>
              <Text style={{ color: theme.colors.textMuted, fontWeight: "700", fontSize: 13 }}>↺ Reset Experiment</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={{ fontSize: 12, fontWeight: "800", color: theme.colors.textMuted, marginBottom: 6 }}>① Pick a target zone (m)</Text>
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
              {TARGETS.map((t) => (
                <TouchableOpacity
                  key={t}
                  onPress={() => setTarget(t)}
                  disabled={status === "running"}
                  style={{ flex: 1, marginHorizontal: 2, backgroundColor: target === t ? ACCENT : theme.colors.surfaceMuted, borderRadius: 8, paddingVertical: 7 }}
                >
                  <Text style={{ textAlign: "center", fontSize: 11, fontWeight: "800", color: target === t ? "#fff" : theme.colors.textMuted }}>{t}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
              <Text style={{ fontSize: 12, fontWeight: "700", color: theme.colors.textMuted }}>Speed {v} m/s · Angle {theta}°</Text>
              <Text style={{ fontSize: 12, fontWeight: "800", color: ACCENT }}>Range ~{metric.range.toFixed(0)} m</Text>
            </View>
            <View style={{ flexDirection: "row", marginBottom: 8 }}>
              {[10, 18, 22, 30, 40].map((val) => (
                <TouchableOpacity key={val} onPress={() => setV(val)} disabled={status === "running"} style={{ flex: 1, marginHorizontal: 2, backgroundColor: v === val ? ACCENT : theme.colors.surfaceMuted, borderRadius: 8, paddingVertical: 7 }}>
                  <Text style={{ textAlign: "center", fontSize: 11, fontWeight: "800", color: v === val ? "#fff" : theme.colors.textMuted }}>{val}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
              {[20, 35, 45, 60, 75].map((val) => (
                <TouchableOpacity key={val} onPress={() => setTheta(val)} disabled={status === "running"} style={{ flex: 1, marginHorizontal: 2, backgroundColor: theta === val ? ACCENT : theme.colors.surfaceMuted, borderRadius: 8, paddingVertical: 7 }}>
                  <Text style={{ textAlign: "center", fontSize: 11, fontWeight: "800", color: theta === val ? "#fff" : theme.colors.textMuted }}>{val}°</Text>
                </TouchableOpacity>
              ))}
            </View>
            <Btn label={status === "running" ? "… Launching" : "🚀 Launch"} onPress={launch} accent={ACCENT} full disabled={status === "running"} />
            <TouchableOpacity onPress={reset} style={{ marginTop: 8, alignItems: "center", paddingVertical: 6 }}>
              <Text style={{ color: "#94a3b8", fontWeight: "700", fontSize: 12 }}>↺ Reset</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      <Modal visible={reportOpen} transparent animationType="slide" onRequestClose={() => setReportOpen(false)}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: theme.colors.overlay, justifyContent: "flex-end" }}>
          <ScrollView style={{ maxHeight: "88%" }} contentContainerStyle={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 24, paddingBottom: 32 }} keyboardShouldPersistTaps="handled">
            <View style={{ width: 40, height: 4, backgroundColor: theme.colors.border, borderRadius: 2, alignSelf: "center", marginBottom: 18 }} />
            <Text style={{ fontSize: 26, textAlign: "center" }}>🎉</Text>
            <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>Range Measured!</Text>
            <View style={{ backgroundColor: theme.colors.surfaceMuted, borderRadius: 12, padding: 14, marginVertical: 14 }}>
              <Text style={{ fontSize: 13, color: theme.colors.text }}>• Speed: {v} m/s · Angle: {theta}°</Text>
              <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 4 }}>• Range: <Text style={{ fontWeight: "800" }}>{metric.range.toFixed(1)} m</Text></Text>
              <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 4 }}>• Max height: {metric.maxHeight.toFixed(1)} m</Text>
              <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 4 }}>• Time of flight: {metric.timeOfFlight.toFixed(2)} s</Text>
            </View>
            <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.text, marginBottom: 6 }}>Your report / observations</Text>
            <TextInput
              style={{ borderWidth: 1, borderColor: theme.colors.border, borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }}
              placeholder="e.g. The 45° launch gave the longest range, matching R = v²sin(2θ)/g."
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

function Btn({ label, onPress, disabled, accent = ACCENT, full }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.85}
      style={{
        width: full ? "100%" : undefined,
        backgroundColor: disabled ? "#e5e7eb" : accent,
        borderRadius: 11,
        paddingVertical: 12,
        alignItems: "center",
        justifyContent: "center",
        opacity: disabled ? 0.6 : 1,
      }}
    >
      <Text style={{ color: disabled ? "#94a3b8" : "#fff", fontWeight: "800", fontSize: 14 }} numberOfLines={1}>{label}</Text>
    </TouchableOpacity>
  );
}
