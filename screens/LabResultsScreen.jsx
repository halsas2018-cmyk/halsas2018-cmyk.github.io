import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StatusBar, Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { labStorage } from "../storage/labStorage";
import AdBanner from "../components/AdBanner";
import { useAds } from "../components/AdProvider";

const GREEN = "#16a34a";

export default function LabResultsScreen() {
  const navigation = useNavigation();
  const { showResultView } = useAds();
  const [reports, setReports] = useState([]);
  const [open, setOpen] = useState(null);

  React.useEffect(() => {
    const load = async () => setReports((await labStorage.getAllReports()) || []);
    const unsub = navigation.addListener("focus", load);
    return unsub;
  }, [navigation]);

  async function remove(id) {
    await labStorage.deleteReport(id);
    setReports((await labStorage.getAllReports()) || []);
    setOpen(null);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f8fafc" }} edges={["top", "left", "right"]}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" translucent={false} />

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
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: GREEN, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: "#111827", marginRight: 40 }}>
          Lab Reports
        </Text>
      </View>

      <FlatList
        data={reports}
        keyExtractor={(item) => item.id}
        initialNumToRender={10}
        contentContainerStyle={{ padding: 16, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<AdBanner />}
        ListEmptyComponent={() => (
          <View style={{ alignItems: "center", marginTop: 80, paddingHorizontal: 20 }}>
            <Text style={{ fontSize: 40, marginBottom: 12 }}>🧪</Text>
            <Text style={{ fontSize: 16, fontWeight: "700", color: "#475569", marginBottom: 6, textAlign: "center" }}>
              No lab reports yet.
            </Text>
            <Text style={{ fontSize: 14, color: "#94a3b8", textAlign: "center", lineHeight: 20 }}>
              Complete a virtual experiment and save your report to see it here.
            </Text>
          </View>
        )}
        renderItem={({ item: r }) => (
          <TouchableOpacity
            key={r.id}
            onPress={() => showResultView(() => setOpen(r))}
            style={{
              backgroundColor: "#fff",
              borderRadius: 16,
              padding: 16,
              marginBottom: 12,
              borderWidth: 1,
              borderColor: "#e2e8f0",
            }}
          >
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <Text style={{ fontSize: 15, fontWeight: "800", color: "#0f172a", flex: 1, marginRight: 8 }}>
                {r.experimentTitle}
              </Text>
              <View style={{ backgroundColor: "#dcfce7", paddingHorizontal: 10, paddingVertical: 3, borderRadius: 999 }}>
                <Text style={{ fontSize: 11, color: "#166534", fontWeight: "700" }}>PASSED</Text>
              </View>
            </View>
            <Text style={{ fontSize: 13, color: "#64748b", marginTop: 6 }}>
              {r.summary ? r.summary + " · " : ""}{r.date}
            </Text>
          </TouchableOpacity>
        )}
      />

      <Modal visible={!!open} transparent animationType="slide" onRequestClose={() => setOpen(null)}>
        <TouchableOpacity style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.45)", justifyContent: "flex-end" }} activeOpacity={1} onPress={() => setOpen(null)}>
          <View style={{ backgroundColor: "#fff", borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 24, paddingBottom: 32 }}>
            <View style={{ width: 40, height: 4, backgroundColor: "#d1d5db", borderRadius: 2, alignSelf: "center", marginBottom: 18 }} />
            <Text style={{ fontSize: 18, fontWeight: "800", color: "#111827", textAlign: "center" }}>{open?.experimentTitle}</Text>
            <Text style={{ fontSize: 12, color: "#94a3b8", textAlign: "center", marginTop: 4 }}>{open?.date}</Text>
            <View style={{ backgroundColor: "#f8fafc", borderRadius: 12, padding: 14, marginVertical: 16 }}>
              {open ? reportDetails(open).map((d, i) => (
                <Text key={i} style={{ fontSize: 13, color: "#374151", marginTop: i === 0 ? 0 : 6 }}>
                  • {d[0]}: <Text style={{ fontWeight: "800" }}>{d[1]}</Text>
                </Text>
              )) : null}
            </View>
            <TouchableOpacity onPress={() => remove(open.id)} style={{ backgroundColor: "#fef2f2", borderRadius: 12, paddingVertical: 13, borderWidth: 1, borderColor: "#fecaca" }}>
              <Text style={{ color: "#dc2626", textAlign: "center", fontWeight: "700", fontSize: 14 }}>Delete Report</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setOpen(null)} style={{ marginTop: 10, backgroundColor: "#f1f5f9", borderRadius: 12, paddingVertical: 13 }}>
              <Text style={{ color: "#0f172a", textAlign: "center", fontWeight: "700", fontSize: 14 }}>Close</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
}

// Renders whichever fields a saved report happens to carry, so titration and
// rate-of-reaction (and future) labs all show correctly without hard-coding.
function reportDetails(r) {
  const d = [];
  if (r.acid) d.push(["Acid", r.acid]);
  if (r.base) d.push(["Base", r.base]);
  if (r.indicator) d.push(["Indicator", r.indicator]);
  if (r.concentrationLabel) d.push(["Acid concentration", r.concentrationLabel]);
  if (r.volumeUsed != null) d.push(["Acid used", Number(r.volumeUsed).toFixed(1) + " mL"]);
  if (r.endpointTarget != null) d.push(["Endpoint", Number(r.endpointTarget).toFixed(1) + " mL"]);
  if (r.concentration != null) d.push(["Concentration", Number(r.concentration).toFixed(3) + " mol/dm³"]);
  if (r.timeRecorded != null) d.push(["Time recorded", Number(r.timeRecorded).toFixed(1) + " s"]);
  if (r.predictedTime != null) d.push(["Predicted time", Number(r.predictedTime).toFixed(1) + " s"]);
  if (r.rate != null) d.push(["Rate (1/t)", Number(r.rate).toFixed(3) + " s⁻¹"]);
  if (r.notes) d.push(["Observations", r.notes]);
  return d;
}
