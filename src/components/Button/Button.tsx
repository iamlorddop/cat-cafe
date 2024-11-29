import { ButtonHTMLAttributes, FC } from "react";

import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Текст кнопки */
  text: string;
}

export const Button: FC<ButtonProps> = ({ text, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {text}
    </button>
  );
};
