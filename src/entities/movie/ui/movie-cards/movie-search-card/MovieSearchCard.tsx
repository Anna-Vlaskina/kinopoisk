import type { FC } from "react";

import clsx from "clsx";
import { Link } from "react-router-dom";

import { MoviePoster } from "../../movie-poster";
import { MovieTitle } from "@/entities/movie/ui/movie-title";
import type { SearchMovie } from "@/entities/movie/model/search-movie.types";

import styles from "./MovieSearchCard.module.css";

type Props = {
  movie: SearchMovie;
  onClick?: () => void;
};

export const MovieSearchCard: FC<Props> = ({ movie, onClick }) => {
  return (
    <Link
      to={`/movie/${movie.id}`}
      onClick={onClick}
      className={clsx(styles.link)}
    >
      <article className={clsx(styles.card)}>
        <MoviePoster
          src={movie.posterUrl}
          alt={movie.title}
          variant="horizontal-sm"
        />

        <MovieTitle title={movie.title} />
      </article>
    </Link>
  );
};
