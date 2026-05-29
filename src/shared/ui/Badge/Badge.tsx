import type { FC } from "react";
import type { BadgeProps } from "./type";
import styles from "./Badge.module.css";

const Badge: FC<BadgeProps> = (props) => {
  const { children } = props;

  return <div className={styles.badge}>{children}</div>;
};

export default Badge;
