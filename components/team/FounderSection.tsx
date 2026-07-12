"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, User } from "lucide-react";
import { siteConfig } from "@/content/site-config";

export function FounderSection() {
  const { team } = siteConfig;

  return (
    <section id="team" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center"
        >
          <h2 className="font-display text-3xl font-bold text-midnight-900 sm:text-4xl">
            {team.title}
          </h2>
          <p className="mt-3 text-midnight-400">{team.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {team.founders.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-5 rounded-2xl border border-midnight-100 p-6 transition-colors hover:border-moon-dark/50 hover:bg-midnight-50/50 sm:flex-col sm:items-start sm:p-8"
            >
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full bg-midnight-gradient sm:h-24 sm:w-24">
                {founder.photo ? (
                  <Image
                    src={founder.photo}
                    alt={founder.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-moonlight-gradient text-white">
                    <User className="h-8 w-8 opacity-70" />
                  </div>
                )}
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-lg font-bold text-midnight-900">
                    {founder.name}
                  </h3>
                  {founder.linkedin && (
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${founder.name} on LinkedIn`}
                      className="text-midnight-300 transition-colors hover:text-midnight-600"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                </div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-moon-dark">
                  {founder.role}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-midnight-400">
                  {founder.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
