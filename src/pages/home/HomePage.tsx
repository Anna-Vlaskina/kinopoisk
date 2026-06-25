import { type FC, useState, useEffect } from "react";

import clsx from "clsx";

import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { HomeHero } from "@/widgets/home-hero";
import { PremieresCarousel } from "@/widgets/premieres-carousel";
import { MoviesCatalog } from "@/widgets/movies-catalog";
import { CollectionsSection } from "@/widgets/collections-section";

import type { HomePageData } from "./HomePage.type";
import { getHomePageData } from "./api/getHomePageData";

import styles from "./HomePage.module.css";

export const HomePage: FC = () => {
  const [data, setData] = useState<HomePageData | null>(null);

  useEffect(() => {
    getHomePageData().then(setData);
  }, []);

  if (!data) {
    return null;
  }

  return (
    <div className={clsx(styles.page)}>
      <Header></Header>
      <main className={clsx(styles.catalog)}>
        <section className={clsx(styles.hero)}>
          <HomeHero></HomeHero>
          <PremieresCarousel premieres={data.premieres}></PremieresCarousel>
        </section>
        <MoviesCatalog sections={data.sections}></MoviesCatalog>
        <CollectionsSection collections={data.collections}></CollectionsSection>
      </main>
      <Footer></Footer>
    </div>
  );
};
