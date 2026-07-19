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
  Path,
  Circle,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { labStorage } from "../../../storage/labStorage";
import { Beaker, ConicalFlask, BunsenBurner, Arrow, Label } from "../../components/svgKit";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import { computeStoich, REACTIONS } from "./stoich-data";

const GREEN = "#16a34a";

const STEP_LABELS = ["Reactants", "React", "Product"];

export default function StoichMassMoleLab() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "stoich";
  const cfg = route.params?.config;

  const reaction = cfg?.reaction || REACTIONS[0];
  const massA = cfg?.massA || "4";
  const massB = cfg?.massB || "32";
  const useBunsen = cfg?.bunsen || false;
  const useThermo = cfg?.thermometer || false;

  const calc = computeStoich({ reaction, massA, massB });
  const [ra, rb] = reaction.reactants;

  const [started, setStarted] = useState(false);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState(
    `Reactants weighed: ${massA} g ${ra.formula} and ${massB} g ${rb.formula}. Press React to run the reaction.`
  );

  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const rx = useRef(new Animated.Value(0)).current; // 0=reactants, 1=product
  const [prog, setProg] = useState(0);
  const flame = useRef(new Animated.Value(0)).current;

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
  const stopGlow = () => { if (glowLoop.current) glowLoop.current.stop(); glowLoop.current = null; glow.setValue(0); };
  useEffect(() => {
    if (status === "success") pulseGlow(); else stopGlow();
    return () => stopGlow();
  }, [status]);

  useEffect(() => {
    const id = rx.addListener(({ value }) => setProg(value));
    return () => rx.removeListener(id);
  }, [rx]);

  const animTo = (a, v, d = 900) =>
    Animated.timing(a, { toValue: v, duration: d, easing: Easing.out(Easing.quad), useNativeDriver: false }).start();

  function react() {
    haptic.light();
    if (started || status !== "idle") return;
    setStarted(true);
    setStatus("running");
    if (useBunsen) {
      Animated.loop(Animated.sequence([
        Animated.timing(flame, { toValue: 1, duration: 500, useNativeDriver: true }),
        Animated.timing(flame, { toValue: 0.4, duration: 500, useNativeDriver: true }),
      ])).start();
    }
    animTo(rx, 1, 2200);
    Animated.delay(2300).start(() => {
      setStatus("success");
      setSaved(false);
      setNotes("");
      setMessage(`✅ Reaction complete! ${calc.limitingName} (${calc.limitingFormula}) was the limiting reagent. ${calc.productMass.toFixed(2)} g of product formed.`);
    });
  }

  function say(m) { setMessage(m); }

  function reset() {
    rx.stopAnimation();
    rx.setValue(0);
    flame.setValue(0);
    setStarted(false);
    setStatus("idle");
    setMessage(`Bench reset. Reactants weighed: ${massA} g ${ra.formula} and ${massB} g ${rb.formula}.`);
  }

  // Visual fill levels: reactant beakers drain as rx→1; product flask fills.
  const fillA = calc.fillA * (1 - prog);
  const fillB = calc.fillB * (1 - prog);
  const fillP = calc.productFill * prog;

  async function saveReport() {
    const other = calc.limitingReactant === ra ? rb : ra;
    const productsTxt = calc.productDetails
      .map((p) => `${p.formula} ${p.mass.toFixed(2)} g`)
      .join(" + ");
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "mass-mole",
      experimentTitle: experiment.title || "Stoichiometry: Mass & Mole Relationships",
      topicId,
      date: new Date().toLocaleDateString(),
      reaction: reaction.balanced,
      reactantA: `${ra.formula} ${massA} g`,
      reactantB: `${rb.formula} ${massB} g`,
      molesA: calc.molesA.toFixed(4),
      molesB: calc.molesB.toFixed(4),
      limiting: calc.limitingName,
      limitingFormula: calc.limitingFormula,
      limitingMass: (calc.minRatio * calc.limitingReactant.stoich * calc.limitingReactant.Mr).toFixed(2),
      excessMass: calc.excessMass.toFixed(2),
      productMass: calc.productMass.toFixed(2),
      productBreakdown: productsTxt,
      result: `Limiting: ${calc.limitingName}; Product: ${calc.productMass.toFixed(2)} g`,
      status: "success",
      summary: `${ra.formula} ${massA} g + ${rb.formula} ${massB} g. moles ${calc.molesA.toFixed(3)} / ${calc.molesB.toFixed(3)}. Limiting = ${calc.limitingName}; theoretical product = ${calc.productMass.toFixed(2)} g (${productsTxt}).`,
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); say("📝 Report saved to your phone. Review it any time from the Lab hub."); }
    else say("Could not save the report. Please try again.");
  }

  const step = status === "success" ? 2 : status === "running" || started ? 1 : 0;

  // ---- decorative SVG particles (reactants fade out, product fades in) ----
  const Particle = ({ x, y, r, color, o }) => (
    <Circle cx={x} cy={y} r={r} fill={color} opacity={o} />
  );

  // Predictable positions for reactant molecules (in a 120x120 local box).
  const reactantDots = (color, n) =>
    Array.from({ length: n }).map((_, i) => ({
      x: 18 + (i % 4) * 28 + (i > 7 ? 14 : 0),
      y: 22 + Math.floor(i / 4) * 26,
      r: 7,
      color,
    }));

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />

      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: GREEN, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 15, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>
          {experiment.title || "Stoichiometry: Mass & Mole Relationships"}
        </Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center", paddingVertical: 8, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border, gap: 6 }}>
        {STEP_LABELS.map((l, i) => (
          <View key={l} style={{ alignItems: "center", marginHorizontal: 10 }}>
            <View style={{ width: 22, height: 22, borderRadius: 11, alignItems: "center", justifyContent: "center", backgroundColor: i < step ? GREEN : i === step ? "#bfdbfe" : "#e5e7eb" }}>
              <Text style={{ fontSize: 11, fontWeight: "800", color: i < step ? "#fff" : "#475569" }}>{i < step ? "✓" : i + 1}</Text>
            </View>
            <Text style={{ fontSize: 9, color: "#94a3b8", marginTop: 3, fontWeight: "600" }}>{l}</Text>
          </View>
        ))}
      </View>

      {/* ===== BENCH ===== */}
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 12 }}>
        <Animated.View pointerEvents="none" style={{ position: "absolute", width: 250, height: 250, borderRadius: 125, backgroundColor: GREEN, opacity: glow.interpolate({ inputRange: [0, 1], outputRange: [0, 0.14] }), transform: [{ scale: glow.interpolate({ inputRange: [0, 1], outputRange: [0.85, 1.12] }) }] }} />
        <View style={{ position: "absolute", bottom: 40, width: "100%", height: 2, backgroundColor: "#d1d5db" }} />

        {/* Equation banner */}
        <View style={{ position: "absolute", top: 4, backgroundColor: "#fff", borderRadius: 12, paddingVertical: 8, paddingHorizontal: 14, borderWidth: 1, borderColor: "#e5e7eb", maxWidth: "94%" }}>
          <Text style={{ fontSize: 13, fontWeight: "800", color: "#0f172a", textAlign: "center" }}>{reaction.balanced}</Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "flex-end", justifyContent: "center" }}>
          {/* Reactant A beaker */}
          <View style={{ width: 110, height: 140, alignItems: "center" }}>
            <Beaker w={100} h={130} fill={fillA} color={ra.color} />
            <Text style={{ fontSize: 10, fontWeight: "800", color: ra.color, marginTop: 2 }}>{ra.formula}</Text>
            <Text style={{ fontSize: 9, color: "#64748b" }}>{massA} g</Text>
            {/* reactant molecule dots */}
            <Svg width={100} height={120} style={{ position: "absolute", top: 4 }} pointerEvents="none">
              {reactantDots(ra.color, Math.max(2, Math.round(calc.molesA * 3))).map((d, i) => (
                <Particle key={i} {...d} o={0.75 * (1 - prog)} />
              ))}
            </Svg>
          </View>

          {/* Arrow between reactants and product */}
          <View style={{ alignItems: "center", justifyContent: "center", paddingBottom: 30 }}>
            <Svg width={64} height={40} pointerEvents="none">
              <Arrow x1={4} y1={20} x2={56} y2={20} color={GREEN} w={3} />
            </Svg>
            <Text style={{ fontSize: 9, color: "#64748b", fontWeight: "700", marginTop: 2 }}>react</Text>
          </View>

          {/* Product conical flask */}
          <View style={{ width: 140, height: 160, alignItems: "center" }}>
            {useBunsen ? (
              <Animated.View style={{ position: "absolute", bottom: -2, opacity: status === "running" ? 1 : 0.25 }}>
                <BunsenBurner w={42} h={80} flame={status === "running"} />
              </Animated.View>
            ) : null}
            <ConicalFlask w={120} h={140} fill={fillP} color={calc.productDetails[0].color} />
            <Text style={{ fontSize: 10, fontWeight: "800", color: calc.productDetails[0].color, marginTop: 2 }}>
              {calc.productDetails.map((p) => p.formula).join(" + ")}
            </Text>
            <Text style={{ fontSize: 9, color: "#64748b" }}>{calc.productMass.toFixed(1)} g</Text>
            <Svg width={120} height={130} style={{ position: "absolute", top: 4 }} pointerEvents="none">
              {reactantDots(calc.productDetails[0].color, Math.max(2, Math.round(calc.productDetails[0].moles * 3))).map((d, i) => (
                <Particle key={i} {...d} o={0.8 * prog} />
              ))}
            </Svg>
          </View>
        </View>

        {/* Limiting reagent badge */}
        <View style={{ marginTop: 12, flexDirection: "row", alignItems: "center", backgroundColor: status === "success" ? "#f0fdf4" : "#eff6ff", borderRadius: 12, paddingVertical: 7, paddingHorizontal: 14, borderWidth: 1, borderColor: status === "success" ? "#bbf7d0" : "#bfdbfe" }}>
          <Text style={{ fontSize: 12, fontWeight: "800", color: status === "success" ? GREEN : "#1d4ed8" }}>
            {started ? `Limiting reagent: ${calc.limitingName} (${calc.limitingFormula})` : "Limiting reagent: ?"}
          </Text>
        </View>
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
        ) : (
          <View style={{ flexDirection: "row" }}>
            <Btn label="⚗️ React" onPress={react} disabled={started} accent={GREEN} full />
          </View>
        )}
      </View>

      <Modal visible={reportOpen} transparent animationType="slide" onRequestClose={() => setReportOpen(false)}>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.45)", justifyContent: "flex-end" }}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ maxHeight: "90%" }}>
          <ScrollView style={{ maxHeight: "100%" }} contentContainerStyle={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 24, paddingBottom: 32 }} keyboardShouldPersistTaps="handled">
            <View style={{ width: 40, height: 4, backgroundColor: "#d1d5db", borderRadius: 2, alignSelf: "center", marginBottom: 18 }} />
            <Text style={{ fontSize: 26, textAlign: "center" }}>🎉</Text>
            <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>Stoichiometry Done!</Text>
            <View style={{ backgroundColor: theme.colors.surfaceMuted, borderRadius: 12, padding: 14, marginVertical: 14 }}>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>• Reaction: {reaction.balanced}</Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• {ra.formula}: {massA} g → <Text style={{ fontWeight: "800" }}>{calc.molesA.toFixed(3)} mol</Text></Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• {rb.formula}: {massB} g → <Text style={{ fontWeight: "800" }}>{calc.molesB.toFixed(3)} mol</Text></Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Limiting reagent: <Text style={{ fontWeight: "800", color: GREEN }}>{calc.limitingName} ({calc.limitingFormula})</Text></Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Excess left over: {calc.excessMass.toFixed(2)} g</Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Theoretical product: <Text style={{ fontWeight: "800", color: GREEN }}>{calc.productMass.toFixed(2)} g</Text></Text>
              {calc.productDetails.map((p) => (
                <Text key={p.formula} style={{ fontSize: 12, color: theme.colors.textMuted, marginTop: 2 }}>   – {p.formula}: {p.mass.toFixed(2)} g</Text>
              ))}
            </View>
            <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.textMuted, marginBottom: 6 }}>Your report / observations</Text>
            <TextInput
              style={{ borderWidth: 1, borderColor: theme.colors.border, borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }}
              placeholder="e.g. The product mass matched the prediction — the limiting reagent controlled how much formed."
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
        paddingVertical: 13,
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
