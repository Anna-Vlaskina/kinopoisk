import type { FC } from "react";

import clsx from "clsx";

import { Badge } from "@/shared/ui/badge";

import { MoviePoster } from "@/entities/movie/ui/movie-poster";
import { MovieTitle } from "@/entities/movie/ui/movie-title";

import type { MoviePremiereCardProps } from "./MoviePremiereCard.types";

import styles from "./MoviePremiereCard.module.css";

export const MoviePremiereCard: FC<MoviePremiereCardProps> = (props) => {
  const { movie } = props;

  return (
    <article className={clsx(styles.card)}>
      <MoviePoster
        src={movie.posterUrl}
        alt={movie.title}
        variant="vertical"
      />

      <MovieTitle title={movie.title} />

      <div className={clsx(styles.premier)}>
        <Badge variant="default">Премьера</Badge>
        <Badge variant="text">{movie.premiereDate}</Badge>
      </div>
    </article>
  );
};
