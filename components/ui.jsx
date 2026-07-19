import React, { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import Svg, { Circle } from "react-native-svg";
import { useTheme, hexToRgba } from "../theme";
import { haptic } from "../haptic";

// ── Pressable ───────────────────────────────────────────────────────────
// A TouchableWithoutFeedback that springs to `scale` on press-in and back
// on release, and fires a light haptic on every tap. Use it in place of a
// flat TouchableOpacity to make every tap feel responsive. Renders its
// child inside the animated view.
export function Pressable({
  onPress,
  style,
  children,
  disabled,
  scale = 0.97,
  hitSlop,
  haptics = true,
  accessibilityRole,
  accessibilityLabel,
}) {
  const sv = useRef(new Animated.Value(1)).current;
  const press = (to) =>
    Animated.spring(sv, { toValue: to, useNativeDriver: true, tension: 120, friction: 7 }).start();

  const handlePress = (...args) => {
    if (disabled) return;
    if (haptics) haptic.light();
    if (onPress) onPress(...args);
  };

  return (
    <TouchableWithoutFeedback
      onPress={disabled ? undefined : handlePress}
      onPressIn={() => !disabled && press(scale)}
      onPressOut={() => press(1)}
      disabled={disabled}
      hitSlop={hitSlop}
      accessibilityRole={accessibilityRole}
      accessibilityLabel={accessibilityLabel}
    >
      <Animated.View style={[style, { transform: [{ scale: sv }] }]}>
        {children}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

// ── Gradient ─────────────────────────────────────────────────────────────
export function Gradient({ colors = ["#16a34a", "#15803d"], style, children }) {
  return (
    <LinearGradient colors={colors} style={style}>
      {children}
    </LinearGradient>
  );
}

// ── BlurCard ────────────────────────────────────────────────────────────
// Frosted-glass surface (premium headers / modals). Tint follows scheme.
export function BlurCard({ style, children, intensity = 70, tint }) {
  const theme = useTheme();
  const t = tint || (theme.isDark ? "dark" : "light");
  return (
    <View style={[styles.blurWrap, style]}>
      <BlurView intensity={intensity} tint={t} style={StyleSheet.absoluteFill} />
      <View style={StyleSheet.absoluteFill}>{children}</View>
    </View>
  );
}

// ── ProgressRing ─────────────────────────────────────────────────────────
// Circular SVG progress (0..1). Drop-in replacement for a linear track.
export function ProgressRing({
  size = 64,
  stroke = 8,
  progress = 0,
  color = "#16a34a",
  trackColor,
  children,
  style,
}) {
  const theme = useTheme();
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const p = Math.min(1, Math.max(0, progress));
  const off = c * (1 - p);
  return (
    <View style={[styles.ringWrap, { width: size, height: size }, style]}>
      <Svg width={size} height={size} style={StyleSheet.absoluteFill}>
        <Circle cx={size / 2} cy={size / 2} r={r} stroke={trackColor || theme.colors.border} strokeWidth={stroke} fill="none" />
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke={color}
          strokeWidth={stroke}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={off}
        />
      </Svg>
      {children}
    </View>
  );
}

// ── Confetti ─────────────────────────────────────────────────────────────
// Zero-dependency celebration burst. Render it (active=true) on a pass.
export function Confetti({
  active = true,
  count = 22,
  colors = ["#16a34a", "#22c55e", "#2563eb", "#f59e0b", "#7c3aed", "#ef4444"],
}) {
  const W = Dimensions.get("window").width;
  const anims = useRef(Array.from({ length: count }, () => new Animated.Value(0))).current;

  useEffect(() => {
    if (!active) return;
    anims.forEach((a, i) => {
      a.setValue(0);
      Animated.timing(a, {
        toValue: 1,
        duration: 1500 + (i % 5) * 140,
        delay: (i % 6) * 55,
        useNativeDriver: true,
      }).start();
    });
  }, [active]);

  if (!active) return null;

  return (
    <View style={styles.confettiLayer} pointerEvents="none">
      {anims.map((a, i) => {
        const left = (i * 53) % (W - 24);
        const color = colors[i % colors.length];
        const rotate = a.interpolate({ inputRange: [0, 1], outputRange: ["0deg", "540deg"] });
        const translateY = a.interpolate({ inputRange: [0, 1], outputRange: [-30, 460] });
        const opacity = a.interpolate({ inputRange: [0, 0.85, 1], outputRange: [1, 1, 0] });
        return (
          <Animated.View
            key={i}
            style={[styles.confettiPiece, { left, backgroundColor: color, transform: [{ translateY }, { rotate }], opacity }]}
          />
        );
      })}
    </View>
  );
}

// ── SkeletonCard ────────────────────────────────────────────────────────
// Shimmer placeholder shown while the lazy question bank resolves.
export function SkeletonCard({ width = "100%", height = 80, radius = 12, style }) {
  const shimmer = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(Animated.timing(shimmer, { toValue: 1, duration: 1000, useNativeDriver: false })).start();
  }, []);
  const theme = useTheme();
  const bg = shimmer.interpolate({
    inputRange: [0, 1],
    outputRange: [theme.colors.borderSoft, theme.colors.surfaceAlt],
  });
  return <Animated.View style={[styles.skel, { width, height, borderRadius: radius, backgroundColor: bg }, style]} />;
}

const styles = StyleSheet.create({
  blurWrap: { borderRadius: 18, overflow: "hidden" },
  ringWrap: { alignItems: "center", justifyContent: "center" },
  confettiLayer: { ...StyleSheet.absoluteFillObject, zIndex: 50 },
  confettiPiece: { position: "absolute", top: 0, width: 8, height: 14, borderRadius: 2 },
  skel: { borderWidth: 1, borderColor: "rgba(0,0,0,0.04)" },
});
