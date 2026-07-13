@AGENTS.md

# SciPractice — Project Guide (read this first)

This file is the single source of truth for the project so future sessions don't
need to scan the whole repo. It also encodes the token-efficient working style
used on this project — follow it by default.

## What it is
Expo / React Native app for Nigerian science exam prep (WAEC / NECO). Four tabs:
Practice (quiz), Virtual Lab, Study Cards, Final Exams.

## Tech
- **Expo SDK 56** — this folder runs SDK 56 (`expo ^56.0.15`, `react-native 0.85.3`,
  `react 19.2.3`). **Read the versioned docs at https://docs.expo.dev/versions/v56.0.0/
  before writing any code.** (NOTE: `AGENTS.md` still says SDK 54 — that is stale for
  this folder; SDK 56 is authoritative here. Do NOT downgrade Expo/React Native.)
- React Navigation **v7** (`@react-navigation/native`, `/native-stack`, `/bottom-tabs`),
  with `react-native-screens` + `react-native-safe-area-context` peers.
- Icons via `@expo/vector-icons`. File persistence via `expo-file-system/legacy`.
- Ads via `react-native-google-mobile-ads` (see "Ads" section below).
- Plain JS / JSX (no TypeScript).

> **Migration note:** the new architecture (navigation/screens/lab/study/storage +
> full question bank) was copied into this SDK-56 folder from the SDK-54 source.
> Only app source was copied — `package.json`/`app.json` stay pinned to SDK 56, and
> the missing nav/file-system/icon packages were added at SDK-56-compatible versions.

## File structure (only what matters)
- `navigation/RootNavigator.jsx` — root stack: `MainTabs`, `TopicsScreen`, `QuizScreen`, `ResultScreen`, `HistoryScreen`.
- `navigation/TabNavigator.jsx` — bottom tabs: `PracticeHub`(HomeScreen), `LabHub`(nested Lab stack), `StudyHub`, `ExamsHub`. **Add lab screens here.**
- `lab/LabHubScreen.jsx` — Virtual Lab hub (Chemistry / Physics / Biology / Book-a-Tutor cards). Physics & Biology cards navigate to their experiment browsers; Chemistry opens its browser directly.
- `lab/ChemistryExperimentsScreen.jsx` / `lab/BiologyExperimentsScreen.jsx` / `lab/PhysicsExperimentsScreen.jsx` → `lab/ExperimentsScreen.jsx` — subject experiment browsers: LabHub → topic list → experiment list → "Coming Soon" sheet (or "READY ▸" for interactive experiments).
- `lab/chemistry/<topicId>/<experimentId>.js` — **one file per experiment**; `lab/chemistry/<topicId>/index.js` aggregates a topic; `lab/chemistry/index.js` aggregates all 15 topics → `[{ topicId, topicName, experiments }]` (35 experiments, title-only, `status:"coming-soon"`). The same shape is mirrored under `lab/biology/` (58 topics) and `lab/physics/` (41 topics), each with one `coming-soon` experiment per topic.
- `constants.js` — `SUBJECTS`: Chemistry (15 topics, live — `comingSoon:false`), Biology (58 topics, live — `comingSoon:false`), Physics (41 topics, live — `comingSoon:false`, ≈2,200 questions). All topic `id`s match the question/lab keys. Also `LOCKED_TOPICS` (advanced topics gated behind a rewarded ad — Chemistry 5 + Biology 9 + Physics 14), `WHATSAPP_NUMBER`, `SESSION_PRICES`.
- `questions/chemistry/<topicId>.js` — one file per topic (array, `module.exports`, `const questions = [...]`); `questions/index.js` aggregates into `QUESTIONS` keyed by topic id. `questions/biology/` (58 files, ≈2,900 questions) and `questions/physics/` (41 files, ≈2,200 questions) follow the same pattern. Per-subject aggregators `questions/<subject>/index.js` also exist. (Old monoliths `chemistry.js`/`biology.js`/`physics.js` were deleted.)
- `screens/` — HomeScreen, TopicsScreen, QuizScreen, ResultScreen, HistoryScreen, ExamsHubScreen.
- `components/` — BookingModal, AdBanner. `study/`, `storage/` — study cards + quiz persistence.

## DEAD CODE — do not touch
`scipractice.jsx` is **not used**. `App.js` mounts `RootNavigator` (confirmed), so all
navigation is React-Navigation-driven (RootNavigator → TabNavigator). Don't edit
`scipractice.jsx` and don't assume quiz logic lives there. (It is kept only as a
reference for the old single-file ad wiring — see the Ads section.)

## Ads (react-native-google-mobile-ads)
Ads are wired into the React-Navigation app via a single `AdProvider`
(`components/AdProvider.jsx`) mounted in `App.js` above `NavigationContainer`. It calls
the ad hooks ONCE and exposes `useAds()` to screens. Ad SDK init (`mobileAds().initialize()`)
happens in `App.js` before render. Unit IDs use `__DEV__ ? TestIds.X : "<real id>"`.
- `components/AdBanner.jsx` — banner, rendered inline (dynamic, in scroll) on list screens.
- `components/RewardedAd.jsx` / `InterstitialAd.jsx` / `RewardedInterstitialAd.jsx` — hooks
  `useRewardedAd` / `useInterstitialAd` / `useRewardedInterstitial`. All four ad unit IDs
  are now used (see `ADS_IMPLEMENTATION_NOTES.md`).
- **Banners** (inline): Home, Topics, StudyHub, ExamsHub, LabHub, History, LabResults,
  Result. NOT on Quiz or lab sim screens.
- **Rewarded unlock** (`useRewardedAd`): `LOCKED_TOPICS` advanced topics in `TopicsScreen`,
  and "READY ▸" lab sims in `ExperimentsScreen` — tap → watch ad → start.
- **Interstitial** (`useInterstitialAd`, 90s cooldown): quiz finish → Result (every 4th
  session), Result → Topics (every 3rd tap), Final Exam launch.
- **Rewarded-interstitial** (`useRewardedInterstitial`, 60s cooldown): tapping a past quiz
  result (History) or lab report (LabResults) before viewing.
- `LOCKED_TOPICS` (constants.js) = Chemistry 5 + Biology 9 + Physics 14 advanced topics
  (proposed set — confirm with owner). Gate = watch-a-rewarded-ad, NOT payment;
  WhatsApp/SESSION_PRICES are tutor booking only.
- ⚠️ iOS AdMob app ID in `app.json` is still a Google **test** ID — set a real one before release.
- See `ADS_IMPLEMENTATION_NOTES.md` (repo root) for the full ad map — keep until final build.

## GitHub APK build (CI)
A signed release APK is built automatically by GitHub Actions — no local
Android SDK required. Workflow: `.github/workflows/android-build.yml` (runs on
push to `main`, or manually via **Actions → Android APK Build → Run workflow**).
Steps: `expo prebuild --platform android --clean` → decode keystore from a repo
secret → inject signing props into `android/gradle.properties` → patch the
generated `android/app/build.gradle` to sign the release with our key (via
`ci/patch-android-signing.js`, idempotent) → `./gradlew assembleRelease` →
upload the APK as the **SciPractice-Release-APK** artifact (download from the
run). The `android/` folder is gitignored and regenerated every run.

**Required GitHub repo secrets** (Settings → Secrets and variables → Actions):
`KEYSTORE_PASSPHRASE`, `ANDROID_KEY_ALIAS`, `ANDROID_STORE_PASSWORD`,
`ANDROID_KEY_PASSWORD`.

**How signing works (no large base64 secret):** the release keystore is
committed to the repo **encrypted** as `my-release-key.keystore.gpg` (JKS format
— stable across JDK versions; CI runs JDK 17, this avoids the
"Tag number over 30" PKCS12 parse error seen with a JDK-21 PKCS12 keystore).
The workflow GPG-decrypts it at build time using the `KEYSTORE_PASSPHRASE`
secret, validates it with `keytool -list` (fails fast), then signs.

**Where the credentials live (DO NOT COMMIT):** `KEYSTORE_CREDENTIALS.txt` at
the repo root holds the keystore alias, passwords, the `KEYSTORE_PASSPHRASE`,
and how the CI consumes them. `my-release-key.keystore` (binary) and
`KEYSTORE_CREDENTIALS.txt` are gitignored; only the encrypted `.gpg` is
committed. Re-create the secret values from `KEYSTORE_CREDENTIALS.txt` if they're
ever lost from GitHub. ⚠️ The keystore + password are the ONLY way to ship app
updates — back them up offline (password manager / encrypted note). See
`KEYSTORE_CREDENTIALS.txt`.

## Conventions
- Data is **split into per-topic / per-entity files with `index.js` aggregators** — never a single monolith. Adding an item = create one file + update its `index.js`.
- Topic/experiment `id`s must match `constants.js`.
- **Question bank is lazy-loaded per subject.** `screens/QuizScreen.jsx` loads only the subject being quizzed via literal-path `require` thunks (e.g. `require("../questions/physics/index").default`), cached per subject. Do NOT add a static top-level `import` of the whole bank (or `questions/index`) into any screen in the startup import graph — it would force Metro to evaluate all ~5,900 questions at app boot and lag the home/topic screens. Note: Metro rejects `require(variable)`, so the thunks must wrap literal-path requires.
- Lab tab nesting: `LabHub`(tab) → `LabHubScreen`(stack) → `ChemistryExperiments` → `Experiments`. Nested screens need **UNIQUE names** (tab "LabHub" vs stack screen "LabHubScreen") or React Navigation warns.

## Building a lab / interactive experiment
The titration lab is the reference implementation. Reuse its parts for every new
interactive practical — don't hand-roll a fresh architecture each time.

**Data model (one file per experiment).** `lab/chemistry/<topicId>/<experimentId>.js`
default-exports `{ id, topicId, title, status, screen? }`:
- `status: "coming-soon"` → ExperimentsScreen shows a "COMING SOON" sheet.
- `status: "interactive"` + `screen: "TitrationPrep"` → tapping it navigates to a
  briefing/setup screen, and `ExperimentsScreen` shows a green **"READY ▸"** badge.
  Topic list cards also show a green "N ready ▸" count. Add the screen name to the
  LabStack in `navigation/TabNavigator.jsx` (see below).

**Reference file map (copy this shape for new labs):**
- `lab/titration/reagents.js` — shared data + chemistry helpers
  (`ACIDS`, `BASES`, `INDICATORS`, `APPARATUS`, `equivalenceAcidVolume`,
  `recommendIndicator`). Put any lab-specific reagent/data here, not inline.
- `lab/titration/FlipCard.jsx` — reusable tappable briefing card.
- `lab/titration/TitrationPrep.jsx` — wizard: flip-card briefing → choose
  apparatus → choose reagents/indicator → volume + endpoint calculator → "Start".
- `lab/chemistry/<topic>/<Experiment>.jsx` — the actual animated simulation.
- `screens/LabResultsScreen.jsx` — lists saved reports.
- `storage/labStorage.js` — `saveReport` / `getAllReports` / `deleteReport`
  (writes `lab_reports.json` via `expo-file-system/legacy`, mirrors `quizStorage`).

**Wiring a new interactive experiment:**
1. Create the experiment `.jsx` screen (e.g. `lab/chemistry/acids/TitrationExperiment.jsx`).
2. Register it (and any prep screen) in the **LabStack** inside
   `navigation/TabNavigator.jsx` with a UNIQUE name. Subject browser screens
   (`ChemistryExperiments`, `BiologyExperiments`, `PhysicsExperiments`) and the
   generic `Experiments` screen are already registered there. Keep the tab name `LabHub`
   and the stack's initial screen `LabHubScreen` (already unique — don't rename).
3. In the experiment's `<experimentId>.js`, set `status:"interactive"` +
   `screen:"<PrepScreenName>"`. `ExperimentsScreen` routes any interactive
   experiment to `navigation.navigate(exp.screen, { experiment, topicId, topicName })`
   — so `screen` must name the **prep** screen you registered. The prep screen
   then navigates to its own sim screen (e.g. `TitrationPrep` → `TitrationExperiment`,
   `RatePrep` → `RateExperiment`) passing a `config` object.

**Simulation screen conventions:**
- Pass config via `route.params` (experiment, topicId, and a `config` object with
  chosen reagents/endpoint for a prep→run flow). Always keep a no-config fallback
  so the screen also works if navigated directly.
- Layout = **fixed bench/sim stage (flex:1, centered, always visible) + pinned
  control panel at the bottom** (NOT a long scroll that hides the apparatus).
  Use contextual buttons: setup steps, then titrate step with Add/Swirl/Stop.
- Fail conditions: wrong order = friendly hint; overshoot / bad result = `failed`
  state with a Reset. Success → report modal that auto-calculates the result and
  saves via `labStorage`.

**Animation / RN gotchas (learned the hard way):**
- **Flip cards:** do NOT use `rotateY` + `backfaceVisibility` — on RN it mirrors
  text into an unreadable mess. Use an **opacity crossfade** (FlipCard does this).
- **Inputs + keyboard:** wrap the screen in `KeyboardAvoidingView`
  (`behavior: Platform.OS === "ios" ? "padding" : "height"`) and set
  `keyboardShouldPersistTaps="handled"` on the ScrollView, or the keyboard hides
  the field and blurs on every tap.
- Animated `transform: [{ rotateY }]` is not supported by the native driver —
  use `useNativeDriver:false` for it, and keep `translate`/`scale`/`rotate(deg)`
  on the native driver.


- **Scaffold many files with a Node script** that `require`s the source and writes files — keep large source files OUT of context entirely.
- Inspect structure with `grep` / `wc` / `head` / `tail` (bash), never `Read` on big files.
- Prefer `Edit` over `Write` (smaller diffs; the tool tracks file state, so don't re-read files you just wrote/edited).
- Use Explore / general-purpose **subagents** for broad searches so file dumps stay out of the main context.
- Verify data by **importing/requiring the aggregator** (Node ESM) instead of running the full app when no device is available. Caveat: plain Node rejects extensionless / directory imports that Metro allows — so generated files use explicit `./index.js` and `.js` extensions, making them verifiable in Node *and* Metro.
- Plan non-trivial multi-file work before coding; make targeted changes rather than large rewrites.

## Verify / run
- Structural + data verification is done by importing aggregators; visual confirmation needs `expo start` (or `/run`). RN UI can't run headlessly in this environment.

---

## Syllabus references
The WAEC syllabus extractions that seeded the `constants.js` topic trees are
archived in `BIOLOGY_TOPICS.md` and `PHYSICS_TOPICS.md` (repo root). They are
historical — the authoritative topic list now lives in `constants.js` `SUBJECTS`.
