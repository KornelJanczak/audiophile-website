import { IPropsDetailInfo } from "@/models/@type-props";
import classes from "./DetailInfo.module.css";
import { motion } from "framer-motion";
import { scrollVariants } from "@/animations/animations";

const DetailInfo: React.FC<IPropsDetailInfo> = ({ features, includes }) => {
  return (
    <motion.div
      className={classes.container}
      variants={scrollVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.6 }}
    >
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
    </motion.div>
  );
};

export default DetailInfo;
