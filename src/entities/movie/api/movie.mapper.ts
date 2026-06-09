import type { Movie } from "../model/movie.types";
import { getPosterUrl } from "../lib/getPosterUrl";
import { capitalize } from "@/shared/lib/capitalize";

type MovieDto = {
  id?: number;
  title?: string;
  poster_path?: string;
  vote_average?: number;
  release_date?: string;
  genre_ids?: number[];
};

export const getGenreNames = (genreIds: number[], genresMap: Map<number, string>): string =>
  genreIds
    .map((id) => genresMap.get(id))
    .filter((name): name is string => Boolean(name))
    .slice(0, 2)
    .map(capitalize)
    .join(", ");

export const mapMovie = (dto: MovieDto, genresMap: Map<number, string>): Movie => ({
  id: String(dto.id ?? ""),

  title: dto.title ?? "",

  posterUrl: getPosterUrl(dto.poster_path),

  rating: dto.vote_average ? Number(dto.vote_average.toFixed(1)) : undefined,

  type: "Фильм",

  genre: getGenreNames(dto.genre_ids ?? [], genresMap),

  premiereDate: dto.release_date ?? "",
});
