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
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Circle, G, Line, Polygon, Text as SvgText } from "react-native-svg";
import { useNavigation, useRoute } from "@react-navigation/native";
import { labStorage } from "../../../storage/labStorage";
import { resultant } from "./forces-data";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";

// react-native-svg primitives wrapped so their attributes can be driven by an
// Animated.Value (used to "draw in" each force vector from the centre).
const AnimatedLine = Animated.createAnimatedComponent(Line);
const AnimatedPolygon = Animated.createAnimatedComponent(Polygon);

const ACCENT = "#0d9488";
const STEP_LABELS = ["Setup", "Draw", "Verify"];
const TOL = 0.05; // 5% tolerance on equilibrant magnitude

const SIZE = 300;
const CX = SIZE / 2;
const CY = SIZE / 2;
const RADIUS = 125;

export default function PhysicsForcesLab() {
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "p1-equilibrium-forces";
  const cfg = route.params?.config || { P: 30, Q: 40, theta: 60 };
  const theme = useTheme();

  // Student-driven inputs: the student sets the two forces and the angle, then
  // the resultant is computed from THEIR values (not a pre-filled autoplay).
  const [pInput, setPInput] = useState(String(cfg.P));
  const [qInput, setQInput] = useState(String(cfg.Q));
  const [thInput, setThInput] = useState(String(cfg.theta));

  const P = Math.max(0, parseFloat(pInput) || 0);
  const Q = Math.max(0, parseFloat(qInput) || 0);
  const theta = Math.max(0, Math.min(180, parseFloat(thInput) || 0));
  const R = resultant(P, Q, theta);
  const maxF = Math.max(P, Q, R.mag, 1);
  const scale = RADIUS / maxF;

  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState(
    "Set the two forces P and Q (in N) and the angle θ between them, then tap ‘Draw force vectors’ to place them and their resultant on the force table."
  );
  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);
  const [eInput, setEInput] = useState("");
  const [eError, setEError] = useState("");

  const fade = useRef(new Animated.Value(0)).current;

  const pt = (mag, angDeg) => {
    const a = (angDeg * Math.PI) / 180;
    return { x: CX + mag * scale * Math.cos(a), y: CY - mag * scale * Math.sin(a) };
  };
  const pEnd = pt(P, 0);
  const qEnd = pt(Q, theta);
  const rEnd = pt(R.mag, R.angleDeg);
  const eAng = (R.angleDeg + 180) % 360;
  const eEnd = pt(R.mag, eAng);

  const say = (m) => setMessage(m);

  function draw() {
    haptic.light();
    if (status !== "idle") return;
    setStatus("ready");
    fade.setValue(0);
    // fade now drives SVG coordinates, so it must run on the JS driver.
    Animated.timing(fade, { toValue: 1, duration: 500, easing: Easing.ease, useNativeDriver: false }).start();
    say(`🟡 Vectors drawn. The resultant R has magnitude ${R.mag.toFixed(1)} N. Enter the equilibrant E that balances them, then press ‘Verify’.`);
  }

  function verify() {
    haptic.light();
    const entered = parseFloat(eInput);
    if (!entered || entered <= 0) {
      setEError("Enter the equilibrant magnitude in N.");
      return;
    }
    const errPct = Math.abs(entered - R.mag) / R.mag;
    if (errPct <= TOL) {
      setStatus("success");
      setSaved(false);
      setNotes("");
      say(`✅ Correct! The equilibrant E = ${entered.toFixed(1)} N balances R = ${R.mag.toFixed(1)} N (opposite direction). The three forces form a closed triangle.`);
    } else {
      setStatus("failed");
      setEError(
        `Not quite — E should equal the resultant ${R.mag.toFixed(1)} N (within ${TOL * 100}%). E = √(P²+Q²+2PQ cosθ). Tap Reset and try again.`
      );
    }
  }

  function reset() {
    haptic.light();
    fade.setValue(0);
    setStatus("idle");
    setEInput("");
    setEError("");
    say("Bench reset. Press ‘Draw force vectors’ to try again.");
  }

  async function saveReport() {
    haptic.light();
    const errPct = Math.abs(R.mag - R.mag) / R.mag * 100; // measured E == R.mag here
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "p1-equilibrium-forces-parallelogram",
      experimentTitle: experiment.title || "Parallelogram / Triangle of Forces",
      topicId,
      date: new Date().toLocaleDateString(),
      P,
      Q,
      theta,
      Rmag: parseFloat(R.mag.toFixed(2)),
      Rangle: parseFloat(R.angleDeg.toFixed(1)),
      E: parseFloat(R.mag.toFixed(2)),
      status: "success",
      summary: `P=${P} N, Q=${Q} N @ ${theta}° → R=${R.mag.toFixed(1)} N @ ${R.angleDeg.toFixed(1)}°; E=${R.mag.toFixed(1)} N.`,
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); say("📝 Report saved to your phone."); }
    else say("Could not save the report. Please try again.");
  }

  const step = status === "idle" ? 0 : status === "ready" ? 1 : 2;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />
      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: ACCENT, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>
          {experiment.title || "Parallelogram of Forces"}
        </Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center", paddingVertical: 10, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.surfaceMuted, gap: 6 }}>
        {STEP_LABELS.map((l, i) => (
          <View key={l} style={{ alignItems: "center", marginHorizontal: 4 }}>
            <View style={{ width: 22, height: 22, borderRadius: 11, alignItems: "center", justifyContent: "center", backgroundColor: i < step ? ACCENT : i === step ? "#99f6e4" : theme.colors.border }}>
              <Text style={{ fontSize: 11, fontWeight: "800", color: i < step ? "#fff" : theme.colors.textMuted }}>{i < step ? "✓" : i + 1}</Text>
            </View>
            <Text style={{ fontSize: 9, color: theme.colors.textFaint, marginTop: 3, fontWeight: "600" }}>{l}</Text>
          </View>
        ))}
      </View>

      {/* ===== BENCH / STAGE ===== */}
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: theme.colors.surfaceMuted }}>
        <Svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
          {/* table + ring at centre */}
          <Circle cx={CX} cy={CY} r={RADIUS} fill="#ecfeff" stroke="#99f6e4" strokeWidth="2" strokeDasharray="5 5" />
          <Circle cx={CX} cy={CY} r={9} fill="#fff" stroke="#0f172a" strokeWidth="2.5" />
          {status !== "idle" ? (
            <>
              {/* P along 0° — drawn in from the centre when the student taps Draw */}
              <GrowArrow cx={CX} cy={CY} x2={pEnd.x} y2={pEnd.y} color="#0d9488" w={3} label="P" progress={fade} />
              {/* Q at angle theta */}
              <GrowArrow cx={CX} cy={CY} x2={qEnd.x} y2={qEnd.y} color="#2563eb" w={3} label="Q" progress={fade} />
              {/* Resultant (computed from the student's P and Q) */}
              <GrowArrow cx={CX} cy={CY} x2={rEnd.x} y2={rEnd.y} color="#ea580c" w={3.5} label="R" progress={fade} />
              {/* Equilibrant (opposite R) */}
              <GrowArrow cx={CX} cy={CY} x2={eEnd.x} y2={eEnd.y} color="#64748b" w={2.5} label="E" progress={fade} />
            </>
          ) : null}
        </Svg>
        {status === "idle" ? (
          <Text style={{ marginTop: 8, color: theme.colors.textFaint }}>Force table ready. Set P, Q and θ, then draw.</Text>
        ) : (
          <View style={{ marginTop: 4, flexDirection: "row", gap: 14 }}>
            <Text style={{ fontSize: 12, fontWeight: "800", color: "#0d9488" }}>P {P} N</Text>
            <Text style={{ fontSize: 12, fontWeight: "800", color: "#2563eb" }}>Q {Q} N</Text>
            <Text style={{ fontSize: 12, fontWeight: "800", color: "#ea580c" }}>R {R.mag.toFixed(1)} N</Text>
          </View>
        )}
      </View>

      {/* ===== CONTROL PANEL ===== */}
      <View style={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 16, paddingTop: 14, paddingBottom: 18, shadowColor: "#000", shadowOffset: { width: 0, height: -3 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 10 }}>
        <View style={{ backgroundColor: status === "failed" ? "#fef2f2" : status === "success" ? "#f0fdf4" : "#f0fdfa", borderRadius: 12, padding: 12, borderWidth: 1, borderColor: status === "failed" ? "#fecaca" : status === "success" ? "#bbf7d0" : "#99f6e4", marginBottom: 12, minHeight: 58, justifyContent: "center" }}>
          <Text style={{ fontSize: 13, lineHeight: 19, color: theme.colors.text }}>{message}</Text>
        </View>

        {status === "failed" ? (
          <Btn label="↺ Reset Experiment" onPress={reset} accent="#64748b" full />
        ) : status === "success" ? (
          <>
            <Btn label="📝 View Report" onPress={() => setReportOpen(true)} accent={ACCENT} full />
            <TouchableOpacity onPress={reset} style={{ marginTop: 10, alignItems: "center", paddingVertical: 8 }}>
              <Text style={{ color: theme.colors.textMuted, fontWeight: "700", fontSize: 13 }}>↺ Reset Experiment</Text>
            </TouchableOpacity>
          </>
        ) : status === "ready" ? (
          <>
            <Text style={{ fontSize: 12, fontWeight: "700", color: theme.colors.textMuted, marginBottom: 6 }}>
              Enter the equilibrant E (N) that balances P + Q
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TextInput
                style={{ flex: 1, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 10, padding: 10, fontSize: 15, color: theme.colors.text }}
                placeholder="your E value"
                keyboardType="numeric"
                value={eInput}
                onChangeText={(t) => { setEInput(t); setEError(""); }}
              />
              <TouchableOpacity onPress={verify} style={{ marginLeft: 8, backgroundColor: ACCENT, borderRadius: 10, paddingVertical: 12, paddingHorizontal: 16 }}>
                <Text style={{ color: "#fff", fontWeight: "800", fontSize: 14 }}>Verify</Text>
              </TouchableOpacity>
            </View>
            {eError ? <Text style={{ color: "#b91c1c", fontSize: 12, marginTop: 6, fontWeight: "600" }}>{eError}</Text> : null}
            <TouchableOpacity onPress={reset} style={{ marginTop: 10, alignItems: "center", paddingVertical: 6 }}>
              <Text style={{ color: theme.colors.textFaint, fontWeight: "700", fontSize: 12 }}>↺ Reset</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={{ fontSize: 12, fontWeight: "700", color: theme.colors.textMuted, marginBottom: 8 }}>
              Set the two forces and the angle θ between them, then draw:
            </Text>
            <View style={{ flexDirection: "row", gap: 8, marginBottom: 10 }}>
              <NumField label="P (N)" value={pInput} onChange={setPInput} />
              <NumField label="Q (N)" value={qInput} onChange={setQInput} />
              <NumField label="θ (°)" value={thInput} onChange={setThInput} />
            </View>
            <Btn label="🟡 Draw force vectors" onPress={draw} accent={ACCENT} full disabled={P <= 0 || Q <= 0} />
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
              <View style={{ width: 40, height: 4, backgroundColor: "#d1d5db", borderRadius: 2, alignSelf: "center", marginBottom: 18 }} />
              <Text style={{ fontSize: 26, textAlign: "center" }}>🎉</Text>
              <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>Forces in Equilibrium!</Text>
              <View style={{ backgroundColor: theme.colors.surfaceMuted, borderRadius: 12, padding: 14, marginVertical: 14 }}>
                <Text style={{ fontSize: 13, color: theme.colors.text }}>• P = {P} N (along 0°)</Text>
                <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 4 }}>• Q = {Q} N @ {theta}°</Text>
                <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 4 }}>• Resultant R = <Text style={{ fontWeight: "800" }}>{R.mag.toFixed(1)} N</Text> @ {R.angleDeg.toFixed(1)}°</Text>
                <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 4 }}>• Equilibrant E = {R.mag.toFixed(1)} N (opposite R)</Text>
              </View>
              <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.text, marginBottom: 6 }}>Your report / observations</Text>
              <TextInput
                style={{ borderWidth: 1, borderColor: theme.colors.border, borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }}
                placeholder="e.g. P + Q + E = 0; the three forces closed the triangle, confirming equilibrium."
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
        backgroundColor: disabled ? theme.colors.border : accent,
        borderRadius: 11,
        paddingVertical: 12,
        alignItems: "center",
        justifyContent: "center",
        opacity: disabled ? 0.6 : 1,
      }}
    >
      <Text style={{ color: disabled ? theme.colors.textFaint : "#fff", fontWeight: "800", fontSize: 14 }} numberOfLines={1}>{label}</Text>
    </TouchableOpacity>
  );
}

// A force vector that "draws in" from the centre as `progress` goes 0 -> 1:
// the line's tip is interpolated from (cx,cy) to (x2,y2), while the arrowhead
// fades in at the final tip.
function GrowArrow({ cx, cy, x2, y2, color, w = 2, label, progress }) {
  const ex = progress.interpolate({ inputRange: [0, 1], outputRange: [cx, x2] });
  const ey = progress.interpolate({ inputRange: [0, 1], outputRange: [cy, y2] });
  const ang = Math.atan2(y2 - cy, x2 - cx);
  const head = 7;
  const hx1 = x2 - head * Math.cos(ang - 0.4);
  const hy1 = y2 - head * Math.sin(ang - 0.4);
  const hx2 = x2 - head * Math.cos(ang + 0.4);
  const hy2 = y2 - head * Math.sin(ang + 0.4);
  return (
    <G>
      <AnimatedLine x1={cx} y1={cy} x2={ex} y2={ey} stroke={color} strokeWidth={w} strokeLinecap="round" />
      <AnimatedPolygon points={`${x2},${y2} ${hx1},${hy1} ${hx2},${hy2}`} fill={color} opacity={progress} />
      {label ? (
        <SvgText x={(cx + x2) / 2} y={(cy + y2) / 2 - 4} fontSize="9" fill={color} textAnchor="middle" opacity={progress}>
          {label}
        </SvgText>
      ) : null}
    </G>
  );
}

function NumField({ label, value, onChange }) {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 10, fontWeight: "700", color: theme.colors.textMuted, marginBottom: 3 }}>{label}</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: theme.colors.border, borderRadius: 10, padding: 9, fontSize: 14, color: theme.colors.text, textAlign: "center" }}
        keyboardType="numeric"
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
}
