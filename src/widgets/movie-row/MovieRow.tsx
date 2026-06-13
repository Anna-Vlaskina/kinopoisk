import type { FC } from "react";
import { CardRow } from "@/widgets/card-row";
import { MovieCollectionCard } from "../movie-card/movie-collection-card";
import type { Movie } from "@/entities/movie/model";

type Props = {
  movies: Movie[];
};

export const MovieRow: FC<Props> = ({ movies }) => {
  return (
    <CardRow
      items={movies}
      getKey={(movie) => movie.id}
      renderItem={(movie) => <MovieCollectionCard movie={movie} />}
    />
  );
};
