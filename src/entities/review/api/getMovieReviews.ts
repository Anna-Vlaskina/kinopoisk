import { movieReviews } from "@/api/api-client";
import { mapReview } from "../mapper/review.mapper";
import type { Review } from "../model/review.types";

export const getMovieReviews = async (movieId: number, language = "en-US"): Promise<Review[]> => {
  const response = await movieReviews(movieId, { language });

  return response.data.results?.map(mapReview) ?? [];
};
