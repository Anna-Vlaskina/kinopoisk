import { type FC, useState, useEffect, useRef } from "react";

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

  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={overlayRef}
      className={clsx(styles.overlay)}
    >
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
        onClose={onClose}
      />
    </div>
  );
};
