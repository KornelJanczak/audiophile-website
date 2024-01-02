import OrderConfIcon from "@/public/Icons/OrderConfIcon";
import classes from "./CheckoutModal.module.css";
import Button from "../../UI/Button/Button";
import useCart from "@/hooks/use-cart";
import Overlay from "../../UI/Overlay";

import { ICartData } from "@/models/@type-props";
import { renameProduct } from "@/helpers/algorithm";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import ResponsiveImage from "@/components/UI/ResponsiveImage";

const CheckoutModal: React.FC = () => {
  const { items, shipping, total, removeAll } = useCart();
  const router = useRouter();

  const prodcuthWithHigherPrice: ICartData = items.reduce(
    (maxProduct, currentProduct) =>
      currentProduct.price > maxProduct.price ? currentProduct : maxProduct,
    items[0]
  );

  console.log(prodcuthWithHigherPrice);

  const productName = renameProduct(
    prodcuthWithHigherPrice ? prodcuthWithHigherPrice.name : ""
  );

  const grandTotal = total + shipping;
  return (
    <Overlay position={{ top: 0, left: 0 }} delay={0.85}>
      <motion.dialog
        className={classes.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.85 }}
      >
        <div className={classes.content__container}>
          <OrderConfIcon />
          <h3>THANK YOU FOR YOUR ORDER</h3>
          <p>You will receive an email confirmation shortly.</p>
        </div>
        {items.length > 0 && (
          <div className={classes.info__container}>
            <div className={classes.items__summary}>
              <div className={classes.item}>
                <ResponsiveImage
                  width={50}
                  height={50}
                  altText={prodcuthWithHigherPrice.name}
                  images={{
                    desktop: prodcuthWithHigherPrice.image.desktop.slice(1),
                  }}
                  imgClassName={classes.image}
                  pictureClassName={classes.image}
                />
                <div className={classes.item__info}>
                  <h3>{productName}</h3>
                  <span>
                    ${prodcuthWithHigherPrice.price.toLocaleString("en-US")}
                  </span>
                </div>
                <span className={classes.quantity}>
                  x{prodcuthWithHigherPrice.quantity}
                </span>
              </div>
              {items.length > 1 && (
                <p className={classes.others}>
                  and {items.length - 1} other items(s)
                </p>
              )}
            </div>
            <div className={classes.total__summary}>
              <span>GRAND TOTAL</span>
              <strong>${grandTotal.toLocaleString("en-US")}</strong>
            </div>
          </div>
        )}
        <Button
          style={classes.btn}
          onClick={() => {
            router.push("/");
            removeAll();
          }}
        >
          BACK TO HOME
        </Button>
      </motion.dialog>
    </Overlay>
  );
};

export default CheckoutModal;
