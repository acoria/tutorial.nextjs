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
 */

export default function Home() {
  return (
    <main>
      {/* Anchor tag triggers a full page reload (as seen by the x for the reload button in the browser during clicking the link) -> Use Link instead */}
      {/* <a href={"/01_anotherPage"}>Another Page</a> */}
      <div className={styles.linkBlockRow}>
        <div className={styles.linkBlocks}>
          <LinkList title="01 Routes">
            <Link href={"/01_routes/01_anotherPage"}>01 Another Page</Link>
            <Link href={"/01_routes/02_nestedRoute/nested"}>
              02 Nested route
            </Link>
            <Link href={"/01_routes/03_dynamicRoute/dynamic-1"}>
              03 Dynamic route
            </Link>
          </LinkList>
          <LinkList title="02 Errors">
            <Link href={"/02_errorHandling/01_pageThrowingError"}>
              01 A page throwing an error
            </Link>
            <Link href={"/02_errorHandling/notExist"}>
              A none-existing route (showing not-found.tsx)
            </Link>
            <Link href={"/02_errorHandling/02_selfTriggerNotFound"}>
              02 Self-trigger not-found.tsx{" "}
            </Link>
            <Link href={"/02_errorHandling/03_moreSpecificNotFoundError"}>
              03 Show a more specific not-found.tsx
            </Link>
          </LinkList>
          <LinkList title="03 Loading">
            <Link href={"/03_loading/01_loadingPage"}>01 Loading page</Link>
            <Link href={"/03_loading/02_partiallyLoadingPage"}>
              02 Partially loading page
            </Link>
          </LinkList>
          <LinkList title="04 Metadata">
            <Link href={"/04_metadata/01_static"}>01 static</Link>
            <Link href={"/04_metadata/02_dynamic/dynamicTitle"}>
              02 dynamic
            </Link>
          </LinkList>
          <LinkList title="05 Caching">
            <Link href={"/05_caching"}>Caching</Link>
          </LinkList>
        </div>
        <div className={styles.linkBlockRow}>
          <div className={styles.linkBlocks}>
            <LinkList title="06 Forms">
              <Link href={"/06_forms/01_oldFashionedFormSubmit"}>
                01 Old-fashioned form submit
              </Link>
              <Link href={"/06_forms/02_serverActionFormSubmit"}>
                02 Server action form submit
              </Link>
              <Link href={"/06_forms/03_serverActionWithUX"}>
                03 Server action with UX
              </Link>
              <Link href={"/06_forms/04_validation"}>
                04 Validation
              </Link>
            </LinkList>
            <LinkList title="07 Redirect">
              <Link href={"/07_redirect"}>Redirect</Link>
            </LinkList>
          </div>
        </div>
      </div>
      <SomeComponent />
    </main>
  );
}
