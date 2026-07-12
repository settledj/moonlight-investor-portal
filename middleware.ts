import { NextRequest, NextResponse } from "next/server";
import { getExpectedToken, ACCESS_COOKIE_NAME } from "@/lib/auth";

export const config = {
  matcher: [
    "/((?!api/auth|login|_next/static|_next/image|favicon.ico|favicon|robots.txt|og-image.png).*)",
  ],
};

export async function middleware(req: NextRequest) {
  const password = process.env.MOONLIGHT_ACCESS_PASSWORD;

  // No password configured -> portal is public, skip the gate entirely.
  if (!password) {
    return NextResponse.next();
  }

  const cookie = req.cookies.get(ACCESS_COOKIE_NAME)?.value;
  const expected = await getExpectedToken();

  if (cookie === expected) {
    return NextResponse.next();
  }

  const loginUrl = new URL("/login", req.url);
  loginUrl.searchParams.set("from", req.nextUrl.pathname);
  return NextResponse.redirect(loginUrl);
}
