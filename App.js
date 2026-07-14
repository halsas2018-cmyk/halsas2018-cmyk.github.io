import React, { useEffect } from "react";
import mobileAds from "react-native-google-mobile-ads";
import { NavigationContainer } from "@react-navigation/native";
import { AdProvider } from "./components/AdProvider";
import RootNavigator from "./navigation/RootNavigator";

export default function App() {
  useEffect(() => {
    // Initialize the Google Mobile Ads SDK in the BACKGROUND. We deliberately do
    // NOT block the UI on this: GMA init can take a few seconds on first launch
    // (it was previously gating the whole app behind a spinner, causing a
    // multi-second white screen). Ads simply populate once the SDK is ready.
    mobileAds().initialize().catch(() => {});
  }, []);

  return (
    <AdProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AdProvider>
  );
}
