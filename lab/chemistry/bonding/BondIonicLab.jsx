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
  Svg,
  Circle,
  Text as SvgText,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { labStorage } from "../../../storage/labStorage";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import {
  getPair,
  BENCH_W,
  BENCH_H,
  METAL_CENTER,
  NONMETAL_CENTER,
  NUC_R,
  shellRadius,
  outerTop,
} from "./bonding-data";

const GREEN = "#16a34a";

const STEP_LABELS = ["Atoms", "Transfer", "Ions", "Lattice"];

// A single atom drawn with SVG circles (nucleus + electron shells + dots).
function Atom({ center, symbol, color, shells, outerExtra = 0, charge = null, dim = false }) {
  const n = shells.length;
  const elems = [];
  for (let s = 0; s < n; s++) {
    const r = shellRadius(s, n);
    elems.push(
      <Circle key={"sh" + s} cx={center.x} cy={center.y} r={r} fill="none" stroke={color} strokeWidth={1.5} opacity={dim ? 0.3 : 0.55} />
    );
  }
  const disp = shells.map((c, i) => (i === n - 1 ? c + outerExtra : c));
  let ek = 0;
  for (let s = 0; s < n; s++) {
    const r = shellRadius(s, n);
    const count = disp[s];
    for (let e = 0; e < count; e++) {
      const ang = (e / Math.max(1, count)) * 2 * Math.PI - Math.PI / 2;
      const ex = center.x + r * Math.cos(ang);
      const ey = center.y + r * Math.sin(ang);
      elems.push(<Circle key={"e" + ek++} cx={ex} cy={ey} r={3.4} fill={color} opacity={dim ? 0.35 : 1} />);
    }
  }
  elems.push(<Circle key="nuc" cx={center.x} cy={center.y} r={NUC_R} fill={color} opacity={dim ? 0.55 : 1} />);
  elems.push(
    <SvgText key="sym" x={center.x} y={center.y + 4} textAnchor="middle" fontSize={14} fontWeight="800" fill="#ffffff">
      {symbol}
    </SvgText>
  );
  if (charge) {
    elems.push(
      <SvgText key="chg" x={center.x} y={center.y - NUC_R - 6} textAnchor="middle" fontSize={14} fontWeight="800" fill={color}>
        {charge}
      </SvgText>
    );
  }
  return (
    <Svg width={BENCH_W} height={BENCH_H} viewBox={`0 0 ${BENCH_W} ${BENCH_H}`} style={{ position: "absolute", left: 0, top: 0 }}>
      {elems}
    </Svg>
  );
}

// The repeating ionic lattice of alternating cations / anions.
function Lattice({ pair }) {
  const cols = 4, rows = 3;
  const startX = 78, startY = 78, dx = 68, dy = 70;
  const r = 16;
  const items = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const isMetal = (row + col) % 2 === 0;
      const x = startX + col * dx;
      const y = startY + row * dy;
      const color = isMetal ? pair.metalColor : pair.nonmetalColor;
      const sym = isMetal ? pair.metalSymbol : pair.nonmetalSymbol;
      const chg = isMetal ? pair.metalCharge : pair.nonmetalCharge;
      items.push(<Circle key={"c" + row + col} cx={x} cy={y} r={r} fill={color} />);
      items.push(
        <SvgText key={"s" + row + col} x={x} y={y + 4} textAnchor="middle" fontSize={12} fontWeight="800" fill="#ffffff">
          {sym}
        </SvgText>
      );
      items.push(
        <SvgText key={"h" + row + col} x={x} y={y - r - 4} textAnchor="middle" fontSize={11} fontWeight="800" fill={color}>
          {chg}
        </SvgText>
      );
    }
  }
  return (
    <Svg width={BENCH_W} height={BENCH_H} viewBox={`0 0 ${BENCH_W} ${BENCH_H}`} style={{ position: "absolute", left: 0, top: 0 }}>
      {items}
    </Svg>
  );
}

export default function BondIonicLab() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "bonding";
  const pair = getPair(route.params?.config?.pairId) || getPair();

  const nMetal = pair.metalShells.length;
  const nNon = pair.nonmetalShells.length;
  const start = outerTop(METAL_CENTER, nMetal);
  const end = outerTop(NONMETAL_CENTER, nNon);
  const peakY = Math.min(start.y, end.y) - 55;
  const dotR = 5;

  const [phase, setPhase] = useState("idle"); // idle | transferring | done | lattice
  const [leftCount, setLeftCount] = useState(0);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState(
    `Tap “Transfer electron” to move the valence electron${pair.transferred > 1 ? "s" : ""} from ${pair.metalSymbol} to ${pair.nonmetalSymbol}.`
  );
  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const flyProg = useRef(new Animated.Value(0)).current;
  const latticeScale = useRef(new Animated.Value(1)).current;
  const glow = useRef(new Animated.Value(0)).current;
  const glowLoop = useRef(null);

  const pulseGlow = () => {
    if (glowLoop.current) glowLoop.current.stop();
    glow.setValue(0.4);
    glowLoop.current = Animated.loop(
      Animated.sequence([
        Animated.timing(glow, { toValue: 1, duration: 750, easing: Easing.inOut(Easing.quad), useNativeDriver: true }),
        Animated.timing(glow, { toValue: 0.45, duration: 750, easing: Easing.inOut(Easing.quad), useNativeDriver: true }),
      ])
    );
    glowLoop.current.start();
  };
  const stopGlow = () => {
    if (glowLoop.current) glowLoop.current.stop();
    glowLoop.current = null;
    glow.setValue(0);
  };
  useEffect(() => {
    if (status === "success") pulseGlow();
    else stopGlow();
    return () => stopGlow();
  }, [status]);

  const flyX = flyProg.interpolate({ inputRange: [0, 1], outputRange: [start.x, end.x] });
  const flyY = flyProg.interpolate({ inputRange: [0, 0.5, 1], outputRange: [start.y, peakY, end.y] });

  function runElectron(i) {
    if (i >= pair.transferred) {
      setPhase("done");
      setMessage(
        `✅ ${pair.metalSymbol} lost ${pair.transferred} electron${pair.transferred > 1 ? "s" : ""} → ${pair.metalIon}; ${pair.nonmetalSymbol} gained ${pair.transferred > 1 ? "them" : "it"} → ${pair.nonmetalIon}. Now build the lattice.`
      );
      return;
    }
    flyProg.setValue(0);
    Animated.timing(flyProg, { toValue: 1, duration: 1100, easing: Easing.inOut(Easing.quad), useNativeDriver: true }).start(() => {
      setLeftCount(i + 1);
      runElectron(i + 1);
    });
  }

  function transfer() {
    if (phase !== "idle") {
      if (phase === "transferring") setMessage("⏳ Wait — the electron is still moving across…");
      return;
    }
    haptic.light();
    setPhase("transferring");
    setMessage(`Watch the valence electron${pair.transferred > 1 ? "s" : ""} leave ${pair.metalSymbol} and join ${pair.nonmetalSymbol}…`);
    runElectron(0);
  }

  function formLattice() {
    if (phase !== "done") {
      if (phase === "idle" || phase === "transferring") setMessage("Transfer the electron(s) first to form the ions! 🔁");
      return;
    }
    haptic.success();
    setPhase("lattice");
    latticeScale.setValue(0.7);
    Animated.spring(latticeScale, { toValue: 1, friction: 6, tension: 90, useNativeDriver: true }).start();
    setStatus("success");
    setSaved(false);
    setNotes("");
    setMessage(`✅ Ionic lattice formed! ${pair.metalIon} and ${pair.nonmetalIon} repeat in a 3-D crystal: ${pair.formula} — ${pair.compoundName}.`);
  }

  function reset() {
    setPhase("idle");
    setLeftCount(0);
    setStatus("idle");
    flyProg.setValue(0);
    latticeScale.setValue(1);
    setMessage(`Bench reset. Tap “Transfer electron” to move the valence electron${pair.transferred > 1 ? "s" : ""} from ${pair.metalSymbol} to ${pair.nonmetalSymbol}.`);
  }

  async function saveReport() {
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "ionic-bond",
      experimentTitle: experiment.title || "Formation of an Ionic Bond",
      topicId,
      date: new Date().toLocaleDateString(),
      metal: pair.metalName,
      nonmetal: pair.nonmetalName,
      metalIon: pair.metalIon,
      nonmetalIon: pair.nonmetalIon,
      metalCharge: pair.metalCharge,
      nonmetalCharge: pair.nonmetalCharge,
      transferred: String(pair.transferred),
      formula: pair.formula,
      compoundName: pair.compoundName,
      result: `${pair.metalIon} + ${pair.nonmetalIon} → ${pair.formula} (${pair.compoundName})`,
      status: "success",
      summary: `${pair.metalName} (${pair.metalSymbol}) lost ${pair.transferred} valence electron(s) to become ${pair.metalIon}. ${pair.nonmetalName} (${pair.nonmetalSymbol}) gained ${pair.transferred > 1 ? "them" : "it"} to become ${pair.nonmetalIon}. The oppositely charged ions attract electrostatically to form the ionic compound ${pair.formula} — ${pair.compoundName}.`,
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); setMessage("📝 Report saved to your phone."); }
    else setMessage("Could not save the report. Please try again.");
  }

  const step = phase === "idle" ? 0 : phase === "transferring" ? 1 : phase === "done" ? 2 : 3;
  const showAtoms = phase !== "lattice";
  const showCharge = phase === "done" || phase === "lattice";
  const flying = phase === "transferring" && leftCount < pair.transferred;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />

      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: GREEN, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>
          {experiment.title || "Formation of an Ionic Bond"}
        </Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center", paddingVertical: 10, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border, gap: 6 }}>
        {STEP_LABELS.map((l, i) => (
          <View key={l} style={{ alignItems: "center", marginHorizontal: 4 }}>
            <View style={{ width: 22, height: 22, borderRadius: 11, alignItems: "center", justifyContent: "center", backgroundColor: i < step ? GREEN : i === step ? "#bfdbfe" : "#e5e7eb" }}>
              <Text style={{ fontSize: 11, fontWeight: "800", color: i < step ? "#fff" : "#475569" }}>{i < step ? "✓" : i + 1}</Text>
            </View>
            <Text style={{ fontSize: 9, color: "#94a3b8", marginTop: 3, fontWeight: "600" }}>{l}</Text>
          </View>
        ))}
      </View>

      {/* ===== BENCH ===== */}
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Animated.View pointerEvents="none" style={{ position: "absolute", width: 250, height: 250, borderRadius: 125, backgroundColor: GREEN, opacity: glow.interpolate({ inputRange: [0, 1], outputRange: [0, 0.14] }), transform: [{ scale: glow.interpolate({ inputRange: [0, 1], outputRange: [0.85, 1.12] }) }] }} />
        <View style={{ position: "absolute", bottom: 52, width: "100%", height: 2, backgroundColor: "#d1d5db" }} />

        <View style={{ position: "relative", width: BENCH_W, height: BENCH_H }}>
          {showAtoms ? (
            <>
              <Atom center={METAL_CENTER} symbol={pair.metalSymbol} color={pair.metalColor} shells={pair.metalShells} outerExtra={0} charge={showCharge ? pair.metalCharge : null} dim={phase === "done"} />
              <Atom center={NONMETAL_CENTER} symbol={pair.nonmetalSymbol} color={pair.nonmetalColor} shells={pair.nonmetalShells} outerExtra={leftCount} charge={showCharge ? pair.nonmetalCharge : null} dim={phase === "done"} />
            </>
          ) : (
            <Animated.View style={{ position: "absolute", left: 0, top: 0, width: BENCH_W, height: BENCH_H, transform: [{ scale: latticeScale }] }}>
              <Lattice pair={pair} />
            </Animated.View>
          )}

          {flying ? (
            <Animated.View style={{ position: "absolute", left: 0, top: 0, transform: [{ translateX: flyX }, { translateY: flyY }] }}>
              <View style={{ width: dotR * 2, height: dotR * 2, borderRadius: dotR, backgroundColor: pair.metalColor, marginLeft: -dotR, marginTop: -dotR }} />
            </Animated.View>
          ) : null}
        </View>

        <Text style={{ fontSize: 12, fontWeight: "700", color: "#64748b", marginTop: 6, textAlign: "center", paddingHorizontal: 20 }}>
          {phase === "lattice"
            ? `${pair.metalIon}  +  ${pair.nonmetalIon}  →  ${pair.formula}`
            : phase === "done"
            ? `${pair.metalSymbol} → ${pair.metalIon}    ${pair.nonmetalSymbol} → ${pair.nonmetalIon}`
            : `${pair.metalName} (${pair.metalSymbol})        ${pair.nonmetalName} (${pair.nonmetalSymbol})`}
        </Text>
      </View>

      {/* ===== CONTROL PANEL ===== */}
      <View style={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 16, paddingTop: 14, paddingBottom: 18, shadowColor: "#000", shadowOffset: { width: 0, height: -3 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 10 }}>
        <View style={{ backgroundColor: status === "failed" ? "#fef2f2" : status === "success" ? "#f0fdf4" : "#eff6ff", borderRadius: 12, padding: 12, borderWidth: 1, borderColor: status === "failed" ? "#fecaca" : status === "success" ? "#bbf7d0" : "#bfdbfe", marginBottom: 12, minHeight: 58, justifyContent: "center" }}>
          <Text style={{ fontSize: 13, lineHeight: 19, color: theme.colors.textMuted }}>{message}</Text>
        </View>

        {status === "success" ? (
          <>
            <Btn label="📝 View Report" onPress={() => setReportOpen(true)} accent={GREEN} full />
            <TouchableOpacity onPress={reset} style={{ marginTop: 10, alignItems: "center", paddingVertical: 8 }}>
              <Text style={{ color: "#64748b", fontWeight: "700", fontSize: 13 }}>↺ Reset Experiment</Text>
            </TouchableOpacity>
          </>
        ) : phase === "done" ? (
          <View style={{ flexDirection: "row" }}>
            <Btn label="② Form lattice" onPress={formLattice} accent="#7c3aed" full />
            <TouchableOpacity onPress={reset} style={{ marginLeft: 12, alignItems: "center", justifyContent: "center" }}>
              <Text style={{ color: "#64748b", fontWeight: "700", fontSize: 13 }}>↺</Text>
            </TouchableOpacity>
          </View>
        ) : phase === "transferring" ? (
          <View style={{ alignItems: "center", paddingVertical: 12 }}>
            <Text style={{ color: "#64748b", fontWeight: "700", fontSize: 14 }}>⏳ Transferring electron…</Text>
          </View>
        ) : (
          <View style={{ flexDirection: "row" }}>
            <Btn label="① Transfer electron" onPress={transfer} accent={GREEN} full />
          </View>
        )}
      </View>

      <Modal visible={reportOpen} transparent animationType="slide" onRequestClose={() => setReportOpen(false)}>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.45)", justifyContent: "flex-end" }}>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ maxHeight: "88%" }}>
            <ScrollView style={{ maxHeight: "100%" }} contentContainerStyle={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 24, paddingBottom: 32 }} keyboardShouldPersistTaps="handled">
              <View style={{ width: 40, height: 4, backgroundColor: "#d1d5db", borderRadius: 2, alignSelf: "center", marginBottom: 18 }} />
              <Text style={{ fontSize: 26, textAlign: "center" }}>🎉</Text>
              <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>Ionic Bond Formed!</Text>
              <View style={{ backgroundColor: theme.colors.surfaceMuted, borderRadius: 12, padding: 14, marginVertical: 14 }}>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>• Metal: {pair.metalName} ({pair.metalSymbol}) → <Text style={{ fontWeight: "800", color: pair.metalColor }}>{pair.metalIon}</Text></Text>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Non-metal: {pair.nonmetalName} ({pair.nonmetalSymbol}) → <Text style={{ fontWeight: "800", color: pair.nonmetalColor }}>{pair.nonmetalIon}</Text></Text>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Electrons transferred: <Text style={{ fontWeight: "800" }}>{pair.transferred}</Text></Text>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Compound formula: <Text style={{ fontWeight: "800", color: GREEN }}>{pair.formula}</Text></Text>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Compound name: <Text style={{ fontWeight: "800" }}>{pair.compoundName}</Text></Text>
              </View>
              <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.textMuted, marginBottom: 6 }}>Your report / observations</Text>
              <TextInput
                style={{ borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }}
                placeholder="e.g. The electron jumped from sodium's outer shell to chlorine, giving both atoms full outer shells."
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

function Btn({ label, onPress, disabled, accent = GREEN, full }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.85}
      style={{
        flex: full ? undefined : 1,
        width: full ? "100%" : undefined,
        backgroundColor: disabled ? "#e5e7eb" : accent,
        borderRadius: 11,
        paddingVertical: 12,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: full ? 0 : 3,
        opacity: disabled ? 0.55 : 1,
      }}
    >
      <Text style={{ color: disabled ? "#94a3b8" : "#fff", fontWeight: "800", fontSize: full ? 14 : 11.5 }} numberOfLines={1}>{label}</Text>
    </TouchableOpacity>
  );
}
