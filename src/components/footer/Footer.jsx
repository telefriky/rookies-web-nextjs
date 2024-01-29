import Link from "next/link"
import Image from "next/image";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div><h3>LLevas en tus venas sangre guerrera?</h3>
          <p>Hazte miembro de nuestro club y te sentirás imparable, te mantendremos informado de todo</p>
        </div>

        <div><h3>Conócenos</h3>
          <Link href="/conocenos"
            className={styles.imgContainer}>
            Más sobre nosotros
          </Link>
          <Link href="/tienda"
            className={styles.imgContainer}>
            Nuestra tienda</Link>
          <Link href="/contacta"
            className={styles.imgContainer}>
            Estamos conectados
          </Link>
        </div>

        <div><h3>Nuestro Copromiso</h3>
          <Link href="/privacidad"
            className={styles.imgContainer}>
            Política privacidad & Cookies
          </Link>
          <Link href="/avisolegal"
            className={styles.imgContainer}>
            Aviso legal y condiciones de uso</Link>
        </div>

      </div>
      <div className={styles.text}>Copyright © 2024 | Tienda - Rookies Barbera</div>
    </>
  );

};

export default Footer;
