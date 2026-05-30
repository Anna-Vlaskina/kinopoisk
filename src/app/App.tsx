// import Header from "@/widgets/header";
// import Button from "@/shared/ui/button";
// import BellIcon from "@/shared/assets/icons/bell.svg?react";
// import Text from "@/shared/ui/text";
// import Badge from "@/shared/ui/badge";
// import HeroSection from "@/widgets/hero-section";
import Poster from "@/shared/ui/poster";

function App() {
  return (
    <div
      style={{
        display: "Flex",
        // flexDirection: "column",
        gap: "50px",
        backgroundColor: "var(--color-background)",
        fontFamily: "var(--font-family-main)",
        width: "100vw",
        height: "100vh",
        padding: "30px 100px",
      }}
    >
      {/* <Header></Header> */}
      {/* <Button variant="filled">Смотреть бесплатно</Button>
      <Button variant="outlined">Посмотреть всё</Button>
      <Button variant="only-icon">
        <BellIcon />
      </Button>
      <Text tag="h2" size="xl" weight="extrabold" color="tertiary">
        Самые сочные премьеры кино — у вас дома
      </Text>
      <Badge>Премьера</Badge>
      <Badge variant="text">12 декабря</Badge>
      <Badge variant="rating">7.9</Badge> */}
      {/* <HeroSection></HeroSection> */}
      <Poster
        src="https://img.freepik.com/psd-premium/modelo-de-cartaz-de-filme_1144036-5414.jpg"
        variant="vertical"
      ></Poster>
      <Poster
        src="https://img.freepik.com/psd-premium/modelo-de-cartaz-de-filme_1144036-5414.jpg"
        variant="horizontal"
      ></Poster>
      <Poster
        src="https://img.freepik.com/psd-premium/modelo-de-cartaz-de-filme_1144036-5414.jpg"
        variant="horizontal-sm"
      ></Poster>
    </div>
  );
}

export default App;
