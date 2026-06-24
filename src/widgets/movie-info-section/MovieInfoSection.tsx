import { useState, useEffect, type FC } from "react";

import clsx from "clsx";

import { formatRuntime } from "@/shared/lib/formatters/formatRuntime";

import type { MovieInfo } from "@/entities/movie/model/movie-info.types";
import { getMovieInfo } from "@/entities/movie/api/getMovieInfo";

import { MovieInfoItem } from "./MovieInfoItem";

import styles from "./MovieInfoSection.module.css";

type Props = {
  movieId: number;
};

export const MovieInfoSection: FC<Props> = ({ movieId }) => {
  const [movie, setMovie] = useState<MovieInfo | null>(null);

  useEffect(() => {
    getMovieInfo(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return null;
  }

  return (
    <dl className={clsx(styles.section)}>
      <MovieInfoItem
        term={"Рейтинг IMDb:"}
        description={movie.tmdbRating}
        variant="badge"
      />

      <MovieInfoItem
        term={"Жанр:"}
        description={movie.genres.join(", ")}
      />

      <MovieInfoItem
        term={"Режиссёр:"}
        description={movie.director}
      />

      <MovieInfoItem
        term={"Актёрский состав:"}
        description={movie.cast.join(", ")}
      />

      <MovieInfoItem
        term={"Страна:"}
        description={movie.countries.join(", ")}
      />

      <MovieInfoItem
        term={"Время:"}
        description={formatRuntime(movie.runtime)}
      />

      <MovieInfoItem
        term={"Аудиодорожки:"}
        description={movie.languages.join(", ")}
      />
    </dl>
  );
};
