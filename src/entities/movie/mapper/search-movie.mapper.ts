import type { SearchMovie200ResultsItem } from "@/api/types";

import type { SearchMovie } from "../model/search-movie.types";

import { getPosterUrl } from "../lib/getPosterUrl";

export const mapSearchMovie = (dto: SearchMovie200ResultsItem): SearchMovie => ({
  id: dto.id ?? 0,
  title: dto.title ?? "",
  posterUrl: getPosterUrl(dto.poster_path),
});
