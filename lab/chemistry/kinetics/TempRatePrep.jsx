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
import {
  TEMP_OPTIONS,
  TEMP_APPARATUS,
  THIO_VOLUME,
  ACID_VOLUME,
  predictedTime,
  rate,
} from "./temp-rate-data";

const GREEN = "#16a34a";

export default function TempRatePrep() {
  const navigation = useNavigation();
  const route = useRoute();
  const experiment = route.params?.experiment || {};
  const topicId = route.params?.topicId || "kinetics";

  const [app, setApp] = useState([]);
  const [tempId, setTempId] = useState(null);

  const temp = TEMP_OPTIONS.find((t) => t.id === tempId);
  const predicted = temp ? predictedTime(temp.value) : null;
  const rateVal = predicted ? rate(predicted) : null;

  function toggleApp(id) {
    setApp((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  function start() {
    const required = TEMP_APPARATUS.filter((a) => a.needed).map((a) => a.id);
    const missing = required.filter((r) => !app.includes(r));
    if (missing.length)
      return Alert.alert(
        "Missing apparatus",
        "Select all the required apparatus before you start."
      );
    if (!temp)
      return Alert.alert(
        "Pick a temperature",
        "Choose the temperature you want to test."
      );

    navigation.navigate("TempRateLab", {
      experiment,
      topicId,
      config: {
        tempC: temp.value,
        tempLabel: temp.label,
        thioVolume: THIO_VOLUME,
        acidVolume: ACID_VOLUME,
        target: predicted,
        apparatus: app,
      },
    });
  }

  const Chip = ({ item, selected, onPick, right }) => (
    <TouchableOpacity
      onPress={onPick}
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: selected ? "#e7f6ec" : "#fff",
        borderWidth: 1.5,
        borderColor: selected ? GREEN : "#e5e7eb",
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
          color: selected ? "#14532d" : "#374151",
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
      style={{ flex: 1, backgroundColor: "#f8fafc" }}
      edges={["top", "left", "right"]}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#ffffff"
        translucent={false}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 16,
          paddingVertical: 12,
          backgroundColor: "#fff",
          borderBottomWidth: 1,
          borderBottomColor: "#e5e7eb",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Text style={{ fontSize: 16, color: GREEN, fontWeight: "700" }}>
            ‹ Back
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: 16,
            fontWeight: "800",
            color: "#111827",
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
              color: GREEN,
              marginBottom: 4,
            }}
          >
            📚 Tap each card to flip it
          </Text>

          <FlipCard
            emoji="⏱️"
            title="What is rate of reaction?"
            front="Rate of reaction tells you how fast reactants turn into products — measured by how quickly something changes (e.g. a colour appears)."
            back="We measure it by timing how long a change takes. A FAST reaction finishes in a short time; a SLOW one takes longer. Rate = 1 ÷ time, so the shorter the time, the higher the rate."
          />
          <FlipCard
            emoji="🌡️"
            title="Temperature & rate"
            front="A hotter reaction mixture makes the cross vanish sooner."
            back="Higher temperature = more kinetic energy = more energetic collisions = more particles above activation energy. So rate ↑ as temperature ↑. Roughly, every 10 °C rise doubles the rate (Arrhenius rule-of-thumb)."
          />
          <FlipCard
            emoji="❌"
            title="The disappearing-cross"
            front="A cross is drawn on a white tile and placed under a conical flask of clear solution."
            back="As the reaction runs it makes the solution cloudy. You watch the cross through the flask and stop the stopwatch the instant you can no longer see it. The time taken is your measurement."
          />
          <FlipCard
            emoji="🧪"
            title="The reaction"
            front="Sodium thiosulphate + hydrochloric acid → sulphur (solid) + other products."
            back="Na₂S₂O₃(aq) + 2HCl(aq) → 2NaCl(aq) + S(s) + SO₂(g) + H₂O(l). The solid sulphur is what turns the liquid milky and hides the cross."
          />
          <FlipCard
            emoji="🎯"
            title="Your task"
            front="Choose your apparatus & the temperature, then see the predicted cross-disappear time."
            back="Next you will: (1) pick the apparatus, (2) choose a temperature, (3) check the predicted disappearance time, then press Start to run the timed experiment. Keep concentration fixed — only temperature changes!"
          />

          <Section title="1 · CHOOSE YOUR APPARATUS">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {TEMP_APPARATUS.map((a) => (
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
                          color: GREEN,
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

          <Section title="2 · CHOOSE TEMPERATURE">
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {TEMP_OPTIONS.map((t) => (
                <Chip
                  key={t.id}
                  item={t}
                  selected={tempId === t.id}
                  onPick={() => setTempId(t.id)}
                />
              ))}
            </View>
            {temp ? (
              <Text style={{ fontSize: 12, color: "#94a3b8", marginTop: 6 }}>
                {temp.note}
              </Text>
            ) : null}
          </Section>

          <Section title="3 · PREDICTED TIME CALCULATOR">
            <View
              style={{
                backgroundColor: "#fff",
                borderWidth: 1,
                borderColor: "#e5e7eb",
                borderRadius: 14,
                padding: 14,
              }}
            >
              <Text style={{ fontSize: 12, color: "#6b7280" }}>
                Fixed recipe: {THIO_VOLUME} mL Na₂S₂O₃ (0.10 M) + {ACID_VOLUME} mL HCl (0.10 mol/dm³). Only temperature changes.
              </Text>
              {temp ? (
                <>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "baseline",
                      marginTop: 10,
                    }}
                  >
                    <Text style={{ fontSize: 13, color: "#374151" }}>
                      Predicted cross-disappear time:{" "}
                    </Text>
                    <Text
                      style={{
                        fontSize: 22,
                        fontWeight: "900",
                        color: GREEN,
                      }}
                    >
                      {predicted.toFixed(1)} s
                    </Text>
                  </View>
                  <Text
                    style={{ fontSize: 12, color: "#94a3b8", marginTop: 4 }}
                  >
                    Predicted rate = 1 ÷ time = {rateVal.toFixed(3)} s⁻¹. Stop the watch the instant the cross vanishes!
                  </Text>
                </>
              ) : (
                <Text
                  style={{ fontSize: 12, color: "#94a3b8", marginTop: 10 }}
                >
                  Pick a temperature to see the predicted time.
                </Text>
              )}
            </View>
          </Section>
        </ScrollView>

        <View
          style={{
            backgroundColor: "#fff",
            borderTopWidth: 1,
            borderTopColor: "#e5e7eb",
            padding: 16,
          }}
        >
          <TouchableOpacity
            onPress={start}
            style={{
              backgroundColor: GREEN,
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
