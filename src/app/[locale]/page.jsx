import Image from "next/image";
import styles from "./home.module.css";
// internacionalizacion: una vez por pagina
import initTranslations from '@/../i18n';
import TranslationsProvider from '@/components/locales/TranslationsProvider';
import LanguageChanger from "@/components/locales/LanguageChanger";
// fin 

const i18nNamespaces = ['home', 'common'];

const Home = async ({ params: { locale } }) => {

  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lo tienes todo para ser un Rookie?</h1>
          
          <h1>{t('header')}test</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            blanditiis adipisci minima reiciendis a autem assumenda dolore.
          </p>
          <div className={styles.buttons}>
            <button className={styles.button}>Learn More</button>
            <button className={styles.button}>Contact</button>
          </div>

        </div>
        <div className={styles.imgContainer}>
          <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
        </div>

      </div>
    </TranslationsProvider>
  );
};

export default Home;