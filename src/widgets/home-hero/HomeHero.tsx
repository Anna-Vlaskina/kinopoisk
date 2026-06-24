import type { FC } from "react";

import clsx from "clsx";

import { Text } from "@/shared/ui/text";
import { Button } from "@/shared/ui/button";

import styles from "./HomeHero.module.css";

export const HomeHero: FC = () => {
  return (
    <section className={clsx(styles.section)}>
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
