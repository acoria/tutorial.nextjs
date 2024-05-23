/* A fallback page for thrown errors, e.g. when data fetching goes wrong.
   The "use client" is necessary.
   This error page is used for this route, siblings and all nested routes. It can also be added on root level to catch any error.
   When picking an error page, always the closest inside the directory is chosen.
*/
"use client";

import { IHaveError } from "@/app/types/IHaveError";

export default function Error({ error }: IHaveError) {
  return (
    <main>
      <div>Oh no...An unexpected error occurred!</div>
      <div>{`This is the error message: "${error.message}"`}</div>
    </main>
  );
}
