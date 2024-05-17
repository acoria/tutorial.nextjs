"use client";
import { useFormStatus } from "react-dom";

/**
 * This component needs to be placed inside a form in order to receive the form's status.
 * The status can be retrieved via the useFormStatus hook. It is only accessible inside a client component. It returns whether a submit is pending.
 * e.g. due to a server action being executed
 */
export const FormSubmitButton = () => {
//   const status = useFormStatus();
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};
