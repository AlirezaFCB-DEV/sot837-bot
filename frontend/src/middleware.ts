import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/", "/auth/login"],
};

export function middleware(req: NextRequest) {
  const cookie = req.cookies.get("AUTH_TOKEN");
  const isAuthPage = req.nextUrl.pathname === "/auth/login";

  if (cookie) {
    if (isAuthPage) {
      return NextResponse.redirect(new URL("/", req.url));
    }
    return NextResponse.next();
  }

  if (!isAuthPage) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return NextResponse.next();
}
