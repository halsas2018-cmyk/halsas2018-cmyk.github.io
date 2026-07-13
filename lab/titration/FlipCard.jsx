import React, { useRef } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";

// A tappable card that flips between a short front and a detailed back.
// Uses an opacity crossfade (not rotateY) so text stays crisp & readable on RN.
export default function FlipCard({ title, front, back, emoji = "🔬", accent = "#16a34a" }) {
  const flip = useRef(new Animated.Value(0)).current;
  const flipped = useRef(false);

  const toggle = () => {
    flipped.current = !flipped.current;
    Animated.timing(flip, { toValue: flipped.current ? 1 : 0, duration: 380, useNativeDriver: false }).start();
  };

  const frontOpacity = flip.interpolate({ inputRange: [0, 0.5, 1], outputRange: [1, 0, 0] });
  const backOpacity = flip.interpolate({ inputRange: [0, 0.5, 1], outputRange: [0, 0, 1] });
  const frontScale = flip.interpolate({ inputRange: [0, 0.5, 1], outputRange: [1, 0.92, 0.92] });
  const backScale = flip.interpolate({ inputRange: [0, 0.5, 1], outputRange: [0.92, 0.92, 1] });

  // Content sits in a column; the "tap to flip" hint lives in its own footer
  // row so it never collides with the explanation text above it.
  const face = (opacity, scale, content) => (
    <Animated.View
      style={{
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        opacity,
        transform: [{ scale }],
        backgroundColor: "#fff",
        borderRadius: 18,
        borderWidth: 1.5,
        borderColor: accent + "40",
        paddingHorizontal: 18,
        paddingTop: 18,
        paddingBottom: 12,
        justifyContent: "space-between",
      }}
    >
      <View>{content}</View>
      <View style={{ flexDirection: "row", justifyContent: "flex-end", marginTop: 10 }}>
        <Text style={{ fontSize: 11, color: "#9ca3af", fontWeight: "700" }}>tap to flip ↪</Text>
      </View>
    </Animated.View>
  );

  return (
    <TouchableOpacity onPress={toggle} activeOpacity={0.95} style={{ width: "100%", height: 188, marginBottom: 14, shadowColor: "#0f172a", shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.12, shadowRadius: 12, elevation: 6 }}>
      <View style={{ flex: 1, borderRadius: 18, backgroundColor: "#fff", overflow: "hidden" }}>
        {face(
          frontOpacity,
          frontScale,
          <View>
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
              <View style={{ width: 34, height: 34, borderRadius: 10, backgroundColor: accent + "22", alignItems: "center", justifyContent: "center", marginRight: 10 }}>
                <Text style={{ fontSize: 18 }}>{emoji}</Text>
              </View>
              <Text style={{ fontSize: 16, fontWeight: "800", color: "#111827", flex: 1 }}>{title}</Text>
            </View>
            <Text style={{ fontSize: 14, lineHeight: 21, color: "#374151" }}>{front}</Text>
          </View>
        )}
        {face(
          backOpacity,
          backScale,
          <View>
            <View style={{ height: 4, width: 36, borderRadius: 2, backgroundColor: accent, marginBottom: 10 }} />
            <Text style={{ fontSize: 14, lineHeight: 22, color: "#1f2937" }}>{back}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}
