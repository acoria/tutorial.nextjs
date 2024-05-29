/**
 * An interception route intercepts the navigation request and shows different pages
 * depending on whether the person navigated to the page or reloaded it.
 *
 * It is e.g. used to load a new route within the current layout while masking the URL (e.g. when opening a modal)
 *
 * Add an intercepting route by defining a folder with the page to show instead.
 * It needs to be called "(path to route to intercept)interceptedFolderName", so e.g.
 * (.) -> folder on same level or (..) -> folder one level up
 * and the name of the folder/route to intercept ->
 * (.)plant -> intercepts plant route when navigating to it by user interaction.
 * When reloaded or opened via a link, it will load the default plant route.
 */

import Link from "next/link";

export default function InterceptionRoutes() {
  return (
    <>
      Navigating via this link will intercept the route:
      <Link href={"/09_parallelRoutes/94_interceptionRoutes/plant"}>Plant</Link>
    </>
  );
}
