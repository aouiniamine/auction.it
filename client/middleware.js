import { NextResponse } from "next/server";

export function middleware(request) {
  const headers = new Headers(request.headers);
  headers.set("current-path", request.nextUrl.pathname);
  return NextResponse.next({headers});
}

export const config = {
  matcher: [
    // match all routes except static files and APIs
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};