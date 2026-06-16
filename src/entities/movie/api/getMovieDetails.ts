import { movieDetails } from "@/api/api-client";
import { getMovieAgeRating } from "./getMovieAgeRating";
import type { MovieDetails } from "../model/movie-details.types";
import { mapMovieDetails } from "./movie-details.mapper";

export const getMovieDetails = async (movieId: number): Promise<MovieDetails> => {
  const [detailsResponse, ageRating] = await Promise.all([
    movieDetails(movieId),
    getMovieAgeRating(movieId),
  ]);

  return {
    ...mapMovieDetails(detailsResponse.data),
    ageRating,
  };
};
