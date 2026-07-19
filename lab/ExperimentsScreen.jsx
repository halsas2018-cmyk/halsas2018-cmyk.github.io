import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Modal } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import BannerAd from "../components/BannerAd";
import { withInlineBanner } from "../components/inlineAd";
import { useAds } from "../components/AdProvider";
import { useTheme, hexToRgba } from "../theme";

export default function ExperimentsScreen() {
  const navigation = useNavigation();
  const theme = useTheme();
  const { unlockWithRewarded } = useAds();
  const route = useRoute();
  const { topicName, experiments } = route.params;
  const [soon, setSoon] = useState(null);

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.bg }}>
      <View
        style={{
          paddingTop: 50,
          paddingHorizontal: 20,
          paddingBottom: 12,
          backgroundColor: theme.colors.surface,
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.border,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Text style={{ fontSize: 16, color: theme.colors.primary, fontWeight: "700" }}>‹ Back</Text>
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
          numberOfLines={1}
        >
          {topicName}
        </Text>
      </View>

      <View style={{ paddingHorizontal: 20, paddingVertical: 14 }}>
        <Text style={{ fontSize: 14, color: theme.colors.textMuted }}>Practicals · coming soon</Text>
      </View>

      <FlatList
        data={withInlineBanner(experiments, 3)}
        keyExtractor={(item) => item.id}
        initialNumToRender={10}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: exp }) => (
          exp.__bannerAd ? (
            <View key={exp.id} style={{ marginVertical: 8 }}>
              <BannerAd />
            </View>
          ) : (
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
              backgroundColor: theme.colors.surface,
              borderRadius: 14,
              padding: 16,
              marginBottom: 12,
              borderWidth: 1,
              borderColor: theme.colors.border,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "600", color: theme.colors.text }}>
              {exp.title}
            </Text>
            <View
              style={{
                marginTop: 8,
                alignSelf: "flex-start",
                backgroundColor: exp.status === "interactive" ? hexToRgba(theme.colors.primary, 0.12) : hexToRgba(theme.colors.star, 0.14),
                paddingHorizontal: 10,
                paddingVertical: 3,
                borderRadius: 999,
              }}
            >
              <Text
                style={{
                  fontSize: 11,
                  color: exp.status === "interactive" ? theme.colors.primaryDark : theme.colors.star,
                  fontWeight: "700",
                }}
              >
                {exp.status === "interactive" ? "READY ▸" : "COMING SOON"}
              </Text>
            </View>
          </TouchableOpacity>
          )
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
              backgroundColor: theme.colors.surface,
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
                backgroundColor: theme.colors.border,
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
                color: theme.colors.text,
                marginTop: 8,
              }}
            >
              Coming Soon
            </Text>
            <Text
              style={{
                fontSize: 15,
                textAlign: "center",
                color: theme.colors.textMuted,
                marginTop: 6,
              }}
            >
              {soon?.title}
            </Text>
            <Text
              style={{
                fontSize: 13,
                textAlign: "center",
                color: theme.colors.textMuted,
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
                backgroundColor: theme.colors.primary,
                borderRadius: 12,
                paddingVertical: 14,
              }}
            >
              <Text
                style={{
                  color: theme.colors.onPrimary,
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
