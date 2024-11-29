import { useLocation } from "react-router-dom";

import { Logo } from "../Logo";
import { Button } from "../Button";

import styles from "./Header.module.css";

export const Header = () => {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Logo />
        {location.pathname === "/" && (
          <Button text="Купить билет" className={styles.button} />
        )}
      </div>
    </header>
  );
};
