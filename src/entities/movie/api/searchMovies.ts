import { searchMovie } from "@/api/api-client";

import type { SearchMovie } from "../model/search-movie.types";

import { mapSearchMovie } from "../mapper/search-movie.mapper";

export const searchMovies = async (query: string): Promise<SearchMovie[]> => {
  if (!query.trim()) {
    return [];
  }

  const response = await searchMovie({
    query,
  });

  return response.data.results?.map(mapSearchMovie) ?? [];
};
