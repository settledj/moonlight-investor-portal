import { siteConfig } from "@/content/site-config";
import { MoonIcon } from "@/components/brand/MoonIcon";

export function Footer() {
  const { footer, brand } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-midnight-900 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-center lg:px-8">
        <div className="flex items-center gap-2">
          <MoonIcon size={20} className="text-white" />
          <span className="font-display text-sm font-bold lowercase tracking-wide text-white">
            {brand.wordmark}
          </span>
        </div>
        <p className="font-mono text-[11px] uppercase tracking-widest text-white/40">
          {footer.confidentialityNotice}
        </p>
        <p className="text-xs text-white/30">
          © {year} {footer.copyrightName}. All rights reserved. · {footer.version} · Last
          updated {footer.lastUpdated}
        </p>
      </div>
    </footer>
  );
}
