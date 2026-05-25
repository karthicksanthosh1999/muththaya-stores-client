import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const PUBLIC_ROUTES = ["/login", "/register"];

export function proxy(req: NextRequest) {
  const token = req.cookies.get("refreshToken")?.value;
  console.log(token)

  const pathname = req.nextUrl.pathname;

  // Allow public routes
  if (PUBLIC_ROUTES.includes(pathname)) {
    return NextResponse.next();
  }

  // No token → redirect
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    // Verify token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as {
      id: string;
      role: string;
    };

    // Role-based protection
    if (pathname.startsWith("/admin")) {
      if (decoded.role !== "admin") {
        return NextResponse.redirect(new URL("/unauthorized", req.url));
      }
    }

    // Example for user route
    if (pathname.startsWith("/dashboard")) {
      if (!["admin", "user"].includes(decoded.role)) {
        return NextResponse.redirect(new URL("/login", req.url));
      }
    }

    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/dashboard/:path*",
  ],
};