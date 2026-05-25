import Header from "../widgets/header";
import Button from "../shared/ui/Button";

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
      <Button variant="filled">Смотреть бесплатно</Button>
      <Button variant="outlined">Посмотреть всё</Button>
    </div>
  );
}

export default App;
