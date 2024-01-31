import Link from "next/link"
import Image from "next/image";

import Promotores from "@components/promotores/Promotores";
import styles from "./footer.module.css";
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { Montserrat as MiFuente } from 'next/font/google'

function RedesSociales() {
  return (
    <div>
      <FaTwitter />
      <FaFacebook />
      <FaInstagram />
    </div>
  );
}

const fuente = MiFuente({ subsets: ['latin'], weight: '400' })

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <>
      <footer className={`${styles.container} ${fuente.className}`}>
        <div className={styles.container1}>
          <div className={styles.bloque}>
            <h3 className={styles.text}>LLevas en tus venas sangre guerrera?</h3>
            <p className={styles.text}>Hazte miembro de nuestro club y te sentirás imparable, te mantendremos informado de todo</p>
          </div>

          <div className={styles.bloqueiconos}>
            <Link href="https://www.instagram.com/barbera_rookies/" target="_blank" >
              <FaInstagram className={styles.icono} />
            </Link>
            <Link href="https://www.facebook.com/barberarookiescfa" target="_blank" >
              <FaFacebook className={styles.icono} />
            </Link>
            {/* <Link href="https://www.instagram.com/barbera_rookies/" target="_blank" >
              <FaTwitter className={styles.icono} />
            </Link> */}
          </div>

          <div className={styles.bloque}>
            <h3 className={styles.text}>Conócenos</h3>
            <Link href="/conocenos"
              className={styles.link}>
              Más sobre nosotros
            </Link>
            <Link href="/tienda"
              className={styles.link}>
              Nuestra tienda</Link>
            <Link href="/contacta"
              className={styles.link}>
              Estamos conectados
            </Link>
          </div>

          <div className={styles.bloque}>
            <h3 className={styles.text}>Nuestro Copromiso</h3>
            <Link href="/privacidad"
              className={styles.link}>
              Política privacidad & Cookies
            </Link><br />
            <Link href="/avisolegal"
              className={styles.link}>
              Aviso legal y condiciones de uso</Link><br />
          </div>
        </div >
      </footer >
      <div className={`${styles.containercopy} ${fuente.className}`}>
        <div className={styles.container1copy}>
          <div className={styles.text}>Copyright © 2002-{year}</div>
        </div>
      </div>
    </>
  );

};

export default Footer;
