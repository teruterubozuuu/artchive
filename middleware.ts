import { NextRequest, NextResponse } from "next/server";

// Routes that require authentication
const protectedRoutes = ["/create-post", "/profile", "/settings"];

// Routes that hsould redirect to home if already logged in
const authRoutes = ["/auth/login", "/auth/sign-up"];

export function middleware(req: NextRequest){
    // Get pathname
    const path = req.nextUrl.pathname;

    // Automatically redirect to '/home'
    if (path === "/") {
        return NextResponse.redirect(new URL("/home", req.url));
    }

    // Better Auth stores session in this cookie
    const sessionCookie = 
        req.cookies.get("better-auth.session_token") ??
        req.cookies.get("__Secure-better-auth.session_token");

    const isAuthenticated = !!sessionCookie?.value;
    const isProtectedRoute = protectedRoutes.some((route)=> 
        path.startsWith(route)
    );

     const isAuthRoute = authRoutes.some((route) => path.startsWith(route));

    // Redirect unauthenticated users away from protected routes
    if (isProtectedRoute && !isAuthenticated) {
        const loginUrl = new URL("/auth/login", req.url);
        loginUrl.searchParams.set("callbackUrl", path);
        return NextResponse.redirect(loginUrl);
    }

    // Redirect authenticated users away from login/sign up
    if (isAuthRoute && isAuthenticated) {
        return NextResponse.redirect(new URL("/home", req.url));
    }

    return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - _next/static, _next/image (Next.js internals)
     * - favicon.ico
     * - public files
     * - API routes (Better Auth handles its own)
     */
    "/((?!_next/static|_next/image|favicon.ico|api/auth|.*\\..*).*)"
  ],
};

