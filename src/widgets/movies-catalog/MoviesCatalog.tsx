import type { MovieSection } from "@/shared/mocks/type";
import { MovieRow } from "@/widgets/movie-row/MovieRow";
import styles from "./MoviesCatalog.module.css";
import { Text } from "@/shared/ui/text";
import type { FC } from "react";

type Props = {
  sections: MovieSection[];
};

export const MoviesCatalog: FC<Props> = ({ sections }) => {
  return (
    <div className={styles.root}>
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
          className={styles.section}
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
