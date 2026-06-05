// import { Swiper, SwiperSlide } from 'swiper/react';
// import type { FC } from 'react';
// import { Navigation, EffectCreative  } from 'swiper/modules';
// import { MoviePremiereCard } from '../movie-card/movie-premiere-card';
// import type { Movie } from "@/shared/mocks/type";
// import styles from "./PremieresCarouselNew.module.css";

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/effect-creative';

// type MovieProps = {
//   movies: Movie[];
// };

// export const PremieresCarouselNew: FC<MovieProps> = ({ movies }) => {
//   return (
//     <Swiper
//       modules={[Navigation, EffectCreative]}
//       navigation
//       effect="creative"
//       creativeEffect={{
//         prev: {
//           translate: [300, 0, -1],
//           scale: 0.8,
//         },
//         next: {
//           translate: [500, 0, -2],
//           scale: 0.6,
//         },
//       }}
//       slidesPerView={3}
//       centeredSlides={false}
//     >
//       {movies.map((movie) => (
//         <SwiperSlide key={movie.id} className={styles.slide}>
//           <MoviePremiereCard movie={movie} />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Movie } from "@/shared/mocks/type";
import type { FC } from "react";
import { MoviePremiereCard } from "../movie-card/movie-premiere-card";

import "swiper/css";
import "swiper/css/navigation";

import styles from "./PremieresCarouselNew.module.css";

type MovieProps = {
  movies: Movie[];
};

export const PremieresCarouselNew: FC<MovieProps> = ({ movies }) => {
  return (
    <div className={styles.viewport}>
      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={false}
        watchSlidesProgress={true}
        className={styles.swiper}
      >
        {movies.map((movie) => (
          <SwiperSlide
            key={movie.id}
            className={styles.slide}
          >
            <div className={styles.card}>
              <MoviePremiereCard movie={movie} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
