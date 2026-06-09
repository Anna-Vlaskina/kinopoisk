import { getGenres } from "@/entities/genre/api/getGenres";
import { getMoviesByGenre } from "@/entities/movie/api/getMoviesByGenre";
import type { MoviesCatalogSection } from "../MoviesCatalog.types";
import { capitalize } from "@/shared/lib/capitalize";

export const getMovieSections = async (): Promise<MoviesCatalogSection[]> => {
  const genres = await getGenres();

  const genresMap = new Map(genres.map((genre) => [genre.id, genre.name]));

  const sections = await Promise.all(
    genres.slice(0, 5).map(async (genre) => ({
      title: capitalize(genre.name),
      movies: await getMoviesByGenre(genre.id, genresMap),
    })),
  );

  return sections;
};
