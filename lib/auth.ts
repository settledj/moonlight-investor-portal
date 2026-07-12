/**
 * Lightweight password-gate helper. Uses Web Crypto (available in both the
 * Edge middleware runtime and Node) so no extra dependency is needed.
 *
 * This is NOT meant to protect highly sensitive data — it's a light gate to
 * keep an investor deck link from being casually shared/indexed. For real
 * access control, put this behind a proper auth provider instead.
 */
export async function getExpectedToken(): Promise<string> {
  const password = process.env.MOONLIGHT_ACCESS_PASSWORD || "";
  const secret = process.env.MOONLIGHT_SESSION_SECRET || "moonlight-default-secret";
  const data = new TextEncoder().encode(`${password}:${secret}`);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export const ACCESS_COOKIE_NAME = "moonlight_access";
