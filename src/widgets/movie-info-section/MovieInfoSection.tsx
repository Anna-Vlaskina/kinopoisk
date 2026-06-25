import type { FC } from "react";

import clsx from "clsx";

import { formatRuntime } from "@/shared/lib/formatters/formatRuntime";

import type { MovieInfo } from "@/entities/movie/model/movie-info.types";

import { MovieInfoItem } from "./MovieInfoItem";

import styles from "./MovieInfoSection.module.css";

type Props = {
  movieInfo: MovieInfo;
};

export const MovieInfoSection: FC<Props> = ({ movieInfo }) => {
  return (
    <dl className={clsx(styles.section)}>
      <MovieInfoItem
        term={"Рейтинг IMDb:"}
        description={movieInfo.tmdbRating}
        variant="badge"
      />

      <MovieInfoItem
        term={"Жанр:"}
        description={movieInfo.genres.join(", ")}
      />

      <MovieInfoItem
        term={"Режиссёр:"}
        description={movieInfo.director}
      />

      <MovieInfoItem
        term={"Актёрский состав:"}
        description={movieInfo.cast.join(", ")}
      />

      <MovieInfoItem
        term={"Страна:"}
        description={movieInfo.countries.join(", ")}
      />

      <MovieInfoItem
        term={"Время:"}
        description={formatRuntime(movieInfo.runtime)}
      />

      <MovieInfoItem
        term={"Аудиодорожки:"}
        description={movieInfo.languages.join(", ")}
      />
    </dl>
  );
};
