import { NextRequest, NextResponse } from "next/server";
import { getExpectedToken, ACCESS_COOKIE_NAME } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const submitted = form.get("password")?.toString() || "";
  const from = form.get("from")?.toString() || "/";
  const expectedPassword = process.env.MOONLIGHT_ACCESS_PASSWORD || "";

  if (!expectedPassword || submitted !== expectedPassword) {
    const url = new URL("/login", req.url);
    url.searchParams.set("error", "1");
    if (from) url.searchParams.set("from", from);
    return NextResponse.redirect(url, { status: 303 });
  }

  const token = await getExpectedToken();
  const res = NextResponse.redirect(new URL(from, req.url), { status: 303 });
  res.cookies.set(ACCESS_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: "/",
  });
  return res;
}
