import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Helper function to check if the path is for a public file
function isPublicFile(pathname: string) {
  return (
    pathname.includes(".") &&
    (pathname.startsWith("/images/") ||
      pathname.startsWith("/videos/") ||
      pathname.startsWith("/fonts/") ||
      pathname.startsWith("/assets/"))
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow direct access to public files
  if (isPublicFile(pathname)) {
    return NextResponse.next();
  }

  // For development - replace with actual auth logic later
  const isAuthenticated = false; // Temporarily set to true for development

  const publicRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/forgot-password",
    "/auth/getting-started",
    "/auth/returning-user-registration",
  ];

  const isPublicRoute = publicRoutes.includes(pathname);

  // Redirect to login if trying to access protected routes while not authenticated
  if (!isAuthenticated && !isPublicRoute) {
    return NextResponse.redirect(new URL("/auth/getting-started", request.url));
  }

  // Redirect to home if trying to access auth pages while authenticated
  if (isAuthenticated && isPublicRoute) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all routes except:
     * - API routes
     * - Next.js internals
     * - Direct public file access
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
