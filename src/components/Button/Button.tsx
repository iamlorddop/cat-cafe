import { ButtonHTMLAttributes, FC } from "react";
import clsx from "clsx";

import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Текст кнопки */
  text: string;
}

/** Компонент кнопка */
export const Button: FC<ButtonProps> = ({ text, className, ...props }) => {
  const buttonCls = clsx(styles.button, className);
  return (
    <button className={buttonCls} {...props}>
      {text}
    </button>
  );
};
