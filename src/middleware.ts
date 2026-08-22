import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/", "/auth/signIn", "/auth/login"],
};

export function middleware(req: NextRequest) {
  const cookie = req.cookies.get("AUTH_TOKEN");
  const isAuthPage =
    req.nextUrl.pathname === "/auth/signIn" ||
    req.nextUrl.pathname === "/auth/login";

  if (cookie) {
    if (isAuthPage) {
      return NextResponse.redirect(new URL("/", req.url));
    }
    return NextResponse.next();
  }

  if (!isAuthPage) {
    return NextResponse.redirect(new URL("/auth/signIn", req.url));
  }

  return NextResponse.next();
}
