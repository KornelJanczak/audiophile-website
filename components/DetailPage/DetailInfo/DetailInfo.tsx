import { IPropsDetailInfo } from "@/models/@type-props";
import classes from "./DetailInfo.module.css";

const DetailInfo: React.FC<IPropsDetailInfo> = ({ features, includes }) => {
  return (
    <div className={classes.container}>
      <div className={classes.features}>
        <h3>FEATURES</h3>
        <span className={classes.text}>{features}</span>
      </div>
      <div className={classes.ul__box}>
        <h3>IN THE BOX</h3>
        <ul>
          {includes.map((include, i) => (
            <li key={i}>
              <strong>{include.quantity}x</strong>
              <p className="text">{include.item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DetailInfo;
