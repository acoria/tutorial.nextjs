"use server";

import { redirect } from "next/navigation";

/**
 * By calling redirect with the path to navigate to, you can navigate inside a server component
 */
export const redirectToForms = async () => {
  redirect("/");
};
