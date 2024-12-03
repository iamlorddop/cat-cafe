import { Link, useLocation } from "react-router-dom";

import { Logo } from "../Logo";
import { Button } from "../Button";

import styles from "./Header.module.css";

/** Компонент Титульной панели */
export const Header = () => {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link to="/">
          <Logo />
        </Link>
        {location.pathname === "/" && (
          <Link to="/sales">
            <Button text="Купить билет" className={styles.button} />
          </Link>
        )}
        {location.pathname === "/sales" && (
          <Link to="/" className={styles.link}>
            Главная
          </Link>
        )}
      </div>
    </header>
  );
};
