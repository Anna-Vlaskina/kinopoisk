import type { FC } from "react";
import styles from "./logo.module.css";

export const Logo: FC = () => {
  return (
    <div className={styles.logo}>
      <span className={styles.primary}>КИНО</span>
      <span className={styles.accent}>ДОМ</span>
    </div>
  );
};
