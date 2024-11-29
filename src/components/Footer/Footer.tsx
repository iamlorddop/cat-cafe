import { Logo } from "../Logo";
import { Tag } from "../Tag";

import styles from "./Footer.module.css";

/** Компонент Подвал */
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <Logo />
        <Tag text="Создано 2024" size="m" className={styles.tag} />
      </div>
    </footer>
  );
};
