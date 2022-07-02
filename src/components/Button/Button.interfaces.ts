import { ReactNode } from "react";

export interface ButtonProps {
  icon?: ReactNode;
  children?: React.ReactNode;
  disabled?: boolean;
  type?: "primary" | "text";
  onClick?: () => void;
}
