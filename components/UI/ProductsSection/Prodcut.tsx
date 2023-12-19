"use client";
import classes from "./Product.module.css";
import { IPropsProducts } from "@/models/@type-props";
import Image from "next/image";
import arrowImage from "../../../public/assets/shared/desktop/icon-arrow-right.svg";
import Link from "next/link";
import { motion } from "framer-motion";
import { lazy } from "react";

const Product: React.FC<IPropsProducts> = ({ img, title }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <Link
        href={`/categories/${title.toLowerCase()}`}
        className={classes.product}
      >
        <div className={classes.product__img__box}>
          <Image
            src={img}
            alt={title}
            width={170}
            height={160}
            className={classes.product__img}
          ></Image>
        </div>
        <div className={classes.product__content}>
          <span className={classes.product__text}>{title}</span>

          <button className={classes.product__btn}>
            SHOP
            <Image
              src={arrowImage}
              alt="arrow"
              width={5}
              height={10}
              className={classes.product__btn__img}
            ></Image>
          </button>
        </div>
      </Link>
    </motion.div>
  );
};

export default Product;
