export default [
  {
    heading: "What humidity is",
    body: "Humidity is the amount of water vapour present in the air. The absolute humidity is the mass of water vapour per unit volume of air, but the more useful idea is relative humidity, which compares how much vapour is actually present with the maximum the air could hold at that temperature. Air 'holds' more vapour when warm (its SVP is higher) and less when cold, so the same absolute amount feels very different in summer and winter. Humidity governs comfort, drying, and the formation of dew, fog and rain.",
  },
  {
    heading: "Relative humidity (RH)",
    body: "Relative humidity is the ratio of the actual vapour pressure of the air to the saturated vapour pressure (SVP) at that same temperature, expressed as a percentage: RH = (actual vapour pressure / SVP) × 100%. When RH = 100% the air is saturated and cannot hold more vapour, so condensation begins. A low RH (e.g. 30%) means the air is dry and evaporation is rapid; a high RH (e.g. 90%) means the air is near saturation and feels muggy, with slow drying.",
  },
  {
    heading: "The dew point",
    body: "The dew point is the temperature to which air must be cooled (at constant pressure and vapour content) for it to become saturated, i.e. for its RH to reach 100%. Below this temperature the excess vapour condenses into liquid water. The dew point is found directly from the SVP curve: read the temperature at which the air's actual vapour pressure equals the SVP. A dew point close to the current temperature means high humidity and a strong chance of condensation.",
  },
  {
    heading: "The wet-and-dry-bulb hygrometer",
    body: "This common instrument has two identical thermometers, one with a dry bulb and one with a bulb kept wet by a wick. Evaporation from the wet bulb cools it, so its reading is lower than the dry bulb; the greater the difference, the lower the humidity (fast evaporation means dry air). The two readings are entered into published psychrometric tables (or a formula using the SVP at each temperature) to give the relative humidity and dew point. It is simple, needs no power, and is the standard school method for estimating atmospheric humidity.",
  },
  {
    heading: "Other ways to measure humidity",
    body: "Besides the wet-and-dry-bulb hygrometer, humidity is measured by a hair hygrometer (human hair lengthens as humidity rises), by electronic capacitance sensors in weather stations, and by cooling a polished surface until dew just appears (a dew-point hygrometer) to read the dew point directly. Each trades robustness, cost or precision differently, but all ultimately relate the measured quantity back to the ratio of actual vapour pressure to SVP at the air temperature.",
  },
  {
    heading: "Formation of dew",
    body: "On a clear, calm night the ground and plants radiate heat away and cool below the dew point of the surrounding air. The air in contact with these cold surfaces becomes saturated, and the excess water vapour condenses as droplets on grass, leaves and car roofs — dew. Calm, cloudless conditions matter because wind mixes the air and clouds reflect heat back; that is why heavy dew forms on still, clear nights and rarely when it is windy or overcast.",
  },
  {
    heading: "Formation of fog and mist",
    body: "Fog and mist form when air near the ground cools to its dew point so that countless tiny water droplets condense around dust or salt particles, reducing visibility. The difference between fog and mist is only density (fog is thicker, cutting visibility to under 1 km). It commonly appears when moist air passes over a cold surface or when night cooling lowers ground-level air below its dew point; radiation fog on clear nights and advection fog over cold seas are the two main types.",
  },
  {
    heading: "Formation of rain",
    body: "Rain begins as moist air rises (over hills, in storms, or where warm and cool air meet) and cools. Once it drops below its dew point the water vapour condenses onto tiny particles to form cloud droplets, which grow by colliding and coalescing until they are heavy enough to fall. Dust, salt and smoke act as condensation nuclei that make droplet formation easier. The whole process is driven by cooling below the dew point on a large scale, the same physics as dew but in the sky.",
  },
  {
    heading: "Humidity and the weather",
    body: "Meteorologists use humidity, dew point and the temperature–dew-point gap to forecast fog, dew, rain and comfort. A small gap signals imminent condensation (fog or rain); a large gap means dry, clear conditions. Humidity also drives the 'feels-like' temperature — high humidity on a hot day hinders sweating and makes it feel hotter, while low humidity makes cold air feel drier and harsher. Understanding humidity thus links daily comfort to weather prediction.",
  },
  {
    heading: "Worked example — relative humidity",
    body: "On a day when the air temperature is 25 °C its SVP is about 3.17 kPa. If the actual vapour pressure is measured as 1.58 kPa, the relative humidity is RH = (1.58 / 3.17) × 100% ≈ 50%. If the air is then cooled to 14 °C, where the SVP is about 1.58 kPa, the RH reaches 100% and 14 °C is the dew point — any further cooling forces condensation as dew or fog. This shows how cooling alone, with no change in vapour content, can saturate the air.",
  },
];
