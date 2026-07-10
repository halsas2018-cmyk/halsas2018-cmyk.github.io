import React, { useState, useEffect } from 'react';
import { View, StyleSheet, StatusBar, ActivityIndicator } from 'react-native';
import mobileAds from 'react-native-google-mobile-ads';
import SciPractice from './scipractice';

export default function App() {
  const [isAdsReady, setIsAdsReady] = useState(false);

  useEffect(() => {
    // Initialize the native Google Mobile Ads SDK once during boot
    mobileAds()
      .initialize()
      .then(adapterStatuses => {
        console.log('AdMob initialization complete.', adapterStatuses);
        setIsAdsReady(true);
      })
      .catch(error => {
        console.error('AdMob initialization failed:', error);
        // Fallback so the app opens even if initialization encounters an error
        setIsAdsReady(true);
      });
  }, []);

  // Show a blank loading view or a spinner while the native SDK registers your App ID
  if (!isAdsReady) {
    return (
      <View style={[styles.container, styles.centered]}>
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
        <ActivityIndicator size="large" color="#2563eb" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <SciPractice />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
