import { FC, HTMLAttributes } from "react";
import clsx from "clsx";

import styles from "./Tag.module.css";

interface TagProps extends Pick<HTMLAttributes<HTMLDivElement>, "className"> {
  /** Текстовое содержимое тега */
  text: string;
  /** Размер тега. По умолчанию "s" */
  size?: "m" | "s";
}

/** Компонент Тег */
export const Tag: FC<TagProps> = ({
  text,
  size = "s",
  className,
  ...props
}) => {
  const tagCls = clsx(
    styles.tag,
    size === "s" ? styles.tagS : styles.tagM,
    className
  );
  return (
    <div className={tagCls} {...props}>
      {text}
    </div>
  );
};
