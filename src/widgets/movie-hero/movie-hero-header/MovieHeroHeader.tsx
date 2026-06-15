import { Text } from "@/shared/ui/text";
import type { MovieHeroHeaderProps } from "./MovieHeroHeader.types";
import type { FC } from "react";
import clsx from "clsx";

import styles from "./MovieHeroHeader.module.css";

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
