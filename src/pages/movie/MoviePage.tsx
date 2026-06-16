import { useParams } from "react-router-dom";
import { MovieHeroSection } from "@/widgets/movie-hero-section";
import { Footer } from "@/widgets/footer";
import { MovieInfoSection } from "@/widgets/movie-info-section";
import { MovieOverview } from "@/widgets/movie-overview";
import type { FC } from "react";
import styles from "./MoviePage.module.css";
import clsx from "clsx";

export const MoviePage: FC = () => {
  const { movieId } = useParams();

  if (!movieId) {
    return null;
  }

  return (
    <div className={clsx(styles.page)}>
      <MovieHeroSection movieId={Number(movieId)}></MovieHeroSection>
      <main>
        <MovieOverview movieId={Number(movieId)}></MovieOverview>
        <MovieInfoSection movieId={Number(movieId)}></MovieInfoSection>
      </main>
      <Footer></Footer>
    </div>
  );
};
