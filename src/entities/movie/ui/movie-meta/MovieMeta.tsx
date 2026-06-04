import type { FC } from "react";
import { Badge } from "@/shared/ui/badge";
import { Text } from "@/shared/ui/text";
import { Separator } from "@/shared/ui/separator";
import styles from "./MovieMeta.module.css";
import type { MovieMetaProps } from "./MovieMeta.types";

export const MovieMeta: FC<MovieMetaProps> = (props) => {
  const { rating, type, genre } = props;

  return (
    <div className={styles.meta}>
      {rating && <Badge variant="rating">{rating}</Badge>}

      {type && (
        <>
          <Separator />

          <Text
            tag="span"
            size="md"
            color="secondary"
          >
            {type}
          </Text>
        </>
      )}

      {genre && (
        <>
          <Separator />

          <Text
            tag="span"
            size="md"
            color="secondary"
          >
            {genre}
          </Text>
        </>
      )}
    </div>
  );
};
