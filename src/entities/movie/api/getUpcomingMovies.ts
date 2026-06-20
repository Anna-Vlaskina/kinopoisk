import { movieUpcomingList } from "@/api/api-client";

import type { PremiereMovie } from "../model/premiere-movie.types";
import { mapPremiereMovie } from "../mapper/premiere.mapper";

export const getUpcomingMovies = async (): Promise<PremiereMovie[]> => {
  const response = await movieUpcomingList();

  return (response.data.results ?? []).slice(0, 10).map(mapPremiereMovie);
};
