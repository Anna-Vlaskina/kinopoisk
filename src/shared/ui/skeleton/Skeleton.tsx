import type { FC } from "react";

import clsx from "clsx";

import styles from "./Skeleton.module.css";

type Props = {
  width?: number | string;
  height?: number | string;
  borderRadius?: number | string;
  className?: string;
};

export const Skeleton: FC<Props> = ({
  width = "100%",
  height = 16,
  borderRadius = 8,
  className,
}) => {
  return (
    <div
      className={clsx(styles.skeleton, className)}
      style={{
        width,
        height,
        borderRadius,
      }}
    />
  );
};
