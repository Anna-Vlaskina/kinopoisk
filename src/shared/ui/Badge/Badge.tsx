import type { FC } from "react";

import clsx from "clsx";

import type { BadgeProps } from "./Badge.types";

import styles from "./Badge.module.css";

export const Badge: FC<BadgeProps> = (props) => {
  const { children, variant = "default" } = props;

  return <div className={clsx(styles.badge, styles[variant])}>{children}</div>;
};
