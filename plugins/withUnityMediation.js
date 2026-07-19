// Expo config plugin: adds the Unity Ads mediation adapter for AdMob.
//
// react-native-google-mobile-ads v15.6.0 bundles GMA SDK Android 24.5.0 / iOS 12.9.0.
// The Unity adapter version below (4.16.1.0) is built against GMA SDK 24.5.0 — an
// exact match. DO NOT bump to 4.17+ (those require GMA 25.x and break the build).
//
// The adapter is only a bridge: it references com.unity3d.ads.* but does NOT bundle
// the Unity Ads SDK. The app must supply it (UNITY_SDK_VERSION, matched to the
// adapter per the official AdMob Unity mediation docs). Without it, R8 minification
// fails with "Missing class com.unity3d.ads.IUnityAdsInitializationListener" and the
// adapter would also ClassNotFoundException at runtime.
//
// Registered in app.json so it runs during `expo prebuild` and survives the
// --clean regeneration in CI. Idempotent.

const { withAppBuildGradle, withPodfile } = require('@expo/config-plugins');

const UNITY_ADAPTER_VERSION = '4.16.1.0';
const UNITY_SDK_VERSION = '4.16.1';
const ANDROID_DEP =
`    implementation 'com.google.ads.mediation:unity:${UNITY_ADAPTER_VERSION}'
    implementation 'com.unity3d.ads:unity-ads:${UNITY_SDK_VERSION}'`;
const IOS_POD = `  pod 'GoogleMobileAdsMediationUnity', '${UNITY_ADAPTER_VERSION}'`;

// Insert `line` immediately after the first occurrence of `marker`, unless it is
// already present. Falls back to appending if the marker is missing.
function injectAfter(content, marker, line) {
  if (content.includes(line)) return content;
  const idx = content.indexOf(marker);
  if (idx === -1) {
    return content + '\n' + line + '\n';
  }
  const insertAt = idx + marker.length;
  return content.slice(0, insertAt) + '\n' + line + content.slice(insertAt);
}

module.exports = function withUnityMediation(config) {
  config = withAppBuildGradle(config, (cfg) => {
    cfg.modResults.contents = injectAfter(
      cfg.modResults.contents,
      'dependencies {',
      ANDROID_DEP
    );
    return cfg;
  });

  config = withPodfile(config, (cfg) => {
    cfg.modResults.contents = injectAfter(
      cfg.modResults.contents,
      'use_react_native!',
      IOS_POD
    );
    return cfg;
  });

  return config;
};
