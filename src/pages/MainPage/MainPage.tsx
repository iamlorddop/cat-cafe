import { Link } from "react-router-dom";

import { Header, Footer, Tag, Button, Card, Icon } from "../../components";
import { catsData } from "../../utils";

import FirstScreenImage from "../../assets/girl-with-cat.png";
import Paw from "../../assets/red-white-paw.png";
import Vector from "../../assets/vector-light.png";
import Plant from "../../assets/plant-right.png";

import styles from "./MainPage.module.css";

/** Компонент Главная страница */
export const MainPage = () => {
  return (
    <>
      <Header />
      <section className={styles.sectionFirstScreen}>
        <div className={styles.containerFirstScreen}>
          <div>
            <h1 className={styles.titleFirstScreen}>
              Первое в России котокафе
            </h1>
            <p className={styles.text}>
              Крупнейшее котокафе России, в котором живёт 50 кошек
              <br />
              и котов, и каждый из них ищет новый дом. Животных
              <br />
              можно гладить, фотографировать, играть с ними.
            </p>

            <Tag text="Рабочее время с 8:00 до 23:00" className={styles.tag} />

            <div className={styles.label}>
              <Icon className={styles.icon} />
              Санкт-Петербург, набережная реки Карповки, дом 5, литера П
            </div>
          </div>

          <img src={FirstScreenImage} alt="Котокафе" />
        </div>
      </section>

      <section className={styles.sectionCats}>
        <div className={styles.containerCats}>
          <h1 className={styles.titleCats}>Наши звезды</h1>
          <div className={styles.cardsContainer}>
            {catsData.map((cat) => (
              <Card
                key={cat.title}
                level={cat?.level}
                markerText={cat?.markerText}
                title={cat.title}
                text={cat.text}
                imgUrl={cat.url}
                className={styles.card}
              />
            ))}
          </div>
          <Link to="/sales">
            <Button text="Купить билет" className={styles.button} />
          </Link>

          <img src={Paw} className={styles.pawImage} />
          <img src={Vector} className={styles.vectorImage} />
          <img src={Plant} className={styles.plantImage} />
        </div>
      </section>
      <Footer />
    </>
  );
};
