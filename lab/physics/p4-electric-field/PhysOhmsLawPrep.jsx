import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlipCard from "../../titration/FlipCard";
import { useTheme } from "../../../theme";
import { haptic } from "../../../haptic";
import {
  APPARATUS,
  RESISTORS,
  current,
  resistanceTolerance,
} from "./ohms-law-data";

const ACCENT = "#0ea5e9";

export default function PhysOhmsLawPrep() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "p4-electric-field";

  const [app, setApp] = useState([]);
  const [resistorId, setResistorId] = useState(null);

  const resistor = RESISTORS.find((r) => r.id === resistorId) || null;
  const previewI = resistor ? current(6, resistor.value) : null; // preview at max V=6
  const tol = resistor ? resistanceTolerance(resistor.value) : null;

  function toggleApp(id) {
    setApp((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  function start() {
    haptic.light();
    const required = APPARATUS.filter((a) => a.needed).map((a) => a.id);
    const missing = required.filter((r) => !app.includes(r));
    if (missing.length)
      return Alert.alert(
        "Missing apparatus",
        "Select all the required apparatus before you start."
      );
    if (!resistor)
      return Alert.alert(
        "Pick a resistor",
        "Choose the resistor you want to investigate."
      );

    navigation.navigate("PhysOhmsLawLab", {
      experiment,
      topicId,
      config: { R: resistor.value, Rlabel: resistor.label, apparatus: app },
    });
  }

  const Chip = ({ item, selected, onPick, right }) => (
    <TouchableOpacity
      onPress={onPick}
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: selected ? "#e0f2fe" : theme.colors.surface,
        borderWidth: 1.5,
        borderColor: selected ? ACCENT : theme.colors.border,
        borderRadius: 12,
        paddingVertical: 9,
        paddingHorizontal: 12,
        marginRight: 8,
        marginBottom: 8,
      }}
    >
      {item.icon ? (
        <Text style={{ fontSize: 15, marginRight: 6 }}>{item.icon}</Text>
      ) : null}
      <Text
        style={{
          fontSize: 13,
          fontWeight: selected ? "800" : "600",
          color: selected ? "#0c4a6e" : theme.colors.textMuted,
        }}
      >
        {item.label || item.name}
      </Text>
      {right}
    </TouchableOpacity>
  );

  const Section = ({ title, children }) => (
    <View style={{ marginBottom: 18 }}>
      <Text
        style={{
          fontSize: 12,
          fontWeight: "800",
          color: "#6b7280",
          marginBottom: 10,
          letterSpacing: 0.5,
        }}
      >
        {title}
      </Text>
      {children}
    </View>
  );

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.colors.bg }}
      edges={["top", "left", "right"]}
    >
      <StatusBar
        barStyle={theme.isDark ? "light-content" : "dark-content"}
        backgroundColor={theme.colors.bg}
        translucent={false}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 16,
          paddingVertical: 12,
          backgroundColor: theme.colors.surface,
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.border,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Text style={{ fontSize: 16, color: ACCENT, fontWeight: "700" }}>
            ‹ Back
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: 16,
            fontWeight: "800",
            color: theme.colors.text,
            marginRight: 40,
          }}
        >
          Pre-lab Briefing
        </Text>
      </View>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={0}
      >
        <ScrollView
          contentContainerStyle={{ padding: 16, paddingBottom: 24 }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <Text
            style={{
              fontSize: 13,
              fontWeight: "700",
              color: ACCENT,
              marginBottom: 4,
            }}
          >
            📚 Tap each card to flip it
          </Text>

          <FlipCard
            emoji="⚡"
            title="Ohm's Law"
            front="For a metal conductor at constant temperature, current is directly proportional to voltage: V = I × R."
            back="Ohm's law: V = IR. Rearranged: I = V ÷ R and R = V ÷ I. Doubling the voltage doubles the current; doubling the resistance halves it. The I–V graph is a straight line through the origin — its slope = 1/R."
            accent={ACCENT}
          />
          <FlipCard
            emoji="🔋"
            title="The circuit"
            front="Connect a battery, switch, ammeter (in series) and voltmeter (in parallel) across the resistor."
            back="Ammeter (A) goes IN SERIES with the resistor — it measures the current through it. Voltmeter (V) goes IN PARALLEL across the resistor — it measures the p.d. across it. Increasing voltage = more current proportionally."
            accent={ACCENT}
          />
          <FlipCard
            emoji="📈"
            title="The I–V graph"
            front="Plot current (y-axis) vs voltage (x-axis) — a straight line through the origin confirms Ohm's law."
            back="The gradient of the I–V line = 1/R. So R = ΔV ÷ ΔI. Each new reading adds a point to the graph — the straighter the line, the better your data confirms V ∝ I."
            accent={ACCENT}
          />
          <FlipCard
            emoji="🎯"
            title="Your task"
            front="Pick apparatus and a resistor, then dial up each voltage step and record the ammeter reading."
            back="Next you will: (1) pick apparatus, (2) choose a resistor, (3) in the lab dial up V = 0 → 6 V in steps, recording I each time. The app plots your I–V graph and estimates R."
            accent={ACCENT}
          />

          <Section title="1 · CHOOSE YOUR APPARATUS">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {APPARATUS.map((a) => (
                <Chip
                  key={a.id}
                  item={a}
                  selected={app.includes(a.id)}
                  onPick={() => toggleApp(a.id)}
                  right={
                    a.needed ? (
                      <Text
                        style={{
                          fontSize: 9,
                          color: ACCENT,
                          fontWeight: "800",
                          marginLeft: 6,
                        }}
                      >
                        REQ
                      </Text>
                    ) : null
                  }
                />
              ))}
            </View>
          </Section>

          <Section title="2 · CHOOSE YOUR RESISTOR">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {RESISTORS.map((r) => (
                <Chip
                  key={r.id}
                  item={r}
                  selected={resistorId === r.id}
                  onPick={() => setResistorId(r.id)}
                />
              ))}
            </View>
          </Section>

          <Section title="3 · PREVIEW CALCULATOR">
            <View
              style={{
                backgroundColor: theme.colors.surface,
                borderWidth: 1,
                borderColor: theme.colors.border,
                borderRadius: 14,
                padding: 14,
              }}
            >
              <Text style={{ fontSize: 12, color: "#6b7280" }}>
                Ohm's law: I = V ÷ R. At the maximum voltage (6 V):
              </Text>
              {resistor ? (
                <>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "baseline",
                      marginTop: 10,
                    }}
                  >
                    <Text style={{ fontSize: 13, color: theme.colors.textMuted }}>
                      Expected max current:{" "}
                    </Text>
                    <Text
                      style={{
                        fontSize: 22,
                        fontWeight: "900",
                        color: ACCENT,
                      }}
                    >
                      {previewI} A
                    </Text>
                  </View>
                  <Text
                    style={{ fontSize: 12, color: "#94a3b8", marginTop: 4 }}
                  >
                    I = 6 V ÷ {resistor.value} Ω = {previewI} A. Tolerance for
                    your R estimate: ±{tol} Ω.
                  </Text>
                </>
              ) : (
                <Text
                  style={{ fontSize: 12, color: "#94a3b8", marginTop: 10 }}
                >
                  Pick a resistor to see the predicted current.
                </Text>
              )}
            </View>
          </Section>
        </ScrollView>

        <View
          style={{
            backgroundColor: theme.colors.surface,
            borderTopWidth: 1,
            borderTopColor: theme.colors.border,
            padding: 16,
          }}
        >
          <TouchableOpacity
            onPress={start}
            style={{
              backgroundColor: ACCENT,
              borderRadius: 12,
              paddingVertical: 15,
            }}
          >
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontWeight: "800",
                fontSize: 16,
              }}
            >
              ▶ Start Experiment
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
