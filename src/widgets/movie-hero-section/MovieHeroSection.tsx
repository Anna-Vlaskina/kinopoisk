import { type FC, useState, useEffect } from "react";
import { Header } from "../header";
import { MovieHero } from "../movie-hero/movie-hero";
import type { MovieDetails } from "@/entities/movie/model/movie-details.types";
import { getMovieDetails } from "@/entities/movie/api/getMovieDetails";
import clsx from "clsx";

import styles from "./MovieHeroSection.module.css";

type Props = {
  movieId: number;
};

export const MovieHeroSection: FC<Props> = ({ movieId }) => {
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
