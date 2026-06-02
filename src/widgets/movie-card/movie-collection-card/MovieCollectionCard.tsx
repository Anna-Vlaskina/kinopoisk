import type { FC } from "react";
import MovieMeta from "@/entities/movie/ui/movie-meta";
import MoviePoster from "@/entities/movie/ui/movie-poster";
import MovieTitle from "@/entities/movie/ui/movie-title";
import styles from "./MovieCollectionCard.module.css";
import type { MovieCollectionCardProps } from "./type";

const MovieCollectionCard: FC<MovieCollectionCardProps> = ({ movie }) => {
  return (
    <article className={styles.card}>
      <MoviePoster src={movie.posterUrl} alt={movie.title} variant="horizontal" />

      <MovieMeta rating={movie.rating} type={movie.type} genre={movie.genre} />

      <MovieTitle title={movie.title} />
    </article>
  );
};

export default MovieCollectionCard;
