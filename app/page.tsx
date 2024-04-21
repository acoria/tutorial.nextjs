import Link from "next/link";
import styles from "./page.module.css";
//the @ notation is an easier, alternative way of using ../ and always refers to the root folder
import SomeComponent from "@/components/someComponent/SomeComponent";

/*
  Each route needs a page.tsx file to be found.
  Each route is defined in a separate folder:
    - The folder name is the actual route e.g.
       Folder: anotherPage
                 page.tsx
       Which will call page.tsx when the route is called:
       Route: /anotherPage
 */
export default function Home() {
  return (
    <main>
      {/* Anchor tag triggers a full page reload (as seen by the x for the reload button in the browser during clicking the link) -> Use Link instead */}
      {/* <a href={"/01_anotherPage"}>Another Page</a> */}
      <div className={styles.linkBlocks}>
        <div className={styles.linkList}>
          <h1>Routes</h1>
          <Link href={"/01_anotherPage"}>01 Another Page</Link>
          <Link href={"/02_nestedRoute/nested"}>02 Nested route</Link>
          <Link href={"/dynamicRoute/dynamic-1"}>03 Dynamic route</Link>
        </div>
        <div className={styles.linkList}>
          <h1>Errors</h1>
          <Link href={"/pageThrowingError"}>10 A page throwing an error</Link>
          <Link href={"/notExist"}>11 A none-existing route</Link>
          <Link href={"/moreSpecificNotFoundError/notExist"}>
            12 A more specific route not-found error
          </Link>
        </div>
        <div className={styles.linkList}>
          <h1>Loading</h1>
          <Link href={"/loadingPage"}>20 Loading page</Link>
          <Link href={"/partiallyLoadingPage"}> 21 Partially loading page</Link>
        </div>
      </div>
      <SomeComponent />
    </main>
  );
}
