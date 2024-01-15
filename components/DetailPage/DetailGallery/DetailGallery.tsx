"use client";
import { IPropsDetailGallery } from "@/models/@type-props";
import classes from "./DetailGallery.module.css";
import ResponsiveImage from "@/components/UI/ResponsiveImage";
import ScrollWrapper from "@/animations/ScrollWrapper";

const DetailGallery: React.FC<IPropsDetailGallery> = ({ gallery }) => {
  return (
    <ScrollWrapper className={classes.container}>
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
    </ScrollWrapper>
  );
};

export default DetailGallery;
