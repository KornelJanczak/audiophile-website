"use client";
import React from "react";
import classes from "./HeroSection.module.css";
import heroImg from "../../../public/assets/home/desktop/image-hero.jpg";
import Image from "next/image";
import Button from "../../UI/Button/Button";

const HeroSection: React.FC = () => {
  return (
    <section
      className={classes.hero__section}
      style={{ backgroundImage: `${heroImg}` }}
    >
      <div className={classes.hero}>
        <div className={classes.hero__text__box}>
          <p className={classes.hero__span}>NEW PRODUCT</p>
          <h1 className={classes.hero__h1}>XX99 MARK II HEADPHONES</h1>
          <p className={classes.hero__text}>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button style={classes.btn__hero}>SEE PRODUCT</Button>
        </div>
        <div className={classes.hero__img__box}>
          {/* <Image
            src={heroImg}
            alt="hero-img"
            height={0}
            width={0}
            className={classes.hero__img}
          /> */}
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
