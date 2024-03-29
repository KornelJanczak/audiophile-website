"use client";
import classes from "./MainNavigation.module.css";
import NavigationUL from "../../UI/NavigationUL/NavigationUL";
import UserIcon from "@/public/Icons/UserIcon";
import { useState } from "react";
import Cart from "../Cart/Cart";
import Overlay from "@/components/UI/Overlay";
import { useSession } from "next-auth/react";
import UserPanel from "../UserPanel/UserPanel";
import Logo from "../../UI/Logo/Logo";
import { AnimatePresence } from "framer-motion";
import HamburgerIcon from "@/public/Icons/HamburgerIcon";
import ProductsSection from "../../UI/ProductsSection/ProductsSection";
import CartIcon from "@/public/Icons/CartIcon";
import { useRouter } from "next/navigation";

export default function MainNavigation() {
  const { data: session } = useSession();
  const [cart, setCart] = useState<boolean>(false);
  const [userPanel, setUserPanel] = useState<boolean>(false);
  const [mobileNav, setMobileNav] = useState<boolean>(false);
  const router = useRouter();

  return (
    <header className={classes.header}>
      <div className="p-0-4">
        <nav
          className={`${classes.nav}  ${
            (cart || userPanel) && classes.nav__border
          }`}
        >
          <button
            className={classes.mobile__nav__btn}
            onClick={() => {
              setMobileNav((mobileNav) => !mobileNav);
              setCart(false);
              setUserPanel(false);
            }}
          >
            <HamburgerIcon />
          </button>
          <Logo className={classes.main_logo} />
          <NavigationUL className={classes.nav__ul} />
          <div className={classes.icons}>
            {session ? (
              <button
                onClick={() => {
                  setCart(false);
                  setMobileNav(false);
                  setUserPanel((panel) => !panel);
                }}
              >
                <UserIcon />
              </button>
            ) : (
              <button onClick={() => router.push("/sign-in")}>
                <UserIcon />
              </button>
            )}
            <button
              className={classes.cart__btn}
              onClick={() => {
                setUserPanel(false);
                setMobileNav(false);
                setCart((cart) => !cart);
              }}
            >
              <CartIcon />
            </button>
          </div>
          <AnimatePresence>
            {userPanel && <UserPanel closePanel={() => setUserPanel(false)} />}
          </AnimatePresence>
          <AnimatePresence>
            {cart && <Cart closeCart={() => setCart(false)} />}
          </AnimatePresence>
          <AnimatePresence>
            {mobileNav && (
              <>
                <Overlay
                  position={{ top: "9.8rem", left: 0 }}
                  onOverlay={() => setMobileNav(false)}
                />

                <ProductsSection
                  mobileClass={classes.responsive__nav}
                  productClass={classes.productClass}
                />
              </>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
}
