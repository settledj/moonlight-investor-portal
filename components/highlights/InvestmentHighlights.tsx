"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/content/site-config";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function InvestmentHighlights() {
  const { highlights } = siteConfig;

  return (
    <section className="bg-midnight-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 max-w-2xl"
        >
          <h2 className="font-display text-3xl font-bold text-midnight-900 sm:text-4xl">
            {highlights.title}
          </h2>
          <p className="mt-3 text-midnight-400">{highlights.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card className="h-full border-midnight-100 bg-white hover:border-moon-dark/60 hover:shadow-lg hover:shadow-midnight-900/5">
                <CardHeader>
                  <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-moon/25 font-mono text-xs text-midnight-700">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <CardTitle className="text-midnight-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-midnight-400">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
