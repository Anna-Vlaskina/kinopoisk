import type { FC } from "react";

import clsx from "clsx";

import { Button } from "@/shared/ui/button";
import Triangle from "@/shared/assets/icons/triangle.svg?react";
import FilePlus from "@/shared/assets/icons/file-plus.svg?react";
import Heart from "@/shared/assets/icons/heart.svg?react";

import { MovieMeta } from "@/entities/movie/ui/movie-meta";
import type { MovieDetails } from "@/entities/movie/model/movie-details.types";

import { MovieHeroHeader } from "./MovieHeroHeader";

import styles from "./MovieHero.module.css";

type Props = {
  movie: MovieDetails;
};

export const MovieHero: FC<Props> = ({ movie }) => {
  return (
    <div className={clsx(styles.container)}>
      <MovieHeroHeader
        title={movie.title}
        ageRating={movie.ageRating ?? ""}
      ></MovieHeroHeader>

      <MovieMeta
        rating={movie.rating}
        date={movie.date}
        genre={movie.genre}
        country={movie.country}
        runtime={movie.runtime}
        color="primary"
      ></MovieMeta>

      <div className={clsx(styles.button)}>
        <Button
          variant="filled"
          type="button"
          icon={<Triangle />}
        >
          Смотреть фильм
        </Button>

        <Button
          variant="outlined"
          type="button"
        >
          Трейлер
        </Button>

        <Button
          variant="outlined"
          type="button"
        >
          <FilePlus />
        </Button>

        <Button
          variant="outlined"
          type="button"
        >
          <Heart />
        </Button>
      </div>
    </div>
  );
};
