"use client";

import { useRouter } from "next/navigation";

/**
 * Use useRouter to:
 *  navigate forwards
 *  navigate backwards
 *  push a new page onto the stack
 *  replace a current item on the stack
 *  refresh the page
 */

export default function NavigateProgrammatically() {
  const router = useRouter();

  router.prefetch;

  return (
    <>
      <button onClick={router.back}>Backwards</button>
      <button
        onClick={() => router.push("/11_navigateProgrammatically/nextPage")}
      >
        Next page
      </button>
      <button onClick={router.forward}>
        Forwards (after you have been to next page)
      </button>
    </>
  );
}
