# Moonlight — Investor Portal

A single-page investor portal for Moonlight, built with Next.js 14, TypeScript,
Tailwind CSS, and Framer Motion. One URL you can send to investors instead of
a PDF + Dropbox link.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

**You should almost never need to touch component code.** Every headline,
subhead, metric, highlight, founder bio, FAQ, document link, and contact
detail lives in one file:

```
content/site-config.ts
```

Open it and edit the values directly — the layout, styling, and animations
stay untouched.

### Adding the pitch video
In `content/site-config.ts`, set `video.embedUrl` to either:
- A YouTube/Vimeo **embed URL** (e.g. `https://www.youtube.com/embed/VIDEO_ID`) — renders as an iframe.
- A direct `.mp4`/`.webm` file URL — renders as a native `<video>` with a play-button poster state.

### Adding the pitch deck
Set `deck.pdfUrl` to a direct link to your PDF (host it in `/public`, or on
S3 / Vercel Blob / Google Drive direct-download link). It renders inline with
scroll, fullscreen, and download.

### Adding founder photos
Drop headshots into `public/team/` and reference them (e.g. `/team/david.jpg`)
in `team.founders[].photo` in the config file.

### Adding data-room documents
Add entries to `documents.items` in the config with a `label` and `url`.
Leaving `url` empty shows the item as "Coming soon."

## Password protection (optional)

To require a password before investors can view the portal, set two
environment variables (in `.env.local` locally, or in your hosting
provider's dashboard):

```
MOONLIGHT_ACCESS_PASSWORD=your-password-here
MOONLIGHT_SESSION_SECRET=any-random-string
```

Leave `MOONLIGHT_ACCESS_PASSWORD` unset to make the portal fully public — no
code changes needed either way.

## Analytics (optional)

Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` to your GA4 Measurement ID
(e.g. `G-XXXXXXXXXX`) to enable Google Analytics. Leave blank to disable.

## Social preview

Open Graph / Twitter Card metadata is already wired up in `app/layout.tsx`
and pulls from `content/site-config.ts`. A generated `public/og-image.png`
is included — swap it for your own 1200×630 image any time.

## Deploying to Vercel

1. Push this project to a GitHub repo.
2. Import it in [Vercel](https://vercel.com/new).
3. Add the environment variables above in the Vercel project settings
   (Settings → Environment Variables) if you're using password protection
   or analytics.
4. Deploy. Your investor URL is ready.

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with a custom Moonlight design-token theme
- **Framer Motion** for scroll reveals and micro-interactions
- Hand-rolled **shadcn/ui-style** primitives (`Button`, `Card`, `Badge`) in
  `components/ui/`
- `next-themes` for dark mode
- Edge middleware for optional password protection (no extra auth
  dependency — Web Crypto only)

## Project structure

```
app/                  Routes: home page, login page, auth API route
components/           One folder per section (hero, video, deck, team, ...)
components/ui/        Shared button/card/badge primitives
content/site-config.ts   ← all editable copy and data lives here
lib/                  Small utilities (auth token, class-name merge)
public/               Favicon, touch icon, OG image, founder photos, etc.
```
