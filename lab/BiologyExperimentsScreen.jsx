import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import biology from "./biology";

const ACCENT = "#2563eb";
const BORDER = "#bfdbfe";

export default function BiologyExperimentsScreen() {
  const navigation = useNavigation();

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
          <Text style={{ fontSize: 16, color: ACCENT, fontWeight: "700" }}>‹ Back</Text>
        </TouchableOpacity>
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: 18,
            fontWeight: "800",
            color: "#111827",
            marginRight: 40,
          }}
        >
          Biology Lab
        </Text>
      </View>

      <View style={{ paddingHorizontal: 20, paddingVertical: 14 }}>
        <Text style={{ fontSize: 14, color: "#6b7280" }}>
          Select a topic to view its practicals
        </Text>
      </View>

      <FlatList
        data={biology}
        keyExtractor={(item) => item.topicId}
        initialNumToRender={10}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: topic }) => (
          <TouchableOpacity
            key={topic.topicId}
            onPress={() =>
              navigation.navigate("Experiments", {
                topicId: topic.topicId,
                topicName: topic.topicName,
                experiments: topic.experiments,
              })
            }
            style={{
              backgroundColor: "#ffffff",
              borderRadius: 14,
              padding: 16,
              marginBottom: 12,
              borderWidth: 1,
              borderColor: BORDER,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 16, fontWeight: "700", color: "#111827" }}>
                {topic.topicName}
              </Text>
              {(() => {
                const ready = topic.experiments.filter((e) => e.status === "interactive").length;
                return (
                  <Text style={{ fontSize: 12, color: "#6b7280", marginTop: 4 }}>
                    {topic.experiments.length} practical
                    {topic.experiments.length !== 1 ? "s" : ""}
                    {ready > 0 ? (
                      <Text style={{ color: ACCENT, fontWeight: "700" }}> · {ready} ready ▸</Text>
                    ) : (
                      " · coming soon"
                    )}
                  </Text>
                );
              })()}
            </View>
            <Text style={{ fontSize: 20, color: ACCENT }}>›</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
