import { useState, type FC } from "react";
import { MoviePremiereCard } from "../movie-card/movie-premiere-card";
import styles from "./PremieresCarousel.module.css";
import type { Movie } from "@/shared/mocks/type";

type MovieProps = {
  movies: Movie[];
};

export const PremieresCarousel: FC<MovieProps> = ({ movies }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((current) => (current === 0 ? movies.length - 1 : current - 1));
  };

  const next = () => {
    setActiveIndex((current) => (current + 1) % movies.length);
  };

  const getPosition = (index: number) => {
    const length = movies.length;

    const second = (activeIndex + 1) % length;
    const third = (activeIndex + 2) % length;

    if (index === activeIndex) return "active";
    if (index === second) return "second";
    if (index === third) return "third";

    return "hidden";
  };

  return (
    <div className={styles.root}>
      <button className={styles.prev} onClick={prev}>
        ←
      </button>

      <div className={styles.container}>
        {movies.map((movie, index) => (
          <div key={movie.id} className={`${styles.slide} ${styles[getPosition(index)]}`}>
            <MoviePremiereCard movie={movie} />
          </div>
        ))}
      </div>

      <button className={styles.next} onClick={next}>
        →
      </button>
    </div>
  );
};
