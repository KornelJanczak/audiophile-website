"use client";
import { IPropsDetailProduct } from "@/models/@type-props";
import classes from "./DetailProduct.module.css";
import Button from "@/components/UI/Button/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useCart from "@/hooks/use-cart";
import Counter from "@/components/UI/Counter/Counter";
import ResponsiveImage from "@/components/UI/ResponsiveImage";

const DetailProduct: React.FC<IPropsDetailProduct> = ({
  _id,
  name,
  description,
  price,
  isNew,
  image,
}) => {
  
  const [count, setCount] = useState<number>(1);
  const { addItem } = useCart();
  const router = useRouter();

  return (
    <>
      <button onClick={() => router.back()} className={classes.back__btn}>
        Go back
      </button>
      <div className={classes.detail__container}>
        <ResponsiveImage
          width={540}
          height={560}
          altText={name}
          imgClassName={classes.img}
          pictureClassName={classes.picture}
          images={{
            desktop: image.desktop.slice(1),
            mobile: image.mobile.slice(1),
            tablet: image.tablet.slice(1),
          }}
        />
        <div className={classes.detail__content}>
          {isNew && <span>NEW PRODUCT</span>}
          <h2>{name}</h2>
          <p>{description}</p>
          <strong>{"$ " + price.toLocaleString("en-US")}</strong>
          <div className={classes.detail__add__to__cart}>
            <Counter
              onInc={() => setCount((count) => count + 1)}
              onDec={() => setCount((count) => (count === 1 ? 1 : count - 1))}
              count={count}
            />
            <Button
              style={classes.detail__btn}
              type="submit"
              onClick={() =>
                addItem({
                  id: _id,
                  name: name,
                  price: price,
                  totalPrice: price,
                  quantity: count,
                  image: image,
                })
              }
            >
              ADD TO CART
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
