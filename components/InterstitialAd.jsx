import { useEffect, useRef } from "react";
import { InterstitialAd, AdEventType, TestIds } from "react-native-google-mobile-ads";

const AD_UNIT_ID = __DEV__
  ? TestIds.INTERSTITIAL
  : "ca-app-pub-2857595249161834/3803892481";

export function useInterstitialAd(onAdClosed) {
  const adRef = useRef(null);

  useEffect(() => {
    const ad = InterstitialAd.createForAdRequest(AD_UNIT_ID);
    adRef.current = ad;

    const unsubscribeClosed = ad.addAdEventListener(AdEventType.CLOSED, () => {
      onAdClosed();
      ad.load();
    });

    ad.load();

    return () => {
      unsubscribeClosed();
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
