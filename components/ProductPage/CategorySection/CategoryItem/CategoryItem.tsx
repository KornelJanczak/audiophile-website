import classes from "./CategoryItem.module.css";
import ScrollWrapper from "@/animations/ScrollWrapper";

const CategoryItem: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ScrollWrapper className={classes.category__item}>{children}</ScrollWrapper>
  );
};

export default CategoryItem;
