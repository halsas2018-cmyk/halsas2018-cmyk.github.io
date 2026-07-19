import { useEffect, useRef } from "react";
import { RewardedAd, RewardedAdEventType, AdEventType, TestIds, mobileAds } from "react-native-google-mobile-ads";

const AD_UNIT_ID = __DEV__
  ? TestIds.REWARDED
  : "ca-app-pub-2857595249161834/3777760768";

const MAX_RETRIES = 6;

export function useRewardedAd(onRewarded) {
  const adRef = useRef(null);
  const retryTimer = useRef(null);
  const retries = useRef(0);

  useEffect(() => {
    const ad = RewardedAd.createForAdRequest(AD_UNIT_ID);
    adRef.current = ad;
    let cancelled = false;

    const unsubscribeLoaded = ad.addAdEventListener(RewardedAdEventType.LOADED, () => {
      retries.current = 0;
      console.log("Rewarded ad loaded");
    });
    const unsubscribeEarned = ad.addAdEventListener(RewardedAdEventType.EARNED_REWARD, () => {
      onRewarded();
    });
    const unsubscribeClosed = ad.addAdEventListener(AdEventType.CLOSED, () => {
      // Reload the next rewarded ad so it's preloaded for the next unlock/lab start.
      ad.load();
    });
    const unsubscribeError = ad.addAdEventListener(AdEventType.ERROR, () => {
      if (retries.current < MAX_RETRIES) {
        retries.current += 1;
        retryTimer.current = setTimeout(() => ad.load(), 8000);
      }
    });

    mobileAds().initialize().finally(() => {
      if (!cancelled) ad.load();
    });

    return () => {
      cancelled = true;
      unsubscribeLoaded();
      unsubscribeEarned();
      unsubscribeClosed();
      unsubscribeError();
      if (retryTimer.current) clearTimeout(retryTimer.current);
    };
  }, []);

  function showAd() {
    if (adRef.current?.loaded) {
      adRef.current.show();
    } else {
      onRewarded();
    }
  }

  return { showAd };
}
