import { useState, type FC } from "react";

import Search from "@/shared/assets/icons/search.svg?react";
import { Button } from "@/shared/ui/button";

import { MovieSearchOverlay } from "./MovieSearchOverlay";

export const MovieSearch: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <Button
        variant="only-icon"
        onClick={() => setIsOpen(true)}
      >
        <Search />
      </Button>
    );
  }

  return <MovieSearchOverlay onClose={() => setIsOpen(false)} />;
};
