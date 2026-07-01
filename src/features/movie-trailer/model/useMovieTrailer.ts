import { useState, useEffect } from "react";

import { getMovieTrailer } from "@/entities/movie/api/getMovieTrailer";
import type { MovieTrailer } from "@/entities/movie/model/movie-trailer.types";

export const useMovieTrailer = (movieId: number) => {
  const [trailer, setTrailer] = useState<MovieTrailer | null>(null);

  useEffect(() => {
    getMovieTrailer(movieId).then(setTrailer);
  }, [movieId]);

  return trailer;
};
