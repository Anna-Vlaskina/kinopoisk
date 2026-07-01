import type { MovieVideos200ResultsItem } from "@/api/types";

import type { MovieTrailer } from "../model/movie-trailer.types";

export const mapMovieTrailer = (dto: MovieVideos200ResultsItem): MovieTrailer => ({
  id: dto.id ?? "",
  name: dto.name ?? "",
  key: dto.key ?? "",
});
