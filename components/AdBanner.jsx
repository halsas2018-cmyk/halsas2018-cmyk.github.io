import React from "react";
import { View, Text } from "react-native";
import s from "../styles";

export default function AdBanner({ style }) {
  return (
    <View style={[s.adBanner, style]}>
      <Text style={s.adText}>📢 Advertisement</Text>
    </View>
  );
}
