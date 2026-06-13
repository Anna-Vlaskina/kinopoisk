import { useEffect, useState } from "react";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { HeroSection } from "@/widgets/hero-section";
import { PremieresCarousel } from "@/widgets/premieres-carousel";
import { MoviesCatalog } from "@/widgets/movies-catalog";
import { CollectionRow } from "@/widgets/collection-row";
import { getMovieSections } from "@/widgets/movies-catalog/api/getMovieSections";
import { getCollections } from "@/entities/collection/api/getCollections";
import { getUpcomingMovies } from "@/entities/movie/api/getUpcomingMovies";
import type { MoviesCatalogSection } from "@/widgets/movies-catalog/MoviesCatalog.types";
import type { PremiereMovie } from "@/entities/movie/model/premiere-movie.types";
import type { Collection } from "@/entities/collection/model/collection.types";
import type { FC } from "react";
import styles from "./HomePage.module.css";
import clsx from "clsx";

export const HomePage: FC = () => {
  const [sections, setSections] = useState<MoviesCatalogSection[]>([]);
  const [premieres, setPremieres] = useState<PremiereMovie[]>([]);
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const sectionsData = await getMovieSections();
        setSections(sectionsData);

        const collectionsData = await getCollections();
        setCollections(collectionsData);

        const premieresData = await getUpcomingMovies();
        setPremieres(premieresData);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className={clsx(styles.page)}>
      <Header></Header>
      <main className={clsx(styles.catalog)}>
        <section className={clsx(styles.hero)}>
          <HeroSection></HeroSection>
          <PremieresCarousel movies={premieres}></PremieresCarousel>
        </section>
        <MoviesCatalog sections={sections}></MoviesCatalog>
        <CollectionRow collections={collections}></CollectionRow>
      </main>
      <Footer></Footer>
    </div>
  );
};
