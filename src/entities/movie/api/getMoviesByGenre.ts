import { discoverMovie } from "@/api/api-client";
import type { Movie } from "../model/movie.types";
import { mapMovie } from "./movie.mapper";

const hasReadableTitle = (title: string): boolean => {
  return /[A-Za-zА-Яа-яЁё]/.test(title);
};

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
