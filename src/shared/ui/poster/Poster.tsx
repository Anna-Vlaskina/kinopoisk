import type { PosterProps } from "./Poster.types";
import type { FC } from "react";
import styles from "./Poster.module.css";
import clsx from "clsx";

export const Poster: FC<PosterProps> = (props) => {
  const { src, alt, variant = "horizontal", children } = props;

  return (
    <div className={clsx(styles.poster, styles[variant])}>
      <img
        src={src}
        alt={alt}
        className={clsx(styles.image)}
      />

      {children}
    </div>
  );
};
