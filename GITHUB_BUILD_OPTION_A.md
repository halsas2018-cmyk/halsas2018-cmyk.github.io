# Build the release APK on GitHub (Option A — push to main)

Pushing to `main` automatically triggers the GitHub Actions workflow that builds a
signed release APK. No local Android SDK needed.

## Prerequisites (one-time, already done)
The four repo secrets must be set at **Settings → Secrets and variables → Actions**:
- `KEYSTORE_PASSPHRASE`
- `ANDROID_KEY_ALIAS` (currently `scipractice`)
- `ANDROID_STORE_PASSWORD`
- `ANDROID_KEY_PASSWORD`

Only the encrypted `my-release-key.keystore.gpg` is committed — never the raw
keystore or `KEYSTORE_CREDENTIALS.txt` (both gitignored).

## Steps
1. Stage your changes:
   ```bash
   git add .
   ```
2. Commit:
   ```bash
   git commit -m "Add 20 virtual labs"
   ```
3. Push to main (this starts the build automatically):
   ```bash
   git push origin main
   ```
4. Wait ~15 minutes for the workflow to finish.

## Get the APK
- Open the workflow run (Actions → Android APK Build, or watch the push's run).
- Go to **Artifacts** → **SciPractice-Release-APK** (a zip).
- Download, unzip → `app-release.apk`. Note: the **zip is ~37 MB**, but the unzipped
  `app-release.apk` is **~87 MB** (the zip is just compressed).
- Install on a device or upload to Google Play.

## Notes
- The `hermesc SIGILL` error from a local `npx expo export` does NOT happen in CI —
  that is only this sandbox's emulated CPU. The GitHub runner compiles Hermes fine.
- All four secrets must be present or the build fails at the decrypt/sign step.
- If the keystore or passphrase is ever lost, existing installs can't be updated
  over-the-air — back them up offline.

## Making the APK smaller
The CI release APK (`app-release.apk`) is **~87 MB uncompressed** (the ~37 MB figure is
the downloaded zip, which is just compressed). That's a genuinely large APK, so the
levers below are worth applying. The size is almost certainly a **universal** APK
bundling all ABIs (`armeabi-v7a`, `arm64-v8a`, `x86_64`) into one file — splitting per
ABI is the single biggest win.

Standard Expo / React-Native Android size levers (confirm against the Expo SDK 56 docs
before changing anything in `app.json` / `android/app/build.gradle`):

1. **ABI splits** — build per-ABI APKs (`--split-per-abi`, or `abiFilters` for
   `armeabi-v7a`, `arm64-v8a`, `x86_64`) instead of one fat universal APK. A
   per-ABI `arm64-v8a` APK is far smaller than the universal build.
2. **Hermes** — keep the Hermes engine enabled (bytecode, not JSC). Verify it's on for
   SDK 56 in `app.json` / `android/app/build.gradle`.
3. **R8 / ProGuard minification + shrinking** — enable on the `release` build type to
   strip dead code and unused resources.
4. **Build AAB instead of APK** for the Play Store — Google delivers a per-device APK,
   so users download only what their device needs.
5. **Trim assets** — `@expo/vector-icons` pulls in many fonts; drop unused ones, and
   compress/remove any bundled images. (The committed encrypted
   `my-release-key.keystore.gpg` is NOT packaged into the APK, so it's not a factor.)

> Do not change library versions or the Expo/React-Native SDK to chase size — that
> risks breaking the build. Apply the levers above only after confirming the current
> artifact size and reading the SDK 56 docs.
