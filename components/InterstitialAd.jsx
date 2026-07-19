import { useEffect, useRef } from "react";
import { InterstitialAd, AdEventType, TestIds, mobileAds } from "react-native-google-mobile-ads";

const AD_UNIT_ID = __DEV__
  ? TestIds.INTERSTITIAL
  : "ca-app-pub-2857595249161834/3803892481";

const MAX_RETRIES = 6;

export function useInterstitialAd(onAdClosed) {
  const adRef = useRef(null);
  const retryTimer = useRef(null);
  const retries = useRef(0);

  useEffect(() => {
    const ad = InterstitialAd.createForAdRequest(AD_UNIT_ID);
    adRef.current = ad;
    let cancelled = false;

    const unsubscribeLoaded = ad.addAdEventListener(AdEventType.LOADED, () => {
      retries.current = 0;
    });
    const unsubscribeClosed = ad.addAdEventListener(AdEventType.CLOSED, () => {
      onAdClosed();
      ad.load(); // preload the next one (caching)
    });
    const unsubscribeError = ad.addAdEventListener(AdEventType.ERROR, () => {
      if (retries.current < MAX_RETRIES) {
        retries.current += 1;
        retryTimer.current = setTimeout(() => ad.load(), 8000);
      }
    });

    // Gate the initial load on SDK init. App.js also calls initialize(); this is
    // idempotent, but loading before init silently fails (the root cause of no ads).
    mobileAds().initialize().finally(() => {
      if (!cancelled) ad.load();
    });

    return () => {
      cancelled = true;
      unsubscribeLoaded();
      unsubscribeClosed();
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
