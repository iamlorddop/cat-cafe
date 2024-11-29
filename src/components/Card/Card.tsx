import { FC, HTMLAttributes } from "react";

import { Box } from "../Box";
import { Marker } from "../Marker";

import styles from "./Card.module.css";

interface CardProps extends Pick<HTMLAttributes<HTMLDivElement>, "className"> {
  /** Заголовок карточки */
  title: string;
  /** Текст в карточке */
  text: string;
  /** Ссылка на изображение */
  imgUrl: string;
  /** Тип маркера сверху изображения. По умолчанию "ok" */
  level?: "warning" | "ok";
  /** Текст маркера */
  markerText?: string;
}

/** Компонент Карточка */
export const Card: FC<CardProps> = ({
  title,
  text,
  imgUrl,
  level,
  markerText,
  ...props
}) => {
  return (
    <Box className={styles.box} {...props}>
      <div className={styles.imgContainer}>
        {markerText && (
          <Marker className={styles.marker} text={markerText} level={level} />
        )}
        <img src={imgUrl} className={styles.img} />
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
    </Box>
  );
};
