import { IPropsNode } from "@/models/@type-props";
import classes from "./CategoryItem.module.css";
import { motion } from "framer-motion";
import { scrollVariants } from "@/animations/animations";

const CategoryItem: React.FC<IPropsNode> = ({ children }) => {
  return (
    <motion.div
      className={classes.category__item}
      variants={scrollVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default CategoryItem;
