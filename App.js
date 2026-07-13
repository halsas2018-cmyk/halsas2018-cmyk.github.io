import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, StatusBar } from "react-native";
import mobileAds from "react-native-google-mobile-ads";
import { AdProvider } from "./components/AdProvider";
import RootNavigator from "./navigation/RootNavigator";

export default function App() {
  const [adsReady, setAdsReady] = useState(false);

  useEffect(() => {
    // Initialize the Google Mobile Ads SDK once at boot so banners/interstitials load.
    mobileAds()
      .initialize()
      .then(() => setAdsReady(true))
      .catch(() => setAdsReady(true)); // proceed even if init fails
  }, []);

  if (!adsReady) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" }}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <ActivityIndicator size="large" color="#2563eb" />
      </View>
    );
  }

  return (
    <AdProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AdProvider>
  );
}
