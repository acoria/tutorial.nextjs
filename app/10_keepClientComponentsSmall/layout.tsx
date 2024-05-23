import { IHaveLayout } from "../types/IHaveLayout";
import { NavLink } from "./navLink/NavLink";
import styles from "./page.module.css";

export default function Layout({ children }: IHaveLayout) {
  return (
    <div>
      <div className={styles.navLinks}>
        <NavLink
          href="/10_keepClientComponentsSmall/persons"
          caption="Persons"
        />
        <NavLink
          href="/10_keepClientComponentsSmall/devices"
          caption="Devices"
        />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
