import { FC, HTMLAttributes, PropsWithChildren } from "react";
import clsx from "clsx";

import styles from "./Box.module.css";

interface BoxProps
  extends Pick<HTMLAttributes<HTMLDivElement>, "className">,
    PropsWithChildren {
  /** Размер контейнера */
  size?: "m" | "s";
}

/** Компонент контейнер */
export const Box: FC<BoxProps> = ({ size = "s", children, ...props }) => {
  const boxCls = clsx(styles.box, size === "s" ? styles.boxS : styles.boxM);
  return (
    <div className={boxCls} {...props}>
      {children}
    </div>
  );
};
