import type { FC } from "react";

import clsx from "clsx";

import type { SearchMovie } from "@/entities/movie/model/search-movie.types";
import { MovieSearchCard } from "@/entities/movie/ui/movie-cards";

import styles from "./MovieSearchPanel.module.css";

type Props = {
  movies: SearchMovie[];
  isLoading: boolean;
};

export const MovieSearchPanel: FC<Props> = ({ movies, isLoading }) => {
  if (isLoading) {
    return <div className={clsx(styles.panel)}>Поиск...</div>;
  }

  if (!movies.length) {
    return null;
  }

  return (
    <div className={styles.panel}>
      <div className={styles.grid}>
        {movies.map((movie) => (
          <MovieSearchCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </div>
  );
};
