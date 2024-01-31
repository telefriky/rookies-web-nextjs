import styles from "./links.module.css";
import Link from "next/link"
import Image from "next/image";
//import PromoLink from "./Link/Link";
//import { handleLogout } from "@/lib/action";

const promotores = [
  {
    key: '001',
    alt: "Ajuntament de Barberà del Vallès",
    src: "/logo_ayuntamiento2.png",
    href: "https://www.bdv.cat/",
    width: 100,
    height: 100,
  },
  {
    key: 'b002',
    alt: "Immotesa",
    src: "/Inmotesa.png",
    href: "https://www.immotesa.com/",
    width: 250,
    height: 100,
  },
  {
    key: '003',
    alt: "Lleure.Cat",
    src: "/lleure.png",
    href: "https://lleure.cat/",
    width: 100,
    height: 100,
  },
  {
    key: '004',
    alt: "la coop",
    src: "/la_coop.png",
    href: "https://lacoop.cat/",
    width: 150,
    height: 100,
  },
];


// const LinksSession = ({session}) => {
//   const [open, setOpen] = useState(false);

//   // TEMPORARY
//   // const session = true;
//   // const isAdmin = true;

//   return (
//     <div className={styles.container}>
//       <div className={styles.links}>
//         {links.map((link) => (
//           <NavLink item={link} key={link.title} />
//         ))}
//         {session?.user ? (
//           <>
//             {session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
//             <form action={handleLogout}>
//               <button className={styles.logout}>Logout</button>
//             </form>
//           </>
//         ) : (
//           <NavLink item={{ title: "Login", path: "/login" }} />
//         )}
//       </div>
//       <Image
//         className={styles.menuButton}
//         src="/menu.png"
//         alt=""
//         width={30}
//         height={30}
//         onClick={() => setOpen((prev) => !prev)}
//       />
//       {open && (
//         <div className={styles.mobileLinks}>
//           {links.map((link) => (
//             <NavLink item={link} key={link.title} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

const PromoLinks = () => {

  return (
    <div className={styles.container}>
      {promotores.map((item) => (
        <div>
          <Link
            key={`colab${item.key}` }
            href={item.href}
            className={styles.imgContainer}
            target="_blank"
          >
            <Image
            key={`colabimg${item.key}` }
            className={styles.img}
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PromoLinks;
