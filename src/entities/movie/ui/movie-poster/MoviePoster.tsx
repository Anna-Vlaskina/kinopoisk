import type { FC } from "react";
import { Poster } from "@/shared/ui/poster";
import type { MoviePosterProps } from "./MoviePoster.types";
import fallbackPoster from "@/shared/assets/images/movie-placeholder.png";

const FALLBACK_POSTER = fallbackPoster;

export const MoviePoster: FC<MoviePosterProps> = (props) => {
  const { src, alt, variant = "vertical", children } = props;

  return (
    <Poster src={src || FALLBACK_POSTER} alt={alt} variant={variant}>
      {children}
    </Poster>
  );
};
