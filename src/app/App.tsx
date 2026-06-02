import { mockMovies } from "@/shared/mocks/mockMovies";
import Header from "@/widgets/header";
import PremieresCarousel from "@/widgets/premieres-carousel/PremieresCarousel";

function App() {
  return (
    <div
      style={{
        display: "Flex",
        flexDirection: "column",
        gap: "50px",
        backgroundColor: "var(--color-background)",
        fontFamily: "var(--font-family-main)",
        width: "100%",
        height: "100vh",
        padding: "30px 100px",
        boxSizing: "border-box",
      }}
    >
      <Header></Header>
      <PremieresCarousel movies={mockMovies}></PremieresCarousel>
    </div>
  );
}

export default App;
