import React, { createContext, useContext, useEffect, useState } from "react";
import { Appearance } from "react-native";

// ─── TOKENS ────────────────────────────────────────────────────────────────
// Single source of truth for colors, type scale, spacing, radii and shadows.
// Both light and dark maps share the same KEYS so any screen can switch
// schemes by reading `theme.colors.bg` instead of a hardcoded hex.

const light = {
  isDark: false,
  colors: {
    bg: "#f9fafb",
    surface: "#ffffff",
    surfaceAlt: "#f3f4f6",
    surfaceMuted: "#f8fafc",
    text: "#111827",
    textMuted: "#6b7280",
    textFaint: "#9ca3af",
    border: "#e5e7eb",
    borderSoft: "#f1f5f9",
    primary: "#16a34a",
    primaryDark: "#15803d",
    primarySoft: "rgba(22,163,74,0.12)",
    primarySoft2: "rgba(22,163,74,0.06)",
    onPrimary: "#ffffff",
    accentBlue: "#2563eb",
    accentBlueSoft: "rgba(37,99,235,0.10)",
    accentPurple: "#7c3aed",
    accentPurpleSoft: "rgba(124,58,237,0.10)",
    success: "#16a34a",
    successSoft: "rgba(22,163,74,0.12)",
    danger: "#dc2626",
    dangerSoft: "rgba(220,38,38,0.10)",
    warning: "#d97706",
    warningSoft: "rgba(217,119,6,0.12)",
    star: "#f59e0b",
    starSoft: "rgba(245,158,11,0.14)",
    overlay: "rgba(15,23,42,0.45)",
    white: "#ffffff",
    black: "#000000",
    greenText: "#166534",
  },
  radius: { sm: 10, md: 14, lg: 18, xl: 22, pill: 999 },
  space: { xs: 4, xs2: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32 },
  type: { xs: 11, sm: 12, md: 13, base: 14, lg: 16, xl: 18, xxl: 22, hero: 26, display: 58 },
  shadow: {
    shadowColor: "#0f172a",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 3,
  },
  shadowLg: {
    shadowColor: "#0f172a",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.10,
    shadowRadius: 22,
    elevation: 8,
  },
  shadowSm: {
    shadowColor: "#0f172a",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
};

const dark = {
  isDark: true,
  colors: {
    bg: "#0b0f17",
    surface: "#161b22",
    surfaceAlt: "#1c232d",
    surfaceMuted: "#11161d",
    text: "#f3f4f6",
    textMuted: "#9aa4b2",
    textFaint: "#6b7280",
    border: "#2a313c",
    borderSoft: "#222a34",
    primary: "#22c55e",
    primaryDark: "#16a34a",
    primarySoft: "rgba(34,197,94,0.16)",
    primarySoft2: "rgba(34,197,94,0.08)",
    onPrimary: "#06210f",
    accentBlue: "#60a5fa",
    accentBlueSoft: "rgba(96,165,250,0.14)",
    accentPurple: "#a78bfa",
    accentPurpleSoft: "rgba(167,139,250,0.14)",
    success: "#22c55e",
    successSoft: "rgba(34,197,94,0.16)",
    danger: "#f87171",
    dangerSoft: "rgba(248,113,113,0.14)",
    warning: "#fbbf24",
    warningSoft: "rgba(251,191,36,0.16)",
    star: "#fbbf24",
    starSoft: "rgba(251,191,36,0.16)",
    overlay: "rgba(0,0,0,0.6)",
    white: "#ffffff",
    black: "#000000",
    greenText: "#86efac",
  },
  radius: light.radius,
  space: light.space,
  type: light.type,
  shadow: {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 5,
  },
  shadowLg: {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.45,
    shadowRadius: 24,
    elevation: 10,
  },
  shadowSm: {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 3,
  },
};

const ThemeContext = createContext(light);

export function ThemeProvider({ children }) {
  const scheme = Appearance.getColorScheme();
  const [isDark, setIsDark] = useState(scheme === "dark");

  useEffect(() => {
    const sub = Appearance.addChangeListener(({ colorScheme }) => {
      setIsDark(colorScheme === "dark");
    });
    return () => sub.remove();
  }, []);

  const theme = isDark ? dark : light;
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}

// Convenience: rgba from a #rrggbb hex + alpha (used by translucent headers).
export function hexToRgba(hex, alpha = 1) {
  let h = (hex || "#000000").replace("#", "");
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export const palette = { light, dark };
export default light;
