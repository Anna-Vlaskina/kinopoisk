import { discoverMovie } from "@/api/api-client";
import { hasReadableTitle } from "../lib/hasReadableTitle";
import type { Movie } from "../model/movie.types";
import { mapMovie } from "./movie.mapper";

export const getMoviesByGenre = async (
  genreId: number,
  genresMap: Map<number, string>,
): Promise<Movie[]> => {
  const response = await discoverMovie({
    with_genres: String(genreId),
  });

  return (response.data.results ?? [])
    .filter((movie) => hasReadableTitle(movie.title ?? ""))
    .map((movie) => mapMovie(movie, genresMap));
};
