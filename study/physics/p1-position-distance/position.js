export default [
  {
    heading: "What 'position' means in physics",
    body: "Position is the location of a point in space relative to something else. To state a position you must name a reference point (the origin) and a frame of reference — without them 'here' is meaningless. A position is always a RELATIVE statement: a school is 2 km east of the market only because we chose the market as origin. This is why every map, blueprint and navigation system fixes an origin before it describes anywhere.",
  },
  {
    heading: "Rectangular (Cartesian) coordinates",
    body: "The standard way to state position in three dimensions is with rectangular coordinates X, Y and Z measured along three mutually perpendicular axes. A point is written as an ordered triple such as (3 m, 2 m, 0 m), meaning 3 m along X, 2 m along Y and 0 m along Z from the origin. Using three numbers removes all ambiguity — any point in space is uniquely pinned down. exam expects you to read and plot such coordinates on a grid.",
  },
  {
    heading: "Choosing the origin and the axes",
    body: "The origin is chosen for convenience and need not be a physical object; it is simply the point we call (0, 0, 0). The direction of the positive X, Y and Z axes is also a free choice, decided at the start of the problem and then kept fixed. Because position depends on this choice, two people can honestly quote different coordinates for the same point. What stays invariant is the separation between two points, not the individual coordinates.",
  },
  {
    heading: "Position is a vector quantity",
    body: "A position coordinate carries both a size and a direction from the origin, so the position of a point is a vector (often written r or as the vector r̄). Coordinates can be negative, showing the point lies on the opposite side of the origin along that axis. Treating position as a vector lets you add and subtract positions using the rules of vector algebra, which is the foundation for describing motion.",
  },
  {
    heading: "Change of position is displacement",
    body: "The useful quantity for motion is not an absolute position but the CHANGE in position. If an object moves from r₁ to r₂, its displacement is r₂ − r₁, found by subtracting the coordinates. Because displacement depends only on the start and end points, it is independent of the particular origin you happened to choose. This subtraction step is where the coordinate system earns its keep.",
  },
  {
    heading: "Worked example — relative position",
    body: "Town A is at (0, 0) and town B is at (4 km, 3 km) on a flat map. The displacement from A to B is found by subtraction: (4, 3) − (0, 0) = (4 km, 3 km). Its straight-line distance is √(4² + 3²) = 5 km, and its bearing is tan⁻¹(3/4) ≈ 37° east of north. The coordinates alone told us both how far and in what direction B lies from A.",
  }
];
