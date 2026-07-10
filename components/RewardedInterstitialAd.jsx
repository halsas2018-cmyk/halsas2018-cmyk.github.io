import { useEffect, useRef } from "react";
import { RewardedInterstitialAd, AdEventType, RewardedAdEventType, TestIds } from "react-native-google-mobile-ads";

const AD_UNIT_ID = __DEV__
  ? TestIds.REWARDED_INTERSTITIAL
  : "ca-app-pub-2857595249161834/2273107404";

export function useRewardedInterstitial(onAdClosed) {
  const adRef = useRef(null);

  useEffect(() => {
    const ad = RewardedInterstitialAd.createForAdRequest(AD_UNIT_ID);
    adRef.current = ad;

    const unsubscribeClosed = ad.addAdEventListener(AdEventType.CLOSED, () => {
      onAdClosed();
      ad.load();
    });

    const unsubscribeEarned = ad.addAdEventListener(RewardedAdEventType.EARNED_REWARD, () => {
      console.log("Reward earned");
    });

    ad.load();

    return () => {
      unsubscribeClosed();
      unsubscribeEarned();
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
