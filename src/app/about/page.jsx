import Image from "next/image";
import styles from "./about.module.css";
import { FaRegChessKing, FaRegChessQueen, FaRegChessRook, FaRegChessKnight, FaFootball } from 'react-icons/fa6';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';


import Acordeon from "@components/acordeon/Acordeon";

export const metadata = {
  title: "Sobre nosotros",
  description: "Sobre nosotros",
};

const AboutPage = () => {

  // console.log("lets check where it works")
  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.header}>Quienes Somos</h1>
          <p className={styles.desc}>
            Somos un club apasionado por el fútbol americano, <br />el deporte,
            el compañerismo, pero sobre todo por ...
          </p>
        </div>
        <div className={styles.textContainerIzq}>
          <h1 className={styles.title}>Nuestra historia</h1>
          <p className={styles.desc}>
            En 2002 un grupo de 6 estudiantes de 3º de ESO del IES Can Planas de Barberá del Vallés (Barcelona) decidió juntarse para practicar, sin tener apenas ni idea, Flag Football, una modalidad sin contacto del fútbol americano. La principal motivación que los llevó a juntarse y crear un equipo fue la existencia del equipo profesional Barcelona Dragons y la compra del libro "Football for Dummies". Durante el curso 2001-02, ese grupo de amigos se mantuvo jugando a Football Flag, y paralelamente fue tratando de ponerse en contacto con el equipo de promoción de los Barcelona Dragons, con la finalidad de conseguir algún tipo de apoyo. En mayo de 2002 la llegada de Roberto Torrecillas llevó al grupo de amigos a jugar su primer amistoso de Flag Football. Finalmente el equipo se fundó oficialmente el 21 de diciembre de 2002 participando poco tiempo después en el torneo de Navidad de la Federación Catalana en categoría cadete.
          </p>
        </div>
        <div className={styles.textContainerIzq}>
          <h1 className={styles.title}>Palmarés</h1>
          <div className={styles.categContainer}>
            <div className={styles.categBloque}>
              <FaRegChessKing className={styles.icono} />
              <h2 className={styles.subtitle}>Equipo Senior</h2>
              <ul className={styles.ul}>
                <li className={styles.li}>Liga FCFA<br />
                  Campeón: 2007, 2010<br />
                  Subcampeón: 2008</li>
                <li className={styles.li}>LNFA<br />3er clasificado: 2009</li>
                <li className={styles.li}>Copa FCFA<br />
                  Subcampeón: 2012, 2013<br />
                </li>
                <li className={styles.li}>LNFA B<br />
                  Subcampeón: 2013</li>
              </ul>
            </div>

            <div className={styles.categBloque}>
              <FaRegChessQueen className={styles.icono} />
              <h2 className={styles.subtitle}>Equipo Femenino</h2>
              <ul className={styles.ul}>
                <li className={styles.li}>LFFA 9x9<br />Campéon: 2011, 2012, 2013, 2014, 2016, 2017, 2018, 2020, 2021, 2022</li>
                <li className={styles.li}>Copa España<br />
                  Campeón: 2011, 2012, 2013, 2014, 2016, 2017, 2018, 2020, 2021, 2022<br />
                  Subcampeón:<br />2015, 2019, 2023</li>
                <li className={styles.li}>Copa FCFA<br />Campeón: 2010, 2011</li>
              </ul>
            </div>

            <div className={styles.categBloque}>
              <FaRegChessRook className={styles.icono} />
              <h2 className={styles.subtitle}>Equipo Junior</h2>
              <ul className={styles.ul}>
                <li className={styles.li}>Liga FCFA<br />Campeones: 2006,2009</li>
                <li className={styles.li}>Liga FCFA<br />Subcampeón: 2004-05</li>
                <li className={styles.li}>Liga LNFA Junior<br />Subcampeones: 2009</li>
              </ul>
            </div>

            <div className={styles.categBloque}>
              <FaRegChessKnight className={styles.icono} />
              <h2 className={styles.subtitle}>Equipo Cadete</h2>
              <ul className={styles.ul}>
                <li className={styles.li}>Liga FCFA cadete<br />Campeones: 2004, 2008<br />
                  Subcampeón: 2010<br />
                  3er clasificado: 2006</li>
                <li className={styles.li}>LNFA cadete<br />Campeones: 2011</li>
              </ul>
            </div>

            <div className={styles.categBloque}>
              <FaFootball className={styles.icono} />
              <h2 className={styles.subtitle}>Equipo Flag sub 15</h2>
              <ul className={styles.ul}>
                <li className={styles.li}>Formando las nuevas generaciones</li>
              </ul>
            </div>

            <div className={styles.categBloque}>
              <FaFootball className={styles.icono} />
              <h2 className={styles.subtitle}>Equipo Flag sub 13</h2>
              <ul className={styles.ul}>
                <li className={styles.li}>Formando las nuevas generaciones</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.textContainerIzq}>
          <h1 className={styles.title}>Otros premios</h1>
          <div className={styles.otrosContainer}>
            <ul className={styles.ul}>
              <li className={styles.li}>2018 el equipo flag sub-15 consiguió un primer lugar en la liga española</li>
              <li className={styles.li}>2007 Campeones del torneo Badalona Dracs</li>
              <li className={styles.li}>2006 Reconocimiento de la fundación Esport Català</li>
              <li className={styles.li}>2005 Campeones del torneo Granollers Fenix</li>
            </ul>
          </div>
        </div>

        {/* <Accordion disableGutters={true} >
          <AccordionSummary id="panel-header" aria-controls="panel-content">
            <h3 className={styles.acordeon_title}>Nuestro mayor valor, son las personas...</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p className={styles.desc}></p>Todas las que forman el club, todos los jugadores y entrenadores que luchan y sobre todo toda la afición que nos mueve<p />
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary id="panel-header" aria-controls="panel-content">
            <h3 className={styles.acordeon_title}>Tu pasión, nuestro objetivo</h3>
          </AccordionSummary>
          <AccordionDetails>
            Queremos que te emociones, que sufras, que grites, … pero sobretodo que disfrutes con cada punto.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary id="panel-header" aria-controls="panel-content">
            <h3 className={styles.acordeon_title}>Forma parte del proyecto</h3>
          </AccordionSummary>
          <AccordionDetails>
            Nos haces mucha falta, este club lo mueven las personas, da igual la posición que ocupes, espectador, padre, entrenador, asistente, ATS, tesorero, directivo, jugador….  tenemos un sitio para todos vosotros
          </AccordionDetails>
        </Accordion> */}

        <div className={styles.textContainerIzq}>
          <Acordeon titulo = "Nuestro mayor valor, son las personas...">
            <p className={styles.desc}>
            Queremos que te emociones, que sufras, que grites, … pero sobretodo que disfrutes con cada punto.
            </p>
          </Acordeon>
        </div>
        <div className={styles.textContainerIzq}>
          <Acordeon titulo = "Tu pasión, nuestro objetivo">
            <p className={styles.desc}>
            Queremos que te emociones, que sufras, que grites, … pero sobretodo que disfrutes con cada punto.
            </p>
          </Acordeon>
        </div>
        <div className={styles.textContainerIzq}>
          <Acordeon titulo = "Forma parte del proyecto">
            <p className={styles.desc}>
            Nos haces mucha falta, este club lo mueven las personas, da igual la posición que ocupes, espectador, padre, entrenador, asistente, ATS, tesorero, directivo, jugador….  tenemos un sitio para todos vosotros
            </p>
          </Acordeon>
        </div>
      </div>
    </>

  );
};

export default AboutPage;