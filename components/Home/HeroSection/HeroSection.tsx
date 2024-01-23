"use client";
import React, { useEffect, useState } from "react";
import classes from "./HeroSection.module.css";
import Button from "../../UI/Button/Button";
import ResponsiveImage from "@/components/UI/ResponsiveImage";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { HeroMobileVariants, HeroVariants } from "@/animations/animations";

const mobile = window.innerWidth < 800;

const HeroSection: React.FC = () => {
  const router = useRouter();

  return (
    <section className={classes.hero__section}>
      <motion.div
        className={classes.container}
        variants={HeroVariants}
        initial={!mobile && "initial"}
        animate={!mobile && "animate"}
      >
        <motion.div
          className={classes.hero__text__box}
          variants={mobile ? HeroMobileVariants : {}}
          initial={mobile && "initial"}
          animate={mobile && "animate"}
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
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
      </motion.div>
    </section>
  );
};
export default HeroSection;
