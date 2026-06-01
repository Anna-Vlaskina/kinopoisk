import Header from "@/widgets/header";
import MoviePremiereCard from "@/widgets/movie-card/movie-premiere-card";

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
      <MoviePremiereCard title="Спасатели Малибу" premiereDate="12 декабря"></MoviePremiereCard>
    </div>
  );
}

export default App;
