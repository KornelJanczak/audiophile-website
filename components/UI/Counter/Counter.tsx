import { IPropsCounter } from "@/models/@type-props";
import classes from "./Counter.module.css";

const Counter: React.FC<IPropsCounter> = ({
  className,
  onInc,
  onDec,
  count,
}) => {
  return (
    <div className={`${classes.container} ${className}`}>
      <button onClick={onDec}>-</button>
      <input type="number" min={1} value={count} disabled />
      <button onClick={onInc}>+</button>
    </div>
  );
};

export default Counter;
