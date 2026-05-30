import Header from "@/widgets/header";
import HeroSection from "@/widgets/hero-section";
import MovieCollectionCard from "@/widgets/movie-card/movie-collection-card";

function App() {
  return (
    <div
      style={{
        display: "Flex",
        flexDirection: "column",
        gap: "50px",
        backgroundColor: "var(--color-background)",
        fontFamily: "var(--font-family-main)",
        width: "100vw",
        height: "100vh",
        padding: "30px 100px",
      }}
    >
      <Header></Header>
      <HeroSection></HeroSection>
      <MovieCollectionCard
        title="Спасатели Малибу"
        rating={5.6}
        type="Фильм"
        genre="Комедия, боевик"
      ></MovieCollectionCard>
    </div>
  );
}

export default App;
