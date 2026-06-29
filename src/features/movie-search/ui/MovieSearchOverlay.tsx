import { type FC, useState } from "react";

import clsx from "clsx";

import { Link } from "react-router-dom";

import { Logo } from "@/shared/ui/logo";
import { Button } from "@/shared/ui/button";
import Search from "@/shared/assets/icons/search.svg?react";

import { useMovieSearch } from "../model/useMovieSearch";
import { MovieSearchInput } from "./MovieSearchInput";
import { MovieSearchPanel } from "./MovieSearchPanel";

import styles from "./MovieSearchOverlay.module.css";

type Props = {
  onClose: () => void;
};

export const MovieSearchOverlay: FC<Props> = ({ onClose }) => {
  const [query, setQuery] = useState("");

  const { movies, isLoading } = useMovieSearch(query);

  return (
    <div className={clsx(styles.overlay)}>
      <header className={clsx(styles.header)}>
        <Link to="/">
          <Logo />
        </Link>

        <div className={clsx(styles.input)}>
          <Search />
          <MovieSearchInput
            value={query}
            onChange={setQuery}
            onClear={() => {
              setQuery("");
              onClose();
            }}
          />
        </div>

        <Button variant="outlined">Войти</Button>
      </header>

      <MovieSearchPanel
        movies={movies.slice(0, 6)}
        isLoading={isLoading}
      />
    </div>
  );
};
