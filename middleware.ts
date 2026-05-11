import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest){
    // Get pathname
    const path = req.nextUrl.pathname;

    // Automatically redirect to '/home'
    if (path === "/") {
        return NextResponse.redirect(new URL("/home", req.url));
    }

    return NextResponse.next();
}

