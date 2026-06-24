import type { FC } from "react";

import clsx from "clsx";

import { Poster } from "@/shared/ui/poster";
import { Text } from "@/shared/ui/text";

import type { Collection } from "@/entities/collection/model/collection.types";

import styles from "./CollectionTile.module.css";

type Props = {
  collection: Collection;
};

export const CollectionTile: FC<Props> = ({ collection }) => {
  return (
    <div className={clsx(styles.tile)}>
      <Poster
        src={collection.posterUrl}
        variant="square"
      >
        <Text
          tag="h3"
          size="xl"
          weight="semibold"
          lineHeight="relaxed"
          className={clsx(styles.text)}
        >
          {collection.title}
        </Text>
      </Poster>
    </div>
  );
};
