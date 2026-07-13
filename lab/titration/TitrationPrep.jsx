import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, TextInput, StatusBar, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlipCard from "./FlipCard";
import { ACIDS, BASES, INDICATORS, APPARATUS, equivalenceAcidVolume, recommendIndicator } from "./reagents";

const GREEN = "#16a34a";

export default function TitrationPrep() {
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "acids";

  const [app, setApp] = useState([]); // selected apparatus ids
  const [acidId, setAcidId] = useState(null);
  const [baseId, setBaseId] = useState(null);
  const [indId, setIndId] = useState(null);
  const [baseVol, setBaseVol] = useState("25");

  const acid = ACIDS.find((a) => a.id === acidId);
  const base = BASES.find((b) => b.id === baseId);
  const indicator = INDICATORS.find((i) => i.id === indId);
  const rec = acid && base ? recommendIndicator(acid, base) : null;

  const vol = parseFloat(baseVol);
  const endpoint = acid && base && vol > 0 ? equivalenceAcidVolume({ acid, base, baseVolume: vol }) : null;

  function toggleApp(id) {
    setApp((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function start() {
    const required = APPARATUS.filter((a) => a.needed).map((a) => a.id);
    const missing = required.filter((r) => !app.includes(r));
    if (missing.length) return Alert.alert("Missing apparatus", "Select all the required apparatus before you start.");
    if (!acid || !base || !indicator) return Alert.alert("Make your choices", "Pick an acid, a base and an indicator.");
    if (!(vol > 0)) return Alert.alert("Check volume", "Enter a base volume greater than 0.");
    if (rec && rec.best === null) return Alert.alert("Not suitable", rec.warn);

    const config = {
      acid,
      base,
      indicator,
      baseVolume: vol,
      endpoint,
      apparatus: app,
    };
    navigation.navigate("TitrationExperiment", { experiment, topicId, config });
  }

  const Chip = ({ item, selected, onPick, right }) => (
    <TouchableOpacity onPress={onPick} style={{ flexDirection: "row", alignItems: "center", backgroundColor: selected ? "#e7f6ec" : "#fff", borderWidth: 1.5, borderColor: selected ? GREEN : "#e5e7eb", borderRadius: 12, paddingVertical: 9, paddingHorizontal: 12, marginRight: 8, marginBottom: 8 }}>
      {item.color ? <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: item.color, marginRight: 7 }} /> : null}
      <Text style={{ fontSize: 13, fontWeight: selected ? "800" : "600", color: selected ? "#14532d" : "#374151" }}>{item.icon ? item.icon + " " : ""}{item.name || item.formula}</Text>
      {right}
    </TouchableOpacity>
  );

  const Section = ({ title, children }) => (
    <View style={{ marginBottom: 18 }}>
      <Text style={{ fontSize: 12, fontWeight: "800", color: "#6b7280", marginBottom: 10, letterSpacing: 0.5 }}>{title}</Text>
      {children}
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f8fafc" }} edges={["top", "left", "right"]}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" translucent={false} />
      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: "#fff", borderBottomWidth: 1, borderBottomColor: "#e5e7eb" }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: GREEN, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: "#111827", marginRight: 40 }}>Pre-lab Briefing</Text>
      </View>

      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={0}>
      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 24 }} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
        <Text style={{ fontSize: 13, fontWeight: "700", color: GREEN, marginBottom: 4 }}>📚 Tap each card to flip it</Text>

        <FlipCard emoji="⚗️" title="What is titration?" front="A titration is a lab method used to find the unknown concentration of a solution." back="You add a solution of known concentration from a burette, drop by drop, to a measured volume of another solution until the reaction is exactly complete — the endpoint, shown by a colour change. From the volumes used you calculate the unknown concentration." />
        <FlipCard emoji="🧰" title="Apparatus" front="Burette, pipette, conical flask, indicator, retort stand & clamp, white tile." back="• Burette — delivers acid precisely, drop by drop. • Pipette — measures an exact volume of alkali. • Conical flask — holds the reaction; its shape reduces splashing. • White tile — makes the colour change easy to see." />
        <FlipCard emoji="📐" title="The formula" front="Ca · Va · nₐ = Cb · Vb · n_b" back="Ca, Cb = concentrations (mol/dm³); Va, Vb = volumes (mL); nₐ, n_b = H⁺ and OH⁻ per molecule (acidity / basicity). At the endpoint, moles of acid = moles of base. The calculator on this screen does it for you." />
        <FlipCard emoji="🌸" title="Indicators" front="Phenolphthalein: colourless → pink. Methyl orange: red → yellow." back="Pick the indicator that changes sharply at the equivalence point. Weak acid + strong base → phenolphthalein. Strong acid + weak base → methyl orange. Strong + strong → either works. Weak acid + weak base has no sharp endpoint." />
        <FlipCard emoji="🎯" title="Your task" front="Choose your reagents & apparatus, then compute the endpoint volume." back="Next you will: (1) pick the apparatus, (2) choose an acid, (3) a base, (4) an indicator, and (5) enter the base volume to compute the acid endpoint. Then press Start to run the titration." />

        <Section title="1 · CHOOSE YOUR APPARATUS">
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {APPARATUS.map((a) => (
              <Chip key={a.id} item={a} selected={app.includes(a.id)} onPick={() => toggleApp(a.id)} right={a.needed ? <Text style={{ fontSize: 9, color: GREEN, fontWeight: "800", marginLeft: 6 }}>REQ</Text> : null} />
            ))}
          </View>
        </Section>

        <Section title="2 · CHOOSE AN ACID">
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {ACIDS.map((a) => (
              <Chip key={a.id} item={a} selected={acidId === a.id} onPick={() => setAcidId(a.id)} />
            ))}
          </View>
        </Section>

        <Section title="3 · CHOOSE A BASE">
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {BASES.map((b) => (
              <Chip key={b.id} item={b} selected={baseId === b.id} onPick={() => setBaseId(b.id)} />
            ))}
          </View>
        </Section>

        <Section title="4 · CHOOSE AN INDICATOR">
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {INDICATORS.map((i) => {
              const isBest = rec && rec.best === i.id;
              return (
                <Chip key={i.id} item={i} selected={indId === i.id} onPick={() => setIndId(i.id)} right={isBest ? <Text style={{ fontSize: 9, color: GREEN, fontWeight: "800", marginLeft: 6 }}>BEST</Text> : null} />
              );
            })}
          </View>
          {rec && rec.warn ? (
            <Text style={{ fontSize: 12, color: rec.best === null ? "#dc2626" : "#b45309", marginTop: 6, fontWeight: "600" }}>⚠️ {rec.warn}</Text>
          ) : null}
          {indicator && rec && rec.best && indId !== rec.best ? (
            <Text style={{ fontSize: 12, color: "#b45309", marginTop: 6, fontWeight: "600" }}>Tip: {rec.best} is the best match for this pair.</Text>
          ) : null}
        </Section>

        <Section title="5 · VOLUME & ENDPOINT CALCULATOR">
          <View style={{ backgroundColor: "#fff", borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 14, padding: 14 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 13, color: "#374151", flex: 1 }}>Base volume (pipetted)</Text>
              <TextInput
                value={baseVol}
                onChangeText={setBaseVol}
                keyboardType="numeric"
                style={{ borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 8, padding: 8, width: 70, textAlign: "center", fontSize: 14, color: "#111827" }}
              />
              <Text style={{ fontSize: 13, color: "#6b7280", marginLeft: 6 }}>mL</Text>
            </View>
            {acid && base ? (
              <>
                <Text style={{ fontSize: 12, color: "#6b7280", marginTop: 10, fontStyle: "italic" }}>
                  Ca·Va·{acid.factor} = Cb·Vb·{base.factor}  →  Va = ({base.molarity} × {vol || 0} × {base.factor}) ÷ ({acid.molarity} × {acid.factor})
                </Text>
                <View style={{ flexDirection: "row", alignItems: "baseline", marginTop: 8 }}>
                  <Text style={{ fontSize: 13, color: "#374151" }}>Equivalence (endpoint) acid volume: </Text>
                  <Text style={{ fontSize: 22, fontWeight: "900", color: GREEN }}>{endpoint != null ? endpoint.toFixed(1) : "—"} mL</Text>
                </View>
                <Text style={{ fontSize: 12, color: "#94a3b8", marginTop: 4 }}>Stop the titration here for a perfect result.</Text>
              </>
            ) : (
              <Text style={{ fontSize: 12, color: "#94a3b8", marginTop: 10 }}>Pick an acid and a base to see the endpoint volume.</Text>
            )}
          </View>
        </Section>
      </ScrollView>

      <View style={{ backgroundColor: "#fff", borderTopWidth: 1, borderTopColor: "#e5e7eb", padding: 16 }}>
        <TouchableOpacity onPress={start} style={{ backgroundColor: GREEN, borderRadius: 12, paddingVertical: 15 }}>
          <Text style={{ color: "#fff", textAlign: "center", fontWeight: "800", fontSize: 16 }}>▶ Start Experiment</Text>
        </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
