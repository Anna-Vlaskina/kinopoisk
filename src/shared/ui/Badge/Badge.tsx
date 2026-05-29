import type { FC } from "react";
import type { BadgeProps } from "./type";
import styles from "./Badge.module.css";

const Badge: FC<BadgeProps> = (props) => {
  const { children, variant = "default" } = props;

  return <div className={`${styles.badge} ${styles[variant]}`}>{children}</div>;
};

export default Badge;
