import type { FC } from "react";
import type { ButtonProps } from "./type";
import styles from "./Button.module.css";

const Button: FC<ButtonProps> = (props) => {
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
      className={`${styles.button} ${styles[variant]} ${className}`}
      type={type}
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
