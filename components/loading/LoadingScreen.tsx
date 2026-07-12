"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoonIcon } from "@/components/brand/MoonIcon";

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
            <motion.div
              className="text-white"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <MoonIcon size={64} />
            </motion.div>
            <span className="font-display text-sm font-bold lowercase tracking-wide text-white">
              moonlight
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
