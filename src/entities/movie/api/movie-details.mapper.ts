import type { MovieDetails200 } from "@/api/types";

import type { MovieDetails } from "../model/movie-details.types";
import { getPosterUrl } from "../lib/getPosterUrl";

const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/original";

const regionNames = new Intl.DisplayNames(["ru"], { type: "region" });

export const mapMovieDetails = (dto: MovieDetails200): MovieDetails => ({
  id: String(dto.id ?? ""),

  title: dto.title ?? "",

  rating: dto.vote_average ? Number(dto.vote_average.toFixed(1)) : undefined,

  date: dto.release_date ?? "",

  genre:
    dto.genres
      ?.map((genre) => genre.name)
      .slice(0, 2)
      .join(", ") ?? "",

  country: dto.production_countries?.map(
    (country) => regionNames.of(country.iso_3166_1 ?? "") ?? "",
  ),

  runtime: dto.runtime,

  posterUrl: getPosterUrl(dto.poster_path),

  backdropUrl: dto.backdrop_path ? `${BACKDROP_BASE_URL}${dto.backdrop_path}` : "",

  overview: dto.overview ?? "",
});
