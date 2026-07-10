import { useEffect, useRef } from "react";
import { RewardedAd, RewardedAdEventType, TestIds } from "react-native-google-mobile-ads";

const AD_UNIT_ID = __DEV__
  ? TestIds.REWARDED
  : "ca-app-pub-2857595249161834/3777760768";

export function useRewardedAd(onRewarded) {
  const adRef = useRef(null);

  useEffect(() => {
    const ad = RewardedAd.createForAdRequest(AD_UNIT_ID);
    adRef.current = ad;

    const unsubscribeLoaded = ad.addAdEventListener(RewardedAdEventType.LOADED, () => {
      console.log("Rewarded ad loaded");
    });

    const unsubscribeEarned = ad.addAdEventListener(RewardedAdEventType.EARNED_REWARD, () => {
      onRewarded();
    });

    ad.load();

    return () => {
      unsubscribeLoaded();
      unsubscribeEarned();
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
