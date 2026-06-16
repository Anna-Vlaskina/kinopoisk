import { getAgeRating } from "./getAgeRating";
import { movieReleaseDates } from "@/api/api-client";

export const getMovieAgeRating = async (movieId: number): Promise<string> => {
  const response = await movieReleaseDates(movieId);

  return getAgeRating(response.data.results);
};
