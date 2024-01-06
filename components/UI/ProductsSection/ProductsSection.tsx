"use client";
import classes from "./ProductsSection.module.css";
import Product from "./Product";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "@/animations/animations";

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
            />
          ))}
        </div>
      </motion.section>
    );

  if (!mobileClass)
    return (
      <section className={classes.products__section}>
        <div className={classes.products}>
          {products.map((product, i) => (
            <motion.div
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              custom={i}
              whileHover={{ scale: 1.1, transition: { duration: 0.25 } }}
              viewport={{ once: true }}
              key={i}
            >
              <Product
                key={i}
                img={product.img}
                title={product.title}
                index={i}
              />
            </motion.div>
          ))}
        </div>
      </section>
    );
};

export default ProductsSection;
