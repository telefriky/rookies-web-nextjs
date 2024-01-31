import Link from "next/link"
import Image from "next/image";
import styles from "./promotores.module.css";
import PromoLinks from "./links/Links"

const Promotores = () => {

  return (
    <div className={styles.container}>
      <PromoLinks />
    </div>
  );
};

export default Promotores;
