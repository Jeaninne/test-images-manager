import * as React from "react";
import {LoaderCircle} from "./Loader";

interface ButtonProps {
  label?: string;
  disabled?: boolean;
  isLoading?: boolean;
  type?: "primary" | "secondary";
  onClick?: (e?: any) => void;
}

const Button: React.FC<ButtonProps> = ({label, type, isLoading = false, disabled = false, onClick}) => {
  const className = `Button Button${type ? `--${type}` : ""}`;
  return (
    <button className={className} onClick={onClick} disabled={isLoading || disabled}>
      {isLoading ? <LoaderCircle size={"s"} /> : <span>{label}</span>}
    </button>
  );
};

export default Button;
