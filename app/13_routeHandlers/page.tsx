"use client";
import { ReactElement } from "react";

/**
 * To define endpoints for an API, you can add a route.ts file which includes the http methods as function.
 */
export default function RouteHandlers(): ReactElement {
  // The url serves as an API and can be called from anywhere
  const url = "http://localhost:3000/13_routeHandlers/persons?id=5";

  return (
    <>
      <button onClick={() => navigator.clipboard.writeText(url)}>
        Copy url to clipboard
      </button>
      ...and open in browser
    </>
  );
}
