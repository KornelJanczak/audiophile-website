"use client";
import Button from "@/components/UI/Button/Button";
import classes from "./ShowcaseSection.module.css";
import ResponsiveImage from "@/components/UI/ResponsiveImage";
import { useRouter } from "next/navigation";
import ScrollWrapper from "@/animations/ScrollWrapper";

const ShowcaseSection: React.FC = () => {
  const router = useRouter();
  return (
    <section className={classes.showcase__section}>
      <ScrollWrapper className={classes.showcase__speaker}>
        <div className={classes.showcase__speaker__img__box}>
          <ResponsiveImage
            imgClassName={classes.speaker__img}
            pictureClassName={classes.speaker__img}
            images={{
              desktop: "/assets/home/desktop/image-speaker-zx9.png",
              mobile: "/assets/home/mobile/image-speaker-zx9.png",
              tablet: "/assets/home/tablet/image-speaker-zx9.png",
            }}
            altText="Speaker ZX9"
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
          <Button
            style={classes.showcase__btn}
            onClick={() => router.push("/categories/product/zx9-speaker")}
          >
            SEE PRODUCT
          </Button>
        </div>
      </ScrollWrapper>
      <ScrollWrapper className={classes.showcase__second__speaker}>
        <div className={classes.showcase__second__content__box}>
          <h3>ZX7 SPEAKER</h3>
          <Button
            style={classes.showcase__second__btn}
            onClick={() => router.push("/categories/product/zx7-speaker")}
          >
            SEE PRODUCT
          </Button>
        </div>
      </ScrollWrapper>
      <ScrollWrapper className={classes.showcase__third__earphones}>
        <ResponsiveImage
          imgClassName={classes.showcase__third__img}
          pictureClassName={classes.showcase__third__img}
          images={{
            desktop: "/assets/home/desktop/image-earphones-yx1.jpg",
            mobile: "/assets/home/mobile/image-earphones-yx1.jpg",
            tablet: "/assets/home/tablet/image-earphones-yx1.jpg",
          }}
          width={540}
          height={320}
          altText="Earphones YX1"
        />

        <div className={classes.showcase__third__content__box}>
          <h3>YX1 EARPHONES</h3>
          <Button
            style={classes.showcase__second__btn}
            onClick={() => router.push("/categories/product/yx1-earphones")}
          >
            SEE PRODUCT
          </Button>
        </div>
      </ScrollWrapper>
    </section>
  );
};

export default ShowcaseSection;
