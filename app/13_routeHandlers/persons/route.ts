import { NextRequest } from "next/server";

/**
 * You can define endpoints to call from another application inside a route.ts file.
 * It receives a request and has to return a response.
 */
export function GET(request: NextRequest) {
  console.log(request);

  const url: URL = new URL(request.url);
  const id = url.searchParams.get("id");

  return new Response(
    `Hello! The ID for the person you were looking for is '${id}'`
  );
}

// export function POST(request: Request){}
