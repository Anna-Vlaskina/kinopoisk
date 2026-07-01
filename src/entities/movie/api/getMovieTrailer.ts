import { movieVideos } from "@/api/api-client";

import type { MovieTrailer } from "../model/movie-trailer.types";
import { mapMovieTrailer } from "../mapper/movie-trailer.mapper";

export const getMovieTrailer = async (movieId: number): Promise<MovieTrailer | null> => {
  const response = await movieVideos(movieId);

  const trailer =
    response.data.results?.find(
      (video) => video.site === "YouTube" && video.type === "Trailer" && video.official,
    ) ??
    response.data.results?.find((video) => video.site === "YouTube" && video.type === "Trailer") ??
    null;

  return trailer ? mapMovieTrailer(trailer) : null;
};
