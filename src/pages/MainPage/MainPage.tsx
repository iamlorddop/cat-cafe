import { Header, Footer, Tag } from "../../components";

import FirstScreenImage from "../../assets/girl-with-cat.png";

import styles from "./MainPage.module.css";

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
              Крупнейшее котокафе России, в котором живёт 50 кошек и котов, и
              каждый из них ищет новый дом. Животных можно гладить,
              фотографировать, играть с ними.
            </p>

            <Tag text="Рабочее время с 8:00 до 23:00" />
          </div>

          <img src={FirstScreenImage} alt="Котокафе" />
        </div>
      </section>
      <Footer />
    </>
  );
};
