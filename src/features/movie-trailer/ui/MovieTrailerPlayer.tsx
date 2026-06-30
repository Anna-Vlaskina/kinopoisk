import clsx from "clsx";

import type { MovieTrailer } from "@/entities/movie/model/movie-trailer.types";
import { getYoutubeEmbedUrl } from "@/entities/movie/lib/getYoutubeUrl";
import type { FC } from "react";

import styles from "./MovieTrailerPlayer.module.css";

type Props = {
  trailer: MovieTrailer;
};

export const MovieTrailerPlayer: FC<Props> = ({ trailer }) => (
  <iframe
    className={clsx(styles.player)}
    src={getYoutubeEmbedUrl(trailer.key)}
    title={trailer.name}
    allowFullScreen
  />
);
