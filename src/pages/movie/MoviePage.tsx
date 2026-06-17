import type { FC } from "react";

import clsx from "clsx";
import { useParams } from "react-router-dom";

import { MoviePageHeader } from "@/widgets/movie-page-header";
import { Footer } from "@/widgets/footer";
import { MovieInfoSection } from "@/widgets/movie-info-section";
import { MovieOverview } from "@/widgets/movie-overview";

import styles from "./MoviePage.module.css";

export const MoviePage: FC = () => {
  const { movieId } = useParams();

  if (!movieId) {
    return null;
  }

  return (
    <div className={clsx(styles.page)}>
      <MoviePageHeader movieId={Number(movieId)}></MoviePageHeader>
      <main>
        <MovieOverview movieId={Number(movieId)}></MovieOverview>
        <MovieInfoSection movieId={Number(movieId)}></MovieInfoSection>
      </main>
      <Footer></Footer>
    </div>
  );
};
