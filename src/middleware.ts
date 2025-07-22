import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export const config = {
  matcher: ["/admin/:path*"],
};

export default async function middleware(req: NextRequest) {
  const token = await getToken({ req });

  if (!token || token.role !== "admin") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}
