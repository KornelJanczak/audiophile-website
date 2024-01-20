import useCart from "@/hooks/use-cart";
import Button from "../../UI/Button/Button";
import classes from "./Cart.module.css";
import Counter from "../../UI/Counter/Counter";
import { renameProduct } from "@/helpers/algorithm";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import ResponsiveImage from "@/components/UI/ResponsiveImage";
import Overlay from "@/components/UI/Overlay";

const Cart: React.FC<{ closeCart: () => void }> = ({ closeCart }) => {
  const { items, total, removeAll, decIitem, incItem } = useCart();
  const router = useRouter();

  return (
    <>
      <Overlay position={{ top: "9.8rem", left: 0 }} onOverlay={closeCart} />
      <motion.div
        className={classes.container}
        transition={{ duration: 0.25 }}
        variants={{
          hidden: { opacity: 0, y: -35 },
          visible: { opacity: 1, y: -10 },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <div className={classes.header__box}>
          <h3>CART({items.length})</h3>
          <span onClick={() => removeAll()}>Remove all</span>
        </div>

        <AnimatePresence mode="wait">
          {items.length && (
            <motion.ul
              className={classes.item__container}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
              exit={{ opacity: 0, y: -20 }}
              key="list"
            >
              <AnimatePresence>
                {items.map((item) => {
                  const itemName = renameProduct(item.name);
                  return (
                    <motion.li
                      className={classes.product}
                      key={item.id}
                      variants={{
                        hidden: { opacity: 0, y: -10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      layout
                    >
                      <ResponsiveImage
                        images={{
                          desktop: item.image.desktop.slice(1),
                          mobile: item.image.mobile.slice(1),
                          tablet: item.image.mobile.slice(1),
                        }}
                        altText={item.name}
                        imgClassName={classes.img}
                        width={64}
                        height={64}
                      />
                      <div className={classes.product__content}>
                        <h3>{itemName}</h3>
                        <span>$ {item.price.toLocaleString("en-US")}</span>
                      </div>
                      <Counter
                        className={classes.counter}
                        onInc={() => incItem({ ...item })}
                        onDec={() => decIitem({ ...item })}
                        count={item.quantity}
                      />
                    </motion.li>
                  );
                })}
              </AnimatePresence>
            </motion.ul>
          )}

          {!items.length && (
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              key="fallback"
              className={classes.empty__cart}
            >
              Cart is empty!
            </motion.p>
          )}
        </AnimatePresence>

        <div className={classes.item__total}>
          <span>TOTAL</span>
          <strong>$ {total.toLocaleString("en-US")}</strong>
        </div>
        <Button style={classes.btn} onClick={() => router.push("/checkout")}>
          CHECKOUT
        </Button>
      </motion.div>
    </>
  );
};

export default Cart;
