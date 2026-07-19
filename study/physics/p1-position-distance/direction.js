export default [
  {
    heading: "Why direction matters",
    body: "Direction tells you WHERE a point lies relative to a reference, not merely how far. It is essential whenever a quantity is a vector, because a vector has both magnitude and direction and the direction is half the information. Two movements of equal distance but different directions end at different places, so ignoring direction loses the answer. Stating direction turns a bare length into a located position.",
  },
  {
    heading: "Bearings — clockwise from North",
    body: "A bearing is a direction given as an angle measured clockwise from North, always written as a three-digit number. Due East is 090°, South is 180°, and North-West is 315°; the leading zero (e.g. 045°) is kept for consistency. Bearings are the language of navigation, surveying and many exam vector questions because they fix a direction unambiguously on a compass rose.",
  },
  {
    heading: "Using a compass and a protractor",
    body: "A magnetic compass shows the North direction, giving you the reference line from which to measure. A protractor then measures the angle between that North line and your target direction, or between any line and a chosen reference axis. In practice you draw the North line first, place the protractor's centre on the point, and read the clockwise angle. These two cheap tools let you locate and plot directions on paper.",
  },
  {
    heading: "Direction by reference axes and angles",
    body: "Instead of bearings you can fix direction by the angle a line makes with a reference axis such as the positive X-axis. A point 5 m away at 30° above the axis has components 5cos30° ≈ 4.33 m horizontally and 5sin30° = 2.5 m vertically. Resolving into components is how directions are combined mathematically and is the bridge between 'a direction' and the X,Y coordinates of position.",
  },
  {
    heading: "Graphical location and scale diagrams",
    body: "Direction is often shown graphically: draw a line of chosen scale in the stated direction (bearing or axis-angle) from a point, then read off positions. A scale of 1 cm = 1 km turns a 5 km, 060° displacement into a 5 cm line at 60° clockwise from North. Such diagrams let you add several displacements tip-to-tail and find a resultant by measurement, which is exactly how navigators and engineers sketch a route.",
  },
  {
    heading: "Worked example — bearing and components",
    body: "A boat sails 10 km on a bearing of 060° from a harbour. Its eastward component is 10 sin60° ≈ 8.66 km and its northward component is 10 cos60° = 5.0 km, because bearing is measured from North. So the boat ends at about (8.66 km E, 5.0 km N) of the harbour. Converting the bearing into components is what lets the motion be added to any other displacement.",
  }
];
