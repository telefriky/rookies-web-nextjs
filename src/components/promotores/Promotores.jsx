import Link from "next/link"
import Image from "next/image";
import styles from "./promotores.module.css";
import PromoLinks from "./links/Links"

const Promotores = () => {
  const f = 0.75
  const w = 600 * f;
  const h = 118 * f;

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.texto} >
        Nuestros promotores:
        </p>
      </div>
      <PromoLinks />
    </div>
  );
};

export default Promotores;
