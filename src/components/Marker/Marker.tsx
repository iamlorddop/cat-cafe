import { FC, HTMLAttributes } from "react";
import clsx from "clsx";

import styles from "./Marker.module.css";

interface MarkerProps
  extends Pick<HTMLAttributes<HTMLDivElement>, "className"> {
  /** Текст маркера */
  text: string;
  /** Тип маркера. По умолчанию "ok" */
  level?: "warning" | "ok";
}

/** Компонент Маркер */
export const Marker: FC<MarkerProps> = ({
  text,
  level = "ok",
  className,
  ...props
}) => {
  const markerCls = clsx(
    styles.marker,
    level === "ok" ? styles.markerOk : styles.markerWarning,
    className
  );
  return (
    <div className={markerCls} {...props}>
      {text}
    </div>
  );
};
