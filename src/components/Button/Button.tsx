import { FC } from "react";
import { ButtonProps } from "./Button.interfaces";
import "./Button.styles.css";

const Button: FC<ButtonProps> = ({
  icon,
  children,
  disabled,
  type,
  onClick,
}) => {
  let className = `btn`;

  if (type === "text") {
    className += ` btn--text`;
  }

  if (disabled) {
    className += ` btn--disabled`;
  }

  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {icon}
      {children && <span>{children}</span>}
    </button>
  );
};

export default Button;
