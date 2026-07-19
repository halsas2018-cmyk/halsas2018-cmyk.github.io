import React, { useEffect, useState } from "react";
import { Animated } from "react-native";
import mobileAds from "react-native-google-mobile-ads";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { AdProvider } from "./components/AdProvider";
import RootNavigator from "./navigation/RootNavigator";
import { ThemeProvider } from "./theme";
import FirstRunModal from "./components/FirstRunModal";
import FeedbackModal from "./components/FeedbackModal";
import { feedbackStorage } from "./storage/feedbackStorage";
import { initNotifications, applySettings } from "./components/NotificationManager";
import { notificationStorage } from "./storage/notificationStorage";

SplashScreen.preventAutoHideAsync().catch(() => {});

export default function App() {
  const [fade] = useState(() => new Animated.Value(0));
  const [feedbackVisible, setFeedbackVisible] = useState(false);

  useEffect(() => {
    Animated.timing(fade, { toValue: 1, duration: 420, useNativeDriver: true }).start();
    SplashScreen.hideAsync().catch(() => {});
  }, []);

  // Initialize the Google Mobile Ads SDK in the BACKGROUND (keep Backup's
  // non-blocking behavior — it previously gated the UI on a spinner).
  useEffect(() => {
    mobileAds().initialize().catch(() => {});
  }, []);

  // Notifications: register the handler and re-apply any enabled daily reminder.
  useEffect(() => {
    initNotifications();
    notificationStorage.getSettings().then((s) => applySettings(s)).catch(() => {});
  }, []);

  // Ask for feedback on first launch (after a beat) and periodically after.
  useEffect(() => {
    let timer;
    (async () => {
      await feedbackStorage.recordLaunch();
      const should = await feedbackStorage.shouldPrompt();
      if (!should) return;
      timer = setTimeout(() => setFeedbackVisible(true), 1500);
    })();
    return () => timer && clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AdProvider>
        <Animated.View style={{ flex: 1, opacity: fade }}>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
          <FirstRunModal />
          <FeedbackModal
            visible={feedbackVisible}
            onClose={() => {
              setFeedbackVisible(false);
              feedbackStorage.markPrompted();
            }}
          />
        </Animated.View>
      </AdProvider>
    </ThemeProvider>
  );
}
