import React, { useState, useRef, useMemo } from "react";
import { View, Text, TouchableOpacity, StatusBar, Modal, ScrollView, TextInput, Animated, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import { useNavigation, useRoute } from "@react-navigation/native";
import { labStorage } from "../../../storage/labStorage";
import Svg, { Rect, Text as SvgText } from "react-native-svg";
import { Arrow } from "../../components/svgKit";
import {
  buildSquare,
  genotypeRatio,
  phenotypeRatio,
  phenotypeOptions,
  punnettExplanation,
  normalizeGenotype,
  TRAIT,
} from "./genetics-data";

const GREEN = "#16a34a";

export default function BioGeneticsPunnettLab() {
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const theme = useTheme();
  const topicId = route.params?.topicId || "secA-genetics-probability";
  const cfg = route.params?.config;
  const p1 = cfg?.parent1 || "Tt";
  const p2 = cfg?.parent2 || "Tt";

  const square = useMemo(() => buildSquare(p1, p2), [p1, p2]);
  const options = useMemo(() => {
    const opts = phenotypeOptions(square.cells);
    const a = opts.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }, [p1, p2]);

  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState(
    `Ready: parents ${p1} × ${p2}. Press Build to fill the Punnett square.`
  );
  const [reportOpen, setReportOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const cellAnims = useRef([0, 1, 2, 3].map(() => new Animated.Value(0))).current;
  const say = (m) => setMessage(m);

  function build() {
    if (status === "building" || status === "built" || status === "success") return;
    cellAnims.forEach((av) => av.setValue(0));
    setStatus("building");
    say("Combining the gametes from both parents…");
    Animated.stagger(
      220,
      cellAnims.map((av) =>
        Animated.timing(av, { toValue: 1, duration: 480, useNativeDriver: false })
      )
    ).start(() => {
      setStatus("built");
      say(
        `Offspring genotypes are filled in. Now predict the phenotype ratio (${TRAIT.dominantPhenotype} vs ${TRAIT.recessivePhenotype}).`
      );
    });
  }

  function choose(opt) {
    if (status !== "built") return;
    if (opt.correct) {
      setStatus("success");
      setSaved(false);
      setNotes("");
      say("✅ Correct! That is the expected phenotype ratio.");
    } else {
      setStatus("failed");
      say(
        "💡 Not quite. Count the squares that contain a dominant T (tall) and those with only t (short), then express them as a ratio. Reset and try again."
      );
    }
  }

  function reset() {
    cellAnims.forEach((av) => av.setValue(0));
    setStatus("idle");
    say(`Bench reset. Parents ${p1} × ${p2}. Press Build to fill the Punnett square.`);
  }

  async function saveReport() {
    const gRatio = genotypeRatio(square.cells);
    const pRatio = phenotypeRatio(square.cells);
    const report = {
      id: Date.now().toString(),
      experimentId: experiment.id || "monohybrid-cross",
      experimentTitle: experiment.title || "Monohybrid Cross (Punnett Square)",
      topicId,
      date: new Date().toLocaleDateString(),
      parent1: p1,
      parent2: p2,
      genotypeRatio: gRatio,
      phenotypeRatio: pRatio,
      summary: `Cross ${p1} × ${p2}: genotype ratio ${gRatio}; phenotype ratio ${pRatio}.`,
      explanation: punnettExplanation(p1, p2),
      status: "success",
      notes: notes.trim(),
    };
    const ok = await labStorage.saveReport(report);
    if (ok) {
      setSaved(true);
      say("📝 Report saved to your phone. Review it any time from the Lab hub.");
    } else {
      say("Could not save the report. Please try again.");
    }
  }

  // ----- SVG layout -----
  const CELL = 84;
  const GAP = 6;
  const HX = 90; // header width (left)
  const HY = 90; // header height (top)
  const W = HX + 2 * (CELL + GAP);
  const H = HY + 2 * (CELL + GAP);
  const cellXY = (r, c) => ({ left: HX + c * (CELL + GAP), top: HY + r * (CELL + GAP) });
  const alleleColor = (a) => (a === TRAIT.dominantAllele ? GREEN : "#9ca3af");

  const Btn = ({ label, onPress, disabled, full }) => (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.85}
      style={{
        width: full ? "100%" : undefined,
        backgroundColor: disabled ? theme.colors.border : GREEN,
        borderRadius: 11,
        paddingVertical: 12,
        alignItems: "center",
        justifyContent: "center",
        opacity: disabled ? 0.55 : 1,
      }}
    >
      <Text style={{ color: disabled ? theme.colors.textMuted : "#fff", fontWeight: "800", fontSize: full ? 14 : 11.5 }} numberOfLines={1}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  const showRatio = status === "built" || status === "success";

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />
      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: GREEN, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }} numberOfLines={1}>
          {experiment.title || "Monohybrid Cross"}
        </Text>
      </View>

      {/* ===== BENCH (fixed) ===== */}
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={{ width: W + 20, height: H + 20, alignItems: "center", justifyContent: "center" }}>
          <View style={{ width: W, height: H, position: "relative" }}>
            <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
              {/* corner */}
              <Rect x={0} y={0} width={HX} height={HY} rx={10} fill={theme.colors.surfaceAlt} stroke={theme.colors.border} strokeWidth={1.5} />
              {/* top headers (Parent 2 gametes) */}
              {square.p2g.map((g, c) => (
                <Rect key={`th${c}`} x={HX + c * (CELL + GAP)} y={0} width={CELL} height={HY} rx={10} fill={theme.colors.surfaceAlt} stroke={theme.colors.border} strokeWidth={1.5} />
              ))}
              {/* left headers (Parent 1 gametes) */}
              {square.p1g.map((g, r) => (
                <Rect key={`lh${r}`} x={0} y={HY + r * (CELL + GAP)} width={HX} height={CELL} rx={10} fill={theme.colors.surfaceAlt} stroke={theme.colors.border} strokeWidth={1.5} />
              ))}
              {/* offspring cells (outline) */}
              {square.cells.map((row, r) =>
                row.map((cell, c) => {
                  const { left, top } = cellXY(r, c);
                  return (
                    <Rect key={`oc${r}${c}`} x={left} y={top} width={CELL} height={CELL} rx={10} fill={theme.colors.surface} stroke={theme.colors.border} strokeWidth={1.5} />
                  );
                })
              )}
              {/* corner label */}
              <SvgText x={HX / 2} y={HY / 2 - 4} fontSize={12} fontWeight="700" fill={theme.colors.textMuted} textAnchor="middle">Parent 1</SvgText>
              <SvgText x={HX / 2} y={HY / 2 + 14} fontSize={11} fontWeight="700" fill={theme.colors.textMuted} textAnchor="middle">gametes →</SvgText>
              {/* top header alleles */}
              {square.p2g.map((g, c) => (
                <SvgText key={`tht${c}`} x={HX + c * (CELL + GAP) + CELL / 2} y={HY / 2 + 7} fontSize={22} fontWeight="800" fill={alleleColor(g)} textAnchor="middle">{g}</SvgText>
              ))}
              {/* left header alleles */}
              {square.p1g.map((g, r) => (
                <SvgText key={`lht${r}`} x={HX / 2} y={HY + r * (CELL + GAP) + CELL / 2 + 7} fontSize={22} fontWeight="800" fill={alleleColor(g)} textAnchor="middle">{g}</SvgText>
              ))}
              {/* arrows from headers into the square */}
              {square.p2g.map((g, c) => {
                const x = HX + c * (CELL + GAP) + CELL / 2;
                return <Arrow key={`ta${c}`} x1={x} y1={HY - 22} x2={x} y2={HY - 6} color={GREEN} />;
              })}
              {square.p1g.map((g, r) => {
                const y = HY + r * (CELL + GAP) + CELL / 2;
                return <Arrow key={`la${r}`} x1={HX - 22} y1={y} x2={HX - 6} y2={y} color={GREEN} />;
              })}
            </Svg>

            {/* offspring genotype letters (animated fill) */}
            {square.cells.map((row, r) =>
              row.map((cell, c) => {
                const { left, top } = cellXY(r, c);
                const av = cellAnims[r * 2 + c];
                const scale = av.interpolate({ inputRange: [0, 1], outputRange: [0.4, 1] });
                return (
                  <Animated.View
                    key={`of${r}${c}`}
                    pointerEvents="none"
                    style={{ position: "absolute", left, top, width: CELL, height: CELL, alignItems: "center", justifyContent: "center", opacity: av, transform: [{ scale }] }}
                  >
                    <Text style={{ fontSize: 24, fontWeight: "800", color: theme.colors.text }}>{normalizeGenotype(cell)}</Text>
                  </Animated.View>
                );
              })
            )}
          </View>

          {showRatio ? (
            <View style={{ marginTop: 14, width: W, backgroundColor: theme.colors.surfaceAlt, borderRadius: 12, paddingVertical: 10, paddingHorizontal: 12 }}>
              <Text style={{ fontSize: 13, fontWeight: "700", color: theme.colors.text, textAlign: "center" }}>Genotype: {genotypeRatio(square.cells)}</Text>
              <Text style={{ fontSize: 13, fontWeight: "700", color: theme.colors.text, textAlign: "center", marginTop: 3 }}>Phenotype: {phenotypeRatio(square.cells)}</Text>
            </View>
          ) : null}
        </View>
      </View>

      {/* ===== CONTROL PANEL ===== */}
      <View style={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 16, paddingTop: 14, paddingBottom: 18, shadowColor: "#000", shadowOffset: { width: 0, height: -3 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 10 }}>
        <View style={{ backgroundColor: status === "failed" ? "#fef2f2" : status === "success" ? "#f0fdf4" : "#eff6ff", borderRadius: 12, padding: 12, borderWidth: 1, borderColor: status === "failed" ? "#fecaca" : status === "success" ? "#bbf7d0" : "#bfdbfe", marginBottom: 12, minHeight: 58, justifyContent: "center" }}>
          <Text style={{ fontSize: 13, lineHeight: 19, color: "#1f2937" }}>{message}</Text>
        </View>

        {status === "idle" ? (
          <Btn label="① Build Punnett Square" onPress={() => { haptic.light(); build(); }} full />
        ) : status === "building" ? (
          <Btn label="Filling the square…" disabled full />
        ) : status === "built" ? (
          <>
            <Text style={{ fontSize: 12, fontWeight: "800", color: theme.colors.text, marginBottom: 8 }}>
              Predict the phenotype ratio:
            </Text>
            {options.map((o, i) => (
              <TouchableOpacity key={i} onPress={() => { haptic.light(); choose(o); }} style={{ backgroundColor: theme.colors.surfaceAlt, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 11, paddingVertical: 12, paddingHorizontal: 14, marginBottom: 8 }}>
                <Text style={{ fontSize: 13.5, fontWeight: "700", color: theme.colors.text }}>{o.label}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity onPress={reset} style={{ marginTop: 4, alignItems: "center", paddingVertical: 8 }}>
              <Text style={{ color: theme.colors.textMuted, fontWeight: "700", fontSize: 13 }}>↺ Reset Experiment</Text>
            </TouchableOpacity>
          </>
        ) : status === "failed" ? (
          <TouchableOpacity onPress={reset} style={{ alignItems: "center", paddingVertical: 12 }}>
            <Text style={{ color: theme.colors.textMuted, fontWeight: "700", fontSize: 14 }}>↺ Reset Experiment</Text>
          </TouchableOpacity>
        ) : (
          <>
            <Btn label="📝 View Report" onPress={() => setReportOpen(true)} accent={GREEN} full />
            <TouchableOpacity onPress={reset} style={{ marginTop: 10, alignItems: "center", paddingVertical: 8 }}>
              <Text style={{ color: theme.colors.textMuted, fontWeight: "700", fontSize: 13 }}>↺ Reset Experiment</Text>
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
              <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center", color: theme.colors.text, marginTop: 6 }}>Punnett Square Complete!</Text>
              <View style={{ backgroundColor: theme.colors.bg, borderRadius: 12, padding: 14, marginVertical: 14 }}>
                <Text style={{ fontSize: 13, color: theme.colors.text }}>• Cross: <Text style={{ fontWeight: "800" }}>{p1} × {p2}</Text></Text>
                <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 4 }}>• Genotype ratio: <Text style={{ fontWeight: "800" }}>{genotypeRatio(square.cells)}</Text></Text>
                <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 4 }}>• Phenotype ratio: <Text style={{ fontWeight: "800" }}>{phenotypeRatio(square.cells)}</Text></Text>
                <Text style={{ fontSize: 13, color: theme.colors.text, marginTop: 6, lineHeight: 19 }}>{punnettExplanation(p1, p2)}</Text>
              </View>
              <Text style={{ fontSize: 12, fontWeight: "600", color: theme.colors.text, marginBottom: 6 }}>Your report / observations</Text>
              <TextInput
                style={{ borderWidth: 1, borderColor: theme.colors.border, borderRadius: 10, padding: 12, fontSize: 14, color: theme.colors.text, height: 90, textAlignVertical: "top" }}
                placeholder="e.g. The dominant T allele masks the recessive t, giving a 3:1 tall-to-short ratio."
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
              <TouchableOpacity onPress={() => { setReportOpen(false); navigation.goBack(); }} style={{ marginTop: 10, backgroundColor: theme.colors.surfaceAlt, borderRadius: 12, paddingVertical: 13 }}>
                <Text style={{ color: theme.colors.text, textAlign: "center", fontWeight: "700", fontSize: 14 }}>Done</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </SafeAreaView>
  );
}
