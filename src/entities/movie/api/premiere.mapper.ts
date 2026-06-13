import { getPosterUrl } from "../lib/getPosterUrl";
import { formatPremiereDate } from "../lib/formatPremiereDate";

type PremiereDto = {
  id?: number;
  title?: string;
  poster_path?: string;
  release_date?: string;
};

export const mapPremiereMovie = (dto: PremiereDto) => ({
  id: String(dto.id ?? ""),
  title: dto.title ?? "",
  posterUrl: getPosterUrl(dto.poster_path),
  premiereDate: formatPremiereDate(dto.release_date),
});
