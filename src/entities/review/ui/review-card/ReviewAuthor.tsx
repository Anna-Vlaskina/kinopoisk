import type { FC } from "react";

import clsx from "clsx";

import { Avatar } from "@/shared/ui/avatar";
import { Text } from "@/shared/ui/text";

import styles from "./ReviewAuthor.module.css";

interface ReviewAuthorProps {
  avatar: string;
  name: string;
  date: string;
}

export const ReviewAuthor: FC<ReviewAuthorProps> = (props) => {
  const { avatar, name, date } = props;

  return (
    <div className={clsx(styles.container)}>
      <div>
        <Avatar src={avatar}></Avatar>
      </div>
      <div className={clsx(styles.info)}>
        <Text
          tag="span"
          size="md"
          weight="semibold"
        >
          {name}
        </Text>
        <Text
          tag="span"
          size="sm"
          weight="regular"
          color="disabled"
        >
          {date}
        </Text>
      </div>
    </div>
  );
};
