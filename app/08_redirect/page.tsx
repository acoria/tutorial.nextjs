"use client";

import { ReactNode } from "react";
import { redirectToForms as redirectToHome } from "./redirectToHome";

export default function Redirect(): ReactNode {
  return (
    <button
      onClick={() => {
        redirectToHome();
      }}
    >
      Redirect to home
    </button>
  );
}
