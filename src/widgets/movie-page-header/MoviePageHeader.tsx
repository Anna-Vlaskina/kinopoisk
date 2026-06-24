import { type FC, useState, useEffect } from "react";

import clsx from "clsx";

import type { MovieDetails } from "@/entities/movie/model/movie-details.types";
import { getMovieDetails } from "@/entities/movie/api/getMovieDetails";

import { Header } from "../header";
import { MovieHero } from "../movie-hero/MovieHero";

import styles from "./MoviePageHeader.module.css";

type Props = {
  movieId: number;
};

export const MoviePageHeader: FC<Props> = ({ movieId }) => {
  const [movie, setMovie] = useState<MovieDetails | null>(null);

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return null;
  }

  return (
    <section className={clsx(styles.section)}>
      <div
        className={clsx(styles.backdrop)}
        style={{
          backgroundImage: `url(${movie.backdropUrl})`,
        }}
      />

      <div className={clsx(styles.content)}>
        <Header />
        <MovieHero movie={movie} />
      </div>
    </section>
  );
};
