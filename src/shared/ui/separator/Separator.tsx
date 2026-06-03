import type { FC } from "react";
import styles from "./Separator.module.css";

interface SeparatorProps {
  variant?: "primary" | "secondary";
}

export const Separator: FC<SeparatorProps> = ({ variant = "secondary" }) => {
  return (
    <div className={styles.separator}>
      <span className={styles[variant]}>•</span>
    </div>
  );
};
