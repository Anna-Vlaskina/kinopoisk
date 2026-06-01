import type { FC } from "react";
import type { MoviePremiereCardProps } from "./type";
import MoviePoster from "@/entities/movie/ui/movie-poster";
import MovieTitle from "@/entities/movie/ui/movie-title";
import Badge from "@/shared/ui/badge";
import styles from "./MoviePremiereCard.module.css";

const MoviePremiereCard: FC<MoviePremiereCardProps> = (props) => {
  const { title, posterUrl, season, premiereDate } = props;

  return (
    <article className={styles.card}>
      <MoviePoster src={posterUrl} alt={title} variant="vertical" />

      <MovieTitle title={season ? `${title}, ${season}` : title} />

      <div className={styles.premier}>
        <Badge variant="default">Премьера</Badge>
        <Badge variant="text">{premiereDate}</Badge>
      </div>
    </article>
  );
};

export default MoviePremiereCard;
