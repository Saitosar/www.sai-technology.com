"use client";

/**
 * Minimal inline SVG: Robot → Middleware → Enterprise Systems.
 * Neon outline style matching the site's electric-blue accent.
 */
export default function ArchitectureMiniDiagram() {
  const stroke = "#00d4ff";
  const strokeWidth = 1.5;

  return (
    <svg
      viewBox="0 0 320 120"
      className="w-full max-w-[320px] h-auto"
      aria-hidden
    >
      {/* Robot box */}
      <rect
        x="20"
        y="40"
        width="70"
        height="40"
        rx="4"
        fill="rgba(0,212,255,0.05)"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <text
        x="55"
        y="62"
        textAnchor="middle"
        fill="#d1d5db"
        style={{ fontSize: "12px" }}
      >
        Robot
      </text>

      {/* Arrow 1 */}
      <line
        x1="90"
        y1="60"
        x2="130"
        y2="60"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <polygon
        points="125,55 135,60 125,65"
        fill={stroke}
      />

      {/* Middleware box */}
      <rect
        x="130"
        y="40"
        width="60"
        height="40"
        rx="4"
        fill="rgba(0,212,255,0.05)"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <text
        x="160"
        y="62"
        textAnchor="middle"
        fill="#d1d5db"
        style={{ fontSize: "12px" }}
      >
        Middleware
      </text>

      {/* Arrow 2 */}
      <line
        x1="190"
        y1="60"
        x2="230"
        y2="60"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <polygon
        points="225,55 235,60 225,65"
        fill={stroke}
      />

      {/* Enterprise Systems box */}
      <rect
        x="230"
        y="30"
        width="90"
        height="60"
        rx="4"
        fill="rgba(0,212,255,0.05)"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <text
        x="275"
        y="52"
        textAnchor="middle"
        fill="#d1d5db"
        style={{ fontSize: "11px" }}
      >
        ERP / WMS / MES
      </text>
      <text
        x="275"
        y="68"
        textAnchor="middle"
        fill="#d1d5db"
        style={{ fontSize: "11px" }}
      >
        / CRM
      </text>
    </svg>
  );
}
