import { IPropsDetailOthers } from "@/models/@type-props";
import classes from "./DetailOthers.module.css";
import Button from "@/components/UI/Button/Button";
import { useRouter } from "next/navigation";
import ResponsiveImage from "@/components/UI/ResponsiveImage";

const DetailOthers: React.FC<IPropsDetailOthers> = ({ others }) => {
  const router = useRouter();
  return (
    <div className={classes.container}>
      {others.map((other, i) => (
        <div className={classes.box} key={i}>
          <ResponsiveImage
            width={350}
            height={318}
            altText="Other product"
            pictureClassName={classes.picture}
            imgClassName={classes.image}
            images={{
              desktop: other.image.desktop.slice(1),
              mobile: other.image.mobile.slice(1),
              tablet: other.image.tablet.slice(1),
            }}
          />
          <h5>{other.name}</h5>
          <Button
            onClick={() => router.replace(`/categories/product/${other.slug}`)}
            style={classes.btn}
          >
            SEE PRODUCT
          </Button>
        </div>
      ))}
    </div>
  );
};

export default DetailOthers;
