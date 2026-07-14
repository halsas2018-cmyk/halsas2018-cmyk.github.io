// Splice a banner placeholder into a list so the ad renders MID-scroll
// (far more visible than a bottom footer). Consuming FlatList screens
// branch on `item.__bannerAd` inside renderItem and key off `item.id`.
export function withInlineBanner(data, after = 4) {
  if (!Array.isArray(data) || data.length <= after) return data;
  return [
    ...data.slice(0, after),
    { __bannerAd: true, id: "__inline_banner_ad" },
    ...data.slice(after),
  ];
}
