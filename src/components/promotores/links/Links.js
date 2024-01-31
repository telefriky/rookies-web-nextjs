import styles from "./links.module.css";
import Link from "next/link"
import Image from "next/image";
//import PromoLink from "./Link/Link";
//import { handleLogout } from "@/lib/action";

// retorna factor de escalado  real vs deseado
const escalarPorAltura = (alturareal, alturaDeseada) => {
  return (alturareal / alturaDeseada);
}

const promotores = [
  {
    key: '001',
    alt: "Ajuntament de Barberà del Vallès",
    src: "/logo_ayuntamiento2.png",
    href: "https://www.bdv.cat/",
    width: 152,
    height: 152,
    ratio: escalarPorAltura(100, 152)
  },
  {
    key: 'b002',
    alt: "Immotesa",
    src: "/Inmotesa.png",
    href: "https://www.immotesa.com/",
    width: 819 ,
    height: 334,
    ratio: escalarPorAltura(100, 334)
  },
  {
    key: '003',
    alt: "Lleure.Cat",
    src: "/lleure.png",
    href: "https://lleure.cat/",
    width: 443,
    height: 315,
    ratio: escalarPorAltura(100, 315)
  },
  {
    key: '004',
    alt: "la coop",
    src: "/la_coop.png",
    href: "https://lacoop.cat/",
    width: 493,
    height: 261 ,
    ratio: escalarPorAltura(100, 261)
  },
];


const PromoLinks = () => {

  // const ratio = escalarPorAltura(100, promotores[0].height)
  // console.log(promotores[0].height);
  // console.log(ratio);

  return (
    <div className={styles.container}>
        <p className={styles.texto} >
        Nuestros promotores:
        </p>      
      {promotores.map((item) => (
        <Link
          key={`colab${item.key}`}
          href={item.href}
          className={styles.imgContainer}
          target="_blank"
        >
          <Image
            key={`colabimg${item.key}`}
            className={styles.img}
            src={item.src}
            alt={item.alt}
            width={item.width * item.ratio}
            height={item.height * item.ratio}
          />
        </Link>
      ))}
    </div>
  );
};

export default PromoLinks;


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
