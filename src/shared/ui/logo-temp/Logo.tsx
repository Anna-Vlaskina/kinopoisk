import type { FC } from "react";

import clsx from "clsx";

import styles from "./logo.module.css";

export const Logo: FC = () => {
  return (
    <div className={clsx(styles.logo)}>
      <span className={clsx(styles.primary)}>КИНО</span>
      <span className={clsx(styles.accent)}>ДОМ</span>
    </div>
  );
};
