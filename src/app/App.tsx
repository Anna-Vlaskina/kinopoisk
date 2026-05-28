import Header from "@/widgets/header";
import Button from "@/shared/ui/Button";
import BellIcon from "@/shared/assets/icons/bell.svg?react";
import Text from "@/shared/ui/Text";

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
      <Button variant="only-icon">
        <BellIcon />
      </Button>
      <Text tag="h2" size="xl" weight="extrabold" color="tertiary">
        Самые сочные премьеры кино — у вас дома
      </Text>
    </div>
  );
}

export default App;
