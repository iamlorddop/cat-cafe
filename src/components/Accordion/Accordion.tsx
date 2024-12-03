import { FC, HTMLAttributes, MouseEvent, useState } from "react";
import clsx from "clsx";

import styles from "./Accordion.module.css";
import { RadioButton } from "../RadioButton";
import { Icon } from "../Icon";

interface AccordionProps
  extends Pick<HTMLAttributes<HTMLDivElement>, "className"> {
  /** Заголовок аккордиона */
  title: string;
  /** Массив текста элементов списка */
  list: string[];
  /** Выбран ли аккордион */
  checked?: boolean;
  /** Обработчик изменения выбранного состояния */
  onChange?: (checked: boolean) => void;
}

/** Компонент Аккордион */
export const Accordion: FC<AccordionProps> = ({
  title,
  list,
  checked = false,
  onChange,
  className,
  ...props
}) => {
  const [showList, setShowList] = useState<boolean>(checked);
  const accordionCls = clsx(styles.accordion, className);
  const iconCls = clsx(showList ? styles.iconUp : styles.iconDown);
  const handleHeaderClick = (e: MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
    setShowList((v) => !v);
  };

  return (
    <div className={accordionCls} {...props}>
      <div className={styles.header} onClick={handleHeaderClick}>
        <RadioButton checked={checked} onChange={onChange} label={title} />
        <Icon className={iconCls} />
      </div>
      {showList && (
        <div className={styles.content}>
          <ul className={styles.list}>
            {list.map((li) => (
              <li key={li} className={styles.listItem}>
                {li}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
