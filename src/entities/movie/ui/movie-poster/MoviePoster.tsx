import type { FC } from "react";
import Poster from "@/shared/ui/poster";
import type { MoviePosterProps } from "./type";

const FALLBACK_POSTER = "@/shared/assets/images/movie-placeholder.png";

const MoviePoster: FC<MoviePosterProps> = (props) => {
  const { src, title, variant = "vertical", children } = props;

  return (
    <Poster src={src || FALLBACK_POSTER} alt={`Постер фильма "${title}"`} variant={variant}>
      {children}
    </Poster>
  );
};

export default MoviePoster;
