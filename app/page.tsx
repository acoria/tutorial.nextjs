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
      <div className={styles.linkBlocks}>
        <div className={styles.linkList}>
          <h1>Routes</h1>
          {/* Anchor tag triggers a full page reload (as seen by the x for the reload button in the browser during clicking the link) -> Use Link instead */}
          {/* <a href={"/anotherPage"}>Another Page</a> */}
          <Link href={"/anotherPage"}>Another Page</Link>
          <Link href={"/nestedRoute/nested"}>Nested route</Link>
          <Link href={"/dynamicRoute/dynamic-1"}>Dynamic route</Link>
        </div>
        <div className={styles.linkList}>
          <h1>Errors</h1>
          <Link href={"/pageThrowingError"}>A page throwing an error</Link>
          <Link href={"/notExist"}>A none-existing route</Link>
        </div>
        <div className={styles.linkList}>
          <h1>Loading</h1>
          <Link href={"/loadingPage"}>Loading page</Link>
          <Link href={"/partiallyLoadingPage"}>Partially loading page</Link>
        </div>
      </div>
      <SomeComponent />
    </main>
  );
}
