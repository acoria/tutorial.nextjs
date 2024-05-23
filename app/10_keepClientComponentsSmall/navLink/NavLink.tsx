"use client";
import Link from "next/link";
import { INavLinkProps } from "./INavLinkProps";
import styles from "./NavLink.module.css";
import { usePathname } from "next/navigation";

export const NavLink: React.FC<INavLinkProps> = (props) => {
  const path = usePathname();

  return (
    <Link
      href={props.href}
      className={`${styles.link} ${
        path.startsWith(props.href) ? styles.active : ""
      }`}
    >
      {props.caption}
    </Link>
  );
};
