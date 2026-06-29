import type { MovieTrailer } from "@/entities/movie/model/movie-trailer.types";
import { getYoutubeEmbedUrl } from "@/entities/movie/lib/getYoutubeUrl";
import type { FC } from "react";

type Props = {
  trailer: MovieTrailer;
};

export const MovieTrailerPlayer: FC<Props> = ({ trailer }) => (
  <iframe
    src={getYoutubeEmbedUrl(trailer.key)}
    title={trailer.name}
    allowFullScreen
  />
);
