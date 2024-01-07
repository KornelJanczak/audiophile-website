"use client";
import React from "react";
import classes from "./HeroSection.module.css";
import Button from "../../UI/Button/Button";
import ResponsiveImage from "@/components/UI/ResponsiveImage";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  const router = useRouter();
  return (
    <section className={classes.hero__section}>
      <motion.div
      className={classes.container}
      // initial={{ y: 15 }}
      // animate={{ y: 0 }}
      // transition={{ duration: 0.45 }}
      >
        <div
          className={classes.hero__text__box}

        >
          <p className={classes.hero__span}>NEW PRODUCT</p>
          <h1 className={classes.hero__h1}>XX99 MARK II HEADPHONES</h1>
          <p className={classes.hero__text}>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button
            style={classes.btn__hero}
            onClick={() =>
              router.push("/categories/product/xx99-mark-two-headphones")
            }
          >
            SEE PRODUCT
          </Button>
        </div>
        <ResponsiveImage
          images={{
            desktop: "/assets/home/desktop/Bitmap.png",
            tablet: "/assets/home/tablet/Bitmap.png",
            mobile: "/assets/home/mobile/Bitmap.png",
          }}
          altText="Hero Logo"
          width={546}
          height={598}
          pictureClassName={classes.hero__logo}
          imgClassName={classes.hero__logo}
        />
      </motion.div>
    </section>
  );
};
export default HeroSection;
