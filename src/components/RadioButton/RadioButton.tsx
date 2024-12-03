import { FC, HTMLAttributes } from "react";

import styles from "./RadioButton.module.css";
import clsx from "clsx";

interface RadioButtonProps
  extends Omit<HTMLAttributes<HTMLInputElement>, "onChange" | "value">,
    Pick<HTMLAttributes<HTMLDivElement>, "className"> {
  /** Текст лейбл */
  label?: string;
  /** Значение в радио-кнопке */
  checked?: boolean;
  /** Обработчик измения значения */
  onChange?: (checked: boolean) => void;
}

export const RadioButton: FC<RadioButtonProps> = ({
  label,
  checked,
  onChange,
  className,
  ...props
}) => {
  const labelCls = clsx(styles.label, className);
  return (
    <label htmlFor="radio-button" className={labelCls}>
      <input
        type="radio"
        id="radio-button"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        className={styles.input}
        {...props}
      />
      <span className={styles.radioButton}></span>
      {label}
    </label>
  );
};
