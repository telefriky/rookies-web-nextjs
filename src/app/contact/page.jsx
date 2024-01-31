import Image from "next/image";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contactar",
  description: "Contactar",
};

const ContactPage = () => {

  // console.log("lets check where it works")
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
        Contactar
        </h1>
        <p className={styles.desc}>
        Contactar
        </p>

      </div>
    </div>
  );
};

export default ContactPage;