/**
 * Patches the Expo-generated android/app/build.gradle so the `release`
 * build type is signed with OUR keystore (read from gradle.properties)
 * instead of the default debug key.
 *
 * `expo prebuild --clean` regenerates this file on every CI run, so this
 * script must run AFTER prebuild and BEFORE `./gradlew assembleRelease`.
 *
 * The signing properties (MYAPP_UPLOAD_*) are written to android/gradle.properties
 * by the workflow. They are only consumed when present, so a local debug build
 * is unaffected.
 */
const fs = require('fs');
const path = require('path');

const BUILD_GRADLE = path.join(__dirname, '..', 'android', 'app', 'build.gradle');

if (!fs.existsSync(BUILD_GRADLE)) {
  console.error(`[patch-signing] ERROR: ${BUILD_GRADLE} not found. Run \`expo prebuild\` first.`);
  process.exit(1);
}

let content = fs.readFileSync(BUILD_GRADLE, 'utf8');

// 1) Add a `release` signingConfig next to the existing `debug` one.
const DEBUG_BLOCK = `        debug {
            storeFile file('debug.keystore')
            storePassword 'android'
            keyAlias 'androiddebugkey'
            keyPassword 'android'
        }`;

const DEBUG_BLOCK_PATCHED = `${DEBUG_BLOCK}
        release {
            if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
                storeFile file(MYAPP_UPLOAD_STORE_FILE)
                storePassword MYAPP_UPLOAD_STORE_PASSWORD
                keyAlias MYAPP_UPLOAD_KEY_ALIAS
                keyPassword MYAPP_UPLOAD_KEY_PASSWORD
            }
        }`;

if (content.includes(DEBUG_BLOCK_PATCHED)) {
  console.log('[patch-signing] release signingConfig already present — skipping.');
} else if (content.includes(DEBUG_BLOCK)) {
  content = content.replace(DEBUG_BLOCK, DEBUG_BLOCK_PATCHED);
  console.log('[patch-signing] added release signingConfig.');
} else {
  console.error('[patch-signing] ERROR: could not locate the debug signingConfig block.');
  process.exit(1);
}

// 2) Point the `release` build type at our release signingConfig.
const RELEASE_BLOCK = `        release {
            // Caution! In production, you need to generate your own keystore file.
            // see https://reactnative.dev/docs/signed-apk-android.
            signingConfig signingConfigs.debug`;

const RELEASE_BLOCK_PATCHED = `        release {
            signingConfig signingConfigs.release`;

if (content.includes(RELEASE_BLOCK_PATCHED)) {
  console.log('[patch-signing] release build type already uses release signingConfig — skipping.');
} else if (content.includes(RELEASE_BLOCK)) {
  content = content.replace(RELEASE_BLOCK, RELEASE_BLOCK_PATCHED);
  console.log('[patch-signing] release build type now signed with release keystore.');
} else {
  console.error('[patch-signing] ERROR: could not locate the release build type signingConfig line.');
  process.exit(1);
}

fs.writeFileSync(BUILD_GRADLE, content);
console.log('[patch-signing] done.');
