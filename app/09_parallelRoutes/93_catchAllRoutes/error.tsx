"use client";

import { IHaveError } from "@/app/types/IHaveError";

export default function Error({ error }: IHaveError) {
  return (
    <div>
      <h1>An error occurred:</h1>
      <h2>{error.message}</h2>
    </div>
  );
}
