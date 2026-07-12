"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { CalendarDays, Mail, Download, Copy, Linkedin, Check } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const { contact, deck } = siteConfig;
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard may be unavailable — fail silently
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-moonlight-gradient py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-3xl font-bold text-white sm:text-4xl"
        >
          {contact.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-3 max-w-md text-white/75"
        >
          {contact.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a href={contact.calendarUrl} target="_blank" rel="noreferrer">
            <Button size="lg" className="bg-white text-midnight-900 hover:bg-moon">
              <CalendarDays className="h-4 w-4" /> Schedule a Meeting
            </Button>
          </a>
          <a href={`mailto:${contact.email}`}>
            <Button size="lg" variant="ghost" className="border-white/30 text-white hover:border-white/60">
              <Mail className="h-4 w-4" /> Email Us
            </Button>
          </a>
          {deck.pdfUrl && (
            <a href={deck.pdfUrl} download={deck.fileName}>
              <Button size="lg" variant="ghost" className="border-white/30 text-white hover:border-white/60">
                <Download className="h-4 w-4" /> Download Deck
              </Button>
            </a>
          )}
          <Button
            size="lg"
            variant="ghost"
            className="border-white/30 text-white hover:border-white/60"
            onClick={handleCopy}
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? "Copied" : "Copy Email"}
          </Button>
          <a href={contact.linkedinUrl} target="_blank" rel="noreferrer" aria-label="Moonlight on LinkedIn">
            <Button size="icon" variant="ghost" className="border-white/30 text-white hover:border-white/60">
              <Linkedin className="h-4 w-4" />
            </Button>
          </a>
        </motion.div>

        <p className="mt-6 font-mono text-xs text-white/50">
          {contact.email}
          {contact.secondaryEmail && <> &middot; {contact.secondaryEmail}</>}
        </p>
      </div>
    </section>
  );
}
