/**
 * MOONLIGHT INVESTOR PORTAL — CONTENT CONFIG
 * -------------------------------------------------
 * Every piece of copy, data, and asset link on the page lives here.
 * Edit this file to update the site — you should never need to touch
 * the component/layout code to change text, numbers, or links.
 */

export const siteConfig = {
  meta: {
    title: "Moonlight — Investor Portal",
    description:
      "Moonlight is the marketplace for on-demand photography and videography — booking a photographer as easy as requesting a ride.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://invest.moonlight.com",
    ogImage: "/og-image.png", // 1200x630, drop into /public
    twitterHandle: "@moonlighthq",
  },

  brand: {
    name: "Moonlight",
    // Shown in the floating nav + footer. Swap for an <Image> logo any time
    // by editing components/nav/FloatingNav.tsx and components/footer/Footer.tsx.
    wordmark: "Moonlight",
  },

  nav: [
    { label: "Overview", href: "#overview" },
    { label: "Video", href: "#video" },
    { label: "Deck", href: "#deck" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    eyebrow: "Investor Portal — Confidential",
    headline: "The Marketplace for On‑Demand Photography & Videography",
    subheadline:
      "Moonlight makes booking photographers and videographers as easy as requesting an Uber or booking an Airbnb.",
    primaryCta: { label: "Watch Pitch", href: "#video" },
    secondaryCta: { label: "View Pitch Deck", href: "#deck" },
  },

  appStore: {
    url: "https://apps.apple.com/us/app/moonlight-find-moonlight/id6742334587",
  },

  video: {
    title: "The Pitch",
    subtitle: "A five-minute walkthrough of what we're building and why now.",
    // Paste a YouTube/Vimeo embed URL or an .mp4 URL here.
    // Leave empty to show the placeholder state.
    embedUrl: "https://www.youtube.com/embed/kF-k6qimSIw",
    // Only used if embedUrl points to a direct video file (.mp4/.webm), not an iframe embed.
    posterImage: "",
    autoplayMuted: true,
  },

  deck: {
    title: "Pitch Deck",
    subtitle: "Scroll through, view fullscreen, or download for your team.",
    // Paste a direct .pdf URL here (e.g. hosted in /public or on S3/Vercel Blob).
    pdfUrl: "/moonlight-deck.pdf",
    fileName: "Moonlight-Pitch-Deck.pdf",
  },

  snapshot: {
    title: "Company Snapshot",
    items: [
      { label: "Stage", value: "Pre-Seed" },
      { label: "HQ", value: "Houston, TX" },
      { label: "Raise", value: "$1M SAFE" },
      { label: "Market", value: "$10B+ Creator Economy" },
      { label: "Business Model", value: "Marketplace Take Rate" },
      { label: "Launch Status", value: "Live in Houston" },
      { label: "Founding Team", value: "4 Co-Founders, Full-Time" },
    ],
  },

  highlights: {
    title: "Investment Highlights",
    subtitle: "Why now, why this market, why us.",
    items: [
      {
        title: "Massive Creator Economy",
        description:
          "Content creation spend is compounding as every brand, agent, and small business becomes a media company in its own right.",
      },
      {
        title: "Huge, Fragmented Market",
        description:
          "Photography and videography booking today is a patchwork of DMs, referrals, and spreadsheets — no dominant platform owns the transaction.",
      },
      {
        title: "AI-Powered Workflow",
        description:
          "From matching to scheduling to delivery, Moonlight uses AI to cut the friction out of booking and managing creative talent.",
      },
      {
        title: "Marketplace Network Effects",
        description:
          "Every new client makes the platform more valuable to photographers, and every new photographer makes it more valuable to clients.",
      },
      {
        title: "Houston Launch",
        description:
          "Live today in Houston with real bookings, real photographers, and real revenue — the proof point before we scale.",
      },
      {
        title: "National Expansion",
        description:
          "A repeatable, city-by-city playbook for expansion, built on the density and supply liquidity we're proving out first at home.",
      },
    ],
  },

  team: {
    title: "Founding Team",
    subtitle: "Operators with decades of experience across technology, the creator economy, and multi-million-dollar business growth.",
    founders: [
      {
        name: "Jamie Allen",
        role: "Founder & CEO",
        bio: "Built and scaled multi-million dollar hospitality concepts, specializing in demand creation and premium experiences. Now leading Moonlight's vision and platform growth.",
        photo: "/team/jamie-allen.jpg",
        linkedin: "",
      },
      {
        name: "Dexter Talbert",
        role: "CTO",
        bio: "Product engineer with experience scaling AI and live commerce ventures. Helped drive $15M acquisition at Due Dilly. Leads Moonlight's platform architecture.",
        photo: "/team/dexter-talbert.jpg",
        linkedin: "https://www.linkedin.com/in/dextertalbert",
      },
      {
        name: "Omar Dismuke II",
        role: "Brand Architect & Creative Director",
        bio: "20+ years designing global products and brand systems. Leads Moonlight's brand, UX, and digital experience from concept to launch.",
        photo: "/team/omar-dismuke.jpg",
        linkedin: "https://www.linkedin.com/in/omardismukeii",
      },
      {
        name: "David Settle",
        role: "Creator Growth",
        bio: "20+ year celebrity photographer with media sales background. Leads creator growth and marketplace expansion.",
        photo: "/team/david-settle.jpg",
        linkedin: "https://www.linkedin.com/in/david-settle-a5770748",
      },
    ],
  },

  faq: {
    title: "Investor FAQ",
    items: [
      {
        question: "What stage is Moonlight at today?",
        answer:
          "We're pre-seed and live in our first market, Houston, with real bookings on the platform. This raise funds our expansion playbook.",
      },
      {
        question: "How does Moonlight make money?",
        answer:
          "We take a percentage of every booking transacted through the marketplace, similar to other two-sided marketplaces.",
      },
      {
        question: "What is the use of funds?",
        answer:
          "Primarily supply growth (photographer acquisition), product and AI workflow development, and expansion into 2–3 additional metro markets.",
      },
      {
        question: "Who are the founders?",
        answer:
          "Jamie Allen, Dexter Talbert, Omar Dismuke II, and David Settle, all based in Houston with direct operating experience in the entertainment and creative services industry this marketplace serves.",
      },
      {
        question: "How can I get involved?",
        answer:
          "Use the Schedule a Meeting button in the Contact section below, or reach out directly by email — we'd love to talk.",
      },
    ],
  },

  documents: {
    title: "Data Room",
    subtitle:
      "Additional materials for investors moving through diligence. More documents added as they become available.",
    // Add entries as documents become available. `url` left empty renders as "Coming soon".
    items: [
      { label: "Financial Model", url: "", updated: "" },
      { label: "One-Pager", url: "", updated: "" },
      { label: "Cap Table Summary", url: "", updated: "" },
      { label: "Product Roadmap", url: "", updated: "" },
    ],
  },

  contact: {
    title: "Let's Talk",
    subtitle: "We'd love to walk you through the opportunity in more detail.",
    email: "info@findmoonlight.com",
    secondaryEmail: "david@findmoonlight.com",
    calendarUrl: "https://cal.com/moonlight/investor-intro",
    linkedinUrl: "https://www.linkedin.com/company/moonlight",
  },

  footer: {
    copyrightName: "Moonlight, Inc.",
    confidentialityNotice: "Confidential Investor Materials — Not for Distribution",
    version: "v1.0",
    lastUpdated: "July 2026",
  },
} as const;

export type SiteConfig = typeof siteConfig;
