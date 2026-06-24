import type { MovieDetails200 } from "@/api/types";
import { getBackdropUrl } from "../lib/getBackdropUrl";
import { formatCountry } from "@/shared/lib/formatters/formatCountry";
import type { MovieDetails } from "../model/movie-details.types";
import { getPosterUrl } from "../lib/getPosterUrl";

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

  country: dto.production_countries?.map((country) => formatCountry(country.iso_3166_1)),

  runtime: dto.runtime,

  posterUrl: getPosterUrl(dto.poster_path),

  backdropUrl: getBackdropUrl(dto.backdrop_path),

  overview: dto.overview ?? "",
});
