import type { FC } from "react";

import clsx from "clsx";
import { Link } from "react-router-dom";

import { MovieMeta } from "@/entities/movie/ui/movie-meta";
import { MoviePoster } from "@/entities/movie/ui/movie-poster";
import { MovieTitle } from "@/entities/movie/ui/movie-title";

import type { MovieCollectionCardProps } from "./MovieCollectionCard.types";

import styles from "./MovieCollectionCard.module.css";

export const MovieCollectionCard: FC<MovieCollectionCardProps> = ({ movie }) => {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className={clsx(styles.link)}
    >
      <article className={clsx(styles.card)}>
        <MoviePoster
          src={movie.posterUrl}
          alt={movie.title}
          variant="horizontal"
        />

        <MovieMeta
          rating={movie.rating}
          type={movie.type}
          genre={movie.genre}
        />

        <MovieTitle title={movie.title} />
      </article>
    </Link>
  );
};
