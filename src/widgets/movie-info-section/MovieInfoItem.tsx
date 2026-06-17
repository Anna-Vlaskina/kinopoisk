import type { FC } from "react";

import clsx from "clsx";

import { Text } from "@/shared/ui/text";
import { Badge } from "@/shared/ui/badge";

import styles from "./MovieInfoItem.module.css";

type Props = {
  term: string;
  description?: string | number;
  variant?: "text" | "badge";
};

export const MovieInfoItem: FC<Props> = ({ term, description, variant = "text" }) => {
  if (description === undefined || description === "" || description === null) {
    return null;
  }

  return (
    <div className={clsx(styles.item)}>
      <div className={clsx(styles.term)}>
        <Text
          tag="dt"
          size="md"
          weight="regular"
          color="tertiary"
        >
          {term}
        </Text>
      </div>
      <div className={clsx(styles.description)}>
        {variant === "text" ? (
          <Text
            tag="dd"
            size="md"
            weight="regular"
            color="primary"
          >
            {description}
          </Text>
        ) : (
          <Badge variant="rating">{description}</Badge>
        )}
      </div>
    </div>
  );
};
