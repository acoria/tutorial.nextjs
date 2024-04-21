import Logo from "@/assets/logo.svg";
import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.header}>
      {/* Images:
            - automatically generate a srcset to best support different viewports and devices.
            - automatically resize to a certain size 
            - are lazy loaded per default. Since this is a header logo and will always be visible, lazy loading does not make sense. Hence the priority can be set. */}
      <Image src={Logo} alt="A tree" priority />
      <Link href={"/"}>
        <h1>Next.js Tutorial</h1>
      </Link>
    </div>
  );
}
