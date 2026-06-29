import { useEffect, useState } from "react";

import { searchMovies } from "@/entities/movie/api/searchMovies";
import type { SearchMovie } from "@/entities/movie/model/search-movie.types";

import { useDebounce } from "./useDebounce";

export const useMovieSearch = (query: string) => {
  const debouncedQuery = useDebounce(query, 300);

  const [movies, setMovies] = useState<SearchMovie[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setMovies([]);
      return;
    }

    setIsLoading(true);

    searchMovies(debouncedQuery)
      .then(setMovies)
      .finally(() => setIsLoading(false));
  }, [debouncedQuery]);

  return {
    movies,
    isLoading,
  };
};
