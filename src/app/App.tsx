import { mockSections } from "@/shared/mocks/mockSection";
import Header from "@/widgets/header";
import MoviesCatalog from "@/widgets/movies-catalog";

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
        height: "100%",
        padding: "30px 100px",
        boxSizing: "border-box",
      }}
    >
      <Header></Header>
      <MoviesCatalog sections={mockSections}></MoviesCatalog>
    </div>
  );
}

export default App;
