// Shared SVG apparatus kit for the Virtual Lab simulations.
// Every component renders a self-contained <Svg> in its own local coordinate
// system. Labs position these with absolutely-positioned <View>s and keep their
// existing Animated.View + transform wrappers for moving parts (rotate/swirl),
// swapping the inner plain-<View> shapes for these vector components.
//
// Convention: components take numeric/size props and an optional `liquid`/`color`
// for fill. They are static; animation is applied by the parent lab.
import React from "react";
import Svg, {
  Path,
  Rect,
  Circle,
  Line,
  G,
  Text,
  Polygon,
  Ellipse,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

const C = {
  glass: "#dbeafe",
  glassEdge: "#93c5fd",
  glassDark: "#bfdbfe",
  metal: "#94a3b8",
  metalDark: "#64748b",
  wood: "#a16207",
  woodDark: "#854d0e",
  flame: "#f97316",
  flameCore: "#fde047",
  ink: "#334155",
  inkSoft: "#64748b",
  white: "#ffffff",
};

// ---------- generic helpers ----------

export function Arrow({ x1, y1, x2, y2, color = C.ink, w = 2, label }) {
  const ang = Math.atan2(y2 - y1, x2 - x1);
  const head = 7;
  const hx1 = x2 - head * Math.cos(ang - 0.4);
  const hy1 = y2 - head * Math.sin(ang - 0.4);
  const hx2 = x2 - head * Math.cos(ang + 0.4);
  const hy2 = y2 - head * Math.sin(ang + 0.4);
  return (
    <G>
      <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={w} />
      <Polygon points={`${x2},${y2} ${hx1},${hy1} ${hx2},${hy2}`} fill={color} />
      {label ? (
        <Text x={(x1 + x2) / 2} y={(y1 + y2) / 2 - 4} fontSize="9" fill={color} textAnchor="middle">
          {label}
        </Text>
      ) : null}
    </G>
  );
}

export function Label({ x, y, text, color = C.ink, size = 10 }) {
  return (
    <Text x={x} y={y} fontSize={size} fill={color} textAnchor="middle">
      {text}
    </Text>
  );
}

export function Thermometer({ x = 0, y = 0, h = 90, temp = 0.5, color = "#ef4444" }) {
  const fillH = (h - 16) * Math.max(0, Math.min(1, temp));
  return (
    <G x={x} y={y}>
      <Rect x={6} y={0} width={8} height={h - 10} rx={4} fill={C.white} stroke={C.glassEdge} strokeWidth={1.5} />
      <Circle cx={10} cy={h - 6} r={9} fill={C.white} stroke={C.glassEdge} strokeWidth={1.5} />
      <Rect x={8} y={h - 6 - fillH} width={4} height={fillH} fill={color} />
      <Circle cx={10} cy={h - 6} r={5} fill={color} />
    </G>
  );
}

// ---------- glass containers ----------

export function Beaker({ w = 110, h = 130, fill = 0, color = "#60a5fa", label }) {
  const fh = (h - 14) * Math.max(0, Math.min(1, fill));
  return (
    <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <Defs>
        <LinearGradient id="g" x1="0" y1="0" x2="1" y2="0">
          <Stop offset="0" stopColor={C.glass} stopOpacity="0.9" />
          <Stop offset="1" stopColor={C.glassDark} stopOpacity="0.6" />
        </LinearGradient>
      </Defs>
      {fill > 0 ? (
        <Path
          d={`M10 ${h - 10 - fh} L${w - 10} ${h - 10 - fh} L${w - 6} ${h - 6} L6 ${h - 6} Z`}
          fill={color}
          opacity="0.85"
        />
      ) : null}
      <Path
        d={`M6 8 L${w - 6} 8 L${w - 6} ${h - 6} L6 ${h - 6} Z`}
        fill="url(#g)"
        stroke={C.glassEdge}
        strokeWidth="3"
      />
      <Line x1={6} y1={8} x2={w - 6} y2={8} stroke={C.glassEdge} strokeWidth="3" />
      {label ? <Text x={w / 2} y={h - 16} fontSize="9" fill={C.inkSoft} textAnchor="middle">{label}</Text> : null}
    </Svg>
  );
}

export function ConicalFlask({ w = 130, h = 150, fill = 0, color = "#60a5fa", label }) {
  const neckW = 30;
  const fh = (h - 40) * Math.max(0, Math.min(1, fill));
  return (
    <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <Defs>
        <LinearGradient id="cf" x1="0" y1="0" x2="1" y2="0">
          <Stop offset="0" stopColor={C.glass} stopOpacity="0.9" />
          <Stop offset="1" stopColor={C.glassDark} stopOpacity="0.6" />
        </LinearGradient>
      </Defs>
      {fill > 0 ? (
        <Path
          d={`M${(w - neckW) / 2 - 2} ${h - 38 - fh} L${(w + neckW) / 2 + 2} ${h - 38 - fh} L${w - 6} ${h - 6} L6 ${h - 6} Z`}
          fill={color}
          opacity="0.85"
        />
      ) : null}
      <Path
        d={`M${(w - neckW) / 2} 8 L${(w + neckW) / 2} 8 L${(w + neckW) / 2} 40 L${w - 6} ${h - 6} L6 ${h - 6} L${(w - neckW) / 2} 40 Z`}
        fill="url(#cf)"
        stroke={C.glassEdge}
        strokeWidth="3"
      />
      <Line x1={(w - neckW) / 2} y1={8} x2={(w + neckW) / 2} y2={8} stroke={C.glassEdge} strokeWidth="3" />
      {label ? <Text x={w / 2} y={h - 16} fontSize="9" fill={C.inkSoft} textAnchor="middle">{label}</Text> : null}
    </Svg>
  );
}

export function TestTube({ w = 34, h = 120, fill = 0, color = "#60a5fa" }) {
  const fh = (h - 16) * Math.max(0, Math.min(1, fill));
  return (
    <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <Defs>
        <LinearGradient id="tt" x1="0" y1="0" x2="1" y2="0">
          <Stop offset="0" stopColor={C.glass} stopOpacity="0.9" />
          <Stop offset="1" stopColor={C.glassDark} stopOpacity="0.6" />
        </LinearGradient>
      </Defs>
      {fill > 0 ? <Rect x={4} y={h - 12 - fh} width={w - 8} height={fh} fill={color} opacity="0.85" /> : null}
      <Path
        d={`M4 6 L${w - 4} 6 L${w - 4} ${h - 6} Q${w / 2} ${h} 4 ${h - 6} Z`}
        fill="url(#tt)"
        stroke={C.glassEdge}
        strokeWidth="2.5"
      />
    </Svg>
  );
}

export function BoilingTube({ w = 46, h = 150, fill = 0, color = "#60a5fa" }) {
  const fh = (h - 16) * Math.max(0, Math.min(1, fill));
  return (
    <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <Defs>
        <LinearGradient id="bt" x1="0" y1="0" x2="1" y2="0">
          <Stop offset="0" stopColor={C.glass} stopOpacity="0.9" />
          <Stop offset="1" stopColor={C.glassDark} stopOpacity="0.6" />
        </LinearGradient>
      </Defs>
      {fill > 0 ? <Rect x={4} y={h - 12 - fh} width={w - 8} height={fh} fill={color} opacity="0.85" /> : null}
      <Path
        d={`M4 8 L${w - 4} 8 L${w - 4} ${h - 8} Q${w / 2} ${h + 10} 4 ${h - 8} Z`}
        fill="url(#bt)"
        stroke={C.glassEdge}
        strokeWidth="2.5"
      />
    </Svg>
  );
}

export function RoundBottomFlask({ w = 120, h = 140, fill = 0, color = "#60a5fa" }) {
  const fh = 56 * Math.max(0, Math.min(1, fill));
  return (
    <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <Defs>
        <LinearGradient id="rb" x1="0" y1="0" x2="1" y2="0">
          <Stop offset="0" stopColor={C.glass} stopOpacity="0.9" />
          <Stop offset="1" stopColor={C.glassDark} stopOpacity="0.6" />
        </LinearGradient>
      </Defs>
      {fill > 0 ? <Ellipse cx={w / 2} cy={h - 30} rx={w / 2 - 8} ry={fh} fill={color} opacity="0.85" /> : null}
      <Path
        d={`M${w / 2 - 12} 8 L${w / 2 + 12} 8 L${w / 2 + 12} 50 Q${w - 4} 60 ${w - 4} ${h - 30} Q${w - 4} ${h - 4} ${w / 2} ${h - 4} Q4 ${h - 4} 4 ${h - 30} Q4 60 ${w / 2 - 12} 50 Z`}
        fill="url(#rb)"
        stroke={C.glassEdge}
        strokeWidth="3"
      />
    </Svg>
  );
}

export function Burette({ w = 26, h = 170, fill = 1, color = "#f472b6", open = false }) {
  const fh = (h - 20) * Math.max(0, Math.min(1, fill));
  return (
    <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <Defs>
        <LinearGradient id="bu" x1="0" y1="0" x2="1" y2="0">
          <Stop offset="0" stopColor={C.glass} stopOpacity="0.9" />
          <Stop offset="1" stopColor={C.glassDark} stopOpacity="0.6" />
        </LinearGradient>
      </Defs>
      <Rect x={4} y={6} width={w - 8} height={fh} fill={color} opacity="0.85" />
      <Rect x={4} y={6} width={w - 8} height={h - 30} fill="url(#bu)" stroke={C.glassEdge} strokeWidth="2.5" />
      {/* stopcock */}
      <Rect x={2} y={h - 24} width={w - 4} height={8} fill={C.metalDark} rx={2} />
      <Rect x={w / 2 - 3} y={h - 14} width={6} height={10} fill={C.metal} rx={2} />
      {open ? <Rect x={w / 2 - 1} y={h - 4} width={2} height={12} fill={color} /> : null}
    </Svg>
  );
}

export function GasJar({ w = 70, h = 150, fill = 0, color = "#93c5fd" }) {
  const fh = (h - 20) * Math.max(0, Math.min(1, fill));
  return (
    <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <Defs>
        <LinearGradient id="gj" x1="0" y1="0" x2="1" y2="0">
          <Stop offset="0" stopColor={C.glass} stopOpacity="0.9" />
          <Stop offset="1" stopColor={C.glassDark} stopOpacity="0.6" />
        </LinearGradient>
      </Defs>
      {fill > 0 ? <Rect x={6} y={h - 10 - fh} width={w - 12} height={fh} fill={color} opacity="0.8" /> : null}
      <Path
        d={`M6 10 L${w - 6} 10 L${w - 6} ${h - 6} L6 ${h - 6} Z`}
        fill="url(#gj)"
        stroke={C.glassEdge}
        strokeWidth="3"
      />
      <Rect x={4} y={6} width={w - 8} height={6} fill={C.glassEdge} rx={2} />
    </Svg>
  );
}

export function Syringe({ w = 150, h = 54, plunger = 0.5 }) {
  const p = Math.max(0, Math.min(1, plunger));
  const barrelW = w - 40;
  const px = 20 + barrelW * p;
  return (
    <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <Rect x={20} y={14} width={barrelW} height={h - 28} rx={4} fill={C.white} stroke={C.glassEdge} strokeWidth="2.5" />
      <Rect x={px} y={10} width={barrelW - (px - 20)} height={h - 20} fill={C.glass} opacity="0.7" />
      <Rect x={px - 6} y={6} width={10} height={h - 8} fill={C.metal} rx={2} />
      <Rect x={px - 30} y={h / 2 - 2} width={24} height={4} fill={C.metalDark} />
      <Rect x={w - 22} y={h / 2 - 6} width={22} height={12} fill={C.metalDark} rx={3} />
      <Line x1={w - 22} y1={h / 2} x2={w - 2} y2={h / 2} stroke={C.white} strokeWidth="3" />
    </Svg>
  );
}

// ---------- stands & heat ----------

export function RetortStand({ h = 200, withClamp = false }) {
  return (
    <Svg width={60} height={h} viewBox={`0 0 60 ${h}`}>
      <Rect x={4} y={h - 14} width={52} height={14} rx={3} fill={C.metalDark} />
      <Rect x={26} y={0} width={8} height={h - 14} fill={C.metal} rx={3} />
      {withClamp ? <Rect x={30} y={40} width={26} height={10} rx={3} fill={C.metalDark} /> : null}
    </Svg>
  );
}

export function BunsenBurner({ w = 46, h = 90, flame = false }) {
  return (
    <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <Rect x={w / 2 - 14} y={h - 14} width={28} height={14} rx={3} fill={C.metalDark} />
      <Rect x={w / 2 - 6} y={18} width={12} height={h - 32} fill={C.metal} rx={3} />
      <Rect x={w / 2 - 8} y={10} width={16} height={10} fill={C.metalDark} rx={2} />
      {flame ? (
        <G>
          <Path d={`M${w / 2} 4 Q${w / 2 - 8} 12 ${w / 2} 18 Q${w / 2 + 8} 12 ${w / 2} 4 Z`} fill={C.flame} />
          <Path d={`M${w / 2} 9 Q${w / 2 - 4} 14 ${w / 2} 18 Q${w / 2 + 4} 14 ${w / 2} 9 Z`} fill={C.flameCore} />
        </G>
      ) : null}
    </Svg>
  );
}

export function HotPlate({ w = 90, h = 36 }) {
  return (
    <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <Rect x={0} y={8} width={w} height={h - 8} rx={4} fill={C.metalDark} />
      <Rect x={6} y={0} width={w - 12} height={12} rx={3} fill={C.metal} />
      <Line x1={10} y1={6} x2={w - 10} y2={6} stroke="#fca5a5" strokeWidth="2" />
    </Svg>
  );
}

export function CrossOnPaper({ size = 40 }) {
  return (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <Rect x={0} y={0} width={size} height={size} fill="#fffbeb" stroke="#e5e7eb" />
      <Line x1={size / 2} y1={4} x2={size / 2} y2={size - 4} stroke="#b91c1c" strokeWidth="3" />
      <Line x1={4} y1={size / 2} x2={size - 4} y2={size / 2} stroke="#b91c1c" strokeWidth="3" />
    </Svg>
  );
}

// ---------- separation extras ----------

export function Funnel({ w = 70, h = 70 }) {
  return (
    <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <Path d={`M4 6 L${w - 4} 6 L${w / 2 + 5} ${h - 24} L${w / 2 + 5} ${h - 6} L${w / 2 - 5} ${h - 6} L${w / 2 - 5} ${h - 24} Z`}
        fill={C.glass} stroke={C.glassEdge} strokeWidth="2.5" />
    </Svg>
  );
}

export function FilterPaper({ w = 50, h = 40, spots = [] }) {
  return (
    <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <Path d={`M4 ${h - 4} Q${w / 2} -10 ${w - 4} ${h - 4} Z`} fill="#fefce8" stroke="#e5e7eb" strokeWidth="1.5" />
      {spots.map((s, i) => (
        <Circle key={i} cx={s.x} cy={s.y} r={s.r || 4} fill={s.color || "#a855f7"} />
      ))}
    </Svg>
  );
}

export function Condenser({ w = 120, h = 44 }) {
  return (
    <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <Rect x={6} y={10} width={w - 12} height={h - 20} rx={10} fill={C.glass} stroke={C.glassEdge} strokeWidth="2.5" />
      <Line x1={10} y1={6} x2={10} y2={h - 6} stroke={C.metal} strokeWidth="3" />
      <Line x1={w - 10} y1={6} x2={w - 10} y2={h - 6} stroke={C.metal} strokeWidth="3" />
      <Line x1={14} y1={22} x2={w - 14} y2={22} stroke={C.glassEdge} strokeWidth="1.5" />
    </Svg>
  );
}

// ---------- metals / redox ----------

export function MetalStrip({ w = 70, h = 14, color = "#cbd5e1" }) {
  return (
    <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <Rect x={0} y={0} width={w} height={h} rx={3} fill={color} stroke="#475569" strokeWidth="1.5" />
      <Line x1={4} y1={4} x2={w - 4} y2={4} stroke="#ffffff" strokeWidth="1" opacity="0.5" />
    </Svg>
  );
}

export function Nail({ w = 16, h = 90, rust = 0 }) {
  const rc = rust > 0.5 ? "#b45309" : "#9ca3af";
  return (
    <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <Rect x={w / 2 - 3} y={10} width={6} height={h - 22} fill={rc} />
      <Polygon points={`${w / 2 - 3},${h - 12} ${w / 2 + 3},${h - 12} ${w / 2},${h}`} fill={rc} />
      <Rect x={w / 2 - 7} y={6} width={14} height={6} rx={2} fill={rc} />
    </Svg>
  );
}

export function ElectrodeCell({ w = 130, h = 130, fill = 0.6, color = "#60a5fa", left = "#cbd5e1", right = "#f59e0b", dip = true }) {
  const fh = (h - 24) * Math.max(0, Math.min(1, fill));
  return (
    <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <Defs>
        <LinearGradient id="ec" x1="0" y1="0" x2="1" y2="0">
          <Stop offset="0" stopColor={C.glass} stopOpacity="0.9" />
          <Stop offset="1" stopColor={C.glassDark} stopOpacity="0.6" />
        </LinearGradient>
      </Defs>
      <Rect x={8} y={h - 10 - fh} width={w - 16} height={fh} fill={color} opacity="0.8" />
      <Path d={`M8 8 L${w - 8} 8 L${w - 8} ${h - 6} L8 ${h - 6} Z`} fill="url(#ec)" stroke={C.glassEdge} strokeWidth="3" />
      {dip ? (
        <G>
          <Rect x={26} y={14} width={8} height={h - 30} fill={left} stroke="#475569" />
          <Rect x={w - 34} y={14} width={8} height={h - 30} fill={right} stroke="#475569" />
          <Line x1={30} y1={14} x2={30} y2={2} stroke="#475569" strokeWidth="2" />
          <Line x1={w - 30} y1={14} x2={w - 30} y2={2} stroke="#475569" strokeWidth="2" />
        </G>
      ) : null}
    </Svg>
  );
}

// ---------- physics: optics ----------

export function RayBox({ w = 60, h = 36 }) {
  return (
    <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <Rect x={0} y={0} width={w} height={h} rx={4} fill={C.woodDark} />
      <Rect x={w - 16} y={h / 2 - 6} width={16} height={12} fill={C.flameCore} rx={2} />
      <Line x1={w - 16} y1={h / 2} x2={w} y2={h / 2} stroke={C.flameCore} strokeWidth="3" />
    </Svg>
  );
}

export function GlassBlock({ w = 150, h = 70 }) {
  return (
    <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <Defs>
        <LinearGradient id="gb" x1="0" y1="0" x2="1" y2="0">
          <Stop offset="0" stopColor="#e0f2fe" stopOpacity="0.95" />
          <Stop offset="1" stopColor="#bae6fd" stopOpacity="0.8" />
        </LinearGradient>
      </Defs>
      <Rect x={2} y={2} width={w - 4} height={h - 4} rx={4} fill="url(#gb)" stroke={C.glassEdge} strokeWidth="2.5" />
    </Svg>
  );
}

export function LightRay({ x1, y1, x2, y2, color = "#f59e0b", w = 3, dashed = false }) {
  return (
    <Line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={color}
      strokeWidth={w}
      strokeDasharray={dashed ? "6 5" : undefined}
      strokeLinecap="round"
    />
  );
}

export function NormalLine({ x, y1, y2, color = "#94a3b8" }) {
  return <Line x1={x} y1={y1} x2={x} y2={y2} stroke={color} strokeWidth="1.5" strokeDasharray="4 4" />;
}

export function Protractor({ cx, cy, r = 60, color = "#cbd5e1" }) {
  return (
    <G>
      <Path d={`M${cx - r} ${cy} A${r} ${r} 0 0 1 ${cx + r} ${cy} Z`} fill={color} opacity="0.25" stroke={color} strokeWidth="1.5" />
      <Line x1={cx} y1={cy} x2={cx + r} y2={cy} stroke={color} strokeWidth="1" />
      <Line x1={cx} y1={cy} x2={cx - r} y2={cy} stroke={color} strokeWidth="1" />
    </G>
  );
}

// ---------- physics: mechanics ----------

export function PendulumBob({ r = 16, color = "#a78bfa" }) {
  return (
    <Svg width={r * 2 + 4} height={r * 2 + 4} viewBox={`0 0 ${r * 2 + 4} ${r * 2 + 4}`}>
      <Circle cx={r + 2} cy={r + 2} r={r} fill={color} stroke="#7c3aed" strokeWidth="2" />
      <Circle cx={r - 4} cy={r - 4} r={r / 3} fill="#ffffff" opacity="0.4" />
    </Svg>
  );
}

export function PendulumStand({ w = 80, h = 230 }) {
  return (
    <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <Rect x={4} y={h - 16} width={w - 8} height={16} rx={3} fill={C.metalDark} />
      <Rect x={w / 2 - 4} y={0} width={8} height={h - 16} fill={C.metal} rx={3} />
      <Circle cx={w / 2} cy={2} r={5} fill="#334155" />
    </Svg>
  );
}

export function Launcher({ w = 70, h = 40, angle = -45 }) {
  return (
    <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <Rect x={0} y={h - 14} width={w - 10} height={14} rx={4} fill={C.woodDark} />
      <G transform={`rotate(${angle} ${w / 2} ${h - 14})`}>
        <Rect x={w / 2 - 6} y={h - 30} width={26} height={18} rx={3} fill={C.metalDark} />
      </G>
    </Svg>
  );
}

export function Projectile({ r = 9, color = "#ef4444" }) {
  return (
    <Svg width={r * 2} height={r * 2} viewBox={`0 0 ${r * 2} ${r * 2}`}>
      <Circle cx={r} cy={r} r={r} fill={color} stroke="#7f1d1d" strokeWidth="1.5" />
    </Svg>
  );
}

export function Ground({ w = 320, h = 24 }) {
  return (
    <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <Rect x={0} y={6} width={w} height={h - 6} fill={C.wood} />
      <Line x1={0} y1={6} x2={w} y2={6} stroke={C.woodDark} strokeWidth="2" />
    </Svg>
  );
}

export function Trajectory({ w = 320, h = 200, color = "#f59e0b" }) {
  // gentle parabola for decoration
  return (
    <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ position: "absolute", top: 0, left: 0 }}>
      <Path d={`M20 ${h - 20} Q${w / 2} -40 ${w - 20} ${h - 20}`} fill="none" stroke={color} strokeWidth="2" strokeDasharray="6 6" />
    </Svg>
  );
}

// ---------- physics: circuit ----------

export function Battery({ w = 44, h = 36 }) {
  return (
    <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <Line x1={6} y1={4} x2={6} y2={h - 4} stroke={C.ink} strokeWidth="3" />
      <Line x1={14} y1={10} x2={14} y2={h - 10} stroke={C.ink} strokeWidth="3" />
      <Line x1={22} y1={4} x2={22} y2={h - 4} stroke={C.ink} strokeWidth="3" />
      <Line x1={30} y1={10} x2={30} y2={h - 10} stroke={C.ink} strokeWidth="3" />
      <Text x={w / 2} y={h + 12} fontSize="9" fill={C.inkSoft} textAnchor="middle">+</Text>
    </Svg>
  );
}

export function Bulb({ w = 36, h = 50, lit = true }) {
  const c = lit ? C.flameCore : "#e5e7eb";
  return (
    <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <Line x1={w / 2} y1={h - 12} x2={w / 2} y2={h} stroke={C.ink} strokeWidth="3" />
      <Circle cx={w / 2} cy={h / 2 - 4} r={16} fill={c} stroke="#475569" strokeWidth="2" />
      {lit ? <Circle cx={w / 2} cy={h / 2 - 4} r={7} fill="#fbbf24" /> : null}
      <Line x1={w / 2 - 7} y1={h / 2 - 8} x2={w / 2 + 7} y2={h / 2} stroke="#475569" strokeWidth="1" />
    </Svg>
  );
}

export function Resistor({ w = 60, h = 24 }) {
  return (
    <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <Path
        d={`M2 ${h / 2} l8 -8 l8 16 l8 -16 l8 16 l8 -16 l8 16 l8 -8 L${w - 2} ${h / 2}`}
        fill="none"
        stroke={C.ink}
        strokeWidth="2.5"
      />
    </Svg>
  );
}

export function Switch({ w = 56, h = 30, closed = true }) {
  return (
    <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <Circle cx={6} cy={h / 2} r={3} fill={C.ink} />
      <Circle cx={w - 6} cy={h / 2} r={3} fill={C.ink} />
      <Line
        x1={6}
        y1={h / 2}
        x2={w - 6}
        y2={closed ? h / 2 : 8}
        stroke={C.ink}
        strokeWidth="2.5"
      />
    </Svg>
  );
}

export function Ammeter({ w = 40, h = 40, value = "0 A" }) {
  return (
    <Svg width={w} height={h + 14} viewBox={`0 0 ${w} ${h + 14}`}>
      <Circle cx={w / 2} cy={h / 2} r={h / 2 - 2} fill={C.white} stroke={C.ink} strokeWidth="2.5" />
      <Line x1={w / 2} y1={h / 2} x2={w / 2 + 10} y2={h / 2 - 8} stroke={C.flame} strokeWidth="2" />
      <Text x={w / 2} y={h + 11} fontSize="9" fill={C.inkSoft} textAnchor="middle">{value}</Text>
    </Svg>
  );
}

export function Wire({ d, color = C.ink }) {
  return <Path d={d} fill="none" stroke={color} strokeWidth="2.5" />;
}

// ---------- biology ----------

export function CellMembrane({ w = 150, h = 110, type = "plant", conc = "equal", arrows = [] }) {
  const wall = type === "plant" ? "#16a34a" : "#0ea5e9";
  const inside = type === "plant" ? "#dcfce7" : "#e0f2fe";
  return (
    <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <Rect x={10} y={10} width={w - 20} height={h - 20} rx={type === "plant" ? 6 : 30} fill={inside} stroke={wall} strokeWidth="3" />
      {/* phospholipid bilayer hint */}
      <Line x1={10} y1={h / 2} x2={w - 10} y2={h / 2} stroke={wall} strokeWidth="2" strokeDasharray="3 4" opacity="0.5" />
      {type === "plant" ? <Circle cx={w / 2} cy={h / 2} r={14} fill="#22c55e" opacity="0.5" /> : null}
      {arrows.map((a, i) => (
        <Arrow key={i} x1={a.x1} y1={a.y1} x2={a.x2} y2={a.y2} color={a.color || "#2563eb"} label={a.label} />
      ))}
      <Text x={w / 2} y={h - 4} fontSize="9" fill={C.inkSoft} textAnchor="middle">{conc}</Text>
    </Svg>
  );
}

export function Chloroplast({ w = 90, h = 50 }) {
  return (
    <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <Ellipse cx={w / 2} cy={h / 2} rx={w / 2 - 2} ry={h / 2 - 2} fill="#15803d" />
      {[0.3, 0.5, 0.7].map((p, i) => (
        <Ellipse key={i} cx={w * p} cy={h / 2} rx={8} ry={h / 2 - 10} fill="#4ade80" />
      ))}
    </Svg>
  );
}

export function LeafSection({ w = 150, h = 90, lit = true }) {
  return (
    <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <Rect x={8} y={8} width={w - 16} height={h - 16} rx={8} fill="#bbf7d0" stroke="#16a34a" strokeWidth="3" />
      <Rect x={8} y={8} width={w - 16} height={10} fill="#166534" opacity="0.5" />
      <Rect x={8} y={h - 18} width={w - 16} height={10} fill="#166534" opacity="0.5" />
      <Ellipse cx={w / 2} cy={h / 2} rx={26} ry={14} fill="#15803d" />
      <Ellipse cx={w / 2 - 9} cy={h / 2} rx={6} ry={9} fill="#4ade80" />
      <Ellipse cx={w / 2 + 9} cy={h / 2} rx={6} ry={9} fill="#4ade80" />
      {lit ? <Arrow x1={10} y1={h / 2} x2={40} y2={h / 2} color="#f59e0b" label="light" /> : null}
      <Text x={w / 2} y={h - 4} fontSize="9" fill={C.inkSoft} textAnchor="middle">CO₂ + H₂O → O₂ + glucose</Text>
    </Svg>
  );
}

// ---------- table / bench ----------

export function LabTable({ w = 320, h = 26 }) {
  return (
    <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <Rect x={0} y={0} width={w} height={h} fill="#e2e8f0" />
      <Line x1={0} y1={2} x2={w} y2={2} stroke="#cbd5e1" strokeWidth="2" />
    </Svg>
  );
}

export default {
  Arrow,
  Label,
  Thermometer,
  Beaker,
  ConicalFlask,
  TestTube,
  BoilingTube,
  RoundBottomFlask,
  Burette,
  GasJar,
  Syringe,
  RetortStand,
  BunsenBurner,
  HotPlate,
  CrossOnPaper,
  Funnel,
  FilterPaper,
  Condenser,
  MetalStrip,
  Nail,
  ElectrodeCell,
  RayBox,
  GlassBlock,
  LightRay,
  NormalLine,
  Protractor,
  PendulumBob,
  PendulumStand,
  Launcher,
  Projectile,
  Ground,
  Trajectory,
  Battery,
  Bulb,
  Resistor,
  Switch,
  Ammeter,
  Wire,
  CellMembrane,
  Chloroplast,
  LeafSection,
  LabTable,
};
