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
| Banner | `.../9387356261` | `BannerAd.jsx` | Home + Result (mid-content) + all list screens (mid-list: Topics, StudyHub, ExamsHub, LabHub, Experiments, History, LabResults) |
| Native | `.../6548437916` | `AdBanner.jsx` | UNUSED — replaced by BannerAd (native returns zero fill on new accounts) |
| Rewarded | `.../3777760768` | `useRewardedAd` | topic unlock + lab sim gate |
| Interstitial | `.../3803892481` | `useInterstitialAd` | quiz-finish, result→topics, exam launch |
| Rewarded Interstitial | `.../2273107404` | `useRewardedInterstitial` | viewing past results |

## AdProvider (`components/AdProvider.jsx`) — the wiring hub
Mounted ONCE in `App.js` (above the navigator) so counters/cooldowns persist. Calls the
ad hooks once and exposes `useAds()`:
- `useInterstitialAd` ×3 — one per trigger (quiz-finish, result→topics, exam-launch)
- `useRewardedInterstitial` ×1 — viewing past results
- `useRewardedAd` ×1 — unlocking (locked topics / ready lab sims)

State (refs):
- `quizSessionCount` — interstitial on quiz finish every **4th** session
- `resultTapCount` — interstitial on Result→Topics every **3rd** tap
- No time cooldowns — ads are served purely on session/tap count.

Exposed API:
- `maybeQuizComplete(onDone)` — interstitial immediately after a quiz, every 4th session
- `maybeResultToTopics(onDone)` — interstitial on Result→Topics, every 3rd tap
- `showExamLaunch(onDone)` — interstitial on Final Exam launch
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
