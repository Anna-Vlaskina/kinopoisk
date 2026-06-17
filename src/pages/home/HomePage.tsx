import type { FC } from "react";

import clsx from "clsx";

import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { HomeHero } from "@/widgets/home-hero";
import { PremieresCarousel } from "@/widgets/premieres-carousel";
import { MoviesCatalog } from "@/widgets/movies-catalog";
import { CollectionsSection } from "@/widgets/collections-section";

import styles from "./HomePage.module.css";

export const HomePage: FC = () => {
  return (
    <div className={clsx(styles.page)}>
      <Header></Header>
      <main className={clsx(styles.catalog)}>
        <section className={clsx(styles.hero)}>
          <HomeHero></HomeHero>
          <PremieresCarousel></PremieresCarousel>
        </section>
        <MoviesCatalog></MoviesCatalog>
        <CollectionsSection></CollectionsSection>
      </main>
      <Footer></Footer>
    </div>
  );
};
