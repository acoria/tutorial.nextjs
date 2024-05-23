/**
 * This is a dynamic way of handling nested routes.
 */

import { IHaveNestedParams } from "@/app/09_parallelRoutes/types/IHaveNestedParams";
import Link from "next/link";
import { ReactElement } from "react";
import styles from "./page.module.css";

/**
 * Routes are handed over via params in form of an array:
 * 1) / -> params object is empty
 * 2) /<year> -> params contains [<year>]
 * 3) /<year>/<month> -> params contains [<year>, <month>]
 */
export default function News(nestedParams: IHaveNestedParams) {
  const { params } = nestedParams;

  const navigationButtons: ReactElement = (
    <div className={styles.buttons}>
      <Link href={"/09_parallelRoutes/93_catchAllRoutes"}>{`Route /`}</Link>
      <Link
        href={"/09_parallelRoutes/93_catchAllRoutes/2024"}
      >{`Route /2024`}</Link>
      <Link href={"/09_parallelRoutes/93_catchAllRoutes/2023/12"}>
        {`Route /2023/12`}{" "}
      </Link>
    </div>
  );

  const content = (): ReactElement => {
    const year = params.slugs?.[0];
    const month = params.slugs?.[1];
    //check which content to show, depending on the depth of the routing
    if (month !== undefined) {
      //also check for invalid routes
      checkIsValidPathParam(month);
      return <div>{`News of year ${year} and month ${month}`}</div>;
    } else if (year !== undefined) {
      checkIsValidPathParam(year);
      return <div>{`News of year ${year}`}</div>;
    } else {
      //The slug is empty for the main page
      return <>No news selected</>;
    }
  };

  const checkIsValidPathParam = (pathParam: string) => {
    if (isNaN(+pathParam)) {
      throw Error(`Invalid path parameter '${pathParam}'`);
    }
  };

  return (
    <>
      <div>Select your route:</div>
      <div>{navigationButtons}</div>
      <div className={styles.content}>{content()}</div>
    </>
  );
}
