import type { FC } from "react";
import { Badge } from "@/shared/ui/Badge";
import { Text } from "@/shared/ui/text";
import { Separator } from "@/shared/ui/separator";
import styles from "./MovieMeta.module.css";
import type { MovieMetaProps } from "./MovieMeta.types";
import clsx from "clsx";

export const MovieMeta: FC<MovieMetaProps> = (props) => {
  const { rating, type, genre, date, country, runtime, color = "secondary" } = props;

  return (
    <div className={clsx(styles.meta)}>
      {rating && <Badge variant="rating">{rating}</Badge>}

      {type && (
        <>
          <Separator />

          <Text
            tag="span"
            size="md"
            color={color}
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
            color={color}
          >
            {genre}
          </Text>
        </>
      )}

      {date && (
        <>
          <Separator />

          <Text
            tag="span"
            size="md"
            color={color}
          >
            {date}
          </Text>
        </>
      )}

      {country && (
        <>
          <Separator />

          <Text
            tag="span"
            size="md"
            color={color}
          >
            {country}
          </Text>
        </>
      )}

      {runtime && (
        <>
          <Separator />

          <Text
            tag="span"
            size="md"
            color={color}
          >
            {runtime}
          </Text>
        </>
      )}
    </div>
  );
};
