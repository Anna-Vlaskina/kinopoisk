import { useState, type FC } from "react";
import { MovieCollectionCard } from "../movie-card/movie-collection-card";
import styles from "./MovieRow.module.css";
import type { Movie } from "@/shared/mocks/type";
import clsx from "clsx";

type MovieProps = {
  movies: Movie[];
};

const VISIBLE_COUNT = 4;

export const MovieRow: FC<MovieProps> = ({ movies }) => {
  const [startIndex, setStartIndex] = useState(0);

  const prev = () => {
    setStartIndex((current) => Math.max(current - VISIBLE_COUNT, 0));
  };

  const next = () => {
    setStartIndex((current) =>
      current + VISIBLE_COUNT >= movies.length ? current : current + VISIBLE_COUNT,
    );
  };

  const visibleMovies = movies.slice(startIndex, startIndex + VISIBLE_COUNT);

  return (
    <div className={clsx(styles.root)}>
      <button
        className={clsx(styles.prev)}
        onClick={prev}
      >
        ←
      </button>

      <div className={clsx(styles.container)}>
        {visibleMovies.map((movie) => (
          <MovieCollectionCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>

      <button
        className={clsx(styles.next)}
        onClick={next}
      >
        →
      </button>
    </div>
  );
};
