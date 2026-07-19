export default [
  {
    heading: "What a projectile is",
    body: "A projectile is any object launched into the air that then moves under the action of gravity alone, with no engine, lift or thrust after release. Once it leaves the hand, catapult or barrel, the only force taken into account in the simple model is its weight (mg) acting vertically downward. The curved path it follows is called its trajectory. Examples include a thrown ball, a stone from a slingshot, or a bullet in flight. Air resistance is neglected in the basic treatment, which keeps the maths simple and the path a clean curve.",
  },
  {
    heading: "Two independent motions",
    body: "The key insight is that the horizontal and vertical parts of the motion are independent and are analysed separately. Horizontally there is no force (gravity acts vertically), so the horizontal velocity stays constant. Vertically the object accelerates downward at g ≈ 9.8 m/s², whether it is rising or falling. Because the two directions do not affect each other, you can solve each with its own equation and then recombine them to describe the full path. This separation is what makes projectile problems tractable.",
  },
  {
    heading: "The horizontal motion",
    body: "Let the launch speed be u at angle θ above the horizontal. The horizontal component is uₓ = u cos θ, and because no horizontal force acts, it never changes: x = (u cos θ) t. This means the projectile covers equal horizontal distances in equal times — unlike vertical motion it does not speed up or slow down. Horizontal range therefore grows steadily with time at this fixed speed. If the launch and landing heights are equal, the total time then sets the range directly.",
  },
  {
    heading: "The vertical motion",
    body: "The vertical component is u_y = u sin θ. Under constant downward acceleration g, the height at time t is y = (u sin θ) t − ½ g t², and the vertical velocity is v_y = u sin θ − g t. The object rises until v_y = 0, then falls, gaining speed symmetrically on the way down (in the no-air model). At the top the vertical velocity is momentarily zero while the horizontal velocity is unchanged. These equations are just the constant-acceleration formulae applied to the vertical direction.",
  },
  {
    heading: "The trajectory is a parabola",
    body: "Eliminating t between x = (u cos θ) t and y = (u sin θ) t − ½ g t² gives y = x tan θ − (g / 2u²cos²θ) x². This is the equation of a parabola opening downward — so the trajectory is always a parabola when air resistance is ignored. The shape depends only on u, θ and g. Plotting height against horizontal distance therefore yields the familiar curved arc. Real projectiles deviate from this ideal when drag or wind is significant.",
  },
  {
    heading: "Time of flight",
    body: "Time of flight T is the total time the projectile is in the air. For equal launch and landing heights, the vertical displacement returns to zero, so 0 = (u sin θ) T − ½ g T², giving T = 2u sin θ / g. Only the vertical component and g matter — a faster vertical launch or weaker gravity keeps it airborne longer. Doubling the launch speed doubles the flight time; halving g doubles it too. This formula assumes the start and end are at the same level.",
  },
  {
    heading: "Maximum height",
    body: "Maximum height H is reached when the vertical velocity becomes zero. Using v_y² = u_y² − 2gH with v_y = 0 gives H = u² sin²θ / 2g. It depends only on the vertical launch component and grows with the square of that component, so steeper angles (up to 90°) give greater height. At 45° with u = 20 m/s, H = 400 × 0.5 / 19.6 ≈ 10.2 m. Height and time of flight are linked, since the climb takes half the total flight time.",
  },
  {
    heading: "Range",
    body: "Range R is the horizontal distance covered over the full flight. With constant horizontal speed u cos θ and time T = 2u sin θ / g, R = (u cos θ) T = u² (2 sin θ cos θ) / g = u² sin 2θ / g. The range is maximal when sin 2θ = 1, i.e. θ = 45°, giving R_max = u² / g. For u = 20 m/s at 45°, R = 400 / 9.8 ≈ 40.8 m. Increasing launch speed raises the range as its square.",
  },
  {
    heading: "Worked example — height and time of flight",
    body: "A ball is kicked at 25 m/s at 37° above the horizontal (take g = 9.8 m/s²). The vertical component is u sin θ = 25 × 0.6019 ≈ 15.0 m/s. Time of flight T = 2 × 15.0 / 9.8 ≈ 3.06 s. Maximum height H = 15.0² / (2 × 9.8) = 225 / 19.6 ≈ 11.5 m. So it stays airborne about 3 seconds and rises over 11 metres. The horizontal speed (25 × cos 37° ≈ 20 m/s) is untouched by gravity throughout.",
  },
  {
    heading: "Worked example — range",
    body: "A javelin is thrown at 30 m/s. At the optimum angle of 45°, sin 90° = 1, so the range is R = 30² / 9.8 = 900 / 9.8 ≈ 91.8 m. If instead it is thrown at 30°, R = 30² sin 60° / 9.8 = 900 × 0.866 / 9.8 ≈ 79.5 m; at 60° the same value appears because sin 120° = sin 60°. This shows the symmetric pairing of angles that share a range. Only at 45° is the range greatest for a given speed.",
  },
  {
    heading: "Complementary angles and the 45° rule",
    body: "Because R = u² sin 2θ / g and sin 2θ = sin(180° − 2θ), two launch angles that add to 90° give the same range — for example 30° and 60°, or 25° and 65°. One trajectory is low and flat, the other high and steep, but both land equally far. The single best angle for distance on level ground is 45°, balancing time aloft against horizontal speed. If the landing point is higher or lower than the launch point, the optimum angle shifts away from 45°.",
  },
  {
    heading: "Assumptions and limitations",
    body: "The simple model assumes no air resistance, a uniform gravitational field, a flat Earth, and neglects spin. In reality drag slows the projectile, shortens the range and makes the path asymmetric (steeper descent), and spin produces a Magnus force that curves balls — the reason a football can bend. For short, slow throws the ideal parabola is a good approximation; for shells, rockets or high-speed objects over long distances, drag and Earth's curvature matter and the real path differs noticeably. Always state the assumptions when you quote the standard formulae.",
  },
];
