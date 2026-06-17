import type { FC } from "react";

import clsx from "clsx";

import type { PosterProps } from "./Poster.types";

import styles from "./Poster.module.css";

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
