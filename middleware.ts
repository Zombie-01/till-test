import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

/**
 * Middleware
 */
export default withAuth(
  async function middleware(req) {
    const { pathname } = req.nextUrl;

    if (pathname === "/login" && req.nextauth.token) {
      return NextResponse.redirect(new URL("/crm/dasboard/customer", req.url));
    }

    // Protect /crm and its subfolders
    if (pathname.startsWith("/crm") && !req.nextauth.token) {
      return NextResponse.redirect(new URL("/(auth)/login", req.url));
    }

    // const sessionData = await getToken({ req, secret });

    // Modify headers for API requests
    if (pathname.startsWith("/api/v1") && req.nextauth?.token?.accessToken) {
      console.log("req.nextauth?.token?.accessToken", req.nextauth?.token?.accessToken);
      const requestHeaders = new Headers(req.headers);
      requestHeaders.set("Authorization", `Bearer ${req.nextauth?.token?.accessToken}`);
      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      // Optionally add authorization callback
      authorized: ({ token }) => !!token,
    },
  }
);

// Match /crm and ANY route that comes after it
export const config = { matcher: ["/crm/:path*", "/api/v1/:path*"] };
