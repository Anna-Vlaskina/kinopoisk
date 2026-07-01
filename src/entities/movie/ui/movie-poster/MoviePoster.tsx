import type { FC } from "react";

import { Poster } from "@/shared/ui/poster";

import type { MoviePosterProps } from "./MoviePoster.types";

export const MoviePoster: FC<MoviePosterProps> = (props) => {
  const { src, alt, variant = "vertical", children } = props;

  return (
    <Poster
      src={src}
      alt={alt}
      variant={variant}
    >
      {children}
    </Poster>
  );
};
