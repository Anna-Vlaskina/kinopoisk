import { TMDB_IMAGE } from "@/shared/config/tmdb";

export const getPosterUrl = (path?: string): string => (path ? `${TMDB_IMAGE.poster}${path}` : "");
