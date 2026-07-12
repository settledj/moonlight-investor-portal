"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/content/site-config";

export function CompanySnapshot() {
  const { snapshot } = siteConfig;

  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 font-display text-3xl font-bold text-midnight-900 sm:text-4xl"
        >
          {snapshot.title}
        </motion.h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {snapshot.items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-midnight-100 bg-midnight-50/60 p-5 transition-colors hover:border-moon-dark/50 hover:bg-moon/10"
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-midnight-300">
                {item.label}
              </p>
              <p className="mt-2 font-display text-base font-bold text-midnight-900 sm:text-lg">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
