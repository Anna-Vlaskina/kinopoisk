import type { MovieDetails } from "@/entities/movie/model/movie-details.types";
import type { MovieInfo } from "@/entities/movie/model/movie-info.types";
import type { Review } from "@/entities/review/model/review.types";

export interface MoviePageData {
  movieDetails: MovieDetails;
  movieInfo: MovieInfo;
  reviews: Review[];
}
