import clsx from "clsx";
import type { FC } from "react";
import type { TextProps } from "./Text.types";
import styles from "./Text.module.css";

export const Text: FC<TextProps> = (props) => {
  const {
    tag: Tag = "p",
    size = "sm",
    weight = "regular",
    color = "primary",
    align = "left",
    truncate = false,
    lineHeight = "relaxed",
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

  const lineHeightClasses = {
    tight: styles["line-height-tight"],
    normal: styles["line-height-normal"],
    relaxed: styles["line-height-relaxed"],
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
        lineHeightClasses[lineHeight],
        className,
      )}
    >
      {children}
    </Tag>
  );
};
