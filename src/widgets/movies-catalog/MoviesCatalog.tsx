import { useState, useEffect } from "react";
import type { MoviesCatalogSection } from "./MoviesCatalog.types";
import { getMovieSections } from "./api/getMovieSections";
import { MovieRow } from "@/widgets/movie-row/MovieRow";
import styles from "./MoviesCatalog.module.css";
import { Text } from "@/shared/ui/text";
import type { FC } from "react";
import clsx from "clsx";

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

          <MovieRow movies={section.movies} />
        </section>
      ))}
    </div>
  );
};
