import { genreMovieList } from "@/api/api-client";
import type { Genre } from "../model/genre.types";

export const getGenres = async (): Promise<Genre[]> => {
  const response = await genreMovieList();

  return (
    response.data.genres?.map((genre) => ({
      id: genre.id ?? 0,
      name: genre.name ?? "",
    })) ?? []
  );
};
