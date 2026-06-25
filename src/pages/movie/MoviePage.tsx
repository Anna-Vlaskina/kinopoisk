import { useState, useEffect, type FC } from "react";

import clsx from "clsx";
import { useParams } from "react-router-dom";

import { MoviePageHeader } from "@/widgets/movie-page-header";
import { Footer } from "@/widgets/footer";
import { MovieInfoSection } from "@/widgets/movie-info-section";
import { MovieOverview } from "@/widgets/movie-overview";
import { MovieReviewSection } from "@/widgets/movie-reviews-section";

import { getMoviePageData } from "./api/getMoviePageData";
import type { MoviePageData } from "./MoviePage.type";

import styles from "./MoviePage.module.css";

export const MoviePage: FC = () => {
  const [data, setData] = useState<MoviePageData | null>(null);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }

    getMoviePageData(Number(movieId)).then(setData);
  }, [movieId]);

  if (!movieId || !data) {
    return null;
  }

  return (
    <div className={clsx(styles.page)}>
      <MoviePageHeader movie={data.movieDetails}></MoviePageHeader>
      <main>
        <MovieOverview overview={data.movieDetails.overview}></MovieOverview>
        <MovieInfoSection movieInfo={data.movieInfo}></MovieInfoSection>
        <MovieReviewSection reviews={data.reviews}></MovieReviewSection>
      </main>
      <Footer></Footer>
    </div>
  );
};
