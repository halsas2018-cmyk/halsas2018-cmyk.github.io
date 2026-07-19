import { useEffect, useRef } from "react";
import { RewardedInterstitialAd, AdEventType, RewardedAdEventType, TestIds, MobileAds as mobileAds } from "react-native-google-mobile-ads";

const AD_UNIT_ID = __DEV__
  ? TestIds.REWARDED_INTERSTITIAL
  : "ca-app-pub-2857595249161834/2273107404";

const MAX_RETRIES = 6;

export function useRewardedInterstitial(onAdClosed) {
  const adRef = useRef(null);
  const retryTimer = useRef(null);
  const retries = useRef(0);

  useEffect(() => {
    const ad = RewardedInterstitialAd.createForAdRequest(AD_UNIT_ID);
    adRef.current = ad;
    let cancelled = false;

    const unsubscribeLoaded = ad.addAdEventListener(AdEventType.LOADED, () => {
      retries.current = 0;
    });
    const unsubscribeClosed = ad.addAdEventListener(AdEventType.CLOSED, () => {
      onAdClosed();
      ad.load(); // preload the next one (caching)
    });
    const unsubscribeEarned = ad.addAdEventListener(RewardedAdEventType.EARNED_REWARD, () => {
      console.log("Reward earned");
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
      unsubscribeClosed();
      unsubscribeEarned();
      unsubscribeError();
      if (retryTimer.current) clearTimeout(retryTimer.current);
    };
  }, []);

  function showAd() {
    if (adRef.current?.loaded) {
      adRef.current.show();
    } else {
      onAdClosed();
    }
  }

  return { showAd };
}
