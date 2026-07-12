"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/content/site-config";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoonMark } from "@/components/hero/MoonMark";
import { ChevronDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Hero() {
  const { hero } = siteConfig;

  return (
    <section
      id="overview"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-moonlight-gradient pt-28"
    >
      {/* ambient texture */}
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
      <div className="pointer-events-none absolute inset-0 bg-grain-glow" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 pb-24 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <div className="max-w-xl">
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <Badge className="border-white/25 bg-white/10 text-white">
              {hero.eyebrow}
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]"
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-lg text-lg leading-relaxed text-white/75"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button
              size="lg"
              variant="primary"
              className="bg-white text-midnight-900 hover:bg-moon"
              onClick={() =>
                document.querySelector(hero.primaryCta.href)?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {hero.primaryCta.label}
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="border-white/30 text-white hover:border-white/60"
              onClick={() =>
                document.querySelector(hero.secondaryCta.href)?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {hero.secondaryCta.label}
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <MoonMark size={380} className="max-w-full" />
        </motion.div>
      </div>

      <motion.button
        onClick={() => document.querySelector("#video")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/60 transition-colors hover:text-white"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll to explore"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">Explore</span>
        <ChevronDown className="h-4 w-4" />
      </motion.button>
    </section>
  );
}
