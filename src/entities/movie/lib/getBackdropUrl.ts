export const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/original";

export const getBackdropUrl = (backdropPath?: string | null): string => {
  return backdropPath ? `${BACKDROP_BASE_URL}${backdropPath}` : "";
};
