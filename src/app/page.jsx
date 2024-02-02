import Image from "next/image";
import styles from "./home.module.css";

const Home = async () => {


  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Lo tienes todo <br />para ser un<br />Rookie?</h1>
        {/* <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div> */}
      </div>

      <div className={styles.imgContainer}>
        <div className={styles.imgContainerHero}>
          <Image src="/home_hero.jpg" 
            alt="" 
            priority 
            fill 
            style={{
              objectFit: 'contain', // cover, contain, none
            }}
            sizes="(min-width: 808px) 50vw, 100vw"
            />
        </div>
      </div>
    </div>
  );
};

export default Home;