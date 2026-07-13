import React, { createContext, useContext, useRef } from "react";
import { useInterstitialAd } from "./InterstitialAd";
import { useRewardedInterstitial } from "./RewardedInterstitialAd";
import { useRewardedAd } from "./RewardedAd";

// Frequency only — NO time cooldown (ads served on session count)
const QUIZ_SESSION_MOD = 4; // quiz→result interstitial every 4th finished session
const RESULT_TAP_MOD = 3;   // result→topics interstitial every 3rd tap

const AdContext = createContext(null);

export function AdProvider({ children }) {
  // Pending on-done callbacks (the screen supplies what to do after the ad closes)
  const quizDone = useRef(null);
  const topicsDone = useRef(null);
  const examDone = useRef(null);
  const resultViewDone = useRef(null);
  const unlockDone = useRef(null);

  // Counters
  const quizSessionCount = useRef(0);
  const resultTapCount = useRef(0);

  // Three normal-interstitial instances (one per trigger) — all use the same unit ID
  const { showAd: showQuizInt } = useInterstitialAd(() => {
    quizDone.current && quizDone.current();
  });
  const { showAd: showTopicsInt } = useInterstitialAd(() => {
    topicsDone.current && topicsDone.current();
  });
  const { showAd: showExamInt } = useInterstitialAd(() => {
    examDone.current && examDone.current();
  });

  // Rewarded-interstitial for viewing past results (History / Lab reports)
  const { showAd: showResultViewInt } = useRewardedInterstitial(() => {
    resultViewDone.current && resultViewDone.current();
  });

  // Rewarded ad for unlocking (locked topics / ready lab sims)
  const { showAd: showUnlock } = useRewardedAd(() => {
    unlockDone.current && unlockDone.current();
  });

  // Immediately after finishing a quiz session — every 4th finished session
  const maybeQuizComplete = (onDone) => {
    quizDone.current = onDone;
    quizSessionCount.current += 1;
    if (quizSessionCount.current % QUIZ_SESSION_MOD === 0) {
      showQuizInt();
    } else {
      onDone();
    }
  };

  // Result → Topics — every 3rd tap
  const maybeResultToTopics = (onDone) => {
    topicsDone.current = onDone;
    resultTapCount.current += 1;
    if (resultTapCount.current % RESULT_TAP_MOD === 0) {
      showTopicsInt();
    } else {
      onDone();
    }
  };

  // Launching a Final Exam
  const showExamLaunch = (onDone) => {
    examDone.current = onDone;
    showExamInt();
  };

  // Viewing a previous result (History / Lab report) — rewarded-interstitial
  const showResultView = (onDone) => {
    resultViewDone.current = onDone;
    showResultViewInt();
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
