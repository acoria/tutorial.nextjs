"use client";
import { ReactNode } from "react";
import { useFormStatus } from "react-dom";

/**
 * The hook useFormStatus is only accessible inside a client component. It returns whether a submit is pending
 * e.g. due to a server action being executed
 */
export default function FormSubmitButton(): ReactNode {
  // const status = useFormStatus();
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>{pending ? "Submitting..." : "Submit"}</button>
  );
}
