import type { FC } from "react";

import clsx from "clsx";

import { Button } from "@/shared/ui/button";
import Heart from "@/shared/assets/icons/heart.svg?react";

import { useMovieLike } from "../model/useMovieLike";

import styles from "./MovieLikeButton.module.css";

type Props = {
  movieId: number;
};

export const MovieLikeButton: FC<Props> = ({ movieId }) => {
  const { liked, toggleLike } = useMovieLike(movieId);

  console.log("MovieLikeButton", movieId, liked);

  return (
    <Button
      variant="outlined"
      type="button"
      onClick={toggleLike}
    >
      {liked ? <Heart className={clsx(styles.icon)} /> : <Heart />}
    </Button>
  );
};
