import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

/**
 * Middleware
 */
export default withAuth(
  async function middleware(request) {
    const { pathname } = request.nextUrl;
    const token = request.nextauth?.token;
    const userRole = token?.role as "admin" | "manager" | "kasir" | "finance";

    // Redirect authenticated users trying to access the login page
    if (pathname === "/login" && token) {
      return NextResponse.redirect(
        new URL("/crm/dashboard/customer", request.url)
      );
    }

    // Redirect unauthenticated users trying to access protected routes
    if (pathname.startsWith("/crm") && !token) {
      return NextResponse.redirect(new URL("/(auth)/login", request.url));
    }

    // Define role-based access paths
    const rolePaths = {
      admin: ["/crm", "/manager", "/kasir", "/finance"],
      manager: ["/manager", "/crm"],
      kasir: ["/kasir"],
      finance: ["/finance"],
    };

    // Role-based redirection based on allowed paths
    if (userRole && rolePaths[`${userRole}`]) {
      const allowedPaths = rolePaths[`${userRole}`];
      if (!allowedPaths.some((path) => pathname.startsWith(path))) {
        return NextResponse.redirect(new URL(allowedPaths[0], request.url));
      }
    } else if (!userRole) {
      // Redirect to login if the role is unrecognized or missing
      return NextResponse.redirect(new URL("/(auth)/login", request.url));
    }

    // Add Authorization header for API requests
    if (pathname.startsWith("/api/v1") && token?.accessToken) {
      const requestHeaders = new Headers(request.headers);
      requestHeaders.set("Authorization", `Bearer ${token.accessToken}`);
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
      authorized: ({ token }) => !!token,
    },
  }
);

// Match routes for CRM, admin, kasir, finance, manager, and API requests
export const config = {
  matcher: [
    "/crm/:path*",
    "/admin/:path*",
    "/kasir/:path*",
    "/finance/:path*",
    "/manager/:path*",
    "/api/v1/:path*",
  ],
};
