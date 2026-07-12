"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Download, Maximize2, FileText, ExternalLink } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { Button } from "@/components/ui/button";

export function PitchDeck() {
  const { deck } = siteConfig;
  const hasDeck = Boolean(deck.pdfUrl);
  const frameRef = React.useRef<HTMLIFrameElement>(null);

  const handleFullscreen = () => {
    frameRef.current?.requestFullscreen?.();
  };

  return (
    <section id="deck" className="bg-midnight-50 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <h2 className="font-display text-3xl font-bold text-midnight-900 sm:text-4xl">
              {deck.title}
            </h2>
            <p className="mt-3 text-midnight-400">{deck.subtitle}</p>
          </div>
          {hasDeck && (
            <div className="hidden gap-3 sm:flex">
              <Button variant="secondary" size="sm" onClick={handleFullscreen}>
                <Maximize2 className="h-3.5 w-3.5" /> Fullscreen
              </Button>
              <a href={deck.pdfUrl} download={deck.fileName}>
                <Button variant="primary" size="sm" className="bg-midnight-900 text-white hover:bg-midnight-700">
                  <Download className="h-3.5 w-3.5" /> Download
                </Button>
              </a>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="overflow-hidden rounded-3xl border border-midnight-100 bg-white shadow-xl shadow-midnight-900/5"
        >
          {hasDeck ? (
            <>
              <iframe
                ref={frameRef}
                src={`${deck.pdfUrl}#view=FitH`}
                title={deck.title}
                className="hidden h-[75vh] w-full sm:block"
              />
              <div className="flex h-[50vh] flex-col items-center justify-center gap-5 px-6 text-center sm:hidden">
                <FileText className="h-10 w-10 text-midnight-300" />
                <p className="max-w-xs text-sm text-midnight-400">
                  For the best experience on mobile, open the deck in your
                  browser's PDF viewer or download it.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a href={deck.pdfUrl} target="_blank" rel="noreferrer">
                    <Button variant="secondary" size="sm">
                      <ExternalLink className="h-3.5 w-3.5" /> Open Deck
                    </Button>
                  </a>
                  <a href={deck.pdfUrl} download={deck.fileName}>
                    <Button
                      variant="primary"
                      size="sm"
                      className="bg-midnight-900 text-white hover:bg-midnight-700"
                    >
                      <Download className="h-3.5 w-3.5" /> Download
                    </Button>
                  </a>
                </div>
              </div>
            </>
          ) : (
            <div className="flex h-[50vh] flex-col items-center justify-center gap-4 text-midnight-300">
              <FileText className="h-10 w-10" />
              <p className="font-mono text-xs uppercase tracking-widest">
                Deck coming soon — add pdfUrl in site-config.ts
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
