import type { FC } from "react";
import type { ButtonProps } from "./Button.types";
import styles from "./Button.module.css";
import clsx from "clsx";

export const Button: FC<ButtonProps> = (props) => {
  const {
    variant = "filled",
    children,
    className,
    type = "button",
    onClick,
    icon,
    style,
    disabled,
  } = props;

  return (
    <button
      className={clsx(styles.button, styles[variant], className)}
      type={type}
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      {icon && <span className={clsx(styles.icon)}>{icon}</span>}
      {children}
    </button>
  );
};
