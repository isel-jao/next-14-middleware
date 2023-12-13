import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// The NextResponse API allows you to:

// - redirect the incoming request to a different URL
// - rewrite the response by displaying a given URL
// - Set request headers for API Routes, getServerSideProps, and rewrite destinations
// - Set response cookies
// - Set response headers

export async function middleware(request: NextRequest) {
  const { cookies } = request;
  const { pathname } = request.nextUrl;
  console.log({ pathname, cookies });

  const response = NextResponse.next();

  // response.cookies.delete("next-auth.session-token");
  // response.cookies.delete("__client_uat");
  // response.cookies.delete("__session");
  response.cookies.set("isel", "jao");
  // response.cookies.set({
  //   name: "issam",
  //   value: "el jaouhary",
  //   path: "/about",
  //   expires: new Date(Date.now() + 1000 * 30),
  // });
  console.log({ hasIssam: request.cookies.has("issam") });

  return response;
}

export const config = {
  // Configured matchers:
  // 1 - must start with /

  // 2 - Can include named parameters: /about/:path matches /about/a and /about/b but not /about/a/c

  // 3 - Can have modifiers on named parameters (starting with :): /about/:path* matches /about/a/b/c because * is zero or more. ? is zero or one and + one or more

  // 4 - Can use regular expression enclosed in parenthesis: /about/(.*) is the same as /about/:path*
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
