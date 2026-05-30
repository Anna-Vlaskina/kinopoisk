import type { PosterProps } from "./type";
import type { FC } from "react";
import styles from "./Poster.module.css";

const Poster: FC<PosterProps> = (props) => {
  const { src, alt, variant = "horizontal", children } = props;

  return (
    <div className={`${styles.poster} ${styles[variant]}`}>
      <img src={src} alt={alt} className={styles.image} />

      {children}
    </div>
  );
};

export default Poster;
