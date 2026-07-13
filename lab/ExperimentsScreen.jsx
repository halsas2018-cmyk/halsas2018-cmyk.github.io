import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Modal } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useAds } from "../components/AdProvider";

const GREEN = "#16a34a";

export default function ExperimentsScreen() {
  const navigation = useNavigation();
  const { unlockWithRewarded } = useAds();
  const route = useRoute();
  const { topicName, experiments } = route.params;
  const [soon, setSoon] = useState(null);

  return (
    <View style={{ flex: 1, backgroundColor: "#f8fafc" }}>
      <View
        style={{
          paddingTop: 50,
          paddingHorizontal: 20,
          paddingBottom: 12,
          backgroundColor: "#ffffff",
          borderBottomWidth: 1,
          borderBottomColor: "#e5e7eb",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Text style={{ fontSize: 16, color: GREEN, fontWeight: "700" }}>‹ Back</Text>
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
          numberOfLines={1}
        >
          {topicName}
        </Text>
      </View>

      <View style={{ paddingHorizontal: 20, paddingVertical: 14 }}>
        <Text style={{ fontSize: 14, color: "#6b7280" }}>Practicals · coming soon</Text>
      </View>

      <FlatList
        data={experiments}
        keyExtractor={(item) => item.id}
        initialNumToRender={10}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: exp }) => (
          <TouchableOpacity
            key={exp.id}
            onPress={() => {
              if (exp.screen) {
                unlockWithRewarded(() => navigation.navigate(exp.screen, { experiment: exp, topicId: exp.topicId, topicName }));
              } else {
                setSoon(exp);
              }
            }}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: 14,
              padding: 16,
              marginBottom: 12,
              borderWidth: 1,
              borderColor: "#e5e7eb",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "600", color: "#111827" }}>
              {exp.title}
            </Text>
            <View
              style={{
                marginTop: 8,
                alignSelf: "flex-start",
                backgroundColor: exp.status === "interactive" ? "#dcfce7" : "#fef3c7",
                paddingHorizontal: 10,
                paddingVertical: 3,
                borderRadius: 999,
              }}
            >
              <Text
                style={{
                  fontSize: 11,
                  color: exp.status === "interactive" ? "#166534" : "#92400e",
                  fontWeight: "700",
                }}
              >
                {exp.status === "interactive" ? "READY ▸" : "COMING SOON"}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <Modal
        visible={!!soon}
        transparent
        animationType="slide"
        onRequestClose={() => setSoon(null)}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.45)",
            justifyContent: "flex-end",
          }}
          activeOpacity={1}
          onPress={() => setSoon(null)}
        >
          <View
            style={{
              backgroundColor: "#ffffff",
              borderTopLeftRadius: 22,
              borderTopRightRadius: 22,
              padding: 24,
              paddingBottom: 32,
            }}
          >
            <View
              style={{
                width: 40,
                height: 4,
                backgroundColor: "#d1d5db",
                borderRadius: 2,
                alignSelf: "center",
                marginBottom: 18,
              }}
            />
            <Text style={{ fontSize: 28, textAlign: "center" }}>🔬</Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "800",
                textAlign: "center",
                color: "#111827",
                marginTop: 8,
              }}
            >
              Coming Soon
            </Text>
            <Text
              style={{
                fontSize: 15,
                textAlign: "center",
                color: "#374151",
                marginTop: 6,
              }}
            >
              {soon?.title}
            </Text>
            <Text
              style={{
                fontSize: 13,
                textAlign: "center",
                color: "#6b7280",
                marginTop: 10,
                lineHeight: 19,
              }}
            >
              Our developers are crafting this high-fidelity simulation for your
              curriculum. You'll be able to run it right from the app soon!
            </Text>
            <TouchableOpacity
              onPress={() => setSoon(null)}
              style={{
                marginTop: 20,
                backgroundColor: GREEN,
                borderRadius: 12,
                paddingVertical: 14,
              }}
            >
              <Text
                style={{
                  color: "#ffffff",
                  textAlign: "center",
                  fontWeight: "700",
                  fontSize: 15,
                }}
              >
                Got it, thanks! 👍
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
