import React from "react";
import { View } from "react-native";
import { BannerAd as RNBannerAd, BannerAdSize, TestIds } from "react-native-google-mobile-ads";

// Real banner ad unit (Home + Result screens)
const BANNER_AD_UNIT_ID = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-2857595249161834/9387356261";

export default function BannerAd() {
  return (
    <View style={{ alignItems: "center", marginVertical: 8 }}>
      <RNBannerAd
        unitId={BANNER_AD_UNIT_ID}
        size={BannerAdSize.BANNER}
      />
    </View>
  );
}
