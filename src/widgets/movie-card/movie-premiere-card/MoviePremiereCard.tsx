import type { FC } from "react";
import type { MoviePremiereCardProps } from "./MoviePremiereCard.types";
import { MoviePoster } from "@/entities/movie/ui/movie-poster";
import { MovieTitle } from "@/entities/movie/ui/movie-title";
import { Badge } from "@/shared/ui/Badge";
import styles from "./MoviePremiereCard.module.css";
import clsx from "clsx";

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
