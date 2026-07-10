import React from "react";
import { View } from "react-native";
import { BannerAd, BannerAdSize, TestIds } from "react-native-google-mobile-ads";

const BANNER_ID = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-2857595249161834/9387356261";

export default function AdBanner({ style }) {
  return (
    <View style={[{ alignItems: "center", marginVertical: 8 }, style]}>
      <BannerAd
        unitId={BANNER_ID}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        onAdFailedToLoad={(e) => console.log("Banner ad failed:", e)}
      />
    </View>
  );
}
