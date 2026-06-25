import { getMovieDetails } from "@/entities/movie/api/getMovieDetails";
import { getMovieInfo } from "@/entities/movie/api/getMovieInfo";
import { getMovieReviews } from "@/entities/review/api/getMovieReviews";

import type { MoviePageData } from "../MoviePage.type";

export const getMoviePageData = async (movieId: number): Promise<MoviePageData> => {
  const [movieDetails, movieInfo, reviews] = await Promise.all([
    getMovieDetails(movieId),
    getMovieInfo(movieId),
    getMovieReviews(movieId),
  ]);

  return {
    movieDetails,
    movieInfo,
    reviews,
  };
};
