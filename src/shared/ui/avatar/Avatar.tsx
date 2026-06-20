import type { FC } from "react";

import clsx from "clsx";

import styles from "./Avatar.module.css";

interface AvatarProps {
  src: string;
}

export const Avatar: FC<AvatarProps> = ({ src }) => {
  return (
    <img
      className={clsx(styles.avatar)}
      src={src}
      alt="Аватар пользователя"
    />
  );
};
