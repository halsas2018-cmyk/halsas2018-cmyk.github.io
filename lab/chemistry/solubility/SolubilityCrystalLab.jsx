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
  G,
  Circle,
  Polygon,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { labStorage } from "../../../storage/labStorage";
import { Beaker, BunsenBurner, Thermometer, Arrow, Label } from "../../components/svgKit";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import {
  computeSolubility,
  tempFraction,
  ROOM_TEMP,
} from "./solubility-data";

const GREEN = "#16a34a";
const STEP_LABELS = ["Heat", "Dissolve", "Cool", "Report"];

// Fixed positions (in beaker-local coords, w=140 h=150) for the solute markers.
// Deterministic so particles don't jump around on every render.
const DISSOLVED_POS = [
  [30, 96], [52, 120], [74, 100], [96, 122], [44, 108], [66, 132],
  [88, 104], [110, 126], [34, 128], [58, 92], [80, 118], [102, 98],
  [26, 112], [70, 112], [94, 134], [48, 134],
];
const UNDISSOLVED_POS = [
  [34, 138], [54, 140], [74, 138], [94, 140], [114, 138], [44, 142], [84, 142], [104, 142],
];
const CRYSTAL_POS = [
  [30, 136], [48, 140], [66, 136], [84, 140], [102, 136], [120, 140],
  [38, 142], [58, 142], [78, 142], [98, 142], [116, 142], [72, 142],
];

function mix(a, b, t) {
  const pa = parseInt(a.slice(1), 16);
  const pb = parseInt(b.slice(1), 16);
  const ar = (pa >> 16) & 255, ag = (pa >> 8) & 255, ab = pa & 255;
  const br = (pb >> 16) & 255, bg = (pb >> 8) & 255, bb = pb & 255;
  const r = Math.round(ar + (br - ar) * t);
  const g = Math.round(ag + (bg - ag) * t);
  const bl = Math.round(ab + (bb - ab) * t);
  return `rgb(${r},${g},${bl})`;
}

export default function SolubilityCrystalLab() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "solubility";
  const cfg = route.params?.config;

  const solute = cfg?.solute || { name: "Potassium nitrate", formula: "KNO₃", color: "#a3e635" };
  const heatTemp = cfg?.heatTemp || 80;
  const waterMass = cfg?.waterMass || 100;

  const [heated, setHeated] = useState(false);
  const [cooled, setCooled] = useState(false);
  const [addedMass, setAddedMass] = useState(0);
  const [cooling, setCooling] = useState(false);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState(
    `Heat the water, then add ${solute.formula} gradually until no more dissolves.`
  );

  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const fill = useRef(new Animated.Value(0)).current;
  const tempAnim = useRef(new Animated.Value(tempFraction(ROOM_TEMP))).current;
  const [frac, setFrac] = useState(tempFraction(ROOM_TEMP));
  const [fillState, setFillState] = useState(0);

  const animTo = (a, v, d = 700, native = false) =>
    Animated.timing(a, { toValue: v, duration: d, easing: Easing.out(Easing.quad), useNativeDriver: native }).start();

  useEffect(() => {
    const idT = tempAnim.addListener(({ value }) => setFrac(value));
    const idF = fill.addListener(({ value }) => setFillState(value));
    return () => {
      tempAnim.removeListener(idT);
      fill.removeListener(idF);
    };
  }, [tempAnim, fill]);

  const displayTemp = ROOM_TEMP + frac * (100 - ROOM_TEMP);
  const calc = computeSolubility({ solute, heatTemp, waterMass, addedMass });
  const liquidColor = mix("#e0f2fe", solute.color, heated ? 0.45 : 0.15);

  const dissolvedCount = Math.min(DISSOLVED_POS.length, Math.round(calc.dissolvedMass / 6));
  const excessCount = Math.min(UNDISSOLVED_POS.length, Math.round(calc.excess / 8));
  const crystalCount = status === "success"
    ? Math.min(CRYSTAL_POS.length, Math.round(calc.crystals / 10) + 4)
    : 0;

  function say(m) { setMessage(m); }

  function heatWater() {
    if (heated) return;
    haptic.light();
    setHeated(true);
    setCooled(false);
    setStatus("idle");
    animTo(fill, 0.5, 800, false);
    animTo(tempAnim, tempFraction(heatTemp), 2000, false);
    setMessage(`🔥 Heating… water is rising toward ${heatTemp}°C. Once hot, add ${solute.formula} gradually.`);
  }

  function addSolute() {
    if (!heated) return say("Heat the water first! 🔥");
    if (status !== "idle") return;
    haptic.light();
    const newAdded = addedMass + 10;
    setAddedMass(newAdded);
    const c = computeSolubility({ solute, heatTemp, waterMass, addedMass: newAdded });
    if (c.excess > 0) {
      setMessage(`No more ${solute.formula} dissolves at ${heatTemp}°C — you're at saturation. The extra ${c.excess.toFixed(0)} g sits undissolved at the bottom. Cooling will recrystallize it.`);
    } else {
      setMessage(`✓ ${c.dissolvedMass.toFixed(0)} g of ${solute.formula} dissolved. Saturation ≈ ${c.satHotMass.toFixed(0)} g at ${heatTemp}°C.`);
    }
  }

  function cool() {
    if (!heated) return say("Heat and dissolve the solute first! 🔥");
    if (addedMass < 5) return say("Add some solute before cooling! ➕");
    if (cooling || status !== "idle") return;
    haptic.light();
    setCooling(true);
    animTo(tempAnim, tempFraction(ROOM_TEMP), 2600, false);
    Animated.delay(2700).start(() => {
      setCooling(false);
      setCooled(true);
      setStatus("success");
      setSaved(false);
      setNotes("");
      const c = computeSolubility({ solute, heatTemp, waterMass, addedMass });
      setMessage(`✅ Cooled to ${ROOM_TEMP}°C. Solubility dropped, so ${c.crystals.toFixed(1)} g of ${solute.formula} crystallized out. See the report.`);
    });
  }

  function reset() {
    setHeated(false);
    setCooled(false);
    setAddedMass(0);
    setCooling(false);
    setStatus("idle");
    fill.setValue(0);
    tempAnim.setValue(tempFraction(ROOM_TEMP));
    setFrac(tempFraction(ROOM_TEMP));
    setFillState(0);
    setMessage(`Bench reset. Heat the water to begin, then add ${solute.formula}.`);
  }

  async function saveReport() {
    const c = computeSolubility({ solute, heatTemp, waterMass, addedMass });
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "solubility-crystal",
      experimentTitle: experiment.title || "Solubility & Crystallization",
      topicId,
      date: new Date().toLocaleDateString(),
      solute: solute.formula,
      waterMass,
      heatTemp,
      solubilityHot: c.solubilityHot.toFixed(1),
      solubilityRoom: c.solubilityRoom.toFixed(1),
      dissolvedMass: c.dissolvedMass.toFixed(1),
      addedMass: addedMass.toFixed(0),
      excess: c.excess.toFixed(1),
      crystals: c.crystals.toFixed(1),
      result: `${c.crystals.toFixed(1)} g crystals from ${waterMass} g water`,
      status: "success",
      summary: `Heated ${waterMass} g water to ${heatTemp}°C (solubility ${c.solubilityHot.toFixed(1)} g/100g), dissolved ${c.dissolvedMass.toFixed(1)} g ${solute.formula}, then cooled to ${ROOM_TEMP}°C (solubility ${c.solubilityRoom.toFixed(1)} g/100g). ${c.crystals.toFixed(1)} g crystallized out.`,
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) { setSaved(true); say("📝 Report saved to your phone. Review it any time from the Lab hub."); }
    else say("Could not save the report. Please try again.");
  }

  const step = heated ? (addedMass >= 5 ? (status === "success" ? 3 : 2) : 1) : 0;

  const B_W = 140, B_H = 150;
  const f = Math.max(0, Math.min(1, fillState));

  const LiquidParticles = () => (
    <Svg width={B_W} height={B_H} viewBox={`0 0 ${B_W} ${B_H}`} style={{ position: "absolute", top: 0, left: 0 }}>
      {/* dissolved solute — small floating circles */}
      {DISSOLVED_POS.slice(0, dissolvedCount).map((p, i) => (
        <Circle key={`d${i}`} cx={p[0]} cy={p[1]} r={4} fill={solute.color} opacity={0.9} />
      ))}
      {/* undissolved excess — darker circles settled at the bottom */}
      {UNDISSOLVED_POS.slice(0, excessCount).map((p, i) => (
        <Circle key={`u${i}`} cx={p[0]} cy={p[1]} r={4.5} fill={solute.color} opacity={0.55} stroke="#334155" strokeWidth="0.5" />
      ))}
      {/* crystals formed on cooling — small diamond shapes */}
      {status === "success"
        ? CRYSTAL_POS.slice(0, crystalCount).map((p, i) => (
            <Polygon key={`c${i}`} points={`${p[0]},${p[1] - 5} ${p[0] + 5},${p[1]} ${p[0]},${p[1] + 5} ${p[0] - 5},${p[1]}`} fill={solute.color} stroke="#1f2937" strokeWidth="0.6" />
          ))
        : null}
    </Svg>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />

      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: GREEN, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>
          {experiment.title || "Solubility & Crystallization"}
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

        {/* Temperature readout */}
        <View style={{ position: "absolute", top: 6, right: 18, alignItems: "center", backgroundColor: "#fff", borderRadius: 12, paddingVertical: 8, paddingHorizontal: 12, borderWidth: 1, borderColor: "#e5e7eb" }}>
          <Text style={{ fontSize: 11, color: "#64748b", fontWeight: "700" }}>Temp</Text>
          <Text style={{ fontSize: 22, fontWeight: "900", color: displayTemp >= heatTemp - 0.5 && heated ? "#dc2626" : "#0f172a" }}>
            {displayTemp.toFixed(0)}°C
          </Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          {/* Beaker with liquid + particles */}
          <View style={{ width: B_W, height: B_H, position: "relative" }}>
            <Beaker w={B_W} h={B_H} fill={f} color={liquidColor} label={`${waterMass} g H₂O`} />
            <LiquidParticles />
            {/* saturations/crystal hint arrows */}
            {status === "success" ? (
              <Svg width={B_W} height={B_H} viewBox={`0 0 ${B_W} ${B_H}`} style={{ position: "absolute", top: 0, left: 0 }}>
                <Arrow x1={B_W - 14} y1={138} x2={B_W - 2} y2={138} color="#dc2626" w={2} />
              </Svg>
            ) : null}
          </View>

          {/* Bunsen burner beneath the beaker */}
          <View style={{ marginLeft: -18, marginBottom: -2, zIndex: -1 }}>
            <BunsenBurner w={46} h={90} flame={heated && !cooled} />
          </View>

          {/* Thermometer beside the beaker */}
          <View style={{ marginLeft: 6, marginBottom: 4 }}>
            <Thermometer h={130} temp={frac} color="#ef4444" />
          </View>
        </View>

        <Text style={{ fontSize: 11, color: "#64748b", fontWeight: "700", marginTop: 14 }}>
          {!heated ? "Cold water" : status === "success" ? "Crystals formed ❄️" : cooled ? "Cooling…" : "Hot solution 🔥"}
        </Text>
        <Text style={{ fontSize: 11, color: "#94a3b8", marginTop: 4 }}>
          Added: {addedMass} g · Dissolved: {calc.dissolvedMass.toFixed(0)} g
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
        ) : (
          <View style={{ flexDirection: "row" }}>
            <Btn label="① Heat" onPress={heatWater} disabled={heated} accent="#f97316" />
            <Btn label="② Add" onPress={addSolute} disabled={!heated} accent="#7c3aed" />
            <Btn label="③ Cool" onPress={cool} disabled={!heated || addedMass < 5 || cooling} accent={GREEN} />
          </View>
        )}
      </View>

      <Modal visible={reportOpen} transparent animationType="slide" onRequestClose={() => setReportOpen(false)}>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.45)", justifyContent: "flex-end" }}>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ maxHeight: "88%" }}>
            <ScrollView style={{ maxHeight: "100%" }} contentContainerStyle={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 24, paddingBottom: 32 }} keyboardShouldPersistTaps="handled">
              <View style={{ width: 40, height: 4, backgroundColor: "#d1d5db", borderRadius: 2, alignSelf: "center", marginBottom: 18 }} />
              <Text style={{ fontSize: 26, textAlign: "center" }}>🎉</Text>
              <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>Crystals Grown!</Text>
              <View style={{ backgroundColor: theme.colors.surfaceMuted, borderRadius: 12, padding: 14, marginVertical: 14 }}>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>• Solute: {solute.formula} ({solute.name})</Text>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Water: {waterMass} g</Text>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Heated to: <Text style={{ fontWeight: "800" }}>{heatTemp}°C</Text></Text>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Solubility @ {heatTemp}°C: <Text style={{ fontWeight: "800", color: GREEN }}>{calc.solubilityHot.toFixed(1)} g/100g</Text></Text>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Solubility @ {ROOM_TEMP}°C: {calc.solubilityRoom.toFixed(1)} g/100g</Text>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Dissolved when hot: {calc.dissolvedMass.toFixed(1)} g</Text>
                <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 4 }}>• Crystals on cooling: <Text style={{ fontWeight: "800", color: GREEN }}>{calc.crystals.toFixed(1)} g</Text></Text>
              </View>
              <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.textMuted, marginBottom: 6 }}>Your report / observations</Text>
              <TextInput
                style={{ borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }}
                placeholder="e.g. As the beaker cooled, colourless crystals appeared at the bottom. The hotter the water, the more solute dissolved."
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
