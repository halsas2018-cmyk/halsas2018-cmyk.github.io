import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  NativeAd,
  NativeAdView,
  NativeAsset,
  NativeAssetType,
  TestIds,
} from "react-native-google-mobile-ads";

// Real native (format/banner) ad unit — banners are now rendered as native ads.
// Use the Google test native unit while developing so the emulator/device shows
// a real creative without needing a reviewed production ad.
const NATIVE_AD_UNIT_ID = __DEV__
  ? TestIds.NATIVE
  : "ca-app-pub-2857595249161834/6548437916";

export default function AdBanner({ style }) {
  const [nativeAd, setNativeAd] = useState(null);

  useEffect(() => {
    let cancelled = false;
    let adRef = null;

    NativeAd.createForAdRequest(NATIVE_AD_UNIT_ID)
      .then((ad) => {
        adRef = ad;
        if (!cancelled) setNativeAd(ad);
      })
      .catch(() => {
        // No fill / failed to load — render nothing so the slot just collapses.
      });

    return () => {
      cancelled = true;
      if (adRef) adRef.destroy();
    };
  }, []);

  if (!nativeAd) {
    // Reserve a small collapsed slot while the ad loads (or if it never does).
    return <View style={[{ height: 0 }, style]} />;
  }

  return (
    <NativeAdView nativeAd={nativeAd} style={[styles.container, style]}>
      <View style={styles.row}>
        <NativeAsset type={NativeAssetType.ICON}>
          <Image style={styles.icon} resizeMode="cover" />
        </NativeAsset>

        <View style={styles.textCol}>
          <View style={styles.headlineRow}>
            <NativeAsset type={NativeAssetType.HEADLINE}>
              <Text style={styles.headline} numberOfLines={1} />
            </NativeAsset>
            <View style={styles.adBadge}>
              <Text style={styles.adBadgeText}>Ad</Text>
            </View>
          </View>

          <NativeAsset type={NativeAssetType.BODY}>
            <Text style={styles.body} numberOfLines={2} />
          </NativeAsset>

          <View style={styles.bottomRow}>
            <NativeAsset type={NativeAssetType.ADVERTISER}>
              <Text style={styles.advertiser} numberOfLines={1} />
            </NativeAsset>
            <NativeAsset type={NativeAssetType.CALL_TO_ACTION}>
              <Text style={styles.cta}> </Text>
            </NativeAsset>
          </View>
        </View>
      </View>
    </NativeAdView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 12,
    padding: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 44,
    height: 44,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: "#f1f5f9",
  },
  textCol: {
    flex: 1,
  },
  headlineRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headline: {
    flex: 1,
    fontSize: 14,
    fontWeight: "700",
    color: "#111827",
    marginRight: 8,
  },
  adBadge: {
    backgroundColor: "#e5e7eb",
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  adBadgeText: {
    fontSize: 9,
    fontWeight: "800",
    color: "#6b7280",
    letterSpacing: 0.5,
  },
  body: {
    fontSize: 12,
    color: "#6b7280",
    marginTop: 3,
    lineHeight: 16,
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },
  advertiser: {
    flex: 1,
    fontSize: 11,
    color: "#9ca3af",
    marginRight: 8,
  },
  cta: {
    backgroundColor: "#16a34a",
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "700",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 8,
    overflow: "hidden",
  },
});
