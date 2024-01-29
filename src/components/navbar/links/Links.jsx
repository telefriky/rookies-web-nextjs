import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
//import { handleLogout } from "@/lib/action";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "El club",
    path: "/about",
  },
  {
    title: "Contactar",
    path: "/contact",
  },
  // {
  //   title: "Blog",
  //   path: "/blog",
  // },
];

const Links = ({session}) => {
  const [open, setOpen] = useState(false);

  // TEMPORARY
  // const session = true;
  // const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <form action={handleLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
        <Link href="/" locale="es">ES&nbsp;</Link>
        <Link href="/" locale="en">EN&nbsp;</Link>
        <Link href="/" locale="ca">CA&nbsp; </Link>
      </div>
      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
