import { useEffect, useState } from "react";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { HeroSection } from "@/widgets/hero-section";
import { PremieresCarousel } from "@/widgets/premieres-carousel";
// import { PremieresCarouselNew } from "@/widgets/premieres-carousel-new";
import { MoviesCatalog } from "@/widgets/movies-catalog";
import { getMovieSections } from "@/widgets/movies-catalog/api/getMovieSections";
import type { MoviesCatalogSection } from "@/widgets/movies-catalog/MoviesCatalog.types";
import type { FC } from "react";
import { mockMovies } from "@/shared/mocks/mockMovies";
import styles from "./HomePage.module.css";
import clsx from "clsx";

export const HomePage: FC = () => {
  const [sections, setSections] = useState<MoviesCatalogSection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getMovieSections();

        console.log("sections", sections);

        setSections(data);
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
          <PremieresCarousel movies={mockMovies}></PremieresCarousel>
          {/* <PremieresCarouselNew movies={mockMovies}></PremieresCarouselNew> */}
        </section>
        <MoviesCatalog sections={sections}></MoviesCatalog>
      </main>
      <Footer></Footer>
    </div>
  );
};
