import { useEffect, useState } from "react";
import { getMovieDetails } from "@/entities/movie/api/getMovieDetails";
import { Text } from "@/shared/ui/Text";
import type { MovieDetails } from "@/entities/movie/model/movie-details.types";
import type { FC } from "react";

import styles from "./MovieOverview.module.css";
import clsx from "clsx";

type Props = {
  movieId: number;
};

export const MovieOverview: FC<Props> = ({ movieId }) => {
  const [movie, setMovie] = useState<MovieDetails | null>(null);

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return null;
  }

  return (
    <section className={clsx(styles.section)}>
      <Text
        tag="h2"
        size="2xl"
        weight="bold"
      >
        О фильме
      </Text>

      <Text
        tag="p"
        size="md"
        weight="regular"
        color="secondary"
      >
        {movie.overview}
      </Text>
    </section>
  );
};
