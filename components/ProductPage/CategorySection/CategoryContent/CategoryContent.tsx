"use client";
import Button from "@/components/UI/Button/Button";
import { IPropsCategory } from "@/models/@type-props";
import classes from "./CategoryContent.module.css";
import { useRouter } from "next/navigation";

const CategoryContent: React.FC<IPropsCategory> = ({
  title,
  isNew,
  description,
  slug,
}) => {
  const router = useRouter();

  return (
    <div className={classes.content_box}>
      {isNew && <span>NEW PRODUCT</span>}
      <h2>{title}</h2>
      <p className="text__color ">{description}</p>

      <Button
        style={classes.btn}
        onClick={() => router.push(`/categories/product/${slug}`)}
      >
        SEE PRODUCT
      </Button>
    </div>
  );
};

export default CategoryContent;
