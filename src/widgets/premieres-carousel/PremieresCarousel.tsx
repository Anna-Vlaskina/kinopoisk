import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import { Navigation } from "swiper/modules";
import type { PremiereMovie } from "@/entities/movie/model/premiere-movie.types";
import { getUpcomingMovies } from "@/entities/movie/api/getUpcomingMovies";
import type { FC } from "react";
import { MoviePremiereCard } from "../movie-card/movie-premiere-card";
import clsx from "clsx";

import "@/shared/lib/swiper/styles";

import styles from "./PremieresCarousel.module.css";

const Z_AXIS_DEPH = -436;
const MOVE_PERCENTAGE = "92%";

export const PremieresCarousel: FC = () => {
  const [premieres, setPremieres] = useState<PremiereMovie[]>([]);

  useEffect(() => {
    getUpcomingMovies().then(setPremieres);
  }, []);

  return (
    <div className={styles.viewport}>
      <Swiper
        className={clsx(styles.slider)}
        modules={[Navigation, EffectCreative]}
        effect={"creative"}
        slidesPerView={"auto"}
        grabCursor
        loop
        creativeEffect={{
          limitProgress: 3,
          perspective: true,
          prev: { translate: [`-${MOVE_PERCENTAGE}`, 0, Z_AXIS_DEPH] },
          next: { translate: [MOVE_PERCENTAGE, 0, Z_AXIS_DEPH] },
        }}
      >
        {premieres.map((premiere) => (
          <SwiperSlide
            key={premiere.id}
            className={clsx(styles.slide)}
          >
            <MoviePremiereCard movie={premiere} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
