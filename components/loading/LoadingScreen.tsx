"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-moonlight-gradient"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-5">
            <motion.svg
              viewBox="0 0 200 200"
              className="h-16 w-16"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <circle cx="100" cy="100" r="88" fill="none" stroke="#FFFFFF" strokeWidth="12" />
              <mask id="loading-crescent-mask">
                <rect x="0" y="0" width="200" height="200" fill="white" />
                <circle cx="122" cy="92" r="46" fill="black" />
              </mask>
              <circle cx="96" cy="100" r="52" fill="#F1EA82" mask="url(#loading-crescent-mask)" />
              <path
                d="M148 58 L154 76 L172 82 L154 88 L148 106 L142 88 L124 82 L142 76 Z"
                fill="#F1EA82"
              />
            </motion.svg>
            <span className="font-display text-sm font-bold lowercase tracking-wide text-white">
              moonlight
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
