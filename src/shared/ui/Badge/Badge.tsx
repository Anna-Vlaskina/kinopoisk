import type { FC } from "react";
import type { BadgeProps } from "./Badge.types";
import styles from "./Badge.module.css";
import clsx from "clsx";

export const Badge: FC<BadgeProps> = (props) => {
  const { children, variant = "default" } = props;

  return <div className={clsx(styles.badge, styles[variant])}>{children}</div>;
};
