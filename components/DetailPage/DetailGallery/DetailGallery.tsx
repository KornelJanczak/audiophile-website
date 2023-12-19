import { IPropsDetailGallery } from "@/models/@type-props";
import classes from "./DetailGallery.module.css";
import Image from "next/image";

const DetailGallery: React.FC<IPropsDetailGallery> = ({ gallery }) => {
  const imgFirst = require("../../../public/" +
    gallery.first.desktop.slice(2)) as string;

  const imgSecond = require("../../../public/" +
    gallery.second.desktop.slice(2)) as string;

  const imgThird = require("../../../public/" +
    gallery.third.desktop.slice(2)) as string;

  return (
    <div className={classes.container}>
      <div className={classes.img__box}>
        <Image
          src={imgFirst}
          alt="gallery-first"
          width={445}
          height={280}
          placeholder="blur"
          loading="lazy"
          className={classes.img}
        />
        <Image
          src={imgSecond}
          alt="gallery-second"
          width={445}
          height={280}
          placeholder="blur"
          loading="lazy"
          className={classes.img}
        />
      </div>
      <Image
        src={imgThird}
        alt="gallery-third"
        width={635}
        height={592}
        placeholder="blur"
        loading="lazy"
        className={classes.img__big}
      />
    </div>
  );
};

export default DetailGallery;
