import type { FC } from "react";

import { Modal } from "@/shared/ui/modal";

import type { MovieTrailer } from "@/entities/movie/model/movie-trailer.types";

import { MovieTrailerPlayer } from "./MovieTrailerPlayer";

type Props = {
  trailer: MovieTrailer | null;
  isOpen: boolean;
  onClose: () => void;
};

export const MovieTrailerModal: FC<Props> = (props) => {
  const { trailer, isOpen, onClose } = props;

  if (!trailer) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <MovieTrailerPlayer trailer={trailer} />
    </Modal>
  );
};
