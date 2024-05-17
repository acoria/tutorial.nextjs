import { Metadata } from "next";

/**
 * Metadata can be added statically with an object of the same name.
 * It can be adjusted for each page individually.
 */
export const metadata: Metadata = {
  title: "The title of the tab",
};

export default function Component() {
  return <>Static metadata</>;
}
