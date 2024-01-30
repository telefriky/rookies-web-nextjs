import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";

//import { useTranslation } from "react-i18next";

const NavLink = ({ item }) => {
  const pathName = usePathname();

  //const {t} = useTranslation()
    
  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathName === item.path && styles.active
      }`}
    >
      {/* {t(`$common:{item.key}`)} */}
      {item.title}
    </Link>
  );
};

export default NavLink;
