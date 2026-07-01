import { TMDB_IMAGE } from "@/shared/config/tmdb";

export const getBackdropUrl = (backdropPath?: string | null): string => {
  return backdropPath ? `${TMDB_IMAGE.backdrop}${backdropPath}` : "";
};
