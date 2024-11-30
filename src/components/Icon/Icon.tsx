import { FC, HTMLAttributes } from "react";
import clsx from "clsx";

import styles from "./Icon.module.css";

interface IconProps extends Pick<HTMLAttributes<HTMLDivElement>, "className"> {
  /** Размер иконки. По умолчанию "s" */
  size?: "s" | "m";
}

/** Компонент Иконка */
export const Icon: FC<IconProps> = ({ size = "s", className, ...props }) => {
  const iconCls = clsx(
    styles.icon,
    size === "s" ? styles.iconS : styles.iconM,
    className
  );
  return <i className={iconCls} {...props} />;
};
