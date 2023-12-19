import { IPropsButton } from "@/models/@type-props";
import classes from "./Button.module.css";
import { Triangle } from "react-loader-spinner";

const Button: React.FC<IPropsButton> = ({
  children,
  style,
  onClick,
  type,
  disabled,
  isPending = false,
}) => {
  return (
    <button
      onClick={onClick}
      type={type as any}
      className={`${classes.button} ${style} ${
        disabled ? classes.button__off : ""
      }`}
      disabled={disabled ? disabled : false}
    >
      {isPending ? (
        <Triangle color="#101010" width={35} height={35} />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
