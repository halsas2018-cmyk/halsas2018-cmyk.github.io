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
import { Beaker, BunsenBurner } from "../../components/svgKit";
import {
  requiredAlkaliVol,
  productFor,
  indicatorColor,
  indicatorLabel,
} from "./salt-data";
import { ACIDS, BASES, INDICATORS } from "../../titration/reagents";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";

const GREEN = "#16a34a";
const ADD_STEP = 2.5; // mL per "add alkali" press

const STEP_LABELS = ["Choose", "Acid", "Neutralize", "Evaporate", "Crystal"];

export default function AcidsSaltPrepLab() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "acids";
  const cfg = route.params?.config;

  const acidVol = cfg?.acidVol || 25;

  // No pre-selection: the student CHOOSES the acid, base and indicator.
  const [acid, setAcid] = useState(null);
  const [base, setBase] = useState(null);
  const [indicator, setIndicator] = useState(null);

  const reqVol = acid && base ? requiredAlkaliVol(acid, base, acidVol) : 0;
  const product = acid && base ? productFor(acid, base) : { formula: "?", name: "Unknown salt" };
  const indicatorId = indicator?.id || "phenolphthalein";
  const indicatorName = indicator?.name || "Indicator";

  const [acidPoured, setAcidPoured] = useState(false);
  const [alkaliAdded, setAlkaliAdded] = useState(0);
  const [phase, setPhase] = useState("acid"); // acid | neutralize | evaporate | crystallize
  const [heating, setHeating] = useState(false);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("Choose your acid, base and indicator, then add the acid to begin.");

  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  // visible falling drops for each reagent added
  const [drops, setDrops] = useState([]);
  const addDrop = (color) => setDrops((d) => [...d, { id: Date.now() + Math.random(), color }]);
  const removeDrop = (id) => setDrops((d) => d.filter((x) => x.id !== id));

  const level = useRef(new Animated.Value(0)).current;
  const [levelState, setLevelState] = useState(0);
  const crystalGrow = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const id = level.addListener(({ value }) => setLevelState(value));
    return () => level.removeListener(id);
  }, [level]);

  const say = (m) => setMessage(m);
  const animTo = (a, v, d = 700, native = false) =>
    Animated.timing(a, { toValue: v, duration: d, easing: Easing.out(Easing.quad), useNativeDriver: native }).start();

  const progress = reqVol > 0 ? alkaliAdded / reqVol : 0;
  const endpointReached = alkaliAdded >= reqVol * 0.995;
  const liqColor = indicatorColor({ id: indicatorId }, progress);

  function addAcid() {
    haptic.light();
    if (acidPoured) return;
    if (!acid || !base || !indicator) return say("Choose your acid, base and indicator first! 🧪");
    setAcidPoured(true);
    setPhase("neutralize");
    addDrop(acid.color);
    animTo(level, 0.45, 700, false);
    say(`✓ ${acid.formula} poured into the beaker. Now add ${base.formula} drop by drop until the endpoint.`);
  }

  function addAlkali() {
    if (!acidPoured || status !== "idle") return;
    if (alkaliAdded >= reqVol * 1.25) return;
    const next = Math.round((alkaliAdded + ADD_STEP) * 10) / 10;
    setAlkaliAdded(next);
    addDrop(base.color);
    animTo(level, Math.min(0.85, 0.45 + (next / reqVol) * 0.4), 350, false);
    if (next > reqVol * 1.15) {
      setStatus("failed");
      say(`💥 TOO MUCH ALKALI! You added ${next.toFixed(1)} mL but only ${reqVol.toFixed(1)} mL was needed. The salt is now impure (excess ${base.formula}). Reset and stop at the endpoint.`);
      return;
    }
    if (next >= reqVol * 0.995) {
      setPhase("neutralize");
      say(`✅ ENDPOINT reached! Indicator shows neutral. Now heat to evaporate the water.`);
    } else {
      say(`Added ${next.toFixed(1)} mL ${base.formula} — keep going (need ~${reqVol.toFixed(1)} mL). Watch the indicator.`);
    }
  }

  function evaporate() {
    if (!endpointReached || status !== "idle") return;
    setPhase("evaporate");
    setHeating(true);
    animTo(level, 0.2, 2200, false);
    Animated.delay(2250).start(() => {
      setHeating(false);
      setPhase("crystallize");
      say("✓ Solution is now saturated (small volume left). Cool it to grow crystals.");
    });
  }

  function crystallize() {
    if (phase !== "crystallize" || status !== "idle") return;
    Animated.timing(crystalGrow, { toValue: 1, duration: 1400, easing: Easing.out(Easing.quad), useNativeDriver: true }).start();
    Animated.delay(1450).start(() => {
      setStatus("success");
      setSaved(false);
      setNotes("");
      say(`🎉 Pure ${product.name} (${product.formula}) crystals formed! View the report.`);
    });
  }

  function reset() {
    setAcidPoured(false);
    setAlkaliAdded(0);
    setPhase("acid");
    setHeating(false);
    setStatus("idle");
    setAcid(null);
    setBase(null);
    setIndicator(null);
    setDrops([]);
    level.setValue(0);
    crystalGrow.setValue(0);
    say("Bench reset. Choose your acid, base and indicator to begin.");
  }

  async function saveReport() {
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "salt-prep",
      experimentTitle: experiment.title || "Preparation of a Salt",
      topicId,
      date: new Date().toLocaleDateString(),
      acid: acid.formula,
      base: base.formula,
      acidVol,
      alkaliVol: reqVol.toFixed(1),
      indicator: indicatorName,
      saltFormula: product.formula,
      saltName: product.name,
      result: `${product.name} (${product.formula})`,
      status: "success",
      summary: `Neutralized ${acidVol} mL ${acid.formula} with ${reqVol.toFixed(1)} mL ${base.formula} (${indicatorName}). Evaporated to saturation, cooled → pure ${product.name} crystals (${product.formula}).`,
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); say("📝 Report saved to your phone. Review it any time from the Lab hub."); }
    else say("Could not save the report. Please try again.");
  }

  const step = !acidPoured
    ? 0
    : !endpointReached
    ? 2
    : phase === "crystallize" || status === "success"
    ? 4
    : phase === "evaporate" || heating
    ? 3
    : 3;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />

      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: GREEN, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>
          {experiment.title || "Preparation of a Salt"}
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
        <View style={{ position: "absolute", bottom: 52, width: "100%", height: 2, backgroundColor: "#d1d5db" }} />

        {heating ? (
          <View style={{ position: "absolute", bottom: 150 }}>
            <BunsenBurner flame />
          </View>
        ) : null}

        <View style={{ alignItems: "center" }}>
          <View style={{ width: 130, height: 150, position: "relative" }}>
            <Beaker w={130} h={150} fill={levelState} color={liqColor} />
            {/* visible drops falling as each reagent is added */}
            {drops.map((d) => (
              <Drop key={d.id} color={d.color} onDone={() => removeDrop(d.id)} />
            ))}
            {/* Crystals growing at the bottom once crystallizing */}
            {(phase === "crystallize" || status === "success") ? (
              <View style={{ position: "absolute", bottom: 14, left: 0, right: 0, height: 36, alignItems: "center", justifyContent: "flex-end", flexDirection: "row" }}>
                {[0, 1, 2, 3, 4].map((i) => (
                  <Animated.View
                    key={i}
                    style={{
                      width: 12, height: 12, marginHorizontal: 3, backgroundColor: "#e0f2fe",
                      borderWidth: 1, borderColor: "#7dd3fc", borderRadius: 2,
                      transform: [{ rotate: "45deg" }, { scale: crystalGrow }],
                    }}
                  />
                ))}
              </View>
            ) : null}
          </View>
          {/* Steam while heating */}
          {heating ? (
            <View style={{ position: "absolute", top: 0, alignItems: "center" }}>
              {[0, 1, 2].map((i) => <Steam key={i} delay={i * 350} />)}
            </View>
          ) : null}
        </View>

        <Text style={{ fontSize: 11, color: "#64748b", fontWeight: "700", marginTop: 12 }}>
          {!acidPoured ? "Empty beaker" : endpointReached ? (status === "success" ? `${product.formula} crystals 💎` : heating ? "Evaporating…" : "Saturated solution") : `Adding ${base.formula}`}
        </Text>
      </View>

      {/* ===== CONTROL PANEL ===== */}
      <View style={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 16, paddingTop: 14, paddingBottom: 18, shadowColor: "#000", shadowOffset: { width: 0, height: -3 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 10 }}>
        <View style={{ backgroundColor: status === "failed" ? "#fef2f2" : status === "success" ? "#f0fdf4" : "#eff6ff", borderRadius: 12, padding: 12, borderWidth: 1, borderColor: status === "failed" ? "#fecaca" : status === "success" ? "#bbf7d0" : "#bfdbfe", marginBottom: 12, minHeight: 58, justifyContent: "center" }}>
          <Text style={{ fontSize: 13, lineHeight: 19, color: theme.colors.textMuted }}>{message}</Text>
        </View>

        {status === "failed" ? (
          <TouchableOpacity onPress={reset} style={{ alignItems: "center", paddingVertical: 12 }}>
            <Text style={{ color: "#64748b", fontWeight: "700", fontSize: 14 }}>↺ Reset Experiment</Text>
          </TouchableOpacity>
        ) : status === "success" ? (
          <>
            <Btn label="📝 View Report" onPress={() => setReportOpen(true)} accent={GREEN} full />
            <TouchableOpacity onPress={reset} style={{ marginTop: 10, alignItems: "center", paddingVertical: 8 }}>
              <Text style={{ color: "#64748b", fontWeight: "700", fontSize: 13 }}>↺ Reset Experiment</Text>
            </TouchableOpacity>
          </>
        ) : !acidPoured ? (
          <View>
            <ChoiceRow label="Acid" options={ACIDS} selected={acid} onSelect={setAcid} />
            <ChoiceRow label="Base" options={BASES} selected={base} onSelect={setBase} />
            <ChoiceRow label="Indicator" options={INDICATORS} selected={indicator} onSelect={setIndicator} />
            <Btn
              label={acid ? `① Add ${acid.formula}` : "① Choose reagents first"}
              onPress={addAcid}
              disabled={!acid || !base || !indicator}
              accent={GREEN}
              full
            />
          </View>
        ) : !endpointReached ? (
          <>
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
              <View style={{ flex: 1, height: 12, backgroundColor: "#e5e7eb", borderRadius: 6, overflow: "hidden" }}>
                <View style={{ width: `${Math.min(100, progress * 100)}%`, height: 12, backgroundColor: endpointReached ? GREEN : "#f59e0b" }} />
              </View>
              <Text style={{ fontSize: 11, fontWeight: "800", color: "#475569", marginLeft: 8 }}>{alkaliAdded.toFixed(1)}/{reqVol.toFixed(1)} mL</Text>
            </View>
            <Btn label={`＋ Add ${base.formula} (${ADD_STEP} mL)`} onPress={addAlkali} accent="#7c3aed" full />
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 8 }}>
              <View style={{ width: 14, height: 14, borderRadius: 3, backgroundColor: liqColor, borderWidth: 1, borderColor: "#cbd5e1" }} />
              <Text style={{ fontSize: 11, color: "#64748b", marginLeft: 6, fontWeight: "700" }}>Indicator: {indicatorLabel({ id: indicatorId }, progress)}</Text>
            </View>
          </>
        ) : (
          <>
            {phase === "neutralize" || (phase === "evaporate" && !heating) ? (
              <Btn label="🔥 Heat to evaporate" onPress={evaporate} accent="#ea580c" full />
            ) : heating ? (
              <Btn label="♨️ Heating…" onPress={() => {}} disabled accent="#ea580c" full />
            ) : phase === "crystallize" ? (
              <Btn label="❄️ Cool & crystallize" onPress={crystallize} accent={GREEN} full />
            ) : null}
            <TouchableOpacity onPress={reset} style={{ marginTop: 10, alignItems: "center", paddingVertical: 8 }}>
              <Text style={{ color: "#64748b", fontWeight: "700", fontSize: 13 }}>↺ Reset Experiment</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      <Modal visible={reportOpen} transparent animationType="slide" onRequestClose={() => setReportOpen(false)}>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.45)", justifyContent: "flex-end" }}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ maxHeight: "88%" }}>
          <ScrollView style={{ maxHeight: "100%" }} contentContainerStyle={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 24, paddingBottom: 32 }} keyboardShouldPersistTaps="handled">
            <View style={{ width: 40, height: 4, backgroundColor: "#d1d5db", borderRadius: 2, alignSelf: "center", marginBottom: 18 }} />
            <Text style={{ fontSize: 26, textAlign: "center" }}>🎉</Text>
            <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>Salt Prepared!</Text>
            <View style={{ backgroundColor: theme.colors.surfaceMuted, borderRadius: 12, padding: 14, marginVertical: 14 }}>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>• Acid: {acid.formula} ({acidVol} mL)</Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Alkali: {base.formula} ({reqVol.toFixed(1)} mL)</Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Indicator: {indicatorName}</Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Salt: <Text style={{ fontWeight: "800" }}>{product.formula} · {product.name}</Text></Text>
              <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Method: neutralize → evaporate → crystallize</Text>
            </View>
            <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.textMuted, marginBottom: 6 }}>Your report / observations</Text>
            <TextInput
              style={{ borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }}
              placeholder="e.g. The indicator turned orange at the endpoint. After evaporation and cooling, white crystals formed."
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

function Steam({ delay }) {
  const y = useRef(new Animated.Value(0)).current;
  const o = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const run = () => {
      y.setValue(0); o.setValue(0.5);
      Animated.parallel([
        Animated.timing(y, { toValue: -50, duration: 1300, delay, easing: Easing.out(Easing.quad), useNativeDriver: true }),
        Animated.timing(o, { toValue: 0, duration: 1300, delay, useNativeDriver: true }),
      ]).start(() => run());
    };
    run();
    return () => { y.stopAnimation(); o.stopAnimation(); };
  }, [delay, y, o]);
  return (
    <Animated.View style={{ position: "absolute", top: 0, width: 10, height: 10, borderRadius: 5, backgroundColor: "#e2e8f0", opacity: o, transform: [{ translateY: y }] }} />
  );
}

// A single reagent drop that falls into the beaker, then reports done.
function Drop({ color, onDone }) {
  const y = useRef(new Animated.Value(-14)).current;
  const o = useRef(new Animated.Value(0.95)).current;
  useEffect(() => {
    Animated.parallel([
      Animated.timing(y, { toValue: 110, duration: 520, easing: Easing.in(Easing.quad), useNativeDriver: true }),
      Animated.timing(o, { toValue: 0, duration: 520, useNativeDriver: true }),
    ]).start(() => onDone && onDone());
  }, []);
  return (
    <Animated.View
      style={{
        position: "absolute",
        top: 0,
        left: "50%",
        marginLeft: -5,
        width: 10,
        height: 14,
        borderRadius: 5,
        backgroundColor: color,
        opacity: o,
        transform: [{ translateY: y }],
      }}
    />
  );
}

// Student choice row: tap a chip to select (no pre-selection).
function ChoiceRow({ label, options, selected, onSelect }) {
  return (
    <View style={{ marginBottom: 8 }}>
      <Text style={{ fontSize: 11, fontWeight: "800", color: "#475569", marginBottom: 4 }}>{label}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingRight: 4 }}>
        {options.map((o) => {
          const on = selected && selected.id === o.id;
          return (
            <TouchableOpacity
              key={o.id}
              onPress={() => onSelect(o)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: on ? "#dcfce7" : "#fff",
                borderWidth: 1.5,
                borderColor: on ? GREEN : "#e5e7eb",
                borderRadius: 10,
                paddingVertical: 6,
                paddingHorizontal: 9,
                marginRight: 6,
                opacity: on ? 1 : 0.95,
              }}
            >
              <View style={{ width: 9, height: 9, borderRadius: 4.5, backgroundColor: o.color || "#94a3b8", marginRight: 5 }} />
              <Text style={{ fontSize: 11, fontWeight: on ? "800" : "600", color: on ? "#14532d" : theme.colors.textMuted }}>{o.formula || o.name}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
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
