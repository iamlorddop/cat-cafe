import { FC, HTMLAttributes, useState } from "react";
import clsx from "clsx";

import { Button } from "../Button";

import styles from "./SelectButton.module.css";

interface SelectButtonProps
  extends Pick<HTMLAttributes<HTMLDivElement>, "className"> {
  /** Массив с текстом кнопок */
  options: string[];
  /** Активная кнопка */
  activeIndex?: number;
}

/** Компонет Кнопка выбора */
export const SelectButton: FC<SelectButtonProps> = ({
  options,
  activeIndex: activeButton = null,
  className,
  ...props
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(activeButton);
  const containerCls = clsx(styles.container, className);
  const handleButtonClick = (index: number): void => {
    setActiveIndex(index);
  };
  return (
    <div className={containerCls} {...props}>
      {options.map((option, index) => (
        <Button
          key={index}
          selected={index === activeIndex}
          onClick={() => handleButtonClick(index)}
          text={option}
          buttonType="light"
        />
      ))}
    </div>
  );
};
