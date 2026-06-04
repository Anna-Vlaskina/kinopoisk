import type { PosterProps } from "./Poster.types";
import type { FC } from "react";
import styles from "./Poster.module.css";

export const Poster: FC<PosterProps> = (props) => {
  const { src, alt, variant = "horizontal", children } = props;

  return (
    <div className={`${styles.poster} ${styles[variant]}`}>
      <img
        src={src}
        alt={alt}
        className={styles.image}
      />

      {children}
    </div>
  );
};
