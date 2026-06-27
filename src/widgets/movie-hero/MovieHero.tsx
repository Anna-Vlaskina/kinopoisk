import { type FC, useState } from "react";

import clsx from "clsx";

import { Button } from "@/shared/ui/button";
import { Modal } from "@/shared/ui/modal";
import Triangle from "@/shared/assets/icons/triangle.svg?react";
import FilePlus from "@/shared/assets/icons/file-plus.svg?react";

import { MovieMeta } from "@/entities/movie/ui/movie-meta";
import type { MovieDetails } from "@/entities/movie/model/movie-details.types";

import { MovieLikeButton } from "@/features/movie-like/ui/MovieLikeButton";

import { MovieHeroHeader } from "./MovieHeroHeader";

import styles from "./MovieHero.module.css";

type Props = {
  movie: MovieDetails;
};

export const MovieHero: FC<Props> = ({ movie }) => {
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  return (
    <>
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
            onClick={() => setIsTrailerOpen(true)}
          >
            Трейлер
          </Button>

          <Button
            variant="outlined"
            type="button"
          >
            <FilePlus />
          </Button>

          <MovieLikeButton movieId={Number(movie.id)}></MovieLikeButton>
        </div>
      </div>

      <Modal
        isOpen={isTrailerOpen}
        onClose={() => setIsTrailerOpen(false)}
      >
        {"Здесь будет плеер"}
      </Modal>
    </>
  );
};
