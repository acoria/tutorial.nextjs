"use client";

import { FormEvent } from "react";

/**
 * This is the old-fashioned way of submitting a form
 */
export default function OldFashionedForm() {
  const onSubmit = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    //send data
  };

  return (
    <main>
      <form>
        <label htmlFor="nameInput">Name</label>
        <input id="nameInput" />
        <button type="submit" onSubmit={onSubmit}>
          Send name
        </button>
      </form>
    </main>
  );
}
