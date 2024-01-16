"use client";
import classes from "./ProductsSection.module.css";
import Product from "./Product";
import { motion } from "framer-motion";
import FadeInWrapper from "@/animations/FadeInWrapper";

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

const ProductsSection: React.FC<{
  mobileClass?: string;
  productClass?: string;
}> = ({ mobileClass, productClass }) => {
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
        <div className={classes.products}>
          {products.map((product, i) => (
            <Product
              key={i}
              img={product.img}
              title={product.title}
              index={i}
              className={productClass}
            />
          ))}
        </div>
      </motion.section>
    );

  if (!mobileClass)
    return (
      <section
        className={`${classes.products__section} ${classes.product__mobile}`}
      >
        <div className={classes.products}>
          {products.map((product, i) => (
            <FadeInWrapper index={i} key={i}>
              <Product img={product.img} title={product.title} index={i} />
            </FadeInWrapper>
          ))}
        </div>
      </section>
    );
};

export default ProductsSection;
