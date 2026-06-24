import type { FC } from "react";
import clsx from "clsx";

import { Text } from "@/shared/ui/text";

import styles from "./MovieHeroHeader.module.css";

interface MovieHeroHeaderProps {
  title: string;
  ageRating: string;
}

export const MovieHeroHeader: FC<MovieHeroHeaderProps> = (props) => {
  const { title, ageRating } = props;

  return (
    <div className={clsx(styles.container)}>
      <Text
        tag="h1"
        size="4xl"
        weight="extrabold"
      >
        {title}
      </Text>
      <Text
        tag="span"
        size="md"
        weight="semibold"
      >
        {ageRating}
      </Text>
    </div>
  );
};
