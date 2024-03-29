"use client";
import useCart from "@/hooks/use-cart";
import classes from "./CheckoutItems.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { renameProduct } from "@/helpers/algorithm";
import Button from "../../UI/Button/Button";
import axios from "axios";
import { ICartData } from "@/models/@type-props";
import TrashIcon from "@/public/Icons/TrashIcon";
import { toast } from "sonner";
import CheckoutModal from "../CheckoutModal/CheckoutModal";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import ResponsiveImage from "@/components/UI/ResponsiveImage";
import BackButton from "@/components/UI/BackButton/BackButton";
import NoContent from "@/components/UI/NoContentCard/NoContent";
import { useSession } from "next-auth/react";

const CheckoutItems: React.FC = () => {
  const { items, total, shipping, removeItem, removeAll } = useCart();
  const [cartData, setCartData] = useState<ICartData[]>([]);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);
  const router = useRouter();
  const session = useSession();
  const searchParams = useSearchParams();

  //Fix SSR Error
  useEffect(() => {
    if (!items) return;
    setCartData(items);
  }, [items]);

  useEffect(() => {
    if (searchParams.get("success")) {
      setModal(true);
    }

    if (searchParams.get("canceled")) {
      toast.error("Something went wrong!");
    }
  }, [searchParams, removeAll]);

  const grandTotal = total + shipping;

  const onCheckOut = async () => {
    setIsPending(true);
    console.log(session);
    
    if (session.status === "unauthenticated") router.push("/sign-in");
    try {
      const response = await axios.post("/api/checkout", items);
      window.location = response.data.url;
      setIsPending(false);
    } catch (err) {
      console.error(err);
      setIsPending(false);
    }
  };

  return (
    <>
      {modal && <CheckoutModal />}
      <section className={classes.checkout}>
        <BackButton padding="18.8rem 0rem 6rem 0rem" />
        <AnimatePresence mode="wait">
          {cartData.length === 0 && (
            <NoContent
              content="Your shopping cart is empty!"
              btnContent="CONTINUE SHOPPING"
            />
          )}
          {cartData.length > 0 && (
            <motion.div
              className={classes.container}
              transition={{ duration: 0.2 }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: -10 },
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className={classes.cart__container}>
                <h2>CHECKOUT</h2>
                <motion.ul
                  className={classes.product__container}
                  variants={{
                    visible: { transition: { staggerChildren: 0.15 } },
                  }}
                  exit={{ opacity: 0, y: -20 }}
                  key="list"
                >
                  <AnimatePresence>
                    {cartData.map((item) => {
                      const itemName = renameProduct(item.name);
                      return (
                        <motion.li
                          className={classes.product__box}
                          key={item.id}
                          variants={{
                            hidden: { opacity: 0, y: -20 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          initial="hidden"
                          animate="visible"
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.2 }}
                          layout
                        >
                          <ResponsiveImage
                            images={{
                              desktop: item.image.desktop.slice(1),
                            }}
                            width={125}
                            height={125}
                            altText={item.name}
                            imgClassName={classes.item_image}
                            pictureClassName={""}
                          />
                          <div className={classes.product__content}>
                            <h3>{itemName}</h3>
                            <p>$ {item.price}</p>
                            <button
                              className={classes.del__btn}
                              onClick={() => removeItem(item.id)}
                            >
                              <TrashIcon />
                              Delete
                            </button>
                          </div>
                          <span>x{item.quantity}</span>
                        </motion.li>
                      );
                    })}
                  </AnimatePresence>
                </motion.ul>
              </div>
              <div className={classes.summary__container}>
                <h2>SUMMARY</h2>
                <ul>
                  <li className={classes.text}>
                    <span> TOTAL: </span>
                    <strong>${total.toLocaleString("en-US")}</strong>
                  </li>
                  <li className={classes.text}>
                    <span> SHIPPING: </span>
                    <strong>${shipping.toLocaleString("en-US")}</strong>
                  </li>
                  <li className={classes.text}>
                    <span> VAT(INCLUDED): </span>
                    <strong>
                      ${(grandTotal * 0.2).toLocaleString("en-US")}
                    </strong>
                  </li>
                  <li className={classes.grand__total}>
                    <span> GRAND TOTAL:</span>
                    <strong> ${grandTotal.toLocaleString("en-US")}</strong>
                  </li>
                </ul>
                <Button
                  onClick={() => onCheckOut()}
                  style={classes.btn}
                  disabled={isPending}
                  isPending={isPending}
                >
                  CONTINUE & PAY
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default CheckoutItems;
