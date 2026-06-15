import type { FC } from "react";
import { Badge } from "@/shared/ui/Badge";
import { Text } from "@/shared/ui/text";
import { Separator } from "@/shared/ui/separator";
import { formatRuntime } from "@/shared/lib/formatters/formatRuntime";
import styles from "./MovieMeta.module.css";
import type { MovieMetaProps } from "./MovieMeta.types";
import clsx from "clsx";

export const MovieMeta: FC<MovieMetaProps> = (props) => {
  const { rating, type, genre, date, country, runtime, color = "secondary" } = props;

  const year = date?.slice(0, 4);

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

      {(year || genre) && (
        <>
          <Separator />

          <Text
            tag="span"
            size="md"
            color={color}
          >
            {[year, genre].filter(Boolean).join(", ")}
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
            {formatRuntime(runtime)}
          </Text>
        </>
      )}
    </div>
  );
};
