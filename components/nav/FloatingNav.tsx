"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/content/site-config";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { cn } from "@/lib/utils";

export function FloatingNav() {
  const [active, setActive] = React.useState<string>(siteConfig.nav[0].href);
  const [hidden, setHidden] = React.useState(false);
  const lastY = React.useRef(0);

  React.useEffect(() => {
    const sections = siteConfig.nav
      .map((n) => document.querySelector(n.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));

    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY.current && y > 160);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <motion.nav
      className="fixed left-1/2 top-5 z-50 -translate-x-1/2"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: hidden ? -80 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-center gap-1 rounded-full border border-white/15 bg-white/10 px-2 py-2 shadow-lg shadow-black/20 backdrop-blur-xl">
        <a
          href="#overview"
          className="mr-1 flex items-center gap-1.5 px-3 font-display text-sm font-bold lowercase tracking-wide text-white"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-moon" />
          {siteConfig.brand.wordmark}
        </a>
        <div className="hidden items-center gap-0.5 sm:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-widest text-white/70 transition-colors duration-200 hover:text-white",
                active === item.href && "bg-white/15 text-moon"
              )}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="ml-1 pl-1">
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}
