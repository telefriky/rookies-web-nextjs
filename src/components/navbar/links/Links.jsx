import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";

const links = [
  {
    key: 'menu-incio',
    title: "Inicio",
    path: "/",
  },
  {
    key: 'menu-elclub',
    title: "El club",
    path: "/about",
  },
  {
    key: 'menu-contactar',
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
          <NavLink key={link.key} item={link}  />
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
            <NavLink item={link} key={link.key} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
