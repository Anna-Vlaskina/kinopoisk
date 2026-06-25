import type { FC } from "react";

import clsx from "clsx";

import { Text } from "@/shared/ui/text";

import styles from "./MovieOverview.module.css";

type Props = {
  overview?: string;
};

export const MovieOverview: FC<Props> = ({ overview }) => {
  return (
    <section className={clsx(styles.section)}>
      <Text
        tag="h2"
        size="2xl"
        weight="bold"
      >
        О фильме
      </Text>

      <Text
        tag="p"
        size="md"
        weight="regular"
        color="secondary"
      >
        {overview}
      </Text>
    </section>
  );
};
