// middleware.js or your middleware file
import { NextResponse } from 'next/server';

export function middleware(req) {
    const url = req.nextUrl.clone();
    const { pathname } = url;

    // Define paths to exclude from redirection
    const excludedPaths = [
        '/under-construction', // Your under-construction page
        '/favicon.ico', // Favicon
        '/robots.txt', // Robots.txt
    ];

    // Exclude Next.js internal paths and static assets
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.startsWith('/static') ||
        pathname.startsWith('/public') ||
        excludedPaths.some((path) => pathname === path)
    ) {
        return NextResponse.next();
    }

    // Redirect all other paths to /under-construction
    url.pathname = '/under-construction';
    return NextResponse.redirect(url);
}
