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
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { labStorage } from "../../../storage/labStorage";
import { ACIDS, BASES, INDICATORS } from "../../titration/reagents";

const GREEN = "#16a34a";
const GLASS = "#94a3b8";
const STEEL = "#9ca3af";

const BURETTE_CAP = 50;
const BURETTE_H = 150;
const TOL_LOW = 0.4;
const TOL_HIGH = 0.3;

const STEP_LABELS = ["Flask", "Alkali", "Indicator", "Burette", "Titrate"];

function hexToRgba(h, a) {
  h = h.replace("#", "");
  return `rgba(${parseInt(h.slice(0, 2), 16)},${parseInt(h.slice(2, 4), 16)},${parseInt(h.slice(4, 6), 16)},${a})`;
}

export default function TitrationExperiment() {
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "acids";
  const cfg = route.params?.config;

  const acid = cfg?.acid || ACIDS[0];
  const base = cfg?.base || BASES[0];
  const indicator = cfg?.indicator || INDICATORS[0];
  const BASE_VOL = cfg?.baseVolume || 25;
  const TARGET = useRef(cfg?.endpoint || Math.round((20 + Math.random() * 5) * 10) / 10).current;

  const [flaskPlaced, setFlaskPlaced] = useState(false);
  const [naohAdded, setNaohAdded] = useState(false);
  const [indicatorAdded, setIndicatorAdded] = useState(false);
  const [buretteFilled, setBuretteFilled] = useState(false);
  const [used, setUsed] = useState(0);
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState(`Set up your apparatus, then pipette ${BASE_VOL.toFixed(1)} mL of ${base.name}.`);

  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  // ---- Animations ----
  const mix = useRef(new Animated.Value(0)).current;
  const level = useRef(new Animated.Value(0)).current;
  const column = useRef(new Animated.Value(0)).current;
  const dropY = useRef(new Animated.Value(0)).current;
  const dropO = useRef(new Animated.Value(0)).current;
  const swirl = useRef(new Animated.Value(0)).current;
  const indBottleY = useRef(new Animated.Value(70)).current;
  const indD1Y = useRef(new Animated.Value(0)).current;
  const indD1O = useRef(new Animated.Value(0)).current;
  const indD2Y = useRef(new Animated.Value(0)).current;
  const indD2O = useRef(new Animated.Value(0)).current;

  const alkali = hexToRgba(indicator.colorInAlkali, 0.72);
  const endColor = hexToRgba(indicator.id === "phenolphthalein" ? "#e0f2fe" : indicator.colorInAcid, 0.5);
  const liquidColor = mix.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["rgba(191,219,254,0.45)", alkali, endColor],
  });
  const spin = swirl.interpolate({ inputRange: [-1, 1], outputRange: ["-6deg", "6deg"] });

  const say = (m) => setMessage(m);
  const animTo = (a, v, d = 450, native = false) =>
    Animated.timing(a, { toValue: v, duration: d, easing: Easing.out(Easing.quad), useNativeDriver: native }).start();

  function drip() {
    dropY.setValue(0); dropO.setValue(1);
    Animated.parallel([
      Animated.timing(dropY, { toValue: 62, duration: 420, easing: Easing.in(Easing.quad), useNativeDriver: true }),
      Animated.sequence([
        Animated.timing(dropO, { toValue: 1, duration: 40, useNativeDriver: true }),
        Animated.timing(dropO, { toValue: 0, duration: 140, delay: 240, useNativeDriver: true }),
      ]),
    ]).start();
  }

  function doSwirl() {
    if (!buretteFilled) return say("Fill the burette with acid first! 🧪");
    Animated.sequence([
      Animated.timing(swirl, { toValue: 1, duration: 120, useNativeDriver: true }),
      Animated.timing(swirl, { toValue: -1, duration: 240, useNativeDriver: true }),
      Animated.timing(swirl, { toValue: 1, duration: 240, useNativeDriver: true }),
      Animated.timing(swirl, { toValue: 0, duration: 120, useNativeDriver: true }),
    ]).start();
    say("Swirling to mix the acid evenly through the alkali… 🔄");
  }

  function placeFlask() {
    if (flaskPlaced) return;
    setFlaskPlaced(true); setStep(1);
    say(`Beaker on the bench. ✓ Now pipette ${BASE_VOL.toFixed(1)} mL of ${base.name} (${base.formula}).`);
  }
  function addNaOH() {
    if (!flaskPlaced) return say("Place the beaker on the bench first! 🫙");
    if (naohAdded) return;
    setNaohAdded(true); setStep(2);
    animTo(level, 55); animTo(mix, 0);
    say(`${BASE_VOL.toFixed(1)} mL of ${base.name} added (colourless). ✓ Add the indicator.`);
  }
  function addIndicator() {
    if (!naohAdded) return say(`Add the ${base.name} to the beaker first! 💧`);
    if (indicatorAdded) return;
    setIndicatorAdded(true); setStep(3);
    const drop = (y, o) =>
      Animated.sequence([
        Animated.timing(o, { toValue: 1, duration: 60, useNativeDriver: true }),
        Animated.timing(y, { toValue: 46, duration: 300, easing: Easing.in(Easing.quad), useNativeDriver: true }),
        Animated.timing(o, { toValue: 0, duration: 120, useNativeDriver: true }),
      ]);
    Animated.sequence([
      Animated.timing(indBottleY, { toValue: 0, duration: 300, useNativeDriver: false }),
      drop(indD1Y, indD1O),
      Animated.delay(140),
      drop(indD2Y, indD2O),
      Animated.timing(mix, { toValue: 0.5, duration: 500, useNativeDriver: false }),
      Animated.timing(indBottleY, { toValue: 70, duration: 300, useNativeDriver: false }),
    ]).start();
    say(`2 drops of ${indicator.name} added — the ${base.strength === "weak" ? "alkali" : "solution"} turns ${indicator.id === "phenolphthalein" ? "PINK" : "yellow"}! 🌸 Now fill the burette with ${acid.name}.`);
  }
  function fillBurette() {
    if (!indicatorAdded) return say("Add the indicator before filling the burette! 🌡️");
    if (buretteFilled) return;
    setBuretteFilled(true); setStep(4); setStatus("running");
    animTo(column, BURETTE_H, 700);
    say(`Burette filled with ${acid.name} (${acid.formula}), reading 0.0 mL. Titrate slowly — swirl as you go!`);
  }

  function pour(amount) {
    if (!buretteFilled) return say("Fill the burette with acid first! 🧪");
    if (status === "failed" || status === "success") return;
    const next = Math.round((used + amount) * 10) / 10;
    drip();
    setUsed(next);
    const p = Math.min(next / TARGET, 1.15);
    animTo(mix, 0.5 + 0.5 * Math.min(p, 1));
    animTo(level, 55 + 18 * Math.min(p, 1));
    animTo(column, Math.max(BURETTE_H * (1 - next / BURETTE_CAP), 0));

    if (next > TARGET + TOL_HIGH) {
      setStatus("failed");
      animTo(mix, 1, 350);
      return say(`💥 Overshot! You ran in ${next.toFixed(1)} mL but the endpoint was ${TARGET.toFixed(1)} mL. The colour went past the endpoint — the result is ruined. Tap Reset to retry.`);
    }
    if (next >= TARGET - TOL_LOW) say(`${next.toFixed(1)} mL — the colour is almost gone! Go dropwise and STOP the moment it changes. ⚠️`);
    else if (next >= TARGET - 2) say(`${next.toFixed(1)} mL added. Colour fading — slow down, switch to dropwise. 🌸`);
    else say(`${next.toFixed(1)} mL added. Still ${indicator.id === "phenolphthalein" ? "pink" : "yellow"} — keep titrating and swirl. 🔄`);
  }

  function stopRecord() {
    if (!buretteFilled) return say("Fill the burette with acid first! 🧪");
    if (used < TARGET - TOL_LOW) return say("Not yet — the solution still shows the alkali colour. Add more acid. 🌸");
    if (used > TARGET + TOL_HIGH) { setStatus("failed"); return say("Too late — you overshot the endpoint. Tap Reset to retry. 💥"); }
    setStatus("success"); setSaved(false); setNotes(""); setReportOpen(true);
    say("✅ Endpoint! The colour just changed — perfect. Write up your report.");
  }

  function reset() {
    setFlaskPlaced(false); setNaohAdded(false); setIndicatorAdded(false);
    setBuretteFilled(false); setUsed(0); setStep(0); setStatus("idle");
    [mix, level, column, dropO, swirl, indBottleY, indD1O, indD2O].forEach((a) => a.setValue(0));
    indD1Y.setValue(0); indD2Y.setValue(0);
    say(`Bench reset. Pipette ${BASE_VOL.toFixed(1)} mL of ${base.name} to begin.`);
  }

  async function saveReport() {
    const conc = (base.molarity * BASE_VOL * base.factor) / (used * acid.factor);
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "titration",
      experimentTitle: experiment.title || "Acid-Base Titration",
      topicId,
      date: new Date().toLocaleDateString(),
      volumeUsed: used,
      endpointTarget: TARGET,
      acid: acid.name,
      base: base.name,
      indicator: indicator.name,
      concentration: Math.round(conc * 1000) / 1000,
      status: "success",
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); say("📝 Report saved to your phone. Review it any time from the Lab hub."); }
    else say("Could not save the report. Please try again.");
  }

  const titrating = buretteFilled && status === "running";

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#eef2f7" }} edges={["top", "left", "right"]}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" translucent={false} />

      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: "#fff", borderBottomWidth: 1, borderBottomColor: "#e5e7eb" }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: GREEN, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: "#111827", marginRight: 40 }} numberOfLines={1}>
          {experiment.title || "Acid-Base Titration"}
        </Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center", paddingVertical: 10, backgroundColor: "#fff", borderBottomWidth: 1, borderBottomColor: "#f1f5f9", gap: 6 }}>
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
        <View style={{ position: "absolute", left: 40, top: 20, bottom: 30, width: 7, backgroundColor: STEEL, borderRadius: 4 }} />
        <View style={{ position: "absolute", left: 8, bottom: 26, width: 90, height: 8, backgroundColor: "#6b7280", borderRadius: 4 }} />

        <View style={{ alignItems: "center" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ position: "absolute", left: -63, width: 60, height: 9, backgroundColor: "#6b7280", borderRadius: 3 }} />
            <View style={{ width: 34, height: 14, backgroundColor: "#4b5563", borderRadius: 4, zIndex: 2 }} />
          </View>

          <View style={{ width: 30, height: BURETTE_H + 20, borderWidth: 2.5, borderColor: GLASS, borderTopLeftRadius: 5, borderTopRightRadius: 5, backgroundColor: "rgba(255,255,255,0.7)", overflow: "hidden", justifyContent: "flex-end" }}>
            <Animated.View style={{ height: column, backgroundColor: acid.color, opacity: 0.85 }} />
            {[0.2, 0.4, 0.6, 0.8].map((g) => (
              <View key={g} style={{ position: "absolute", right: 0, top: (BURETTE_H + 20) * g, width: 8, height: 1.5, backgroundColor: GLASS }} />
            ))}
          </View>
          <View style={{ width: 16, height: 10, backgroundColor: "#4b5563", borderBottomLeftRadius: 3, borderBottomRightRadius: 3 }} />
          <View style={{ width: 0, height: 0, borderLeftWidth: 5, borderRightWidth: 5, borderTopWidth: 8, borderLeftColor: "transparent", borderRightColor: "transparent", borderTopColor: GLASS }} />

          <View style={{ height: 64, width: 40, alignItems: "center", justifyContent: "flex-start" }}>
            <Animated.View style={{ width: 9, height: 12, borderRadius: 6, backgroundColor: acid.color, opacity: dropO, transform: [{ translateY: dropY }] }} />
          </View>

          <View style={{ position: "absolute", right: -78, top: 70, backgroundColor: "#fff", borderWidth: 1, borderColor: "#e2e8f0", borderRadius: 10, paddingVertical: 6, paddingHorizontal: 10, alignItems: "center", elevation: 2 }}>
            <Text style={{ fontSize: 9, color: "#94a3b8", fontWeight: "700" }}>{acid.formula}</Text>
            <Text style={{ fontSize: 18, fontWeight: "900", color: buretteFilled ? "#0284c7" : "#cbd5e1" }}>{used.toFixed(1)}</Text>
            <Text style={{ fontSize: 9, color: "#94a3b8", fontWeight: "700" }}>mL</Text>
          </View>

          {/* Indicator bottle + drops (animate in on add) */}
          <Animated.View style={{ position: "absolute", left: -78, top: 30, transform: [{ translateY: indBottleY }], alignItems: "center" }}>
            <View style={{ width: 26, height: 34, backgroundColor: "#fff", borderWidth: 2, borderColor: GLASS, borderRadius: 5, alignItems: "center", justifyContent: "flex-end", paddingBottom: 3 }}>
              <View style={{ width: 14, height: 12, backgroundColor: alkali, borderRadius: 2 }} />
            </View>
            <Text style={{ fontSize: 8, color: "#64748b", marginTop: 2, fontWeight: "700" }}>{indicator.name.split(" ")[0]}</Text>
          </Animated.View>
          <Animated.View style={{ position: "absolute", left: -34, top: 96, width: 7, height: 10, borderRadius: 5, backgroundColor: alkali, opacity: indD1O, transform: [{ translateY: indD1Y }] }} />
          <Animated.View style={{ position: "absolute", left: -30, top: 96, width: 7, height: 10, borderRadius: 5, backgroundColor: alkali, opacity: indD2O, transform: [{ translateY: indD2Y }] }} />

          <Animated.View style={{ transform: [{ rotate: spin }], alignItems: "center", marginTop: -6 }}>
            <View style={{ width: 16, height: 8, borderTopWidth: 2.5, borderRightWidth: 2.5, borderColor: GLASS, alignSelf: "flex-start", marginLeft: 6, marginBottom: -2, transform: [{ rotate: "-18deg" }] }} />
            <View style={{ width: 118, height: 104, borderWidth: 3, borderTopWidth: 0, borderColor: GLASS, borderBottomLeftRadius: 22, borderBottomRightRadius: 22, backgroundColor: "rgba(255,255,255,0.5)", overflow: "hidden", justifyContent: "flex-end" }}>
              <Animated.View style={{ height: level, backgroundColor: liquidColor }} />
              {[0.35, 0.55, 0.75].map((g) => (
                <View key={g} style={{ position: "absolute", left: 0, bottom: 104 * g, width: 10, height: 1.5, backgroundColor: GLASS }} />
              ))}
            </View>
          </Animated.View>
          <Text style={{ fontSize: 11, color: "#64748b", fontWeight: "700", marginTop: 8 }}>
            {indicatorAdded ? (status === "success" ? `${indicator.name} endpoint ✓` : used >= TARGET - TOL_LOW ? "Colour almost gone…" : indicator.id === "phenolphthalein" ? "Pink (alkaline)" : "Yellow (alkaline)") : naohAdded ? `${base.name} (colourless)` : "Empty beaker"}
          </Text>
        </View>
      </View>

      {/* ===== CONTROL PANEL ===== */}
      <View style={{ backgroundColor: "#fff", borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 16, paddingTop: 14, paddingBottom: 18, shadowColor: "#000", shadowOffset: { width: 0, height: -3 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 10 }}>
        <View style={{ backgroundColor: status === "failed" ? "#fef2f2" : status === "success" ? "#f0fdf4" : "#eff6ff", borderRadius: 12, padding: 12, borderWidth: 1, borderColor: status === "failed" ? "#fecaca" : status === "success" ? "#bbf7d0" : "#bfdbfe", marginBottom: 12, minHeight: 58, justifyContent: "center" }}>
          <Text style={{ fontSize: 13, lineHeight: 19, color: "#1f2937" }}>{message}</Text>
        </View>

        {!titrating ? (
          <View style={{ flexDirection: "row" }}>
            <Btn label="① Place Beaker" onPress={placeFlask} disabled={flaskPlaced} />
            <Btn label={`② ${BASE_VOL.toFixed(0)} mL ${base.formula}`} onPress={addNaOH} disabled={!flaskPlaced || naohAdded} />
            <Btn label="③ +2 drops" onPress={addIndicator} disabled={!naohAdded || indicatorAdded} accent="#ec4899" />
            <Btn label="④ Fill Burette" onPress={fillBurette} disabled={!indicatorAdded || buretteFilled} accent={acid.color} />
          </View>
        ) : (
          <>
            <View style={{ flexDirection: "row", marginBottom: 8 }}>
              <Btn label="Add 1 mL" onPress={() => pour(1)} accent="#dc2626" />
              <Btn label="Add drop 0.1" onPress={() => pour(0.1)} accent="#f97316" />
              <Btn label="🔄 Swirl" onPress={doSwirl} accent="#7c3aed" />
            </View>
            <Btn label="⏹ Stop & Record Endpoint" onPress={stopRecord} accent={GREEN} full />
          </>
        )}

        {(status === "failed" || buretteFilled) && (
          <TouchableOpacity onPress={reset} style={{ marginTop: 10, alignItems: "center", paddingVertical: 8 }}>
            <Text style={{ color: "#64748b", fontWeight: "700", fontSize: 13 }}>↺ Reset Experiment</Text>
          </TouchableOpacity>
        )}
      </View>

      <Modal visible={reportOpen} transparent animationType="slide" onRequestClose={() => setReportOpen(false)}>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.45)", justifyContent: "flex-end" }}>
          <ScrollView style={{ maxHeight: "88%" }} contentContainerStyle={{ backgroundColor: "#fff", borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 24, paddingBottom: 32 }} keyboardShouldPersistTaps="handled">
            <View style={{ width: 40, height: 4, backgroundColor: "#d1d5db", borderRadius: 2, alignSelf: "center", marginBottom: 18 }} />
            <Text style={{ fontSize: 26, textAlign: "center" }}>🎉</Text>
            <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: "#111827", marginTop: 6 }}>Titration Complete!</Text>
            <View style={{ backgroundColor: "#f8fafc", borderRadius: 12, padding: 14, marginVertical: 14 }}>
              <Text style={{ fontSize: 13, color: "#374151" }}>• Acid: {acid.name} ({acid.formula})</Text>
              <Text style={{ fontSize: 13, color: "#374151", marginTop: 4 }}>• Base: {BASE_VOL.toFixed(1)} mL {base.name} ({base.formula})</Text>
              <Text style={{ fontSize: 13, color: "#374151", marginTop: 4 }}>• Indicator: {indicator.name}</Text>
              <Text style={{ fontSize: 13, color: "#374151", marginTop: 4 }}>• Acid used: <Text style={{ fontWeight: "800" }}>{used.toFixed(1)} mL</Text></Text>
              <Text style={{ fontSize: 13, color: "#374151", marginTop: 4 }}>• Molarity of acid = (Cb·Vb·n_b) ÷ (Va·nₐ) = <Text style={{ fontWeight: "800" }}>{((base.molarity * BASE_VOL * base.factor) / (used * acid.factor)).toFixed(3)} mol/dm³</Text></Text>
            </View>
            <Text style={{ fontSize: 12, fontWeight: "600", color: "#374151", marginBottom: 6 }}>Your report / observations</Text>
            <TextInput
              style={{ borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 10, padding: 12, fontSize: 14, color: "#111827", height: 90, textAlignVertical: "top" }}
              placeholder="e.g. The colour disappeared at the endpoint. Calculated acid concentration ≈ 0.1 mol/dm³."
              value={notes} onChangeText={setNotes} multiline
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
