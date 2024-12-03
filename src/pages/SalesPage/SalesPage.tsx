import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import "swiper/swiper-bundle.css";

import {
  Header,
  Footer,
  Button,
  Box,
  Accordion,
  SelectButton,
} from "../../components";

import CatImage from "../../assets/cat-with-plant.png";
import VectorImage from "../../assets/vector-middle.png";
import VectorLightImage from "../../assets/vector-light.png";
import PlantImage from "../../assets/plant-left.png";
import PawImage from "../../assets/red-paw.png";
import SwiperImageOne from "../../assets/swiper-img-1.jpg";
import SwiperImageTwo from "../../assets/swiper-img-2.jpg";
import SwiperImageThree from "../../assets/swiper-img-3.jpg";
import SwiperImageFour from "../../assets/swiper-img-4.jpg";
import SwiperImageFive from "../../assets/swiper-img-5.jpg";

import styles from "./SalesPage.module.css";
import { useRef, useState } from "react";
import clsx from "clsx";

/** Компонент Страницы Заказа */
export const SalesPage = () => {
  const [activeSwiperImage, setActiveSwiperImage] = useState<string>();
  const [activeSwiperImageIndex, setActiveSwiperImageIndex] =
    useState<number>(0);
  const swiperRef = useRef<SwiperType>();
  const swiperImages = [
    {
      id: 0,
      url: SwiperImageOne,
    },
    {
      id: 1,
      url: SwiperImageTwo,
    },
    {
      id: 2,
      url: SwiperImageThree,
    },
    {
      id: 3,
      url: SwiperImageFour,
    },
    {
      id: 4,
      url: SwiperImageFive,
    },
  ];
  const handleSwiper = (swiper: SwiperType): void => {
    const activeImage = swiperImages.filter(
      (image) => image.id === activeSwiperImageIndex
    );
    setActiveSwiperImage(activeImage[0].url);
    setActiveSwiperImageIndex(swiper.realIndex);
  };
  return (
    <>
      <Header />
      <main>
        <section className={styles.sectionGallery}>
          <div className={styles.containerGallery}>
            <h1 className={styles.title}>Галерея нашего кафе</h1>
            <div className={styles.swiperContainer}>
              <div className={styles.swiperActiveImageContainer}>
                <img src={activeSwiperImage} />
              </div>
              <Swiper
                spaceBetween={20}
                slidesPerView={4}
                loop
                autoplay={{ delay: 2000 }}
                onSlideChange={handleSwiper}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
              >
                {swiperImages.map((image) => (
                  <SwiperSlide
                    key={image.id}
                    className={clsx(
                      styles.slide,
                      activeSwiperImageIndex !== image.id && styles.slideBlured
                    )}
                  >
                    <img src={image.url} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <Button
                onClick={() => swiperRef.current?.slidePrev()}
                className={styles.prevButton}
                iconCls={styles.prevIcon}
              />
              <Button
                onClick={() => swiperRef.current?.slideNext()}
                className={styles.nextButton}
                iconCls={styles.nextIcon}
              />
            </div>
          </div>
          <img src={VectorLightImage} className={styles.vectorLightImage} />
          <img src={PlantImage} className={styles.plantImage} />
          <img src={PawImage} className={styles.pawImage} />
        </section>
        <section className={styles.sectionSales}>
          <div className={styles.containerSales}>
            <div>
              <h2 className={styles.titleSales}>Купить билет</h2>
              <Box className={styles.box} size="m">
                <div className={styles.boxContainer}>
                  <p className={styles.boxBoldText}>
                    Продолжительность (часов)
                  </p>
                  <SelectButton
                    options={["1", "2", "3", "4", "5"]}
                    activeIndex={0}
                  />
                </div>
                <div className={styles.boxContainer}>
                  <p className={styles.boxBoldText}>Тип билета</p>
                  <Accordion
                    title="Стандартный"
                    list={[
                      "Акции по пристройству и выставки кошек",
                      "Встречи фелинологов и любителей кошек",
                      "Мероприятия для детей, экскурсии",
                    ]}
                    checked
                  />
                  <Accordion
                    title="VIP"
                    list={[
                      "Акции по пристройству и выставки кошек",
                      "Встречи фелинологов и любителей кошек",
                      "Мероприятия для детей, экскурсии",
                    ]}
                  />
                </div>
                <div>
                  <p className={styles.salesText}>
                    <span>Цена:</span>300 рублей
                  </p>
                </div>
                <Button text="Купить билет" className={styles.button} />
              </Box>
            </div>
            <img src={CatImage} className={styles.catImage} />
          </div>
          <img src={VectorImage} className={styles.vectorImage} />
        </section>
      </main>
      <Footer />
    </>
  );
};
