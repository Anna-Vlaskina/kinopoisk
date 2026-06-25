import type { FC } from "react";

import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Navigation } from "swiper/modules";

import "@/shared/lib/swiper/styles";

import type { PremiereMovie } from "@/entities/movie/model/premiere-movie.types";
import { MoviePremiereCard } from "@/entities/movie/ui/movie-cards";

import styles from "./PremieresCarousel.module.css";

const Z_AXIS_DEPH = -436;
const MOVE_PERCENTAGE = "92%";

type Props = {
  premieres: PremiereMovie[];
};

export const PremieresCarousel: FC<Props> = ({ premieres }) => {
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
