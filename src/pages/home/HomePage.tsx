import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { HeroSection } from "@/widgets/hero-section";
import { PremieresCarousel } from "@/widgets/premieres-carousel";
// import { PremieresCarouselNew } from "@/widgets/premieres-carousel-new";
import { MoviesCatalog } from "@/widgets/movies-catalog";
import type { FC } from "react";
import { mockMovies } from "@/shared/mocks/mockMovies";
import { mockSections } from "@/shared/mocks/mockSection";
import styles from "./HomePage.module.css";
import clsx from "clsx";

export const HomePage: FC = () => {
  return (
    <div className={clsx(styles.page)}>
      <Header></Header>
      <main className={clsx(styles.catalog)}>
        <section className={clsx(styles.hero)}>
          <HeroSection></HeroSection>
          <PremieresCarousel movies={mockMovies}></PremieresCarousel>
          {/* <PremieresCarouselNew movies={mockMovies}></PremieresCarouselNew> */}
        </section>
        <MoviesCatalog sections={mockSections}></MoviesCatalog>
      </main>
      <Footer></Footer>
    </div>
  );
};
