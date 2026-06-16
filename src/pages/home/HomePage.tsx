import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { HeroSection } from "@/widgets/hero-section";
import { PremieresCarousel } from "@/widgets/premieres-carousel";
import { MoviesCatalog } from "@/widgets/movies-catalog";
import { CollectionRow } from "@/widgets/collection-row";
import type { FC } from "react";
import styles from "./HomePage.module.css";
import clsx from "clsx";

export const HomePage: FC = () => {
  return (
    <div className={clsx(styles.page)}>
      <Header></Header>
      <main className={clsx(styles.catalog)}>
        <section className={clsx(styles.hero)}>
          <HeroSection></HeroSection>
          <PremieresCarousel></PremieresCarousel>
        </section>
        <MoviesCatalog></MoviesCatalog>
        <CollectionRow></CollectionRow>
      </main>
      <Footer></Footer>
    </div>
  );
};
