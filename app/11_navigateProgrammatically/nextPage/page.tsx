"use client";

import { useRouter } from "next/navigation";

export default function NextPage() {
  const router = useRouter();

  return (
    <>
      <h3>Next page</h3>
      <button onClick={router.back}>Back</button>
    </>
  );
}
