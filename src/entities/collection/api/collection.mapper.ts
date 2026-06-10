import { getPosterUrl } from "@/entities/movie/lib/getPosterUrl";
import type { Collection } from "../model/collection.types";

type CollectionDto = {
  id?: number;
  name?: string;
  poster_path?: string;
};

export const mapCollection = (dto: CollectionDto): Collection => ({
  id: String(dto.id ?? ""),
  title: dto.name ?? "",
  posterUrl: getPosterUrl(dto.poster_path),
});
