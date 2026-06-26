import { useState, useEffect } from "react";

import { isMovieLiked, toggleMovieLike } from "./storage";

export const useMovieLike = (movieId: number) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(isMovieLiked(movieId));
  }, [movieId]);

  const toggleLike = () => {
    const nextLiked = toggleMovieLike(movieId);

    setLiked(nextLiked);
  };

  return {
    liked,
    toggleLike,
  };
};
