import type { FC } from "react";
import type { MoviePremiereCardProps } from "./type";
import MoviePoster from "@/entities/movie/ui/movie-poster";
import MovieTitle from "@/entities/movie/ui/movie-title";
import Badge from "@/shared/ui/badge";
import styles from "./MoviePremiereCard.module.css";

const MoviePremiereCard: FC<MoviePremiereCardProps> = (props) => {
  const { movie } = props;

  return (
    <article className={styles.card}>
      <MoviePoster src={movie.posterUrl} alt={movie.title} variant="vertical" />

      <MovieTitle title={movie.season ? `${movie.title}, ${movie.season}` : movie.title} />

      <div className={styles.premier}>
        <Badge variant="default">Премьера</Badge>
        <Badge variant="text">{movie.premiereDate}</Badge>
      </div>
    </article>
  );
};

export default MoviePremiereCard;
