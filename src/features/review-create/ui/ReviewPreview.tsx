import type { FC } from "react";

import clsx from "clsx";

import styles from "./ReviewPreview.module.css";

type Props = {
  html: string;
};

export const ReviewPreview: FC<Props> = ({ html }) => {
  return (
    <div
      className={clsx(styles.preview)}
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
};
