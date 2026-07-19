import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StatusBar, Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useTheme, hexToRgba } from "../theme";
import { labStorage } from "../storage/labStorage";
import BannerAd from "../components/BannerAd";
import { withInlineBanner } from "../components/inlineAd";
import { useAds } from "../components/AdProvider";

export default function LabResultsScreen() {
  const navigation = useNavigation();
  const theme = useTheme();
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
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }} edges={["top", "left", "right"]}>
      <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.bg} translucent={false} />

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
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={{ fontSize: 16, color: theme.colors.primary, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: "800", color: theme.colors.text, marginRight: 40 }}>
          Lab Reports
        </Text>
      </View>

      <FlatList
        data={withInlineBanner(reports, 5)}
        keyExtractor={(item) => item.id}
        initialNumToRender={10}
        contentContainerStyle={{ padding: 16, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={{ alignItems: "center", marginTop: 80, paddingHorizontal: 20 }}>
            <Text style={{ fontSize: 40, marginBottom: 12 }}>🧪</Text>
            <Text style={{ fontSize: 16, fontWeight: "700", color: theme.colors.textMuted, marginBottom: 6, textAlign: "center" }}>
              No lab reports yet.
            </Text>
            <Text style={{ fontSize: 14, color: theme.colors.textFaint, textAlign: "center", lineHeight: 20 }}>
              Complete a virtual experiment and save your report to see it here.
            </Text>
          </View>
        )}
        renderItem={({ item: r }) => (
          r.__bannerAd ? (
            <View key={r.id} style={{ marginVertical: 8 }}>
              <BannerAd />
            </View>
          ) : (
          <TouchableOpacity
            key={r.id}
            onPress={() => showResultView(() => setOpen(r))}
            style={{
              backgroundColor: theme.colors.surface,
              borderRadius: 16,
              padding: 16,
              marginBottom: 12,
              borderWidth: 1,
              borderColor: theme.colors.border,
            }}
          >
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <Text style={{ fontSize: 15, fontWeight: "800", color: theme.colors.text, flex: 1, marginRight: 8 }}>
                {r.experimentTitle}
              </Text>
              <View style={{ backgroundColor: hexToRgba(theme.colors.primary, 0.12), paddingHorizontal: 10, paddingVertical: 3, borderRadius: 999 }}>
                <Text style={{ fontSize: 11, color: theme.colors.primaryDark, fontWeight: "700" }}>PASSED</Text>
              </View>
            </View>
            <Text style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 6 }}>
              {r.summary ? r.summary + " · " : ""}{r.date}
            </Text>
          </TouchableOpacity>
          )
        )}
      />

      <Modal visible={!!open} transparent animationType="slide" onRequestClose={() => setOpen(null)}>
        <TouchableOpacity style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.45)", justifyContent: "flex-end" }} activeOpacity={1} onPress={() => setOpen(null)}>
          <View style={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 24, paddingBottom: 32 }}>
            <View style={{ width: 40, height: 4, backgroundColor: theme.colors.border, borderRadius: 2, alignSelf: "center", marginBottom: 18 }} />
            <Text style={{ fontSize: 18, fontWeight: "800", color: theme.colors.text, textAlign: "center" }}>{open?.experimentTitle}</Text>
            <Text style={{ fontSize: 12, color: theme.colors.textFaint, textAlign: "center", marginTop: 4 }}>{open?.date}</Text>
            <View style={{ backgroundColor: theme.colors.bg, borderRadius: 12, padding: 14, marginVertical: 16 }}>
              {open ? reportDetails(open).map((d, i) => (
                <Text key={i} style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: i === 0 ? 0 : 6 }}>
                  • {d[0]}: <Text style={{ fontWeight: "800" }}>{d[1]}</Text>
                </Text>
              )) : null}
            </View>
            <TouchableOpacity onPress={() => remove(open.id)} style={{ backgroundColor: theme.colors.dangerSoft, borderRadius: 12, paddingVertical: 13, borderWidth: 1, borderColor: hexToRgba(theme.colors.danger, 0.4) }}>
              <Text style={{ color: theme.colors.danger, textAlign: "center", fontWeight: "700", fontSize: 14 }}>Delete Report</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setOpen(null)} style={{ marginTop: 10, backgroundColor: theme.colors.surfaceAlt, borderRadius: 12, paddingVertical: 13 }}>
              <Text style={{ color: theme.colors.text, textAlign: "center", fontWeight: "700", fontSize: 14 }}>Close</Text>
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
