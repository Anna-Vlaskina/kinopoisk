import type { Movie } from "@/entities/movie/model";

export interface MoviesCatalogSection {
  title: string;
  movies: Movie[];
}
