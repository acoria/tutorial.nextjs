import { NextResponse } from "next/server";

/**
 * A function named middleware can be used to intercept any request that is sent to the server.
 * - A NextResponse needs to be returned:
 * - "next" forwards the request
 * - "redirect" can be used e.g. if a user is not logged in
 *
 * A config with e.g. filters of when to call the middleware function can be set by adding a config object.
 */

export function middleware(request: Request): NextResponse {
  console.log(request);
  //you can create a new response..
  //   new NextResponse()
  //..or use the existing one
  //next forwards the request
  return NextResponse.next();

  //redirect can be used e.g. if a user is not logged in
  //return NextResponse.redirect("http://localhost:3000/01_routes/11_anotherPage");
}

//By adding a config, e.g. a filter (=matcher) can be set on which requests to intercept.
//This will only trigger the middleware for the route "/14_middleware"
export const config = {
  matcher: "/14_middleware",
};
