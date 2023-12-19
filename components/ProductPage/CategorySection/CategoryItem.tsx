import { IPropsNode, IPropsProduct } from "@/models/@type-props";
import classes from "./CategoryItem.module.css";

const CategoryItem: React.FC<IPropsNode> = ({ children }) => {
  return <div className={classes.category__item}>{children}</div>;
};

export default CategoryItem;
