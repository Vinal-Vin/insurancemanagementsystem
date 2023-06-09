import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    console.log("token: ", req.nextauth.token);

    if (
      req.nextUrl.pathname.startsWith("/dashboard") &&
      req.nextauth.token?.role !== "customer"
    )
      return NextResponse.rewrite(
        new URL("/api/auth/signin?message=You Are Not Authorized!", req.url)
      );
    // if (
    //   (req.nextUrl.pathname.startsWith("/user") &&
    //     req.nextauth.token?.role !== "user") ||
    //   req.nextauth.token?.role !== "admin"
    // )
    //   return NextResponse.rewrite(
    //     new URL("/api/auth/signin?message=You Are Not Authorized!", req.url)
    //   );
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*"],
};
