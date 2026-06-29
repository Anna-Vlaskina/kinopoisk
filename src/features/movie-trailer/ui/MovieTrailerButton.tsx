import { type FC, useState } from "react";

import { Button } from "@/shared/ui/button";

import { MovieTrailerModal } from "./MovieTrailerModal";
import { useMovieTrailer } from "../model/useMovieTrailer";

type Props = {
  movieId: number;
};

export const MovieTrailerButton: FC<Props> = ({ movieId }) => {
  const trailer = useMovieTrailer(movieId);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="outlined"
        type="button"
        onClick={() => setIsOpen(true)}
        disabled={!trailer}
      >
        Трейлер
      </Button>

      {trailer && (
        <MovieTrailerModal
          trailer={trailer}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
