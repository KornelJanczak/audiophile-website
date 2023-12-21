"use client";
import classes from "./ProductsSection.module.css";
import Product from "./Product";

const products = [
  {
    img: "/assets/shared/desktop/image-category-thumbnail-headphones.png",

    title: "HEADPHONES",
  },
  {
    img: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
    title: "SPEAKERS",
  },
  {
    img: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
    title: "EARNPHONES",
  },
];

const ProductsSection: React.FC<{ mobileClass?: string }> = ({
  mobileClass,
}) => {
  return (
    <section className={`${classes.products__section} ${mobileClass}`}>
      <div className={classes.products}>
        {products.map((product, i) => (
          <Product key={i} img={product.img} title={product.title} />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
