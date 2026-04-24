"use client";
import { motion } from "framer-motion";

export default function Background() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden bg-aurora">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] bg-grid-fade [background-size:42px_42px]" />

      {/* Gradient orbs */}
      <motion.div
        className="orb"
        style={{
          width: 520,
          height: 520,
          left: "-8%",
          top: "10%",
          background:
            "radial-gradient(circle at 30% 30%, #22d3ee, transparent 60%)",
        }}
        animate={{ x: [0, 40, -20, 0], y: [0, -20, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="orb"
        style={{
          width: 580,
          height: 580,
          right: "-10%",
          top: "5%",
          background:
            "radial-gradient(circle at 60% 40%, #8b5cf6, transparent 60%)",
        }}
        animate={{ x: [0, -30, 20, 0], y: [0, 30, -20, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="orb"
        style={{
          width: 480,
          height: 480,
          left: "30%",
          top: "55%",
          background:
            "radial-gradient(circle at 50% 50%, #3b82f6, transparent 60%)",
          opacity: 0.45,
        }}
        animate={{ x: [0, 20, -30, 0], y: [0, -20, 10, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating bot nodes (SVG network) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-40"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {[
          [120, 200, 380, 320],
          [380, 320, 720, 220],
          [720, 220, 1040, 380],
          [1040, 380, 1320, 260],
          [380, 320, 540, 600],
          [540, 600, 880, 700],
          [880, 700, 1180, 580],
        ].map(([x1, y1, x2, y2], i) => (
          <motion.line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="url(#lineGrad)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0.2, 0.7, 0.3] }}
            transition={{
              duration: 6,
              delay: i * 0.3,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        ))}
        {[
          [120, 200],
          [380, 320],
          [720, 220],
          [1040, 380],
          [1320, 260],
          [540, 600],
          [880, 700],
          [1180, 580],
        ].map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r="3"
            fill="#a5b4fc"
            animate={{ opacity: [0.3, 1, 0.3], r: [2, 3.5, 2] }}
            transition={{
              duration: 4,
              delay: i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.6)_100%)]" />
    </div>
  );
}
