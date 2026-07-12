"use client";

import { motion } from "framer-motion";
import { FileText, Download, Clock } from "lucide-react";
import { siteConfig } from "@/content/site-config";

export function DataRoom() {
  const { documents } = siteConfig;

  return (
    <section className="bg-midnight-50 py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <h2 className="font-display text-3xl font-bold text-midnight-900 sm:text-4xl">
            {documents.title}
          </h2>
          <p className="mt-3 max-w-xl text-midnight-400">{documents.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {documents.items.map((doc, i) => {
            const available = Boolean(doc.url);
            const content = (
              <>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
                  <FileText className="h-4 w-4 text-midnight-500" />
                </span>
                <span className="flex-1">
                  <span className="block text-sm font-medium text-midnight-900">
                    {doc.label}
                  </span>
                  <span className="mt-0.5 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide text-midnight-300">
                    {available ? (
                      <>
                        <Download className="h-3 w-3" /> {doc.updated || "Available"}
                      </>
                    ) : (
                      <>
                        <Clock className="h-3 w-3" /> Coming soon
                      </>
                    )}
                  </span>
                </span>
              </>
            );

            return available ? (
              <motion.a
                key={doc.label}
                href={doc.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex items-center gap-4 rounded-2xl border border-midnight-100 bg-white p-4 transition-colors hover:border-moon-dark/50"
              >
                {content}
              </motion.a>
            ) : (
              <motion.div
                key={doc.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex items-center gap-4 rounded-2xl border border-dashed border-midnight-200 bg-white/60 p-4 opacity-70"
              >
                {content}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
