"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Link.module.css";
import { usePathname } from "next/navigation";

const PromoLink = ({ item }) => {
  const { pathName } = usePathname()
  return (
    <Link
      href={item.href}
      className={`${styles.container} ${pathName === item.href && styles.active
        }`}
    >
      {item.href}
      {/* <Image
        className={styles.menuButton}
        src={item.src}
        alt={item.alt}
        width={item.width}
        height={item.height}
      /> */}
    </Link>
  );
};

export default PromoLink;
