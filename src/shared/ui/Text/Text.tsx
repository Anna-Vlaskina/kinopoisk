import clsx from "clsx";
import type { FC } from "react";
import type { TextProps } from "./type";
import styles from "./Text.module.css";

const Text: FC<TextProps> = (props) => {
  const {
    tag: Tag = "p",
    size = "sm",
    weight = "regular",
    color = "primary",
    align = "left",
    truncate = false,
    className,
    children,
  } = props;

  const sizeClasses = {
    xs: styles["text-xs"],
    sm: styles["text-sm"],
    md: styles["text-md"],
    lg: styles["text-lg"],
    xl: styles["text-xl"],
    "2xl": styles["text-2xl"],
    "3xl": styles["text-3xl"],
  };

  return (
    <Tag
      className={clsx(
        styles.text,
        sizeClasses[size],
        styles[weight],
        styles[color],
        styles[align],
        truncate && styles.truncate,
        className,
      )}
    >
      {children}
    </Tag>
  );
};

export default Text;
