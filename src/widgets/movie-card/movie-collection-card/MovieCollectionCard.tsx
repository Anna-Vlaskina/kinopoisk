import type { FC } from "react";
import MovieMeta from "@/entities/movie/ui/movie-meta";
import MoviePoster from "@/entities/movie/ui/movie-poster";
import MovieTitle from "@/entities/movie/ui/movie-title";
import styles from "./MovieCollectionCard.module.css";
import type { MovieCollectionCardProps } from "./type";

const MovieCollectionCard: FC<MovieCollectionCardProps> = (props) => {
  const { title, posterUrl, rating, type, genre } = props;

  return (
    <article className={styles.card}>
      <MoviePoster src={posterUrl} alt={title} variant="horizontal" />

      <MovieMeta rating={rating} type={type} genre={genre} />

      <MovieTitle title={title} />
    </article>
  );
};

export default MovieCollectionCard;
