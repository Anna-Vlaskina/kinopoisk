import type { FC } from "react";

import clsx from "clsx";

import Massages from "@/shared/assets/icons/messages.svg?react";
import Like from "@/shared/assets/icons/like.svg?react";
import Dislike from "@/shared/assets/icons/dislike.svg?react";

import styles from "./ReviewActions.module.css";

type Props = {
  commentsCount?: number;
  likesCount?: number;
  dislikesCount?: number;
};

export const ReviewActions: FC<Props> = () => {
  return (
    <div className={clsx(styles.container)}>
      <Massages></Massages>
      <Like></Like>
      <Dislike></Dislike>
    </div>
  );
};
