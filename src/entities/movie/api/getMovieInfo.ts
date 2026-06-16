import type { MovieInfo } from "../model/movie-info.types";
import { movieDetails } from "@/api/api-client";
import { movieCredits } from "@/api/api-client";
import { movieExternalIds } from "@/api/api-client";
import { mapMovieInfo } from "./movie-info.mapper";

export const getMovieInfo = async (movieId: number): Promise<MovieInfo> => {
  const [detailsResponse, creditsResponse, externalIdsResponse] = await Promise.all([
    movieDetails(movieId),
    movieCredits(movieId),
    movieExternalIds(movieId),
  ]);

  return mapMovieInfo(detailsResponse.data, creditsResponse.data, externalIdsResponse.data);
};
