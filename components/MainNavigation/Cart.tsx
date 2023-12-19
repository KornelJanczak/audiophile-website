import useCart from "@/hooks/use-cart";
import Button from "../UI/Button/Button";
import classes from "./Cart.module.css";
import Counter from "../UI/Counter/Counter";
import Image from "next/image";
import { renameProduct } from "@/helpers/algorithm";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const Cart: React.FC = () => {
  const { items, total, removeAll, decIitem, incItem } = useCart();
  const router = useRouter();

  return (
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
      <div className={classes.header__box}>
        <h3>CART({items.length})</h3>
        <span onClick={() => removeAll()}>Remove all</span>
      </div>

      <AnimatePresence mode="wait">
        {items.length > 0 && (
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
                      hidden: { opacity: 0, y: -20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    layout
                  >
                    <Image
                      src={
                        require("../../public/" +
                          item.image.desktop.slice(2)) as string
                      }
                      width={64}
                      height={64}
                      alt={item.name}
                      className={classes.img}
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

        {items.length === 0 && (
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
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
  );
};

export default Cart;
