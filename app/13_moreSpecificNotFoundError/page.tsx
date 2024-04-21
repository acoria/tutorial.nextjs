import { notFound } from "next/navigation";

/* You can always show a more detailed not-found.tsx if you want to show more details about an error.
 */
export default function MoreSpecificNotFoundError() {
  notFound();
}
