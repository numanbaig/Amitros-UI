import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Configuration types
type EnvironmentConfig = {
  publicRoutes: string[];
  publicFilePaths: string[];
  authRedirectPath: string;
  homePath: string;
};

// Load environment-specific configuration
const middlewareConfig: EnvironmentConfig = {
  publicRoutes: [
    "/auth/login",
    "/auth/register",
    "/auth/forgot-password",
    "/auth/getting-started",
    "/auth/returning-user-registration",
  ],
  publicFilePaths: [
    "/images/",
    "/videos/",
    "/fonts/",
    "/assets/",
    "/favicon.ico",
    "/robots.txt",
    "/sitemap.xml",
  ],
  authRedirectPath: "/auth/getting-started",
  homePath: "/",
};

// Improved public file detection with memoization
const publicFileRegex = /\..*$/;
function isPublicFile(pathname: string): boolean {
  return (
    publicFileRegex.test(pathname) &&
    middlewareConfig.publicFilePaths.some((publicPath) =>
      pathname.startsWith(publicPath)
    )
  );
}

// Security headers configuration
const securityHeaders = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1; mode=block",
  // Additional recommended security headers
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const authCookie = request.cookies.get("auth_token");

  // Early return for public files
  if (isPublicFile(pathname)) {
    return NextResponse.next();
  }

  const isAuthenticated = !!authCookie?.value;
  const isPublicRoute = middlewareConfig.publicRoutes.includes(pathname);

  // Authentication redirection logic
  if (!isAuthenticated && !isPublicRoute) {
    return NextResponse.redirect(
      new URL(middlewareConfig.authRedirectPath, request.url)
    );
  }

  if (isAuthenticated && isPublicRoute) {
    return NextResponse.redirect(
      new URL(middlewareConfig.homePath, request.url)
    );
  }

  // Apply security headers
  const response = NextResponse.next();
  Object.entries(securityHeaders).forEach(([header, value]) => {
    response.headers.set(header, value);
  });

  return response;
}

// Middleware matcher configuration
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|_next/data|_next/client|_next/server|_next/webpack-hmr).*)",
  ],
};
