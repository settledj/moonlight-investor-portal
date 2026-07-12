"use client";

import { motion } from "framer-motion";

/**
 * The Moonlight signature mark: the ring + crescent moon + sparkle star
 * from the brand logo, rebuilt in SVG so it can be animated (gentle float,
 * twinkling star, soft glow pulse) instead of a static image.
 */
export function MoonMark({
  size = 380,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div className={className} style={{ width: size, height: size }} aria-hidden="true">
      <motion.div
        className="relative h-full w-full animate-float"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* ambient glow behind the mark */}
        <div
          className="absolute inset-0 m-auto animate-glow-pulse rounded-full"
          style={{
            width: size * 0.9,
            height: size * 0.9,
            background:
              "radial-gradient(circle, rgba(241,234,130,0.35) 0%, rgba(241,234,130,0.08) 45%, transparent 70%)",
            filter: "blur(10px)",
          }}
        />

        <svg viewBox="0 0 200 200" className="relative h-full w-full">
          {/* outer ring */}
          <circle
            cx="100"
            cy="100"
            r="88"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="10"
          />
          {/* crescent moon (yellow circle minus offset white-ish cutout, done via mask) */}
          <mask id="crescent-mask">
            <rect x="0" y="0" width="200" height="200" fill="white" />
            <circle cx="122" cy="92" r="46" fill="black" />
          </mask>
          <circle
            cx="96"
            cy="100"
            r="52"
            fill="#F1EA82"
            mask="url(#crescent-mask)"
          />
          {/* sparkle star */}
          <motion.path
            d="M148 58 L154 76 L172 82 L154 88 L148 106 L142 88 L124 82 L142 76 Z"
            fill="#F1EA82"
            className="origin-center animate-twinkle"
          />
        </svg>
      </motion.div>
    </div>
  );
}
