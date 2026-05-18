import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import type { UserRole } from "../auth/types";

export function createRoleMiddleware(expectedRole: UserRole, protectedPrefix: string) {
  return function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const isProtected = pathname.startsWith(protectedPrefix);

    if (!isProtected) {
      return NextResponse.next();
    }

    const token = request.cookies.get("vndn_access_token")?.value;
    const role = request.cookies.get("vndn_role")?.value;

    if (!token || role !== expectedRole) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
  };
}

export const roleMiddlewareConfig = {
  matcher: ["/dashboard/:path*", "/account/:path*"],
};
