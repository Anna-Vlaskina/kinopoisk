import { useState, useEffect, type FC } from "react";

import clsx from "clsx";

import { CardRow } from "@/shared/ui/card-row";
import { Text } from "@/shared/ui/text";

import { MovieCollectionCard } from "@/entities/movie/ui/movie-cards";

import type { MoviesCatalogSection } from "./MoviesCatalog.types";
import { getMovieSections } from "./api/getMovieSections";

import styles from "./MoviesCatalog.module.css";

export const MoviesCatalog: FC = () => {
  const [sections, setSections] = useState<MoviesCatalogSection[]>([]);

  useEffect(() => {
    getMovieSections().then(setSections);
  }, []);

  return (
    <div className={clsx(styles.root)}>
      <Text
        tag="h2"
        size="2xl"
        weight="bold"
      >
        Каталог фильмов и сериалов
      </Text>
      {sections.map((section) => (
        <section
          key={section.title}
          className={clsx(styles.section)}
        >
          <Text
            tag="h3"
            size="xl"
            weight="semibold"
          >
            {section.title}
          </Text>

          <CardRow
            items={section.movies}
            getKey={(movie) => movie.id}
            renderItem={(movie) => <MovieCollectionCard movie={movie} />}
          />
        </section>
      ))}
    </div>
  );
};
