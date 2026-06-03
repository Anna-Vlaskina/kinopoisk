import Header from "@/widgets/header";
import Footer from "@/widgets/footer";
import HeroSection from "@/widgets/hero-section";
import PremieresCarousel from "@/widgets/premieres-carousel";
import MoviesCatalog from "@/widgets/movies-catalog";
import type { FC } from "react";
import { mockMovies } from "@/shared/mocks/mockMovies";
import { mockSections } from "@/shared/mocks/mockSection";
import styles from "./HomePage.module.css";

const HomePage: FC = () => {
  return (
    <div className={styles.page}>
      <Header></Header>
      <main className={styles.catalog}>
        <section className={styles.hero}>
          <HeroSection></HeroSection>
          <PremieresCarousel movies={mockMovies}></PremieresCarousel>
        </section>
        <MoviesCatalog sections={mockSections}></MoviesCatalog>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
