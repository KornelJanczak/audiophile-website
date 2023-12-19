import { IPropsDetailOthers } from "@/models/@type-props";
import classes from "./DetailOthers.module.css";
import Image from "next/image";
import Button from "@/components/UI/Button/Button";
import { useRouter } from "next/navigation";

const DetailOthers: React.FC<IPropsDetailOthers> = ({ others }) => {
  const router = useRouter();
  return (
    <div className={classes.container}>
      {others.map((other, i) => (
        <div className={classes.box} key={i}>
          <Image
            src={require(("../../../public/" +
              other.image.desktop.slice(2)) as string)}
            alt={other.name}
            loading="lazy"
            placeholder="blur"
            width={350}
            height={318}
            className={classes.image}
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
