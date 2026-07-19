import React, { useEffect, useState } from "react";
import { View, Text, Modal, TouchableOpacity, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as FileSystem from "expo-file-system/legacy";
import { useTheme } from "../theme";
import { haptic } from "../haptic";
import { Pressable, Gradient } from "../components/ui";

const FLAG_PATH = `${FileSystem.documentDirectory}first_run_done.json`;

async function isDone() {
  try {
    const info = await FileSystem.getInfoAsync(FLAG_PATH);
    if (!info.exists) return false;
    const c = JSON.parse(await FileSystem.readAsStringAsync(FLAG_PATH));
    return !!c.done;
  } catch (e) {
    return false;
  }
}

async function markDone(prefs) {
  try {
    await FileSystem.writeAsStringAsync(FLAG_PATH, JSON.stringify({ done: true, prefs, at: new Date().toISOString() }));
  } catch (e) {}
}

const SUBJECTS = [
  { id: "Chemistry", icon: "👨🏽‍🔬", accent: "#16a34a" },
  { id: "Biology", icon: "🧬", accent: "#2563eb" },
  { id: "Physics", icon: "⚡", accent: "#7c3aed" },
];

export default function FirstRunModal({ onDismiss }) {
  const theme = useTheme();
  const [show, setShow] = useState(false);
  const [picked, setPicked] = useState(["Chemistry", "Biology", "Physics"]);

  useEffect(() => {
    isDone().then((d) => { if (!d) setShow(true); });
  }, []);

  function toggle(id) {
    haptic.light();
    setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));
  }

  function finish() {
    haptic.success();
    markDone({ subjects: picked });
    setShow(false);
    onDismiss && onDismiss({ subjects: picked });
  }

  return (
    <Modal visible={show} animationType="slide" transparent onRequestClose={() => {}}>
      <View style={{ flex: 1, backgroundColor: theme.colors.overlay }}>
        <SafeAreaView style={{ flex: 1, justifyContent: "flex-end" }}>
          <StatusBar barStyle={theme.isDark ? "light-content" : "dark-content"} backgroundColor={theme.colors.overlay} translucent />
          <View style={{ backgroundColor: theme.colors.surface, borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 24, paddingBottom: 36, maxHeight: "88%" }}>
            <View style={{ width: 40, height: 4, borderRadius: 2, backgroundColor: theme.colors.border, alignSelf: "center", marginBottom: 18 }} />

            <Text style={{ fontSize: 22, fontWeight: "900", color: theme.colors.text, textAlign: "center" }}>Welcome to SciPractice 👋</Text>
            <Text style={{ fontSize: 13, color: theme.colors.textMuted, textAlign: "center", marginTop: 6, marginBottom: 22 }}>
              Pick the subjects you're studying — we'll prioritise these on your home screen.
            </Text>

            {SUBJECTS.map((s) => {
              const sel = picked.includes(s.id);
              return (
                <Pressable
                  key={s.id}
                  onPress={() => toggle(s.id)}
                  style={[{
                    flexDirection: "row", alignItems: "center", padding: 16, borderRadius: 14,
                    borderWidth: 1.5, marginBottom: 12, backgroundColor: sel ? theme.colors.primarySoft2 : theme.colors.surfaceAlt,
                    borderColor: sel ? s.accent : theme.colors.border,
                  }]}
                >
                  <Text style={{ fontSize: 26, marginRight: 14 }}>{s.icon}</Text>
                  <Text style={{ flex: 1, fontSize: 16, fontWeight: "800", color: theme.colors.text }}>{s.id}</Text>
                  <View style={{ width: 26, height: 26, borderRadius: 13, borderWidth: 2, borderColor: sel ? s.accent : theme.colors.border, alignItems: "center", justifyContent: "center", backgroundColor: sel ? s.accent : "transparent" }}>
                    {sel && <Text style={{ color: theme.colors.white, fontSize: 14, fontWeight: "900" }}>✓</Text>}
                  </View>
                </Pressable>
              );
            })}

            <Pressable
              onPress={finish}
              style={[{ marginTop: 8, borderRadius: 14, paddingVertical: 15, alignItems: "center" }, theme.shadow]}
            >
              <Gradient colors={[theme.colors.primary, theme.colors.primaryDark]} style={{ borderRadius: 14, paddingVertical: 15, alignItems: "center", width: "100%" }}>
                <Text style={{ color: theme.colors.onPrimary, fontWeight: "800", fontSize: 16 }}>Get Started 🚀</Text>
              </Gradient>
            </Pressable>
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  );
}
