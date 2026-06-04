import type { FC } from "react";
import styles from "./Separator.module.css";
import clsx from "clsx";

interface SeparatorProps {
  variant?: "primary" | "secondary";
}

export const Separator: FC<SeparatorProps> = ({ variant = "secondary" }) => {
  return (
    <div className={clsx(styles.separator)}>
      <span className={clsx(styles[variant])}>•</span>
    </div>
  );
};
