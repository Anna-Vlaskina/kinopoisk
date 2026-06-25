import { getMovieSections } from "@/widgets/movies-catalog/api/getMovieSections";
import { getCollections } from "@/entities/collection/api/getCollections";
import { getUpcomingMovies } from "@/entities/movie/api/getUpcomingMovies";

import type { HomePageData } from "../HomePage.type";

export const getHomePageData = async (): Promise<HomePageData> => {
  const [collections, sections, premieres] = await Promise.all([
    getCollections(),
    getMovieSections(),
    getUpcomingMovies(),
  ]);

  return {
    collections,
    sections,
    premieres,
  };
};
