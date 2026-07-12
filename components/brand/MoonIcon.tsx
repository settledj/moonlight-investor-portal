export function MoonIcon({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} className={className} aria-hidden="true">
      <circle cx="100" cy="100" r="88" fill="none" stroke="currentColor" strokeWidth="12" />
      <mask id="moon-icon-crescent-mask">
        <rect x="0" y="0" width="200" height="200" fill="white" />
        <circle cx="122" cy="92" r="46" fill="black" />
      </mask>
      <circle cx="96" cy="100" r="52" fill="#F1EA82" mask="url(#moon-icon-crescent-mask)" />
      <path
        d="M148 58 L154 76 L172 82 L154 88 L148 106 L142 88 L124 82 L142 76 Z"
        fill="#F1EA82"
      />
    </svg>
  );
}
