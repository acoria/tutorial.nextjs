import Link from "next/link";
import styles from "./page.module.css";
//the @ notation is an easier, alternative way of using ../ and always refers to the root folder
import SomeComponent from "@/components/someComponent/SomeComponent";
import { LinkList } from "@/components/linkList/LinkList";

/**
 * Each route needs a page.tsx file to be found.
 * Each route is defined in a separate folder:
 *  - The folder name is the actual route e.g.
 *    Folder: anotherPage
 *              page.tsx
 *     Which will call page.tsx when the route is called:
 *     Route: /anotherPage
 *
 * The layout file wraps each page into a default layout.
 */

export default function Home() {
  return (
    <main>
      {/* Anchor tag triggers a full page reload (as seen by the x for the reload button in the browser during clicking the link) -> Use Link instead */}
      {/* <a href={"/01_anotherPage"}>Another Page</a> */}
      <div className={styles.linkBlockRow}>
        <div className={styles.linkBlocks}>
          <LinkList title="01 Routes">
            <Link href={"/01_routes/11_anotherPage"}>11 Another Page</Link>
            <Link href={"/01_routes/12_nestedRoute/nested"}>
              12 Nested route
            </Link>
            <Link href={"/01_routes/13_dynamicRoute/dynamic-1"}>
              13 Dynamic route
            </Link>
          </LinkList>
          <LinkList title="02 Layout">
            <Link href={"/02_layout/subpageInheritingLayout"}>Layouting</Link>
          </LinkList>
          <LinkList title="03 Errors">
            <Link href={"/03_errorHandling/31_pageThrowingError"}>
              31 A page throwing an error
            </Link>
            <Link href={"/03_errorHandling/notExist"}>
              A none-existing route (showing not-found.tsx)
            </Link>
            <Link href={"/03_errorHandling/32_selfTriggerNotFound"}>
              32 Self-trigger not-found.tsx{" "}
            </Link>
            <Link href={"/03_errorHandling/33_moreSpecificNotFoundError"}>
              33 Show a more specific not-found.tsx
            </Link>
          </LinkList>
          <LinkList title="04 Loading">
            <Link href={"/04_loading/41_loadingPage"}>41 Loading page</Link>
            <Link href={"/04_loading/42_partiallyLoadingPage"}>
              42 Partially loading page
            </Link>
          </LinkList>
          <LinkList title="05 Metadata">
            <Link href={"/05_metadata/51_static"}>51 static</Link>
            <Link href={"/05_metadata/52_dynamic/dynamicTitle"}>
              52 dynamic
            </Link>
          </LinkList>
        </div>
        <div className={styles.linkBlockRow}>
          <div className={styles.linkBlocks}>
            <LinkList title="06 Caching">
              <Link href={"/06_caching"}>Caching</Link>
            </LinkList>
            <LinkList title="07 Forms">
              <Link href={"/07_forms/71_oldFashionedFormSubmit"}>
                71 Old-fashioned form submit
              </Link>
              <Link href={"/07_forms/72_serverActionFormSubmit"}>
                72 Server action form submit
              </Link>
              <Link href={"/07_forms/73_serverActionWithUX"}>
                73 Server action with UX
              </Link>
              <Link href={"/07_forms/74_validation"}>74 Validation</Link>
            </LinkList>
            <LinkList title="08 Redirect">
              <Link href={"/08_redirect"}>Redirect</Link>
            </LinkList>
            <LinkList title="09 Parallel Routes">
              <Link href={"/09_parallelRoutes"}>Parallel Routes</Link>
            </LinkList>
          </div>
        </div>
      </div>
      <SomeComponent />
    </main>
  );
}
