import { useState, useEffect } from "react";
import type { FC } from "react";

import clsx from "clsx";

import { CardRow } from "@/shared/ui/card-row";
import { Text } from "@/shared/ui/text";

import { CollectionTile } from "@/entities/collection/ui/collection-tile";
import type { Collection } from "@/entities/collection/model/collection.types";
import { getCollections } from "@/entities/collection/api/getCollections";

import styles from "./CollectionsSection.module.css";

export const CollectionsSection: FC = () => {
  const [collections, setCollections] = useState<Collection[]>([]);

  useEffect(() => {
    getCollections().then(setCollections);
  }, []);

  return (
    <div className={clsx(styles.root)}>
      <Text
        tag="h2"
        size="2xl"
        weight="bold"
      >
        Тематические подборки
      </Text>
      <CardRow
        items={collections}
        getKey={(collection) => collection.id}
        renderItem={(collection) => <CollectionTile collection={collection} />}
      />
    </div>
  );
};
