"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { siteConfig } from "@/content/site-config";

function isDirectVideoFile(url: string) {
  return /\.(mp4|webm|ogg)$/i.test(url);
}

export function PitchVideo() {
  const { video } = siteConfig;
  const [playing, setPlaying] = React.useState(false);
  const hasVideo = Boolean(video.embedUrl);
  const isDirect = hasVideo && isDirectVideoFile(video.embedUrl);

  return (
    <section id="video" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center"
        >
          <h2 className="font-display text-3xl font-bold text-midnight-900 sm:text-4xl">
            {video.title}
          </h2>
          <p className="mt-3 text-midnight-400">{video.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="relative aspect-video w-full overflow-hidden rounded-3xl bg-midnight-900 shadow-2xl shadow-midnight-900/20"
        >
          {!hasVideo && (
            <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-moonlight-gradient text-white">
              <button
                aria-label="Play pitch video"
                className="flex h-20 w-20 items-center justify-center rounded-full bg-white/15 backdrop-blur-md ring-1 ring-white/30 transition-transform hover:scale-105"
              >
                <Play className="ml-1 h-8 w-8 fill-white text-white" />
              </button>
              <p className="font-mono text-xs uppercase tracking-widest text-white/60">
                Video coming soon — add embedUrl in site-config.ts
              </p>
            </div>
          )}

          {hasVideo && isDirect && !playing && (
            <button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 flex h-full w-full items-center justify-center bg-midnight-900/40"
              style={
                video.posterImage
                  ? {
                      backgroundImage: `url(${video.posterImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }
                  : undefined
              }
              aria-label="Play pitch video"
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/15 backdrop-blur-md ring-1 ring-white/30 transition-transform hover:scale-105">
                <Play className="ml-1 h-8 w-8 fill-white text-white" />
              </span>
            </button>
          )}

          {hasVideo && isDirect && playing && (
            <video
              className="h-full w-full object-cover"
              src={video.embedUrl}
              controls
              autoPlay
              muted={video.autoplayMuted}
              playsInline
            />
          )}

          {hasVideo && !isDirect && (
            <iframe
              className="h-full w-full"
              src={video.embedUrl}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}
