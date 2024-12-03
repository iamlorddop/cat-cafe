import { ButtonHTMLAttributes, FC } from "react";
import clsx from "clsx";

import { Icon } from "../Icon";

import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Текст кнопки */
  text?: string;
  /** Тип кнопки. По умолчанию "primary" */
  buttonType?: "primary" | "light";
  /** Кнопка выбрана */
  selected?: boolean;
  /** Класс иконки */
  iconCls?: string;
}

/** Компонент кнопка */
export const Button: FC<ButtonProps> = ({
  text,
  iconCls,
  buttonType = "primary",
  selected,
  className,
  ...props
}) => {
  const buttonCls = clsx(
    styles.button,
    styles[buttonType],
    iconCls && buttonType !== "light" && styles.buttonWithIcon,
    selected && styles.buttonSelected,
    className
  );
  return (
    <button className={buttonCls} {...props}>
      {!iconCls && text && text}
      {iconCls && <Icon className={iconCls} size="m" />}
    </button>
  );
};
