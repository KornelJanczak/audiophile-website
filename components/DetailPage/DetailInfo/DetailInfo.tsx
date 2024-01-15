"use client";
import { IPropsDetailInfo } from "@/models/@type-props";
import classes from "./DetailInfo.module.css";
import ScrollWrapper from "@/animations/ScrollWrapper";

const DetailInfo: React.FC<IPropsDetailInfo> = ({ features, includes }) => {
  return (
    <ScrollWrapper className={classes.container}>
      <div className={classes.features}>
        <h3>FEATURES</h3>
        <span className={`${classes.text} text__color `}>{features}</span>
      </div>
      <div className={classes.ul__box}>
        <h3>IN THE BOX</h3>
        <ul>
          {includes.map((include, i) => (
            <li key={i}>
              <strong>{include.quantity}x</strong>
              <p className="text text__color ">{include.item}</p>
            </li>
          ))}
        </ul>
      </div>
    </ScrollWrapper>
  );
};

export default DetailInfo;
