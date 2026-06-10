import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import { Navigation } from "swiper/modules";
import type { Movie } from "@/shared/mocks/type";
import type { FC } from "react";
import { MoviePremiereCard } from "../movie-card/movie-premiere-card";
import clsx from "clsx";

import "@/shared/lib/swiper/styles";

import styles from "./PremieresCarousel.module.css";

type MovieProps = {
  movies: Movie[];
};

const Z_AXIS_DEPH = -436;
const MOVE_PERCENTAGE = "92%";

export const PremieresCarousel: FC<MovieProps> = ({ movies }) => {
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
        {movies.map((movie) => (
          <SwiperSlide
            key={movie.id}
            className={clsx(styles.slide)}
          >
            <MoviePremiereCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
