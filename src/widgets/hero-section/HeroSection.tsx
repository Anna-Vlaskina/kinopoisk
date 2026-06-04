import styles from "./HeroSection.module.css";
import { Text } from "@/shared/ui/text";
import { Button } from "@/shared/ui/button";
import type { FC } from "react";

export const HeroSection: FC = () => {
  return (
    <section className={styles.section}>
      <Text
        tag="h1"
        size="3xl"
        weight="extrabold"
        lineHeight="normal"
      >
        Самые сочные премьеры кино — у вас дома
      </Text>
      <div style={{ width: "400px" }}>
        <Text
          tag="p"
          size="md"
          weight="regular"
          color="secondary"
          lineHeight="relaxed"
        >
          Ежедневно пополняемая библиотека с лучшими фильмами и сериалами — в дубляже и оригинале.
          Целый месяц бесплатно!
        </Text>
      </div>
      <Button>Смотреть бесплатно</Button>
    </section>
  );
};
