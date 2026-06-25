import type { FC } from "react";

import clsx from "clsx";

import type { MovieDetails } from "@/entities/movie/model/movie-details.types";

import { Header } from "../header";
import { MovieHero } from "../movie-hero/MovieHero";

import styles from "./MoviePageHeader.module.css";

type Props = {
  movie: MovieDetails;
};

export const MoviePageHeader: FC<Props> = ({ movie }) => {
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
