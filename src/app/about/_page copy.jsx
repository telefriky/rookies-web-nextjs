import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "Sobre nosotros",
  description: "Sobre nosotros",
};

const AboutPage1 = () => {

  // console.log("lets check where it works")
  return (
    <>s
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Quienes Somos</h1>
          <p className={styles.desc}>
            Somos un club apasionado por el fútbol americano, el deporte,
            el compañerismo, pero sobre todo por ...
          </p>
        </div>
        <div className={styles.textContaineeIzq}>
          <h1 className={styles.title}>Nuestra historia</h1>
          <p className={styles.desc}>
            En 2002 un grupo de 6 estudiantes de 3º de ESO del IES Can Planas de Barberá del Vallés (Barcelona) decidió juntarse para practicar, sin tener apenas ni idea, Flag Football, una modalidad sin contacto del fútbol americano. La principal motivación que los llevó a juntarse y crear un equipo fue la existencia del equipo profesional Barcelona Dragons y la compra del libro "Football for Dummies". Durante el curso 2001-02, ese grupo de amigos se mantuvo jugando a Football Flag, y paralelamente fue tratando de ponerse en contacto con el equipo de promoción de los Barcelona Dragons, con la finalidad de conseguir algún tipo de apoyo. En mayo de 2002 la llegada de Roberto Torrecillas llevó al grupo de amigos a jugar su primer amistoso de Flag Football. Finalmente el equipo se fundó oficialmente el 21 de diciembre de 2002 participando poco tiempo después en el torneo de Navidad de la Federación Catalana en categoría cadete.
          </p>
        </div>
        <div className={styles.textContaineeIzq}>
          <h1 className={styles.title}>Palmarés</h1>

          <div className={styles.categContainer}>
            test
            <div className={styles.ul}>
              icono
              <h2 className={styles.subtitle}>Equipo Senior</h2>
              <ul className={styles.ul}>
                <li className={styles.ul}>1</li>
                <li className={styles.ul}>2</li>
                <li className={styles.ul}>3</li>
                <li className={styles.ul}>4</li>
                <li className={styles.ul}>5</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            descripcion de club1.
          </h1>
          <p className={styles.desc}>
            descripcion de club
          </p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Year of experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Year of experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Year of experience</p>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/about.png"
            alt="About Image"
            fill
            className={styles.img}
          />
        </div>
      </div>
    </>

  );
};

export default AboutPage1;