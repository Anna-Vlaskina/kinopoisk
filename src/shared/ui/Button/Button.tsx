import type { FC } from "react";
import type { ButtonProps } from "./type";
import styles from "./Button.module.css";

const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    variant = "filled",
    type = "button",
    onClick,
    icon,
    style,
    disabled,
  } = props;

  const buttonClasses = [styles.button, styles[variant], disabled && styles.disabled, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={buttonClasses}
      type={type}
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{children}</span>
    </button>
  );
};

export default Button;
