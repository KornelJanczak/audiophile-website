"use client";
import classes from "./ProductsSection.module.css";
import Product from "./Product";
import { motion } from "framer-motion";

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
  const productsContainer = (
    <div className={classes.products}>
      {products.map((product, i) => (
        <Product key={i} img={product.img} title={product.title} />
      ))}
    </div>
  );

  if (mobileClass)
    return (
      <motion.section
        className={`${classes.products__section} ${mobileClass}`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: "0rem" }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        style={{ zIndex: 2 }}
      >
        {productsContainer}
      </motion.section>
    );

  if (!mobileClass)
    return (
      <section className={classes.products__section}>
        {productsContainer}
      </section>
    );
};

export default ProductsSection;
