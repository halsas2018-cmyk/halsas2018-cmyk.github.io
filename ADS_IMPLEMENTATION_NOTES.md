# Ads Implementation Notes (SciPracticePublish_Backup)

> Working reference for the ads/locks architecture in THIS directory.
> Refreshed: 2026-07-13 — now reflects the wired React-Navigation app (AdProvider).
> Last pre-migration state (single-file `scipractice.jsx`) is HISTORICAL; do not follow it.

## Architecture reality (current)
- `App.js` → `mobileAds().initialize()` (spinner until ready) → `<AdProvider>` →
  `<NavigationContainer>` → `<RootNavigator>`. All ads are wired through `AdProvider`.
- `screens/` + `navigation/` + `lab/` + `study/` + `storage/` all exist (copied from the
  SDK-54 source; this folder stays SDK 56).
- `scipractice.jsx` is **orphaned** (not imported by `App.js`) — kept only as a reference.

## Ad infrastructure
- SDK: `react-native-google-mobile-ads` `^15.6.0`
- Boot: `App.js` calls `mobileAds().initialize()`; spinner until ready (proceeds on error).
- `app.json` plugin config (AdMob):
  - Android app ID: `ca-app-pub-2857595249161834~2471996491` (REAL)
  - iOS app ID: `ca-app-pub-2857595249161834~2471996491` (REAL, matches Android)
- All ads use `__DEV__ ? TestIds.X : "ca-app-pub-2857595249161834/..."`.

## Ad unit IDs (account 2857595249161834) — all five now USED
| Type | Unit ID | Hook / file | Where served |
|---|---|---|---|
| Banner | `.../9387356261` | `BannerAd.jsx` | Home + Result (mid-content); ALL 4 tabs (Home, LabHub, StudyHub, ExamsHub); every topic-selection screen (Practice Topics, Chemistry/Physics/Biology experiment browsers, StudyTopics, Experiments list); StudySubtopics; StudyCard (small, while studying); History + LabResults (mid-list) |
| Native | `.../6548437916` | `AdBanner.jsx` | UNUSED — replaced by BannerAd (native returns zero fill on new accounts) |
| Rewarded | `.../3777760768` | `useRewardedAd` | topic unlock (LOCKED_TOPICS) + lab sim gate (every interactive experiment) |
| Interstitial | `.../3803892481` | `useInterstitialAd` | quiz-finish (every 4th), result→topics (every 3rd) |
| Rewarded Interstitial | `.../2273107404` | `useRewardedInterstitial` | Final Exam launch (must-watch) + viewing past results (History / LabResults) |

## AdProvider (`components/AdProvider.jsx`) — the wiring hub
Mounted ONCE in `App.js` (above the navigator) so counters/cooldowns persist. Calls the
ad hooks once and exposes `useAds()`:
- `useInterstitialAd` ×2 — one per trigger (quiz-finish, result→topics)
- `useRewardedInterstitial` ×2 — Final Exam launch (must-watch) + viewing past results
- `useRewardedAd` ×1 — unlocking (locked topics / ready lab sims)

State (refs):
- `quizSessionCount` — interstitial on quiz finish every **4th** session
- `resultTapCount` — interstitial on Result→Topics every **3rd** tap
- No time cooldowns — ads are served purely on session/tap count.

Exposed API:
- `maybeQuizComplete(onDone)` — interstitial immediately after a quiz, every 4th session
- `maybeResultToTopics(onDone)` — interstitial on Result→Topics, every 3rd tap
- `showExamLaunch(onDone)` — rewarded-interstitial on Final Exam launch (must-watch;
  preloaded on init + reloaded on close, proceeds on close so the exam always launches)
- `showResultView(onDone)` — rewarded-interstitial before viewing a past result
- `unlockWithRewarded(onDone)` — rewarded ad gate, proceeds on reward

If an ad isn't loaded, the hooks' `showAd` calls the on-done callback directly (proceeds
without an ad) — so flows never hard-block.

## Where each ad is served (new screens)
**Banners** (real `BannerAd`, Home + Result + every list screen):
- `HomeScreen` — mid-content (after the subject cards)
- `ResultScreen` — mid-content (after the status banner, before the buttons)
- `TopicsScreen`, `ExperimentsScreen`, `HistoryScreen`, `LabResultsScreen` — MID-list via
  `withInlineBanner` (after a few rows)
- `LabHubScreen` — mid-scroll (between the lab cards and Book-a-Tutor)
- `StudyHubScreen`, `ExamsHubScreen` — inline (centered stubs)

**Native ads** (`AdBanner`) — UNUSED. Replaced by `BannerAd` everywhere. Native units need an
approved *Native*-typed AdMob unit and returned zero fill on this account, so banners are used
for all in-feed placement instead.

**Rewarded unlock** (`useRewardedAd`):
- `TopicsScreen` — tapping a `LOCKED_TOPICS` topic shows "🔒 Watch Ad" and gates start via
  `unlockWithRewarded(() => navigate QuizScreen)`. Non-locked topics navigate directly.
- `ExperimentsScreen` — **EVERY interactive experiment** (`exp.screen` tap) is gated via
  `unlockWithRewarded(() => navigate exp.screen)`. This gates ALL playable virtual labs;
  "Coming Soon" experiments just show the sheet (no sim to run).

**Interstitial** (`useInterstitialAd`, no time cooldown):
- `QuizScreen.handleNext` (last question) → `maybeQuizComplete(() => replace ResultScreen)`.
  Uses `replace` (not `navigate`) so the finished quiz is swapped out — keeps the stack flat.
- `ResultScreen` "Back to Topics List" → `maybeResultToTopics(() => popTo TopicsScreen)`.
- `ExamsHubScreen` "Start Final Exam" → `showExamLaunch(() => alert(...))`.

**Rewarded-interstitial** (`useRewardedInterstitial`, no time cooldown):
- `HistoryScreen` — tapping a result card → `showResultView(() => open detail modal)`.
- `LabResultsScreen` — tapping a report → `showResultView(() => open report modal)`.

## LOCKED_TOPICS (constants.js)
Gates advanced topics behind a **watch-a-rewarded-ad to unlock** flow (NOT payment;
WhatsApp/SESSION_PRICES are tutor-booking only). Current set (proposed — confirm with owner):
- Chemistry (5): `organic, industry, biochem, metals, practical`
- Biology (9): `secA-genetics-*`, `secA-evolution`, `secC-blood-transfusion`,
  `secC-paternity`, `secC-crime-detection`
- Physics (14): `p4-*`, `p5-*`, `all-*` (fields, atomic/nuclear, modern/applied)

## Outstanding / things to note
1. ✅ iOS + Android AdMob app IDs in `app.json` are both the real `ca-app-pub-2857595249161834~2471996491`.
2. ✅ All five ad unit IDs are now wired (previously the rewarded-interstitial was dead code).
3. ⚠️ Verification was **structural only** (import audit + JSX review) — no device/emulator
   here, so runtime ad behavior is unconfirmed. Run `expo start` on a device to confirm.
4. The old single-file `scipractice.jsx` ad logic is no longer the live behavior.

5. ⚠️ (2026-07-18) **Ads were NOT showing in the last build — root cause found + FIXED.**
   - Cause 1 (main): the hooks called `ad.load()` in a mount effect that runs **before**
     `mobileAds().initialize()` (React runs child effects before the parent App.js init
     effect). Loading before init silently fails, so `ad.loaded` stayed `false` and
     `showAd()` always hit the `else` branch → called the on-done callback with no ad.
   - Cause 2: `RewardedAd` never reloaded after `AdEventType.CLOSED`, so only the **first**
     rewarded ever showed; later unlock/lab-start taps skipped the ad.
   - **Fix applied** in `InterstitialAd.jsx` / `RewardedAd.jsx` / `RewardedInterstitialAd.jsx`:
     every `load()` is now gated on `mobileAds().initialize().finally(...)` (idempotent);
     all three hooks reload on `CLOSED` (preload-next); all three retry on `AdEventType.ERROR`
     with an 8s bounded backoff (max 6 retries) — this is the "keep one ad always ready"
     caching. Parsed clean; **not yet runtime-verified on a device**.
   - Still account-side (not code): in a **release** build the real units must be approved
     and the AdMob app linked to package `com.sas26steam.scipractice`, or they return zero
     fill. In **dev**, TestIds ads should appear once the init-gate fix is in.

## Amazon Appstore submission notes (2026-07-18)

Two notices came back after the first upload. Decisions below. **No build was run for
these — config is documented here to apply on the next CI run.**

### 1. DRM notice — DECISION: SKIP
Amazon flags that the binary has no Amazon DRM wrapper. This is **optional**.
- **Console DRM** is a checkbox in the Amazon developer console at submission (Amazon
  wraps the binary) — zero code changes, gives the "DRM-protected" badge. Can be enabled
  later without touching code.
- **Amazon Appstore SDK** is only needed for **in-app purchases / receipt verification**.
  This app is ad-funded (no IAP), so the SDK is **not needed** — do not add it.
- For a free, ad-supported educational app, DRM adds little value and can complicate
  sideloads. **Decision: skip DRM for now**; enable console DRM later if desired.

### 2. Size notice (>50MB) — DECISION: ABI split + R8 minify (keep APK workflow)
Root cause (confirmed in `android/gradle.properties`): the universal APK builds **4 ABIs**
`armeabi-v7a,arm64-v8a,x86,x86_64`. `x86`/`x86_64` are emulator-only (dead weight for store
distribution) and `armeabi-v7a` is legacy 32-bit. `expo-build-properties` was only setting
the Kotlin version, and **R8 minify + resource-shrink were OFF**, so the JS/native payload
was uncompressed.

**Best fix (chosen):** keep the existing APK CI workflow; just ship one phone ABI and turn on
minification. This is **build configuration only — no dependencies added/upgraded, no
navigation or library changes** (`expo-build-properties` is already installed).

Apply this to `app.json` — extend the `expo-build-properties` plugin entry:

```json
["expo-build-properties", {
  "android": {
    "kotlinVersion": "2.1.20",
    "enableProguardInReleaseBuilds": true,
    "enableShrinkResourcesInReleaseBuilds": true,
    "extraGradleProperties": {
      "reactNativeArchitectures": "arm64-v8a"
    }
  }
}]
```

- `extraGradleProperties.reactNativeArchitectures: "arm64-v8a"` overrides the 4-ABI default
  in the generated `gradle.properties` (survives `expo prebuild`). Removes ~3/4 of native-lib
  bulk (drops x86/x86_64 + armeabi-v7a).
- `enableProguardInReleaseBuilds` + `enableShrinkResourcesInReleaseBuilds` strip unused code
  and resources in release.
- **Tradeoff:** this drops support for 32-bit phones (pre-~2019). To also cover old 32-bit
  devices, use `"arm64-v8a,armeabi-v7a"` instead — adds ~10–15MB but is usually still under
  50MB once minified. Amazon requires 64-bit, which `arm64-v8a` satisfies.
- **Expected result:** one ABI + minify should bring the release APK well under 50MB.
- **Alternative (not chosen):** switch CI to `bundleRelease` (AAB). Amazon accepts App
  Bundles and auto-splits per device → smallest download. Requires changing
  `.github/workflows/android-build.yml` (`assembleRelease` → `bundleRelease`) and the
  artifact from `app-release.apk` to `app-release.aab`. Bigger workflow change; only do this
  if the ABI+minify APK still exceeds 50MB or you want the smallest possible download.

**To apply:** make the `app.json` edit above, commit, and re-run the GitHub APK workflow;
check the produced APK size in the `SciPractice-Release-APK` artifact.
