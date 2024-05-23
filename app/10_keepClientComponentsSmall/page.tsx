import { ReactElement } from "react";
import { NavLink } from "./navLink/NavLink";

/**
 * Try to keep components that need to be client components, e.g. components needing hooks ({@link NavLink}) or user interactions, as small as possible.
 */
export default function KeepClientComponentsSmall(): ReactElement {
  return (
    <div>
      <h3>Main page</h3>
    </div>
  );
}
