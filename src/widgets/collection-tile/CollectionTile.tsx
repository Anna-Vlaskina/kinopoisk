import { Poster } from "@/shared/ui/poster";
import { Text } from "@/shared/ui/text";
import type { FC } from "react";
import styles from "./CollectionTile.module.css";
import clsx from "clsx";

export const CollectionTile: FC = () => {
  return (
    <div className={clsx(styles.tile)}>
      <Poster
        src="https://i.pinimg.com/736x/5d/80/b7/5d80b7b63f8b10cf9b57a410c1ef2b4e.jpg"
        variant="square"
      >
        <Text
          tag="h3"
          size="xl"
          weight="semibold"
          lineHeight="relaxed"
          className={clsx(styles.text)}
        >
          Любителям комиксов
        </Text>
      </Poster>
    </div>
  );
};
