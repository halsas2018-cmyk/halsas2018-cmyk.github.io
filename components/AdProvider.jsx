import React, { createContext, useContext, useRef } from "react";
import { useInterstitialAd } from "./InterstitialAd";
import { useRewardedInterstitial } from "./RewardedInterstitialAd";
import { useRewardedAd } from "./RewardedAd";

// Cooldowns (ms)
const NORMAL_COOLDOWN = 90 * 1000; // normal interstitials: quiz/done, result→topics, exam launch
const RESULT_VIEW_COOLDOWN = 60 * 1000; // rewarded-interstitial for viewing past results

// Frequency
const QUIZ_SESSION_MOD = 4; // show quiz-complete interstitial every 4th finished session
const RESULT_TAP_MOD = 3; // show result→topics interstitial every 3rd tap

const AdContext = createContext(null);

export function AdProvider({ children }) {
  // Pending on-done callbacks (the screen supplies what to do after the ad closes)
  const quizDone = useRef(null);
  const topicsDone = useRef(null);
  const examDone = useRef(null);
  const resultViewDone = useRef(null);
  const unlockDone = useRef(null);

  // Counters + cooldown timestamps
  const quizSessionCount = useRef(0);
  const resultTapCount = useRef(0);
  const lastNormalAdAt = useRef(0);
  const lastResultViewAdAt = useRef(0);

  // Three normal-interstitial instances (one per trigger) — all use the same unit ID
  const { showAd: showQuizInt } = useInterstitialAd(() => {
    lastNormalAdAt.current = Date.now();
    quizDone.current && quizDone.current();
  });
  const { showAd: showTopicsInt } = useInterstitialAd(() => {
    lastNormalAdAt.current = Date.now();
    topicsDone.current && topicsDone.current();
  });
  const { showAd: showExamInt } = useInterstitialAd(() => {
    lastNormalAdAt.current = Date.now();
    examDone.current && examDone.current();
  });

  // Rewarded-interstitial for viewing past results (History / Lab reports)
  const { showAd: showResultViewInt } = useRewardedInterstitial(() => {
    lastResultViewAdAt.current = Date.now();
    resultViewDone.current && resultViewDone.current();
  });

  // Rewarded ad for unlocking (locked topics / ready lab sims)
  const { showAd: showUnlock } = useRewardedAd(() => {
    unlockDone.current && unlockDone.current();
  });

  // Immediately after finishing a quiz session — every 4th session + 90s cooldown
  const maybeQuizComplete = (onDone) => {
    quizDone.current = onDone;
    quizSessionCount.current += 1;
    if (
      quizSessionCount.current % QUIZ_SESSION_MOD === 0 &&
      Date.now() - lastNormalAdAt.current >= NORMAL_COOLDOWN
    ) {
      showQuizInt();
    } else {
      onDone();
    }
  };

  // Result → Topics — every 3rd tap + 90s cooldown
  const maybeResultToTopics = (onDone) => {
    topicsDone.current = onDone;
    resultTapCount.current += 1;
    if (
      resultTapCount.current % RESULT_TAP_MOD === 0 &&
      Date.now() - lastNormalAdAt.current >= NORMAL_COOLDOWN
    ) {
      showTopicsInt();
    } else {
      onDone();
    }
  };

  // Launching a Final Exam — 90s cooldown
  const showExamLaunch = (onDone) => {
    examDone.current = onDone;
    if (Date.now() - lastNormalAdAt.current >= NORMAL_COOLDOWN) {
      showExamInt();
    } else {
      onDone();
    }
  };

  // Viewing a previous result (History / Lab report) — rewarded-interstitial, 60s cooldown
  const showResultView = (onDone) => {
    resultViewDone.current = onDone;
    if (Date.now() - lastResultViewAdAt.current >= RESULT_VIEW_COOLDOWN) {
      showResultViewInt();
    } else {
      onDone();
    }
  };

  // Unlock a locked topic / start a ready lab sim — rewarded ad, proceeds on reward
  const unlockWithRewarded = (onDone) => {
    unlockDone.current = onDone;
    showUnlock();
  };

  return (
    <AdContext.Provider
      value={{ maybeQuizComplete, maybeResultToTopics, showExamLaunch, showResultView, unlockWithRewarded }}
    >
      {children}
    </AdContext.Provider>
  );
}

export function useAds() {
  const ctx = useContext(AdContext);
  if (!ctx) throw new Error("useAds must be used within an AdProvider");
  return ctx;
}
