import classes from "./InfoSection.module.css";
import ResponsiveImage from "../ResponsiveImage";

const InfoSection: React.FC = () => {
  return (
    <section className={classes.info__section}>
      <div className={classes.info__content__box}>
        <h2>
          BRINGING YOU THE <strong>BEST</strong> AUDIO GEAR
        </h2>
        <span>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </span>
      </div>
      <ResponsiveImage
        images={{
          desktop: "/assets/shared/desktop/image-best-gear.jpg",
          tablet: "/assets/shared/tablet/image-best-gear.jpg",
          mobile: "/assets/shared/mobile/image-best-gear.jpg",
        }}
        width={540}
        height={588}
        altText="Best gear logo"
        imgClassName={classes.info__img}
        pictureClassName={classes.picture}
      />
    </section>
  );
};

export default InfoSection;
