import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// The NextResponse API allows you to:

// - redirect the incoming request to a different URL
// - rewrite the response by displaying a given URL
// - Set request headers for API Routes, getServerSideProps, and rewrite destinations
// - Set response cookies
// - Set response headers

// ! Avoid setting large headers as it might cause 431
export async function middleware(request: NextRequest) {
  const { headers } = request;

  headers.set("hello", "hello from next");

  const response = NextResponse.next({
    request: {
      headers,
    },
  });
  response.headers.set("hi", "hi from next");

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
