import { STORAGE_KEY } from "@/shared/config/constants";

export const getLikedMovies = (): number[] => {
  const value = localStorage.getItem(STORAGE_KEY);

  return value ? JSON.parse(value) : [];
};

export const toggleMovieLike = (movieId: number): boolean => {
  const movies = getLikedMovies();

  const isLiked = movies.includes(movieId);

  const nextMovies = isLiked ? movies.filter((id) => id !== movieId) : [...movies, movieId];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(nextMovies));

  return !isLiked;
};

export const isMovieLiked = (movieId: number): boolean => {
  return getLikedMovies().includes(movieId);
};
