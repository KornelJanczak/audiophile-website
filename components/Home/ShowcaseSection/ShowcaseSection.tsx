import Button from "@/components/UI/Button/Button";
import classes from "./ShowcaseSection.module.css";
import speakerImg from "../../../public/assets/home/desktop/image-speaker-zx9.png";
import earphonesImg from "../../../public/assets/home/desktop/image-earphones-yx1.jpg";

import Image from "next/image";

const ShowcaseSection: React.FC = () => {
  return (
    <section className={classes.showcase__section}>
      <div className={classes.showcase__speaker}>
        <div className={classes.showcase__speaker__img__box}>
          <Image
            src={speakerImg}
            alt="speaker"
            className={classes.speaker__img}
            width={410}
            height={493}
          />
        </div>
        <div className={classes.showcase__speaker__content__box}>
          <h2>ZX9 SPEAKER</h2>
          <span>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </span>
          <Button style={classes.showcase__btn}>SEE PRODUCT</Button>
        </div>
      </div>
      <div className={classes.showcase__second__speaker}>
        <div className={classes.showcase__second__content__box}>
          <h3>ZX7 SPEAKER</h3>
          <Button style={classes.showcase__second__btn}>SEE PRODUCT</Button>
        </div>
      </div>
      <div className={classes.showcase__third__earphones}>
        <Image
          src={earphonesImg}
          alt="earphones"
          width={540}
          height={320}
          className={classes.showcase__third__img}
        />

        <div className={classes.showcase__third__content__box}>
          <h3>YX1 EARPHONES</h3>
          <Button style={classes.showcase__second__btn}>SEE PRODUCT</Button>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
