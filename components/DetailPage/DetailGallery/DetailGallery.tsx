"use client"
import { IPropsDetailGallery } from "@/models/@type-props";
import classes from "./DetailGallery.module.css";
import ResponsiveImage from "@/components/UI/ResponsiveImage";
import { motion } from "framer-motion";
import { scrollVariants } from "@/animations/animations";

const DetailGallery: React.FC<IPropsDetailGallery> = ({ gallery }) => {
  return (
    <motion.div
      className={classes.container}
      variants={scrollVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.6 }}
    >
      <div className={classes.img__box}>
        <ResponsiveImage
          width={445}
          height={280}
          altText="First gallery image"
          images={{
            desktop: gallery.first.desktop.slice(1),
            mobile: gallery.first.mobile.slice(1),
            tablet: gallery.first.tablet.slice(1),
          }}
          pictureClassName={classes.picture}
          imgClassName={classes.img}
        />

        <ResponsiveImage
          width={445}
          height={280}
          altText="Second gallery image"
          images={{
            desktop: gallery.second.desktop.slice(1),
            mobile: gallery.second.mobile.slice(1),
            tablet: gallery.second.tablet.slice(1),
          }}
          pictureClassName={classes.picture}
          imgClassName={classes.img}
        />
      </div>
      <ResponsiveImage
        width={635}
        height={592}
        altText="Third gallery image"
        pictureClassName={classes.picture__big}
        imgClassName={classes.img__big}
        images={{
          desktop: gallery.third.desktop.slice(1),
          mobile: gallery.third.mobile.slice(1),
          tablet: gallery.third.tablet.slice(1),
        }}
      />
    </motion.div>
  );
};

export default DetailGallery;
