import { siteConfig } from "@/content/site-config";

export default function LoginPage({
  searchParams,
}: {
  searchParams: { from?: string; error?: string };
}) {
  const from = searchParams.from || "/";
  const hasError = searchParams.error === "1";

  return (
    <main className="flex min-h-[100svh] items-center justify-center bg-moonlight-gradient px-6">
      <div className="w-full max-w-sm rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur-xl">
        <div className="mb-6 flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-moon" />
          <span className="font-display text-lg font-bold lowercase tracking-wide text-white">
            {siteConfig.brand.wordmark}
          </span>
        </div>
        <h1 className="font-display text-xl font-bold text-white">
          Investor Access
        </h1>
        <p className="mt-1.5 text-sm text-white/70">
          Enter the password shared with you to view this portal.
        </p>

        <form action="/api/auth" method="POST" className="mt-6 space-y-3">
          <input type="hidden" name="from" value={from} />
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoFocus
            className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/40 outline-none focus-visible:border-moon"
          />
          {hasError && (
            <p className="text-sm text-red-200">
              That password didn&apos;t work. Please try again.
            </p>
          )}
          <button
            type="submit"
            className="w-full rounded-xl bg-white py-3 text-sm font-medium text-midnight-900 transition-colors hover:bg-moon"
          >
            Enter
          </button>
        </form>
      </div>
    </main>
  );
}
